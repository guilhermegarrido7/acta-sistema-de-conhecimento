---
name: ciclo-ptp
description: Mapeie o ciclo procure-to-pay em sete elos e monte o escopo da auditoria de compras, da necessidade ao pagamento. Acionar ao abrir auditoria de compras ou de contas a pagar, ao decidir quais blocos executáveis se aplicam ao mandato, ao declarar elo inaplicável, ou ao definir os pares de bases que têm de fechar.
---

# O ciclo PTP: escopo, elos e blocos executáveis

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de **processo auditado**. O método de auditar vive no plugin de método,
aqui vive o que é próprio do ciclo de compras.

Esta é a skill de entrada do plugin. Ela decide **o que se audita**; as demais dizem **como**.

## 1. A pergunta-mestra

> **Comprou-se o que era necessário, de quem competiu de verdade, pelo preço e pela condição
> acordados; recebeu-se o que se comprou; e pagou-se uma única vez, no prazo, a quem tinha direito?**

Todo achado de compras é um desvio em algum ponto dessa cadeia. Auditar compras é seguir o dinheiro
na direção contrária à da receita: da necessidade ao caixa que sai, e do caixa ao razão.

## 2. Os sete elos, e a pergunta-mestra de cada um

```
Necessidade e requisição → Alçada → Cotação e seleção → Cadastro do fornecedor
  → Pedido, contrato e aditivo → Recebimento e aceite → Documento fiscal e pagamento
  [transversais: compra emergencial · dispensa de cotação · adiantamento · fundo fixo]
```

| # | Elo | Pergunta-mestra do elo | Skill |
|---|---|---|---|
| 1 | **Necessidade e requisição** | A compra nasceu de necessidade declarada, especificada por quem usa e coberta por orçamento, antes de qualquer contato com fornecedor? | `requisicao-e-alcada` |
| 2 | **Alçada** | Aprovou quem tinha poder para aquele valor, e o valor apresentado à alçada é o valor real da necessidade? | `requisicao-e-alcada` |
| 3 | **Cotação e seleção** | Houve competição efetiva entre fornecedores independentes, e o escolhido venceu por critério declarado antes da abertura? | `cotacao-e-selecao` |
| 4 | **Cadastro do fornecedor** | O fornecedor é pessoa jurídica ativa, homologada, sem vínculo societário ou familiar com quem compra, aprova ou recebe? | `cotacao-e-selecao` |
| 5 | **Pedido, contrato e aditivo** | O instrumento reflete a cotação vencedora, antecede a entrega, e os aditivos continuam sendo o mesmo objeto? | `contrato-e-aditivo` |
| 6 | **Recebimento e aceite** | Quem recebeu conferiu quantidade, especificação e qualidade, é pessoa distinta de quem comprou, e deixou rastro? | `recebimento-e-pagamento` |
| 7 | **Documento fiscal e pagamento** | O pagamento casa pedido, recebimento e documento fiscal, saiu uma única vez, no prazo e para a conta do titular do documento? | `recebimento-e-pagamento` |

Um elo mal auditado contamina os seguintes, e a contaminação aqui é mais silenciosa que no ciclo de
receita: a cotação direcionada produz pedido regular, recebimento regular e pagamento regular, e
nenhum dos três testes seguintes acusa nada. **Não se pula elo em silêncio**: elo que não se aplica
ao mandato é **declarado inaplicável**, com a razão, e não omitido.

## 3. Os blocos executáveis e o controle de melhor prática de cada

Numeração no padrão `WP.<PROCESSO>.<NN>`; abreviação sugerida **PTP**. O controle da terceira coluna
é o de **melhor prática de mercado**, não o normativo interno do cliente. Quando o cliente tiver
política própria sobre o tema, cite-a pelo assunto (*a política de compras do cliente, item sobre
número mínimo de cotações por faixa*) sem transcrever código de item, que é informação não pública.

| WP | Bloco | O controle (melhor prática) |
|---|---|---|
| **PTP.01** | Requisição e especificação | Requisição formal em sistema, anterior ao contato com fornecedor, com especificação de quem usa, quantidade, prazo, centro de custo e conta contábil, e verificação de saldo orçamentário na emissão. |
| **PTP.02** | Alçada e aprovação | Tabela de alçadas por faixa de valor e por tipo de gasto, aprovação registrada com data e hora anteriores ao pedido, e bloqueio sistêmico de emissão sem a aprovação da faixa. |
| **PTP.03** | Cotação, seleção e dispensa | Número mínimo de cotações por faixa, obtidas de fornecedores independentes, com critério de julgamento declarado antes da abertura; dispensa e fornecedor único só por justificativa aprovada em alçada superior. |
| **PTP.04** | Cadastro e homologação de fornecedor | Homologação com documentação exigida, verificação de regularidade e de quadro societário, segregação entre quem cadastra e quem compra, e reavaliação periódica da base. |
| **PTP.05** | Pedido, contrato e aditivo | Pedido ou contrato emitido antes da entrega, refletindo a proposta vencedora em preço, prazo e condição de pagamento; aditivo com a mesma trilha de alçada do original e limite acumulado controlado. |
| **PTP.06** | Recebimento e aceite | Conferência de quantidade, especificação e qualidade por pessoa distinta de quem comprou, com registro tempestivo no sistema e tratamento formal da divergência. |
| **PTP.07** | Conferência de três vias e pagamento | Casamento automático de pedido, recebimento e documento fiscal antes da liberação; pagamento único, no prazo contratado, para conta de titularidade do emitente, com alçada de tesouraria própria. |

O detalhe de cada bloco está na skill correspondente. A mecânica de montar o papel de trabalho está
em `papel-de-trabalho`; a taxonomia de tipo de teste, a régua de amostragem e o código de risco, em
`programa-de-testes`. Desenho contra efetividade, walkthrough e severidade de deficiência vivem em
`acta-controles-internos` e também não se repetem aqui.

## 4. Os cinco pares de bases que têm de fechar

A doutrina do número está em `acta-metodo-auditoria`; a mecânica de tratar base e casar valor com
consumo de pool, em `bases-e-conciliacao`. O que é próprio de compras são **quais** pares fecham:

1. **Requisição × pedido**: todo pedido nasce de requisição anterior a ele. Pedido sem requisição, ou
   com requisição emitida depois, é compra regularizada no papel.
2. **Pedido × cotação vencedora**: preço unitário, prazo e condição de pagamento do pedido são os da
   proposta escolhida. Divergência de centavo é digitação manual: é achado, não arredondamento.
3. **Pedido × recebimento**: quantidade recebida contra quantidade pedida, com saldo em aberto
   explicado. Recebimento maior que o pedido é aceite sem cobertura.
4. **Recebimento × documento fiscal × pagamento**: as três vias, casadas pelos três lados e não só
   pelo total. É o par que a conferência automática deveria fechar sozinha.
5. **Pagamento × extrato bancário**: cada baixa de título a pagar tem débito correspondente na conta,
   pelo valor e na data. É onde o pagamento em duplicidade aparece.

Defina o universo (as competências efetivamente cobertas) e reconcilie ao centavo. Nunca `~`.

## 5. Planos A, B e C: o padrão de execução deste plugin

Para **cada teste**, registre a forma ideal e os fallbacks, porque a forma ideal quase nunca está
disponível, e a diferença entre o auditor sênior e o júnior é saber o Plano B sem baixar o rigor da
conclusão.

```
Teste: <nome>   ·   WP: <código>
Plano A (forma certa):  a evidência ideal e como obtê-la.
Plano B:                falta o dado ideal; a evidência substituta e o que ela ainda prova.
Plano C:                nem isso existe; indagação formal + limitação de escopo declarada.
Limitação a declarar:   a frase exata que entra na aba Critérios e, se material, no ponto.
```

> **Regra de ouro: degradar a evidência não é degradar a conclusão em silêncio.**

Em compras há uma degradação específica que vale nomear: o cliente entrega o **processo de compra
montado**, com requisição, três cotações e pedido no mesmo PDF. Esse pacote prova que o processo
existe no papel e não prova competição. A evidência de competição está nos metadados e nas datas, e
é a isso que `cotacao-e-selecao` §2 se dedica.

**Conclusão ≠ ressalva.** Quando a base de pagamentos não traz o número do documento fiscal, o teste
de duplicidade não degrada, ele cai, e a ausência do campo é ela própria deficiência de desenho do
controle de pagamento. Isso se conclui, não se ressalva.

## 6. Como dimensionar o escopo do mandato

Antes de escrever o programa, responda estas seis perguntas ao mandato, e pergunte, não deduza (R8):

1. **O que a empresa compra, e em que proporção?** Material direto, material indireto, serviço
   continuado, obra, ativo imobilizado. Cada família tem risco dominante diferente: material tem
   risco de quantidade e de estoque, serviço tem risco de comprovação de entrega, obra tem risco de
   aditivo. Peça o gasto anual por categoria antes de decidir onde o trabalho vai.
2. **Qual é a tabela de alçadas vigente, e desde quando?** Sem ela não existe teste de fracionamento,
   porque não há faixa contra a qual medir. Peça a versão vigente **e as anteriores** do período
   auditado: alçada que mudou no meio do período invalida o corte feito por uma faixa só.
3. **Quantas cotações a política exige por faixa, e quem pode dispensar?** A regra é do cliente; o
   teste é de aderência à regra dele, mais a avaliação de desenho da própria regra.
4. **Existe catálogo, contrato guarda-chuva ou compra recorrente?** Onde há contrato de fornecimento
   vigente, a cotação por evento não se aplica, e cobrá-la produz achado falso. O que se testa ali é
   a aderência do pedido ao contrato e a vigência do preço.
5. **Há adiantamento a fornecedor, fundo fixo ou cartão corporativo?** São três desvios do fluxo
   principal, cada um com sua população e seu teste. Adiantamento pago e não baixado por entrega é
   achado próprio, e não aparece em nenhum teste de três vias.
6. **O recebimento é físico ou é aceite de serviço?** Material entra em estoque e deixa rastro de
   movimentação; serviço tem como único rastro o atesto. Onde o rastro é só o atesto, o teste vira
   comprovação de entrega, e a pergunta passa a ser **que evidência o serviço deixou além da
   assinatura de quem atestou?**

## 7. O que não transportar de um mandato para o outro

Não transporte entre mandatos: faixas de alçada e número mínimo de cotações (são política daquele
cliente e mudam de versão para versão), prazo de pagamento padrão, a lista de categorias com contrato
guarda-chuva, e a conclusão de que o sistema faz conferência de três vias automática. Essa última em
particular: a mesma marca de ERP faz a conferência em um cliente e não faz em outro, porque o
parâmetro é de implantação. Peça a demonstração em tela em cada mandato.

Quando o mandato tem centralização de compras num único comprador, registre isso e o que colapsou
por causa disso, para que o trabalho seguinte não herde a simplificação como se fosse o método.

## Próximo passo

`matriz-de-riscos-de-compras`, para converter os elos em registro de riscos e programa de testes;
depois as skills de elo, na ordem do ciclo. O registro do que se aprendeu ao fechar o trabalho vai
para `acta-way:checkpoint` e para o ritual de aprendizado do plugin de método.
