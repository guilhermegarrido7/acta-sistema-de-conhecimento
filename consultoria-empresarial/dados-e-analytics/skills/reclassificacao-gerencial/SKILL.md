---
name: reclassificacao-gerencial
description: Converta o dado contábil societário na visão gerencial que responde à pergunta de negócio, mapeando conta para categoria sem perder o total. Acionar ao reclassificar plano de contas societário em visão gerencial, ao agrupar lançamentos por categoria de gestão, ao separar operacional de não operacional e financeiro, ou ao montar a estrutura analítica de um grupo.
---

# Reclassificação gerencial

Carregue `acta-metodo-consultoria` antes desta skill, e só reclassifique base que passou por
`qualidade-e-validacao`. Reclassificar base não validada é construir a visão gerencial sobre número
que não fecha.

O dado contábil é organizado para o fisco e para a norma, não para a decisão. A reclassificação
gerencial reorganiza o mesmo dado na visão que responde à pergunta de negócio — por categoria de
gestão, por centro de resultado, por operacional contra financeiro. É a ponte entre a contabilidade
e a análise, e tem uma regra inviolável: **reclassificar muda a visão, nunca o total.**

## 1. O princípio: o total é invariante

A reclassificação é um reagrupamento. A receita total, o custo total e o resultado não mudam —
mudam as gavetas em que o dado é lido. Isso dá o teste de validação mais forte da etapa:

```
Σ (categorias gerenciais) = Σ (contas societárias)   —   sempre, ao centavo
```

Se o total gerencial não bate com o societário, a reclassificação perdeu ou duplicou lançamento, e
está errada. Esse fechamento é a continuação da reconciliação de `qualidade-e-validacao`: a visão
gerencial reconcilia com a contábil por construção, ou não é confiável.

## 2. O mapa de reclassificação

A reclassificação é um mapa "conta societária → categoria gerencial", construído uma vez e
reaplicável. As famílias gerenciais típicas de um diagnóstico financeiro:

| Família gerencial | O que agrupa |
|---|---|
| Receita operacional | Receita das atividades-fim, líquida |
| Receitas e despesas financeiras | Juros, rendimento de aplicação, IOF, tarifas — **separadas do operacional** |
| Custos e despesas operacionais | O custo de operar, por natureza |
| Obras e infraestrutura / CapEx | O que é investimento, não despesa do período |
| Marketing e relacionamento, consultorias, etc. | Conforme a pergunta de negócio exigir abrir |

**A separação operacional × financeiro × não operacional é a reclassificação que mais rende** e a que
a contabilidade societária mais mistura. Receita financeira escondida dentro de "receitas diversas",
despesa financeira somada ao custo operacional — isso distorce a leitura de margem operacional, que é
quase sempre a pergunta central. (O princípio é o mesmo da reorganização de
`acta-modelagem-economico-financeira:reorganizacao-contabil`; aqui aplicado à leitura gerencial, lá
ao valuation.)

## 3. As armadilhas da conta

| Armadilha | O que acontece | Como tratar |
|---|---|---|
| **Conta credora tratada como devedora** | Uma conta de natureza credora (consumo interno, recuperação) somada como custo bruto infla o custo | Ler o sinal da conta, não o rótulo; conta de transferência interna pode sair da classificação |
| **Valor do período × saldo acumulado** | Usar "saldo atual" (acumulado no ano) em vez do movimento do mês | Valor do mês = débito − crédito do mês (`acta-metodo-consultoria:mapeamento-as-is`) |
| **Encerramento de dezembro** | O lançamento de encerramento zera contas de resultado e contamina o bruto | Em dezembro, usar o razão analítico, não o balancete bruto |
| **Conta nova sem mapa** | Lançamento numa conta que o mapa não prevê cai em "não classificado" | Categoria de exceção visível, revisada, nunca forçada |

Essas armadilhas são as mesmas do método de consultoria, e reaparecem aqui porque a reclassificação é
onde elas se materializam. A skill não as redefine; aponta onde elas mordem na reclassificação.

## 4. A lente AI-first

Aplicar o mapa de reclassificação a milhares de lançamentos, verificar o fechamento contra o
societário, e sinalizar a conta nova sem mapa é trabalho determinístico de volume — o agente aplica o
mapa, reconcilia o total e lista as exceções. **O julgamento humano fica no desenho do mapa** (que
categorias gerenciais respondem à pergunta de negócio) e na classificação da conta ambígua. O agente
reclassifica e prova o fechamento; o responsável define as gavetas e resolve o que é ambíguo.

## O que entregar

1. O mapa de reclassificação "conta societária → categoria gerencial", reaplicável.
2. A base reclassificada na visão gerencial, com o lançamento rastreável à conta de origem.
3. A prova de fechamento: Σ categorias gerenciais = Σ contas societárias, ao centavo.
4. A separação explícita entre operacional, financeiro e não operacional.
5. A lista de lançamentos não classificados ou ambíguos, resolvida com o cliente.

## Próximo passo

`consolidacao-e-intercompany` quando o mandato envolver grupo de várias empresas; se for entidade
única, segue direto para `modelo-analitico-e-visualizacao`.
