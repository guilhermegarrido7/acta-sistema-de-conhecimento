/**
 * Deriva o catálogo do repositório: não há catálogo escrito à mão.
 *
 * Fontes de verdade, todas fora desta pasta (ver docs/PLATAFORMA.md seção 3):
 *   .claude-plugin/marketplace.json       quais plugins estão publicados, categoria e descrição
 *   <plugin>/.claude-plugin/plugin.json   nome, versão, descrição e dependencies
 *   <plugin>/skills/<x>/SKILL.md          frontmatter de cada skill e o primeiro H1 (o título)
 *   <plugin>/skills/<x>/references/*.md   só o primeiro H1 de cada arquivo (o título)
 *   <plugin>/README.md                    H1, título de recurso quando não há projeto.md
 *   <plugin>/projeto.md                   conteúdo editorial do projeto (opcional)
 *   <plugin>/fundamentos.md               embasamento teórico do projeto (opcional)
 *   docs/ROADMAP.md                       status de cada plugin
 *
 * O portal é público. Do SKILL.md saem o frontmatter e o primeiro H1; das references, só o
 * primeiro H1. O corpo da skill e o conteúdo da referência são a metodologia em si e chegam
 * apenas a quem instala o plugin: nenhum campo devolvido por este módulo os carrega.
 *
 * Se algum desses arquivos mudar, o site muda no próximo build. É isso que impede o portal de
 * mentir.
 */
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const RAIZ = path.resolve(process.cwd(), '..');

export const REPO = 'https://github.com/guilhermegarrido7/acta-sistema-de-conhecimento';
export const MARKETPLACE = 'guilhermegarrido7/acta-sistema-de-conhecimento';

const lerJSON = (p) => JSON.parse(fs.readFileSync(p, 'utf-8'));
const existe = (p) => fs.existsSync(p);
const ehVerdadeiro = (v) => String(v ?? '').trim().toLowerCase() === 'true';
const ehFalso = (v) => String(v ?? '').trim().toLowerCase() === 'false';

/* O slug do plugin é o nome sem o prefixo acta-. A exceção é o acta-way: sem o prefixo
   sobraria "way", que não diz nada. O endereço antigo, /projetos/way, segue funcionando
   por site/public/_redirects. */
const SLUG_FIXO = { 'acta-way': 'acta-way' };

/**
 * Frontmatter YAML raso: chave: valor numa linha, valor dobrado em linhas indentadas, ou
 * bloco (> ou |). É o subconjunto que as skills e os editoriais usam; lista e objeto
 * aninhado viram texto corrido, o que basta para os campos que o portal lê.
 */
export function frontmatter(texto) {
  const m = texto.match(/^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);
  if (!m) return { dados: {}, corpo: texto };
  const partes = {};
  const emBloco = new Set();
  let chave = null;
  for (const linha of m[1].split(/\r?\n/)) {
    const campo = linha.match(/^([A-Za-z][\w-]*):(?:[ \t]+(.*))?$/);
    if (campo) {
      chave = campo[1];
      const valor = (campo[2] ?? '').trim();
      if (/^[>|][+-]?$/.test(valor)) {
        emBloco.add(chave);
        partes[chave] = [];
      } else {
        partes[chave] = [valor];
      }
      continue;
    }
    // Linha indentada continua o campo anterior.
    if (chave && /^[ \t]+\S/.test(linha)) partes[chave].push(linha.trim());
  }
  const dados = {};
  for (const [k, v] of Object.entries(partes)) {
    const junto = v.filter(Boolean).join(' ');
    dados[k] = emBloco.has(k) ? junto : limparEscalar(junto);
  }
  return { dados, corpo: texto.slice(m[0].length).trim() };
}

/** Aspas e comentário à direita, pela regra do YAML: dentro de aspas, # é texto. */
function limparEscalar(v) {
  const aspas = v.match(/^(["'])([\s\S]*?)\1(?:\s+#.*)?$/);
  if (aspas) return aspas[1] === "'" ? aspas[2].replace(/''/g, "'") : aspas[2].replace(/\\"/g, '"');
  return v.replace(/\s+#.*$/, '').trim();
}

/** Tira a marcação inline de um título em Markdown: crase, ênfase, link, HTML. */
function textoPlano(md) {
  return md
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/(\*\*|__)(.+?)\1/g, '$2')
    .replace(/(^|[^\w*])[*_]([^*_]+)[*_](?=[^\w*]|$)/g, '$1$2')
    .replace(/<[^>]+>/g, '')
    .replace(/\\([\\`*_{}[\]()#+\-.!])/g, '$1')
    .trim();
}

/**
 * Primeiro título de nível 1 de um texto em Markdown, ignorando o que estiver dentro de bloco
 * de código cercado (um "# comentário" num exemplo de shell não é título).
 */
function primeiroH1(md) {
  let cerca = null;
  for (const linha of md.split(/\r?\n/)) {
    const f = linha.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (f) {
      if (!cerca) cerca = f[1][0];
      else if (f[1][0] === cerca) cerca = null;
      continue;
    }
    if (cerca) continue;
    const h = linha.match(/^\s{0,3}#[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/);
    if (h && h[1].trim()) return textoPlano(h[1]);
  }
  return '';
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

/** H1 do README: o título legível do plugin quando ele ainda não tem projeto.md. */
function tituloDoReadme(dir) {
  const p = path.join(dir, 'README.md');
  if (!existe(p)) return '';
  return primeiroH1(fs.readFileSync(p, 'utf-8'));
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

/**
 * Divide o HTML de um editorial em blocos por H2. A página decide o que fica aberto e o que
 * entra em acordeão; aqui só se separa o conteúdo pelo título de cada seção.
 */
function dividirEmSecoes(html) {
  if (!html) return [];
  return html
    .split(/(?=<h2>)/)
    .filter((bloco) => bloco.trim())
    .map((bloco) => {
      const m = bloco.match(/^<h2>([\s\S]*?)<\/h2>/);
      return {
        titulo: m ? m[1].replace(/<[^>]+>/g, '') : '',
        html: m ? bloco.slice(m[0].length).trim() : bloco.trim(),
      };
    });
}

/* Conectivos que abrem um gatilho na description ("Acionar ao abrir..., ou quando..."). Depois
   de ", ou" a lista é mais larga, porque o "ou" já marca o último item com segurança; sem ele,
   "na" e "no" cortariam frases do meio de um item. */
const CONECTIVOS = ['ao', 'aos', 'à', 'às', 'quando', 'antes', 'depois', 'durante', 'sempre', 'após'];
const CONECTIVOS_APOS_OU = [...CONECTIVOS, 'na', 'no', 'nas', 'nos', 'em', 'se', 'para', 'diante'];
const FAMILIAS = [['na', 'no', 'nas', 'nos'], ['em', 'num', 'numa']];

/**
 * Separa a description no que a skill faz e nos gatilhos. O padrão da casa é
 * "<o que faz>. Acionar ao X, ao Y, ou ao Z." Fora do padrão, a description inteira fica
 * em oQueFaz e a lista de gatilhos sai vazia: a página mostra só a description.
 */
export function dividirDescricao(descricao) {
  const d = (descricao || '').trim();
  const m = /(^|[.!?])\s*Acionar\s+/.exec(d);
  if (!m) return { oQueFaz: d, gatilhos: [] };
  const oQueFaz = d.slice(0, m.index + m[1].length).trim();
  const lista = d.slice(m.index + m[0].length).replace(/[\s.;]+$/, '');
  // O conectivo que abre a lista também separa os itens dela ("Acionar na X, no Y, ou na Z"),
  // junto com as outras flexões da mesma contração.
  const primeiro = (lista.match(/^\p{L}+/u)?.[0] ?? '').toLowerCase();
  const familia = FAMILIAS.find((f) => f.includes(primeiro)) ?? [primeiro];
  const alt = (xs) => [...new Set(xs.filter(Boolean))].join('|');
  const corte = new RegExp(
    `\\s*;\\s+|,\\s+(?:ou|e)\\s+(?=(?:${alt(CONECTIVOS_APOS_OU)})\\s)|,\\s+(?=(?:${alt([...CONECTIVOS, ...familia])})\\s)`,
    'iu'
  );
  const gatilhos = lista
    .split(corte)
    .map((g) => g.trim().replace(/^quando\s+/i, ''))   // a página já diz "Use quando…"
    .filter(Boolean)
    .map((g) => g.charAt(0).toUpperCase() + g.slice(1));
  return { oQueFaz, gatilhos };
}

const tituloDeArquivo = (base) => {
  const t = base.replace(/[_-]+/g, ' ').trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
};

/**
 * Títulos das references de uma skill. Só o título: o conteúdo é metodologia e não sai do
 * repositório. H1 de template ("CHECKPOINT · {{CLIENTE}}") não é título, então cai para o
 * nome do arquivo.
 */
function lerReferencias(dir) {
  if (!existe(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.md$/i.test(e.name))
    .map((e) => {
      const base = e.name.replace(/\.md$/i, '');
      const { corpo } = frontmatter(fs.readFileSync(path.join(dir, e.name), 'utf-8'));
      const h1 = primeiroH1(corpo);
      return {
        arquivo: e.name,
        base,
        titulo: h1 && !h1.includes('{{') ? h1 : tituloDeArquivo(base),
        ancora: `ref-${base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`,
      };
    })
    .sort((a, b) => a.arquivo.localeCompare(b.arquivo, 'pt-BR'));
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
      const nome = dados.name || e.name;
      const descricao = dados.description || '';
      const { oQueFaz, gatilhos } = dividirDescricao(descricao);
      // disable-model-invocation: true tira a description do contexto e impede o Claude de
      // carregar a skill sozinho: ela só roda quando alguém digita /nome. É a skill "manual",
      // e é a única que não custa contexto always-on.
      const manual = ehVerdadeiro(dados['disable-model-invocation']);
      return {
        slug: e.name,
        nome,
        // O corpo é lido só para achar o primeiro H1 e não sai deste objeto.
        titulo: primeiroH1(corpo) || nome,
        descricao,
        oQueFaz,
        gatilhos,
        plugin: nomePlugin,
        // user-invocable: false só tira a skill do menu de /. A description continua no
        // contexto: o Claude ainda a carrega sozinho, e ela continua custando always-on.
        invocavelPeloUsuario: !ehFalso(dados['user-invocable']),
        roteavel: !manual,
        manual,
        esqueleto: bruto.includes('Status: esqueleto'),
        referencias: lerReferencias(path.join(dir, e.name, 'references')),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.slug.localeCompare(b.slug, 'pt-BR'));
}

/** dependencies do plugin.json como lista de nomes, aceitando string, objeto ou mapa. */
function nomesDeDependencia(deps) {
  if (!deps) return [];
  const lista = Array.isArray(deps) ? deps : typeof deps === 'object' ? Object.keys(deps) : [deps];
  return lista
    .map((d) => (typeof d === 'string' ? d : d?.name ?? d?.plugin ?? ''))
    .map((d) => String(d).trim().split('@')[0])   // "acta-way@marketplace" -> "acta-way"
    .filter(Boolean);
}

/**
 * Pós-processa o HTML de um editorial: código inline que nomeia skill ou plugin do catálogo
 * vira link. Nunca mexe dentro de <pre> nem dentro de um link que já existe.
 *   acta-x:skill  -> página da skill daquele plugin
 *   acta-x        -> página do projeto (menos o próprio, que é a página em que se está)
 *   skill         -> página da skill, se o nome for inequívoco; com o mesmo nome em mais de
 *                    um plugin, vale a do plugin atual, e sem ela não há link
 *   arquivo       -> referência de uma skill deste plugin, na âncora da página da skill
 */
function linkarCodigo(html, atual, indices) {
  if (!html) return html;
  return html
    .split(/(<pre[\s>][\s\S]*?<\/pre>|<a\s[\s\S]*?<\/a>)/i)
    .map((pedaco, i) => (i % 2 === 1
      ? pedaco
      : pedaco.replace(/<code>([^<]+)<\/code>/g, (inteiro, texto) => {
          const href = destinoDoCodigo(texto.trim(), atual, indices);
          return href ? `<a href="${href}">${inteiro}</a>` : inteiro;
        })))
    .join('');
}

function destinoDoCodigo(texto, atual, { pluginsPorNome, skillsPorSlug }) {
  const qualificado = texto.match(/^(acta-[a-z0-9-]+):([a-z0-9-]+)$/);
  if (qualificado) {
    const p = pluginsPorNome.get(qualificado[1]);
    return p?.skills.find((s) => s.slug === qualificado[2] || s.nome === qualificado[2])?.url ?? null;
  }
  const plugin = pluginsPorNome.get(texto);
  if (plugin) return plugin === atual ? null : plugin.url;
  const candidatas = skillsPorSlug.get(texto) ?? [];
  const daqui = candidatas.find((s) => s.plugin === atual.nome);
  if (daqui) return daqui.url;
  if (candidatas.length === 1) return candidatas[0].url;
  for (const s of atual.skills) {
    const r = s.referencias.find((x) => x.base === texto);
    if (r) return `${s.url}#${r.ancora}`;
  }
  return null;
}

/* Um build lê o repositório uma vez só. Além de poupar leitura, isso garante que todas as
   páginas vejam o mesmo retrato: com o conteúdo sendo editado durante o build, uma skill
   nova poderia aparecer num índice sem ganhar página. No dev, relê a cada chamada. */
let retrato = null;

export function catalogo() {
  if (retrato && !(import.meta.env && import.meta.env.DEV)) return retrato;

  const mercado = lerJSON(path.join(RAIZ, '.claude-plugin', 'marketplace.json'));
  const roadmap = statusDoRoadmap();
  const comando = (nome) => `claude plugin install ${nome}@${mercado.name} --scope user`;

  const plugins = mercado.plugins.map((entrada) => {
    const dirPlugin = path.join(RAIZ, entrada.source);
    const manifesto = lerJSON(path.join(dirPlugin, '.claude-plugin', 'plugin.json'));
    const nome = manifesto.name;
    const slug = SLUG_FIXO[nome] ?? nome.replace(/^acta-/, '');
    const categoria = entrada.category ?? 'outros';
    const ehMetodo = /(^|\/)_metodo(\/|$)/.test(entrada.source);

    const lerEditorial = (arquivo) => {
      const caminho = path.join(dirPlugin, arquivo);
      if (!existe(caminho)) return null;
      const { dados, corpo } = frontmatter(fs.readFileSync(caminho, 'utf-8'));
      return { ...dados, corpo };
    };
    const projeto = lerEditorial('projeto.md');

    return {
      nome,
      slug,
      url: `/projetos/${slug}`,
      // O projeto.md manda quando existe; o H1 do README é o recurso para os
      // plugins que ainda não têm página editorial. O slug é só o último recurso.
      titulo: projeto?.titulo || tituloDoReadme(dirPlugin) || slug,
      versao: manifesto.version,
      descricao: entrada.description || manifesto.description,
      categoria,
      caminho: entrada.source,
      // Tipo de projeto é o que a firma vende como engajamento. A fundação (acta-way), as
      // bibliotecas de conceitos e os métodos transversais (_metodo) entram no catálogo, mas
      // não contam como tipo de projeto.
      tipo: categoria === 'fundacao' ? 'fundacao'
        : categoria === 'conceitos' ? 'biblioteca'
        : ehMetodo ? 'metodo'
        : 'projeto',
      ehTipoDeProjeto: categoria !== 'fundacao' && categoria !== 'conceitos' && !ehMetodo,
      resumo: resumoDoReadme(dirPlugin),
      status: roadmap[nome]?.status ?? '-',
      skills: lerSkills(dirPlugin, nome),
      // dependencies, como declarado no plugin.json.
      requer: nomesDeDependencia(manifesto.dependencies),
      projeto,
      fundamentos: lerEditorial('fundamentos.md'),
      // Pastas de acervo que o plugin já tem (ver /benchmarking).
      acervo: ['casos', 'benchmarks'].filter((d) => existe(path.join(dirPlugin, d))),
      instalacao: comando(nome),
      repositorio: `${REPO}/tree/master/${entrada.source.replace(/^\.\//, '')}`,
    };
  });

  const pluginsPorNome = new Map(plugins.map((p) => [p.nome, p]));

  // Ordem de instalação: dependências primeiro, em profundidade e sem repetir, depois o
  // próprio plugin. Dependência fora do marketplace entra pelo nome; ciclo é ignorado.
  const ordemDe = (nome, visitando = new Set(), saida = []) => {
    if (saida.includes(nome) || visitando.has(nome)) return saida;
    visitando.add(nome);
    for (const d of pluginsPorNome.get(nome)?.requer ?? []) ordemDe(d, visitando, saida);
    visitando.delete(nome);
    saida.push(nome);
    return saida;
  };

  // Endereço de cada skill. O nome da pasta é o endereço; se dois plugins tiverem skill com o
  // mesmo nome, a segunda ganha o plugin no endereço em vez de sobrescrever a primeira.
  const skillsPorSlug = new Map();
  for (const p of plugins) {
    for (const s of p.skills) {
      const iguais = skillsPorSlug.get(s.slug) ?? [];
      s.rota = iguais.length ? `${s.slug}--${p.slug}` : s.slug;
      s.url = `/skills/${s.rota}`;
      s.pluginSlug = p.slug;
      s.pluginUrl = p.url;
      skillsPorSlug.set(s.slug, [...iguais, s]);
    }
  }

  for (const p of plugins) {
    p.ordemInstalacao = ordemDe(p.nome);
    // Tudo o que precisa estar instalado antes, inclusive dependência de dependência.
    p.requerTodos = p.ordemInstalacao.slice(0, -1).map((n) => ({ nome: n, url: pluginsPorNome.get(n)?.url ?? null }));
    p.comandosEmOrdem = p.ordemInstalacao.map(comando);
    // Só as roteáveis custam contexto em toda sessão. É o número que decide
    // se vale a pena manter o plugin instalado.
    p.custoAlwaysOn = p.skills
      .filter((s) => s.roteavel)
      .reduce((t, s) => t + Math.round(s.descricao.length / 4), 0);
  }
  for (const p of plugins) {
    p.dependentes = plugins.filter((x) => x !== p && x.ordemInstalacao.includes(p.nome)).map((x) => x.nome);
  }

  const indices = { pluginsPorNome, skillsPorSlug };
  for (const p of plugins) {
    for (const ed of [p.projeto, p.fundamentos]) {
      if (!ed) continue;
      ed.corpoHtml = linkarCodigo(marked.parse(ed.corpo), p, indices);
      ed.secoes = dividirEmSecoes(ed.corpoHtml);
    }
  }

  retrato = { plugins, categorias: agrupar(plugins), marketplace: mercado.name };
  return retrato;
}

const ROTULOS = {
  'fundacao': 'Fundação',
  'conceitos': 'Conceitos',
  'consultoria-empresarial': 'Consultoria Empresarial',
  'governanca-riscos-compliance': 'Governança, Riscos e Compliance',
};

function agrupar(plugins) {
  const ordem = ['fundacao', 'consultoria-empresarial', 'governanca-riscos-compliance', 'conceitos'];
  // Categoria nova no marketplace entra no fim, em vez de sumir do catálogo.
  const novas = [...new Set(plugins.map((p) => p.categoria))].filter((c) => !ordem.includes(c));
  return [...ordem, ...novas]
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
