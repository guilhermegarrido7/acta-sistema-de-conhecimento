# M&A Sell Side / Buy Side

Assessoria em fusões e aquisições sell side e buy side: convenções de mandato, tese setorial, teaser, information memorandum, segmentação de compradores, solicitação de informações, transações precedentes, negociação/LOI, processo competitivo, due diligence e data room, e contrato até o fechamento.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Status: completo.** As 12 skills do ciclo de vida sell-side, da abertura do mandato ao fechamento, estão escritas.
> Publicado em `marketplace.json`. Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz um mandato de M&A sell-side (e as etapas espelhadas de buy-side) do início ao fim: abertura e
convenções do projeto, tese setorial e estratégica, levantamento de transações precedentes, gate de
prontidão antes de ir a mercado, teaser pré-NDA, segmentação e priorização de compradores, information
memorandum, solicitação de informações ao alvo, negociação e LOI, processo competitivo com as rodadas
de propostas, due diligence com o data room aberto aos compradores, e a posição econômica do contrato
de compra e venda até o fechamento e os ajustes posteriores. NDA, LOI e contrato são minutados pela
assessoria jurídica; o plugin prepara e defende a posição econômica. O handoff para o plugin de
valuation (`acta-modelagem-economico-financeira`) é explícito sempre que a tese setorial, as
precedentes, a diligência ou o mecanismo de preço precisam virar múltiplo, faixa ou número.

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
| `solicitacao-de-informacoes` | 8 | Carta de solicitação de informações ao alvo em quatro eixos, e condução das rodadas de coleta que sustentam material e valuation antes da ida a mercado. |
| `negociacao-e-loi` | 9 | Negociação: quantificação de sinergia, teto de preço do comprador, estrutura de preço (CFDF, earn-out, escrow), desarme de objeções de múltiplo. |
| `processo-competitivo-e-propostas` | 10 | Carta de processo e cronograma, rodadas de NBO e de proposta vinculante, comparação em base equivalente, shortlist e management presentation. Corre intercalada com a etapa 9. |
| `due-diligence-e-data-room` | 11 | Data room aberto aos compradores (índice, níveis de acesso, Q&A log), frentes de diligência, clean team e conversão de red flag em preço, estrutura ou proteção. |
| `spa-signing-e-closing` | 12 | Posição econômica do contrato: mecanismo de preço (locked box ou completion accounts), earn-out, escrow, indenização, MAC, CADE, funds flow e suporte ao PPA. |

## Fluxo típico

`convencoes-de-projeto` → `estudo-setorial` → `transacoes-precedentes` → `go-to-market` → `teaser` →
`segmentacao-de-compradores` → `information-memorandum` → `solicitacao-de-informacoes` →
`negociacao-e-loi` ⇄ `processo-competitivo-e-propostas` → `due-diligence-e-data-room` →
`spa-signing-e-closing`. Na prática, `solicitacao-de-informacoes` roda em paralelo desde cedo (o data
room interno alimenta `estudo-setorial`, `information-memorandum` e o plugin de valuation ao mesmo
tempo), e `processo-competitivo-e-propostas` corre intercalada com `negociacao-e-loi`: cada rodada de
proposta passa pela análise econômica antes da próxima.

## Convencoes

Este plugin segue as convencoes do repositorio, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Metodo transversal vive em `acta-way`; metodo da pratica, em `acta-metodo-consultoria`
ou `acta-metodo-auditoria`. Nao repita aqui o que ja esta la.
