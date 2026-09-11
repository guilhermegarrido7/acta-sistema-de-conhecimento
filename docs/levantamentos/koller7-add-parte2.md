# Koller 7ª ed. — Parte Dois (Cap 11–19 + Apêndices C, F, G, I)
## O que é ADITIVO ao plugin de valuation da ACTA

> Avaliação capítulo por capítulo. Referência de página = página do PDF (marcador `<<<PAGE N>>>`).
> Vereditos: `ADICIONAR-ALTA` / `ADICIONAR-MÉDIA` / `JÁ COBERTO` / `IRRELEVANTE-MIDMARKET`.
> Skills existentes: fundamentos-koller, reorganizacao-contabil, qualidade-de-resultados, diagnostico-de-roic,
> capital-de-giro-e-capex, impostos-e-prejuizos-fiscais, projecao-e-cenarios, custo-de-capital, valor-terminal,
> triangulacao-e-faixa, revisao-de-modelo, benchmark-bancos.

---

# Capítulo 11 — Reorganizing the Financial Statements (p315–360)

## 11.1 A identidade em três blocos e a dupla contabilização de "total funds invested"

**O que é.** Koller exige que TODA linha do balanço e da DRE seja classificada em exatamente um de três
blocos: (a) operacional, (b) não operacional, (c) fonte de financiamento. A mecânica algébrica que sustenta
o exercício:

```
Balanço contábil:            Ativo Total = Passivo Total + PL

Expandindo:                  OA + NOA = OL + D + DE + EE + E
  OA  = ativos operacionais (clientes, estoque, PP&E, caixa operacional)
  NOA = ativos NÃO operacionais (caixa excedente, títulos, coligadas, ativo de pensão superavitário, prej. fiscal)
  OL  = passivos operacionais (fornecedores, salários a pagar, tributos a pagar, receita diferida)
  D   = dívida onerosa (curto + longo prazo, inclui parcela circulante e leasing financeiro)
  DE  = equivalentes de dívida (pensão a descoberto, provisão de reestruturação, decomissionamento)
  EE  = equivalentes de patrimônio (tributos diferidos operacionais, provisões de income smoothing)
  E   = patrimônio líquido

CAPITAL INVESTIDO (método operacional):      IC = OA - OL
CAPITAL INVESTIDO (método de financiamento): IC = (D + DE + EE + E) - NOA

FUNDOS INVESTIDOS TOTAIS (visão investimento):  TFI = IC + NOA
FUNDOS INVESTIDOS TOTAIS (visão financiamento): TFI = D + DE + EE + E
```

Ponto crítico que Koller enfatiza: **quando existem DE e EE, capital investido DEIXA de ser igual a
dívida + patrimônio.** IC = OA − OL, sempre. Só o TFI reconcilia pelos dois lados. Muitos analistas erram
aqui porque memorizaram "IC = D + E".

Composição recomendada do capital investido, na ordem de agregação de Koller:
```
  Capital de giro operacional (ativo circ. operacional - passivo circ. operacional)
+ Ativo imobilizado líquido (PP&E net)
+ Outros ativos operacionais LP, líquidos de passivos operacionais LP
+ Arrendamentos capitalizados
= CAPITAL INVESTIDO (sem goodwill)
+ Goodwill e intangíveis adquiridos (ajustados - ver 11.5)
= CAPITAL INVESTIDO (com goodwill)
+ Ativos não operacionais
= FUNDOS INVESTIDOS TOTAIS
```

**Onde encaixa.** `reorganizacao-contabil`.
**Veredito.** `JÁ COBERTO` — a skill já tem DRE→NOPAT, capital investido operacional, fundos investidos,
equivalentes de dívida e reconciliação obrigatória. **Mas ver 11.2:** o alerta explícito
"IC ≠ D + E quando há DE/EE" merece virar linha de destaque na skill se ainda não estiver textual.
**Página.** p316–318.

## 11.2 As TRÊS reconciliações obrigatórias (não uma)

**O que é.** Koller impõe três checagens de amarração, não apenas a de capital investido. É o principal
mecanismo antierro do capítulo:

1. **Reconciliação de fundos investidos totais** — visão investimento (IC + NOA) = visão financiamento
   (D + DE + EE + E). Pega omissão de linha e classificação errada no balanço.
2. **Reconciliação NOPAT ↔ lucro líquido** — caminho bottom-up:
```
  Lucro líquido (atribuível a controladores + não controladores)
+ Aumento (- redução) nos passivos fiscais diferidos operacionais
= LUCRO LÍQUIDO AJUSTADO
+ Despesas não operacionais (despesa financeira, outras não operacionais)
+ Juros embutidos em arrendamentos operacionais
+ Parcela não operacional da despesa de pensão
- Benefício fiscal (tax shield) sobre as despesas não operacionais acima
+ Tributos não operacionais da tabela de reconciliação fiscal
= NOPAT
```
   Este resultado tem de ser IDÊNTICO ao NOPAT calculado top-down (receita − despesas operacionais
   − tributos operacionais em caixa).
3. **Reconciliação de fluxo de caixa disponível a investidores ↔ fluxo total de financiamento.** O FCL
   mais os fluxos não operacionais tem de igualar exatamente o que foi pago/recebido dos financiadores:
```
Geração:  FCL
        + Receita/despesa não operacional
        + Tributos não operacionais
        - Delta caixa excedente e títulos
        - Delta outros ativos não operacionais
        = FLUXO DE CAIXA DISPONÍVEL A INVESTIDORES

Distribuição: Despesa de juros (dívida tradicional + juros de arrendamento)
            + Redução (- aumento) de dívida
            + Redução (- aumento) de equivalentes de dívida
            + Dividendos (ordinárias + preferenciais; dividendo em AÇÕES é ignorado, sem efeito caixa)
            + Recompras (- emissões) de ações  [agregado de capital social, AAP, tesouraria, LR]
            + Resultado atribuível a não controladores / coligadas (fluxo de financiamento, como dividendo)
            = FLUXO DE CAIXA DISPONÍVEL A INVESTIDORES
```
   Koller: *"By modeling cash flow to and from investors, you will catch mistakes otherwise missed."*

Nota de método importante: para montar o FCL não basta DRE + balanço — **é obrigatória a Demonstração das
Mutações do Patrimônio Líquido (DMPL)**, porque só ela reconcilia DRE com balanço e traz a informação de
emissões/recompras/ORA necessária para fechar a terceira reconciliação.

**Onde encaixa.** `reorganizacao-contabil` (as três reconciliações) e `revisao-de-modelo` (como checklist
de auditoria do .xlsx).
**Veredito.** `ADICIONAR-ALTA` — a skill atual menciona "reconciliação obrigatória" (provavelmente a de
capital investido). As três, explicitadas linha a linha, com a exigência da DMPL, são upgrade material.
A terceira reconciliação (fluxo a investidores vs. fluxo de financiamento) é a que quase nenhum analista
mid-market faz e é justamente a que pega omissão de fluxo.
**Página.** p321, p343–344, p348–350.

## 11.3 Regra dos 2% da receita para separar caixa operacional de caixa excedente

**O que é.** Empresas não divulgam quanto caixa precisam para operar, e a distinção contábil
caixa/aplicações financeiras não ajuda. Koller usa evidência empírica: as empresas com os MENORES saldos
de caixa mantinham caixa logo abaixo de **2% da receita**. Regra prática:

```
Caixa operacional  = min( caixa reportado ; 2% x Receita )
Caixa excedente    = Caixa e aplicações reportados - Caixa operacional
```
Exemplo do livro (Costco 2019): caixa + títulos = US$ 9,5 bi sobre receita de US$ 152,7 bi → operacional
= 2% × 152,7 = US$ 3,1 bi; excedente = US$ 6,4 bi, tratado como ativo não operacional.

Ressalvas de Koller: 2% **não é regra universal**; a necessidade varia por setor e setores com maior
volatilidade de fluxo de caixa carregam mais caixa. Método melhor quando há dados: **procurar o clustering
mínimo de caixa/receita entre os pares do setor**.

Por que separar: caixa excedente rende quase nada; misturá-lo com operações **deprime artificialmente o
ROIC**. E caixa excedente se avalia por valor contábil, não por DCF ("You would never discount interest
income to value excess cash"). Segunda razão (nota 1): caixa excedente tem perfil risco-retorno muito
menor que o capital operacional, e misturar ativos de perfis diferentes distorce a percepção de performance.

**Onde encaixa.** `reorganizacao-contabil` e `capital-de-giro-e-capex`.
**Veredito.** `ADICIONAR-ALTA` — número duro, imediatamente aplicável, e resolve a discussão mais comum
em mid-market brasileiro (empresa familiar com caixa "gordo" ou, ao contrário, caixa dividido entre
pessoa física e jurídica). Vira diretamente o item de dívida líquida/CFDF no bridge. Ancorar o
benchmarking por par do setor como método preferencial ao 2%.
**Página.** p329, nota 5 p358.

## 11.4 Por que NOPAT parte de EBITA (e não de EBITDA nem de EBIT)

**O que é.** Argumento em duas pernas:
- **Não EBITDA:** quando a empresa compra um ativo físico, capitaliza e deprecia ao longo da vida útil.
  O ativo *se desgasta de fato*, então qualquer medida de lucro (e de retorno) tem de reconhecer essa
  perda de valor. A depreciação não casa perfeitamente com a perda periódica de valor, mas é proxy
  adequada. EBITDA ignora a decadência econômica → superestima lucro e retorno.
- **Não EBIT:** a amortização de intangíveis adquiridos é diferente. Intangíveis criados internamente
  (novas listas de clientes, marcas) são **despesados, não capitalizados**. Logo, quando o intangível
  adquirido perde valor e é reposto por investimento interno, esse reinvestimento **já foi despesado** e
  a empresa é penalizada duas vezes no mesmo período: uma pela amortização, outra pelo reinvestimento.
  Usar EBITA é consistente com as regras contábeis vigentes.

Corolário de consistência que Koller marca duas vezes: como a amortização de intangíveis adquiridos e o
impairment de goodwill **não** são deduzidos da receita para chegar ao NOPAT, eles **não** devem ser
adicionados de volta no fluxo de caixa bruto. Só se adiciona de volta a amortização efetivamente deduzida
(ex.: software capitalizado, contratos de clientes adquiridos amortizados).

```
EBITA = Receita - CPV - Despesas de vendas - G&A - Depreciação
      (antes de juros, tributos e amortização de intangíveis ADQUIRIDOS)
```

**Onde encaixa.** `fundamentos-koller` (já tem EV/EBITA) e `reorganizacao-contabil`.
**Veredito.** `ADICIONAR-MÉDIA` — o *porquê* articulado em duas pernas (desgaste real vs. dupla
penalização) é munição de argumentação de mesa. Mid-market brasileiro raramente tem intangível adquirido
material, então a perna "não EBIT" é menos frequente; a perna "não EBITDA" é diretamente aplicável e
politicamente sensível (o vendedor quer EBITDA, o comprador quer EBITA/capex).
**Página.** p337–338.

## 11.5 Os dois ajustes obrigatórios em goodwill e intangíveis adquiridos

**O que é.** Para o ROIC *com* goodwill medir corretamente a capacidade de criar valor acima do prêmio
pago em aquisições, dois ajustes:

1. **Subtrair os passivos fiscais diferidos ligados à amortização de intangíveis adquiridos.** Mecânica:
   quando a amortização não é dedutível fiscalmente, o contador cria um passivo fiscal diferido no momento
   da aquisição, revertido ao longo do período de amortização (porque o tributo reportado será menor que o
   efetivo). Como contrapartida, os intangíveis adquiridos são **artificialmente inflados** no mesmo valor,
   sem desembolso de caixa. Subtrair o diferido elimina a distorção. Para empresas com intangível adquirido
   relevante (ex.: Coca-Cola) o ajuste é substancial.
2. **Somar de volta amortização acumulada e impairment acumulado.** Goodwill e intangíveis adquiridos não
   se desgastam nem são repostos. Logo, ajuste o goodwill reportado **para cima**, recuperando impairments
   históricos e amortização acumulada. Caso do livro: FedEx baixou ~US$ 900 MM de goodwill/intangíveis ao
   converter a marca Kinko's em FedEx Office. Sem o add-back, o ROIC daria salto artificial no ano
   seguinte à baixa. *"The money spent on an acquisition is real and needs to be accounted for, even when
   the investment loses value."*

Nota: goodwill é testado por impairment e não amortizado, então o ajuste (1) vale só para intangíveis
adquiridos.

**Onde encaixa.** `diagnostico-de-roic` (que já tem ROIC com/sem goodwill) e `reorganizacao-contabil`.
**Veredito.** `ADICIONAR-MÉDIA` — a mecânica exata dos dois ajustes provavelmente não está na skill, que
tem o conceito. Relevante quando o alvo mid-market é consolidador que já fez aquisições (comum em saúde,
educação, serviços B2B). Irrelevante para alvo orgânico puro.
**Página.** p327–328.

## 11.6 Dado empírico de calibração: ROIC com vs. sem goodwill em CPG

**O que é.** Estudo dos colegas de Koller sobre grandes empresas de bens de consumo embalados, 1963–2009:
- Anos 1960 a meados dos 1980: ROIC mediano *sem* goodwill consistentemente na casa dos 15%; ROIC *com*
  goodwill apenas ligeiramente inferior.
- A partir de meados dos 1980: usaram o poder das marcas e levaram o ROIC *sem* goodwill a mediana de
  quase **35%**. Simultaneamente aceleraram aquisições. ROIC *com* goodwill permaneceu na faixa de 15–19%.
- Em 2009 o gap entre os dois ROICs era de **17 pontos percentuais**.

Leitura: o valor criado pela operação foi integralmente transferido aos vendedores via prêmio de aquisição.

**Onde encaixa.** `diagnostico-de-roic`; e é argumento de venda em `triangulacao-e-faixa`.
**Veredito.** `ADICIONAR-MÉDIA` — não é técnica, é dado retórico poderoso: em sell-side, mostrar que
compradores estratégicos historicamente entregaram todo o excedente ao vendedor no prêmio é argumento
direto de mesa. Barato de guardar.
**Página.** p327.

## 11.7 Passivos operacionais NÃO são dívida — o argumento de consistência

**O que é.** Há quem defenda tratar fornecedores como financiamento. Koller rejeita por consistência
numerador/denominador: NOPAT é o resultado disponível a credores e acionistas, então no ROIC divide-se
NOPAT por dívida + patrimônio. Embora o fornecedor cobre juro implícito pelo direito de pagar em 30 dias,
**essa cobrança é parte indistinguível do preço e portanto do CPV**. Como o CPV é deduzido da receita para
chegar ao NOPAT, os passivos operacionais têm de ser deduzidos dos ativos operacionais para chegar ao
capital investido. A alternativa teórica (tratar fornecedores como dívida e ajustar o NOPAT pelo juro
implícito) é correta mas inviável.

Guia prático de Koller para classificar operacional vs. não operacional em contas obscuras:
**"operating assets typically scale with revenues"** (ativos operacionais tipicamente escalam com a
receita). Exemplo de julgamento: caixa restrito é tratado como *operacional* quando precisa ficar
segregado para garantir terceiros (caso de aéreas em dificuldade que aceitam cartão com seguro de
pagamento).

Regra para "outros ativos/passivos de longo prazo": se são **pequenos** e não detalhados pela empresa,
assuma operacionais e some líquido ao capital investido. Se são **grandes**, é obrigatório desagregar
conta por conta antes de calcular. Contas grandes de "outros ativos LP" frequentemente esconde itens não
operacionais: ativo fiscal diferido, ativo de pensão pré-pago, coligadas não consolidadas. E "a maioria
dos passivos de longo prazo NÃO são passivos operacionais, e sim equivalentes de dívida e de patrimônio".

E a válvula de escape geral: *"perfect classification is not required. You need only to assure that each
account is included as part of free cash flow or valued separately."*

**Onde encaixa.** `reorganizacao-contabil`.
**Veredito.** `ADICIONAR-MÉDIA` — o teste "escala com a receita?" é heurística operacional excelente para
as contas de "outros ativos/outros passivos" que sempre aparecem em balanço de empresa fechada brasileira
sem notas explicativas decentes. Combinado com a regra pequeno-vs-grande e a válvula de escape ("não
precisa ser perfeito, precisa ser exaustivo e consistente"), destrava analista.
**Página.** p325, p326–327, p335.

## 11.8 Como estimar capex líquido corretamente (e o erro do PP&E bruto)

**O que é.**
```
Capex líquido (de baixas) = Depreciação + Delta PP&E LÍQUIDO
```
**Nunca** estimar capex pela variação do PP&E **bruto**: quando a empresa dá baixa (retira) ativos, o
PP&E bruto cai, e a variação do bruto **subestima** o capex efetivo.

Se possível, usar o capex reportado na DFC — mas **só após reconciliar** o capex reportado com
(Δ PP&E líquido + depreciação). As duas medidas divergem por: (a) translação de moeda, (b) aquisições,
(c) impairments. Aquisições devem ser analisadas separadamente; impairments tratados como despesa não
operacional não caixa na DRE.

Mesma mecânica para intangíveis em amortização: investimento = amortização + Δ intangível líquido. Para
intangíveis adquiridos onde a amortização acumulada foi somada de volta, o investimento é simplesmente a
Δ do goodwill/intangível líquido.

Roll-forward completo de PP&E que Koller monta (Exhibit 11.14): saldo inicial + capex − alienações
− depreciação ± translação de moeda ± aquisições/impairment = saldo final. Fontes: capex e alienações na
DFC; depreciação = D&A da DFC menos amortização de intangíveis adquiridos (achada na nota de goodwill e
intangíveis); demais linhas no MD&A ou estimadas.

**Onde encaixa.** `capital-de-giro-e-capex` (que já tem roll-forward de PP&E).
**Veredito.** `ADICIONAR-MÉDIA` — o roll-forward já está na skill; o aditivo é (a) a fórmula
`capex = D + Δ PP&E líquido` como *cross-check obrigatório* contra o capex da DFC, e (b) o alerta
explícito contra usar PP&E bruto. Em empresa fechada brasileira a DFC muitas vezes é ruim ou inexistente,
então derivar capex do balanço é o caminho normal — a fórmula é a ferramenta certa.
**Página.** p346–348, nota 10 p359.

## 11.9 Os cinco componentes do investimento bruto e o FCL

**O que é.**
```
FCL = NOPAT + Despesas operacionais não caixa - Investimento em capital investido
Equivalente:  FCL = Fluxo de caixa bruto - Investimento bruto

Fluxo de caixa BRUTO = NOPAT
                     + Depreciação, depleção e amortização de ativos CAPITALIZADOS
                     (NÃO somar de volta: amortização de intangíveis ADQUIRIDOS, impairment de goodwill,
                      remuneração baseada em ações)

Investimento BRUTO = Delta capital de giro operacional
                   + Capex líquido de alienações
                   + Delta arrendamentos operacionais capitalizados
                   + Investimento em goodwill e intangíveis adquiridos
                   + Delta outros ativos operacionais LP, líquidos de passivos LP
```

**A regra da remuneração baseada em ações (share-based comp):** Koller é explícito — **NÃO** somar de
volta ao NOPAT para chegar ao fluxo de caixa bruto. Justificativa: os empregados passaram a ter um
*novo direito* sobre o fluxo de caixa, e esse direito tem de ser incorporado à avaliação, seja dentro do
fluxo, seja como cálculo separado. Não se pode simplesmente ignorar.

**Ajuste de translação de moeda:** se não for possível eliminar o efeito câmbio linha a linha, ajuste o
FCL agregado pela conta de *ajuste acumulado de conversão* dentro de outros resultados abrangentes
(ORA/OCI). Lógica: se o estoque sobe no balanço por câmbio e não por investimento, a empresa aumenta a
conta de conversão no PL para fechar o balanço; somar o aumento dessa conta de volta ao FCL desfaz o fluxo
de caixa negativo espúrio. Ressalva: a conta agrega todos os ativos e passivos estrangeiros, não só os
operacionais.

**Onde encaixa.** `reorganizacao-contabil`, `capital-de-giro-e-capex`.
**Veredito.** A estrutura do FCL: `JÁ COBERTO`. A regra do share-based comp: `ADICIONAR-MÉDIA` — cresce
em relevância no mid-market brasileiro (stock option / phantom shares em tech e serviços; alvo com plano
de ILP para executivos). O ajuste de translação de moeda: `IRRELEVANTE-MIDMARKET` para o alvo típico
100% Brasil, mas guardar como nota de exceção para alvo com subsidiária no exterior (Paraguai, EUA).
**Página.** p344–348.

## 11.10 As QUATRO famílias de provisões e o tratamento de cada uma

**O que é.** Provisões são despesas não caixa que refletem custos futuros ou perdas esperadas. Registram-se
reduzindo o resultado corrente e criando reserva no passivo (ou deduzindo do ativo relevante). Koller
classifica em quatro tipos, com tratamento distinto:

| Tipo | Tratamento na DRE | Tratamento no balanço |
|---|---|---|
| **Provisão operacional recorrente** (ex.: garantia de produto) | Deduz da receita para chegar ao NOPAT | Reserva deduzida dos ativos operacionais → entra no capital investido |
| **Provisão operacional de longo prazo** (ex.: descomissionamento de planta) | Parcela operacional deduz da receita; **parcela de juros é não operacional** | Reserva tratada como **equivalente de dívida** |
| **Provisão não operacional** (ex.: reestruturação/rescisões one-time, se não recorrente) | Despesa não operacional | Reserva tratada como **equivalente de dívida** |
| **Provisão de income smoothing** (transferir resultado entre períodos) | Despesa não operacional | Reserva tratada como **equivalente de patrimônio** |

Nota-chave: provisões de income smoothing são **não caixa e por isso não afetam valor** — a classificação
como equivalente de patrimônio (que não é deduzido do EV) reflete exatamente isso.

**Onde encaixa.** `qualidade-de-resultados` (que já tem 4 famílias de normalização de EBITDA — mas de
EBITDA, não de provisões) e `reorganizacao-contabil`.
**Veredito.** `ADICIONAR-ALTA` — é taxonomia diferente e complementar às 4 famílias de normalização de
EBITDA que a skill já tem. Diretamente aplicável ao mid-market brasileiro, onde a **provisão para
contingências trabalhistas/tributárias** é praticamente universal e onde a classificação (equivalente de
dívida vs. capital investido vs. equivalente de patrimônio) muda o CFDF e portanto o preço. A distinção
"parcela de juros da provisão de LP é não operacional" resolve o AVP (ajuste a valor presente) de
contingências do CPC 25.
**Página.** p351.

## 11.11 Arrendamentos: IFRS 16 / CPC 06 (R2) — divergência GAAP vs. IFRS na DRE

**O que é.** A partir de 2019 GAAP e IFRS exigem capitalizar quase todos os arrendamentos. O VP dos
pagamentos vai ao balanço em ambos. **A diferença está na DRE:**
- **IFRS (= CPC 06 R2, Brasil):** aloca o pagamento entre depreciação e despesa de juros. **Nenhum ajuste
  necessário.**
- **GAAP:** a despesa integral do arrendamento, **incluindo o juro embutido**, é jogada em despesas
  operacionais (tipo CPV). É preciso **reclassificar o juro embutido como despesa financeira.**

Como capitalizar exercícios históricos (pré-adoção), já que não são reapresentados:
```
1. Buscar na nota de arrendamentos os compromissos futuros de aluguel.
2. Descontar cada compromisso futuro por uma taxa de dívida de BAIXO risco.
   Koller: usar taxa AA - pela facilidade de retomada do bem no arrendamento operacional.
3. Empresas divulgam só 5 anos de pagamentos e agregam o resto num único número:
   usar uma ANUIDADE para valorar os pagamentos além do primeiro ano do bloco agregado.
4. Juro embutido no EBITA do ano t = Arrendamentos capitalizados (t-1) x taxa de dívida garantida (AA)
5. Ajustar tributos operacionais para eliminar o tax shield do juro implícito.
6. NOPAT ajustado = EBITA ajustado - tributos operacionais ajustados
```

**Efeito assimétrico no ROIC.** Capitalizar arrendamento aumenta o NOPAT **e** o capital investido, mas
não na mesma proporção — no caso Costco o ROIC **cai**. Razão: arrendamento operacional é uma forma de
dívida; para empresas que ganham retorno acima do custo da dívida, a alavancagem **infla artificialmente
o retorno**. Logo, não capitalizar superestima o ROIC de empresa asset-light alugada.

**Ponto de neutralidade:** capitalizar ou não **não afeta o valor intrínseco**, desde que incorporado
consistentemente em (a) fluxo de caixa livre, (b) custo de capital, (c) equivalentes de dívida. Afeta
apenas a qualidade do *benchmarking* de ROIC.

**Onde encaixa.** `reorganizacao-contabil` (que já cita CPC 06 R2 / IFRS 16 via `fundamentos-koller`) e
`diagnostico-de-roic`.
**Veredito.** `ADICIONAR-ALTA` — três itens são aditivos e diretamente aplicáveis: (a) o fato de que sob
IFRS/CPC **nenhum ajuste de DRE é necessário** (poupa trabalho e evita ajuste em duplicidade — erro comum),
(b) a receita completa de capitalização histórica com taxa AA e anuidade para o bloco agregado, e (c) o
argumento do **efeito assimétrico no ROIC** com o alerta de que a alavancagem infla retorno. O item (c) é
munição de mesa em qualquer alvo de varejo, restaurante, academia, clínica ou logística — todos
asset-light-alugados, muito comuns no mandato mid-market. Atenção: no Brasil, empresa fechada de porte
médio muitas vezes segue CPC PME e **não** capitaliza — o que exige exatamente o procedimento 1–6.
**Página.** p351–353, notas 12–13 p359–360.

## 11.12 Tributos operacionais em caixa — processo de três passos

**O que é.** Insumo obrigatório: a **tabela de reconciliação fiscal** das notas explicativas (no Brasil, a
nota de "Conciliação da despesa de imposto de renda e contribuição social" — alíquota efetiva vs. nominal).
Koller: *"the process for adjusting taxes is the most complicated part of reorganizing the financial
statements."*

```
PASSO 1 - Tributos estatutários sobre o EBITA
  Determinar a alíquota estatutária na tabela de reconciliação (Costco: 24,6% = 21,0% federal
  + 3,6% estadual; no Brasil: 34% = 15% IRPJ + 10% adicional + 9% CSLL).
  Tributos estatutários = alíquota estatutária x EBITA ajustado

PASSO 2 - Outros tributos operacionais (ou créditos)
  Varrer a tabela de reconciliação buscando itens fiscais RECORRENTES E OPERACIONAIS além do estatutário.
  O mais comum: diferença entre alíquota doméstica e estrangeira.
  Somar as taxas consideradas operacionais e - se a tabela estiver em PERCENTUAL - multiplicar
  o somatório por LAIR (EBT), NÃO por EBITA.
  [Razão: multiplicar por LAIR converte os percentuais da tabela em ajuste monetário. Koller PREFERE
   ajustes em moeda a ajustes em percentual, porque um LAIR artificialmente baixo distorce
   violentamente os percentuais - nota 8.]
  Tributos operacionais = Tributos estatutários sobre EBITA + Outros tributos operacionais

PASSO 3 - Converter regime de competência em CAIXA
  Tributos operacionais em CAIXA = Tributos operacionais
                                 - Delta passivo fiscal diferido OPERACIONAL (líquido de ativo)
  Equivalente: + Delta ativo fiscal diferido operacional líquido
```

**Restrição prática que Koller admite duas vezes:** as notas informam quanto foi diferido, mas **não
separam diferido operacional de não operacional**, tornando a divulgação inutilizável. Nem toda empresa
divulga o suficiente. *"When this information is unavailable, we recommend using operating taxes without
a cash adjustment."* — ou seja, **é legítimo parar no Passo 2**.

**Filtro de mudança orgânica:** contas de diferido sobem e descem por motivos além do diferimento —
aquisições, alienações, reavaliação de alíquota. **Só a variação ORGÂNICA entra nos tributos em caixa.**
Para estimá-la: calcular qual seria a variação se as alíquotas tivessem permanecido inalteradas. (Caso
americano: revaluação de 2018 pela Tax Cuts and Jobs Act.)

**Reconciliação de tributos reportados** (fecha o Passo 3):
```
Tributos operacionais
+ Tributos sobre contas não operacionais
    = alíquota MARGINAL x soma das contas não operacionais da reconciliação NOPAT<->LL
      (despesa financeira, juro de arrendamento, receita financeira, outras receitas)
+ Outros tributos não operacionais
    = itens não operacionais garimpados na tabela de reconciliação fiscal
      (auditorias one-time, write-offs, mudança de alíquota)
= TRIBUTOS REPORTADOS na DRE
```

Nota de forecast (nota 9): quando o percentual de tributo diferido é volátil, Koller usa **média de cinco
anos** para estimar a fração de tributos operacionais que será diferida.

**Onde encaixa.** `impostos-e-prejuizos-fiscais` (que já tem lucro real/presumido, corrente vs. diferido,
roll-forward de prejuízo fiscal).
**Veredito.** `ADICIONAR-ALTA` — o processo de 3 passos ancorado na **tabela de reconciliação fiscal** é
aditivo e é exatamente o que falta no mid-market brasileiro: a nota de conciliação de alíquota efetiva
existe em qualquer balanço auditado brasileiro e é subutilizada. Quatro itens de altíssimo valor prático:
(a) multiplicar o percentual por **LAIR e não por EBITA**; (b) a preferência por ajuste em moeda em vez de
percentual quando o LAIR é pequeno — situação corriqueira em alvo mid-market com resultado apertado;
(c) a permissão explícita de **parar no Passo 2** quando não há divulgação suficiente, o que é a regra e
não a exceção no Brasil; (d) o **filtro de mudança orgânica** no diferido, que no Brasil se aplica a
reavaliação de ativo fiscal diferido por mudança de expectativa de realização e a incorporações/cisões
(frequentíssimas em reorganização pré-venda). Mais a média de 5 anos para a fração diferida no forecast.
**Página.** p339–343, nota 8 p358, nota 9 p359.

## 11.13 Prejuízos fiscais (NOL) fora do capital investido

**O que é.** Regra: **não** incluir prejuízos fiscais acumulados no capital investido, a menos que sejam
pequenos e cresçam consistentemente com a receita. Dependendo do tipo de ativo fiscal diferido, ele é
avaliado (a) separadamente, ou (b) como parte dos tributos operacionais em caixa. Especificamente
(nota 7): **ativos fiscais diferidos originados de prejuízos passados são ativo NÃO operacional e
avaliados separadamente**; passivos fiscais diferidos ligados à amortização de intangíveis adquiridos são
**liquidados contra os intangíveis adquiridos**. Nenhum dos dois é equivalente de patrimônio.

No balanço reorganizado do Costco, prejuízo fiscal (foreign tax credit carryforward) aparece como um dos
dois únicos ativos não operacionais, ao lado do caixa excedente.

**Onde encaixa.** `impostos-e-prejuizos-fiscais` e `reorganizacao-contabil`.
**Veredito.** `ADICIONAR-ALTA` — a skill já tem roll-forward de prejuízo fiscal, mas a regra de
**posicionamento** (ativo não operacional avaliado separadamente, fora do capital investido, e portanto
somado no bridge EV→equity) é o que importa para preço em M&A. É item recorrente de negociação em
mid-market brasileiro: alvo com prejuízo fiscal acumulado relevante, com o limite de compensação de 30%
do lucro real e o risco de perda do saldo em incorporação (art. 33, DL 2.341/87 — não há sucessão de
prejuízo fiscal). A regra de Koller diz onde ele entra no modelo; a especificidade brasileira tem de ser
adicionada por cima.
**Página.** p330–331, nota 7 p359.

## 11.14 Coligadas não consolidadas e subsidiárias financeiras — por que fora do IC

**O que é.**
- **Coligadas não consolidadas / equity investments:** quando a empresa detém participação minoritária,
  registra o investimento em UMA linha do ativo e não registra os ativos individuais da investida; na DRE
  registra só o **resultado de equivalência**, não a receita nem os custos da investida. Como só o
  resultado — e não a receita — entra, incluir coligadas nas operações **distorce margem e giro do
  capital**. Recomendação: separar do capital investido e analisar/avaliar em separado.
- **Subsidiárias financeiras** (ex.: financeira que financia a compra do cliente): cobram juros, se
  parecem com banco. Economia bancária é radicalmente diferente da industrial/de serviços. Separar as
  linhas da financeira das linhas da operação e avaliar o retorno sobre capital de cada uma
  separadamente, senão as distorções tornam a comparação com concorrentes impossível. (Detalhamento no
  Cap 19.)

**Onde encaixa.** `reorganizacao-contabil`; a mecânica de separação remete a `triangulacao-e-faixa` e ao
Cap 19 (soma das partes).
**Veredito.** `ADICIONAR-ALTA` — o argumento "só o resultado entra, a receita não, logo margem e giro
ficam distorcidos" é a justificativa precisa e é armadilha frequentíssima em mid-market brasileiro:
grupo familiar com participação em coligada, SCP, consórcio, ou holding com participações minoritárias em
outras operações. E a regra da subsidiária financeira aplica-se a alvos com **crediário/carteira própria**
(varejo de móveis, materiais de construção, revenda de veículos, agro com barter) — modelo comum no
Brasil e que rotineiramente é analisado errado como se fosse operação única.
**Página.** p329–330.

## 11.15 P&D e investimentos capital-light: capitalizar ou não

**O que é.** Contadores despesam P&D, publicidade e outros custos integralmente no período, mesmo quando
os benefícios econômicos continuam além dele. Isso pode **subestimar dramaticamente o capital investido e
superestimar o retorno sobre capital**. Se optar por capitalizar:
- **Não** deduzir a despesa de P&D reportada da receita para calcular o lucro operacional.
- Deduzir a **amortização associada a investimentos passados em P&D**, por um cronograma razoável.
- Ajustar o patrimônio correspondentemente para fechar a equação do capital investido.
- Razão pela qual isso importa: como a amortização se baseia em investimentos *passados* (e não em
  desembolsos correntes), a abordagem **impede que cortes em P&D produzam melhora de curto prazo no
  ROIC** — que é justamente o jogo de gestão que se quer flagrar.

**Neutralidade de valor:** capitalizar ou não **não afeta o valor calculado**; afeta apenas o *timing* do
ROIC e do lucro econômico.

**Software capitalizado** (regra separada, p326): tratar como PP&E — amortização como se fosse
depreciação, investimento como se fosse capex. **Só intangíveis gerados internamente**, não os adquiridos.
Alerta prático: a DFC da IBM separa investimento em software de investimento em PP&E; a da UPS combina os
dois dentro de capex — nesse caso, atribuir todo o capex reportado a PP&E **superestima o investimento
real** em imobilizado.

**Onde encaixa.** `diagnostico-de-roic`, `capital-de-giro-e-capex`.
**Veredito.** `ADICIONAR-MÉDIA` — a neutralidade de valor (só muda o timing do ROIC) é importante para o
analista não perder tempo, e o argumento de "corte de P&D não deve melhorar ROIC" é bom em due diligence.
Aplicável a alvos de software/SaaS e a alvos com marketing pesado de aquisição de cliente (CAC
capitalizável), que aparecem no mid-market brasileiro. Menos relevante para indústria e distribuição
tradicional.
**Página.** p326, p354–355, nota 16 p360.

## 11.16 Sale-leaseback com ganho diferido — e o princípio geral de materialidade

**O que é.** Caso FedEx 2013: vendeu aeronaves e as arrendou de volta. Se surge ganho na venda, a empresa
**não pode reconhecer o ganho como resultado**; em vez disso reduz a despesa anual de aluguel ao longo da
vida do contrato. Como o caixa aumenta mas os lucros acumulados não, reconhece-se um **passivo de ganhos
diferidos**.

Como classificar? Koller: *"From a valuation perspective, it doesn't matter how to classify the item, as
long as it is treated consistently."* Mas afeta a percepção de ROIC e de criação de valor. As regras
contábeis evitam o pico de resultado de um ano causado por uma transação financeira, mas Koller julga que
**a distorção para baixo da despesa futura de aluguel é pior**, porque essa despesa reduzida é não caixa e
pode distorcer a percepção do custo de novos arrendamentos. **Recomendação: desfazer a transação
integralmente e reconhecer a conta como equivalente de patrimônio.**

Regra de encerramento do capítulo (importante em si): *"Not every advanced issue will lead to material
differences in ROIC, growth, and free cash flow. Before collecting extra data and estimating required
unknowns, decide whether the adjustment will further your understanding of a company and its industry. An
unnecessarily complex model can sometimes obscure the underlying economics that would be obvious in a
simple model. Remember, the goal of financial analysis is to provide a strong context for good financial
decision making and robust forecasting, not to create an overly engineered model that deftly handles
unimportant adjustments."*

**Onde encaixa.** `reorganizacao-contabil` (caso); `revisao-de-modelo` (o princípio de materialidade).
**Veredito.** O caso sale-leaseback: `ADICIONAR-MÉDIA` — sale-leaseback de imóvel é comum em pré-venda de
mid-market brasileiro (família separa o imóvel da operação numa holding patrimonial antes de vender), e a
distorção da despesa futura de aluguel é exatamente o problema que gera briga de EBITDA normalizado.
O princípio de materialidade: `ADICIONAR-ALTA` — deve virar regra de abertura da `revisao-de-modelo` e da
`reorganizacao-contabil`: o teste é "esse ajuste muda materialmente ROIC, crescimento ou FCL?"; se não,
não faça. Combate a hipertrofia de modelo, vício do analista júnior.
**Página.** p355–356.

## 11.17 Exercícios do capítulo como bateria de teste conceitual (Review Questions)

**O que é.** Koller monta três empresas (A, B, C) com a mesma operação e pede ROA, ROE e ROIC das três,
mostrando que: (a) o ROA de A difere do de B porque B tem investimentos em coligadas — empresas com
equity investments tendem a ter ROA **menor** (o ativo entra, a receita não); (b) o ROE de A difere do de
C **puramente por alavancagem**, não por performance operacional; (c) portanto nem ROA nem ROE refletem
performance operacional, e só o ROIC faz. Depois o caso HealthCo (empresa de saúde de US$ 600 MM) pede
NOPAT, capital investido médio, ROIC de dois anos, comparação com WACC de 10% e o FCL dos dois anos, e
por fim pergunta o que aconteceria com o ROIC se o caixa excedente fosse incluído.

**Onde encaixa.** `diagnostico-de-roic`; `revisao-de-modelo`.
**Veredito.** `ADICIONAR-MÉDIA` — o par de argumentos "ROA cai por causa de coligada / ROE muda só por
alavancagem" é um roteiro pronto para desqualificar as métricas que o vendedor familiar e o contador do
alvo costumam apresentar (ROE, "rentabilidade sobre o patrimônio"). Serve como script de conversa, não
como técnica nova. Note também o uso de **capital investido MÉDIO** (média do saldo inicial e final) como
denominador padrão de ROIC — detalhe que a skill `diagnostico-de-roic` já cobre ("ROIC médio").
**Página.** p356–358.
---

# Capítulo 12 — Analyzing Performance (p361–389)

> Este capítulo é a espinha dorsal da skill `diagnostico-de-roic`. Koller organiza a análise histórica em
> três blocos obrigatórios e nesta ordem: **(1) ROIC e sua decomposição, (2) crescimento de receita e sua
> decomposição, (3) saúde de crédito e estrutura de capital.** O terceiro bloco é hoje o mais fraco do
> plugin — não há skill dedicada a crédito/liquidez.

## 12.1 Denominador do ROIC: capital investido MÉDIO, e trimestral se sazonal

**O que é.** O lucro é medido ao longo de um ano inteiro; o capital é medido num único instante. Logo:
```
ROIC = NOPAT / Capital investido MÉDIO
Capital investido médio = (CI inicial + CI final) / 2

Se o negócio é ALTAMENTE SAZONAL, de modo que o capital muda substancialmente
no fechamento do exercício -> usar MÉDIAS TRIMESTRAIS.
```
Mesma regra vale para os índices operacionais (ex.: dias de estoque) em negócio sazonal: calcular com
**dados trimestrais**. Koller: *"the differences can be quite substantial."*

**Onde encaixa.** `diagnostico-de-roic` (já tem "ROIC médio"), `capital-de-giro-e-capex`.
**Veredito.** `ADICIONAR-MÉDIA` — a média simples já está coberta; o aditivo é o **gatilho de
sazonalidade → médias trimestrais**. Altamente relevante no Brasil: agro (safra/entressafra), material de
construção, brinquedos/varejo (Natal), turismo, educação (matrícula), confecção. Empresa fechada
brasileira frequentemente escolhe a data de balanço no vale do ciclo, o que **infla ROIC e deprime a NCG
aparente**. É uma armadilha de diligência com efeito direto no capital de giro-alvo do contrato.
**Página.** p362, p368.

## 12.2 Por que ROIC e não ROE nem ROA — o argumento completo

**O que é.**
- **ROE** mistura performance operacional com estrutura de capital, tornando a análise de pares e a
  análise de tendência menos informativas.
- **ROA**, *mesmo calculado antes de juros*, é medida inadequada porque (a) **inclui ativos não
  operacionais** e (b) **ignora o benefício de fornecedores e demais passivos operacionais**, que juntos
  reduzem o capital exigido dos investidores.

Relação formal ROE ↔ ROIC (é a mesma fórmula usada no bloco de alavancagem, p382):
```
ROE = ROIC + (ROIC - kd_após_impostos) x (D / E)     [D/E em valores CONTÁBEIS]
```
Leitura de Koller: uma empresa com ROIC de 10% e custo de dívida após impostos de 5% pode elevar o ROE
(a) melhorando o ROIC via operação, ou (b) elevando o D/E trocando patrimônio por dívida. Ambos produzem a
**mesma** variação de ROE, mas o caminho (b) torna o ROE **mais sensível a variações do ROIC** — ou seja,
eleva o ROE apenas aumentando o risco do acionista.

**Onde encaixa.** `diagnostico-de-roic`; e como script de conversa em `benchmark-bancos`.
**Veredito.** `ADICIONAR-ALTA` — a fórmula `ROE = ROIC + (ROIC − kd)×D/E` é aditiva e é a ferramenta mais
eficaz para desmontar o argumento do vendedor familiar brasileiro que exibe "rentabilidade sobre o
patrimônio de 40%" quando o patrimônio contábil é pequeno e a alavancagem é alta. Permite decompor
numericamente quanto do ROE é operação e quanto é alavancagem — conversa obrigatória na preparação do
vendedor. As duas críticas específicas ao ROA (inclui não operacional; ignora fornecedores) também são
aditivas e curtas.
**Página.** p362, p382, p356–358 (exercícios do Cap 11).

## 12.3 ROIC com e sem goodwill: para que serve cada um, e as duas armadilhas

**O que é.** As duas métricas respondem perguntas diferentes:

| | ROIC **com** goodwill | ROIC **sem** goodwill |
|---|---|---|
| Mede | Se a empresa gerou retorno adequado ao acionista **considerando o preço pago nas aquisições** | A performance operacional **subjacente** do negócio |
| Uso | Julgar histórico de M&A / alocação de capital | Comparar com pares, analisar tendência, **projetar fluxo de caixa e definir estratégia** |
| Afetado por prêmio de aquisição | Sim | Não |

Regras derivadas que Koller enuncia:
- ROIC **sem** goodwill é a base mais relevante para **projetar fluxo de caixa**, porque "uma empresa não
  precisa gastar mais em aquisições para crescer organicamente".
- **Empresas com ROIC alto sem goodwill provavelmente criam mais valor CRESCENDO; empresas com ROIC baixo
  sem goodwill provavelmente criam mais valor MELHORANDO O ROIC.** (Regra de diagnóstico estratégico, com
  consequência direta no que se projeta.)
- Nota 2: intangível adquirido = separável e identificável (ex.: patentes), amortizado ao longo da vida;
  goodwill = não separável nem identificável, sujeito a impairment. Koller analisa os dois igual e não
  distingue.

**Armadilha 1 — queda do ROIC com goodwill não prova destruição de valor.** Caso Tapestry (ex-Coach):
comprou a Kate Spade por US$ 2,4 bi em caixa em 2017. Como os retornos sobre capital das duas eram
similares, o **ROIC sem goodwill permaneceu praticamente constante** antes e depois. Já o **ROIC com
goodwill caiu de 24% para 12%** em 2017. Isso significa que a aquisição destruiu valor? *Not necessarily* —
sinergias de custo e cross-selling levam tempo para se materializar, e o acesso a novos clientes
(millennials) pode acelerar o crescimento das linhas próprias.

**Armadilha 2 — ROIC com goodwill sobe sozinho, sem melhora nenhuma do negócio.** Caso real relatado por
Koller: uma unidade de negócio apresentou plano estratégico prevendo melhora de ROIC ao longo do tempo. O
forecast parecia impressionante — até se descobrir que o ROIC **incluía goodwill**, e que a melhora
esperada vinha **exclusivamente** do goodwill permanecer constante enquanto o lucro crescia organicamente.
*"The management team would earn accolades for improving ROIC purely as a result of the accounting for
goodwill, not an underlying improvement to the business."*

**Onde encaixa.** `diagnostico-de-roic`, `projecao-e-cenarios` (a regra de qual ROIC usar para projetar),
`revisao-de-modelo` (as duas armadilhas como itens de checklist).
**Veredito.** `ADICIONAR-ALTA` — a skill tem "ROIC com/sem goodwill" como conceito. O aditivo forte é:
(a) a **regra de decisão** "ROIC alto sem goodwill → o valor vem de crescer; ROIC baixo sem goodwill → o
valor vem de melhorar ROIC", que direciona toda a construção de cenário; (b) usar o ROIC **sem** goodwill
como base de projeção; (c) a Armadilha 2 (ROIC com goodwill melhora sozinho com o denominador congelado),
que é exatamente o vício de plano de negócio de consolidador brasileiro (saúde, educação, odonto, pet,
agro-distribuição). Relevante em qualquer mandato onde o alvo já fez aquisições.
**Página.** p363–365.

## 12.4 A árvore de decomposição de ROIC completa — "uma das equações mais poderosas da análise financeira"

**O que é.** A identidade-mãe, que Koller chama de *"one of the most powerful equations in financial
analysis"*:

```
ROIC = (1 - Alíquota efetiva de tributos operacionais) x  EBITA/Receita  x  Receita/Capital investido
                    [minimizar tributos]              [margem operacional]     [giro do capital]

Equivalente:  ROIC pré-impostos = Margem operacional x Giro do capital
              ROIC              = ROIC pré-impostos x (1 - alíquota operacional em caixa)
```
Ou seja: o ROIC é dirigido pela capacidade da empresa de **(1) maximizar a rentabilidade**, **(2) otimizar
o giro do capital** e **(3) minimizar tributos operacionais**.

**Estrutura da árvore (Exhibit 12.3), lida da direita para a esquerda** — cada caixa é função das caixas à
sua direita, e do lado direito ficam os índices operacionais sobre os quais o gestor tem controle:

```
                                                                    /-- CPV / Receita
                            /-- MARGEM OPERACIONAL  --------------->|--- Despesas de vendas e G&A / Receita
                            |   (= 100% - somatório abaixo)         \-- Outras despesas operacionais / Receita
   ROIC pré-impostos ------>|
   (= margem x giro)        |                                       /-- Receita / Capital de giro operacional
                            \-- GIRO DO CAPITAL  ----------------->|--- Receita / Imobilizado líquido
                                (Receita / Capital investido)       |--- Receita / Outros ativos oper. líq.
                                                                    \-- Receita / Goodwill e intang. adquiridos
   ROIC = ROIC pré-impostos x (1 - alíquota de tributos operacionais em caixa)
                                    ^-- Tributos operacionais em caixa / EBITA
```
Regra de expansão: **cada despesa e cada item de capital pode ser desagregado, linha a linha,** até o nível
em que existe um driver operacional.

**Como usar.** Depois de calcular os drivers históricos, **compare-os com os drivers dos pares do mesmo
setor**; então pese esse resultado contra a análise de estrutura da indústria (oportunidades de
diferenciação, barreiras de entrada e saída) e uma avaliação qualitativa de forças e fraquezas.

**Exemplo trabalhado (Costco vs. pares, 2018), que é o modelo de raciocínio a replicar:** ROIC com
goodwill de Costco = 17,7% contra mediana dos pares de 11,6%. Por quê? Costco tem modelo atípico para
varejo: **não remarca o custo tanto quanto os outros**, logo tem CPV/receita **mais alto**. Compensa com
despesas de vendas e gerais **mais baixas** — o formato galpão tem depreciação muito menor, e o custo de
abastecer prateleira é menor porque não coloca item por item na gôndola, usa a própria embalagem do
fabricante; vende embalagens maiores com sortimento menor (menos SKU para gerir). Ainda assim, termina com
**margem operacional MENOR (3,2% contra 5,1%)**. Compensa isso com **produtividade do capital superior —
principalmente imobilizado muito menor em relação às vendas**.
→ Moral metodológico: **margem menor + giro muito maior = ROIC maior**. A conclusão só aparece se a árvore
for percorrida inteira; parar na margem levaria à conclusão oposta.

**Onde encaixa.** `diagnostico-de-roic` (que já tem "decomposição margem × giro").
**Veredito.** `ADICIONAR-ALTA` — a skill tem margem × giro. O aditivo é substancial: (a) a **terceira
alavanca (alíquota operacional)** explicitada na identidade, que no Brasil é a alavanca mais poderosa e
mais negligenciada (lucro presumido vs. real, benefícios de ICMS, Lei do Bem, SUDENE/SUDAM, Zona Franca,
crédito presumido — diferenças de 10 a 20 pontos de ROIC entre pares aparentemente idênticos);
(b) a **árvore inteira com as sub-ramificações do giro** (giro de capital de giro, de imobilizado, de
outros ativos, de goodwill — separadas), que é mais granular que "margem × giro"; (c) a regra de leitura
direita→esquerda com drivers controláveis na ponta; (d) o padrão de conclusão "margem menor + giro maior"
como caso-exemplo. Diretamente aplicável a distribuidores e atacadistas brasileiros — cujo pitch é
exatamente esse e que raramente sabem articulá-lo.
**Página.** p365–368.

## 12.5 Análise linha a linha: tudo vira índice — e as exceções

**O que é.** Um modelo de valuation completo converte **toda** linha das demonstrações em algum tipo de
índice.
```
DRE:      a maioria dos itens = % da RECEITA
          EXCEÇÃO: tributos operacionais em caixa = % do LUCRO OPERACIONAL ANTES DE IMPOSTOS,
                   NÃO % da receita.

Balanço:  cada linha = % da receita
          EXCEÇÃO PREFERENCIAL: estoques e fornecedores = % do CPV
                   (para evitar distorção causada por variação de preços)

Ativos e passivos circulantes operacionais - alternativa em DIAS:
          Dias = (Linha do balanço / Receita) x 365
          (usar a MESMA base - receita - em todos os cálculos, para comparabilidade)
```
Interpretação que Koller destaca: o uso de **dias** se presta a uma leitura operacional simples — *"How
much cash is tied up in the business, and for how long?"*

Exemplo trabalhado (Costco vs. pares, 2018): ambos têm **capital de giro negativo**, o de Costco um pouco
menor. Estoque: **30,9 dias** (Costco) contra **52,7** (pares) — a mercadoria não fica na prateleira tanto
tempo. Fornecedores: **30,9 dias** contra **54,4** — Costco paga os fornecedores mais rápido, *"perhaps to
get better prices"*.
→ Leitura: giro alto de estoque financiado por prazo curto de fornecedor, trocando prazo por preço de
compra. A árvore revela a **política comercial**, não só o número.

**Onde encaixa.** `capital-de-giro-e-capex` (já tem PMR/PME/PMP e NCG), `diagnostico-de-roic`.
**Veredito.** `ADICIONAR-MÉDIA` — PMR/PME/PMP já estão. O aditivo pontual mas valioso: (a) a exceção de
que **tributos operacionais se projetam sobre o lucro pré-impostos, não sobre a receita** (erro comum em
planilha de analista); (b) a preferência por **CPV como denominador de estoque e fornecedores** em vez de
receita, para neutralizar inflação de preços — muito relevante no Brasil em anos de inflação de custo alta
(commodity agrícola, aço, embalagem); (c) o insight interpretativo de que **prazo curto de fornecedor pode
ser escolha estratégica** (troca prazo por desconto), não fragilidade — argumento sell-side útil quando o
comprador aponta PMP baixo como sinal de aperto de crédito.
**Página.** p368–369.

## 12.6 Drivers NÃO financeiros amarrados ao ROIC — a metodologia de desagregação

**O que é.** Em análise externa os índices ficam confinados a performance financeira. Se você trabalha
dentro da empresa, ou se a empresa divulga dados operacionais, **amarre os drivers operacionais
diretamente ao ROIC**. Isso permite avaliar se as diferenças de performance financeira entre concorrentes
são **sustentáveis**.

Metodologia demonstrada com dois cases. **Case aéreas** (setor obrigado a divulgar muito dado
operacional). Estatísticas: número de empregados (FTE) e ASM (available seat-miles, medida de capacidade).

```
Passo 1 - a margem parece igual, mas é ilusão:
  Despesa de pessoal / Receita: Aérea A = 27,7% ; Aérea B = 26,7%   -> "parecem iguais"

Passo 2 - desagregar pela unidade FÍSICA (ASM):
  Despesa de pessoal   Despesa de pessoal / ASM
  ------------------ = -------------------------
       Receita             Receita / ASM

  Aérea B tem vantagem de 18% no CUSTO de pessoal por ASM (US$ 34,1 vs. US$ 41,6 por mil ASM)
  Aérea A recupera com PREÇO 17% maior (US$ 150,0 vs. US$ 127,9 por mil ASM),
       por causa de suas localizações e alcance, especialmente internacional.
  -> Índices iguais, MODELOS OPERACIONAIS DIFERENTES.

Passo 3 - desagregar o custo por ASM em PREÇO x PRODUTIVIDADE:
  Despesa de pessoal    Despesa de pessoal        Nº de empregados
  ------------------ =  ----------------- x  ----------------------
        ASM              Nº de empregados             ASM
                        ^ salário médio/FTE    ^ inverso da produtividade
                                                 (milhões de ASM voados por empregado)

  Aérea A: salário médio 16,4% MAIOR; produtividade por milha 4,6% MENOR.
```
E a conclusão metodológica de Koller — **a mais importante do capítulo**: *"a thoughtful analysis will
often raise more questions than it answers."* As perguntas seguintes: a diferença de salário se explica
pelo **mix de empregados** (piloto custa mais que agente de portão) ou pela **localização** (costas leste
e oeste custam mais que o Meio-Oeste)? Cada uma dessas análises acrescenta insight sobre a capacidade de
cada tipo de operador sobreviver e prosperar. (Contexto histórico útil: o diferencial de salário de 16,4%
em 2018 era pequeno comparado ao início dos anos 2000, quando os salários médios diferiam por um **fator
de quase 2**.)

**Case varejo** (mesma metodologia aplicada ao crescimento — ver 12.9).

**Onde encaixa.** `diagnostico-de-roic`, `projecao-e-cenarios`.
**Veredito.** `ADICIONAR-ALTA` — não é o case das aéreas que importa, é o **padrão de desagregação
reutilizável**: (i) achar a unidade física do negócio (ASM, m², leito-dia, tonelada, hectare, aluno,
assinante, consulta, viagem, cabeça); (ii) decompor `custo/receita` em `custo por unidade ÷ receita por
unidade` para separar eficiência de precificação; (iii) decompor `custo por unidade` em
`preço do insumo × inverso da produtividade`. É exatamente a análise que dá credibilidade à projeção
sell-side de um alvo mid-market — e é o que falta na maioria dos memorandos de informação brasileiros, que
param na margem consolidada. Como em mandato sell-side o acesso a dado operacional interno é total
(diferente de análise externa), a condição habilitante que Koller cita está sempre satisfeita.
**Página.** p369–372.

## 12.7 Crescimento de receita: os TRÊS distorcedores e como neutralizar cada um

**O que é.** O cálculo do crescimento ano a ano é trivial mas o resultado pode ser enganoso. **Três
culpados principais distorcem o crescimento de receita:** (1) variação cambial, (2) fusões e aquisições,
(3) mudanças de política contábil. Remova as distorções para chegar a um melhor forecast do **crescimento
orgânico**.

**Caso ilustrativo (Compass, UK, vs. Sodexo, França — refeições coletivas):** em 2017 a receita total da
Compass cresceu **15,1%** e a da Sodexo **2,2%**. A diferença parece dramática, mas é dirigida
primordialmente por **variação cambial** (libra vs. euro), não por crescimento orgânico estável. Limpando
as distorções, o crescimento orgânico *like-for-like* da Compass (**4,0%**) ainda excedia o da Sodexo
(**1,9%**), mas por margem muito menor. Mais: o crescimento **reportado** da Compass caiu de 15,1% (2017)
para **1,8%** (2018), em contraste total com o crescimento **orgânico**, estável entre **4,0% e 5,5%** no
mesmo período.
→ Regra: *"For large multinationals, swings in currency values and changes in corporate portfolios can
make historical revenue growth extremely volatile, so benchmarking is difficult."*

### (1) Efeito cambial
Receitas em moeda estrangeira são convertidas para a moeda-sede no fim de cada período. Se as moedas
estrangeiras se valorizam contra a moeda-sede, a tradução a taxas melhores gera receita maior. **Um aumento
de receita pode não refletir maior poder de precificação nem maior volume vendido — apenas depreciação da
moeda-sede.** Mecânica do caso: Compass e Sodexo têm mix geográfico similar (quase metade da receita na
América do Norte), mas traduzem dólar para moedas diferentes. Com o enfraquecimento da libra (US$ 1,51/£ em
2015 vs. US$ 1,30/£ em 2017), a Compass reportou +5,4% (2016) e +11,3% (2017) de receita **atribuíveis
apenas à libra fraca**. Para a Sodexo o efeito foi oposto: euro ligeiramente mais forte → menos euros na
tradução da receita norte-americana → **−0,4%** (2016) e **−0,8%** (2017). E os movimentos que ajudaram a
Compass em 2016–2017 **se reverteram em 2018**.

### (2) Fusões e aquisições — a mecânica pro forma de meses parciais
Crescimento por aquisição pode ter efeito sobre criação de valor **muito diferente** do crescimento
interno, por causa dos prêmios elevados pagos. Muitas empresas grandes divulgam tabela de decomposição
(como Compass e Sodexo). Sem divulgação voluntária, limpar o efeito é difícil: **a menos que a aquisição
seja considerada material pelos auditores, os arquivamentos não precisam detalhá-la nem reportá-la**. Para
aquisições maiores, a empresa reporta demonstrações pro forma que refazem o histórico como se a aquisição
tivesse ocorrido no início do exercício — **o crescimento orgânico deve ser calculado sobre os números pro
forma**. Se a adquirida reporta seus próprios dados publicamente, é possível construir o pro forma
manualmente combinando as receitas de adquirente e alvo do ano anterior. **Cuidado:** o comprador incluirá
receita de **ano parcial** do alvo para o período posterior ao fechamento; para manter consistência ano a
ano, **os anos anteriores reconstruídos também devem incluir apenas a receita parcial correspondente**.

Exemplo numérico completo (Exhibit 12.8 — aquisição no **7º mês do ano 3**; ambas crescendo organicamente
a 10%/ano):
```
Receita consolidada REPORTADA cresce 22,8% no ano 3 e 18,2% no ano 4 - ambas ilusórias.

Ano 3 (aquisição em jun/jul do ano 3, 7 meses do alvo consolidados... na notação do livro,
       o alvo entra com a fração correspondente):
  Receita ajustada do ano 2 = Receita do ano 2 da controladora (US$ 110,0 MM)
                            + 7/12 x receita do ano 2 do ALVO (7/12 x US$ 22 MM = US$ 12,8 MM)
                            = US$ 122,8 MM
  Crescimento orgânico ano 3 = 135,1 / 122,8 - 1 = 10,0%   <- correto

Ano 4 (a aquisição ocorre no ano 3, MAS o ano 4 também é afetado, porque o ano 4
       contém um ano INTEIRO de receita do alvo):
  Receita ajustada do ano 3 = Receita do ano 3 consolidada
                            + 5/12 x receita do ano 3 do ALVO (5/12 x US$ 24,2 MM = US$ 10,1 MM)
  -> completa os 12 meses do alvo no ano 3 para comparar com os 12 meses do ano 4.
```
**Regra geral:** ajustar a receita do ano anterior para **casar a composição do ano corrente**. E o efeito
de uma aquisição contamina **dois** anos de crescimento, não um.

### (3) Mudanças contábeis e irregularidades
FASB e IASB emitem recomendações anualmente. **Mudanças na política de reconhecimento de receita podem
afetar significativamente a receita no ano de adoção, distorcendo a taxa de crescimento de um ano.** Caso
concreto: as novas normas de reconhecimento de receita (**ASC 606 / IFRS 15 = CPC 47 no Brasil**,
"Receita de Contrato com Cliente", emitidas em 2014, implementação a partir de 2017) introduziram exigência
de processo de **cinco passos** para alocar receita ao longo da vida do contrato, escrito ou implícito. Em
alguns casos isso **atrasou** receita para o fim do contrato, causando **queda one-time** no like-for-like:
montadoras que dão manutenção gratuita sofreram queda. Outros setores tiveram **aumento** one-time:
operadoras de celular passaram a reconhecer a venda do aparelho imediatamente, e não ao longo da vida do
contrato.

Nota importante (nota 4): mudanças de reconhecimento de receita **também afetam margens e giro do
capital** — mas **NÃO afetam o fluxo de caixa livre**.

**Onde localizar:** se a mudança é material, a empresa documenta na seção de MD&A. E fique atento a
**exercícios de 53 semanas** — a Sodexo chamou atenção para um em 2017, que **elevou artificialmente o
crescimento de 2017 e deprimiu o de 2018**.

**Onde encaixa.** `qualidade-de-resultados` (as três distorções são o análogo, do lado da receita, das 4
famílias de normalização de EBITDA), `projecao-e-cenarios`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — este é provavelmente o maior buraco identificável: a skill
`qualidade-de-resultados` normaliza **EBITDA**, mas não há tratamento sistemático de **normalização de
CRESCIMENTO DE RECEITA**. Em mid-market brasileiro os três distorcedores aparecem assim:
(a) **câmbio**: `IRRELEVANTE-MIDMARKET` para alvo 100% BRL, mas relevantíssimo para exportador
(agro, calçado, autopeças, celulose) e para alvo com receita indexada a dólar — e por analogia,
**a inflação brasileira desempenha o mesmo papel: crescimento nominal vs. real, com deflator de IPCA/IGP-M,
é o análogo direto do ajuste cambial e deve ser tratado com o mesmo rigor**;
(b) **M&A**: `ADICIONAR-ALTA` — a mecânica pro forma de meses parciais com o alerta de que **DOIS anos são
contaminados** é diretamente aplicável a consolidador brasileiro, e o dado de que **aquisição não material
não precisa nem ser reportada** é ainda mais verdadeiro em empresa fechada sem obrigação de arquivamento
(a resposta é exigir na diligência a lista de aquisições com data de fechamento e receita stand-alone do
alvo);
(c) **contábil**: `ADICIONAR-MÉDIA` — CPC 47 é lei no Brasil e o efeito one-time no ano de adoção é real;
o exercício de 53 semanas é raro no Brasil, mas o análogo (mudança de data de encerramento social,
exercício-transição de 6 ou 18 meses em reorganização pré-venda) é comum e produz exatamente a mesma
distorção. Guardar como item de checklist.
**Página.** p372–376, nota 3 p388, notas 4–6 p388.

## 12.8 Decomposição de crescimento orgânico: preço vs. quantidade

**O que é.**
```
Crescimento de receita = Crescimento de PREÇO (receita por unidade) x Crescimento de QUANTIDADE (unidades)
Formalmente:  Receita = Nº de unidades x Receita por unidade
```
**Armadilha explícita de Koller:** *"Do not confuse revenue per unit with price; they can be different."*
Se a receita por unidade está subindo, pode ser (a) aumento de preço **ou** (b) a empresa deslocando o
**mix** de produtos de itens de preço baixo para itens de preço alto. São coisas econômica e
estrategicamente distintas — e com sustentabilidade distinta.

Quais estatísticas operacionais estão disponíveis depende das normas do setor e da prática dos
concorrentes. Varejistas, por exemplo, tipicamente divulgam **número de lojas, metragem quadrada e número
de transações anuais**.

**Onde encaixa.** `projecao-e-cenarios` (que já tem "drivers de receita"), `diagnostico-de-roic`.
**Veredito.** `ADICIONAR-MÉDIA` — preço × quantidade provavelmente já está em `projecao-e-cenarios`. O
aditivo é o alerta **preço ≠ receita por unidade (é preço OU mix)**, que é uma distinção de sustentabilidade
crítica no sell-side: crescimento por mix (subir para produto premium) tem teto e é finito; crescimento por
preço reflete poder de mercado. No Brasil soma-se uma terceira componente: **inflação** — logo
`receita/unidade = preço real × inflação × mix`, e a decomposição em três termos é a que realmente
importa aqui.
**Página.** p377.

## 12.9 A árvore de crescimento de receita (case varejo) — a lógica de "comps"

**O que é.** Mesma metodologia da árvore de ROIC, mas as caixas contêm **o crescimento do índice**, não o
índice calculado, tudo relacionado de volta ao crescimento da receita.

Padrão de varejo:
```
Receita = Nº de lojas x Receita por loja

Expandindo:
  Receita por loja = Transações por loja x Receita por transação
  E ainda:  m² por loja ; Receita por m² ; Transações por m²
```
Case (Delta vs. Gamma, big-box disfarçados): Delta tem mais lojas e gera mais receita por loja (US$ 47 MM
vs. US$ 37 MM em 2018). Delta cresceu mais rápido porque **(a) Gamma fechou lojas enquanto Delta abriu
ligeiramente**, e **(b) Delta cresceu receita por loja mais rápido**. Descendo mais um nível: Delta gerou
**mais fluxo de pessoas** (transações por loja +2,5% vs. +1,2% de Gamma); receita por transação cresceu
igual nas duas.

**Por que "comps" (same-store sales) é a métrica que importa** — o argumento de Koller, em duas pernas:
1. **Quantas lojas abrir é uma DECISÃO DE INVESTIMENTO**, enquanto o crescimento de mesmas lojas reflete a
   **capacidade de cada loja competir efetivamente em seu mercado local**. São coisas diferentes: a
   primeira é alocação de capital, a segunda é qualidade competitiva.
2. **Lojas novas exigem grande investimento de capital, enquanto crescimento de comps exige pouco capital
   incremental.** Portanto: *"same-store sales growth comes with higher capital turnover, higher ROIC, and
   greater value creation."*

Nota técnica (nota 7): o crescimento de "receita por loja" da árvore **difere** do same-store sales
reportado pelas empresas, que inclui apenas lojas abertas por **pelo menos 13 meses**.

**Onde encaixa.** `projecao-e-cenarios`, `diagnostico-de-roic`, `triangulacao-e-faixa`.
**Veredito.** `ADICIONAR-ALTA` — o argumento em duas pernas de por que **comps > abertura de lojas** é
diretamente transferível e é o eixo central de valuation de qualquer alvo com rede de unidades — que é
uma fatia enorme do mid-market brasileiro: farmácia, pet shop, clínica/odonto, academia, restaurante,
franquia, escola, oficina, autopeças, distribuição com filiais. A consequência prática para o modelo:
**separar a projeção em dois motores — crescimento de mesmas unidades (barato em capital, alto ROIC
marginal) e abertura de unidades (caro em capital, ROIC marginal do investimento novo)** — e precificá-los
diferentemente. É também o teste de credibilidade que o comprador vai aplicar. E a nota das 13 meses é o
detalhe técnico que evita comparar o número do modelo com o número que o alvo divulga.
**Página.** p377–379, nota 7 p389.

## 12.10 Saúde de crédito e estrutura de capital — as QUATRO análises obrigatórias

**O que é.** Último passo da análise histórica: como a empresa financiou suas operações. As perguntas de
Koller: qual proporção do capital investido vem de credores em vez de acionistas? Essa estrutura é
sustentável? A empresa **sobrevive a um downturn setorial**? Quanto caixa, se algum, foi distribuído aos
acionistas?

**Quatro análises, nesta ordem:**
1. **Liquidez** via índices de cobertura → capacidade de honrar obrigações de **curto prazo**.
2. **Alavancagem** via dívida/EBITDA e dívida/valor → capacidade de honrar obrigações de **longo prazo**.
3. **Payout** → percentual do resultado enviado aos acionistas.
4. **Valor operacional / EBITDA** → expectativa dos acionistas sobre performance financeira futura.

### (1) Liquidez — as três medidas de resultado e a leitura de cada cobertura
Três medidas de resultado sustentam os índices:
- **EBITA** — lucro antes de juros, tributos e amortização
- **EBITDA** — antes de juros, tributos, depreciação e amortização
- **EBITDAR** — antes de juros, tributos, depreciação, amortização **e despesa de aluguel**

```
Cobertura de juros (versão conservadora) = EBITA / Despesa de juros
   Mede: capacidade de pagar juros com o lucro SEM CORTAR o capex destinado a repor
         equipamento que se deprecia.

Cobertura de juros (versão frouxa)       = EBITDA / Despesa de juros
   Mede: capacidade de honrar compromissos financeiros de CURTO prazo usando
         tanto o lucro corrente COMO os recursos da depreciação destinados a capex de reposição.
   Ressalva de Koller: "most companies cannot compete effectively without replacing worn assets."

Cobertura com aluguel                    = EBITDAR / (Despesa de juros + Despesa de aluguel)
   Mede: capacidade de honrar obrigações FUTURAS CONHECIDAS, incluindo o efeito dos
         arrendamentos operacionais.
   Crítico para: varejistas e aéreas - e em geral qualquer negócio alugado.
```
Exemplo (Costco vs. pares, 2018): EBITA/juros = **31,6x** (Costco) vs. **15,3x** (pares) — pouquíssima
dívida, refletida no rating **AA−** da S&P; os pares também são pouco alavancados e bem avaliados, em grau
menor.

### (2) Alavancagem — por que dívida/EBITDA passou a dominar a cobertura de juros
Koller dá **três razões** para preferir múltiplos de dívida a cobertura de juros:
1. **Juros em mínimas históricas** tornaram os índices de cobertura de juros **atipicamente altos** —
   perdem poder discriminante.
2. Por ter **denominador muito maior**, dívida/EBITDA **é mais estável**, tornando a avaliação ao longo do
   tempo muito mais clara. E o índice **captura melhor as empresas expostas a risco de rolagem
   (rollover risk) e a alargamento de spreads de default** — **nenhum dos dois é capturado pela cobertura
   de juros quando as taxas estão extremamente baixas**.
3. **Uso crescente de conversíveis**: muitos títulos conversíveis remuneram via a potencial conversão em
   ações em vez de via juros, o que torna a **cobertura de juros artificialmente alta**. Dívida/EBITDA
   constrói um quadro mais completo do risco de alavancagem.
```
Dívida / EBITDA          <- preferido, mais estável
Dívida / EBITA           <- variação mais conservadora
(Dívida + Arrendamentos) / EBITDAR   <- melhor para empresas com muitos arrendamentos
                                        operacionais (aéreas, varejistas)
Dívida / Valor           <- alavancagem a valor de MERCADO
```
Para avaliar alavancagem: medir o D/E **a valor de mercado** ao longo do tempo e contra os pares. O índice
compara favoravelmente com a indústria? Quanto risco a empresa está tomando?

### (3) Payout ratio e o índice de reinvestimento
```
Payout ratio = Dividendos totais aos ordinaristas / Lucro líquido disponível aos ordinaristas

Índice de reinvestimento de fluxo de caixa = Investimento bruto / Fluxo de caixa bruto
   (> 1 significa FLUXO DE CAIXA LIVRE NEGATIVO)
```
As duas leituras diagnósticas que Koller extrai do cruzamento:
- **Payout alto + reinvestimento > 1** → a empresa **necessariamente está tomando dinheiro emprestado**
  para financiar FCL negativo, para pagar juros, ou para pagar dividendos. Pergunta: **isso é
  sustentável?**
- **FCL positivo + payout baixo** → a empresa provavelmente está **amortizando dívida ou acumulando caixa
  excedente**. Perguntas: está deixando na mesa os valiosos benefícios fiscais da dívida? Está
  **entesourando caixa desnecessariamente**?

Aplicação a Costco (2015–2019): gerou US$ 14,7 bi de NOPAT, pagou US$ 1,1 bi de juros e devolveu US$ 9,5 bi
aos acionistas em dividendos.

### (4) Múltiplo de mercado como leitura de expectativa
Para fechar a avaliação de estrutura de capital, meça a percepção dos acionistas sobre performance futura
via múltiplo de mercado:
```
Múltiplo = VALOR OPERACIONAL CENTRAL / fator normalizador
   Valor operacional central = Enterprise value - valor de mercado dos ativos NÃO operacionais
                               (caixa excedente, coligadas não consolidadas)
   Fator normalizador = Receita, EBITA, EBITDA, ou VALOR CONTÁBIL DO CAPITAL INVESTIDO
```
Case (Costco vs. pares, 2005–2019): negociou em linha com os pares de 2005 a 2011; desde então o múltiplo
subiu substancialmente enquanto o dos pares ficou parado. Inferência de Koller: o múltiplo maior de Costco
é dirigido por **crescimento de receita mais forte e ROIC persistentemente mais alto**. Nota do exhibit:
"Operating value equals enterprise value less the **book value** of nonoperating assets" (na prática usa-se
valor contábil como proxy). Valor operacional/EBITDA é a medida mais comum, mas valor operacional/EBITA e
valor operacional/NOPAT frequentemente dão insights úteis também.

**Onde encaixa.** **Skill nova sugerida: `saude-de-credito`** (ou incorporar como bloco 3 obrigatório em
`diagnostico-de-roic`). O item (4) encaixa em `triangulacao-e-faixa`.
**Veredito.** `ADICIONAR-ALTA` — este é o **buraco mais claro do plugin**: nenhuma das 12 skills cobre
liquidez, cobertura e alavancagem. E em sell-side mid-market brasileiro isso não é acessório, é central:
(a) o comprador estratégico e o fundo vão modelar a capacidade de dívida do alvo, e a **alavancagem
suportável define o preço que o comprador financeiro pode pagar** (LBO reverso);
(b) alvo familiar brasileiro tipicamente tem **dívida caríssima e mal estruturada** (capital de giro em
banco, antecipação de recebível, factoring, dívida no CNPJ com aval do sócio, dívida tributária em
parcelamento) — e a cobertura de juros calculada com EBITA revela imediatamente se a operação sustenta
essa dívida;
(c) a preferência por **dívida/EBITDA sobre cobertura de juros** é o padrão de mercado brasileiro
(covenant de debênture e de CCB é dívida líquida/EBITDA), o que alinha a skill com a linguagem do
comprador;
(d) **EBITDAR e (Dívida+Arrendamentos)/EBITDAR** é a métrica correta para o alvo asset-light-alugado, que
é a maioria em serviço, varejo e saúde;
(e) a **pergunta do downturn** ("a empresa sobrevive a um ciclo setorial ruim?") é exatamente a pergunta
que o comprador fará e que o vendedor precisa ter respondido antes.
Ressalva de escopo: **rating de agência e D/E a valor de mercado são `IRRELEVANTE-MIDMARKET`** para
empresa fechada sem ações listadas — substituir por (i) capacidade de dívida estimada por múltiplo de
EBITDA que o mercado bancário brasileiro concede ao setor, e (ii) D/E a valor de mercado usando o próprio
EV do valuation como valor do patrimônio, iterativamente. O item (4) (múltiplo de mercado como leitura de
expectativa) é `ADICIONAR-MÉDIA` — a lógica de usar **valor operacional central, não EV bruto**, no
numerador do múltiplo é correta e aditiva a `triangulacao-e-faixa`, mas a série histórica de múltiplo só
existe para os pares listados, não para o alvo.
**Página.** p379–384.

## 12.11 As quatro diretrizes gerais de Koller para a análise histórica

**O que é.** Koller admite que é impossível dar um checklist exaustivo, e oferece quatro diretrizes:

1. **Olhe para trás o máximo possível — no MÍNIMO dez anos.** Razão explícita: horizontes longos permitem
   determinar **(a) se a empresa e o setor tendem a reverter a algum nível NORMAL de performance** e
   **(b) se as tendências de curto prazo são provavelmente permanentes**.
2. **Desagregue os value drivers — ROIC e crescimento de receita — o máximo possível.** Se possível,
   **amarre medidas de performance OPERACIONAL a cada key value driver**.
3. **Se houver qualquer mudança radical de performance, identifique a FONTE.** E determine se a mudança é
   **temporária, permanente ou meramente um efeito contábil** — as três categorias.
4. **Se possível, faça a análise em nível granular, não só da empresa como um todo.** *"Real insight comes
   from analysis of individual business units, product lines, and, if the data exist, even customers."*

**Onde encaixa.** `diagnostico-de-roic` (abertura), `revisao-de-modelo`, `qualidade-de-resultados`
(a tricotomia temporário/permanente/contábil).
**Veredito.** `ADICIONAR-ALTA` — quatro regras curtas de altíssimo valor, especialmente:
(a) o **piso de 10 anos** — no mid-market brasileiro o padrão de mercado é olhar 3 anos, e 10 anos é o que
permite ver reversão à média e o ciclo (2015–2016, 2020–2021, 2022–2023 de juro alto); mesmo quando não
há demonstração auditada de 10 anos, o **balancete e a receita da DEFIS/ECF existem** e é possível
reconstruir a série de receita e margem. Levantar 10 anos muda a conversa sobre o que é "EBITDA normal";
(b) a **tricotomia temporário / permanente / efeito contábil** é uma classificação melhor e mais acionável
do que "recorrente vs. não recorrente", e complementa as 4 famílias de `qualidade-de-resultados`;
(c) a exigência de **granularidade por unidade de negócio, linha de produto e cliente** é a ponte
natural para o Cap 19 (valuation por partes) e, em sell-side, é onde se encontra a história de valor —
quase sempre há uma linha de produto ou um segmento de cliente com ROIC muito acima do consolidado, e
essa é a peça de equity story.
**Página.** p384–385.

## 12.12 Exercícios do capítulo como bateria de teste (Review Questions)

**O que é.** Vale registrar a estrutura, porque é um roteiro de trabalho: (1) ShipCo — calcular ROIC anos
2–5 com capital investido **médio**, margem operacional, giro do capital, e julgar se cria mais ou menos
valor ao longo do tempo (alíquota operacional de 30%, custo de capital de 9%); (2) decompor margem e giro
do ShipCo e explicar o que dirige o resultado; (3) decompor capital de giro operacional/vendas em **dias
de caixa operacional, dias de recebíveis, dias de estoque, dias de fornecedores e dias de despesas
acumuladas** — usando **vendas como base em todos os cálculos, para comparabilidade** — e comparar com
DefenseCo; (4) comparar PaperPro (NOPAT 325, CI sem goodwill 2.500, goodwill 950) com ExpertPaper (NOPAT
750, CI sem goodwill 6.000, sem goodwill), custo de capital 10% para ambas — teste de ROIC com vs. sem
goodwill; (5) calcular crescimento orgânico *apples-to-apples* de PaperPro nos anos 2 e 3 dado o
fechamento da aquisição em 1º de outubro do ano 2 — teste da mecânica de meses parciais; (6) qual cobertura
de juros dá número maior (EBITDA/juros), e **quando cada uma é mais apropriada**.

**Onde encaixa.** `revisao-de-modelo`, `diagnostico-de-roic`.
**Veredito.** `ADICIONAR-MÉDIA` — a lista de **cinco componentes de dias** (caixa operacional, recebíveis,
estoque, fornecedores, despesas acumuladas) com a instrução de usar **a mesma base (vendas) em todos** é a
especificação exata da decomposição da NCG e é aditiva a `capital-de-giro-e-capex`, que provavelmente
cobre PMR/PME/PMP mas talvez não os **dias de caixa operacional** (que amarram de volta na regra dos 2%
do Cap 11) nem os **dias de despesas acumuladas** (no Brasil: salários, encargos, férias e 13º
provisionados — parcela relevante e frequentemente esquecida da NCG de empresa intensiva em mão de obra).
**Página.** p385–388.
---

# Capítulo 13 — Forecasting Performance (p390–428)

> Este é o capítulo mais operacional da Parte Dois: é literalmente o manual de construção da planilha.
> Duas skills o consomem: `projecao-e-cenarios` (o conteúdo econômico) e `revisao-de-modelo` (a arquitetura
> da planilha e os testes de consistência).

## 13.0 O princípio de hierarquia: agregado antes de linha

**O que é.** Frase de abertura, que é a regra de prioridade do capítulo:
*"You can do much more to improve your valuation through a careful analysis of whether your forecast of
future ROIC is consistent with the company's ability to generate value than you can by precisely (but
perhaps inaccurately) forecasting an immaterial line item ten years out."*
E o fechamento: *"always keep a close eye on the bigger picture. Make sure resulting value drivers, such
as ROIC and growth, are consistent with the past performance of the business and the industry's
economics."*

**Onde encaixa.** `projecao-e-cenarios` (abertura), `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — é a regra de triagem que impede o desperdício de esforço mais comum
(refinar linha imaterial no ano 12 em vez de checar se o ROIC projetado é economicamente possível).
Combina com o princípio de materialidade do Cap 11 (11.16) para formar a doutrina de esforço do plugin.
**Página.** p390, p422.

## 13.1 Horizonte explícito: quanto tempo, e a definição rigorosa de steady state

**O que é.** A solução padrão é forecast explícito ano a ano por um período determinado e depois valorar os
anos remanescentes por perpetuidade (ex.: key value driver formula). **Toda** abordagem de continuing
value assume steady state. Logo o período explícito tem de ser longo o suficiente para a empresa
**alcançar** o steady state, definido por **duas** características:

```
STEADY STATE (definição de Koller - as duas condições):
1. A empresa cresce a uma taxa CONSTANTE reinvestindo uma PROPORÇÃO CONSTANTE
   dos seus lucros operacionais no negócio a cada ano.
2. A empresa ganha uma TAXA DE RETORNO CONSTANTE tanto sobre o capital EXISTENTE
   quanto sobre o NOVO capital investido.

Consequência: o FCL cresce a taxa constante e pode ser valorado por perpetuidade com crescimento.
```
**Restrição adicional obrigatória:** o período explícito tem de ser longo o suficiente para que a taxa de
crescimento da empresa seja **menor ou igual à da economia**. Taxas maiores acabariam tornando a empresa
irrealisticamente grande em relação à economia agregada.

**Recomendação de prazo:**
```
Período explícito recomendado: 10 a 15 ANOS
  -> talvez MAIS para empresas CÍCLICAS ou em crescimento muito rápido.

Período curto (ex.: 5 anos) -> tipicamente resulta em SUBAVALIAÇÃO significativa da empresa,
  OU exige premissas heroicas de crescimento de longo prazo no valor terminal.
```
Mas Koller reconhece o problema oposto: um período longo levanta a dificuldade de projetar linhas
individuais 10 a 15 anos à frente.

**Onde encaixa.** `projecao-e-cenarios`, `valor-terminal`.
**Veredito.** `ADICIONAR-ALTA` — as **duas condições formais de steady state** e o **piso de 10–15 anos**
com a justificativa explícita ("5 anos subavalia ou exige g heroico") são aditivos e diretamente úteis: o
padrão de mercado mid-market brasileiro é **5 anos**, exatamente o que Koller diz que subavalia. Isso é
argumento sell-side de primeira ordem — o horizonte curto do comprador é uma escolha que joga valor para
o terminal e depois questiona o terminal. Ter a doutrina de Koller escrita permite defender 10 anos e,
quando o comprador insistir em 5, demonstrar numericamente que o g implícito exigido no terminal é
insustentável. A ressalva de "mais para cíclicas" é crítica no Brasil (agro, construção, siderurgia,
proteína, açúcar-álcool).
**Página.** p390–391.

## 13.2 A divisão em DOIS períodos: detalhado vs. simplificado

**O que é.** Para simplificar o modelo e **evitar o erro da falsa precisão**, Koller divide o forecast
explícito em dois períodos:

```
PERÍODO 1 - FORECAST DETALHADO: 5 a 7 anos
  - Desenvolve balanços e DREs COMPLETOS
  - Com o MÁXIMO de vínculos possível a VARIÁVEIS REAIS:
    volumes em unidades e custo por unidade

PERÍODO 2 - FORECAST SIMPLIFICADO: os anos remanescentes (até fechar 10-15)
  - Foca em POUCAS variáveis importantes:
      * crescimento de receita
      * margens
      * giro do capital

PERÍODO 3 - VALOR TERMINAL (perpetuidade)
```
Justificativa explícita: *"Using a simplified intermediate forecast forces you to focus on the business's
long-term economics, rather than become engrossed in too much detail."*

**Onde encaixa.** `projecao-e-cenarios`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — esta é a peça que resolve a tensão que o mid-market brasileiro nunca
resolve. A prática local é uma de duas: ou projeta 5 anos detalhados e joga tudo no terminal, ou projeta
10 anos "detalhados" que são na verdade 10 anos de crescimento constante fingindo detalhe. A estrutura de
três blocos (5–7 detalhado com drivers físicos → 3–8 simplificado com 3 variáveis → perpetuidade) é
diretamente implementável e dá ao modelo uma **ponte econômica** entre o plano de negócio do vendedor e o
steady state, que é exatamente onde a discussão de valor terminal acontece. Deve virar a arquitetura
padrão da skill.
**Página.** p391.

## 13.3 Arquitetura da planilha: as SETE abas e as QUATRO regras de bom modelo

**O que é.** Combinando 15 anos de projeção com 10 anos de histórico, mesmo a planilha mais simples fica
complexa. Logo, projete e estruture o modelo **antes** de começar a projetar. As sete abas:

```
1. DADOS BRUTOS (raw historical data)
   Coleta dados brutos das demonstrações, notas explicativas e relatórios externos EM UM SÓ LUGAR.
   Reportar os dados brutos NA FORMA ORIGINAL. Nunca combinar múltiplos dados numa única célula.
   [Para Costco: abas separadas para demonstrações, tabela de tributos estatutários e nota de diferidos.]

2. DEMONSTRAÇÕES FINANCEIRAS INTEGRADAS (histórico + projetado)
   Nível de detalhe adequado. REGRA GERAL: itens operacionais e não operacionais
   NUNCA agregados na mesma linha. DRE ligada ao balanço via LUCROS ACUMULADOS.

3. ANÁLISE HISTÓRICA E ÍNDICES DE PROJEÇÃO
   Para cada linha: índices históricos + projeção dos índices futuros.
   É ESTA aba que GERA as demonstrações projetadas da aba 2.

4. DADOS DE MERCADO E WACC
   Todos os dados de mercado num só lugar: beta, custo do equity, custo da dívida, WACC,
   além de valores de mercado históricos e múltiplos de negociação da empresa.

5. DEMONSTRAÇÕES REORGANIZADAS
   NOPAT + reconciliação com lucro líquido; capital investido + reconciliação com fundos
   investidos totais. Feita DEPOIS de ter o conjunto completo (histórico + projetado).

6. ROIC E FCL
   ROIC, lucro econômico e fluxo de caixa livre a partir das reorganizadas.

7. SUMÁRIO DE VALUATION
   Soma dos fluxos descontados e conversão de valor das operações em valor do equity:
   valor das operações + valor de ativos não operacionais - valor de claims não-equity = equity.
```

**As quatro regras de um modelo bem construído:**
```
REGRA 1 - Dados originais e input do usuário concentrados em POUCOS lugares:
          apenas TRÊS abas -> dados brutos (1), projeções (3) e dados de mercado (4).
          Denotar dados brutos e input do usuário em COR DIFERENTE dos cálculos.

REGRA 2 - Cada aba deve alimentar a PRÓXIMA aba. Fórmulas não devem pular de aba
          em aba sem direção clara. Dados fluem numa direção e NUNCA voltam,
          criando referência circular (nota 2: referência circular impede o cálculo correto).
          Brutos -> integradas -> ROIC e FCL.

REGRA 3 - A menos que seja input de dado, números NUNCA devem ser hard-coded
          dentro de fórmula. Números hard-coded são facilmente esquecidos
          conforme a planilha cresce em complexidade.

REGRA 4 - Usar fórmulas embutidas do software COM PARCIMÔNIA, como a fórmula de VPL (NPV).
          Fórmulas embutidas OBSCURECEM a lógica do modelo e dificultam a AUDITORIA.
```

**Onde encaixa.** `revisao-de-modelo` (auditoria do .xlsx do analista) — é o núcleo do padrão de referência.
**Veredito.** `ADICIONAR-ALTA` — é o conteúdo mais diretamente operacionalizável do capítulo para a skill
`revisao-de-modelo`. As sete abas dão um **layout de referência** contra o qual auditar qualquer planilha
que o analista traga, e as quatro regras são critérios de aprovação/reprovação objetivos. Três delas são
especialmente frequentes em planilha mid-market brasileira: hard-code em fórmula, referência circular
(quase sempre por causa de juros sobre dívida do ano corrente — ver 13.8), e uso de `=VPL()` que esconde a
convenção de meio de ano e o timing do primeiro fluxo. Nota importante: a aba 3 gerar a aba 2 (índices
dirigem demonstrações) é a inversão de arquitetura que a maioria das planilhas locais não faz — elas
projetam valores diretamente, o que mata a capacidade de cenário.
**Página.** p391–394, notas 1–2 p425.

## 13.4 Os SEIS passos do processo de forecast

**O que é.** O DCF empresarial depende de projeção de FCL, mas **o FCL deve ser criado INDIRETAMENTE**,
projetando primeiro DRE, balanço e demonstração de lucros acumulados. E: *"a well-built spreadsheet will
use the same formulas for historical and forecast ROIC and FCF without any modification."*

```
PASSO 1 - Preparar e analisar as demonstrações HISTÓRICAS.
          "A robust analysis will place your forecasts in the appropriate context."

PASSO 2 - Construir a projeção de RECEITA.
          Quase toda linha depende direta ou indiretamente da receita.
          Top-down (baseado em mercado) OU bottom-up (baseado em cliente).
          As projeções devem ser CONSISTENTES COM A EVIDÊNCIA EMPÍRICA SOBRE CRESCIMENTO (Cap 9).

PASSO 3 - Projetar a DRE.
          Usar os drivers econômicos apropriados para despesas operacionais, depreciação,
          receita não operacional, despesa de juros e tributos reportados.

PASSO 4 - Projetar o BALANÇO: capital investido e ativos não operacionais.
          Capital de giro operacional, PP&E líquido, goodwill, ativos não operacionais.
          NÃO projetar caixa excedente nem fontes de financiamento aqui.

PASSO 5 - Reconciliar o BALANÇO com os fundos dos investidores.
          Calcular lucros acumulados e projetar as demais contas de PL.
          Usar CAIXA EXCEDENTE e/ou NOVA DÍVIDA para fechar o balanço (o "plug").

PASSO 6 - Calcular ROIC e FCL nas demonstrações projetadas
          para garantir que as projeções são consistentes com os princípios econômicos,
          a dinâmica da indústria e a capacidade competitiva da empresa.
```
Ênfase explícita: *"Give extra emphasis to your revenue forecast... Any error in the revenue forecast will
be carried through the entire model."*

**Onde encaixa.** `projecao-e-cenarios`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — a sequência de 6 passos é a espinha do procedimento e resolve a ordem de
trabalho. Dois pontos de altíssimo valor: (a) **FCL é OUTPUT, não input** — construir DRE + balanço e
derivar o FCL, jamais projetar FCL diretamente (erro rotineiro em modelo mid-market brasileiro, que
projeta "EBITDA − capex − Δcapital de giro − impostos" sem balanço, o que torna impossível calcular ROIC
e impossível checar consistência); (b) **as mesmas fórmulas devem calcular ROIC e FCL no histórico e na
projeção, sem modificação** — teste de auditoria objetivo e devastador quando falha.
**Página.** p394–395.

## 13.5 Passo 1 — dado padronizado vs. dado bruto: o trade-off

**O que é.** Duas fontes possíveis: serviço profissional (Bloomberg, Capital IQ, Compustat, Thomson ONE)
ou as demonstrações diretamente. Serviços oferecem **dado padronizado** (formatado num número fixo de
categorias), de modo que uma única planilha analisa qualquer empresa rapidamente. **Mas o dado
padronizado tem custo:** muitas categorias **agregam itens importantes, escondendo informação crítica.**
Exemplo: a Compustat agrupa "adiantamentos a equipe de vendas" (ativo **operacional**) e "fundos de pensão
e outros fundos especiais" (ativo **não operacional**) numa única categoria "outros ativos". Por isso,
*"models based solely on preformatted data can lead to meaningful errors in the estimation of value
drivers, and hence to poor valuations."*

**A alternativa exige garimpo.** Case Honeywell: no balanço reportado a empresa consolida muitos itens na
conta "passivos acumulados" (accrued liabilities); a **nota 12** detalha a linha. Alguns componentes são
passivos **operacionais** (compensação, benefícios e outros custos relacionados a empregados), outros são
**equivalentes de dívida** (custos ambientais). Como a avaliação de cada um exige tratamento diferente,
**os itens têm de ser separados no balanço expandido.**

**Quais demonstrações montar na aba 2:** DRE, balanço, **demonstração de mutações do PL** e demonstração
de outros resultados abrangentes acumulados. Sobre a DMPL: *"Although the statement of equity appears
redundant, it will be critical for error checking during the forecasting process, because it connects the
income statement to the balance sheet."* E os ORA acumulados são necessários para completar a
demonstração de FCL.

**Regra de agregação de linhas imateriais.** Projetar e analisar linhas demais gera confusão, introduz
erros e torna o modelo intratável. Critério de Koller no caso Honeywell: "tributos a pagar" era menos de
**0,1% da receita** → pode ser combinado com a conta "outros". Contraste (nota 3): "compensação e
benefícios acumulados" era **quase 15 vezes maior** que tributos a pagar — dado o tamanho, **não deve** ser
agregada com outros passivos acumulados. **Restrição absoluta:** ao agregar, **nunca** combinar contas
operacionais com não operacionais — se combinadas, é impossível calcular ROIC e FCL corretamente.

**Onde encaixa.** `reorganizacao-contabil`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-MÉDIA` — no Brasil não há Compustat do alvo (empresa fechada), então a discussão
de dado padronizado é `IRRELEVANTE-MIDMARKET` **para o alvo** — mas é relevantíssima **para os pares**, e
o alerta se transfere: usar Capital IQ/Bloomberg/Economatica para construir múltiplos de pares brasileiros
e latino-americanos herda exatamente esse defeito de agregação (o "outros ativos" da Economatica). Já a
**regra de materialidade quantificada** (agregar abaixo de ~0,1% da receita; nunca agregar se a conta é
uma ordem de magnitude maior que as vizinhas; nunca misturar operacional com não operacional) é aditiva e
objetiva. E o ponto da **DMPL como ferramenta de error-checking** reforça 11.2.
**Página.** p395–397, nota 3 p426.

## 13.6 Passo 2 — Projeção de receita: top-down vs. bottom-up

**O que é.** Duas abordagens, e a recomendação de usar **as duas** quando possível: *"When possible, use
both methods to establish bounds for the forecast."*

### TOP-DOWN (baseado em mercado)
```
Sequência: dimensionar o MERCADO TOTAL
         -> determinar PARTICIPAÇÃO DE MERCADO
         -> projetar PREÇOS
```
Aplicável a **qualquer** empresa. Em indústrias maduras, o mercado agregado cresce lentamente e está
fortemente ligado ao crescimento econômico e a tendências de longo prazo (ex.: mudança de preferência do
consumidor). Nessas situações: **confie em projeções de terceiros para o mercado agregado** e concentre
seu próprio esforço em **projetar participação de mercado por concorrente**. (Nota 4: exemplos de fontes
setoriais de terceiros — EvaluatePharma para receita droga por droga, McCoy Power Reports para
equipamento de geração, RBR para sistemas de ponto de venda.)

Para projetar share, é preciso determinar **quais empresas têm capacidades e recursos para competir
efetivamente e capturar share**. Bom ponto de partida: a análise financeira histórica. **Mais
importante:** endereçar como a empresa está posicionada para o **futuro** — ela tem os produtos e serviços
necessários para capturar share? Os concorrentes têm produtos e serviços que vão **deslocar** a posição da
empresa? *"A good forecast will address each of these issues."*

**No curto prazo, top-down deve se apoiar nas intenções e capacidades ANUNCIADAS de crescimento.**
Exemplos: varejistas como Costco têm planos bem mapeados de abertura de lojas, que são o driver primário
de receita; petrolíferas como BP têm reservas provadas e capacidade de refino relativamente fixa;
farmacêuticas como Merck têm um conjunto fixo de drogas sob patente e em ensaio clínico.

**Granularidade da projeção de receita (case Costco, Exhibit 13.3):** dividida em **receita doméstica,
receita internacional, taxas de associação (membership fees) e negócios acessórios** (postos de
combustível e farmácias). Por quê segmentar geograficamente: **receita por m² e m² por loja diferem entre
lojas domésticas e internacionais.** Alguns analistas fornecem projeções de **número de transações,
receita média por transação e outros drivers de receita**. *"Taking a fine-grained look at a company's
sources of growth will make clear what drives the company's valuation."*

**Mercados de produto NOVO — a metodologia de analogia.** Top-down é especialmente útil mas dá mais
trabalho. Case June Life (fornos com internet, multifuncionais — torradeira, desidratador, slow cooker,
com app de controle remoto). Sem histórico do produto, como estimar tamanho potencial e velocidade de
penetração? A receita de Koller, passo a passo:
```
1. Dimensionar os produtos TRADICIONAIS análogos (Black & Decker, Cuisinart).
2. Analisar se o produto novo, dada sua funcionalidade maior, será adotado por MAIS usuários
   que os fornos tradicionais - ou por MENOS, por causa do preço mais alto.
3. Projetar a VELOCIDADE de penetração: olhar a velocidade de migração de OUTROS eletrônicos
   que passaram por transição similar (celular de voz -> smartphone).
4. Determinar as CARACTERÍSTICAS que dirigem a conversão em outros mercados,
   para contextualizar a projeção.
5. Avaliar o ponto de PREÇO e a MARGEM operacional resultante.
6. Quantas empresas estão desenvolvendo o produto? Quão competitivo será o mercado?
```
E a conclusão metodológica: *"As you can see, there are more questions than answers. The key is
structuring the analysis and applying historical evidence from comparable markets to help bound forecasts
whenever possible."*

### BOTTOM-UP (baseado em cliente)
```
1. Projeções de DEMANDA DOS CLIENTES ATUAIS.
   Em alguns setores os clientes já projetaram sua própria receita e podem dar ao fornecedor
   uma estimativa aproximada das suas próprias projeções de compra.
   Agregando entre clientes -> projeção de CURTO PRAZO da base atual.
2. Estimar a taxa de TURNOVER (churn) de clientes.
   Se o turnover é significativo, ELIMINAR uma porção da receita estimada.
3. Projetar QUANTOS clientes NOVOS a empresa atrairá e quanta receita eles contribuirão.
4. Projeção bottom-up = receita de clientes novos + receita de clientes existentes (líquida de churn)
```
(Nota 5: para valuation via estatísticas de aquisição e retenção de clientes, ver McCarthy, Fader e
Hardie, "Valuing Subscription-Based Businesses Using Publicly Disclosed Customer Data", *Journal of
Marketing*, 2018.)

### A ressalva geral
*"Regardless of the method, forecasting revenues over long time periods is imprecise. Customer
preferences, technologies, and corporate strategies change."* Portanto: **reavalie constantemente se a
projeção corrente é consistente com (a) a dinâmica da indústria, (b) o posicionamento competitivo e (c) a
evidência histórica sobre crescimento corporativo** (Cap 9). **Se falta confiança na projeção de receita,
use MÚLTIPLOS CENÁRIOS para modelar a incerteza** — isso não só delimita a projeção, mas também ajuda a
administração a tomar decisões melhores.

**Onde encaixa.** `projecao-e-cenarios` (que já tem drivers de receita e cenários).
**Veredito.** `ADICIONAR-ALTA` — a skill tem "drivers de receita"; o que é aditivo e substancial:
(a) a **dicotomia formal top-down vs. bottom-up com a instrução de usar AMBOS para delimitar a faixa** —
isso é diretamente aplicável e é o teste de credibilidade que o comprador aplica ao plano de negócio do
vendedor: se top-down (mercado × share) e bottom-up (clientes atuais − churn + novos) não convergem, a
projeção não se sustenta. Em sell-side é obrigatório rodar os dois **antes** de o comprador rodar;
(b) a **decomposição bottom-up em 3 termos (base atual, churn, novos)** é a estrutura correta para alvo
com receita recorrente/contratual — SaaS, serviço B2B, manutenção, mensalidade escolar, plano de saúde,
academia, segurança patrimonial, TI gerenciada — que é fatia crescente do mid-market brasileiro;
(c) a **metodologia de analogia em 6 passos** para produto/mercado novo é ferramenta pronta para o alvo
que tem uma linha nova sem histórico (situação comum e onde o vendedor pede valor por opcionalidade);
(d) a instrução de que **top-down de curto prazo deve se ancorar em intenções e capacidades ANUNCIADAS**
(plano de abertura de unidades, capacidade instalada, contratos assinados, backlog, carteira) — no
Brasil o backlog/carteira assinada é a evidência mais forte e mais subutilizada no memorando de informação;
(e) a granularidade por segmento (o case Costco: doméstico/internacional/membership/acessórios) porque os
drivers físicos diferem entre segmentos — ponte natural para o Cap 19.
**Página.** p397–400, notas 4–5 p425–426.

## 13.7 Passo 3 — Projeção da DRE: o processo de três passos por linha, e por que ÍNDICE e não taxa de crescimento

**O que é.** Para projetar qualquer linha:
```
PASSO A - Decidir QUAL RELAÇÃO ECONÔMICA dirige a linha.
          Para a maioria, o vínculo é direto com a RECEITA.
          Algumas linhas são economicamente ligadas a um ATIVO ou PASSIVO específico:
          ex.: receita financeira é gerada por caixa e aplicações -> projetar sobre caixa e aplicações.

PASSO B - Estimar o ÍNDICE de projeção.
          Calcular os valores históricos do índice, seguidos das estimativas para cada
          período projetado.
          TÁTICA DE CONSTRUÇÃO: inicialmente iguale o índice projetado ao valor do ANO ANTERIOR,
          só para fazer o modelo FUNCIONAR. "A working model should be your priority."
          Depois que o modelo inteiro está completo, volte à aba de projeção
          e insira suas MELHORES estimativas.

PASSO C - Multiplicar o índice projetado pela estimativa do seu DRIVER.
          Como a maioria das linhas é dirigida pela receita, a maioria dos índices
          (ex.: CPV/receita) se aplica à receita futura estimada.
          "This is why a good revenue forecast is critical. Any error in the revenue
          forecast will be carried through the entire model."
```
Exemplo trabalhado: CPV histórico = 37,5% da receita → índice projetado inicial = 37,5% →
37,5% × US$ 288 MM = US$ 108 MM.

**Por que ÍNDICE e não crescimento — o argumento de flexibilidade.** Koller *não* projeta o CPV
aumentando o custo do ano anterior em 20% (a mesma taxa da receita). Embora leve à **mesma resposta
inicial**, isso **reduz a flexibilidade**: usando um índice de projeção em vez de taxa de crescimento,
é possível (a) **variar a estimativa de receita** e o CPV muda em conjunto, ou (b) **variar o índice de
projeção** (por exemplo, para valorar uma melhoria potencial). Se o CPV tivesse sido aumentado
diretamente, só seria possível variar a taxa de crescimento do CPV.

**Sobre incorporar dado adicional.** Modelos de empresa listada apoiam-se em índices tirados diretamente
das demonstrações. Se você tem acesso a outro dado que melhora a projeção, incorpore. Ex.: valuation
externo de uma transportadora como UPS liga custo de combustível diretamente à receita; um modelo mais
sofisticado ligaria o custo de combustível **ao preço do combustível e ao número de pacotes entregues**.
Mas com cautela: *"While additional data often improves the realism of your model, it will also increase
its complexity. A talented modeler carefully balances realism with simplicity."*

**Despesas operacionais.** Para CPV, despesas comerciais/gerais/administrativas e P&D: projetar com base na
**receita**. Mas antes: **reformatar a DRE para separar corretamente despesas recorrentes de encargos
one-time** (Cap 11), porque a DRE às vezes embute itens não operacionais dentro de despesas operacionais.

**Onde encaixa.** `projecao-e-cenarios`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — dois aditivos com efeito prático imediato: (a) o **argumento de por que
projetar por ÍNDICE e nunca por taxa de crescimento de custo**, que é a diferença entre uma planilha em
que se pode rodar cenário e uma em que não se pode; é erro estrutural comum em modelo mid-market
brasileiro que projeta cada linha de custo com "crescimento de X%"; (b) a **tática de construção** (fixar
todo índice no ano anterior, fazer o modelo rodar de ponta a ponta, e só depois voltar e inserir as
premissas) é uma disciplina de trabalho que evita o padrão de analista que refina premissa antes de o
modelo fechar. Ambos entram em `revisao-de-modelo` como critério e em `projecao-e-cenarios` como método.
**Página.** p400–403.

## 13.8 Depreciação, e as três opções — com a regra de PP&E LÍQUIDO

**O que é.** Três opções para projetar depreciação: (a) % da receita, (b) % do PP&E, ou (c) se você está
dentro da empresa, projeções baseadas em **compras específicas de equipamento e cronogramas de
depreciação**.

**Recomendação e o porquê:** *"Although one can link depreciation to revenue, you will get better
forecasts if you use PP&E as the forecast driver."* Argumento: considere uma empresa que faz um grande
capex a cada poucos anos. Como a depreciação está diretamente ligada a um ativo específico, ela deveria
aumentar **somente após um desembolso**. Se você amarra a depreciação às vendas, ela **crescerá
incorretamente conforme a receita cresce, mesmo quando nenhum capex foi feito.**

**A escolha entre PP&E líquido e bruto — a regra prática:**
```
Projetar depreciação como % do PP&E LÍQUIDO (net), NÃO do bruto.

Idealmente a depreciação seria ligada ao PP&E BRUTO, já que a depreciação da vida de um ativo
(depreciação linear) = PP&E bruto / vida esperada.
MAS ligar ao bruto exige modelar a VIDA do ativo e DAR BAIXA no ativo quando totalmente depreciado.
Implementar isso corretamente é DELICADO: se você esquecer de modelar as baixas,
SUPERESTIMA a depreciação (e consequentemente o seu tax shield) nos anos finais.
```
Se você tem informação interna detalhada sobre os ativos, construa **tabelas formais de depreciação**:
para cada ativo, projete a depreciação usando cronograma, vida útil e valor residual apropriados; para a
depreciação da empresa, combine a depreciação anual de cada ativo.

**Onde encaixa.** `capital-de-giro-e-capex`, `projecao-e-cenarios`.
**Veredito.** `ADICIONAR-ALTA` — a regra "**depreciação sobre PP&E líquido, nunca sobre receita**" com o
argumento do capex lumpy é diretamente aplicável e é erro muito comum: em mid-market brasileiro o capex é
tipicamente lumpy (compra de máquina, expansão de galpão, frota) e projetar depreciação como % da receita
gera um tax shield fictício que cresce sem investimento — inflando o FCL. E a explicação de por que **não**
usar PP&E bruto (exigiria modelar baixas; esquecê-las superestima depreciação e tax shield nos anos
finais) é a justificativa técnica que fecha a escolha. Em sell-side isso importa porque afeta o imposto
projetado, que é linha material.
**Página.** p403–404.

## 13.9 Despesa de juros: use a dívida do ANO ANTERIOR — e por que (circularidade)

**O que é.** Despesa (ou receita) de juros deve ser amarrada **diretamente ao passivo (ou ativo) que a
gera**. O driver apropriado da despesa de juros é a **dívida total**. **Para simplificar a implementação,
use a dívida do ANO ANTERIOR, não a do fim do ano corrente.**

**O motivo — o loop de retroalimentação:**
```
Sobem os custos operacionais
  -> se a empresa usa dívida para necessidades de curto prazo, a dívida total SOBE
     para cobrir o gap de financiamento causado pelo lucro menor
  -> maior dívida faz a DESPESA DE JUROS subir
  -> o lucro cai AINDA MAIS
  -> o lucro reduzido exige MAIS dívida
  -> (loop infinito)

SOLUÇÃO: Despesa de juros do ano t = taxa projetada x DÍVIDA TOTAL DO ANO (t-1)
         "This shortcut will simplify the model and AVOID CIRCULARITY."
```
Exemplo numérico: despesa de juros de 2019 = US$ 15 MM ÷ dívida total de 2018 de US$ 280 MM (US$ 200 MM
curto prazo + US$ 80 MM longo prazo) = **5,4%**. Para 2020: índice projetado (5,35%) × dívida total de
2019 (US$ 258 MM) = **US$ 13,8 MM**. Note que a despesa de juros **cai mesmo com receita subindo**, porque
a dívida encolhe conforme a empresa gera caixa.

Ressalva (nota 6): usando dívida do ano anterior × taxa corrente, **o erro de projeção será maior quando
as variações ano a ano da dívida forem significativas.**

**A neutralidade de valor.** Usar taxas históricas para projetar juros é simples e direto. E **como a
despesa de juros não faz parte do FCL, a escolha de como projetá-la NÃO afeta o valuation** — só o FCL
dirige o valuation; o custo da dívida é modelado como parte do WACC. (Nota 7: num modelo baseado em WACC,
o custo da dívida e seus tax shields estão totalmente incorporados no custo de capital; num modelo APV, o
tax shield de juros é valorado separadamente usando uma projeção de despesa de juros.)

**Quando a estrutura financeira É crítica** para a projeção (ex.: LBO), **divida a dívida em duas
categorias:**
```
DÍVIDA EXISTENTE - até ser amortizada, gera despesa de juros consistente com as
                   TAXAS CONTRATUAIS reportadas nas notas explicativas.
DÍVIDA NOVA      - deve ser paga a TAXAS CORRENTES DE MERCADO, disponíveis em serviço de dados.
                   Calcular a despesa projetada usando um YIELD TO MATURITY para dívida
                   de rating comparável e DURATION similar.
```
(Nota 13: dada a importância da dívida num LBO, modelos de buyout frequentemente contêm uma **aba separada
detalhando juros e amortização de principal por ano, para cada contrato de dívida**.)

**Receita financeira:** estimar do mesmo modo, com base no ativo que a gera. **Cuidado:** receita
financeira pode vir de múltiplos investimentos — caixa excedente, investimentos de curto prazo,
empréstimos a clientes, outros investimentos de longo prazo. Se uma nota detalha a relação histórica entre
receita financeira e os ativos que a geram (e a relação é material), **faça um cálculo separado para cada
ativo**.

**Onde encaixa.** `projecao-e-cenarios`, `revisao-de-modelo`, `custo-de-capital` (a neutralidade).
**Veredito.** `ADICIONAR-ALTA` — três aditivos de alto valor: (a) **usar dívida t−1 para matar a
circularidade**, com a explicação completa do loop — é a causa nº 1 de referência circular e de planilha
que não converge em modelo mid-market brasileiro; (b) a **partição dívida existente (taxa contratual das
notas) vs. dívida nova (taxa de mercado corrente para rating e duration comparáveis)**, que no Brasil é
essencial porque o alvo típico tem dívida legada barata (BNDES, FINAME, Pronampe, crédito subsidiado
agrícola) coexistindo com capital de giro caro — projetar tudo pela taxa média destrói a análise;
(c) a **neutralidade de valor** (juros não estão no FCL, logo a forma de projetá-los não muda o valuation)
é a informação que impede o analista de perder tempo e é um argumento útil quando o comprador contesta a
premissa de juros. A ideia da **aba separada de dívida contrato por contrato** é o padrão correto quando
há discussão de capacidade de alavancagem — que é sempre, em sell-side com fundo na mesa.
**Página.** p406–407, notas 6–7 p426, nota 13 p427.

## 13.10 Tributos na projeção: NUNCA como % do LAIR

**O que é.** Regra imperativa: *"Do NOT forecast the provision for income taxes as a percentage of
earnings before taxes."* Consequência de fazê-lo: **ROIC e FCL nos anos projetados mudariam
inadvertidamente conforme a alavancagem e a receita não operacional mudam** — ou seja, o valuation
passaria a depender da estrutura de capital pela porta dos fundos.

O procedimento correto:
```
1. Projetar TRIBUTOS OPERACIONAIS sobre o EBITA:
     Tributos operacionais = EBITA projetado x ALÍQUOTA OPERACIONAL
   NÃO usar a alíquota ESTATUTÁRIA para projetar tributos operacionais.
   Razão: muitas empresas pagam abaixo da alíquota estatutária local por causa de
   alíquotas estrangeiras baixas e de CRÉDITOS FISCAIS OPERACIONAIS.
   "Failure to recognize operating credits can cause errors in forecasts and an
    incorrect valuation."

   RESSALVA CRÍTICA: se você usa alíquotas históricas para projetar as futuras,
   você IMPLICITAMENTE assume que esses incentivos especiais CRESCERÃO EM LINHA COM O EBITA.
   Se isso NÃO for o caso -> tributar o EBITA à alíquota MARGINAL
                            e projetar os créditos fiscais UM POR UM.

2. Projetar os TRIBUTOS RELACIONADOS A CONTAS NÃO OPERACIONAIS.
   Não fazem parte do FCL, mas uma boa projeção dá insight sobre lucro líquido futuro
   e necessidade de caixa.
   Para CADA linha entre o EBITA e o LAIR, calcular os tributos MARGINAIS relativos àquele item.
   Se a empresa não reporta a alíquota marginal de cada item, usar a alíquota ESTATUTÁRIA do país.
   Se as alíquotas marginais DIFEREM entre itens não operacionais -> projetar linha por linha.
   [Exemplo: despesa não operacional líquida acumulada de US$ 7,3 MM x alíquota marginal de 24%]

3. TRIBUTOS REPORTADOS na DRE projetada = Tributos operacionais + Tributos não operacionais
   [Exemplo: US$ 24,0 MM + (-US$ 1,8 MM) = US$ 22,2 MM]
   "calculated such that future values of FCF and ROIC will not change with leverage."
```

**Onde encaixa.** `impostos-e-prejuizos-fiscais`, `projecao-e-cenarios`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — regra dura, curta e com efeito direto no valor. Erro extremamente comum
em modelo mid-market brasileiro: projetar "IR/CS = 34% × LAIR", o que contamina o FCL com o efeito da
alavancagem e faz o ROIC projetado responder a dívida. A ressalva sobre **incentivos fiscais crescerem ou
não em linha com o EBITA** é especialmente relevante no Brasil, onde os incentivos são frequentemente
(a) **de valor fixo ou com teto** (crédito presumido de ICMS por convênio, benefício SUDENE/SUDAM com
prazo de 10 anos, Lei do Bem limitada ao dispêndio em P&D, PERSE, REIDI) e (b) **com data de vencimento**
— logo a hipótese implícita de que crescem com o EBITA é geralmente **falsa**, e a instrução de Koller
(tributar o EBITA à marginal e projetar os créditos um por um, com prazo) é exatamente o procedimento
correto. Isso é matéria de negociação: incentivo que expira é risco que o comprador precifica, e ter o
cronograma explícito no modelo é vantagem do vendedor.
**Página.** p407–409, nota 8 p426.

## 13.11 Passo 4 — Balanço: STOCK e não FLOW (com a evidência)

**O que é.** Questão de método: projetar as linhas do balanço **diretamente (em estoques/saldos)** ou
**indiretamente (em fluxos/variações)**? Exemplo: a abordagem de **stock** projeta o saldo final de
recebíveis como função da **receita**; a abordagem de **flow** projeta a **variação** de recebíveis como
função do **crescimento** da receita.

**Recomendação: STOCK.** Razão: *"The relationship between the balance sheet accounts and revenues (or
other volume measures) is more stable than that between balance sheet changes and changes in revenues."*

**A evidência numérica (Exhibit 13.9):**
```
Recebíveis / Receita                     -> permanece numa banda estreita: 9,2% a 10,1%
Variação de recebíveis / Variação de receita -> vai de -1% a 16%  ("too volatile to be insightful")
```

**Regra de escopo do passo 4:** projetar aqui as linhas de **capital investido e ativos não operacionais**.
**NÃO** projetar caixa excedente nem fontes de financiamento (dívida e patrimônio) — esses exigem
tratamento especial no passo 5.

As três linhas operacionais primárias: **capital de giro operacional, capital de longo prazo (PP&E
líquido) e intangíveis relacionados a aquisições**. As não operacionais incluem ativos não operacionais,
pensões e tributos diferidos.

**Onde encaixa.** `projecao-e-cenarios`, `capital-de-giro-e-capex`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — **stock vs. flow** com a evidência numérica é aditivo, curto e resolve um
erro estrutural real. Muita planilha mid-market brasileira projeta "Δ capital de giro = X% do Δ receita",
que é precisamente a abordagem instável que Koller rejeita, e que produz NCG projetada absurda quando o
crescimento oscila (e no Brasil oscila muito). A banda 9,2–10,1% vs. −1% a 16% é a demonstração que
convence o analista em uma linha.
**Página.** p409–410.

## 13.12 Capital de giro operacional na projeção — e a exceção do CPV

**O que é.**
```
Projetar a maioria das linhas de capital de giro operacional como % DA RECEITA ou em DIAS DE VENDAS.

EXCEÇÕES POSSÍVEIS: ESTOQUES e FORNECEDORES.
  Como essas duas contas estão economicamente ligadas a PREÇOS DE INSUMO,
  estimá-las como % do CPV (que também está ligado a preços de insumo).

Buscar OUTROS vínculos entre DRE e balanço:
  ex.: SALÁRIOS A PAGAR calculados como % de "compensação e benefícios" (da DRE).

Conversão (nota 9): Dias de vendas = (% da receita) x 365
  ex.: recebíveis = 10% da receita -> 36,5 dias de vendas
       (a empresa cobra seus recebíveis em 36,5 dias em média)
```
Exemplo do livro: caixa operacional a **7,6 dias de vendas**, estoque a **182,5 dias de CPV**,
fornecedores a **81,1 dias de CPV**.

**Por que projetar em DIAS — a razão prática:** *"We forecast in days for the added benefit of tying
forecasts more closely to the velocity of operating activities. For instance, if management announces its
intention to reduce its inventory holding period from 180 days to 120 days, it is possible to compute
changes in value by adjusting the forecast directly."*

Simplificação admitida (nota 10): *"As a practical matter, we sometimes simplify the forecast model by
projecting each working-capital item using revenues. The distinction is material only when price is
expected to deviate significantly from cost per unit."*

**Onde encaixa.** `capital-de-giro-e-capex`, `projecao-e-cenarios`.
**Veredito.** `ADICIONAR-MÉDIA` — dias e PMR/PME/PMP já estão na skill. Aditivo: (a) a regra da **exceção
do CPV para estoque e fornecedores** com o critério de materialidade explícito (só importa quando o preço
deve divergir significativamente do custo por unidade) — no Brasil isso importa em anos de repasse
incompleto de custo (2021–2022) e em alvo com insumo dolarizado e receita em reais; (b) o vínculo
**salários a pagar como % da folha da DRE** em vez de % da receita, que é o correto para alvo intensivo em
mão de obra (serviço, saúde, segurança, limpeza, logística — grande parte do mid-market brasileiro), onde
salários/encargos/férias/13º provisionados são parcela material da NCG; (c) o argumento de que **projetar
em dias permite valorar diretamente uma promessa de gestão** ("vamos reduzir estoque de 180 para 120
dias") — que é exatamente como se constrói e se precifica uma iniciativa de melhoria no equity story
sell-side.
**Página.** p410–411, notas 9–10 p426.

## 13.13 PP&E: os três passos, e por que NÃO projetar capex como % da receita

**O que é.** Consistente com o argumento stock-vs-flow, **PP&E líquido deve ser projetado como % da
receita**. A alternativa comum — projetar **capex** como % da receita — *"too easily leads to unintended
increases or decreases in capital turnover (the ratio of PP&E to revenues)."* Ao longo de períodos longos,
o índice PP&E líquido/receita das empresas tende a ser **bastante estável**.

```
OS TRÊS PASSOS PARA PP&E:
1. Projetar PP&E LÍQUIDO como % da RECEITA.
2. Projetar DEPRECIAÇÃO, tipicamente como % do PP&E bruto ou líquido (ver 13.8: usar LÍQUIDO).
3. Calcular CAPEX = aumento projetado do PP&E líquido + depreciação.
```
Exemplo: PP&E líquido em 2019 = 104,2% da receita; mantendo o índice constante para 2020 → PP&E líquido de
US$ 300 MM; capex = (PP&E líq. 2020 − PP&E líq. 2019) + depreciação de 2020.

**Armadilha explícita:** *"For companies with low growth rates and projected improvements in capital
efficiency, this methodology may lead to NEGATIVE capital expenditures (implying asset sales). Although
positive cash flows generated by equipment sales are possible, they are unlikely. In these cases, make
sure to assess the resulting cash flow carefully."*

(Nota 11: algumas empresas, como refinarias, reportam número de unidades. Nesses casos, considere usar
**número de unidades em vez de receita** para projetar compras de equipamento.)

**Onde encaixa.** `capital-de-giro-e-capex`, `projecao-e-cenarios`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — a inversão de método (**projetar PP&E líquido e DERIVAR o capex**, em vez
de projetar capex) é aditiva, importante e contra-intuitiva para o analista. A prática mid-market
brasileira é projetar "capex = X% da receita" (ou "capex = depreciação"), o que solta o giro do capital e
permite crescer receita sem investir — a inconsistência que o comprador vai encontrar. O método de Koller
**força a consistência entre crescimento e investimento**, que é o núcleo da relação g/ROIC que a skill
`projecao-e-cenarios` já usa no terminal, mas que precisa valer no período explícito também. E a armadilha
do **capex negativo** é uma checagem de sanidade concreta para `revisao-de-modelo`. A nota 11 (usar
unidades físicas em vez de receita) conecta com 13.6 e é aplicável a alvo industrial e agro brasileiro
(toneladas, hectares, cabeças, m³).
**Página.** p412–413, nota 11 p426.

## 13.14 Goodwill e aquisições na projeção: a recomendação de ZERAR

**O que é.** Recomendação padrão de Koller: **para a maioria das empresas, NÃO modelar aquisições
potenciais explicitamente** — fixar o crescimento de receita por novas aquisições em **zero** e manter
goodwill e intangíveis adquiridos **constantes no nível atual**.

**Justificativa em duas pernas:**
1. **Evidência empírica** de que a aquisição típica **não cria valor** (qualquer sinergia é transferida
   ao alvo via prêmios altos). Como adicionar um investimento de **VPL zero não aumenta o valor da
   empresa**, projetar aquisições é desnecessário.
2. **O risco de premissa oculta:** *"by forecasting acquired growth in combination with the company's
   current financial results, you make implicit (and often hidden) assumptions about the present value of
   acquisitions."* Se o índice projetado de goodwill sobre receita adquirida implica **VPL positivo** para
   o crescimento adquirido, **aumentar a taxa de crescimento por aquisição pode elevar dramaticamente o
   valuation resultante — mesmo quando bons negócios são difíceis de achar.**

**Se você decidir projetar aquisições, a mecânica:**
```
1. Avaliar que PROPORÇÃO do crescimento futuro de receita virá de aquisições.
   Ex.: empresa com US$ 100 MM de receita anuncia intenção de crescer 10% ao ano
        - 5% organicamente e 5% via aquisição.
2. Medir os índices HISTÓRICOS de goodwill e intangíveis adquiridos sobre RECEITA ADQUIRIDA,
   e aplicar esses índices à receita adquirida projetada.
   Ex.: historicamente a empresa adiciona US$ 3 de goodwill e intangíveis
        para cada US$ 1 de receita adquirida.
        US$ 5 MM de crescimento adquirido x 3 = US$ 15 MM de aumento em goodwill/intangíveis.
3. REALITY CHECK OBRIGATÓRIO: variar o crescimento adquirido e observar as mudanças
   resultantes no valor da empresa. Confirmar que os resultados são consistentes com
   a performance passada da empresa em aquisições e com a DIFICULDADE de criar valor via aquisição.
```
(Nota 12: esta seção se refere **apenas** a intangíveis **adquiridos**. Investimentos **internos** em
intangíveis, como software capitalizado e contratos de venda comprados, devem ser projetados com a
metodologia usada para capex e PP&E.)

**Onde encaixa.** `projecao-e-cenarios`, `triangulacao-e-faixa`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — em sell-side mid-market brasileiro isso é doutrina de defesa **e** de
ataque. **Defesa:** quando o alvo é um consolidador e o vendedor quer valor pelo "plano de aquisições",
Koller dá o argumento rigoroso de que crescimento adquirido é VPL zero e não deve entrar no valuation do
alvo — o vendedor não recebe pelo M&A que não fez. **Ataque:** quando o comprador estratégico avalia o
alvo, o alvo *é* a aquisição, e o mesmo argumento diz que **o prêmio pago é onde o valor vai** — combina
com o dado de CPG do Cap 11 (11.6, gap de 17 p.p. entre ROIC com e sem goodwill). O item 3 (reality check
variando o crescimento adquirido) é checagem concreta para `revisao-de-modelo`. E a distinção da nota 12
(intangível interno se projeta como capex) é a regra correta para alvo de software brasileiro.
**Página.** p413–414, nota 12 p427.

## 13.15 Ativos não operacionais, pensões e diferidos na projeção: a regra de "não descontar"

**O que é.** Princípio geral: como **muitos itens não operacionais são valorados por métodos DIFERENTES de
DCF** (Cap 16), qualquer projeção desses itens serve primordialmente para **planejamento financeiro e
gestão de caixa, não para o valuation empresarial**.

**Exemplo canônico — pensão a descoberto.** A administração anuncia intenção de reduzir o déficit em 50%
nos próximos cinco anos. Para valorar a pensão a descoberto, **NÃO desconte as saídas projetadas dos
próximos cinco anos.** Em vez disso, **use a avaliação atuarial corrente do déficit, que consta na nota de
pensões.** *"The rate of reduction will have no valuation implications but will affect the ability to pay
dividends or may require additional financing. To this end, model a reasonable time frame for eliminating
pension shortfalls."*

**Coligadas e equity investments — cautela extrema.** *"We are extremely cautious about forecasting (and
valuing) nonconsolidated subsidiaries and other equity investments. Valuations should be based on
assessing the investments currently owned, not on discounting the forecast changes in their book values
and/or their corresponding income."* Se uma projeção é necessária para planejamento, lembre que
(a) **resultado de equivalência é frequentemente NÃO CAIXA** e (b) **ativos não operacionais crescem de
forma IRREGULAR (lumpy), sem relação com a receita da empresa.** Para projetar equity investments,
apoie-se em **precedente histórico** para determinar o nível apropriado de crescimento.

**Tributos diferidos.** Antes, surgiam primordialmente de diferenças em cronogramas de depreciação. Hoje
surgem por muitas razões: ajustes fiscais de pensões, remuneração baseada em ações, amortização de
intangíveis adquiridos e receitas diferidas. Método:
```
Valuation SOFISTICADO que exige projeção extremamente detalhada:
   -> projetar tributos diferidos LINHA POR LINHA, amarrando cada tributo ao seu driver apropriado.

Na MAIORIA das situações (resultado razoável):
   -> projetar tributos diferidos operacionais calculando a PROPORÇÃO AGREGADA
      de tributos que provavelmente será diferida.
   Ex.: tributos operacionais estimados em 23,4% do EBITA e historicamente a empresa
        conseguia diferir UM QUINTO dos tributos operacionais pagos
        -> assumir que pode diferir um quinto de 23,4% adiante.
   Os passivos fiscais diferidos operacionais então aumentam no valor diferido.
```

**Onde encaixa.** `impostos-e-prejuizos-fiscais`, `projecao-e-cenarios`, `reorganizacao-contabil`.
**Veredito.** `ADICIONAR-MÉDIA` — pensão de benefício definido é `IRRELEVANTE-MIDMARKET` (raríssimo em
empresa fechada brasileira de porte médio), **mas o PRINCÍPIO transfere-se integralmente e com alto
valor**: para uma obrigação cujo valor já é conhecido/mensurado (contingência trabalhista e tributária
provisionada, parcelamento tributário — REFIS/PERT/Transação Tributária, passivo de FGTS, débito
previdenciário), **não se desconta o cronograma de pagamento como se fosse fluxo; usa-se o valor atual da
obrigação como equivalente de dívida no bridge, e o cronograma serve apenas para checar a capacidade de
pagar dividendos ou a necessidade de financiamento.** Isso é exatamente o tratamento correto do
parcelamento tributário no CFDF — item presente em quase todo alvo mid-market brasileiro e frequentemente
mal tratado. A regra dos coligados ("avalie o que se possui hoje, não desconte a variação projetada do
valor contábil") reforça 11.14. A regra prática da **proporção agregada diferida** (a "fração de um
quinto") é o mesmo dispositivo da média de 5 anos do Cap 11 e é o atalho utilizável.
**Página.** p414–415.

## 13.16 Passo 5 — Fechar o balanço: clean surplus e o "plug"

**O que é.** Duas ferramentas contábeis.

**(a) Clean surplus accounting** (a relação que projeta o PL):
```
PL final = PL inicial
         + Lucro líquido do período
         - Dividendos
         + Novo capital emitido, líquido de recompras
```
Exemplo: PL 2019 = US$ 182 MM + lucro líquido 2020 de US$ 72,7 MM − dividendos (payout histórico de
**37,3%** × lucro líquido = US$ 27,1 MM) + emissão líquida (zero) = **PL 2020 de US$ 227,6 MM**.

**(b) O "plug".** Nesse ponto restam quatro linhas: **caixa excedente, dívida de curto prazo, dívida de
longo prazo e uma conta nova chamada "dívida recém-emitida"**. Alguma combinação delas tem de fazer o
balanço fechar — por isso são chamadas de "plug". Em modelos simples, a dívida existente permanece
constante ou é amortizada conforme cronograma contratual. Procedimento:
```
1. Manter constantes: dívida de curto prazo, dívida de longo prazo e capital social.
2. Somar o ATIVO TOTAL, EXCLUINDO caixa excedente.
3. Somar PASSIVO + PL, EXCLUINDO dívida recém-emitida.
4. Comparar:
   - Se (Passivo + PL, ex-nova dívida) > (Ativo, ex-caixa excedente)
        -> DÍVIDA RECÉM-EMITIDA = ZERO
        -> CAIXA EXCEDENTE = a diferença
   - Se (Ativo, ex-caixa excedente) > (Passivo + PL, ex-nova dívida)
        -> CAIXA EXCEDENTE = ZERO
        -> DÍVIDA RECÉM-EMITIDA (ou dívida de curto prazo) = a diferença
5. Implementar com a função SE (IF) da planilha.
```
Exemplo numérico do livro: ativos ex-caixa excedente = 6 + 54 + 300 + 100 = **US$ 460 MM**;
passivo + PL ex-nova dívida = 24 + 178 + 80 + 227,6 = **US$ 509,6 MM**. Como passivo+PL > ativo → nova
dívida = zero e **caixa excedente = US$ 49,6 MM**, fechando o ativo em US$ 509,6 MM.

**Onde encaixa.** `projecao-e-cenarios`, `revisao-de-modelo`.
**Veredito.** `ADICIONAR-ALTA` — a mecânica do **plug com função SE de dois lados** é exatamente a peça
que falta na maioria dos modelos mid-market brasileiros, que **não fecham balanço projetado nenhum** — e
sem balanço projetado não há ROIC projetado, não há checagem de consistência, e não há como demonstrar que
a projeção é financiável. O clean surplus é a ligação DRE→balanço que o Cap 13 exige (aba 2, regra "DRE
ligada ao balanço via lucros acumulados"). Deve entrar como requisito estrutural em `revisao-de-modelo`:
**se a planilha não tem balanço projetado que fecha, ela não é auditável.**
**Página.** p415–417.

## 13.17 O elo entre estrutura de capital projetada e valuation — e o teste de robustez

**O que é.** Efeito colateral previsível de usar caixa excedente e nova dívida como plug: *"as growth
drops, newly issued debt will drop to zero, and excess cash will become very large."* (Nota 14: sempre que
o **ROIC é maior que o crescimento de receita**, a empresa gera fluxo de caixa operacional — a taxa de
investimento é negativa. Se dividendos ou recompras não forem aumentados para desaguar o caixa, a dívida
cai e/ou o caixa excedente acumula.)

**Mas isso importa?** Num DCF empresarial que desconta pelo WACC, **NÃO**: caixa excedente e dívida não
fazem parte do FCL, logo **não afetam o valuation empresarial**. A estrutura de capital afeta o DCF
empresarial **somente através do WACC**. Portanto **só um ajuste no WACC muda o valuation.** (Nota 15: no
modelo APV a projeção de dívida **afeta** o valuation, porque os tax shields de juros são calculados ano a
ano com base no montante de dívida, na taxa de juros e na alíquota. Modelos que descontam por um WACC
**constante** assumem implicitamente que a dívida/valor **nunca muda**, de modo que as projeções de balanço
são ignoradas.)

**Como alinhar o balanço com a estrutura de capital implícita no WACC:** *"adjust the dividend payout
ratio or amount of net share repurchases."* Ao aumentar o payout, os lucros acumulados caem, e isso deve
fazer o caixa excedente cair também.

**O TESTE DE ROBUSTEZ — item de auditoria de primeira ordem:**
```
Variando o payout ratio (dividendos e recompras),
ROIC, FCL e VALOR **NÃO DEVEM MUDAR**.
Se mudarem -> o modelo de FCL está ERRADO.
```
E a versão avançada (com a advertência de custo): para modelos complexos, determine a **dívida líquida**
(dívida total menos caixa excedente) aplicando o **índice-alvo de dívida líquida sobre valor modelado no
WACC** em cada ponto do tempo; então, usando o índice-alvo dívida/valor, resolva para o **payout
necessário**. Mas para isso é preciso **fazer um valuation em cada ano projetado e iterar para trás** —
*"a time-consuming process for a feature that will not affect the final valuation."* (Nota 16: para
valorar Costco no Apêndice H, Koller modelou um índice de alavancagem constante ano a ano e iterou para
trás. A iteração **não é necessária** para valorar uma empresa em geral, mas **é necessária para garantir
que o DCF empresarial amarre com outras metodologias**, como modelos de fluxo de caixa ao acionista.)

**Onde encaixa.** `revisao-de-modelo` (o teste), `custo-de-capital` (a estrutura-alvo),
`projecao-e-cenarios`.
**Veredito.** `ADICIONAR-ALTA` — o **teste de invariância ao payout** é um dos testes de auditoria mais
poderosos e mais baratos que existem: mude o payout na planilha; se o valor mudar, há erro estrutural
(tipicamente porque juros ou tributos vazaram para dentro do FCL, ou porque o FCL foi projetado
diretamente em vez de derivado). Deve entrar em `revisao-de-modelo` como teste obrigatório. O ponto de que
**a estrutura de capital só afeta o DCF via WACC** é a informação que impede a discussão circular
"mas o alvo vai desalavancar, então o valor muda" — não muda, a menos que o WACC mude, e aí a discussão é
sobre estrutura-alvo (ver Cap 15). A nota 15 (WACC constante = premissa implícita de D/V constante) é
teoricamente importante e conecta com o WACC variável no tempo do Cap 15. A iteração para amarrar com
fluxo ao acionista é `ADICIONAR-MÉDIA` — vale saber que existe e que é o que garante consistência entre
métodos, mas o custo-benefício em mid-market raramente justifica.
**Página.** p417–418, notas 14–16 p427.

## 13.18 Passo 6 — Os TRÊS padrões admissíveis de ROIC futuro

**O que é.** Calcule ROIC e FCL para cada ano projetado — trivial se você já os calculou no histórico:
*"merely copy the two calculations from historical financials to projected financials."*

**A regra de sanidade:** para empresas que criam valor, os ROICs futuros devem se encaixar em **um de três
padrões gerais:**
```
PADRÃO 1 - Permanecer PERTO DOS NÍVEIS ATUAIS
           -> quando a empresa tem uma vantagem competitiva sustentável DISTINGUÍVEL.
PADRÃO 2 - Convergir para a MEDIANA DA INDÚSTRIA ou DA ECONOMIA.
PADRÃO 3 - Convergir para o CUSTO DE CAPITAL.

"Think through the economics of the business to decide what is appropriate."
```
(Referência cruzada: tendências de longo prazo de ROIC no Cap 8.)

**Onde encaixa.** `projecao-e-cenarios`, `diagnostico-de-roic` (CAP — competitive advantage period),
`revisao-de-modelo`, `valor-terminal`.
**Veredito.** `ADICIONAR-ALTA` — os **três padrões admissíveis** são um filtro de sanidade curto e
decisivo, e amarram diretamente com o CAP que `diagnostico-de-roic` já tem. É o teste que reprova o plano
de negócio típico de vendedor familiar brasileiro, no qual o ROIC **sobe indefinidamente** — padrão que
não está na lista de três e que portanto exige justificativa de vantagem competitiva que quase nunca
existe. E do lado sell-side, é o que permite defender o Padrão 1 quando há vantagem real e demonstrável
(licença, concessão, marca regional, ativo insubstituível, custo de troca, densidade de rede), em vez de
aceitar por default a convergência ao WACC que o comprador vai propor. A escolha entre os três padrões é,
na prática, **a decisão de valor mais importante do modelo depois da receita**.
**Página.** p418.

## 13.19 Forecast avançado 1 — drivers operacionais NÃO financeiros na projeção

**O que é.** Em indústrias em que **preços estão mudando** ou **tecnologia está avançando**, as projeções
devem incorporar índices **não financeiros**, como volume e produtividade.

**Case aéreas (início dos anos 2000).** Tarifas que exigiam pernoite de sábado e compra antecipada
desapareceram com a intensificação da concorrência de low-cost. As companhias de rede não conseguiam mais
distinguir o viajante de negócios — sua principal fonte de lucro — do viajante de lazer. **Conforme o
preço médio caía, os custos subiam como percentual das vendas. Mas as aéreas estavam realmente ficando
mais caras?** (Nota 17: a Spirit dedica percentual **maior** de receita a mão de obra que a American;
**em custo por assento-milha, no entanto, a American é a mais cara das duas.**) *"To forecast changes
more accurately, it is necessary to SEPARATE PRICE FROM VOLUME (as measured by seat-miles). Then, instead
of forecasting costs as a percentage of revenues, forecast costs as a function of expected QUANTITY."*

**Mesmo conceito para avanço tecnológico:** em vez de estimar mão de obra como % da receita, projete
**unidades por empregado** e **salário médio por empregado**. Separar esses dois drivers do custo de mão
de obra permite **modelar uma relação direta entre ganhos de produtividade da nova tecnologia e a mudança
estimada em unidades por empregado.**

**Onde encaixa.** `projecao-e-cenarios`, `diagnostico-de-roic`.
**Veredito.** `ADICIONAR-ALTA` — é a contraparte projetiva do 12.6 (drivers não financeiros na análise
histórica) e fecha o ciclo: se a análise histórica foi decomposta em preço × quantidade × produtividade, a
projeção tem de ser feita nas mesmas unidades. Consequência prática decisiva no Brasil: **em ambiente de
custo de insumo volátil e repasse parcial, projetar custo como % da receita esconde exatamente o
fenômeno econômico** — o alvo parece ficar mais eficiente quando o preço sobe e menos eficiente quando o
preço cai, sem que nada tenha mudado na operação. Aplica-se de forma imediata a proteína, grãos, açúcar,
combustível, aço, embalagem, energia, frete. E a técnica de projetar mão de obra como
`unidades/empregado × salário/empregado` é a única forma correta de modelar ganho de produtividade e
dissídio separadamente — ambos materiais e ambos negociados no Brasil (dissídio anual por convenção
coletiva).
**Página.** p419.

## 13.20 Forecast avançado 2 — custo fixo vs. variável: "quase tudo é variável"

**O que é.** Posição de Koller, contra-intuitiva e importante:
```
Ao valorar um PROJETO PEQUENO -> distinguir custo fixo (incorrido uma vez para criar a
   infraestrutura básica) de custo variável (correlacionado com volume) É importante.
   Ao valorar um projeto individual, SOMENTE os custos variáveis devem aumentar
   conforme a receita cresce.

Na escala da MAIORIA DAS EMPRESAS, a distinção entre fixo e variável é frequentemente
   IMATERIAL, porque QUASE TODO custo é variável.
```
**O argumento com o exemplo da torre de celular:** apesar da percepção comum de que a torre é custo fixo,
isso só é verdade **para um dado número de assinantes**. Conforme os assinantes crescem além de certo
limite, **novas torres têm de ser adicionadas, mesmo numa área com cobertura preexistente.** (E: uma
empresa pequena adicionando 1.000 clientes alavanca economias de escala mais do que uma grande adicionando
100.000.) **O que é custo fixo no curto prazo, para pequenos incrementos de atividade, torna-se variável
no longo prazo mesmo a taxas de crescimento razoáveis** — *"10 percent annual growth doubles the size of a
company in about seven years."* Como valuation corporativo é sobre lucratividade e crescimento de **longo
prazo**, **quase todo custo deve ser tratado como VARIÁVEL.**

**A exceção, com ressalva:** quando um ativo é **verdadeiramente escalável** (software, app), seu custo de
desenvolvimento deve ser tratado como custo **fixo**. *"Be careful, however. Many technologies, such as
computer software, quickly become obsolete, requiring new incremental expenditures for the company to
remain competitive. In this case, a cost deemed fixed actually requires repeated cash outflows, just not
in traditional ways."*

**Onde encaixa.** `projecao-e-cenarios`, `qualidade-de-resultados`.
**Veredito.** `ADICIONAR-ALTA` — é doutrina anti-otimismo de alto valor no sell-side brasileiro, e vale
tanto na defesa quanto no ataque. **Contra o excesso de otimismo:** o plano de negócio do vendedor
tipicamente assume alavancagem operacional infinita — "a estrutura já está montada, o crescimento cai
direto na margem" — e Koller dá o argumento rigoroso de que no horizonte de valuation isso é falso
(10% a.a. dobra a empresa em 7 anos; a capacidade tem degraus). **A favor do vendedor:** quando existe
capacidade ociosa **real e documentável** (segundo turno disponível, galpão com área livre, linha
subutilizada, sistema já licenciado), a alavancagem operacional de curto prazo é legítima e vale valor —
mas tem de ser quantificada com o degrau explícito (até que volume, e qual o capex do próximo degrau).
Colocar isso na skill converte uma discussão retórica em uma tabela de capacidade. A ressalva sobre
software que obsoleta é a resposta correta ao alvo de tecnologia que apresenta desenvolvimento como
investimento único.
**Página.** p419–420.

## 13.21 Forecast avançado 3 — Inflação: nominal, e a fórmula de extração da curva

**O que é.** Recomendação (do Cap 10): projeções de demonstrações **e** custo de capital estimados em
**unidades monetárias NOMINAIS** (com inflação), não reais. Para manter consistência, **a projeção nominal
e o custo de capital nominal têm de refletir a MESMA taxa de inflação geral esperada** — e a inflação
embutida na projeção **tem de ser derivada da inflação implícita no custo de capital**.

```
Quando possível, derive a inflação esperada da ESTRUTURA A TERMO das taxas de títulos públicos.
A taxa nominal do título público reflete a demanda do investidor por retorno REAL
mais um prêmio pela inflação ESPERADA.

Inflação esperada = (1 + taxa NOMINAL) / (1 + taxa REAL) - 1
```
**Como achar a taxa real:** muitos países (EUA, Reino Unido, Japão) emitem **títulos indexados à
inflação** (ILBs) — o título protege contra inflação corrigindo cupons e principal pelo índice de preços
ao consumidor. Consequentemente, **o yield to maturity de um ILB é a expectativa do mercado para a taxa de
juros REAL ao longo da vida do título.**

Exemplo (março de 2019): yield do Treasury de 10 anos = **2,57%**; yield do TIPS de 10 anos = **0,66%** →
inflação esperada = 1,0257/1,0066 − 1 = **1,90% ao ano** pelos próximos dez anos. Observação de Koller:
diferentemente de décadas anteriores, quando a taxa real ficava em torno de 2%, **a taxa real foi volátil
nos últimos dez anos, chegando a ficar NEGATIVA em 2012.**

**Vantagem de estabilidade (Exhibit 13.14):** como o TIPS de 10 anos se baseia em inflação de longo prazo,
**a inflação implícita é MUITO mais estável que a variação de 12 meses do índice de preços** — em meados
de 2008 o CPI cresceu mais de 5% com o pico do petróleo, para depois desabar na recessão. Desde 2000,
inflação efetiva e implícita rondaram 2% ao ano.

**Decomposição obrigatória por linha (nota 18) — a regra de coerência:**
```
Linhas individuais podem ter inflação MAIOR ou MENOR que a geral,
mas devem SEMPRE DERIVAR da taxa geral.

Ex.: a projeção de receita deve refletir o crescimento de UNIDADES VENDIDAS
     e o aumento esperado de PREÇO UNITÁRIO.
     O aumento de preço unitário, por sua vez, deve refletir o nível de inflação
     GERALMENTE esperado na economia, MAIS OU MENOS um DIFERENCIAL de inflação
     específico daquela indústria.

Exemplo numérico de Koller:
     inflação geral esperada = 4%
     preços da empresa esperados a 1 ponto percentual MENOS que a inflação geral -> 3% a.a.
     unidades vendidas a 3% a.a.
     -> crescimento de receita projetado = 1,03 x 1,03 - 1 = 6,1% a.a.   (composição, não soma)
```

**Limite de tolerância à inflação alta:** *"Inflation can distort historical analysis, especially when it
exceeds 5 percent annually. In these situations, historical financials should be adjusted to reflect
operating performance independent of inflation."* (Detalhamento no Cap 26.)

**Onde encaixa.** `projecao-e-cenarios`, `custo-de-capital`, `qualidade-de-resultados`.
**Veredito.** `ADICIONAR-ALTA` — é o item **mais diretamente adaptável ao Brasil de todo o capítulo**, com
duas consequências:
(1) **A fórmula de extração da inflação implícita tem análogo brasileiro exato e melhor:** a NTN-B
(Tesouro IPCA+) é o ILB brasileiro, com liquidez e curva completa. Logo:
```
Inflação implícita brasileira (breakeven) = (1 + yield NTN-F ou pré de prazo T) / (1 + yield real NTN-B de prazo T) - 1
```
Isso dá a inflação implícita de mercado por prazo, que é **a taxa que tem de ser usada na projeção
nominal**, para ser consistente com o WACC nominal em BRL que a skill `custo-de-capital` já constrói.
Substitui o hábito de usar "meta de inflação do BC" ou "expectativa do Focus", que não são a inflação
implícita no custo de capital. Isso amarra `projecao-e-cenarios` a `custo-de-capital` de forma rigorosa e
é diferencial técnico real contra a prática de mercado local.
(2) **O gatilho de 5% de inflação é praticamente permanente no Brasil**, o que significa que a instrução
de Koller "ajustar as demonstrações históricas para refletir performance operacional independente da
inflação" **não é exceção aqui, é procedimento padrão** — deflacionar a série histórica de receita e
margem por IPCA/IGP-M antes de analisar tendência é obrigatório, e conecta com o piso de 10 anos de
histórico (12.11): em 10 anos de série brasileira, o crescimento nominal acumulado é dominado pela
inflação e a análise sem deflacionar é inútil.
Além disso, a regra de coerência da nota 18 (**preço da empresa = inflação geral ± diferencial setorial**,
composto multiplicativamente com volume) é o método correto para projetar receita no Brasil e evita o erro
de somar inflação e crescimento real.
**Página.** p420–422, notas 18–19 p427–428.

## 13.22 Exercícios do capítulo como bateria de teste (Review Questions)

**O que é.** Vale registrar porque são testes reutilizáveis: (1) HouseholdCo — R$ 6,2 bi em "passivos
acumulados e outros" sobre US$ 49,0 bi de receita (12,6%); usando a nota 4 do relatório, **explicar por que
projetar 12,6% adiante distorceria a projeção de FCL e como o balanço deve ser reorganizado para
impedir** (resposta: a conta mistura operacional com equivalente de dívida); (2) PartsCo (fornecedor de
peças de US$ 1,2 bi, crescendo 8% a.a. por cinco anos) — projetar cinco anos de DRE com **depreciação como
% do PP&E do ano ANTERIOR** e **juros como % da dívida total do ano ANTERIOR**; (3) projetar os itens
operacionais do balanço, tudo como função da receita **exceto estoque e fornecedores, que são função do
CPV**; (4) projetar os itens de financiamento usando **nova dívida OU caixa excedente como plug**, com
dívida de curto prazo em US$ 90 MM, longo prazo em US$ 210 MM, sem emissão de capital e mesmo payout;
(5) **rodar a 3% de crescimento** — se a empresa gera mais caixa do que precisa, como ajustar o balanço, e
quais alternativas existem para o caixa novo; (6) **rodar a 25% de crescimento** — como isso afeta o
balanço pro forma, e **quais contas ficam notavelmente diferentes**.

**Onde encaixa.** `revisao-de-modelo`, `projecao-e-cenarios`.
**Veredito.** `ADICIONAR-MÉDIA` — os exercícios 5 e 6 são, na verdade, um **par de testes de estresse
estrutural** que vale institucionalizar em `revisao-de-modelo`: rodar o modelo a **crescimento baixo**
(o plug vira caixa excedente crescente — e a pergunta é o que fazer com ele: dividendo, recompra,
amortização) e a **crescimento alto** (o plug vira dívida nova — e a pergunta é se essa dívida é
financiável, o que amarra em 12.10 saúde de crédito). Em sell-side isso é a análise de **financiabilidade
do plano**: se o plano do vendedor exige dívida nova que o alvo não consegue levantar, o plano não é
crível e o comprador vai dizer isso.
**Página.** p422–425.
