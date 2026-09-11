---
name: go-to-market
description: Aplicar o gate de prontidão de vinte itens em quatro blocos antes de levar o ativo ao mercado, classificando entre não pronto, parcialmente pronto e pronto. Acionar antes de abordar compradores, ao avaliar se o material está completo, ao decidir o timing da rodada, ou quando o vendedor pressiona por pressa.
---

# Go-to-market — o gate antes da primeira abordagem

## Papel desta skill

Aplica o gate, dá o veredito e diz o que falta. Não abordar comprador nenhum: a decisão de ir a
mercado é do sócio responsável e do vendedor.

## Por que existe um gate

A primeira abordagem a um comprador acontece **uma vez**. Um comprador que recebe teaser com número
frágil, pede o IM e encontra incoerência, ou entra em Q&A e recebe resposta lenta, não volta ao
processo com a mesma disposição — e frequentemente compartilha a impressão com os outros do mesmo
mercado.

O gate existe porque a pressão sempre existe na direção oposta: o vendedor quer velocidade. **Ir a
mercado despreparado não acelera nada — atrasa, e barateia.**

## Os quatro blocos, vinte itens

Escala por item: `❌ Não existe` · `⚠️ Parcial` · `✅ Completo`.

### Bloco 1 — Base econômica e valuation

| # | Item | Essencial para |
|---|---|---|
| 1 | Demonstrações financeiras organizadas e confiáveis | Rodada inicial |
| 2 | **Normalização de EBITDA** (ajustes recorrentes e não recorrentes) | Rodada inicial |
| 3 | Drivers claros de geração de valor | — |
| 4 | **Valuation preliminar estruturado** (múltiplos, DCF ou ambos) | Rodada inicial |
| 5 | Expectativa do vendedor alinhada com a realidade de mercado | Rodada inicial |

Os itens 2 e 4 dependem do plugin de valuation, skills `qualidade-de-resultados` e
`triangulacao-e-faixa`.

> Se `acta-modelagem-economico-financeira` não estiver instalado, **avise o usuário** em vez de
> improvisar a metodologia de normalização e de valuation:
> `claude plugin install acta-modelagem-economico-financeira@acta-sistema-de-conhecimento --scope user`

**O item 5 é o mais subestimado do gate inteiro.** Um vendedor que espera 12x num setor que negocia a
7x vai recusar propostas boas, queimar compradores e desgastar o mandato até chegar, meses depois, ao
número que estava disponível no começo. Alinhar expectativa **antes** da primeira abordagem é
trabalho do assessor, é desconfortável, e é o que mais protege o resultado.

Quando o item 5 está desalinhado, o instrumento é o valuation com faixa e cenários — não a
argumentação. Mostrar a faixa que o método produz, com as precedentes e o football field, desloca a
conversa de opinião para evidência. Ver plugin de valuation, `triangulacao-e-faixa`.

### Bloco 2 — Material para abordagem inicial

| # | Item | Essencial para |
|---|---|---|
| 6 | Teaser estruturado | Rodada inicial |
| 7 | Equity story clara e consistente | — |
| 8 | Segmentação de compradores por tese | — |
| 9 | Pontos sensíveis já mapeados | — |
| 10 | Narrativa de crescimento conectada ao valuation | — |

O item 10 é a costura: a história do teaser e do IM tem de ser **a mesma** que sustenta as premissas
do modelo. Uma narrativa de crescimento acelerado com um modelo conservador — ou o inverso — é a
incoerência que o comprador encontra ao cruzar os dois documentos.

O item 9, pontos sensíveis mapeados, significa: você já sabe quais são as três perguntas difíceis, e
já tem resposta. Concentração de cliente, contingência relevante, dependência do sócio, licença perto
do vencimento, add-back agressivo. Ser surpreendido pela própria fragilidade na frente do comprador
custa mais que a fragilidade.

### Bloco 3 — Material para processo formal

| # | Item | Essencial para |
|---|---|---|
| 11 | **Memorando de informações estruturado** | Processo completo |
| 12 | **Coerência entre teaser, IM e valuation** | Rodada inicial |
| 13 | Projeções financeiras defendíveis | — |
| 14 | Organização mínima de documentos para Q&A | — |
| 15 | Red flags já identificadas | — |

O item 12 é o que este gate mais frequentemente reprova, e é verificável em minutos: EBITDA de
referência igual nos três? Amostra de precedentes e múltiplos idênticos? Moat do teaser é a mesma
tese do CAP no valuation? Backlog e capacidade batendo? Ver a checagem em `information-memorandum`.

### Bloco 4 — Execução e controle

| # | Item | Essencial para |
|---|---|---|
| 16 | Estratégia clara de abordagem (timing e priorização) | — |
| 17 | Controle de versões dos materiais | — |
| 18 | Responsáveis internos definidos | — |
| 19 | Capacidade de resposta rápida a interessados | — |
| 20 | Processo decisório claro com o vendedor | — |

Bloco frequentemente tratado como burocracia, e é o que determina se o processo sobrevive ao
interesse. O item 19: comprador que pede informação e espera duas semanas conclui que o vendedor não
está sério. O item 20: se o vendedor tem três sócios e não há regra de decisão, uma proposta boa
morre na indecisão — descubra isso antes, não durante.

O item 17 é coberto por `convencoes-de-projeto`.

## O veredito

| Classificação | Condição |
|---|---|
| **Não pronto** | Falta item essencial de rodada inicial |
| **Parcialmente pronto** (go-to-market inicial) | Essenciais de rodada inicial completos. Permite abordagem com teaser a lista curta e qualificada. |
| **Pronto** (go-to-market completo) | Essenciais de rodada inicial e de processo completos. Permite processo formal amplo. |

A distinção entre parcial e pronto é operacionalmente útil: **"parcialmente pronto" autoriza sondagem
com dois ou três compradores prioritários** — o que testa a tese e a faixa de preço com risco
limitado — enquanto o IM e o Q&A terminam de ficar prontos. Não autoriza processo amplo.

## Como conduzir o gate

1. **Item por item, com evidência.** `✅` exige o arquivo que sustenta. "O teaser está pronto" sem o
   arquivo aberto não é `✅`.
2. **Um único status por item.** Marcar dois é erro de preenchimento.
3. **Registre o que falta e o impacto.** Para cada `❌` e `⚠️`: o que falta, quem faz, até quando, e
   **qual o risco de ir a mercado sem**.
4. **Grave o resultado** em `~~pasta de trabalho/Memórias/checkpoint/` — é a decisão mais importante
   do mandato e precisa ter data e justificativa.

## Quando o vendedor pressiona

Acontece em todo mandato. O que funciona:

- **Mostre o gate, não a opinião.** Uma lista de vinte itens com status é argumento; "ainda não está
  pronto" é resistência.
- **Quantifique o risco.** "Sem a normalização documentada, o EBITDA de referência vai ser negociado
  para baixo item por item na diligência — e cada real de EBITDA vale `<múltiplo>` reais de preço."
- **Ofereça o caminho parcial.** Sondagem com dois compradores prioritários costuma atender à
  ansiedade legítima do vendedor sem queimar o mercado.
- **Se o vendedor decidir ir mesmo assim, registre.** A decisão é dele. Registre no checkpoint o que
  estava incompleto e qual risco foi aceito — protege o mandato e a relação quando a consequência
  aparecer.

E vale dizer o inverso com a mesma honestidade: **um gate usado como desculpa para perfeccionismo
também prejudica o mandato.** Janela de mercado, momento do setor e disposição do comprador são
reais. O gate não pede perfeição — pede os essenciais.

## O que entregar

1. Os vinte itens com status e a evidência de cada `✅`.
2. A classificação.
3. Para cada lacuna: o que falta, responsável, prazo, e o risco de ir sem.
4. A recomendação: aguardar, sondagem parcial, ou processo completo — com o argumento.

## Próximo passo

`segmentacao-de-compradores` para definir a quem ir e por qual tese, e `negociacao-e-loi` para o que
vem depois do interesse.
