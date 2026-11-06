# Matriz de decisões: fundamentos do DCF

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

As decisões de cada etapa estão na matriz da skill correspondente: `custo-de-capital` (CC),
`reorganizacao-contabil` (RC), `qualidade-de-resultados` (QR), `diagnostico-de-roic` (RO),
`capital-de-giro-e-capex` (CG), `impostos-e-prejuizos-fiscais` (IM), `projecao-e-cenarios` (PC),
`valor-terminal` (VT), `triangulacao-e-faixa` (TF), `relatorio-de-valuation` (RV). Esta matriz guarda
só o que é transversal.

---

## FK-01 · Convenção de desconto

| Alternativa | Quando usar | Risco |
|---|---|---|
| Meio de ano | Fluxo distribuído ao longo do ano (padrão de operação contínua) | Aplicar também ao valor terminal sem ajuste |
| Fim de ano | Fluxo concentrado no fim do período, ou convenção pedida | Subestima o valor de operação contínua |

**Regra:** a mesma convenção no fluxo explícito e no valor terminal, ajustada ao stub period quando
a data-base é intermediária (`triangulacao-e-faixa`, TF-01).

**Exemplo registrado.** Caso A: meio de ano, com o primeiro ano projetado integral a partir de
data-base anual.
