---
name: processo-competitivo-e-propostas
description: Conduzir o processo competitivo, da carta de processo à proposta vinculante, com as propostas comparadas em base equivalente. Acionar ao redigir a carta de processo, ao comparar NBOs, ao definir a shortlist, ou ao preparar a proposta do comprador.
---

# Processo competitivo e propostas: a competição que o vendedor fabrica

## Papel desta skill

Direciona o desenho e a condução do processo competitivo: carta de processo e cronograma, rodada de
propostas não vinculantes (NBO), comparação em base equivalente, shortlist, management presentation
e rodada de propostas vinculantes. Redige a carta de processo e o comparativo quando pedido. **Não
envia nada a comprador**: cada contato é autorizado pelo vendedor e conduzido pelo sócio
responsável. As reservas jurídicas da carta, a minuta do contrato e o markup são da assessoria
jurídica; esta skill define a posição econômica que esses textos têm de carregar.

Esta etapa corre **intercalada com `negociacao-e-loi`**. Aqui se organiza a competição; lá se
calcula o teto de cada comprador e a estrutura de preço. A cada rodada, uma alimenta a outra.

## O princípio

> **O processo é o ativo do vendedor.** A tensão competitiva existe enquanto houver mais de um
> proponente crível, com o mesmo prazo e a mesma régua.

A razão econômica está em `segmentacao-de-compradores`: o número de proponentes simultâneos é a
variável de processo que mais move o preço. Esta skill transforma o princípio em regra de condução:

1. **Prazo sincronizado.** Proposta que chega sozinha negocia sozinha. Todos os proponentes da mesma
   fase recebem as mesmas regras e entregam na mesma data.
2. **Régua definida antes da proposta.** O conteúdo mínimo é exigido na carta. Proposta fora do
   formato não se compara, e o que não se compara não pressiona ninguém.
3. **Informação igual na mesma fase.** O que se abre a um proponente se abre a todos os da mesma
   fase, salvo a informação concorrencialmente sensível, tratada por clean team (ver
   `due-diligence-e-data-room`).

## O formato do processo

Decisão do vendedor, com recomendação da assessoria, tomada antes da carta:

| Formato | Ganha | Perde |
|---|---|---|
| Negociação bilateral | Sigilo e velocidade | A tensão competitiva: o preço depende só do teto que o comprador revelar |
| Leilão restrito, com os compradores priorizados | Tensão com sigilo controlado | Exige lista bem segmentada e prazos curtos |
| Leilão amplo | Máxima tensão | Risco de vazamento ao mercado, a clientes e a empregados |

A lista de quem entra vem de `segmentacao-de-compradores`. Não confunda a lista curta de abordagem de
lá com a shortlist da fase 2 daqui, formada depois das NBOs.

## A carta de processo

Acompanha o IM, depois do NDA, e fixa as regras da 1ª fase. Uma segunda carta abre a rodada
vinculante. A estrutura das duas e o modelo do comparativo estão em
[references/carta-de-processo.md](references/carta-de-processo.md).

A carta da 1ª fase sempre contém o prazo da NBO (data, hora e canal), o conteúdo mínimo da proposta,
o canal único de comunicação pela assessoria (contato direto com administradores, empregados,
clientes ou fornecedores do alvo é vedado), as fases seguintes e as reservas do vendedor (alterar o
cronograma, encerrar o processo, rejeitar ou negociar com qualquer parte). O texto das reservas é da
assessoria jurídica.

| Fase | O que acontece | O que fecha a fase |
|---|---|---|
| 1. Abordagem | Teaser, NDA, IM e carta de processo | NBOs recebidas no prazo |
| 2. Shortlist | Data room completo, management presentation, visita, Q&A, minuta do contrato pelo vendedor | Propostas vinculantes com markup |
| 3. Negociação final | Um ou dois proponentes, posição econômica fechada | Signing (ver `spa-signing-e-closing`) |

Prazo em semanas não é regra do método: defina com o vendedor, pelo porte do alvo e pelo tempo de
comitê dos compradores da lista. O critério vale para toda fase: curto o bastante para manter a
tensão, longo o bastante para que o comprador sério aprove internamente.

## A NBO: conteúdo mínimo a exigir

| Item | O que exigir | Por que |
|---|---|---|
| Valor e base | O valor e se é **enterprise value ou equity value**, com a data-base | Sem a base, dois números iguais valem coisas diferentes |
| Dívida líquida | O que o proponente trata como dívida, caixa e itens assemelhados | É a ponte para o equity value; cada item é ponto de negociação |
| Capital de giro | O nível de referência (peg) suposto | Define o ajuste no fechamento (ver `negociacao-e-loi`) |
| Estrutura e mecanismo de preço | À vista, diferido, earn-out, rollover; locked box ou completion accounts | O risco que cada parcela aloca ao vendedor |
| Fonte de financiamento | Caixa próprio, dívida, capital comprometido de fundo, captação pendente | Certeza de fechamento |
| Escopo de due diligence | Frentes, assessores e prazo pretendidos | Custo e prazo da fase 2 |
| Aprovações | Internas (comitê, conselho) e regulatórias (CADE, agência setorial), com prazo | Certeza e prazo de fechamento |
| Condicionantes | Diligência, financiamento, permanência de executivos, reorganização societária | O que transforma o preço em opção do comprador |
| Validade | Data até a qual a proposta vale | Evita proposta que expira em silêncio |

Acrescente o que o mandato exigir: perímetro (entidades e ativos incluídos), papel dos sócios depois
do fechamento, tratamento de contrato com parte relacionada.

> **NBO sem base declarada volta ao proponente antes da shortlist.** Pedir esclarecimento é barato;
> comparar errado é caro.

## Comparar em base equivalente

O headline não é o preço. Leve cada proposta a um **equity value comparável**, na mesma data-base:

```
Valor da proposta (headline), na base declarada
(−) dívida líquida e itens assemelhados, pela definição do proponente
(±) ajuste de capital de giro: peg do proponente contra o peg da casa
(−) desconto da parcela diferida: valor presente e risco de crédito do comprador
(−) desconto do earn-out: valor presente × probabilidade de pagamento
(−) desconto de retenção (escrow, holdback): prazo e probabilidade de liberação
= Equity value comparável
```

Os descontos são premissa da casa, e por isso aparecem: taxa, probabilidade e prazo de cada um ficam
declarados na tabela, para que o vendedor possa discordar da premissa sem descartar a comparação. A
ponte é a mesma do CFDF em `negociacao-e-loi` e do plugin de valuation
(`acta-modelagem-economico-financeira:triangulacao-e-faixa`, se estiver instalado).

Depois do preço, a leitura que o headline esconde:

| Dimensão | Pergunta |
|---|---|
| Certeza de fechamento | O financiamento está comprometido? A aprovação no CADE é necessária, e em que prazo? |
| Prazo | Quanto tempo até o closing, somando diligência, aprovações e condições? |
| Condicionantes | Quantas são, e quais dependem só da vontade do comprador? |
| Estrutura | Quanto é à vista? Quanto o vendedor recebe como credor ou sócio do comprador? |
| Conduta | O proponente tem histórico de renegociar depois da LOI? |

Feche com o **líquido do vendedor**: o que sobra depois de imposto, retenções e custos da transação.
A distribuição de lucros antes do fechamento mudou de conta com a Lei 15.270/2025 (ver
`negociacao-e-loi`); o cálculo é da assessoria tributária, com a ACTA fornecendo os cenários.

## A shortlist

Critérios, nesta ordem: equity value comparável, certeza de fechamento, aderência aos objetivos do
vendedor que não são preço (permanência da gestão, marca, empregados, perímetro), capacidade de
pagar e conduta.

- **Tamanho.** Pequena o bastante para conduzir a fase 2 com qualidade, grande o bastante para manter
  a tensão. Um só proponente na fase 2 é negociação bilateral com outro nome.
- **Quem fica de fora** recebe resposta cordial e rápida. Mantenha proponentes de reserva, sem
  promessa: quem foi dispensado com elegância volta quando o favorito tropeça.
- **Orientação aos que ficam.** A assessoria pode sinalizar a faixa em que a proposta precisa estar
  para seguir competitiva. **Nunca revele a proposta de outro proponente e nunca invente
  concorrência.** Blefe descoberto custa o processo, pela mesma razão que informação enviesada custa
  (ver a linha ética em `negociacao-e-loi`).

## Management presentation

O comprador avalia a gestão e o plano; o vendedor testa a tese do comprador.

- **Mesmo deck, mesmos números do IM.** Número novo na apresentação vira errata para todos os
  proponentes.
- **Ensaio com o sócio responsável**, com o banco de perguntas difíceis montado a partir do relatório
  de red flags (ver `due-diligence-e-data-room`).
- **Quem opera responde sobre operação**; número é do CFO ou da assessoria, nunca improviso.
- **Comprador concorrente**: o roteiro passa pelo filtro de informação concorrencialmente sensível
  antes da sessão.
- **Registre as perguntas.** Elas revelam a tese de cada comprador e alimentam o Q&A log.

## A rodada vinculante

A segunda carta pede: preço final, base e mecanismo; **markup da minuta do contrato preparada pelo
vendedor** (quem minuta define o ponto de partida, por isso a minuta circula antes das propostas);
evidência de financiamento; aprovações internas obtidas e o plano das regulatórias; confirmação de
que a diligência terminou, ou o escopo exato do que falta; validade.

**Leia o markup em reais.** Cada alteração na minuta tem equivalente de preço: cap de indenização
maior, prazo de sobrevivência mais longo, escrow maior, MAC mais amplo, condição precedente nova.
Some o custo esperado dos desvios e compare as propostas pelo preço **e** pelo markup. A tradução
termo a termo está em `spa-signing-e-closing`.

## Tensão competitiva e exclusividade

- **Exclusividade não se concede na fase de NBO.** Se for necessária, só na fase final, contra preço
  e condições firmes por escrito, por prazo curto e determinado (ver `negociacao-e-loi`).
- **Mantenha o segundo colocado engajado** até a assinatura, quando o vendedor autorizar. É o que
  impede o favorito de renegociar na diligência.
- **Desconfie de headline alto com condicionante ampla.** "Sujeito a diligência satisfatória" sem
  escopo é opção grátis sobre o mandato.
- **A mesma resposta para todos** no Q&A, salvo pergunta específica de um proponente ou informação
  de clean team.

## Espelho buy-side

Quando a ACTA assessora o comprador, a régua de cima vira checklist de entrega:

- **NBO**: base declarada, premissas de dívida líquida e capital de giro explícitas, estrutura,
  financiamento, escopo de diligência e condicionantes. Proposta clara não é desqualificada nem
  obriga o vendedor a adivinhar. O preço sai do teto calculado em `negociacao-e-loi` (as duas
  contas), não do múltiplo pedido pelo vendedor.
- **Proposta vinculante**: o markup prioriza o que tem valor econômico para o comprador (indenização
  específica, escrow, condição precedente), traduzido em reais, e abandona o que só atrasa.
- **Exclusividade se obtém com certeza**: financiamento comprometido, diligência curta e com escopo,
  poucas condicionantes.

A linguagem de não vinculação e as condições da proposta são revisadas pela assessoria jurídica do
comprador.

## O que entregar

1. A carta de processo da 1ª fase, com o cronograma, e a da rodada vinculante.
2. A tabela de conteúdo mínimo da NBO, anexa à carta.
3. O comparativo das propostas: ponte do headline ao equity value comparável, com cada desconto
   declarado, e a leitura de certeza, prazo, condicionantes, estrutura e conduta.
4. A recomendação de shortlist, com justificativa por proponente e o plano de comunicação aos que
   ficam de fora.
5. O roteiro da management presentation e o banco de perguntas difíceis.
6. O comparativo das propostas vinculantes, com o markup lido em reais.
7. A posição sobre exclusividade: quando, contra o quê, por quanto tempo.

Buy-side: a NBO e a proposta vinculante do comprador, com as premissas por escrito.

## Próximo passo

`due-diligence-e-data-room`, que abre a fase 2 à shortlist, e `negociacao-e-loi` a cada rodada de
proposta. Com a proposta escolhida: `spa-signing-e-closing`.
