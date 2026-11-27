# Ano corrente parcialmente realizado, preço e utilização

Cobre o que a árvore de receita do passo 1 não resolve sozinha quando a data-base cai no meio do ano
e o negócio vende capacidade. O driver específico de cada negócio fica no checkpoint do engajamento;
aqui está o método, e os números do caso A ficam lá também.

## 1. Quando a maior parte do ano já aconteceu

Se a data-base deixa a maior parte do ano realizada (no caso A, nove dos doze meses), projetar o ano
corrente por drivers descarta o melhor dado disponível, que é o realizado. A regra:

1. **Ano corrente = realizado até a data-base × (1 + fator de sazonalidade).** O primeiro ano
   projetado por drivers é o seguinte.
2. **O fator é a razão entre o resto do ano e o realizado até a data-base**, calculada em cada ano
   histórico e tirada a média. Se o último trimestre equivale a 40% do acumulado dos nove primeiros
   meses em média, o ano é o acumulado × 1,40. Não é crescimento de trimestre contra trimestre, que
   mistura sazonalidade com tendência.
3. **Declare a sensibilidade.** Cada ponto do fator vale 1% do realizado base. Mostre a faixa entre o
   menor e o maior fator histórico, em receita e em EV. Com dois anos de histórico o fator é frágil,
   e o texto diz isso.
4. **Mesmo escopo no realizado e no histórico do fator.** Se uma receita fica fora do EV (contrato
   tratado à parte, receita não recorrente), retire-a do realizado e dos anos usados no fator.
5. **O fluxo do período parcial segue a mesma sazonalidade.** O fluxo que entra no EV, da data-base ao
   fim do ano, é o do resto do ano projetado pelo fator, e não uma fração linear do fluxo anual.
   Ver `valor-terminal`, reference `erros-e-peso-do-terminal.md`, período parcial.

## 2. O preço do ano corrente é resultado

Receita projetada dividida pelas unidades médias do ano (média entre início e fim, quando há adição
de capacidade) dá o preço médio por unidade. O reajuste implícito é resíduo: calcule e mostre, sem
assumi-lo. Para os anos seguintes, reajuste só pelo índice de preços, sem spread, até haver evidência
de repasse acima do índice (passo 1, repasse de preço).

## 3. Quando preço e utilização andam juntos

Em negócio de capacidade em que a receita por unidade cai quando a ocupação cai, projete a receita por
unidade de capacidade pelo índice de preço e pela variação da utilização:

```
receita por unidade(t) = receita por unidade(t−1) × (1 + índice) × utilização(t) ÷ utilização(t−1)
```

Isso equivale a manter o preço por unidade vendida corrigido pelo índice e deixar o volume vendido
acompanhar a utilização. A utilização do ano corrente não altera a receita do ano corrente, que vem
do realizado: ela é a base de comparação do ano seguinte.

**Utilização de ativos em maturação.** Unidade nova não ocupa a capacidade cheia no início.

- Utilização do parque = utilização das unidades maduras × índice de maturidade médio, **ponderado
  pela capacidade disponível de cada unidade**. A ponderação é o que faz o produto reproduzir a
  razão entre capacidade usada e disponível.
- **Calibre em período fechado.** O produto tem de bater com a utilização observada dentro de décimos
  de ponto percentual. Se não bate, a ponderação está errada.
- A curva de maturação vem do histórico das unidades novas da própria empresa. Se a curva empírica
  ainda sobe depois do ponto em que o modelo a trava em 100%, declare o arredondamento.
- Adições líquidas entram ao longo do ano (unidades médias = média entre início e fim), com índice
  médio baixo no ano da instalação e cheio a partir do ano em que a curva termina.
- **Declare a simplificação** quando só as adições líquidas passam pela curva e a reposição de
  unidades desativadas não passa.

## 4. Mesmo escopo no numerador e no denominador

Se a utilização inclui capacidade que não gera receita no escopo do modelo (cortesia, permuta,
conteúdo institucional, contrato tratado à parte), a receita por unidade **não** é preço por unidade
vendida. Retirar a receita de um contrato do numerador e manter o volume dele no denominador cria um
artefato: o preço por unidade ocupada sobe de forma que ninguém praticou (no caso A, o artefato passava de
dezenas de pontos percentuais).
Use o mesmo escopo nos dois lados, ou declare o artefato.

## 5. Comparações do mesmo período

Compare o mesmo período de anos diferentes (primeiro semestre contra primeiro semestre, acumulado
contra acumulado). Comparar o nível de um semestre com o de um ano cheio mistura sazonalidade com
perda de demanda, e o texto acaba afirmando uma queda ou uma alta que a série não tem.

## 6. Percentual de parte do todo

Quando o texto diz que um lote é N% da safra, o critério de peso é o do cálculo, e o texto o declara.
No caso A, o mesmo lote tinha pesos diferentes por unidades, por capacidade e por outro critério de
contagem, e o texto citava um percentual "da capacidade" que vinha do critério errado. Confira o
critério antes de usar o percentual.

## 7. Reconcilie as fontes de receita antes de defender crescimento

O relatório de vendas (operacional) e a contabilidade divergem com frequência: escopos diferentes e
critérios de reconhecimento diferentes (competência em um ano, nota fiscal em outro). Registre a fonte
usada em cada ano e a reconciliação entre elas. Crescimento defendido sobre uma série de critério
misturado, ou que a fonte operacional contradiz, é o primeiro ponto que a diligência ataca.
