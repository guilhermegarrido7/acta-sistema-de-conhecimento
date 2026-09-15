# Método de Auditoria ACTA

O "ACTA way of work" em auditoria interna: as regras que não se negociam, a disciplina numérica, o
modo de operar e a mecânica de cada entregável. Não é um projeto — é o método que todos os projetos
de auditoria da firma carregam.

> **Pré-requisito: instale `acta-way` antes.**
> ```bash
> claude plugin install acta-way@acta-sistema-de-conhecimento --scope user
> ```
> `aprendizado-e-historico` (abaixo) roda sobre o mecanismo de checkpoint que vive lá. O manifesto
> de plugin não tem campo de dependência — sem `acta-way` instalado, essa instrução não encontra
> nada.

## Skills

| Skill | Papel | Status |
|---|---|---|
| `metodo-auditoria` | As oito regras invioláveis, a doutrina do número exato, o ritual de aprendizado e o roteamento. Conhecimento de fundo, carrega sozinho. | ✅ |
| `bases-e-conciliacao` | Sequência obrigatória de leitura de arquivo, extração de PDF por coordenada, classificação por natureza com resíduo medido, casamento com consumo de pool, derivação de chave pelo procedimento de cadastro, bateria de testes e amostragem. | ✅ |
| `papel-de-trabalho` | Código e capa, vocabulário fechado do campo Resultado, padrão visual das abas de evidência, proibição de célula mesclada, aba Critérios e arquivamento de versões. | ✅ |
| `programa-de-testes` | Matriz de testes, taxonomia fechada de tipo de teste, régua de amostragem, separação desenho × efetividade, registro de riscos e os cinco conceitos que não se misturam. | ✅ |
| `redacao-de-achados` | Pontuação e voz, fórmulas consagradas, estrutura Condição/Risco/Recomendação, severidade, codificação de prefixos, consolidação de entrevistas e plano de ação. | ✅ |
| `relatorio-de-auditoria` | Geometria e identidade do deck, padrão de tabela, gráficos nativos, operações seguras de slide, estrutura canônica e o relatório detalhado em Word. | ✅ |
| `aprendizado-e-historico` | Ledger do engajamento, promoção de lição a método. | ✅ |

## Como se relaciona com os plugins de processo

Este plugin traz a **mecânica** (como fazer o entregável). Cada processo auditado é um plugin de
**domínio** próprio — `acta-revenue-assurance`, `acta-auditoria-folha`, `acta-auditoria-estoques`,
`acta-auditoria-compras`, `acta-auditoria-marketing`, `acta-auditoria-producao` — que traz o *o que
testar* e orquestra as skills daqui.

## Nada de caminho de máquina

Esta skill não contém caminho literal nenhum. Usa os placeholders de
[CONVENCOES.md](../../CONVENCOES.md) e a regra **R8**: se o insumo necessário não foi informado,
pergunte antes de agir — nunca deduza pelo nome do arquivo, nunca escolha "o mais recente", nunca
assuma a pasta padrão.

Pessoas aparecem por papel (*o auditor responsável*, *o sócio responsável*, *o revisor de WP*), não
por nome. O catálogo de armadilhas de ambiente Windows/OneDrive vive em `acta-way`, skill
`ambiente-tecnico`.
