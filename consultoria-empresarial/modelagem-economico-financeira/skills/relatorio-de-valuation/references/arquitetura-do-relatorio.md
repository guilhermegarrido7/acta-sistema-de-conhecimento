# Arquitetura do relatório de valuation

Estrutura de casa: abertura, quatro capítulos de conteúdo, apêndice e fechamento. Os capítulos são
numerados em algarismo romano (I. a V.) e cada um abre com um divisor no layout `ACTA - Capa`
(numeral à esquerda, título do capítulo, sem conteúdo analítico).

Referência de calibração: um relatório real da casa com 40 slides, dos quais 32 de conteúdo, 5
divisores, capa, sumário e fechamento.

## Abertura

1. **Capa** (`1_ACTA - Capa`): nome do projeto ou codinome do mandato, destinatário ("Apresentação
   para a Administração / o Comprador / o Comitê"), mês e ano.
2. **Aviso legal** (`ACTA - Conteúdo`): três blocos fixos, nesta ordem: *Natureza e finalidade do
   documento*, *Base de informações* (a ACTA não assume responsabilidade independente pela
   verificação das informações recebidas), *Limitações da valoração* (o valor reflete condições e
   informações disponíveis na data). Fecha com o contato do sócio responsável.
3. **Sumário do valuation** (`1_Custom Layout`): uma linha por capítulo com uma frase do que ele
   entrega. É o único slide que descreve a estrutura em vez de argumentar um número.

## I. Sumário executivo

Um slide-síntese: linha de mensagem com a conclusão central, caixa lateral com a metodologia (DCF em
dois estágios, múltiplo de saída como referência), e barra de conclusão com a faixa de valor, o
ponto central e, quando houver, o equity value com a data da dívida líquida.

## II. A Companhia e drivers de valor

Sequência recomendada, com os tópicos padrão:

| Tópico padrão | Conteúdo | Skill de origem |
|---|---|---|
| A Companhia | Perfil, base operacional, linha do tempo | — |
| Informações gerais sobre o mercado | Tamanho, crescimento e fontes setoriais | `projecao-de-mercado-e-equity-story` |
| Desempenho operacional | Indicadores operacionais históricos | — |
| Demonstrativo de Resultado do Exercício | DRE histórica | `reorganizacao-contabil` |
| Normalização de EBITDA | Contábil, ajustes por família, normalizado | `qualidade-de-resultados` |
| Capital investido operacional | Ótica operacional | `reorganizacao-contabil` |
| Fundos investidos | Ótica de financiamento | `reorganizacao-contabil` |
| Conciliação do capital investido | Identidade entre as duas óticas | `fundamentos-koller` |
| ROIC e crescimento | Framework: matriz ROIC × crescimento | `fundamentos-koller` |
| Duração da vantagem competitiva | CAP e fontes de vantagem | `diagnostico-de-roic` |
| Análise histórica de ROIC | ROIC, WACC, spread; margem × giro quando sustenta a tese | `diagnostico-de-roic` |

Benchmarking contra comparáveis entra quando há amostra, com a fonte de cada um e painel de leitura
("por que o alvo está acima, abaixo ou na média"), nunca só o gráfico.

## III. Premissas e observações

Um slide por bloco de premissa, sempre "o que se projeta + a lógica ou fórmula + a tabela ou fonte
que sustenta":

| Tópico padrão | Conteúdo | Skill de origem |
|---|---|---|
| Informações gerais e de metodologia | Data-base, horizonte, convenção de desconto, moeda | `fundamentos-koller` |
| Premissas utilizadas | Lista das premissas com fonte | — |
| Premissas macroeconômicas | Inflação, juros, PIB, com fonte e data | — |
| Principais drivers de valor | Drivers da receita e da margem | `projecao-e-cenarios` |
| Mecanismo de projeção de receita | Árvore de drivers e cenários | `projecao-e-cenarios` |
| Marco regulatório ou contratual | Quando condiciona a receita | — |
| Tributação | Regime e transição tributária | `impostos-e-prejuizos-fiscais` |
| Custos, despesas, CapEx e depreciação | Lógica de escalonamento | `capital-de-giro-e-capex` |
| Custo médio ponderado de capital (WACC) | Custo do equity e da dívida, estrutura de capital | `custo-de-capital` |
| Dívida e capital de giro | Prazos médios, caixa mínimo, dívida líquida | `capital-de-giro-e-capex` |
| Transações precedentes | Um cartão por transação e disclaimer da amostra | plugin de M&A, `transacoes-precedentes` |

## IV. Resultados

Sequência fixa:

1. **Demonstrativo de Resultado do Exercício**: histórico + projetado.
2. **Capital investido operacional e fundos investidos**, com a reconciliação.
3. **Fluxo de caixa livre**: FCFF, valor terminal e valor presente.
4. **Sumário do valuation**: cenário × método, faixa, football field e nota sobre a origem da faixa
   (`triangulacao-e-faixa`).

## V. Apêndice

Cada item é obrigatório quando existe no modelo:

| Tópico padrão | Conteúdo | Decisão de origem |
|---|---|---|
| Sensibilidade WACC × g | Grade com o ponto central destacado | TF-03 |
| Ponte EV para equity value | Itens, valores, **data** e fonte; itens fora da ponte com motivo | TF-01, TF-02 |
| Custo de capital: decisões e fontes | Rota, Rf, ERP, porte, DLOM, Kd, estrutura | CC-01 a CC-08 |
| Múltiplos implícitos | EV ÷ EBITDA por método, com a base do EBITDA | QR-01, VT-01 |
| Mapa da metodologia | Do histórico à faixa de valor | — |
| Principais métricas e fórmulas | Definições usadas no deck | — |
| Cálculo do valor por método | Perpetuidade e múltiplo, com fatores de desconto | VT-02, FK-01 |
| Glossário | Siglas e termos | — |

Slide técnico que pertence a outro capítulo (por exemplo, o WACC) não migra para o apêndice com o
título do capítulo de origem. Ou fica no capítulo III, ou entra no apêndice com o título do apêndice.

## Fechamento

`ACTA - Fechamento`, sem conteúdo analítico.
