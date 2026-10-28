# Dados e Analytics

Analytics financeiro de consolidação: diagnóstico e escopo, ingestão e tratamento de base crua,
qualidade e validação, reclassificação gerencial, consolidação multiempresa e intercompany, modelo
analítico e visualização, e insight pronto para decisão.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Segundo pré-requisito: `acta-metodo-consultoria`**, também declarado como dependência. Analytics é um projeto de consultoria cujo
> insumo é dado. A hierarquia de autoridade entre fontes, a âncora de validação, a reconstrução de
> base a partir do dado bruto, a planilha-mestre com rastreabilidade e a defesa técnica do número
> vivem lá e **não se repetem aqui**. Cada skill manda carregá-lo antes.
>
> **Status: completo.** As 7 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Transforma o dado cru e disperso de uma empresa ou de um grupo em uma decisão. Fecha a pergunta de
negócio e o escopo antes de tocar no dado; traz a base crua ao formato analisável normalizando moeda,
data e formato e classificando o lançamento pela descrição; prova que a base é confiável checando
completude e consistência e reconciliando contra a contabilidade; reorganiza o dado contábil na visão
gerencial sem perder o total; consolida o grupo eliminando as transações intercompany que inflam o
todo; monta o modelo analítico que lê por qualquer recorte e o painel que a diretoria consulta; e
fecha na recomendação acionável, separando o que o dado prova do que é hipótese.

O que é próprio deste plugin: o padrão de tratamento rastreável e reversível, a reconciliação contra
fonte autoritativa como porta de saída da base, a reclassificação que preserva o total, a
identificação de intercompany pela contrapartida espelhada, o modelo de base de fato única da qual as
visões derivam, e a escada dado → insight → recomendação com dono humano.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `diagnostico-e-escopo-de-dados` | Entrada | A pergunta de negócio antes do dado, o inventário de fontes, a viabilidade pela granularidade e a maturidade de dados para dimensionar o esforço. |
| `ingestao-e-tratamento` | Preparação | As quatro normalizações (moeda, data, formato, estrutura), a classificação por descrição com dicionário, o tratamento de duplicata e estorno, e o ETL agêntico. |
| `qualidade-e-validacao` | Validação | Completude, consistência e a reconciliação contra fonte autoritativa com consumo de pool; o número que não fecha não se publica. |
| `reclassificacao-gerencial` | Análise | Do plano de contas societário para a visão gerencial com o total invariante, a separação operacional/financeiro, e as armadilhas da conta. |
| `consolidacao-e-intercompany` | Análise | A sequência da consolidação, a identificação do intercompany pela contrapartida espelhada, a eliminação pelas duas pontas e o que ela revela. |
| `modelo-analitico-e-visualizacao` | Entrega | A base de fato única, o modelo por recorte, o painel orientado à decisão, e a decisão de automatizar o pipeline recorrente. |
| `insight-e-recomendacao` | Fechamento | A escada dado → insight → recomendação, a disciplina da causa (o que o dado mostra × o que prova), e a recomendação com dono humano. |

## Fluxo típico

`diagnostico-e-escopo-de-dados` (pergunta e escopo) → `ingestao-e-tratamento` (base crua →
analisável) → `qualidade-e-validacao` (prova de confiabilidade) → `reclassificacao-gerencial` (visão
de gestão) → `consolidacao-e-intercompany` (quando for grupo) → `modelo-analitico-e-visualizacao`
(modelo e painel) → `insight-e-recomendacao` (a decisão).

A ordem tem uma trava: **nenhum número passa de `qualidade-e-validacao` sem reconciliar.** Analisar,
reclassificar ou consolidar base não validada propaga o erro para todo o resto. E a pergunta de
negócio da primeira skill é a mesma que a última responde — o ciclo fecha onde abriu.

Ao encerrar, o que se aprendeu (dicionário de classificação, armadilha de consolidação, fonte que não
reconcilia) realimenta o método, e o estado vai para o checkpoint de `acta-way`. Se o trabalho é
recorrente, a decisão de pipeline mantém o valor vivo depois da entrega.

## Fronteiras com outros plugins

- **`acta-modelagem-economico-financeira`** — valuation e projeção de longo prazo vivem lá. Aqui se
  lê o que aconteceu por recorte; lá se projeta o futuro. A reorganização contábil de lá e a
  reclassificação gerencial daqui compartilham o princípio (separar operacional de financeiro),
  aplicado a fins diferentes.
- **`acta-planejamento-orcamentario`** — o orçamento projeta; o analytics lê o realizado. O painel
  realizado × orçado usa a leitura daqui e a projeção de lá.
- **`acta-pesquisa-salarial:dashboard-powerbi`** — a construção técnica do painel em Power BI (modelo,
  DAX, publicação) está detalhada lá; aqui fica a decisão analítica do que o painel responde.
- **`acta-metodo-auditoria:bases-e-conciliacao`** — o casamento de bases com consumo de pool é o
  mesmo princípio; quando o mandato de analytics cruzar com auditoria, a mecânica de lá se aplica.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-consultoria`. Não repita
aqui o que já está lá, em particular a hierarquia de fontes, a âncora de validação, a planilha-mestre,
o tratamento de anomalia por flag e override, e a defesa técnica do número.

Nome de cliente e nome de pessoa não entram em skill. Empresas de um grupo aparecem por papel
(*a holding*, *a controlada*, *a SPE*), categorias e CNPJs por descrição genérica. Estrutura de dados
citada nas skills (famílias gerenciais, padrões de intercompany, classes de lançamento) é **exemplo
de estrutura**, não padrão de mercado: o plano de contas e as categorias reais são os do mandato,
lidos da contabilidade do cliente.
