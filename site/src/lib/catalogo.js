/**
 * Deriva o catálogo do repositório: não há catálogo escrito à mão.
 *
 * Fontes de verdade, todas fora desta pasta (ver docs/PLATAFORMA.md seção 3):
 *   .claude-plugin/marketplace.json     quais plugins estão publicados
 *   <plugin>/.claude-plugin/plugin.json nome, versão, descrição
 *   <plugin>/skills/<x>/SKILL.md        frontmatter de cada skill
 *   <plugin>/README.md                  visão geral do plugin
 *   <plugin>/projeto.md                 conteúdo editorial do projeto (opcional)
 *   docs/ROADMAP.md                     status de cada plugin
 *
 * Se algum desses mudar, o site muda no próximo build. É isso que impede o portal de mentir.
 */
import fs from 'node:fs';
import { marked } from 'marked';
import path from 'node:path';

const RAIZ = path.resolve(process.cwd(), '..');

export const REPO = 'https://github.com/guilhermegarrido7/acta-sistema-de-conhecimento';
export const MARKETPLACE = 'guilhermegarrido7/acta-sistema-de-conhecimento';

const lerJSON = (p) => JSON.parse(fs.readFileSync(p, 'utf-8'));
const existe = (p) => fs.existsSync(p);

/** Frontmatter YAML raso, com suporte apenas aos campos que as skills usam. */
export function frontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { dados: {}, corpo: texto };
  const dados = {};
  const re = /^([a-z][a-z_-]*):[ \t]*([\s\S]*?)(?=\n[a-z][a-z_-]*:|$)/gm;
  let campo;
  while ((campo = re.exec(m[1])) !== null) {
    let valor = campo[2].trim().replace(/\s+/g, ' ');
    valor = valor.replace(/\s*#.*$/, '').trim();          // comentário à direita
    valor = valor.replace(/^["'](.*)["']$/, '$1');        // aspas
    dados[campo[1]] = valor;
  }
  return { dados, corpo: texto.slice(m[0].length).trim() };
}

/** Status por plugin, lido das tabelas do ROADMAP. */
function statusDoRoadmap() {
  const p = path.join(RAIZ, 'docs', 'ROADMAP.md');
  if (!existe(p)) return {};
  const mapa = {};
  for (const linha of fs.readFileSync(p, 'utf-8').split('\n')) {
    const m = linha.match(/^\|\s*`([^`]+)`\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|/);
    if (m) mapa[m[1]] = { status: m[2], publicado: m[3].trim() === 'sim', nota: m[4] };
  }
  return mapa;
}

/** H1 do README: é o único título legível que já existe no repositório. */
function tituloDoReadme(dir) {
  const p = path.join(dir, 'README.md');
  if (!existe(p)) return '';
  const m = fs.readFileSync(p, 'utf-8').match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : '';
}

/** Primeiro parágrafo de prosa do README, para usar como resumo. */
function resumoDoReadme(dir) {
  const p = path.join(dir, 'README.md');
  if (!existe(p)) return '';
  const linhas = fs.readFileSync(p, 'utf-8').split('\n');
  const buf = [];
  for (const l of linhas.slice(1)) {
    const t = l.trim();
    if (!t) { if (buf.length) break; continue; }
    if (t.startsWith('#') || t.startsWith('>') || t.startsWith('|')) { if (buf.length) break; continue; }
    buf.push(t);
  }
  return buf.join(' ');
}

function lerSkills(dirPlugin, nomePlugin) {
  const dir = path.join(dirPlugin, 'skills');
  if (!existe(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => {
      const arq = path.join(dir, e.name, 'SKILL.md');
      if (!existe(arq)) return null;
      const bruto = fs.readFileSync(arq, 'utf-8');
      const { dados, corpo } = frontmatter(bruto);
      const esqueleto = bruto.includes('Status: esqueleto');
      const refs = path.join(dir, e.name, 'references');
      return {
        slug: e.name,
        nome: dados.name || e.name,
        descricao: dados.description || '',
        plugin: nomePlugin,
        // user-invocable: false  -> carrega por outra skill, não pelo menu
        invocavelPeloUsuario: dados['user-invocable'] !== 'false',
        // disable-model-invocation: true -> fora do roteamento e fora do custo always-on
        roteavel: dados['disable-model-invocation'] !== 'true',
        esqueleto,
        linhas: corpo.split('\n').length,
        referencias: existe(refs) ? fs.readdirSync(refs).filter((f) => f.endsWith('.md')) : [],
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.slug.localeCompare(b.slug, 'pt-BR'));
}

export function catalogo() {
  const mercado = lerJSON(path.join(RAIZ, '.claude-plugin', 'marketplace.json'));
  const roadmap = statusDoRoadmap();

  const plugins = mercado.plugins.map((entrada) => {
    const dirPlugin = path.join(RAIZ, entrada.source);
    const manifesto = lerJSON(path.join(dirPlugin, '.claude-plugin', 'plugin.json'));
    const skills = lerSkills(dirPlugin, manifesto.name);

    const lerEditorial = (arquivo) => {
      const caminho = path.join(dirPlugin, arquivo);
      if (!existe(caminho)) return null;
      const { dados, corpo } = frontmatter(fs.readFileSync(caminho, 'utf-8'));
      return { ...dados, corpo, corpoHtml: marked.parse(corpo) };
    };

    const projeto = lerEditorial('projeto.md');
    const fundamentos = lerEditorial('fundamentos.md');

    const slug = manifesto.name.replace(/^acta-/, '');

    return {
      nome: manifesto.name,
      slug,
      // O projeto.md manda quando existe; o H1 do README é o recurso para os
      // plugins que ainda não têm página editorial. O slug é só o último recurso.
      titulo: projeto?.titulo || tituloDoReadme(dirPlugin) || slug,
      versao: manifesto.version,
      descricao: entrada.description || manifesto.description,
      categoria: entrada.category,
      caminho: entrada.source,
      resumo: resumoDoReadme(dirPlugin),
      status: roadmap[manifesto.name]?.status ?? '-',
      skills,
      // Só as roteáveis custam contexto em toda sessão. É o número que decide
      // se vale a pena manter o plugin instalado.
      custoAlwaysOn: skills
        .filter((s) => s.roteavel)
        .reduce((t, s) => t + Math.round(s.descricao.length / 4), 0),
      projeto,
      fundamentos,
      instalacao: `claude plugin install ${manifesto.name}@acta-sistema-de-conhecimento --scope user`,
      repositorio: `${REPO}/tree/master/${entrada.source.replace(/^\.\//, '')}`,
    };
  });

  return { plugins, categorias: agrupar(plugins) };
}

const ROTULOS = {
  'fundacao': 'Fundação',
  'conceitos': 'Conceitos',
  'consultoria-empresarial': 'Consultoria Empresarial',
  'governanca-riscos-compliance': 'Governança, Riscos e Compliance',
};

function agrupar(plugins) {
  const ordem = ['fundacao', 'consultoria-empresarial', 'governanca-riscos-compliance', 'conceitos'];
  return ordem
    .filter((c) => plugins.some((p) => p.categoria === c))
    .map((c) => ({
      slug: c,
      rotulo: ROTULOS[c] ?? c,
      plugins: plugins.filter((p) => p.categoria === c),
    }));
}

export function todasAsSkills() {
  return catalogo().plugins.flatMap((p) =>
    p.skills.map((s) => ({ ...s, pluginSlug: p.slug, categoria: p.categoria }))
  );
}
