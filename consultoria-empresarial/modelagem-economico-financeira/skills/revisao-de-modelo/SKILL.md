---
name: revisao-de-modelo
description: Auditar o modelo financeiro em três camadas — robustez técnica, consistência econômica e plausibilidade dos resultados — sem escrever na planilha. Acionar ao revisar ou validar um modelo de valuation, ao desconfiar de um resultado, antes de levar o número ao cliente, ou ao preparar a defesa para a due diligence.
---

# Revisão de modelo — a bateria antes de o número sair da casa

## Papel desta skill

**Oráculo, e aqui isso é essencial: esta skill LÊ o modelo e NÃO escreve nele.** Abre o `.xlsx` em
modo somente-leitura, roda as checagens, aponta onde falha e o que investigar. A correção é do
analista — porque quem corrige precisa entender o erro, e porque uma planilha alterada por terceiros
perde a rastreabilidade que o mandato exige.

## Como usar

Peça ao usuário o caminho do modelo. **Não escolha o arquivo mais recente por dedução** — modelo de
valuation tem versões, e revisar a errada é pior que não revisar. Se houver mais de um candidato,
pergunte.

Trabalhe pelas três camadas **em ordem**. Não avance para a camada 2 com a camada 1 quebrada: um
modelo que não fecha tecnicamente produz resultados econômicos sem significado, e discutir se o ROIC
é plausível antes de o balanço fechar é desperdício.

---

# Camada 1 — O modelo é tecnicamente robusto?

Checagens mecânicas. Todas binárias, todas baratas, e um bom modelo as calcula automaticamente numa
célula visível de flag.

## Nas demonstrações não ajustadas

```
[ ] O balanço fecha em TODOS os anos — históricos e projetados
[ ] O lucro líquido flui corretamente pelo patrimônio líquido
[ ] Lucro líquido reconcilia com lucros retidos, dividendos e movimentos de capital
```

## Nas demonstrações reorganizadas

```
[ ] Capital investido + ativos não operacionais = fontes cumulativas de financiamento
[ ] NOPAT calculado top-down (da receita) = NOPAT calculado bottom-up (do lucro líquido)
[ ] Variação de caixa excedente e de dívida bate com a demonstração de fluxo de caixa
```

A checagem **NOPAT top-down = bottom-up** é a mais reveladora das três e quase nunca é feita. Se os
dois caminhos não chegam ao mesmo número, algum item foi classificado em duplicidade ou esquecido. Ver
`reorganizacao-contabil`.

## O stress test dos extremos

Mude um input-chave para um valor absurdo e veja se a estrutura sobrevive:

```
[ ] Margem bruta em 99% — o balanço ainda fecha?
[ ] Margem bruta em 1% — ainda fecha?
[ ] Crescimento em 0% em todos os anos — ainda fecha?
```

Modelo que quebra nos extremos tem amarração frágil que pode estar errada também no intervalo normal,
de forma menos visível.

## O teste do payout — a checagem que ninguém faz

A mais elegante do capítulo, e a que detecta a contaminação mais comum em planilha de mid-market.

```
1. Mude o índice de payout de dividendos (por exemplo, de 30% para 80%)
2. NOPAT, capital investido e FCF têm de ficar RIGOROSAMENTE inalterados,
   em todos os anos
3. Se algum deles se mover → há vazamento de estrutura de capital
   para dentro da operação
```

O raciocínio: mudar o payout muda a necessidade de financiamento e, portanto, a estrutura de capital.
Mas NOPAT, capital investido e fluxo de caixa livre são **independentes da estrutura de capital**. Se
eles se movem, o modelo tem falha mecânica.

Os três vazamentos típicos, em ordem de frequência:

1. **Juros entrando no NOPAT** — direta ou via imposto operacional calculado sobre o LAIR.
2. **Caixa excedente dentro do capital de giro operacional.**
3. **Despesa financeira afetando o imposto operacional ajustado.**

## Erros mecânicos específicos a procurar

```
[ ] O valor terminal medido na data do ano N está descontado por N anos, não N+1
[ ] Não há circularidade indevida (juros calculados sobre a dívida do MESMO ano)
[ ] O fluxo de caixa usa imposto CORRENTE, não o imposto total da DRE
[ ] Há #REF!, #NUM!, #DIV/0! em célula que alimenta resultado
[ ] Sinal da ΔNCG: aumento de capital de giro CONSOME caixa
[ ] Capital investido médio (não final) no denominador do ROIC
```

O erro de desconto `N+1` e o erro de sinal da ΔNCG são os dois mais frequentes, e os dois passam
invisíveis porque o modelo continua produzindo um número plausível.

---

# Camada 2 — O modelo é economicamente consistente?

Aqui o modelo está tecnicamente certo e pode estar economicamente absurdo. É a camada que mais rende.

## A regra de sinal — custo zero, alto poder de detecção

```
ROIC > WACC              ⇒  EV das operações  >   capital investido contábil
ROIC > WACC e g alto     ⇒  EV das operações  >>  capital investido contábil
ROIC = WACC              ⇒  EV das operações  ≈   capital investido contábil
ROIC < WACC              ⇒  EV das operações  <   capital investido contábil
```

Violação da regra **é erro de cálculo**, não peculiaridade do setor. Decorre da identidade
`EV = capital investido + VP do lucro econômico`: se o spread é positivo, o prêmio sobre o capital
investido é positivo. Não há caso especial.

É também a checagem `EV/IC > 1 ⇔ ROIC > WACC` de `triangulacao-e-faixa`, vista do lado do erro.

## A estimativa de guardanapo

```
EV_guardanapo = NOPAT_normalizado × (1 − g_LP / ROIC_LP) / (WACC − g_LP)
```

Compare com o EV do modelo completo, usando crescimento e ROIC de longo prazo. **Divergência grande
sem causa identificável é erro no modelo, não insight.** Duas linhas de conta que validam uma planilha
de setecentas.

## Os três testes de padrão

Olhe as séries de ROIC, margem, giro do capital e alíquota efetiva ao longo do horizonte, e pergunte:

### (a) A tendência foi escolhida, ou emergiu?

**Artefato de modelagem se disfarça de insight econômico.** Os dois casos clássicos:

- **CapEx como percentual fixo da receita** gera automaticamente uma tendência no giro do capital que
  ninguém escolheu. Se o giro melhora ao longo do horizonte, isso é economia de escala real ou
  consequência mecânica da premissa?
- **Imposto diferido como percentual da receita** produz uma deriva na alíquota efetiva caixa que
  ninguém pretendeu.

Para cada tendência visível: **ou justifique economicamente, ou remova a premissa que a produz.**

### (b) A tendência é razoável?

Evite **mudança em degrau** de um ano para o outro nas premissas-chave — ela distorce índices e
produz leitura falsa.

O detector mais direto: **CapEx negativo em qualquer ano projetado** é quase sempre artefato de um
degrau em eficiência de capital, e infla o fluxo de caixa. Venda de imobilizado por caixa a valor
contábil é improvável; se o modelo a produz, é erro.

### (c) A tesoura preço-custo — a armadilha mais valiosa

```
preço  +3% a.a.   }
custo  −2% a.a.   }  ⇒ spread de 5 p.p. compostos ao longo de 10 anos
                     ⇒ ROIC sai de ~9% para ~39%
```

Cada premissa, isolada, parece inócua e defensável. **Juntas são economicamente impossíveis em setor
competitivo** — vantagem de custo é difícil de proteger, e concorrente imita e derruba preço.

É a armadilha mais relevante para mid-market brasileiro, porque *repasse de inflação a preços* e
*ganho de eficiência operacional* são as duas histórias que todo vendedor conta ao mesmo tempo.

> **Regra: nunca valide premissa de preço e premissa de custo isoladamente. Valide sempre o ROIC que
> as duas produzem juntas.**

### (d) O regime estacionário foi atingido?

Ao fim do período explícito, margem, ROIC, `g`, CapEx e dias de capital de giro têm de estar
estáveis. Se não estão, a fórmula de valor terminal não se aplica. Ver `valor-terminal` e
`projecao-e-cenarios`.

## Consistências entre etapas

```
[ ] Run-rate no EBITDA base NÃO reaparece como crescimento no ano 1 (dupla contagem)
[ ] WACC, fluxo e g na MESMA base (nominal ou real)
[ ] Estrutura de capital da realavancagem do beta = a dos pesos do WACC
[ ] Arrendamento capitalizado no capital investido também sai na ponte EV→equity — e só ali
[ ] DLOM aplicado no WACC OU no valor, nunca nos dois
[ ] Prêmio de controle não somado sobre múltiplo de transação precedente
[ ] Benefício fiscal temporário não embutido na perpetuidade
[ ] CapEx terminal ≈ depreciação terminal
```

---

# Camada 3 — Os resultados são plausíveis?

## A checagem do múltiplo implícito

Obrigatória. É o elo formal entre o DCF e os múltiplos, usado como **detector de erro**, não como
método alternativo:

```
1. Múltiplo implícito = EV das operações do modelo / EBITA forward
2. Compare com o MESMO múltiplo, definido igual, dos pares
3. Toda diferença material precisa ser explicada por diferença em
   ROIC, crescimento ou risco
4. Diferença inexplicada = erro provável no modelo
```

"É o nosso caso" não é explicação. A explicação tem de ser um value driver.

## Comparação com transações precedentes

Um alvo fechado não tem preço de mercado, mas o princípio se traduz: se o valuation está muito
distante das transações precedentes comparáveis, **procure a causa** em vez de concluir que o mercado
errou. Ver plugin de M&A, `transacoes-precedentes`.

## Plausibilidade do ROIC

Rode o teste das seis causas de `diagnostico-de-roic` quando o ROIC vier alto: imobilizado
depreciado, ativo fora da empresa, tratamento do caixa, add-back agressivo, capital de giro negativo
estrutural, ano-base atípico.

---

# Sensibilidade e cenários

Depois de validado, aprenda o modelo: **mude um input por vez** e veja o efeito. Descobre-se quais
premissas movem o valor e quais não movem — e é isso que define onde vale gastar tempo de análise e
de coleta de dado.

## O atalho proibido

> **Não faça a média dos inputs para obter um cenário.**

Rodar o modelo com a média das premissas **não** produz o valor médio, porque o modelo não é linear.
O caminho correto é: construir cada cenário completo e coerente, rodar o valuation de cada um, e
**ponderar os resultados** pela probabilidade — nunca ponderar os inputs.

## Sensibilidade não é cenário

- **Sensibilidade** move uma variável e mostra a derivada — WACC, `g`, múltiplo.
- **Cenário** move o conjunto operacional de forma correlacionada, e a gestão reage dentro dele.

As duas aparecem no deck, em lugares diferentes. Confundi-las faz parecer que há mais análise do que
há. Ver `projecao-e-cenarios`.

---

# O relatório de revisão

O entregável desta skill:

1. **Camada 1** — cada checagem com resultado binário, e para cada falha: a célula ou o bloco, o
   sintoma, e a causa provável.
2. **Camada 2** — a regra de sinal, o guardanapo, os quatro testes de padrão, e a lista de
   consistências entre etapas.
3. **Camada 3** — múltiplo implícito vs. pares, comparação com precedentes, plausibilidade do ROIC.
4. **A lista priorizada** — o que **precisa** ser corrigido antes de o número sair da casa, separado
   do que é refinamento.
5. **As premissas mais sensíveis**, com o efeito de cada uma no valor — porque é onde o comprador vai
   atacar, e onde vale reforçar a evidência antes.
6. **O veredito**: o modelo está pronto para ir ao cliente, pronto com ressalvas declaradas, ou não
   está pronto.

## Uma nota sobre precisão

Valuation de empresa fechada tem incerteza irredutível. Uma faixa da ordem de ±15% em torno do ponto
central é o que a metodologia honestamente sustenta — e apresentar três casas decimais sugere uma
precisão que não existe.

Isso **não** é licença para relaxar o rigor: o rigor é o que garante que o ponto central esteja no
lugar certo e que a faixa seja defensável. Mas é razão para não gastar um dia refinando o cronograma
de SG&A do ano 4 enquanto a camada 1 tem uma reconciliação aberta.

## Próximo passo

Com o modelo validado: `relatorio-de-valuation` para converter o resultado em documento, e o
plugin de M&A, `go-to-market` — o item 4 do gate é justamente o valuation preliminar estruturado.
