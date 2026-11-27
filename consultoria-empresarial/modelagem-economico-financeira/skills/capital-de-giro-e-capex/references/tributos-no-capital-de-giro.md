# Tributos no capital de giro: split payment, dedução e saldos de transição

Cobre o que o capital de giro de cada ano precisa decidir sobre o tributo da venda e o do lucro.
Mecanismo legal e calendário: `reforma-tributaria` e `impostos-e-prejuizos-fiscais` (transição
2026 a 2033, seção 2.5). Decisão registrada na matriz CG-02.

## 1. Dedução na DRE e efeito de caixa são coisas diferentes

A dedução na DRE tira o tributo do EBITDA. O efeito de caixa é o intervalo entre receber do cliente e
recolher ao Fisco, e ele aparece no balanço: o contas a receber carrega o tributo e o tributo a
recolher o financia por alguns dias. A dedução sozinha não resolve o giro, e um EBITDA líquido de
IBS e CBS não diz nada sobre a necessidade de capital de giro. Explique sempre as duas partes.

## 2. Antes do split payment

A fatura inclui IBS e CBS. Projete o recebível sobre a receita com tributo (pelo PMR) e o IBS/CBS a
recolher em dias (média dos dois últimos anos fechados). A diferença de prazos gera uma necessidade
residual de giro, que se reverte quando o split passa a valer. Registre o valor residual e o ano da
reversão: é o sinal de que a mecânica está ligada.

## 3. Com split payment

O tributo é retido na liquidação financeira e não passa pelo caixa da empresa. Ele sai do capital de
giro: recebível sobre a receita líquida de IBS/CBS, sem passivo de IBS/CBS.

- **Prazo do passivo igual ao PMR é atalho frágil.** Com prazos iguais as duas linhas se anulam e o EV
  não muda, mas por coincidência aritmética: qualquer divergência de prazo cria um efeito de giro que o
  split não produz. Use a igualdade como teste de neutralidade (com prazos iguais, o EV tem de
  coincidir com o do modelo sem tributo no giro), e não como mecânica.
- **A data do split é hipótese do modelo.** A LC 214/2025 prevê implantação gradual por ato conjunto e
  o calendário de operação plena não está fixado. Declare a data, a etapa em que ela se apoia e a
  fonte, e mantenha o ano anterior na mecânica da seção 2.

## 4. IRPJ/CSLL e tributo extinto pela reforma

- **IRPJ/CSLL** entra no capital de giro pela posição líquida, líquida das retenções sofridas, em dias
  sobre o imposto corrente (`reorganizacao-contabil`, tributos sobre o lucro).
- **Saldo de tributo que a reforma extingue** (PIS/Cofins) na data-base é liquidação única, não
  recorrente. Vai para a ponte como item assemelhado a dívida, e o capital de giro projetado parte do
  saldo sem ele, para a liquidação não ser contada duas vezes. O tributo que o substitui entra pela
  mecânica das seções 2 e 3.

## 5. Convergência dos prazos

Dos dias do último saldo até a meta, interpole linearmente até o fim do horizonte explícito, salvo
ação nomeada que justifique antecipar. As metas finais não mudam com o prazo da convergência. O efeito
no valor é de segunda ordem, mas o ano em que a
convergência termina tem de ser o mesmo no modelo, no slide de premissas e no apêndice. Antes de
entregar, busque o ano antigo nos três.

## 6. Prazo atípico por natureza do negócio

Prazo de clientes alto porque o recebível inclui receita reconhecida e ainda não faturada (contrato a
faturar, receita diferida) é característica do negócio, e não ineficiência. Mantenha, explique e
mostre a série. Não force o prazo à média de anos anteriores sem ação nomeada (regra do dia projetado
com razão, em "Projeção: dias, não valores").
