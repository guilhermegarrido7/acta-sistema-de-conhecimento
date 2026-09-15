# Notação simplificada — legenda para o cliente

Conteúdo do slide de legenda que abre o workshop e que reaparece como anexo do manual. A redação
abaixo é deliberadamente leiga: quem lê o fluxograma é o analista que executa o processo, não o
modelador.

## Como se lê

- A leitura é **sempre da esquerda para a direita**.
- Todo fluxo **começa no círculo verde** e **termina no círculo vermelho**.
- Cada **faixa horizontal (raia)** é uma área ou um ator. A caixa está na raia de quem executa.
- O **logo do sistema** dentro da caixa diz onde a atividade acontece.

## Eventos — o que dispara e o que encerra

| Símbolo | Nome | Em linguagem leiga |
|---|---|---|
| Círculo verde | Início | Onde o processo começa. |
| Círculo vermelho | Término | Onde o processo acaba. |
| Círculo com relógio | Tempo / espera | O processo aguarda um prazo. É aqui que o SLA aparece no fluxo. |
| Círculo com envelope | Mensagem | Chegou ou foi enviado um e-mail / uma notificação. |
| Círculo vermelho com envelope | Fim por mensagem | O processo encerra enviando um comunicado. |

## Atividades — o que se faz

| Símbolo | Nome | Em linguagem leiga |
|---|---|---|
| Retângulo arredondado | Tarefa | Uma coisa que alguém faz. |
| Retângulo com marcador `M` | Tarefa manual | Feita fora de sistema: papel, planilha, telefone, conferência física. |
| Retângulo com marcador de engrenagem | Atividade automática | Integração entre sistemas. **Não há ação humana.** |
| Retângulo com `+` | Subprocesso | Um conjunto de atividades detalhado em outro fluxograma. |

O marcador `M` não é decoração. Ele é o mapa do que está fora de sistema — e, por consequência, o
mapa de onde estão as oportunidades de automação. Quem lê o fluxo procurando quick win procura `M`.

## Decisões

Losango, **com a condicionante escrita**. Cada saída do losango recebe o rótulo da condição
("Aprovado" / "Reprovado", "Acima da alçada" / "Dentro da alçada"). Losango sem pergunta e sem
rótulo nas saídas não é decisão — é ruído, e trava a leitura do grupo no workshop.

## Conexões e apoio

| Símbolo | Nome | Uso |
|---|---|---|
| Seta cheia | Sequência | A ordem em que as coisas acontecem. |
| Linha pontilhada | Associação | Liga uma anotação ou um documento à caixa. |
| Círculo com letra `A` / `B` | Conector | O fluxo continua em outro ponto do desenho ou em outra página, no conector de mesma letra. |
| Balão / texto em itálico | Anotação | Observação que não cabe na caixa: exceção, dependência, alerta. |
| Faixa horizontal nomeada | Raia | A área ou o ator. Nome em caixa alta. |

## O que esta notação deliberadamente não usa

Gateway paralelo e inclusivo, evento de compensação, pool múltiplo, sinalização de erro, subprocesso
de evento. São elementos legítimos em BPMN 2.0 e inúteis num workshop de homologação: cada símbolo a
mais é um minuto de explicação e um risco de o grupo discutir notação em vez de processo.

Quando o processo real exige essa semântica — duas coisas que ocorrem em paralelo, um caminho de
exceção raro —, descreva em **anotação de texto** ao lado do fluxo. O leitor entende; o modelador
purista reclama; o workshop anda.
