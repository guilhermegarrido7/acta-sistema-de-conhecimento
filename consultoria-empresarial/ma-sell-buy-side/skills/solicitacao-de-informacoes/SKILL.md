---
name: solicitacao-de-informacoes
description: Redigir a carta de solicitação de informações ao alvo em quatro eixos — financeiro, operacional, comercial e regulatório — e conduzir as rodadas sucessivas até o data room estar suficiente. Acionar ao abrir a coleta de dados, ao pedir informação complementar ao alvo, ou ao avaliar se o data room já sustenta o valuation.
---

# Solicitação de informações — a carta que determina o que será possível analisar

## Papel desta skill

Direciona o conteúdo e a estrutura da carta, e o controle das rodadas. Redige o texto quando pedido;
não envia nada ao cliente nem ao alvo.

## Por que esta carta importa mais do que parece

Ela define o teto analítico do mandato inteiro. Dado que não foi pedido na primeira rodada chega —
quando chega — semanas depois, e a essa altura o modelo já foi construído sobre a aproximação.

Dois pedidos, em particular, decidem a qualidade do valuation e são os mais frequentemente omitidos:
**balancete analítico em Excel** (sem ele não há reorganização contábil, só estimativa sintética) e
**CapEx segregado entre expansão e manutenção** (sem ele não se distingue o negócio que converte
EBITDA em caixa daquele que precisa investir para crescer). Ver plugin de valuation, skills
`reorganizacao-contabil` e `capital-de-giro-e-capex`.

## Estrutura da carta

```
[timbrado]
<data por extenso>

<Nome do alvo>

Att. <destinatário>

Assunto: Solicitação inicial de informações
M&A Sell Side — <Nome do alvo>

Prezado(a)s,

<parágrafo de enquadramento do mandato>

1. FINANCEIRO E CONTÁBIL
2. OPERACIONAL E CAPACIDADE
3. COMERCIAL E MERCADO
4. AMBIENTAL, REGULATÓRIO E PASSIVOS
5. CONFIDENCIALIDADE

Respeitosamente,

<razão social da assessoria>
```

### Parágrafo de enquadramento

Ancora o pedido no mandato e nas conversas já havidas, e delimita o escopo da operação:

> "Na qualidade de assessores estratégicos da `<alvo>`, em continuidade às nossas conversas sobre o
> mandato de alienação estratégica da operação de `<descrição do escopo operacional>`, solicitamos o
> envio das informações e documentos listados abaixo."

O `<escopo operacional>` não é decorativo: ele define o perímetro da transação. Se o grupo tem
operações que ficam fora, é aqui que a exclusão aparece pela primeira vez.

## Os quatro eixos

### 1. FINANCEIRO E CONTÁBIL

- Demonstrações financeiras (balanço patrimonial, DRE e **balancete analítico**) dos últimos 3
  exercícios, **em formato Excel**;
- As mesmas demonstrações acumuladas do ano vigente, em Excel;
- Histórico de CapEx total dos últimos 3 anos, **segregando expansão vs. manutenção**; e
- Lista de empréstimos e financiamentos ativos.

Acrescente conforme o alvo — e cada um destes evita retrabalho garantido: **LALUR/e-Lalur** (sustenta
a alíquota efetiva), **notas explicativas**, **composição da dívida contrato a contrato** (prazo,
taxa, garantia, covenant), **parcelamentos tributários** com saldo e condições, **certidões negativas**,
e **aging de contas a receber e a pagar**.

### 2. OPERACIONAL E CAPACIDADE

- Histórico de volume processado dos últimos 3 anos, **desejável abertura mensal; caso não possua,
  aceitável o histórico anualizado**;
- Lista de ativos imobilizados;
- Lista de frota, especificando **própria vs. terceirizada**, com condições comerciais;
- **Capacidade instalada máxima por linha de serviço**; e
- Headcount por setor.

Capacidade instalada é o item que mais frequentemente volta vago ("depende") e o mais necessário: sem
ele não há como testar se a projeção de volume é fisicamente possível. Insista, e peça a base — ficha
técnica do equipamento, limite de licença, laudo.

### 3. COMERCIAL E MERCADO

- Lista de clientes com faturamento e volume dos últimos 3 anos, **por linha de serviço**;
- Principais contratos vigentes, **indicando vencimento e cláusulas de reajuste**; e
- Histórico de volume e preço médio de venda por linha de serviço dos últimos 3 anos.

O histórico de preço médio é o que permite testar poder de repasse — se a empresa repassou 60% da
inflação, projetar 100% é otimismo sem base. Sem esse dado, a premissa de preço fica indefensável.

### 4. AMBIENTAL, REGULATÓRIO E PASSIVOS

- Licenças ambientais de operação vigentes;
- Histórico de autuações ambientais e trabalhistas relevantes; e
- Relação de contingências e processos judiciais ativos.

Adapte ao setor: alvará sanitário, credenciamento, registro profissional, outorga, autorização de
funcionamento. **A licença costuma ser simultaneamente o principal ativo intangível e o principal
deal breaker** — e a data de vencimento dela é informação de preço.

### 5. CONFIDENCIALIDADE

Parágrafo corrido, não lista:

> "Reiteramos que todas as informações compartilhadas estão protegidas pelo Acordo de
> Confidencialidade (NDA) vigente, sendo acessadas exclusivamente pela equipe técnica envolvida no
> projeto."

## Convenções de redação

Não são maneirismo: são o que faz a carta ser lida como pedido profissional e respondida por inteiro.

- **Rubrica em caixa alta, sem verbo**, no formato "EIXO E EIXO".
- **Cada item é o objeto pedido**, não um pedido em primeira pessoa: "Lista de...", "Histórico de...",
  "Demonstrações financeiras...". Nunca "gostaríamos de receber".
- **Pontuação de lista jurídica:** itens terminam em `;`, o penúltimo em `; e`, o último em `.`.
- **Formato de entrega explicitado quando importa** — "em formato Excel". PDF de balanço assinado não
  serve para modelar, e pedir depois custa uma rodada.
- **Granularidade desejada com fallback aceitável na mesma frase.** "Desejável abertura mensal.
  Porém, caso não possua, aceitável o histórico anualizado." Evita que o pedido trave a coleta
  inteira por causa de um item.
- **Segregação analítica cravada no próprio pedido** — expansão vs. manutenção, própria vs.
  terceirizada, por linha de serviço, por setor. Pedir "CapEx" e segregar depois não funciona: quem
  responde manda o consolidado e a informação se perde na origem.
- **Janela padrão: 3 exercícios + acumulado do ano vigente.**

## Rodadas sucessivas

Uma carta não basta. O padrão é 2 a 3 rodadas, cada uma versionada por data (ver
`convencoes-de-projeto`), guardadas em `~~pasta de trabalho/1- Solicitação de informações/`.

- **1ª rodada** — os quatro eixos, ampla, para abrir o data room.
- **2ª rodada** — o que veio incompleto, mais o que a leitura do material revelou que faltava. É
  onde entram LALUR, contratos específicos, composição de dívida, aging.
- **3ª rodada** — pontos que só apareceram na modelagem ou na entrevista com a gestão.

Na segunda rodada em diante, **diga o que já recebeu**. Repedir o que já foi enviado corrói a
credibilidade do processo junto ao vendedor, que passa a achar que a assessoria não leu.

### Controle de pendências

Mantenha uma matriz simples, e mantenha-a viva:

| Item | Eixo | Status | Canal | Impacto se não vier |
|---|---|---|---|---|
| Balancete analítico 2024 | 1 | Recebido | — | — |
| CapEx segregado | 1 | Parcial | E-mail 2ª rodada | Capex de manutenção estimado; declarar limitação |
| Capacidade por linha | 2 | A solicitar | Reunião | Projeção de volume sem teste de viabilidade |

A coluna **impacto** é a que dá utilidade à matriz: transforma pendência administrativa em
consequência analítica, e é o que permite priorizar a cobrança e, quando o dado não vier, declarar a
limitação no deck em vez de esconder.

## Quando o data room já é suficiente

Não é quando tudo chegou — raramente tudo chega. É quando se consegue, com honestidade:

1. Reorganizar as demonstrações e **fechar a reconciliação de capital** em todos os anos históricos.
2. Sustentar cada add-back de EBITDA com **documento nomeado**.
3. Testar a projeção de volume contra **capacidade instalada**.
4. Estimar capital de giro por **dias**, com base histórica confiável.
5. Separar CapEx de manutenção de expansão, ou **declarar que não foi possível**.
6. Listar os passivos e contingências que entram na dívida líquida.

Faltando 1, 2 ou 6, o valuation não é defensável e a lacuna precisa ser fechada antes. Faltando 3, 4
ou 5, ele é possível **com limitação declarada** — e a declaração vai no deck, não numa nota de pé
de página que ninguém lê.

## Erro a evitar

**Pedir o que não se vai usar.** Uma carta longa demais recebe resposta parcial e atrasa o que
importa. Cada item deve ter um uso analítico identificável — se você não sabe em que linha do modelo
ou em que slide o dado entra, ele provavelmente não precisa estar na primeira rodada.

## Próximo passo

Com o data room aberto: `estudo-setorial` (que corre em paralelo e não depende do alvo) e o plugin de
valuation, skill `reorganizacao-contabil`.

# Característica importante

Cada empresa e setor são diferentes, portanto, essa é a estrutura básica de solicitação de informações, há particularidades a serem abordadas em cada um dos projetos. Ex: m&a de uma franquia -> é necessário que tenham os contratos da franquia e dinâmica de royalties.