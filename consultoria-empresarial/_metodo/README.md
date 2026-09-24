# Método de Consultoria ACTA

O "ACTA way of work" em consultoria empresarial: como um diagnóstico se abre, como a base se
reconstrói da fonte bruta, como o patamar-alvo se sustenta, como o gap vira plano de ação e como o
número se defende. Não é um projeto: é o método que todos os projetos de consultoria da firma
carregam.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`). É onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz um diagnóstico de consultoria da abertura ao acompanhamento pós-relatório. Fecha o escopo por
entidade e por recorte analítico, monta a solicitação de informações arquivo a arquivo com o layout
de campos esperado, cobra pendência por status report de vocabulário fechado, e decide a hierarquia
de autoridade entre fontes antes do primeiro cálculo. Reconstrói a demonstração de resultado a
partir do balancete e a valida contra uma âncora que o consultor não calculou. Padroniza a definição
de cada numerador e de cada denominador, trata anomalia por flag e override em vez de conserto
silencioso, e mantém tudo numa planilha-mestre com rastreabilidade célula a célula. Depois
quantifica a distância até o patamar-alvo por três famílias de referência, converte o gap em plano
de ação com 5W2H completo, acompanha a execução em ciclos versionados e documenta as decisões
metodológicas revistas e as limitações que ficaram abertas.

O que é próprio deste plugin e não existe nos plugins de projeto: a hierarquia de fontes, a âncora
de validação, as convenções da planilha-mestre, o status report de pendências, o checklist de ações
estratégicas com as quatro colunas de realizado, o vocabulário de status de implementação e o
documento de metodologia e considerações.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `diagnostico-e-entrevistas` | Abertura | Escopo, entidades e recortes analíticos fechados; a estrutura de pasta do diagnóstico; a carta de solicitação com layout por arquivo e prioridade A e B; o status report de três status; a hierarquia de autoridade entre fontes; a entrevista que começa pelo número; os alertas de qualidade de dado. |
| `mapeamento-as-is` | Situação atual | As três armadilhas do balancete, a âncora de validação e a âncora falsa, definições operacionais únicas por numerador e denominador, rótulo honesto de indicador, flag de invalidade e override documentado, e a planilha-mestre. |
| `desenho-to-be` | Patamar-alvo | As três famílias de referência, a fórmula do custo de oportunidade com `MAX(0; …)` e razão de somas, a disciplina de fonte citável e de referência rejeitada, o que fica deliberadamente fora da soma, e como o número é apresentado. |
| `priorizacao-e-roadmap` | Plano | Pilares antes de ações, a ação com 5W2H sem campo vazio, a matriz de priorização por distribuição, o tratamento dos comentários do cliente e do financiador, o sequenciamento por dependência e a aba de itens faltantes. |
| `gestao-de-mudanca` | Execução | O vocabulário fechado de três status de implementação, a reavaliação versionada por ciclo e por unidade, a cadência de reunião, o acordo de sustentação (dono, medição, ciclo) e a leitura de trajetória no encerramento. |
| `defesa-tecnica-e-limitacoes` | Defesa | O registro de decisões revistas com o efeito numérico de cada uma, a lista de limitações e itens em aberto, a revisão cruzada entre deck, planilha e documentos, a regra de precedência entre entregáveis e a estrutura do documento de metodologia. |

## Fluxo típico

`diagnostico-e-entrevistas` (escopo, recortes, solicitação, hierarquia de fontes) → `mapeamento-as-is`
(base reconstruída, âncora fechada, definições únicas, planilha-mestre) → `desenho-to-be` (referências
e quantificação do gap) → `priorizacao-e-roadmap` (pilares, ações, matriz) → `gestao-de-mudanca`
(ciclos de acompanhamento), com `defesa-tecnica-e-limitacoes` escrita **durante** o projeto e não no
fim.

A ordem não é sugestão. A âncora fechada no AS IS é o que autoriza a comparação com referência
externa do TO BE; ir ao benchmark antes disso obriga a refazer o deck. E a quantificação do TO BE é
o que permite priorizar no plano: sem o tamanho do prêmio, a priorização vira opinião.

Ao fechar, o que se aprendeu volta para o método (definição nova, armadilha nova, referência
descartada com o motivo) e o estado do engajamento vai para o checkpoint de `acta-way`.

## Como se relaciona com os plugins de projeto

Este plugin traz a mecânica que atravessa a prática. Cada tipo de projeto é um plugin próprio
(`acta-excelencia-operacional`, `acta-planejamento-estrategico`, `acta-pesquisa-salarial`), que traz
o *o que fazer* daquele mandato e assume este aqui carregado. O AS IS daqui é o retrato econômico e
operacional; fluxo, raia, notação, SIPOC e manual de processos vivem em `acta-excelencia-operacional`
e não se repetem aqui.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`: checkpoint, anonimização, identidade visual, redação e o
catálogo de armadilhas de ambiente. Não repita aqui o que já está lá.

Nome de cliente e nome de pessoa não entram em skill. Pessoas aparecem por papel (*o controller*, *o
gerente da unidade*, *o sócio responsável*), e o mesmo vale nas colunas de responsável do plano de
ação, que são preenchidas por cargo e área. Fórmulas, faixas e parâmetros citados nas skills são
exemplo de convenção, não padrão de mercado.
