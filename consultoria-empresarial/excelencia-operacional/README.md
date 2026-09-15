# Excelência Operacional

Modelagem e otimização de processos ponta a ponta, incluindo os ciclos PTP, OTC, RTR e HTR: mapeamento, gargalos, redesenho e indicadores.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`) — é onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Status: completo.** As 7 skills do ciclo de vida de um mandato de mapeamento estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz um mandato de mapeamento e redesenho de ciclo (PTP, OTC, RTR, HTR) do início ao fim:
classificação do ciclo nos cinco níveis e codificação, coleta estruturada e entrevistas AS IS,
desenho do To-Be com regras de negócio codificadas, oportunidades de melhoria priorizadas por valor
× complexidade, SLA e indicadores com definição operacional, workshop de homologação com o cliente,
e a consolidação no Manual de Processos e Regras de Negócio aprovado.

A inversão que define o método: **a consultoria chega ao workshop com o To-Be já desenhado**. O
cliente não desenha — ele critica e homologa. O esforço do mandato mora na véspera, e é isso que
organiza a ordem das skills abaixo.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `taxonomia-de-processos` | 1 | A régua: os cinco níveis de modelagem, a notação BPMN simplificada, a codificação de subprocessos e regras, e a matriz de processos com o fora de escopo em amarelo. |
| `coleta-e-diagnostico` | 2 | Checklist de oito blocos com formato esperado e fonte por cargo, e as entrevistas AS IS — o insumo que permite desenhar antes do workshop. |
| `fluxo-e-regras-de-negocio` | 3 | Fluxograma To-Be com raias, marcadores `M`, SLA inline e interfaces, e a tabela de regras codificadas com descrição sugerida × aprovada. |
| `oportunidades-e-quick-wins` | 3 | Tabela de seis colunas com pilar O&P/P&C, matriz valor × complexidade, e a declaração explícita de ausência quando não há oportunidade. |
| `sla-e-indicadores` | 3 | Quadro de duas colunas — sugestões × definição workshop — com indicador principal, secundários e governança por cargo. |
| `workshop-de-mapeamento` | 4 | O dia de homologação: seis elementos por subprocesso, mecânica do A3 em quatro zonas, dois grupos, três facilitadores. |
| `manual-de-processos` | 5 | O entregável final: capítulo por subprocesso, versionamento `vPósWS` → `v1.0`, aprovação formal e o acordo de sustentação que evita o manual de gaveta. |

## Fluxo típico

`taxonomia-de-processos` → `coleta-e-diagnostico` → (`fluxo-e-regras-de-negocio` +
`oportunidades-e-quick-wins` + `sla-e-indicadores`, em paralelo) → `workshop-de-mapeamento` → volta
às três da etapa 3 para incorporar a crítica e reemitir como `vPósWS` → `manual-de-processos`.

As três skills da etapa 3 são um bloco: elas produzem o material que vai para a sala e se fecham
depois dela. Um mandato típico roda quatro workshops, e o ciclo etapa 3 → etapa 4 → etapa 3 se
repete uma vez por workshop. `manual-de-processos` só abre quando todos os subprocessos estão
homologados.

## Convencoes

Este plugin segue as convencoes do repositorio, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Metodo transversal vive em `acta-way`; metodo da pratica, em `acta-metodo-consultoria`
ou `acta-metodo-auditoria`. Nao repita aqui o que ja esta la.
