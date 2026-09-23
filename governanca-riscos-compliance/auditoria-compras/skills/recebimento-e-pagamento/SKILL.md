---
name: recebimento-e-pagamento
description: Teste o recebimento, a conferência de três vias e a saída do caixa, incluindo a caça ao pagamento em duplicidade. Acionar ao avaliar atesto sem conferência ou feito por quem comprou, ao testar o casamento de pedido, recebimento e documento fiscal, ao apurar pagamento duplicado, ou ao conciliar pagamentos com o extrato.
---

# Recebimento, três vias e pagamento

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elos 6 e 7 do ciclo (`ciclo-ptp` §2). Blocos **PTP.06** e **PTP.07**.

O elo em que o dinheiro sai. Dois achados dominam, e têm origens diferentes: o **recebimento
atestado sem conferência**, que é falha de controle deliberadamente tolerada porque conferir dá
trabalho, e o **pagamento em duplicidade**, que é quase sempre erro e quase sempre recuperável.

## 1. PTP.06: o recebimento, e quem o atesta

| Atributo | O que confirmar |
|---|---|
| Segregação | Quem recebe e atesta é pessoa distinta de quem requisitou e de quem comprou. Comprador que atesta o próprio recebimento fecha o ciclo sozinho |
| Conferência efetiva | Quantidade, especificação e, quando aplicável, qualidade. O atesto declara a conferência; o rastro é que a prova |
| Tempestividade | Registro no sistema na data do recebimento físico, não no fechamento do mês |
| Divergência | Recusa parcial, devolução e diferença de quantidade têm tratamento formal, com o pedido ajustado antes do pagamento |

### Os cortes

1. **Recebedor × comprador × requisitante**, em 100% da base. Coincidência é achado de segregação, e
   se conta por volume e por valor.
2. **Data do recebimento × data do pagamento.** Recebimento registrado depois do pagamento é
   recebimento formal, feito para liberar a nota que já foi paga. Inverteu a ordem, inverteu o
   controle.
3. **Recebimentos lançados em lote.** Dezenas de entradas com o mesmo carimbo de tempo, no fim do
   mês, por um mesmo usuário, é lançamento administrativo, não conferência de doca.
4. **Recebimento de quantidade exatamente igual ao pedido, em 100% dos casos.** Operação real tem
   divergência: falta, sobra, avaria. Base sem nenhuma divergência em milhares de entradas costuma
   significar que o recebimento copia o pedido em vez de conferir a carga.
5. **Recebimento sem pedido vigente.** Peça a demonstração em tela do bloqueio.

### Serviço: o atesto não é evidência de entrega

`PTP.R13`. Material deixa rastro (entrada em estoque, movimentação, contagem). Serviço deixa uma
assinatura. Para os maiores contratos de serviço, a pergunta é **que produto o serviço gerou**, e a
resposta tem de ser um objeto: relatório entregue, medição com quantitativo, registro de chamados
atendidos, lista de presença, apontamento de horas conferido contra a escala, foto datada da frente
de trabalho. Onde nada disso existe, o que se conclui é que o pagamento do serviço não tem
comprovação de entrega, e isso é achado, mesmo com atesto assinado por gestor competente.

Serviço de mão de obra dedicada tem um teste adicional que costuma ficar órfão entre compras e
pessoal: o efetivo faturado confere com o efetivo alocado? Confronte a relação de profissionais
faturada na medição com o registro de acesso ou o apontamento do período, e veja quantos postos
cobrados estiveram efetivamente em campo.

## 2. PTP.07: a conferência de três vias

O controle central do ciclo. **Pedido, recebimento e documento fiscal têm de casar em quantidade e
valor antes da liberação do pagamento**, e o casamento tem de ser automático com bloqueio, não uma
conferência visual de quem processa a nota.

Duas perguntas, nesta ordem:

**O controle existe no sistema?** Peça a demonstração em tela: tente liberar uma nota sem
recebimento, e uma com valor acima do pedido. A mesma marca de ERP faz a conferência num cliente e
não faz em outro, porque o parâmetro é de implantação. Confirme também qual é a **tolerância
parametrizada**: uma tolerância de valor generosa transforma o bloqueio em decoração, e o percentual
está na parametrização, não na política.

**O controle foi contornado?** Levante a relação de pagamentos liberados com bloqueio removido por
exceção: quem liberou, com que alçada, com que justificativa. É população pequena e de alto risco, e
se testa a 100%, pelo mesmo critério das notas canceladas do lado da receita.

Reperforme o casamento pela sua conta, fora do sistema, em base completa: pedido, entrada de
recebimento e documento fiscal, casados por pedido e por item, com consumo de pool
(`bases-e-conciliacao` §4). Os resíduos são o achado:

| Resíduo | O que investigar |
|---|---|
| Nota sem recebimento | Pagou-se o que não se recebeu, ou o recebimento não foi registrado. As duas hipóteses são achado |
| Recebimento sem nota | Passivo não registrado. Cresce no fechamento e é achado contábil, não de compras |
| Nota com valor acima do pedido | Diferença de preço aceita no pagamento e nunca renegociada no pedido |
| Nota sem pedido | Compra fora do processo |

**Lembre do que veio do elo anterior:** onde o pedido foi emitido depois da nota
(`contrato-e-aditivo` §2), as três vias fecham por construção. Marque esses casos e exclua-os da
conclusão de conformidade, declarando por quê.

## 3. Documento fiscal e retenções

Confira, por amostra dirigida aos maiores valores e por espécie de documento: se o emitente é o
fornecedor contratado e não um terceiro; se a descrição do documento corresponde ao objeto comprado;
se as retenções aplicáveis foram calculadas e recolhidas, inclusive em serviço com mão de obra; e se
a natureza da despesa lançada corresponde ao que foi comprado. **Nota de serviço emitida por empresa
cujo objeto social não comporta o serviço** é sinal de que o documento foi obtido para dar cobertura
ao pagamento, e merece investigação própria.

## 4. Pagamento em duplicidade

`PTP.R14`. O achado mais recuperável do ciclo, e o mais fácil de deixar passar, porque a busca ingênua
não encontra a maior parte dos casos.

**A busca ingênua**, chave exata fornecedor + número do documento + valor, encontra a duplicidade
grosseira: a mesma nota lançada duas vezes. Rode-a primeiro, porque é barata e às vezes resolve.

**As variantes**, que é onde estão os casos que sobreviveram ao controle do cliente, cada uma com sua
consulta sobre a base de pagamentos do período:

1. **Mesmo fornecedor, mesmo valor, datas próximas**, número do documento diferente. Pega a nota
   redigitada com erro de número, que é o caso mais comum de todos.
2. **Mesmo número de documento, fornecedores com cadastro duplicado.** Liga com o corte de
   duplicidade de cadastro de `cotacao-e-selecao` §4: sem unificar o fornecedor, a duplicidade fica
   invisível.
3. **Mesmo valor e mesma data, contas bancárias diferentes.** Um pagamento pela conta correta e outro
   por conta alterada.
4. **Documento pago e também incluído em pagamento agrupado** ao fornecedor. O agrupamento esconde o
   item duplicado dentro de um total que ninguém abre.
5. **Número de documento com zeros à esquerda, espaços ou prefixo de série.** Normalize o campo antes
   de comparar, ou a chave nunca casa. A normalização é o passo que decide o resultado do teste.
6. **Adiantamento pago e nota integral paga depois**, sem abatimento do adiantamento.
7. **Nota paga e também compensada como crédito** de devolução.

Para cada candidato, confirme antes de reportar: os dois débitos existem no extrato? Houve devolução
posterior do fornecedor? Confirmação com o extrato transforma suspeita em número, e este é um achado
em que o valor recuperado costuma pagar o trabalho.

## 5. A saída do caixa

1. **Pagamento × extrato bancário.** Par 5 de `ciclo-ptp` §4: casamento valor a valor com consumo de
   pool. Débito sem título correspondente é pagamento fora do sistema de contas a pagar, e é o
   resíduo mais grave.
2. **Titularidade da conta creditada × emitente do documento.** Pagamento a terceiro exige instrumento
   de cessão ou autorização formal. Sem isso, é desvio com aparência de rotina.
3. **Alçada de tesouraria.** A aprovação do pagamento é distinta da aprovação da compra, e o
   liberador bancário é distinto de quem cadastra o fornecedor e de quem lança o título.
4. **Prazo praticado × prazo contratado.** Pagamento antecipado sem desconto negociado é custo
   financeiro doado. Pagamento em atraso é multa e juros incorridos: quantifique o período e
   identifique a causa, que quase sempre está na conferência travada, não na tesouraria.
5. **Pagamentos em datas atípicas**, fora do calendário de pagamento, e pagamentos avulsos fora do
   lote, com a autorização de cada um.

## 6. O que fecha o elo com a contabilidade

`PTP.R15`. Concilie contas a pagar com o razão, por competência e por conta de despesa, e identifique
100% dos lançamentos manuais em conta de fornecedor. A conciliação só por total engana, pelo mesmo
motivo de sempre: diferença positiva de uma conta compensa a negativa de outra. Avalie ainda a
despesa sem nota no fechamento (provisão) e o seu reverso na competência seguinte.

### Planos A/B/C

- **Plano A**: bases de pedidos, recebimentos, documentos fiscais, títulos pagos e extratos, todas
  do mesmo período, com chave de vínculo; casamento em 100% e as consultas de duplicidade rodadas
  sobre a base inteira.
- **Plano B**: sem o número do documento na base de pagamentos: as variantes 1, 2 e 5 caem; rode a
  busca por fornecedor, valor e data, e declare que a duplicidade por número não foi testável, **e
  que a ausência do campo é deficiência do desenho do controle de pagamento**.
- **Plano C**: sem base de recebimentos (o recebimento não é registrado em sistema): a conferência de
  três vias não existe, e isso é a conclusão, não uma limitação. Redirecione o esforço para o
  confronto nota × pedido e para a comprovação de entrega por amostra dirigida.
- **Limitação**: *"A reperformance das três vias abrange [N] documentos, [X]% do valor pago no
  período; [M] pedidos foram emitidos após a emissão da nota e estão excluídos da conclusão de
  conformidade; a busca de duplicidade cobriu as sete variantes sobre a base normalizada."*

## O que entregar

1. Segregação recebedor × comprador × requisitante em 100%, com volume e valor das coincidências.
2. Cortes de tempestividade e de lote no recebimento, e a relação de recebimentos posteriores ao
   pagamento.
3. Comprovação de entrega dos maiores contratos de serviço, com o entregável identificado ou a
   declaração de ausência.
4. Resultado do teste do bloqueio de três vias, a tolerância parametrizada, e 100% das liberações por
   exceção com quem autorizou.
5. Reperformance do casamento das três vias com os quatro resíduos isolados e quantificados.
6. Relação de pagamentos em duplicidade candidatos e confirmados no extrato, com o valor recuperável.
7. Conciliação pagamentos × extrato, titularidade das contas creditadas, e a conciliação de contas a
   pagar com o razão, com os lançamentos manuais identificados pelo registro.
8. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`matriz-de-riscos-de-compras`, para promover à matriz qualquer risco novo que o mandato tenha
revelado. A redação do ponto e a calibração de severidade estão em `redacao-de-achados` e em
`acta-controles-internos:deficiencias-e-severidade`.
