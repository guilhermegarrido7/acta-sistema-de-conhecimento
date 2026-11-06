# Matriz de decisões: valor terminal

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

---

## VT-01 · Fonte do múltiplo de saída

| Alternativa | Quando usar | Risco |
|---|---|---|
| **Múltiplo de listadas em regime estacionário do setor** (padrão sugerido) | Sanity check da perpetuidade | Poucas listadas comparáveis no Brasil |
| Múltiplo de transações precedentes | Referência de preço de controle | Embute prêmio de controle e sinergia; usado como terminal, conta o prêmio dentro do valor |
| Múltiplo praticado pelo comprador provável | Cenário do comprador, negociação | Mesmo problema do anterior, e ainda depende de dado do comprador |
| Múltiplo implícito na perpetuidade | Conferência cruzada | Não é fonte independente |

**Registrar no checkpoint:** valor do múltiplo, fonte, data, amostra e se embute prêmio. Múltiplo
sem fonte documentada não vai ao deck.

**Exemplo registrado.** Caso A: no cenário conservador, múltiplo de transação praticado pelo
comprador; no de integração, múltiplo menor sem fonte documentada no modelo. A revisão apontou o uso
de múltiplo de transação como terminal.

## VT-02 · Peso do múltiplo de saída no resultado

| Alternativa | Quando usar | Risco |
|---|---|---|
| **Só sanity check** (padrão sugerido) | DCF como método principal | Nenhum relevante |
| Peso igual ao da perpetuidade | Convenção pedida pelo cliente | Metade do valor passa a depender de premissa sobre o mercado futuro |
| Método principal | Ativo sem fluxo projetável com confiança | Deixa de ser DCF |

**Regra:** perpetuidade e múltiplo de saída usam o **mesmo horizonte** e o mesmo ano terminal.
Horizontes diferentes tornam os dois resultados incomparáveis.

**Exemplo registrado.** Caso A: versões anteriores deram peso igual aos dois métodos, com horizontes
diferentes; a revisão alinhou o horizonte e rebaixou o múltiplo a referência.

## VT-03 · Crescimento na perpetuidade (g)

| Alternativa | Quando usar | Risco |
|---|---|---|
| Inflação de longo prazo (crescimento real zero) | Negócio maduro, sem vantagem de expansão | Subestima negócio com crescimento estrutural |
| Inflação + crescimento real moderado | Mercado em expansão estrutural com lastro | Exige RONIC coerente com o reinvestimento |
| PIB nominal de longo prazo | Teto, não ponto | Empresa vira a economia |

**Testes:** g < WACC; g ≤ PIB nominal de longo prazo; g na mesma base do WACC e do fluxo; RONIC
coerente com o ROIC projetado do último ano explícito (`diagnostico-de-roic`, RO-02).

**Exemplo registrado.** Caso A: g diferente entre o cenário conservador e o de integração; o RONIC
veio do ROIC médio setorial.
