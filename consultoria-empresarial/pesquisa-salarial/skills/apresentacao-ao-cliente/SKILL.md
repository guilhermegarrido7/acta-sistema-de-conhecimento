---
name: apresentacao-ao-cliente
description: Apresente os resultados da pesquisa salarial e treine o uso do painel Power BI. Acionar ao cruzar os números de deck, Excel e painel, ao fazer pré-leitura reservada, ao ensaiar perguntas difíceis, ou ao apresentar ao Comitê Gestor.
---

# Apresentação ao cliente

Etapa 11. Três reuniões, nesta ordem: pré-leitura reservada com o patrocinador,
apresentação ao Comitê Gestor e treinamento do painel. Inverter a ordem é o erro
que transforma a apresentação final em outra reunião.

Carregue `metodo-pesquisa-salarial` antes desta skill. O deck já está aprovado
internamente (`relatorio-e-storyline`) e os números vêm do release congelado.

## 1. Antes de marcar qualquer reunião

Validação de coerência entre artefatos. Vinte cargos conferidos nas três
interfaces: deck, Excel de consulta e painel. Divergência bloqueia a
apresentação, sem exceção. O painel recalcula percentis dinamicamente por
requisito de interatividade, e é justamente por isso que essa conferência existe;
o resultado dela vai para o log de auditoria.

Cliente que encontra dois números diferentes para o mesmo cargo em dois
entregáveis passa a duvidar dos duzentos que não conferiu. O custo de meia manhã
de conferência é pequeno perto disso.

## 2. Pré-leitura reservada com o patrocinador

Reunião fechada, sem plateia, uma a duas semanas antes do Comitê. Nenhum achado
relevante pode aparecer pela primeira vez na apresentação final.

O que entra na pré-leitura:

- Cargos muito acima do mercado, com o nome funcional e a leitura de causa.
- Gaps grandes em posições de gestão, que têm implicação orçamentária e política
  interna.
- Disparidades internas difíceis de justificar, quando aparecerem.
- Cargos sem amostra suficiente que o patrocinador esperava ver publicados.
- O custo dos três cenários, para que o número não chegue cru ao Comitê.

O que a pré-leitura não é: negociação do resultado. O patrocinador pode pedir
ênfase, ordem, recorte adicional e cuidado de linguagem. Não pode pedir mudança
de número, supressão de achado inconveniente ou retirada da página de cargos sem
amostra. Pedido nesse sentido é escalado ao responsável técnico e registrado.

Saída da reunião: lista do que precisa de ajuste de forma, decisão sobre quem
mais recebe cada achado antes do Comitê, e confirmação da agenda.

## 3. Ensaio

Ensaio completo com o time, com o deck final, cronometrado. O objetivo é a
resposta pronta, com número e fonte, para as perguntas que vão vir. As
previsíveis em qualquer projeto de remuneração:

1. Como vocês garantem que o matching está certo.
2. Por que essa empresa está no painel e aquela não.
3. Quantas empresas responderam de fato, e o mínimo foi atingido em todos os
   recortes.
4. Como vocês tratam diferença de jornada.
5. Qual é a data-base e como os valores foram atualizados.
6. Qual método de percentil foi usado.
7. Quantas observações foram excluídas e por quê.
8. A comparação de custo considera o regime tributário da Companhia.
9. Por que esse cargo ficou sem resultado.
10. Vocês podem nos dizer quanto a empresa X paga.

A décima tem resposta única e ela é não, com a explicação de que é essa regra que
permite o painel existir. Treinar a formulação antes evita hesitação na sala.

Cada resposta precisa caber em trinta segundos e apontar para a página do anexo
que a sustenta. Resposta longa no Comitê consome o tempo da decisão.

## 4. Condução da apresentação ao Comitê

Blocos de tempo, em reunião de noventa minutos:

| Bloco | Tempo | Conteúdo |
| --- | --- | --- |
| Resposta | 10 min | Slide 3 e as três prioridades. Ninguém sai da sala sem isso |
| Confiança | 15 min | Painel, método, regras de leitura |
| Achado | 30 min | Consolidado, mapa de calor, detalhe por nível funcional |
| Decisão | 25 min | Cenários, custo, priorização, sequência sugerida |
| Encaminhamentos | 10 min | O que o cliente decide, quando, e o que está fora de escopo |

Regras de condução:

- Apresenta quem conduziu o projeto. O sócio abre e fecha.
- Um relator do time registra pergunta, objeção e compromisso assumido. Esse
  registro é a ata técnica da reunião.
- O anexo fica aberto em segunda tela, para responder com a página, não de
  memória.
- Nada de percorrer os quarenta slides. O detalhe existe para ser consultado
  quando perguntado.

## 5. Objeção ao vivo

Quatro tipos, com tratamento distinto. Reconhecer o tipo antes de responder é
metade do trabalho.

**Objeção de método** ("o matching desse cargo está errado"). Trate como
informação, não como ataque. Pergunte o que difere no conteúdo do cargo, registre,
e diga que a revisão volta com resposta em prazo definido. Se a objeção
proceder, a correção gera novo release, e isso é dito na hora.

**Objeção de dado** ("esse salário não é o que pagamos"). Quase sempre é
componente (o cliente pensa em remuneração total, o slide mostra base) ou
data-base. Volte ao slide de regras de leitura. Nunca recalcule na sala: anote,
confira contra o release e responda depois.

**Objeção política** ("esse achado não pode circular assim"). Não se resolve com
técnica. Reconheça a preocupação, separe o que é forma do que é conteúdo, e leve
a discussão para depois da reunião, com o patrocinador. O conteúdo não muda.

**Pedido fora de escopo** ("e a tabela salarial, vocês entregam quando"). Responda
com clareza e sem constrangimento: está fora do contratado, e vira proposta.
Registrar como Change Request na hora, por escrito, é o que evita a entrega
informal que consome a margem do projeto.

Regra que vale para as quatro: nenhum número novo é produzido ao vivo, e nenhum
compromisso de prazo é assumido sem o responsável técnico.

## 6. Treinamento do painel

Uma hora, gravada, com material de uma página. É entregável do contrato, não
cortesia. Conteúdo: como filtrar por cargo e por recorte, como ler o indicador de
amostra insuficiente, onde está a página de metodologia, o que o painel não faz.

Público certo: quem vai usar, que é a equipe de RH e os gestores indicados, não
apenas o patrocinador. A gravação fica com o cliente, porque a rotatividade da
equipe dele torna o treinamento ao vivo um ativo de vida curta.

## 7. Artefato e onde ele é gravado

Três saídas, em `~~entregaveis` e em `~~controle`:

- Registro da pré-leitura, com achados antecipados e ajustes acordados.
- Ata técnica da apresentação, com perguntas, objeções, compromissos e prazos.
- Material de treinamento de uma página e o arquivo da gravação.

Registrar em `B10_LOG_AUDITORIA`: a conferência de coerência entre artefatos com
os cargos amostrados e o resultado, as datas das três reuniões, e toda objeção
que possa gerar novo release.

## 8. Gate de qualidade

A etapa está concluída quando todas estas afirmações forem verdadeiras:

- Os vinte cargos foram conferidos nas três interfaces, sem divergência, com
  resultado no log.
- A pré-leitura reservada aconteceu antes do Comitê, e nenhum achado sensível
  chegou à reunião sem ter sido antecipado.
- O ensaio foi feito, com as dez perguntas respondidas com número e fonte.
- O Comitê recebeu a resposta nos primeiros dez minutos.
- Toda objeção e todo compromisso estão registrados na ata técnica, com
  responsável e prazo.
- Nenhum número foi alterado, prometido ou recalculado durante a reunião.
- O treinamento foi realizado, gravado e entregue com o material de uma página.
- Todo pedido fora de escopo virou Change Request por escrito.

## 9. Erros a evitar

- Apresentar ao Comitê sem pré-leitura. É o erro mais caro desta etapa e ele não
  tem correção depois.
- Recalcular ao vivo para responder a uma objeção. O número produzido sob pressão
  entra em conflito com o release e cria um segundo problema.
- Aceitar verbalmente um pedido adicional para não parecer rígido na sala.
- Percorrer o deck inteiro por educação, e chegar ao bloco de decisão com cinco
  minutos.
- Deixar o treinamento do painel para uma data futura indefinida. Ele costuma não
  acontecer, e o entregável interativo deixa de ser usado.
- Responder à pergunta sobre quanto uma empresa específica paga com evasiva. A
  resposta é direta, com o motivo, e ela reforça a credibilidade do trabalho.
