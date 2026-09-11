---
name: porter
description: Analisar a estrutura econômica de um setor para explicar por que sua rentabilidade média é alta ou baixa, e onde estão barreiras, poder de barganha e os trade-offs que sustentam posição. Acionar ao estudar atratividade setorial, ao mapear concorrência e poder de barganha, ao definir posicionamento genérico e trade-offs, ou ao separar estratégia de eficácia operacional.
user-invocable: false
---

# Michael Porter — a rentabilidade é uma propriedade da estrutura do setor, não do esforço da empresa

## O que esta lente enxerga

A pergunta central de Porter é: **por que alguns setores são estruturalmente mais lucrativos que outros, e o que uma empresa pode fazer para não ser refém dessa estrutura?** A unidade de análise é o **SETOR** — mais precisamente, a configuração das cinco forças que determina quanto do valor criado na cadeia fica retido pelos competidores e quanto escapa para clientes, fornecedores e entrantes.

Isso é diferente de quase todas as outras lentes. Porter não pergunta "o que esta empresa faz bem" (isso é `prahalad`), nem "o que o cliente está tentando resolver" (isso é `christensen`), nem "quanto tempo esta vantagem dura" (isso é `mcgrath`). Ele pergunta: dado o campo de jogo, qual é o teto de retorno e qual posição defensável existe dentro dele.

O segundo movimento de Porter, menos citado e mais útil, é a **cadeia de valor** e o **sistema de atividades**: a posição estratégica não vive num slogan, vive num conjunto de atividades interconectadas que se reforçam e que, crucialmente, envolvem **trade-offs explícitos** — coisas que a empresa deliberadamente não faz. É o trade-off, não a atividade isolada, que gera sustentabilidade, porque copiar uma atividade é fácil e copiar um sistema inteiro exige abandonar o próprio modelo.

**Nota crítica para uso em M&A:** as cinco forças explicam por que a **MÉDIA** do setor é o que é. Elas não explicam por que **ESTA** empresa tem retorno acima da média do setor. Confundir as duas coisas é o erro mais comum em estudo setorial de sell-side — produz um capítulo bonito sobre "setor atrativo" que não sustenta nenhum argumento sobre o alvo. Para a dispersão intra-setorial, a lente é `greenwald` (barreira específica, dominância local) ou `prahalad` (competência/recurso idiossincrático).

## Os frameworks

### 1. Cinco forças — com as perguntas de diagnóstico

Não use os cinco nomes como checklist. Cada força é um conjunto de perguntas empíricas; a resposta é "quanto do lucro potencial esta força captura".

**Força 1 — Rivalidade entre concorrentes existentes**
- Quantos competidores relevantes, e são de tamanho comparável? (fragmentado e simétrico = rivalidade destrutiva)
- O crescimento do setor é rápido ou lento? (lento força disputa por share)
- Os custos fixos são altos em relação ao custo variável? (incentiva encher capacidade a qualquer preço)
- Existe excesso de capacidade estrutural, e a capacidade é adicionada em blocos grandes?
- O produto é percebido como commodity? Existe custo de troca?
- As barreiras de **saída** são altas? (ativos específicos, passivo trabalhista/ambiental, orgulho familiar — muito relevante em indústria e engenharia no Brasil: empresas que deveriam sair não saem, e a rivalidade nunca alivia)
- A competição é em preço ou em dimensões não-preço? (preço é soma-zero; prazo, escopo e serviço podem ser positivos)

**Força 2 — Ameaça de novos entrantes**
- Qual a escala mínima eficiente em relação ao tamanho do mercado?
- Existe vantagem de custo do incumbente independente de escala (localização, ativo insubstituível, aterro licenciado, jazida, contrato de longo prazo)?
- Existem custos de troca para o cliente?
- Capital necessário é alto e irrecuperável (afundado)?
- Acesso a canal de distribuição é restrito?
- Existe barreira regulatória — licença, alvará, credenciamento, acreditação, autorização? (**no contexto brasileiro esta é frequentemente a força dominante**: resíduos, saúde, educação, transporte)
- Retaliação esperada é crível? Há histórico de retaliação?

**Força 3 — Poder de barganha dos fornecedores**
- O grupo de fornecedores é mais concentrado que o setor comprador?
- O fornecedor depende do setor para sua receita? (se não depende, tem poder)
- Existe custo de troca de fornecedor? Insumo diferenciado?
- Existe substituto para o insumo?
- O fornecedor pode integrar para frente de forma crível?
- Mão de obra qualificada escassa conta como fornecedor com poder — sindicalizada, ainda mais.

**Força 4 — Poder de barganha dos clientes**
- Poucos clientes, ou cada um compra volume grande? (**alerta de concentração de receita — cruza direto com risco em due diligence**)
- O produto é padronizado/indiferenciado do ponto de vista do cliente?
- O custo do produto é grande fatia do custo total do cliente? (aumenta sensibilidade a preço)
- O cliente é pouco lucrativo ou pressionado? (repassa pressão)
- O produto afeta pouco a qualidade do produto final do cliente?
- O cliente pode integrar para trás — internalizar o serviço?
- Quem compra é comprador profissional/licitação pública? (poder alto por desenho)

**Força 5 — Ameaça de substitutos**
- Que solução diferente resolve o mesmo problema do cliente? (não confundir com concorrente — substituto vem de outra categoria)
- Qual o trade-off preço/desempenho do substituto, e para que lado ele está se movendo?
- Qual o custo de o cliente migrar para o substituto?
- Existe substituto tecnológico ou regulatório no horizonte? (ex.: reciclagem/valorização energética como substituto de aterro; EAD como substituto de presencial)

**Critério de julgamento:** classifique cada força em alta / média / baixa e — obrigatoriamente — escreva **a direção do movimento** (piorando, estável, melhorando) e **o mecanismo**. Um quadro de cinco forças sem direção e sem mecanismo é decoração. Ao final, a pergunta a responder é uma só: *o ROIC médio deste setor pode exceder o custo de capital de forma persistente, e por quê?* Vincule isso a `koller` — força estrutural se traduz em ROIC sustentado, não em EBITDA.

### 2. Cadeia de valor

Decompõe a empresa nas atividades que geram custo e criam diferenciação.

```
ATIVIDADES DE APOIO
  Infraestrutura da firma (gestão, jurídico, finanças, relações institucionais)
  Gestão de recursos humanos
  Desenvolvimento de tecnologia
  Compras / aquisição de insumos
ATIVIDADES PRIMÁRIAS
  Logística de entrada -> Operações -> Logística de saída -> Marketing e vendas -> Serviços
```

Roteiro de uso:
1. Liste as atividades **como esta empresa realmente as executa** (não o modelo genérico).
2. Aloque custo e ativo empregado a cada atividade.
3. Marque onde a empresa é diferente dos concorrentes — em custo ou em atributo entregue.
4. Marque os **elos**: onde uma atividade só funciona por causa de outra (o elo é o que dificulta a imitação parcial).
5. Marque os elos **verticais** — com fornecedor e cliente.

Critério: uma diferença de atividade que não muda custo nem disposição a pagar não é vantagem. É idiossincrasia.

### 3. Três estratégias genéricas e o meio-termo travado

| Estratégia | Fonte de retorno | Escopo | O que exige abandonar |
|---|---|---|---|
| Liderança em custo | Custo unitário estruturalmente menor no mercado amplo | Amplo | Customização, atendimento premium, cauda de produtos |
| Diferenciação | Disposição a pagar acima do prêmio de custo | Amplo | Volume marginal sensível a preço, padronização máxima |
| Foco (custo ou diferenciação em nicho) | Atender um segmento estreito melhor/mais barato do que quem atende todos | Estreito | Segmentos adjacentes, escala total |

**Meio-termo travado (stuck in the middle):** a empresa que não escolhe fica com custo de quem diferencia e preço de quem lidera custo. Sintomas de diagnóstico, todos observáveis em mid-market brasileiro:
- margem bruta em queda com receita crescendo;
- proliferação de SKUs/serviços sem margem por linha conhecida;
- discurso simultâneo de "temos o melhor serviço" e "somos competitivos em preço";
- mix de clientes que exige tanto customização quanto desconto;
- nenhuma atividade da cadeia de valor sensivelmente diferente dos concorrentes.

Ressalva honesta: Porter admitiu depois que empresas podem, temporariamente, avançar em custo e diferenciação juntas quando estão longe da fronteira de produtividade. O meio-termo é fatal quando a empresa **já** está na fronteira.

### 4. "What Is Strategy?" (1996) — estratégia vs. eficácia operacional

A distinção mais operacionalmente útil de Porter:

- **Eficácia operacional** = executar atividades semelhantes melhor que os rivais. Move a empresa em direção à fronteira de produtividade. É imitável, converge, e a convergência transfere ganho para o cliente (competição de soma zero).
- **Posicionamento estratégico** = executar atividades **diferentes**, ou as mesmas atividades **de forma diferente**. Requer trade-off.

Os três testes de posição estratégica:
1. **Proposta de valor distinta** — qual cliente, qual necessidade, qual preço relativo?
2. **Cadeia de valor adaptada** — as atividades são diferentes das dos rivais, e diferentes *porque* a proposta exige?
3. **Trade-offs explícitos** — o que a empresa escolhe NÃO fazer, e o que perderia se fizesse?
4. **Ajuste (fit)** — as atividades se reforçam mutuamente (fit de 1ª ordem: consistência; 2ª ordem: reforço; 3ª ordem: otimização do esforço)?
5. **Continuidade** — a direção é estável o suficiente para que o sistema se acumule?

Perguntas literais para um diagnóstico:
- "Que cliente vocês recusam?"
- "Que pedido de cliente vocês já disseram não?"
- "Se o concorrente copiasse só isso, o que aconteceria?"
- "O que essa empresa faz que seria irracional para o líder de mercado copiar?"

Se as respostas forem "nenhum", "nunca" e "nada", não há estratégia — há operação.

## Como aplicar

Roteiro para um estudo setorial ou capítulo competitivo de equity story:

1. **Defina o setor com rigor geográfico e de segmento.** Erro fatal: definir amplo demais ("serviços ambientais no Brasil") quando a economia real é regional ("coleta e destinação de RSU em raio de X km de um aterro licenciado"). A fronteira do setor é onde a substituição pelo cliente realmente ocorre.
2. **Levante a rentabilidade histórica do setor**, não do alvo: ROIC ou margem EBIT de comparáveis abertas, múltiplos de transações, dados setoriais de associações. Sem isso, as cinco forças são opinião.
3. **Rode as cinco forças com as perguntas acima**, uma por uma, com evidência ao lado de cada resposta e direção de movimento.
4. **Escreva a frase-conclusão do setor**: "A rentabilidade média deste setor é [x] porque [força dominante], e está [direção] porque [mecanismo]."
5. **Só então vire para o alvo**: cadeia de valor do alvo vs. concorrentes, teste de posição (3 testes acima), identificação de trade-offs reais.
6. **Passe o bastão**: se o alvo tem retorno acima da média, a explicação estrutural vem de `greenwald` (barreira de entrada específica, dominância local) e/ou `prahalad`. Porter entrega o contexto, não o diferencial.

**Dados a pedir ao usuário antes de aplicar:**
- Definição de mercado relevante: produto/serviço e raio geográfico efetivo.
- Lista dos 5–10 principais concorrentes com estimativa de share e porte.
- Concentração de clientes (top 5 e top 10 em % de receita) e de fornecedores.
- Estrutura de custo: fixo vs. variável, principais insumos e sua volatilidade.
- Licenças, autorizações e certificações exigidas — e quantas existem na região.
- Histórico de entradas e saídas nos últimos 5–10 anos (o teste mais barato de barreira).
- Margem bruta e EBIT por linha de serviço/cliente, se existir.
- Contratos: prazo médio, cláusula de reajuste, taxa de renovação.

## O que esta lente NÃO vê

- **É estática.** As cinco forças fotografam a estrutura num instante. Em setores com ciclos curtos de vantagem, a foto envelhece antes de o relatório sair. É exatamente o vazio que `mcgrath` preenche (arena e vantagem transitória) e onde `christensen` explica a mudança de trajetória.
- **Trata o setor como dado, quase natural.** Não explica de onde vem a estrutura, nem que empresas a criam. Plataformas e mercados de múltiplos lados quebram o modelo — a "força" do fornecedor e do cliente se confunde quando os dois são o mesmo lado da rede (ver `choudary`).
- **Explica a média, não a dispersão.** Empiricamente, a variância de rentabilidade **dentro** de setores é maior que **entre** setores. Isso significa que a lente responde a pergunta menos importante para escolher um ativo específico. Repita: cinco forças ≠ tese de investimento.
- **Ignora o interior da firma.** Recursos, capacidades, cultura, qualidade de gestão e capacidade de execução são exógenos aqui. `prahalad`, `collins` e `ram-charan` moram nesse vazio.
- **Trata cooperação como ruído.** Complementadores, alianças, ecossistemas e joint ventures não têm lugar nas cinco forças (a crítica de Brandenburger/Nalebuff com a "sexta força" / value net).
- **O "meio-termo travado" é frágil como lei.** Toyota, e depois metade do varejo digital, sustentou custo e diferenciação por décadas. Use como sintoma diagnóstico, não como sentença.
- **Não tem prescrição.** Porter diagnostica com precisão e prescreve pouco: "escolha uma genérica e faça trade-offs" não é um plano. Não pergunte a esta lente *como* construir a posição.
- **Onde leva à conclusão errada, concretamente:** (a) setor "pouco atrativo" na média com nichos regionais extremamente rentáveis — recomenda passar de um bom ativo; (b) setor "atrativo" na média cujo alvo não tem nenhuma barreira própria — sustenta múltiplo que não se defende em due diligence; (c) definição de setor ampla demais dilui a força regulatória, que é justamente o moat; (d) em setores em inflexão, força "baixa" hoje é destruição amanhã.

## Onde colide ou complementa

| Outra lente | Em que ponto discordam ou se somam | Quando preferir cada uma |
|---|---|---|
| `greenwald` | Colisão direta: Greenwald diz que das cinco forças só uma importa — barreira de entrada — e que as outras quatro são detalhe tático. Porter diria que rivalidade e poder de compra determinam a média mesmo sem entrantes. | Porter para descrever o campo; `greenwald` para decidir se há moat e quanto vale. Em tese de investimento, `greenwald` manda. |
| `mcgrath` | Complemento tenso: Porter busca vantagem sustentável e trade-off estável; McGrath diz que o setor não é a arena certa e que a vantagem expira. | Porter em setor de estrutura estável e regulada; `mcgrath` quando a estrutura está se movendo ou o plano é de expansão/novo mercado. |
| `christensen` | Somam-se: substitutos de Porter é a caixa onde a disrupção de Christensen nasce, mas Porter não explica por que o incumbente não reage. | Porter para o mapa; `christensen` para a dinâmica de entrada por baixo e para o job do cliente. |
| `prahalad` | Complemento clássico (outside-in vs. inside-out): Porter olha estrutura, Prahalad olha competência central e recurso. | Porter para explicar a média setorial; `prahalad` para explicar o desempenho acima da média. Use as duas em qualquer equity story séria. |
| `choudary` | Colisão estrutural: em negócio de plataforma as cinco forças perdem definição — o cliente é fornecedor, e a força decisiva é efeito de rede. | `choudary` sempre que houver dois lados e efeito de rede; Porter em cadeia linear de valor. |
| `koller` | Complemento aritmético: Porter dá o *porquê* qualitativo do spread ROIC−WACC; Koller mede o spread e o traduz em valor. | Sempre juntas: força estrutural sem ROIC é retórica; ROIC sem explicação estrutural não se projeta. |
| `kotler` | Somam-se na segmentação: Porter define escopo competitivo, Kotler define segmento, posicionamento e proposta ao cliente. | Porter para a escolha estratégica; `kotler` para operacionalizar a proposta de valor por segmento. |
| `collins` | Complemento: Porter explica o campo, Collins explica disciplina, pessoas e consistência de execução. | Porter para o "onde competir"; `collins` para o "por que esta gestão sustenta". |
| `jack-welch` | Ressonância parcial: a regra "seja nº 1 ou nº 2, ou saia" é uma leitura brutal de posição estrutural e barreira de saída. | `jack-welch` para decisão de portfólio; Porter para justificá-la analiticamente. |

## Fontes

- *Competitive Strategy: Techniques for Analyzing Industries and Competitors* (1980) — cinco forças, estratégias genéricas.
- *Competitive Advantage: Creating and Sustaining Superior Performance* (1985) — cadeia de valor, elos, escopo competitivo.
- "What Is Strategy?" — *Harvard Business Review*, nov-dez 1996 — estratégia vs. eficácia operacional, trade-off, fit, fronteira de produtividade.
- "The Five Competitive Forces That Shape Strategy" — *HBR*, jan 2008 — revisão do próprio autor, com atenção a fatores frequentemente confundidos com forças (crescimento, tecnologia, governo, produtos complementares).
- Crítica do "stuck in the middle": literatura de estratégia dos anos 1990 em diante; a ressalva sobre a fronteira de produtividade é do próprio Porter (1996).
- Sexta força / value net: Brandenburger & Nalebuff, *Co-opetition* (1996) — atribuição a eles, não a Porter.
- Evidência de que a dispersão intra-setorial supera a inter-setorial: linha de pesquisa de decomposição de variância de rentabilidade (Rumelt, 1991, e sucessores). A **leitura de que isso limita o uso das cinco forças em tese de investimento é interpretação nossa**, não afirmação de Porter.
