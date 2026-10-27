---
titulo: Auditoria de Compras
pratica: governanca-riscos-compliance
duracao_tipica: 4 a 8 semanas
plugin: acta-auditoria-compras
---

## O que é, e quando a ACTA é contratada para isso

A auditoria de compras segue o ciclo procure-to-pay (PTP) ponta a ponta, do nascimento da necessidade ao
caixa que sai e do caixa ao razão. Confronta a data da requisição com a da cotação e a do pedido, testa a
alçada contra a tabela vigente na data, caça o fracionamento na população inteira em vez de na amostra,
examina a independência das propostas concorrentes, cruza o quadro societário de fornecedor com a base de
pessoal, apura o crescimento dos contratos por aditivo sucessivo, testa se quem atestou o recebimento
conferiu alguma coisa, reperforma a conferência de três vias fora do sistema e varre a base de pagamentos
pelas sete variantes de duplicidade.

A premissa do método: **a compra irregular quase nunca começa no pagamento.** Ela começa na requisição que
nasceu depois da conversa com o fornecedor, ou na especificação que já tinha dono — e tudo o que vem
depois é consequência formalmente correta de uma origem viciada. A firma costuma ser contratada em três
situações:

- **Suspeita de direcionamento, fracionamento ou conflito de interesse.** Um fornecedor concentra gasto, as
  cotações parecem combinadas, ou há rumor de vínculo entre comprador e fornecedor.
- **Compras é a maior linha de custo depois de pessoal e matéria-prima, e ninguém a audita.** A diretoria
  quer saber onde o dinheiro escapa no ciclo e quanto se recupera em pagamento em duplicidade.
- **Preparação para venda, auditoria ou implantação de sistema.** O ciclo de compras precisa ser mapeado e
  testado antes, e o passivo de contingência (contrato que virou outro por aditivo, retenção não recolhida)
  dimensionado.

## As etapas do ciclo de vida

Uma skill por bloco, na ordem do ciclo. A ordem tem razão prática: a data da requisição fixada no primeiro
elo é a referência de todo o teste de anterioridade das propostas no segundo, e a proposta vencedora
apurada no segundo é o critério contra o qual o pedido é conferido no terceiro. Começar pelo pagamento —
a tentação natural, porque a base é a mais limpa — produz um trabalho que conclui sobre a saída de caixa e
não encosta em nada do que a decidiu.

| # | Bloco | O que fecha a etapa |
|---|---|---|
| 1 | Ciclo PTP | O ciclo em sete elos com a pergunta-mestra de cada, os blocos executáveis, os cinco pares de bases e os elos declarados inaplicáveis |
| 2 | Matriz de riscos de compras | Os quinze riscos `PTP.R<NN>` e a matriz risco × controle × teste, com os cinco que decidem o trabalho |
| 3 | Requisição e alçada (PTP.01/02) | A anterioridade por carimbo de tempo, a especificação escrita para um fornecedor, a tabela de alçadas por versão, o bloqueio demonstrado em tela e a bateria de fracionamento por população |
| 4 | Cotação e seleção (PTP.03/04) | A aderência ao mínimo de cotações, os sinais de direcionamento, dispensa e fornecedor único, e o cruzamento de conflito de interesse |
| 5 | Contrato e aditivo (PTP.05) | O pedido contra a proposta vencedora campo a campo, a linha do tempo de aditivos com o acumulado sobre o original e a mudança de objeto, e o aging de adiantamentos |
| 6 | Recebimento e pagamento (PTP.06/07) | A segregação de quem atesta, a comprovação de entrega em serviço, o bloqueio de três vias, as sete variantes de duplicidade e o fechamento com o razão |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**Começa-se pelo pagamento porque a base é a mais limpa.** O trabalho conclui sobre a saída de caixa e não
toca na decisão que a originou — a requisição viciada passa intacta. *Prevenção:* seguir o ciclo do começo;
a requisição fixa a referência de anterioridade, e a proposta vencedora fixa o critério do pedido.

**Testa-se a anterioridade por data, não por carimbo de tempo.** A data esconde a sequência de minutos, e
é a sequência que conta a história — requisição e pedido no mesmo dia, em minutos, é processo montado em
bloco para regularizar compra já feita. *Prevenção:* pedir a base com carimbo de tempo e confrontar os três
(requisição, proposta mais antiga, pedido) em 100%.

**Procura-se fracionamento na amostra.** Amostra de 25 pedidos sobre 4 mil não encontra fracionamento nem
por acidente, porque o padrão só existe no agregado. *Prevenção:* a bateria sobre a população inteira —
histograma por faixa de alçada, agrupamento por fornecedor/categoria/requisitante em janelas, e pedidos
irmãos — concluindo sobre o fato e o controle, nunca sobre a intenção da pessoa.

**Aceita-se o atesto de serviço como evidência de entrega.** Material deixa rastro; serviço deixa uma
assinatura. *Prevenção:* para os maiores contratos de serviço, exigir o produto que o serviço gerou
(relatório, medição, apontamento, efetivo alocado conferido contra o faturado) — sem ele, o pagamento não
tem comprovação, ainda que o atesto seja de gestor competente.

**O bloqueio de três vias é declarado em política e nunca demonstrado em tela.** A mesma marca de ERP faz a
conferência num cliente e não faz em outro, porque o parâmetro é de implantação, e uma tolerância generosa
transforma o bloqueio em decoração. *Prevenção:* demonstração em tela (tentar liberar nota sem recebimento
e acima do pedido), a tolerância parametrizada confirmada, e 100% das liberações por exceção testadas.

**A busca de pagamento em duplicidade usa só a chave exata.** Fornecedor + número + valor idênticos pega só
a duplicidade grosseira; os casos que sobreviveram ao controle do cliente estão nas variantes. *Prevenção:*
rodar as sete variantes (nota redigitada, cadastro duplicado de fornecedor, conta bancária alterada,
pagamento agrupado, normalização do número, adiantamento não abatido, crédito de devolução) e confirmar
cada candidato no extrato — o valor recuperado costuma pagar o trabalho.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Matriz de riscos e controles de compras | Planilha código `PTP.R<NN>`, risco × controle × teste | Auditoria interna / diretoria |
| Papéis de trabalho por elo | Confrontos por carimbo de tempo, bateria de fracionamento, reperformance de três vias | Interno e auditável |
| Cruzamento de conflito de interesse | Quadro societário de fornecedor × base de pessoal, descrito por cargo e registro | Auditoria / jurídico |
| Relação de duplicidades recuperáveis | Candidatos e confirmados no extrato, com valor recuperável | Financeiro / diretoria |
| Relatório de auditoria | Deck no padrão da casa, conclusão sobre fato e controle, não sobre a pessoa | Comitê de auditoria / diretoria |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador na auditoria interna, na controladoria ou na diretoria; compras e
suprimentos, que entregam pedidos, cotações e contratos; o recebimento/almoxarifado para o atesto; a
tesouraria e o contas a pagar para pagamentos e extratos; e o RH para a base de pessoal usada no cruzamento
de conflito de interesse.

**Do nosso lado:** um auditor responsável pela condução, pelas baterias de população e pelos papéis de
trabalho, com o sócio responsável validando a severidade dos achados e a quantificação (fracionamento,
duplicidade recuperável, passivo de retenção) antes do comitê. O vínculo de conflito de interesse se
descreve por cargo e registro, nunca por nome.

## O que é preciso ter antes de começar

- **A tabela de alçadas vigente e as versões anteriores do período, com a data de cada uma** — pedida
  antes da base de pedidos: sem a faixa, a base é uma lista de valores sem régua e o teste mais produtivo
  não existe.
- **A base completa de pedidos com carimbo de tempo, requisitante, comprador, aprovador, fornecedor e
  categoria**, para anterioridade, alçada e fracionamento.
- **As bases de cotações, recebimentos, documentos fiscais, títulos pagos e os extratos bancários do mesmo
  período**, com chave de vínculo, para os cinco pares de conciliação.
- **A base de pessoal (sócios, dependentes, endereços)** para o cruzamento de conflito de interesse, na
  forma da anonimização da casa.
- **A demonstração em tela dos bloqueios** (alçada e três vias) e a relação de liberações por exceção, para
  separar desenho de efetividade.
