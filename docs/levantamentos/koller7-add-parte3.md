# Koller 7ª ed. — O que é ADITIVO ao plugin de valuation da ACTA
## Parte Três (técnicas avançadas) + Parte Cinco (situações especiais)

Faixa avaliada: Caps. 20-27, 35-37, 39 (Cap. 38 Banks pulado por irrelevância).
Referência de página = paginação do arquivo extraído (`<<<PAGE N>>>`), que corresponde
à numeração sequencial do e-book, não à numeração impressa.

Skills existentes (referência para o campo "Onde encaixa"):
1 `fundamentos-koller` · 2 `reorganizacao-contabil` · 3 `qualidade-de-resultados`
4 `diagnostico-de-roic` · 5 `capital-de-giro-e-capex` · 6 `impostos-e-prejuizos-fiscais`
7 `projecao-e-cenarios` · 8 `custo-de-capital` · 9 `valor-terminal`
10 `triangulacao-e-faixa` · 11 `revisao-de-modelo` · 12 `benchmark-bancos`

---

# Capítulo 20 — Taxes (p596-614)

## 20.1 Três alíquotas distintas: estatutária, efetiva e OPERACIONAL

**O que é.** Koller separa explicitamente três taxas e argumenta que só a terceira serve para converter EBITA em NOPAT:

```
Alíquota ESTATUTÁRIA = alíquota legal doméstica sobre um real de lucro
  -> superestima impostos de quem gerencia carga tributária;
     ignora alíquotas de outras jurisdições e créditos fiscais operacionais recorrentes.

Alíquota EFETIVA = Imposto de renda reportado / Lucro antes de impostos
  -> contamina com itens NÃO operacionais (resolução de autuações, write-offs,
     repatriação); é volátil, logo péssima para projetar.

Alíquota OPERACIONAL = a alíquota que a empresa pagaria se
   (a) gerasse SOMENTE resultado operacional e
   (b) fosse financiada 100% por equity.
  = Impostos operacionais / EBITA
```

Racional de por que a base é EBITA e não EBIT nem LAIR: (i) o benefício fiscal dos juros é valioso, mas é capturado no WACC (ou separadamente no APV), nunca no resultado; (ii) amortização de intangíveis normalmente NÃO é dedutível, logo não gera benefício fiscal. Por isso a base tributável analítica é o EBITA.

**Onde encaixa.** Skill 6 `impostos-e-prejuizos-fiscais` — como conceito estruturante (hoje a skill fala de "34%", corrente vs. diferido, mas não formaliza a tríade estatutária/efetiva/operacional nem o racional EBITA).

**Veredito.** `ADICIONAR-ALTA` — a tríade dá ao analista o critério para rejeitar a alíquota efetiva histórica do alvo (quase sempre poluída por autuações, parcelamentos, multas e receitas não operacionais) e construir uma alíquota operacional projetável.

**Página.** p596-599.

---

## 20.2 Método de cálculo da alíquota operacional a partir da nota de reconciliação fiscal

**O que é.** Procedimento em 3 passos, usando a nota explicativa de "reconciliação da alíquota efetiva" (obrigatória no CPC 32 / IAS 12, presente em toda DF auditada brasileira):

```
Passo 1: Impostos estatutários sobre EBITA = EBITA x alíquota estatutária
Passo 2: Percorrer a tabela de reconciliação e classificar CADA linha em
         operacional-recorrente vs. não operacional/one-off.
         Critérios de classificação:
           - recorrência ao longo dos anos (olhar 3-5 exercícios);
           - descrição da conta (pesquisar a natureza se for cifrada);
           - se cresce junto com a operação -> operacional.
Passo 3: Impostos operacionais =
         Impostos estatutários sobre EBITA
         +/- (soma dos ajustes OPERACIONAIS, em MOEDA)

Alíquota operacional = Impostos operacionais / EBITA
```

**Armadilha explícita (nota de rodapé 1, p613) — não somar percentuais direto na alíquota.** Muitos analistas somam os percentuais da tabela de reconciliação diretamente à alíquota estatutária. Koller diz que isso não é confiável: quando há uma despesa não operacional grande (write-off de ativo), o LAIR (denominador da tabela) despenca e TODOS os percentuais da tabela explodem artificialmente. A regra: **converta cada ajuste para valor em moeda multiplicando o percentual pelo LAIR (não pelo EBITA), e só então some ao imposto estatutário sobre EBITA.** O percentual foi construído pela empresa sobre o LAIR; o valor em moeda, sim, é transportável.

```
Ajuste operacional em R$ = (% do ajuste na tabela) x LAIR
Impostos operacionais    = EBITA x t_estatutária - (soma dos ajustes operacionais em R$)
```

**Classificação típica no exemplo Walmart (p603):**
- Operacional: impostos estaduais, impostos de subsidiárias no exterior, créditos fiscais federais recorrentes (mesmo sem a empresa detalhar a natureza — se aparecem com consistência, trate como recorrentes).
- Não operacional: efeito one-off de mudança de alíquota legal, write-off de operação no Brasil, repatriação de lucros acumulados.

**Onde encaixa.** Skill 6 `impostos-e-prejuizos-fiscais`, como procedimento operacional. Toca também a skill 3 `qualidade-de-resultados` (a classificação one-off vs. recorrente na linha fiscal é o análogo tributário da normalização de EBITDA).

**Veredito.** `ADICIONAR-ALTA` — procedimento acionável, a nota de reconciliação existe nas DFs brasileiras, e a armadilha do percentual-sobre-LAIR-deprimido acontece exatamente nos alvos ACTA (um write-off ou uma provisão grande num ano distorce tudo). Tradução BR das linhas mais comuns da reconciliação: adições permanentes (multas, brindes, doações), exclusões permanentes (subvenções de ICMS, equivalência patrimonial), Lei do Bem / crédito de P&D, JCP (que é linha de financiamento, não operacional), incentivos regionais (SUDENE/SUDAM — 75% de redução de IRPJ; relevante em resíduos e indústria no Norte/Nordeste), e diferença de alíquota de subsidiária no Lucro Presumido dentro de um grupo.

**Página.** p599-603, nota 1 em p613.

---

## 20.3 Impostos operacionais de CAIXA e o roll-forward de diferidos

**O que é.** Para a maioria das empresas — sobretudo as que crescem — o imposto do resultado difere do imposto pago em caixa por causa das divergências entre regra contábil e regra fiscal (exemplo canônico: depreciação acelerada fiscal vs. linear contábil). Koller recomenda usar impostos de caixa quando a empresa difere ou antecipa imposto de forma consistente.

```
Impostos operacionais de caixa =
    Impostos operacionais (competência)
  + Delta (Ativos fiscais diferidos operacionais - Passivos fiscais diferidos operacionais)

equivalentemente, e mais usual (porque PFD > AFD normalmente):
  = Impostos operacionais - Delta (PFD operacional líquido de AFD operacional)

Alíquota operacional de caixa = Impostos operacionais de caixa / EBITA
```

No exemplo Walmart: impostos operacionais 4.451, aumento do PFD operacional líquido 741, logo impostos de caixa 3.710 -> alíquota de caixa 16,9% contra 20,3% em competência (17% menor).

**Regra de exceção importante (p604).** Em empresas de baixo crescimento as contas de diferido sobem e descem de forma imprevisível. **Se a alíquota operacional de caixa for volátil, NÃO ajuste por diferimentos para fins de benchmark histórico — use a alíquota operacional em regime de competência.** Esse é o teste de decisão que falta na skill 6.

**Classificação das contas de diferido (Exhibit 20.8, p605-606):**

| Conta de diferido | Classificação | Tratamento |
|---|---|---|
| Passivos acumulados/provisões cuja receita ou despesa fiscal difere no tempo | Operacional | entra em impostos de caixa |
| Remuneração baseada em ações | Operacional | entra em impostos de caixa |
| Depreciação acelerada fiscal | Operacional (PFD) | entra em impostos de caixa |
| Estoques (diferença de critério fiscal) | Operacional | entra em impostos de caixa |
| Prejuízo fiscal a compensar, líquido de provisão para não realização | NÃO operacional | ativo não operacional, valorado à parte |
| Intangíveis adquiridos (amortização não dedutível) | NÃO operacional | deduzido do próprio intangível |
| Outros (pensão, dívida conversível) | NÃO operacional | ver conta correspondente |

**Onde encaixa.** Skills 2 `reorganizacao-contabil` e 6 `impostos-e-prejuizos-fiscais`.

**Veredito.** `ADICIONAR-MÉDIA` — o conceito de imposto de caixa vs. competência a skill 6 já tem; o aditivo é (i) a **tabela de classificação conta a conta** dos diferidos em operacional/não operacional e (ii) o **teste de volatilidade** que manda abandonar o ajuste de caixa quando o diferido oscila. Em alvo mid-market brasileiro há casos claros: diferido de provisão para contingências, de PECLD, de ajuste a valor presente, de CPC 06 R2 e de depreciação acelerada incentivada.

**Página.** p603-607.

---

## 20.4 Diferidos operacionais são EQUIVALENTES DE PATRIMÔNIO, não capital investido

**O que é.** Regra de reorganização de balanço que fecha um risco de dupla contagem:

```
AFD e PFD OPERACIONAIS -> equivalentes de PATRIMÔNIO
  (lado direito de "fundos totais investidos", seção de equity, com sinal invertido)
  NÃO entram no capital investido.

Racional: ao converter imposto de competência em imposto de caixa, o resultado é
ajustado, e a diferença vira lucro retido -> por construção é equivalente de patrimônio.

Se você incluir os diferidos operacionais no capital investido, o efeito é contado DUAS
vezes no FCF: uma no NOPAT (via imposto de caixa) e outra na variação do capital investido.
```

Duas exceções que NÃO são equivalentes de patrimônio:
- **Prejuízo fiscal a compensar (AFD)**: ativo NÃO operacional, valorado separadamente.
- **PFD de intangíveis adquiridos**: abatido do próprio intangível adquirido. Racional (p609): na aquisição, a amortização do intangível não é dedutível; a empresa reconhece um PFD e, para fechar o balanço, faz *gross-up* do intangível pelo mesmo valor. Ambos são convenção contábil sem transação de caixa -> elimine os dois. `Intangível ajustado = Intangível adquirido - PFD do intangível`.

**Onde encaixa.** Skill 2 `reorganizacao-contabil` (seção de equivalentes de dívida/patrimônio e reconciliação obrigatória).

**Veredito.** `ADICIONAR-ALTA` — é uma regra de dupla contagem, exatamente o erro que a reconciliação obrigatória da skill 2 existe para pegar. A skill hoje lista equivalentes de *dívida* (parcelamento tributário, CPC 06 R2, contingências, mútuo de sócio) mas não formaliza o lado dos equivalentes de *patrimônio*, onde o diferido mora.

**Página.** p607-609.

---

## 20.5 Onde os diferidos se esconderem no balanço

**O que é.** Regra prática: AFD/PFD às vezes aparecem em linha própria, mas frequentemente estão embutidos em "outros ativos" e "outros passivos" (Walmart embutia US$ 1.796 mi de AFD em "outros ativos de longo prazo", revelado apenas na nota fiscal). **Sempre cheque a nota de tributos para itens embutidos**, não confie na face do balanço.

**Onde encaixa.** Skills 2 e 6, como checklist de coleta.

**Veredito.** `ADICIONAR-MÉDIA` — trivial de escrever, evita erro material; no Brasil o equivalente é ler a nota de "Tributos diferidos" e a de "Outros créditos".

**Página.** p609.

---

## 20.6 Nunca use valor contábil de diferido como valor econômico

**O que é.** Regra dura de valuation:

```
JAMAIS use o valor contábil de uma conta de imposto diferido como aproximação de valor.
As contas de diferido refletem diferenças HISTÓRICAS acumuladas entre livro contábil e
livro fiscal. Não refletem fluxo de caixa futuro nem o valor presente desses fluxos.
```

Como valorar cada caso:
- **Prejuízo fiscal a compensar**: se houver informação, aplique os prejuízos passados contra a *projeção* de lucro tributável futuro para estimar o **timing** da economia fiscal, e desconte esses fluxos a um custo de capital apropriado — Koller sugere o **custo de capital próprio desalavancado (unlevered cost of equity)**. Se a informação for escassa, use a provisão para não realização reportada como haircut. Prejuízo fiscal é **específico por país/entidade** — não se compensa entre jurisdições.
- **Diferido de pensão**: o saldo contábil reflete diferenças históricas acumuladas, não economia fiscal futura. Para valorar o escudo fiscal do passivo atuarial a descoberto: `Valor do escudo = Passivo não fundeado corrente x alíquota marginal` (válido porque contribuições em caixa para fechar o déficit são dedutíveis).

**Onde encaixa.** Skill 6 `impostos-e-prejuizos-fiscais` (o roll-forward de prejuízo fiscal já existe; falta a **taxa de desconto** e a regra de nunca usar valor contábil) e skill 2.

**Veredito.** `ADICIONAR-ALTA` — dá o fechamento que falta ao roll-forward de prejuízo fiscal da skill 6: valorar o benefício ao **custo de capital próprio desalavancado**, não ao WACC nem ao valor de face. Adicionar o recorte brasileiro: trava dos 30% do lucro tributável por exercício (que estica o timing e reduz o VP — Koller não trata, mas o método de projetar o timing e descontar é exatamente o que a trava exige), prejuízo fiscal não expira no Brasil, e é por CNPJ.

**Página.** p609-610.

---

## 20.7 Teste final de bom senso (Closing Thoughts)

**O que é.** Dois filtros para qualquer linha da tabela de reconciliação fiscal que confunda o analista:
1. O item é **recorrente e ligado ao core operacional**?
2. O item **muda materialmente** a percepção de performance ou o valuation?

E, ao converter para imposto de caixa: **avalie se a taxa de diferimento é razoável e sustentável**. Se uma aquisição está causando um salto artificial numa conta de diferido, use a tendência de longo prazo para projetar a taxa de diferimento futura.

**Onde encaixa.** Skills 6 e 11 `revisao-de-modelo`.

**Veredito.** `ADICIONAR-MÉDIA` — bom item de checklist de revisão; barato e generalizável.

**Página.** p610-611.

---

# Capítulo 21 — Nonoperating Items, Provisions, and Reserves (p615-635)

## 21.1 A tese contra-intuitiva: item não recorrente NÃO significa "jogue fora"

**O que é.** A sabedoria convencional manda o DCF ignorar despesas não operacionais como custos passados e não recorrentes. Koller rejeita isso: **o tipo e o tratamento contábil da despesa não operacional podem afetar fluxo de caixa futuro e, em certas situações, TÊM de entrar no valuation** — só não pelo NOPAT, e sim como fluxo separado ou como ajuste de projeção.

Pesquisa citada (Fairfield, Kitching & Tang, 2009): a literatura antiga achou baixa persistência de special items, mas só olhava ano a ano. Ao estender a janela para vários anos, encontrou-se **persistência de special items em empresas com lucro core forte** — ou seja, uma empresa muito lucrativa que reporta uma série de encargos de reestruturação provavelmente continuará a reportá-los. Em empresas de lucro operacional baixo, a persistência é baixa. Uma explicação: a gestão desloca custos operacionais recorrentes para a linha de "special items" para bater metas de resultado.

**Onde encaixa.** Skill 3 `qualidade-de-resultados` (o "quarto teste" que falta às 4 famílias de normalização) e skill 7 `projecao-e-cenarios`.

**Veredito.** `ADICIONAR-ALTA` — inverte o vício sell-side. Em mandato de venda, a tentação é adicionar de volta todo item "não recorrente" ao EBITDA e esquecê-lo. Koller dá a doutrina defensável perante o comprador: **excluir do EBITA sim, esquecer não** — o item volta como (i) fluxo não operacional descontado à parte, ou (ii) ajuste explícito na projeção. Isso é exatamente o que sobrevive a uma due diligence.

**Página.** p615, p620.

---

## 21.2 Processo de três passos para itens não operacionais

**O que é.**

```
Passo 1 — Separar operacional de não operacional.
  Regra geral: trate como OPERACIONAL o que (a) cresce em linha com a receita e
  (b) é ligado ao core. Para linhas irregulares e apenas tangenciais ao core,
  TESTE o impacto de cada linha no ROIC de longo prazo.

Passo 2 — Garimpar as notas por itens one-off EMBUTIDOS.
  Nem todo encargo one-off é divulgado em linha separada. Podem estar dentro de
  CPV, de despesas comerciais, de "outras despesas". Leia o relatório da
  administração (MD&A), que explica variações ano a ano e às vezes revela o item.

Passo 3 — Analisar CADA item não operacional pelo impacto nas operações futuras.
  Linhas fora do EBITA não entram no FCF, logo não estão no valor das operações
  core. Então é crítico decidir, item a item, se o encargo continuará no futuro —
  e, se sim, incorporá-lo às projeções de FCF.
```

**Teste de desempate quando a classificação é ambígua (p619):** meça o **ROIC com e sem a despesa**. Se a despesa é irregular (lumpy), **suavize-a ao longo do período em que foi gerada**.

**Teste de materialidade (p620):** só faça o ajuste se o encargo for grande o suficiente para mudar a percepção de performance. Se não for, não faça — o ajuste torna a análise complexa e lenta sem ganho.

**Regra de horizonte (p618):** perspectiva de longo prazo é decisiva. Fechamento de planta que ocorre uma vez em dez anos -> não operacional. Varejista com centenas de lojas que fecha lojas todo ano -> operacional.

**Onde encaixa.** Skill 3 `qualidade-de-resultados` como protocolo; skill 11 `revisao-de-modelo` como checklist.

**Veredito.** `ADICIONAR-ALTA` — é o protocolo formal que dá disciplina às 4 famílias de normalização da skill 3, e o teste "ROIC com e sem" conecta a skill 3 com a skill 4 `diagnostico-de-roic`, integração que hoje não existe.

**Página.** p616-620.

---

## 21.3 A regra da definição contábil de "resultado operacional" ser inútil

**O que é.** O padrão contábil é extremamente restritivo ao classificar algo como não operacional (basicamente só juros e uns poucos itens). Logo, o "lucro operacional" da DRE **inclui indevidamente muitos itens one-off e não operacionais**. EBITA e NOPAT devem incluir **somente** itens ligados ao core recorrente, **independentemente da classificação contábil**.

Exemplo Boston Scientific 2018: a DRE reporta US$ 1,5 bi de lucro operacional, mas dentro dele estão amortização de intangíveis (599), impairment de intangível (35), benefício de contraprestação contingente (-21), reestruturação (36) e encargos de litígio (103) — todos não operacionais. Consequência documentada: **o "lucro operacional" contábil cresce dramaticamente enquanto o EBITA cresce muito pouco.** Ou seja, a métrica contábil pode fabricar uma história de crescimento que o EBITA desmente.

**Onde encaixa.** Skills 2 `reorganizacao-contabil` e 3 `qualidade-de-resultados`.

**Veredito.** `ADICIONAR-MÉDIA` — a skill 2 já faz DRE -> NOPAT, mas vale gravar o alerta de que a **taxa de crescimento** do lucro operacional reportado é tão distorcida quanto o nível, e que a comparação "crescimento do EBITA vs. crescimento do lucro operacional reportado" é um teste de qualidade de resultado rápido e potente.

**Página.** p616-618.

---

## 21.4 Amortização de intangíveis adquiridos — a regra do EBITA e o gross-up de balanço

**O que é.** Em quase toda circunstância, **não** deduza amortização de intangíveis adquiridos para chegar ao NOPAT. Use EBITA, não EBIT. E o ajuste de balanço correspondente:

```
Mantenha goodwill e intangíveis adquiridos pelos valores ORIGINAIS:
  Intangíveis (analítico) = Intangíveis contábeis + amortização acumulada excluída
  Contrapartida no patrimônio: conta "amortização acumulada" (equity equivalent),
  para fechar os fundos totais investidos.
```

**Racional (a assimetria contábil, p621).** O padrão contábil só capitaliza e amortiza intangíveis **adquiridos**; intangíveis **gerados internamente** (marca, rede de distribuição) são despesados na criação. Logo, o EBIT de uma empresa que compra um intangível e depois o repõe por investimento interno é **penalizado duas vezes**: uma via despesa (SG&A) e outra via amortização. Isso equivale a lançar simultaneamente capex e depreciação na DRE — claramente indesejável.

Efeito quantificado (Exhibit 21.3, farmacêuticas 2018): pela margem EBIT as três empresas parecem idênticas; retirada a amortização de aquisições, a Pfizer supera as pares em ~7 pontos percentuais de margem.

**Exceção — quando SIM deduzir amortização (p622).** Quando o intangível pode ser capitalizado de forma **consistente**, sem exceção, isto é, quando o gasto correspondente nunca passa pela despesa:
- empresa sem força de vendas própria, que compra contatos de clientes de terceiros: como o gasto comercial nunca vai para SG&A, a amortização tem de ser deduzida, senão a DRE não reflete o custo de vender;
- compra de faixas de frequência por telecom: capitalizável sem exceção -> trate igual a imobilizado e depreciação.

**Onde encaixa.** Skills 2 `reorganizacao-contabil` e 4 `diagnostico-de-roic` (o item "ROIC com e sem goodwill" já existe; falta a regra do gross-up por amortização acumulada e a exceção da capitalização consistente).

**Veredito.** `ADICIONAR-MÉDIA` — relevante em mid-market brasileiro quando o alvo é um roll-up (comum em resíduos, saúde e educação) e já fez aquisições com mais-valia e intangíveis identificados alocados em PPA. O critério da **consistência** (o gasto passa pela despesa ou não?) é a parte genuinamente aditiva e generaliza para software desenvolvido internamente vs. adquirido.

**Página.** p621-622.

---

## 21.5 Write-offs de ativos e impairment — devolver ao capital investido

**O que é.** Quando o valor de um ativo cai abaixo do contábil, a norma manda baixá-lo a valor justo. Isso é útil para o credor (visão do colateral), mas o **valor contábil resultante subestima o investimento histórico feito pelo acionista** — e, portanto, **o ROIC sobe artificialmente depois de um write-down.**

```
Tratamento:
  Write-down / write-off -> NÃO OPERACIONAL
  Some os write-downs ACUMULADOS de volta ao capital investido
  Crie um equivalente de patrimônio correspondente para fechar os fundos investidos
```

Duas categorias:
1. **Write-off de ativos.** Regra: não operacional. Nos raros casos em que ocorrem sistematicamente, operacional. Adicione de volta ao ativo — **exceto** quando você está estimando **giro do capital para projetar necessidade futura de capital**; nesse caso, calcule o índice da forma que melhor reflita a necessidade futura de capital (isto é, sobre a base de ativos economicamente relevante, não a inflada pelo write-off devolvido).
2. **Impairment de goodwill e intangíveis.** Não operacional; some os impairments acumulados de volta ao goodwill. Racional: o propósito de calcular ROIC **com** goodwill é medir a performance histórica **incluindo todos os prêmios de aquisição pagos** — logo o goodwill deve permanecer no nível original.

**Onde encaixa.** Skills 2 e 4 `diagnostico-de-roic`.

**Veredito.** `ADICIONAR-ALTA` — é o mesmo mecanismo do problema já identificado nos mandatos (ROIC inflado por base de ativos encolhida), aplicado a write-offs. E a **ressalva do giro do capital** é crucial e sutil: para *medir performance histórica* você devolve o write-off; para *projetar capex futuro* você não devolve. Sem isso, o analista devolve o write-off e depois superprojeta capex.

**Página.** p622-623.

---

## 21.6 Encargos de reestruturação — converter para base caixa e valorar à parte

**O que é.** Se o encargo é improvável de recorrer, trate como não operacional. Se emerge um **padrão** de encargos recorrentes, análise adicional é obrigatória. No caso Boston Scientific, 2009-2018, os encargos de reestruturação médios foram US$ 70 mi/ano = **0,9% da receita** — persistentes.

O que analisar num padrão persistente:
- que **parcela é caixa** (rescisões, por exemplo) vs. não caixa (write-down de estoque/ativo);
- se a parcela caixa **provavelmente continuará** e **por quanto tempo**;
- ler as notas: as empresas frequentemente divulgam o encargo pré-imposto total esperado do programa E a economia anual esperada de despesa (ex.: programa com US$ 200-300 mi de encargo e US$ 100-150 mi/ano de economia até 2022). **Se a projeção é crível, incorpore-a à projeção de fluxo de caixa** (o caso Kimberly-Clark, p620: programa que reduziria a base estrutural de custo em US$ 500-550 mi/ano até 2021).

**Mecânica de conversão para caixa (p632):**

```
Provisão de reestruturação em CAIXA =
   Despesa de reestruturação (competência)
 − Aumento da reserva de reestruturação

Tratamento:
 - a provisão não é deduzida da receita para chegar ao NOPAT (é não operacional);
   aparece na reconciliação até o lucro líquido;
 - a reserva não caixa é tratada como EQUIVALENTE DE DÍVIDA e, portanto,
   NÃO é abatida dos ativos operacionais no cálculo do capital investido;
 - o fluxo de caixa não operacional resultante é descontado à parte e
   DEDUZIDO do valor das operações para chegar ao valor do equity.
   (No exemplo: provisão de 30 no ano 2, paga no ano 3 -> fluxo caixa 0 no ano 2
    e 30 no ano 3; VP = 22,5, deduzido do valor das operações.)
```

**Onde encaixa.** Skills 3 `qualidade-de-resultados`, 2 `reorganizacao-contabil` (equivalentes de dívida) e 10 `triangulacao-e-faixa` (o ajuste do EV para o equity).

**Veredito.** `ADICIONAR-ALTA` — o teste "encargo de reestruturação como % da receita, série de 5-10 anos" é diretamente aplicável, e a regra de converter para caixa e descontar como fluxo negativo separado é o tratamento correto para os casos ACTA de reestruturação/demissões em massa/fechamento de unidade divulgados como "não recorrente".

**Página.** p623-624, p631-632.

---

## 21.7 As QUATRO famílias de provisões e o tratamento de cada uma

**O que é.** Esta é a peça mais estruturada e mais aditiva do capítulo. Provisão = despesa não caixa que reflete custo futuro ou perda esperada; a empresa reduz o resultado corrente e cria uma reserva no passivo (ou deduz do ativo relevante). Koller classifica em quatro tipos:

### Tipo 1 — Provisões operacionais recorrentes
Garantia de produto, devoluções esperadas, autosseguro de serviço. Ligadas à operação corrente.

```
Tratamento: igual a qualquer outro passivo NÃO oneroso (como fornecedores, salários).
 - a provisão É deduzida da receita para chegar ao EBITA;
 - a reserva É abatida dos ativos operacionais no capital investido
     (exemplo: ativos operacionais 723,1 − reserva 100 = capital investido 623,1);
 - provisão e reserva são operacionais -> já estão no FCF;
   NÃO valorar separadamente.
```

### Tipo 2 — Provisões operacionais de LONGO PRAZO (descomissionamento / obrigação de retirada de ativo)
Custos de desmobilização, limpeza ambiental, fechamento de planta ou mina. Sob IFRS/CPC 25 são "provisões"; sob US GAAP, AROs (SFAS 143).

```
Mecânica contábil:
  No investimento, reconhece-se o VALOR PRESENTE do custo futuro
  simultaneamente como ATIVO e como PASSIVO.
    Exemplo: 200 de custo em 10 anos a 10% -> VP = 77,1
    (é como se a empresa tomasse 77,1 emprestado e guardasse em caixa restrito)

  Depois:
   - o ATIVO de descomissionamento é DEPRECIADO linearmente
       (77,1 / 10 = 7,7 por ano)
   - a RESERVA CRESCE à taxa de desconto — despesa chamada ACCRETION
       (10% do saldo do ano anterior; no ano 7: 77,1 x 1,10^7 = 150,3;
        accretion do ano = 15,0)
  Resultado: o custo é reconhecido ao longo da vida do ativo, não em bloco no final.

Tratamento analítico:
   DEPRECIAÇÃO do ativo de descomissionamento -> OPERACIONAL (entra no NOPAT)
   ACCRETION -> NÃO entra no NOPAT (mimetiza juros);
        vai na reconciliação até o lucro líquido, ao lado da despesa de juros
   ATIVO de descomissionamento -> parte do CAPITAL INVESTIDO (é como caixa restrito)
   RESERVA de descomissionamento -> EQUIVALENTE DE DÍVIDA

FCF: começa no NOPAT, SOMA de volta a depreciação do ativo de descomissionamento
     (é não caixa) e subtrai os investimentos em capital investido.

Ponte para o equity: como a reserva é equivalente de dívida, nem os juros nem o
saque da reserva passam pelo FCF. Portanto SUBTRAIA a reserva reportada CORRENTE
(150,3 hoje) do valor das operações (858,9) para chegar ao valor do equity.
```

Note a assimetria importante: o accretion é **excluído** do NOPAT, mas a reserva é deduzida **pelo valor corrente reportado** (que já incorpora todo o accretion acumulado) na ponte para o equity. Sem essa separação há dupla contagem ou subcontagem.

### Tipo 3 — Provisões de reestruturação one-off
Ver 21.6. Não operacional; reserva = equivalente de dívida; valorar à parte em base caixa e deduzir do EV.

### Tipo 4 — Provisões de SUAVIZAÇÃO DE RESULTADO (income smoothing)
Proibidas em regra sob IFRS e US GAAP, mas ocorrem (empreiteiras de defesa reavaliando valor de contrato de longo prazo). O nome da conta na prática é sutil: **"Outras provisões"**, não "provisão para suavizar resultado".

```
Tratamento:
 - ELIMINE a provisão: some-a de volta ao EBITA reportado (desfaça-a);
 - a reserva correspondente passa a ser EQUIVALENTE DE PATRIMÔNIO
   (processo idêntico ao dos impostos diferidos, cap. 20);
 - como são inteiramente não caixa, NÃO afetam FCF nem valuation —
   afetam apenas a leitura de PERFORMANCE.
```

Efeito documentado no exemplo: a empresa mostrou crescimento suave de EBITA e lucro líquido usando a provisão em anos 1 e 2 e revertendo no ano 3, **escondendo uma deterioração operacional real** (custos operacionais subiram de 75% para 85% da receita).

**Onde encaixa.** Skills 2 `reorganizacao-contabil` (a taxonomia de equivalentes de dívida/patrimônio ganha quatro casos novos e precisos) e 3 `qualidade-de-resultados` (a família de suavização é uma quinta família de normalização).

**Veredito.** `ADICIONAR-ALTA` — a taxonomia de 4 tipos é a melhor peça do capítulo e mapeia 1-a-1 no balanço brasileiro: (1) provisão para garantia, PECLD, provisão para devoluções; (2) **provisão para desmobilização de aterro sanitário / encerramento de célula / recuperação de área degradada — exatamente o setor de resíduos/ambiental da ACTA**, além de recuperação de área minerada; (3) provisão para reestruturação; (4) "outras provisões" usada para alisar resultado. O tipo 2 merece destaque próprio: em alvo de resíduos, a provisão de encerramento de aterro é grande, cresce por accretion, e é tratada errado por padrão (ou ignorada, ou somada como dívida sem separar o ativo correspondente do capital investido).

**Página.** p625-633, notas 3 e 4 em p635.

---

## 21.8 Provisões e impostos — o diferido que nasce da provisão

**O que é.** Na maioria dos casos a provisão só é **dedutível quando o caixa é desembolsado**, não quando é reportada. Logo, quase toda provisão gera um **ativo fiscal diferido**.

```
Exemplo: encargo de reestruturação não caixa de 30 -> reserva de 30.
Se o encargo é dedutível na DRE contábil, os lucros retidos caem apenas 21
(alíquota de 30%). A reserva sobe 30 mas o patrimônio cai 21 -> balanço não fecha.
Para fechar, reconhece-se um ATIVO FISCAL DIFERIDO de 9.
```

Regras:
- Provisões **operacionais**: use imposto de **caixa**, não de competência.
- Provisões **não operacionais**: estime o impacto fiscal da provisão correspondente.
- **Nunca** use valores contábeis — refletem contabilidade passada, não necessariamente fluxo de caixa futuro.

**Onde encaixa.** Skills 6 `impostos-e-prejuizos-fiscais` e 2.

**Veredito.** `ADICIONAR-MÉDIA` — conecta os caps. 20 e 21 e resolve uma dúvida frequente na prática ("a provisão para contingência é dedutível? o diferido dela é ativo real?"). No Brasil o ponto é ainda mais forte: provisão para contingência **não é dedutível** até o desembolso/trânsito em julgado, então o AFD sobre contingência é praticamente universal nos alvos.

**Página.** p633.

---

## 21.9 Regra de fechamento — consistência importa mais que classificação

**O que é.** "Um valuation correto não depende de como o item é tratado, desde que você o inclua em algum lugar e o trate de forma consistente." O valuation depende **exclusivamente de como e quando o caixa passa pelo negócio**, não da contabilidade de competência. A forma como você ajusta as demonstrações **não deve** alterar o valor.

**Onde encaixa.** Skills 11 `revisao-de-modelo` e 2 (reconciliação obrigatória).

**Veredito.** `ADICIONAR-ALTA` — é o princípio-mestre que justifica a "reconciliação obrigatória" da skill 2 e o teste de revisão: **reclassifique um item de operacional para não operacional e o valor total não pode mudar**; se mudar, há dupla contagem ou omissão. É um teste executável de modelo, não só uma frase de efeito.

**Página.** p626, p633-634.

---

# Capítulo 22 — Leases (p636-653)

## 22.1 IFRS 16 / CPC 06 R2 já resolve o problema — a ressalva que importa

**O que é.** Sob IFRS, praticamente todo arrendamento acima de um ano é tratado como financeiro: ativo e passivo capitalizados no balanço, e a despesa de arrendamento **corretamente dividida entre depreciação e juros**. Koller é explícito (p637): *"A metodologia de valuation por enterprise DCF da Parte Dois incorpora corretamente os arrendamentos sob IFRS sem ajuste adicional."*

Sob US GAAP a coisa é pior: a empresa ainda classifica em "finance" ou "operating", e no operating a despesa **total** é distribuída **linearmente** ao longo do contrato, embora os pagamentos de caixa variem — logo o **juro implícito continua embutido na despesa operacional** e precisa ser retirado à mão.

**Onde encaixa.** Skill 2 `reorganizacao-contabil` (que já cobre CPC 06 R2).

**Veredito.** `JÁ COBERTO` no essencial — mas vale gravar a **conclusão liberatória**: para alvo brasileiro que aplica CPC 06 R2, o direito de uso entra no capital investido e o passivo de arrendamento entra como fonte de financiamento, e **não há ajuste de juro implícito a fazer**, porque a DRE já separou depreciação de juros. Isso poupa trabalho e evita o erro de "ajustar duas vezes".

**Página.** p637.

---

## 22.2 A armadilha da dupla contagem do juro implícito

**O que é.** Quando a despesa de arrendamento vem misturada (US GAAP operating lease, ou — caso brasileiro relevante — **DFs de alvo que NÃO aplica CPC 06 R2 por ser PME/CPC 21 ou por não ter adotado, ou DFs gerenciais/históricas pré-adoção**), você tem de ajustar o EBITA para cima:

```
Juro implícito = Passivo de arrendamento do ANO ANTERIOR x taxa de juros do arrendamento
   - use a taxa divulgada nas notas;
   - se não houver divulgação, use o yield to maturity de dívida rating AA
     (no Brasil: taxa de captação de longo prazo da empresa / debênture comparável).
   - ATENÇÃO: calcule o juro sobre o PASSIVO de arrendamento, NUNCA sobre o
     ativo de direito de uso.

EBITA ajustado = EBITA reportado + juro implícito no arrendamento
NOPAT ajustado = EBITA ajustado − (EBITA ajustado x alíquota operacional)
   (o escudo fiscal do juro implícito é capturado no WACC, não no NOPAT)
```

**Por que isso importa (p640, item 5).** Se você **não** ajustar o resultado operacional para cima, você **subavalia o equity**, porque o juro implícito é contado **duas vezes**: uma vez dentro da despesa de arrendamento (reduzindo o FCF) e outra vez ao subtrair o valor do arrendamento do EV para chegar ao equity. Este é o erro clássico e ele tem **direção conhecida**: viés para baixo.

**Onde encaixa.** Skills 2 `reorganizacao-contabil` e 11 `revisao-de-modelo`.

**Veredito.** `ADICIONAR-ALTA` — a skill 2 capitaliza CPC 06 R2, mas o erro de dupla contagem do juro implícito é justamente o que acontece quando o analista pega DFs de PME (ou gerenciais) que despesam aluguel integralmente, capitaliza o arrendamento como equivalente de dívida, e **esquece de somar o juro implícito de volta ao EBITDA/EBITA**. Em alvos ACTA de R$ 50-500 MM de receita, DF em CPC PME (sem CPC 06 R2) é comum, e aluguel de galpão, frota e equipamento é material. A regra tem direção e magnitude conhecidas — vale como item de checklist com sinal.

**Página.** p639-642, p650.

---

## 22.3 Os quatro passos e a mecânica do FCF com arrendamento

**O que é.**

```
1. Reorganizar as demonstrações: ajustar o EBITA para CIMA removendo o juro
   implícito da despesa de arrendamento; recalcular impostos operacionais -> NOPAT ajustado.
2. Estimar o FCF usando NOPAT ajustado e a VARIAÇÃO do ativo de direito de uso.
   Passivos de arrendamento -> tratados como DÍVIDA, na reconciliação do FCF.
3. Estimar o WACC incluindo o valor do passivo de arrendamento como dívida.
4. Descontar o FCF ao WACC (ambos inclusivos de arrendamento) -> EV.
   Subtrair dívida tradicional E o valor do passivo de arrendamento -> valor do equity.

Princípio de consistência: se você tratar o direito de uso como equipamento comprado
e o passivo de arrendamento como uma forma de dívida, o resultado é teoricamente
consistente. SÓ o resultado operacional exige ajuste (para cima).
```

**A identidade de verificação (p643).** Duas checagens numéricas que valem como teste de modelo:

```
juro do arrendamento + queda do ativo de direito de uso = despesa de arrendamento (competência)
juro implícito + variação do passivo de arrendamento    = pagamento de caixa do arrendamento
```

Ou seja: o processo **elimina toda a despesa de arrendamento dos ativos existentes do FCF**. O arrendamento dos ativos existentes não é valorado como parte do FCF, mas como **dívida** — separando o fluxo de investimento da forma como ele é financiado.

**Projeção (p644).** Vincule o ativo de direito de uso à receita ou a uma medida física de volume (assentos-milha disponíveis, no exemplo de aviação; toneladas processadas, m³ de aterro, km de rede, para os setores ACTA). Garanta que **o mix de ativos comprados vs. arrendados seja consistente com a capacidade necessária para operar**. Fixe o passivo de arrendamento como um percentual do ativo de direito de uso — método imprecíso, mas irrelevante, porque fluxos de financiamento não afetam um valuation por enterprise: o financiamento entra só via estrutura de capital-alvo do WACC.

**Beta e WACC (p645).** Ao estimar o beta setorial: **desalavanque o beta de cada comparável usando um D/E ajustado por arrendamentos**, e realavanque para a estrutura de capital do alvo, também inclusiva de arrendamentos. Reduza o custo dos arrendamentos e da dívida pela alíquota marginal (pagamentos de arrendamento são dedutíveis).

**Onde encaixa.** Skills 2, 5 `capital-de-giro-e-capex` (projeção do direito de uso e do mix compra vs. aluguel), 8 `custo-de-capital` (o ajuste de beta/Hamada por arrendamento).

**Veredito.** `ADICIONAR-ALTA` para o ajuste de **beta/Hamada inclusivo de arrendamento** — a skill 8 faz Hamada com dívida, mas se o alvo aluga frota/galpão e os comparáveis compram (ou vice-versa), o beta desalavancado sai errado. `ADICIONAR-MÉDIA` para as duas identidades de verificação (bom teste de modelo na skill 11) e para a regra de projeção do direito de uso por driver físico.

**Página.** p639-645.

---

## 22.4 Validação cruzada: cash-flow-to-equity como teste do enterprise DCF

**O que é.** Koller não recomenda modelo de fluxo ao acionista (mistura ativos de riscos diferentes e confunde performance operacional com estrutura de capital), **mas** ele confirma a acurácia do enterprise DCF quando bem implementado.

```
No modelo de equity, NÃO capitalize a despesa de arrendamento.
Deduza os pagamentos de caixa ao arrendador quando ocorrem.
NÃO inclua a variação do direito de uso nem a variação do passivo de arrendamento.
   (contrasta com dívida, onde juros E amortização entram, pois são caixa real)

Desconte ao MESMO custo de capital próprio usado no WACC.
   Não reduza o Ke por estar ignorando a alavancagem do arrendamento:
   o risco subjacente do equity não mudou ao trocar de modelo, logo o Ke não muda.

Resultado: valor do equity idêntico ao do enterprise DCF (52,4 nos dois métodos).
```

**Onde encaixa.** Skill 11 `revisao-de-modelo`.

**Veredito.** `ADICIONAR-MÉDIA` — é um teste de amarração poderoso e barato, e a advertência sobre não mexer no Ke ao trocar de modelo é um erro conceitual comum.

**Página.** p646-647.

---

## 22.5 Ajuste de históricos e o cálculo do valor do arrendamento a partir da nota de compromissos

**O que é.** As empresas **não reapresentam** históricos pré-adoção. Para garantir consistência no benchmark histórico, ajuste os exercícios anteriores para a política atual. Método a partir da nota de compromissos de arrendamento:

```
1. A nota reporta os pagamentos ano a ano dos primeiros 5 anos e, depois,
   um valor ÚNICO não descontado para "após 5 anos".
2. Desconte os 5 primeiros anos ao custo de dívida (AA / captação da empresa).
3. Para o bolo residual, use fórmula de ANUIDADE:
     fluxo por período = pagamento do ANO 5
     número de anos    = (valor não descontado do bolo) / (pagamento do ano 5)
4. O valor da anuidade está posicionado no ANO 5 -> traga a valor presente
   descontando 5 anos, como qualquer outro fluxo.
5. Some tudo -> valor do arrendamento operacional capitalizado.

No balanço reorganizado: valor do arrendamento -> CAPITAL INVESTIDO;
passivo correspondente -> EQUIVALENTE DE DÍVIDA.
Para exercícios passados, ativo = passivo (não há o descasamento do US GAAP).
```

Ajuste do EBITA para o exercício histórico: `juro implícito = custo de dívida × arrendamento capitalizado do ano anterior` (Costco: 3,63% × 2,5 bi = 91 mi de ajuste ao EBITA).

**Onde encaixa.** Skills 2 `reorganizacao-contabil` e 4 `diagnostico-de-roic` (comparabilidade da série histórica de ROIC).

**Veredito.** `ADICIONAR-ALTA` — este é o procedimento diretamente utilizável quando o alvo é PME que **não** aplica CPC 06 R2 e só divulga (ou informa em data room) o **cronograma de aluguéis contratados**. Método reprodutível para transformar aluguel em ativo + dívida com a informação mínima disponível num mid-market. Também é o que permite comparar o ROIC do alvo (que aluga) com o de comparáveis listados (que aplicam CPC 06 R2).

**Página.** p647-648.

---

## 22.6 Método ALTERNATIVO por perpetuidade — o valor ECONÔMICO do ativo arrendado

**O que é.** Este é o insight mais aditivo do capítulo. Capitalizar o arrendamento descontando os pagamentos contratados **subestima o valor do ativo efetivamente empregado**, porque ignora o valor residual devolvido ao arrendador.

Exemplo: FlightCo aluga uma aeronave por 3 anos de uma vida de 40 anos. Uma aeronave nova custa US$ 125 mi, mas o VP de 3 anos de aluguel é US$ 27,1 mi. O valuation **não fica viesado** (o fluxo está certo), mas o **ativo empregado para operar fica subestimado** — e portanto **ROIC e giro do capital ficam distorcidos para cima**. O erro é maior quanto (i) mais curto o arrendamento vs. a vida do ativo e (ii) maior a proporção de ativos arrendados no capital investido. Em arrendamento financeiro o erro é pequeno (prazo ~ vida do ativo).

**A fórmula (equações 22.1 e 22.2, p649).** A despesa de aluguel remunera o arrendador por (a) o custo de financiar o ativo, ao custo de dívida garantida kd, e (b) a depreciação periódica do ativo (assumindo linear):

```
Despesa de aluguel = Valor do ativo x kd + Valor do ativo / vida do ativo
                   = Valor do ativo x ( kd + 1 / vida do ativo )

Rearranjando:

   Valor do ativo arrendado = Despesa anual de aluguel / ( kd + 1 / vida do ativo )
```

Insumos:
- **despesa de aluguel**: divulgada nas notas;
- **kd**: yield de dívida AA (no Brasil, custo de captação garantida do alvo);
- **vida do ativo**: frequentemente não reportada. Duas saídas — (a) procurar nas notas o **tipo** de ativo arrendado e estimar a vida econômica desse tipo; (b) proxy de Lim, Mann & Mihov: `vida do ativo = Imobilizado bruto / depreciação anual`. Na amostra deles (7.000 empresas, 20 anos), a **vida mediana foi 10,9 anos**.

Sensibilidade a checar (questão 5 do capítulo): errar a vida do ativo de 7 para 10 anos muda materialmente o valor do ativo, então **rode a sensibilidade** em vez de fixar um número.

**Uso correto.** Este método **não** substitui o valor do passivo na ponte EV -> equity (ali vale o VP contratual). Serve para **benchmark like-for-like de ROIC e giro do capital** entre uma empresa que compra ativos e outra que os aluga.

**Onde encaixa.** Skill 4 `diagnostico-de-roic` (ajuste de comparabilidade do capital investido) e skill 12 / triangulação por múltiplos de comparáveis.

**Veredito.** `ADICIONAR-ALTA` — resolve um problema real e frequente nos setores ACTA: alvo de resíduos ou engenharia que **aluga** frota, caminhões, equipamentos e galpões vs. comparável que **compra** tudo. Pelo VP contratual do aluguel de 24-36 meses, o capital investido do alvo fica ridiculamente baixo e o ROIC absurdamente alto — inflando a narrativa de forma insustentável na diligência. A fórmula de perpetuidade dá o número defensável. Sinergia com o Cap. 25: os dois capítulos atacam faces do mesmo problema (capital investido subestimado -> ROIC inflado).

**Página.** p648-650, notas 6 e 7 em p653.

---

# Capítulo 23 — Retirement Obligations (p654-667)

Veredito global do capítulo: **majoritariamente IRRELEVANTE-MIDMARKET**. Plano de benefício definido praticamente não existe em empresa fechada brasileira de R$ 50-500 MM de receita nos setores da ACTA. Mas três peças do raciocínio são **transponíveis** para passivos análogos que os alvos ACTA de fato têm.

---

## 23.1 Passivo atuarial a descoberto = equivalente de dívida (bruto, não líquido)

**O que é.**

```
Ativos de plano em EXCESSO         -> ativo NÃO OPERACIONAL
Passivo atuarial a descoberto      -> EQUIVALENTE DE DÍVIDA, em base BRUTA
   -> NÃO deduzir dos ativos operacionais no cálculo do capital investido;
   -> valorar separadamente na transição de EV para valor do equity.

Ponte para o equity:
  se passivo líquido a descoberto:
      Valor do equity = EV − (1 − alíquota marginal) x passivo líquido de pensão
  se ativo líquido em excesso:
      Valor do equity = EV + (1 − alíquota marginal) x ativo líquido de pensão
      (racional: excesso de ativo -> menos contribuições futuras exigidas)
```

**Regra de netting e sua exceção (p664).** Para empresa em continuidade, ativo em excesso de um plano pode ser compensado contra descoberto de outro para achar o líquido. **Mas se a empresa está sendo avaliada para liquidação ou o plano está sendo encerrado, NÃO compense** — a maioria dos países cobra penalidade significativa por retirar excedente de plano de pensão. Nesse caso: some o ativo em excesso **após a penalidade**, e deduza o passivo a descoberto **após a economia fiscal marginal das contribuições**.

**Aviso fiscal (p664).** Apenas **contribuições em caixa** são dedutíveis, não o custo de serviço. Para empresas que subfinanciam sistematicamente, **ajuste os impostos** de forma correspondente. Nem todo país concede alívio fiscal a contribuições — verifique a lei local para a alíquota marginal aplicável.

**Onde encaixa.** Skill 2 `reorganizacao-contabil` (taxonomia de equivalentes de dívida) e skill 10 `triangulacao-e-faixa` (ponte EV -> equity).

**Veredito.** `ADICIONAR-MÉDIA` — não pela pensão, mas pelo **padrão transponível**: o tratamento "equivalente de dívida em base bruta, deduzido do EV pelo valor LÍQUIDO DE IMPOSTO" é exatamente o que se deve fazer, em alvo brasileiro, com **passivo trabalhista/previdenciário a descoberto, provisão para contingência trabalhista, passivo de plano de saúde de aposentados (que existe em empresas com sindicato forte e em concessionárias), e — o caso mais comum — parcelamento tributário**. A skill 2 já lista parcelamento tributário como equivalente de dívida; o aditivo é a regra do **(1 − t)** e a advertência de que o netting só vale em continuidade.

**Página.** p656-657, p664.

---

## 23.2 Despesa de pensão linha a linha: só o CUSTO DE SERVIÇO é operacional

**O que é.** A despesa de pensão junta seis contas de naturezas distintas:

| Conta | Natureza | Tratamento |
|---|---|---|
| Custo de serviço (service cost) | Operacional | benefício concedido pelo trabalho do ano; fica no NOPAT |
| Amortização de custo de serviço passado | Operacional em teoria | não caixa e retrospectivo; **não** entra no FCF; por simplicidade, Koller trata como não operacional |
| Custo de juros sobre o passivo do plano | NÃO operacional | evolução financeira do passivo |
| Retorno ESPERADO dos ativos do plano | NÃO operacional | evolução financeira dos ativos |
| Ganhos/perdas reconhecidos | NÃO operacional | reconhecimento gradual de resultados passados do fundo |
| Curtailments | NÃO operacional | mudanças que restringem benefícios |

```
Ajuste do EBITA para históricos pré-2018 (e para qualquer DF que embuta a despesa):
   Remova a despesa TOTAL de pensão da linha operacional
   Substitua-a APENAS pelo custo de serviço
```

**A distorção quantificada (p658).** Kellogg: perda reconhecida de US$ 304 mi em 2016 virou ganho de US$ 126 mi em 2017; a despesa de pensão passou de US$ 199 mi de despesa a US$ 431 mi de **benefício**. Como estava embutida no CPV, a **margem operacional não ajustada subiu de 10,7% para 15,1%**, enquanto a **margem ajustada (só custo de serviço) CAIU de 11,3% para 10,8%**. Sinal invertido: a métrica reportada mostrou melhora de 4,4 p.p. quando a realidade operacional piorou 0,5 p.p.

**Onde encaixa.** Skills 3 `qualidade-de-resultados` e 2.

**Veredito.** `ADICIONAR-MÉDIA` — o **princípio** é altamente aditivo mesmo sem pensão: qualquer item cuja variação anual é dirigida por **performance de ativo financeiro ou por remensuração atuarial** contamina a margem operacional e precisa sair. O caso brasileiro equivalente: remensuração de provisão para contingências e de provisão para desmobilização por mudança de taxa de desconto (que em CPC 25 transita por resultado), e ganho/perda em atualização monetária de parcelamento tributário embutido em "outras despesas operacionais". A lição executável: **compare a série de margem reportada com a série de margem ajustada e desconfie quando os sinais divergem**.

**Página.** p657-659.

---

## 23.3 Retorno ESPERADO como veículo de manipulação de resultado

**O que é.** A norma permite lançar um **retorno esperado** dos ativos do plano em vez do retorno realizado, para evitar volatilidade. Kellogg lançou US$ 455 mi de retorno esperado em 2018 num ano em que os ativos do plano **perderam** US$ 350 mi.

Evidência (Bergstresser, Desai & Rauh, QJE 2006): a administração **eleva as taxas de retorno esperado imediatamente antes de adquirir outras empresas e antes de exercer opções**. Empresas com a **proteção mais fraca ao acionista** usam as estimativas de retorno esperado mais altas.

Conclusão de Koller: mesmo depois de 2018, quando os itens não operacionais saíram do CPV, o **lucro líquido continua suscetível** — mais uma razão pela qual **NOPAT, e não LPA/EPS, é a medida crítica** para benchmark e projeção.

**Onde encaixa.** Skills 3 `qualidade-de-resultados` e 1 `fundamentos-koller`.

**Veredito.** `ADICIONAR-MÉDIA` — o argumento *"parâmetro discricionário de estimativa é ajustado favoravelmente logo antes de um evento de transação"* é diretamente transponível ao sell-side brasileiro: **taxa de desconto de provisão, percentual de perda esperada de contingência (possível vs. provável), critério de PECLD, taxa de capitalização de gasto com desenvolvimento e vida útil de depreciação são todos ajustáveis, e o mandato de venda é justamente o evento que cria o incentivo.** Vale um item de checklist na skill 3: verificar se houve mudança de estimativa contábil nos 2-3 exercícios anteriores ao mandato, e em que direção.

**Página.** p659-660.

---

## 23.4 Pensões no custo de capital — o padrão de desalavancagem e a assimetria desalavanca/realavanca

**O que é.** Dois métodos de desalavancar beta com pensão:

**Método 1 (recomendado)** — assume que o gestor do fundo casou o beta dos ativos com o beta dos benefícios projetados; a parte fundeada se cancela e **só a parte a descoberto afeta o beta do equity**. Usa a equação padrão de desalavancagem, com o passivo a descoberto tratado como dívida:

```
D = dívida tradicional + passivo atuarial a descoberto − caixa em excesso

beta_u = ( E x beta_e + D x beta_d ) / ( E + D )      [eq. 23.1, forma padrão]

Kellogg: beta_e = 0,64 (5 anos de retornos mensais); beta_d assumido = 0,17;
D/V = 31,8% sem pensão vs. 32,6% com pensão -> betas desalavancados quase idênticos,
porque o descoberto de US$ 369 mi é pequeno frente à dívida de US$ 9,2 bi.
```

**Método 2** — relaxa a hipótese de betas casados, separa ativos do plano das obrigações projetadas e aplica Modigliani-Miller (derivação no Apêndice C). Exige estimar o **beta dos ativos do plano** a partir da alocação-alvo divulgada na nota, usando (seguindo Jin, Merton & Bodie): **beta de títulos de dívida = 0,17 e beta de outros investimentos = 1,0**. Para Kellogg dá beta_u = 0,39 (menor, porque o beta dos ativos do plano excede o dos benefícios projetados). Se os betas fossem iguais, os dois métodos coincidiriam. Koller limita o método 2 aos casos em que a pensão é crítica no valuation.

**A regra assimétrica que importa (p663).** Uma vez estimado o beta setorial desalavancado, ao **REALAVANCAR para a estrutura de capital-alvo da empresa, NÃO incorpore pensões.**

```
Desalavancar: COM pensão (o descoberto entra em D)
Realavancar:  SEM pensão

Racional: já eliminamos a pensão do FCF e do custo de capital.
Não há razão para reintroduzir a pensão, ou o risco a ela associado,
no VALOR DAS OPERAÇÕES. Valore a pensão separadamente e some as partes.
```

**Onde encaixa.** Skill 8 `custo-de-capital` (beta/Hamada).

**Veredito.** `ADICIONAR-ALTA` — não pela pensão, mas pela **regra geral de assimetria desalavanca/realavanca com equivalentes de dívida**, que é diretamente aplicável e é um erro fácil de cometer. Generalizando para o mid-market brasileiro: ao desalavancar betas de comparáveis, D deve incluir os equivalentes de dívida (arrendamento — cap. 22 —, parcelamento tributário, contingência provável, mútuo de sócio); ao **realavancar** para a estrutura-alvo do alvo, use apenas a dívida que financia as operações e valore os equivalentes de dívida **à parte, na ponte EV -> equity**, com o fator (1 − t) quando o passivo é dedutível na saída de caixa. Isso costura de forma coerente a skill 8 com a skill 2, e resolve a ambiguidade recorrente de "eu ponho o parcelamento tributário no D do Hamada ou não?".

**Página.** p660-663.

---

# Capítulo 24 — Measuring Performance in Capital-Light Businesses (p668-687)

## 24.1 O problema: intangível gerado internamente é despesado, logo o ROIC mente

**O que é.** Quando a empresa constrói uma planta, capitaliza e deprecia. Quando investe em **tecnologia de produção, marca ou rede de distribuição**, o desembolso inteiro é despesado imediatamente. Em setores de P&D e marca, não reconhecer esses gastos como investimento leva a **subestimar significativamente o capital investido e superestimar o ROIC**.

O caso extremo: uma biotech gasta US$ 1 bi em P&D antes do lançamento. ROIC negativo nos primeiros anos, ROIC altíssimo depois do lançamento. O **retorno econômico real ao longo da vida do produto está numa média intermediária**.

O critério de capitalização analítica:
```
Capitalize o desembolso em intangível SE ele traz benefícios ao longo de
MÚLTIPLOS anos futuros, e não apenas do ano corrente.

Racional: o resultado de um ano qualquer é sustentado não pelo P&D ou pela
publicidade DAQUELE ano, mas por MUITOS anos anteriores desses gastos.

A economia de investimentos em intangíveis é muito semelhante à de investimentos
em tangíveis. Logo o tratamento no ROIC deve ser o MESMO, para que o ROIC
reflita adequadamente a TIR verdadeira do investimento subjacente.
Não fazê-lo produz ROICs muito acima do retorno real do negócio.
(Teste mental: o que aconteceria com o ROIC se o capex de imobilizado
 fosse despesado em vez de capitalizado?)
```

**Três benefícios colaterais da capitalização analítica (p669):**
1. **Reduz manipulação de resultado de curto prazo.** Sob contabilidade tradicional, um gestor que precisa bater meta simplesmente corta P&D. Com P&D capitalizado, a amortização no resultado permanece praticamente inalterada no curto prazo — o corte não "aparece" como lucro.
2. **Revela mudança de performance escondida por orçamento fixo como % da receita.** Muitas empresas fixam o orçamento de P&D num percentual fixo da receita; combinado com despesa imediata, isso **mascara** o efeito de qualquer mudança de receita, porque a margem fica inalterada. Com P&D capitalizado, a amortização **não** muda com a receita, e o impacto na performance aparece no resultado.
3. **Dá perspectiva competitiva correta.** Comparar o orçamento de publicidade de um incumbente com o de um entrante é inútil se a marca do incumbente foi construída por décadas: o orçamento corrente do incumbente **subestima o investimento necessário ao entrante** para atingir reconhecimento de marca semelhante. A base de investimento capitalizada dá a estimativa correta.

**Onde encaixa.** Skill 4 `diagnostico-de-roic` — como uma modalidade nova de ajuste; e skill 3 `qualidade-de-resultados`.

**Veredito.** `ADICIONAR-ALTA` — o benefício 1 (corte de P&D/marketing como alavanca de resultado no ano do mandato) é diretamente aplicável em sell-side: alvo que corta marketing, treinamento ou desenvolvimento de software no ano da venda para inflar EBITDA. Hoje isso cabe na skill 3 como "despesa postergada", mas a capitalização analítica dá o **número**, não apenas o alerta.

**Página.** p668-669.

---

## 24.2 Procedimento em três passos para capitalizar despesa em intangível

**O que é.**

```
PASSO 1 — Capitalizar e amortizar o ativo, usando uma vida útil apropriada.
  Escolha um ANO INICIAL e comece a acumular a despesa.
  Escolha o ano mais antigo viável: o modelo precisa que o estoque acumulado
  alcance ESTADO ESTACIONÁRIO antes que o ROIC ajustado seja significativo.
  Regra: são necessários pelo menos TANTOS ANOS DE CRESCIMENTO CONSTANTE
  quanto a vida útil assumida do ativo.

  Roll-forward:
    Ativo intangível_t = Ativo intangível_(t-1) + despesa_t − amortização_t
    amortização linear sobre a despesa histórica de cada safra
    (a primeira amortização começa no ano SEGUINTE ao da despesa)

PASSO 2 — Ajustar o capital investido para CIMA pelo custo histórico do ativo,
  LÍQUIDO da amortização acumulada.
  Contrapartida: para os fundos totais investidos fecharem, some o intangível
  capitalizado aos EQUIVALENTES DE PATRIMÔNIO (nota 5, p686).

PASSO 3 — Ajustar o NOPAT substituindo a DESPESA do ano pela AMORTIZAÇÃO do ano.
  NÃO ajuste os impostos operacionais: capitalizar e amortizar P&D não altera
  o lucro tributável para fins fiscais.
```

**Direção do efeito, e por quê (p671).** No exemplo PharmaCo (2020): despesa de P&D de US$ 262 mi substituída por amortização de US$ 200 mi eleva o NOPAT de US$ 133 mi para US$ 195 mi. Isso é **comum em empresas em crescimento**, porque o P&D corrente é tipicamente maior que a amortização do P&D histórico. Quando o crescimento desacelera, a amortização alcança a despesa e o ajuste ao NOPAT fica pequeno.

**O FCF histórico NÃO muda (p672).** A amortização é encargo não caixa dentro do NOPAT e é somada de volta no fluxo de caixa bruto. O efeito é apenas **mover a despesa de P&D do fluxo de caixa bruto para a linha de investimentos**, deixando o FCF inalterado. Isso é o teste de sanidade do ajuste.

**Magnitude do efeito (p673).** PharmaCo: ROIC não ajustado 33%; **ROIC ajustado estabiliza em ~9,5%**. Com custo de capital de 10%, a empresa está de fato **destruindo valor**, e a administração deveria questionar a continuidade do investimento. Concorrentes deveriam questionar a validade de entrar naquele mercado: as margens são altas, mas o investimento exigido em P&D é grande.

**Onde encaixa.** Skills 4 `diagnostico-de-roic` e 2 `reorganizacao-contabil`.

**Veredito.** `ADICIONAR-ALTA` — procedimento fechado e reprodutível, com contrapartida de balanço explícita (equivalente de patrimônio) que se conecta à reconciliação obrigatória da skill 2.

**Página.** p669-673, nota 5 em p686.

---

## 24.3 A vida útil importa muito menos do que se teme — teste de sensibilidade

**O que é.** A objeção padrão ("não sei estimar a vida útil do intangível") é respondida com um teste de estresse. PharmaCo, variando a vida do ativo de P&D entre 2 e 12 anos:

| Vida assumida | ROIC ajustado |
|---|---|
| P&D despesado (sem capitalizar) | 33% |
| 2 anos | 16% |
| 8 anos | 9,4% |
| 12 anos | 8,9% |

```
Conclusões operacionais:
 1. Até uma vida de apenas DOIS anos já reduz o ROIC de 33% para 16% —
    ou seja, a maior parte do efeito vem de capitalizar, não de acertar a vida.
 2. Aumentar a vida continua reduzindo o ROIC, mas com incrementos cada vez
    menores. Entre 8 e 12 anos (faixa razoável para P&D) a diferença é
    9,4% vs. 8,9% — NÃO afeta materialmente a percepção de performance.
 3. O padrão se mantém quando o gasto é muito menor (P&D a 10% da receita).
 4. Ao COMPARAR empresas, o que mais importa é que a estimativa de vida útil
    seja CONSISTENTE entre todas as empresas.
 5. Argumento retórico: as vidas úteis de ativos TANGÍVEIS também são estimativas
    grosseiras e convenções contábeis, e ninguém se incomoda em usar valor
    contábil e depreciação como base para retorno sobre capital.
```

**Onde encaixa.** Skills 4 `diagnostico-de-roic` e 11 `revisao-de-modelo`.

**Veredito.** `ADICIONAR-ALTA` — este é o argumento que **destrava** o uso da técnica na prática. Sem ele, o analista abandona o ajuste por falta de dado. Com ele, capitaliza com uma vida plausível, roda a sensibilidade e segue.

**Página.** p673-674.

---

## 24.4 Consequência para PROJEÇÃO: capitalizar muda o capex intangível projetado

**O que é.** A capitalização não muda o FCF histórico, mas **os ajustes resultantes ao giro do capital e ao ROIC afetam a projeção de FCF futuro**, e a diferença é grande.

```
PharmaCo, para crescer 10% em 2021:
  Modelando P&D como ATIVO (capitalizado):
     investimento exigido em P&D = crescimento da base líquida de P&D
                                   + amortização anual do ano
                                 = 10% x 1.666 (=167) + 1.666/8 (=208)
                                 = 375
  Modelando P&D como DESPESA:
     desembolso adicional exigido = 10% da receita adicional de 2021 = 26

  Diferença: 375 vs. 262 gastos em 2020 -> 113 a MAIS de necessidade,
  contra apenas 26 no modelo de despesa.
```

Isso é análogo ao que ocorre com capex tangível projetado por razão constante sobre receita vs. por giro do capital constante (cap. 13).

**O teste de decisão — qual ROIC usar para projetar (p675).** Este é o ponto mais afiado do capítulo:

```
Se a empresa consegue aumentar a receita 10% aumentando a DESPESA de P&D em 10%
  -> o ROIC NÃO AJUSTADO é a melhor estimativa da TIR dos investimentos futuros.

Se para o mesmo crescimento de receita ela precisa aumentar a BASE LÍQUIDA
DE ATIVO de P&D em 10%
  -> o ROIC AJUSTADO é a melhor estimativa.

O que importa é: quais investimentos em intangível são exigidos para o
crescimento NO LONGO PRAZO?
```

**Advertência de incentivo (p678).** Se a capitalização analítica é institucionalizada, gestores têm incentivo a **classificar toda despesa como investimento**, inclusive as sem benefício de longo prazo, para maximizar performance reportada de curto prazo. E ficam relutantes em **baixar** investimentos que se provaram sem valor depois de capitalizados (ex.: manter um canal de distribuição aberto só para evitar um write-down no balanço econômico do próprio gestor).

**Onde encaixa.** Skills 7 `projecao-e-cenarios` (taxa de reinvestimento) e 5 `capital-de-giro-e-capex`.

**Veredito.** `ADICIONAR-ALTA` — o teste de decisão liga diretamente à "taxa de reinvestimento" da skill 7. Em alvo ACTA de educação (desenvolvimento de conteúdo/curso), saúde (protocolo, credenciamento, corpo clínico), software/tecnologia embarcada em serviços ambientais, e em qualquer alvo com marca relevante (agro premium, educação), a pergunta "para crescer 10% preciso gastar 10% mais em desenvolvimento, ou preciso aumentar 10% o estoque de conteúdo/marca?" muda materialmente a taxa de reinvestimento e, portanto, o FCF projetado e o valor terminal.

**Página.** p675-678.

---

## 24.5 Evidência empírica: capitalizar muda o RANKING, não só o nível

**O que é.** McKinsey capitalizou 10 anos de gastos em pesquisa e publicidade de quatro multinacionais de bens de consumo de marca, e de fabricantes de hardware de alta tecnologia. Resultado: o **ROIC de todas caiu significativamente E o ranking de performance mudou completamente**.

**Onde encaixa.** Skill 4 `diagnostico-de-roic` e triangulação por comparáveis.

**Veredito.** `ADICIONAR-MÉDIA` — o argumento de que **o ranking muda, não só o nível**, é o que justifica fazer o ajuste também nos comparáveis, não só no alvo. Sem isso o benchmark de ROIC alvo vs. pares é enviesado na direção de quem capitaliza mais.

**Página.** p676-677.

---

## 24.6 Quando o capital é baixo ou negativo: ROIC deixa de significar algo

**O que é.** Em negócios de capital muito baixo ou negativo, o ROIC perde sentido. Exemplos citados: serviços profissionais (contabilidade, jurídico), corretagem imobiliária e outras corretagens, desenvolvimento de software e serviços (pré-pagamento de licença por cliente + financiamento de fornecedor levam o capital investido a perto de zero), e eletrônicos de consumo com manufatura terceirizada.

```
Mecânica do problema: mudanças MODESTAS numa base de capital já pequena
produzem oscilações ENORMES no ROIC, tornando o ROIC de um ano qualquer
inútil para gestão de performance, planejamento financeiro e definição de metas.

Caso TradeCo (distribuidora de material hidráulico): receita, resultado e FCF
razoavelmente estáveis ano a ano, mas o ROIC OSCILA VIOLENTAMENTE e é
IMENSURÁVEL em alguns anos (capital investido negativo, por causa de capital
de giro negativo: paga fornecedores depois de receber dos clientes).
  - ROIC "negativo" com capital negativo NÃO tem interpretação econômica.
  - ROIC subiu de 316% (2019) para 632% (2020) — enquanto a CRIAÇÃO DE VALOR
    DIMINUIU (lucro econômico caiu). A alta do ROIC foi dirigida por queda do
    capital de giro; o resultado caiu simultaneamente.
```

**REGRA PRÁTICA EXPLÍCITA (p682):**
```
ROICs acima de 50% devem ser tratados com CAUTELA como medida de criação de valor.
Cautela ESPECIAL quando o nível de ROIC é dirigido por GIRO DE CAPITAL ALTO,
e não por MARGEM ALTA.
```

**Onde encaixa.** Skill 4 `diagnostico-de-roic` (a decomposição margem × giro já existe — este é o **critério de alerta** que falta) e skill 1 `fundamentos-koller`.

**Veredito.** `ADICIONAR-ALTA` — o gatilho "ROIC > 50% dirigido por giro, não por margem" é um item de checklist objetivo. E é frequente nos alvos ACTA: **prestadora de serviço de engenharia ou ambiental que opera com adiantamento de cliente e prazo longo de fornecedor tem capital de giro negativo e ROIC absurdo**, e a narrativa "ROIC de 300%" desmorona na diligência. Também cobre o alvo asset-light de saúde/educação que aluga tudo.

**Página.** p678-680, p682.

---

## 24.7 A armadilha da terceirização: ROIC sobe sem criar valor

**O que é.** Demonstração numérica (Exhibit 24.10): InhouseCo e ContractCo são idênticas, exceto que ContractCo terceirizou toda a produção — sem imobilizado líquido, sem depreciação, mas com **custos operacionais mais altos**.

```
Resultado: o lucro da ContractCo é MENOR, mas seu ROIC é mais de CINCO VEZES maior,
porque não precisa mais de imobilizado.

Mas o LUCRO ECONÔMICO das duas é IDÊNTICO — a criação de valor é a mesma.
A ContractCo apenas SEPAROU a atividade intensiva em capital e de baixo ROIC
das demais, sem criar valor. O ROIC sobe simplesmente porque ela retém apenas
as atividades de ROIC alto. Isso NADA DIZ sobre criação de valor pela terceirização.

Corolário de gestão: NÃO decida terceirizar apenas porque isso eleva o ROIC.
A decisão precisa ser sustentada por análise de LUCRO ECONÔMICO ou,
equivalentemente, por um DCF.
(Ressalva, nota 9: a terceirização PODE criar valor real se permitir
 crescimento maior por exigir menos capital.)
```

**Onde encaixa.** Skills 4 `diagnostico-de-roic` e 1 `fundamentos-koller`.

**Veredito.** `ADICIONAR-ALTA` — é um argumento de equity story que aparece em quase todo sell-side: "terceirizamos a frota / o transporte / a produção e nosso retorno sobre capital explodiu". Koller dá a refutação numérica e a métrica correta (lucro econômico). Muito relevante em resíduos (terceirização de frota de coleta e de transbordo), engenharia (subcontratação de execução) e agro (arrendamento de terra em vez de propriedade).

**Página.** p680-681, nota 9 em p687.

---

## 24.8 Lucro econômico e LUCRO ECONÔMICO SOBRE RECEITA como métrica de comparação

**O que é.** Duas definições equivalentes:

```
(24.1)  Lucro econômico = Capital investido x ( ROIC − WACC )
(24.2)  Lucro econômico = NOPAT − encargo de capital
        onde encargo de capital = WACC x Capital investido

Por que resolve o problema: como o ROIC é MULTIPLICADO pelo capital investido,
o lucro econômico CORRIGE AUTOMATICAMENTE qualquer distorção de ROIC em
modelos de negócio de intensidade de capital extremamente baixa.
```

**Mas o lucro econômico é absoluto, logo não compara empresas de tamanhos diferentes.** Caso DiversiCo (industrial diversificada com unidades de software, hardware, serviços de hardware e suprimentos): software tem receita de US$ 100 mi contra US$ 2,5 bi do hardware; software tem capital investido **negativo** (pré-pagamento de clientes), hardware exige US$ 1 bi. O ROIC é inútil para comparar as unidades. O lucro econômico dá o quadro correto de criação de valor, mas o software aparece com o **menor** lucro econômico (US$ 25 mi) — **não pela performance, e sim pelo tamanho**.

**A solução — escalar pela receita:**
```
Métrica de comparação = Lucro econômico / Receita
   = criação de valor por real de venda

Uso 1 — alocação de recursos e estratégia de portfólio:
   revela que o software da DiversiCo gera o MAIOR valor por real de receita
   e o hardware o MENOR -> crescer receita em software é o mais benéfico
   ao acionista.
Uso 2 — benchmark com pares de tamanho e intensidade de capital diferentes.
```

**Caso ReturnCo (p683-684) — o desmascaramento.** Empresa de bens de consumo de marca com **ROIC de 105%**, contra 30-40% dos pares internacionais. Aplicada a regra dos 50%, a investigação revela: a ReturnCo dá **descontos agressivos por pagamento antecipado**. O desconto joga a margem **abaixo** do nível dos pares, mas o pagamento antecipado torna o capital de giro líquido **negativo** e reduz o capital investido. Resultado líquido: ROIC excepcionalmente alto.

```
Conclusão: a maior eficiência de capital é aproximadamente COMPENSADA pelo
desconto concedido. O índice lucro econômico / receita da ReturnCo é MUITO
SEMELHANTE ao dos pares. À primeira vista o ROIC parecia superior;
olhando de perto, a criação de valor está EM LINHA com os pares.
```

**Nota 11 (p687) — identidade útil.** Em negócios de capital muito baixo, `lucro econômico / receita` é **quase idêntico à margem NOPAT**: pela eq. 24.2, se o capital investido é zero, o encargo de capital é zero e o lucro econômico iguala o NOPAT.

**Onde encaixa.** Skills 4 `diagnostico-de-roic` (nova métrica), 1 `fundamentos-koller` (lucro econômico já existe; o **escalonamento pela receita** não) e 10 `triangulacao-e-faixa`.

**Veredito.** `ADICIONAR-ALTA` — `lucro econômico / receita` é uma métrica de comparação nova, simples de calcular e que resolve um problema real: comparar o alvo mid-market (pequeno) com comparáveis listados (grandes) e com intensidade de capital diferente. O caso ReturnCo é o modelo do diálogo de diligência: "seu ROIC é alto porque você compra capital de giro com desconto de preço — o valor criado por real de receita é igual ao dos pares". Vale escrever o caso inteiro na skill 4.

**Página.** p682-685, notas 10 e 11 em p687.

---

# Capítulo 25 — Alternative Ways to Measure Return on Capital (p688-700)

Este capítulo responde diretamente ao problema já identificado nos mandatos ACTA — **ROIC inflado por imobilizado quase totalmente depreciado**. Abaixo, o diagnóstico e os dois métodos de ajuste.

## 25.1 O critério-mestre: uma medida de retorno só vale se aproximar a TIR

**O que é.** O padrão-ouro conceitual:

```
Para ser genuinamente "value based", a medida de retorno sobre capital tem de
refletir a TIR do negócio subjacente, do momento em que os investimentos são
feitos até que todos os fluxos de caixa desse investimento tenham sido coletados.

Na prática é impossível (não se pode esperar o fim de cada projeto; um negócio é
um acúmulo de investimentos feitos em momentos diferentes), então precisamos de
um PROXY que meça quanto valor foi criado no passado recente e sirva para planejar.
```

**As duas fraquezas conhecidas do ROIC (p688):** ele **não considera a IDADE dos ativos** nem **o efeito da inflação** sobre a mensuração.

**PRINCÍPIO COMUM A TODAS AS MEDIDAS (p688-689) — usar o valor investido, nunca o valor de mercado:**
```
Qualquer medida de retorno sobre capital deve se basear no VALOR INVESTIDO,
NUNCA no valor de mercado corrente da empresa ou dos seus ativos.

Prova por absurdo: se o valor justo de um ativo é o valor DCF dos seus fluxos
futuros, então, por definição, o retorno sobre capital medido a esse valor justo
NÃO informa nada sobre criação de valor. Para um negócio em crescimento, o retorno
medido contra o valor DCF será SEMPRE menor que o custo de capital, porque o valor
DCF já embute a criação de valor dos investimentos FUTUROS.
```

**Onde encaixa.** Skills 4 `diagnostico-de-roic` e 1 `fundamentos-koller`.

**Veredito.** `ADICIONAR-ALTA` — o princípio "valor investido, não valor de mercado" mata de uma vez a tentação recorrente de reavaliar ativos a valor de mercado (ou usar laudo de avaliação patrimonial, muito comum em alvos brasileiros com imóveis e terras) para "corrigir" o capital investido. É uma regra de bloqueio com prova, não só uma opinião. Importante: distingue-se do ajuste por **valor de reposição/inflação** de 25.5, que é legítimo — a diferença é reposição do custo histórico vs. valor de mercado do fluxo.

**Página.** p688-689.

---

## 25.2 Quando o ROIC É igual à TIR — a condição exata

**O que é.** Definição operacional: `ROIC do ano = lucro operacional do ano / capital investido no INÍCIO do ano, líquido de depreciação acumulada`.

```
Exemplo (Exhibit 25.1): investimento inicial 100, vida 5 anos, depreciação linear 20/ano,
fluxos de caixa operacionais DECLINANTES (35, 32, 29, 26, 23).
Lucro operacional = FCO − 20 -> 15, 12, 9, 6, 3: PROPORCIONAL ao capital líquido.
Resultado: ROIC CONSTANTE em 15% ao longo de toda a vida do ativo = TIR de 15%.

CONDIÇÃO EXATA:
   O ROIC de um investimento IGUALA a TIR se os resultados gerados pelo
   investimento forem PROPORCIONAIS ao capital investido LÍQUIDO de depreciação
   acumulada, em cada ano da vida do investimento.

Generalização para o negócio como portfólio de 5 ativos com vidas remanescentes
de 1 a 5 anos: vale para os ativos, vale para o negócio. Se esse negócio quer
crescer o resultado 10%, precisa expandir o capital investido LÍQUIDO em 10%
(desembolso de 30 no exemplo), e a TIR desse investimento incremental
("crescimento por cópia carbono") é EXATAMENTE o ROIC do negócio, 15%.

=> O ROIC do negócio iguala a TIR de novos investimentos se os resultados
   operacionais do negócio forem proporcionais ao capital investido LÍQUIDO.
   Nessas condições o ROIC é uma medida value-based, apesar de ser contábil.
```

Nota 1: é a mesma lógica que sustenta a **key value driver formula** (cap. 3) — o valor DCF só aumenta com crescimento de resultado a um ROIC acima do custo de capital.

**Onde encaixa.** Skills 1 `fundamentos-koller` e 4 `diagnostico-de-roic`.

**Veredito.** `ADICIONAR-ALTA` — dá ao analista o **teste de validade** do ROIC, que hoje não existe na skill 4: *o lucro operacional do alvo é proporcional ao capital investido líquido?* Se sim, o ROIC pode ser usado como TIR do crescimento incremental e alimentar a KVD formula com segurança. Se não (ver 25.3), o ROIC está errado e a KVD formula herda o erro no valor terminal.

**Página.** p689-691, nota 1 em p699.

---

## 25.3 Quando o ROIC MENTE: fluxos estáveis e base depreciada — o diagnóstico do problema ACTA

**O que é.** O caso oposto (Exhibit 25.2): os fluxos de caixa operacionais são **proporcionais ao capital investido BRUTO e constantes** ao longo da vida do ativo (29/ano).

```
Resultado: TIR = 13,8%; CFROI = 13,8% CONSTANTE ao longo da vida do ativo.
MAS: o ROIC do negócio de 15% SUPERESTIMA a TIR.
E, no nível do ativo, "o ROIC continua a AUMENTAR conforme a base de capital
é depreciada" (p693) — este é exatamente o fenômeno do imobilizado velho.
```

**Quando isso acontece — o critério de escolha (p694, "Theoretical Trade-Offs"):**

```
CFROI é mais apropriado quando os investimentos são muito IRREGULARES (lumpy).
  Exemplos extremos: projetos de infraestrutura, usinas hidrelétricas.
  Característica: investimento inicial muito substancial que gera fluxos de caixa
  relativamente ESTÁVEIS, sem investimento significativo de manutenção ou
  reforma por muitos anos, ou até décadas.
  Consequência: apesar de a convenção contábil exigir depreciar o ativo,
  A BASE DE CAPITAL LÍQUIDA TEM POUCA RELAÇÃO COM A CAPACIDADE DE GERAR CAIXA.
  O ROIC frequentemente sobe a níveis SEM RELAÇÃO com o retorno econômico
  (TIR) do projeto, enquanto o CFROI fica muito mais próximo da TIR,
  porque os fluxos de caixa operacionais são muito estáveis.

ROIC é a melhor estimativa da TIR quando os investimentos ocorrem de forma
REGULAR e SUAVE, porque são NECESSÁRIOS para sustentar o resultado.
  Exemplos: supermercados de varejo; indústria com muitas plantas e equipamentos.
  Característica: exigem investimento regular de manutenção, upgrade e renovação
  de linhas de produto e formatos de loja. NOS PERÍODOS ENTRE esses investimentos,
  preço e resultado sofrem pressão da concorrência com produtos e formatos mais
  novos. Logo a BASE DE CAPITAL DEPRECIADA É UMA APROXIMAÇÃO RAZOÁVEL da
  capacidade de gerar resultado -> ROIC é melhor proxy da TIR.

Koller: "na nossa experiência, este é o caso da MAIORIA das empresas:
investimentos de manutenção e reposição são exigidos continuamente
para sustentar o resultado operacional."
```

**Onde encaixa.** Skills 4 `diagnostico-de-roic` (o critério de diagnóstico) e 5 `capital-de-giro-e-capex` (a distinção capex de manutenção vs. expansão já existe, e é justamente o dado que responde o teste).

**Veredito.** `ADICIONAR-ALTA` — este é o **critério de triagem** que a ACTA precisa. Regra prática derivada: *se o alvo consegue manter o nível de fluxo de caixa com capex de manutenção baixo relativo ao imobilizado bruto (ativo longevo, pouco reinvestimento), o ROIC contábil está inflado e não serve de âncora para o crescimento — vá para CFROI ou para o ROIC ajustado a valor de reposição.* Setores ACTA em que isso é o caso: **aterro sanitário (célula construída uma vez, receita por décadas), infraestrutura de tratamento de água/efluente, PCH/geração, e imóvel industrial próprio antigo**. Setores em que o ROIC contábil serve: **coleta de resíduos (frota renovada continuamente), indústria, agro com máquinas, educação e saúde com reforma e equipamento periódicos**.

**Página.** p691-694.

---

## 25.4 CFROI — definição e fórmula

**O que é.**

```
CFROI do ano T = a taxa de desconto para a qual o valor presente do fluxo de caixa
operacional daquele ano, tratado como uma ANUIDADE de N anos, iguala o
CAPITAL INVESTIDO BRUTO no início do ano — onde N é a vida útil do ativo subjacente.

           N
   GIC_T = SOMA   OCF_T / (1 + CFROI)^t
          t=1

   GIC_T = capital investido BRUTO (antes de depreciação acumulada) no início do ano T
   OCF_T = fluxo de caixa operacional do ano T
   N     = vida útil do ativo

   Equivalentemente, resolvendo a anuidade:
     GIC_T = OCF_T x [ 1 − (1 + CFROI)^(−N) ] / CFROI

   Qualquer VALOR RESIDUAL do ativo deve ser incluído como fluxo de caixa
   ADICIONAL no ano N e descontado ao CFROI.

CONDIÇÃO EXATA:
   O CFROI iguala a TIR se os fluxos de caixa operacionais gerados forem
   PROPORCIONAIS ao capital investido BRUTO (antes de depreciação acumulada).
   Equivalentemente: quando o FCO é CONSTANTE ao longo da vida do ativo.
   No nível do negócio: o CFROI do negócio iguala exatamente a TIR de novos
   investimentos se os FCOs forem proporcionais ao capital investido bruto.
   Nesse caso, para crescer os fluxos 10%, expanda o capital investido BRUTO em 10%.
```

**Onde encaixa.** Skill nova sugerida: `retorno-alternativo-e-valor-de-reposicao` — ou seção avançada da skill 4 `diagnostico-de-roic`.

**Veredito.** `ADICIONAR-MÉDIA` — a fórmula é implementável e é a resposta teoricamente correta para o caso do ativo longevo, mas ver 25.6: Koller mesmo pondera o custo/benefício. Para o mid-market, o ajuste de inflação do ROIC (25.5) entrega quase o mesmo resultado com muito menos complexidade — é essa a via que recomendo escrever como primária, com CFROI como método de conferência num alvo tipo aterro/infra.

**Página.** p691-693.

---

## 25.5 O AJUSTE POR INFLAÇÃO / VALOR DE REPOSIÇÃO — o método que resolve o problema ACTA

**O que é.** Este é o trecho de maior valor prático do capítulo (p695).

```
Uma característica do CFROI, na sua definição precisa, é que ele INCLUI um
ajuste pelo efeito da inflação sobre os retornos: o CAPITAL INVESTIDO BRUTO é
INDEXADO pela inflação desde os anos em que os ativos foram originalmente comprados.

Para a maioria das economias da América do Norte e Europa Ocidental isso
normalmente não faz grande diferença. MAS O IMPACTO DO AJUSTE É SIGNIFICATIVO
QUANDO A INFLAÇÃO EXCEDE ALGUNS PONTOS PERCENTUAIS POR ANO.
Em alguns casos, Koller encontrou que ESSE AJUSTE FOI A PRINCIPAL FONTE DE
DIFERENÇA entre o CFROI e o ROIC de uma empresa.

*** PORÉM: ajustes por inflação também podem ser feitos DIRETAMENTE NO ROIC. ***

  MÉTODO: expressar a DEPRECIAÇÃO e o IMOBILIZADO (PP&E) em
          MOEDA DO ANO CORRENTE.

  Isto é, para cada safra de aquisição de ativo:
     PP&E bruto reexpresso   = custo histórico da safra x (índice de preços atual
                               / índice de preços do ano da aquisição)
     depreciação reexpressa  = depreciação histórica x mesmo fator de indexação
     PP&E líquido reexpresso = bruto reexpresso − depreciação acumulada reexpressa

     ROIC ajustado = NOPAT (com depreciação reexpressa)
                     / capital investido (com PP&E reexpresso)

RESULTADO DOCUMENTADO (Exhibit 25.3): ajustar o ROIC por inflação e usar o CFROI
com o seu ajuste de inflação levam TIPICAMENTE A RESULTADOS SEMELHANTES,
através de uma AMPLA VARIAÇÃO de taxas de inflação e de vidas úteis de ativos.
```

Ou seja: **não é preciso implementar CFROI para resolver o problema de ROIC inflado por base histórica depreciada em ambiente inflacionário — basta reexpressar imobilizado e depreciação em moeda corrente e recalcular o ROIC.**

**Onde encaixa.** Skills 4 `diagnostico-de-roic` (o ajuste principal) e 5 `capital-de-giro-e-capex` (o roll-forward de PP&E já existe na skill e é exatamente onde a indexação por safra tem de entrar); conecta com o cap. 26.

**Veredito.** `ADICIONAR-ALTA` — esta é a **resposta direta ao problema já identificado nos mandatos**. No Brasil o ajuste é obrigatório, não opcional: os alvos ACTA têm imobilizado adquirido ao longo de 15-30 anos, sem correção monetária de balanço desde 1995, e com IPCA acumulado de ordem de grandeza que torna o custo histórico irrelevante. Um galpão comprado em 2005 está no balanço a valor de 2005 e quase totalmente depreciado; o ROIC calculado sobre essa base é ficção. Implementação prática mid-market:
```
1. Obter o razão de imobilizado por safra de aquisição (data + custo) — está
   no controle patrimonial ou no arquivo de depreciação fiscal (LALUR/SPED).
   Se não houver por safra, use as datas de aquisição das principais parcelas
   e trate o resto por idade média implícita (= dep. acumulada / dep. anual).
2. Indexar cada safra pelo IPCA (ou por índice setorial — INCC para obra civil,
   IPA-OG para máquinas e equipamentos, que é mais fiel a valor de reposição).
3. Recalcular depreciação sobre o bruto reexpresso.
4. Recalcular NOPAT e capital investido -> ROIC ajustado.
5. Reportar SEMPRE os dois: ROIC contábil e ROIC a valor de reposição, e
   explicar a diferença. Usar o ROIC ajustado como âncora do valor terminal.
6. Cross-check simples de sanidade: valor de reposição do imobilizado vs. laudo
   de seguro (valor de reposição segurado) ou vs. cotação de equipamento novo.
```
Cuidado a registrar: o índice de reposição **não** é laudo de valor de mercado do negócio (bloqueado por 25.1) — é o custo histórico reexpresso. A distinção é conceitual e importa.

**Página.** p695-696.

---

## 25.6 Evidência: na prática a diferença ROIC vs. CFROI é pequena

**O que é.** Análise de 1.000 empresas americanas, 2003-2013 (Exhibit 25.4):

```
Em 9 dos 10 setores não financeiros considerados, o spread entre o ROIC médio e o
CFROI médio foi de TRÊS PONTOS PERCENTUAIS OU MENOS (ambos SEM ajuste de inflação).

A diferença entre o ROIC do quartil superior e o do quartil inferior dentro de um
setor era tipicamente QUATRO VEZES MAIOR que esse spread.

=> A decisão entre medir o retorno por ROIC ou por CFROI é improvável de mudar
   o que o resultado diz sobre a performance RELATIVA da empresa frente aos pares.
```

**Onde encaixa.** Skills 4 e 11 `revisao-de-modelo`.

**Veredito.** `ADICIONAR-MÉDIA` (como calibração de esforço) — importante para não superengenheirar. Lido junto com 25.5, a mensagem para a ACTA é precisa: **o que importa no Brasil não é ROIC vs. CFROI, é o ajuste de INFLAÇÃO** (nos EUA sem ajuste os dois dão quase o mesmo; a diferença material vem justamente do ajuste inflacionário, que é onde o Brasil difere). Isso justifica a priorização em 25.5 e o rebaixamento do CFROI a ferramenta de exceção.

**Página.** p696-697.

---

## 25.7 Trade-offs práticos do CFROI — por que não adotá-lo como padrão

**O que é.**

```
1. ROIC e seus componentes são fáceis de estimar a partir das demonstrações
   padrão, com reorganização e ajustes. É uma razão direta, familiar aos gestores.
   CFROI exige um cálculo iterativo muito mais complexo e NÃO TRANSPARENTE
   para muitos gestores. (Existem aproximações mais simples — nota 5, Damodaran.)

2. INTERPRETABILIDADE. Para DOBRAR o ROIC, o gestor precisa dobrar a margem
   OU dobrar o giro do capital. Com essa lógica, qualquer redução de estoque ou
   de custo de matéria-prima se traduz FACILMENTE em melhoria de ROIC.
   Dobrar o giro do capital NÃO necessariamente dobra o CFROI, porque o CFROI
   não é uma razão simples.

3. AGREGAÇÃO. O ROIC de um grupo é simplesmente a MÉDIA PONDERADA PELO CAPITAL
   dos ROICs dos negócios subjacentes. O CFROI de uma divisão ou grupo NÃO
   decorre facilmente dos CFROIs das unidades subjacentes.
```

**Onde encaixa.** Skill 4 e skill 19-equivalente (valuation por partes, fora da minha faixa).

**Veredito.** `ADICIONAR-MÉDIA` — o item 3 (aditividade ponderada pelo capital) é útil e pouco conhecido: permite decompor o ROIC consolidado do alvo por unidade de negócio/linha de serviço e explicar exatamente qual unidade puxa o retorno. Item 2 justifica manter a decomposição margem × giro da skill 4 como ferramenta principal de diálogo com o vendedor.

**Página.** p694-695, nota 5 em p699.

---

## 25.8 Medidas de "cash return" a EVITAR (CROCI, CROGI, CashROA)

**O que é.**

```
ROCE (return on capital employed): a maioria das definições é razoavelmente
  semelhante ao ROIC — lucro operacional / capital operacional empregado.
  A definição exata de resultado e de capital varia por aplicação. Não é o problema.

O problema é o outro conjunto — fundamentalmente diferente:
  CROCI (cash return on capital invested)
  CROGI (cash return on gross investment)
  CashROA (cash return on assets)
  tipicamente calculados como:   FLUXO DE CAIXA OPERACIONAL / CAPITAL INVESTIDO

Por que são MEDIDAS FALHAS de criação de valor:
  NÃO igualam a TIR subjacente. Nos dois exemplos do capítulo (Exhibits 25.1 e 25.2),
  o cash return sobre capital BRUTO e sobre capital LÍQUIDO SUPERESTIMAM a TIR real.
  RAZÃO PRINCIPAL: falham em contabilizar o ENCARGO DE CONSUMIR O CAPITAL
  SUBJACENTE, porque IGNORAM A DEPRECIAÇÃO.
  Para o cash return sobre capital LÍQUIDO de depreciação acumulada, o erro é
  AMPLIFICADO: o denominador encolhe ao longo da vida do ativo, piorando ainda
  mais a superestimação da TIR.

  (nota 7: o CFROI também parte de fluxo de caixa operacional, mas inclui um
   encargo IMPLÍCITO pelo uso do ativo, porque é calculado como TIR ao longo da
   vida do ativo. O "cash return" simples só iguala o CFROI se a vida do
   ativo for INFINITA.)

RECOMENDAÇÃO: não use cash returns sobre capital como medida de performance.
```

**Onde encaixa.** Skills 4 `diagnostico-de-roic` e 1 `fundamentos-koller`.

**Veredito.** `ADICIONAR-ALTA` — item de bloqueio direto e frequente na prática ACTA. É comum, em mid-market, o vendedor ou o assessor apresentar **"EBITDA / imobilizado"** ou **"EBITDA / capital investido"** como retorno sobre capital. Koller mostra que essa família de métricas superestima sistematicamente o retorno real, com a razão exata (ignora a depreciação = ignora o consumo do capital) e a direção do erro (piora com ativo velho, pelo mesmo mecanismo do problema-ACTA de 25.3/25.5). Junto com 25.5, fecha a doutrina: **nem EBITDA/capital, nem ROIC sobre custo histórico depreciado — ROIC com PP&E e depreciação reexpressos em moeda corrente.**

**Página.** p697-698, nota 7 em p700.

---

# Capítulo 26 — Inflation (p701-719) — CRÍTICO PARA O BRASIL

Nota metodológica: as equações numeradas do capítulo saem como imagem no texto extraído. Onde indico "reconstruída", derivei a fórmula algebricamente a partir das definições que Koller enuncia em texto — o resultado é equivalente, mas está sinalizado.

---

## 26.1 Tese central: inflação DESTRÓI valor, e o mecanismo é o capex, não o custo

**O que é.** A tese do capítulo, e ela é contra-intuitiva:

```
Inflação alta e persistente destrói valor porque as empresas tipicamente NÃO
CONSEGUEM aumentar preços o suficiente para compensar os DESEMBOLSOS DE CAPITAL
mais altos — além dos custos operacionais mais altos.
Resultado: falham em manter a rentabilidade em termos REAIS.

"O impacto mais destruidor de valor da inflação NÃO É ÓBVIO." (p703)
```

Os efeitos são de três ordens:

**(a) Efeito de ativos/passivos monetários líquidos — perda one-off.**
```
Inflação cria uma perda ÚNICA de valor para empresas com ATIVOS MONETÁRIOS
LÍQUIDOS (posições fixas em termos nominais).
  Exemplo: um saldo de recebíveis perde 10% de valor quando a inflação
  sobe inesperadamente 10%.
  O inverso vale para PASSIVOS monetários líquidos, como dívida a taxa fixa
  (a empresa GANHA).
Dependendo do tamanho relativo de recebíveis, fornecedores e dívida da empresa,
o efeito direto pode ser POSITIVO OU NEGATIVO.
```

**(b) Efeito fiscal — escudo de depreciação corroído.**
```
As empresas podem acabar pagando MAIS IMPOSTO se os seus escudos fiscais de
depreciação não forem ajustados pela inflação para fins fiscais —
"e este é tipicamente o caso."
```
No Brasil isso é literal e absoluto: a correção monetária de balanço foi extinta em 1995 e a depreciação fiscal é calculada sobre custo histórico nominal. Um ativo comprado há 15 anos gera escudo fiscal em moeda de 15 anos atrás.

**(c) Efeito capex/depreciação — o principal.** Ver 26.2.

**Evidência de mercado (p703).** Vasta pesquisa acadêmica mostra inflação **negativamente correlacionada** com retorno de bolsa (Fama & Schwert 1977; Ritter & Warr 2002). Quando a inflação americana subiu de 2-3% (fim dos 1960) para ~10% (segunda metade dos 1970), o **P/E médio caiu de ~18 para abaixo de 10**; quando a inflação recuou, a partir de 1985, os P/E voltaram aos níveis históricos. Modigliani & Cohn (1979) e Ritter & Warr: **em períodos de inflação alta, investidores tendem a capitalizar fluxos de caixa REAIS a taxas de desconto NOMINAIS** — o erro exato que este capítulo ensina a evitar, e que empurra o custo de capital real para cima e deprime as avaliações de mercado.

**Onde encaixa.** Skill nova sugerida: **`inflacao-e-modelagem-nominal`**; alternativamente distribuir entre skills 7 `projecao-e-cenarios`, 8 `custo-de-capital` e 9 `valor-terminal`. Recomendo skill nova, dado o volume.

**Veredito.** `ADICIONAR-ALTA` — a assimetria "para preservar valor em inflação, os fluxos de caixa têm de crescer com a inflação, não os lucros" é o núcleo do capítulo e não está em nenhuma das 12 skills.

**Página.** p701-703, notas 2-4 em p717-718.

---

## 26.2 O exemplo numérico que prova a tese — e as três lições quantificadas

**O que é.** Este é o exemplo mais importante do capítulo. Vale reproduzir com números na skill.

**Cenário base (Exhibit 26.2, p704), sem inflação:**
```
Vendas estáveis                1.000/ano
EBITA                            100
Capital investido              1.000
Base de ativos: 15 grupos iguais, vidas remanescentes de 1 a 15 anos
   -> vida média remanescente = 8 anos
   -> depreciação anual = 1.000 / 8 = 125
   -> PP&E BRUTO = 15 x 125 = 1.875
   -> capex anual = depreciação = 125 (capacidade física constante)
Custo de capital 8% -> valor DCF = 1.000 (perpetuidade sem crescimento)
```

**Cenário 1 — repasse INCOMPLETO (Exhibit 26.3, p705).** A inflação salta para 15% no ano 2 e permanece perpetuamente, afetando custos e capex igualmente. A empresa **aumenta preços o suficiente para que o EBITA cresça com a inflação** e a margem EBITA/vendas fique perto de 10%, mantendo volume e capacidade física constantes. Ela até consegue **elevar o ROIC para quase 20% depois de 15 anos**.

```
Parece impressionante. É destruição de valor:

 - o EBITA cresce 15%/ano, MAS o EBITDA cresce apenas 7-8%/ano,
   porque a DEPRECIAÇÃO é registrada a custo NOMINAL HISTÓRICO
   (ou seja: o crescimento aparente do EBITA vem em boa parte de a
    depreciação estar "congelada" em moeda velha, não de ganho real);
 - o capex TEM de exceder a depreciação para manter a capacidade física
   constante -> QUEDA EFETIVA do FCF nos primeiros anos;
 - o crescimento do FCF só sobe gradualmente até a taxa de inflação no ANO 17;
 - o custo de capital sobe de 8% para 24%:
       (1 + 8%) x (1 + 15%) − 1 = 24,2%   [nota 7]
 - RESULTADO: o valor DCF no início do ano 2, com valor terminal calculado
   a partir do ano 17, cai de 1.000 para 481. PERDA DE MAIS DE 50% DO VALOR.
```

**Cenário 2 — repasse COMPLETO (Exhibit 26.4, p706).** Para repassar a inflação integralmente sem perder volume, a empresa tem de fazer os **FLUXOS DE CAIXA**, não os lucros, crescerem 15%/ano. Nesse caso o valor DCF no início do ano 2 é **integralmente preservado** (1.000).

```
Mas fazer todos os fluxos de caixa crescerem com a inflação significa que os
LUCROS têm de crescer MUITO MAIS RÁPIDO que a inflação:

  Crescimento do EBITA no ano 2:          mais de 33%   (contra inflação de 15%)
  Margem de vendas:            10,0%  ->  11,6%   já no ano 2
  ROIC:                        10,0%  ->  13,4%   já no ano 2
  Após 15 anos de inflação constante:
  Margem de vendas:                        17,6%
  ROIC:                                    34,7%

O ROIC precisa subir ATÉ ESSE PONTO só para acompanhar a inflação e o
custo de capital mais alto.
```

**Por que o ROIC precisa subir MAIS que a inflação (nota 8, p718) — a mecânica exata:**
```
Porque capital investido e depreciação NÃO crescem com a inflação IMEDIATAMENTE.
No ano 2 o capex anual sobe 15%, mas isso adiciona apenas 15% x 125 = 18,75
ao capital investido. Ativos são adquiridos no fim de cada ano e depreciados pela
primeira vez no ano seguinte. A depreciação anual muda no ano 3 em apenas
1/15 x 18,75 = 1,25.
Em cada ano a empresa repõe apenas 1/15 dos ativos a preços inflacionados, então
LEVA 15 ANOS DE INFLAÇÃO CONSTANTE para atingir o estado estacionário em que
capital e depreciação crescem à taxa de inflação.
Margem e ROIC sobem TODO ANO até o estado estacionário no ano 17.
```

**A CONCLUSÃO GERAL (p707) — a regra de leitura de série histórica:**
```
"Depois de cada ACELERAÇÃO da inflação, devemos ESPERAR que o lucro reportado
supere a inflação, e que a MARGEM DE VENDAS e o ROIC REPORTADOS AUMENTEM —
mesmo que, em termos reais, NADA TENHA MUDADO."
```

**A evidência histórica de que as empresas NÃO conseguem (p707).** Nos EUA dos anos 1970-80, com inflação de 10%+, os ROICs **permaneceram na faixa de 7-12%**. Se as empresas tivessem repassado a inflação, deveriam ter reportado ROICs muito mais altos. Em vez disso, **mal conseguiram manter os retornos nos níveis pré-inflação**. Causas prováveis: (i) não conseguem repassar sem perder volume, ou repassam com defasagem; (ii) **os gestores não ajustam suficientemente as metas de crescimento de lucro e de margem quando confrontados com inflação**.

```
REGRA: se uma empresa mantém margem e ROIC CONSTANTES em tempos de inflação,
os fluxos de caixa e o valor estão sendo CORROÍDOS em termos reais.
Manter o crescimento do EBITA em linha com a inflação TAMBÉM É INSUFICIENTE
para sustentar o valor — e é ainda mais insuficiente para um indicador
alavancado como o lucro por ação.
```

**Onde encaixa.** Skill nova `inflacao-e-modelagem-nominal`; skills 3 `qualidade-de-resultados`, 4 `diagnostico-de-roic` e 7 `projecao-e-cenarios`.

**Veredito.** `ADICIONAR-ALTA` — máxima prioridade. Duas aplicações imediatas e opostas em mandato sell-side brasileiro:
1. **Contra a narrativa fácil.** "Nossa margem e nosso ROIC subiram" pode ser efeito puro de depreciação em moeda velha, não de ganho operacional. O teste é: o **EBITDA** cresceu acima da inflação, ou só o EBITA/margem?
2. **A favor de uma projeção honesta.** Ao projetar, se a inflação de longo prazo é 4%, **capex de manutenção tem de crescer acima da depreciação contábil** para manter a capacidade física, e o FCF projetado cai. Modelo que projeta capex = depreciação em ambiente inflacionário superestima o FCF sistematicamente. Esse é um erro de modelo muito comum e com direção conhecida.

**Página.** p703-708, notas 5-9 em p717-718.

---

## 26.3 As QUATRO distorções na análise histórica e como corrigir cada uma

**O que é.** Em países com inflação extrema (>25%/ano) as empresas frequentemente reportam **em moeda de fim de exercício**: na DRE, receitas e custos lançados ao longo do ano são reexpressos ao poder de compra do fim do ano (senão somá-los não teria relevância); no balanço, há ajustes em ativo imobilizado, estoque e patrimônio — fornecedores e recebíveis já estão em moeda de fim de ano.

Na maioria dos países, porém, as demonstrações **não** são ajustadas. Distorções resultantes:
```
BALANÇO: ativos NÃO MONETÁRIOS (estoques e PP&E) aparecem a valores MUITO
         ABAIXO do valor de reposição corrente.
DRE:     a DEPRECIAÇÃO é MUITO BAIXA relativamente ao custo de reposição corrente;
         vendas e custos de DEZEMBRO e de JANEIRO do mesmo ano são somados
         COMO SE representassem o mesmo poder de compra.
```

As quatro correções obrigatórias em análise histórica (p708-709):

### (1) Crescimento — superestimado
```
Deflacione com um índice ANUAL de inflação SE as vendas estiverem uniformemente
distribuídas ao longo do ano.
Se NÃO estiverem, use índices TRIMESTRAIS OU MENSAIS para deflacionar as vendas
de cada intervalo correspondente.
```
(No Brasil: alvo com sazonalidade forte — agro, educação com matrícula concentrada, resíduos com contrato indexado em data-base — exige deflacionamento mensal, não anual.)

### (2) Giro do capital — tipicamente superestimado
```
Causa: ativos operacionais carregados a CUSTO HISTÓRICO.
Correção A: aproxime o custo CORRENTE dos ativos de vida longa ajustando os
  valores reportados por um índice de inflação correspondente à VIDA MÉDIA
  ESTIMADA desses ativos.
Correção B (alternativa): desenvolva razões de VENDAS REAIS sobre INDICADORES DE
  CAPACIDADE FÍSICA apropriados ao setor — por exemplo, vendas por metro quadrado
  no varejo de consumo.
Estoques também precisam ser reexpressos se o giro é BAIXO e a inflação MUITO ALTA.
```

### (3) Margem operacional — pode estar superestimada
```
Causas: (a) depreciação muito baixa; (b) estoques de giro lento geram grandes
GANHOS NOMINAIS DE ESTOCAGEM (holding gains).
Correção da depreciação: decorre automaticamente do ajuste do PP&E (item 2).
Correção do custo caixa: estime as despesas operacionais em base de custo corrente
  INFLACIONANDO os custos reportados pelo TEMPO MÉDIO DE PERMANÊNCIA EM ESTOQUE.
Alternativa mais simples: use razões históricas de EBITDA/vendas para avaliar a
  performance da empresa relativamente aos pares — essas razões pelo menos NÃO
  sofrem do viés induzido pela depreciação.
```

### (4) Índices de crédito e estrutura de capital — distorcidos, exigem cautela
```
Distorções são ESPECIALMENTE significativas em índices de SOLVÊNCIA
(dívida/patrimônio, dívida/ativo total), porque:
  - ativos de vida longa estão SUBESTIMADOS frente ao custo de reposição;
  - dívida a taxa flutuante está expressa em unidades de moeda CORRENTE.
Recomendação: use índices de COBERTURA como EBITDA / despesa de juros.
  São menos expostos a distorções contábeis, porque a depreciação não os afeta e,
  quando a inflação é persistente, o financiamento por dívida é majoritariamente
  a taxa FLUTUANTE ou em MOEDA ESTRANGEIRA.
  (nota 10: EBITA/juros JÁ sofre distorção, se o lucro operacional está
   superestimado por depreciação baixa e custo baixo de materiais adquiridos.)
```

**Onde encaixa.** Skills 4 `diagnostico-de-roic` (giro e margem), 3 `qualidade-de-resultados` (holding gains de estoque), 5 `capital-de-giro-e-capex` (reexpressão do PP&E) e skill nova `inflacao-e-modelagem-nominal`.

**Veredito.** `ADICIONAR-ALTA` — checklist executável de quatro itens, aplicável a **toda** análise histórica de alvo brasileiro. Casa exatamente com o método de reexpressão do Cap. 25.5, e a alternativa "vendas por unidade de capacidade física" é ótima para os setores ACTA (receita por tonelada processada, por m³ de aterro licenciado, por aluno, por leito, por hectare, por km de rede). Também dá o **índice de crédito correto** (EBITDA/juros, não dívida/PL) para o diálogo de estrutura de capital no mid-market brasileiro.

**Página.** p708-709, nota 10 em p718.

---

## 26.4 A INCONSISTÊNCIA CLÁSSICA e a fórmula de amarração real ↔ nominal

**O que é.** A inconsistência que Modigliani & Cohn documentaram no mercado — capitalizar fluxo real a taxa nominal — tem uma amarração matemática exata que precisa ser imposta ano a ano:

```
   (1 + WACC_nominal) = (1 + WACC_real) x (1 + i)

equivalentemente:

   WACC_real    = (1 + WACC_nominal) / (1 + i) − 1
   WACC_nominal = (1 + WACC_real) x (1 + i) − 1

NÃO use a aproximação por subtração (WACC_real = WACC_nominal − i) quando a
inflação é alta: no exemplo de Koller, 8% real com 15% de inflação dá
24,2% nominal, não 23%.

E a exigência é ANO A ANO: "certifique-se de que as estimativas de WACC em termos
reais e nominais estão definidas CONSISTENTEMENTE com a premissa de inflação (i)
DE CADA ANO." Se a premissa de inflação varia no tempo (20% no ano 1, 10% depois),
o WACC nominal tem de variar no tempo também.
```

Consequência que a skill 8 precisa absorver: **um WACC nominal único e constante só é consistente com uma premissa de inflação única e constante.** Se você projeta IPCA 5,5% no ano 1 e 3,5% no terminal, e usa um WACC nominal fixo, você está usando WACCs reais implicitamente diferentes em cada ano — o que pode ser aceitável se declarado, mas nunca é o padrão intencional.

**Erro simétrico e mais grave (a "inconsistência clássica" do enunciado da tarefa):** projetar em termos reais (receita crescendo só por volume, custos e capex constantes em moeda de hoje) e descontar a um **WACC nominal** construído com CAPM sobre NTN-B/pré + CRP nominal. Isso subavalia o negócio pelo fator de inflação acumulado no horizonte — em 10 anos a 4% ao ano, cerca de 48% de erro no valor terminal. E o inverso (projeção nominal descontada a WACC real) superavalia.

**Onde encaixa.** Skills 8 `custo-de-capital` e 9 `valor-terminal`; skill nova `inflacao-e-modelagem-nominal`.

**Veredito.** `ADICIONAR-ALTA` — é a armadilha explicitamente suspeitada, e Koller dá a fórmula multiplicativa e a exigência de consistência ano a ano. Item obrigatório de checklist na skill 11 `revisao-de-modelo`: **declarar a moeda e o regime (real ou nominal) do modelo em uma linha explícita, e verificar que o WACC obedece a (1+WACC_N) = (1+WACC_R)(1+i) com o MESMO i da projeção.**

**Página.** p715.

---

## 26.5 A abordagem HÍBRIDA — por que nenhum dos dois regimes basta sozinho

**O que é.** Koller é categórico: ambientes de inflação alta **exigem uma abordagem híbrida**, porque cada regime tem forças distintas (Exhibit 26.5).

```
PROJETAR EM TERMOS REAIS — problemas:
  (a) dificulta calcular IMPOSTOS corretamente, porque os encargos fiscais são
      frequentemente baseados em demonstrações NOMINAIS;
  (b) exige projetar EXPLICITAMENTE o efeito das variações de capital de giro no
      fluxo de caixa, porque esse efeito NÃO decorre automaticamente da variação
      anual do capital de giro em termos reais (ver 26.7).

PROJETAR EM TERMOS NOMINAIS — problemas:
  (a) dificulta projetar o CAPEX futuro, porque a relação tipicamente estável entre
      receita e ativo fixo NÃO SE SUSTENTA em tempos de inflação alta;
  (b) por consequência, também dificulta projetar DEPRECIAÇÃO e EBITA.

=> Use ELEMENTOS DE AMBOS. E: "os valuations em termos reais e nominais devem
   render um valor IDÊNTICO" — o que faz do par um CROSS-CHECK de validade.

Princípio de bloqueio (p709): "ajustes CONTÁBEIS não devem afetar o fluxo de
caixa livre." (nota 13: as projeções são para fins de valuation, não
necessariamente conforme normas locais de correção monetária;
o FCF não é afetado por tais ajustes.)
```

**Onde encaixa.** Skills 7 `projecao-e-cenarios` e nova `inflacao-e-modelagem-nominal`.

**Veredito.** `ADICIONAR-ALTA` — resolve a pergunta prática "modelo em real ou em nominal?" com a resposta correta: **os dois, com amarração**. E identifica exatamente **onde** cada regime falha, o que dá o desenho do modelo: drivers operacionais e capex/PP&E em real; impostos e capital de giro em nominal.

**Página.** p709-710, nota 13 em p719.

---

## 26.6 O procedimento em CINCO PASSOS

**O que é.** Exemplo de referência: receita crescendo 2% em termos reais, inflação de 20% no primeiro ano de projeção e 10% depois; fluxos ao fim do ano.

### Passo 1 — Projetar a performance operacional em TERMOS REAIS (p712)
```
Antes: converta os balanços e DREs HISTÓRICOS nominais para termos reais
(usualmente na moeda do ano corrente). No MÍNIMO, faça uma aproximação em termos
reais da evolução histórica dos value drivers-chave — CRESCIMENTO e RETORNO SOBRE
CAPITAL — e do GIRO DO CAPITAL e da MARGEM EBITA subjacentes, para entender a
verdadeira economia do negócio.

Depois, projete em termos reais:
 - receita futura e despesas CAIXA          -> EBITDA
 - PP&E e CAPEX, a partir da premissa de GIRO DO CAPITAL EM TERMOS REAIS
 - CAPITAL DE GIRO, a partir da receita projetada e das premissas de
   dias de capital de giro necessários
 - DEPRECIAÇÃO anual, a partir do PP&E líquido projetado e da premissa de
   VIDA ÚTIL dos ativos            -> EBITA em termos reais
(nota 12: este passo assume que todas as despesas dentro do EBITDA são caixa.)
```

### Passo 2 — Construir as demonstrações em TERMOS NOMINAIS (p713)
```
 - receita, despesas caixa, EBITDA e CAPEX nominais = equivalentes reais
   MULTIPLICADOS pelo índice de inflação estimado do ano
 - PP&E líquido, ANO A ANO = saldo do ano anterior
                             + capex NOMINAL
                             − depreciação NOMINAL
   (a depreciação nominal é estimada como um PERCENTUAL DO PP&E LÍQUIDO
    de acordo com a vida útil estimada do ativo)
 - CAPITAL DE GIRO = valores reais x índice de inflação do ano
   (ou derivado da receita real e dos dias de capital de giro)
 - EBITA nominal = EBITDA nominal − depreciação NOMINAL
 - IMPOSTOS calculados sobre o EBITA NOMINAL, SEM correção inflacionária —
   a menos que a legislação fiscal permita tais correções.
     *** No Brasil NÃO permite. Este é o passo que captura o custo fiscal real
         da inflação e que um modelo puramente real perde. ***

Para demonstrações COMPLETAS (necessárias para decisões de dividendo, estrutura
de capital, dívida, recompra), adicionalmente:
 - projete despesa de juros e outros itens não operacionais em termos NOMINAIS
   (com base no balanço do ano anterior);
 - verifique que patrimônio = patrimônio do ano anterior + lucro − dividendos
   +/− emissões ou recompras;
 - feche o balanço com dívida ou títulos negociáveis (plug).
```

### Passo 3 — Construir as demonstrações em TERMOS REAIS (p714)
```
A maior parte dos itens operacionais já veio do Passo 1. Agora:
 - inclua os IMPOSTOS em termos reais, DEFLACIONANDO os impostos nominais
   estimados no Passo 2   <- este é o elo que fecha o híbrido
 - use o índice de inflação para converter dívida, títulos negociáveis, despesa
   de juros, imposto de renda e itens não operacionais das demonstrações nominais
   para termos reais;
 - a conta de PATRIMÔNIO em termos reais é o PLUG que fecha o balanço.

TESTE DE VALIDAÇÃO OBRIGATÓRIO:
  patrimônio real = patrimônio real do ano anterior
                    + lucro − dividendos
                    +/− emissões / recompras
                    +/− GANHOS OU PERDAS INFLACIONÁRIOS sobre ativos e passivos
                        MONETÁRIOS (caixa, recebíveis, fornecedores, dívida)
```

### Passo 4 — Projetar o FCF em ambos os termos (p714)
```
Siga a abordagem geral do cap. 10. A ÚNICA diferença:

  Investimento em capital de giro em TERMOS REAIS =
      aumento do capital de giro (real)
    + PERDA MONETÁRIA devida à inflação

  [reconstruída] perda monetária do ano t = NWC_real,(t−1) x i_t / (1 + i_t)

  Racional (nota 14): mesmo para ativos mantidos em NÍVEL CONSTANTE nos balanços
  em termos reais, investimentos de REPOSIÇÃO são exigidos a PREÇOS CRESCENTES
  num ambiente inflacionário. Esses investimentos de reposição representam uma
  SAÍDA DE CAIXA, também em termos reais, mas NÃO APARECEM nas diferenças de
  balanço em termos reais de um ano para o outro. Em contraste, o fluxo de
  investimento NOMINAL DECORRE das diferenças de balanço nominal ano a ano.

TESTE DE CONSISTÊNCIA: use o índice de inflação para converter os FCFs das
projeções NOMINAIS para termos reais. Eles devem IGUALAR os FCFs das projeções
em termos reais, EM CADA ANO.
```

### Passo 5 — Estimar o valor DCF em ambos os termos (p714-716)
Três questões, tratadas em 26.4 (WACC), 26.7 (horizonte) e 26.8 (fórmula do valor terminal real).

**Onde encaixa.** Skill nova `inflacao-e-modelagem-nominal`, com ganchos nas skills 5, 6, 7, 8 e 9.

**Veredito.** `ADICIONAR-ALTA` — é um procedimento fechado, com testes de amarração em cada passo. Diretamente escrevível como skill oráculo: cinco passos, com o que projetar em qual regime e três testes de consistência (FCF real = FCF nominal deflacionado; patrimônio real fecha com ganho/perda monetária; valor real = valor nominal).

**Página.** p710-716, notas 11-14 em p718-719.

---

## 26.7 Horizonte explícito de projeção tem de ser MUITO mais longo

**O que é.**
```
"Certifique-se de que o período explícito de projeção é LONGO O SUFICIENTE para o
modelo alcançar um ESTADO ESTACIONÁRIO, com taxas de crescimento CONSTANTES do
fluxo de caixa livre, NO ANO em que você aplica a fórmula de valor terminal.
POR CAUSA DA FORMA EM QUE A INFLAÇÃO AFETA CAPEX E DEPRECIAÇÃO,
VOCÊ PRECISA DE UM HORIZONTE MUITO MAIS LONGO
do que em valuations sem inflação ou com inflação baixa."
```
Quantificação a partir da mecânica da nota 8: como a empresa repõe apenas 1/N dos ativos por ano a preços inflacionados, **leva aproximadamente N anos (a vida útil dos ativos) de inflação constante para o capital e a depreciação passarem a crescer à taxa de inflação**. No exemplo com vida de 15 anos, o estado estacionário só chega no ano 17 — e é a partir dali que o valor terminal pode ser calculado.

```
REGRA PRÁTICA DERIVADA:
  horizonte explícito mínimo ~ vida útil média dos ativos operacionais
  (+ 2 anos), sempre que a inflação for material e a base de ativos, longeva.
```

**Onde encaixa.** Skills 9 `valor-terminal` e 7 `projecao-e-cenarios`.

**Veredito.** `ADICIONAR-ALTA` — tem consequência prática direta e desconfortável para o padrão de mercado. A prática mid-market brasileira usa **5 anos de projeção explícita + perpetuidade**. Com IPCA de 4% e imobilizado de vida útil de 15-25 anos (aterro, planta industrial, rede), o modelo **não está em estado estacionário no ano 5** — o capex está subestimado e a depreciação, defasada, exatamente na hora de calcular a perpetuidade, que é 60-80% do valor. Duas saídas práticas a escrever na skill: (i) estender a projeção explícita a 10-15 anos quando a base de ativos é longeva; (ii) manter 5 anos, mas calcular o valor terminal com um **capex normalizado em estado estacionário** — isto é, `capex terminal = depreciação x fator de reexpressão para moeda de reposição + capex de crescimento`, em vez de `capex terminal = depreciação`. A opção (ii) é a que cabe no formato de deck da ACTA e vale como regra explícita.

**Página.** p715, nota 6 e nota 8 em p717-718.

---

## 26.8 A fórmula de valor terminal em TERMOS REAIS precisa ser AJUSTADA

**O que é.** A KVD formula (cap. 14) aplica-se diretamente ao valor terminal **nominal**, mas **precisa de ajuste** para o valor terminal em termos **reais** em ambiente de inflação alta:

```
"O retorno sobre capital nas projeções em termos reais (ROIC_R) SUPERESTIMA os
retornos econômicos NO CASO DE CAPITAL DE GIRO LÍQUIDO POSITIVO.
O fluxo de caixa livre em termos reais DIFERE do fluxo implícito na fórmula de
value driver por um montante igual à PERDA MONETÁRIA ANUAL sobre o capital
de giro líquido."
```

Reconstrução algébrica (Koller enuncia os componentes; a equação é imagem):
```
KVD padrão:
   FCF = NOPAT x ( 1 − g / ROIC )

Em termos reais, o FCF verdadeiro é MENOR:
   FCF_R = NOPAT_R x ( 1 − g_R / ROIC_R ) − perda monetária
   perda monetária = [ i / (1 + i) ] x NWC_R

Substituindo NWC_R = (NWC_R / IC_R) x IC_R  e  IC_R = NOPAT_R / ROIC_R :

   FCF_R = NOPAT_R x [ 1 − (1/ROIC_R) x ( g_R + (i/(1+i)) x (NWC_R / IC_R) ) ]

Ou seja, a KVD real usa uma TAXA DE CRESCIMENTO EFETIVA MAJORADA:

   g* = g_R + [ i / (1 + i) ] x ( NWC_R / IC_R )

   Valor terminal_real = NOPAT_R,(t+1) x ( 1 − g* / ROIC_R )
                         --------------------------------------
                                  WACC_R − g_R

   Atenção ao denominador: continua sendo (WACC_R − g_R), com o crescimento
   REAL — o g* entra SÓ no numerador, como taxa de reinvestimento efetiva.

Koller: "a estimativa de valor terminal resultante é a MESMA obtida de uma
fórmula de perpetuidade com crescimento sobre o FCF. Após indexação pela
inflação, também IGUALA as estimativas de valor terminal derivadas das
projeções nominais."
```

Leitura econômica: com capital de giro líquido **positivo**, parte do "retorno real" é ilusória, porque manter o mesmo capital de giro **em termos reais** exige injetar caixa nominal adicional todo ano — uma saída de caixa que o balanço real não mostra. Quanto maior a razão `NWC/capital investido` e maior a inflação, maior o ajuste. Se o capital de giro líquido é **negativo** (caso dos negócios de capital leve do cap. 24), o sinal se inverte e há **ganho** monetário.

**Onde encaixa.** Skills 9 `valor-terminal` e nova `inflacao-e-modelagem-nominal`.

**Veredito.** `ADICIONAR-ALTA` — é a única correção formal da KVD formula que encontrei nesta faixa do livro, e é diretamente relevante: alvos ACTA em indústria, agro e engenharia têm **capital de giro líquido positivo e grande** (PMR longo em contratos públicos de resíduos e engenharia, estoque em indústria e agro), e a ACTA opera num país com inflação estruturalmente de 4-6%. Exemplo de magnitude: NWC/capital investido de 40%, inflação de 5% -> `g*` sobe em 0,05/1,05 × 0,40 = 1,9 p.p. Com ROIC real de 12%, isso reduz a razão `(1 − g*/ROIC)` em cerca de 16 pontos percentuais relativos do numerador — efeito material no valor terminal. Alternativa prática e mais simples para o formato ACTA: **modelar o valor terminal em termos NOMINAIS**, onde a KVD padrão vale sem ajuste, e usar a versão real apenas como cross-check.

**Página.** p715-716.

---

## 26.9 Estoque em inflação: LIFO vs. FIFO

**O que é.** Questão 8 do capítulo (p717) levanta o ponto: em inflação alta, qual metodologia representa melhor o valor verdadeiro do estoque — LIFO ou FIFO? — e como isso muda em deflação. O texto do capítulo não desenvolve a resposta, mas a mecânica implícita nas correções da p709 é: **FIFO deixa o estoque no BALANÇO próximo do custo de reposição, mas joga custo velho (barato) no CPV, inflando a margem com ganhos nominais de estocagem; LIFO joga custo recente no CPV (margem mais fiel) mas deixa o estoque do balanço em moeda velha.**

Relevância brasileira: **o Brasil não admite LIFO** (nem contábil, nem fiscal — o CPC 16/IAS 2 proíbe e a legislação fiscal exige custo médio ponderado móvel ou PEPS). Logo, no alvo brasileiro **a distorção é sempre a do FIFO/média**: margem operacional inflada por ganho nominal de estocagem em períodos de aceleração inflacionária, especialmente onde o giro de estoque é baixo.

**Onde encaixa.** Skills 3 `qualidade-de-resultados` e 5 `capital-de-giro-e-capex`.

**Veredito.** `ADICIONAR-MÉDIA` — pequeno, mas concreto e verificável: **em ano de aceleração inflacionária, alvo com giro de estoque baixo (agro, indústria com matéria-prima commoditizada, distribuição) tem margem inflada por holding gain**. O ajuste é o da p709: inflacionar os custos reportados pelo tempo médio de permanência em estoque. Ligar ao PME que a skill 5 já calcula.

**Página.** p709, p717 (questão 8).

---

# Capítulo 27 — Cross-Border Valuation (p720-744)

## 27.1 Princípio de invariância e os DOIS métodos legítimos

**O que é.**
```
"O valuation de uma empresa ou unidade de negócio deve SEMPRE resultar NO MESMO
VALOR, independentemente da moeda ou do mix de moedas em que os fluxos de caixa
são projetados."
```
Para isso, use premissas monetárias consistentes e **um dos dois métodos**:

```
MÉTODO 1 — TAXA SPOT (spot-rate method)
  1. Projete os fluxos na MOEDA ESTRANGEIRA.
  2. Desconte ao CUSTO DE CAPITAL NAQUELA MOEDA.
  3. Converta o VALOR PRESENTE para a moeda doméstica pela TAXA SPOT.

MÉTODO 2 — TAXA FORWARD (forward-rate method)
  1. Projete os fluxos na MOEDA ESTRANGEIRA.
  2. Converta CADA FLUXO, ANO A ANO, para a moeda doméstica pelas
     TAXAS FORWARD relevantes.
  3. Desconte os fluxos convertidos ao CUSTO DE CAPITAL na MOEDA DOMÉSTICA.
```
No exemplo (subsidiária suíça de matriz alemã): spot-rate dá CHF 589,9 mi / 1,200 = EUR 491,6 mi; forward-rate dá **exatamente** EUR 491,6 mi.

**As TRÊS condições de consistência que fazem os dois métodos coincidirem (p724):**
```
1. As premissas de INFLAÇÃO por trás das projeções de fluxo numa determinada moeda
   têm de ser CONSISTENTES com as premissas de inflação embutidas nas TAXAS DE JUROS
   daquela moeda.
2. As TAXAS FORWARD entre duas moedas têm de ser CONSISTENTES com as diferenças de
   INFLAÇÃO e de TAXA DE JUROS entre essas moedas.
3. A CONVERSÃO das projeções de fluxo de uma moeda para outra deve ser feita
   a TAXAS FORWARD.

"Você NÃO PODE fazer premissas INDEPENDENTES para inflação, taxa de juros e
taxa de câmbio forward entre moedas."
```

**Proibição explícita (p726):** *"NÃO se baseie em taxas de câmbio 'PROJETADAS' (forecast) para as suas projeções, porque essas taxas podem induzir um VIÉS no seu valuation se não forem consistentes com as suas premissas de inflação e de taxa de desconto."*

**Onde encaixa.** Skills 8 `custo-de-capital` (que já faz USD -> BRL por diferencial de inflação), 7 `projecao-e-cenarios` e 11 `revisao-de-modelo`.

**Veredito.** `ADICIONAR-ALTA` — a skill 8 já converte USD->BRL por diferencial de inflação, o que é o **método 1**. O aditivo é: (i) nomear e formalizar os **dois** métodos como equivalentes e usá-los como **cross-check** um do outro; (ii) as três condições de consistência como checklist; (iii) a **proibição de usar câmbio projetado** (a tentação recorrente é pegar a curva de dólar do boletim Focus ou do BTG/consenso e converter o fluxo — Koller mostra que isso injeta viés, porque a projeção de câmbio de mercado não é consistente com a taxa de desconto que você está usando).

**Página.** p720-724, p726.

---

## 27.2 Efeito Fisher: amarração entre inflação e juros na MESMA moeda

**O que é.**
```
Para CADA moeda, a inflação i_t de cada ano tem de se alinhar à taxa de juros
NOMINAL FORWARD f_t e à taxa de juros REAL R_t daquele ano:

     ( 1 + f_t ) = ( 1 + R_t ) x ( 1 + i_t )

E a taxa de N anos, vista de hoje, é a MÉDIA GEOMÉTRICA das taxas nominais
forward de cada ano:

     ( 1 + r_N )^N = ( 1 + f_1 ) x ( 1 + f_2 ) x ... x ( 1 + f_N )
```

**Onde encaixa.** Skill 8 `custo-de-capital`.

**Veredito.** `ADICIONAR-MÉDIA` — provavelmente já implícito na skill 8, mas a exigência de **ano a ano** (e não de uma média única) e a **média geométrica** para consolidar prazos é a parte precisa. Aplicação BR: a NTN-B dá a taxa real por vértice e a curva pré dá a nominal; a inflação implícita é o quociente, não a diferença. Coerência obrigatória: a inflação implícita extraída do par pré/NTN-B tem de ser a **mesma** usada para inflacionar receita, custo e capex no modelo nominal.

**Página.** p724-725, nota 1 em p743.

---

## 27.3 Paridade de taxa de juros: a fórmula do câmbio forward

**O que é.**
```
A taxa de câmbio forward do ano t, X_t, deve igualar a taxa SPOT corrente X_0
multiplicada pela razão das taxas de juros NOMINAIS das duas moedas no intervalo t:

                        ( 1 + r_F )^t
     X_t  =  X_0  x  -------------------
                        ( 1 + r_D )^t

   onde r_F = taxa de juros na moeda ESTRANGEIRA
        r_D = taxa de juros na moeda DOMÉSTICA
   e X é cotado em unidades da moeda ESTRANGEIRA por unidade da moeda DOMÉSTICA.
   (Regra mnemônica: a moeda que está no NUMERADOR da cotação tem a sua taxa
    de juros no NUMERADOR da fórmula.)

Exemplo do livro: X_0 = 1,200 CHF/EUR; r_F (CHF, 4 anos) = 4,16%;
r_D (EUR, 4 anos) = 4,93%
     X_4 = 1,200 x (1,0416^4 / 1,0493^4) = 1,165 CHF/EUR
(o franco APRECIA, porque tem juro nominal MENOR)

Verificação de arbitragem (nota 2): tomar CHF 1.200 hoje a 4,16%/ano
-> CHF 1.412 a pagar em 2024 -> ao forward de 1,165, EUR 1.212.
Alternativamente, tomar EUR 1.000 hoje a 4,93%/ano -> EUR 1.212 em 2024.
IDÊNTICO. Ou seja: sob paridade, tomar dívida em CHF ou em EUR não tem impacto
no valor (exceto por implicações fiscais — ver 27.5).
```

**A versão em INFLAÇÃO (PPP relativa, p726):** Fisher + paridade de juros implicam que a razão das inflações também tem de se alinhar ao forward:
```
                        (1 + i_F,1)(1 + i_F,2)...(1 + i_F,t)
     X_t  =  X_0  x  ----------------------------------------
                        (1 + i_D,1)(1 + i_D,2)...(1 + i_D,t)

   i_F = inflação na moeda estrangeira;  i_D = inflação na moeda doméstica.

No exemplo, o forward de 4 anos amarra NÃO SÓ com os juros de EUR e CHF,
mas TAMBÉM com as inflações das duas moedas.
```

**Recomendação sobre forwards de mercado (p725):** para moedas com mercado futuro líquido, a arbitragem empurra o forward para a paridade de juros, **mas sempre verifique se as taxas são consistentes com a inflação e os juros que você está usando** na projeção e no valuation. Se não forem, use **forwards sintéticos** construídos pela paridade.

**Onde encaixa.** Skill 8 `custo-de-capital`.

**Veredito.** `ADICIONAR-ALTA` — dá o **fecho matemático** do que a skill 8 faz por diferencial de inflação, e generaliza para o diferencial de **juros** (que é o dado observável e líquido no Brasil: cupom cambial / DDI vs. pré). Nota prática crucial para o Brasil: o forward de USD/BRL cotado no mercado (cupom cambial) reflete **diferencial de JUROS**, enquanto a conversão da skill 8 usa **diferencial de INFLAÇÃO**. Sob Fisher + paridade os dois coincidem, mas **na prática brasileira NÃO coincidem**, porque o juro real brasileiro é estruturalmente muito acima do americano (prêmio de risco-país embutido na taxa doméstica). Consequência: converter fluxo BRL para USD pelo forward de mercado (diferencial de juros) produz **valor menor** do que converter por diferencial de inflação — a diferença é exatamente o prêmio de risco-país embutido no juro nominal brasileiro. **É preciso escolher e declarar qual dos dois se usa, e nunca misturar** (por exemplo, converter por forward de mercado E ainda somar CRP no WACC = dupla contagem do risco-país). Isso merece ser regra explícita na skill 8.

**Página.** p725-726, nota 2 em p743.

---

## 27.4 Custo de capital: CAPM global vs. CAPM local, e a proibição de prêmios ad hoc

**O que é.**
```
REGRA MESTRA: premissas monetárias consistentes.
"A inflação esperada que determina os fluxos de caixa em moeda estrangeira
deve IGUALAR a inflação esperada incluída no WACC daquela moeda,
ATRAVÉS DA TAXA LIVRE DE RISCO."

CAPM GLOBAL — recomendado para investidores e empresas sem restrição
(ou com pouca restrição) a investir fora do mercado doméstico:
     r_j = r_f + beta_(j,G) x ( r_G − r_f )
  Uma ÚNICA taxa livre de risco EM TERMOS REAIS; prêmio de risco de mercado e
  beta medidos contra uma carteira de mercado GLOBAL.
  "O custo de capital para ativos domésticos e estrangeiros é determinado
   EXATAMENTE DA MESMA FORMA."

CAPM LOCAL — recomendado APENAS para investidores e empresas sujeitos a
CONTROLES DE CAPITAL que os impedem de investir livremente no exterior:
     r_j = r_(f,L) + beta_(j,L) x ( r_L − r_(f,L) )
  taxa livre de risco local, prêmio da carteira local sobre ela, beta local
  medido contra essa mesma carteira local.
  Consequência: valuations em mercados restritos podem ficar FORA DE LINHA com
  os globais — Koller relata ter encontrado isso na Índia e em alguns
  mercados asiáticos.
```

**PROIBIÇÃO EXPLÍCITA de prêmios ad hoc (p727):**
```
"Muitos praticantes fazem ajustes AD HOC na taxa de desconto para refletir risco
político, risco de investimento estrangeiro ou risco de moeda. NÃO RECOMENDAMOS.
Como a discussão sobre mercados emergentes explica no cap. 35, risco político ou
de país é DIVERSIFICÁVEL e é melhor tratado usando CENÁRIOS PONDERADOS POR
PROBABILIDADE de fluxos de caixa futuros."
```

**Por que não usar CAPM local em mercado integrado (p731-732), 3 razões:**
1. Aplicando CAPM local a investimentos em vários países, você precisa estimar o prêmio de risco de mercado **e** o beta local **de cada país**, em vez de apenas o prêmio global.
2. Você **não pode** estimar o beta da empresa como média dos betas de uma amostra de pares setoriais — se os pares estão em países diferentes, **os betas locais não são diretamente comparáveis**. (Isso destrói a técnica de reduzir o erro-padrão do beta pela média setorial, recomendada no cap. 15.)
3. Prêmios de risco **locais** são tipicamente **menos estáveis no tempo** que o agregado global.

Evidência (Harris, Marston, Mishra & O'Brien, 2003): para mercados bem integrados — EUA, Reino Unido, Alemanha, França, Holanda, Suíça — as estimativas de custo de capital pelo CAPM local e pelo global **são muito próximas**.

**Argumento empírico a favor do global (p728):** Procter & Gamble e Unilever vendem os mesmos produtos no mundo, têm a mesma dispersão geográfica e as mesmas bases de investidor; a única diferença é o domicílio. "Seria estranho se as duas tivessem custos de capital diferentes." E: "em geral, o **domicílio** de empresas de resto comparáveis **não influencia** os seus níveis de valuation" — múltiplos de farmacêuticas americanas e europeias ficam todos numa faixa estreita em torno de **10x EV/EBIT**, independentemente do domicílio.

**Prêmio de risco de mercado global (p729):** índices globais raramente têm série longa, então usa-se estimativa compilada para o mercado global ou para o mercado americano bem diversificado como base. A correlação entre S&P 500 e índices globais (MSCI World) é muito alta, fazendo do **S&P 500 um bom proxy**. Estimativas das duas fontes ficam **na faixa de 4,5% a 5,5%**.

**Beta entre moedas (p729-730) — problema técnico e solução:**
```
Problema: se você usa RETORNOS TOTAIS para estimar beta, o resultado é DIFERENTE
quando os retornos são expressos em USD ou em CHF, porque a taxa de câmbio
flutua. Mas o beta de uma ação DEVE ser o MESMO em todas as moedas — qualquer
diferença implicaria diferenças no custo de capital REAL entre moedas.

SOLUÇÃO: use RETORNOS EXCEDENTES sobre a taxa livre de risco, não retornos totais.
   Regressão:  ( r_(j,t)^A − r_(f,t)^A )  contra  ( r_(M,t)^A − r_(f,t)^A )
   onde A é a moeda de medição e M é a carteira de mercado global.

E, para garantir consistência total, use uma TAXA LIVRE DE RISCO SINTÉTICA para
cada moeda, construída a partir da livre de risco em USD e da variação do câmbio:
   ( 1 + r_(f,t)^A ) = ( 1 + r_(f,t)^$ ) x ( X_t / X_(t−1) )     [eq. 27.1]

(nota 4: a maioria dos praticantes usa o "market model", estimando beta a partir de
retornos ABSOLUTOS em vez de excedentes. É uma aproximação que funciona bem se a
taxa livre de risco é relativamente ESTÁVEL. Ao TRADUZIR retornos de outra moeda,
a aproximação DEIXA DE VALER, porque a livre de risco nominal flutua com o câmbio.)
```

**Onde encaixa.** Skill 8 `custo-de-capital`.

**Veredito.** `ADICIONAR-ALTA`, com uma ressalva importante de aplicabilidade. O item **mais aditivo** é o problema do beta entre moedas: a skill 8 estima beta a partir de comparáveis (provavelmente americanos, em USD) e o desalavanca/realavanca. Koller mostra que **beta estimado com retornos ABSOLUTOS não é invariante à moeda**, e a correção (retornos excedentes com livre de risco sintética) é implementável. O prêmio de mercado global de **4,5%-5,5%** é uma referência dura e citável. Já a recomendação global-CAPM-puro **conflita parcialmente com a prática ACTA** de somar CRP/EMBI: Koller diz que risco-país não vai no WACC, e sim em cenários de fluxo (ver Cap. 35, que é a fonte primária desse debate). O veredito honesto: adicionar a doutrina de Koller como **posição alternativa documentada e como teste de consistência do CRP**, não como substituição imediata da prática (ver discussão completa em 35.1-35.3). Rebaixo a recomendação de eliminar o CRP a `ADICIONAR-MÉDIA` porque, no mid-market brasileiro fechado, o comprador precifica risco-país e o CRP é a linguagem do mercado; mas a skill 8 precisa **declarar** que está fazendo a escolha B de Koller e **por quê**.

**Página.** p727-732, notas 4-6 em p743.

---

## 27.5 WACC de capital DOMÉSTICO vs. WACC de capital ESTRANGEIRO — a divergência de escudo fiscal

**O que é.** Este é o insight mais sutil e mais aditivo do capítulo.

```
O WACC contabiliza automaticamente o valor dos ESCUDOS FISCAIS DE JUROS.
"Quando você TRADUZ um WACC de uma moeda para outra, você também traduz os
escudos fiscais de juros implícitos — E as premissas subjacentes sobre
financiamento por dívida e tributação."
(nota 7: essa premissa diz respeito APENAS à tributação dos ENCARGOS DE JUROS,
 não à alíquota operacional estrangeira.)

Duas escolhas básicas:

1. WACC DE CAPITAL DOMÉSTICO — use se o negócio cross-border é FINANCIADO e
   TRIBUTADO a taxas de juros e alíquotas DOMÉSTICAS.
   "Como empresas internacionais tendem a tomar dívida no país da matriz nas
    moedas da matriz, esta é a abordagem MAIS COMUM."
   Para descontar fluxos estrangeiros, converta o WACC doméstico para o
   equivalente na moeda estrangeira SOMANDO A DIFERENÇA DE INFLAÇÃO entre as
   moedas EM CADA ANO (nota 9: o diferencial de inflação FORWARD).
   O resultado é convertido à taxa SPOT para obter valor na moeda doméstica.
   (nota 8: como sempre, capture o risco do negócio cross-border no WACC
    via o BETA DESALAVANCADO.)

2. WACC DE CAPITAL ESTRANGEIRO — use se o negócio é financiado e tributado a
   taxas ESTRANGEIRAS. Desconte os fluxos estrangeiros diretamente a esse WACC e
   converta o resultado à taxa spot. Alternativamente, converta WACC e fluxos
   para a moeda doméstica e avalie pelo forward-rate — mesmo resultado.

*** OS DOIS WACCs, MESMO CONVERTIDOS PARA A MESMA MOEDA, NÃO SÃO IGUAIS,
    E PORTANTO GERAM RESULTADOS DE VALUATION DIFERENTES. ***
```

**Exemplo numérico completo (Exhibit 27.2, p733-734) — subsidiária mexicana de matriz alemã.** Matriz e subsidiária com risco de negócio idêntico, mesma alíquota, mesma qualidade de crédito, mesma alavancagem-alvo:
```
Premissas:  ku = 9,0% em EUR;  kd = 5,0% em EUR;  t = 33%;  D/V = 33%
            diferencial de inflação EUR vs. MXN = 7 p.p.

WACC de capital DOMÉSTICO:
   em EUR:  ku − t x kd x (D/V) = 9,0% − 0,33 x 5,0% x 0,33 = 8,5%
   em MXN:  (1,085) x (1,07) − 1 = 16,0%
   Aplicar 16,0% ASSUME que a dívida e a tributação dos juros ocorrem em EUR.

WACC de capital ESTRANGEIRO:
   converter os componentes para MXN primeiro:
      kd em MXN = (1,05)(1,07) − 1 = 12,3%
      ku em MXN = (1,09)(1,07) − 1 = 16,6%
   WACC em MXN = 16,6% − 0,33 x 12,3% x 0,33 = 15,2%
   equivalente em EUR = (1,152)/(1,07) − 1 = 7,7%

DIVERGÊNCIA: 8,5% (doméstico) vs. 7,7% (estrangeiro), medidos na MESMA moeda.
0,8 p.p. de diferença no WACC.

CAUSA EXATA: "A diferença vem do CUSTO DE DÍVIDA APÓS IMPOSTOS: OS ESCUDOS
FISCAIS SÃO MAIORES QUANDO A DÍVIDA É FINANCIADA E TRIBUTADA NUMA MOEDA DE
INFLAÇÃO MAIS ALTA, tudo o mais constante."
Mecanismo: o escudo fiscal é t x kd x (D/V), e kd NOMINAL é maior na moeda de
inflação alta; logo o escudo nominal é maior, e o WACC (estrangeiro) é menor.
```

**Advertência prática (p734):** na prática, escolhas de financiamento cross-border são complexas — tributação internacional, custo de dívida local vs. internacional, profundidade dos mercados de dívida alternativos, impacto na exposição cambial. Como fazer essas escolhas está fora do escopo do livro, **mas o resultado da escolha tem de ser corretamente refletido no custo de capital**. "Na prática, um WACC de capital doméstico é o mais comum — mas cuidado com as exceções."

**Onde encaixa.** Skill 8 `custo-de-capital`.

**Veredito.** `ADICIONAR-ALTA` — **esta é a resposta técnica exata à pergunta "quando o resultado em BRL e em USD divergem, e o que isso diz"**. A resposta de Koller: se a conversão é feita com premissas consistentes, o valor **não** divergiria; quando diverge, a divergência é rastreável a **uma premissa implícita diferente sobre em que moeda a dívida é tomada e o juro é deduzido**. E o sinal é conhecido: **financiar em moeda de inflação alta (BRL) gera escudo fiscal nominal maior, logo WACC menor e valor maior**. No caso brasileiro o diferencial de inflação BRL vs. USD é da ordem de 2-3 p.p. — menor que os 7 p.p. do exemplo mexicano, mas ainda material: com t=34% e D/V=30%, o efeito no WACC é da ordem de 0,2-0,3 p.p., o que em perpetuidade move o valor terminal em vários pontos percentuais. Regra a escrever na skill 8: **declare em que moeda o alvo se financia; se é BRL (praticamente sempre, no mid-market fechado brasileiro), use o WACC de capital ESTRANGEIRO na linguagem de Koller — isto é, construa o WACC diretamente em BRL com kd em BRL — e NÃO um WACC em USD convertido por inflação.** A prática de "montar o WACC em USD e converter para BRL por diferencial de inflação" corresponde ao **WACC de capital doméstico** e embute, sem que o analista perceba, a premissa de que a empresa toma dívida em dólar — falsa para o alvo típico.

**Página.** p732-734, notas 7-9 em p743-744.

---

## 27.6 Risco cambial: NÃO no WACC, SIM em cenários — com o caso brasileiro

**O que é.**
```
"Muitas empresas ainda adicionam um prêmio de risco de moeda ao custo de capital
para investimentos estrangeiros. ISSO É DESNECESSÁRIO. Prêmios de risco de moeda
no custo de capital — se existirem — são provavelmente PEQUENOS.
NÃO DEVE HAVER DIFERENÇA entre o custo de capital de um investimento em moeda
estrangeira e de um investimento idêntico em moeda doméstica
(quando se aplicam premissas monetárias consistentes)."

Duas razões:
 1. Flutuações de PREÇO tendem a MITIGAR flutuações de MOEDA, por causa da PPP.
 2. Risco de moeda é largamente DIVERSIFICÁVEL para empresas e acionistas.
Qualquer risco remanescente de variação cambial "é melhor refletido nas
PROJEÇÕES DE FLUXO DE CAIXA do investimento."

*** DISTINÇÃO DECISIVA: ***
"RISCO CAMBIAL NOMINAL É IRRELEVANTE se as taxas de câmbio se ajustam
imediatamente às diferenças de inflação. O ÚNICO risco cambial RELEVANTE é,
portanto, o RISCO CAMBIAL REAL, medido por variações no PODER DE COMPRA RELATIVO."
```

**O CASO BRASILEIRO, com números (p735, Exhibit 27.3):**
```
"Se você tivesse US$ 100 milhões em moeda brasileira em 1994, em 2019 isso
valeria cerca de US$ 25 MILHÕES em dólares americanos.
No entanto, se você AJUSTAR PELO PODER DE COMPRA, o valor da moeda FLUTUOU
EM TORNO DA MARCA DE US$ 100 MILHÕES ao longo desse período de 25 anos."

Fonte do gráfico: Banco Central do Brasil. A taxa de câmbio EFETIVA REAL
(ajustada pela inflação) do real "continuou a oscilar em torno do nível de 1994,
embora a taxa de câmbio NOMINAL contra o dólar tenha DESPENCADO."

E: "Às vezes as taxas de câmbio se movem rápido e muito longe da PPP. Num período
de apenas DUAS SEMANAS em 1999, a moeda do Brasil se enfraqueceu MAIS DE 50%
relativamente ao dólar em termos nominais."
```

**Evidência sobre reversão à PPP (p728-729, p735):** a pesquisa acadêmica convergiu para a conclusão de que, **em média, desvios da PPP entre moedas são reduzidos à METADE do seu valor em três a cinco anos** (Taylor & Taylor, 2004). Ou seja: as taxas de câmbio **acabam** por ajustar as diferenças de inflação entre países — mas **não imediatamente nem perfeitamente**. O CAPM global, tecnicamente, só vale se a PPP valer, o que é o caso **no longo prazo**.

**Diversificação do risco cambial real (Exhibit 27.4, p735-736):** a volatilidade mensal de taxas de câmbio reais de moedas latino-americanas e asiáticas e da libra é comparada com quatro carteiras de moedas. Algumas moedas são muito voláteis, mas **manter uma carteira regional já elimina boa parte do risco cambial real**; combinar uma carteira de mercados em desenvolvimento com uma de libra diversifica ainda mais. Se os acionistas conseguem dispersar a maior parte do risco cambial real por diversificação, **não há necessidade de prêmio de risco cambial de significância alguma no custo de capital**.

**O PROTOCOLO DE CENÁRIOS CAMBIAIS (p736-737)** — o que fazer em vez de mexer no WACC:
```
Quando o câmbio corrente mostra grandes desvios da PPP, considere o risco de
passarem algumas semanas ou até vários ANOS antes de a moeda voltar à PPP.
NÃO ajuste o custo de capital — use CENÁRIOS.

CASO A — negócio com POUCA compra e venda internacional
  (impacto da convergência à PPP nos fluxos LOCAIS é limitado):
   1. Avalie os fluxos projetados pelo método spot OU forward para obter
      valuation na SUA moeda.
   2. Aplique DOIS cenários de moeda:
        (i) spot e forwards baseados na taxa de câmbio EFETIVA atual;
       (ii) spot e forwards baseados numa CONVERGÊNCIA PRESUMIDA à PPP.
   3. O valuation NA MOEDA LOCAL do negócio será IDÊNTICO nos dois cenários.
      Mas o resultado NA SUA MOEDA DOMÉSTICA NÃO — e essa diferença
      EXPLICITA A EXPOSIÇÃO a uma possível mudança de câmbio.

CASO B — negócio com fluxos SIGNIFICATIVOS em moedas internacionais
  (ex.: petroleira exportadora; no Brasil: agro exportador, celulose,
   mineração, indústria com insumo importado):
   Aqui o ajuste do câmbio à PPP AFETA os fluxos EM MOEDA LOCAL.
   1. Prepare as projeções de fluxo LOCAL em DOIS cenários:
        um COM convergência do câmbio à PPP e um SEM.
   2. Avalie os fluxos dos dois cenários pelo método spot ou forward.
   3. GARANTA que as taxas spot e forward refletem CORRETAMENTE as premissas
      de convergência feitas em cada cenário de moeda.
   4. Resultado: uma FAIXA de valuation na moeda doméstica, indicando o
      impacto potencial de uma convergência do câmbio à PPP.
```

**Onde encaixa.** Skills 7 `projecao-e-cenarios`, 8 `custo-de-capital`, 10 `triangulacao-e-faixa` (a faixa cambial é uma dimensão da faixa de valor).

**Veredito.** `ADICIONAR-ALTA` — e é raro encontrar um livro-texto internacional com o **caso brasileiro citado com dados do BCB**. Três coisas de valor imediato:
1. **O argumento de defesa para o vendedor.** A desvalorização nominal do real ao longo de 25 anos **não** destruiu o valor real em dólares do negócio brasileiro; a taxa de câmbio efetiva real oscilou em torno do nível de 1994. Isso é exatamente o contra-argumento a usar com comprador estrangeiro que aplica desconto por "risco Brasil de câmbio" no valor em USD. Citável com fonte.
2. **A distinção nominal vs. real.** Se o modelo projeta em BRL nominal e desconta a WACC BRL nominal, o risco cambial **nominal** já está tratado; só o risco cambial **real** (desvio de PPP) precisa de tratamento adicional, e ele vai em **cenário**, não no WACC. Isso elimina uma dupla contagem frequente.
3. **O protocolo A/B de cenários** é diretamente aplicável e distingue corretamente o alvo doméstico (resíduos, educação, saúde, engenharia — caso A: cenário afeta só o valor em USD do comprador) do alvo exportador ou com insumo dolarizado (agro, indústria — caso B: cenário afeta os próprios fluxos em BRL). É uma distinção de desenho de cenário que a skill 7 não faz hoje.

**Página.** p728-729, p734-737, nota 10 em p744.

---

## 27.7 Demonstrações traduzidas: três métodos e o ajuste obrigatório de FCF

**O que é.** Se você analisa de fora (outside-in) e as demonstrações da controlada em moeda estrangeira já vieram traduzidas e consolidadas na moeda da controladora, surge um problema de fluxo de caixa fantasma:

```
A controladora reporta o MESMO ativo por um valor DIFERENTE cada ano, mesmo que o
valor do ativo na moeda local NÃO tenha mudado. Essa variação SUGERE um
desembolso de caixa. Mas NENHUM caixa foi gasto — a variação é puramente cambial.

REGRA: faça uma correção ao fluxo de caixa estimado a partir das demonstrações,
IGUAL aos ganhos ou perdas de TRADUÇÃO cambial.
```

Os três métodos sancionados (Exhibit 27.5):

| Método | Quem usa | Mecânica |
|---|---|---|
| **Corrente** (current) | US GAAP e IFRS, países de inflação moderada | Traduz **todos** os itens do balanço, **exceto o patrimônio**, à taxa de **fim de ano**. Ganhos/perdas de tradução do balanço vão ao patrimônio em **ORA/OCI** — **não afetam o lucro líquido**. A DRE é traduzida à taxa **média** do período. |
| **Temporal** | US GAAP, países de hiperinflação | Traduz cada item à taxa vigente **na data da transação relevante**: taxas **históricas** para itens a custo histórico, taxas **correntes** para itens monetários, taxas **médias do ano** (ou outras apropriadas) para os demais itens de balanço e para a DRE. Ganhos/perdas cambiais em ORA/OCI da controladora. |
| **Corrente ajustado por inflação** | IFRS, países de hiperinflação | Primeiro **reexpressa** as demonstrações do país hiperinflacionário em unidades de moeda **corrente (local)** por um índice geral de preços; todos os itens exceto alguns monetários são reexpressos. A reexpressão gera **ganho ou perda na DRE da controlada**. Como as demonstrações completas já estão em moeda local de fim de ano, usa-se a taxa de **fim de ano** para traduzir **tanto o balanço quanto a DRE**. Ganhos/perdas de tradução em ORA/OCI. |

**Definição de hiperinflação (p739):** US GAAP define como **inflação acumulada em três anos de aproximadamente 100% ou mais**. IFRS diz que isso é **um** indicador, mas sugere considerar outros fatores — como **o grau em que investidores locais preferem manter riqueza em ativos não monetários ou em moedas estrangeiras estáveis**.

**Consequência (Exhibit 27.6, p740):** com o câmbio passando de 0,95 no início para 0,85 no fim do ano (consistente com 14% de inflação no país estrangeiro e 2% nos EUA; média 0,90), **os três métodos produzem valores significativamente diferentes de lucro líquido e de patrimônio** na moeda da controladora.

**Regras de análise (p741):**
```
"Essas diferenças NÃO DEVEM afetar a sua estimativa de fluxo de caixa livre."

REGRA GERAL: garanta que os AJUSTES DE TRADUÇÃO nos componentes do capital
investido sejam EXCLUÍDOS dos fluxos de caixa de investimento.
  - Sob IFRS: as empresas tipicamente especificam os ajustes de tradução cambial
    POR CATEGORIA de ativo fixo, então você pode identificar os investimentos
    "de caixa".
  - Sob US GAAP: essa informação usualmente NÃO é fornecida; você terá de
    SOMAR DE VOLTA os resultados de tradução à variação do capital investido.

Para análise de performance histórica:
  - MÉTODO CORRENTE: razões como ROIC, margem operacional e giro do capital
    tipicamente NÃO são significativamente distorcidas.
    MAS você TEM de ajustar as TAXAS DE CRESCIMENTO pelos efeitos de tradução cambial.
  - HIPERINFLAÇÃO: analise a performance com base nas demonstrações ORIGINAIS,
    ou revertendo as traduções feitas nos principais itens operacionais
    (seguindo as recomendações de análise do cap. 35).
```

**Recomendação de partida (p737):** *"Para conduzir análise da performance histórica de negócios estrangeiros, o melhor é usar a MOEDA ESTRANGEIRA"* — isto é, as demonstrações originais.

**Onde encaixa.** Skills 2 `reorganizacao-contabil` e 4 `diagnostico-de-roic`.

**Veredito.** `ADICIONAR-MÉDIA` — situação de nicho no mid-market brasileiro, mas ocorre em dois casos concretos e não raros: (i) **alvo brasileiro com subsidiária no exterior** (exportadora com trading no Uruguai/Paraguai/EUA, engenharia com obra na América Latina, agro com operação no Paraguai); (ii) **comparável estrangeiro cujos números você usa no benchmark**. Os dois itens de valor prático são: **taxa de crescimento tem de ser ajustada por efeito de tradução** (uma "queda de receita" pode ser só câmbio) e **variação de capital investido tem de ser limpa de tradução antes de virar capex no FCF**. O segundo é um erro material fácil de cometer.

**Página.** p737-741.

---
