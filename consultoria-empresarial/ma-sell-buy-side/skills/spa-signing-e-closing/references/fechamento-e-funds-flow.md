# Fechamento e funds flow: modelos e calendário pós-fechamento

Apoio da skill `spa-signing-e-closing`. Os documentos daqui são econômicos: o checklist jurídico do
fechamento (atos societários, assinaturas, registros) é da assessoria jurídica e corre em paralelo.

## 1. Closing statement

O cálculo do preço no fechamento, da base contratual ao valor pago, linha a linha e com a cláusula
do contrato ao lado de cada linha:

```
Enterprise value contratual
(−) dívida líquida estimada no fechamento, pela definição do contrato
(±) capital de giro estimado contra o peg
(−) leakage não permitido apurado (locked box)
(+) ticking fee acumulada até a data do fechamento (locked box)
= Equity value no fechamento
(−) depósito no escrow
(−) holdback
(−) parcelas diferidas e earn-out (não pagos no fechamento)
= Valor pago aos vendedores no fechamento
```

No locked box não há estimativa de dívida e capital de giro: o preço já está fixado, e as linhas
são leakage e ticking fee. No completion accounts, as estimativas do closing statement são
substituídas pelo balanço definitivo no ajuste pós-fechamento.

## 2. Funds flow

| Nº | Origem | Destino | Valor | Conta (banco, agência, conta, titular) | Documento-suporte | Responsável | Conferido por |
|---|---|---|---|---|---|---|---|

Linhas típicas:

- quitação de dívida do alvo, contra carta de quitação do credor com o saldo na data;
- liberação de garantias (aval, fiança, alienação fiduciária), contra o termo do credor;
- depósito no escrow, contra o contrato com o agente;
- honorários e despesas da transação que o contrato atribui à sociedade ou ao vendedor;
- pagamento a cada vendedor, na proporção da participação e pelas regras do contrato; e
- retenção e recolhimento de tributo, quando aplicável, conforme a assessoria tributária.

Regras de controle:

1. **Fontes iguais a usos**, ao centavo, e iguais ao closing statement.
2. **Quem confere não é quem montou.** A conferência fica registrada na coluna própria.
3. **Dado bancário confirmado por canal independente** do e-mail que o enviou (telefone conhecido,
   documento assinado). Alteração de conta na véspera do fechamento é tratada como suspeita até
   prova em contrário.
4. **Versão única circulando.** O funds flow segue a nomenclatura de `convencoes-de-projeto`, e só a
   versão aprovada pelas partes vai ao banco.

## 3. Calendário pós-fechamento

| Evento | Gatilho | Prazo | Responsável | Status |
|---|---|---|---|---|
| Balanço definitivo de fechamento (completion accounts) | Data do fechamento | Prazo do contrato | Parte indicada no contrato | |
| Revisão e objeção ao balanço | Entrega do balanço | Prazo do contrato | A outra parte | |
| Perito contábil, se houver divergência | Objeção não resolvida | Prazo do contrato | Ambas | |
| Pagamento ou liberação do ajuste de preço | Balanço final | Prazo do contrato | Comprador, vendedor ou agente | |
| Apuração de cada período de earn-out | Fim do período | Prazo do contrato | Parte indicada no contrato | |
| Liberação de cada parcela do escrow | Prazo de sobrevivência ou encerramento da contingência | Prazo do contrato | Agente de escrow | |
| Laudo de PPA (buy-side) | Data da aquisição | Último dia útil do 13º mês subsequente | Comprador e perito | |

O prazo do laudo vem do Decreto-Lei 1.598/1977, art. 20, § 3º (ver
[ppa-e-alocacao-do-preco.md](ppa-e-alocacao-do-preco.md)); os demais vêm do contrato. A ACTA mantém o
calendário vivo até a última liberação do escrow e registra cada marco pelo protocolo de
`acta-way:checkpoint`.
