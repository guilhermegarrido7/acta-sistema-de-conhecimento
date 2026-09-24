---
name: matriz-de-riscos-de-estoques
description: Monte o escopo e a matriz risco por controle e por teste do ciclo de estoques, com os quatorze riscos codificados da casa e as quatro perguntas do ciclo. Acionar ao abrir auditoria de estoques, ao decidir quais blocos se aplicam, ao confrontar a matriz do cliente, ou ao promover risco novo à matriz.
---

# Escopo e matriz de riscos de estoques

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

A taxonomia de tipo de teste, a régua de amostragem, os conceitos de risco e o formato do código
`<CódProcesso>.R<NN>` estão em `programa-de-testes`. A estrutura formal da matriz, o walkthrough e a
distinção entre desenho e efetividade estão em `acta-controles-internos`. A categoria de risco se
escreve no vocabulário do Dicionário de Riscos da casa
(`acta-gestao-de-riscos:taxonomia-de-riscos`), citada pelo par número e nome, e este plugin **não
cria taxonomia própria**.

Esta é a skill de entrada do plugin. Ela decide **o que se audita**; as demais dizem **como**.

## 1. A pergunta-mestra, e as quatro perguntas do ciclo

> **O que está no depósito é o que o sistema diz, avaliado pelo custo certo, valendo o que está
> registrado, e chegou e saiu de lá por movimento autorizado e documentado?**

Estoque é a conta em que a perda não aparece no resultado até alguém contar. Diferente de caixa, que
se concilia todo dia, e de contas a receber, que o cliente cobra, o estoque só denuncia o erro no
inventário, e por isso o erro se acumula por exercícios inteiros.

Quatro perguntas, e o programa incompleto é o que responde só a primeira:

| # | Pergunta | O que falha se ela não for feita | Skill |
|---|---|---|---|
| 1 | **O que está lá é o que o sistema diz?** | Existência. O ativo tem quantidade que ninguém verificou | `acuracidade-e-inventario` |
| 2 | **Está avaliado pelo valor certo?** | Mensuração. A quantidade certa pelo custo errado dá saldo errado | `custeio-e-giro` |
| 3 | **Vale o que está registrado?** | Realização. O custo está certo e o item não se vende por isso | `obsolescencia-e-provisao` |
| 4 | **Como entrou e saiu?** | Causa. A divergência é medida e nunca explicada | `movimentacao-e-perdas` |

Contar o estoque e parar aí é o erro mais comum do programa de estoques: produz um número de
acuracidade, satisfaz o comitê, e não diz se o saldo restante está avaliado certo nem por que a
divergência existe. As quatro perguntas se respondem juntas, e pergunta que o mandato não cobre **se
declara inaplicável com a razão**, nunca se omite.

## 2. Os blocos executáveis e o controle de melhor prática

Numeração no padrão `WP.<PROCESSO>.<NN>`; abreviação sugerida **INV**. O controle da terceira coluna
é o de **melhor prática de mercado**, não o normativo interno do cliente.

| WP | Bloco | O controle (melhor prática) |
|---|---|---|
| **INV.01** | Planejamento e corte | Inventário planejado com data-base declarada, corte de movimentação fixado por documento, congelamento no período da contagem, e estoque de terceiro identificado e confirmado antes. |
| **INV.02** | Contagem e segunda contagem | Primeira contagem sem o saldo do sistema à vista, segunda contagem cega por equipe distinta sobre a faixa de maior valor, e recontagem dirigida por limite de divergência definido antes. |
| **INV.03** | Apuração e acuracidade | Divergência apurada item a item, em quantidade e em valor, com os dois indicadores de acuracidade calculados e o universo declarado. |
| **INV.04** | Custeio e giro | Método de custeio declarado, parametrizado e aplicado de forma consistente a estoques de mesma natureza, com giro e cobertura apurados por classe. |
| **INV.05** | Obsolescência e provisão | Critério quantitativo de provisão aprovado antes do exercício, aplicado por regra, com comparação do custo ao valor realizável líquido item a item e baixa efetiva do provisionado. |
| **INV.06** | Movimentação, perdas e ajuste | Toda entrada com documento de origem, toda saída com requisição ou ordem, transferência conciliada pelas duas pontas, e ajuste de inventário com aprovação em alçada distinta de quem lança e de quem custodia. |

## 3. Os quatorze riscos do ciclo

Processo `INV`. Severidade é sugestão de partida; calibre no caso. A coluna de categoria cita o
Dicionário de Riscos da casa.

| Código | Pergunta | Risco | Controle (melhor prática) | Como se testa | Categoria | WP | Sev. |
|---|---|---|---|---|---|---|---|
| `INV.R01` ★ | 1 | **Corte de movimentação quebrado**: entrada ou saída do período seguinte incluída no saldo contado, ou do período contada e não registrada | Corte fixado por número de documento antes do início, movimentação suspensa e doca segregada | Últimos documentos de entrada e saída confrontados com os do intervalo; mercadoria em doca e em trânsito rastreada | 34. Perda e/ou Obsolescência | INV.01 | Alta |
| `INV.R02` | 1 | Estoque de terceiro contado como próprio, ou estoque próprio em poder de terceiro omitido | Relação de consignação e industrialização levantada antes, com confirmação escrita do terceiro na data-base | Relação confrontada com o contado e com o saldo contábil; confirmação obtida na data-base | 33. Terceirizações e Parcerias | INV.01 | Alta |
| `INV.R03` ★ | 1 | **Contagem única e não cega**: contador com o saldo do sistema à vista, ou segunda contagem pela mesma equipe | Primeira contagem sem saldo à vista e segunda contagem cega por equipe distinta na faixa de maior valor | Observação direta no dia; a planilha de campo tem coluna de saldo? A segunda equipe é a mesma? | 31. Capacidade e Eficiência | INV.02 | Alta |
| `INV.R04` | 1 | Item mal identificado em campo, por descrição livre, etiqueta ausente ou cadastro duplicado | Padrão de descrição estruturado por atributo, etiqueta individual e cadastro sem duplicidade | Validação mecânica do padrão de descrição; busca de cadastro duplicado por descrição e por par falta e sobra | 42. Integridade de Dados | INV.02 | Média |
| `INV.R05` ★ | 1 | **Divergência compensada entre itens tratada como perda**, quando é erro de identificação, ou o inverso: compensação declarada sem prova | Recontagem dirigida com o item em mão antes de concluir sobre falta ou sobra | Pareamento de falta e sobra de mesma quantidade por local e grupo, confirmado em campo | 42. Integridade de Dados | INV.03 | Alta |
| `INV.R06` | 1 | Acuracidade apurada só por item, ou só por valor, ou sobre universo não declarado | Os dois indicadores calculados e reportados, com o universo coberto declarado | Recálculo dos dois sobre a base de apuração; conferência do universo contra o saldo total | 7. Indicadores de Gestão | INV.03 | Média |
| `INV.R07` | 2 | Método de custeio declarado diferente do parametrizado, ou aplicado de forma inconsistente entre depósitos e filiais | Método único por natureza de estoque, parametrizado no sistema e revisado na mudança | Parametrização em tela contra política e nota; custo unitário do mesmo item entre depósitos | 49. Contábil | INV.04 | Alta |
| `INV.R08` ★ | 2 | **Custo unitário incorreto**: saldo com valor zero, custo negativo, saldo negativo, ou custo fora de faixa por erro de unidade de medida | Bloqueio de saldo negativo, entrada obrigatória com valor e crítica de variação de custo unitário | Sete cortes de base sobre 100% das linhas de saldo, cada um com quantidade e valor | 42. Integridade de Dados | INV.04 | Alta |
| `INV.R09` | 2 | Composição indevida do custo: tributo recuperável somado, perda anormal capitalizada, custo fixo rateado por capacidade real em ociosidade | Política de formação de custo por componente e rateio pela capacidade normal | Reperformance do custo de entrada por componente nos itens de maior valor | 49. Contábil | INV.04 | Alta |
| `INV.R10` | 2 | Estoque parado ou superestocado não identificado, e compra de item que já está parado no depósito | Giro e cobertura apurados por classe, com aging de última saída revisado periodicamente | Aging por faixa; cruzamento de item sem saída no período com as compras do período | 34. Perda e/ou Obsolescência | INV.04 | Média |
| `INV.R11` ★ | 3 | **Provisão sem critério, insuficiente ou discricionária**, e custo acima do valor realizável líquido sem redução | Critério quantitativo aprovado antes do exercício e comparação item a item de custo com realizável líquido | Reperformance da provisão sobre a base inteira com os três resíduos; preço praticado deduzido dos custos de venda | 34. Perda e/ou Obsolescência | INV.05 | Alta |
| `INV.R12` ★ | 3 | **Provisão que nunca vira baixa efetiva**, mantida como reserva disponível para reversão | Baixa física e contábil do provisionado, com aging da provisão e reversão justificada individualmente | Aging da provisão por constituição; reversões uma a uma; descarte confrontado com o provisionado | 3. Conduta Antiética / Fraude | INV.05 | Alta |
| `INV.R13` | 4 | Movimento sem lastro: entrada sem documento, baixa sem requisição, transferência com uma ponta só, venda sem baixa ou baixa sem venda | Vínculo documental obrigatório por tipo de movimento e conciliação de transferência pelas duas pontas | Casamento das bases de recebimento, requisição, faturamento e movimentação com consumo de pool | 37. Obrigações Contratuais | INV.06 | Alta |
| `INV.R14` ★ | 4 | **Ajuste de inventário lançado sem aprovação**, pelo próprio custodiante, ou imediatamente antes da contagem para acertar o saldo | Alçada de ajuste distinta de quem lança e de quem custodia, com motivo e documento obrigatórios | 100% dos ajustes do período pelos seis cortes, inclusive a data de cada um contra a data-base da contagem | 3. Conduta Antiética / Fraude | INV.06 | Alta |

★ = os seis riscos que decidem a auditoria de estoques. Ver §4.

**Uma nota de categoria.** `INV.R12` e `INV.R14` costumam ser classificados como falha operacional
de estoque. São eventos de conduta, porque o mecanismo é a decisão de encobrir, e a categoria muda
para quem o risco aparece no mapa de calor. Classificar os dois em 34 os esconde no relatório de
logística; classificá-los em 3 os leva ao comitê, que é onde precisam ser vistos.

## 4. Os seis que decidem o trabalho

Programa que conta o estoque, calcula a acuracidade e confere a provisão contra o critério passa a
impressão de cobertura e não encosta em nenhum dos seis abaixo.

**1. Corte quebrado (`INV.R01`).** Anula a contagem inteira, e o pior é que anula em silêncio: o
número sai, o relatório fecha, e a divergência apurada mede o corte e não o estoque. É o único teste
que precisa ser feito antes da contagem e não pode ser recuperado depois.

**2. Contagem que não é cega (`INV.R03`).** Contador com o saldo esperado à vista confirma o saldo
esperado. A acuracidade resultante mede a obediência da equipe, não a qualidade do controle.

**3. Compensação entre itens (`INV.R05`).** O achado que se reporta errado nos dois sentidos: perda
que não é perda, e compensação declarada sem prova para zerar a divergência. Ver
`acuracidade-e-inventario` §3.

**4. Custo unitário incorreto (`INV.R08`).** Saldo com valor zero e custo negativo não aparecem em
conciliação por total, porque são pequenos em valor e enormes em quantidade de linhas. São o teste
mais barato do plugin e quase sempre rendem.

**5. Provisão que nunca vira baixa (`INV.R12`).** O mecanismo mais discreto de administração de
resultado que existe em estoque, e sobrevive porque não afeta o resultado do exercício em que se
observa. Ver `obsolescencia-e-provisao` §5.

**6. Ajuste sem aprovação (`INV.R14`).** A conta em que toda divergência termina. Ajuste lançado pelo
custodiante, ou lançado na véspera da contagem, transforma falta em nada e acuracidade ruim em
acuracidade boa.

Os seis têm em comum o fato de **não aparecerem no documento individual**. Cada contagem, cada
lançamento e cada provisão, olhados sozinhos, estão completos. O desvio só existe na população, na
sequência das datas, ou fora da base de estoque.

## 5. Como usar a matriz num mandato

1. **Parta dos quatorze.** São o piso, não o teto.
2. **Marque a aplicabilidade por pergunta do ciclo**, com as seis perguntas de dimensionamento de §6.
   Risco inaplicável se declara com a razão.
3. **Acrescente o que a natureza do estoque trouxer.** Perecível traz validade e cadeia de frio;
   granel traz medição por balança e evaporação; estoque em poder de terceiro traz confirmação
   externa; produção traz ficha técnica e rateio; item importado traz câmbio e custo de
   nacionalização. O risco nasce da natureza do item, não do setor.
4. **Associe controle e teste por código**, sem repetir o texto do risco na linha do controle.
5. **Promova o risco novo de volta para cá** ao fechar o trabalho.

## 6. As seis perguntas que dimensionam o mandato

1. **Qual a natureza do estoque?** Revenda, matéria-prima, produto em processo, produto acabado,
   material de consumo, ativo de uso. Cada uma muda a régua de aging e o teste de custeio.
2. **Quantos depósitos, e quem custodia cada um?** Depósito sem responsável nomeado é onde o teste de
   segregação morre antes de começar.
3. **Há estoque de terceiro ou em poder de terceiro?** Decide se haverá confirmação externa.
4. **Qual a política de inventário: geral anual, rotativo, ou ambos?** Rotativo bem feito dispensa
   parte do teste de existência do geral, e rotativo mal feito produz acuracidade alta e falsa,
   porque conta sempre os mesmos itens fáceis.
5. **O estoque é relevante para a demonstração contábil, ou o mandato é operacional?** Muda o peso
   entre acuracidade por valor e acuracidade por item, e muda se `obsolescencia-e-provisao` é o
   centro do trabalho ou um teste de apoio.
6. **Há produção?** Se há, entram ficha técnica, rateio de custo indireto e perda de processo, e o
   trabalho cresce de tamanho.

## 7. Quando o cliente já tem a própria matriz

- **Cobertura das quatro perguntas.** A 2 e a 3 são as que mais faltam, porque a matriz de estoques
  costuma nascer na logística e parar na existência física.
- **Cobertura dos seis de §4.** É o teste de maturidade mais rápido para matriz de estoques.
- **Controle sem risco e risco sem controle.**

A ausência de um risco na matriz do cliente é achado de desenho do processo de gestão de riscos, e
entra no relatório como tal. Não se corrige em silêncio acrescentando o risco ao programa.

## O que entregar

1. O registro de riscos do mandato, código `INV.R<NN>`, com categoria do Dicionário da casa, evento e
   fator.
2. A matriz risco × controle × teste, associada por código.
3. A declaração de aplicabilidade das quatro perguntas e dos seis blocos, com a razão de cada
   exclusão.
4. As seis perguntas de dimensionamento respondidas, com a consequência de cada resposta no escopo.
5. Os riscos novos que o mandato revelou, prontos para promoção.
6. Quando houver matriz do cliente: o confronto de cobertura e os riscos ausentes apontados.

## Próximo passo

`programa-de-testes`, para converter a matriz em programa com tipo de teste, frequência e régua de
amostragem; depois `acuracidade-e-inventario`, que é o único bloco com data marcada e por isso
determina o cronograma de todo o resto.
