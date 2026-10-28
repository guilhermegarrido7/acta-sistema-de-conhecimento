---
name: requisicao-e-alcada
description: Teste a origem da compra e a aprovação por alçada, incluindo a caça ao fracionamento. Acionar ao confrontar data de requisição com data de pedido, ao avaliar especificação escrita para um fornecedor, ao testar a tabela de alçadas e o bloqueio sistêmico, ou ao apurar compras quebradas para furar a faixa de aprovação.
---

# Requisição, especificação e alçada

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elos 1 e 2 do ciclo (`ciclo-ptp` §2). Blocos **PTP.01** e **PTP.02**.

## Por que este elo vem primeiro

A compra irregular quase nunca começa no pagamento. Ela começa na requisição que nasceu depois da
conversa com o fornecedor, ou na especificação que já tinha dono. Tudo o que vem depois é
consequência formalmente correta de uma origem viciada, e nenhum teste dos elos seguintes acusa isso.

Consequência prática: **peça a tabela de alçadas antes de pedir a base de pedidos**. Sem a faixa, a
base de pedidos é uma lista de valores sem régua, e o teste mais produtivo do ciclo não existe.

## 1. PTP.01: a requisição e o que ela tem de provar

| Atributo | O que confirmar |
|---|---|
| Existência e anterioridade | Requisição registrada em sistema, com data e hora **anteriores** ao pedido e a qualquer proposta de fornecedor. |
| Quem requisitou | Requisitante é a área que usa, identificado por cargo, e não o próprio comprador. Requisição aberta por compras é compras comprando de si mesma. |
| Especificação | Quantidade, unidade, prazo necessário e descrição técnica suficiente para cotar. Descrição que só o fornecedor entende é especificação do fornecedor. |
| Enquadramento | Centro de custo, conta contábil e natureza do gasto (custeio, investimento, emergencial), com saldo orçamentário verificado na emissão. |

### O teste de anterioridade

Confronte, em 100% da base, três carimbos de tempo: **data e hora da requisição**, **data da proposta
mais antiga** e **data e hora do pedido**. Três leituras:

| Ordem encontrada | O que costuma ser |
|---|---|
| Requisição antes de proposta, proposta antes de pedido | Conforme |
| Proposta anterior à requisição | Fornecedor escolhido antes do processo. A requisição está formalizando uma decisão tomada |
| Requisição no mesmo dia do pedido, em sequência de minutos | Processo montado em bloco para regularizar compra já feita |

Peça a base com o carimbo de tempo, não só a data. A data esconde a sequência de minutos, e é a
sequência que conta a história.

### A especificação que já tem dono

Leia a especificação dos maiores pedidos e dos pedidos com fornecedor único. Sinais, em ordem de
força: marca e modelo citados sem a ressalva de equivalência; conjunto de atributos que, somados,
descrevem um produto específico; prazo de entrega incompatível com quem não tem o item em estoque;
exigência de certificação, representação ou experiência que reduz o universo a um nome.

Especificação restritiva não é achado por si só: às vezes a padronização do parque é a razão legítima
e está documentada. **O achado é a restrição sem justificativa técnica registrada e sem aprovação de
quem não é o requisitante.**

### Planos A/B/C

- **Plano A**: base de requisições e de pedidos com carimbo de tempo, requisitante por cargo, centro
  de custo e vínculo entre os documentos; confronto em 100%.
- **Plano B**: sem carimbo de tempo, só data: o teste de sequência de minutos cai; mantenha o de
  anterioridade por dia e declare a perda de resolução.
- **Plano C**: sem base de requisições (requisição por e-mail ou verbal): conclua pela ausência do
  controle de origem, e reoriente o esforço para a alçada e para a cotação.
- **Limitação**: *"O confronto de anterioridade foi feito sobre [N] pedidos, [X]% do total do
  período; a base disponibilizada traz data sem hora, e a sequência intradiária não foi testável."*

## 2. PTP.02: a tabela de alçadas e a aprovação

Peça a tabela de alçadas **vigente e as anteriores** do período auditado, com a data de cada versão.
Alçada que mudou no meio do período e foi ignorada no corte produz falso positivo em metade da base,
e o cliente vai encontrar isso antes de você.

O que se testa, em 100% dos pedidos:

1. **Aprovador contra faixa**: quem aprovou tinha poder para aquele valor, na versão da tabela
   vigente na data. Cruze o aprovador com o cargo dele na data, não com o cargo de hoje.
2. **Anterioridade da aprovação**: data e hora da aprovação anteriores às do pedido. Aprovação
   posterior é ratificação, e ratificação se conta à parte.
3. **Aprovação por delegação**: existe formalização da delegação, com período e limite? Delegação
   verbal em período de férias é a origem clássica da aprovação sem poder.
4. **Segregação**: requisitante, comprador e aprovador são pessoas distintas. Aprovação do próprio
   requisitante é autoaprovação, mesmo que o valor esteja na faixa dele.

**O bloqueio é o que separa política de controle.** Peça a **demonstração em tela** da tentativa de
emitir pedido acima da faixa sem a aprovação correspondente. Bloqueio declarado em política e não
demonstrado é desenho sem efetividade, e a diferença entre os dois é o achado. A distinção formal
está em `acta-controles-internos:desenho-vs-efetividade`.

**Sinais na trilha de aprovação** que valem corte próprio: aprovações em sequência de poucos segundos
para pedidos distintos (aprovação em lote sem leitura), aprovações fora do horário de trabalho e em
dias não úteis, e o mesmo usuário aprovando de dois pontos de acesso simultâneos, que é senha
compartilhada.

## 3. Fracionamento: o teste que define o trabalho

`PTP.R04`. A necessidade maior que a alçada do comprador é quebrada em pedidos menores. Cada pedido,
olhado sozinho, está aprovado por quem podia. A alçada superior nunca viu a compra.

**O teste é de população, e nunca de amostra.** Amostra de 25 pedidos sobre 4 mil não encontra
fracionamento nem por acidente: o padrão só existe no agregado.

### A bateria

1. **Histograma por faixa de alçada.** Distribua todos os pedidos do período por valor, com as linhas
   de corte da tabela de alçadas marcadas. Concentração imediatamente **abaixo** de um limite é o
   achado, e o gráfico é a peça de evidência. Compare a densidade da faixa dos 10% logo abaixo do
   limite com a dos 10% logo acima.
2. **Agrupamento por fornecedor e janela.** Some, por fornecedor, os pedidos emitidos em janelas de
   7, 30 e 90 dias. Todo grupo cuja soma ultrapassa a faixa do aprovador que assinou cada pedido
   individual entra na lista de suspeitos.
3. **Agrupamento por categoria e por requisitante.** O fracionamento nem sempre usa o mesmo
   fornecedor. Agrupe também por categoria de item e por centro de custo requisitante: a mesma
   necessidade comprada de três fornecedores diferentes no mesmo mês é o mesmo desvio, mais elaborado.
4. **Pedidos irmãos.** Dentro de cada grupo suspeito, confronte a descrição dos itens. Descrições
   idênticas ou sequenciais (partes do mesmo conjunto, mesma obra, mesmo projeto) confirmam
   necessidade única. Descrições heterogêneas costumam ser reposição de rotina, e saem da lista.
5. **Valores redondos e repetidos.** Pedidos sucessivos pelo mesmo valor, logo abaixo do limite, são
   o padrão mais grosseiro e o mais comum.

### Como se conclui

Fracionamento é conclusão sobre intenção, e intenção não se prova com planilha. **Conclua sobre o
fato e sobre o controle, não sobre a pessoa**: a necessidade única foi atendida por N pedidos que
somam R$ X, valor que exigiria aprovação da faixa Y, e nenhum dos N passou por ela. Quantifique
quantos grupos, quanto valor total, e que percentual do gasto do período isso representa.

O controle ausente também se nomeia: não existe apuração de alçada por necessidade e por período, só
por documento. Essa é a deficiência de desenho que permite o resto.

### Planos A/B/C

- **Plano A**: base completa de pedidos com valor, data, fornecedor, categoria, requisitante,
  comprador e aprovador, mais todas as versões da tabela de alçadas no período.
- **Plano B**: sem categoria na base: agrupe por fornecedor e por descrição normalizada do item, e
  declare que o agrupamento por categoria não foi possível.
- **Plano C**: sem a tabela de alçadas formalizada: o teste de fracionamento perde a régua. Conclua
  pela **ausência de tabela de alçadas formalizada**, que é achado de desenho mais grave que qualquer
  fracionamento individual, e teste a segregação entre requisitante, comprador e aprovador.
- **Limitação**: *"A apuração de fracionamento abrange [N] pedidos, [X]% do valor comprado no
  período, agrupados por fornecedor e janela de 30 dias; a tabela de alçadas aplicada é a vigente
  desde [data], e o período anterior a ela foi avaliado contra a versão então vigente."*

## 4. Compra emergencial e dispensa de requisição

Urgência é a porta de entrada legítima que vira rotina. Apure, por comprador, por categoria e por
fornecedor, o percentual de compras classificadas como emergenciais. Três leituras:

- **Emergencial concentrada num comprador** é padrão de conduta, não de operação.
- **Emergencial concentrada num fornecedor** é direcionamento com outro nome.
- **A mesma urgência repetida** (o mesmo item, todo mês, sempre em caráter emergencial) é falha de
  planejamento que alguém escolheu não corrigir, porque a urgência dispensa a cotação.

Para a amostra dirigida das maiores emergenciais, peça a justificativa e pergunte o que **impedia**
a compra pelo fluxo normal. Justificativa que descreve a necessidade sem explicar a impossibilidade
do fluxo normal não é justificativa.

## O que entregar

1. Confronto requisição × proposta × pedido, por carimbo de tempo, em 100% da base, com as inversões
   de ordem isoladas e quantificadas.
2. Leitura das especificações restritivas, com a justificativa técnica e a aprovação de cada uma, ou
   a declaração de ausência.
3. Teste de alçada em 100%: aprovador × faixa vigente na data, anterioridade, delegação e segregação.
4. Resultado do teste do bloqueio sistêmico, com a evidência da demonstração em tela.
5. O histograma por faixa de alçada e a relação de grupos suspeitos de fracionamento, com valor total
   e a faixa de aprovação que foi contornada.
6. O percentual de compras emergenciais por comprador, categoria e fornecedor.
7. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`cotacao-e-selecao`. A requisição fixada aqui é a data de referência de todo o teste de anterioridade
das propostas lá.
