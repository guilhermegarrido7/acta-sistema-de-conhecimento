# Perfis de Acesso e Segregação de Funções

Revisão de segregação de funções e de perfis de acesso: a matriz função contra função, o catálogo
dos conflitos que decidem o resultado, o ciclo de vida do acesso da concessão à revogação, e o
controle compensatório para o conflito que não se resolve por falta de gente.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Segundo pré-requisito: `acta-metodo-auditoria`**, também declarado como dependência. As regras invioláveis, a doutrina do número
> exato, a regra R8, o papel de trabalho, o programa de testes com a régua de amostragem e a redação
> de achados vivem lá e **não são repetidos aqui**. Cada skill manda carregá-lo antes.
>
> **Fronteira com `acta-controles-internos`:** a skill `itgc` de lá cobre os domínios de ITGC de
> forma geral, e a tabela de pontos de controle de acesso do §2 dela continua valendo. Este plugin é
> o aprofundamento da camada de acesso e segregação, e não reescreve o ITGC.
>
> **Status: completo.** As 4 skills estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Apura em que medida a Companhia consegue impedir que uma única pessoa feche sozinha um ciclo de
desembolso, de estoque ou de resultado. Monta a matriz na camada de função e a traduz para transação,
perfil e usuário, separando o conflito que existe no desenho do conflito que existe na base. Roda
cada célula como consulta a 100%, classifica cada ocorrência em intra-perfil e inter-perfil, e
consolida a base por pessoa quando há mais de um sistema em escopo. Testa o ciclo de vida do acesso
ponta a ponta: a árvore de chamados da concessão, a revogação do perfil de origem na transferência,
a revisão periódica pela revogação que ela produziu, e a revogação no desligamento medida em dias a
partir da rescisão. Inventaria usuário genérico, conta de serviço e prestador, e levanta o acesso
privilegiado ao banco antes de qualquer outra coisa. Fecha com o compensatório desenhado em seis
campos e o registro da concentração que sobra como risco aceito, com quem aceita por cargo, prazo e
gatilho de reavaliação.

O que é próprio deste plugin: as quatro camadas entre função e usuário, a distinção entre conflito
no papel e conflito efetivo (inclusive a segregação por acidente), as quatro dimensões de escopo que
separam achado de falso positivo, a régua de severidade por quem fecha o ciclo sozinho, o catálogo
codificado `SOD.<NN>`, a dupla medida de tempestividade da revogação, e as quatro saídas que se
esgotam antes de propor um compensatório.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `matriz-de-sod` | Desenho | As quatro camadas entre função e usuário, a matriz triangular com dano escrito e severidade por célula, conflito no papel contra conflito efetivo, as quatro dimensões de escopo, e o caminho de seis passos que transforma cada célula em consulta a 100% sobre a base. |
| `conflitos-criticos` | Conteúdo | O critério de quem fecha o ciclo sozinho, os cinco pares que decidem a maior parte da perda (inclusive a variante de alteração de dado bancário), os três pares que vivem dentro de TI, os dois filtros de aplicabilidade e escopo, e a redação do achado sobre capacidade e nunca sobre conduta. |
| `perfis-e-acessos` | Teste | Os quatro atos numerados do ciclo de acesso, a árvore de chamados da concessão, a modificação na transferência de área, os três testes da revisão periódica, a dupla medida de prazo na revogação, o cruzamento de vínculo a 100%, e o tratamento de usuário genérico, conta de serviço e acesso privilegiado. |
| `mitigacao-e-monitoramento` | Remediação | As quatro saídas mais baratas antes do compensatório, o que não é compensatório, o desenho de seis campos, as cinco exigências da revisão independente de log, a exceção declarada com gatilho e limite, e o registro da concentração como risco residual aceito. |

## Fluxo típico

`perfis-e-acessos` primeiro, na parte do corte de acesso privilegiado ao banco e do cruzamento de
vínculo, porque ambos mudam a conclusão de todo o resto → `matriz-de-sod` (funções em escopo, matriz,
mapa função para transação) → `conflitos-criticos` (o catálogo filtrado pelo mandato e os pares do
setor) → o restante de `perfis-e-acessos` (concessão, modificação, revisão periódica, desligamento) →
`mitigacao-e-monitoramento` para o que não se resolve por redistribuição.

A ordem tem uma razão prática. Usuário ativo sem vínculo vigente contamina toda contagem de
conflito, e o corte é barato; rodá-lo depois obriga a refazer os números. E uma única conta com
privilégio administrativo no banco que também transaciona no negócio invalida a conclusão sobre a
base inteira, então ela se levanta antes de qualquer análise de perfil.

Ao fechar, os achados vão para `acta-metodo-auditoria:redacao-de-achados`, a agregação com os
controles de negócio que dependem do acesso vai para
`acta-controles-internos:deficiencias-e-severidade`, e o estado do engajamento vai para o checkpoint
de `acta-way`.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-auditoria`. Não repita
aqui o que já está lá, em particular a doutrina do número, o tratamento de bases, a estrutura do
papel de trabalho, a taxonomia de tipo de teste e a régua de amostragem, e a calibração de
severidade.

Nome de cliente e nome de pessoa não entram em skill, e neste domínio a regra é mais exigente do que
em qualquer outro, porque o resultado do teste é uma lista de gente. O conflito se descreve por
matrícula e cargo, o dono de controle se nomeia por cargo, e o achado se escreve sobre o que a
configuração permite, nunca sobre o que alguém fez. Vale integralmente
`acta-way:anonimizacao-e-lgpd`. Códigos de controle e códigos `SOD.<NN>` citados nas skills são
exemplo de codificação estável, e a numeração do mandato se confirma contra a biblioteca vigente do
cliente antes de ser usada.
