---
titulo: De onde vem o método de analytics
---

## Analytics financeiro de consolidação, não governança de dados

Este plugin trata do que a ACTA de fato entrega em mid-market: **analytics financeiro de
consolidação** — pegar o dado cru e disperso de um grupo, tratá-lo, validá-lo, reorganizá-lo na
visão gerencial, consolidar as empresas eliminando o intercompany, e chegar a uma recomendação. Não é
um programa de governança de dados corporativa, que é o que um projeto DAMA-DMBOK completo descreve e
o que o mid-market raramente pede.

A distinção importa para o escopo. A maturidade de dados de uma empresa média brasileira é baixa — o
dado vive em planilha, PDF e extrato, sem padrão — e o valor que a consultoria entrega está em
transformar esse dado em decisão, não em implantar um framework de governança que a empresa não tem
estrutura para sustentar. O DAMA entra como âncora de **qualidade e governança** onde cabe (o
vocabulário de completude, consistência, rastreabilidade), não como o produto.

## O ciclo: CRISP-DM, com a pergunta antes do dado

A espinha dorsal é o CRISP-DM — o ciclo consagrado de projetos de dados: entender o negócio, entender
e preparar o dado, modelar, avaliar, operacionalizar. A casa aplica uma inflexão: **a pergunta de
negócio vem antes do dado, sempre.** O erro que mata o projeto de analytics é começar pelo que o dado
permite em vez da decisão que o cliente precisa tomar. Por isso a primeira skill fecha a pergunta e o
escopo antes de qualquer base ser aberta, e a última volta a ela com a recomendação.

## A lente AI-first

O que distingue o analytics AI-first do tradicional é a camada de execução. Tratamento, validação,
reconciliação e consolidação são trabalho determinístico de alto volume — exatamente o que tornava
analytics caro e lento em mid-market, e exatamente o que o agente executa. O humano sai do trabalho
mecânico e fica no ponto de julgamento: a pergunta de negócio, a classificação ambígua, a diferença
que não reconcilia, a recomendação. E quando o trabalho é recorrente, a decisão deixa de ser refazer
à mão todo mês e passa a ser operacionalizar um pipeline que roda sozinho, com o humano revisando a
saída. O deliverable, no fim, é a decisão — não a ferramenta.

## Fontes

- CRISP-DM (Cross-Industry Standard Process for Data Mining) — ciclo de referência de projetos de
  dados, de origem IBM.
- DAMA-DMBOK 2.0 (DAMA International) — áreas de conhecimento de gestão de dados; citável em
  consultoria com atribuição. Usado como âncora de qualidade e governança, não como escopo.
- McKinsey, *Three keys to a data-driven strategy* (Barton & Court) e *The data-driven enterprise of
  2025* — a lógica de escolher o dado certo, construir o modelo e transformar a decisão.

> Conteúdo das fontes externas foi reescrito para conformidade com restrições de licenciamento. A
> metodologia da casa combina essas referências com o ajuste a mid-market brasileiro, validado em
> engajamento de analytics financeiro de grupo multiempresa.
