---
name: capital-de-giro-e-capex
description: Direcionar os cronogramas operacionais do modelo — prazos médios, necessidade de capital de giro, roll-forward de imobilizado e a separação entre capex de manutenção e de expansão. Acionar ao projetar capital de giro, ao modelar CapEx e depreciação, ou ao checar coerência entre prazos projetados e histórico.
---

# Capital de giro e CapEx — onde o caixa some

## Papel desta skill

**Oráculo. Não escreve na planilha.** Direciona os dois cronogramas que transformam lucro em caixa,
e contesta as premissas que não se sustentam. Quem digita é o analista.

## Por que estes dois andam juntos

São os dois usos de caixa que ficam **entre o EBITDA e o fluxo de caixa livre**. Uma empresa pode
crescer, ter EBITDA de 20% e não gerar um real de caixa — porque cada real de receita nova exige
capital de giro e cada unidade de capacidade nova exige CapEx. É aqui que a diferença entre "empresa
lucrativa" e "empresa que gera caixa" se decide, e é aqui que o modelo do mid-market mais erra por
otimismo silencioso.

E são também os dois lugares onde o *comprador* vai olhar primeiro depois do EBITDA — porque
determinam o capital que ele terá de aportar depois de pagar o preço.

## Parte 1 — Capital de giro

### Os três prazos

```
PMR (prazo médio de recebimento) = Contas a receber / Receita bruta × 365
PME (prazo médio de estocagem)   = Estoques / CMV × 365
PMP (prazo médio de pagamento)   = Fornecedores / Compras × 365
```

Duas armadilhas de denominador que produzem números errados e passam desapercebidas:

- **PMR sobre receita bruta, não líquida.** O contas a receber inclui os impostos faturados. Usar
  receita líquida no denominador inflaciona o PMR.
- **PMP sobre compras, não sobre CMV.** Compras = CMV + variação de estoque. Em empresa que está
  estocando, usar CMV subestima o PMP. Se não houver dado de compras, use CMV e **declare a
  aproximação**.

### Ciclo e necessidade de capital de giro

```
Ciclo operacional   = PME + PMR
Ciclo financeiro    = PME + PMR − PMP        ← os dias que a empresa financia
NCG                 = ativo operacional circulante − passivo operacional circulante
ΔNCG                = NCG do ano − NCG do ano anterior     ← é isto que entra no FCFF
```

**O sinal importa e é fonte constante de erro:** aumento de NCG **consome** caixa (entra negativo no
fluxo). Um modelo em que a receita cresce 30% e a ΔNCG aparece positiva no fluxo está com o sinal
invertido — cheque isso antes de qualquer outra coisa.

### Ciclo financeiro negativo

Alguns negócios recebem antes de pagar: escola com mensalidade antecipada, empresa com adiantamento
de cliente, varejo com prazo de fornecedor longo. O capital de giro é **fonte** de caixa, e o
crescimento se autofinancia.

É uma vantagem econômica real e merece destaque no equity story — mas exige duas verificações:

1. **É estrutural ou é aperto de caixa?** Fornecedor sendo pago com atraso por dificuldade
   financeira produz o mesmo PMP alto de um fornecedor com prazo negociado. Cheque o aging de
   fornecedores e se há juros/multa por atraso na DRE. Um PMP inflado por inadimplência normaliza
   para baixo depois da transação e vira necessidade de caixa para o comprador.
2. **Escala com o crescimento?** Adiantamento de cliente concentrado em poucos contratos não escala.

### Projeção: dias, não valores

Projete **em dias**, deixando o valor ser calculado. Projetar o valor absoluto de contas a receber
perde a relação com a receita e produz capital de giro incoerente no ano 5.

Regras de coerência que o oráculo deve verificar:

- **O dia projetado tem de ter uma razão.** Se o PMR histórico é 45 dias e o modelo projeta 35,
  qual é a ação que causa isso — mudança de política de crédito, troca de mix de cliente,
  antecipação de recebíveis? Sem ação nomeada, volte para a média histórica.
- **Melhoria de capital de giro é ganho de caixa não recorrente.** Reduzir o PMR de 45 para 35 dias
  libera caixa uma vez. O modelo não pode manter o ganho todo ano — e o valor terminal não pode
  embutir melhoria contínua.
- **Média histórica de qual período?** Se o negócio mudou de mix, a média de 3 anos não representa.
  Pergunte ao usuário; não escolha calado.
- **Sazonalidade.** Prazos calculados sobre saldo de 31/12 podem não representar o ano. Em negócio
  sazonal, use média de saldos mensais ou trimestrais se o dado existir, e diga se não existir.
- **No ano terminal, os dias têm de estar estáveis.** Capital de giro em movimento na perpetuidade é
  incoerência: ver skill `valor-terminal`.

### Red flags de capital de giro

- PMR subindo ano a ano com receita estável — deterioração de crédito ou receita que não vira caixa.
- Aging de recebíveis com concentração crescente acima de 90 dias e PDD irrisória.
- PME subindo sem mudança de mix — obsolescência não provisionada.
- Recebível de parte relacionada dentro do contas a receber operacional. Não é operacional.
- Antecipação de recebíveis (factoring, desconto de duplicata) tratada como redução de PMR. **É
  dívida**, não eficiência: o recebível saiu do ativo mas a empresa pagou juros por isso. Verifique
  o resultado financeiro e reclassifique — ver `reorganizacao-contabil`.

## Parte 2 — CapEx e depreciação

### O roll-forward, que não é opcional

```
PP&E bruto inicial
  + CapEx do período
  − baixas (valor bruto do ativo alienado)
= PP&E bruto final

Depreciação acumulada inicial
  + depreciação do período
  − depreciação acumulada das baixas
= Depreciação acumulada final

PP&E líquido = bruto final − acumulada final
```

Se o modelo não tem roll-forward e apenas projeta "imobilizado líquido = anterior + capex −
depreciação", ele funciona enquanto não há baixa — e passa a errar silenciosamente quando há.
Sinalize.

### A separação que muda o valuation

| Tipo | O que é | Como projetar |
|---|---|---|
| **Manutenção** | Repor capacidade existente. Não adiciona receita. | Vinculado à base de ativos: % do imobilizado bruto, ou ≈ depreciação em regime estacionário. |
| **Expansão** | Adicionar capacidade. Gera receita nova. | Vinculado ao plano: R$ por unidade de capacidade, com a receita correspondente amarrada. |

**Por que a distinção decide o preço.** Uma empresa cujo CapEx é quase todo de manutenção converte
EBITDA em caixa e vale mais por EBITDA. Uma empresa que precisa investir para crescer consome o
próprio EBITDA — e se o ROIC do investimento incremental não superar o WACC, **crescer reduz o
valor** (ver `diagnostico-de-roic`).

Projetar CapEx como um único percentual da receita apaga essa distinção e é o atalho mais comum. Ele
é aceitável em duas situações — negócio maduro sem plano de expansão, ou horizonte longe demais para
detalhar — e nas duas o percentual deve vir da média histórica, com a nota de que expansão e
manutenção estão fundidas.

**Peça o CapEx histórico segregado.** A carta de solicitação de informações da casa já pede isso
(ver plugin de M&A, skill `solicitacao-de-informacoes`). Se vier consolidado, reconstrua com o
usuário a partir do razão do imobilizado, ou declare a limitação.

### CapEx de expansão sem receita amarrada

O erro que mais infla valuation: o modelo projeta o CapEx de expansão (porque o vendedor apresentou
o plano) mas projeta a receita pela tendência histórica. Resultado: capital investido cresce, receita
não acompanha na proporção, e o ROIC projetado cai sem que ninguém repare — ou, pior, a receita
cresce sem CapEx nenhum e o ROIC projetado explode.

**Regra:** todo real de CapEx de expansão precisa da receita incremental correspondente, do prazo de
ramp-up, e da margem esperada. Se o usuário não tem esses três, o projeto de expansão não entra no
cenário base — entra como cenário separado ou como upside declarado fora do valuation.

### Depreciação

- Vida útil por classe de ativo (CPC 27), não uma taxa média para tudo. Edificação, máquina,
  veículo e benfeitoria têm vidas muito diferentes, e a mistura distorce EBIT e NOPAT.
- **Convenção de meio-ano** no CapEx novo: ativo adquirido ao longo do ano deprecia meio ano. Sem
  isso, o primeiro ano de um investimento grande fica sobre-depreciado.
- Depreciação fiscal ≠ depreciação contábil. A diferença gera imposto diferido — ver
  `impostos-e-prejuizos-fiscais`.
- **Em regime estacionário, CapEx ≈ depreciação.** Se o valor terminal do modelo tem CapEx muito
  abaixo da depreciação, ele está liquidando a base de ativos na perpetuidade — o que gera fluxo
  alto e insustentável. É um dos testes da skill `valor-terminal`.
- Ativo substancialmente depreciado em operação que depende dele: não projetar a depreciação futura exclusivamente com base na despesa histórica, pois a redução da depreciação pode inflar artificialmente EBIT, NOPAT e ROIC. AVALIAR se os ativos precisarão ser substituídos para sustentar a capacidade operacional. SE houver necessidade econômica de reposição, utilizar uma das seguintes abordagens: (i) projetar a depreciação com base no valor bruto do imobilizado; ou (ii) estimar o custo de reposição dos ativos e ajustar simultaneamente o CapEx e a depreciação futura. VALIDAR que CapEx e depreciação sejam economicamente consistentes com a manutenção da capacidade operacional.

### O caso do imobilizado fora da empresa

Frequente em mid-market familiar: galpão no nome do sócio, frota em outra empresa do grupo. A DRE
mostra aluguel (ou não mostra nada) e o balanço não mostra o ativo. Consequências: capital investido
subestimado, ROIC inflado, e um CapEx futuro que o comprador terá de fazer e que não está no modelo.

Levante explicitamente e resolva com o usuário: o ativo entra na transação? Se não, o modelo precisa
do aluguel a valor de mercado em perpetuidade (ver `qualidade-de-resultados`, família pró-forma).

## O que entregar

1. Os três prazos históricos, ano a ano, com os denominadores usados declarados.
2. Ciclo financeiro e NCG histórica, com a leitura: é fonte ou uso de caixa, e é estrutural?
3. Os dias projetados, **cada um com a razão da mudança** ou a declaração de que segue a média.
4. O roll-forward de PP&E histórico e projetado.
5. CapEx segregado manutenção vs. expansão, e para cada projeto de expansão: investimento, receita
   incremental, ramp-up, margem.
6. Os red flags encontrados, com a leitura de cada um.

## Próximo passo

`projecao-e-cenarios`, onde esses cronogramas se amarram aos drivers de receita e à taxa de
reinvestimento.
