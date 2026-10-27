---
titulo: Auditoria Interna da Receita
pratica: governanca-riscos-compliance
duracao_tipica: 4 a 8 semanas
plugin: acta-revenue-assurance
---

## O que é, e quando a ACTA é contratada para isso

Revenue assurance — segurança da receita — é a auditoria que segue o dinheiro do direito ao caixa e
do caixa ao razão, para responder uma pergunta: **a empresa está reconhecendo e recebendo toda a
receita a que tem direito, e só ela?** O entregável é a receita em risco quantificada, por elo do
ciclo, com o controle que falhou e a diferença apurada.

A firma costuma ser contratada em três situações:

- **A receita "some" entre a operação e o caixa.** Mede-se um volume, fatura-se outro, recebe-se um
  terceiro, e ninguém reconcilia os três. A pergunta é onde o dinheiro escapa no ciclo.
- **A empresa vai ser auditada, vendida ou captar.** A assertiva de que a receita é real e está na
  competência certa precisa de lastro. É revenue assurance como preparação.
- **O fechamento de um evento não bate.** Show, festival ou feira em que a receita vem de patrocínio,
  permuta, cortesia e bilheteria ao mesmo tempo, boa parte sem caixa, e o declarado não reconcilia
  com o apurado. É a variante de evento.

## As etapas do ciclo de vida

O plugin tem uma skill por bloco do ciclo, mais a variante de evento. A ordem importa: o critério
contratual sustenta o confronto de tudo que vem depois.

| # | Etapa | O que fecha a etapa |
|---|---|---|
| 1 | Ciclo da receita | Escopo dimensionado, os sete elos marcados como aplicáveis ou não, com a razão |
| 2 | Matriz de riscos da receita | Registro de riscos `REC.R<NN>` e a matriz risco × controle × teste |
| 3 | Contrato e cadastro | Critério contratual, preço vigente e reajuste reperformado |
| 4 | Medição e aceite | Medição contra evidência independente, aceite por quem tem poder, glosas conciliadas |
| 5 | Faturamento e NF | Aceito × faturado pelos dois lados, aderência fiscal, cut-off, conciliação com o razão |
| 6 | Recebimento e inadimplência | Aging reconciliado, baixa × ingresso efetivo, encargos de mora reperformados |
| — | Receita de evento (variante) | Apuração por natureza × autorização de faturamento, com a diferença e a pendência documental |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**Audita-se o aging e o encargo de mora some.** O título pago em atraso sem juros é liquidado e
desaparece do relatório — quem só olha o aging nunca o encontra. *Prevenção:* reperformar encargos em
100% dos títulos pagos após o vencimento, não na carteira em aberto.

**Concilia-se o faturamento com o razão pelo total.** Diferença positiva de um produto compensa a
negativa de outro, o total fecha, e o erro fica escondido. *Prevenção:* conciliar por competência e
por linha de receita.

**No evento, parte-se da autorização de faturamento como verdade.** Mas a AF é feita na correria do
fechamento, antes de todo contrato e produto entrarem. *Prevenção:* apurar a receita por conta
própria, natureza a natureza, e confrontar com a AF — não o contrário.

**Receita não-caixa avaliada a valor inflado.** Patrocínio em produto a preço de tabela quando o
custo foi menor, permuta sem parâmetro de avaliação. *Prevenção:* a contrapartida se avalia a valor
comprovável, com evidência física de recebimento.

**Herda-se a matriz de riscos do cliente sem confrontá-la.** Os pontos cegos dele viram os seus.
*Prevenção:* confrontar a matriz do cliente contra os quatorze (mais quatro de evento) riscos da casa.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Matriz de riscos e controles da receita | Planilha, código `REC.R<NN>`, risco × controle × teste | Auditoria interna / diretoria |
| Papéis de trabalho por elo | Planilhas de confronto, com consumo de pool e rastreabilidade | Interno e auditável |
| Relatório de auditoria | Deck no padrão da casa, com a receita em risco quantificada | Comitê de auditoria / diretoria |
| Apuração de evento por natureza | Papel de trabalho de três colunas (apuração, declarado, diferença) + pendências | Operador do evento |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador na auditoria interna ou na controladoria, e pontos focais em
comercial, faturamento e financeiro que dão acesso a contratos, sistema de faturamento e extratos.

**Do nosso lado:** um auditor responsável pela condução e pelos papéis de trabalho, com o sócio
responsável validando a severidade dos achados e a quantificação da receita em risco antes do comitê.

## O que é preciso ter antes de começar

- **Os contratos e a tabela de preços vigente**, porque é o critério contratual que sustenta todo
  confronto.
- **A base de faturamento e o razão da receita**, para conciliar os dois lados.
- **O extrato bancário do período**, para lastrear a baixa no ingresso efetivo.
- **Em evento:** as autorizações de faturamento, os contratos de patrocínio e permuta, e o controle
  de estoque de bebidas com as notas de entrada.
