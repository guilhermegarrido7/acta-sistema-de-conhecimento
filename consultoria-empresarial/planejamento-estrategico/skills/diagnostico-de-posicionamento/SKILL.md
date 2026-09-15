---
name: diagnostico-de-posicionamento
description: Levantar o ponto de partida do planejamento estratégico com entrevistas de liderança, questionário estruturado e consolidação do que manter, ajustar ou reescrever. Acionar no kickoff do planejamento, ao desenhar o instrumento de coleta, ao entrevistar sócios e gestores, ou ao revisar um plano estratégico anterior.
---

# Diagnóstico de posicionamento — o ponto de partida antes de qualquer workshop

## Subordinação

Esta skill é de **projeto**. O método transversal da firma vive em `acta-way` — carregue-a para o
protocolo de checkpoint entre sessões e consultores, para as convenções de entregável e para a regra
de anonimização. O **método de prática** (condução de entrevista, diagnóstico as-is, gestão de
mudança) virá de `acta-metodo-consultoria` quando ele sair do esqueleto; até lá, o que estiver aqui é
o particular do planejamento estratégico, não o genérico da consultoria.

> Se `acta-way` não estiver instalado, avise o usuário em vez de improvisar o protocolo:
> `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.

Julgamento estratégico — por que este setor rende o que rende, se a vantagem desta empresa dura,
qual lente aplicar — **não se resolve aqui**. Carregue `acta-pensadores-de-negocios`, skill `lentes`,
e deixe a roteadora escolher. Este plugin não reensina Porter, Greenwald ou McGrath.

## O que esta skill entrega

O **diagnóstico de entrada**: um documento curto que diz onde a empresa está, o que a liderança
pensa, e — quando existe plano anterior — quais elementos dele sobrevivem. É o insumo de todos os
workshops. Sem ele, o primeiro workshop vira sessão de brainstorming e queima o ativo mais escasso do
projeto, que é a atenção da liderança.

## 1. As cinco perguntas que organizam o diagnóstico inteiro

Todo o levantamento se estrutura em cinco perguntas. Elas voltam no questionário, na entrevista, no
workshop e no mapa estratégico. Use-as como espinha, não como checklist de slide.

| Pergunta | O que ela decide |
|---|---|
| **Quais são os elementos estratégicos?** | Propósito, aspirações, valores. O que a empresa é e o que se recusa a ser. |
| **Onde atuar?** | Geografias, segmentos, clientes a atender — e clientes a **não** atender. Que parte da cadeia de valor priorizar. |
| **Como vencer?** | Proposta de valor, posicionamento competitivo, modelo de negócio, parcerias. |
| **Quais capacitações são necessárias para vencer?** | Competências, estruturas, sistemas, perfil de time. |
| **Como executar?** | Iniciativas, investimentos, responsáveis, gestão da mudança, monitoramento. |

A quarta pergunta é a mais pulada e a que mais derruba plano: define objetivo de crescimento sem
declarar a capacidade que falta para sustentá-lo. A quinta é o que separa plano de intenção — e é
tratada nas skills `desdobramento-e-metas` e `painel-e-acompanhamento`.

## 2. O instrumento de coleta

### 2.1 Questionário estruturado, enviado antes da entrevista

Um bloco por pergunta da seção 1, mais um bloco de ambiente externo e posicionamento competitivo.
Perguntas abertas — o objetivo é capturar divergência entre gestores, não convergir cedo. Perguntas
que funcionaram em campo:

- Qual o nosso propósito? O que deve mover a empresa **além do resultado financeiro**?
- Quais aspirações você considera **inegociáveis**?
- Que valores foram fundamentais para o sucesso até aqui, e quais precisam ser revisitados?
- Quais segmentos e tipos de cliente representam o foco atual — e quais oferecem o maior potencial?
- **Quais clientes não atender?**
- Como a empresa é percebida pelo mercado, e como você gostaria que fosse?
- Quem são os concorrentes diretos e indiretos, e qual a vantagem competitiva mais evidente de cada?
- Que tendências externas — econômicas, regulatórias, tecnológicas, ambientais — mais impactarão a
  empresa nos próximos três a cinco anos?
- O que tem funcionado e o que precisa melhorar no processo de **decisão e execução** estratégica?

Duas perguntas carregam peso desproporcional. *"Quais clientes não atender"* força trade-off
explícito, que é onde a estratégia aparece; sem ela, todo mundo diz que quer todos os mercados.
*"O que precisa melhorar na execução"* antecipa, na semana 1, o diagnóstico de por que o plano
anterior não saiu do papel.

### 2.2 Quando existe plano anterior: o form de sondagem

Na maioria dos engajamentos de mid-market brasileiro não se escreve um plano do zero — **atualiza-se
um plano que existe e parou**. Nesse caso, o instrumento mais eficiente não é a pergunta aberta: é
uma sondagem item a item sobre o plano vigente, com três respostas possíveis.

```
Para cada elemento estratégico e cada objetivo do plano anterior:
  [ ] Manter      — segue válido como está
  [ ] Ajustar     — a direção vale, a formulação ou a meta não  → observação obrigatória
  [ ] Reescrever  — o objetivo não é mais o objetivo
```

O resultado é lido em percentual de concordância por item, por perspectiva. A leitura tem três
padrões e cada um muda o desenho dos workshops:

| Padrão de resposta | Leitura | Consequência |
|---|---|---|
| 100% "reescrever" em propósito e visão | Os elementos fundacionais não representam mais a empresa | WS1 é construção, não revisão. Reserve tempo real. |
| Maioria "ajustar", com observações divergentes | Há acordo na direção e desacordo na formulação | O workshop é de calibração — traga versões redigidas para reagir, não folha em branco. |
| Maioria "manter" em uma perspectiva inteira | Aquela perspectiva não é o problema | Não gaste workshop com ela. Valide em plenária de dez minutos. |

O campo de observação é onde está o valor. Uma resposta "ajustar" com a observação *"já aconteceu"*
diz que o objetivo foi cumprido e ninguém atualizou o plano — sintoma clássico de documento de
gaveta, e um achado que vale reportar por si.

### 2.3 Consolidação

Consolide as respostas numa planilha de uma aba por respondente e uma visão agregada por tema, com
três colunas: **tema · avaliação · observação**. Regras:

- **Preserve a divergência.** O consolidado não é média; é o mapa de onde a liderança discorda. A
  divergência é a pauta do workshop.
- **Não atribua opinião a nome.** No consolidado e em todo entregável, o respondente é o papel — *um
  dos sócios*, *a diretoria comercial*. Isso não é formalidade: opinião nominal registrada muda o que
  as pessoas respondem na próxima rodada.
- **Marque o que é fato e o que é percepção.** "Perdemos produtividade" é percepção até virar número.
  O que for percepção relevante entra na pauta de verificação de `analise-de-ambientes`.

## 3. Entrevistas individuais com a liderança

Individual, não em grupo, e antes do primeiro workshop. Em empresa familiar — o caso frequente — a
entrevista individual é o único lugar onde aparece o que ninguém diz na mesa: sucessão, desempenho de
um familiar em cargo de gestão, discordância entre sócios sobre o destino do negócio.

Roteiro em três eixos: **(1)** entendimento da atuação da empresa; **(2)** ambiente de negócios;
**(3)** perspectivas. E, transversalmente, as cinco perguntas da seção 1.

Sintetize cada entrevista nos blocos que alimentam o workshop: propósito · aspirações · o que move
além do resultado · valores inegociáveis · percepção de mercado · vantagem competitiva ·
oportunidades · ameaças · forças · fraquezas · geografias · prioridades do próximo ciclo.

**Achado recorrente que merece atenção:** a vantagem competitiva que a liderança declara costuma ser
uma **posição de mercado** ("somos médios, ganhamos dos pequenos e não disputamos com os grandes"),
não uma capacidade. Isso pode ser verdade e ser frágil ao mesmo tempo. Registre como declarado e leve
para teste em `analise-de-ambientes` — é exatamente a pergunta que a roteadora de
`acta-pensadores-de-negocios` sabe endereçar.

## 4. O levantamento documental que roda em paralelo

Enquanto as entrevistas acontecem, consolide o entendimento do negócio a partir de documento, não de
opinião:

- Portfólio atual de serviços e produtos — e o portfólio **potencial**, o que a empresa está
  habilitada a fazer e não faz.
- Modelo de negócio e atuação geográfica.
- Carteira de clientes: concentração por cliente e por contrato.
- Concorrentes principais e vantagem competitiva declarada de cada um.
- Parceiros e demais participantes da cadeia.
- Estratégias e metas corporativas vigentes; iniciativas estratégicas em andamento.
- Restrições ao planejamento: societárias, contratuais, de capital, regulatórias.

Duas leituras específicas de mid-market brasileiro, que quase sempre rendem:

**Concentração de receita.** Se um cliente âncora responde por parcela dominante do faturamento, esse
é um objetivo estratégico antes de ser um risco — e frequentemente é o objetivo real por trás do
pedido de "planejamento estratégico".

**Objeto social versus atuação real.** A relação de atividades registradas mostra o que a empresa se
habilitou a fazer ao longo dos anos. O descompasso entre essa lista e a receita efetiva é matéria de
posicionamento: revela tentativas abandonadas e adjacências que já estão formalmente abertas.

## 5. O produto final do diagnóstico

Um documento curto — dez a quinze páginas — com:

1. Entendimento do negócio: portfólio, modelo, geografias, carteira, cadeia.
2. Resultado da sondagem por tema, em percentual, com as observações preservadas.
3. Síntese das entrevistas por bloco, sem nome.
4. As divergências abertas, nomeadas como pauta de workshop.
5. As restrições declaradas ao planejamento.
6. O desenho proposto dos workshops, já ajustado ao que a sondagem revelou.

Este documento é apresentado no kickoff e validado antes do WS1. Ele vira a pré-leitura obrigatória —
ver `workshops-de-planejamento`.

## 6. Fronteiras

| Pergunta | Onde se resolve |
|---|---|
| Que lente teórica aplicar ao julgamento competitivo | `acta-pensadores-de-negocios`, skill `lentes` |
| Panorama setorial, concorrentes, cenários, SWOT | `analise-de-ambientes`, nesta mesma casa |
| Mecânica de condução de workshop | `workshops-de-planejamento` |
| Tese setorial para sustentar múltiplo em uma transação | `acta-ma-sell-buy-side`, skill `estudo-setorial` — propósito diferente, não reaproveite o formato |
| Checkpoint, anonimização, identidade visual | `acta-way` |

## 7. O risco que o diagnóstico já precisa endereçar

No mid-market brasileiro o planejamento estratégico compete com a operação pelo tempo da liderança, e
o desfecho mais provável não é o plano errado — é o plano correto que não é executado. Isso é
problema de método, e o método começa aqui:

- **Meça a disponibilidade antes de prometer o cronograma.** Quatro workshops em cinco semanas exigem
  agenda travada de sócios e diretores. Se a agenda não fecha, o cronograma é ficção — renegocie no
  kickoff, não na semana 4.
- **Pergunte na entrevista por que o plano anterior parou.** A resposta é o requisito de desenho do
  modelo de acompanhamento. Quase sempre é uma de três: não havia dono por objetivo, não havia
  cadência de revisão, ou a meta não estava no orçamento.
- **Identifique quem vai sustentar o ritual.** O plano sobrevive se alguém com autoridade convoca a
  reunião de acompanhamento. Descubra quem é essa pessoa na semana 1.
