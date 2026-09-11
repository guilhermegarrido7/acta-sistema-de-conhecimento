---
name: impostos-e-prejuizos-fiscais
description: Direcionar o tratamento tributário no modelo — regime de apuração, alíquota efetiva, imposto corrente e diferido, e o aproveitamento de prejuízo fiscal com o limite de 30%. Acionar ao definir a alíquota do modelo, ao encontrar prejuízo fiscal acumulado, ao avaliar troca de regime, ou ao conferir a linha de impostos.
---

# Impostos e prejuízos fiscais — onde o mid-market brasileiro mais erra

## Papel desta skill

**Oráculo. Não escreve na planilha.** Aponta o regime correto, a alíquota defensável e os
aproveitamentos disponíveis, e contesta a linha de impostos do modelo. Quem digita é o analista.

## Por que esta skill existe separada

Aplicar 34% linearmente é a premissa mais frequente e mais frequentemente errada em valuation de
empresa fechada brasileira. A alíquota efetiva de um alvo mid-market raramente é 34%: pode ser 8%
por presumido, pode ser 20% por incentivo estadual, pode ser zero por anos por conta de prejuízo
acumulado. Cada um desses casos move o NOPAT — e portanto o ROIC e o valor — de forma material.

E o efeito é assimétrico: **errar imposto para baixo infla o valor**, e é justamente o erro que o
vendedor não vai contestar e o comprador vai encontrar na diligência fiscal.

## Passo 1 — Descobrir o regime, sem supor

Pergunte. Não deduza do faturamento nem do nome do arquivo.

| Regime | Quando se aplica | Efeito no valuation |
|---|---|---|
| **Lucro real** | Obrigatório acima do limite de receita, ou por opção. Também obrigatório em alguns setores. | Imposto sobre o lucro efetivo. 34% marginal. Permite aproveitar prejuízo fiscal. É o regime que a modelagem de DCF pressupõe naturalmente. |
| **Lucro presumido** | Abaixo do limite legal de receita, por opção. | Imposto sobre percentual presumido da receita, **independente do lucro**. Alíquota efetiva sobre o lucro real pode ser muito menor — ou muito maior, se a margem for baixa. Não aproveita prejuízo fiscal. |
| **Simples Nacional** | Micro e pequena empresa. | Alíquota única sobre receita. Raro no porte de mandato, mas aparece em empresa do grupo. |

Confirme os limites de receita vigentes no ano-base antes de afirmar elegibilidade — eles mudam por
lei e não devem ser citados de memória.

### A pergunta que muda o modelo: o regime sobrevive à transação?

É a questão central e a mais esquecida.

- Uma empresa em **presumido** que cresce pode **ultrapassar o limite** durante o horizonte de
  projeção e ser empurrada para o lucro real. Se o modelo projeta receita crescendo 20% ao ano e
  mantém a alíquota presumida até o ano 5, ele está errado — e o erro cresce ano a ano, exatamente
  onde pesa mais no DCF.
- Uma empresa em presumido **adquirida por um grupo** em lucro real frequentemente é incorporada e
  passa a real. O valor para *aquele* comprador é menor do que o valor standalone.
- **Consequência prática para o mandato:** modele o regime que o alvo terá, não o que tem. E se
  compradores diferentes implicam regimes diferentes, isso é um argumento de segmentação de
  comprador (ver plugin de M&A, skill `segmentacao-de-compradores`) — o melhor comprador pode ser
  aquele que preserva o regime.

Levante isso com o usuário explicitamente. É o tipo de achado que muda o preço e que o vendedor
nunca antecipa.

## Passo 2 — A alíquota do modelo

No lucro real:

```
IRPJ           15% sobre o lucro real
IRPJ adicional 10% sobre o que exceder R$ 240 mil/ano de lucro
CSLL            9% sobre a base de cálculo
              ─────
Marginal      ≈ 34%
```

O adicional é irrelevante na margem para empresa do porte de mandato, mas confira: em empresa com
lucro pequeno ou em holding do grupo, ele importa.

**Use a alíquota marginal (34%) para o escudo fiscal dos juros e para o imposto operacional
ajustado. Use a alíquota efetiva para conferir a plausibilidade histórica.** Se a efetiva histórica
divergir muito de 34%, há algo a explicar — e a explicação é informação, não ruído:

| Causa da divergência | O que verificar |
|---|---|
| Prejuízo fiscal sendo consumido | Ver passo 3. |
| Incentivo fiscal estadual (ICMS) ou federal (SUDENE/SUDAM) | Prazo de vigência, condicionantes de manutenção, e se sobrevive à mudança de controle. **Crítico:** muitos incentivos têm cláusula de perda em caso de alteração societária. |
| Subvenção para investimento | Tratamento e condições. |
| Adições e exclusões relevantes no LALUR | Peça o LALUR. Sem ele, a base fiscal é estimativa. |
| Juros sobre capital próprio | Reduz base tributável. Deduzido no cálculo, mas é distribuição a sócio. |
| Ágio amortizado de aquisição anterior | Benefício com prazo definido, não perpétuo. |

**Peça o LALUR / e-Lalur dos exercícios analisados.** É o documento que reconcilia lucro contábil com
lucro fiscal e o único que sustenta a alíquota efetiva. Se não estiver no data room, coloque na lista
de pendências — não estime a base fiscal sem ele e chame de premissa.

## Passo 3 — Prejuízo fiscal acumulado

Um dos ativos mais mal tratados em valuation de mid-market. É valor real: reduz imposto futuro,
portanto aumenta fluxo de caixa livre.

### A mecânica e o limite

```
Saldo inicial de prejuízo fiscal
  + prejuízo gerado no período              (se houver)
  − prejuízo utilizado no período
= Saldo final

Prejuízo utilizável no ano = MÍNIMO de:
    (a) 30% do lucro real antes da compensação      ← a trava dos 30%
    (b) saldo de prejuízo acumulado disponível
```

Duas características que definem o tratamento:

- **A trava de 30%** significa que o prejuízo não zera o imposto: mesmo com saldo enorme, a empresa
  paga imposto sobre 70% do lucro. Um modelo que zera o imposto até esgotar o saldo está errado, e o
  erro é grande.
- **Não há prazo de prescrição** no regime federal — o saldo não caduca por tempo. Mas há regras que
  restringem o aproveitamento em caso de **mudança de controle acompanhada de mudança de ramo de
  atividade**, e a incorporação da empresa que detém o prejuízo pela adquirente em geral não
  transfere o saldo. Consequência: **o prejuízo fiscal só tem valor se a estrutura da transação
  preservar a pessoa jurídica que o detém**.

Faça o roll-forward ano a ano no horizonte de projeção e mostre a economia de imposto que ele produz.

### O ponto de negociação que decorre disso

O prejuízo fiscal vale diferente para vendedor e comprador, e vale diferente entre compradores:

- Se a operação for **compra de quotas** com preservação da PJ, o prejuízo segue aproveitável e é
  valor que o comprador captura.
- Se for **incorporação** ou houver mudança de ramo, o benefício se perde.
- Comprador que projeta lucro alto consome o saldo rápido; comprador com prejuízo próprio não
  aproveita nada.

**Portanto:** quantifique o valor presente da economia fiscal e trate-o explicitamente. Ele pode ser
um argumento de preço, e pode ser um argumento a favor de uma estrutura de transação em detrimento
de outra. Ver plugin de M&A, skill `negociacao-e-loi`. Sinalize ao usuário que a conclusão precisa de
validação por assessor tributário — esta skill direciona a análise econômica, não substitui parecer
fiscal.

## Passo 4 — Corrente, diferido e o que entra no fluxo

```
Imposto total (DRE)  =  imposto corrente  +  imposto diferido
```

- **Corrente** é o que sai de caixa no período. **É o que entra no FCFF.**
- **Diferido** é diferença temporária entre base contábil e fiscal (depreciação acelerada, provisão
  não dedutível, ágio, prejuízo fiscal reconhecido como ativo). Não é caixa no período.

**Regra do fluxo de caixa:** o FCFF usa o imposto **corrente**. O modelo da casa faz isso
corretamente na linha de fluxo de caixa não alavancado (EBITDA − impostos correntes − CapEx − ΔNCG).
Confira que o modelo não está usando o imposto total ali — usar o total é um erro comum que distorce
o fluxo nos anos em que o diferido é grande.

Ativo fiscal diferido no balanço: é **item não operacional**, entra no bridge de EV para equity
value, não no capital investido operacional. Ver `reorganizacao-contabil`.

## Passo 5 — Passivos tributários, que são dívida

O que aparece com frequência em mid-market e precisa entrar nos fundos investidos, não no capital de
giro:

- **Parcelamento tributário** (REFIS, PERT, transação tributária) — obrigação contratada com juros e
  cronograma. Quem compra a empresa herda. Cheque o saldo, o prazo e as condições de manutenção do
  parcelamento: a exclusão por inadimplência acelera a dívida inteira.
- **Contingência tributária provável** — provisionada, é equivalente de dívida.
- **Contingência possível** — não provisionada, mas divulgada em nota. Não entra na dívida líquida,
  mas **entra na negociação**: costuma virar escrow, retenção de preço ou indenização específica.
- **Depósito judicial** — ativo não operacional. Se a discussão for ganha, é caixa; se perdida,
  quita o passivo. Trate junto com a contingência correspondente, não isolado.

## Red flags fiscais

- Alíquota efetiva histórica muito abaixo de 34% no lucro real, sem explicação no LALUR.
- Incentivo fiscal relevante com prazo vencendo dentro do horizonte de projeção — e o modelo
  mantendo o benefício até o terminal.
- Incentivo com cláusula de perda por mudança de controle. Achado que muda o preço.
- Empresa em presumido com margem alta: o presumido está sendo vantajoso, e crescer pode custar o
  regime.
- Parcelamento tributário não mencionado no balanço mas visível no razão ou nas certidões.
- Certidão negativa de débitos ausente ou vencida no data room.
- Distribuição de lucro superior ao lucro contábil acumulado — pode gerar tributação.
- Empresas do grupo com transações intercompany a preços não de mercado: risco de glosa.

## O que entregar

1. O regime de cada empresa relevante do grupo, confirmado, e o regime projetado com a justificativa
   da manutenção ou da troca.
2. Alíquota efetiva histórica ano a ano, reconciliada com a marginal, com cada divergência explicada.
3. O roll-forward de prejuízo fiscal no horizonte, respeitando a trava de 30%, com o valor presente
   da economia.
4. A separação corrente vs. diferido, e a confirmação de que o fluxo usa o corrente.
5. A lista de passivos e contingências tributárias, classificados entre dívida, negociação e ruído.
6. Os red flags, com o que cada um exige de documento.

## Próximo passo

`projecao-e-cenarios` para amarrar a linha de impostos aos drivers, e `valor-terminal` — onde a
alíquota tem de estar no nível de regime estacionário, sem benefício temporário embutido na
perpetuidade.
