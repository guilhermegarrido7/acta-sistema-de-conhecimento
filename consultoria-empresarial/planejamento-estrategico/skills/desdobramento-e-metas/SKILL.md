---
name: desdobramento-e-metas
description: Desdobrar cada objetivo estratégico em iniciativa, indicador, meta, responsável e orçamento, fechando o dicionário de indicadores e o roadmap. Acionar ao conduzir o WS4, ao escrever indicador e meta, ao negociar o dono de cada objetivo, ou ao amarrar a meta estratégica ao orçamento do ano.
---

# Desdobramento e metas — o WS4

## Subordinação

Esta skill é de **projeto**. O método transversal da firma vive em `acta-way` — carregue-a para o
protocolo de checkpoint entre sessões e consultores, para as convenções de entregável e para a regra
de anonimização. O **método de prática** (negociação de meta, gestão de mudança, condução de reunião
de gestor) virá de `acta-metodo-consultoria` quando ele sair do esqueleto; até lá, o que estiver aqui
é o particular do planejamento estratégico.

> Se `acta-way` não estiver instalado, avise o usuário em vez de improvisar o protocolo:
> `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.

Se a meta é ambiciosa demais ou de menos para a estrutura do setor é pergunta de julgamento
estratégico e **não se resolve aqui**: carregue `acta-pensadores-de-negocios`, skill `lentes`. Esta
skill entrega a disciplina de desdobramento.

A mecânica da sala está em `workshops-de-planejamento`.

## O que esta skill entrega

O **plano desdobrado**: cada objetivo do mapa com iniciativa, líder, plano de ação, responsável,
indicador e meta — mais o dicionário de indicadores, o roadmap e a amarração com o orçamento. É o
artefato que decide se o plano executa. Mapa bonito sem esta camada é documento de gaveta com
diagramação melhor.

## 1. A linha canônica

Todo desdobramento produz linhas de uma tabela com oito campos, e nenhum é opcional:

| Campo | O que é | Regra |
|---|---|---|
| **Perspectiva** | Financeira, Clientes e mercado, Processos internos, Aprendizado e crescimento | Vem do mapa |
| **Objetivo estratégico** | O direcionamento | Vem do mapa, sem reescrita |
| **Iniciativa estratégica** | O projeto que faz o objetivo acontecer | Um objetivo pode ter mais de uma |
| **Líder da iniciativa** | Quem responde pela execução e pelo controle da iniciativa | Uma pessoa, nunca uma área |
| **Plano de ação** | As ações concretas dentro da iniciativa | Verbo no infinitivo, resultado verificável |
| **Responsável pela ação** | Quem executa e reporta a ação | Pode ser diferente do líder |
| **Indicador** | Como se mede o avanço | Ver §2 |
| **Meta** | O nível esperado, com prazo | Ver §3 |

Exemplo de linha, com conteúdo ilustrativo: *Clientes e mercado · Desenvolver agenda digital ·
Contratação em canal móvel · [líder] · Identificar no mercado solução tecnológica pronta e em
operação · [responsável] · % de contratações via canal móvel no ano · 30% em 12 meses após a entrada
em operação.*

Repare no último campo: a meta declara **a partir de quando** conta. Meta de adoção que começa a
valer antes de a solução existir é a forma mais comum de nascer descumprida.

**A separação entre líder da iniciativa e responsável pela ação não é burocracia.** Em mid-market, o
mesmo diretor lidera cinco iniciativas; quem executa cada ação é outra pessoa. Se só o líder aparece
na tabela, ele vira gargalo declarado e a reunião de acompanhamento passa a ser sobre a agenda dele.

## 2. Indicadores

### 2.1 OKR como gramática

A casa usa **OKR** para articular objetivo e medição: o **objetivo** é qualitativo, inspirador e
alinhado à visão; os **resultados-chave** o traduzem em métricas quantitativas e acompanháveis. O
objetivo já veio do mapa no WS3; o WS4 escreve os resultados-chave.

Dois a quatro resultados-chave por objetivo. Um só costuma ser gamificável; mais de quatro dilui.

### 2.2 SMART como filtro de redação

Todo indicador passa por **SMART** antes de entrar: específico, mensurável, acordado, realista e com
prazo. O "acordado" é o que mais falha e o que mais importa — meta imposta em sala não é acordo, é
registro de expectativa, e reaparece como discussão na primeira reunião de acompanhamento.

### 2.3 Antes de criar indicador novo, analise os que já existem

A ordem certa é: levantar os indicadores que a empresa já acompanha, avaliar o alinhamento deles com
os objetivos recém-definidos, e só então criar o que falta. Vale por duas razões: o indicador que já
existe tem série histórica, e o indicador que existe e não se liga a nenhum objetivo é sinal de
esforço de medição gasto onde a estratégia não está.

### 2.4 O dicionário de indicadores

Produto formal do WS4, uma ficha por indicador:

```
Nome · Objetivo a que se vincula · Fórmula de cálculo (explícita, numerador e denominador)
Unidade · Fonte do dado e sistema de origem · Responsável pela apuração
Periodicidade · Polaridade (maior é melhor / menor é melhor) · Linha de base e data
Meta do ciclo, com marcos intermediários
```

**Indicador sem fonte de dado declarada não entra.** É o teste mais barato do plano inteiro: se
ninguém sabe dizer de onde sai o número, aquele indicador vai parar de ser apurado no segundo mês. E
quando a fonte não existe ainda, isso não descarta o indicador — cria uma iniciativa de processos
internos para construí-la, com prazo anterior ao início da medição.

### 2.5 Equilíbrio de tipos

Por objetivo, prefira misturar **indicador de resultado** (o que se quer alcançar) com **indicador de
tendência** (o que antecipa o resultado). Rentabilidade é resultado e chega tarde; taxa de conversão
de proposta e ocupação de ativo antecipam. Plano só com indicador de resultado avisa o desvio quando
já não dá para corrigir.

## 3. Metas

- **A meta é negociada, não distribuída.** O consultor fornece diretrizes de formulação e o gestor
  responsável propõe o número; a diretoria valida. Esse vaivém — o *catchball* do **Hoshin Kanri** —
  é o que transforma meta corporativa em compromisso de quem executa, e é a razão de o WS4 ter uma
  **reunião de orientação** com os gestores antes da consolidação, e não só a sessão plenária.
- **Meta tem linha de base e data.** *"Aumentar a margem"* não é meta. *"Elevar a margem de X% em
  [ano-base] para Y% em [ano-alvo]"* é.
- **Marcos intermediários, sempre.** Meta de três anos sem marco anual é meta que só é cobrada no
  fim. Marque o ponto de verificação de cada ciclo de acompanhamento.
- **Meta que depende de terceiro precisa dizer disso.** Adjudicação de contrato, decisão de cliente
  âncora, aprovação regulatória — registre a dependência na ficha. Não é desculpa antecipada; é o que
  permite avaliar o desempenho do dono contra o que ele de fato controla.

## 4. A ponte com o orçamento

**Meta estratégica que não está no orçamento não é meta.** É a causa mais frequente de plano que
para: o objetivo foi aprovado no workshop, o orçamento foi feito na área financeira dois meses depois
com outra premissa, e a partir daí o plano e o dinheiro apontam para direções diferentes.

### 4.1 O exercício de projeção orçamentária

O desdobramento da meta de receita se faz numa estrutura de **quantidade × preço, por linha e por
unidade de negócio**, com o histórico ao lado do orçado:

| Aba | Conteúdo | Colunas |
|---|---|---|
| **Quantidade** | Inventário de ativos ou itens, por categoria e por unidade | Já contratado para o ano-alvo · projetado adicional · total projetado · disponível (capacidade) · **taxa de ocupação** do ano-alvo e do ano anterior |
| **Preço** | Preço médio por item e categoria | Realizado t-2 · realizado t-1 · orçado t+1 · variação · **preço confrontado com o investimento no ativo** |
| **Volume de serviços** | Quantidade vendida por item, agrupada e por unidade | Realizado t-2 · realizado t-1 · orçado t+1 |
| **Preço de serviços** | Preço médio por item, por unidade | Realizado t-2 · realizado t-1 · orçado t+1 |

Cinco decisões de método estão embutidas nesse desenho, e são elas que valem:

1. **Quantidade e preço são projetados separadamente.** Projetar receita direto em valor esconde qual
   das duas alavancas o plano está puxando — e são alavancas com donos diferentes.
2. **O que já está contratado é separado do que ainda precisa ser vendido.** A conversa sobre a meta
   muda completamente quando a sala vê quanto do ano já está em carteira.
3. **A capacidade entra como teto explícito.** Taxa de ocupação obriga a meta de receita a passar
   pelo ativo que existe — e quando a ocupação projetada ultrapassa o razoável, a meta de receita
   acabou de criar uma necessidade de investimento que precisa entrar no plano.
4. **Dois anos de histórico ao lado do orçado.** Uma série de dois anos é o mínimo para a sala
   perceber se a projeção é continuidade ou é ruptura, e exigir a justificativa quando for ruptura.
5. **Preço confrontado com o investimento no ativo.** Para negócio intensivo em capital, preço que
   não devolve o ativo em prazo aceitável é volume que destrói valor — e a planilha deve tornar isso
   visível na própria linha, não numa análise separada que ninguém faz.

Distribua a planilha **em branco, com a estrutura montada e rótulos genéricos**, e conduza o
preenchimento como exercício do gestor de cada unidade. O valor está no preenchimento, não no
formato.

### 4.2 Onde isso continua

O orçamento completo — despesas, custo, investimento, financiamento, demonstrações projetadas,
ciclo de aprovação e controle orçamentário — **não é escopo do planejamento estratégico**. Ele vive
em `acta-planejamento-orcamentario` quando esse plugin existir. Enquanto não existir, entregue o
exercício de projeção de receita amarrado às metas e diga explicitamente ao cliente qual é a
fronteira: o planejamento estratégico entrega a meta e o driver; o ciclo orçamentário entrega o
número consolidado e o controle.

Para modelagem econômico-financeira de projeções — drivers, cenários, coerência entre crescimento,
retorno e reinvestimento — existe `acta-modelagem-economico-financeira`. Não refaça aqui.

## 5. O roadmap

Consolide as iniciativas num roadmap de curto, médio e longo prazo, com prazo, líder e
interdependência. Duas regras:

- **Sequência antes de simultaneidade.** Iniciativa de processo que habilita iniciativa de cliente
  vem antes; roadmap que começa tudo no primeiro trimestre não começa nada.
- **Capacidade de execução é restrição declarada.** Em mid-market, a mesma primeira linha lidera
  operação e plano. Conte quantas iniciativas cada líder acumula; acima de duas a três simultâneas, o
  roadmap é ficção — e é melhor descobrir isso no WS4 do que no terceiro mês.

## 6. Fronteiras

| Pergunta | Onde se resolve |
|---|---|
| Objetivos e mapa que são desdobrados aqui | `direcionadores-e-objetivos` |
| Ritual, cadência e painel de acompanhamento | `painel-e-acompanhamento` |
| Orçamento completo e controle orçamentário | `acta-planejamento-orcamentario` (quando existir) |
| Modelagem de projeção, cenários e retorno | `acta-modelagem-economico-financeira` |
| Se a meta é compatível com a estrutura do setor | `acta-pensadores-de-negocios`, skill `lentes` |
| Kit, orientação aos gestores e ata do WS4 | `workshops-de-planejamento` |
| Convenção de planilha, anonimização, checkpoint | `acta-way` |
