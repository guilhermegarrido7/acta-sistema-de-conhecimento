# Mapeamento AI-first dos próximos plugins

Este documento mapeia os próximos plugins com matéria-prima disponível sob a tese de que a ACTA é uma
**consultoria de negócios AI-first**. Complementa [MAPEAMENTO.md](MAPEAMENTO.md) (desenho e ordem)
e [ROADMAP.md](ROADMAP.md) (status). Não substitui nenhum dos dois: muda a lente com que se escreve
a skill.

---

## 1. O que "AI-first" muda no jeito de escrever uma skill

A pasta de Projetos da firma dá **contexto** de como a ACTA trabalha hoje. Ela não é o teto do
conteúdo de um plugin. Uma skill escrita só a partir do que um projeto fez reproduz o projeto, com
seus atalhos e suas lacunas. Uma skill AI-first parte da **melhor prática de mercado** e usa o caso
real como validação e como calibragem ao mid-market brasileiro.

O que o mercado chama de consultoria AI-first, destilado das fontes da seção 4: a firma **codifica o
próprio playbook em skills e agentes que executam o trabalho repetível** sob guardrails, enquanto o
humano mantém o julgamento, a relação com o cliente e a autoridade de aprovação. O agente não é um
chatbot que sugere: é um **executor de tarefa** que produz a primeira versão do entregável e **para
no ponto de decisão**, onde um humano revisa antes de qualquer coisa ir ao cliente. Isso quebra o
modelo da pirâmide (uma base de juniores fazendo volume) e a lógica de cobrança por hora.

Consequência de desenho, e o repositório já faz isso: a skill não é um manual para o consultor ler,
é **instrução executável** com tabelas de decisão, "o que entregar", "próximo passo", os planos de
degradação de evidência e o checkpoint de parada. É esse formato que transforma o método da casa em
capacidade de execução, não em PDF de treinamento.

> Conteúdo das fontes externas foi reescrito para conformidade com restrições de licenciamento.

---

## 2. Princípio: âncora de mercado + validação de caso

Cada plugin abaixo declara:

- **Âncora de mercado** — o framework consagrado que sustenta o método, para não ser opinião da casa.
- **Validação de caso** — o projeto executado de onde se extrai o ajuste a mid-market e os exemplos
  (sempre anonimizados; nome de cliente e de pessoa nunca entram em skill).
- **Decomposição em skills** — revisada à luz do que a matéria-prima realmente mostra, dentro do teto
  de custo always-on do [CONVENCOES.md](../CONVENCOES.md) §5.

A regra do [MAPEAMENTO.md](MAPEAMENTO.md) §5 permite mudar o desenho da seção 3 antes de escrever,
quando o engajamento real mostra uma decomposição melhor. Os dois casos abaixo exercem isso.

---

## 3. Os três plugins

### 3.1 `acta-planejamento-orcamentario`

**Âncora de mercado.** Driver-Based Budgeting como espinha dorsal (orçamento construído dos drivers
operacionais — volume, preço, headcount, ocupação, horas-máquina — e não "ano passado + %"), com
Zero-Based Budgeting, Rolling Forecast e Beyond Budgeting como alternativas de modelo escolhidas por
estágio e setor do cliente. Referências: Corporate Finance Institute (modelos de orçamento em FP&A),
literatura de driver-based e rolling forecast.

**Validação de caso.** Grupo de mobilidade mid-market, com uma unidade de locação de equipamento e
uma de revenda de veículos pesados. A matéria-prima real já é driver-based: receita = quantidade × preço por unidade de
negócio, com realizado 2024/2025 contra orçado 2026; despesa por natureza; e um modelo de CapEx com
depreciação por classe de ativo e desembolso de caixa.

**Decomposição proposta** (ajustada do desenho §3, que trazia ZBB como skill isolada):

| Skill | O que cobre | Por que |
|---|---|---|
| `premissas-e-drivers` | Drivers de volume e preço, decomposição preço = custo + margem, escolha do modelo (incremental, ZBB, base-zero), premissas macro | ZBB vira decisão de modelo aqui, não skill à parte — a matéria-prima real é incremental |
| `orcamento-de-receita` | Projeção quantidade × preço por unidade de negócio e por linha | Núcleo driver-based, direto do caso LM |
| `orcamento-de-despesa-e-pessoal` | Despesa por natureza; folha orçada (salário + encargos + benefícios + comissões + treinamento) | Fronteira com `acta-pccr` declarada |
| `capex-e-depreciacao` | Investimento, tabela de depreciação por classe, desembolso de caixa | Fronteira com `acta-modelagem-economico-financeira` declarada |
| `ciclo-calendario-e-consolidacao` | Calendário orçamentário, consolidação multiunidade, convenção anual | Como o processo roda na firma do cliente |
| `analise-de-variacao-e-forecast` | Realizado vs. orçado, variação por linha, reprevisão, rolling forecast | Fecha o ciclo e conecta ao acompanhamento |

Âncora declarada: Beyond Budgeting; ZBB; Rolling Forecast; Driver-Based Budgeting.

### 3.2 `acta-dados-e-analytics`

**Decisão tomada:** trocar o desenho §3 original
(`diagnostico-de-maturidade · arquitetura-e-modelagem · governanca-de-dados · casos-de-uso-e-priorizacao · visualizacao`,
âncora DAMA-DMBOK/TDWI, que descrevia um projeto de **governança de dados corporativa**) pelo de
**analytics financeiro de consolidação** — tratar base crua, validar qualidade, reclassificar para
visão gerencial, consolidar grupo multiempresa, isolar intercompany, montar o modelo analítico e
chegar à recomendação. Para mid-market, é esse o trabalho que a ACTA entrega e vende. Permitido por
[MAPEAMENTO.md](MAPEAMENTO.md) §5.

**Âncora de mercado.** CRISP-DM como espinha dorsal do ciclo (definir objetivo → entender/preparar
dado → modelar → avaliar → operacionalizar), DAMA-DMBOK2 Revised (2024) como âncora de **qualidade e governança
de dados** onde couber (citável em consultoria com atribuição), e o diagnóstico data-driven da
McKinsey (escolher o dado certo → construir o modelo → transformar a decisão) como lente de valor.

**Lente AI-first.** O que distingue o analytics AI-first do clássico é a camada de execução: ETL
agêntico, reconciliação e tratamento automatizados, e o deliverable como **decisão pronta**, não
painel. O desenho abaixo reserva skills para isso (`qualidade-e-validacao`, `insight-e-recomendacao`)
que o desenho de cinco skills fundia ou omitia.

**Validação de caso.** Grupo imobiliário e hoteleiro multiempresa: consolidação de ~3.9 mil lançamentos de ~15 entidades,
reclassificação gerencial, marcação de intercompany (débito numa empresa / crédito na controladora),
normalização de centenas de lançamentos de cartão multimoeda, e modelo dinâmico por empresa ×
categoria.

**Decomposição proposta (7 skills, revisada de 5).** O responsável apontou que cinco era esqueleto, e
a pesquisa de mercado confirmou: o ciclo consagrado tem qualidade/validação e insight/decisão como
fases próprias, não apêndices.

| Skill | O que cobre |
|---|---|
| `diagnostico-e-escopo-de-dados` | Maturidade, fontes disponíveis, a pergunta de negócio antes do dado |
| `ingestao-e-tratamento` | Normalização de base crua, multimoeda, classificação de lançamento por descrição (lente ETL agêntico) |
| `qualidade-e-validacao` | Consistência, completude, reconciliação contra fonte autoritativa, rastreabilidade à origem (herda o padrão de `acta-metodo-consultoria`) |
| `reclassificacao-gerencial` | Do plano de contas societário para a visão gerencial por categoria |
| `consolidacao-e-intercompany` | Consolidação multiempresa, identificação e eliminação de intercompany |
| `modelo-analitico-e-visualizacao` | Modelo dinâmico, SUMIFS, painel, conexão com Power BI (fronteira com `acta-pesquisa-salarial:dashboard-powerbi`) |
| `insight-e-recomendacao` | Ler o número e produzir a recomendação pronta para decisão — o deliverable é a decisão, não a ferramenta |

Âncora declarada: CRISP-DM 1.0; DAMA-DMBOK2 Revised (2024), para qualidade e governança; McKinsey data-driven enterprise.

> **Ponto em aberto de dimensionamento:** uma oitava skill, `automacao-e-operacionalizacao` (pipeline
> e reconciliação automatizados, a camada AI-first explícita), pode entrar se couber no teto de custo
> always-on; senão, vira seção de `modelo-analitico-e-visualizacao`. Decidir ao escrever, medindo os
> tokens reais das sete descrições.

### 3.3 Receita de evento — extensão do `acta-revenue-assurance` (decisão tomada)

**Decisão:** o conteúdo do caso de evento **não vira plugin novo.** Pelo portfólio oficial da
ACTA (apresentação institucional), o serviço que cobre esse trabalho é **"Revenue Assurance (Segurança
da Receita)"**, já publicado como `acta-revenue-assurance`. Receita de evento é um ciclo de receita
com naturezas próprias; estender o plugin existente respeita a regra de não duplicar camada e fala a
língua do portfólio comercial.

**Âncora de mercado.** Ciclo order-to-cash e ACFE (exame de fraude), a mesma família do plugin.

**Validação de caso.** Operador de grande evento (fechamento financeiro de um show de porte). O padrão
de papel de trabalho é consistente por natureza: confronta a **apuração da ACTA** contra o **valor da
Autorização de Faturamento / razão**, apura a diferença, e sinaliza a pendência documental (falta de
AF, falta de contrato). O desfecho é a diferença entre a receita declarada e a receita real por
natureza, mais as pendências.

**Plano de extensão.** Acrescentar ao `acta-revenue-assurance` uma skill `receita-de-evento` (e, se a
densidade exigir, uma segunda), cobrindo as naturezas: patrocínio em dinheiro e em produto, permuta
(receita não-caixa), cortesia, e estoque de bebidas (NF → consumo → sobra → perda por SKU). Atualizar
README, subir a `version` do `plugin.json`, atualizar o ROADMAP, e acrescentar à
`matriz-de-riscos-da-receita` os riscos próprios de evento.

**Anonimização, atenção redobrada.** As planilhas-fonte trazem nomes reais de grandes patrocinadores
e de pessoas físicas. Nada disso entra em skill: vira exemplo anonimizado por setor ("grande
patrocinador — bebidas"). O operador do evento é o cliente; o nome não entra. O portal é público.

---

## 4. Fontes de mercado consultadas

Pesquisa de outubro de 2026. Conteúdo reescrito para conformidade com licenciamento; cada fonte
citada com link para atribuição.

**Consultoria AI-first e agentes em serviços profissionais**
- [AI agents in professional services (Klient)](https://klient.com/blog/ai-agents-in-professional-services/) — agente como executor autônomo de tarefa, com revisão humana antes de ir ao cliente.
- [SPI Research, Professional Services Maturity Benchmark, 19ª edição (release de fev/2026)](https://natlawreview.com/press-releases/spi-research-publishes-its-19th-annual-professional-services-maturitytm) — utilização faturável de 66,4%, a menor em 19 anos: é a pressão de margem que empurra serviços profissionais para agentes.
- [Where McKinsey and consulting go from here (HBR IdeaCast, jan/2026)](https://hbr.org/podcast/2026/01/where-mckinsey-and-consulting-go-from-here) e [Business Insider, jan/2026](https://www.businessinsider.com/mckinsey-workforce-ai-agents-consulting-industry-bob-sternfels-2026-1) — o CEO da McKinsey fala em cerca de 40 mil pessoas e 20 a 25 mil agentes de IA. O número de 40 mil agentes que circula em blogs é meta, não estoque.
- [How consulting firms turn playbooks into agentic workflows (Monetizely)](https://www.getmonetizely.com/articles/how-are-consulting-firms-using-agentic-ai-to-transform-their-playbooks-into-dynamic-workflows) — IP da firma vira workflow agêntico.
- [The anatomy of an AI-first tech consultancy (Alion)](https://aliontech.substack.com/p/the-anatomy-of-an-ai-first-tech-consultancy) — fim do "pay for time" e da pirâmide de entrega.

**Padrão de Agent Skills (fonte primária)**
- [Equipping agents with Agent Skills (Anthropic)](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills) — progressive disclosure em três níveis; a description é a única linha pré-carregada para roteamento.
- [Agent Skills specification (agentskills.io)](https://agentskills.io/specification) — estrutura da pasta de skill e regras de frontmatter.

**Orçamento**
- [Top budget models in FP&A (Corporate Finance Institute)](https://corporatefinanceinstitute.com/resources/fpa/top-budget-models-fpa/) — escolha de modelo por estágio e setor.
- [Driver-based budgeting (LearnSignal)](https://www.learnsignal.com/blog/driver-based-budgeting-practical-guide/) — orçamento a partir de drivers operacionais.
- [Rolling forecast (Profit.co)](https://www.profit.co/blog/continuous-planning/the-complete-rolling-forecasts-guide-how-forward-looking-planning-replaces-annual-budget-cycles/) — horizonte móvel que substitui o ciclo anual.

**Dados e analytics**
- [DAMA-DMBOK (DAMA International)](https://dama.org/learning-resources/dama-data-management-body-of-knowledge-dmbok/) — framework de gestão de dados; citável em consultoria com atribuição.
- [DAMA-DMBOK2 Revised Edition (DAMA International)](https://dama.org/dama-dmbok-revision/) — revisão de manutenção publicada em 2024, sem mudar a estrutura das 11 áreas de conhecimento.
- [Three keys to a data-driven strategy (McKinsey, Barton & Court)](https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/McKinsey%20Digital/Our%20Insights/Three%20keys%20to%20building%20a%20data%20driven%20strategy/Three%20keys%20to%20building%20a%20data%20driven%20strategy.pdf) — escolher o dado, construir o modelo, transformar a decisão.

**Problem-solving de consultoria (transversal)**
- [Essential consulting frameworks 2025 (Caselane)](https://caselane.ai/blog/essential-consulting-frameworks) — MECE, issue tree, hypothesis-driven; dimensão do mercado de consultoria.

---

## 5. Decisões tomadas e ordem de execução

Decisões do responsável (out/2026), já incorporadas acima:

- **Escopo do marketplace.** Consultoria Tributária / Tax, Auditoria Externa / Assurance e
  Consultoria em Tecnologia (Cybersecurity) **ficam de fora**: são serviços de outra equipe. O
  marketplace cobre GRC, Consultoria Empresarial, M&A / Fusões e Aquisições e Conceitos.
- **Receita de evento** vira **extensão do `acta-revenue-assurance`**, não plugin novo.
- **`acta-dados-e-analytics`** passa a **7 skills** (de 5), com qualidade/validação e insight/decisão
  como fases próprias.
- **Padrão geral confirmado:** âncora de mercado + validação de caso, não extração do projeto.
- **Serviços oficiais do portfólio sem mapeamento entram na fila** (ver §6).

Ordem de execução:

1. `acta-planejamento-orcamentario` — âncora de mercado clara e caso aderente.
2. Extensão `receita-de-evento` no `acta-revenue-assurance` — herda método já escrito.
3. `acta-dados-e-analytics` — desenho de 7 skills definido; dimensionar a 8ª ao escrever.

## 6. Serviços oficiais do portfólio a mapear

A apresentação institucional da ACTA lista serviços que ainda não têm plugin nem esqueleto, dentro
das áreas em escopo. Entram na fila de mapeamento (a prioridade segue a regra de matéria-prima real):

| Serviço oficial | Área | Observação |
|---|---|---|
| Reestruturação Organizacional | Consultoria Empresarial | Desenho de estrutura, lideranças, linhas de reporte, cargos |
| Dimensionamento de Quadro | Consultoria Empresarial | Headcount por volumetria, sazonalidade, senioridade |
| Supply Chain Management | Consultoria Empresarial | Procurement, logística, S&OP |
| Levantamento de Capital | M&A / F&A | Business plan, distribuição a investidores, negociação |
| Business Plans | M&A / F&A | Desenvolvimento de business plan para acionistas e investidores |

Nota de nomenclatura: o serviço oficial **"Modelagem de Processos"** (foco em digitalização,
robotização, papel zero, redução de headcount) corresponde ao plugin `acta-excelencia-operacional`.
Ao revisar esse plugin, alinhar o vocabulário ao do portfólio e explicitar a lente AI-first que o
próprio serviço já carrega.
