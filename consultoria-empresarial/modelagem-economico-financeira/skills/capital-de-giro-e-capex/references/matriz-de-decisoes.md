# Matriz de decisões: capital de giro e CapEx

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

A forma de calcular o CapEx unitário a partir do driver físico de cada negócio é particularidade do
modelo de negócio e **não** entra nesta matriz. Ela fica no checkpoint do engajamento.

---

## CG-01 · Caixa no capital de giro

| Alternativa | Quando usar | Risco |
|---|---|---|
| Zero: 100% do caixa na dívida líquida, capital de giro não-caixa (padrão da casa) | Padrão de M&A e laudos no Brasil (Damodaran; Rosenbaum e Pearl) | ROIC e EV na base não-caixa não comparam com benchmark na base Koller |
| Caixa mínimo operacional no capital de giro (percentual da receita ou dias de custo caixa); só o excedente na ponte | Usuário pede a base Koller, ou comparáveis e benchmark estão nessa base | Percentual sem lastro; exige a mesma base no capital investido, na projeção, na ponte e nos comparáveis |

**Regra:** a escolha vale para o capital investido, a projeção do capital de giro, a ponte e os
comparáveis. Caixa restrito (depósito bloqueado, garantia, covenant) não abate a dívida líquida em
nenhuma das duas bases.

**Registrar no checkpoint:** base adotada, tratamento do caixa restrito e, se Koller, método,
parâmetro e fonte.

**Exemplo registrado.** Caso A: 2% da receita líquida, com referência a Koller, Goedhart & Wessels
(base Koller, anterior à convenção da casa).
