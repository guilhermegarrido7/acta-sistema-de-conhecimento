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
