---
titulo: Fundamentos
---

## A ideia que sustenta o método

A auditoria de compras vem da mesma tradição que organiza o exame por ciclos de transação, e não por
conta contábil. O ciclo de aquisição e pagamento é um dos ciclos clássicos dessa literatura, e existe
como unidade de trabalho porque as contas de despesa, de estoque e de fornecedores são movimentadas
pelos mesmos eventos e protegidas pelos mesmos controles. O nome procure-to-pay vem de outro lugar:
das arquiteturas de processo usadas para comparar operações entre empresas, em que o ciclo é uma
cadeia nomeada da necessidade ao pagamento, com donos, prazos e indicadores por etapa. A ACTA já
usava essa cadeia do lado da consultoria, em mandatos de mapeamento e redesenho; este plugin é o
mesmo ciclo visto pelo outro lado, com a pergunta trocada de "onde o processo trava" para "onde o
dinheiro vaza".

A diferença entre auditar receita e auditar compras está em onde o desvio se esconde. Na receita, o
erro aparece em número: a medição não bateu com a nota, o encargo de mora não foi cobrado, a
competência está trocada. Em compras, o desvio mais caro não produz nenhuma inconsistência
documental. A cotação direcionada gera pedido regular, recebimento regular e pagamento regular. O
fracionamento gera três pedidos aprovados por quem tinha poder para cada um deles. O aditivo gera um
instrumento assinado pelas partes. Cada documento, olhado sozinho, passa. O desvio só existe na
população, ou fora dela, no cruzamento com dados que não são de compras.

Daí as duas escolhas de método que organizam o plugin. A primeira é que os testes que decidem o
trabalho são **de população e não de amostra**: histograma de valores por faixa de alçada,
agrupamento por fornecedor e janela de tempo, varredura de duplicidade por sete variantes de chave.
A segunda é que a ordem de execução segue o ciclo, e a tentação de começar pelo pagamento se resiste
deliberadamente. A base de pagamentos é a mais limpa e a mais fácil de obter, e um trabalho que
começa por ela conclui sobre a saída de caixa sem encostar em nada do que a decidiu.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Ciclo de aquisição e pagamento (literatura clássica de auditoria, Arens) | A organização do trabalho por ciclos de transação, seguindo o evento da origem ao registro contábil | Os sete elos de `ciclo-ptp` §2, e a regra de que elo mal auditado contamina os seguintes |
| APQC Process Classification Framework (PCF Cross-Industry 8.0) | A arquitetura de processos que nomeia o ciclo procure-to-pay e o decompõe em etapas comparáveis entre empresas | A decomposição em elos e blocos executáveis, herdada do mapeamento de ciclo PTP feito do lado da consultoria |
| COSO, Internal Control, Integrated Framework (revisão de 2013) | O referencial de controle interno: atividade de controle existe para mitigar risco identificado, e se avalia se está presente e funcionando | A estrutura risco × controle × teste de `matriz-de-riscos-de-compras`, e o confronto de controle sem risco e risco sem controle na matriz do próprio cliente (§4) |
| PCAOB AS 2201 | Norma de auditoria de controles internos de companhia registrada na SEC; origem da régua de amostragem por frequência e nível de risco herdada pela casa | O dimensionamento de cada bloco PTP, via `programa-de-testes`, e a preferência por 100% sempre que a base é cruzável |
| NBC TA 315 / ISA 315 | Entendimento da entidade, do sistema de informação e do fluxo das transações como base para identificar onde o erro material pode nascer | As seis perguntas de dimensionamento do mandato (`ciclo-ptp` §6) e os cinco pares de bases que têm de fechar (§4) |
| Conferência de três vias | O controle que casa pedido, recebimento e documento fiscal antes de liberar o pagamento, e a exigência de que o casamento seja automático e com bloqueio | O bloco PTP.07 e a reperformance fora do sistema em `recebimento-e-pagamento` §2, incluindo o teste da tolerância parametrizada |
| Segregação de funções | O princípio de que iniciar, autorizar, executar, custodiar e registrar não podem ficar na mesma mão | Os cortes de segregação em `requisicao-e-alcada` §2, `cotacao-e-selecao` §4 e `recebimento-e-pagamento` §1 |
| ACFE, esquemas de fraude em desembolso | A taxonomia de esquemas de faturamento, conluio com fornecedor, empresa de fachada e pagamento a terceiro | `PTP.R06`, `PTP.R08` e `PTP.R14`, e a regra de concluir sobre o fato e o controle, nunca sobre a intenção da pessoa |
| Lei 12.846 e Decreto 11.129/2022 | O regime de responsabilização por ato lesivo à administração e os parâmetros de programa de integridade, inclusive a diligência sobre terceiros | O bloco de homologação de fornecedor e a declaração de conflito de interesse em `cotacao-e-selecao` §4 e §5; a fronteira com `acta-programa-de-integridade` |
| Normas do IIA | O corpo normativo da auditoria interna, inclusive a exigência de documentação suficiente para que um terceiro reproduza o trabalho | O papel de trabalho por bloco PTP e o padrão Plano A/B/C, que registra tanto a evidência obtida quanto a que faltou |
| LGPD | O regime de tratamento de dado pessoal, com base mínima, finalidade declarada e descarte | O cruzamento de vínculo societário com a base de pessoal em `cotacao-e-selecao` §5, e a descrição do achado por cargo e registro |

## Onde a ACTA se afasta do manual

O manual trata a auditoria de compras como teste de conformidade documental: existe requisição,
existem três cotações, existe aprovação, existe nota conferida. A casa considera esse programa
incompleto por construção, porque nenhum dos cinco desvios que decidem o trabalho produz
inconformidade documental. Fracionamento, direcionamento, conflito de interesse, aditivo sucessivo e
pagamento em duplicidade **passam em conformidade documental**. Por isso os testes centrais deste
plugin são de população, e por isso a peça de evidência mais importante do relatório costuma ser um
histograma, e não um documento.

A segunda divergência é a mesma do plugin de receita: a casa amostra por último. Quando a base é
contável e cruzável, o teste é de base. Confronto de anterioridade entre requisição, proposta e
pedido em 100%; aprovador contra faixa de alçada em 100%; alterações de dado bancário de fornecedor
em 100%; varredura de duplicidade sobre a base inteira de pagamentos. A régua de amostragem herdada
de SOX continua valendo como segundo critério, acionada quando o cruzamento integral não é possível,
e para o que só se testa por leitura, como a mudança de objeto num aditivo.

A terceira é sobre o que fazer com a competição. O programa usual confere se o número mínimo de
cotações foi atingido e encerra o teste. Aqui esse é o começo: três propostas anexadas provam que há
três papéis, não que houve três concorrentes, e a evidência de competição está nas datas, nos
metadados do arquivo, no endereço e no quadro societário de quem concorreu. É também onde a casa
insiste numa disciplina de redação: o achado se escreve sobre o fato observado e sobre o controle
ausente, nunca sobre a intenção de quem comprou. Planilha não prova intenção, e um relatório que
atribui intenção perde o achado junto com a discussão.

A quarta é a fronteira com o conflito de interesse. O cruzamento entre quadro societário de
fornecedor e base de pessoal é tratado por muitos programas como assunto de investigação, fora do
escopo de auditoria de compras. A casa o coloca dentro, porque é barato, porque é o único teste do
ciclo que não se faz com dados de compras, e porque a sua ausência é exatamente o que permite que o
vínculo sobreviva a auditorias sucessivas. O que muda é o cuidado com o dado: base mínima,
finalidade declarada, descarte ao fim do trabalho, e descrição do achado por cargo e por registro.
