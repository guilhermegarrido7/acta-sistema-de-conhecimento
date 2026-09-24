---
name: custeio-e-giro
description: Teste como o estoque é avaliado e quanto ele gira: método de custeio e sua consistência, custo médio contra PEPS, item com custo zerado ou negativo, giro e cobertura em dias. Acionar ao validar o custo unitário do estoque, ao avaliar troca de método, ao investigar saldo sem custo, ou ao medir giro e item parado.
---

# Custeio e giro

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Pergunta 2 do ciclo (`matriz-de-riscos-de-estoques` §1). Bloco **INV.04**.

A quantidade certa avaliada pelo custo errado produz saldo errado, e o erro de custeio é mais difícil
de ver que o erro de contagem, porque não tem contraprova física. Ele aparece na margem, e a margem
costuma ser explicada por outra coisa.

## 1. O método adotado, e a exigência de consistência

A norma contábil brasileira de estoques admite mais de um critério de atribuição de custo e exige
que **o mesmo critério seja aplicado de forma consistente a estoques de mesma natureza e uso**.
Também exige que o estoque seja mensurado **pelo menor valor entre o custo e o valor realizável
líquido**, e veda a inclusão de certos gastos no custo, entre eles desperdício anormal de material e
de mão de obra, armazenagem que não seja necessária à etapa seguinte de produção, despesa
administrativa que não contribua para trazer o estoque à condição atual, e despesa de venda. Trate
o menor entre custo e valor realizável líquido em `obsolescencia-e-provisao`; aqui fica a formação
do custo.

**Não cite número de item da norma sem tê-lo à vista.** Descreva a regra pelo conteúdo. O achado se
sustenta no fato e no critério, e a citação errada derruba os dois.

Quatro perguntas, nesta ordem:

1. **Qual método está declarado** em política contábil e em nota explicativa?
2. **Qual método o sistema executa?** Peça a parametrização em tela. Método declarado e método
   parametrizado divergem com frequência, e quando divergem o declarado costuma ser o que está na
   nota explicativa de três anos atrás.
3. **O método é o mesmo para estoques de mesma natureza?** Método diferente por depósito, por filial
   ou por linha de produto, sem diferença de natureza que o justifique, é inconsistência e é achado.
4. **Houve troca de método no período?** Troca é mudança de política contábil, com efeito e
   divulgação próprios, e não se faz por conveniência de resultado.

### Reperformance do custo unitário

Reperforme por conta própria, fora do sistema, para uma seleção dirigida aos itens de maior valor
acumulado e aos de maior oscilação de preço no período:

- **Custo médio ponderado**: reconstrua o razão de movimentação do item, entrada por entrada e saída
  por saída, e recalcule o custo médio a cada entrada. O erro clássico é a média aritmética simples
  dos preços de compra, que ignora a quantidade e sobe o custo quando o lote pequeno é caro.
- **PEPS**: reconstrua as camadas de custo por lote e confirme que a saída consumiu a camada mais
  antiga. O erro clássico é a camada que não se esgota nunca, porque a baixa foi feita pelo custo
  médio numa implantação que se dizia PEPS.

**Custo médio contra PEPS não é escolha neutra.** Em inflação de insumo, o custo médio deixa no
estoque um custo mais alto que o PEPS deixaria e reduz o custo do produto vendido no período; em
deflação, o efeito inverte. Quantifique a diferença nos itens relevantes. Se ela for material, ela
entra no relatório, mesmo quando o método aplicado está correto, porque é informação de que a
administração precisa para ler a própria margem.

## 2. O que compõe o custo de entrada

| Componente | O que confirmar |
|---|---|
| Preço da nota | Confere com o documento fiscal e com o pedido (`acta-auditoria-compras:recebimento-e-pagamento`) |
| Frete e seguro sobre a compra | Incluídos no custo quando são necessários para trazer o item à condição atual, e rateados por critério declarado |
| Tributos recuperáveis | Excluídos do custo. Tributo recuperável somado ao custo infla estoque e infla margem depois |
| Tributos não recuperáveis | Incluídos. Depende do regime da Companhia e do item, e o regime se confirma, não se presume |
| Desconto e bonificação | Deduzidos do custo. Bonificação registrada como receita em vez de redutora do custo distorce os dois lados |
| Perda anormal | Não compõe custo. Vai direto a resultado |
| Armazenagem | Só compõe quando necessária a uma etapa seguinte do processo |

Em estoque de produção, some ao teste: o rateio de custo indireto por critério declarado e estável, e
a capacidade usada no rateio de custo fixo. **Custo fixo rateado por capacidade real em período de
ociosidade joga ociosidade para dentro do estoque**, adia a despesa e infla o ativo. O rateio se faz
pela capacidade normal, e a diferença vai a resultado no período.

## 3. Os cortes de base que todo estoque tem de passar

Rodam sobre a base inteira, custam pouco e quase sempre rendem:

1. **Saldo em quantidade positivo com valor zero.** Item existe fisicamente e não tem custo
   atribuído. Entrou sem preço, por transferência mal parametrizada, por bonificação ou por ajuste de
   inventário sem custo. Some a quantidade e estime o efeito.
2. **Saldo em valor positivo com quantidade zero.** O espelho do anterior, e o mais grave dos dois,
   porque é valor no ativo sem lastro físico nenhum.
3. **Custo unitário negativo, ou saldo em valor negativo.** Não existe em operação. Existe em base, e
   significa baixa por valor maior que o saldo, ou devolução lançada a preço diferente do de entrada.
   Trate 100% dos casos, um a um.
4. **Saldo em quantidade negativo.** Saiu mais do que entrou: a saída foi registrada antes da entrada,
   ou a entrada nunca foi registrada. Liga direto com o corte de `movimentacao-e-perdas` §1.
5. **Custo unitário fora de faixa contra o histórico do próprio item.** Variação de uma ordem de
   grandeza para cima ou para baixo entre períodos é digitação de quantidade ou de unidade de medida,
   e o erro de unidade (caixa lançada como unidade) é o mais comum de todos.
6. **Custo unitário do mesmo item divergente entre depósitos ou entre filiais.** Ou o método não é o
   mesmo, ou a transferência não carregou custo.
7. **Item com custo igual ao de outro item de descrição idêntica e código diferente.** Cadastro
   duplicado, e liga com o par falta e sobra de `acuracidade-e-inventario` §3.

Cada corte rende dois números: quantos itens e quanto em reais. O primeiro dimensiona o controle, o
segundo dimensiona a exposição, e o relatório precisa dos dois.

## 4. Giro, cobertura e o item que não se move

Giro e cobertura não são indicadores de gestão emprestados: são o teste que separa estoque de ativo
de estoque de problema, e alimentam direto a provisão de `obsolescencia-e-provisao`.

| Indicador | Cálculo | Leitura |
|---|---|---|
| Giro | Custo do produto vendido do período ÷ estoque médio do período | Quantas vezes o estoque se renovou |
| Cobertura em dias | Estoque final ÷ consumo médio diário do período | Quantos dias de operação o saldo atual sustenta |

Três disciplinas de cálculo, e as três mudam o número:

- **Estoque médio, não estoque final**, no denominador do giro. Estoque final numa data de baixa
  sazonalidade produz giro alto e falso.
- **Custo, não receita**, no numerador. Receita sobre estoque a custo mistura margem no indicador e
  impede comparar períodos com mix diferente.
- **Por classe, nunca só consolidado.** Giro consolidado é média entre matéria-prima, produto em
  processo, produto acabado e material de consumo, que giram de forma diferente por natureza. O
  número consolidado esconde a classe parada dentro da classe rápida, que é exatamente o que o teste
  procura.

### Item sem movimentação

Corte de base, com faixas de idade desde a última saída, tipicamente em três ou quatro degraus até
acima de um ano. Para cada faixa: quantidade de itens, valor, e percentual do estoque total.

Duas leituras diferentes, e confundi-las é erro comum:

- **Item sem movimentação de saída**, com saldo, é candidato a obsolescência.
- **Item sem movimentação nenhuma, nem entrada nem saída, por vários períodos, com saldo**, é
  candidato a algo pior: saldo que não existe fisicamente e nunca foi contado, sobrevivendo no
  sistema porque ninguém o toca. Cruze com a contagem: item nesta situação que não apareceu na
  contagem é falta, não é estoque parado.

Cruze ainda item sem saída no período com **compra do mesmo item no período** (`acta-auditoria-compras`).
Comprar o que está parado no depósito é achado de planejamento com valor imediato, e a evidência é
uma consulta de duas bases.

### Planos A/B/C

- **Plano A**: razão de movimentação por item com quantidade, valor e custo unitário por transação,
  do período inteiro, mais a parametrização de custeio em tela. Reperformance do custo unitário
  transação a transação nos itens selecionados e os sete cortes sobre a base inteira.
- **Plano B**: só saldos por item em duas datas, sem o razão de movimentação: a reperformance do
  custo cai. Rodam os cortes de saldo (1 a 4 e 6) e o giro por classe, e se declara que o método de
  custeio não foi reperformado, apenas confirmado por parametrização e por leitura de política.
- **Plano C**: só saldo consolidado por conta contábil: não há teste de custeio. Restam a variação
  do giro consolidado entre períodos e a leitura da política, e a conclusão registra que a
  composição do saldo não foi testada.
- **Limitação**: *"A reperformance do custo unitário abrange [N] itens, [X]% do valor do estoque; os
  cortes de base cobriram 100% das [M] linhas de saldo na data-base; o giro foi apurado por classe e
  não é comparável ao indicador consolidado divulgado pela Companhia."*

## O que entregar

1. O método declarado, o método parametrizado no sistema e o confronto entre os dois, com a
   evidência de tela.
2. A reperformance do custo unitário dos itens selecionados, com o cálculo reconstruído e a
   diferença apurada item a item.
3. A quantificação da diferença entre custo médio e PEPS nos itens relevantes, quando material.
4. A composição do custo de entrada testada por componente, com o tratamento de tributo recuperável,
   frete, desconto e bonificação.
5. Os sete cortes de base, cada um com quantidade de itens e valor, e o tratamento individual dos
   custos negativos e dos saldos negativos.
6. Giro e cobertura em dias, por classe de estoque, com a série do período.
7. O aging de item sem movimentação por faixa, separado entre sem saída e sem movimentação nenhuma, e
   o cruzamento com a contagem e com as compras do período.
8. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`obsolescencia-e-provisao`, que recebe direto o aging e o giro apurados aqui e decide quanto do
custo confirmado não se realiza.
