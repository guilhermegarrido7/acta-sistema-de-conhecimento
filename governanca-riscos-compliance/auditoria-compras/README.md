# Auditoria de Compras

Auditoria do ciclo procure-to-pay: requisição e alçada, fracionamento, cotação e seleção de
fornecedor, conflito de interesse, contrato e aditivo, recebimento, conferência de três vias,
pagamento em duplicidade e conciliação com o razão.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Segundo pré-requisito: `acta-metodo-auditoria`**, também declarado como dependência. Este plugin é de **processo auditado**. As
> regras invioláveis, a doutrina do número exato, a regra R8, o papel de trabalho, o programa de
> testes, a redação de achados e o tratamento de bases vivem lá e **não são repetidos aqui**. Cada
> skill manda carregá-lo antes.
>
> **Terceiro, quando o mandato for de controles:** `acta-controles-internos` traz a matriz formal de
> riscos e controles, o walkthrough, a distinção entre desenho e efetividade e a classificação de
> severidade de deficiência. Também não se repetem aqui.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz a auditoria do ciclo de compras ponta a ponta, seguindo o dinheiro da necessidade ao caixa que
sai e do caixa ao razão: confronta a data da requisição com a da cotação e a do pedido, testa a
alçada contra a tabela vigente na data, caça o fracionamento na população inteira em vez de na
amostra, examina a independência das propostas concorrentes, cruza quadro societário de fornecedor
com a base de pessoal, apura o crescimento dos contratos por aditivo sucessivo, testa se quem
atestou o recebimento conferiu alguma coisa, reperforma a conferência de três vias fora do sistema e
varre a base de pagamentos pelas sete variantes de duplicidade.

Traz o que é próprio do domínio e não existe no plugin de método: o ciclo PTP em sete elos com a
pergunta-mestra de cada, os sete blocos executáveis com o controle de melhor prática, os cinco pares
de bases que têm de fechar, o padrão Plano A/B/C de degradação declarada da evidência, e os quinze
riscos codificados com a matriz risco × controle × teste.

## Skills

| Skill | Elo do ciclo | Descrição |
|---|---|---|
| `ciclo-ptp` | Entrada | O ciclo em sete elos com a pergunta-mestra de cada, os sete blocos executáveis, os cinco pares de bases, o padrão Plano A/B/C e as seis perguntas que dimensionam o escopo do mandato. |
| `matriz-de-riscos-de-compras` | Transversal | Os quinze riscos codificados `PTP.R<NN>`, a matriz risco × controle × como se testa, e os cinco que decidem o trabalho (fracionamento, direcionamento, conflito de interesse, aditivo que vira contrato novo, pagamento em duplicidade). |
| `requisicao-e-alcada` | 1 e 2 | Anterioridade da requisição por carimbo de tempo, especificação escrita para um fornecedor, tabela de alçadas por versão, bloqueio demonstrado em tela, a bateria de fracionamento por população e o percentual de compras emergenciais. |
| `cotacao-e-selecao` | 3 e 4 | Aderência ao número mínimo de cotações, os sinais de direcionamento (data, origem comum, metadados, aritmética das propostas), dispensa e fornecedor único, cortes sobre a base de fornecedores e o cruzamento de conflito de interesse. |
| `contrato-e-aditivo` | 5 | Pedido contra a proposta vencedora campo a campo, pedido retroativo que contamina as três vias, cláusulas e reajuste, a linha do tempo de aditivos com o acumulado sobre o original e a mudança de objeto, e o aging de adiantamentos. |
| `recebimento-e-pagamento` | 6 e 7 | Segregação de quem atesta, comprovação de entrega em serviço, o bloqueio de três vias e sua tolerância parametrizada, as sete variantes de pagamento em duplicidade, a conciliação com o extrato e o fechamento com o razão. |

## Fluxo típico

`ciclo-ptp` (dimensiona o escopo e declara os elos inaplicáveis) → `matriz-de-riscos-de-compras`
(registro de riscos e matriz) → `programa-de-testes` do plugin de método (tipo de teste, frequência,
amostragem) → `requisicao-e-alcada` → `cotacao-e-selecao` → `contrato-e-aditivo` →
`recebimento-e-pagamento`, com `bases-e-conciliacao` e `papel-de-trabalho` carregados a cada bloco
executado, e `redacao-de-achados` e `relatorio-de-auditoria` no fechamento.

A ordem segue o ciclo por uma razão prática: a data da requisição fixada no primeiro elo é a
referência de todo o teste de anterioridade das propostas no segundo, e a proposta vencedora apurada
no segundo é o critério contra o qual o pedido é conferido no terceiro. Começar pelo pagamento, que é
a tentação natural porque a base é a mais limpa, produz um trabalho que conclui sobre a saída de
caixa e não encosta em nada do que a decidiu.

Ao fechar, o que se aprendeu volta para a matriz (risco novo, controle novo, forma de testar) e o
estado do engajamento vai para o checkpoint de `acta-way`.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-auditoria`. Não repita
aqui o que já está lá, em particular a doutrina do número, o tratamento de bases e o casamento com
consumo de pool, a estrutura do papel de trabalho e o vocabulário do campo Resultado, a taxonomia de
tipo de teste e a régua de amostragem, os conceitos e o código de risco, a redação de ponto e a
calibração de severidade, e o ritual de aprendizado.

Nome de cliente e nome de pessoa não entram em skill. O cruzamento de conflito de interesse de
`cotacao-e-selecao` §5 usa dado pessoal de funcionário: vale integralmente
`acta-way:anonimizacao-e-lgpd`, e no papel de trabalho e no relatório o vínculo se descreve pelo
cargo e pelo registro, nunca pelo nome. Faixas de alçada, número mínimo de cotações e prazo de
pagamento citados nas skills são **exemplo de parâmetro**, não padrão de mercado: variam por
política, e o auditor lê a política vigente do mandato antes de testar aderência a ela.
