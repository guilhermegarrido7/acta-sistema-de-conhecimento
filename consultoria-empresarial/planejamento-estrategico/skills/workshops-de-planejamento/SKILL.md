---
name: workshops-de-planejamento
description: Desenhar e conduzir a sequência de workshops do planejamento estratégico — kit de participante, pré-leitura, dinâmica de sala e ata de decisão. Acionar ao montar o cronograma de fases e workshops, ao preparar o material de um WS, ao conduzir a sessão com sócios e diretores, ou ao fechar o que foi decidido.
---

# Workshops de planejamento — a mecânica de condução

## Subordinação

Esta skill é de **projeto**. O método transversal da firma vive em `acta-way` — carregue-a para o
protocolo de checkpoint entre sessões e consultores, para as convenções de entregável e para a regra
de anonimização. O **método de prática** (facilitação, gestão de mudança, condução de reunião de
cliente) virá de `acta-metodo-consultoria` quando ele sair do esqueleto; até lá, o que estiver aqui é
o particular do planejamento estratégico, não o genérico da consultoria.

> Se `acta-way` não estiver instalado, avise o usuário em vez de improvisar o protocolo:
> `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.

Julgamento estratégico — que lente aplicar a uma pergunta de posicionamento, se a vantagem dura —
**não se resolve aqui**. Carregue `acta-pensadores-de-negocios`, skill `lentes`. Esta skill trata da
sala: quem entra, o que recebe antes, o que sai escrito.

## O que esta skill entrega

O **desenho e a condução da sequência de workshops**, e a ata de decisão de cada um. As skills
temáticas dizem *o que* se decide em cada workshop; esta diz *como a sessão roda* e o que impede
quatro horas de diretoria virarem lista de boas intenções.

## 1. Quatro fases, quatro workshops — e por que numerar

A casa organiza o trabalho em quatro fases, cada uma fechando num workshop numerado. A numeração não
é estética: ela dá à liderança um contrato visível de quantas vezes a agenda será tomada, e dá ao
consultor o direito de recusar assunto fora de fase.

| Fase | Nome | Workshop que a fecha | O que sai |
|---|---|---|---|
| **I** | Definição das diretrizes do negócio | **WS1** — Elementos estratégicos | Negócio, propósito, aspiração (visão), valores |
| **II** | Análise do ambiente | **WS2** — SWOT e cenários | Matriz SWOT validada, cenários, vetores priorizados |
| **III** | Formulação das estratégias | **WS3** — Mapa estratégico | Objetivos estratégicos nas quatro perspectivas |
| **IV** | Gestão estratégica | **WS4** — Projetos, indicadores e metas | Iniciativas, indicadores, metas, donos, modelo de acompanhamento |

Fase I é precedida pelo diagnóstico — entrevistas individuais, questionário e levantamento
documental. Ver `diagnostico-de-posicionamento`. **Nunca comece pelo WS1.**

**Cronograma de referência:** cinco semanas para as quatro fases, seguidas de acompanhamento
periódico ao longo de seis a oito meses. Cinco semanas é agressivo e só fecha com agenda travada de
sócios e diretores antes do kickoff. Se a agenda não fecha, alongue o cronograma no kickoff — não na
semana 4, quando o cliente já contou para o time que o plano sai em novembro.

**Quando há mais de uma unidade de negócio**, o WS1 e o WS2 rodam por negócio e o WS3 produz **um
mapa por negócio**. Não force um mapa único sobre negócios com clientes, ciclo e economia
diferentes — o resultado é um mapa que não serve a nenhum dos dois.

## 2. O que todo workshop tem, sem exceção

### 2.1 Pré-leitura distribuída com antecedência

O material de pré-leitura é obrigatório e é distribuído **antes**, não na abertura. No WS1, a
pré-leitura é o plano estratégico vigente mais o diagnóstico de entrada. Nos demais, é o produto do
workshop anterior. Quem chega sem ler consome o tempo de quem leu.

### 2.2 Kit do participante

Um caderno por participante, com o conteúdo do workshop, os espaços de anotação e — isto é o que faz
diferença — **o banco de referências anonimizadas**. Ver seção 3.

### 2.3 Abertura pelo resultado da sondagem

Todo bloco temático abre com o resultado da sondagem daquele item: *"propósito, 100% reescrever"*,
*"valores, dois terços ajustar"*. Isso faz três coisas de uma vez: mostra que a pauta veio do grupo e
não do consultor, dá permissão explícita para mudar o que já existe, e transforma divergência
anônima em pauta pública sem expor quem disse o quê.

### 2.4 Votação e priorização com instrumento

Use sistema de votação eletrônica para priorizar objetivos, vetores e iniciativas. O ganho não é
tecnológico: é que o voto simultâneo e anônimo impede a ancoragem no primeiro que fala — que, em
empresa familiar, é quase sempre o sócio majoritário. Onde não houver ferramenta, use cédula em
papel; o que não vale é mão levantada em sequência.

### 2.5 Fechamento redigido na sala

Nenhum workshop termina sem o texto acordado projetado na tela. Propósito, visão, objetivo,
indicador — a redação é lida em voz alta e aprovada antes de a sala esvaziar. O que for deixado para
"eu consolido e mando depois" volta na semana seguinte como discussão nova.

## 3. A regra da folha em branco

**Nunca abra um bloco com folha em branco.** Em toda dinâmica, chegue com:

1. **A formulação vigente**, exibida como está.
2. **O resultado da sondagem** sobre ela, com as observações preservadas e sem atribuição de nome.
3. **Uma versão candidata**, redigida a partir das observações dos próprios respondentes.
4. **Três a cinco referências de pares anonimizadas** — formulações reais de empresas comparáveis,
   sem identificação, para calibrar ambição e nível de abstração.

Reagir a um texto é uma tarefa que um grupo de executivos faz bem e rápido. Escrever um texto em
grupo é uma tarefa que o mesmo grupo faz mal e devagar. O ganho de método está inteiro nessa troca.

O banco de referências é o ativo reutilizável mais barato de manter da prática. Toda formulação de
propósito, visão, valor e objetivo que passar pela casa entra no banco **sem nome de empresa** — ver
a regra de anonimização em `acta-way`.

## 4. Quem senta na sala

- **Sócios e primeira linha.** O workshop decide alocação de capital e de atenção; quem não pode
  decidir isso só aumenta o tempo de convergência.
- **Oito a doze pessoas.** Acima disso, a sessão vira plenária e o debate real migra para o corredor.
- **Convidado técnico por bloco, não pelo dia inteiro.** Quem detém um dado específico entra para
  aquele bloco.
- **Um facilitador e um relator.** O facilitador não redige; o relator não opina. Quando a mesma
  pessoa faz as duas coisas, a sala perde condução exatamente nos minutos que decidem.

**Especificidade de empresa familiar.** A mesa tem sócios que são parentes, gestores que são
parentes de sócios e gestores que não são. Duas regras que evitam o silêncio caro:

- **Divergência já mapeada entra pela sondagem, não pela boca de quem discorda.** Foi para isso que o
  diagnóstico rodou individualmente.
- **Assunto societário não é pauta de workshop.** Sucessão, dividendo, participação e desempenho de
  familiar em cargo de gestão saem da sala e vão para conversa reservada com os sócios. Misturar os
  dois trava o plano e queima o consultor.

## 5. Ata de decisão

Ao fim de cada workshop, um documento curto — duas a quatro páginas:

1. **Decidido** — texto final acordado, item a item.
2. **Em aberto** — o que não fechou, com dono e prazo de resposta.
3. **Fora de escopo** — o que a sala levantou e não pertence ao planejamento, registrado para não
   voltar.
4. **Insumos pendentes** — dado que alguém se comprometeu a trazer, com nome do papel e data.

A ata é enviada em até dois dias úteis e o silêncio conta como concordância declarada — diga isso no
próprio documento. Em cinco semanas não existe folga para consenso tácito mal entendido.

## 6. Fronteiras

| Pergunta | Onde se resolve |
|---|---|
| O que se decide no WS1 | `proposito-visao-e-valores` |
| O que se decide no WS2 | `analise-de-ambientes` |
| O que se decide no WS3 | `direcionadores-e-objetivos` |
| O que se decide no WS4 | `desdobramento-e-metas` |
| O ritual depois que os workshops acabam | `painel-e-acompanhamento` |
| Entrevistas, questionário e sondagem que antecedem tudo | `diagnostico-de-posicionamento` |
| Que lente teórica aplicar a um julgamento competitivo | `acta-pensadores-de-negocios`, skill `lentes` |
| Identidade visual do deck, anonimização, checkpoint | `acta-way` |

## 7. O que faz um workshop falhar

- **Workshop sem pré-leitura** vira aula de contexto. A primeira hora é gasta nivelando gente que
  poderia ter chegado nivelada.
- **Workshop sem decisão redigida** vira reunião de alinhamento. O grupo sai com a sensação de acordo
  e sem o texto que prova o acordo.
- **Workshop que discute o que já foi decidido** é o sintoma de ata fraca no anterior. Reabra só com
  fato novo, e diga isso na abertura.
- **Sessão de mais de quatro horas.** A qualidade da decisão cai bem antes do fim; prefira dois
  blocos de meio período a um dia inteiro.
- **Consultor que redige o propósito da empresa.** O texto sai melhor e não sobrevive. O papel do
  consultor é trazer estrutura, referência e candidato — a autoria fica com a liderança, porque é ela
  que vai defender aquele texto internamente pelos próximos três anos.
