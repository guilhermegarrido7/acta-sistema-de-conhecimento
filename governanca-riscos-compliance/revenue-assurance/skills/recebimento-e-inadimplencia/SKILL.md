---
name: recebimento-e-inadimplencia
description: Teste o recebimento do faturado e a gestão da carteira vencida. Acionar ao analisar aging e recebimentos parciais ou pós-vencimento, ao confrontar baixa de título com o efetivo ingresso de recursos, ao reperformar juros e multa dos títulos liquidados em atraso, ou ao avaliar cobrança, negociação e provisão de perdas.
---

# Recebimento, aging e inadimplência

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elo 6 do ciclo (`ciclo-da-receita` §2). Bloco **REC.06**.

O elo em que o direito vira caixa — ou não vira. Dois riscos dominam, e o segundo é invisível no
relatório que todo mundo olha: **o título baixado sem ingresso efetivo de recursos** e **o encargo de
mora que não foi cobrado**.

## 1. O aging, e o que ele não mostra

Peça o relatório de contas a receber em aging na data-base, e **reconcilie o total contra um número
que você não calculou** — o saldo da conta no razão. Se não bate, você ainda não entendeu a base
(`bases-e-conciliacao` §1.4). Só depois disso o aging vira evidência.

Cortes sobre a carteira:

1. **Faixas de vencimento** e concentração por faixa, com o percentual sobre o total.
2. **Concentração por cliente** — quanto do vencido está em um só sacado.
3. **Títulos vencidos há mais tempo** — há tratativa registrada, ou apenas idade?
4. **Recebimentos parciais** — a diferença foi glosa reconhecida, encargo não cobrado, desconto
   concedido, ou simplesmente não recebido? São quatro naturezas distintas e o aging não as separa.
5. **Recebimentos pós-vencimento** — população de entrada da seção 3.
6. **Títulos com saldo negativo ou zerado no aging** e não baixados — resíduo de baixa manual.

> **Evite a armadilha da assertiva.** Quando a administração declara que não há contas a receber em
> aberto, a pergunta não é se o aging está zerado: é **por que** está. Título liquidado sem o efetivo
> recebimento produz exatamente um aging zerado. O aging limpo é hipótese a testar, não conclusão.

## 2. Baixa de título × ingresso efetivo de recursos

O teste que fecha o par 4 de `ciclo-da-receita` §4 e o único que distingue recebimento de baixa.

Confronte a **relação de baixas do período** contra o **extrato bancário das contas de recebimento**,
casando valor a valor com consumo de pool (`bases-e-conciliacao` §4). Os quatro quadros de saída são
os mesmos de qualquer conciliação; o que interessa aqui são os resíduos:

| Resíduo | O que investigar |
|---|---|
| Baixa sem crédito correspondente | Liquidação sem ingresso: baixa manual, compensação não documentada, ou erro. É o achado mais grave do elo |
| Crédito sem baixa | Recebimento não aplicado ao título — carteira e caixa divergem |
| Baixa por compensação | Contra o quê? Exige documento de encontro de contas com alçada |
| Quase-pares (diferença de centavos) | Não acontece em conciliação automática, só em digitação |

Isole as **baixas manuais** e teste 100% delas: quem lançou, com que autorização, contra qual
documento. População pequena, risco alto — o mesmo critério das notas canceladas.

## 3. Juros e multa: o encargo que não aparece no aging

Um dos quatro riscos que faltavam nos programas de receita da casa
(`matriz-de-riscos-da-receita` §2), e o mais fácil de deixar passar.

> **Encargo de mora não cobrado é receita renunciada sem decisão formal — e ele não aparece no
> aging.** O título pago em atraso, sem encargo, é liquidado e some do relatório. Quem audita só o
> aging nunca o encontra.

**O teste é reperformance sobre 100% dos títulos liquidados após o vencimento.** Não é amostral: a
população é contável e o cálculo é aritmético.

1. Extraia todos os títulos com data de liquidação posterior à data de vencimento.
2. Recalcule, para cada um, os encargos devidos segundo a cláusula contratual: multa, juros de mora e
   correção, na base e na periodicidade contratadas. **A cláusula é do contrato do mandato** — não
   presuma percentual de praxe.
3. Confronte o encargo devido com o efetivamente cobrado. Três resultados: cobrado corretamente,
   cobrado a menor, não cobrado.
4. Some o não cobrado **e o cobrado a menor**, por cliente e por competência. Esse é o número do
   ponto: a receita financeira renunciada no período.
5. Para o que não foi cobrado, procure a **decisão formal**: existe política de dispensa, alçada
   competente, e registro da aprovação caso a caso? Dispensa sem decisão formal é o achado; dispensa
   com decisão formal em alçada é conforme, ainda que o valor seja relevante.

O mesmo raciocínio vale para **desconto concedido na negociação** de título vencido: a negociação
desfavorável é decisão de gestão, mas decisão de gestão precisa de alçada e de registro.

### Planos A/B/C

- **Plano A** — base de títulos com emissão, vencimento, liquidação e valores, mais a cláusula
  contratual de encargos; reperformance em 100%.
- **Plano B** — sem data de liquidação na base: use a data do crédito no extrato, casada por valor, e
  declare que a data de liquidação foi inferida do ingresso bancário.
- **Plano C** — sem base de títulos liquidados: o teste cai. Conclua sobre o desenho (existe política
  de encargos? existe alçada de dispensa?) e declare que a efetividade não foi testável.
- **Limitação** — *"A reperformance de encargos cobriu [N] títulos liquidados após o vencimento,
  [X]% da população informada; a cláusula aplicada é a do contrato vigente no período."*

## 4. Cobrança, interrupção e provisão

**Tratativas de cobrança.** Para os títulos vencidos, exija o rastro: notificação enviada, protocolo
de recebimento, escalonamento, encaminhamento ao jurídico. Ausência de rastro é deficiência de
operação do controle, não de desenho.

**Interrupção do serviço por inadimplência.** É controle usual em cliente privado e **frequentemente
inaplicável em contrato com ente público**, por vedação contratual ou legal. Confirme no contrato do
mandato antes de escrever o teste: testar corte onde ele não é permitido produz achado falso. Onde
não se aplica, testa-se **registro e cobrança**, não bloqueio — e a inaplicabilidade se declara.

**Concessão de crédito.** Quando há originação de venda a cliente privado, o elo ganha dois testes
que não existem em contrato único: análise de crédito prévia com limite aprovado em alçada, e venda a
cliente com restrição, limite vencido ou excedido. Em mandato de cliente único não há o que testar —
declare a inaplicabilidade em vez de omitir o bloco.

**Provisão para perdas.** Confronte o critério de provisão adotado com o aging efetivo: título em
faixa que o critério manda provisionar e que não está provisionado é subavaliação de perda, e o
espelho também é achado.

## 5. A conciliação que fecha o elo

Três totais têm de conversar na data-base:

```
saldo do aging  =  saldo da conta de contas a receber no razão
notas emitidas no período − baixas do período ± ajustes  =  variação do saldo
créditos nas contas de recebimento  =  baixas do período (líquido dos resíduos da §2)
```

Qualquer uma das três que não fecha é achado próprio, antes mesmo de olhar cliente a cliente. A
mecânica está em `bases-e-conciliacao`; a abertura por competência é o que revela o mês que destoa.

## O que entregar

1. Aging reconciliado contra o saldo do razão, com os cortes por faixa, por cliente e por idade.
2. Conciliação baixas × extrato, com baixas sem crédito e créditos sem baixa isolados e quantificados.
3. Relação das baixas manuais, testadas a 100%, com autorização e documento suporte.
4. Reperformance de juros e multa em 100% dos títulos liquidados em atraso, com o valor renunciado
   por cliente e por competência, e a evidência (ou ausência) de decisão formal de dispensa.
5. Rastro de cobrança dos títulos vencidos e a avaliação da provisão contra o aging.
6. As inaplicabilidades declaradas com a razão contratual, e a lista do que não foi testável.

## Próximo passo

`matriz-de-riscos-da-receita`, para promover à matriz qualquer risco novo que o mandato tenha
revelado. A redação do ponto e a severidade estão em `redacao-de-achados`.
