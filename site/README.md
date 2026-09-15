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

Corrigir a skill corrige a página. É isso que impede o portal de mentir seis meses depois.

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
que mais vale e a que ninguém escreve — é o que transforma o portal de catálogo em memória de firma.

## Publicar

Cloudflare Pages, atrás do Cloudflare Access. Configuração em `wrangler.toml` e no painel:

- **Build command:** `npm run build`
- **Build output:** `site/dist`
- **Root directory:** `site`

Nenhum segredo, nenhuma variável de ambiente: o site é HTML estático e a autenticação fica no Access,
na frente. Ver `docs/PLATAFORMA.md` seção 4.
