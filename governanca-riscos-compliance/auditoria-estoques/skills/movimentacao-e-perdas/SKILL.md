---
name: movimentacao-e-perdas
description: Teste como o item entrou e saiu do estoque: entrada com documento fiscal, requisição e baixa, transferência entre depósitos, quebra e perda normal contra anormal, e ajuste de inventário sem aprovação. Acionar ao testar entradas e baixas, ao apurar perda ou quebra, ou ao investigar transferência e ajuste manual.
---

# Movimentação, perdas e ajuste

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Pergunta 4 do ciclo (`matriz-de-riscos-de-estoques` §1). Bloco **INV.06**.

O inventário mede o saldo num instante. Esta skill testa o que aconteceu entre dois instantes, e é
onde a perda que o inventário revelou ganha explicação ou deixa de ter.

**A fronteira com compras.** O recebimento é o elo final do ciclo de compras e o elo inicial do ciclo
de estoques. `acta-auditoria-compras:recebimento-e-pagamento` testa quem atestou, se conferiu e se o
pagamento casou com o pedido e a nota. Aqui se testa a outra metade do mesmo evento: se o que foi
recebido entrou no saldo, pela quantidade certa, no depósito certo e na data certa. Onde o plugin de
compras conclui que o recebimento existe, este plugin começa perguntando se ele virou estoque.

## 1. A entrada

| Atributo | O que confirmar |
|---|---|
| Documento fiscal | Toda entrada tem documento de origem: nota de compra, de devolução de cliente, de transferência, de retorno de industrialização, ou ordem de produção |
| Quantidade | Entrada no sistema igual à quantidade recebida e à do documento, na mesma unidade de medida |
| Data | Data do movimento igual à data do recebimento físico, não a do processamento da nota |
| Depósito e local | Entrada no depósito onde o item fisicamente está |
| Custo | Entrada com valor, pelos componentes de `custeio-e-giro` §2 |

### Os cortes

1. **Recebimento sem entrada de estoque correspondente**, casado por documento e por item, com
   consumo de pool. Resíduo dos dois lados é achado: recebeu e não entrou no saldo (estoque
   subavaliado, item físico sem registro), ou entrou no saldo sem recebimento (entrada digitada).
2. **Entrada sem documento fiscal vinculado**, em 100%. Separe por motivo declarado, e trate
   individualmente as que não têm motivo.
3. **Data da entrada contra data de emissão do documento fiscal.** Defasagem grande e sistemática
   concentra no fechamento e desloca custo entre competências.
4. **Unidade de medida da entrada contra a do documento.** Caixa lançada como unidade multiplica ou
   divide o saldo por dezenas, e o erro sobrevive porque o valor total fecha. Compare o custo unitário
   resultante com o histórico do item.
5. **Entrada retroativa**, lançada com data anterior à do lançamento. Quem lançou, quando, e com que
   autorização.

## 2. A saída

A saída legítima nasce de um destes: requisição aprovada, ordem de produção, venda faturada,
transferência, devolução a fornecedor, ou baixa por perda autorizada. Baixa sem nenhum desses é o
resíduo que interessa.

1. **Requisição contra baixa**, item a item e quantidade a quantidade. Baixa sem requisição vinculada
   se conta em 100%, por volume e por valor.
2. **Alçada da requisição.** Existe faixa de valor ou de quantidade com aprovação exigida? O sistema
   bloqueia? Peça a demonstração em tela, e depois teste a aderência na base.
3. **Segregação.** Quem requisita, quem aprova, quem separa e quem baixa no sistema. Custodiante que
   baixa o próprio estoque sem requisição de terceiro fecha o ciclo sozinho, e é a condição em que a
   falta não aparece até o inventário.
4. **Venda faturada contra baixa de estoque**, casado por item e por período. Faturamento sem baixa
   superavalia o estoque e o resultado; baixa sem faturamento é saída de mercadoria sem receita, e é
   o mais grave dos dois.
5. **Ordem de produção contra consumo.** Consumo real contra o previsto pela ficha técnica, por ordem
   e por item. Desvio recorrente do mesmo sinal é ficha técnica desatualizada ou perda de processo
   não registrada, e a diferença entre as duas hipóteses se resolve em campo.
6. **Baixa fora do horário de operação, em lote, ou em sequência de segundos**, com o usuário que
   executou. Liga com o ajuste manual de §4.

## 3. Transferência entre depósitos

O movimento mais ignorado e o que mais produz divergência de inventário, porque tem duas pontas e
quase sempre só uma é testada.

| Corte | O que procurar |
|---|---|
| Saída sem entrada na outra ponta | Item em trânsito eterno. Some o saldo e a idade: trânsito de meses não é trânsito, é item perdido entre depósitos |
| Entrada sem saída na origem | A ponta espelhada do anterior, e infla o saldo consolidado |
| Quantidade divergente entre as pontas | Perda no transporte não tratada, ou digitação |
| Custo não carregado | Item transferido que chega com custo diferente do de origem, ou com custo zero. Liga com `custeio-e-giro` §3 |
| Transferência no fim do período | Movimento entre filiais ou depósitos concentrado nos dias de fechamento desloca saldo entre unidades e entre resultados |

Some o saldo da conta de trânsito na data-base, abra por idade e por rota, e confronte com a
contagem. **Estoque em trânsito é a conta em que a falta se esconde com mais conforto**, porque tem
explicação pronta.

## 4. Perda, quebra e ajuste

### Perda normal contra perda anormal

A distinção decide o tratamento contábil e a leitura do achado, e é onde a maior parte dos clientes
não tem critério.

| | Perda normal | Perda anormal |
|---|---|---|
| O que é | Inerente ao processo: evaporação, quebra técnica de manuseio, sobra de corte, aparas | Fora do esperado: avaria por acidente, furto, vencimento por má gestão, desperdício |
| Tratamento | Compõe o custo do produto, dentro do limite esperado | Vai direto a resultado, não compõe custo de estoque |
| O que se testa | Existe percentual esperado, declarado e revisado? O realizado está dentro dele? | Está segregada em conta própria? Foi apurada e aprovada individualmente? |

**Perda anormal tratada como normal infla o custo do estoque e adia a despesa.** É achado contábil e
tem efeito tributário, e por isso costuma ser o ponto de maior resistência da discussão.

Dois testes práticos: compare o percentual de perda realizado com o esperado, por item e por
processo, ao longo da série do período, e procure o item cuja perda realizada é exatamente igual ao
percentual esperado, mês após mês. Perda que bate o parâmetro com precisão não foi medida, foi
lançada pelo parâmetro, e o que sobra de diferença real está em outro lugar.

### Descarte, sucata e devolução

Descarte exige documento e aprovação, e o item descartado tem de sair fisicamente. Confronte a
relação de descartes do período com a de itens provisionados de `obsolescencia-e-provisao` §5.
Sucata vendida gera receita: procure a receita correspondente, porque venda de sucata sem registro é
um esquema clássico e o valor costuma ser relevante em operação industrial.

Devolução a fornecedor: nota de devolução emitida, saída de estoque registrada, e **o crédito
efetivamente recebido**. Devolução com baixa de estoque e sem crédito é perda com aparência de
processo, e liga com o par adiantamento e nota integral de compras.

### O ajuste de inventário lançado sem aprovação

O achado que fecha o ciclo. O ajuste é a conta em que toda divergência acaba, e por isso é a conta
que precisa do controle mais apertado.

Levante **100% dos ajustes de inventário do período**, positivos e negativos, e para cada um: item,
quantidade, valor, data, usuário que lançou, motivo declarado, documento de suporte, aprovador e a
alçada dele.

Os cortes:

1. **Ajuste sem aprovação registrada**, ou aprovado pelo próprio usuário que lançou. É a condição que
   permite cobrir falta com um lançamento, e se conta em 100%.
2. **Ajuste positivo e negativo do mesmo item no mesmo período.** Estão se cancelando, e o motivo
   quase nunca é o declarado.
3. **Ajuste fora da data do inventário.** Ajuste de inventário só deveria existir depois de uma
   contagem. Ajuste em mês sem contagem é acerto de saldo, e o nome da conta está encobrindo o fato.
4. **Concentração por usuário, por depósito e por item.** Usuário que responde pela maior parte dos
   ajustes, ou item que é ajustado todo mês, é a lista curta do trabalho.
5. **Ajuste de valor sem ajuste de quantidade**, que muda o custo unitário sem tocar no físico, e o
   inverso.
6. **Ajuste imediatamente anterior à contagem.** Saldo do sistema acertado na véspera faz a
   acuracidade subir sem que nada tenha melhorado, e invalida o indicador. Compare a data de cada
   ajuste com a data-base da contagem.

O corte 6 é o que mais rende quando a acuracidade reportada pelo cliente é muito alta e a operação
não parece justificar.

### Planos A/B/C

- **Plano A**: razão de movimentação por item e por transação, com tipo de movimento, usuário, data e
  hora, documento vinculado e aprovador, mais as bases de recebimento, requisição, faturamento e
  ordens de produção. Todos os cortes em 100%.
- **Plano B**: base de movimentação sem usuário ou sem data e hora: os cortes de concentração por
  usuário e de lançamento em lote caem. Rodam os cortes de vínculo documental e de casamento entre
  bases, e a ausência do campo de usuário **se reporta como deficiência de desenho da trilha de
  auditoria**, não como limitação de escopo.
- **Plano C**: sem razão de movimentação, apenas saldos: nenhum teste desta skill roda. Restam a
  variação de saldo entre datas explicada por totais e a leitura dos procedimentos, e a conclusão
  registra que a movimentação não foi testada.
- **Limitação**: *"Os cortes de movimentação cobriram 100% das [N] transações do período; [M]
  ajustes de inventário, [X]% do valor ajustado, não têm aprovação registrada no sistema; a
  conciliação de transferências alcançou [K] rotas, [Y]% do valor transferido."*

## 5. O fechamento com a contabilidade

Concilie a movimentação de estoque com o razão, período a período: saldo inicial, mais entradas,
menos saídas, mais ou menos ajustes, igual a saldo final, e o saldo final igual ao razão. **A
conciliação só por total engana**, pelo motivo de sempre. Abra por conta e por natureza de movimento.

Identifique 100% dos lançamentos manuais em conta de estoque, fora do módulo de movimentação. Toda
diferença entre o controle de estoque e o razão passa por um deles.

## O que entregar

1. Casamento recebimento contra entrada de estoque, com os dois resíduos quantificados.
2. Entradas sem documento fiscal, entradas retroativas e divergências de unidade de medida, em 100%.
3. Baixas sem requisição vinculada, com volume e valor, e o teste de segregação entre requisitar,
   aprovar, separar e baixar.
4. Casamento faturamento contra baixa, e consumo real contra ficha técnica por ordem de produção.
5. A conciliação de transferências pelas duas pontas, com o saldo e a idade do estoque em trânsito.
6. Perda normal e anormal segregadas, com o percentual realizado contra o esperado por item e a série
   do período.
7. Descartes confrontados com a provisão, e a receita de sucata correspondente ou a ausência dela.
8. Os seis cortes sobre 100% dos ajustes de inventário, com a relação dos ajustes sem aprovação e dos
   lançados imediatamente antes da contagem.
9. A conciliação da movimentação com o razão e os lançamentos manuais identificados.

## Próximo passo

`matriz-de-riscos-de-estoques`, para promover à matriz qualquer risco novo que o mandato tenha
revelado. A redação do ponto e a calibração de severidade estão em `redacao-de-achados` e em
`acta-controles-internos:deficiencias-e-severidade`.
