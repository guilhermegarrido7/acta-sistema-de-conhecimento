# Planejamento Orçamentário

Construção e revisão de orçamento empresarial driver-based: premissas e drivers, receita por
quantidade e preço, despesa por natureza e folha, CapEx e depreciação, ciclo e consolidação
multiunidade, e análise de variação com reprevisão.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Segundo pré-requisito: `acta-metodo-consultoria`**, também declarado como dependência. O orçamento é um projeto de consultoria. A
> hierarquia de autoridade entre fontes, a reconstrução de base a partir do dado bruto, a
> planilha-mestre com rastreabilidade célula a célula e a defesa técnica do número vivem lá e **não
> se repetem aqui**. Cada skill manda carregá-lo antes.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Constrói um orçamento empresarial do zero ou revisa um existente, no método **driver-based**: cada
linha de receita e de custo se decompõe no direcionador físico que a gera (volume, preço, ocupação,
headcount) e no valor unitário, em vez de partir do ano anterior mais um percentual. Escolhe o modelo
(incremental, base zero ou híbrido) pela pergunta que o cliente precisa responder, fecha as premissas
numa aba única com fonte por célula, projeta receita por quantidade × preço, orça despesa por
natureza separando fixo de variável, orça folha pela estrutura com encargos apurados da própria
contabilidade do cliente, orça CapEx amarrando desembolso, depreciação e ativo, consolida as unidades
num P&L, balanço e caixa que fecham entre si, e acompanha o realizado decompondo cada variação no
driver que a causou, com reprevisão em rolling forecast.

O que é próprio deste plugin: a decomposição driver-based de cada linha, a formação de preço por
custo amarrada ao CMV, o fator de encargos apurado e não arbitrado, os três reflexos do CapEx
(caixa, DRE, balanço), a consolidação multiunidade com eliminação de intercompany, e a análise de
variação volume-preço-mix com o orçado congelado separado do forecast.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `premissas-e-drivers` | Entrada | A escolha de modelo (incremental/base zero/híbrido), o princípio driver-based, as premissas com fonte por célula, e a base realizada aberta por driver. |
| `orcamento-de-receita` | Receita | A estrutura de três colunas, volume por capacidade/share/carteira, preço por repasse ou por formação de custo, mix, e o cuidado da consolidação. |
| `orcamento-de-despesa-e-pessoal` | Custo | A classificação fixo/variável, a folha aberta por setor com encargos apurados, a despesa por natureza, e a base zero onde o gasto está sob suspeita. |
| `capex-e-depreciacao` | Investimento | CapEx de manutenção contra expansão, a tabela de depreciação por classe, e os três reflexos amarrados (caixa, DRE, balanço). |
| `ciclo-calendario-e-consolidacao` | Processo | Top-down/bottom-up/contraflow, o calendário montado de trás para frente, e a consolidação com padronização, eliminação de intercompany e fechamento nos três demonstrativos. |
| `analise-de-variacao-e-forecast` | Acompanhamento | A variação decomposta em volume/preço/mix, a disciplina do acompanhamento mensal, e o rolling forecast com o orçado congelado. |

## Fluxo típico

`premissas-e-drivers` (modelo, drivers, premissas, base realizada) → `orcamento-de-receita` (volume ×
preço por linha e unidade) e `orcamento-de-despesa-e-pessoal` (custo fixo/variável e folha) em
paralelo → `capex-e-depreciacao` (depois que a receita define a capacidade) →
`ciclo-calendario-e-consolidacao` (junta as unidades e fecha os três demonstrativos) →
`analise-de-variacao-e-forecast` (depois que o ano começa).

A ordem tem uma restrição: **a receita vem antes do CapEx**, porque é o volume projetado que
dimensiona a necessidade de capacidade. E o custo variável vem depois da receita, porque escala sobre
o volume orçado dela. Ao fechar o ciclo, as variações recorrentes realimentam as premissas do ano
seguinte, e o estado do engajamento vai para o checkpoint de `acta-way`.

## Fronteiras com outros plugins

- **`acta-modelagem-economico-financeira`** — valuation e o modelo integrado de longo prazo (capital
  de giro, estrutura de capital, DCF) vivem lá. Aqui é o orçamento operacional de um exercício, com o
  caixa projetado checado apenas quanto a não ficar negativo sem financiamento declarado.
- **`acta-pccr`** — desenho de cargos, carreira e tabela salarial vivem lá. Aqui a folha se orça pela
  estrutura vigente mais as decisões de quadro já tomadas.
- **`acta-dimensionamento-de-quadro`** — o cálculo do headcount ideal vive lá. Aqui a folha parte do
  quadro decidido.
- **`acta-dados-e-analytics`** — a consolidação com muitas transações intercompany e o pipeline que
  traz o realizado para a análise de variação são casos de analytics de dados.
- **`acta-planejamento-estrategico:desdobramento-e-metas`** — a meta estratégica desdobra no orçamento;
  o painel estratégico é onde a variação orçamentária encontra os indicadores de estratégia.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-consultoria`. Não repita
aqui o que já está lá, em particular a hierarquia de fontes, a reconstrução de base, a planilha-mestre
e a defesa técnica do número.

Nome de cliente e nome de pessoa não entram em skill. Pessoas aparecem por papel (*o controller*, *o
gerente da unidade*, *a diretoria*), e o mesmo vale nas colunas de responsável. Fórmulas, taxas de
depreciação, fator de encargos e cadências citados nas skills são **exemplo de convenção ou de
parâmetro**, não padrão de mercado: a vida útil, o percentual de encargos e o calendário reais são os
do mandato, lidos da contabilidade e da política do cliente.
