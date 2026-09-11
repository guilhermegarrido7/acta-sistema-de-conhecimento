---
name: projecao-e-cenarios
description: Direcionar a projeção operacional — drivers de volume e preço, capacidade instalada, matriz de cenários e a coerência obrigatória entre crescimento, ROIC e taxa de reinvestimento. Acionar ao montar projeções, ao definir cenários otimista/base/pessimista, ao projetar receita, ou ao checar se o crescimento é financiável.
---

# Projeção e cenários — o crescimento que se sustenta

## Papel desta skill

**Oráculo. Não escreve na planilha.** Direciona a arquitetura da projeção, contesta drivers sem
lastro e verifica as coerências que fazem o modelo fechar. Quem digita é o analista.

Pré-requisito conceitual: a tese de crescimento de mercado/market share já sabatinada em
`projecao-de-mercado-e-equity-story`. Esta skill assume que a equity story existe e a transforma em
árvore de drivers, cenários formais e coerência com o reinvestimento — não constrói a tese do zero.

## O princípio que governa esta etapa

> **Projete drivers, não linhas da DRE.**

Projetar "receita cresce 15% ao ano" é uma opinião disfarçada de premissa: não é auditável, não é
discutível com o cliente e não é defensável na frente do comprador. Projetar "volume cresce porque a
capacidade instalada sobe de X para Y com o CapEx do projeto Z, e o preço reajusta pela inflação
menos o desconto de escala" é uma cadeia que se examina elo por elo.

O modelo da casa impõe essa disciplina na arquitetura: os cronogramas de receita partem de
**volume/dia, capacidade instalada e eficiência operacional**, com uma flag explícita de
"capacidade operacional excedida?". Use isso — é o mecanismo que impede a projeção de vender o que a
empresa não consegue produzir.

## Passo 1 — Decompor a receita

Para cada linha de receita, separadamente:

```
Receita da linha = Volume × Preço unitário

Volume  = capacidade instalada × taxa de utilização
          (ou: volume/dia × dias operacionais)

Preço   = preço do ano anterior × (1 + reajuste)
```

O que cada elemento exige de lastro:

| Elemento | Lastro aceitável | Lastro inaceitável |
|---|---|---|
| Capacidade instalada | Ficha técnica do equipamento, licença de operação com limite, laudo | "Segundo a empresa" |
| Utilização atual | Volume histórico ÷ capacidade | Estimativa do sócio sem histórico |
| Ganho de utilização | Gargalo identificado e a ação que o remove | "Melhoria de eficiência" |
| Expansão de capacidade | CapEx dimensionado, prazo de obra, licença necessária | Plano sem orçamento |
| Reajuste de preço | Cláusula contratual de reajuste, índice, histórico de repasse | Inflação cheia sem evidência de repasse |

**A flag de capacidade é o teste mais barato e mais revelador do modelo.** Se o volume projetado
excede a capacidade instalada em qualquer ano sem CapEx correspondente, a projeção é impossível — e
esse erro atravessa o valuation inteiro sem aparecer, porque a receita simplesmente cresce.

### Repasse de preço — a premissa mais frouxa que existe

Projetar reajuste igual à inflação presume poder de precificação que precisa ser demonstrado.
Verifique no histórico: **o preço médio realizado acompanhou a inflação nos últimos 3 anos?** Se a
empresa repassou 60% do IPCA historicamente, projetar 100% é otimismo sem base — e comprime margem
na direção oposta à projetada.

Onde há contrato com cláusula de reajuste por índice, o lastro é forte e vale citar o contrato. Onde
o preço é spot (commodity, sucata, resina reciclada), o preço não é premissa de repasse: é premissa
de mercado, e merece cenário próprio.

## Passo 2 — Custos e despesas com a mesma disciplina

- **Custos variáveis** em R$ por unidade, não em percentual da receita. Percentual da receita esconde
  ganho ou perda de margem unitária e cria alavancagem operacional artificial.
- **Custos fixos** em valor absoluto com reajuste, e com o degrau explícito: contratar um supervisor a
  mais quando o volume passa de tal patamar não é linear.
- **Pessoal** por headcount × custo médio, com produtividade declarada (unidade por colaborador).
  Assim o modelo mostra se o crescimento exige gente na proporção ou se há alavancagem.
- **SG&A** separando o que escala (comissão, frete) do que não escala (TI, aluguel, diretoria).

**Alavancagem operacional é uma alegação, não uma consequência automática.** Se a margem EBITDA
projetada sobe, o modelo tem de mostrar qual custo fixo está sendo diluído e por quê. Margem que sobe
porque a receita sobe e o custo fixo ficou congelado é artefato de planilha.

## Passo 3 — O horizonte

Duas perguntas, nesta ordem:

**Quantos anos?** O horizonte explícito deve ir até o ponto em que a empresa atinge **regime
estacionário** — crescimento estável, margem estável, ROIC estável, CapEx ≈ depreciação, dias de
capital de giro estáveis. Antes disso, o valor terminal não é aplicável, porque a fórmula de
perpetuidade pressupõe exatamente essa estabilidade.

Em prática de mid-market: 5 anos costuma bastar para negócio maduro; projeto de expansão em ramp-up
ou empresa em transformação pede 7 a 10, ou uma estrutura de dois estágios (ver `valor-terminal`). O
modelo da casa traz 4 anos de forecast mais terminal — se o alvo não estabilizou no ano 4, **diga
isso ao usuário** em vez de forçar o terminal cedo, que é o erro que mais infla valor.

**Detalhado até quando?** Detalhe por driver nos primeiros anos e simplifique depois. Manter
volume-por-dia no ano 10 é precisão falsa; migre para taxa de crescimento consolidada quando a
projeção deixa de ser verificável.

## Passo 4 — A coerência que quase nenhum modelo de mid-market respeita

```
Taxa de reinvestimento = g / ROIC
```

Crescer exige capital. A parcela do NOPAT que precisa voltar para o negócio para sustentar `g` é
`g/ROIC`. Isso não é uma escolha do modelador: é identidade.

| ROIC | g | Reinvestimento exigido | Leitura |
|---|---|---|---|
| 40% | 8% | 20% do NOPAT | Confortável. Sobra caixa para distribuir. |
| 15% | 8% | 53% do NOPAT | Metade do lucro fica no negócio. |
| 10% | 8% | 80% do NOPAT | Quase nada sobra. Crescimento come o caixa. |
| 8% | 8% | 100% do NOPAT | Fluxo de caixa livre zero. Cresce e não gera nada. |

**A verificação obrigatória:** o CapEx e a ΔNCG projetados são compatíveis com `g/ROIC`? Se o modelo
projeta crescimento de 15% ao ano com CapEx de 2% da receita e capital de giro estável, ele está
criando crescimento de graça. É o erro mais valioso a encontrar, porque infla o valor exatamente na
direção que o vendedor quer acreditar.

O caminho inverso também vale como diagnóstico: dado o CapEx e o capital de giro que o plano exige,
**qual crescimento eles sustentam?** Se for menor que o projetado, o plano não fecha.

E o corolário desagradável: **se o ROIC está abaixo do WACC, crescer destrói valor**. Um modelo com
ROIC de 10%, WACC de 15% e crescimento agressivo produz valor menor do que o mesmo negócio estagnado.
Se o diagnóstico (skill `diagnostico-de-roic`) apontou spread negativo, a recomendação muda de
natureza — e é obrigação do oráculo dizer isso, mesmo que contrarie a expectativa do vendedor.

## Passo 5 — Cenários que informam

O modelo da casa tem seletor de cenário (otimista / base / pessimista) por driver. Três regras para
que isso valha algo:

**1. Cenário é combinação coerente, não deslocamento paralelo.** Somar dois pontos percentuais em
tudo não é cenário: é sensibilidade disfarçada. Um cenário é uma *história* — "o contrato grande não
renova, o volume cai 15%, o preço cede porque a capacidade fica ociosa, e o CapEx de expansão é
adiado". Note que o CapEx **também** muda: gestão reage.

**2. O cenário pessimista tem de ser desconfortável.** Se o pessimista ainda mostra crescimento
saudável, ele não é pessimista — é o base com outro nome. Um pessimista útil é aquele que o vendedor
não gosta de ver, porque é o que o comprador vai construir sozinho. Construa você primeiro.

**3. Separe cenário de sensibilidade.** Sensibilidade move uma variável (WACC, `g`, múltiplo) e
mostra a derivada. Cenário move o conjunto operacional de forma correlacionada. As duas coisas
aparecem no deck, em lugares diferentes, e confundi-las faz parecer que há mais análise do que há.

### O que merece cenário próprio, em mid-market

- **Concentração de cliente** — o contrato ou cliente que responde por parcela relevante da receita
  não renova. Se um cliente é mais de 20% da receita, este cenário é obrigatório.
- **Preço de commodity ou de insumo** quando a receita ou o custo é spot.
- **Projeto de expansão** — ele acontece, atrasa, ou não acontece. Tratar expansão como certa no
  cenário base é a escolha que mais frequentemente não se sustenta.
- **Marco regulatório** pendente que muda a demanda ou o custo de conformidade.
- **Perda de incentivo fiscal** por prazo ou por mudança de controle (ver
  `impostos-e-prejuizos-fiscais`).

## A armadilha da dupla contagem com o run-rate

Se a skill `qualidade-de-resultados` já anualizou um contrato novo no EBITDA base (ajuste run-rate),
**esse mesmo contrato não pode aparecer de novo como crescimento no ano 1**. É dupla contagem, e é
sutil: o EBITDA base já contém o contrato em regime pleno, então a receita do ano 1 só deve crescer o
que vier *além* dele.

Verifique explicitamente a fronteira entre o que foi normalizado e o que está sendo projetado. É um
dos itens da skill `revisao-de-modelo`.

## O plano do vendedor

O vendedor quase sempre entrega uma projeção própria. Ela é **insumo, não premissa**. O tratamento
que preserva a relação e a credibilidade:

1. Receba, leia e entenda a lógica dele — inclusive o que ele sabe do negócio e você não.
2. Teste cada driver contra o histórico e contra a capacidade.
3. Onde divergir, **mostre a divergência com o número, não com adjetivo**: "seu plano implica
   utilização de 95% da capacidade a partir de 2028; o histórico máximo foi 71%; o que muda?"
4. O cenário base é o que **você** consegue defender na frente do comprador. O plano do vendedor,
   quando mais agressivo, vira o cenário otimista — o que preserva o argumento dele sem contaminar o
   número central.

Essa separação protege o mandato. Uma projeção que o comprador derruba na diligência custa mais que
um número inicial menor.

## O que entregar

1. A árvore de drivers por linha de receita, com o lastro de cada um nomeado.
2. Custos e despesas com a lógica de escalonamento declarada.
3. O horizonte escolhido, com o argumento de que o regime estacionário foi atingido — ou o aviso de
   que não foi.
4. A verificação `g / ROIC` contra o CapEx e a ΔNCG projetados, com veredito explícito.
5. Os três cenários como histórias coerentes, com o que muda em cada um e por quê.
6. A confirmação de que não há dupla contagem entre run-rate e crescimento projetado.
7. Onde a sua projeção divergiu do plano do vendedor, e o número que sustenta a divergência.

## Próximo passo

`custo-de-capital` e `valor-terminal`. A projeção só vira valor com um WACC defensável e um terminal
que respeite as mesmas coerências verificadas aqui.
