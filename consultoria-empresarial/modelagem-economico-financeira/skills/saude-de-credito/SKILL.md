---
name: saude-de-credito
description: Diagnosticar liquidez, cobertura e alavancagem do alvo e estimar a capacidade de dívida que ele sustenta, incluindo EBITDAR para operação arrendada. Acionar ao analisar endividamento, ao avaliar quanto um comprador financeiro consegue pagar, ao checar covenant, ou ao testar a sobrevivência do negócio num downturn.
---

# Saúde de crédito — a alavancagem que o negócio sustenta

## Papel desta skill

**Oráculo. Não escreve na planilha.** Diagnostica a estrutura de dívida, estima capacidade de
alavancagem e aponta o que o comprador vai encontrar. Quem digita é o analista.

## Por que isto é análise de preço, não de contabilidade

Duas razões, e ambas afetam diretamente o resultado do mandato.

**A capacidade de dívida do alvo define o teto do comprador financeiro.** Um fundo monta o preço de
trás para frente: quanta dívida o negócio sustenta, quanto equity ele precisa aportar, e qual retorno
esse equity entrega. Se o alvo sustenta 3,0x de dívida líquida/EBITDA e o mercado bancário financia
isso, o fundo tem folga para pagar mais do que se sustentasse 1,5x. **Fazer essa conta antes é fazer
o LBO reverso do comprador** — e chegar à mesa sabendo qual é o teto dele.

**A dívida do alvo familiar brasileiro é tipicamente caríssima e mal estruturada.** Capital de giro
rotativo em banco, antecipação de recebível, factoring, desconto de duplicata, dívida no CNPJ com
aval pessoal do sócio, parcelamento tributário, empréstimo de sócio. Nenhuma dessas linhas aparece
organizada, várias não aparecem como dívida, e o custo médio real frequentemente surpreende o próprio
vendedor. **Reestruturar essa dívida é, em si, uma alavanca de valor** que o comprador captura — e é
argumento de venda quando apresentado como upside identificado.

## Pré-requisitos

Entre aqui com o **EBITDA normalizado** (skill `qualidade-de-resultados`), a **dívida líquida
reconciliada** com todos os equivalentes de dívida (skill `reorganizacao-contabil`) e a **composição
da dívida contrato a contrato**. Sem o contrato a contrato, o diagnóstico fica no agregado e não
permite identificar a linha caríssima — que é justamente onde está o achado.

## As métricas, e por que estas

### Alavancagem — a linguagem do covenant brasileiro

```
Dívida líquida / EBITDA
```

É a métrica que governa covenant de CCB, debênture e cédula de crédito no Brasil. Use-a como métrica
primária **porque é a linguagem do comprador e do banco**, ainda que a cobertura de juros seja
tecnicamente mais informativa.

Duas exigências para que o número signifique algo:

- **A dívida líquida tem de incluir os equivalentes de dívida** — parcelamento tributário, passivo de
  arrendamento, contingência provável, mútuo de sócio. Um `Dívida líquida/EBITDA` de 1,2x que ignora
  R$ 8 milhões de REFIS é ficção, e é a primeira coisa que a diligência corrige.
- **O EBITDA é o normalizado, e isso precisa estar declarado.** Alavancagem sobre EBITDA normalizado
  é o número da negociação; sobre EBITDA reportado é o número do covenant vigente. Os dois existem, e
  confundi-los produz discussão inútil.

### Cobertura de juros — sobre EBITA, não EBITDA

```
Cobertura de juros = EBITA / despesa financeira líquida
```

**EBITA, não EBITDA.** A depreciação é consumo real de capital: uma empresa que cobre juros só antes
de depreciar está pagando juros com o desgaste do próprio ativo. Em alvo com imobilizado relevante —
frota, planta, equipamento — a diferença entre as duas leituras é material e é exatamente onde o
risco se esconde.

A cobertura revela imediatamente se a operação sustenta a dívida que tem. É o teste que mais rápido
separa "endividada" de "insolvente na prática".

### EBITDAR — para o alvo que aluga tudo

```
EBITDAR = EBITDA + despesa de aluguel e arrendamento

(Dívida + Arrendamentos capitalizados) / EBITDAR
```

Obrigatória quando o alvo arrenda o que o comparável compra — galpão, frota, equipamento, imóvel.
Sem esse ajuste, o alvo arrendado parece pouco alavancado (a obrigação está na despesa, não no
passivo) e o comparável proprietário parece muito alavancado. **A comparação fica invertida.**

É o caso da maioria dos alvos de serviço, saúde, educação e varejo, e é frequente em resíduos e
engenharia — onde a frota de coleta e os caminhões podem ser todos arrendados.

Ver skill `reorganizacao-contabil`, nota de leases: a decisão de capitalizar tem de ser **a mesma**
aqui, no capital investido e no ROIC. Capitalizar o arrendamento para a alavancagem e não para o
capital investido é incoerência que infla o ROIC e o risco ao mesmo tempo.

### Liquidez

```
Liquidez corrente = ativo circulante / passivo circulante
Liquidez seca     = (ativo circulante − estoques) / passivo circulante
```

Úteis como triagem, e enganosas isoladamente — liquidez corrente alta com recebível velho e estoque
obsoleto não é liquidez. Leia junto com o aging (ver `capital-de-giro-e-capex`).

O que importa mais em mid-market e raramente é calculado:

- **Perfil de amortização dos próximos 24 meses** contra a geração de caixa livre projetada. É aqui
  que se descobre que a empresa vai precisar rolar dívida, e em que condições.
- **Concentração por credor.** Dependência de um único banco é risco de refinanciamento.
- **Percentual da dívida com garantia real ou aval do sócio.** O aval pessoal é informação de
  negociação: ele sai no fechamento, e liberar o sócio pode ser tão importante para ele quanto o preço.

## O que não usar, e por quê

| Métrica | Por quê não |
|---|---|
| Rating de agência | Não existe para empresa fechada mid-market. |
| D/E a valor de mercado com ação de referência | Não há ação. Se precisar de D/E a valor de mercado, use o **próprio EV do valuation** como valor do patrimônio, iterativamente — e declare a circularidade. |
| **EBITDA / capital investido** como "retorno sobre capital" | Superestima sistematicamente o retorno, porque ignora a depreciação — isto é, ignora o consumo do capital. E o erro **piora conforme o ativo envelhece**. Se aparecer no material do vendedor ou de outro assessor, corrija. O retorno sobre capital é o ROIC — ver `diagnostico-de-roic`. |

## Capacidade de dívida

Sem rating, a estimativa vem de três lados, e o intervalo entre eles é a resposta honesta:

1. **O múltiplo que o mercado bancário concede ao setor.** Quanto de dívida líquida/EBITDA um banco
   financia para este tipo de operação, neste porte, com estas garantias. Pergunte ao usuário — é
   conhecimento de mercado que ele tem e você não deve estimar sozinho.
2. **A cobertura de juros que o negócio sustenta** ao custo de dívida vigente, com folga para o
   cenário pessimista.
3. **O perfil de garantia disponível** — imobilizado livre de ônus, recebível cedível.

A leitura que interessa ao mandato:

```
Capacidade de dívida estimada
  − dívida líquida atual (com equivalentes)
= folga (ou excesso) de alavancagem
```

Folga significa que o comprador financeiro pode alavancar a aquisição, o que **eleva o preço que ele
consegue pagar**. Excesso significa o contrário: parte do preço vai para desalavancar, e o vendedor
recebe menos. Diga isso ao usuário explicitamente — é informação de estratégia de comprador, e
conecta com a skill `segmentacao-de-compradores` do plugin de M&A.

## A pergunta do downturn

> **A empresa sobrevive a um ciclo setorial ruim com esta estrutura de dívida?**

É a pergunta que o comprador vai fazer. Responda antes.

Tome o cenário pessimista de `projecao-e-cenarios` — o que de fato foi construído como
desconfortável — e verifique, ano a ano:

- A cobertura de juros permanece acima de 1,0x? Acima de qual folga?
- O covenant vigente é rompido? Em qual ano, e por qual margem?
- A amortização programada é honrada com a geração de caixa do cenário?
- O capital de giro libera ou consome caixa na queda? Em recessão, receita caindo **libera** capital
  de giro — é o único alívio automático, e vale quantificar.

Se o cenário pessimista rompe covenant, isso é achado material: ou a estrutura de dívida precisa ser
reperfilada antes do processo, ou o comprador vai precificar o risco. Melhor descobrir você.

## Red flags de estrutura de dívida

- **Factoring, antecipação de recebível ou desconto de duplicata** tratado como redução de prazo de
  recebimento em vez de dívida. É dívida caríssima disfarçada de eficiência operacional.
- **Capital de giro rotativo permanentemente renovado** — dívida de curto prazo financiando
  necessidade estrutural. Risco de refinanciamento mal precificado.
- **Custo médio da dívida muito acima do CDI + spread razoável** para o porte e a garantia. Sinaliza
  acesso restrito a crédito, e é oportunidade de valor para um comprador com balanço melhor.
- **Aval pessoal do sócio em parte relevante da dívida.** Não é só risco: é alavanca de negociação.
- **Parcelamento tributário com risco de exclusão** — inadimplência acelera a dívida inteira.
- **Concentração em um único credor.**
- **Mútuo de sócio sem contrato, taxa ou prazo.** Precisa ser resolvido antes do fechamento.
- **Covenant vigente já rompido ou com waiver** — verifique se há waiver formal e sua vigência.
- **Descasamento de moeda** — dívida indexada a moeda estrangeira com receita em reais.
- **Dívida em outra empresa do grupo garantida pelo alvo.** O perímetro da transação não protege o
  alvo de garantia prestada a terceiro.

## O que entregar

1. Alavancagem, cobertura sobre EBITA, EBITDAR quando aplicável, e liquidez — histórico e projetado.
2. O perfil de amortização de 24 meses contra a geração de caixa projetada.
3. A composição da dívida por credor, custo, garantia, prazo e aval.
4. A capacidade de dívida estimada, pelos três lados, com a folga ou o excesso.
5. O teste do downturn, com o ano e a margem de qualquer rompimento de covenant.
6. Os red flags, cada um com a consequência de negociação — e, quando houver, a **oportunidade de
   valor** que ele representa para o comprador certo.

## Próximo passo

`triangulacao-e-faixa`, onde a capacidade de alavancagem informa o que um comprador financeiro pode
pagar, ao lado do DCF e dos múltiplos. E o plugin de M&A, `segmentacao-de-compradores` — a folga de
alavancagem é um dos critérios que separa comprador estratégico de financeiro.
