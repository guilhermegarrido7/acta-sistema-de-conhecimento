---
name: information-memorandum
description: Arquitetar e redigir o information memorandum — planejamento escrito antes do deck, arco narrativo em seis capítulos, títulos-asserção e espelhamento entre histórico e projetado. Acionar ao planejar ou produzir IM, ao definir a estrutura de capítulos, ao revisar slides, ou ao mapear o que falta para fechá-lo.
---

# Information Memorandum — o documento que sustenta o preço

## Papel desta skill

Direciona arquitetura, narrativa e redação do IM. Produz o planejamento, o mapa de disponibilidade e
o texto dos slides quando pedido. Não gera nem edita o `.pptx` sem que o usuário peça explicitamente.

## A regra que separa um IM bom de um ruim

> **Planejamento escrito antes de abrir o PowerPoint.**

Um IM construído slide a slide dentro do PowerPoint vira uma coleção de gráficos com divisores. Um IM
planejado em documento — capítulo por capítulo, com o papel narrativo de cada um declarado — vira
argumento. A diferença aparece na décima página, quando o leitor entende o que está sendo provado.

O planejamento é um `.docx` ou `.md` em `~~pasta de trabalho/3- Apresentações/`, versionado.

## O arco narrativo

Seis capítulos, cada um com **título técnico + apelido funcional entre parênteses**. O apelido não é
brincadeira: ele obriga cada capítulo a declarar qual é o seu papel na venda, e é o que impede um
capítulo de existir só porque "tem que ter".

```
I.   Executive Summary & Investment Highlights   (O "Gancho")
II.  Business Model & Operations                 (Como a máquina faz dinheiro)
III. Market & Regulatory Tailwinds               (Ventos a favor)
IV.  Projetos de Expansão                        (O "Upside")
V.   Historical Financials                       (A Realidade)
VI.  Financial Projections                       (A Promessa e o Valuation)
```

A lógica da ordem: **primeiro sedução, depois mecanismo, depois legitimação externa, depois
opcionalidade, depois lastro, depois preço.** Inverter isso — começar pelo histórico financeiro, como
é tentador — mata o documento na primeira página, porque pede ao leitor que se interesse por números
de uma empresa que ele ainda não sabe por que deveria querer.

### O que cada capítulo precisa provar

| Cap. | Precisa provar | Evidência que sustenta |
|---|---|---|
| I | "vale a pena ler as próximas 30 páginas" | Receita e EBITDA LTM + **5 a 6 investment highlights** |
| II | "eu entendo como esse negócio ganha dinheiro" | Cadeia de valor em setas: Origem → Processamento → Monetização; capacidade instalada **vs.** utilização; ativos estratégicos e licenças |
| III | "a demanda não depende do vendedor" | Dinâmica local de oferta e demanda; a norma que **força** o cliente a contratar; mercados adjacentes como opcionalidade |
| IV | "há upside acionável com capital" | Por projeto: **CapEx necessário e TIR esperada** |
| V | "os números são reais" | Waterfall receita bruta → líquida por linha; **normalização de EBITDA com add-backs**; capital de giro |
| VI | "a promessa é defensável" | Premissas macro **e** micro; projeção de DRE e NOPAT |

Três instruções de calibragem que vêm da prática e evitam os erros mais custosos:

- **Regulação é motor de receita, não seção de risco.** A norma que obriga o cliente a contratar é o
  ativo mais forte do documento. Apresente-a como vetor de demanda.
- **Licença é deal breaker.** Trate as autorizações como o que são: a barreira de entrada que o
  comprador não consegue replicar comprando equipamento.
- **Mercado adjacente é "cereja do bolo", nunca a base do caso** — a menos que já fature de forma
  relevante. Construir o IM sobre uma receita que ainda não existe é o que faz o comprador
  desqualificar o documento inteiro.

## Estrutura do deck

Padrão de referência, com a numeração de slide como ordem de grandeza:

```
 1     Capa — codinome (nome real) · "Information Memorandum | M&A Sell Side Advisor" · mês/ano
 2     Introdução — aviso legal + contato do sócio responsável
 3     Sumário — índice com páginas, espelhando exatamente os capítulos
 4     ── divisor: Sumário Executivo ──
 5     A tese, em um título-asserção. 3 colunas (Operação / Desempenho / Avenidas), cada uma com
       big number + bullets
 6     ── divisor: Modelo de Negócio e Operações ──
 7-14  Identidade e posicionamento na cadeia · trajetória (timeline de marcos) · organograma com
       headcount por área · posicionamento na cadeia de valor · acesso a fornecedores/insumo ·
       mix de receita e capacidade por segmento · vantagens competitivas · frota e imobilizado
15     ── divisor: Análise Setorial ──
16-20  Imperativo regulatório (federal + estadual) · a assimetria/gap do mercado · comparação
       internacional · novas formas de monetização · casos e benchmarks setoriais
21     ── divisor: Projetos de Expansão ──
22-23  Um slide por projeto: processo, CapEx, payback/TIR, racional estratégico
24     ── divisor: Histórico Financeiro ──
25-27  DRE · Capital Investido e Fundos Investidos · Análise de ROIC
28     ── divisor: Projeções Financeiras ──
29-31  DRE · Capital Investido e Fundos Investidos · Análise de ROIC     ← espelha 25-27
32     Fechamento
```

Cada capítulo abre com **divisor dedicado** — título grande centralizado, nada mais. E o sumário do
slide 3 espelha exatamente essa estrutura: se divergirem, o leitor perde a confiança na navegação.

### O espelhamento histórico ↔ projetado

Os slides 25–27 e 29–31 têm **exatamente a mesma estrutura, na mesma ordem**: DRE → Capital Investido
e Fundos Investidos → Análise de ROIC. Isso permite comparação direta e é o que faz a projeção parecer
continuidade do histórico em vez de invenção.

O vocabulário desse bloco é econômico, não contábil: **ROIC, NOPAT, capital investido operacional,
fundos investidos, spread ROIC−WACC**. Não receita → EBITDA → lucro líquido → margens → CAGR.

É essa escolha que sinaliza ao comprador sofisticado que a assessoria entende criação de valor. E
tem consequência: o IM e o deck de valuation **têm de contar a mesma história com os mesmos
números**. Ver plugin de valuation, skills `diagnostico-de-roic` e `reorganizacao-contabil`.

> Se o plugin de valuation não estiver instalado, **avise o usuário** antes de produzir os capítulos
> V e VI: `claude plugin install acta-modelagem-economico-financeira@acta-sistema-de-conhecimento
> --scope user`. Sem ele, o vocabulário econômico do IM não tem metodologia por trás.

## Títulos-asserção

Todo título de slide de conteúdo carrega a conclusão. Não é rótulo do que está no slide — é a
afirmação que o slide prova.

| Rótulo (evitar) | Asserção (usar) |
|---|---|
| "Reciclagem no G20" | "O país apresenta o maior gap estrutural de reciclagem do G20, configurando a maior oportunidade de consolidação do setor" |
| "Frota" | "Frota própria de 20 veículos amplamente depreciada e CapEx recente em máquinas: imobilizado líquido de R$ 2,8 MM em 2025" |
| "Dados Gerais" | — sem asserção, o slide não sabe o que está provando; reescreva ou corte |

Regra prática: se o título serviria para o mesmo slide de outra empresa, ele é rótulo. Reescreva.

Um leitor que percorre só os títulos, do primeiro ao último, deve terminar com o argumento completo
na cabeça. É esse o teste.

## Uso de gráfico vs. tabela

Convenção que mantém o deck legível:

- **Gráfico de série temporal** — reservado aos **KPIs financeiros centrais**: receita, EBITDA, ROIC,
  capital investido. Nada mais.
- **Tabela, card e diagrama de fluxo** — dados estruturais e qualitativos: organograma, mix de
  receita, vantagens competitivas, benchmarking, frota.

Gráfico de série temporal para tudo transforma o deck em ruído e faz os quatro KPIs que importam
desaparecerem no meio.

Gráficos **nativos** do PowerPoint, não imagem colada — permitem correção sem refazer, e o comprador
que pede o arquivo consegue inspecionar.

Identidade visual (paleta, tipografia, grid, layouts mestre) vive em `acta-way`. Carregue-a.

## Esqueleto primeiro, lacuna marcada

O método que faz o IM avançar sem inventar dado:

1. Monte o **esqueleto completo** — todos os slides, todos os títulos, todos os divisores.
2. Em cada slide incompleto, uma **caixa de aviso visível** que lista exatamente o que falta **e o
   arquivo do repositório que serve de base**.
3. Preencha por rodadas, removendo a caixa quando o slide fecha.

Assim o estado do documento é auto-evidente para qualquer pessoa que o abra, e nenhum slide fica
"quase pronto" com um número plausível no lugar do real.

**Nenhum número inventado.** Todo valor vem de arquivo identificado do data room ou do teaser.
Métrica derivada é declarada com a conta. Se um deck foi gerado por script, registre que o script
**não deve ser reexecutado** depois de edição manual.

## Mapa de disponibilidade

Antes de redigir, produza o mapa — e ele é **estritamente** um inventário:

| Seção do IM | Já no teaser | Já no data room | Pendente |
|---|---|---|---|

Mais uma seção final: **lacunas que não foram pedidas nem estão disponíveis** — as que ninguém sabia
que faltavam.

**O mapa não contém opinião, conclusão ou análise.** Isso é produzido separadamente, quando pedido.
Misturar as duas coisas faz o mapa parecer análise rasa e a análise parecer inventário. Ver
`convencoes-de-projeto`, diretriz 4.

## Validação com a gestão

O IM v1 vai à gestão do alvo e volta com correções. Registre em ata — que não é ata de decisão
societária, é **log de instruções de edição do material**.

Formato: `Anotações <alvo>` + rubricas com dois-pontos (`Observações gerais:`, `Atualização da
timeline:`, `Projetos:`) + lista multinível, onde **sub-item é sempre evidência ou nuance do item-pai,
nunca tema novo**.

Redação das entradas:

- Frase curta e única, verbo no infinitivo quando a ação é do time: "Retirar...", "Substituir por...",
  "Pesquisar sobre...".
- Rótulo-tema + dois-pontos + decisão: "No mix de receitas: retirar `<linha guarda-chuva>`...".
- Ano como prefixo em marco de timeline: "2024: ...".
- Sigla expandida na primeira menção.
- Contraste hoje vs. planejado explicitado com "Porém" / "Entretanto".
- **Fragilidade é registrada como fragilidade** — "não é mais exclusivo", "ainda não é
  contratualizado, possui apenas memorando", "difícil de sensibilizar nas projeções". É esse registro
  que impede que uma expectativa do vendedor entre no IM como fato.
- Inflexão histórica sempre com a causa nomeada: "o que dificultou o crescimento em `<ano>` foi...".

Cada entrada da ata deve virar uma edição rastreável no IM v2, ou uma justificativa de por que não.

## Coerência entre os três materiais

Teaser, IM e valuation têm de contar a mesma história com os mesmos números. É item explícito do gate
de go-to-market (ver skill `go-to-market`), e a incoerência mais comum e mais custosa é a amostra de
transações precedentes divergir entre o estudo, o IM e o deck de valuation — mesma transação com
múltiplo diferente em dois documentos que o comprador tem nas mãos.

Checagem antes de emitir:

- EBITDA de referência é o mesmo nos três?
- A amostra de precedentes e os múltiplos batem?
- O moat do teaser é a mesma tese do CAP no valuation?
- Backlog e capacidade são os mesmos números?
- Contagem de ativos (frota, unidades, headcount) é consistente entre slides do próprio IM?

Essa última é banal e escapa: o mesmo slide trazer "16 veículos" no texto e 20 linhas na tabela é o
tipo de erro que o comprador nota e que barateia tudo o mais.

## O que entregar

1. O planejamento escrito, com os seis capítulos, apelidos e o que cada um precisa provar.
2. O mapa de disponibilidade, sem análise.
3. O esqueleto completo com as lacunas marcadas e o arquivo-fonte de cada uma.
4. Os títulos-asserção de cada slide de conteúdo.
5. A ata de validação, no formato acima.
6. O resultado da checagem de coerência entre teaser, IM e valuation.

## Próximo passo

`go-to-market` — o gate que decide se o material está pronto para ir ao mercado.

# Característica particular

Lembre-se que essa habilidade é um guia básico para a construção de um information memorandum, cada empresa e setor possui suas próprias particularidades, que devem ser abordadas.