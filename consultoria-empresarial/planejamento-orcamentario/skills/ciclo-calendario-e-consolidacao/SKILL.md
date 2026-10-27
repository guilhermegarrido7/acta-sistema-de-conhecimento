---
name: ciclo-calendario-e-consolidacao
description: Estruture o calendário do ciclo orçamentário e consolide o orçamento de várias unidades em um resultado único e coerente. Acionar ao desenhar o processo e o calendário do orçamento, ao decidir entre top-down e bottom-up, ao consolidar unidades de negócio, ou ao fechar o orçamento num P&L, balanço e caixa projetados.
---

# Ciclo, calendário e consolidação

Carregue `premissas-e-drivers` antes desta skill. Aqui o orçamento deixa de ser um conjunto de
planilhas de linha e vira um processo com datas, donos e um resultado consolidado. Em grupo
multiunidade, é a etapa que mais trava, porque depende de todas as unidades entregarem.

## 1. Top-down, bottom-up, ou o contraflow

Como o número desce e sobe define o realismo e a adesão do orçamento.

| Abordagem | Como funciona | Risco |
|---|---|---|
| **Top-down** | A diretoria fixa a meta e distribui para as unidades | Rápido, mas a unidade não se compromete com número que não construiu |
| **Bottom-up** | Cada unidade orça de baixo e soma | Adesão alta, mas a soma raramente bate a ambição da diretoria |
| **Contraflow** | Diretoria dá a moldura (premissas macro, meta de resultado), unidade orça dentro dela, e negocia-se o gap | O padrão da casa |

**O contraflow é a regra em mid-market:** a diretoria publica as premissas comuns (câmbio, inflação,
meta de margem) e as unidades orçam driver-based dentro delas. O gap entre a soma bottom-up e a meta
top-down não se resolve com um corte linear — resolve-se renegociando driver por driver com a unidade
que tem a alavanca. Corte linear ("todo mundo -5%") destrói o trabalho driver-based e devolve o
orçamento ao palpite.

## 2. O calendário, montado de trás para frente

O orçamento tem uma data inegociável: estar aprovado antes de começar o ano que ele rege. A partir
dela, monte o calendário para trás:

| Etapa | Prazo relativo | Dono |
|---|---|---|
| Aprovação final no Conselho/diretoria | Data-âncora (ex.: dez) | Diretoria |
| Consolidação e rodada de ajuste | −2 a −3 semanas | Controladoria / consultoria |
| Entrega das unidades | −4 a −6 semanas | Gestor de cada unidade |
| Premissas macro publicadas | −8 semanas | Diretoria + consultoria |
| Base realizada e drivers fechados | −10 semanas | Consultoria |

Os prazos são exemplo de cadência, não padrão: o que não muda é a ordem e o fato de que **premissa
publicada tarde atrasa tudo que vem depois**. A premissa macro é o gargalo mais comum — sem ela, a
unidade orça sobre suposição e refaz quando o número oficial chega.

## 3. A consolidação

Consolidar não é somar planilhas. Três operações, nesta ordem:

1. **Padronização.** Toda unidade orça na mesma estrutura de linhas e no mesmo plano de contas. Se
   uma unidade tem linha que as outras não têm, ela mapeia para a estrutura comum antes de consolidar.
   Sem isso, a soma mistura naturezas diferentes na mesma linha.
2. **Eliminação de intercompany.** Receita e custo entre unidades do mesmo grupo se cancelam na
   consolidação: o fee que a holding cobra da controlada é receita de uma e custo da outra, e somar
   as duas infla o grupo. Marque na origem (`orcamento-de-receita` §4) e elimine aqui. Quando o
   mandato tiver muitas transações entre empresas, a mecânica está em
   `acta-dados-e-analytics:consolidacao-e-intercompany`.
3. **Fechamento nos três demonstrativos.** O orçamento consolidado não é só um P&L: é P&L, fluxo de
   caixa e balanço projetados, que têm de fechar entre si. O resultado do P&L alimenta o patrimônio
   do balanço; o CapEx e a depreciação ligam balanço e caixa; o capital de giro projetado liga
   receita/custo ao caixa. Um orçamento que só tem P&L esconde se a empresa tem caixa para executá-lo.

> O fechamento integrado P&L-balanço-caixa é terreno de `acta-modelagem-economico-financeira`
> (capital de giro, estrutura de capital). No orçamento operacional, o essencial é que o caixa
> projetado não fique negativo sem uma linha de financiamento que o explique. Se ficar, é achado para
> a diretoria, não erro para esconder.

## 4. A lente AI-first

Padronizar estruturas de unidades diferentes para o plano de contas comum, consolidar, eliminar
intercompany e fechar os três demonstrativos é trabalho mecânico de alto volume e alta taxa de erro
manual — o agente faz isso com rastreabilidade por célula e sem o cansaço que produz o erro de
consolidação. **O julgamento humano fica na negociação do gap** (qual unidade cede qual driver) e na
leitura do caixa projetado (financiar, adiar CapEx, ou rever a meta). O agente entrega o consolidado
fechado; a diretoria decide o gap.

## O que entregar

1. A abordagem declarada (top-down, bottom-up, contraflow) e o tratamento do gap entre meta e soma.
2. O calendário do ciclo, com etapa, prazo e dono, montado a partir da data de aprovação.
3. O orçamento consolidado com as unidades padronizadas no plano de contas comum e o intercompany
   eliminado.
4. P&L, fluxo de caixa e balanço projetados fechando entre si, com o caixa projetado e, se negativo,
   a linha de financiamento que o cobre.

## Próximo passo

`analise-de-variacao-e-forecast`. O orçamento aprovado não é o fim: ele vira a linha de base contra a
qual o realizado é comparado mês a mês, e a reprevisão o ajusta ao longo do ano.
