# Estrutura do Manual de Processos e Regras de Negócio

Árvore de seções do entregável final de um mandato de mapeamento de ciclo. Ajuste o número de
capítulos ao número de subprocessos da matriz — **sem** alterar a grade interna do capítulo, que é
fixa.

## Folha de rosto

| Campo | Conteúdo |
|---|---|
| Título | Manual de Processos e Regras de Negócio — Ciclo `<PTP / OTC / RTR / HTR>` |
| Versão | `v1.0` (ou a corrente) |
| Data de aprovação | Data da última aprovação formal |
| Próxima revisão | Mês/ano — obrigatório. Sem data, a revisão nunca vence. |
| Elaboração | ACTA Advisory |
| Aprovação | Cargos aprovadores, nunca nomes |

## Parte I — Abertura

| Seção | Conteúdo |
|---|---|
| 1. Apresentação | Escopo do ciclo, o que foi mapeado, **o que ficou de fora** em texto, método em um parágrafo, data de referência dos dados. |
| 2. Como usar este manual | Para quem serve, onde encontrar uma regra pelo código, o que é e o que não é (não é POP). |
| 3. Matriz de processos e subprocessos | O índice visual. O mesmo artefato que abriu os workshops, fora de escopo marcado. |
| 4. Legenda da notação | Antes do primeiro fluxograma. Nunca em anexo. |
| 5. Glossário e tabela de prefixos | Termos do ciclo; subprocesso → prefixo, sem colisão. |

## Parte II — Capítulos por subprocesso

Um capítulo por subprocesso da matriz. Grade fixa, mesma ordem, sempre:

| # | Seção do capítulo | Observação |
|---|---|---|
| 1 | Objetivo | A redação **APROVADA** no workshop. Uma frase. |
| 2 | Entradas e saídas | Documentos, sistemas, entregáveis. Subprocesso vizinho nomeado dos dois lados. |
| 3 | Atores | Três papéis de atendimento: solicitante/fornecedor, atendente/resolvedor, cliente/interessado. Sempre por cargo. |
| 4 | Fluxograma To-Be `vPósWS` | Raias em caixa alta, marcadores `M`, SLA inline, conectores, interfaces. |
| 5 | Regras de negócio | Código, nome, **descrição aprovada**, nível de importância, impacto. |
| 6 | SLA acordado | Indicador principal com definição operacional, secundários, medição e governança por cargo. |
| 7 | Oportunidades abertas | As não implantadas até o fecho, com pilar, valor e complexidade — ou a declaração de ausência. |

Quando o subprocesso não tem oportunidade mapeada, a seção 7 traz a frase explícita
**"Não foram mapeadas oportunidades de melhoria"**. Seção suprimida é ambígua.

## Parte III — Consolidados

| Seção | Conteúdo |
|---|---|
| Índice remissivo de regras | Código → subprocesso → página. Inclui as revogadas, marcadas como tal. |
| Consolidado de SLA | Todos os indicadores por dono de cargo, com frequência de apuração e o ritual onde são lidos. Uma página. |
| Consolidado de oportunidades | Matriz valor × complexidade do ciclo inteiro, com os quatro quadrantes. Insumo de roadmap. |
| Interfaces do ciclo | Mapa de quem entrega o quê a quem, entre subprocessos. É onde a checagem de fechamento fica visível. |

## Parte IV — Governança do documento

| Seção | Conteúdo |
|---|---|
| Controle de versões | Versão · data · o que mudou · quem aprovou (cargo). Uma linha por versão, desde `v1.0`. |
| Folha de aprovação | Subprocesso · cargo aprovador · data · versão aprovada · ressalvas (como itens com dono e prazo). |
| Sustentação | Dono por cargo de cada subprocesso, ciclo de revisão, gatilhos de revisão por evento, ponto de entrada único do documento. |

### Gatilhos de revisão por evento

Além do calendário, o manual é revisto quando ocorre qualquer um destes:

- mudança de sistema que afete uma etapa do fluxo;
- mudança de estrutura organizacional que altere ator ou alçada;
- achado de auditoria sobre o processo;
- meta de SLA descumprida por dois períodos consecutivos;
- implantação de oportunidade que estava na seção 7 de um capítulo.

## Anexos — homologação

Sustentam cada decisão registrada no corpo. Não se consultam no dia a dia; existem para responder
"por que ficou assim".

| Anexo | Conteúdo |
|---|---|
| A | Quadrantes de crítica do A3 por subprocesso (✚ incluir · ✕ retirar · está errado · ★ atenção–implementação), com "Nenhum" onde couber. |
| B | Consolidação de objetivos: Grupo 1 · Grupo 2 · APROVADO. |
| C | Regras de negócio: descrição sugerida × descrição aprovada. |
| D | SLA: coluna SUGESTÕES × coluna DEFINIÇÃO WORKSHOP. |
| E | Lista de ★ ATENÇÃO–IMPLEMENTAÇÃO e pendências por papel, com prazo. |

## Regras de produção

- Nome do arquivo conforme `taxonomia-de-processos`; `<Projeto>` é o codinome do mandato, nunca o
  nome do cliente.
- Identidade visual e convenções de entregável conforme `acta-way`.
- Zero identificação de pessoa física em qualquer seção: ator, aprovador e dono sempre por cargo.
- Texto revisado **antes** da submissão para aprovação, para que a atenção do gestor vá ao fluxo.
