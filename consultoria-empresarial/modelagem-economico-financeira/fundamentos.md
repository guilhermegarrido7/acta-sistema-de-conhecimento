---
titulo: Fundamentos
---

## A ideia que sustenta o método

O valuation da casa vem da escola de finanças corporativas que mede empresa por retorno sobre
capital, e não por lucro contábil. A formulação de referência é a de Koller, Goedhart e Wessels em
Valuation, o manual da McKinsey: uma empresa cria valor quando investe capital a uma taxa de retorno
superior ao custo desse capital, e as duas alavancas são crescimento e ROIC. Tudo o que vem depois
no modelo (NOPLAT, capital investido operacional, lucro econômico, fluxo de caixa livre, valor
terminal) é consequência aritmética dessa proposição, não um conjunto de técnicas independentes.

O problema que essa tradição resolve é específico. A contabilidade societária responde a uma
pergunta fiscal e regulatória; o valuation responde a outra, quanto capital está empregado na
operação e quanto ela devolve sobre esse capital. As duas perguntas não usam as mesmas linhas. A DRE
recebida mistura resultado financeiro com operacional, o balanço trata a poupança do sócio como
capital de giro, e o arrendamento de longo prazo vive na despesa em vez de aparecer como dívida. Sem
reorganizar essas peças, ROIC não existe. E sem ROIC não há como separar o crescimento que cria
valor daquele que destrói, distinção que inverte o sinal da recomendação inteira quando o spread
contra o WACC é negativo.

A casa opera assim porque o mandato típico é venda de empresa fechada de porte médio no Brasil, onde
o comprador chega com assessoria contratada e ataca o modelo linha a linha. Uma projeção de DRE com
múltiplo colado no fim não sobrevive a essa conversa. Um capital investido reconciliado pelas duas
perspectivas, um EBITDA normalizado com tabela de add-backs documentada por evidência, e um WACC com
build-up visível componente a componente sobrevivem, porque o que se defende na mesa é a cadeia que
leva ao número, não o número.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Koller, Goedhart e Wessels, Valuation (McKinsey) | O framework central: NOPLAT, capital investido, ROIC, lucro econômico, FCF, enterprise DCF | Skill `fundamentos-koller`, carregada sob demanda por todas as etapas |
| Fórmula dos key value drivers | `Valor = NOPLAT × (1 − g/ROIC) / (WACC − g)`, que torna a taxa de reinvestimento obrigatória | `valor-terminal` como método primário; `revisao-de-modelo` como estimativa de guardanapo |
| Lucro econômico | `(ROIC − WACC) × capital investido`, o spread traduzido em reais | `diagnostico-de-roic`; também a decomposição alternativa do valor que reduz o peso aparente do terminal |
| CAPM | Custo do equity como taxa livre de risco mais beta vezes prêmio de risco de mercado | `custo-de-capital`, o build-up do Ke |
| Fórmula de Hamada | Desalavancagem e realavancagem do beta pela estrutura de capital e pela alíquota | `custo-de-capital`, etapa do beta setorial de comparáveis listados |
| Modelo de crescimento perpétuo de Gordon | Perpetuidade sobre FCF | `valor-terminal`, usada como contraste: esconde a taxa de reinvestimento e por isso a casa prefere a fórmula dos value drivers |
| Aswath Damodaran | Ceticismo quanto a prêmio de controle genérico; literatura de risco-país e de empresa fechada | `triangulacao-e-faixa`, seção de prêmio de controle |
| CPC 06 (R2) / IFRS 16 | Arrendamentos: direito de uso no ativo, passivo de arrendamento no passivo | `reorganizacao-contabil` (equivalentes de dívida), `qualidade-de-resultados` (comparabilidade de EBITDA), `saude-de-credito` (EBITDAR) |
| CPC 33 | Obrigações previdenciárias a descoberto como equivalente de dívida | `reorganizacao-contabil`, passo dos fundos investidos |
| CPC 15 / IFRS 3 | Combinação de negócios, goodwill e teste de impairment | `fundamentos-koller`; leitura de ROIC com e sem goodwill em `diagnostico-de-roic` |
| CPC 27 | Ativo imobilizado e vida útil por classe de ativo | `capital-de-giro-e-capex`, roll-forward de PP&E e depreciação |
| Regime de lucro real e a trava de 30% na compensação de prejuízo fiscal | Legislação do IRPJ e da CSLL: alíquota marginal de 34% e limite anual de aproveitamento | `impostos-e-prejuizos-fiscais`, roll-forward do saldo no horizonte de projeção |
| LALUR / e-Lalur | Livro que reconcilia lucro contábil e lucro fiscal | `impostos-e-prejuizos-fiscais`, sustentação da alíquota efetiva histórica |
| Cash-free debt-free (CFDF) | Convenção de mercado de M&A para a ponte de enterprise value a equity value | `triangulacao-e-faixa`, a ponte item a item |
| Football field | Convenção de apresentação de faixas por metodologia | `triangulacao-e-faixa` e `relatorio-de-valuation`, capítulo IV |
| EBITDAR | Cobertura e alavancagem ajustadas para operação arrendada | `saude-de-credito`, alvo que arrenda o que o comparável compra |

## Onde a ACTA se afasta do manual

Koller trata risco-país por cenário de fluxo de caixa, com o argumento de que expropriação, quebra
de contrato e descontinuidade regulatória não são riscos sistemáticos e portanto não pertencem à
taxa de desconto. A casa soma o prêmio de risco-país ao custo do equity, porque é o que o comprador
brasileiro espera encontrar no build-up e porque uma taxa fora da convenção de mercado transforma a
reunião numa discussão metodológica em vez de uma discussão de preço. A objeção fica registrada e a
resposta fica pronta: o risco específico está tratado nos cenários, o CRP captura a parcela
sistemática. Na mesma linha, prêmio de porte e desconto de iliquidez são componentes contestados na
literatura e entram no build-up mesmo assim, declarados com fonte e data, porque negar que um alvo
com R$ 100 milhões de receita tem custo de capital diferente de uma listada de R$ 10 bilhões é menos
defensável do que assumir o prêmio abertamente. A regra que impede o abuso é a de lugar único: o
desconto de iliquidez entra no WACC ou no valor final, nunca nos dois.

Três outras divergências vêm da realidade de mid-market fechado. O beta é sempre indireto, mediana
de comparáveis listados desalavancada e realavancada por Hamada para a estrutura-alvo, com a
exigência de que essa mesma estrutura apareça nos pesos do WACC (realavancar para 30% de dívida e
pesar a taxa com 50% é incoerência interna que a diligência encontra). O múltiplo primário da
triangulação é o EV/EBITDA, apesar de o EV/EBITA ser tecnicamente superior por excluir amortização
de intangível adquirido, porque o EBITDA é a linguagem do comprador no Brasil e defender um número
que exige explicar a métrica antes custa mais do que ganha. E o prêmio de controle, que Koller e
Damodaran tratam com ceticismo, só entra sobre múltiplo de listada, com fonte da faixa observada e
com tese de melhoria nomeada; sobre transação precedente não entra em hipótese alguma, porque a
transação de controle já o contém. Quando a tese de melhoria é identificável, a casa a modela em vez
de aplicar prêmio médio de mercado, o que vale mais na negociação e é discutível com o comprador em
vez de numerológico.
