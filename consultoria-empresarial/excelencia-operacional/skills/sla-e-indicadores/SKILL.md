---
name: sla-e-indicadores
description: Monte o quadro de duas colunas — sugestões da consultoria × definição do workshop — com indicador principal, secundários e governança. Acionar ao propor SLA e metas de um subprocesso, ao escrever a definição operacional de um indicador, ao posicionar caixas de SLA no fluxograma, ou ao registrar o que foi acordado em sala.
---

# SLA e indicadores

Carregue `acta-way` antes desta skill: convenções de entregável, identidade visual e o protocolo de
checkpoint valem aqui e **não** são repetidos. O método de prática — construção de painel, rituais de
gestão, gestão de desempenho — virá de `acta-metodo-consultoria`; enquanto esse plugin for esqueleto,
o que esta skill assume dele está dito aqui.

O posicionamento das caixas de SLA no desenho é de `fluxo-e-regras-de-negocio`; o conteúdo do que
está escrito dentro delas é desta skill. A folha 3 do A3 e a dinâmica de sala estão em
`workshop-de-mapeamento`.

## Papel desta skill

O SLA é o que faz o processo mapeado ser cobrável. Sem ele, o manual descreve como se faz e ninguém
consegue dizer se foi bem feito — e um processo que não se consegue avaliar é um processo que volta a
degradar assim que o projeto termina.

A regra que governa tudo o que vem abaixo:

> **Indicador sem definição operacional não é indicador, é intenção.** Se duas pessoas apuram o mesmo
> indicador e chegam a números diferentes, a definição está incompleta — e o problema é da definição,
> nunca de quem apurou.

## 1. O padrão de duas colunas

O quadro do subprocesso é dividido ao meio, e as duas metades convivem no material final:

| **SUGESTÕES** | **DEFINIÇÃO WORKSHOP** |
|---|---|
| O que a consultoria leva pronto para a sala, a partir da coleta e da prática de mercado. | O que foi acordado com o grupo, na sala, com as metas que o cliente assume. |

Por que lado a lado, e não substituição: **o registro do sugerido ao lado do decidido é o que torna a
homologação auditável.** Quando, meses depois, a meta não é atingida e alguém pergunta de onde ela
veio, as duas redações estão no mesmo slide — a proposta técnica e a decisão do cliente, com data. A
diferença entre as colunas é informação de gestão, não rascunho a ser apagado.

É o mesmo mecanismo de `DESCRIÇÃO SUGERIDA` × `DESCRIÇÃO APROVADA` nas regras de negócio, aplicado a
meta em vez de critério.

A coluna SUGESTÕES **sempre chega preenchida** ao workshop. Coluna de sugestões vazia devolve ao
grupo o trabalho de inventar métrica do zero, que é lento e produz o indicador mais fácil de medir em
vez do mais útil.

## 2. Os três blocos de cada coluna

Ambas as colunas têm a mesma estrutura, na mesma ordem.

### Bloco 1 — INDICADOR PRINCIPAL

**Um só.** Nome, meta e **definição operacional entre parênteses**.

> **Prazo médio de atendimento da solicitação — meta: até 10 dias úteis**
> (contado da data de abertura da solicitação no sistema até a data de conclusão registrada;
> população: todas as solicitações encerradas no mês, incluindo as canceladas pelo solicitante;
> exclui período de suspensão por pendência do solicitante.)

A definição operacional responde a três perguntas, e as três são obrigatórias:

1. **De onde sai o número.** Qual sistema, qual campo, qual relatório. "Do ERP" não é resposta.
2. **Qual população.** O que entra na conta e o que fica de fora — e a exclusão é sempre nomeada. A
   maior parte das divergências de apuração mora aqui.
3. **Qual recorte de tempo.** Data de abertura ou data de encerramento, mês de competência ou mês de
   caixa, dias corridos ou dias úteis.

Um indicador principal por subprocesso, porque é o que o dono do processo responde quando lhe
perguntam se o processo vai bem. Dois principais é nenhum principal.

### Bloco 2 — SECUNDÁRIOS

**De três a cinco métricas**, cada uma com a mesma disciplina de definição — mais enxuta, mas com
fonte, população e recorte declarados.

Menos de três não cobre o subprocesso; mais de cinco vira painel que ninguém olha e cuja apuração
custa mais que o ganho de gestão.

Os secundários existem para **explicar o principal quando ele piora**. Prazo médio subiu: foi volume,
foi retrabalho, foi uma etapa específica? Se os secundários não respondem a essa pergunta, eles foram
escolhidos por disponibilidade e não por utilidade.

**Âncora — indicador de esforço/entrega × indicador de resultado.** Volume processado, horas gastas e
número de solicitações são **esforço**: dizem quanto se trabalhou. Prazo cumprido, taxa de
retrabalho, percepção do solicitante e custo por transação são **resultado**: dizem o que se
entregou. Um conjunto só de esforço mede atividade e chama de desempenho. O principal é quase sempre
de resultado; os secundários equilibram os dois, e os de esforço servem para contextualizar, não para
avaliar.

### Bloco 3 — MEDIÇÃO & GOVERNANÇA

Duas informações, sempre:

- **Frequência de apuração** — diária, semanal, mensal, por ciclo de fechamento. A frequência
  acompanha a velocidade do processo: indicador de processo diário apurado trimestralmente não
  permite correção.
- **Responsável, sempre por cargo.** "Coordenador de Suprimentos", "Controller", "Supervisor de
  Contas a Pagar". **Nunca por pessoa.**

A regra do cargo não é formalidade. Indicador com dono nomeado por pessoa morre na primeira troca de
time, e a troca acontece dentro do horizonte do manual. Por cargo, a responsabilidade transfere
sozinha — e é a mesma convenção que `coleta-e-diagnostico` aplica à coluna `FONTE SUGERIDA`.

Declare também, quando houver, **o ritual onde o indicador é lido**: a reunião em que o número é
apresentado. Indicador apurado e não lido é custo sem gestão.

## 3. As caixas de SLA inline no fluxograma

O prazo vive **dentro do fluxo**, na etapa a que se refere:

> *"SLA elaboração < 20 dias úteis"* · *"SLA aprovação < 3 dias úteis"*

**O SLA não vive numa tabela separada do fluxo.** Esta é a decisão de desenho que mais diferencia o
artefato: prazo que só aparece no slide de indicadores é prazo que ninguém consulta enquanto executa;
prazo impresso ao lado da caixa é compromisso que o executor vê no momento em que age.

Convenções:

- **Versão curta no fluxo, definição completa na tabela.** Na caixa cabem o nome da etapa, o operador
  e o prazo. A definição operacional fica no quadro de duas colunas.
- **Um SLA por etapa crítica, não por caixa.** Etapa crítica é aquela onde o processo espera. SLA em
  toda caixa polui o desenho e dilui a cobrança.
- **A soma dos SLAs de etapa conversa com o SLA ponta a ponta.** Se somar mais que o prazo total
  prometido, um dos dois está errado — e é a checagem que quase ninguém faz.
- **Todo SLA inline tem indicador correspondente no quadro.** É a terceira das checagens de
  consistência de `fluxo-e-regras-de-negocio`. Prazo desenhado que ninguém mede é promessa.

## 4. O encerramento padrão: a percepção do solicitante

Quase todo fluxo de atendimento termina com **"realiza avaliação de qualidade do atendimento (escala
1–5)"**, e a métrica dela entra no quadro ao lado do tempo.

Por que ela não é opcional: prazo mede se a entrega chegou na hora; percepção mede se ela resolveu. Um
processo pode cumprir 100% do SLA e ser considerado ruim por quem o usa — e sem a avaliação, essa
informação só chega por reclamação em reunião de diretoria.

A definição operacional da avaliação exige os mesmos três elementos, e o segundo é onde ela costuma
falhar: **qual população**. Média de nota calculada só sobre quem respondeu, com 12% de resposta,
mede quem respondeu. Declare a taxa de resposta como métrica secundária obrigatória ao lado da nota
média — sem ela, a nota não é interpretável.

## 5. Como se constrói a coluna SUGESTÕES

1. **Parta do fluxo, não do catálogo.** Cada espera desenhada é candidata a SLA; cada retrabalho
   mapeado é candidato a taxa; cada encerramento é candidato a percepção.
2. **Use o que já existe.** B8 da coleta trouxe os indicadores de hoje. Indicador que o cliente já
   apura, com definição corrigida, é adotado em semanas; indicador novo depende de fonte que talvez
   não exista.
3. **Teste a fonte antes de sugerir.** Indicador cuja apuração exige um dado que o sistema não
   registra é proposta de projeto de TI travestida de meta. Se a fonte não existe, diga isso na
   sugestão — a oportunidade correspondente vai para `oportunidades-e-quick-wins`.
4. **Proponha meta, não só métrica.** Métrica sem meta devolve ao grupo a parte difícil. Meta
   sugerida ancora a discussão, e o grupo move o número — o movimento é o dado.
5. **Ancore a meta no histórico quando houver.** "Reduzir de 18 para 10 dias úteis" é discutível;
   "até 10 dias úteis", sem referência, é arbitrário.

A biblioteca de indicadores usuais por ciclo — PTP, OTC, RTR, HTR — com definição operacional
modelo, está em `references/biblioteca-de-indicadores.md`.

## 6. O que a sala decide, e como se registra

Na folha 3 do A3, a coluna SUGESTÕES vai impressa e a DEFINIÇÃO WORKSHOP vai vazia. O grupo pode:

- **aceitar** a sugestão como está — registra-se igual, e a igualdade é informação;
- **mover a meta** — registra-se o número acordado, e o motivo em anotação;
- **trocar o indicador** — registra-se o novo, com definição operacional escrita ali, na hora;
- **recusar sem substituir** — registra-se a recusa e o subprocesso fica sem aquele indicador, o que
  é uma decisão do cliente e precisa estar visível.

Três cuidados de facilitação:

1. **Não deixe o grupo definir meta sem definição operacional.** "Meta de 95%" sem dizer 95% de quê,
   medido como, é o item que volta em três meses como discussão sobre o número.
2. **Meta acordada precisa de responsável por cargo dito em voz alta na sala.** Meta sem dono
   declarado é meta de ninguém.
3. **Meta impossível hoje é meta com data.** Se o grupo aceita 10 dias mas o processo faz 25,
   registre a meta e a trajetória — não registre a meta sozinha, porque ela nasce descumprida.

## O que entregar

1. O quadro de duas colunas por subprocesso, com os três blocos em cada coluna.
2. Todas as definições operacionais escritas: fonte, população, recorte de tempo.
3. As caixas de SLA posicionadas no fluxograma `vPósWS`, com a checagem de soma contra o prazo ponta
   a ponta.
4. A matriz de responsáveis **por cargo** e a frequência de apuração de cada indicador.
5. A lista de indicadores cuja fonte ainda não existe, que vira oportunidade e entra no roadmap.

## Próximo passo

`fluxo-e-regras-de-negocio`, para posicionar as caixas no desenho reemitido. Com fluxo, regras, SLA e
oportunidades homologados em todos os subprocessos, `manual-de-processos`.
