# Portal de conhecimento ACTA

Site interno que dá a porta de entrada do marketplace de plugins. O desenho, o estudo de mercado e
a decisão de hospedagem estão em [`docs/PLATAFORMA.md`](../docs/PLATAFORMA.md).

## O princípio

**O site é gerado do repositório. Nada é mantido em paralelo.**

`src/lib/catalogo.js` lê, no build:

| O que aparece | De onde vem |
|---|---|
| Plugins instaláveis | `.claude-plugin/marketplace.json` |
| Nome, versão, descrição | `<plugin>/.claude-plugin/plugin.json` |
| Skills e o que cada uma faz | frontmatter de cada `SKILL.md` |
| Status (Completo / Parcial) | `docs/ROADMAP.md` |
| Custo de contexto por plugin | soma das descrições das skills roteáveis |
| Página editorial do projeto | `<plugin>/projeto.md` (opcional) |
| Embasamento teórico do plugin | `<plugin>/fundamentos.md` (opcional) |

Corrigir a skill corrige a página. É isso que impede o portal de mentir seis meses depois.

Os dois arquivos editoriais são divididos por `<h2>` no build: o primeiro bloco fica visível num
painel de destaque e os demais viram acordeão, para a página não virar parede de texto.

A única exceção ao princípio é `src/lib/terceiros.js`, a lista de skills de uso geral. Elas não são
da ACTA nem vivem no nosso marketplace, então não há de onde derivá-las.

## Rodar local

```bash
cd site
npm install
npm run dev
```

O build precisa enxergar a raiz do repositório (`process.cwd()/..`), então rode sempre de dentro de
`site/`.

## Escrever a página de um projeto

Crie `projeto.md` na pasta do plugin. Frontmatter e seções:

```markdown
---
titulo: Pesquisa Salarial
pratica: consultoria-empresarial
duracao_tipica: 10 a 14 semanas
plugin: acta-pesquisa-salarial
---

## O que é, e quando a ACTA é contratada para isso
## As etapas do ciclo de vida
## Onde este projeto dá errado
## O que se entrega
## Quem participa
## O que é preciso ter antes de começar
```

`consultoria-empresarial/pesquisa-salarial/projeto.md` é o modelo. A seção **"onde dá errado"** é a
que mais vale e a que ninguém escreve; é o que transforma o portal de catálogo em memória de firma.

## Publicar

Cloudflare, no plano gratuito. Configuração em `wrangler.toml` e no painel:

- **Build command:** `npm run build`
- **Build output:** `site/dist`
- **Root directory:** `site`

Nenhum segredo, nenhuma variável de ambiente, nenhuma autenticação. O portal é uma vitrine pública:
o que chega nele já passou pelo validador, que barra nome de cliente e de pessoa. O controle está em
quem pode publicar, não em quem pode ler. Ver `docs/PLATAFORMA.md` seção 4 e `docs/DEPLOY.md`.
