---
name: diagnostico-e-escopo-de-dados
description: Fixe a pergunta de negócio e o escopo de um projeto de dados antes de tocar no dado, mapeando fontes, maturidade e viabilidade. Acionar ao abrir um projeto de analytics, ao definir o que é viável com os dados disponíveis, ao avaliar a maturidade de dados do cliente, ou ao separar a pergunta de negócio da curiosidade analítica.
---

# Diagnóstico e escopo de dados

Carregue antes desta skill `acta-metodo-consultoria:diagnostico-e-entrevistas` (a hierarquia de
autoridade entre fontes) e `acta-metodo-consultoria:mapeamento-as-is` (a reconstrução de base a partir
do dado bruto e a planilha-mestre com rastreabilidade): valem aqui e não são repetidas. Um projeto de analytics é um projeto de consultoria cujo insumo é dado.

Esta é a skill de entrada. O erro que mata um projeto de dados não é técnico, é de escopo: começar
pelo que o dado permite fazer em vez de pela decisão que o cliente precisa tomar. A ordem da casa é a
inversa de CRISP-DM mal aplicado — **a pergunta de negócio vem antes do dado, sempre**.

## 1. A pergunta de negócio, antes de tudo

Antes de abrir qualquer base, feche por escrito a pergunta que o projeto responde e a decisão que ela
destrava. Sem isso, o projeto vira exploração sem fim e entrega um painel bonito que ninguém usa.

| Pergunta ruim (orientada a dado) | Pergunta boa (orientada a decisão) |
|---|---|
| "O que os dados de cartão mostram?" | "Onde o grupo gasta fora de política, e quanto dá para cortar?" |
| "Dá para montar um dashboard de receita?" | "Qual unidade do grupo destrói resultado depois do intercompany?" |
| "Como consolidar as empresas?" | "O resultado consolidado real é o que a diretoria pensa que é?" |

A regra: **se a resposta ao projeto não muda uma decisão, o escopo está errado.** O deliverable de
analytics em consultoria é uma decisão pronta, não uma ferramenta (`insight-e-recomendacao`).

## 2. O inventário de fontes

Mapeie o que existe antes de prometer o que será feito. Para cada fonte:

| Dimensão | O que confirmar |
|---|---|
| **Origem** | Sistema (ERP, banco, cartão), planilha, PDF, extrato — e quem é o dono |
| **Granularidade** | Lançamento a lançamento, ou já agregado? Agregado quase sempre perde o que importa |
| **Cobertura** | Que período, que entidades, que completude — e o que falta |
| **Formato** | Estruturado (tabela), semiestruturado (extrato), não estruturado (descrição livre) |
| **Autoridade** | Qual fonte manda quando duas divergem (`acta-metodo-consultoria`) |

A pergunta decisiva do inventário: **a granularidade disponível sustenta a pergunta de negócio?**
Querer analisar gasto por categoria a partir de um total mensal não é projeto de analytics, é
adivinhação. Se o dado agregado não serve, o escopo real passa a ser *obter o dado granular* — e isso
se declara antes, não se descobre no meio.

## 3. A maturidade de dados do cliente

A maturidade define o que é viável e quanto o projeto vai custar de tratamento. Em mid-market, quase
sempre é baixa, e isso é o normal a planejar, não a exceção a lamentar.

| Nível | Sintoma | Consequência para o escopo |
|---|---|---|
| **Baixa** | Dado em planilha e PDF, sem padrão, descrição livre, retrabalho manual | A maior parte do esforço é ingestão e tratamento (`ingestao-e-tratamento`) |
| **Média** | ERP com dado estruturado, mas sem visão gerencial; reclassificação manual | O esforço é reclassificação e consolidação |
| **Alta** | Dado estruturado e governado, com visão gerencial pronta | O esforço é modelagem e insight; raro em mid-market |

> Âncora de mercado: a maturidade se avalia contra as áreas de conhecimento do DAMA-DMBOK (qualidade,
> arquitetura, governança), mas sem transformar o projeto num programa de governança de dados. Para
> mid-market, o diagnóstico de maturidade serve para **dimensionar o tratamento**, não para vender
> uma transformação de governança que o cliente não pediu.

## 4. A lente AI-first

Mapear fontes, amostrar bases e diagnosticar maturidade é trabalho que o agente acelera: ele abre as
bases, mede granularidade e completude, identifica o formato de cada fonte e monta o inventário. **O
julgamento humano fica na pergunta de negócio e no recorte de escopo** — a decisão que o agente não
toma porque ela depende de entender o que o cliente precisa decidir. Apresente o inventário e o
escopo proposto ao responsável, e só comece o tratamento depois do aceite.

## O que entregar

1. A pergunta de negócio e a decisão que ela destrava, por escrito, validadas com o cliente.
2. O inventário de fontes: origem, granularidade, cobertura, formato e autoridade de cada uma.
3. O veredito de viabilidade: a granularidade disponível sustenta a pergunta? Se não, o escopo real
   (obter o dado) declarado.
4. O nível de maturidade de dados, usado para dimensionar o esforço de tratamento.
5. O escopo fechado: o que entra, o que fica de fora, e o entregável final.

## Próximo passo

`ingestao-e-tratamento`, para trazer a base crua ao formato analisável. A qualidade dessa base é o
que a skill seguinte (`qualidade-e-validacao`) vai ter de provar antes de qualquer número ser
publicado.
