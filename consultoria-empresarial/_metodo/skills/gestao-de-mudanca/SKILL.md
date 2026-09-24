---
name: gestao-de-mudanca
description: Sustente a mudança depois do relatório: acompanhamento versionado do plano de ação, vocabulário fechado de status de implementação, cadência de reunião e o acordo que impede o plano de virar documento de gaveta. Acionar ao acompanhar plano de ação, ao reavaliar grau de implementação, ao preparar reunião de status com a gestão, ou ao encerrar um ciclo de acompanhamento.
---

# Gestão da mudança e acompanhamento do plano

Carregue `priorizacao-e-roadmap` antes: o artefato acompanhado aqui é o checklist de ações
estratégicas produzido lá, e as colunas de realizado já nascem criadas naquele entregável.

## Papel desta skill

O relatório entregue não muda nada. O que muda é a ação executada, e a ação só é executada quando
alguém verifica. Esta skill cobre o que acontece **depois** do relatório: a reavaliação periódica do
plano, o vocabulário com que se declara o que foi feito, e o acordo de sustentação.

## 1. O vocabulário fechado de status

Três valores, e nenhum a mais. Cada um com definição escrita na aba de legenda do próprio arquivo.

| Status | Definição |
|---|---|
| **Implementado** | Verificamos que a ação já foi realizada, de acordo com o recomendado |
| **Parcialmente implementado** | Ação essencial que foi iniciada e ainda deve ser concluída |
| **Não implementado** | Ação essencial que já deveria ter sido executada nesta etapa e verificamos que não foi |

Três decisões embutidas nesse vocabulário, e todas são deliberadas:

- **"Verificamos" e não "o cliente informou".** O status é conclusão da consultoria, apoiada em
  evidência. Se não houve verificação, o status não muda, e a observação registra que a informação
  foi prestada mas não comprovada.
- **"Já deveria ter sido executada nesta etapa"** está dentro da definição de não implementado. O
  status carrega a temporalidade: ação cujo prazo ainda não venceu não é "não implementada", é ação
  em curso, e a data fim planejada é o que informa isso.
- **Não existe "não aplicável".** Ação que deixou de fazer sentido sai do plano por decisão
  registrada, com data e motivo, não por status. Deixá-la como não aplicável é como o plano encolhe
  sem ninguém decidir nada.

Ao lado do status, um ícone de status numa coluna própria, para leitura visual imediata. Ícone é
derivado do status por fórmula, nunca digitado: status e ícone divergentes já apareceram em versão
entregue.

## 2. A mecânica da reavaliação

O checklist é **versionado, não atualizado no lugar**. Cada ciclo de acompanhamento produz uma nova
versão do arquivo, e a anterior vai para `Versões Anteriores`.

Nomeação que já rodou em campo: nome do trabalho, **unidade**, data de referência do plano original,
e a versão do ciclo. A data de referência não muda entre versões; a versão, sim. Isso permite ler a
trajetória de uma unidade abrindo os arquivos em ordem, e é o que produz o único gráfico de progresso
que importa: quantas ações mudaram de status entre um ciclo e o seguinte.

**Uma aba por unidade, e uma aba por unidade superada.** Quando o plano de uma unidade é
reestruturado, a versão anterior daquela aba permanece no arquivo, renomeada com o sufixo de
superada. Custa nada e evita a pergunta "por que esta ação sumiu".

Em cada ciclo, atualize **quatro colunas e só elas**: status, data início real, data fim real e
quanto realizado. Alterar a ação, o responsável ou o prazo planejado é replanejamento, não
acompanhamento: exige decisão registrada e nova linha, não edição da linha existente.

## 3. A cadência

- **Ciclo fixo, definido no encerramento do diagnóstico**, e escrito no próprio checklist. Mensal
  para plano com ações de curto prazo, trimestral para plano estrutural.
- **Uma reunião por ciclo, com pauta derivada do arquivo**: o que mudou de status, o que venceu sem
  mudar, e o que trava. Nada além disso.
- **A pauta não é a lista inteira.** Leve as ações vencidas e as travadas. Ação em curso dentro do
  prazo não ocupa reunião.
- **Ação travada pela mesma razão em dois ciclos seguidos vira escalonamento**, não terceiro registro.
  O escalonamento é para o patrocinador do projeto, com o valor que aquela ação sustenta.

## 4. O acordo de sustentação

O plano vira documento de gaveta por três motivos, e os três se previnem no dia da entrega.

**Não há dono.** Uma ação com "a diretoria" na coluna Quem não tem dono. Exija papel e área
específicos, e uma pessoa por ação, por papel. Envolvidos vão na coluna de partes envolvidas.

**Não há medição.** Ação que promete reduzir um custo que ninguém mede não tem como ser declarada
implementada. Se o diagnóstico revelou que o indicador não existe, implantar a medição é a primeira
ação daquele pilar, e ela tem dono e prazo como qualquer outra.

**Não há ciclo.** Plano sem data de próxima revisão acordada na entrega nunca tem uma. Feche a
reunião de apresentação do relatório com a data do primeiro ciclo de acompanhamento na agenda.

Registre os três no próprio checklist, numa seção de acordo, assinada pelo patrocinador. É meia
página e é o que separa o plano executado do plano arquivado.

## 5. Mudança de comportamento, não só de processo

O plano cobre o que a organização faz. Quatro pontos que decidem se ela vai fazer, e que entram como
ações próprias quando o diagnóstico os identificar:

- **Capacitação como ação, com dono e data.** Quando o diagnóstico mostra que a equipe não domina o
  que o plano exige, a capacitação é linha do plano, com o mesmo 5W2H, e frequentemente com parceiro
  externo na coluna Quem.
- **Canal de comunicação com quem é afetado.** Plano que muda a rotina de uma operação sem canal de
  retorno produz resistência silenciosa, que aparece como ação "implementada" que na prática não
  mudou nada.
- **Participação de quem executa na decisão.** Incluir os responsáveis pela operação no processo
  decisório do plano não é boa prática abstrata: é o que faz a coluna Quem ser aceita em vez de
  contestada.
- **Padronização do que passa a ser exigido.** Quando o plano cria uma exigência nova, ele cria junto
  o padrão que a torna verificável. Exigência sem padrão vira interpretação de quem audita.

## 6. Encerramento do ciclo de acompanhamento

Ao encerrar um mandato de acompanhamento, produza três coisas:

1. **A versão final do checklist**, com o status de cada ação e a data de cada mudança.
2. **A leitura de trajetória**: quantas ações por status em cada ciclo, e o que explica o que não
   andou. Esta é a única página que a alta gestão vai ler.
3. **A promoção de lição a método.** O que se aprendeu neste engajamento e vale no próximo vai para
   `APRENDIZADOS.md` em `~~controle`, pelo protocolo de `acta-way:checkpoint`. O que é particular
   deste cliente fica no `HISTORICO.md` do engajamento e não sobe.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Montar o plano e priorizá-lo | `priorizacao-e-roadmap` |
| Painel de acompanhamento de meta estratégica | `acta-planejamento-estrategico:painel-e-acompanhamento` |
| Acordo de sustentação de manual de processos | `acta-excelencia-operacional:manual-de-processos` |
| Registro de sessão, checkpoint e aprendizados | `acta-way:checkpoint` |
| Plano de ação de achado de auditoria | `acta-metodo-auditoria:redacao-de-achados` |
