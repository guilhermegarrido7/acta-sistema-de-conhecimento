---
name: painel-e-acompanhamento
description: Instalar o ritual de gestão estratégica — painel, cadência de reuniões, papéis e o relatório de acompanhamento que impede o plano de virar documento de gaveta. Acionar ao desenhar o modelo de acompanhamento, ao conduzir reunião de revisão, ao tratar objetivo em atraso, ou ao abrir o ciclo seguinte do plano.
---

# Painel e acompanhamento — a fase de gestão estratégica

## Subordinação

Esta skill é de **projeto**. O método transversal da firma vive em `acta-way` — carregue-a para o
protocolo de checkpoint entre sessões e consultores, para as convenções de entregável e para a regra
de anonimização. O **método de prática** (condução de reunião de cliente, gestão de mudança,
escalonamento) virá de `acta-metodo-consultoria` quando ele sair do esqueleto; até lá, o que estiver
aqui é o particular do planejamento estratégico.

> Se `acta-way` não estiver instalado, avise o usuário em vez de improvisar o protocolo:
> `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.

Quando a reunião de acompanhamento revelar que a premissa estratégica mudou — e não apenas que a
execução atrasou —, a pergunta vira de julgamento estratégico e **não se resolve aqui**: carregue
`acta-pensadores-de-negocios`, skill `lentes`.

## O que esta skill entrega

O **modelo de acompanhamento instalado e rodando**: painel, cadência, papéis, pauta e relatório. É a
Fase IV, e é a única fase cujo produto não é um documento — é um hábito. Se ela falhar, as três
anteriores foram trabalho perdido, e o cliente vai (com razão) atribuir isso ao consultor.

## 1. O problema, dito como problema de método

No mid-market brasileiro o desfecho mais provável de um planejamento não é o plano errado: é o plano
correto que não é executado. A causa quase nunca é má-fé ou desalinhamento. É que o planejamento
compete com a operação pelo tempo da mesma liderança, e a operação tem prazo, cliente e telefone
tocando — o plano não tem nada disso, a menos que alguém o instale.

A pergunta *"por que o plano anterior parou?"*, feita nas entrevistas do diagnóstico, devolve quase
sempre uma de três respostas. Cada uma é um requisito de desenho desta fase:

| Causa declarada | Requisito que ela impõe |
|---|---|
| Não havia dono por objetivo | Campo de líder e responsável obrigatório, nominal — ver `desdobramento-e-metas` |
| Não havia cadência de revisão | Reunião com data marcada para o ciclo inteiro, antes do encerramento do projeto |
| A meta não estava no orçamento | Amarração com o orçamento no WS4, não depois |

Uma quarta, menos declarada e igualmente letal: ninguém com autoridade convocava a reunião.

## 2. A cadência

**Reuniões bimestrais no primeiro ano** — três ao longo de seis meses é o padrão que a casa sustenta
com acompanhamento contratado. Bimestral é a frequência que funciona no mid-market: mensal compete
com o fechamento e cansa; trimestral dá tempo demais para um desvio virar fato consumado.

Além da cadência de revisão, duas camadas que não são a mesma coisa:

| Camada | Frequência | Quem | Pauta |
|---|---|---|---|
| **Apuração** | Mensal | Responsáveis pela apuração de cada indicador | Alimentar o painel. Não é reunião — é rotina de dado |
| **Revisão de execução** | Bimestral | Sócios, primeira linha, líderes de iniciativa | Avanço das iniciativas, desvio de indicador, decisão sobre o que travou |
| **Revisão de estratégia** | Anual | Sócios e primeira linha | O mapa ainda é o mapa? Cenário se materializou? |

Marque as datas do ciclo inteiro **antes de o projeto encerrar**, com convite aceito na agenda. Data
combinada em tese é data que não existe.

## 3. Papéis

- **Patrocinador** — sócio ou presidente. Convoca, abre e cobra. Sem ele na sala, a reunião perde
  autoridade em dois ciclos. Identifique quem é já na semana 1 do projeto.
- **Coordenador do plano** — mantém o painel, cobra a apuração, monta a pauta, redige a ata. É um
  papel de tempo parcial e precisa ter alguém com nome. Quando o papel fica com "a diretoria", fica
  com ninguém.
- **Líder de iniciativa** — reporta avanço, sinaliza bloqueio, pede decisão.
- **Responsável pela apuração** — entrega o número na data, independentemente da reunião.
- **Consultor** — nos ciclos contratados, prepara o relatório, provoca a pergunta que a casa evita e
  se retira. O objetivo declarado é que o ritual sobreviva sem ele; diga isso ao cliente desde a
  primeira reunião.

## 4. O painel

Uma página por perspectiva, mais uma capa de consolidação. Por objetivo:

- Indicador, meta do ciclo, realizado e a variação.
- **Farol**, com critério escrito e numérico — não por impressão. Por exemplo: verde, realizado igual
  ou acima da meta do marco; amarelo, entre 80% e 100%; vermelho, abaixo de 80% ou sem apuração. O
  critério entra no dicionário de indicadores e não muda no meio do ciclo.
- Avanço das iniciativas, em percentual de marcos concluídos, não em percepção de progresso.
- Líder e data da última atualização.

**Indicador sem apuração é vermelho, não cinza.** É a regra mais importante do painel inteiro. Dado
que não chegou tende a virar exceção tolerada, e a tolerância a dado ausente é o primeiro degrau do
plano que para. Vermelho por falta de apuração é um problema com dono — o responsável pela
apuração — e resolve em um ciclo.

O painel vive na ferramenta que a empresa já usa e sabe manter. Planilha compartilhada bem feita
supera ferramenta de gestão estratégica que ninguém alimenta. Se a construção do painel virar projeto
de sistema, o ritual não começa neste ano.

## 5. A reunião de revisão

Noventa minutos, pauta fixa, painel distribuído com pelo menos dois dias de antecedência:

1. **Leitura do painel** — 15 min. Consolidado e faróis. Sem discussão ainda.
2. **Itens em vermelho** — 45 min, e é aqui que a reunião existe. Só os vermelhos, um a um, com o
   líder relatando. Ver §6.
3. **Decisões pendentes** — 15 min. O que os líderes precisam que a diretoria decida para destravar.
4. **Mudança de contexto** — 10 min. Gatilho de cenário observado, movimento de concorrente, mudança
   regulatória. Registrar; decidir só na revisão anual, salvo urgência.
5. **Fechamento** — 5 min. Compromissos do ciclo, com dono e data.

Três regras de condução:

- **Não se discute item verde.** É a maneira mais comum de a hora terminar sem que o vermelho tenha
  sido tratado — e é confortável exatamente por isso.
- **Não se replaneja na reunião de execução.** Reabrir objetivo é pauta da revisão anual.
- **A ata circula em dois dias úteis** e abre a pauta da reunião seguinte.

## 6. Quando a meta não é atingida

Trate como diagnóstico, não como julgamento. A pergunta é *qual dos quatro*:

| Causa | Resposta |
|---|---|
| **Execução** — a iniciativa não andou | Replanejar a iniciativa, remover o bloqueio, escalonar. O objetivo e a meta ficam. |
| **Recurso** — faltou gente, verba ou capacidade | Decisão de alocação, na hora, pelo patrocinador. Se não há recurso, a meta muda por decisão explícita — não por silêncio. |
| **Premissa** — o mundo mudou | Vai para a revisão anual. Aqui é onde se chama a lente: se a premissa competitiva mudou, o problema não é a meta. |
| **Meta** — o número era irreal desde o início | Recalibre e registre por quê. Uma meta irreal mantida no painel desmoraliza o painel inteiro. |

**Registre a causa, sempre.** O padrão que se acumula ao longo dos ciclos é o achado mais valioso do
acompanhamento: quando três vermelhos seguidos são de "recurso", o problema da empresa não é
estratégia, é dimensionamento — e isso é um objetivo de aprendizado e crescimento que faltou no mapa.

## 7. A revisão anual e a abertura do ciclo seguinte

Uma sessão por ano, com a mesma sala do WS3:

- Objetivos concluídos saem do mapa. **Objetivo cumprido que continua no plano é a assinatura do
  documento de gaveta** — na sondagem do ciclo seguinte ele aparece como "ajustar" com a observação
  *"já aconteceu"*, e isso significa que ninguém olhava para aquele mapa havia um ano.
- Premissas de cenário são reavaliadas contra os gatilhos observados.
- Metas do ano seguinte são recalibradas e reamarradas ao orçamento.
- O mapa é reemitido com data de versão.

Quando a revisão anual encontra mais de um terço do mapa obsoleto, não é revisão — é novo ciclo de
planejamento, e as quatro fases voltam. Ver `diagnostico-de-posicionamento`, que é onde ele recomeça.

## 8. O que mata o ritual

- **Painel que ninguém alimenta.** Prazo de apuração sem dono é prazo sem apuração.
- **Reunião que o patrocinador falta.** Duas ausências seguidas e a reunião vira opcional para todos.
- **Excesso de indicadores.** Painel de oitenta linhas não é lido. Se o WS4 gerou isso, corte na
  primeira revisão — melhor um painel parcial vivo que um completo morto.
- **Consultor que sustenta a cadência sozinho.** Enquanto o consultor convoca, funciona; quando o
  contrato acaba, para. A transferência do papel de coordenador é entregável desta fase, não gentileza.
- **Reunião sem decisão.** Se três ciclos passam sem nenhuma decisão de alocação tomada na sala, a
  reunião é relatório — e relatório se lê por e-mail.

## 9. Fronteiras

| Pergunta | Onde se resolve |
|---|---|
| Indicadores, metas, dicionário e roadmap monitorados aqui | `desdobramento-e-metas` |
| Mapa e objetivos revisados na sessão anual | `direcionadores-e-objetivos` |
| Gatilhos de cenário monitorados nas reuniões | `analise-de-ambientes` |
| Recomeço do ciclo completo de planejamento | `diagnostico-de-posicionamento` |
| Se a premissa competitiva mudou de fato | `acta-pensadores-de-negocios`, skill `lentes` |
| Registro de estado entre sessões e consultores | `acta-way`, skill `checkpoint` |
