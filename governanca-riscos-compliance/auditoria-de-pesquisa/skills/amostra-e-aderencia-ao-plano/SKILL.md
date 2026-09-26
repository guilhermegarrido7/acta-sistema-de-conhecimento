---
name: amostra-e-aderencia-ao-plano
description: Confronte a amostra entregue contra o plano declarado e contra a população oficial, por volume, por estrato e por período, e classifique a aderência. Acionar ao conferir se a coleta cobriu o exigido, ao comparar distribuição de amostra com fonte externa de movimento ou de universo, ou ao tratar estrato descoberto.
---

# Amostra e aderência ao plano

Carregue antes: `acta-way` e `acta-metodo-auditoria`.

## 1. A pergunta deste elo

Não é "a amostra é estatisticamente válida". É mais dura e mais útil: **a coleta entregue cobre o
plano que foi declarado, e a distribuição dela se parece com a do universo que ela diz representar?**

A primeira metade é conferência. A segunda é o teste que diferencia o trabalho, porque exige uma
**fonte externa de universo** que o operador da pesquisa não controla.

## 2. A fonte externa de universo

Quase todo indicador tem uma estatística oficial de volume ao lado dele, produzida por outro processo
e por outra entidade. Movimento registrado por operador de infraestrutura, base de declarações de um
órgão, cadastro setorial, registro de transações. É contra ela que a amostra é lida.

> **Princípio: o universo nunca é informado por quem coletou a amostra.** Se o operador declara ao
> mesmo tempo quantas pessoas passaram e quantas ele entrevistou, a proporção entre as duas é uma
> tautologia e não testa nada.

O trabalho de conciliar a fonte externa é sempre maior do que parece, porque ela é organizada por
outra unidade de análise. Uma base oficial de movimento vem por operação individual, com tipo de
operação, natureza, horário previsto e horário realizado, e precisa ser somada por dia e por
categoria antes de virar comparável com a amostra. Faça essa soma numa aba própria, com a regra de
filtro escrita, e não no meio da planilha de teste.

## 3. Os quatro cortes de aderência

Rode sempre os quatro, nesta ordem. Cada um pega um defeito diferente.

**Volume.** Quantidade entregue contra quantidade exigida, no período. Simples, e é o único que o
operador espera.

**Distribuição temporal.** Coletas por dia, contra movimento por dia. O defeito que este corte pega é
a **concentração**: a cota do mês cumprida em poucos dias fáceis. Uma amostra que satisfaz o volume e
se concentra em três dias não representa o mês, e a concentração costuma coincidir com o dia de menor
esforço de campo, não com o de maior movimento.

**Distribuição por estrato.** Participação de cada categoria na amostra, contra a participação dela no
universo. Categoria com presença relevante no universo e ausente na amostra é achado, e é o corte que
sustenta o achado mais caro do elo.

**Proporção declarada contra oficial.** Quando o instrumento captura uma característica que a fonte
externa também mede, as duas proporções têm de convergir dentro de uma faixa. Divergência grande
entre a proporção medida na amostra e a proporção oficial é sinal de viés de seleção ou de erro de
classificação na coleta, e vale a pena mesmo quando nenhuma das duas pontas é exata.

## 4. A classificação da aderência

Não publique percentuais crus. Classifique, com faixas declaradas antes de olhar o resultado:

| Classificação | Leitura |
|---|---|
| Satisfatório | Dentro da faixa, nos quatro cortes |
| Satisfatório com ressalva | Dentro da faixa no volume, fora em um corte de distribuição |
| Insatisfatório | Fora da faixa no volume, ou fora em dois ou mais cortes |

A faixa é definida no início do trabalho e registrada no papel de trabalho, com a justificativa. Faixa
escolhida depois de ver o número não é critério, é acomodação, e a revisão vai encontrar.

## 5. Estrato descoberto

Quando um estrato do plano não recebeu nenhuma coleta, três coisas precisam constar do papel:

- **A dimensão do buraco**, em participação do estrato no universo, não em contagem de registros
  faltantes. É a participação que diz se o indicador ficou comprometido.
- **A causa declarada pelo operador**, se houver, com a fonte da declaração.
- **O efeito sobre o indicador publicado.** Se o estrato descoberto tende a avaliar diferente do
  resto, o indicador tem viés de direção conhecida, e o parecer diz qual.

O terceiro item é o que separa o achado útil do achado de conferência. Um estrato descoberto que
avaliaria pior significa indicador publicado **acima** do real, e essa frase é o achado.

## 6. Reexecução do dimensionamento

Refaça o cálculo do tamanho da amostra a partir do universo oficial e da regra declarada, sem usar o
número do operador. Duas divergências aparecem com frequência:

- **Universo desatualizado.** O dimensionamento foi feito sobre o volume do ano anterior, e o volume
  cresceu. A amostra cumpre a meta antiga e não a devida.
- **Regra aplicada sobre o subconjunto errado.** O percentual exigido incide sobre uma categoria
  específica do movimento e foi aplicado sobre o total, o que reduz a exigência.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Dimensionar amostra de teste de controle | `acta-controles-internos:teste-e-amostragem` |
| Painel de participantes de pesquisa própria | `acta-pesquisa-salarial:painel-de-participantes` |
| Testar os registros um a um | `bateria-de-testes-de-base` |
