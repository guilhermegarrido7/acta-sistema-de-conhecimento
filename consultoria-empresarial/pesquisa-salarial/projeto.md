---
titulo: Pesquisa Salarial
pratica: consultoria-empresarial
duracao_tipica: 10 a 14 semanas
plugin: acta-pesquisa-salarial
---

## O que é, e quando a ACTA é contratada para isso

Uma pesquisa de remuneração e benefícios estabelece **o que o mercado relevante paga** para um
conjunto de cargos, e posiciona o cliente contra esse mercado. O entregável não é uma tabela de
salários: é a base para uma decisão de política de remuneração que o Conselho vai aprovar e o RH vai
executar por dois ou três anos.

A firma costuma ser contratada em três situações, e elas mudam o desenho do projeto:

- **O cliente perde gente e não sabe se é salário.** A pergunta real é de competitividade, e o
  projeto precisa de recorte por criticidade de cargo, não por todos os cargos.
- **O cliente vai reestruturar carreira ou fazer um PCCR.** A pesquisa é insumo de outro projeto, e
  o que importa é a consistência interna da estrutura, não só o mercado.
- **Um grupo setorial quer um painel comum.** Aqui a ACTA opera como organizadora: o painel é o
  produto, e cada participante recebe um relatório individual como contrapartida por ter fornecido
  dados.

## As etapas do ciclo de vida

O plugin tem uma skill por etapa. As que ainda não têm metodologia escrita estão marcadas no
catálogo e não disparam sozinhas.

| # | Etapa | O que fecha a etapa |
|---|---|---|
| 1 | Escopo e proposta | A fronteira do escopo fixada: quais cargos, quais componentes de remuneração, quais recortes |
| 2 | Abertura e cartão de identidade | O cartão preenchido e as particularidades estruturais registradas — é o que impede a metodologia de ser decidida de novo no meio |
| 3 | Painel de participantes | O painel aprovado formalmente pelo cliente |
| 4 | Plano de comunicação e convites | Convites enviados e confirmações obtidas |
| 5 | Instrumento de coleta | Formulário e dicionário de dados homologados com um participante-piloto |
| 6 | Condução da coleta | A base completa, ou o corte de encerramento declarado |
| 7 | Tratamento e validação da base | Os checks de consistência passando, com exclusões registradas e justificadas |
| 8 | Análise de competitividade | Comparatio, gap e custo de equalização calculados por cenário |
| 9 | Release e governança de dados | O release congelado com hash e revisão independente |
| 10 | Relatório e storyline | O deck aprovado internamente antes de ir ao cliente |
| 11 | Apresentação ao cliente | Pré-leitura do achado sensível feita, e o Comitê apresentado |
| 12 | Relatórios individuais | Cada participante com o seu, após piloto de conferência |
| 13 | Encerramento | O caso escrito e o benchmark atualizado |

## Onde este projeto dá errado

A parte que mais vale saber antes de começar. Cada item já aconteceu.

**O painel fecha pequeno demais e o recorte não publica.** É o risco número um e ele aparece tarde,
já com dados coletados. Se um recorte tem menos participantes que o mínimo de agregação, ele não
pode ser publicado — e o cliente esperava exatamente aquele número. *Prevenção:* dimensionar o número
de convites contra a taxa histórica de resposta, não contra a meta, e acordar desde o escopo o que
acontece com recorte insuficiente (consolidar com outro, ou não entregar).

**O cliente entende que vai receber dado individualizado por empresa.** Pesquisa salarial só existe
porque os participantes confiam no anonimato. Prometer, ou deixar subentendido, que o cliente saberá
quanto a empresa X paga destrói o painel do ano seguinte. *Prevenção:* os mínimos de agregação e as
regras de supressão entram na proposta e na carta-convite, por escrito, antes da coleta.

**A base chega com jornada, periodicidade e moeda misturadas.** Um cargo em 220 horas ao lado de um
em 180, salário mensal ao lado de anual. Somar isso produz um número que parece plausível e está
errado. *Prevenção:* normalização é etapa própria, com o dicionário de dados definido antes da
coleta e regras de validação já no instrumento.

**O matching de cargos é feito por título.** Dois cargos com o mesmo nome fazem coisas diferentes em
empresas diferentes, e o inverso também. Matching por título infla ou desinfla a mediana sem deixar
rastro. *Prevenção:* a equivalência é por conteúdo e nível funcional, com grau de match registrado
por cargo, e é a etapa que mais consome tempo de consultor sênior — dimensione a proposta assim.

**O achado sensível aparece na apresentação ao Comitê.** Descobrir ao vivo que o diretor está 40%
abaixo do mercado, ou que há disparidade interna difícil de justificar, transforma a apresentação em
outra reunião. *Prevenção:* pré-leitura reservada com o patrocinador antes do Comitê. Nunca é
opcional.

**O número muda depois de publicado.** Correção posterior a um número que já circulou custa mais que
o erro original. *Prevenção:* o release é congelado com hash e passa por revisão independente de um
segundo consultor antes de sair.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Relatório da pesquisa | Deck em PowerPoint, no padrão visual da casa | Cliente e Comitê Gestor |
| Tabela comparativa | Excel de consulta, com as estatísticas por cargo e recorte | RH do cliente |
| Painel interativo | Power BI, quando contratado | RH e gestores |
| Relatório individual | Um por empresa participante | Cada participante, como contrapartida |
| Livro de cálculos e release | Arquivo de governança, com universo, exclusões e hash | Interno, e disponível se auditado |

## Quem participa

**Do lado do cliente:** um patrocinador com autoridade para aprovar o painel e receber a pré-leitura
(normalmente o diretor de RH ou o CFO), e um ponto focal operacional que consolida os dados internos.
Nas pesquisas de painel setorial, um interlocutor por empresa participante.

**Do nosso lado:** um consultor responsável pela condução e pelo matching, que é a etapa que mais
exige senioridade, e um segundo consultor para a revisão independente do release — essa separação não
é formalidade, é o que a governança de dados exige.

## O que é preciso ter antes de começar

- **A base de cargos do cliente**, com descrição — não só o título. Sem descrição, não há matching.
- **A estrutura salarial vigente**, se existir, e a política de remuneração, mesmo que informal.
- **A definição de quais componentes entram**: salário base apenas, ou remuneração total com variável
  e benefícios. Isso muda o instrumento inteiro e precisa estar fechado no escopo.
- **A lista de empresas que o cliente considera mercado relevante** — que quase nunca coincide com o
  setor formal, e é uma discussão de posicionamento, não de código CNAE.
