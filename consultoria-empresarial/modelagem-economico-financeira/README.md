# Modelagem Econômico-Financeira

Construção de modelo econômico-financeiro: projeção de resultado e caixa, capital de giro, valuation, cenários e análise de sensibilidade, no framework Koller/McKinsey (NOPLAT, ROIC, lucro econômico, DCF) adaptado a mid-market fechado brasileiro (CPC/IFRS).

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`) — é onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Status: completo.** As 12 skills do ciclo de vida estão escritas, com a camada de
> fundamento teórico (`fundamentos-koller`) e suas 5 referências detalhadas.
> Publicado em `marketplace.json`. Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz a construção e o julgamento de um modelo econômico-financeiro completo — da reorganização
das demonstrações contábeis ao diagnóstico de ROIC, projeção de cenários, custo de capital, valor
terminal, triangulação de faixa de valor e revisão final do modelo — sempre ancorado no framework
Koller/McKinsey e com os ajustes de CPC 06 R2 (arrendamentos), CPC 33 (pensões) e CPC 15 (goodwill)
para o contexto de mid-market fechado no Brasil.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `fundamentos-koller` | Referência transversal | Camada teórica: NOPLAT, capital investido, ROIC, lucro econômico, FCF, key value driver formula. `user-invocable: false` — carregada pelas demais quando o conceito exato é necessário. |
| `reorganizacao-contabil` | 1 | Reorganização das demonstrações contábeis em base NOPLAT/capital investido, com reconciliação obrigatória entre as duas perspectivas. |
| `qualidade-de-resultados` | 2 | Normalização de EBITDA e checagem de qualidade de resultado antes de qualquer diagnóstico de retorno. |
| `diagnostico-de-roic` | 3 | Diagnóstico de criação de valor pelo ROIC: decomposição margem × giro, lucro econômico, spread contra o WACC, duração da vantagem competitiva (CAP). |
| `custo-de-capital` | 4 | Cálculo e defesa do WACC. |
| `capital-de-giro-e-capex` | 5 | Projeção de capital de giro operacional e CapEx, coerente com o ROIC diagnosticado. |
| `impostos-e-prejuizos-fiscais` | 6 | Tratamento de impostos operacionais ajustados e prejuízos fiscais acumulados na projeção. |
| `projecao-e-cenarios` | 7 | Projeção de resultado e caixa em cenários, com a coerência entre crescimento e taxa de reinvestimento imposta pelo ROIC. |
| `saude-de-credito` | 8 | Avaliação da saúde de crédito do alvo/projeção (endividamento, cobertura, covenants). |
| `valor-terminal` | 9 | Mecânica do valor terminal e da convergência do spread ROIC-WACC ao fim do período de vantagem competitiva. |
| `triangulacao-e-faixa` | 10 | Triangulação da faixa de valor entre DCF, múltiplos de mercado e transações precedentes (football field). |
| `revisao-de-modelo` | 11 | Revisão final do modelo antes da entrega. |

## Fluxo típico

`reorganizacao-contabil` → `qualidade-de-resultados` → `diagnostico-de-roic` → `custo-de-capital` →
`capital-de-giro-e-capex` → `impostos-e-prejuizos-fiscais` → `projecao-e-cenarios` →
`saude-de-credito` → `valor-terminal` → `triangulacao-e-faixa` → `revisao-de-modelo`, com
`fundamentos-koller` carregado sob demanda em qualquer etapa que precise do conceito exato.

## Convencoes

Este plugin segue as convencoes do repositorio, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Metodo transversal vive em `acta-way`; metodo da pratica, em `acta-metodo-consultoria`
ou `acta-metodo-auditoria`. Nao repita aqui o que ja esta la.
