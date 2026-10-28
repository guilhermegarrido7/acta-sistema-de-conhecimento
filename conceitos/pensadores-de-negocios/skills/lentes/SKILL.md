---
name: lentes
description: Escolha a lente teórica certa para a análise (Porter, Greenwald, Koller, Christensen, McGrath e outras) e aplique-a, dizendo o que cada candidata enxerga e ignora. Acionar ao pedir análise competitiva ou setorial, ao avaliar moat, barreira de entrada ou plano de crescimento, ou ao ler modelo de negócio.
---

# Lentes: a porta de entrada da biblioteca teórica

## O que esta skill faz

É a **roteadora** e a única skill do plugin. As 14 lentes vivem em `references/`, um arquivo por
pensador (`references/michael-porter.md`, `references/tim-koller.md` e assim por diante), e só entram
no contexto quando esta skill escolhe a lente. Assim o plugin custa uma descrição em toda sessão, e
não quinze. Os nomes entre crases nas tabelas abaixo são os nomes desses arquivos.

Ela existe porque **pensador não é a unidade da pergunta.** Quando alguém pede uma análise
competitiva de um setor, não está pedindo Porter: está pedindo análise competitiva, e Porter é uma
lente entre várias, que responde a uma pergunta bem específica e é cega para outras.

## O protocolo

Quatro passos. Não pule o 3.

### 1. Identifique a pergunta real

Traduza o pedido do usuário na pergunta analítica que está por baixo. "Faça uma análise competitiva
do setor de construção civil" pode ser, na verdade:

- *por que a rentabilidade média deste setor é baixa?* → estrutura de setor
- *por que esta empresa específica ganha mais que a média?* → barreira e vantagem do incumbente
- *essa vantagem dura quanto tempo?* → duração e reversão
- *quem deveria ser o dono deste ativo?* → best owner
- *o plano de crescimento que me apresentaram é sério?* → premissas e incerteza

São perguntas diferentes, com lentes diferentes, e a resposta certa para uma é irrelevante para a
outra. **A pergunta mais comum e mais mal atendida é a segunda**: usar cinco forças para explicar
por que uma empresa tem retorno acima da média não funciona, porque cinco forças explica a média, não
o desvio.

### 2. Selecione as candidatas pelo mapa

### 3. Apresente as candidatas e pergunte pelo contexto

**Este é o passo que não se pula.** Antes de aplicar, apresente 2 a 4 lentes candidatas, e para
cada uma, em uma linha cada:

- **o que ela enxerga**
- **o que ela ignora**
- **de que dado ela precisa** para ser aplicada de verdade

E então pergunte. **A pergunta não é "qual autor você quer".** É uma pergunta de contexto, cuja
resposta determina a lente, formulada a partir da distinção que separa as candidatas. Exemplos do
que perguntar:

| Candidatas em disputa | O que perguntar |
|---|---|
| `michael-porter` vs. `bruce-greenwald` | "Você quer entender por que o setor todo é rentável ou não, ou por que **esta** empresa tem retorno acima dos concorrentes?" |
| `bruce-greenwald` vs. `rita-mcgrath` | "A vantagem que você está avaliando é estrutural e estável, ou o setor está passando por uma inflexão?" |
| `michael-porter` vs. `sangeet-choudary` | "O negócio vende para o cliente, ou **medeia** a interação entre dois grupos que se valorizam mutuamente?" |
| `ck-prahalad` vs. `bruce-greenwald` | "A vantagem está num **ativo** que a empresa tem, ou numa **capacidade** que a organização sabe fazer?" |
| `clayton-christensen` vs. `philip-kotler` | "A pergunta é sobre o job que o cliente contrata, ou sobre segmentar e posicionar num mercado já definido?" |
| `jim-collins` vs. `ram-charan` | "O diagnóstico é de **articulação** (a empresa não sabe dizer o que é) ou de **execução** (sabe, mas não sai do papel)?" |
| `tim-koller` vs. qualquer estratégica | "Você quer o mecanismo econômico quantificado, ou a explicação estratégica de por que ele existe?" |

Quando a resposta do usuário indicar que **mais de uma lente se aplica**, aplique mais de uma, e
explicite onde elas discordam. Divergência entre lentes é informação, não problema: quando Porter diz
que o setor é ruim e Greenwald diz que a empresa tem barreira local, as duas coisas são verdade ao
mesmo tempo, e é exatamente essa combinação que sustenta a tese de um ativo regional.

Se o usuário não quiser escolher, **recomende uma** com o motivo, e siga. Não trave a análise numa
pergunta de método.

### 4. Carregue e aplique

Leia o arquivo da lente escolhida em `references/<nome>.md` (por exemplo,
[references/bruce-greenwald.md](references/bruce-greenwald.md)) e siga a mecânica dele. Leia só as
lentes que vai aplicar. Ao aplicar, respeite duas regras:

- **Diga qual lente está sendo usada.** A análise fica auditável e o usuário pode pedir outra.
- **Traga a seção "o que esta lente não vê" para a conclusão.** Todo arquivo de lente tem essa
  seção. Uma análise que não declara o próprio ponto cego é propaganda.

## O mapa: tipo de pergunta para lente

### Estrutura, competição e vantagem

| A pergunta | Lente | Unidade de análise |
|---|---|---|
| Por que a rentabilidade média deste setor é o que é? | `michael-porter` | a estrutura do setor |
| Por que esta empresa ganha acima da média? Há barreira de entrada real? | `bruce-greenwald` | a barreira de entrada |
| Quanto tempo essa vantagem dura? O setor está numa inflexão? | `rita-mcgrath` | a arena e a duração |
| Esta empresa está exposta a um entrante com modelo mais barato? | `clayton-christensen` | o modelo de negócio |
| A vantagem é um ativo ou uma capacidade da organização? | `ck-prahalad` | a competência |
| O negócio é plataforma de dois lados ou cadeia linear? | `sangeet-choudary` | a interação central |
| Este negócio é nº 1 ou nº 2 no mercado que de fato disputa? | `jack-welch` | o portfólio |

### Valor e propriedade

| A pergunta | Lente |
|---|---|
| Crescer nesta empresa cria ou destrói valor? | `tim-koller` |
| Quem deveria ser o dono deste ativo? | `tim-koller` (best owner) |
| Qual o valor do poder de lucro atual, separado do valor de crescimento? | `bruce-greenwald` (EPV) |

Para o **cálculo** (NOPAT, capital investido, ROIC, WACC, DCF, valor terminal, múltiplos), a
resposta não está neste plugin. Está em `acta-modelagem-economico-financeira`. Este plugin dá a
explicação estratégica; aquele dá o número.

> Se o plugin de valuation não estiver instalado e a pergunta for de cálculo, **avise o usuário** em
> vez de improvisar a metodologia:
> `claude plugin install acta-modelagem-economico-financeira@acta-sistema-de-conhecimento --scope user`

### Mercado e cliente

| A pergunta | Lente |
|---|---|
| Como segmentar, posicionar e precificar num mercado definido? | `philip-kotler` |
| Que trabalho o cliente está contratando este produto para fazer? | `clayton-christensen` (jobs to be done) |
| Como se constrói e se escala o lado da oferta numa rede pulverizada? | `sangeet-choudary` |

### Gestão, execução e organização

| A pergunta | Lente |
|---|---|
| Por que o plano existe e não sai do papel? | `ram-charan` |
| A empresa sabe dizer o que ela é e onde é a melhor? | `jim-collins` (porco-espinho) |
| Como se descreve a estratégia de um negócio verticalizado? | `jim-collins` (flywheel) |
| A organização está alinhada em sistemas, estilo, valores e gente? | `tom-peters` (7S) |
| A gestão depende do fundador? Há profundidade de time? | `ram-charan` + `ck-prahalad` |
| Este negócio deve ser consertado, vendido ou fechado? | `jack-welch` + `tim-koller` |

### Tecnologia, custo e ambição

| A pergunta | Lente |
|---|---|
| O custo desta operação pode ser reconstruído de baixo para cima? | `elon-musk` (primeiros princípios, índice de idiota) |
| Que parte do custo deste negócio está exposta a compressão por IA? | `dario-amodei` |

**Ressalva sobre este bloco:** `elon-musk` e `dario-amodei` são **doutrina de operador, não
framework analítico**: vivem em ensaio, entrevista e biografia, mudam no tempo, e os autores têm
interesse comercial no resultado. Os arquivos dessas lentes dizem isso na abertura. Não são a lente certa para a
maioria dos diagnósticos de empresa tradicional, e o roteador deve dizer isso quando o usuário pedir
uma delas para uma pergunta que outra lente responde melhor.

## Sobreposições que exigem escolha explícita

As colisões mais frequentes, e o critério:

| Colisão | O critério de escolha |
|---|---|
| `michael-porter` × `bruce-greenwald` | Média do setor vs. desvio da empresa. Greenwald reduz as cinco forças a uma: barreira de entrada. Para alvo regional com licença e densidade logística, Greenwald costuma render mais. |
| `bruce-greenwald` × `rita-mcgrath` | Vantagem estável vs. vantagem transitória. Se o setor está em inflexão regulatória ou tecnológica, a premissa de estabilidade de Greenwald falha. |
| `ck-prahalad` × `bruce-greenwald` | Capacidade organizacional vs. ativo posicional. Em empresa familiar, os três testes de competência essencial de Prahalad servem para separar competência real de dependência do fundador. |
| `clayton-christensen` × `rita-mcgrath` | Ambos tratam de ruptura. Christensen explica o mecanismo pelo qual o incumbente falha; McGrath dá a ferramenta de decisão sob incerteza. |
| `philip-kotler` × marketing baseado em evidência | O aparato de Kotler é contestado empiricamente (Byron Sharp / Ehrenberg-Bass) em segmentação e diferenciação. A lente `philip-kotler` registra a crítica. |
| `jim-collins` × `jack-welch` | Ambos são doutrina de praticante com base empírica frágil ou contestada, e os arquivos das duas lentes dizem isso. |
| `elon-musk` × `michael-porter` | Reconstruir custo de baixo para cima vs. aceitar a estrutura do setor. Em setor regulado, "questionar todo requisito" pode significar violar norma cuja razão de existir não é arbitrária. |

## Onde as lentes servem no trabalho da casa

| Entregável | Lentes que costumam render |
|---|---|
| Estudo setorial | `michael-porter` para a estrutura, `bruce-greenwald` para a barreira, `rita-mcgrath` para a inflexão, `jack-welch` para a tese de consolidação |
| Equity story e teaser | `bruce-greenwald` para o moat, `jim-collins` (flywheel) para negócio verticalizado, `ck-prahalad` para competência |
| Tese de CAP no valuation | `bruce-greenwald` e `rita-mcgrath`: a duração da vantagem é a mesma tese do moat, e o material não pode contradizer o modelo |
| Avaliação do plano do vendedor | `rita-mcgrath` (discovery-driven planning: premissas ordenadas por incerteza × impacto), `ram-charan` (os três processos) |
| Diagnóstico de consultoria | `ram-charan`, `jim-collins`, `tom-peters` |
| Segmentação de compradores | `tim-koller` (best owner), `jack-welch` (portfólio) |

## O que esta skill não faz

Não substitui a análise. Ela escolhe a ferramenta e carrega a mecânica; a evidência do caso concreto
continua vindo do data room, das fontes primárias do setor e das entrevistas. **Uma lente aplicada a
dado que não existe produz uma conclusão bonita e falsa**, e é obrigação desta skill dizer, no passo
3, de que dado cada lente precisa.
