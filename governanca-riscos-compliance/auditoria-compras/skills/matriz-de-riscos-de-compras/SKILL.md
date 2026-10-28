---
name: matriz-de-riscos-de-compras
description: Monte o registro de riscos e a matriz risco por controle e por teste do ciclo de compras, com os quinze riscos codificados da casa. Acionar ao abrir o programa de testes de compras, ao verificar se a matriz do mandato cobre fracionamento, direcionamento, conflito de interesse e pagamento em duplicidade, ou ao promover risco novo.
---

# Matriz de riscos e controles de compras

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

A taxonomia de tipo de teste, a régua de amostragem, os conceitos de risco (categoria, evento,
fator) e o formato do código `<CódProcesso>.R<NN>` estão em `programa-de-testes`. A estrutura formal
da matriz risco por controle, o walkthrough e a distinção entre desenho e efetividade estão em
`acta-controles-internos`. Esta skill traz apenas **o conteúdo de compras**: quais riscos existem no
ciclo, que controle de melhor prática os mitiga, e como cada um se testa.

## 1. Os quinze riscos do ciclo PTP

Processo `PTP`. O controle da terceira coluna é o de **melhor prática de mercado**, não o normativo
interno do cliente. Severidade é sugestão de partida; calibre no caso, com `redacao-de-achados` e
`acta-controles-internos:deficiencias-e-severidade`.

| Código | Elo | Risco | Controle (melhor prática) | Como se testa | WP | Sev. |
|---|---|---|---|---|---|---|
| `PTP.R01` | Requisição | Compra sem requisição, ou com requisição emitida depois do pedido para regularizar decisão já tomada | Requisição em sistema, anterior ao pedido, com especificação de quem usa | Data e hora da requisição × data e hora do pedido em 100% da base; pedidos sem requisição vinculada | PTP.01 | Alta |
| `PTP.R02` | Requisição | Especificação escrita para caber num fornecedor: marca, modelo ou atributo que só um atende | Especificação por função e desempenho, revisada por quem não é o requisitante | Leitura das especificações dos maiores pedidos; menção a marca sem a ressalva de equivalência | PTP.01 | Média |
| `PTP.R03` | Requisição | Compra sem cobertura orçamentária, ou lançada em centro de custo alheio para achar saldo | Verificação de saldo na emissão da requisição e bloqueio sem saldo | Pedido × orçamento do centro de custo; reclassificações de centro de custo após a emissão | PTP.01 | Média |
| `PTP.R04` ★ | Alçada | **Fracionamento**: a necessidade é quebrada em pedidos menores para caber na faixa de alçada do próprio comprador ou dispensar cotação | Alçada apurada por necessidade e por período, não por documento, com alerta de acúmulo por fornecedor e por categoria | Soma por fornecedor, categoria e janela de 30 dias contra a faixa; histograma de valores logo abaixo de cada limite | PTP.02 | Alta |
| `PTP.R05` | Alçada | Aprovação por quem não tem poder para a faixa, aprovação posterior ao pedido, ou aprovação em nome de terceiro por senha compartilhada | Tabela de alçadas parametrizada no sistema, com bloqueio e trilha de auditoria nominal por cargo | Aprovador × tabela vigente em 100%; data e hora da aprovação × do pedido; aprovações fora do horário e em sequência de segundos | PTP.02 | Alta |
| `PTP.R06` ★ | Cotação | **Direcionamento**: cotação de fachada, com concorrente de cortesia, proposta obtida depois da escolha, ou critério de julgamento alterado após a abertura | Número mínimo de cotações de fornecedores independentes, com critério declarado antes da abertura e mapa comparativo assinado | Data da cotação × data da requisição; sequência e formatação das propostas; endereço, telefone e sócio comuns entre concorrentes | PTP.03 | Alta |
| `PTP.R07` | Cotação | Dispensa de cotação e fornecedor único usados como regra, sob justificativa de urgência recorrente | Dispensa com justificativa técnica aprovada em alçada superior e relatório periódico de emergenciais por comprador | Percentual de emergenciais por comprador, por categoria e por fornecedor; reincidência da mesma urgência | PTP.03 | Alta |
| `PTP.R08` ★ | Fornecedor | **Conflito de interesse**: fornecedor com sócio, endereço ou vínculo familiar comum a comprador, aprovador ou recebedor; empresa aberta pouco antes da primeira venda | Declaração de conflito assinada e renovada, homologação com consulta a quadro societário, e segregação entre cadastrar, comprar e aprovar | Cruzamento de quadro societário e endereço do fornecedor com a base de funcionários; data de abertura × data do primeiro pedido | PTP.04 | Alta |
| `PTP.R09` | Fornecedor | Cadastro criado ou alterado fora do fluxo, sem homologação, ou com dado bancário trocado para conta de terceiro | Segregação entre cadastro e compra, alçada para alteração de dado bancário e confirmação por canal independente | 100% das alterações de dado bancário: quem, quando, com que documento; cadastro criado no mesmo dia do primeiro pedido | PTP.04 | Alta |
| `PTP.R10` | Pedido | Pedido emitido depois da entrega ou depois da nota, regularizando compra feita por fora do processo | Bloqueio de recebimento sem pedido vigente e relatório de pedidos retroativos | Data do pedido × data da entrega e da emissão do documento fiscal em 100% da base | PTP.05 | Alta |
| `PTP.R11` ★ | Aditivo | **Aditivo que vira contrato novo**: prorrogações e acréscimos sucessivos que multiplicam o valor original ou mudam o objeto sem nova competição | Limite acumulado de acréscimo controlado, aditivo com a mesma alçada do original e nova cotação quando o objeto muda | Valor acumulado dos aditivos ÷ valor original, por contrato; comparação do objeto do aditivo com o do instrumento inicial | PTP.05 | Alta |
| `PTP.R12` | Recebimento | Recebimento atestado sem conferência, atestado por quem comprou, ou registrado em data posterior ao pagamento | Conferência por pessoa distinta do comprador, com registro tempestivo e tratamento formal de divergência | Recebedor × comprador em 100%; data do recebimento × data do pagamento; recebimentos lançados em lote no fim do mês | PTP.06 | Alta |
| `PTP.R13` | Recebimento | Serviço pago sem comprovação de entrega além da assinatura de atesto | Atesto acompanhado do produto do serviço (relatório, medição, registro de chamado, lista de presença) | Amostra dirigida aos maiores contratos de serviço: existe entregável além do atesto? | PTP.06 | Alta |
| `PTP.R14` ★ | Pagamento | **Pagamento em duplicidade**, pagamento sem três vias, pagamento antecipado sem previsão, ou crédito em conta de terceiro | Conferência automática de três vias com bloqueio, checagem de duplicidade na entrada e pagamento só para conta do titular do documento | Chave fornecedor + número do documento + valor; e a variante com número digitado diferente, casando por valor e data; titularidade da conta × emitente | PTP.07 | Alta |
| `PTP.R15` | Contabilização | Despesa classificada em conta ou competência errada; lançamento manual em conta de fornecedor; adiantamento pago e nunca baixado | Conciliação periódica de contas a pagar com o razão, bloqueio de lançamento manual e controle de adiantamentos por idade | Conciliação por competência e por conta; 100% dos lançamentos manuais; aging de adiantamentos sem baixa | PTP.07 | Média |

★ = os cinco riscos que decidem a auditoria de compras. Ver §2.

## 2. Os cinco que decidem o trabalho

Programa de compras que testa aprovação, cotação anexada e nota conferida passa a impressão de
cobertura e não encosta em nenhum dos cinco abaixo. Eles têm em comum o fato de **serem invisíveis
no documento individual**: cada processo de compra, olhado sozinho, está completo e regular. O desvio
só aparece quando se olha a população.

**1. Fracionamento (`PTP.R04`).** O comprador tem alçada até certa faixa e a necessidade é maior que
ela. Três pedidos de um terço cada, no mesmo mês, para o mesmo fornecedor, e a alçada superior nunca
viu a compra. Cada pedido é regular. O teste é de população, nunca de amostra: agrupe por fornecedor,
categoria e janela de tempo, e monte o histograma dos valores por faixa de alçada. **Concentração
logo abaixo de um limite não é acaso**, é desenho, e o gráfico dessa distribuição é a melhor peça de
evidência do relatório.

**2. Direcionamento de cotação (`PTP.R06`).** O vencedor foi escolhido antes e as outras propostas
existem para compor o processo. Ver `cotacao-e-selecao` §2 para a bateria de sinais.

**3. Conflito de interesse (`PTP.R08`).** É o único risco do ciclo que não se testa dentro da base de
compras: exige cruzar dados do fornecedor com dados de pessoal, e por isso quase nunca é feito. O
cruzamento é simples e o achado é grave.

**4. Aditivo que vira contrato novo (`PTP.R11`).** O contrato foi competido uma vez, por um valor, e
cresceu por aditivos sucessivos até valer várias vezes o original. Cada aditivo, isolado, tem
justificativa. O que se testa é o acumulado contra o original e a identidade do objeto.

**5. Pagamento em duplicidade (`PTP.R14`).** Mais frequente por erro que por fraude, e por isso o
valor recuperável costuma ser alto e o achado, indiscutível. A conferência ingênua (mesma chave
exata) pega metade; a outra metade está nas variantes de digitação. Ver `recebimento-e-pagamento` §4.

**Uma nota de categoria.** Fracionamento e direcionamento costumam ser classificados como falha de
processo de compras. São eventos de **fraude e conduta**, com controle e severidade próprios. Se a
taxonomia do mandato não tiver a categoria, crie-a antes de classificar: categoria errada some do
mapa de calor da área errada, e este é o tipo de risco que o comitê precisa ver.

## 3. Como usar a matriz num mandato

1. **Parta dos quinze.** Eles são o piso, não o teto.
2. **Marque a aplicabilidade elo a elo**, usando as seis perguntas de `ciclo-ptp` §6. Risco
   inaplicável **se declara com a razão**: onde há contrato guarda-chuva vigente, `PTP.R06` não se
   aplica ao pedido individual e migra para o momento da contratação do guarda-chuva.
3. **Acrescente o que o mandato trouxer.** Compra de obra traz medição e retenção; compra de
   importação traz câmbio, despachante e custo de nacionalização; compra de ativo traz o par com o
   controle patrimonial. O risco nasce da família de gasto, não do setor.
4. **Associe controle e teste por código**, nunca repetindo o texto do risco na linha do controle.
5. **Promova o risco novo de volta para cá** ao fechar o trabalho, com o controle e a forma de
   testar. Matriz que não recebe o aprendizado da execução envelhece em dois mandatos.

## 4. Quando o cliente já tem a própria matriz

Auditar sobre a matriz do cliente sem confrontá-la é herdar os pontos cegos dele. Três verificações:

- **Cobertura dos elos.** Os sete elos de `ciclo-ptp` §2 aparecem? Cadastro de fornecedor e
  aditivo são os que mais faltam, porque não têm dono claro entre compras e jurídico.
- **Cobertura dos cinco da §2.** É o teste de maturidade mais rápido que existe para matriz de
  compras. Matriz que só tem "compra sem aprovação" e "nota paga em duplicidade" cobre o erro e
  ignora o desvio deliberado.
- **Controle sem risco e risco sem controle.** Controle que não ataca risco nenhum é atividade;
  risco sem controle associado é decisão de aceitação que precisa de dono.

A ausência de um risco na matriz do cliente é achado de desenho do processo de gestão de riscos, e
entra no relatório como tal. Não se corrige em silêncio acrescentando o risco ao programa.

## O que entregar

1. O registro de riscos do mandato, em aba própria, código `PTP.R<NN>`, com categoria, evento e fator.
2. A matriz risco × controle × teste, associada por código.
3. A lista dos riscos declarados inaplicáveis, com a razão contratual ou operacional de cada um.
4. Os riscos novos que o mandato revelou, prontos para promoção a esta matriz.
5. Quando houver matriz do cliente: o confronto de cobertura e os riscos ausentes apontados.

## Próximo passo

`programa-de-testes`, para converter a matriz em programa com tipo de teste, frequência e régua de
amostragem; depois as skills de elo, na ordem do ciclo.
