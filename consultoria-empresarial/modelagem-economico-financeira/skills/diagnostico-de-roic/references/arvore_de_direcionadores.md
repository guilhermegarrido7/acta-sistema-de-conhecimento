# Árvore de direcionadores do ROIC

Um ROIC isolado não explica nada. A árvore abre o número em métricas que o negócio controla e que
o concorrente pode ser comparado. **A árvore tem de fechar aritmeticamente**: se a soma das partes
não reproduz o ROIC, há erro de base ou métrica fora do perímetro.

## Estrutura

```
ROIC = Margem operacional pós-impostos × Giro do capital investido

RAMO DE MARGEM                                     RAMO DE GIRO
NOPAT / Receita líquida                            Receita líquida / Capital investido médio
 = (1 − alíquota operacional) × Margem EBITA        1 / Giro = soma das intensidades de capital:
 Margem EBITA =                                       Capital de giro operacional / Receita
   Margem bruta                                     + Imobilizado líquido / Receita
   − Vendas e marketing / Receita                   + Intangíveis (ex-goodwill) / Receita
   − G&A / Receita                                  + Outros ativos operacionais líquidos / Receita
   − P&D / Receita
   − Outras despesas operacionais / Receita
```

Fechamento obrigatório: `Margem bruta − Σ(despesas/Receita) = Margem EBITA` e
`Σ(intensidades) = 1 / Giro`. Confira os dois antes de interpretar.

## Ramo de margem

| Métrica | Fórmula | O que revela | Armadilha |
|---|---|---|---|
| Margem bruta | (Receita líquida − CMV) / Receita líquida | Poder de preço (cobra mais) **ou** vantagem de custo de produção (gasta menos). Sozinha, não distingue as duas. | Mix de produto ou cliente muda a margem sem mudar a vantagem. Reclassificação de custo entre CMV e despesa distorce a comparação com pares. |
| Vendas e marketing / Receita | Despesa comercial / Receita líquida | Custo de adquirir e manter cliente. Baixo com margem bruta alta é a assinatura de marca ou custo de troca. | Cliente que vem do relacionamento do dono não é vantagem da empresa: é dependência de pessoa. Comissão em CMV ou em G&A esconde o custo real. |
| G&A / Receita | Despesa administrativa / Receita líquida | Alavancagem operacional da estrutura fixa. Cai com escala. | Pró-labore abaixo do mercado e estrutura subdimensionada produzem G&A baixo artificial. Normalize antes de chamar de eficiência. |
| P&D / Receita | Despesa de P&D / Receita líquida | Intensidade de inovação necessária **para manter** a posição, não para crescer. | P&D capitalizado some da DRE e vai para o capital investido. Compare pares sob o mesmo tratamento. |
| Alíquota operacional | Impostos operacionais ajustados / EBITA | Eficiência fiscal estrutural. | Benefício fiscal com prazo não é vantagem competitiva. Ver `impostos-e-prejuizos-fiscais`. |

## Ramo de giro

| Métrica | Fórmula | O que revela | Armadilha |
|---|---|---|---|
| Prazo médio de recebimento (PMR) | Contas a receber / Receita bruta × 365 | Poder sobre o cliente e disciplina de cobrança. | Calcule sobre receita **bruta**: o recebível carrega tributos sobre venda. Antecipação de recebíveis reduz o PMR sem mudar o negócio. |
| Prazo médio de estoque (PME) | Estoque / CMV × 365 | Eficiência logística e gestão da cadeia. | Estoque de segurança por risco de ruptura pode ser decisão racional, não ineficiência. |
| Prazo médio de pagamento (PMP) | Fornecedores / Compras × 365 | Poder de barganha com fornecedores. | Atraso com fornecedor não é poder de barganha. Verifique se o prazo é contratual. |
| Imobilizado líquido / Receita | Imobilizado operacional líquido / Receita líquida | Intensidade de capital físico que o modelo de negócio exige. | Imobilizado depreciado subestima o capital econômico. Teste a valor de reposição. |
| Capital de giro operacional / Receita | (Ativo circulante operacional, sem caixa − Passivo circulante operacional, com IRPJ/CSLL a recolher) / Receita | Consolida PMR, PME e PMP numa só leitura. Negativo = o negócio é financiado por clientes e fornecedores. | Negativo estrutural só vale se sustentável. Adiantamento de cliente pode cessar. |

## Como ler: quatro lentes sobre cada métrica

Uma métrica só vira argumento depois de passar pelas quatro:

1. **Nível contra pares.** Margem bruta de 42% não diz nada. 42% contra 31% de mediana de seis
   comparáveis diz. Declare a amostra.
2. **Tendência.** Série de 3 a 5 anos. Vantagem estrutural aparece como nível alto *e estável*.
   Nível alto e caindo é vantagem em erosão. Nível alto em um único ano é ano atípico.
3. **Corte por segmento.** Quando há mix de linhas, clientes ou unidades, a média consolidada pode
   esconder que a vantagem vive em um segmento só.
4. **Sensibilidade.** Quanto do ROIC se perde se a métrica convergir à mediana dos pares? Esta é a
   lente que transforma observação em valor: ela diz quanto a vantagem *vale*.

## Ponte de ROIC contra o benchmark

Traduza a diferença contra os pares em pontos de ROIC por direcionador:

```
ROIC alvo − ROIC pares = Σ contribuição de cada direcionador
```

Método: parta do ROIC do alvo e substitua **uma métrica por vez** pelo valor da mediana dos pares,
mantendo as demais, registrando a variação. A ordem de substituição altera a atribuição individual
(efeito de interação), então: declare a ordem, e trate a ponte como aproximação que ranqueia
direcionadores, não como decomposição exata. O que interessa é a ordem de grandeza: "dois terços
da distância contra os pares vêm da margem bruta, um terço do giro do capital de giro".

Resultado esperado em tabela:

| Direcionador | Alvo | Mediana dos pares | Δ ROIC (p.p.) | Leitura |
|---|---|---|---|---|
| Margem bruta | | | | |
| Vendas e marketing / Receita | | | | |
| G&A / Receita | | | | |
| Imobilizado / Receita | | | | |
| Capital de giro / Receita | | | | |
| **Total** | | | **= ROIC alvo − ROIC pares** | |
