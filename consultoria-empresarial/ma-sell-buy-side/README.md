# M&A Sell Side / Buy Side

Assessoria em fusões e aquisições sell side e buy side: convenções de mandato, tese setorial, teaser, information memorandum, segmentação de compradores, solicitação de informações, transações precedentes e negociação/LOI.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`) — é onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Status: completo.** As 9 skills do ciclo de vida sell-side estão escritas.
> Publicado em `marketplace.json`. Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz um mandato de M&A sell-side (e as etapas espelhadas de buy-side) do início ao fim: abertura e
convenções do projeto, tese setorial e estratégica, levantamento de transações precedentes, gate de
prontidão antes de ir a mercado, teaser pré-NDA, segmentação e priorização de compradores, information
memorandum, condução da solicitação de informações/data room, e a negociação até o LOI — com
handoff explícito para o plugin de valuation (`acta-modelagem-economico-financeira`) sempre que a
tese setorial ou as transações precedentes precisam virar múltiplo ou faixa de valor.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `convencoes-de-projeto` | 1 | Convenções do mandato: árvore de pastas pela ordem do processo, nomenclatura datada/versionada, quarentena de legado, codinome de projeto. |
| `estudo-setorial` | 2 | Tese setorial e estratégica em seis capítulos: reposicionamento, arcabouço regulatório, panorama de mercado, avenidas de crescimento, escala de múltiplos por arquétipo, pitch sell-side. |
| `transacoes-precedentes` | 3 | Levantamento e julgamento de transações precedentes do setor, com lógica de inclusão/exclusão de cada deal como parte do entregável. |
| `go-to-market` | 4 | Gate de prontidão de vinte itens em quatro blocos antes de levar o ativo ao mercado. |
| `teaser` | 5 | Teaser pré-NDA em sete blocos, isolando o moat defensável da paridade competitiva. |
| `segmentacao-de-compradores` | 6 | Segmentação de compradores por arquétipo de criação de valor, ranqueando quem paga mais e por quê. |
| `information-memorandum` | 7 | Arquitetura e redação do IM: arco narrativo em seis capítulos, títulos-asserção, espelhamento histórico/projetado. |
| `solicitacao-de-informacoes` | 8 | Carta de solicitação de informações ao alvo em quatro eixos, e condução das rodadas até o data room estar suficiente. |
| `negociacao-e-loi` | 9 | Negociação: quantificação de sinergia, teto de preço do comprador, estrutura de preço (CFDF, earn-out, escrow), desarme de objeções de múltiplo. |

## Fluxo típico

`convencoes-de-projeto` → `estudo-setorial` → `transacoes-precedentes` → `go-to-market` → `teaser` →
`segmentacao-de-compradores` → `information-memorandum` → `solicitacao-de-informacoes` →
`negociacao-e-loi`. Na prática, `solicitacao-de-informacoes` roda em paralelo desde cedo (o data
room alimenta `estudo-setorial`, `information-memorandum` e o plugin de valuation ao mesmo tempo).

## Convencoes

Este plugin segue as convencoes do repositorio, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Metodo transversal vive em `acta-way`; metodo da pratica, em `acta-metodo-consultoria`
ou `acta-metodo-auditoria`. Nao repita aqui o que ja esta la.
