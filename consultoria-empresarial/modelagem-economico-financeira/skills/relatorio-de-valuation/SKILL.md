---
name: relatorio-de-valuation
description: Estruturar e produzir o relatório de valuation em PowerPoint na identidade visual ACTA — capítulos, títulos-asserção, paleta e tipografia da casa, convenções de tabela/gráfico/nota de rodapé. Acionar ao montar ou revisar o deck de valuation, ao definir a storyline do relatório, ao aplicar o design ACTA nos slides, ou ao rodar o checklist de qualidade visual antes de entregar.
---

# Relatório de valuation — a identidade visual e a arquitetura do documento

## Papel desta skill

Direciona a estrutura, o tom e a identidade visual do relatório. Redige texto e monta slide quando
pedido. Não inventa número: todo dado que aparece no relatório vem do modelo (skills desta pasta) ou
de fonte citada — esta skill organiza a apresentação, não o cálculo.

O relatório de valuation da ACTA segue um padrão de casa, testado em mandatos reais. Reaproveitá-lo
integralmente é o objetivo — desviar da estrutura sem motivo é o erro mais comum.

## O que o relatório é, e o que ele não é

É o documento que **converte o modelo em argumento**. Cada capítulo tem um trabalho: situar o leitor
(sumário), justificar por que a empresa cria valor (drivers), expor as premissas de forma auditável
(premissas) e mostrar o número com a faixa de confiança em volta dele (resultados). Não é um dump de
planilha em slide — toda tabela e todo gráfico está ali para sustentar uma frase específica do
título.

## Identidade visual ACTA

> Estes tokens foram extraídos de um deck de valuation real da casa. Reconcilie com
> `acta-way:identidade-visual` quando essa skill for escrita — por ora, esta é a fonte de verdade
> para relatório de valuation.

**Formato.** Slide widescreen 13,33 x 7,5 pol (16:9). Título no topo do slide (faixa de ~0,7 pol de
altura, largura total, 20pt). Rodapé de fontes e notas fixo no fim do slide (texto pequeno, cinza).

**Paleta (tema "ACTA" do PowerPoint):**

| Papel | Hex | Uso |
|---|---|---|
| Cor primária da casa | `#167D73` (teal) | Títulos de destaque, chips numerados, barras de ênfase, texto-chave dentro de caixas de metodologia |
| Navy secundário | `#334E6F` | Séries de gráfico secundárias, elementos de dados alternativos ao teal |
| Azuis claros (sequência) | `#87AFC7` / `#A3BFD9` / `#C5D3E8` | Paleta sequencial para gráficos com múltiplas séries ou faixas |
| Verde de apoio | `#5A982C` | Uso pontual — indicador positivo, nunca cor primária de gráfico |
| Texto de corpo | `#262626` / `#333333` | Parágrafos e texto corrido |
| Texto secundário / legendas | `#4A5560` | Texto de apoio dentro de cartões (ex.: linhas descritivas de transação) |
| Notas e fontes | `#75787B` / `#777777` | Rodapé de fonte, notas de rodapé, texto de menor hierarquia |
| Rótulo sobre fundo escuro | `#FFFFFF` | Texto dentro de chips/pills na cor primária |

**Tipografia.** Fonte única da casa: **Rawline**, em pesos conforme o papel do texto — `Rawline
SemiBold` para títulos de bloco, rótulos-chave e ênfase dentro de parágrafo; `Rawline` peso normal
(referida como "Rawline (Body)") para corpo corrido. Nunca misturar com outra família tipográfica.

**Divisores de capítulo.** Cada capítulo (numerado em algarismo romano — I., II., III., IV., ...)
abre com um slide dedicado: numeral à esquerda, título do capítulo centralizado, fundo de capa
da casa. Não existe conteúdo analítico nesse slide além do numeral e do título.

## Estrutura de capítulos

A ordem abaixo é o padrão de casa para um valuation completo (DCF + múltiplos + transações
precedentes). Adapte a quantidade de slides por capítulo ao mandato — a ordem e a função de cada
capítulo não mudam.

### Abertura (antes do capítulo I)

1. **Capa** — nome do projeto/codinome do mandato, "Apresentação para [Administração / Comprador /
   Comitê]", mês e ano.
2. **Aviso legal** — três blocos fixos, sempre nesta ordem: *Natureza e finalidade do documento*
   (para quem e para qual finalidade o relatório foi produzido), *Base de informações* (a ACTA não
   assume responsabilidade independente pela verificação das informações recebidas do cliente),
   *Limitações da valoração* (o valor reflete condições de mercado e informações disponíveis na
   data; resultados futuros podem divergir). Fecha com bloco de contato do sócio responsável.
3. **Sumário do valuation** — mapa de navegação do documento inteiro em um slide: uma linha por
   capítulo (Sumário executivo / Drivers de valor / Premissas / Resultados), cada uma com uma frase
   de uma linha do que aquele capítulo entrega. É o único lugar do documento que descreve a
   estrutura em vez de argumentar um número.

### Capítulo I — Sumário executivo

Um único slide-síntese: título-asserção com a conclusão central do valuation, caixa lateral com a
metodologia aplicada (ex.: DCF em dois estágios — ver `valor-terminal`), e uma barra de conclusão no
rodapé do slide com a faixa de valor e o ponto central em uma frase corrida. Este é o slide que um
leitor apressado lê sozinho e sai com a conclusão certa.

### Capítulo II — Drivers de geração de valor

Sequência recomendada:

1. **Framework** — o que é ROIC e por que ROIC x crescimento determina a criação de valor (ver
   `fundamentos-koller`). Ilustrar com matriz 2x2 (ROIC alto/baixo x crescimento alto/baixo) e a
   leitura de cada quadrante.
2. **Duração da vantagem** — o Competitive Advantage Period: o que sustenta retorno acima do WACC ao
   longo do tempo (ver `diagnostico-de-roic`, seção de CAP).
3. **Benchmarking** — lista/tabela de comparáveis selecionados, com a fonte de cada um.
4. **Leitura comparativa** — gráfico de ROIC e de crescimento do alvo contra os comparáveis, com
   painel lateral "Análises e Perspectivas" interpretando a posição do alvo (por que está acima,
   abaixo, ou na média — nunca apenas mostrar o gráfico sem leitura).
5. **A tese do alvo** — o que sustentou o ROIC observado historicamente e qual é o vetor de expansão
   ou manutenção daqui para frente. Aqui a skill `projecao-de-mercado-e-equity-story` alimenta o
   argumento.

### Capítulo III — Premissas

Um slide por bloco de premissa, sempre no formato "o que se projeta + a lógica/fórmula + a tabela ou
fonte que sustenta":

- **Mercado/TAM** — indicador histórico e projetado (população, volume de mercado, ou o driver macro
  relevante ao setor), com a fonte declarada.
- **Receita e capacidade** — drivers de volume e preço por cenário (otimista/base/pessimista, ver
  `projecao-e-cenarios`) e capacidade instalada por linha, com observação de gargalo ou expansão
  planejada.
- **Marco regulatório ou contratual**, quando existir uma condicionante externa relevante à receita
  (licença, certificação, regime tributário específico) — tabela de requisitos ou linha do tempo.
- **Tributação**, quando o regime ou uma controvérsia tributária afeta o resultado projetado.
- **Custos, despesas, CapEx e depreciação** — a lógica de escalonamento de cada linha (ver
  `projecao-e-cenarios`, Passo 2) e a tabela de percentuais ou valores de referência.
- **WACC** — tabela estruturada em duas colunas (Custo do Equity | Custo da Dívida) convergindo para
  Estrutura de Capital e WACC final (ver `custo-de-capital`).
- **Dívida, capital de giro e metodologia de valuation** — premissas de prazo médio, dívida líquida,
  e o resumo dos três métodos aplicados (DCF, múltiplos de mercado, transações precedentes) com a
  taxa/múltiplo de cada um.
- **Normalização de EBITDA** — tabela ano a ano com EBITDA contábil, ajustes por família (não
  recorrentes / pró-forma / contábeis / run-rate) e EBITDA normalizado resultante (ver
  `qualidade-de-resultados`).
- **Transações precedentes** — um cartão por transação (numerado), com adquirente/adquirida, valor,
  EV, descrição do ativo em 2-3 linhas e o múltiplo EV/EBITDA resultante em destaque. Fechar com
  disclaimer explícito do critério de seleção da amostra (ver skill `transacoes-precedentes` do
  plugin de M&A).

### Capítulo IV — Resultados

Sequência fixa:

1. **DRE** — tabela histórico + projetado, com dois gráficos de coluna (ex.: receita e EBITDA).
2. **Análise de ROIC** — tabela com EBIT, NOPAT, capital investido médio, ROIC, WACC e spread
   ano a ano; gráfico de linha ROIC vs. WACC e gráfico de coluna do capital investido.
3. **Capital investido e fundos investidos** — a reconciliação entre a ótica operacional e a ótica
   de financiamento, com a identidade contábil explicitada linha a linha (ver `fundamentos-koller`,
   seção 2) e a nota sobre a premissa de fechamento de balanço nos anos projetados.
4. **Fluxo de caixa livre** — tabela do FCFF, dois gráficos (FCFF isolado e FCFF vs. EBITDA), e — se
   o modelo usa dois estágios — uma caixa explicando por que o período de convergência foi incluído
   (ver `valor-terminal`).
5. **Sumário do valuation** — o slide mais denso do documento: tabela de cenário x método (DCF,
   múltiplos, transações — conservador/base/otimista/média), tabela de sensibilidade (WACC x g), e
   football field chart consolidando as faixas dos três métodos com nota de rodapé explicando a
   origem de cada faixa (ver `triangulacao-e-faixa`).

### Fechamento

Slide de encerramento no padrão da casa (mesma família de capa do slide 1, sem conteúdo analítico).

## Títulos-asserção

Nenhum título de slide de conteúdo é um rótulo neutro ("ROIC", "WACC", "Transações precedentes"). Todo
título é uma frase que já entrega a conclusão do slide — o leitor que só lesse os títulos do
documento inteiro sairia com o argumento completo. Padrão:

> `<Achado ou dado central> + <por quê / o que isso implica>`

Exemplos do padrão (generalizados): "Dois drivers, uma equação: ROIC e crescimento são os
principais agentes na determinação do valor da empresa"; "Peers globais evidenciam trajetória
inevitável: [o padrão setorial observado]"; "[Fator X] sustentou ROIC N vezes acima do benchmark
setorial". Esta é a mesma doutrina de título-asserção já usada nas skills `teaser` e
`information-memorandum` do plugin de M&A — o vocabulário do documento de valuation e o do documento
de venda devem soar como a mesma casa.

## Convenções de tabela, gráfico e nota

- **Tabela histórico + projetado**: anos históricos sem sufixo, anos projetados com sufixo `E`
  (2026E, 2027E, ...). Nunca misturar formatos de casas decimais dentro da mesma coluna.
- **Nota de rodapé numerada** quando uma cifra ou afirmação depende de fonte externa ou de um
  cálculo não óbvio — "Nota (1): ..." no rodapé do slide, nunca dentro do corpo do texto.
- **Fonte sempre citada** no rodapé fixo do slide (canto inferior), mesmo quando repetida entre
  slides consecutivos. Hierarquia de confiabilidade da fonte segue a mesma régua da skill
  `transacoes-precedentes` (fato relevante > demonstração auditada > research > imprensa >
  agregador).
- **Disclaimer explícito** sempre que houver uma limitação de comparabilidade (amostra pequena,
  comparável de escala diferente, dado estimado e não auditado). Declarar a limitação no próprio
  slide é doutrina da casa — omitir para parecer mais robusto é o erro que a diligência do comprador
  expõe primeiro.
- **Caixa de metodologia**: bloco lateral com título em `Rawline SemiBold` na cor primária e
  parágrafos curtos (2-4 frases) explicando o método antes de mostrar o número — nunca apresentar um
  resultado (ex.: valor terminal, WACC) sem a caixa que explica como ele foi obtido.

## Tom e voz

Terceira pessoa institucional ("Este relatório foi elaborado...", nunca "nós elaboramos"). Denso e
factual — números com casas decimais consistentes, nunca arredondamento que esconda o driver.
Nenhum adjetivo sem número que o sustente ("crescimento robusto" não passa sem o número ao lado).
Quando um resultado é ruim ou um dado é atípico, o relatório diz isso explicitamente em vez de
suavizar — a mesma régua de honestidade que a skill `qualidade-de-resultados` aplica ao EBITDA
normalizado vale para o texto do relatório inteiro.

## Checklist antes de entregar

1. Todo título de slide de conteúdo é uma asserção, não um rótulo.
2. Todo número que aparece em mais de um slide (ex.: WACC, faixa de valor, múltiplo aplicado) é
   idêntico em todos os lugares onde aparece — a mesma verificação de coerência da skill
   `transacoes-precedentes`, aplicada ao documento inteiro.
3. Toda tabela e gráfico tem fonte no rodapé; toda cifra dependente de terceiro tem a fonte
   citada, não "fontes diversas".
4. Toda limitação relevante (amostra pequena, dado estimado, comparável parcialmente aderente) tem
   disclaimer explícito no slide correspondente.
5. A paleta e a tipografia (Rawline / Rawline SemiBold) são as únicas usadas no documento.
6. O número de divisores de capítulo bate com o que o slide de "Sumário do valuation" prometeu.
7. Antes de renderizar via COM, consultar `acta-way:ambiente-tecnico` — armadilhas conhecidas de
   geração de PPTX no ambiente Windows/OneDrive da casa.

## O que entregar

1. O deck completo na estrutura de capítulos acima, com os slides efetivamente necessários ao
   mandato (nem todo mandato tem marco regulatório ou receita de créditos de terceiro — omita o que
   não se aplica, mas nunca pule Aviso legal, Sumário do valuation, Sumário executivo e o Sumário do
   valuation final).
2. O checklist acima, rodado e confirmado antes da entrega.

## Próximo passo

Nenhum — este é o artefato final do mandato de valuation. Se o relatório expuser uma inconsistência
no modelo, volte para `revisao-de-modelo` antes de corrigir o slide.
