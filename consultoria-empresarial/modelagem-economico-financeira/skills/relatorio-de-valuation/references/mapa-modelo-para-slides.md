# Mapa modelo → slides

Todo número do deck tem uma célula de origem no modelo. O mapa registra essa ligação e é a entrada
da conciliação automática do manifesto de release (`scripts/manifesto_release.py`, gate G2).

## Onde fica

`~~pasta de trabalho/mapa-modelo-slides.csv`, versionado junto do deck. Atualize o mapa na mesma
sessão em que um slide ganhar ou perder número.

## Formato

CSV separado por `;`, com cabeçalho:

```
id;slide;rotulo;aba;celula;formato;escala
```

| Campo | Conteúdo |
|---|---|
| `id` | Identificador estável do número (`wacc`, `ev_perp`, `divida_liquida`) |
| `slide` | Número do slide onde o valor aparece. Vazio = só conferido no modelo |
| `rotulo` | Nome legível |
| `aba`, `celula` | Origem no modelo |
| `formato` | `num:<casas>`, `pct:<casas>`, `mult:<casas>` ou `data` |
| `escala` | Divisor aplicado antes de formatar: `1000` converte R$ mil em R$ MM |

O número que aparece em vários slides tem uma linha por slide, com o mesmo `id`.

## Linhas obrigatórias

| id | O que é | Por quê |
|---|---|---|
| `data_base` | Data-base do EV | Gate G3: mesma data da dívida |
| `data_divida` | Data do balanço da dívida líquida | Gate G3 |
| `ev_<método>` | EV de cada método | Sumário executivo e Sumário do valuation |
| `equity_<método>` | Equity value, quando apresentado | Idem |
| `divida_liquida` | Dívida líquida da ponte | Ponte e notas de rodapé |
| `wacc`, `g`, `ronic` | Taxa, crescimento e retorno do terminal | Premissas, resultados e apêndice |
| `multiplo_saida` | Múltiplo de saída aplicado | Valor terminal e múltiplos implícitos |
| `ebitda_base` | EBITDA sobre o qual o múltiplo é aplicado | QR-01: base do múltiplo |

## Correspondência típica entre saída do modelo e slide

| Saída do modelo | Capítulo e tópico |
|---|---|
| Resumo de resultados (EV, equity, faixa) | I. Sumário executivo; IV. Sumário do valuation |
| DRE histórica e normalização | II. Demonstrativo de Resultado; Normalização de EBITDA |
| Capital investido e fundos investidos | II e IV. Capital investido operacional e fundos investidos |
| ROIC histórico e projetado | II. Análise histórica de ROIC |
| Inputs de WACC | III. Custo médio ponderado de capital (WACC) |
| Cronograma de receita e drivers | III. Mecanismo de projeção de receita |
| FCFF e valor terminal | IV. Fluxo de caixa livre; V. Cálculo do valor por método |
| Sensibilidade WACC × g | V. Sensibilidade |
| Ponte EV → equity | V. Ponte EV para equity value |

## Regra de formatação

O valor do slide é escrito como o mapa o formata: pt-BR, vírgula decimal, ponto de milhar, mesmas
casas decimais. Um slide que mostra "R$ X,X MM" e um mapa com `num:2` não conciliam: ajuste um ou
outro, nunca os dois em direções diferentes.
