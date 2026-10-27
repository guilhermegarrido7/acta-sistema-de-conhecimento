---
name: capex-e-depreciacao
description: Orce o investimento em ativo fixo e a depreciação que ele gera, amarrando CapEx, desembolso de caixa e plano de contas. Acionar ao orçar investimento ou CapEx, ao projetar depreciação por classe de ativo, ao separar CapEx de manutenção de CapEx de expansão, ou ao ligar o investimento à necessidade de capacidade da receita.
---

# CapEx e depreciação

Carregue `premissas-e-drivers` antes desta skill. O CapEx entra depois da receita, porque é o volume
projetado que diz se a capacidade instalada aguenta ou se precisa de investimento. Orçar CapEx antes
da receita é comprar capacidade para uma demanda que ninguém dimensionou.

O investimento aparece no orçamento em **três lugares diferentes**, e confundi-los é o erro central:
o desembolso de caixa (quando se paga), a depreciação (como vira custo ao longo da vida útil) e o
ativo no balanço (o que fica registrado). Um CapEx mal orçado erra os três.

## 1. CapEx de manutenção contra CapEx de expansão

A primeira separação, e a que a diretoria mais quer ver:

| Tipo | O que é | Driver |
|---|---|---|
| **Manutenção** | Repor o ativo que se desgasta para manter a capacidade atual | Idade/desgaste da base instalada; % da receita como regra de bolso |
| **Expansão** | Ampliar capacidade para a receita nova orçada | A necessidade de capacidade que a receita projetada exige |

O CapEx de expansão **tem de reconciliar com a receita**: se a receita orçada assume frota/capacidade
maior, o CapEx de expansão é o que entrega essa capacidade, e o timing importa — capacidade que entra
em julho não gera receita de ano cheio. Receita de expansão orçada sem o CapEx que a viabiliza é o
orçamento que promete crescimento sem comprar o meio de produzi-lo.

## 2. A tabela de depreciação por classe

Cada item de CapEx pertence a uma classe de ativo, e a classe define a vida útil e a taxa. Monte a
tabela de depreciação uma vez e referencie:

| Classe | Vida útil típica | Taxa anual |
|---|---|---|
| Edifícios e benfeitorias | 25 anos | 4% |
| Máquinas e equipamentos | 10 anos | 10% |
| Instalações | 10 anos | 10% |
| Móveis e utensílios | 10 anos | 10% |
| Veículos (leves e pesados) | 5 anos | 20% |
| Computadores e periféricos | 5 anos | 20% |

> As taxas acima são **convenção contábil usual** (alinhada ao CPC 27 / vida útil econômica),
> exemplo de ponto de partida — não padrão obrigatório. A vida útil a usar é a que reflete o uso real
> do ativo no cliente; divergência material entre a fiscal e a econômica é decisão a declarar.

```
Depreciação mensal do item = valor do ativo ÷ (vida útil em anos × 12)
```

A depreciação começa no mês em que o ativo entra em operação, não no mês da compra. Um ativo comprado
e instalado em setembro deprecia quatro meses no ano, não doze — e orçar o ano cheio superestima o
custo e subestima o resultado. Essa é a ligação com o timing do CapEx de expansão da seção 1.

## 3. Os três reflexos de um CapEx, amarrados

O modelo de CapEx da casa mantém os três reflexos numa estrutura única, para que um item lançado
apareça automaticamente nos três lugares:

| Reflexo | Onde aparece | Quando |
|---|---|---|
| **Desembolso** | Fluxo de caixa orçado | No mês do pagamento (pode ser parcelado, diferente da entrada em operação) |
| **Depreciação** | Linha de custo fixo da DRE orçada | A partir da entrada em operação, pela vida útil |
| **Ativo imobilizado** | Balanço orçado | Pelo valor, baixando pela depreciação acumulada |

Amarrar os três ao mesmo lançamento, por centro de custo e conta contábil de imobilizado, é o que
evita a incoerência mais comum: a depreciação que aparece na DRE sem o ativo correspondente no
balanço, ou o desembolso que some do caixa.

## 4. A lente AI-first

Montar a tabela de depreciação item a item, calcular a parcela mensal por data de entrada em
operação, e propagar o desembolso para o caixa e o ativo para o balanço é cálculo determinístico e
repetitivo — território do agente. Ele monta o cronograma completo de CapEx, depreciação e desembolso
a partir da lista de investimentos. **O julgamento humano fica em duas decisões**: o que é manutenção
e o que é expansão (muda a leitura da diretoria), e a vida útil econômica onde ela diverge da fiscal.

## O que entregar

1. O CapEx orçado separado em manutenção e expansão, com o de expansão reconciliado contra a
   capacidade que a receita projetada exige.
2. A tabela de depreciação por classe, com a vida útil usada e a justificativa onde divergir da
   convenção.
3. O cronograma de depreciação mensal, iniciando na entrada em operação de cada ativo, não na compra.
4. Os três reflexos amarrados ao mesmo lançamento: desembolso no caixa (no mês do pagamento),
   depreciação na DRE (pela vida útil), ativo no balanço (pelo valor líquido).
5. A ligação declarada entre CapEx de expansão e a receita de expansão que ele viabiliza, com o
   timing.

## Próximo passo

`ciclo-calendario-e-consolidacao`, para juntar receita, despesa e CapEx das unidades no orçamento
consolidado dentro do calendário de aprovação.
