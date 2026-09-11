---
name: reorganizacao-contabil
description: Reorganizar demonstrações contábeis em NOPAT e capital investido operacional, separando o operacional do financeiro e do não operacional. Acionar ao receber balancete ou DRE do data room, ao montar a base histórica do modelo, ao decidir se uma conta é operacional, ou ao fechar a reconciliação de capital.
---

# Reorganização contábil — da contabilidade para a economia

## Papel desta skill

**Oráculo. Não escreve na planilha.** Direciona a reorganização, aponta o que falta, questiona
classificações e confere as reconciliações. Quem digita no Excel é o analista.

Fundamento teórico: skill `fundamentos-koller`, references `noplat_detalhado.md` e
`capital_investido.md`. Esta skill é a tradução operacional daquilo para mid-market fechado
brasileiro, onde a contabilidade recebida raramente está pronta.

## Por que esta etapa existe

A DRE e o balanço que a empresa entrega respondem a uma pergunta fiscal e societária. O valuation
responde a outra: *quanto capital está empregado na operação e quanto ela devolve sobre esse
capital*. As duas perguntas não usam as mesmas linhas.

Sem essa reorganização, ROIC não existe — e sem ROIC não há como separar crescimento que cria valor
de crescimento que destrói. É o que separa um valuation econômico de uma projeção de DRE com
múltiplo colado no fim.

## Nota de terminologia

Koller usa **NOPLAT** (net operating profit less adjusted taxes) sobre **EBITA**. O modelo da casa
usa **NOPAT** sobre EBIT. A diferença material é a amortização de intangíveis adquiridos: EBITA a
exclui, EBIT não. Em alvo mid-market fechado sem histórico de aquisições, os dois coincidem e a
distinção é acadêmica. **Passa a importar quando o alvo já fez aquisições e carrega intangível
identificado** (carteira de clientes, marca, tecnologia) — aí é obrigatório usar EBITA, ou o ROIC
sai deprimido por uma despesa que não consome capital novo.

Ao usar o modelo da casa, não renomeie a linha: registre em nota que "NOPAT" ali é EBITA menos
impostos operacionais ajustados quando houver intangível adquirido.

## O insumo mínimo

Antes de reorganizar, confirme que existe — e **pergunte se não foi informado, não deduza pelo nome
do arquivo**:

| Insumo | Por que é indispensável |
|---|---|
| **Balancete analítico** dos 3 últimos exercícios, em Excel | O sintético não permite classificar. Sem analítico, a separação operacional/não operacional é chute. |
| Balanço patrimonial e DRE dos mesmos exercícios | Fecham o outro lado da reconciliação. |
| Acumulado do exercício corrente | O ano-base do modelo. |
| Notas explicativas | Onde vivem os leases, as contingências e os parcelamentos. |
| Composição da dívida, contrato a contrato | Distingue dívida financeira de equivalente de dívida. |
| CapEx dos 3 anos, segregado expansão vs. manutenção | Ver skill `capital-de-giro-e-capex`. |

Se só houver PDF de balanço assinado e não Excel de balancete, **diga isso ao usuário como
limitação** antes de começar: a reorganização vai ficar no nível sintético e o ROIC terá margem de
erro que precisa ser declarada no deck.

## Passo 1 — Da DRE reportada ao NOPAT

Reconstrua de cima para baixo, e a cada linha pergunte *isto pertence à operação?*

```
Receita bruta
(−) Deduções (impostos sobre venda, devoluções, abatimentos)
= Receita líquida
(−) Custos operacionais
(−) Despesas operacionais (SG&A)
= EBITDA
(−) Depreciação e amortização de ativos operacionais
= EBIT   (ou EBITA, se houver intangível adquirido a excluir)
(−) Impostos operacionais ajustados
= NOPAT
```

Fora do NOPAT, sempre:

- **Resultado financeiro inteiro** — juros pagos e recebidos. O custo da dívida vive no WACC, não na
  operação. Deixar juros dentro contamina o ROIC com estrutura de capital.
- **Equivalência patrimonial** e resultado de participações — não operacional, entra no bridge de EV.
- **Outras receitas e despesas não operacionais** — venda de imobilizado, indenização, recuperação
  fiscal extraordinária.
- **Itens não recorrentes** — vão para a skill `qualidade-de-resultados`, que decide o add-back; aqui
  só se marca a linha.

### Impostos operacionais ajustados

O imposto que a operação pagaria se não tivesse dívida nem itens não operacionais:

```
Imposto operacional ajustado
  = imposto reportado (corrente + diferido)
  + escudo fiscal dos juros              (juros líquidos × alíquota marginal)
  − imposto sobre resultado não operacional
```

**Regra de neutralidade:** o NOPAT tem de ser indiferente à estrutura de capital. Se a empresa
trocasse dívida por equity amanhã sem mudar nada na operação, o NOPAT não poderia se mover. Use isso
como teste da sua própria conta.

Alíquota: 34% no lucro real (25% de IRPJ com adicional + 9% de CSLL). Ver skill
`impostos-e-prejuizos-fiscais` quando o alvo estiver no presumido, tiver prejuízo fiscal acumulado ou
benefício estadual — casos em que a alíquota efetiva não é 34% e usar 34% erra o NOPAT.

# Ponto de atenção

Sempre checar se o ativo imobilizado utilizado no cálculo do capital investido é coerente e não está muito depreciado ou antigo (ver skill 'capital-de-giro-e-capex'). Isso será pré-requisito para o cálculo de ROIC. Além de realizar a revisão se a classificação de capital investido e fundos investidos está economicamente coerente com o contexto da empresa.

## Passo 2 — Capital investido operacional (perspectiva de cima)

O capital que a operação consome:

```
CAPITAL DE GIRO OPERACIONAL
    Caixa operacional mínimo        ← só o necessário para girar; o resto é excesso de caixa
  + Contas a receber de clientes
  + Estoques
  + Adiantamentos a fornecedores
  + Impostos a recuperar (operacionais)
  + Despesas antecipadas
  − Fornecedores
  − Salários e encargos a pagar
  − Obrigações fiscais operacionais
  − Adiantamento de clientes
  − Provisões operacionais

+ ATIVO NÃO CIRCULANTE OPERACIONAL
    Imobilizado líquido
  + Intangíveis operacionais
  + Direito de uso de arrendamento (CPC 06 R2)
  + Adiantamentos de longo prazo

= CAPITAL INVESTIDO OPERACIONAL
```

**Caixa operacional mínimo.** O erro mais comum do mid-market: jogar o caixa inteiro no capital
investido, o que infla o denominador e afunda o ROIC. Empresa familiar frequentemente acumula caixa
como poupança do sócio, não como capital de giro. Estime o mínimo operacional por dias de custo
caixa (tipicamente 5 a 20 dias, conforme sazonalidade e prazo de recebimento) e trate o excedente
como **excesso de caixa** — que sai do capital investido e entra no bridge de EV para equity value.
Pergunte ao usuário qual critério ele quer adotar e registre-o; não escolha calado.

**Contingências.** Provisão para contingência trabalhista ou tributária não é passivo operacional de
giro: é equivalente de dívida. Sai daqui e entra nos fundos investidos.

## Passo 3 — Fundos investidos (perspectiva de baixo)

Quem financia aquele capital:

```
DÍVIDA LÍQUIDA
    Empréstimos e financiamentos (curto + longo prazo)
  + Parcelamentos tributários (REFIS, PERT, transação tributária)
  + Passivo de arrendamento (CPC 06 R2 / IFRS 16)
  + Provisão para contingências (provável, não a remota)
  + Mútuos com sócios e partes relacionadas
  − Excesso de caixa e aplicações financeiras

+ PATRIMÔNIO LÍQUIDO
    Capital social + reservas + lucros acumulados + AAP − dividendos a pagar

+ ITENS NÃO OPERACIONAIS
    Depósitos judiciais · IR/CSLL diferido · goodwill · IRPJ/CSLL a pagar ·
    imóveis não operacionais · participações em outras empresas

= FUNDOS INVESTIDOS
```

### Equivalentes de dívida — o que o mid-market brasileiro esconde

| Item | Onde aparece | Por que é dívida |
|---|---|---|
| Parcelamento tributário | Passivo fiscal de longo prazo | Obrigação contratada, com juros e cronograma. Quem compra a empresa herda o passivo. |
| Arrendamento (CPC 06 R2) | Direito de uso no ativo, passivo de arrendamento | Aluguel de longo prazo é dívida disfarçada. Ver nota abaixo. |
| Contingência provável | Provisão | Saída de caixa esperada, não financiada por equity. |
| Mútuo de sócio | Partes relacionadas | Quase sempre liquidado no fechamento. Confirme com o usuário como entra no CFDF. |
| Previdência a descoberto (CPC 33) | Nota explicativa | Raro em mid-market, mas verifique. |

**Nota de leases.** Se o alvo aplica CPC 06 R2, o direito de uso já está no ativo e o passivo de
arrendamento no passivo — capitalize os dois de forma consistente. Se o alvo é pequeno e **não**
aplica (aluguel direto na despesa), há duas opções: (a) manter o aluguel na despesa e não capitalizar
nada, ou (b) capitalizar por múltiplo do aluguel anual. **Escolha uma e mantenha em todos os anos e
em todos os comparáveis** — a incoerência entre alvo e comparável é o erro que passa desapercebido e
distorce o múltiplo. Registre a escolha em nota.

## Passo 4 — A reconciliação, que não é opcional

```
Capital investido operacional  −  Fundos investidos  =  0
```

O modelo da casa traz essa checagem explícita, com a convenção de sinal invertida em um dos lados.
**Ela precisa fechar em todos os anos históricos.** Não fechar significa uma de quatro coisas:

1. Uma conta foi classificada em duas perspectivas ao mesmo tempo, ou em nenhuma.
2. O balanço recebido não fecha — acontece mais do que se admite em mid-market. Confira
   Ativo = Passivo + PL antes de acusar a sua classificação.
3. Excesso de caixa foi subtraído do capital investido mas não somado aos fundos investidos.
4. Um equivalente de dívida ficou dentro do capital de giro operacional.

**Nunca prossiga para ROIC com a reconciliação aberta.** Um ROIC calculado sobre capital investido
que não reconcilia é um número sem significado, e ele vai atravessar o deck inteiro até ser defendido
na frente do comprador.

## O que entregar ao usuário

1. A DRE reorganizada até NOPAT, ano a ano, com cada exclusão nomeada.
2. O capital investido operacional pelas duas perspectivas, com a reconciliação fechada e visível.
3. **A lista de decisões de classificação** — cada conta ambígua, a escolha feita, o motivo. É este
   documento que sustenta a resposta na due diligence quando o comprador perguntar por que tal conta
   está onde está.
4. As limitações: o que não foi possível classificar por falta de analítico.

## Red flags para levantar aqui

- Balanço que não fecha, ou que fecha por conta de "outros" com saldo relevante.
- Caixa acima de 3 meses de custo caixa sem justificativa operacional.
- Contas a receber crescendo muito acima da receita — ver `capital-de-giro-e-capex`.
- Imobilizado quase todo depreciado numa operação que depende dele: o capital investido contábil
  subestima o capital econômico e o ROIC sai inflado. Sinalize — pode ser necessário discutir valor
  de reposição.
- Ativo de uso operacional registrado na pessoa física do sócio ou em outra empresa do grupo: o
  capital investido está incompleto e a despesa correspondente pode não estar na DRE.
- Empresa do grupo com transações intercompany não eliminadas.

## Próximo passo

Com a base reorganizada e reconciliada: `qualidade-de-resultados` para os add-backs de EBITDA, e
depois `diagnostico-de-roic` para ler o que essa base diz sobre criação de valor.
