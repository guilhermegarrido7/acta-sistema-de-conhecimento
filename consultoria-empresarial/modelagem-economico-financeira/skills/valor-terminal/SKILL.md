---
name: valor-terminal
description: Direcionar o valor terminal pela fórmula dos value drivers, com os testes de convergência que impedem a perpetuidade de embutir o impossível. Acionar ao calcular ou revisar valor terminal, ao escolher a taxa de crescimento na perpetuidade, ao decidir entre perpetuidade e múltiplo de saída, ou ao avaliar o peso do terminal no valor.
---

# Valor terminal — onde mora a metade do preço

## Papel desta skill

**Oráculo. Não escreve na planilha.** Direciona o método, escolhe e defende o `g`, e roda os testes
de coerência. Quem digita é o analista.

Fundamento: skill `fundamentos-koller`, reference `estrutura_dcf_wacc.md`.

## Por que esta é a etapa mais perigosa do modelo

O valor terminal costuma responder por **metade a três quartos do enterprise value** num DCF de
cinco anos. Ou seja: a maior parte do preço não vem dos anos que você projetou com cuidado, vem de
uma fórmula com três variáveis.

Duas consequências:

1. **Erro aqui domina qualquer refinamento nos anos explícitos.** Meia hora ajustando o valor
   terminal vale mais que uma semana refinando o cronograma de SG&A do ano 3.
2. **É onde o otimismo se esconde melhor.** Um `g` de 5,5% em vez de 3,5% não parece nada num slide
   de premissas e move o valor em dois dígitos percentuais. É por isso que o comprador ataca esta
   linha primeiro.

## O método preferido — a fórmula dos value drivers

```
                NOPAT_terminal × (1 − g/ROIC)
VT  =  ─────────────────────────────────────────
                    (WACC − g)
```

É a fórmula que o modelo da casa já usa e documenta. A diferença dela para a Gordon simples sobre
FCF não é cosmética:

**A Gordon simples (`FCF/(WACC−g)`) esconde a taxa de reinvestimento.** Você escolhe um FCF e um `g`
sem que nada force os dois a serem compatíveis — e é assim que se produz um terminal que cresce 4%
para sempre consumindo capital de manutenção apenas.

**A fórmula dos value drivers torna a coerência obrigatória.** O termo `(1 − g/ROIC)` é exatamente a
parcela do NOPAT que sobra depois de reinvestir o necessário para sustentar `g`. Se você quer mais
crescimento, o numerador cai automaticamente. Não há como pedir crescimento de graça.

Corolário útil de ler no resultado: **se `ROIC = WACC`, o múltiplo implícito é `1/WACC`,
independentemente de `g`.** Crescimento sem spread não vale nada. Se o terminal do modelo mostra
valor subindo com `g` num negócio cujo ROIC terminal é igual ao WACC, há erro de fórmula.

## Escolher `g` — os limites que se defendem

Ordem de rigor, do mais defensável ao menos:

1. **`g` ≤ crescimento nominal de longo prazo da economia.** É o teto duro. Uma empresa que cresce
   acima do PIB nominal *para sempre* eventualmente é a economia inteira. Em BRL nominal, isso
   significa aproximadamente inflação de longo prazo mais crescimento real de longo prazo — peça ao
   usuário a premissa macro que ele está usando no modelo e mantenha coerência com ela, em vez de
   fixar um número aqui.
2. **`g` coerente com o regime do setor.** Setor em declínio estrutural pode ter `g` abaixo da
   inflação. Setor com déficit de infraestrutura e demanda compulsória pode sustentar `g` real
   positivo por mais tempo — mas não perpetuamente.
3. **`g` < WACC, obrigatoriamente.** Se `g ≥ WACC` a fórmula explode e produz valor infinito ou
   negativo. O modelo da casa traz a flag explícita "crescimento na perpetuidade ≥ WACC?" — se ela
   acender, pare.

**Nominal ou real?** O `g` tem de estar na mesma base do WACC e do fluxo. Modelo em BRL nominal com
WACC nominal exige `g` nominal — e é aqui que mora a inconsistência mais comum em modelo brasileiro:
projetar fluxo em termos reais e descontar a WACC nominal, o que subestima o valor
sistematicamente. Verifique a base das três variáveis antes de discutir o número.

## Escolher o ROIC terminal — a decisão que quase ninguém toma

Tão importante quanto `g`, e muito mais frequentemente ignorada: o modelo simplesmente carrega o
ROIC do último ano projetado para a perpetuidade.

O que a evidência de mercado sustenta: **retorno excepcional reverte à média.** Concorrência,
entrada e imitação corroem spread. Manter ROIC de 48% na perpetuidade é afirmar que a barreira dura
para sempre — afirmação que precisa de defesa documental, não de inércia de planilha.

### A distinção que quase todo mundo erra: RONIC ≠ ROIC médio

A fórmula usa o retorno sobre o **capital novo** investido — RONIC —, não o ROIC médio da empresa. A
consequência é contraintuitiva e importa muito na defesa do modelo:

> **Colocar `RONIC = WACC` no terminal NÃO afirma que a vantagem competitiva termina.**

O capital já investido continua rendendo o retorno projetado no último ano explícito. Só o capital
*incremental* rende o custo de capital. O ROIC médio agregado, portanto, **cai gradualmente** — não
salta para o WACC.

A ilustração de Koller: um varejista abre as primeiras lojas nos melhores pontos, com retorno alto.
Conforme cresce, os pontos bons acabam e o retorno da loja marginal converge ao custo de capital.
Isso não significa que as primeiras lojas passem a render o custo de capital — "um ponto excelente é
difícil de superar".

A velocidade do decaimento do ROIC médio depende de `g`: quanto mais a empresa cresce, mais capital
novo entra rendendo menos, e mais rápido o médio cai. Com retorno de 18% sobre a base, RONIC de 10%,
WACC de 10% e `g` de 5%, o ROIC médio leva cerca de uma década para chegar à metade do caminho, e
décadas para se aproximar do WACC.

**Duas consequências práticas:**

1. **Para o comprador que objeta** "seu terminal assume vantagem eterna": não, assume RONIC igual ao
   custo de capital; o ROIC médio ainda decai. É a resposta correta e ela é forte.
2. **Para o analista que se sente generoso** ao usar `RONIC = WACC`: ele já está sendo conservador na
   medida certa, e **não precisa também derrubar o ROIC do capital existente**. Fazer as duas coisas é
   punir o valor duas vezes.

### As três posturas

| Postura | RONIC terminal | Quando se defende |
|---|---|---|
| **RONIC = WACC** | igual ao custo de capital | O padrão defensável. Crescimento no terminal nem cria nem destrói valor, e dispensa defender `g` agressivo. Mas ver o erro 2 adiante: para negócio com marca forte ou barreira alta, isso subestima. |
| **RONIC entre o atual e o WACC** | convergência parcial | Quando a barreira existe e se desgasta. Exige declarar para quanto converge. |
| **RONIC ≈ ROIC atual** | mantém o spread no capital novo | Só com barreira estrutural documentada — e **obrigatoriamente acoplado a um `g` economicamente modesto**. RONIC alto com `g` alto é a combinação que produz valor implausível. |

A tese de CAP da skill `diagnostico-de-roic` **é** o argumento aqui. As duas precisam dizer a mesma
coisa: se o deck afirma barreira permanente, precisa nomear qual.

### O estágio de convergência

Quando a convergência é parcial e leva anos, o terminal de estágio único não dá conta. A estrutura
que resolve é **dois estágios**: um período explícito de convergência, em que o ROIC decai
gradualmente do nível atual para o de regime, e só depois a perpetuidade.

O efeito no resultado é característico e vale conhecer: o valor fica **muito sensível ao WACC e
pouco sensível a `g`** — porque o segundo estágio, já com spread comprimido, contribui menos, e o
peso migra para o desconto. Se a sua sensibilidade mostra esse padrão, é sinal de que o modelo está
construído assim, não de erro.

## Múltiplo de saída — sanity check, não método

O modelo da casa traz três variantes de DCF: perpetuidade, múltiplo de mercado e múltiplo de
transações precedentes. Isso é útil como **triangulação**, e é assim que deve ser apresentado.

Mas há uma hierarquia metodológica que precisa ficar clara:

**A perpetuidade é o método primário.** O múltiplo de saída importa um valor de mercado atual para
uma data futura — isto é, presume que em cinco anos o mercado pagará o mesmo múltiplo que paga hoje,
o que é premissa sobre o mercado, não sobre a empresa. E introduz circularidade: se você usa
múltiplo de mercado para chegar ao valor, o valuation vira uma forma indireta de dizer "vale o que
os outros valem".

**Use o múltiplo de saída para conferir a perpetuidade**, não o contrário. Calcule o múltiplo
implícito no seu valor terminal por perpetuidade:

```
Múltiplo terminal implícito = VT / EBITDA_terminal
```

Se ele sair muito fora do que o setor negocia em regime estacionário, uma das duas está errada — e a
comparação obriga a descobrir qual. Se sair em linha, você tem duas metodologias independentes
concordando, o que é o argumento mais forte que existe num deck.

Nota do template: o múltiplo terminal a usar **é o de regime estacionário do setor**, não o múltiplo
que o alvo persegue na transação. Confundir os dois embute o prêmio da venda dentro do próprio
valor — dupla contagem.

## Os testes de coerência

Rode todos antes de aceitar o terminal. É o que distingue um valor terminal de um número.

| # | Teste | Falha significa |
|---|---|---|
| 1 | `g < WACC` | Fórmula inválida. Pare. |
| 2 | `g ≤` crescimento nominal de longo prazo da economia | A empresa vira a economia. Reduza `g`. |
| 3 | `g` na mesma base (nominal/real) do WACC e do fluxo | Inconsistência que enviesa o valor. |
| 4 | ROIC terminal com argumento declarado | Spread perpétuo por inércia de planilha. |
| 5 | Taxa de reinvestimento terminal = `g/ROIC` | O terminal cresce sem reinvestir. |
| 6 | **CapEx terminal ≈ depreciação terminal** | Se CapEx < depreciação, o terminal está liquidando a base de ativos e gerando fluxo insustentável. |
| 7 | **Dias de capital de giro estáveis no terminal** | Capital de giro em movimento na perpetuidade é incoerência: melhoria contínua para sempre. |
| 8 | **Margem terminal estável e plausível** | Margem que ainda sobe no terminal presume ganho perpétuo. |
| 9 | Alíquota terminal em regime normal | Benefício fiscal temporário embutido na perpetuidade. Ver `impostos-e-prejuizos-fiscais`. |
| 10 | Múltiplo terminal implícito comparado ao setor | Divergência grande exige explicação. |
| 11 | Peso do VT no EV | Diagnóstico, não sintoma. Ver abaixo. |
| 12 | **VT medido no ano N é descontado por N anos, não N+1** | Erro mecânico frequente. Se o terminal é calculado sobre o fluxo do ano 6 mas está expresso na data do ano 5, desconte 5 anos. |
| 13 | **Capital de giro terminal como % constante da receita** | Ver o erro 1 adiante — é o erro que mais subestima valor. |

## Os três erros clássicos — e todos subestimam o valor

Nota que importa a um mandato de venda: **os três erros clássicos de valor terminal empurram o valor
para baixo.** São exatamente os erros que um analista comete tentando ser prudente — e prudência mal
aplicada aqui custa dinheiro ao vendedor.

### Erro 1 — Extrapolação ingênua do ano-base

Fazer o ano-base do terminal crescendo **toda linha** do último ano explícito pela taxa `g`.

Por que está errado: se a receita passa a crescer 5% em vez de 10%, a **necessidade de capital de
giro cai** — porque o investimento em giro acompanha o *incremento* de receita, não o nível. Crescer
a linha de capital de giro por `g` faz o giro subir como percentual da receita ano após ano, o que
consome caixa que não deveria ser consumido.

O correto: o investimento em capital de giro é o necessário para **manter o giro como percentual
constante da receita**. O mesmo vale para CapEx.

Magnitude do dano: o FCF terminal pode sair cerca de 18% abaixo do que deveria — o que se propaga
inteiro para o valor.

**O remédio é estrutural: use a fórmula dos value drivers, não a perpetuidade de FCF.** A fórmula
calcula o reinvestimento implicitamente a partir de `g` e do ROIC, e o erro se torna impossível.

### Erro 2 — Conservadorismo ingênuo

Assumir `RONIC = WACC` por reflexo, porque assim o crescimento não importa e não é preciso defender
`g`.

É o padrão razoável para a maioria dos negócios — e **é conservador demais para negócio com marca
forte, barreira alta ou produto difícil de duplicar**. Nesses casos o retorno sobre capital novo não
cai ao custo de capital só porque a empresa cresce.

Contrapeso obrigatório: mesmo que o RONIC permaneça alto, **o crescimento cai quando o mercado
amadurece**. Qualquer premissa de `RONIC > WACC` tem de vir acoplada a um `g` economicamente modesto.
RONIC alto com `g` alto é a combinação que não se defende.

### Erro 3 — Conservadorismo proposital

Reduzir `g` ou o ROIC terminal "porque há muita incerteza e o terminal é grande".

O argumento formal contra: se a estimativa é não viesada, a incerteza corta para os dois lados — o
resultado é tão provável de ficar acima quanto abaixo. **Cortar só para baixo sobrecompensa a
incerteza** e embute um desconto que ninguém declarou e ninguém sabe dimensionar.

O remédio: **incerteza vai em cenários, não em haircut silencioso no terminal.** Ver
`projecao-e-cenarios` e `triangulacao-e-faixa` — é para isso que existe a faixa.

### O peso do valor terminal

```
Peso do VT = VP(valor terminal) / Enterprise value
```

Peso de 70% a 80% num horizonte de cinco anos é **normal**, não sintoma. E há um teorema que precisa
ser entendido antes de reagir a ele:

> **O comprimento do período explícito não muda o valor da empresa. Só muda a distribuição do valor
> entre o período explícito e o terminal.**

Estender de 5 para 8 anos derruba o peso do terminal de ~79% para ~67% e **chega no mesmo valor
total** — porque o terminal fica maior em valor de face mas ocorre três anos depois, e as duas coisas
se compensam exatamente. Alongar o horizonte para "reduzir a dependência do terminal" é cosmética.

**A armadilha que decorre disso, e que trabalha contra você sem avisar:** se o modelo usa
`RONIC = WACC` no terminal, estender o período explícito **aumenta indiretamente o valor**, porque
adiciona anos em que a empresa cria valor. O efeito é real e passa desapercebido. Se você alongar o
horizonte, saiba que está mudando a premissa econômica, não só a apresentação.

**O critério correto para o horizonte não é o peso do terminal — é o regime estacionário.** O período
explícito tem de ser longo o bastante para que margem, ROIC, `g`, CapEx e dias de capital de giro
estejam estáveis no último ano. Se a margem cai de 14% para 9% ao longo de sete anos, o período
explícito precisa ter sete anos, porque nenhuma fórmula de perpetuidade acomoda margem em declínio.
Além do ponto de estabilização, alongar não tem efeito. Ver `projecao-e-cenarios`.

### Quando o peso do terminal assusta o cliente

Acontece em toda apresentação: "então 80% do valor é um chute?". A resposta não é reduzir o peso — é
**decompor o valor de outra forma**. Três decomposições do mesmo número, e as duas últimas mudam
completamente a percepção de risco:

| Decomposição | O que mostra |
|---|---|
| **FCF descontado** | O terminal responde por ~80%. É a leitura que assusta. |
| **Por componente de negócio** | Separe o negócio maduro e estável das iniciativas de crescimento. Tipicamente o negócio maduro — que já gera caixa previsível hoje — responde pela maior parte do valor, e a parcela imprevisível é pequena. |
| **Por lucro econômico** | `Valor = capital investido + VP do lucro econômico`. Uma fatia do valor é simplesmente o capital já investido, e boa parte do lucro econômico é gerada no período explícito. A parcela atribuível ao terminal cai muito. |

A terceira é a mais forte, e é a formulação de Koller: *o valor de uma empresa é o capital investido
mais os lucros econômicos que ela gera sobre esse capital*. Se a criação de valor acontece no período
explícito, o terminal tem papel muito menor do que o DCF de fluxo de caixa sugere.

Apresente as três. É o slide que mais reduz atrito numa reunião de valuation.

## Ativo de vida finita — quando não há perpetuidade

Caso relevante e frequentemente mal tratado nos setores de mandato: **concessão com prazo, aterro
com capacidade finita, jazida, contrato de longo prazo sem renovação garantida, PCH com outorga
vencendo**.

Nesses casos a perpetuidade é simplesmente errada. O que se faz:

- Projete até o fim da vida útil ou do prazo contratual, explicitamente.
- Trate o **valor residual** ao fim: valor de sucata, obrigação de desmobilização, valor de
  renovação se houver expectativa fundamentada.
- **Inclua a obrigação de encerramento** — em aterro, a provisão de encerramento de célula e
  recuperação de área degradada é grande, cresce por atualização financeira, e é tratada errado por
  padrão. Ela é saída de caixa futura e precisa estar no fluxo ou na dívida líquida, nunca nos dois.
- Se houver expectativa de renovação, modele-a como **cenário com probabilidade**, não como certeza
  embutida no caso base.

Pergunte ao usuário sobre prazo e renovação sempre que o setor sugerir vida finita. Não presuma
perpetuidade porque a fórmula do template a oferece.

## O que entregar

1. O valor terminal pelo método primário, com `g`, ROIC terminal e WACC declarados e justificados.
2. O argumento do ROIC terminal, amarrado à tese de CAP.
3. A tabela dos onze testes, com o resultado de cada um.
4. O peso do VT no EV.
5. O múltiplo terminal implícito, comparado ao regime estacionário do setor.
6. A sensibilidade WACC × `g`, e — quando houver estágio de convergência — a leitura de por que o
   valor é mais sensível ao WACC que a `g`.
7. Se o ativo tem vida finita: o tratamento adotado em vez da perpetuidade.

## Próximo passo

`triangulacao-e-faixa` — o DCF é uma das metodologias do football field, não a resposta. E
`revisao-de-modelo`, onde estes testes entram na bateria de auditoria.
