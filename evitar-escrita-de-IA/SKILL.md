---
name: avoid-ai-writing
description: Auditar e reescrever conteúdo para remover padrões de escrita de IA ("AI-isms"). Use esta skill quando solicitado a "remover AI-isms," "limpar escrita de IA," "editar escrita para padrões de IA," "auditar escrita para sinais de IA," ou "fazer isso parecer menos com IA." Suporta um modo somente-detecção, um modo de edição no local para arquivos, um perfil de voz opcional (casual / profissional / técnico / caloroso / direto), e uma passagem de iteração até convergência.
version: 3.15.0
license: MIT
compatibility: Any AI coding assistant that supports agentskills.io SKILL.md format (Claude Code, Cursor, VS Code Copilot, Hermes Agent, OpenHands, etc.) or OpenClaw. No external tools or APIs required.
metadata:
  author: Conor Bronsdon
  tags: writing editing voice quality
  agentskills_spec: "1.0"
  openclaw:
    emoji: "✍️"
---

# Evitar Escrita de IA — Auditoria e Reescrita

Você está editando conteúdo para remover padrões de escrita de IA ("AI-isms") que fazem o texto parecer gerado por máquina.

## O que esta skill é e não é

Esta é uma **ferramenta de qualidade de escrita**, não um veredito. Os padrões sinalizados aqui são estatisticamente mais comuns em saída de LLM, mas humanos no modo automático — especialmente escrevendo sob pressão de prazo, em gêneros desconhecidos, ou em uma segunda língua — produzem as mesmas formas. Auditorias independentes de detectores de IA comerciais encontraram taxas de falso-positivo acima de 60% em escritores não-nativos de inglês (Liang et al., Stanford, *Patterns* 2023) e taxas gerais de classificação incorreta acima de 70% em detectores de código aberto (Jabarian & Imas, BFI Working Paper 2025-116, 2025). Paráfrase adversarial reduz a precisão de detecção em ~88% em todos os métodos testados (arXiv:2506.07001, 2025).

Os padrões são úteis como um sinal — tanto para limpar sua própria escrita quanto para avaliar se um texto parece gerado por IA. Só não os torne a única base para uma decisão consequente (integridade acadêmica, contratação, publicação, atribuição). Várias regras aqui também disparam em escrita de segunda língua, humanos pressionados por prazos, e gêneros técnicos que comprimem vocabulário por design. Combine o sinal com contexto: quem escreveu, qual gênero, como é a voz normal do escritor, quais outras evidências você tem.

Em resumo: sinais, não prova. Vale a pena agir; não vale a pena arruinar o dia de alguém por causa disso.

## Modos

Esta skill opera em um de três modos:

**`rewrite`** (padrão) — Sinaliza AI-isms e reescreve o texto para corrigi-los.

**`detect`** — Apenas sinaliza AI-isms. Sem reescrita. Use este modo quando:
- O escritor quer ver o que é sinalizado e decidir o que corrigir por conta própria
- Os padrões sinalizados podem ser intencionais (padrões de IA não são sempre ruins — podem ser eficazes em pequenas doses)
- Você está auditando texto que não quer alterar (conteúdo publicado, escrita de outra pessoa, material de referência)
- Você quer uma varredura rápida sem esperar por uma reescrita completa

**`edit`** — Edita um arquivo no local em vez de retornar texto reescrito. Use isso quando o escritor apontar para um arquivo ("limpe `draft.md`", "corrija os AI-isms neste arquivo diretamente") e quiser o arquivo alterado, não uma cópia para colar de volta. Faça **edições mínimas e direcionadas** com a ferramenta Edit — mude os trechos sinalizados, não o documento inteiro. **Preserve passagens que já são humanas**: se um parágrafo não tem sinais, deixe-o intocado. **Não edite material citado, blocos de código, ou texto atribuído a outra pessoa** — sinalize-os em vez de reescrevê-los. Para um arquivo grande, confirme qual seção limpar antes de mudar qualquer coisa. Depois de editar, releia o arquivo e confirme que os padrões sinalizados foram resolvidos.

Acione o modo detect quando o usuário disser "detectar," "apenas sinalizar," "apenas auditar," "só sinalizar," "escanear," "quais padrões de IA estão aqui," ou similar. Acione o modo edit quando o usuário nomear um arquivo e pedir para corrigi-lo ou limpá-lo no local. O padrão é o modo rewrite se não especificado.

**Invocação.** Linguagem natural é suficiente ("reescreva isso em uma voz direta para o LinkedIn," "edite `post.md` no local," "escaneie isso, não reescreva"). Usuários avançados também podem passar opções explícitas, que mapeiam para as seções abaixo: `[--mode rewrite|detect|edit]`, `[--voice casual|professional|technical|warm|blunt]`, `[--context linkedin|blog|technical-blog|investor-email|docs|casual]`, `[--file PATH]`, `[--iterate N]` (máx 2).

**Iterar até convergência (opcional).** O modo rewrite já executa uma segunda passagem corretiva (veja Formato de saída) — essa passagem integrada *é* a passagem 2, então `--iterate` não se acumula sobre ela. Quando o escritor pedir para "iterar," "continuar até estar limpo," ou passar `--iterate N`, repita o ciclo auditoria→reescrita até que nenhum padrão permaneça ou **N passagens** sejam alcançadas. Limite **N a 2**: uma reescrita mais uma passagem corretiva elimina os padrões sinalizados, e uma terceira passagem custa uma regeneração completa enquanto raramente encontra mais problemas. Relate quantas passagens foram necessárias ("convergiu em 2 passagens").

---

No modo **rewrite**, seu trabalho é:

1. **Auditar**: identificar cada AI-ism presente, citando o texto específico
2. **Reescrever**: retornar uma versão limpa com todos os AI-isms removidos
3. **Mostrar um resumo do diff**: listar brevemente o que você mudou e por quê

No modo **detect**, seu trabalho é:

1. **Auditar**: identificar cada AI-ism presente, citando o texto específico
2. **Avaliar**: notar quais sinalizações são problemas claros vs. padrões que podem ser intencionais ou eficazes no contexto

No modo **edit**, seu trabalho é:

1. **Ler** o arquivo que o escritor nomeou
2. **Editar no local**: aplicar correções mínimas e direcionadas nos trechos sinalizados com a ferramenta Edit, deixando passagens já humanas intocadas
3. **Verificar**: reler o arquivo e confirmar que os padrões sinalizados foram resolvidos; relatar o que foi mudado

---

## O que remover ou corrigir

### Formatação
- **Travessões (— e --)**: Substitua por vírgulas, pontos, parênteses, ou reescreva como duas frases. Meta: zero. Máximo tolerável: um por 1.000 palavras. Isso se aplica a títulos e cabeçalhos de seção também, não apenas ao corpo do texto. Capture tanto o travessão Unicode (—) quanto o substituto de duplo-hífen (--).
- **Excesso de negrito**: Retire o negrito da maioria das frases. Uma frase em negrito por seção principal no máximo, ou nenhuma. Se algo é importante o suficiente para estar em negrito, reestruture a frase para começar com isso em vez disso.
- **Emoji em cabeçalhos**: Remova completamente. Nada de `## 🚀 O que isso significa`. Exceção: posts sociais podem usar um ou dois emojis com moderação — no final de uma linha, nunca no meio da frase.
- **Excesso de listas com marcadores**: Converta seções carregadas de marcadores em parágrafos de texto corrido. Marcadores apenas para conteúdo genuinamente de lista (comparações de recursos, instruções passo a passo, parâmetros de API).
- **Aspas curvas (“ ” ‘ ’) e apóstrofos**: Aspas e apóstrofos curvos (U+201C/U+201D, U+2018/U+2019) são um sinal *fraco* de colar-do-chat — significativo principalmente em contextos de texto simples como comentários de código, mensagens de commit, ou rascunhos em texto puro, onde nada se curva automaticamente. Trate como corroborativo, nunca conclusivo: Word, Google Docs, macOS e iOS curvam aspas por padrão, então a maioria da prosa humana também as contém. Não sinalize apóstrofos curvos (U+2019) isoladamente. Substitua por aspas retas em texto simples/código; deixe-as em publicações finalizadas e em pontuação correta para o idioma local (francês « », alemão „ “).
- **Tipografia impecável em registros casuais**: Mesmo nível das aspas curvas — um sinal *fraco*, específico do registro, nunca conclusivo isoladamente. Espaçamento, pontuação e capitalização perfeitos em um contexto onde humanos digitam rápido (comentários de issue/PR, chat, DMs) são evidência corroborativa, não prova: um humano cuidadoso pode digitar um comentário impecável, e um apressado pode digitar um descuidado. Julgue isso junto com outros sinais. Caso inverso que vale sinalizar na outra direção: ao editar o texto casual de um humano (uma mensagem no Slack, uma resposta rápida), preserve os erros de digitação, contrações e capitalização idiossincrática em vez de corrigi-los — suavizar as arestas apaga a impressão digital que marca o texto como sendo dele.

### Estrutura de frase
- **"Não é X — é Y" / "Isso não é sobre X, é sobre Y"**: Reescreva como uma afirmação positiva direta. Máximo uma por texto, e apenas se servir ao argumento. Isso inclui a **forma dividida entre frases**, onde a negação e a correção caem em duas frases separadas em vez de girar sobre um único travessão ou vírgula: "O destaque não é a velocidade. A história real é Y." Lida isoladamente, cada frase parece uma declarativa inocente, e é exatamente por isso que a versão dividida escapa de uma verificação ajustada para a frase unida — sinalize-a da mesma forma. A IA também empilha a negação por várias opções antes da revelação ("Não é o preço. Não são os recursos. É a confiança."). A contagem regressiva de múltiplas negações é o mesmo movimento inflado; sinalize-a e vá direto à afirmação positiva.
- **Intensificadores vazios**: Corte `genuine` / `genuinely`, `real` (como em "a real improvement"), `truly`, `quite frankly`, `to be honest`, `let's be clear`, `it's worth noting that`. Apenas declare o fato.
- **Endosso vago ("worth [verb]ing")**: Corte ou substitua `worth reading`, `worth paying attention to`, `worth a look`, `worth exploring`, `worth checking out`, `worth your time`. Isso substitui um sinal de aprovação genérico por uma razão específica. Diga *por que* algo importa em vez disso.
- **Hedging (linguagem hesitante)**: Corte `perhaps`, `could potentially`, `it's important to note that`, `to be clear`. Vá direto ao ponto.
- **Frases de ligação ausentes**: Cada parágrafo deve se conectar ao anterior. Se os parágrafos pudessem ser reorganizados sem o leitor notar, adicione tecido conectivo.
- **Regra de três compulsiva**: Varie os agrupamentos. Use dois itens, quatro itens, ou uma frase completa em vez de tríades. Máximo um padrão "adjetivo, adjetivo e adjetivo" por texto.

### Palavras e frases a substituir

As palavras são organizadas em três níveis com base em quão confiavelmente sinalizam texto gerado por IA. Essa abordagem em níveis — adaptada da pesquisa de vocabulário do [brandonwise/humanizer](https://github.com/brandonwise/humanizer) — reduz falsos positivos em palavras que são normais isoladamente, mas suspeitas em conjuntos.

- **Nível 1 — Sempre sinalizar.** Essas palavras aparecem 5–20x mais em texto de IA do que em texto humano. Substitua ao avistar.
- **Nível 2 — Sinalizar em conjuntos.** Individualmente normais, mas duas ou mais no mesmo parágrafo são um forte sinal de IA. Sinalize quando aparecerem juntas.
- **Nível 3 — Sinalizar por densidade.** Palavras comuns que a IA simplesmente usa em excesso. Sinalize apenas quando compõem uma fração perceptível do texto (aproximadamente 3%+ do total de palavras).

**Combine formas flexionadas.** Cada entrada abaixo cobre a palavra listada *e suas variantes morfológicas* — advérbio (`-ly`), gerúndio/participle (`-ing`), plural, comparativo/superlativo, e conjugações verbais — a menos que uma variante carregue um significado distinto e legítimo. Então `genuine` também sinaliza `genuinely`, `leverage` também sinaliza `leveraging` / `leveraged`, `delve` cobre `delving`, e `meticulous` cobre `meticulously`. Quando uma variante tem um sentido honesto separado (ex.: `real` significando factual, não o intensificador em "a real improvement"), julgue pelo contexto em vez de combinar ciegamente.

#### Nível 1 — Sempre substituir

| Substituir | Por |
|---|---|
| delve / delve into | explore, dig into, look at |
| landscape (metáfora) | field, space, industry, world |
| tapestry | (descreva a complexidade real) |
| realm | area, field, domain |
| paradigm | model, approach, framework |
| embark | start, begin |
| beacon | (reescreva completamente) |
| testament to | shows, proves, demonstrates |
| robust | strong, reliable, solid |
| comprehensive | thorough, complete, full |
| cutting-edge | latest, newest, advanced |
| leverage (verbo) | use |
| pivotal | important, key, critical |
| underscores | highlights, shows |
| meticulous / meticulously | careful, detailed, precise |
| seamless / seamlessly | smooth, easy, without friction |
| game-changer / game-changing | descreva o que especificamente mudou e por que importa |
| hit differently / hits different | (diga o que especificamente mudou, ou corte) |
| utilize | use |
| watershed moment | turning point, shift (ou descreva o que mudou) |
| marking a pivotal moment | (declare o que aconteceu) |
| the future looks bright | (corte — diga algo específico ou nada) |
| only time will tell | (corte — diga algo específico ou nada) |
| nestled | is located, sits, is in |
| vibrant | (descreva o que torna ativo, ou corte) |
| thriving | growing, active (ou cite um número) |
| despite challenges… continues to thrive | (nomeie o desafio e a resposta, ou corte) |
| showcasing | showing, demonstrating (ou corte a cláusula) |
| deep dive / dive into | look at, examine, explore |
| unpack / unpacking | explain, break down, walk through |
| bustling | busy, active (ou cite o que torna movimentado) |
| intricate / intricacies | complex, detailed (ou nomeie a complexidade específica) |
| complexities | (nomeie as complexidades reais, ou use "problems" / "details") |
| ever-evolving | changing, growing (ou descreva como) |
| enduring | lasting, long-running (ou cite por quanto tempo) |
| daunting | hard, difficult, challenging |
| holistic / holistically | complete, full, whole (ou descreva o que está incluído) |
| actionable | practical, useful, concrete |
| impactful | effective, significant (ou descreva o impacto) |
| learnings | lessons, findings, takeaways |
| thought leader / thought leadership | expert, authority (ou descreva sua contribuição real) |
| best practices | what works, proven methods, standard approach |
| at its core | (corte — apenas declare a coisa) |
| synergy / synergies | (descreva o efeito combinado real) |
| interplay | relationship, connection, interaction |
| in order to | to |
| due to the fact that | because |
| serves as | is |
| features (verbo) | has, includes |
| boasts | has |
| presents (inflado) | is, shows, gives |
| commence | start, begin |
| ascertain | find out, determine, learn |
| endeavor | effort, attempt, try |
| keen (como intensificador) | interested, eager, enthusiastic (ou corte — apenas declare o interesse) |
| genuinely / genuine (como intensificador) | (corte — apenas declare o fato) |
| symphony (metáfora) | (descreva a coordenação ou combinação real) |
| embrace (metáfora) | adopt, accept, use, switch to |

#### Nível 2 — Sinalizar quando 2+ aparecem no mesmo parágrafo

Essas palavras são legítimas isoladamente. Quando duas ou mais aparecem juntas, o parágrafo provavelmente precisa de uma reescrita.

| Substituir | Por |
|---|---|
| harness | use, take advantage of |
| navigate / navigating | work through, handle, deal with |
| foster | encourage, support, build |
| elevate | improve, raise, strengthen |
| unleash | release, enable, unlock |
| streamline | simplify, speed up |
| empower | enable, let, allow |
| bolster | support, strengthen, back up |
| spearhead | lead, drive, run |
| resonate / resonates with | connect with, appeal to, matter to |
| revolutionize | change, transform, reshape (ou descreva o que mudou) |
| facilitate / facilitates | enable, help, allow, run |
| underpin | support, form the basis of |
| nuanced | specific, subtle, detailed (ou nomeie a nuance real) |
| crucial | important, key, necessary |
| multifaceted | (descreva as facetas reais, ou corte) |
| ecosystem (metáfora) | system, community, network, market |
| myriad | many, numerous (ou dê um número) |
| plethora | many, a lot of (ou dê um número) |
| encompass | include, cover, span |
| catalyze | start, trigger, accelerate |
| reimagine | rethink, redesign, rebuild |
| galvanize | motivate, rally, push |
| augment | add to, expand, supplement |
| cultivate | build, develop, grow |
| illuminate | clarify, explain, show |
| elucidate | explain, clarify, spell out |
| juxtapose | compare, contrast, set side by side |
| paradigm-shifting | (descreva o que realmente mudou) |
| transformative / transformation | (descreva o que mudou e como) |
| cornerstone | foundation, basis, key part |
| paramount | most important, top priority |
| poised (to) | ready, set, about to |
| burgeoning | growing, emerging (ou cite um número) |
| nascent | new, early-stage, emerging |
| quintessential | typical, classic, defining |
| overarching | main, central, broad |
| quietly | corte, ou nomeie o contraste concreto |
| deeply *(apenas colocações de significância — "deeply integrated," "deeply committed," "deeply rooted"; usos literais como "deeply nested" ou "cares deeply" nunca contam para um conjunto)* | corte, ou nomeie especificamente o que vai profundo |
| underpinning / underpinnings | basis, foundation, what supports |

#### Nível 3 — Sinalizar apenas em alta densidade

Essas são palavras normais. Sinalize apenas quando o texto estiver saturado delas — um sinal de que a IA preencheu espaço com elogio vago em vez de especificidades.

| Palavra | O que fazer |
|---|---|
| significant / significantly | Substitua algumas por especificidades: números, comparações, exemplos |
| innovative / innovation | Descreva o que é realmente novo |
| effective / effectively | Diga como ou cite uma métrica |
| dynamic / dynamics | Nomeie as forças ou mudanças reais |
| scalable / scalability | Descreva o que escala e para quê |
| compelling | Diga por que é convincente |
| unprecedented | Nomeie o precedente que rompe (ou corte) |
| exceptional / exceptionally | Cite o que torna isso uma exceção |
| remarkable / remarkably | Diga o que merece ser notado |
| sophisticated | Descreva a sofisticação |
| instrumental | Diga qual papel isso desempenhou |
| world-class / state-of-the-art / best-in-class | Cite um benchmark ou comparação |

#### Frases do Nível 3 — Sinalizar por densidade ou em conjuntos

Clichês de várias palavras que são individualmente inofensivos, mas se acumulam pesadamente em conteúdo gerado por IA (crypto, web3, DePIN, avaliações de AI/infra são os piores infratores). Sinalize com **2+ usos da mesma frase** (a regra por frase — limiar mais baixo do que o Nível 3 de palavra única porque uma correspondência de duas palavras repetida duas vezes já é evidência mais forte do que reutilizar "significant"), *mais* uma **regra de conjunto**: três ou mais frases *distintas* desta tabela em um único texto é um forte sinal mesmo quando cada frase aparece apenas uma vez — essa é a forma que os LLMs assumem quando variam seu próprio clichê para parecer menos repetitivos.

| Frase | O que fazer |
|---|---|
| emerging sector / emerging space / emerging category | Nomeie o setor real ou o que está emergindo sobre ele |
| the integration of (X with Y) | Descreva o que está sendo integrado e o que muda para o usuário |
| the intersection of (X and Y) | Escolha a sobreposição específica que importa ou corte o enquadramento |
| community-driven | Nomeie o que a comunidade faz. "Community-driven" isoladamente é enchimento |
| long-term sustainability | Cite o horizonte de tempo e a restrição. "Long-term" é vago |
| user engagement | Nomeie a ação. "Engagement" é um invólucro para cliques/comentários/retenção |
| decentralized compute | Especifique a arquitetura ou corte. A frase se tornou um rótulo de categoria, não uma afirmação |
| (sustainable) reward emissions | Cite o cronograma de emissão e o destino |
| tokenized incentive structures | Descreva o mecanismo real (vesting, gauge, bonded LP, etc.) |
| designed for long-term [X] | Corte "designed for" — ou é, ou não é. Depois declare a propriedade |

### Frases de modelo (evitar)

Essas construções de preenchimento de slots sinalizam que uma frase foi gerada, não escrita. Se uma frase tem um espaço em branco onde um substantivo ou adjetivo poderia entrar e ainda soar igual, é muito genérica.

- "a [adjetivo] step towards [adjetivo] AI infrastructure" → descreva a capacidade, benchmark ou resultado específico
- "a [adjetivo] step forward for [substantivo]" → mesma regra: diga o que realmente mudou
- "Whether you're [X] or [Y]" → construção de falsa amplitude. Escolha o público que você está realmente abordando, ou corte. "Whether you're a startup founder or an enterprise architect" não significa nada — é só "todo mundo".
- "I recently had the pleasure of [verbo]-ing" → padrão de IA de review/social. Apenas diga o que aconteceu: "I talked to," "I read," "I attended."

### Frases de transição a remover ou reescrever
- "Moreover" / "Furthermore" / "Additionally" → reestruture para que a conexão seja óbvia, ou use "and," "also," "on top of that"
- "In today's [X]" / "In an era where" → corte ou declare um contexto específico
- "It's worth noting that" / "Notably" → apenas declare o fato
- "Here's what's interesting" / "Here's what caught my eye" / "Here's what stood out" → enquadramentos que direcionam o leitor. Deixe o conteúdo sinalizar sua própria importância. Se precisar de uma introdução, torne-a específica: "The revenue number matters because..." e não "Here's the interesting part."
- "In conclusion" / "In summary" / "To summarize" → sua conclusão deveria ser óbvia
- "When it comes to" → apenas fale sobre a coisa diretamente
- "At the end of the day" → corte
- "That said" / "That being said" → corte ou use "but," "yet," ou "however." Não abuse de nenhum deles.

### Problemas estruturais
- **Comprimento uniforme de parágrafos**: Varie deliberadamente. Inclua alguns parágrafos de 1-2 frases e alguns mais longos. Se todo parágrafo tem aproximadamente o mesmo tamanho, corrija isso.
- **Aberturas formulaicas**: Se o texto abre com contexto amplo antes de chegar ao ponto ("In the rapidly evolving world of..."), reescreva para liderar com a notícia ou o insight. O contexto pode vir depois.
- **Gramática suspeitosamente limpa**: Não elimine toda a personalidade. Fragmentos deliberados, frases começando com "And" ou "But," splices de vírgula para efeito: se a voz natural os usa, mantenha-os.

### Inflação de significância
- Frases como "marking a pivotal moment in the evolution of..." ou "a watershed moment for the industry" inflam eventos rotineiros em eventos históricos. Declare o que aconteceu e deixe o leitor julgar a significância.
- Se a frase ainda funciona depois que você deleta a cláusula de inflação, delete-a.

### Encerramentos de narrativa futura genéricos
- "May become one of the most important narratives of the next market cycle," "could become the defining trend of the coming decade," "is poised to become the next major chapter in [X]." A IA recorre a essa forma por padrão quando precisa encerrar um pensamento sem se comprometer com uma afirmação testável. O encerramento é gramaticalmente uma previsão, mas não contém conteúdo testável.
- Padrão: modal (may / could / will / is poised to) + "become" + (um de) the most [adjetivo] + (narrative / story / trend / theme / chapter / movement / force).
- Correção: escolha a versão testável. "DePIN compute may exceed AWS spot pricing for embarrassingly parallel workloads by 2027" é uma previsão. "The intersection of AI and DePIN may become one of the most important narratives of the next market cycle" não é.

### Previsões empilhadas com hedge
- Empilhar um modal com um advérbio de hedge: "could potentially create," "may eventually unlock," "might ultimately transform." Cada palavra isoladamente é aceitável; o empilhamento é o sinal. Cada hedge cancela o próximo, deixando uma frase que não afirma nada enquanto parece cautelosa e ponderada.
- Correção: escolha uma. Se você quer dizer "could create," diga isso. Se você quer dizer "potentially creates," diga isso. Ambos juntos é enchimento.

### Inflação de adjetivo "real/actual"
- "Real on-chain tokenomics," "actual reward sustainability," "genuine utility," "true product-market fit." Usar `real` / `actual` / `genuine` / `true` como um intensificador vazio em um substantivo abstrato implica que o resto do campo é falso ou superficial — sem nomear o que torna essa instância a real. Comum em conteúdo de crypto/AI/web3 onde o escritor quer sinalizar sofisticação.
- Distinto da regra existente de "intensificadores vazios" (genuine / truly / quite frankly como hedges no nível da frase). Esta é a forma de modificador de substantivo, onde o intensificador se prende a um substantivo abstrato para fabricar um contraste que não é dito.
- **Ressalva — contraste nomeado:** se a frase nomeia explicitamente o que é a versão falsa/superficial, deixe como está. "Real on-chain settlement, not bridged IOUs" ou "actual revenue from paying customers, not grants" é escrita contrastiva honesta. O sinal de IA é o contraste não dito.
- Correção quando nenhum contraste é nomeado: retire o adjetivo e adicione a afirmação específica. "Reward sustainability" → "rewards funded from $X/mo in fees rather than emissions."

### Excesso de hashtags
- Longos blocos de hashtags no final (6+ hashtags em um único post curto) são quase universais em conteúdo social gerado por LLM e raros em posts humanos ponderados. O bloco geralmente mistura uma tag específica do projeto com tags de categoria amplas (#AI #Crypto #Web3 #Innovation #FutureTech #Technology) — as categóricas não fazem nada pela descoberta e soam como saída de bot.
- **Por que 6?** Limiar empírico. O engajamento orgânico no LinkedIn e no X estabiliza ou declina depois de 3-5 tags; posts humanos que excedem 5 são geralmente posts de lançamento trocando alcance por engajamento, enquanto posts gerados por LLM têm por padrão 10-15. Seis é o limiar em que os falsos positivos em uso humano legítimo começam a cair abaixo dos falsos negativos em saída de IA. O detector trata 6+ como uma sinalização forte; a especificação trata 5+ como um sinal leve que vale uma segunda olhada nos perfis `linkedin` e `investor-email`.
- Correção: 2-3 tags específicas no máximo, ou nenhuma. Se uma hashtag não ajudaria um leitor a encontrar trabalho relacionado, é enchimento.

### Listas com marcadores de frases nominais simples
- Uma lista de 5+ itens consecutivos com marcadores onde cada item é uma frase curta (≤6 palavras) de adjetivo-mais-substantivo sem verbo. "Stable mining efficiency / Reliable pool connectivity / Optimized RandomX performance / Low failed share rates / Effective hardware utilization / Consistent thermal stability." Parece uma página promocional de marketing porque essa é a forma padrão dos LLMs quando pedidos para resumir recursos.
- O sinal é a *simetria*: cada item tem a mesma forma gramatical, cada item é paralelo em comprimento, nenhum deles afirma algo verificável. Uma lista genuína de observações teria comprimento variável, verbos ocasionais, e pelo menos um item que não se encaixa no padrão.
- Correção: converta em parágrafo de texto corrido, ou reescreva os itens como afirmações completas ("Failed shares stayed under 1% across a 12-hour run" é melhor que "Low failed share rates"). Se a lista é genuinamente a forma correta, varie os itens para que cada um carregue um tipo diferente de informação.
- Esta regra *não* se aplica a conteúdo de lista genuíno (entradas de changelog, listas de tarefas, documentação de parâmetros, listas de ingredientes) onde frases nominais simples são a forma correta. O detector se baseia na ausência de verbos finitos para separar os dois casos — mas em auditorias de prosa, pergunte se os marcadores estão resumindo afirmações (reescreva) ou enumerando itens (deixe como está).

### Evitação de cópula
- Texto de IA evita "is" e "has" substituindo por verbos mais elaborados: "serves as," "features," "boasts," "presents," "represents." Isso soa como um press release.
- Prefira "is" ou "has" a menos que um verbo mais específico genuinamente adicione significado.

### Ciclagem de sinônimos
- A IA gira sinônimos para evitar repetir uma palavra: "developers… engineers… practitioners… builders" no mesmo parágrafo. Escritores humanos repetem a palavra mais clara.
- Se o mesmo substantivo ou verbo aparece três vezes em um parágrafo e essa é a palavra certa, mantenha as três. Variação forçada soa como abuso de dicionário de sinônimos.

### Atribuições vagas
- "Experts believe," "Studies show," "Research suggests," "Industry leaders agree" — sem nomear o especialista, o estudo, ou o líder. Ou cite uma fonte específica ou retire a atribuição e declare a afirmação diretamente.

### Frases de enchimento
- Retire o preenchimento mecânico que adiciona palavras sem significado:
  - "It is important to note that" → (apenas declare)
  - "In terms of" → (reescreva)
  - "The reality is that" → (corte ou apenas declare a afirmação)
- Nota: "In order to," "Due to the fact that," e "At the end of the day" estão cobertos na tabela de palavras/frases e nas seções de transição acima — não duplique regras.

### Conclusões genéricas
- "The future looks bright," "Only time will tell," "One thing is certain," "As we move forward" — esses são enchimentos disfarçados de conclusões. Corte-os. Se o texto precisa de um pensamento de encerramento, torne-o específico ao argumento.

### Artefatos de chatbot
- "I hope this helps!", "Certainly!", "Absolutely!", "Great question!", "Feel free to reach out," "Let me know if you need anything else" — esses são tiques conversacionais de interfaces de chat, não escrita. Remova completamente.
- Fique atento também a: "In this article, we will explore…" ou "Let's dive in!" — essas são meta-narrações geradas por IA. Corte ou reescreva com uma abertura direta.

### Construções com "Let's"
- "Let's explore," "Let's take a look," "Let's break this down," "Let's examine" — a IA usa "let's" como uma abertura falsamente colaborativa para entrar suavemente em um tópico. É enchimento que atrasa o ponto real. Apenas comece com o ponto. "Let's dive in" está coberto acima em artefatos de chatbot, mas o padrão é mais amplo do que isso — sinalize qualquer "let's + verbo" que esteja funcionando como transição em vez de um convite genuíno à ação.

### Menção de notoriedade
- Texto de IA acumula citações prestigiosas para fabricar credibilidade: "cited in The New York Times, BBC, Financial Times, and The Hindu." Se uma fonte importa, use-a com contexto: "In a 2024 NYT interview, she argued..." Uma referência específica supera quatro menções de nomes.
- Relacionado — **empilhamento de analogia histórica**: listas rápidas de tecnologias ou empresas passadas para tomar seu peso de empréstimo ("like the printing press, the telegraph, and the internet before it"). A montagem substitui o argumento. Nomeie o único paralelo que faz trabalho analítico e diga o que ele explica, ou corte. Fonte: tropes.fyi (Historical Analogy Stacking).

### Validação vaga de terceiros
- A IA fabrica credibilidade apontando para uma autoridade externa **não nomeada**, geralmente combinada com um superlativo genérico: "an outside party measuring the same models everyone runs and putting us on top," "independent testing confirms," "third-party benchmarks show we lead," "analysts agree," "studies consistently show." A autoridade é sem rosto e a afirmação é infalseável — o leitor não pode saber quem mediu o quê, contra quem, ou ir verificar.
- Correção: nomeie a fonte, o teste e o resultado para que um leitor possa verificar. "An outside party put us on top" se torna "On Stanford's HELM leaderboard (April 2026 run), we ranked first on reasoning latency." Se você não pode nomear, corte a afirmação em vez de disfarçá-la como validação.
- Ressalva: validação especificamente atribuída e verificável é legítima e permanece sem sinalização — um benchmark nomeado, um relatório vinculado, uma auditoria datada ("SOC 2 Type II, audited by Prescient Assurance"). O sinal é a *vagueza*, não o ato de citar prova externa.
- Distinto de **menção de notoriedade**: aquela sinaliza acumular nomes *específicos* prestigiosos para tomar seu peso de empréstimo; esta é o movimento inverso — a autoridade é deliberadamente *não nomeada*, o que é tanto mais difícil de verificar quanto mais fácil de inventar. Uma passagem pode conter ambos ao mesmo tempo (uma autoridade vaga mais um superlativo); julgue cada um por seus próprios termos. Levantado em #39.

### Análises superficiais em -ing
- Sequências de participios presentes usados como pseudo-análise: "symbolizing the region's commitment to progress, reflecting decades of investment, and showcasing a new era of collaboration." Isso não diz nada. Substitua por fatos específicos ou corte completamente.
- O mesmo movimento aparece sem o -ing: "contação de significado" declarativa que reveste um assunto mundano como se fosse profundo — "this represents a broader shift," "the decision symbolizes a commitment to excellence," "it speaks to a larger trend in the industry." Se a significância é real, mostre-a com uma consequência específica; caso contrário, corte. Adaptado de `Aboudjem/humanizer-skill` P40.

### Linguagem promocional
- A IA recorre por padrão à prosa de folheto turístico: "nestled within the breathtaking foothills," "a vibrant hub of innovation," "a thriving ecosystem." Substitua por descrição simples: "is a town in the Gonder region," "has 12 startups." Se você não diria isso em conversa, corte.

### Desafios formulaicos
- "Despite challenges, [subject] continues to thrive" ou "While facing headwinds, the organization remains resilient." Isso é uma não-afirmação. Nomeie o desafio real e a resposta real, ou corte a frase.

### Aberturas com cenário especulativo
- "Imagine a world where…", "Picture a future in which…", "Envision a world where…" A IA abre um argumento com uma hipótese que lista resultados desejáveis em vez de fazer uma afirmação. O cenário faz o trabalho de persuasão; nenhuma evidência é oferecida.
- Correção: corte a hipótese e declare a afirmação real. "Imagine a world where every deploy is instant" se torna "Instant deploys would cut our release cycle from a day to minutes."
- Ressalva: ficção, um experimento mental com um resultado declarado, e o instrucional "imagine you have a sorted array" (um recurso didático apontando para um exemplo concreto, não um mundo especulativo) estão corretos. Sinalize apenas a abertura de cenário de mundo/futuro que substitui um argumento. Fonte: tropes.fyi (Imagine a World Where).

### Falsos intervalos
- A IA cria falsa amplitude combinando extremos não relacionados: "from the Big Bang to dark matter," "from ancient civilizations to modern startups." Isso soa abrangente mas não diz nada. Liste os tópicos reais ou escolha o que importa.

### Listas com cabeçalhos embutidos
- Listas com marcadores onde cada item começa com um cabeçalho em negrito que se repete: "**Performance:** Performance improved by..." Retire o cabeçalho em negrito e escreva o ponto diretamente. Se os itens da lista precisam de cabeçalhos, provavelmente deveriam ser parágrafos.

### Pontos finais em rótulos de lista
- Em listas com marcadores onde cada item começa com um rótulo curto, os LLMs terminam o rótulo com um ponto final e depois seguem a explicação como uma frase separada. Uma pessoa escrevendo a mesma lista quase sempre usa dois-pontos em vez disso. Forma mais forte: rótulos em negrito (`**Intros.**`, `**Content distribution.**`, `**Developer GTM.**` onde um humano escreveria `**Intros:**`). Mais fraco mas ainda um sinal: a mesma forma sem negrito (`- Intros. Years of conferences and operator network.`) — um rótulo curto de frase nominal terminado em ponto final no começo de um marcador, seguido por um esclarecimento. Os dois-pontos leem como "aqui está o que este rótulo significa"; o ponto final lê como uma frase que a cláusula seguinte então contradiz ao continuar. Exemplo de sinal: `- **Intros.** Years of conferences and operator network.` se torna `- **Intros:** years of conferences and operator network.` Corrija o ponto final para dois-pontos e coloque em minúsculas o início do esclarecimento, ou retire o rótulo e escreva o ponto como uma frase simples. Ressalvas: quando o trecho do rótulo é uma frase completa por si só (não um rótulo introduzindo um esclarecimento), o ponto final está correto; e para a forma sem negrito, sinalize apenas quando o fragmento inicial for claramente um rótulo (uma frase nominal de 1-4 palavras, sem verbo) — uma frase curta e completa abrindo um marcador está correta.

### Cabeçalhos em title case
- A IA capitaliza cabeçalhos em excesso: "Strategic Negotiations And Key Partnerships" em vez de "Strategic negotiations and key partnerships." Use sentence case para subtítulos. Title case apenas para o título principal do texto, se tanto.

### Excesso de pares hifenizados
- A IA empilha modificadores compostos: "a high-quality, well-architected, future-proof solution." Dois problemas distintos. Primeiro, densidade — sequências de adjetivos hifenizados empilhados em um único substantivo; corte para o modificador que realmente importa. Segundo, o erro atributivo/predicativo: um composto é hifenizado *antes* do substantivo ("a high-quality report") mas não *depois* de um verbo de ligação ("the report is high quality," sem hífen). A IA frequentemente hifeniza a forma predicativa; corrija para duas palavras. Adaptado de `blader/humanizer` P26.

### Disclaimers de corte de conhecimento
- "While specific details are limited based on available information," "As of my last update," "I don't have access to real-time data." Essas são limitações do modelo vazando para a prosa. Ou encontre a informação ou remova o hedge. Nunca publique uma frase que admita que o escritor não pesquisou algo.

### Preenchimento especulativo de lacunas
- Quando o modelo não tem um fato, ele preenche a lacuna com especulação em forma de hedge disfarçada de contexto: "maintains a relatively low public profile," "is believed to have," "likely began his career in," "appears to have studied." Esses são palpites formatados como afirmações. Distinto dos disclaimers de corte, que *admitem* a lacuna — este esconde a lacuna atrás de enchimento plausível, o que é pior porque o leitor não pode distinguir o que é sabido do que é inventado. Corte a especulação, ou substitua-a por um fato com fonte. Adaptado de `blader/humanizer` P21.

### Marcadores de posição não preenchidos
- Preenchedores de slot entre colchetes que deveriam ter sido substituídos antes da publicação: `[Your Name]`, `[INSERT SOURCE URL]`, `[Describe the specific section]`, `2025-XX-XX`, `<!-- Add citation if available -->`. Essas são evidências quase definitivas de que clichê gerado por IA foi colado sem edição. Humanos usam marcadores de posição em templates também, mas raramente os publicam. Trate qualquer marcador de posição visível como um bug de publicação: preencha com conteúdo real ou delete a frase completamente.
- Capture as formas óbvias: `\[(?:Your|Insert|Add|Enter|Describe|Specify|Choose)[^\]]+\]`, `\b\d{4}-XX-XX\b`, comentários HTML/Markdown com verbos de marcador de posição (`add`, `fill in`, `todo`, `insert`).

### Vazamentos de marcação de citação de chatbot
- Tokens de citação internos que vazam quando texto é copiado e colado de interfaces de chat: `citeturn0search0`, `contentReference[oaicite:0]{index=0}`, `oai_citation`, `[attached_file:1]`, `grok_card`. Esses não são padrões — são impressões digitais. Sua presença é essencialmente prova de que o texto foi gerado por uma ferramenta de chat específica e colado sem limpeza.
- A correção é mecânica: retire cada token de marcação. Se uma citação era significativa, substitua-a por uma referência real. Não tente humanizar a marcação — apague-a.
- Adaptado de `Aboudjem/humanizer-skill` P34. Vale a pena capturar mesmo quando nada mais no texto lê como IA — o token por si só já é suficiente.

### Parâmetros de URL de ferramentas de IA
- Parâmetros de rastreamento que ferramentas de IA anexam automaticamente às URLs que geram, sobrevivendo ao copiar-e-colar no conteúdo publicado: `utm_source=chatgpt.com`, `utm_source=copilot.com`, `utm_source=openai`, `utm_source=claude.ai`, `utm_source=perplexity.ai`, `referrer=grok.com`. Mesma lógica dos vazamentos de marcação de citação — a presença do parâmetro é a assinatura, independentemente de como o texto ao redor pareça.
- A correção: retire o parâmetro de cada URL. Mantenha a URL em si se o link for significativo; perca apenas o parâmetro. Adaptado de `Aboudjem/humanizer-skill` P35.

### Inflação de novidade
- Texto de IA trata conceitos estabelecidos como se o falante os tivesse inventado ou descoberto: "He introduced a term," "She coined the phrase," "a concept nobody's naming," "a failure mode nobody talks about." Na realidade, a maioria das ideias em uma conversa são aplicações de conceitos existentes, não invenções.
- Dois problemas. Primeiro, é factualmente arriscado: se o conceito já tem uma página na Wikipédia ou palestras de conferência do ano passado, alegar novidade faz o escritor parecer desinformado. Segundo, isso enaltece o assunto de uma forma que soa promocional em vez de analítica.
- A correção: descreva o que a pessoa *fez com* o conceito, não que ela o descobriu. "Michel walked through how context poisoning works in practice" em vez de "Michel introduced a term I hadn't heard before: context poisoning." Se você não tem certeza se algo é novo, assuma que não é e enquadre de acordo.
- Padrões relacionados a sinalizar: "the failure mode nobody's naming," "a problem nobody talks about," "the insight everyone's missing," "what nobody tells you about." Esses são enquadramentos de isca de engajamento que reivindicam escassez de conhecimento onde não existe nenhuma.
- Sinalize também rótulos inventados: termos compostos pseudo-analíticos criados no meio da frase e nunca definidos ("the supervision paradox," "the context-collapse problem," "a coordination tax"). Nomear um conceito não é explicá-lo. Defina o termo na primeira aparição ou descreva o mecanismo em vez de rotulá-lo. Fonte: tropes.fyi (Invented Labels).

### Ganchos de engajamento de infomercial
- Ganchos de fragmento contundentes que preparam uma revelação: "The catch?", "The kicker?", "Here's the thing.", "But here's the kicker:", "The best part?", "Plot twist:", "The result?". A IA usa isso para falsificar momentum e fabricar suspense em torno de informação comum — o equivalente em prosa de um infomercial de madrugada.
- Distinto das aberturas com perguntas retóricas (que atrasam antes de um ponto) e dos artefatos de chatbot (que performam prestatividade): esses são provocações no meio do fluxo que preenchem o ritmo. A correção é deletar o gancho e declarar a coisa. "The catch? It only works on weekends." se torna "It only works on weekends." Adaptado de `Aboudjem/humanizer-skill` P41.

### Encerramentos de endosso social
- O encerramento curatorial que os LLMs anexam a posts do LinkedIn e X que compartilham ou recomendam algo — geralmente dois-pontos preparando um link: "This one is worth your time:", "This one's a must-read:", "I highly recommend giving this a read.", "Do yourself a favor and read this.", "You won't want to miss this one.", "Save this for later.", "Bookmark this.", "Don't sleep on this one.", "Trust me, you'll want to read this.", "Thank me later."
- Por que é um sinal: performa uma recomendação sem dar ao leitor uma razão para clicar. O endosso é genérico e ancorado em demonstrativo ("THIS one is worth your time") — poderia estar sob qualquer link, e é exatamente por isso que um LLM recorre a ele para encerrar um post de compartilhamento.
- Distinto da entrada de tabela de palavras "worth [verb]ing" (uma única palavra fraca dentro de uma frase) e dos ganchos de engajamento de infomercial (provocações no meio do fluxo como "The catch?"): esta é a linha de encerramento inteira de um post social.
- A correção: diga *o que* a coisa é e *para quem* é, depois retire o CTA. "This one is worth your time:" se torna "Sarah's breakdown of why context windows leak — the clearest explanation I've found for anyone debugging RAG pipelines." Se você não pode nomear uma razão específica, o compartilhamento não precisa de um encerramento; deixe o link falar por si.

### Achatamento emocional
- A IA reivindica emoções como uma muleta estrutural sem transmiti-las através da escrita: "What surprised me most," "I was fascinated to discover," "What struck me was," "I was excited to learn," "The most interesting part," e a variante de cabeçalho de seção sem o "the most": "Interesting part of the project:" / "Interesting thing here:" / "Interesting aspect:". A forma de cabeçalho faz o mesmo trabalho — pré-anunciando significância que a escrita ainda não conquistou.
- Dois problemas. Primeiro, é "contar em vez de mostrar": se a coisa é genuinamente surpreendente, o leitor deveria sentir isso pelo conteúdo, não pelo escritor anunciando. Segundo, essas frases são usadas em excesso como introduções de listas e transições. São enchimento vestido de fantasia de emoção.
- Esse padrão nem sempre é IA. Também é um sinal de escrita humana descuidada no modo automático. Sinalize de qualquer forma.
- A correção não é "nunca diga surpreso." É: se você reivindica uma emoção, a escrita ao redor deveria justificá-la. Caso contrário, corte a reivindicação e apresente a coisa diretamente.
- Padrão relacionado: "hit differently" / "hits different." A IA usa coloquialismos da moda como um atalho para parecer relacionável sem conquistar o momento emocional. Se algo genuinamente te afetou, descreva como. Caso contrário, corte.

### Estrutura de falsa concessão
- "While X is impressive, Y remains a challenge" ou "Although X has made strides, Y is still an open question." A IA usa isso para parecer equilibrada sem realmente ponderar nada. Ambas as metades são vagas. Ou torne a concessão específica (nomeie o que é impressionante, nomeie o desafio real) ou escolha um lado e o defenda.

### Aberturas com perguntas retóricas
- "But what does this mean for developers?" / "So why should you care?" / "What's next?" — a IA usa perguntas retóricas para atrasar antes do ponto real. Se você sabe a resposta, apenas diga. Perguntas retóricas são conquistadas por uma preparação forte, não usadas como transições de seção.

### Hedging parentético
- "(and, increasingly, Z)" / "(or, more precisely, Y)" / "(and perhaps more importantly, W)" — a IA insere ressalvas parentéticas para parecer nuançada sem se comprometer. Se a ressalva importa, dê a ela sua própria frase. Se não importa, corte.

### Inflação de listas numeradas
- "Three key takeaways" / "Five things to know" / "Here are the top seven" — a IA recorre por padrão a listas numeradas porque são estruturalmente seguras. Use listas numeradas apenas quando o conteúdo genuinamente tem essa quantidade de itens discretos e paralelos. Se você está preenchendo para atingir um número, a lista não deveria existir.

### Artefatos de cadeia de raciocínio
- "Let me think step by step," "Breaking this down," "To approach this systematically," "Step 1:," "Here's my thought process," "First, let's consider," "Working through this logically" — esses são artefatos de raciocínio em cadeia (chain-of-thought) vazando para a prosa publicada. O leitor não precisa ver o andaime. Declare a conclusão, depois a evidência.
- Fique atento também a passos de raciocínio numerados que leem como um monólogo interno em vez de um argumento destinado a uma audiência.

### Tom sicofante
- "Great question!", "Excellent point!", "You're absolutely right!", "That's a really insightful observation" — essas são recompensas conversacionais de interfaces de chat, não escrita. Remova completamente.
- Distinto dos artefatos de chatbot: a sicofania especificamente valida o leitor/questionador em vez de apenas performar prestatividade.

### Loops de reconhecimento
- "You're asking about," "The question of whether," "To answer your question," "That's a great question. The..." — a IA reafirma o prompt antes de responder. Na escrita, isso é puro enchimento. O leitor sabe o que perguntou. Apenas responda.
- Padrão relacionado: abrir uma seção resumindo o que a seção anterior disse. Se a estrutura é clara, o leitor não precisa de um recapitulação.

### Frases de calibração de confiança
- "It's worth noting that," "Interestingly," "Surprisingly," "Importantly," "Significantly," "Notably," "Certainly," "Undoubtedly," "Without a doubt" — a IA usa essas para sinalizar como o leitor deveria se sentir sobre um fato em vez de deixar o fato falar por si.
- "Here's what's interesting," "Here's the interesting part," "Here are the parts I found interesting" — sinal que direciona o leitor e pré-interpreta a importância. Funciona quando seguido por dados genuinamente surpreendentes; falha quando introduz a reafirmação de algo óbvio (que é o padrão da IA).
- Um "notably" em um texto de 2.000 palavras está bem. Três em 500 palavras é empilhamento de ênfase estilo IA. Sinalize por densidade.
- Relacionado — **tropos de autoridade persuasiva**: "the real question is," "at its core," "fundamentally," "make no mistake," "the truth is." Mesmo movimento das frases de calibração acima, mas essas afirmam profundidade ou importância em vez de sentimento: elas anunciam que o que se segue é importante em vez de mostrar isso. Corte o tropo e lidere com a substância. Adaptado de `blader/humanizer` P27.

### Autorrotulagem de significância
- Depois de listar ou descrever vários itens, o escritor aponta de volta para um deles e o rotula como contrário / esperto / surpreendente / contraintuitivo / chave: "That last move is the contrarian one," "This is the interesting part," "That third bullet is the real story," "Here's where it gets clever," "The last bit is the counterintuitive one."
- O rótulo faz o trabalho que o conteúdo deveria ter feito. Se um movimento é genuinamente contrário, o leitor o reconhece pela descrição; se não é reconhecível sem o rótulo, o rótulo não foi conquistado. O padrão soa como o escritor auditando sua própria lista para sinalizar qual item deveria importar, em vez de escrever a lista de forma que o item certo carregue o peso por conta própria.
- Distinto da calibração de confiança ("Notably," "Interestingly") que antecipa a dica, e do achatamento emocional ("What surprised me most," "The most interesting part") que prefacia uma única afirmação. Esse padrão aponta para trás depois do fato, geralmente como "[that / this / the Xth / the last] [substantivo] is the [adjetivo] one."
- Adjetivos de significância que sinalizam o padrão: contrarian, clever, surprising, counterintuitive, interesting, key, important, unusual, smart, brilliant, real, actual.
- Correção: corte a frase de rotulagem e deixe a explicação que se segue fazer o trabalho diretamente. Ou reestruture para que o item que você queria destacar seja posicionado primeiro ou expandido com especificidades, tornando o rótulo redundante.
- Exemplo. Antes: "→ Two separate indexes for tiered storage. That last move is the contrarian one. Co-locating related data usually helps cache locality." Depois: "→ Two separate indexes for tiered storage. Co-locating related data usually helps cache locality, but splitting the indexes is what makes the hot path cheap." O contraste se sustenta por conta própria; o rótulo desapareceu.

### Respostas em bloco de texto (sem quebras de linha)
- Em registros conversacionais — comentários de issue e PR, chat, DMs, e-mail casual — humanos quebram uma resposta em limites de pensamento: uma ideia, depois uma quebra, depois a próxima. Os LLMs recorrem por padrão a um único bloco denso independentemente do comprimento. O sinal: um texto do tamanho de uma resposta (aproximadamente menos de 150 palavras) com quatro ou mais frases entregues como um único parágrafo ininterrupto, sem nenhuma quebra de linha nele.
- Correção: quebre nos limites de pensamento. Uma ideia por grupo de linha, da forma que uma pessoa realmente digita uma resposta.
- Observado na prática: um mantenedor em uma issue do GitHub apontou uma resposta com aparência assistida com "I prefer to talk human to human" — a forma de bloco-parágrafo denso foi o sinal, não nenhuma palavra específica dentro dele.
- Distinto da uniformidade de comprimento de parágrafo (que trata de prosa longa onde todo parágrafo tem o mesmo tamanho): esta regra trata de texto curto, do tamanho de uma resposta, sem *nenhuma* quebra, não de quebras desiguais.
- Ressalva: um único parágrafo denso é a forma *correta* em registros formais e longos — uma introdução de blog, um parágrafo de documentação, um e-mail deliberadamente compacto de um parágrafo. Esta regra dispara apenas em registros de resposta conversacional; nunca sinalize prosa longa contínua apenas porque falta quebras internas. Essa classe de falso-positivo é exatamente por que o detector estrutural foi revertido (veja `detector/CATEGORIES.md` §C), e por que a matriz de tolerância abaixo é o lugar errado para isso: um comentário simples de issue se auto-detecta como perfil `blog`, então o escopo tem que viver no julgamento desta regra, não em uma célula de rigor por perfil.

### Abertura de recapitulação-elogio
- Responder a uma pessoa resumindo o próprio trabalho dela de volta para ela com elogios antes de chegar ao ponto: "Thanks for all the legwork here — the migration script and the rollback plan you worked through are what made this possible." O leitor já sabe o que fez; a recapitulação performa apreciação em vez de transmitir informação.
- Distinto de um agradecimento genuíno, que é curto e segue adiante. O sinal é a *recapitulação* — reafirmar especificidades que a outra pessoa já conhece, vestidas de gratidão, antes do ponto real.
- Distinto também de dois sinais conversacionais próximos: **Tom sicofante** (validação genérica do leitor — "Great question!") e **Loops de reconhecimento** (reafirmar o prompt ou a seção anterior). Aqueles ecoam a *pergunta ou contexto*; a recapitulação-elogio ecoa o *próprio trabalho* da outra pessoa de volta para ela, vestido de elogio.
- Correção: substância primeiro. Se o agradecimento é justificado, uma cláusula simples sem a recapitulação: "Thanks for the legwork — this looks right to me, one comment below."
- Observado na prática: a mesma troca que revelou o sinal de bloco-de-texto acima — uma resposta com aparência assistida abriu recapitulando o trabalho anterior do mantenedor de volta para ele antes de responder à pergunta real.

### Estrutura excessiva
- Muitos cabeçalhos em texto curto: mais de 3 títulos em menos de 300 palavras é quase sempre a IA tentando parecer organizada. Combine seções ou use transições de prosa em vez disso.
- Muitos itens de lista: 8+ itens com marcadores em menos de 200 palavras significa que o conteúdo deveria ser um parágrafo, não uma lista.
- Cabeçalhos de seção formulaicos: "Overview," "Key Points," "Summary," "Conclusion," "Introduction" — esses são o andaime padrão da IA. Use cabeçalhos que digam ao leitor algo específico sobre o que se segue.

### Ritmo e uniformidade

Esses não são problemas de palavra ou frase individuais — são padrões em como o texto flui como um todo. O texto de IA é metronômico; o texto humano tem ritmo variado.

**Estrutura é o sinal de detecção nº 1.** Ferramentas de detecção de IA (incluindo o Pangram, que treina um classificador em 28 milhões de documentos humanos) dão mais peso à regularidade estrutural do que ao vocabulário. Construção consistente de frases, ritmo uniforme, e padrões de fraseado simétricos são mais difíceis de disfarçar do que troca de algumas palavras sinalizadas. Se você corrigir toda palavra da lista do Nível 1 mas deixar o ritmo intocado, o texto ainda lê como gerado por IA.

- **Uniformidade de comprimento de frase**: Se a maioria das frases tem 15–25 palavras, o texto soa robótico. Misture frases curtas e contundentes (3–8 palavras) com mais longas e fluidas (20+). Fragmentos funcionam. Perguntas quebram a monotonia.
- **Uniformidade de comprimento de parágrafo**: Se todo parágrafo tem 3–5 frases e aproximadamente o mesmo tamanho, varie deliberadamente. Alguns parágrafos deveriam ser uma única frase. Alguns deveriam ser mais longos.
- **Repetição de vocabulário vs. ciclagem de sinônimos**: A IA ou repete a mesma palavra mecanicamente ou cicla por sinônimos de forma conspícua. Escritores humanos repetem quando a palavra é certa e variam quando é natural — não há fórmula.
- **Teste de leitura em voz alta**: Se o texto soa como se pudesse ser lido por um mecanismo de texto-para-fala sem soar estranho, provavelmente está muito uniforme. Escrita humana tem ritmo que resiste à entrega robótica.
- **Ausência de perspectiva em primeira pessoa**: Onde apropriado, o escritor deveria ter opiniões, preferências e reações. A IA é implacavelmente neutra. Se o texto deveria ter uma voz, a ausência de "I think," "in my experience," ou uma preferência declarada é em si um sinal de IA.
- **Polimento excessivo**: Editar agressivamente para eliminar toda irregularidade pode empurrar a escrita humana *em direção* a perfis estatísticos de IA. Disfluência natural, escolhas de palavras idiossincráticas, e ritmo desigual são o que mantém o texto fora da classificação de "gerado por IA". Não elimine toda a personalidade em busca de prosa limpa. Esta skill deveria fazer a escrita soar mais humana, não menos — se você aplicar toda regra com rigor máximo, corre o risco de criar exatamente a uniformidade que está tentando evitar.

### Diversidade de vocabulário (estilométrico)

Em textos mais longos (200+ palavras), observe quanto vocabulário o texto realmente usa. A razão tipo-token (TTR) — tipos de palavras distintas dividido pelo total de tokens — é um sinal estilométrico clássico fácil de observar a olho nu. Prosa humana nesse comprimento geralmente fica em torno de 0,50–0,65 em inglês. Texto de IA tende a ser mais plano, às vezes caindo abaixo de 0,40 quando o modelo fica preso em um loop de vocabulário pequeno.

Um TTR muito baixo não é por si só prova de autoria por IA — tópicos estreitos, material de referência técnica, e escrita em segunda língua todos legitimamente comprimem vocabulário. Mas em prosa geral onde você esperaria variedade (ensaios, artigos, conteúdo social acima de ~200 palavras), um TTR abaixo de 0,40 vale uma segunda olhada. A correção raramente é usar um dicionário de sinônimos no texto; é ampliar o *quê* — nomear coisas específicas, citar casos específicos, substituir um substantivo abstrato reutilizado pela instância concreta atrás dele.

Este é o primeiro de quatro sinais estilométricos no roteiro. Os outros (burstiness de comprimento de frase como uma medida contínua, z-scores de palavras funcionais contra uma referência de prosa humana, log-odds de bigramas POS) exigem um marcador POS ou uma distribuição de referência e ainda não estão implementados como categorias do detector.

### Imunidade a reembaralhamento de parágrafos (teste de estrutura)
- Um diagnóstico do lado do escritor, não uma regex: você pode trocar dois parágrafos do corpo sem quebrar o texto? Se a ordem não importa, você escreveu uma lista de pontos, não um argumento que se constrói. A prosa de IA frequentemente falha nesse teste — cada parágrafo é um módulo autocontido sem conexão estrutural com seus vizinhos.
- A correção é estrutural, não lexical: estabeleça um fio condutor onde cada parágrafo depende do anterior. Se os parágrafos são genuinamente independentes, decida se o texto deveria ser uma lista explícita, ou se está faltando uma tese. Adaptado de `Aboudjem/humanizer-skill` P38.

### Efeito esteira / baixa densidade de informação (teste de conteúdo)
- Outro teste do lado do escritor: leia cada parágrafo e pergunte "o que há de realmente novo aqui?" A prosa de IA frequentemente reafirma a premissa com palavras novas em vez de avançá-la — muito movimento, nenhuma distância percorrida. O sinal é que você poderia cortar 40-60% e não perder nenhuma informação.
- A correção: para cada parágrafo, nomeie o único fato, afirmação, ou virada que ele contribui. Se não houver um, corte-o. Se houver, lidere com ele e retire o preâmbulo. Adaptado de `Aboudjem/humanizer-skill` P43.

### Quando reescrever do zero vs. remendar

Se o texto tem 5+ acertos de vocabulário sinalizados em várias categorias, 3+ categorias de padrão distintas disparadas, e comprimento uniforme de frase/parágrafo, remendar frases individuais não vai corrigir isso — a própria estrutura é gerada por IA. Recomende uma reescrita completa: declare o ponto central em uma frase, depois reconstrua a partir daí.

---

## Níveis de severidade

Nem todos os AI-isms são iguais. Ao fazer uma passagem rápida ou triar um documento grande, priorize por nível:

### P0 — Assassinos de credibilidade (corrigir imediatamente)
- Disclaimers de corte de conhecimento ("As of my last update")
- Artefatos de chatbot ("I hope this helps!", "Great question!")
- Atribuições vagas sem fontes ("Experts believe")
- Inflação de significância em eventos rotineiros
- Excesso de hashtags em posts de `linkedin` e `investor-email` (a severidade varia por perfil — mesma regra, prioridade menor em `blog`/`technical-blog` onde um post de lançamento pode legitimamente acumular tags; veja a tabela de perfil de contexto abaixo)

### P1 — Cheiro óbvio de IA (corrigir antes de publicar)
- Violações da lista de palavras (delve, leverage, harness, robust, etc.)
- Frases de modelo e construções de preenchimento de slots
- Aberturas de transição com "Let's"
- Ciclagem de sinônimos dentro de um parágrafo
- Aberturas formulaicas ("In the rapidly evolving world of...")
- Excesso de negrito
- Frequência de travessão (acima de 1 por 1.000 palavras)
- Encerramentos de narrativa futura genéricos ("may become one of the most important narratives…")
- Encerramentos de endosso social ("This one is worth your time:", "thank me later")
- Previsões empilhadas com hedge ("could potentially," "may eventually")
- Inflação de adjetivo real/actual ("real on-chain tokenomics")
- Listas com marcadores de frases nominais simples (5+ itens curtos de adj+substantivo, sem verbos)
- Agrupamento de frases do Nível 3 (≥3 frases de clichê distintas em um único texto)

### P2 — Polimento estilístico (corrigir quando houver tempo)
- Conclusões genéricas ("The future looks bright")
- Regra de três compulsiva
- Comprimento uniforme de parágrafo
- Evitação de cópula (serves as, features, boasts)
- Frases de transição (Moreover, Furthermore, Additionally)
- Excesso de hashtags (perfis `blog`/`technical-blog`)
- Repetição de frases do Nível 3 (frase única ≥2× — normal isoladamente, suspeita em pilhas)

Use P0+P1 para passagens rápidas. A auditoria completa cobre todos os três níveis.

---

## Válvula de escape para autorreferência

Ao escrever *sobre* padrões de escrita de IA (posts de blog, tutoriais, documentação de skill como este arquivo), exemplos citados estão isentos de sinalização. Texto entre aspas, blocos de código, ou explicitamente marcado como ilustrativo ("for example, AI might write...") não deve ser reescrito. Sinalize apenas padrões que aparecem na prosa do próprio autor, não em exemplos citados de escrita ruim.

---

## Perfis de contexto

Passe uma dica de contexto opcional para ajustar o rigor das regras. Se nenhum contexto for especificado, detecte automaticamente a partir de indícios de conteúdo (curto + hashtags = social, blocos de código = técnico, saudação = e-mail, padrão = blog).

### Definições de perfil

**`linkedin`** — Social em formato curto. Fragmentos contundentes, formatação visual importa.
**`blog`** — Padrão. Prosa longa padrão. Todas as regras se aplicam em força total.
**`technical-blog`** — Texto longo com código, arquitetura, APIs. Termos técnicos recebem uma folga.
**`investor-email`** — Audiência de alta confiança. Aperte tudo; linguagem promocional é o maior risco.
**`docs`** — Documentação, READMEs, guias. Clareza acima da voz.
**`casual`** — Mensagens de Slack, notas internas, respostas rápidas. Capture apenas os piores infratores.

### Matriz de tolerância

Regras não listadas na tabela se aplicam em força total em todos os perfis.

| Regra | linkedin | blog | technical-blog | investor-email | docs | casual |
|------|----------|------|----------------|----------------|------|--------|
| Travessões | relaxado (2/post ok) | estrito | estrito | estrito | relaxado | ignorar |
| Excesso de negrito | relaxado (negrito de gancho ok) | estrito | estrito | estrito | relaxado | ignorar |
| Emoji em cabeçalhos | relaxado (1-2 no fim da linha ok) | estrito | estrito | estrito | ignorar | ignorar |
| Excesso de marcadores | ignorar (listas funcionam no LinkedIn) | estrito | relaxado (listas técnicas ok) | estrito | ignorar (listas são documentação) | ignorar |
| Hedging | estrito | estrito | relaxado ("may" é preciso em contexto técnico) | estrito | relaxado | ignorar |
| Tabela de palavras (lista completa) | estrito | estrito | **parcial** (veja abaixo) | estrito | relaxado | apenas P0 |
| Linguagem promocional | relaxado (algum apelo comercial é esperado) | estrito | estrito | **extra estrito** | estrito | ignorar |
| Inflação de significância | estrito | estrito | estrito | **extra estrito** | relaxado | ignorar |
| Evitação de cópula | ignorar | estrito | relaxado | estrito | ignorar | ignorar |
| Comprimento uniforme de parágrafo | ignorar (formato curto) | estrito | estrito | estrito | relaxado | ignorar |
| Inflação de listas numeradas | relaxado | estrito | relaxado | estrito | ignorar | ignorar |
| Perguntas retóricas | relaxado (1 como gancho ok) | estrito | estrito | estrito | estrito | ignorar |
| Frases de transição | ignorar (formato curto) | estrito | estrito | estrito | relaxado | ignorar |
| Conclusões genéricas | ignorar | estrito | estrito | **extra estrito** | ignorar | ignorar |
| Excesso de hashtags | estrito | estrito | estrito | **extra estrito** | ignorar (sem hashtags em docs) | ignorar |
| Listas de frases nominais com marcadores | estrito | estrito | relaxado (listas técnicas de opções ok) | estrito | relaxado (listas de parâmetros ok) | ignorar |
| Agrupamento de frases do Nível 3 | estrito | estrito | estrito | **extra estrito** | relaxado | ignorar |
| Encerramentos de narrativa futura | estrito | estrito | estrito | **extra estrito** | ignorar | ignorar |
| Encerramentos de endosso social | estrito (o sinal do post de compartilhamento no LinkedIn) | estrito | estrito | estrito | ignorar | relaxado (1 ok em uma DM) |
| Previsões empilhadas com hedge | estrito | estrito | relaxado ("could" é precisão com hedge) | **extra estrito** | relaxado | ignorar |
| Inflação real/actual | estrito | estrito | estrito | **extra estrito** | relaxado | ignorar |

**Exceções da tabela de palavras para technical-blog:** Esses termos têm significado técnico legítimo e não deveriam ser sinalizados em contexto técnico: `robust`, `comprehensive`, `seamless`, `ecosystem`, `leverage` (ao discutir alavancagem/APIs de plataforma real), `facilitate`, `underpin`, `streamline`. Ainda sinalizar: `delve`, `tapestry`, `beacon`, `embark`, `testament to`, `game-changer`, `harness`.

**"Extra estrito"** significa: sinalize até instâncias limítrofes. Em e-mails para investidores, um único "thriving ecosystem" pode comprometer a mensagem inteira.

**"Ignorar"** significa: não audite essa categoria para esse perfil. A regra não se aplica ou não vale a edição.

### Indícios de detecção automática

Quando nenhum contexto é especificado, deduza a partir desses sinais:

| Sinal | Contexto inferido |
|--------|-----------------|
| Menos de 300 palavras + hashtags ou menções | `linkedin` |
| Blocos de código, referências de API, ou arquitetura técnica | `technical-blog` |
| Saudação ("Hi [name]", "Dear") + linguagem de investimento/captação | `investor-email` |
| Instruções passo a passo, documentação de parâmetros, estrutura de README | `docs` |
| Sem sinais fortes | `blog` (padrão mais seguro — todas as regras se aplicam) |

Se a detecção automática parecer errada, diga qual perfil você está usando e por quê. O usuário pode sobrescrever.

---


## Perfis de voz

Perfis de contexto (acima) definem *quão rigoroso* ser para uma audiência. Perfis de voz definem *como a prosa deveria soar* — a persona. São eixos independentes: você pode escrever direto para um blog ou caloroso para documentação. A voz é **opcional** — se o escritor não nomear uma, deduza-a do registro existente da entrada e não imponha uma persona a um texto que já tem uma.

Cada perfil é um conjunto de metas concretas, não uma vibração:

**`casual`** — Contrações ao longo do texto; sua ausência soa rígida. Frases curtas (busque ≤14 palavras em média); fragmentos permitidos. Pelo menos um toque de primeira pessoa ou anedota concreta. Jargão quase zero. Mantenha hedges calorosos ("honestly," "I think") mas corte os corporativos ("it's worth noting"). *Posts de blog, social, comunidade.*

**`professional`** — Voz ativa para a maioria das frases. Varie o comprimento das frases; evite três em fila próximas umas das outras em poucas palavras. Uma afirmação concreta por parágrafo (um número, um nome, uma data), nunca "experts say." Torne o pedido explícito. Baixa tolerância para hedging. *LinkedIn, e-mail para investidores, propostas para patrocinadores.*

**`technical`** — Prefira copulativas simples ("X is Y") a substitutos inflados ("serves as," "stands as a testament to"). Uma ideia por frase; modo imperativo para instruções. Jargão está bem, mas defina-o na primeira aparição. Tabelas e listas apenas onde o conteúdo é genuinamente em forma de lista, não por decoração. *Documentação, blog técnico.*

**`warm`** — Dirija-se diretamente ao leitor ("you") e o reconheça pelo menos uma vez. Corte intensificadores ("very," "truly," "incredibly") em favor de verbos mais fortes. Sem aberturas de empatia performativa ("I completely understand how you feel"). Frases médias (15–20 palavras) para um ritmo tranquilo. *Mentoria, integração, agradecimentos.*

**`blunt`** — Lidere com a afirmação; corte preâmbulos como "It's important to note that". Travessões são raros aqui; use pontos finais para ênfase. Sem enchimento para atingir uma regra de três. Hedging quase zero; sinalize pilhas de "may / could / potentially". Declarativas curtas, com a frase longa ocasional para contraste. *Memorandos de decisão, thought leadership, feedback difícil.*

**Calibrar para uma amostra (opcional).** Se o escritor der uma amostra da própria escrita ("iguale minha voz — aqui está um post"), analise seu padrão de comprimento de frase, taxa de contração, aberturas de parágrafo, e escolhas de palavras recorrentes, depois combine com esses em vez de um perfil nomeado. Não "atualize" o vocabulário dele: se ele escreve "stuff" e "things," mantenha esse registro.

**Como a voz compõe com o contexto.** A voz define a meta; o contexto define quão rigorosamente aplicá-la. Uma *meta* de voz sempre se aplica, mesmo onde um perfil de contexto ignoraria essa categoria — a voz `technical` ainda prefere copulativas simples em um contexto `casual` que de outra forma ignora a evitação de cópula. Onde os dois eixos regem a mesma regra e concordam, eles se reforçam: a voz `blunt` quer travessões quase zero e um contexto `blog` já é estrito sobre eles, então permanece uma edição obrigatória. Onde discordam, resolva na direção do **mais rigoroso** dos dois — uma voz `warm` em `docs` ainda não ganha tabelas decorativas. Pareamentos padrão sensatos: casual↔casual, professional↔linkedin/investor-email, technical↔docs/technical-blog.

---

## Formato de saída

### Modo rewrite (padrão)

Retorne sua resposta em quatro seções:

**1. Problemas encontrados**
Uma lista com marcadores de cada AI-ism identificado, com o texto infrator citado.

**2. Versão reescrita**
O conteúdo completo reescrito. Preserve a estrutura original, a intenção, e todos os detalhes técnicos específicos. Mude apenas o que as diretrizes exigem.

**3. O que mudou**
Um breve resumo das edições principais feitas. Não cada palavra, apenas as mudanças significativas.

**4. Auditoria de segunda passagem**
Releia a versão reescrita da seção 2. Identifique quaisquer sinais de IA remanescentes que sobreviveram à primeira passagem — transições recicladas, inflação persistente, evitação de cópula, frases de enchimento, ou qualquer outra coisa das categorias acima. Corrija-os, retorne o texto corrigido inline, e observe o que mudou nesta passagem. Se a reescrita está limpa, diga isso.

### Modo detect

Retorne sua resposta em duas seções:

**1. Problemas encontrados**
Uma lista com marcadores de cada AI-ism identificado, com o texto infrator citado. Agrupe por severidade (P0, P1, P2).

**2. Avaliação**
Para cada sinalização, observe se é um problema claro ou uma decisão de julgamento. Alguns padrões associados à IA são técnicas de escrita eficazes — comprimento uniforme de parágrafo é um problema, mas um "however" bem colocado não é. Destaque quais sinalizações o escritor definitivamente deveria corrigir vs. quais valem uma segunda olhada mas podem estar bem no contexto. Se o texto está limpo, diga isso.

### Modo edit

Depois de editar o arquivo no local, retorne um breve relatório — não o arquivo completo:

**1. Edições feitas**
Uma lista com marcadores das mudanças, cada uma com a localização no arquivo e o antes → depois. Apenas os trechos que você tocou.

**2. Verificação**
Confirme que você releu o arquivo e os padrões sinalizados foram resolvidos. Observe qualquer coisa que você deliberadamente deixou intocada porque já era humana ou intencional.

---

## Calibração de tom

O objetivo é uma escrita que soe como se uma pessoa a tivesse escrito. Direta. Específica. A escrita deveria demonstrar confiança, não afirmá-la.

Cinco princípios para reescritas com som humano:
1. **Varie o comprimento das frases** — misture curtas com longas. Fragmentos estão bem.
2. **Seja concreto** — substitua afirmações vagas por números, nomes, datas, ou exemplos.
3. **Tenha uma voz** — onde apropriado, use primeira pessoa, declare preferências, mostre reações.
4. **Corte a neutralidade** — humanos têm opiniões. Se o texto deveria tomar uma posição, tome-a.
5. **Conquiste sua ênfase** — não diga ao leitor que algo é interessante. Torne isso interessante.

Se a escrita original já é forte, diga isso e faça apenas os cortes necessários. Não edite em excesso apenas por editar.

A tabela de substituição fornece padrões, não mandatos. Se uma palavra sinalizada é claramente a escolha certa no contexto, preserve-a.
