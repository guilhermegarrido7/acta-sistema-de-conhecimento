# Briefing metodológico — processo de M&A sell-side (ACTA Consulting)

Destilado de 4 documentos de dois mandatos (Bahia Ecologia, Neufreire). Foco em **estrutura e método**;
dados de cliente aparecem só quando são inseparáveis do rótulo estrutural.

Arquivos-fonte:
1. `...\8 - Bahia Ecologia\0- Diversos\20260422 ACTA M&A Bahia Ecologia.docx`
2. `...\8 - Bahia Ecologia\3- Apresentações\20260429 Planejamento IM.docx`
3. `...\8 - Bahia Ecologia\3- Apresentações\20260522 Anotações Bahia Ecologia.docx`
4. `...\11- Neufreire\1- Diversos\Roteiro - Criação de Teaser.docx`

---

## 1. Carta de solicitação inicial de informações

**Arquivo:** `20260422 ACTA M&A Bahia Ecologia.docx`
**Natureza:** carta formal em papel timbrado (logo vive numa tabela 1x2 vazia no header da seção;
todo o texto está no corpo, com estilo de parágrafo nomeado `Header`).
**Numeração real:** os 5 blocos usam uma lista única (`numId 36`, ilvl 0 → I., II., III...);
cada bloco tem sua **própria** lista de itens (`numId 31 / 37 / 38 / 39`), o que reinicia a
contagem a cada bloco.

### Esqueleto exato (ordem literal)

```
[logo / timbrado no header]
<data por extenso: "22 de abril de 2026">
(linha em branco)
<Nome da empresa-alvo>
(linha em branco)
Att. <destinatário>
(linha em branco)
Assunto: Solicitação inicial de informações
M&A Sell Side – <Nome da empresa-alvo>
(linha em branco)
Prezado(a)s,
(linha em branco)
<parágrafo de enquadramento do mandato>
(linha em branco)
1. FINANCEIRO E CONTÁBIL          → 4 itens
2. OPERACIONAL E CAPACIDADE       → 5 itens
3. COMERCIAL E MERCADO            → 3 itens
4. AMBIENTAL, REGULATÓRIO E PASSIVOS → 3 itens
5. CONFIDENCIALIDADE              → parágrafo corrido (não é lista)
(linha em branco)
Respeitosamente,
(linha em branco)
ACTA CONSULTING LTDA.
```

### Parágrafo de enquadramento (literal, com o cliente entre `<>`)

> "Na qualidade de assessores estratégicos da `<empresa>`, a ACTA Consulting, em continuidade às
> nossas conversas sobre o mandato de alienação estratégica da operação de `<descrição do escopo
> operacional: gestão de resíduos, reciclagem e comercialização>`, solicitamos o envio das
> informações e documentos listados abaixo."

### Lista COMPLETA e literal dos itens solicitados, por bloco

**1. FINANCEIRO E CONTÁBIL**
- Demonstrações financeiras (Balanço patrimonial, Demonstrativo de Resultado do Exercício e Balancete Analítico) dos últimos 3 exercícios em formato Excel;
- Demonstrações financeiras (Balanço patrimonial, Demonstrativo de Resultado do Exercício e Balancete Analítico) acumuladas do ano vigente em formato Excel;
- Histórico de CapEx total dos últimos 3 anos, segregando entre CapEx de Expansão vs. Manutenção; e
- Lista de empréstimos e financiamentos ativos.

**2. OPERACIONAL E CAPACIDADE**
- Histórico de volume processado dos últimos 3 anos, desejável abertura mensal. Porém, caso não possua, aceitável o histórico anualizado.
- Lista de ativos imobilizados;
- Lista de frota de transporte, especificando: própria vs. terceirizada (informando condições comerciais);
- Capacidade instalada máxima para cada uma das linhas de serviço; e
- Headcount por setor.

**3. COMERCIAL E MERCADO**
- Lista de clientes com faturamento e volume dos últimos 3 anos por linha de serviço;
- Principais contratos vigentes, indicando vencimento e eventuais cláusulas de reajuste; e
- Histórico de volume e preço médio de venda por linha de serviço dos últimos 3 anos.

**4. AMBIENTAL, REGULATÓRIO E PASSIVOS**
- Licenças Ambientais de Operação (LO) vigentes;
- Histórico de autuações ambientais e trabalhistas relevantes; e
- Relação de contingências e processos judiciais ativos.

**5. CONFIDENCIALIDADE** (parágrafo, literal)
> "Reiteramos que todas as informações compartilhadas estão protegidas pelo Acordo de
> Confidencialidade (NDA) vigente, sendo acessadas exclusivamente pela equipe técnica da ACTA
> envolvida no projeto."

### Convenções de redação observadas
- Rubricas de bloco em CAIXA ALTA, sem verbo, formato "EIXO E EIXO".
- Cada item é um substantivo/objeto pedido, não um pedido em 1ª pessoa ("Lista de...", "Histórico de...", "Demonstrações financeiras...").
- Pontuação de lista jurídica: itens terminam em `;`, o penúltimo em `; e`, o último em `.`.
- Formato de entrega é explicitado quando importa ("em formato Excel").
- Granularidade desejada + fallback aceitável na mesma frase ("desejável abertura mensal. Porém, caso não possua, aceitável o histórico anualizado").
- Segregações analíticas são cravadas no próprio pedido (Expansão vs. Manutenção; própria vs. terceirizada; por linha de serviço; por setor).
- Janela temporal padrão: **3 anos + YTD do ano vigente**.

---

## 2. Planejamento da arquitetura do Information Memorandum (IM)

**Arquivo:** `20260429 Planejamento IM.docx`
**Natureza:** índice anotado do IM — 6 capítulos em numeração romana digitada no próprio texto
(estilo `Normal`, sem Heading real), cada capítulo com um **apelido entre parênteses** que declara
a função narrativa, e sob ele bullets com o conteúdo e o racional. Cada capítulo usa sua própria
lista (`numId 1..6`).

### Esqueleto exato

```
I.   Executive Summary & Investment Highlights   (O "Gancho")          — 2 bullets
II.  Business Model & Operations                 (Como a máquina faz dinheiro) — 3 bullets
III. Market & Regulatory Tailwinds               (Ventos a favor)      — 3 bullets
IV.  Projetos de Expansão                        (O "Upside")          — 1 bullet
V.   Historical Financials                       (A Realidade)         — 3 bullets
VI.  Financial Projections                       (A Promessa e o Valuation) — 2 bullets
```

Padrão do título: **título técnico em inglês** (ou português, nos capítulos IV) + **apelido em
português entre parênteses** que traduz o papel do capítulo na venda.

### Conteúdo por capítulo (rubrica em negrito = literal; texto = spec literal)

**I. Executive Summary & Investment Highlights (O "Gancho")**
- *Visão Geral:* o que a empresa faz, onde opera e principais métricas (Revenue & EBITDA LTM).
- *Investment Highlights (5 a 6 Bullets):* ex.: posição dominante no mercado regional, licenciamento ambiental premium (barreira de entrada), carteira de clientes B2B resiliente, upside de créditos de carbono.

**II. Business Model & Operations (Como a máquina faz dinheiro)**
- *O Ciclo do Resíduo:* Origem (B2B/B2G) > Processamento (Planta) > Monetização (Commodities, Energia, Certificados). — cadeia em setas, da origem do insumo à monetização.
- *Capacidade Instalada vs. Utilização:* quantas toneladas a planta suporta e a quantos % está rodando hoje.
- *Ativos Estratégicos:* detalhamento da frota, maquinário (prensas, esteiras) e, "o mais importante", Licenças Ambientais — rotuladas como **Deal Breakers**.

**III. Market & Regulatory Tailwinds (Ventos a favor)**
- *Dinâmica Local:* oferta e demanda no raio de atuação logística. Racional literal: "frete é o que mata a margem, mostre que o modelo de vocês é eficiente".
- *Arcabouço Regulatório como Motor de Receita:* como a norma (Política Nacional de Resíduos Sólidos, Logística Reversa) **força** os clientes a contratarem a empresa.
- *Novas Avenidas (Opcionalidade):* mercados adjacentes (Créditos de Carbono, Certificados de Reciclagem/CBIOs). Instrução literal: "Mostre isso como o 'Cereja do Bolo', não como a base do negócio (a menos que já faturem muito com isso)".

**IV. Projetos de Expansão (O "Upside")**
- *Business Plan de Crescimento:* "O que a empresa faria se tivesse capital hoje?" (ex.: nova planta, ampliação de frota). Mostrar o **CAPEX necessário** e o **TIR (IRR) esperado de cada projeto**.

**V. Historical Financials (A Realidade)**
- *Evolução da Receita Bruta à Líquida (Waterfall Chart):* quebra por linha de serviço.
- *Normalização de EBITDA:* tabela mostrando o EBITDA Contábil e os **Add-backs** (ajustes de despesas não recorrentes ou dos sócios) para chegar ao **EBITDA Ajustado**.
- *Análise de Capital de Giro (NWC):* prazos de recebimento e pagamento (Liquidez).

**VI. Financial Projections (A Promessa e o Valuation)**
- *Premissas Macro e Micro:* inflação, crescimento do PIB, preço unitário do produto/serviço, aumento de market share.
- *Projeção de DRE e NOPAT.*

> Nota de completude: o documento **termina** em "Projeção de DRE e NOPAT" — não há capítulos VII+
> nem seção de estrutura societária/processo. É um planejamento em aberto.

### Lógica narrativa embutida (o método por trás dos apelidos)
Gancho → mecânica do negócio → vento externo a favor → upside acionável com capital →
prova histórica ("A Realidade") → promessa quantificada ("A Promessa e o Valuation").
Isto é: **primeiro sedução, depois mecanismo, depois legitimação externa, depois lastro, depois preço.**

---

## 3. Ata de validação com a gestão (padrão, sem dados do cliente)

**Arquivo:** `20260522 Anotações Bahia Ecologia.docx`
**Natureza:** ata de reunião de validação de material em construção com a gestão da empresa-alvo.
Não é ata de decisões societárias — é um **log de correções e instruções de edição** sobre o
material (IM/apresentação) já rascunhado pela ACTA.

### Estrutura exata

```
Anotações <Empresa>            ← título simples, "Anotações" + nome
(linha em branco)
Observações gerais:            ← rubrica com dois-pontos
  • 14 itens de nível 0, dos quais 5 têm sub-itens (7 sub-itens de nível 1 no total)
(linha em branco)
Atualização da timeline da <sigla do material/slide>:
  • 5 itens de nível 0 + 1 sub-item
(linha em branco)
Projetos:
  • 3 itens de nível 0
```

**Volumetria:** 3 rubricas, **22 itens de nível 0 + 8 sub-itens = 30 registros**.
Uma única lista multinível (`numId 1`, estilo `List Paragraph`) atravessa as três rubricas.

### Tipos de decisão/registro que aparecem (com contagem aproximada)

| # | Tipo | Como se reconhece | Freq. |
|---|------|-------------------|-------|
| 1 | **Instrução de edição do material** (remover / substituir / adicionar rubrica) | verbo no infinitivo: "Retirar…", "Substituir por…", "Adicionar…" | ~4 |
| 2 | **Correção factual de premissa do rascunho** | "X é anterior a…", "Y é apenas a consolidação", "não é zero, é marginal" | ~4 |
| 3 | **Qualificação de fragilidade contratual/comercial** | "não é mais exclusivo", "ainda não é contratualizado, possui apenas memorando" | ~3 |
| 4 | **Calibração de peso narrativo e de projeção** | "é projeto de médio a longo prazo", "difícil de sensibilizar nas projeções financeiras" | ~3 |
| 5 | **Classificação de barreira competitiva / moat** | "é uma relevante barreira competitiva", "só pode X se for Y" | ~2 |
| 6 | **Explicação causal de inflexão histórica** | "o que dificultou o crescimento em <ano> foi…", "o que ajudou foi…" | ~2 |
| 7 | **Registro de perímetro de ativos / estrutura física** | rubrica-tema + sub-itens por unidade | ~2 |
| 8 | **Marco de timeline** | ano como prefixo: "2024: …", "2026: …" | ~4 |
| 9 | **Status de projeto** (em curso / arquivado com condição de retomada / ideia) | "era um projeto em <ano>, mas decidiram não realizar por conta de…", "possuem o projeto em mãos, poderiam executar se…" | 3 |
| 10 | **Tarefa de diligência atribuída ao time** | "Pesquisar sobre…", "a solicitar…" | ~2 |
| 11 | **Registro de mudança de regime tributário/regulatório** | "hoje está no regime X. Porém, por conta de <reforma>, há planejamento para mudar para Y" | ~2 |

### Convenções de redação das decisões
- Frase **curta e única**, sem sujeito quando o sujeito é o time ("Adicionar…", "Pesquisar…").
- **Rótulo-tema + dois-pontos + decisão**: "Estruturas físicas:", "No mix de receitas:", "Pallets:", "Na análise de produto escalável:".
- **Ano como prefixo** em itens de timeline.
- **Sub-item = evidência ou nuance** que sustenta / restringe o item-pai (nunca um tema novo).
- Sigla técnica sempre expandida na 1ª menção: `SIGLA (Nome Completo Por Extenso)`.
- Contraste "hoje vs. planejado" explicitado com "Porém" / "Entretanto".
- Quando há incerteza, ela é registrada como tal ("difícil de sensibilizar", "pendente", "a solicitar").

### 5 exemplos anonimizados de como uma decisão é formulada

1. **(edição de rubrica)** "No mix de receitas: retirar `<linha guarda-chuva>`, já que abarca os itens que já estão presentes na tabela. Substituir por `<linha mais específica e de maior valor>`."
2. **(correção de premissa econômica)** "O custo da matéria-prima não é zero ou negativo; em média, é marginal. Em alguns casos, como `<item específico>`, o cliente paga para a empresa recolhê-lo."
3. **(fragilidade contratual + calibração)** "O relacionamento com `<cliente âncora>` não é mais exclusivo e ainda não é contratualizado — possui apenas memorando (média de `<volume>`/mês)."
4. **(calibração de projeção)** "`<Nova avenida de receita>` é um projeto de médio a longo prazo e depende de certificação; difícil de sensibilizar nas projeções financeiras." + sub-item: "Não é demanda compulsória a partir de `<ano>`, mas progressiva entre `<ano>` e `<ano>`."
5. **(status de projeto arquivado com gatilho)** "Projeto `<X>`: era um projeto em `<ano>`, mas decidiram não realizar por conta de `<risco contratual>` e da ausência de demanda para esse aumento de capacidade. Possuem o projeto em mãos e poderiam executar se houvesse contrato de take-or-pay com `<cliente>` para viabilizá-lo."

---

## 4. Roteiro de criação de Teaser

**Arquivo:** `Roteiro - Criação de Teaser.docx`
**Natureza:** notas consolidadas por bloco, "prontas para virar texto corrido do documento".
É a camada intermediária entre a coleta e o teaser final.

### Estrutura exata

```
Resumo Executivo                                  ← 1 parágrafo
(linha em branco)
Bloco 1 — A Companhia                             ← 3 parágrafos
Bloco 2 — Modelo Operacional & Cadeia de Valor    ← 2 parágrafos
Bloco 3 — Clientes & Contratos                    ← 2 parágrafos
Bloco 4 — Track Record & Backlog                  ← 2 parágrafos
Bloco 5 — Destaques Financeiros                   ← 1 parágrafo
Bloco 6 — Ativos & Estrutura Própria              ← 1 parágrafo
Bloco 7 — Vantagens Competitivas                  ← 1 parágrafo
(linha em branco)
Pendências para fechamento do teaser              ← rubrica + tabela 5x3
(linha em branco)
Implicação estratégica para o teaser: <parágrafo único>
```

Rótulo dos blocos: `Bloco N — <Título temático>` (travessão em em-dash, sem numeração automática;
tudo em estilo `Normal`). Sem bullets — **prosa corrida**, porque a saída é texto de teaser.

### Resumo Executivo — o que deve conter (literal, no método)
Uma frase de identidade (setor + geografia + ativo estratégico raro) + o **pivot/inflexão em curso**
(de onde para onde, em que prazo, por qual mecanismo) e a diretriz de tom:
> "O teaser deve carregar essa tese de inflexão, não apenas o histórico. Abaixo, as notas
> consolidadas por bloco, prontas para virar texto corrido do documento."

### O que cada bloco deve conter

**Bloco 1 — A Companhia**
Superlativos verificáveis (maior/única em X na região) e o diferencial de processo, com nota de que
o investimento já está amortizado; verticalização, frota própria, sistema de gestão/BI; histórico
societário e operacional (fundação, hiato de inatividade, retomada, consolidação em cliente âncora);
o marco de entrada num novo mercado com o valor do primeiro contrato; saldo contratado acumulado
e potencial adicional, com teto e renovabilidade do instrumento; atuação geográfica (estrutura
principal + estados adjacentes); **mix de receita em %** por linha; headcount (próprios + terceiros);
faturamento do segmento atual, com ressalva de tamanho relativo do segmento no setor.

**Bloco 2 — Modelo Operacional & Cadeia de Valor**
Unidades produtivas com **capacidade nominal e localização** (e observação de mobilidade/fixação de
fato); valor do pátio de máquinas **e o capex de renovação estimado** (declarar a necessidade, não
esconder); garantia de **insumo crítico** via contrato e o que isso faz com o custo logístico, com a
ressalva do que **não** é próprio; controle de qualidade (laboratório/equipamentos); **licenças
ambientais ativas por município e âmbito**.

**Bloco 3 — Clientes & Contratos**
Peso % do segmento hoje vs. o que se projeta, com a comparação que dramatiza a inflexão (um único
contrato futuro > faturamento total do segmento atual); **concentração por cliente em %**;
qualificação da carteira (pulverizada, por tipo de cliente); ressalva metodológica explícita sobre
métrica não aplicável ("ticket médio por contrato não é métrica relevante dado o peso de `<linha de
volume variável>`"); **nº de contratos ativos** e sua tipologia.

**Bloco 4 — Track Record & Backlog**
Histórico operacional em unidades físicas acumuladas; **backlog decomposto** (saldo de contrato +
instrumento de registro de preço) com **meses de cobertura** e as exclusões declaradas (obras
menores, contratos em standby); métrica de produtividade por frente de serviço (faturamento
mínimo/dia); **pipeline em negociação** separado do backlog contratado; acervo técnico/habilitações
que credenciam a obras de porte.

**Bloco 5 — Destaques Financeiros**
Regime tributário e sua alternância por ano, com o critério (eleição fiscal); **endividamento
(empréstimos, financiamento de equipamentos, leasing — dívida bruta e líquida)**.
No documento este bloco está **majoritariamente pendente** — e isso é registrado no próprio texto.

**Bloco 6 — Ativos & Estrutura Própria**
Frota/equipamentos por tipo e **idade média**; imóveis próprios (sede, pátio/garagem, jazidas);
**valor total do imobilizado**. Também registrado como pendente no texto.

**Bloco 7 — Vantagens Competitivas**
Método explícito de separar **atributo comum** de **moat defensável**:
> "…opera hoje em um nicho restrito, com `<atributos>` — atributos que alguns concorrentes também
> possuem. O diferencial defensável é único: é a única empresa `<no estado>` com `<processo>`,
> gerando redução de ~`<%>` no custo de `<insumo>` frente a concorrentes que usam `<alternativa
> convencional>`. Esse é o ponto de moat a destacar no teaser, já que reduz custo variável de forma
> estrutural e não replicável no curto prazo."

Ou seja: (i) reconhecer o que é paridade competitiva, (ii) isolar o único diferencial, (iii)
quantificar o efeito em custo, (iv) justificar por que não é replicável no curto prazo.

### Estrutura da tabela de pendências

Tabela 3 colunas × 5 linhas (1 cabeçalho + 4 pendências):

| Item | Bloco | Status |
|---|---|---|
| `<documento ou dado faltante, com o detalhamento exigido entre parênteses>` | `Bloco N` ou `Solicitações finais` | `A solicitar por e-mail` |

- **Item** — descreve o entregável e, entre parênteses, o nível de detalhe esperado; aceita fallback ("ou estimativa").
- **Bloco** — rastreia a pendência ao bloco do roteiro que ela alimenta; pendências transversais recebem um pseudo-bloco ("Solicitações finais").
- **Status** — vocabulário fechado e curto; no documento, todas as 4 linhas estão em "A solicitar por e-mail" (i.e., o status carrega **o canal de cobrança**, não só o estágio).
- As pendências típicas: demonstrações financeiras de 3 anos, relação de imobilizado valorada, endividamento bruto e líquido, detalhamento de frota (quantidade e idade média).

### Formato do parágrafo de "implicação estratégica"

Rótulo fixo em abertura: **"Implicação estratégica para o teaser:"** seguido de **um único parágrafo**
com 4 movimentos encadeados:

1. **Ancoragem em dois eixos numerados** — "a narrativa de venda deve ancorar em dois eixos — (i) `<moat operacional comprovado>` e (ii) `<inflexão de mix já contratada, não projetada>`."
2. **Consequência de negociação** — "Isso desloca a conversa do múltiplo histórico para o múltiplo forward,"
3. **Efeito esperado em preço, hedgeado** — "o que **tende a** sustentar valuation mais alto numa negociação de M&A"
4. **Condicionante de execução, com o risco nomeado** — "— **mas exige** que os dados financeiros pendentes (Bloco 5/6) cheguem antes da rodada de teaser para **não criar gap de credibilidade** com potenciais compradores."

Marcas de estilo: em-dash para introduzir a enumeração e a ressalva; numeração romana minúscula
entre parênteses; verbo modal atenuado ("tende a") no efeito de preço; a ressalva final sempre
aponta para uma pendência rastreável a um bloco.

---

## Padrões generalizáveis

### É MÉTODO (reutilizável em qualquer mandato)

**Pipeline do mandato (a sequência dos 4 documentos é o próprio processo)**
`Carta de solicitação inicial` → `Planejamento da arquitetura do IM` → `Ata de validação com a gestão`
→ `Roteiro/notas por bloco do teaser` → deliverables (teaser, IM).
Coleta primeiro, arquitetura narrativa em paralelo, validação com o dono, consolidação em prosa.

**Da carta (1)**
- Os 4 eixos de solicitação: **Financeiro/Contábil · Operacional/Capacidade · Comercial/Mercado · Ambiental/Regulatório/Passivos**, + bloco de Confidencialidade que fecha a carta.
- Janela padrão de 3 exercícios + YTD, em Excel.
- Segregações já embutidas no pedido: CapEx Expansão vs. Manutenção; frota própria vs. terceirizada; tudo "por linha de serviço"; headcount por setor.
- Granularidade desejada **com fallback aceitável** declarado — evita travar a coleta.
- Pontuação de lista jurídica (`;` / `; e` / `.`) e rubricas em caixa alta.
- Referência ao NDA vigente + restrição de acesso à equipe técnica.

**Do planejamento de IM (2)**
- Título técnico + **apelido funcional entre parênteses** para cada capítulo — força cada seção a declarar seu papel na venda.
- Arco fixo: Gancho → Mecânica → Vento regulatório/de mercado → Upside com capital → Realidade histórica → Promessa/Valuation.
- Executive Summary com Revenue & EBITDA LTM e **5 a 6 Investment Highlights**.
- Cadeia de valor desenhada em setas: Origem → Processamento → Monetização.
- Capacidade instalada **vs.** utilização (%).
- Licenças/autorizações classificadas como **Deal Breakers**.
- Regulação apresentada como **motor de receita** (demanda compulsória), não como risco.
- Mercados adjacentes tratados como **opcionalidade / "cereja do bolo"**, jamais como base do caso.
- Cada projeto de expansão com **CAPEX + TIR**.
- Receita Bruta→Líquida em **waterfall**; **normalização de EBITDA com add-backs** explicitados; **NWC**.
- Projeções com premissas macro **e** micro, culminando em DRE e NOPAT.

**Da ata de validação (3)**
- Formato: `Anotações <Empresa>` + rubricas com dois-pontos + lista multinível; sub-item só como evidência/nuance do pai.
- Três rubricas recorrentes: **Observações gerais**, **Atualização da timeline**, **Projetos**.
- A ata registra **instruções de edição do material**, não só fatos — o material é o objeto da reunião.
- Toda fragilidade (não exclusividade, ausência de contrato, dependência de certificação) é registrada como tal.
- Inflexões históricas sempre com causa nomeada ("o que dificultou / o que ajudou o crescimento em `<ano>`").
- Pendências de pesquisa e de dado ficam no mesmo log ("Pesquisar sobre…", "a solicitar").
- Marcos de timeline com ano como prefixo.

**Do roteiro de teaser (4)**
- Os **7 blocos** como checklist canônico: Companhia · Modelo Operacional & Cadeia de Valor · Clientes & Contratos · Track Record & Backlog · Destaques Financeiros · Ativos & Estrutura Própria · Vantagens Competitivas.
- Resumo executivo que declara a **tese de inflexão** e o tom ("carregar a tese, não apenas o histórico").
- Backlog **decomposto** e com meses de cobertura; **pipeline em negociação separado** do contratado.
- **Métricas não aplicáveis são declaradas** com a razão (em vez de omitidas).
- Método de moat: paridade → diferencial único → quantificação do efeito em custo/margem → prova de não replicabilidade.
- Necessidades de capex e endividamento aparecem no material, não são escondidas.
- **Tabela de pendências `Item | Bloco | Status`**, com rastreio ao bloco e o canal de cobrança no status.
- Parágrafo de **implicação estratégica** em 4 movimentos: dois eixos (i)/(ii) → deslocamento histórico→forward → efeito em valuation atenuado → condicionante com risco nomeado (gap de credibilidade).
- Regra transversal: **"já contratado, não projetado"** é o argumento que sustenta múltiplo forward.

### É ESPECÍFICO DO CLIENTE (trocar a cada mandato)
- Nomes, datas, destinatários, endereços e o descritor do escopo no parágrafo de enquadramento da carta.
- Todos os números: faturamento, EBITDA, backlog, capacidade (ton/h, ton/mês), %, valores de capex, tetos de ata, headcount.
- Nomes de clientes, concorrentes, certificadoras, fornecedores, sistemas de gestão e municípios/licenças.
- O conteúdo setorial das rubricas: "O Ciclo do Resíduo", CBIOs/CCRLR/créditos de carbono, Política Nacional de Resíduos Sólidos e Logística Reversa, CBUQ/usina a gás natural, DNIT/ata de registro de preço, brita/agregados.
- A linha de moat concreta (gás natural; licenciamento premium; virar certificador) — o **método** de isolar o moat é reutilizável; o moat, não.
- Os projetos nominais (biomassa/pellets, automação PET, resina de polipropileno, biogás) e os marcos da timeline (incêndio, troca de ERP, entrada em obra pública).
- O mix de receita, a concentração por cliente e os regimes tributários efetivamente aplicáveis.
- As pendências listadas na tabela (o **formato** da tabela é método; as 4 linhas são do mandato).
