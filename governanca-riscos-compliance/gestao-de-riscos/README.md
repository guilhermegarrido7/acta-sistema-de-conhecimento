# Gestão de Riscos

Implantação de gestão de riscos: o Dicionário de Riscos da ACTA como taxonomia fechada, declaração
de apetite e tolerância, avaliação de impacto e probabilidade com escalas ancoradas, matriz e mapa
de calor, planos de resposta com dono e prazo, e o monitoramento que mantém o processo vivo depois
que o consultor sai.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Plugins vizinhos, quando o mandato exigir:** `acta-controles-internos` traz a matriz formal de
> riscos e controles, o walkthrough e a distinção entre desenho e efetividade, que é o que decide se
> um controle pode ser considerado na avaliação residual. `acta-metodo-auditoria` traz o código de
> risco por processo, o papel de trabalho e a régua de amostragem. Nada disso é repetido aqui.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Implanta gestão de riscos em empresa que, na maioria dos casos, nunca teve nenhuma: classifica o
risco no vocabulário fechado da casa, revela o apetite que a Companhia já pratica sem nunca ter
escrito, avalia impacto e probabilidade em escalas ancoradas em capacidade financeira, posiciona o
resultado numa matriz cortada pela linha de apetite, converte o que está acima dela em resposta com
dono e prazo, e instala o indicador antecedente e a cadência que fazem o processo continuar rodando
sem o consultor.

O ativo central é o **Dicionário de Riscos da ACTA**: quatro componentes, oito grupos e 52
categorias numeradas, já em uso na classificação de risco de terceiro em due diligence. Ele é o que
torna dois trabalhos da casa comparáveis entre si, e o mesmo trabalho comparável consigo mesmo no
ano seguinte.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `taxonomia-de-riscos` | Identificação | O Dicionário de Riscos da ACTA em `references/`, as quatro perguntas de classificação na ordem que evita empate, os seis empates que aparecem toda vez, a regra de extensão e o mapa de para quando o cliente já tem taxonomia própria. |
| `apetite-e-tolerancia` | Régua | Apetite por componente com linha vermelha obrigatória, tolerância com métrica, limite, fonte do número e gatilho, e as seis fontes que revelam o apetite praticado quando o cliente nunca declarou nada. |
| `avaliacao-impacto-probabilidade` | Avaliação | Escala de impacto em valor e em percentual de EBITDA, probabilidade ancorada em frequência, os quatro mecanismos contra a concentração no meio da escala, e o nível Limitação de Escopo. |
| `matriz-e-mapa-de-calor` | Posicionamento | A grade 4x4 por zonas em vez de produto, a linha de apetite por componente, as quatro leituras da seta entre inerente e residual, os cinco erros de construção e o teste de descarte. |
| `planos-de-resposta` | Resposta | Aceitar, mitigar, transferir e evitar, as colunas obrigatórias inclusive na aceitação, os quatro testes de suficiência contra a tolerância, e por que o plano não sai do papel. |
| `monitoramento-e-kri` | Monitoramento | Antecedente contra consequente com exemplos por categoria, os cinco critérios de KRI utilizável, o gatilho de três faixas, os três ritmos de cadência e o que o cliente precisa ter quando o consultor sair. |

## Fluxo típico

`taxonomia-de-riscos` (o vocabulário, e o mapa de para se o cliente já tinha o dele) →
`apetite-e-tolerancia` (a régua, revelada da prática quando não estiver declarada) →
`avaliacao-impacto-probabilidade` (as escalas e as duas avaliações, inerente e residual) →
`matriz-e-mapa-de-calor` (a grade e a linha de corte) → `planos-de-resposta` (dono, prazo e o teste
de suficiência) → `monitoramento-e-kri` (o indicador, o gatilho e a cadência).

A ordem não é negociável em dois pontos. O apetite vem **antes** da avaliação, porque a escala de
impacto se ancora na capacidade financeira que a declaração de apetite fixa; avaliar antes produz
notas sem régua, e refazer depois custa o workshop inteiro. E o monitoramento vem **depois** do
plano, porque o KRI que importa é o que vigia o controle cuja falha atravessa a linha de apetite, e
essa lista só existe quando o plano já foi escrito.

Na reavaliação anual o ciclo reabre em `taxonomia-de-riscos`, com os riscos novos que o ano revelou.

## Onde este plugin encosta em outros

Na avaliação de risco de terceiro, o dicionário é aplicado parcialmente e de forma declarada, com o
nível Limitação de Escopo para o que não se conseguiu avaliar; o restante do método de due diligence
de terceiro vive em `acta-programa-de-integridade`. A efetividade de um controle, necessária para
avaliar risco residual, se apura com `acta-controles-internos`. O risco codificado por processo
auditado, com matriz de risco por controle e por teste, vive em `acta-metodo-auditoria` e nos
plugins de ciclo.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`. Não repita aqui o que já está lá.

Nome de cliente e nome de pessoa não entram em skill, e neste plugin isso tem peso extra: o
dicionário nasceu em entregável de cliente, e o template do mapa carrega no cabeçalho o nome de quem
foi o primeiro a usá-lo. Escreva "o cliente", "a Companhia", "o terceiro avaliado", "o fornecedor".
Vale integralmente `acta-way:anonimizacao-e-lgpd`.

Os números das escalas das skills são **exemplo de ancoragem**, não padrão de mercado: a faixa de
impacto se calibra contra a capacidade financeira do mandato, e o limite de tolerância contra o
covenant, o histórico ou a decisão registrada daquele cliente.
