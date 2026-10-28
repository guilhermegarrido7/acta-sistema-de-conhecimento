---
name: obsolescencia-e-provisao
description: Teste se o estoque vale o que está registrado: critério de provisão, idade do saldo, valor realizável líquido abaixo do custo e a provisão que nunca vira baixa efetiva. Acionar ao avaliar provisão para perda ou obsolescência, ao testar item vencido ou parado, ou ao comparar custo com valor de realização.
---

# Obsolescência e provisão para perda

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Pergunta 3 do ciclo (`matriz-de-riscos-de-estoques` §1). Bloco **INV.05**.

Existe e está avaliado pelo custo certo, e ainda assim pode não valer isso. A norma contábil
brasileira de estoques exige mensuração **pelo menor valor entre o custo e o valor realizável
líquido**, que é o preço estimado de venda no curso normal dos negócios, deduzido dos custos
estimados para concluir a produção e dos necessários para realizar a venda. A avaliação é feita
**item a item**, ou por grupo de itens semelhantes e relacionados, e não pelo estoque inteiro de uma
vez. Quando a circunstância que gerou a redução deixa de existir, a redução é revertida, limitada ao
custo original.

**Não cite número de item da norma sem tê-lo à vista.** Descreva a regra pelo conteúdo.

A conta de provisão é o lugar do balanço onde a subjetividade é maior e a documentação é menor. Dois
achados de sinal contrário convivem no mesmo cliente: provisão insuficiente, que infla o ativo, e
provisão usada como reserva, constituída em ano bom e revertida em ano ruim.

## 1. O critério, antes do número

Comece pelo critério escrito, e teste o critério antes de testar o cálculo. Cinco perguntas:

1. **Existe critério formal, aprovado, anterior ao exercício?** Critério montado no fechamento, com
   o saldo já conhecido, não é critério: é a explicação do número que se queria.
2. **O critério é quantitativo e reproduzível?** Percentual por faixa de idade ou de giro é
   reproduzível. "Análise da gerência sobre itens sem perspectiva de uso" não é, e obriga a auditoria
   a testar item a item o que deveria ser testado por regra.
3. **O critério é o mesmo do exercício anterior?** Mudança de percentual de faixa muda o resultado e
   é mudança de estimativa, com divulgação própria.
4. **O critério cobre as causas certas?** Obsolescência técnica, vencimento, avaria física e queda de
   preço de venda são causas diferentes, com evidência diferente. Critério que só olha idade perde a
   queda de preço, que é a que aparece mais rápido.
5. **Quem aprova a provisão e quem aprova a baixa são pessoas distintas de quem custodia?**

## 2. Reperformance do cálculo

Recalcule a provisão por conta própria, sobre a base inteira de saldo por item, aplicando o critério
escrito. Compare com a provisão contabilizada, item a item, e isole os três resíduos:

| Resíduo | O que significa |
|---|---|
| Item que o critério provisiona e a Companhia não provisionou | Provisão insuficiente. Quantifique |
| Item que a Companhia provisionou e o critério não alcança | Provisão discricionária. Peça a justificativa individual |
| Item provisionado em percentual diferente do que o critério manda | Erro de aplicação ou exceção não documentada |

A diferença total entre a provisão recalculada e a contabilizada é o número que vai ao relatório, e
ela precisa vir acompanhada dos três resíduos separados, porque eles têm causas distintas e
tratamentos distintos.

## 3. Idade do estoque, e o que ela mede

O aging de estoque não é o aging de contas a receber, e a diferença é de data-base. Três réguas
possíveis, e cada uma responde a coisa diferente:

| Régua | Data-base | O que mede |
|---|---|---|
| Idade desde a entrada | Data de aquisição ou de produção do lote | Quanto tempo o item está em casa. É a régua para perecível e para item com validade |
| Idade desde a última saída | Última movimentação de saída | Se o item ainda tem demanda. É a régua para obsolescência técnica |
| Cobertura em dias | Consumo médio do período | Se o saldo é desproporcional à demanda atual, mesmo em item que gira |

**Item que gira e está superestocado não aparece nas duas primeiras réguas e aparece na terceira.**
É o caso do item com cobertura de vários anos de consumo: cada unidade é nova, o item saiu semana
passada, e a maior parte do saldo nunca vai ser usada. Provisão baseada só em idade perde esse caso,
que costuma ser o de maior valor.

Monte o aging por faixa, com quantidade de itens, valor e percentual do estoque, e cruze as três
réguas. Os itens que aparecem em duas ou nas três réguas são a lista curta que sustenta o achado.

O estado de conservação registrado na contagem (`acuracidade-e-inventario`) entra aqui: item contado
como avariado ou inservível e não provisionado é o achado mais direto que existe nesta skill, porque
a evidência é a própria planilha de contagem do cliente.

## 4. Valor realizável líquido abaixo do custo

O teste que quase nunca é feito, porque exige dado de fora do estoque. Selecione os itens de maior
valor acumulado e os de maior aging, e para cada um:

1. **Levante o preço de venda praticado recentemente**, na base de faturamento, depois da data-base
   de preferência. Preço de tabela não serve: o que vale é o preço com desconto, o preço efetivo.
2. **Deduza os custos para concluir e para vender**: o que falta gastar para o item ficar pronto,
   comissão, frete de saída, tributo sobre a venda que não seja recuperável.
3. **Compare com o custo unitário registrado.** Realizável líquido abaixo do custo exige redução ao
   menor dos dois, item a item.

Três armadilhas:

- **Comparação por grupo em vez de item a item.** Agrupar dilui o item com perda dentro do grupo com
  margem e faz a redução desaparecer. A norma admite agrupar apenas itens semelhantes e relacionados,
  e o teste é confirmar que o agrupamento usado atende a isso.
- **Venda abaixo do custo tratada como decisão comercial pontual.** Venda recorrente abaixo do custo
  é evidência de valor realizável líquido menor, e o argumento de que "foi uma negociação
  específica" se testa pela frequência na base de faturamento.
- **Matéria-prima.** Matéria-prima cujo custo está acima do preço de reposição não se reduz
  automaticamente: se o produto acabado em que ela entra continua vendendo acima do custo, não há
  perda. O teste desce ao produto final, e é onde a análise superficial erra por excesso.

## 5. A provisão que nunca vira baixa efetiva

O achado característico desta skill, e o que mais sobrevive a auditorias sucessivas.

O item é provisionado a 100%, o resultado já absorveu a perda, e o item continua no ativo bruto, no
mesmo local, ano após ano. A provisão cresce ou fica estável, e a baixa física nunca acontece.

Três consequências, e nenhuma é sobre o resultado, o que explica por que ninguém trata:

1. **O ativo bruto e a provisão crescem juntos**, e o balanço passa a carregar duas linhas grandes
   que se cancelam. Indicador calculado sobre o bruto (giro, cobertura, acuracidade por valor) fica
   distorcido.
2. **O item ocupa espaço físico e consome contagem** em todo inventário, e continua entrando na
   apuração de acuracidade como item vivo.
3. **A provisão vira reserva.** Saldo provisionado sem baixa é disponível para reversão a qualquer
   fechamento, e é o mecanismo mais discreto de administração de resultado que existe em estoque.

Como se testa, e é rápido:

- **Aging da própria provisão**, por data de constituição. Saldo provisionado há mais de um exercício
  sem baixa correspondente é o número do achado.
- **Reversões do período**, uma a uma: qual item, que valor, qual circunstância deixou de existir, e
  quem aprovou. Reversão sem circunstância identificada é ajuste de resultado.
- **Confronto baixa física contra baixa contábil.** O item provisionado saiu do depósito? Há
  documento de descarte, de venda como sucata ou de doação? Sucata vendida sem receita registrada é
  um segundo achado escondido dentro do primeiro.
- **Movimentação da conta de provisão**, de saldo inicial a final: constituição, reversão, baixa por
  realização. Conta que só tem constituição e reversão, sem baixa por realização, confirma o padrão.

### Planos A/B/C

- **Plano A**: saldo por item com data de entrada e data da última saída, base de faturamento por
  item, movimentação da conta de provisão por item, e o critério formal aprovado. Reperformance
  integral e teste de realizável líquido por item.
- **Plano B**: sem data da última saída na base de saldo: o aging por giro cai. Reconstrua a última
  saída pelo razão de movimentação do período, declare que a régua alcança apenas o período coberto,
  e sustente o teste na idade de entrada e na cobertura.
- **Plano C**: sem critério formal escrito: não há o que reperformar, e a ausência do critério **é o
  achado principal**. Substitua a reperformance por um cálculo próprio, por faixa de aging, aplicado
  como referência, e apresente o resultado como dimensionamento da exposição, não como provisão
  devida.
- **Limitação**: *"O teste de valor realizável líquido abrange [N] itens, [X]% do valor do estoque;
  a provisão foi recalculada sobre 100% das linhas de saldo pelo critério formal vigente; [M] itens
  provisionados não puderam ter a baixa física confirmada por ausência de documento de descarte."*

## O que entregar

1. O critério formal de provisão, com a data de aprovação, e as cinco verificações de §1 respondidas.
2. A provisão recalculada sobre a base inteira, com os três resíduos separados e quantificados.
3. O aging pelas três réguas, com a lista curta dos itens que aparecem em mais de uma.
4. Os itens contados como avariados ou inservíveis e não provisionados, com o valor.
5. O teste de valor realizável líquido dos itens selecionados, com o preço praticado, as deduções e
   a comparação com o custo, item a item.
6. O aging da provisão por data de constituição e o valor provisionado há mais de um exercício sem
   baixa.
7. As reversões do período, uma a uma, com a circunstância identificada e o aprovador.
8. A movimentação da conta de provisão, de saldo inicial a final, aberta por natureza.

## Próximo passo

`movimentacao-e-perdas`, que testa como o item entrou e saiu, e onde a baixa que falta aqui deveria
ter sido registrada.
