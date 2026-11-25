---
name: diagnostico-de-roic
description: Diagnosticar criação de valor pelo ROIC e construir a análise estratégica: árvore de direcionadores, vantagens operacionais lidas nas métricas (ex.: marca forte com marketing baixo), fonte de valor, por que o concorrente não copia, lucro econômico, spread contra o WACC e duração da vantagem. Acionar ao calcular ou interpretar ROIC e ao explicar de onde vem o retorno.
---

# Diagnóstico de ROIC: o veredito sobre criação de valor

## Papel desta skill

**Oráculo. Não escreve na planilha.** Interpreta o ROIC, contesta números implausíveis e transforma
o cálculo em argumento de equity story. Quem digita é o analista.

**O produto desta skill é uma análise estratégica, não uma tabela de índices.** O cálculo técnico
(NOPAT, capital investido, decomposição) é o meio. O output é a resposta a três perguntas, nesta
ordem: **quanto** valor a empresa cria, **de onde** ele vem (quais vantagens operacionais aparecem
nas métricas) e **por que** o concorrente não consegue copiar. Número sem essa leitura não sai
daqui.

Fundamento: skill `fundamentos-koller`, references `capital_investido.md` e `noplat_detalhado.md`.

References desta skill:

- `references/arvore_de_direcionadores.md` — a árvore completa, fórmulas, armadilhas, as quatro
  lentes de leitura e a ponte de ROIC contra os pares.
- `references/vantagens_competitivas.md` — catálogo de vantagens: assinatura nos números, evidência,
  teste de falseamento, e os três filtros "por que não copiam?".

## A pergunta que esta etapa responde

A pergunta é se **a empresa devolve mais do que custa o capital que consome, e por quanto tempo
mais vai devolver.**

Disso decorre tudo o que vem depois. Se o ROIC excede o WACC, crescer cria valor e o modelo deve
premiar crescimento. Se o ROIC está abaixo do WACC, **crescer destrói valor**, e um plano de
expansão agressivo torna a empresa menos valiosa, não mais. Não é sutileza acadêmica: muda o sinal
da recomendação inteira.

## Pré-requisito

Só entre aqui com a **reconciliação de capital fechada** (skill `reorganizacao-contabil`) e o
**EBITDA normalizado** definido (skill `qualidade-de-resultados`). ROIC sobre base não reconciliada
é número sem significado.

## A conta

```
ROIC = NOPAT / Capital investido operacional MÉDIO
```

**Médio, não final.** O NOPAT é fluxo do ano; o capital investido é foto de data. Usar o saldo final
subestima o ROIC de empresa em crescimento (o capital do fim do ano ainda não produziu) e
superestima o de empresa em contração. Use `(inicial + final) / 2`. Quando o CapEx foi muito
concentrado em um trimestre, considere média dos saldos trimestrais e registre a escolha.

## Decomposição: onde o retorno nasce

```
ROIC = Margem operacional × Giro do capital

       NOPAT      NOPAT       Receita líquida
       ─────  =  ─────────  ×  ───────────────
         IC       Receita            IC
```

É a decomposição que transforma um número em diagnóstico. Duas empresas com ROIC de 20% podem ser
negócios opostos:

| Perfil | Margem | Giro | Natureza | Implicação de valuation |
|---|---|---|---|---|
| Margem alta, giro baixo | 20% | 1,0x | Ativo pesado, diferenciação, marca, tecnologia | Barreira de entrada tende a ser o ativo ou a marca. Crescer exige capital. Sensível a CapEx. |
| Margem baixa, giro alto | 4% | 5,0x | Distribuição, serviço, capital de giro leve | Barreira tende a ser escala, logística ou rede. Crescer exige pouco capital: g alto é viável. Sensível a preço e a capital de giro. |

Desça um nível mais quando o dado permitir: margem se abre em preço, mix e estrutura de custo; giro
se abre em giro do imobilizado e giro do capital de giro. **É essa abertura que produz os slides de
driver de valor no deck**, e não o ROIC consolidado.

## Árvore de direcionadores — abrir cada ramo em métricas que o negócio controla

Margem e giro ainda são agregados. Cada ramo se abre em métricas que apontam para uma decisão ou uma
vantagem concreta:

| Ramo de margem (poder de preço e custos) | Ramo de giro (eficiência de capital) |
|---|---|
| **Margem bruta**: poder de precificação ou vantagem de custo de produção | **PMR**: poder sobre o cliente e disciplina de cobrança |
| **Vendas e marketing / Receita**: eficiência em adquirir e manter cliente | **Giro de estoque (PME)**: eficiência logística e da cadeia |
| **G&A / Receita**: alavancagem operacional da estrutura fixa | **PMP**: poder de barganha com fornecedores |
| **P&D / Receita**: intensidade de inovação exigida para manter o negócio | **Imobilizado líquido / Receita**: intensidade de capital físico (CapEx) |

A árvore tem de **fechar**: margem bruta menos as despesas sobre receita reproduz a margem EBITA, e a
soma das intensidades de capital é o inverso do giro. Fórmulas, armadilhas de cálculo (receita
bruta no PMR, pró-labore no G&A, P&D capitalizado) e a ponte de ROIC estão em
`references/arvore_de_direcionadores.md`.

## Leitura cruzada — de métricas soltas à vantagem operacional

**Nenhuma métrica prova vantagem sozinha. A vantagem aparece na combinação.** O exemplo central:

> Margem bruta acima dos pares **e** vendas e marketing / receita igual ou menor que os pares =
> a empresa cobra mais sem gastar mais para vender. Hipótese: **marca forte**.

A mesma margem bruta alta com marketing alto conta outra história: a demanda está sendo *comprada*,
e a vantagem é de gasto, não de marca. É esse cruzamento que separa diagnóstico de descrição.

Outras combinações (P&D alto, escala, capital de giro negativo): `references/vantagens_competitivas.md`.

**Cada hipótese tem de passar por três testes antes de virar conclusão:**

1. **As quatro lentes**: nível contra pares, tendência na série, corte por segmento e
   sensibilidade (quanto do ROIC se perde se a métrica convergir aos pares).
2. **Evidência fora do balanço**: contrato, retenção, patente, licença, participação regional.
3. **Falseamento**: o que, se fosse verdade, mostraria que a vantagem é artefato? G&A baixo por
   pró-labore abaixo do mercado, S&M baixo porque a carteira é do dono, margem alta por mix
   temporário.

Catálogo completo, com assinatura, evidência e falseamento de cada vantagem:
`references/vantagens_competitivas.md`.

## Fonte de valor — preço ou custo e capital?

Depois de identificar as vantagens, classifique-as em duas fontes e **diga qual pesa mais**,
apoiando-se na ponte de ROIC contra os pares:

- **Vantagem de preço (diferenciação):** cobra mais sem perder volume, por produto inovador ou
  patente, marca e qualidade percebida, custos de troca ou efeito de rede. Aparece na margem bruta.
- **Vantagem de custo e eficiência de capital:** entrega o mesmo gastando menos recursos, por escala
  regional ou global, processo exclusivo ou insumo privilegiado, ou alto giro de capital (capital
  de giro negativo). Aparece em G&A, custo unitário e giro.

A distinção muda a leitura de risco. Vantagem de preço é frágil a concorrência que iguala o produto
e a mudança de preferência. Vantagem de custo é frágil a quem replica a escala e a mudança de preço
de insumo. Vantagem de capital de giro é frágil a quem muda o prazo dos fornecedores.

**Por que o concorrente não copia?** Fecha a análise econômica. Aplique a cada vantagem os três
filtros de `references/vantagens_competitivas.md`: imitabilidade, substituição e apropriação. O que
passa nos três é a barreira, e a barreira define o CAP (seção adiante).

## ROIC com e sem goodwill

Duas medidas, duas perguntas:

- **ROIC sem goodwill**: a operação, em si, é boa? É o que se compara com concorrentes e o que
  informa a projeção operacional.
- **ROIC com goodwill**: o capital *efetivamente investido pelos acionistas*, incluindo o que foi
  pago acima do valor patrimonial em aquisições passadas, rendeu?

Em mandato de M&A, ambas importam e por motivos diferentes. **Para o comprador, o ROIC relevante é o
que ele vai obter sobre o preço que vai pagar**, o que aproxima o ROIC *com* goodwill, calculado
sobre o EV negociado. Ver skill `triangulacao-e-faixa`, seção de retorno sobre preço pago.

Se o alvo nunca fez aquisição, as duas medidas coincidem e basta uma.

## Lucro econômico

```
Lucro econômico = (ROIC − WACC) × Capital investido
```

Traduz o spread percentual em reais, que é a linguagem que o vendedor e o comprador entendem. Uma
empresa com ROIC de 48% e WACC de 15% sobre capital investido de R$ 10 milhões cria R$ 3,3 milhões
de valor econômico por ano, número que cabe num slide de sumário executivo e que dificilmente sai
da memória do leitor.

Os três regimes, e o que cada um obriga a fazer no modelo:

| Regime | Leitura | O que o modelo tem de refletir |
|---|---|---|
| ROIC > WACC | Cria valor. Crescimento é alavanca. | Crescimento merece prêmio. Valor terminal sensível à duração do spread. Discuta CAP. |
| ROIC ≈ WACC | Retorno normal, sem vantagem. | Crescimento é neutro. O múltiplo implícito converge para 1/WACC. Não prometa prêmio. |
| ROIC < WACC | Destrói valor. | Crescimento **piora** o valor. Discuta reestruturação, desinvestimento ou redução de capital antes de discutir expansão. Um plano de CapEx agressivo aqui reduz o preço. |

## Duração: o período de vantagem competitiva (CAP)

O spread não é perpétuo. Concorrência, entrada de novos players e reversão à média corroem retorno
excepcional. **A sustentabilidade do retorno determina a duração da criação de valor**, e essa
duração vale tanto quanto o nível do retorno.

O que sustenta um CAP longo são as fontes de vantagem competitiva de Koller, Goedhart e Wessels
(*Valuation*, McKinsey; 8ª ed., Wiley, 2025, e 7ª ed., 2020), em duas famílias, mais o efeito de
rede, implícito:

| Família | Fonte | Evidência documental que sustenta o CAP |
|---|---|---|
| Prêmio de preço | Produto inovador | Patente, registro ou tecnologia difícil de copiar, com a receita que depende dela |
| | Qualidade | Prêmio de preço observável, por diferença real ou percebida, em série de preços contra concorrentes |
| | Marca | Prêmio de preço sustentado sem diferença clara de qualidade; difícil de provar em B2B mid-market |
| | Lock-in do cliente | Custo de troca e contrato longo: vigência, cláusula de reajuste, multa rescisória, integração operacional, homologação |
| | Disciplina racional de preço | Piso de preço mantido pelos líderes do setor ao longo de ciclos, visível na série de preço e margem |
| Custo e eficiência de capital | Método de negócio inovador | Modelo operacional que o concorrente não replicou, com o custo unitário que o comprova |
| | Recursos exclusivos (*unique resources*) | Característica geológica, acesso exclusivo a insumo ou localização sem substituto próximo, com título ou contrato |
| | Economia de escala | Escala eficiente no mercado relevante, inclusive o local: custo de transporte que limita o raio do concorrente (resíduos, agregados, distribuição regional) |
| | Produto ou processo escalável | Cliente ou capacidade adicionados a custo marginal desprezível, visível na margem incremental |
| Implícita | Efeito de rede | Valor para cada cliente que cresce com o número de clientes ou de pontos atendidos |

**A robustez é a da evidência documental.** A fonte vale tantos anos de CAP quanto o documento que a
prova: contrato com vigência, título do recurso, série de preço, custo unitário. Em mid-market,
lock-in contratual, recurso exclusivo e escala local costumam ser os mais verificáveis; marca e
vantagem de custo por processo próprio, os mais difíceis de provar e os mais imitáveis.

**Tailwinds regulatórios.** Licença ambiental de operação, concessão, outorga e direito minerário
não são fonte de vantagem competitiva nessa régua. São tailwinds regulatórios: verificáveis em
documento, podem alongar o CAP enquanto a regra vigorar, mas carregam risco regulatório (renovação,
revisão de condicionante, nova outorga a concorrente, mudança da norma). Declare-os em parágrafo
próprio da tese, com a norma, o prazo e o risco, sem somá-los às fontes da tabela. Quando a licença é
o meio de uma fonte, como a unidade licenciada perto da demanda que dá escala eficiente no mercado
local, classifique pela fonte e cite a norma como contexto. É a mesma régua do `teaser`, Bloco 7,
no plugin de M&A.

O que **não** sustenta CAP, apesar de ser frequentemente apresentado como se sustentasse: "equipe
experiente", "atendimento diferenciado", "qualidade superior" sem prêmio de preço demonstrado,
"relacionamento com clientes" sem custo de troca. São atributos, não barreiras. Se o concorrente
pode contratar ou copiar em 12 meses, não é CAP.

Cada item da lista corresponde a uma vantagem do catálogo em `references/vantagens_competitivas.md`:
use a assinatura nos números para levantar a hipótese e esta régua para estimar a duração.

**Implicação prática:** o CAP define quantos anos o modelo pode manter ROIC acima do WACC antes de
convergir. Um CAP de 5 a 10 anos é defensável com barreira documentada; perpetuidade com spread
elevado não é. Ver skill `valor-terminal` para a mecânica da convergência.

## Benchmarking de ROIC e crescimento

A leitura mais forte do diagnóstico é posicional: **onde o alvo está no plano ROIC × crescimento
contra comparáveis**. Um alvo com ROIC muito acima da média setorial precisa de explicação, e a
explicação é a equity story.

Ao montar a comparação:

- Selecione comparáveis pela **economia do negócio**, não pelo código setorial. Ver
  `triangulacao-e-faixa`.
- Padronize o tratamento de leases, goodwill e caixa entre alvo e comparáveis. Sem isso, o ROIC do
  alvo é maçã e o do comparável é laranja.
- Comparável listado tem capital investido a valor contábil histórico e o alvo também: a comparação
  é válida. O que não é válido é comparar o ROIC contábil do alvo com o ROIC sobre EV do comparável.
- Declare a média setorial e o número de comparáveis. "6x acima do benchmark setorial" só significa
  algo com o benchmark explicitado.

## Quando o ROIC vem muito alto: o teste de plausibilidade

ROIC acima de ~40% em empresa mid-market fechada é possível e acontece, mas é a hipótese que mais
frequentemente esconde erro de base. **Antes de levar o número ao deck, elimine estas seis causas:**

1. **Imobilizado quase totalmente depreciado.** O denominador é contábil e não reflete o capital
   econômico necessário para operar. Teste: qual seria o ROIC com o imobilizado a valor de
   reposição? Se cair muito, o ROIC alto é artefato contábil e precisa de nota.
2. **Ativo operacional fora da empresa.** Imóvel, frota ou equipamento na pessoa física do sócio ou
   em outra empresa do grupo. O capital investido está incompleto.
3. **Caixa inteiro no capital investido, ou nenhum.** Se nenhum caixa foi incluído, o denominador
   está subestimado.
4. **Add-back agressivo no numerador.** O NOPAT carrega um EBITDA normalizado que não se sustenta.
5. **Capital de giro negativo estrutural** tratado como redução de capital sem checar se é
   sustentável: adiantamento de cliente que pode cessar.
6. **Ano-base atípico.** Um ano excepcional produz ROIC excepcional. Olhe a série, não o ponto.

Se nenhuma das seis explica, **o ROIC alto é real e é o principal ativo do equity story**, e merece
o slide didático que explica ao comprador o que é ROIC antes de mostrar o número, porque um número
que o leitor não entende não convence.

## Estrutura do output estratégico

O output segue uma **sequência de argumento**, não de cálculo. Cada seção abre com uma **manchete**:
uma frase que afirma a conclusão (não um rótulo), no mesmo padrão de título com linha de mensagem do
`relatorio-de-valuation`. Os números sustentam a manchete; não a substituem.

| # | Seção | Pergunta que responde | Conteúdo mínimo |
|---|---|---|---|
| 1 | **Veredito de valor** | A empresa devolve mais do que o capital custa? | ROIC histórico ano a ano, NOPAT, capital médio, WACC, spread, lucro econômico em reais, regime (acima, próximo ou abaixo do WACC) |
| 2 | **De onde vem o retorno** | O ROIC nasce de margem ou de giro? | Árvore preenchida contra a mediana dos pares (amostra declarada), séries de 3 a 5 anos, ponte de ROIC por direcionador |
| 3 | **Vantagens operacionais** | O que, nas métricas, indica vantagem? | Uma linha por vantagem: assinatura nos números, evidência, falseamento, peso no ROIC, veredito (confirmada, parcial, não sustentada) |
| 4 | **Fonte de valor** | Preço ou custo e capital? Qual pesa mais? | Classificação das vantagens nas duas fontes, com o peso de cada uma na ponte |
| 5 | **Por que não copiam** | Qual é a barreira e por quanto tempo? | Os três filtros por vantagem, tese de CAP com evidência documental, o que pode corroê-la. Tailwinds regulatórios declarados à parte, com o risco de cada um |
| 6 | **Riscos à tese** | O que pode estar errado? | Teste de plausibilidade (as seis causas, com veredito) e as vantagens que o falseamento enfraqueceu |
| 7 | **Implicações** | O que isso muda no modelo e na negociação? | Crescimento premiado ou neutro, margens projetadas, reinvestimento, convergência do spread, mensagem da equity story, argumento de preço |

Regras de construção:

- **Manchete afirma, não rotula.** "Marca forte sustenta margem bruta de 42% contra 31% dos pares com
  marketing de 3% da receita, e explica dois terços do spread de ROIC" é manchete. "Análise da margem
  bruta" não é.
- **Toda vantagem declarada carrega o seu falseamento.** Vantagem sem teste de falseamento é
  adjetivo. Se o teste não pôde ser feito por falta de dado, registre a lacuna e rebaixe o veredito
  para "parcial".
- **Cada vantagem tem peso.** Quanto do spread contra os pares ela explica. Vantagem real mas
  pequena não é o centro da equity story.
- **Confirmada e não sustentada convivem no mesmo output.** O leitor confia mais em quem mostra o
  que descartou.
- **Fechar o circuito com o modelo.** A seção 7 diz quais premissas de projeção a análise autoriza ou
  proíbe (por exemplo, "margem bruta pode se manter, mas não expandir: a vantagem é de marca estável,
  não de escala crescente").
- **ROIC projetado.** Além das sete seções, entregue o ROIC projetado ano a ano, na mesma base de
  NOPAT e de capital do histórico, com margem × giro e lucro econômico. É obrigatório no modelo; no
  deck, entra quando sustenta a tese ou o terminal.

## Matriz de decisões

Mínimo de ROIC no modelo e no deck, e a origem do RONIC do terminal:
[references/matriz-de-decisoes.md](references/matriz-de-decisoes.md).

## Próximo passo

`projecao-de-mercado-e-equity-story`, onde a tese de CAP aqui diagnosticada vira mecanismo de
ganho ou perda de market share projetado. Depois, `projecao-e-cenarios`, onde o ROIC diagnosticado
impõe a coerência entre crescimento e reinvestimento. E `custo-de-capital`, para que o spread tenha
um WACC defensável do outro lado.
