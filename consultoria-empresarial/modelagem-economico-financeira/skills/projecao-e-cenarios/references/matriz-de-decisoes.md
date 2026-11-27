# Matriz de decisões: projeção e cenários

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

O driver de receita de cada negócio (volume × preço, capacidade × utilização, base × ticket) é
particularidade do modelo de negócio e **não** entra nesta matriz. Ele fica no checkpoint do
engajamento.

---

## PC-01 · Atingir meta (Goal Seek) para chegar a um valor-alvo

| Alternativa | Status |
|---|---|
| Proibir o uso | Descartada: perde o teste "o que precisa ser verdade" |
| **Usar só como caso reverso** | **Regra da casa** |
| Usar o resultado direto como cenário | Descartada: o valor passa a definir a premissa, e não o contrário |

**Como usar o caso reverso:**
1. Rodar o Atingir meta sobre uma única premissa, com o valor-alvo declarado (preço pedido, oferta
   recebida, múltiplo de referência).
2. Ler o resultado como pergunta: "para valer X, a premissa P precisa chegar a Y".
3. Validar Y contra histórico, capacidade instalada, benchmark setorial e plano comercial.
4. Só se Y passar nos quatro testes ele pode virar premissa de um cenário, com a validação registrada
   no checkpoint. Se não passar, o achado é que o valor-alvo não se sustenta.

**Registrar no checkpoint:** valor-alvo, premissa ajustada, resultado, resultado de cada um dos
quatro testes e a decisão de usar ou não.

**Exemplo registrado.** Caso A: a trajetória de uma premissa operacional do cenário do comprador foi
calibrada por Atingir meta sobre um EV-alvo. A regra acima nasceu da revisão desse uso.

## PC-02 · Sinergias no cenário do comprador

| Alternativa | Quando usar | Efeito | Risco |
|---|---|---|---|
| **Sinergias em linhas próprias** (padrão sugerido) | Cenário do comprador, negociação de preço | O vendedor e o comprador veem o que está sendo pago | Exige estimar cada sinergia com lastro |
| Sinergias embutidas nos drivers operacionais | Sinergia difusa, impossível de isolar | Projeção mais simples | A sinergia fica invisível, e o cenário parece operacional |

**Regras para a linha de sinergia:** tipo (receita, custo, capital), prazo de captura, custo para
capturar, probabilidade e quem a cria. Sinergia de receita pede desconto maior que sinergia de custo.

**Exemplo registrado.** Caso A: sinergia do comprador embutida nos drivers operacionais. A
recomendação de linhas próprias saiu da revisão.

## PC-03 · Ano corrente parcialmente realizado

| Alternativa | Quando usar | Risco |
|---|---|---|
| **Realizado até a data-base × (1 + fator de sazonalidade)** (padrão sugerido) | A data-base deixa a maior parte do ano realizada | Fator calculado sobre poucos anos é frágil: declare a faixa |
| Drivers para o ano inteiro | Pouco do ano realizado, ou negócio sem sazonalidade relevante | Descarta o realizado, o melhor dado disponível |
| Último trimestre anualizado | Descartada | Leva a força ou a fraqueza sazonal do trimestre para o ano inteiro |

**Regra:** o fator é a razão entre o resto do ano e o realizado até a data-base, em cada ano
histórico, com a média. Não é crescimento de trimestre contra trimestre. O primeiro ano projetado por
drivers é o seguinte, e o fluxo do período parcial segue a mesma sazonalidade (`valor-terminal`).

**Registrar no checkpoint:** parcela do ano realizada, fator de cada ano, média e faixa de receita e de
EV entre o menor e o maior fator.

**Exemplo registrado.** Caso A: nove meses realizados, fator pela razão entre o último trimestre e o
acumulado dos nove meses em dois anos, com a faixa de receita registrada.
