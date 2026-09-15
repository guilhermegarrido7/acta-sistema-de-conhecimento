# Planejamento Estratégico

Condução de planejamento estratégico: diagnóstico de posicionamento, definição de direcionadores, desdobramento em objetivos e indicadores, e agenda de execução.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`) — é onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.

## O que faz

Conduz um ciclo completo de planejamento estratégico em empresa de mid-market brasileiro — do
diagnóstico de entrada ao ritual de acompanhamento que impede o plano de virar documento de gaveta.
O trabalho é organizado em **quatro fases fechadas por quatro workshops numerados** (WS1 a WS4) e
entrega, em sequência: o diagnóstico de posicionamento, os elementos estratégicos redigidos, a
matriz SWOT com cenários e vetores priorizados, o **mapa estratégico nas quatro perspectivas do
Balanced Scorecard**, o desdobramento em iniciativa, indicador, meta, dono e orçamento, e o modelo de
acompanhamento instalado e rodando.

**O que este plugin não faz.** Ele não reensina teoria de estratégia: julgamento estratégico —
posicionamento, durabilidade de vantagem, leitura de estrutura setorial — vive em
`acta-pensadores-de-negocios`, skill `lentes`, e cada skill daqui manda carregá-la no ponto em que a
pergunta deixa de ser de método e passa a ser de julgamento. Também não produz tese setorial para
sustentar múltiplo em transação: isso é `acta-ma-sell-buy-side`, skill `estudo-setorial` — lá o
objetivo é vender a empresa, aqui é decidir para onde ela vai.

## Skills

Uma skill por etapa do ciclo de vida do projeto, mais uma transversal de condução.

| Skill | Etapa | Descrição |
|---|---|---|
| `diagnostico-de-posicionamento` | Pré-WS1 | As cinco perguntas, o questionário, o form de sondagem sobre o plano vigente, as entrevistas individuais e o levantamento documental. O documento de entrada que redesenha os workshops. |
| `workshops-de-planejamento` | Transversal | A mecânica de condução: quatro fases e quatro WS, cronograma, pré-leitura, kit de participante, a regra da folha em branco, votação, quem senta na sala e a ata de decisão. |
| `proposito-visao-e-valores` | WS1 | Negócio, propósito, aspiração e valores. Decomposição do propósito em cinco campos e da visão em dois, os três testes antes de aprovar o texto, e por que isso não é decorativo em empresa familiar. |
| `analise-de-ambientes` | WS2 | Ambiente externo (macro em três colunas, programas públicos, choques de cadeia, análise competitiva, vetores de mudança), ambiente interno, cenários e a matriz SWOT validada. |
| `direcionadores-e-objetivos` | WS3 | Vocabulário fixado, as quatro perspectivas do BSC com a pergunta de cada uma, derivação de objetivo a partir da SWOT, cadeia de causa e efeito, três horizontes e o mapa estratégico. |
| `desdobramento-e-metas` | WS4 | A linha canônica de oito campos, OKR e SMART, dicionário de indicadores, negociação de meta e o exercício de projeção orçamentária que amarra meta a orçamento. |
| `painel-e-acompanhamento` | Fase IV | Cadência, papéis, painel com critério de farol, pauta da reunião de revisão, diagnóstico do vermelho, revisão anual e o que mata o ritual. |

## Fluxo típico

```
Kickoff
  └─ diagnostico-de-posicionamento      questionário + sondagem + entrevistas + documental
        │                                → documento de entrada, valida o desenho dos workshops
        ▼
  workshops-de-planejamento             (carregada junto em todo WS: kit, pré-leitura, votação, ata)
        │
        ├─ Fase I  → WS1  proposito-visao-e-valores      negócio, propósito, aspiração, valores
        ├─ Fase II → WS2  analise-de-ambientes           ambientes, cenários, vetores, SWOT
        ├─ Fase III→ WS3  direcionadores-e-objetivos     objetivos + mapa estratégico (um por negócio)
        └─ Fase IV → WS4  desdobramento-e-metas          iniciativa · dono · indicador · meta · orçamento
                             │
                             ▼
                    painel-e-acompanhamento              painel + reuniões bimestrais + revisão anual
                             │
                             └─ revisão anual devolve ao mapa; ciclo novo reabre no diagnóstico
```

Cronograma de referência: **cinco semanas** para as quatro fases, com acompanhamento bimestral ao
longo dos seis a oito meses seguintes. Em grupo com mais de uma unidade de negócio, WS1 e WS2 rodam
por negócio e o WS3 produz **um mapa por negócio**.

## Âncoras de mercado

**Balanced Scorecard (Kaplan & Norton)** dá a estrutura do mapa estratégico e as quatro perspectivas.
**SWOT** e **PESTEL** estruturam o diagnóstico de ambientes. **OKR** e **SMART** dão a gramática dos
indicadores; **Hoshin Kanri** dá o vaivém de negociação da meta com quem executa. Os **três horizontes
(McKinsey)** diagnosticam o portfólio de iniciativas. Posicionamento competitivo remete a **Porter** —
e a lente, como todas as demais, é carregada de `acta-pensadores-de-negocios`, não reensinada aqui.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-consultoria`
ou `acta-metodo-auditoria`. Não repita aqui o que já está lá.

Pessoas aparecem por papel (*um dos sócios*, *a diretoria comercial*, *o líder da iniciativa*), nunca
por nome. Nenhuma skill deste plugin contém nome de cliente, de pessoa, de cidade, de marca ou número
real de faturamento, meta ou orçamento — os exemplos numéricos são ilustrativos e assim declarados.
