---
titulo: Auditoria de Estoques
pratica: governanca-riscos-compliance
duracao_tipica: 4 a 8 semanas
plugin: acta-auditoria-estoques
---

## O que é, e quando a ACTA é contratada para isso

A auditoria de estoques responde às quatro perguntas do ciclo, e não só à primeira: **o que está no
depósito é o que o sistema diz** (existência), **está avaliado pelo custo certo** (custeio), **vale o que
está registrado** (realização), e **entrou e saiu por movimento autorizado** (movimentação). O trabalho
fixa o corte de movimentação antes da contagem, desenha a segunda contagem cega e a recontagem dirigida,
apura a divergência item a item e calcula os dois indicadores de acuracidade, separa a divergência que se
compensa entre itens da perda que é real, reperforma o custo unitário, recalcula a provisão pelo critério
formal e confronta o custo com o valor realizável líquido item a item, e trata 100% dos ajustes de
inventário pela data, pelo aprovador e pelo usuário que lançou.

A firma costuma ser contratada em três situações:

- **A acuracidade do estoque caiu, ou o ajuste de inventário surpreendeu.** O resultado do ano foi
  impactado por uma perda que ninguém viu chegar, e a diretoria quer saber se é furto, erro de cadastro ou
  provisão mal feita.
- **Preparação para venda, auditoria ou captação.** O estoque costuma ser a conta mais inflável do ativo
  circulante, e o comprador ou o auditor quer existência, custeio e provisão testados.
- **Acompanhamento independente do inventário anual.** A Companhia (ou o auditor independente) quer um
  terceiro observando a contagem na data-base, com corte fixado e segunda contagem cega.

## As etapas do ciclo de vida

Uma skill por pergunta do ciclo. A ordem tem uma restrição que os outros ciclos não têm: **o inventário
tem data marcada e não se repete.** O planejamento da contagem precisa estar pronto antes da data-base, e
o corte de movimentação não é recuperável depois; por isso o cronograma se monta ao contrário, da data da
contagem para trás, e custeio, provisão e movimentação (que rodam sobre base, não sobre campo) ocupam o
tempo que sobra.

| # | Bloco / pergunta | O que fecha a etapa |
|---|---|---|
| 1 | Matriz de riscos de estoques | As quatro perguntas, os seis blocos executáveis, os quatorze riscos `INV.R<NN>` e a matriz risco × controle × teste, com os seis que decidem o trabalho |
| 2 | Acuracidade e inventário (Q1) | Corte de movimentação fixado e confrontado, segunda contagem cega e recontagem dirigida, apuração item a item e os dois indicadores de acuracidade |
| 3 | Custeio e giro (Q2) | Método declarado × parametrizado, reperformance de custo médio e PEPS, os sete cortes sobre saldo e custo, e giro e cobertura por classe |
| 4 | Obsolescência e provisão (Q3) | O critério antes do número, a provisão reperformada com os três resíduos, as três réguas de aging e o teste de valor realizável líquido item a item |
| 5 | Movimentação e perdas (Q4) | Entrada com documento, baixa com requisição, transferência conciliada pelas duas pontas, perda normal × anormal, e os seis cortes sobre 100% dos ajustes |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**A contagem é feita vendo o saldo do sistema.** Contador que enxerga o saldo esperado confirma o saldo
esperado, e a contagem deixa de ser medição para virar conferência. *Prevenção:* primeira contagem sem o
saldo à vista, e segunda contagem cega (sem acesso ao resultado da primeira) e independente, por equipe
diferente.

**O corte de movimentação não é fixado.** Mercadoria em doca, em trânsito ou em conferência faz o mesmo
item aparecer duas vezes ou nenhuma, e a discussão de "saiu antes ou depois de ser contado" termina sempre
a favor de quem movimentou. *Prevenção:* fixar o número do último documento de entrada e de saída antes do
início, em papel assinado, e registrar item a item o movimento ocorrido se a operação não parar.

**Lê-se só a acuracidade por item, ou só a por valor.** Um estoque com milhares de itens baratos certos e
alguns caros errados tem acuracidade por item alta e por valor baixa; são números diferentes e não
substituíveis. *Prevenção:* reportar os dois sempre — a conclusão sobre controle se sustenta na por item,
a conclusão sobre a demonstração contábil na por valor — e somar a divergência em valor absoluto.

**Trata-se par falta/sobra como perda.** Item A com falta de 12 e item B parecido com sobra de 12 no mesmo
local é quase sempre erro de identificação (cadastro duplicado), com perda real zero. *Prevenção:* parear
falta e sobra de mesma quantidade, confirmar em campo na recontagem dirigida, e reclassificar como falha de
cadastro — reportar como perda derruba o ponto na primeira reunião. Mas compensação declarada sem prova em
campo permanece como falta e sobra separadas.

**Provisiona-se por idade e perde-se o superestoque que gira.** Item com cobertura de vários anos de
consumo é novo, saiu semana passada, e a maior parte do saldo nunca será usada — não aparece no aging por
entrada nem por última saída. *Prevenção:* cruzar as três réguas de aging (entrada, última saída,
cobertura em dias) e testar o valor realizável líquido item a item.

**A provisão nunca vira baixa efetiva.** Item provisionado a 100% continua no ativo bruto ano após ano, o
balanço carrega duas linhas que se cancelam, e a provisão vira reserva disponível para reversão em ano
ruim. *Prevenção:* aging da própria provisão por data de constituição, análise de cada reversão do período
e confronto da baixa física contra a contábil (sucata vendida sem receita é um segundo achado dentro do
primeiro).

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Matriz de riscos e controles de estoques | Planilha código `INV.R<NN>`, risco × controle × teste | Auditoria interna / diretoria |
| Papel de trabalho do inventário | Corte, apuração item a item, indicadores de acuracidade, pares falta/sobra | Interno e auditável |
| Reperformance de custeio e aging | Planilhas de custo unitário, giro, cobertura e as três réguas de aging | Controladoria e auditoria |
| Teste de provisão e valor realizável líquido | Provisão recalculada com os três resíduos, VRL item a item, aging da provisão | Controladoria / diretoria |
| Relatório de auditoria | Deck no padrão da casa, com perda real separada de erro de cadastro, equipe por código | Comitê de auditoria / diretoria |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador na auditoria interna, na controladoria ou na diretoria; a gestão
de estoque e o almoxarifado, que custodiam e conduzem a contagem; a controladoria, que entrega a base de
saldo, o critério de provisão e a movimentação da conta; e compras/recebimento no elo de entrada. As
equipes de contagem são do cliente — o auditor observa e reperforma, não conduz.

**Do nosso lado:** um auditor responsável pela condução, pelo planejamento do inventário e pelos papéis de
trabalho — presente na data-base da contagem — com o sócio responsável validando a materialidade do ajuste
e a suficiência da provisão antes do comitê. A equipe de contagem se identifica por código de dupla, e
quem conta, custodia e aprova ajuste se descreve por cargo e registro.

## O que é preciso ter antes de começar

- **A data-base do inventário e o acesso ao depósito nessa data**, acordados com antecedência: o inventário
  tem data marcada e não se repete, então o planejamento do corte e da segunda contagem tem de estar pronto
  antes, e o corte de movimentação não é recuperável depois.
- **A base de saldo por item com data de entrada e de última saída**, para custeio, giro e as três réguas
  de aging.
- **O método de custeio declarado e a parametrização vigente**, mais as transações de entrada, para
  reperformar o custo unitário.
- **O critério formal de provisão, aprovado e anterior ao exercício**, e a movimentação da conta de
  provisão — sem critério escrito, a ausência dele já é o achado principal.
- **A relação de estoque de terceiro em poder da Companhia e da Companhia em poder de terceiro**, levantada
  antes da contagem, com confirmação escrita na data-base.
