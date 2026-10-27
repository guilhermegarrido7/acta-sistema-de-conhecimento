---
name: analise-de-variacao-e-forecast
description: Compare o realizado contra o orçado, decomponha a variação no driver que a causou e rode a reprevisão do ano. Acionar ao analisar desvio orçamentário, ao abrir a variação entre volume e preço, ao montar o acompanhamento mensal orçado contra realizado, ou ao implantar rolling forecast.
---

# Análise de variação e forecast

Carregue `premissas-e-drivers` antes desta skill. O orçamento aprovado é a linha de base; esta skill
é o que o mantém vivo depois que o ano começa. Um orçamento que não é acompanhado é um documento de
gaveta — e a análise de variação só é útil se abrir a causa, não só apontar o desvio.

## 1. A variação que importa é a decomposta

Dizer que a receita veio 8% abaixo do orçado não ajuda ninguém a agir. A variação driver-based se
decompõe no que a causou:

```
Variação de receita = variação de volume + variação de preço + variação de mix
```

- **Variância de volume** = (volume real − volume orçado) × preço orçado. Vendeu-se menos.
- **Variância de preço** = (preço real − preço orçado) × volume real. Vendeu-se mais barato.
- **Variância de mix** = efeito da composição entre linhas de margem diferente.

A mesma decomposição vale no custo: variação de consumo (quantidade) contra variação de custo
unitário (preço de insumo). **É isto que o orçamento driver-based entrega e o incremental não
consegue:** quando o desvio aparece, ele já vem atribuído ao driver, e a conversa com o gestor é
sobre a causa, não sobre o número.

## 2. A disciplina do acompanhamento

| Elemento | Regra |
|---|---|
| **Cadência** | Mensal, com fechamento contábil. Trimestral já é tarde para corrigir. |
| **O que se compara** | Orçado do mês vs. realizado do mês, e acumulado do ano (YTD) vs. orçado YTD |
| **Materialidade** | Defina um limite (valor e %); abaixo dele não se investiga, para focar no que importa |
| **Vocabulário** | Variação favorável/desfavorável ao resultado, nunca "positiva/negativa" (custo menor é favorável e numericamente negativo) |
| **Dono** | Cada variação material tem um responsável por explicar e, se for o caso, agir |

A variação se lê em **valor do mês**, não em saldo acumulado contábil — a mesma armadilha do "Saldo
Atual" que `acta-metodo-consultoria:mapeamento-as-is` descreve, e que aqui reaparece: comparar o
acumulado contábil com o orçado do mês mistura períodos e produz desvio falso.

## 3. Reprevisão: o rolling forecast

O orçamento foi feito com a informação de três meses antes do ano começar. Em março, metade das
premissas já envelheceu. A reprevisão (forecast) reconcilia o orçamento com a realidade sem perder a
linha de base original.

| Conceito | O que é |
|---|---|
| **Orçado** | A linha de base aprovada. **Não muda** durante o ano — é contra ela que se mede o desempenho. |
| **Realizado** | O que de fato aconteceu, mês a mês. |
| **Forecast** | Realizado dos meses fechados + reprojeção dos meses restantes com premissas atualizadas. |

O **rolling forecast** mantém um horizonte constante (tipicamente 12 ou 18 meses à frente),
avançando uma janela a cada fechamento: fecha-se um mês real, acrescenta-se um mês novo no fim. O
horizonte nunca encurta, ao contrário do orçamento anual que, em novembro, só enxerga dois meses.

**A regra que não se negocia: o orçado não se reescreve.** Ajustar o orçamento original para ele
"bater" com o realizado destrói a única referência de responsabilização que existe. O forecast é uma
camada separada; o orçado fica congelado como foi aprovado. Confundir os dois é o erro que esvazia o
acompanhamento.

## 4. A lente AI-first

Aqui a consultoria AI-first se separa do acompanhamento tradicional. O trabalho clássico — coletar o
realizado do ERP, bater contra o orçado, calcular e decompor a variação, montar o relatório mensal —
é precisamente o que trava o acompanhamento em mid-market: dá trabalho demais para o tamanho da
equipe, então não é feito. O agente faz o ciclo inteiro: puxa o realizado, decompõe a variação em
volume/preço/mix por linha, sinaliza o que passou da materialidade, e monta a reprevisão. **O
julgamento humano fica na explicação da causa e na decisão de ação** — por que a variação ocorreu e o
que fazer. O relatório de variação deixa de ser o gargalo e vira insumo mensal de decisão.

É também onde o orçamento conecta com `acta-dados-e-analytics`: o pipeline que traz o realizado e
monta a variação é um caso de automação de dados, e `acta-planejamento-estrategico:painel-e-acompanhamento`
é onde a variação orçamentária encontra os indicadores estratégicos.

## O que entregar

1. O relatório de variação mensal e YTD, com cada desvio material decomposto em volume, preço e mix
   (receita) ou consumo e custo unitário (custo).
2. O limite de materialidade declarado, e a investigação restrita ao que o excede.
3. A reprevisão (forecast) como camada separada: orçado congelado, realizado dos meses fechados,
   reprojeção dos restantes com premissas atualizadas.
4. A explicação da causa e o responsável por cada variação material — não só o número do desvio.
5. Se rolling forecast, o horizonte constante e a janela que avança a cada fechamento.

## Próximo passo

Fecha o ciclo do plugin. O que se aprendeu com as variações recorrentes realimenta as premissas do
próximo orçamento (`premissas-e-drivers`): a premissa que erra todo ano é premissa mal construída. O
estado do engajamento vai para o checkpoint de `acta-way`.
