---
name: diagnostico-de-roic
description: Diagnosticar criação de valor pelo ROIC — decomposição em margem e giro, lucro econômico, spread contra o WACC e duração da vantagem competitiva. Acionar ao calcular ou interpretar ROIC, ao avaliar se o crescimento cria ou destrói valor, ao definir o período de vantagem competitiva, ou ao comparar retornos com o setor.
---

# Diagnóstico de ROIC — o veredito sobre criação de valor

## Papel desta skill

**Oráculo. Não escreve na planilha.** Interpreta o ROIC, contesta números implausíveis e transforma
o cálculo em argumento de equity story. Quem digita é o analista.

Fundamento: skill `fundamentos-koller`, references `capital_investido.md` e `noplat_detalhado.md`.

## A pergunta que esta etapa responde

Não é "quanto a empresa lucra". É **"a empresa devolve mais do que custa o capital que consome — e
por quanto tempo mais vai devolver?"**

Disso decorre tudo o que vem depois. Se o ROIC excede o WACC, crescer cria valor e o modelo deve
premiar crescimento. Se o ROIC está abaixo do WACC, **crescer destrói valor** — e um plano de
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

## Decomposição — onde o retorno nasce

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
| Margem baixa, giro alto | 4% | 5,0x | Distribuição, serviço, capital de giro leve | Barreira tende a ser escala, logística ou rede. Crescer exige pouco capital — g alto é viável. Sensível a preço e a capital de giro. |

Desça um nível mais quando o dado permitir: margem se abre em preço, mix e estrutura de custo; giro
se abre em giro do imobilizado e giro do capital de giro. **É essa abertura que produz os slides de
driver de valor no deck** — não o ROIC consolidado.

## ROIC com e sem goodwill

Duas medidas, duas perguntas:

- **ROIC sem goodwill** — a operação, em si, é boa? É o que se compara com concorrentes e o que
  informa a projeção operacional.
- **ROIC com goodwill** — o capital *efetivamente investido pelos acionistas*, incluindo o que foi
  pago acima do valor patrimonial em aquisições passadas, rendeu?

Em mandato de M&A, ambas importam e por motivos diferentes. **Para o comprador, o ROIC relevante é o
que ele vai obter sobre o preço que vai pagar** — o que aproxima o ROIC *com* goodwill, calculado
sobre o EV negociado. Ver skill `triangulacao-e-faixa`, seção de retorno sobre preço pago.

Se o alvo nunca fez aquisição, as duas medidas coincidem e basta uma.

## Lucro econômico

```
Lucro econômico = (ROIC − WACC) × Capital investido
```

Traduz o spread percentual em reais, que é a linguagem que o vendedor e o comprador entendem. Uma
empresa com ROIC de 48% e WACC de 15% sobre capital investido de R$ 10 milhões cria R$ 3,3 milhões
de valor econômico por ano — número que cabe num slide de sumário executivo e que dificilmente sai
da memória do leitor.

Os três regimes, e o que cada um obriga a fazer no modelo:

| Regime | Leitura | O que o modelo tem de refletir |
|---|---|---|
| ROIC > WACC | Cria valor. Crescimento é alavanca. | Crescimento merece prêmio. Valor terminal sensível à duração do spread. Discuta CAP. |
| ROIC ≈ WACC | Retorno normal, sem vantagem. | Crescimento é neutro. O múltiplo implícito converge para 1/WACC. Não prometa prêmio. |
| ROIC < WACC | Destrói valor. | Crescimento **piora** o valor. Discuta reestruturação, desinvestimento ou redução de capital antes de discutir expansão. Um plano de CapEx agressivo aqui reduz o preço. |

## Duração — o período de vantagem competitiva (CAP)

O spread não é perpétuo. Concorrência, entrada de novos players e reversão à média corroem retorno
excepcional. **A sustentabilidade do retorno determina a duração da criação de valor**, e essa
duração vale tanto quanto o nível do retorno.

O que sustenta um CAP longo, em ordem de robustez:

1. **Ativo escasso ou regulatório** — licença ambiental de operação, concessão, outorga, direito
   minerário, imóvel em localização única. O mais defensável, porque é verificável em documento.
2. **Custo de troca e contrato de longo prazo** — contrato com vigência e cláusula de reajuste,
   integração operacional com o cliente.
3. **Escala local com custo de transporte relevante** — o clássico do setor de resíduos, agregados,
   distribuição regional. Barreira geográfica real.
4. **Rede e efeito de densidade** — mais pontos tornam cada ponto melhor.
5. **Marca e reputação** — real, mas mais difícil de provar em B2B mid-market.
6. **Vantagem de custo por processo ou tecnologia própria** — mais frágil, imitável.

O que **não** sustenta CAP, apesar de ser frequentemente apresentado como se sustentasse: "equipe
experiente", "atendimento diferenciado", "qualidade superior", "relacionamento com clientes". São
atributos, não barreiras. Se o concorrente pode contratar ou copiar em 12 meses, não é CAP.

**Implicação prática:** o CAP define quantos anos o modelo pode manter ROIC acima do WACC antes de
convergir. Um CAP de 5 a 10 anos é defensável com barreira documentada; perpetuidade com spread
elevado não é. Ver skill `valor-terminal` para a mecânica da convergência.

## Benchmarking de ROIC e crescimento

A leitura mais forte do diagnóstico é posicional: **onde o alvo está no plano ROIC × crescimento
contra comparáveis**. Um alvo com ROIC muito acima da média setorial precisa de explicação — e a
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

## Quando o ROIC vem muito alto — o teste de plausibilidade

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
   sustentável — adiantamento de cliente que pode cessar.
6. **Ano-base atípico.** Um ano excepcional produz ROIC excepcional. Olhe a série, não o ponto.

Se nenhuma das seis explica, **o ROIC alto é real e é o principal ativo do equity story** — e merece
o slide didático que explica ao comprador o que é ROIC antes de mostrar o número, porque um número
que o leitor não entende não convence.

## O que entregar

1. ROIC histórico ano a ano, com NOPAT, capital investido médio, WACC e spread.
2. A decomposição margem × giro, com a leitura do perfil de negócio.
3. Lucro econômico em reais.
4. O posicionamento contra comparáveis, com a amostra declarada.
5. A tese de CAP: qual barreira, por quantos anos, com que evidência documental.
6. O resultado do teste de plausibilidade — as seis causas checadas, com veredito.

## Próximo passo

`projecao-e-cenarios`, onde o ROIC diagnosticado impõe a coerência entre crescimento e reinvestimento.
E `custo-de-capital`, para que o spread tenha um WACC defensável do outro lado.
