---
name: orcamento-de-despesa-e-pessoal
description: Orce a despesa por natureza e a folha de pagamento, separando custo fixo de variável e amarrando o variável ao volume. Acionar ao orçar custos e despesas, ao projetar folha com encargos e benefícios, ao classificar gasto entre fixo e variável, ou ao aplicar corte de base zero a uma linha de SG&A.
---

# Orçamento de despesa e pessoal

Carregue `premissas-e-drivers` antes desta skill, e tenha o volume orçado de `orcamento-de-receita`
em mãos: o custo variável se projeta sobre esse volume. A folha costuma ser a maior linha de custo do
mid-market de serviço, e é a que mais recebe tratamento de base zero.

## 1. A classificação que decide tudo: fixo contra variável

Antes de projetar qualquer número, cada linha de custo é classificada em **fixo** ou **variável**, e
essa classificação não é cosmética: ela define como a linha se projeta e como a variação se lê depois.

| Tipo | Como se projeta | Exemplos |
|---|---|---|
| **Variável** | Escala com o volume: custo unitário × volume orçado | CMV, comissões, fretes, insumo direto |
| **Fixo** | Independe do volume no intervalo relevante: valor realizado ± ajuste | Pessoal administrativo, aluguel, software, depreciação |
| **Semivariável** | Parte fixa + parte que escala (declare a quebra) | Energia, manutenção, pessoal de operação com hora extra |

**O erro recorrente é orçar custo variável como fixo** (repetir o valor do ano anterior quando o
volume muda) **ou o inverso** (escalar aluguel com a receita). Custo variável orçado sem amarração ao
volume quebra na primeira variação: quando a receita cai e o CMV "orçado fixo" não cai junto, a
margem projetada vira ficção.

## 2. A folha de pagamento: a linha que exige abertura por pessoa

Folha não se orça pelo total do ano anterior mais o dissídio. Orça-se da estrutura — quadro por
setor, cargo e salário — porque é a única forma de capturar admissão, desligamento, promoção e a
mudança de mix de senioridade. A base de projeção é a folha realizada aberta por pessoa.

```
Folha orçada = Σ (salário contratual por pessoa × fator de encargos)
             + benefícios per capita × headcount
             + remuneração variável orçada
```

**O fator de encargos é apurado, não arbitrado.** A regra da casa: calcule o percentual de encargos
da própria contabilidade do cliente (INSS patronal + FGTS + provisão de férias + 13º sobre a conta de
salários), não um número de mercado. Em um mandato real o fator apurado foi 72,5% (multiplicador
1,725) — mas esse número é do cliente daquele caso, não padrão. Apure o do mandato.

Ficam **fora** da base de encargos, porque não escalam com o salário contratual: PJ e pessoal
eventual, benefícios per capita, remuneração variável e verbas não recorrentes. Misturá-los ao
cálculo de encargos distorce a comparação entre setores.

**A abertura por setor** (vinda do cabeçalho da folha, não da classificação do consultor) é o que
permite o orçamento de pessoal conversar com `acta-dimensionamento-de-quadro` quando o mandato cruzar
os dois: aqui se orça a folha da estrutura atual ± decisões; lá se recalcula a estrutura ideal.

> Fronteira com `acta-pccr`: desenho de cargos, carreira e tabela salarial vivem lá. Aqui a folha se
> orça pela estrutura vigente mais as decisões de quadro já tomadas, não se redesenha a política.

## 3. Despesa por natureza e por unidade

O restante da despesa se orça por natureza (pessoal, vendas, administrativas, ocupação, serviços de
terceiros, marketing), por unidade, na mesma estrutura de três colunas da receita. Para cada linha:

- **Linha fixa estável** → realizado ano-1 × reajuste da premissa macro. Tratamento incremental.
- **Linha sob suspeita** (SG&A inchado, terceiros, viagens) → base zero: parte de zero e exige
  justificativa de cada componente. É aqui que o modelo escolhido em `premissas-e-drivers` se aplica
  de fato.
- **Linha variável** → custo unitário × volume orçado da receita.

**Comissões são a armadilha clássica de rótulo.** Comissão é custo variável de venda e costuma ser
agrupada em "despesas com pessoal" ou somada duas vezes (uma na folha, outra no SG&A). Classifique
comissão como variável sobre a receita, em uma linha só, e confirme contra o realizado que ela não
está dupla.

## 4. A lente AI-first e a base zero

Base zero é cara porque exige justificar cada linha — e é exatamente aí que o agente muda a economia
do método. O agente levanta cada componente da linha a partir do razão, agrupa por natureza, compara
com o benchmark do próprio histórico e **monta a pergunta de base zero** ("esta linha gastou X em x
itens; qual se mantém e por quê?") para o gestor responder. O trabalho que tornava a base zero
inviável em mid-market — abrir centenas de lançamentos — deixa de ser o gargalo.

O julgamento humano fica na decisão de corte: o agente mostra o que existe e quanto custa; o gestor
decide o que financiar. Apresente a abertura, espere a decisão, só então orce a linha.

## O que entregar

1. Toda linha de custo classificada em fixo, variável ou semivariável, com a quebra do semivariável
   declarada.
2. A folha orçada aberta por setor, com o fator de encargos apurado da contabilidade do cliente (não
   de mercado) e a base de encargos separada das verbas que não escalam.
3. A despesa por natureza e por unidade, na estrutura de três colunas, com o tratamento (incremental
   ou base zero) declarado por bloco.
4. O custo variável amarrado ao volume orçado da receita, não repetido do ano anterior.
5. Comissões em uma linha só, classificadas como variável, confirmadas contra o realizado sem dupla
   contagem.

## Próximo passo

`capex-e-depreciacao`, porque a depreciação orçada é uma linha fixa de custo que vem do investimento,
e fechar a despesa sem ela subestima o resultado. Depois `ciclo-calendario-e-consolidacao` para
juntar as unidades.
