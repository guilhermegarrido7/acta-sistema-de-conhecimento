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

**Exemplo registrado.** Caso A: começou em 2% da receita líquida (Koller, Goedhart & Wessels) e migrou
para caixa zero no giro, com todo o caixa na ponte.

## CG-02 · IBS/CBS no capital de giro

| Alternativa | Quando usar | Risco |
|---|---|---|
| **Recebível sobre a receita líquida, sem passivo de IBS/CBS** (padrão sugerido, a partir da data do split) | Split payment em vigor para o meio de recebimento do cliente | A data do split é hipótese: declare |
| Recebível com tributo e passivo a recolher em dias (média dos dois últimos anos fechados) | Antes do split, inclusive na fase de testes | Gera necessidade residual de giro, que se reverte quando o split começa |
| Passivo de IBS/CBS com prazo igual ao PMR | Não usar como mecânica | As linhas se anulam só por coincidência aritmética; serve de teste de neutralidade |

**Regra:** dedução na DRE e efeito de caixa são explicados separadamente. A data do split, a etapa em
que ela se apoia e a fonte são declaradas (`reforma-tributaria`).

**Registrar no checkpoint:** data adotada do split, prazo do passivo antes dele, valor residual de
giro gerado e ano em que se reverte.

**Exemplo registrado.** Caso A: passivo em dias até a fase de testes e recebível líquido a partir do
ano seguinte, com o teste de neutralidade de prazos iguais.
