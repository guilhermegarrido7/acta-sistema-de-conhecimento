---
name: custo-de-capital
description: Direcionar o WACC em reais para empresa fechada — CAPM com beta setorial realavancado, risco-país, prêmio de porte, iliquidez e custo de dívida sintético. Acionar ao montar ou revisar o WACC, ao escolher beta ou estrutura de capital, ao discutir risco-país, ou ao defender a taxa de desconto diante do comprador.
---

# Custo de capital — a taxa que se defende

## Papel desta skill

**Oráculo. Não escreve na planilha.** Direciona cada componente do build-up, aponta onde a escolha é
discricionária e prepara a defesa da taxa. Quem digita é o analista.

Fundamento: skill `fundamentos-koller`, reference `estrutura_dcf_wacc.md`.

## Por que o WACC é a linha mais atacada do valuation

Duas razões práticas.

**A alavancagem é brutal.** Num negócio com valor terminal pesado, um ponto percentual de WACC move
o enterprise value em ordem de dez por cento. É mais do que qualquer discussão de add-back de EBITDA
costuma valer — e leva um décimo do tempo para o comprador contestar.

**Cada componente é discricionário.** Não existe "o WACC" de uma empresa fechada: existe um
intervalo defensável, e escolhas dentro dele. Por isso a regra que governa esta skill:

> **Declare cada componente, a fonte e a data. Um WACC sem build-up visível é indefensável, mesmo
> quando o número está certo.**

O modelo da casa já força isso — o bloco de WACC tem linha por linha. Use-o como está e preencha a
fonte de cada célula.

## A estrutura

```
WACC = Ke × E/V  +  Kd × (1 − t) × D/V
```

Simples na forma, e cada termo esconde uma decisão.

## Custo do equity — o build-up

```
Ke = Rf + β × ERP + CRP + prêmio de porte + prêmio de iliquidez
```

Os dois últimos termos são o que separa valuation de empresa fechada mid-market de valuation de
listada. Ignorá-los produz um Ke baixo demais e um valor alto demais — e é o erro que a diligência do
comprador corrige na direção contrária ao interesse do vendedor.

### Taxa livre de risco

Duas rotas, e a escolha define a moeda de todo o resto:

| Rota | Rf | Consequência |
|---|---|---|
| **Build-up direto em BRL** | NTN-B longa (real) ou título nominal longo | Ke já sai em BRL. Não precisa de conversão. O CRP tende a estar parcialmente embutido no próprio yield soberano — cuidado com dupla contagem. |
| **Build-up em USD, convertido** | Treasury de 10 ou 20 anos | Exige somar CRP e depois converter para BRL por diferencial de inflação. Mais etapas, mas separa risco de negócio de risco-país de forma auditável. |

**A rota em USD com conversão é a mais comum em fairness opinion e a mais fácil de defender**, porque
o beta setorial que você vai usar vem de mercado desenvolvido. Mas exija coerência: se converter para
BRL, a conversão é por diferencial de inflação de longo prazo, não por câmbio spot nem forward.

```
(1 + Ke_BRL) = (1 + Ke_USD) × (1 + inflação_BRL_LP) / (1 + inflação_USD_LP)
```

**Escolha uma rota e não misture.** Somar CRP a um Rf que já é soberano brasileiro conta risco-país
duas vezes — e é um dos erros mais frequentes em modelo de mid-market.

Maturidade: longa, casada com o horizonte do fluxo. Não use taxa curta.

### Prêmio de risco de mercado (ERP)

Há duas escolas, e a diferença entre elas é material:

- **ERP implícito** — extraído dos preços atuais e do fluxo esperado do mercado. Reage ao momento.
- **ERP histórico** — média realizada de longo prazo de ação sobre título de governo. Estável.

Nenhuma é errada. **Declare qual usou, a fonte e a data**, e use a mesma consistentemente entre o
alvo e qualquer comparável. Peça ao usuário a fonte que a casa adota — não fixe um número aqui, que
envelheceria dentro da skill.

### Beta

Empresa fechada não tem beta. O caminho é sempre indireto:

1. **Selecione comparáveis listados** pela economia do negócio, não pelo código setorial.
2. **Desalavanque o beta de cada um** para chegar ao beta do negócio, sem estrutura de capital.
3. **Tome a mediana** dos betas desalavancados — mediana, não média, porque a amostra é pequena e
   sensível a outlier.
4. **Realavanque** para a estrutura de capital do alvo.

```
Desalavancagem (Hamada):   βu = βL / [1 + (1 − t) × D/E]
Realavancagem:             βL = βu × [1 + (1 − t) × D/E_alvo]
```

Três cuidados que fazem diferença e são frequentemente ignorados:

**O `D` da desalavancagem tem de incluir os equivalentes de dívida do comparável** — arrendamento
capitalizado, sobretudo. Se o alvo aluga a frota e o comparável a compra (ou o inverso), o beta
desalavancado sai errado, porque a alavancagem operacional do arrendamento não foi considerada. Ver
skill `reorganizacao-contabil`, nota de leases: a decisão de capitalizar tem de ser a mesma aqui, no
capital investido e na alavancagem.

**Na realavancagem, use apenas a dívida que financia a operação.** Os equivalentes de dívida que são
obrigações discretas — parcelamento tributário, contingência — são melhor tratados **na ponte de EV
para equity value**, não dentro do `D/E` do beta. Tratá-los nos dois lugares é dupla contagem.

**Beta setorial, não beta da empresa.** Ainda que houvesse uma listada quase idêntica, o beta
individual dela é ruidoso. A mediana do setor é mais estável e mais defensável.

### Risco-país (CRP)

Três métodos, em ordem de aceitação:

| Método | Como | Nota |
|---|---|---|
| **Spread soberano** | Diferença entre o yield do soberano brasileiro em dólar e o Treasury de prazo equivalente | O mais usado e o mais simples de defender. |
| **Spread ajustado por volatilidade relativa** | Spread soberano × (vol da bolsa local / vol do mercado de títulos) | Produz número maior. Argumento: ação é mais volátil que título. |
| **Lambda** | CRP × exposição específica da empresa ao país | Reconhece que exportador tem menos exposição que empresa 100% doméstica. O modelo da casa tem a linha de lambda. |

Para alvo mid-market com receita inteiramente em reais e operação inteiramente no Brasil, **lambda
tende a 1** — a exposição é total. Reduzir lambda exige argumento: receita indexada a dólar, cliente
multinacional, ativo exportador.

**Koller e boa parte da literatura preferem tratar risco-país por cenários de fluxo de caixa em vez
de somar um prêmio ao WACC** — o argumento é que risco de expropriação, quebra de contrato e
descontinuidade regulatória não são riscos sistemáticos e não deveriam entrar na taxa. Na prática de
mercado brasileira, o CRP no WACC é o padrão, e é o que o comprador espera ver. **Faça o padrão, e
saiba que existe a objeção** — se o comprador for sofisticado e levantar o ponto, a resposta é que o
risco específico está tratado nos cenários e o CRP captura a parcela sistemática.

### Prêmio de porte

Existe, é contestado, e importa muito no porte de mandato.

- **A favor**: séries longas mostram retorno maior para empresas pequenas, e casas de avaliação
  publicam prêmios por decil de capitalização. É prática estabelecida em laudo.
- **Contra**: parte do efeito pode ser iliquidez, viés de sobrevivência ou má especificação do
  modelo, e o efeito enfraqueceu em períodos recentes.

**Recomendação prática:** inclua, com fonte e data, e trate como componente explícito e discutível em
vez de embutido. Um alvo com receita de R$ 100 milhões não tem o mesmo custo de capital de uma
listada de R$ 10 bilhões, e negar isso é menos defensável do que assumir o prêmio declaradamente.

### Prêmio de iliquidez (DLOM)

O comprador de uma empresa fechada não tem saída de mercado. Isso vale desconto — a discussão é
quanto e onde aplicá-lo.

**Duas rotas mutuamente exclusivas.** Escolha uma:

1. **No WACC**, como prêmio somado ao Ke.
2. **No valor**, como desconto aplicado ao equity value ao final.

Aplicar nas duas é dupla contagem, e acontece com frequência.

Os métodos de referência — estudos de ações restritas, estudos pré-IPO, e modelos de opção de venda
— produzem faixas amplas. Peça ao usuário a convenção da casa e a fonte. E note que em mandato
**sell-side** o DLOM trabalha contra o vendedor: aplicá-lo generosamente reduz o preço que você
defende, então ele precisa ser dimensionado com o mesmo rigor dos demais componentes, não usado como
folga de conservadorismo.

## Custo da dívida

```
Kd após imposto = Kd × (1 − t)
```

Duas rotas para o `Kd`:

- **Yield observado** — a taxa média ponderada que o alvo de fato paga. É a informação mais concreta
  e você a tem, se pediu a composição da dívida contrato a contrato.
- **Spread sintético** — a partir da cobertura de juros do alvo, inferir a classificação de crédito
  implícita e o spread correspondente sobre a taxa livre de risco. É o caminho quando a dívida atual
  não é representativa.

**Quando não usar o yield observado**, e isso é frequente em mid-market: quando a dívida atual é
caríssima por restrição de acesso a crédito, não por risco do negócio. Uma empresa que paga taxa de
capital de giro rotativo porque não tem estrutura de crédito não tem custo de capital de terceiros
igual a essa taxa — sob um dono com balanço melhor, ela se financia mais barato. Nesse caso, o
sintético é mais correto, e a diferença entre os dois é, em si, **uma alavanca de valor que o
comprador captura**. Ver skill `saude-de-credito`.

O contrário também vale: dívida subsidiada com prazo remanescente curto não representa o custo
marginal futuro.

Alíquota `t`: a marginal, 34% no lucro real. Se o alvo está no presumido ou tem prejuízo fiscal, o
escudo fiscal da dívida não existe ou é parcial — ver `impostos-e-prejuizos-fiscais`. Aplicar
`(1 − 0,34)` a uma empresa que não paga imposto superestima o benefício e subestima o WACC.

## Estrutura de capital

A pergunta é: **atual ou alvo?**

A resposta metodológica é **alvo** — a estrutura de capital sustentável de longo prazo, porque o
WACC desconta fluxos perpétuos e a estrutura atual raramente é a de regime. O modelo da casa traz as
duas colunas, atual e alvo, exatamente por isso.

Como definir a alvo, em ordem:

1. **A estrutura mediana dos comparáveis do setor** — é o que o mercado sustenta para essa economia
   de negócio.
2. **A capacidade de dívida do próprio alvo**, se ela for a restrição — ver `saude-de-credito`.
3. **A estrutura que o comprador provável vai adotar**, quando ela é conhecida e materialmente
   diferente.

Duas notas técnicas:

- **Pesos a valor de mercado, não contábil.** Para empresa fechada, o `E` é o próprio equity value do
  valuation — o que gera circularidade. Resolva iterativamente e **declare que houve iteração**; ou
  use a estrutura-alvo dos comparáveis e evite o problema.
- **Coerência com o beta.** A estrutura usada na realavancagem tem de ser a mesma usada nos pesos.
  Realavancar para 30% de dívida e pesar o WACC com 50% é incoerência interna.

## WACC constante ou variável no tempo

Se a estrutura de capital muda materialmente ao longo do horizonte — alvo muito alavancado que
desalavanca com a geração de caixa —, o WACC tecnicamente deveria variar ano a ano, com beta
realavancado a cada período.

**Na prática de mid-market, WACC constante à estrutura-alvo é aceitável e é o padrão**, e evita a
falsa precisão de uma taxa diferente por ano. Use variável quando a desalavancagem for grande e
rápida o suficiente para mudar o resultado — e, nesse caso, diga que usou e por quê.

## Nominal e real — a checagem que evita o erro mais comum

O WACC, o fluxo de caixa e o `g` do valor terminal têm de estar **na mesma base**. Modelo brasileiro
frequentemente projeta em termos reais (sem inflação nos preços e custos) e desconta a WACC nominal,
o que subestima o valor de forma sistemática e silenciosa.

Confira as três variáveis antes de qualquer discussão sobre o número do WACC. Ver `valor-terminal` e
`projecao-e-cenarios`.

## A sensibilidade, e como apresentar

O WACC não é um ponto: é um intervalo. Apresente-o assim.

O modelo da casa já traz sensibilidade WACC × `g` e WACC × múltiplo nos dashboards. Use-a como o
entregável principal, com o ponto central destacado — e não como um anexo. Um deck que apresenta um
valor único derivado de um WACC único convida a discussão sobre o WACC; um deck que apresenta a
matriz desloca a conversa para onde dentro do intervalo, que é uma conversa melhor.

## O que entregar

1. O build-up completo, linha por linha, **com fonte e data de cada componente**.
2. A amostra de comparáveis usada para o beta, com os betas desalavancados individuais e a mediana.
3. A decisão sobre cada ponto discricionário, declarada: rota de moeda, ERP implícito ou histórico,
   método de CRP, lambda, prêmio de porte, e **onde o DLOM foi aplicado — WACC ou valor, nunca os
   dois**.
4. O `Kd`: observado ou sintético, com o argumento da escolha.
5. A estrutura de capital adotada, e a confirmação de que é a mesma da realavancagem.
6. A checagem nominal vs. real das três variáveis.
7. A sensibilidade, com o intervalo defensável e o ponto central.

## Próximo passo

`valor-terminal`, que usa o WACC e o `g` na mesma base. E `triangulacao-e-faixa`, onde o DCF
resultante entra como uma das metodologias, não como a resposta.
