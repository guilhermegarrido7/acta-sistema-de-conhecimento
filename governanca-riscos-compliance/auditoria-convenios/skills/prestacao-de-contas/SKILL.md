---
name: prestacao-de-contas
description: Reconcilie o extrato bancário da conta do convênio contra o sistema de prestação de contas e teste desvio de finalidade, cronograma por rubrica e a regra de execução mínima antes da parcela seguinte. Acionar ao conciliar extrato e sistema, ao apurar transferência entre contas do parceiro, ao testar realizado contra previsto, ou ao validar liberação de parcela.
---

# Prestação de contas: extrato, sistema e liberação de parcela

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 valem aqui integralmente e não são repetidas. A mecânica de tratar base, casar
valor e consumir pool está em `bases-e-conciliacao` e não se repete aqui.

Elos 4 e 6 do ciclo (`ciclo-do-convenio` §2). Bloco **CNV.09**, e a parte do **CNV.05** que se apura
com base de despesa.

O centro do trabalho. É aqui que o convênio deixa de ser leitura de documento e vira conciliação de
duas bases, e é aqui que mora o achado mais grave do ciclo.

## 1. As duas bases, e por que elas não fecham sozinhas

| Base | Origem | O que ela é |
|---|---|---|
| **Extrato da conta do convênio** | Banco, via parceiro | O que aconteceu com o dinheiro. Não mente, mas chega tarde, incompleto ou em imagem |
| **Sistema de prestação de contas** | Concedente | O que o parceiro declarou ter gasto, com documento anexado. Completo em forma, e não necessariamente em fato |

Peça o extrato **da abertura da conta ao encerramento**, em arquivo, no primeiro ofício, e registre a
data do pedido. Extrato parcial produz conclusão parcial, e a lacuna tem de ser declarada por
período, não em geral.

**Antes de conciliar, confirme a exclusividade da conta.** Se o recurso transitou em conta
compartilhada com outras atividades do parceiro, a reconciliação muda de natureza, o teste de desvio
de finalidade fica indemonstrável por extrato, e a ausência da conta específica é, ela mesma, o
primeiro achado deste bloco.

## 2. A reconciliação, e os seis resíduos que ela produz

Case os dois lados por valor e data, com consumo de pool, e trate cada resíduo como população:

| Resíduo | O que significa | Como se conclui |
|---|---|---|
| **Pagamento no extrato dentro da vigência, ausente no sistema** | Despesa paga com recurso do convênio e não submetida à prestação de contas | Gasto sem comprovação. Glosa, salvo comprovação posterior aceita |
| **Lançamento no sistema sem contrapartida no extrato** | Despesa declarada e não paga pela conta do convênio, ou paga por fora | Confirme se foi paga por outra fonte. Se foi, é despesa que não cabe na prestação de contas |
| **Pagamento fora da vigência** | Antes do início da execução ou depois do encerramento | Despesa inelegível pelo critério de competência do convênio. Glosa |
| **Transferência para outra conta do parceiro** | `CNV.R16`. Desvio de finalidade | Ver §3 |
| **Saldo negativo em algum momento da série** | A conta do convênio operou a descoberto, com juros e tarifas debitados dela | Despesa financeira não prevista no plano, e sinal de uso do recurso fora do ritmo do cronograma |
| **Movimentação total superior ao valor global** | Entraram e saíram valores acima do que o convênio comporta | Movimentação estranha ao convênio na conta específica |

Some a isso a **conciliação de saldo**, e não só de movimento: o saldo do extrato na data de corte
contra a posição do sistema. Diferença de saldo que não se explica pelos resíduos acima significa que
uma das duas bases está incompleta, e é preciso saber qual antes de concluir qualquer coisa.

## 3. Desvio de finalidade

`CNV.R16`, o achado mais grave do ciclo. A transferência da conta do convênio para outra conta do
parceiro, ou para terceiro sem relação com o objeto, é o fato. A conclusão exige responder, em
sequência e com número:

1. **Quanto saiu, quando, para onde.** Identifique a conta de destino e a titularidade.
2. **Havia recurso do concedente no saldo naquele momento?** Reconstitua o saldo por fonte, aporte a
   aporte, até a data da transferência. Se a conta só continha contrapartida financeira do parceiro
   naquele instante, o enquadramento muda, e essa reconstituição é o que sustenta o ponto.
3. **O valor voltou para a conta do convênio?** Se voltou, quando, e o saldo ficou descoberto no
   intervalo? Devolução tardia não apaga o uso, atenua a severidade e altera a redação, não a
   existência do achado.
4. **Houve despesa do objeto paga da conta de destino?** Se houve, o dinheiro seguiu o objeto por
   caminho irregular, o que é achado de controle e não de desvio consumado.

**A doutrina.** A lógica de que recurso repassado tem destinação vinculada, e de que a aplicação
fora do objeto obriga a devolução com correção, é consolidada na jurisprudência do Tribunal de
Contas da União e informa a leitura da matéria mesmo fora do alcance direto dele. Cite a doutrina
pelo raciocínio, **sem inventar número de acórdão**.

**Pagamento a fundação e a associação.** Trate como população própria, pelo conflito de interesse que
costuma haver no quadro de associados. Ver `execucao-e-fornecedores` §3.

## 4. A regra de execução mínima antes da parcela seguinte

`CNV.R11`. A norma do concedente condiciona a liberação de cada parcela à execução de um percentual
da anterior. No mandato observado, o piso era 80%, e **esse número é parâmetro daquele concedente**:
leia a norma vigente.

O teste, parcela a parcela:

1. Fixe a **data de cada liberação**, pelo extrato, não pelo cronograma previsto.
2. Apure a **despesa incorrida até essa data** pelos dois lados: o que estava lançado no sistema e o
   que estava efetivamente pago no extrato. Os dois números divergem sempre, e a divergência é o
   ponto: liberação autorizada com base em lançamento que o extrato não confirma é controle que
   validou declaração em vez de fato.
3. Calcule o percentual sobre a parcela anterior e compare com o piso.
4. Verifique se houve **prestação de contas parcial entregue e analisada** antes da liberação, e não
   apenas entregue. Prestação parcial analisada depois do repasse seguinte é rito invertido.

Junte a isso a conferência das demais premissas de cada repasse: valor da parcela contra o cronograma
de desembolso do plano de trabalho, e atendimento à execução física, que se apura em
`contrapartida-e-encerramento`.

## 5. Cronograma financeiro: previsto contra realizado por rubrica

O relatório por rubrica do sistema de prestação de contas contra o cronograma do plano de trabalho.
Quatro leituras:

- **Desvio por rubrica**, em valor e em percentual. Rubrica estourada e rubrica não executada
  costumam vir aos pares, e o par é remanejamento de fato.
- **Remanejamento formalizado?** Alteração de rubrica exige aprovação na instância prevista, e muitas
  vezes termo aditivo. Remanejamento executado e nunca formalizado é achado, mesmo com o total
  preservado.
- **Despesa realizada e não prevista no plano.** Natureza de despesa que não consta do plano de
  trabalho não vira elegível por ter sido paga.
- **Etapas em que cada fornecedor participou.** Cruze o fornecedor com a etapa do cronograma físico:
  fornecedor pago em etapa que ainda não começou, ou já encerrada, é inconsistência entre o físico e
  o financeiro.

## 6. Receita de aplicação financeira

`CNV.R17`, e o teste que mais falta nos programas. O saldo parado na conta do convênio rende, e o
rendimento é recurso do convênio. Apure o total dos rendimentos no extrato e responda:

- Foram **tratados como novo aporte**, incorporados ao plano e aplicados no objeto, seguindo o rito da
  norma do concedente?
- Foram **apropriados pelo parceiro**, sacados ou transferidos? Nesse caso, siga o mesmo roteiro de
  §3, porque é desvio de finalidade sobre acessório.
- Ficaram parados e foram **devolvidos no encerramento**, junto com o saldo? Ver
  `contrapartida-e-encerramento`.

## O que entregar

1. A reconciliação extrato contra sistema, ao centavo, com o universo e o período declarados.
2. Os seis resíduos, cada um como população, com valor e quantidade.
3. A reconstituição do saldo por fonte nas datas das transferências apuradas.
4. O quadro de execução mínima por parcela: data da liberação, despesa incorrida pelos dois lados,
   percentual e conclusão.
5. O previsto contra realizado por rubrica, com os remanejamentos não formalizados apontados.
6. A apuração do rendimento de aplicação e do seu destino.
7. A relação de valores propostos para glosa, com o critério de análise de cada um.

## Próximo passo

`contrapartida-e-encerramento`, para a contrapartida econômica, a apuração de resultado e o
fechamento do convênio.
