---
name: koller
description: Julgar se o crescimento proposto cria ou destrói valor, usando ROIC contra custo de capital, a hierarquia do crescimento, reversão à média setorial e o princípio do melhor proprietário. Acionar ao avaliar plano de crescimento, ao construir equity story, ao definir o comprador natural de um ativo, ou ao questionar projeção que promete margem e expansão ao mesmo tempo.
user-invocable: false
---

# Tim Koller — só existem duas alavancas de valor, retorno sobre capital e crescimento, e a segunda só funciona quando a primeira está acima do custo de capital

## O que esta lente enxerga

A **unidade de análise é o retorno sobre o capital investido (ROIC) combinado ao crescimento**, medidos sobre o capital que o negócio realmente consome. Não é o lucro, não é o EBITDA, não é a receita: é quanto de caixa a operação devolve por real de capital empregado, e por quanto tempo consegue reinvestir a essa taxa.

A pergunta de Koller é diferente da de todas as outras lentes deste plugin. Porter, Greenwald, Prahalad e Choudary explicam *de onde vem* a vantagem. Koller pergunta uma coisa só, e de forma implacável: **isso apareceu no ROIC?** Vantagem que não se traduz em retorno acima do custo de capital, com persistência, é narrativa. É a lente que converte estratégia em preço e, por isso, é a última a rodar em quase todo raciocínio — e a que mais frequentemente destrói tese bem escrita.

O segundo movimento é sobre crescimento. A intuição de mercado (e de quase todo vendedor) é que crescimento é bom. A evidência empírica que Koller e a prática de valuation da McKinsey acumularam diz que **crescimento é um multiplicador de sinal**: com ROIC acima do custo de capital, crescer cria valor de forma acelerada; com ROIC igual ao custo de capital, crescer é neutro; com ROIC abaixo, **crescer destrói valor mais rápido**. E, mesmo entre crescimentos criadores de valor, há uma hierarquia estável de quanto valor cada tipo gera por real de receita adicional.

O terceiro é o **melhor proprietário** (*best owner*): não existe valor intrínseco único de um ativo. Um mesmo negócio vale valores diferentes nas mãos de proprietários diferentes, porque cada um traz habilidades, ativos complementares, custo de capital e capacidade de gestão distintos. Essa é a proposição teórica mais diretamente aplicável a um mandato sell-side: **o trabalho do assessor é encontrar quem é o melhor proprietário e mostrar, com aritmética, por que ele é.**

**Esta skill é a lente estratégica, não a mecânica.** NOPLAT, capital investido, lucro econômico, fluxo de caixa livre, *key value driver formula*, DCF de empresa, valor terminal, múltiplos, ajustes de CPC/IFRS, normalização de EBITDA e capitalização de arrendamento estão na skill `fundamentos-koller` do plugin `acta-modelagem-economico-financeira`, junto com as demais skills de valuation. **Quando a pergunta for de cálculo, construção de modelo, reorganização de demonstrações ou escolha de múltiplo, pare aqui e vá para lá.** Aqui só ficam os princípios de julgamento.

## Os frameworks

### 1. Os quatro fundamentos (*Value: The Four Cornerstones*, 2010)

| Fundamento | Enunciado | Uso de julgamento |
|---|---|---|
| **Núcleo do valor** (*core of value*) | Valor é criado por retorno sobre capital investido acima do custo de capital, e pelo crescimento — nada mais | Qualquer alegação de criação de valor tem de terminar em ROIC ou em crescimento. Se não termina, não é criação de valor |
| **Conservação do valor** (*conservation of value*) | Valor é criado por fluxo de caixa; recombinar direitos sobre o mesmo fluxo não cria valor | Recapitalização, troca de dívida por equity, recompra de ação, engenharia de estrutura societária, aquisição paga em ação: nada disso cria valor por si. Só cria valor o que muda fluxo de caixa ou risco de verdade |
| **Esteira das expectativas** (*expectations treadmill*) | Retorno ao acionista depende de desempenho **contra as expectativas embutidas no preço**, não do desempenho absoluto | Explica por que empresa excelente pode ser péssimo investimento e vice-versa. No sell-side: preço alto embute expectativa, e expectativa alta é o que o comprador terá de entregar — daí earn-out, daí ceticismo do comprador com o plano |
| **Melhor proprietário** (*best owner*) | Não há valor intrínseco único; o valor depende de quem detém e do que essa parte pode fazer com o ativo | É a base econômica de todo M&A e o critério para desenhar lista de compradores |

### 2. ROIC × crescimento: a matriz de julgamento

O sinal, antes de qualquer conta:

```
ROIC > WACC  e  crescendo   → crescimento acelera criação de valor. Reinvestir é a prioridade.
ROIC > WACC  e  estagnado   → valor existe, mas é limitado; considerar distribuir caixa.
ROIC ≈ WACC                 → crescimento é neutro. Volume não resolve nada.
ROIC < WACC  e  crescendo   → PIOR quadrante. Cada real reinvestido destrói valor.
                              Crescer é a resposta errada; consertar retorno é a única.
ROIC < WACC  e  estagnado   → encolher, desinvestir ou trocar de proprietário.
```

Consequência prática que quase todo plano de crescimento ignora: **em negócio de ROIC baixo, melhorar margem vale mais que crescer, e melhorar giro de capital costuma valer mais que ambos.** Em setores intensivos em ativo (resíduos, indústria de processo, construção, agro), o capital de giro e o capital fixo por real de receita são a variável dominante, e um plano de crescimento que não diz de quanto capital precisa não é um plano.

Perguntas de diagnóstico, na ordem:

1. Qual o ROIC atual, sobre capital investido operacional, e como ele se decompõe em margem × giro?
2. O ROIC está acima do custo de capital? Por quanto? Há quantos anos?
3. O crescimento planejado exige quanto de capital incremental? Qual o ROIC **marginal** do plano (não o médio)?
4. O ROIC marginal está acima do custo de capital? Se ninguém consegue responder, o plano não tem base.
5. O crescimento planejado sustenta a margem, ou é crescimento comprado com desconto e prazo?

### 3. Hierarquia dos tipos de crescimento

A evidência de decomposição de crescimento acumulada pela McKinsey aponta uma ordem estável de valor criado **por real de receita adicional** — não por real investido, e não em todo caso, mas como prior de julgamento. Da mais criadora para a menos:

| # | Tipo de crescimento | Por que cria mais ou menos valor |
|---|---|---|
| 1 | **Criar mercado novo com produto novo** | Sem concorrente estabelecido, sem canibalização, margem plena; raro e arriscado |
| 2 | **Convencer o cliente atual a comprar mais / expandir uso** | Alavanca base instalada, custo de aquisição baixo, capital incremental pequeno |
| 3 | **Crescer com um mercado que cresce rápido** | A maré ajuda, mas o valor é compartilhado com todos os concorrentes |
| 4 | **Tirar participação de concorrente em mercado maduro** | Custa preço, desconto, esforço comercial; o concorrente reage. Muito citado em plano, pouco entregue |
| 5 | **Aquisição pequena e frequente (*bolt-on*, programática)** | Cria valor de forma consistente quando integrada e comprada em disciplina; é o caminho mais confiável de M&A |
| 6 | **Aquisição grande e transformacional** | Pior retorno médio; risco de integração e prêmio pago corroem o valor. Ganha valor apenas quando há sinergia de custo comprovável |

Uso no nosso contexto: quando o vendedor apresenta plano de crescimento no material de venda, **classifique cada iniciativa nessa hierarquia e mostre o capital que cada uma exige.** Plano composto majoritariamente de itens 4 e 6 é frágil em diligência. Plano assentado em item 2 (aumentar penetração na carteira existente, cross-sell de serviço adjacente, elevar share of wallet em cliente já servido) é o mais defensável e o mais fácil de evidenciar com dado histórico — e frequentemente é o que a empresa já faz sem chamar de estratégia.

Regra de sanidade que Koller repete e que vale como filtro de projeção: **projeção que promete simultaneamente aceleração de crescimento, expansão de margem e redução de capital empregado, sem explicar a mudança estrutural que a produz, é implausível.** Uma das três tem de ceder. Diga isso ao cliente antes que o comprador diga.

### 4. Persistência e reversão à média do ROIC

A evidência longitudinal (amostras amplas de empresas americanas ao longo de décadas, nas edições sucessivas de *Valuation*) mostra dois padrões que devem disciplinar qualquer valor terminal:

- **O ROIC é mais persistente do que a teoria de concorrência perfeita prevê.** Empresas com ROIC alto tendem a manter ROIC relativamente alto por muitos anos; a mediana das faixas superiores decai, mas não converge ao custo de capital. O nível de ROIC é largamente explicado pelo **setor** — setores com marca, patente, escassez regulatória ou ativo intangível dominante sustentam ROIC estruturalmente alto; setores intensivos em capital e de produto comoditizado sustentam ROIC estruturalmente baixo.
- **O crescimento é muito menos persistente que o ROIC.** Crescimento acima da média decai rápido, e a diferença de crescimento entre empresas praticamente desaparece em poucos anos. Correlação de crescimento entre períodos consecutivos é baixa.

As três implicações práticas:

1. **Projetar reversão de ROIC ao custo de capital é conservadorismo mal aplicado** em negócio com barreira estrutural real — subestima valor. Mas projetar ROIC alto **crescente** é o erro oposto e mais comum.
2. **Projetar crescimento persistente muito acima do setor é quase sempre indefensável.** Se o plano depende disso, a tese depende disso, e a diligência vai atacar exatamente aí.
3. **A pergunta certa não é "o ROIC vai cair?", é "o que impede o ROIC de cair?"** — e a resposta vem de `porter` (estrutura), `greenwald` (barreira de entrada) ou `prahalad` (competência que passa nos três testes). Sem uma dessas respostas, reversão à média é o cenário-base.

### 5. Melhor proprietário — o framework aplicado a quem deve possuir o ativo

Um ativo deve pertencer a quem consegue extrair dele o maior fluxo de caixa presente. As fontes de vantagem de propriedade, em ordem de solidez:

| Fonte | O que é | Como se verifica |
|---|---|---|
| **Ligações com outros negócios do proprietário** | Sinergia real de receita ou custo: rota, planta, licença, aterro, base de clientes, canal, back-office | É a mais verificável e a que sustenta prêmio. Quantifique em R$ e em prazo |
| **Habilidade distintiva** | Capacidade operacional, tecnológica ou comercial que o comprador aplica ao ativo | Peça evidência: onde ele já fez isso antes? |
| **Melhor visão** (*insight*) | Ver antes o que o ativo pode virar | Real, mas não financiável: não sustenta prêmio negociado |
| **Melhor governança e gestão** | Substituir gestão, impor disciplina de capital, profissionalizar | Típico de private equity; sustenta prêmio em alvo familiar mal gerido |
| **Acesso a talento, capital ou relação institucional** | Custo de capital menor, acesso a crédito, relação com regulador ou cliente público | Sustenta prêmio de forma mensurável via WACC |

Corolário duro e útil: **o melhor proprietário muda ao longo da vida do ativo.** Fundador é o melhor proprietário na fase de construção; consolidador setorial ou financeiro passa a ser quando a alavanca vira escala, disciplina de capital e governança. Isso é exatamente o argumento honesto para um vendedor familiar — o momento de vender não é quando a empresa piora, é quando outro proprietário passa a extrair mais dela do que ele consegue.

E o corolário para o processo: **prêmio se justifica com o que é específico do comprador**, não com o valor médio de mercado. Duas consequências operacionais para o mandato: (a) a lista de compradores é construída por hipótese de sinergia nominada, não por tamanho; (b) para cada comprador, o equity story enfatiza a ligação que **aquele** proprietário tem e ninguém mais. Um material de venda único para todos os compradores desperdiça a única fonte legítima de prêmio.

## Como aplicar

Antes de aplicar, pergunte ao usuário:

1. Existe cálculo de ROIC e de capital investido operacional já feito, ou é preciso construir? (se preciso construir → `fundamentos-koller`)
2. Qual o histórico de 3–5 anos de receita, margem e capital empregado, e o que aconteceu de estrutural nesse período?
3. Qual o plano de crescimento apresentado, item por item, e quanto de capital cada item exige?
4. Qual o setor e qual a referência de ROIC do setor (pares abertos, transações, benchmark)?
5. Quem são os compradores candidatos e o que cada um já possui que se liga a este ativo?

Roteiro, em um mandato sell-side:

**Passo 1 — Situar na matriz.** Calcule ou obtenha ROIC vs. custo de capital e o crescimento histórico. Nomeie o quadrante. Isso já determina qual história é contável: em quadrante de ROIC alto, a história é de reinvestimento e escalabilidade; em ROIC baixo, a história é de ativo, de posição e de melhor proprietário — nunca de crescimento.

**Passo 2 — Auditar o plano de crescimento.** Cada iniciativa: tipo na hierarquia (1 a 6), capital incremental, ROIC marginal implícito, e evidência histórica de que a empresa executa aquilo. Iniciativa sem evidência histórica entra como opcionalidade, não como cenário-base.

**Passo 3 — Testar o valor terminal contra a persistência.** O ROIC projetado no terminal está acima do do setor? Existe barreira nomeada que o sustente? O crescimento perpétuo está acima do PIB nominal de longo prazo? Se sim nos dois, o valor está inflado e será cortado na diligência — corte antes.

**Passo 4 — Aplicar conservação do valor à estrutura.** Separe o que muda fluxo de caixa (sinergia operacional, redução de capital de giro, ganho fiscal real) do que só redistribui direitos (estrutura de dívida, forma de pagamento, veículo). Só o primeiro grupo justifica preço; o segundo é negociação de risco entre as partes.

**Passo 5 — Mapear melhor proprietário.** Para cada comprador candidato: fonte de vantagem de propriedade, sinergia estimada em R$, e a frase de equity story específica dele. Este é o entregável mais valioso desta lente em mandato.

**Passo 6 — Confrontar com a esteira de expectativas.** Ao preço pedido, que desempenho o comprador precisa entregar? Se esse desempenho for maior que o histórico da empresa e maior que o do setor, o preço só se sustenta com estrutura (earn-out, pagamento a prazo, sócio remanescente) — e é melhor propor a estrutura do que perder o comprador.

Em consultoria (diagnóstico ou avaliação de plano de crescimento): passos 1 a 3, mais a decisão de alocação de capital — quais iniciativas ficam, quais são financiadas primeiro, e quais linhas de negócio devem ser encolhidas ou vendidas porque estão em ROIC abaixo do custo de capital sem caminho de conserto.

## O que esta lente NÃO vê

**Não gera insight estratégico, só veredicto.** Koller diz que o ROIC caiu; não diz por quê nem o que fazer. É um tribunal, não um arquiteto. Rodá-la sem uma lente de origem de vantagem (`porter`, `greenwald`, `prahalad`, `christensen`) produz diagnóstico correto e inútil.

**ROIC é frágil em negócio com pouco capital contábil e em ativo intangível.** Onde o valor está em marca, base de clientes, software desenvolvido internamente ou conhecimento — despesa no resultado, não ativo no balanço — o capital investido é subestimado e o ROIC fica artificialmente altíssimo, às vezes negativo por patrimônio negativo. As edições recentes tratam de capitalização de intangível justamente por isso, mas o problema não desaparece: em serviço profissional, educação e software, leia o ROIC com desconfiança.

**Depende de contabilidade que muitas vezes não existe no mid-market brasileiro.** Capital investido operacional exige separar ativo operacional de não operacional, tratar arrendamento, imóvel do sócio, empréstimo de sócio, adiantamento e conta de família misturada, e normalizar despesa pessoal lançada na empresa. Sem qualidade de resultado e reorganização de demonstrações, o ROIC calculado é ficção com casas decimais. Isso é trabalho de `fundamentos-koller` e de diligência financeira, e é pré-requisito, não detalhe.

**Custo de capital em mercado emergente é discutível e a resposta muda o veredicto.** Prêmio de risco Brasil, custo em real vs. em dólar, ilíquidez de capital fechado, porte, concentração de cliente: escolhas defensáveis mudam o WACC em vários pontos percentuais, e o quadrante da matriz muda com ele. Trate o WACC como faixa e teste a conclusão nos extremos; nunca apresente ROIC vs. WACC como se a segunda parte fosse um dado objetivo.

**A base empírica é de empresas grandes, abertas, majoritariamente americanas.** Persistência de ROIC, decaimento de crescimento e retorno de M&A programático vêm dessa população. Empresa familiar fechada brasileira de R$ 50–500 milhões de receita tem outra distribuição: mais dependente de pessoa, mais exposta a ciclo local, com acesso a capital pior e governança mais frágil. Use os padrões como prior, nunca como parâmetro.

**Silencioso sobre ruptura e sobre o que não está no balanço.** O ROIC de uma incumbente pode ser excelente na véspera de ser desintermediada. Persistência histórica não protege de mudança de regime — regulatória, tecnológica ou de canal. Para isso, `christensen`, `mcgrath`, `choudary` e `amodei`.

**Cega para stakeholder e para restrição não financeira.** Licença social, risco ambiental, trabalhista e reputacional entram apenas se alguém os traduzir em fluxo de caixa e risco — e em setores como resíduos, saúde e construção esse é frequentemente o item de maior impacto no valor. A lente não faz essa tradução sozinha.

**Onde leva à conclusão errada:** (a) negócio em investimento pesado no presente para retorno futuro (planta nova, aterro em implantação, expansão de rede) mostra ROIC deprimido e é condenado indevidamente — separe capital em operação de capital em construção; (b) empresa com ativo imobiliário valioso subutilizado mostra ROIC baixo, quando a decisão certa é sobre o imóvel, não sobre a operação; (c) ROIC altíssimo em base de capital minúscula (serviço com poucos ativos) sugere moat onde só há ausência de capital — nesse caso a barreira é baixa, não alta, e a lente correta é `greenwald`.

## Onde colide ou complementa

| Outra lente | Em que discordam ou se somam | Quando preferir cada uma |
|---|---|---|
| `porter` | Complemento canônico: Porter explica por que o ROIC é alto (estrutura do setor, poder de barganha, barreira); Koller mede se é alto de fato e por quanto tempo. Colidem quando a análise de Porter promete atratividade que o ROIC histórico nega — o ROIC ganha. | `porter` para causa; `koller` para consequência e para o veredicto final. |
| `greenwald` | Muito próximos: Greenwald também parte de retorno sobre capital e barreira de entrada, mas é mais avesso a projeção — prefere valor de ativo e poder de lucro corrente a DCF de longo prazo. Divergem em quanto crédito dar ao crescimento: Greenwald só o valoriza dentro da barreira. | `greenwald` quando a projeção é pouco confiável (o caso mais frequente no mid-market); `koller` quando há histórico e o plano precisa ser julgado item por item. |
| `christensen` | Colisão de fundo: a disciplina de ROIC e a esteira de expectativas são exatamente o que faz o incumbente racional recusar a inovação disruptiva (margem baixa, mercado pequeno, ROIC inicial ruim). Christensen chama isso de armadilha do bom gestor. | `christensen` para decidir se vale investir contra o critério financeiro; `koller` para todo o resto. |
| `mcgrath` | McGrath ataca a premissa de persistência e a alocação plurianual de capital; propõe opções e desinvestimento contínuo. Somam-se no ponto de que capital tem de sair de onde não rende. | `mcgrath` em ambiente instável; `koller` para o cálculo da decisão. |
| `prahalad` | Somam-se de forma limpa: competência que passa nos três testes é candidata a explicar ROIC persistente; e o teste de portabilidade da competência é o *best owner* visto de outro ângulo. Competência que não aparece no ROIC é alegação. | `prahalad` para nomear a fonte; `koller` para verificá-la. |
| `choudary` | Efeito de rede tem de aparecer como ROIC crescente com densidade, não como TAM. Koller é o antídoto direto à tese de plataforma inflada. | `choudary` para o mecanismo; `koller` para o preço. |
| `kotler` | Kotler produz o plano comercial; Koller julga se ele cria valor e de que tipo de crescimento se trata. Colidem quando o plano de mercado ignora o capital que exige. | `kotler` para construir; `koller` para aprovar ou recusar. |
| `collins` | Collins encontra empresas de desempenho excepcional por evidência de retorno de longo prazo — mesma disciplina empírica, foco em pessoas e cultura em vez de capital. Complementares. | `collins` para gestão e sucessão; `koller` para capital. |
| `ram-charan` | Charan é o mais próximo em espírito operacional: obsessão com caixa, giro de capital, margem e retorno sobre ativo, na linguagem do dono de negócio. Ótima ponte para explicar Koller a um vendedor familiar. | `ram-charan` para conversar com o cliente; `koller` para documentar. |
| `jack-welch` | Welch decide portfólio por posição competitiva; Koller decidiria pelo melhor proprietário e pelo ROIC. Convergem no resultado (sair do que não rende), divergem no critério. | `koller` quando há número; `jack-welch` quando é preciso decidir rápido. |
| `tom-peters` | Oposição de temperamento: Peters desconfia da primazia do número e da métrica financeira sobre pessoas e cliente. Contraponto legítimo, especialmente em diagnóstico de empresa familiar. | `tom-peters` para não reduzir a empresa à planilha; `koller` para não deixar a planilha de lado. |
| `musk` / `diamandis` / `amodei` | Todos operam onde a disciplina de ROIC de curto prazo condenaria o investimento. Amodei é ainda o insumo para reavaliar persistência de ROIC em setores expostos a automação de trabalho cognitivo. | Use-os para questionar a premissa de continuidade; `koller` para tudo que já tem histórico. |
| `fundamentos-koller` (plugin `acta-modelagem-economico-financeira`) | **Não é colisão, é divisão de trabalho.** Lá está toda a mecânica: NOPLAT, capital investido, lucro econômico, FCF, key value driver formula, DCF, valor terminal, múltiplos, ajustes contábeis. Aqui, só o julgamento. | Qualquer pergunta de cálculo, modelo ou demonstração → `fundamentos-koller`. Pergunta de julgamento estratégico → aqui. |
| `lentes` | Roteadora. | — |

## Fontes

- Koller, T., Goedhart, M. & Wessels, D. *Valuation: Measuring and Managing the Value of Companies*, 7ª ed., Wiley, 2025, e edições anteriores (5ª/6ª/7ª — a evidência de persistência de ROIC e de decaimento de crescimento aparece nos capítulos de criação de valor e de análise de desempenho, e as amostras mudam entre edições).
- Koller, T., Dobbs, R. & Huyett, B. *Value: The Four Cornerstones of Corporate Finance*, Wiley, 2010. Os quatro fundamentos, incluindo melhor proprietário e esteira das expectativas.
- Koller, T., Lovallo, D. e coautores, artigos do McKinsey Strategy & Corporate Finance sobre crescimento que cria valor, decomposição de crescimento e M&A programático (*McKinsey Quarterly* e *McKinsey on Finance*, diversos anos).
- Sobre M&A programático vs. transformacional: série da McKinsey sobre o "M&A programático" e retorno excedente por padrão de aquisição.
- A hierarquia de seis tipos de crescimento é apresentada em *Valuation* e em material da McKinsey; a ordem exata e a magnitude relativa **variam por edição e por amostra** — use como prior de julgamento, não como coeficiente.
- A matriz de quadrantes, o roteiro de seis passos para mandato sell-side e as advertências sobre contabilidade de empresa familiar brasileira são **leitura da ACTA**, não formulações do autor.
