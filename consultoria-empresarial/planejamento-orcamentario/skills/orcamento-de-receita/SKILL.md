---
name: orcamento-de-receita
description: Projete a receita orçada pelo par quantidade vezes preço, por linha e por unidade de negócio. Acionar ao orçar receita, ao decompor preço de venda em custo mais margem, ao projetar volume por ocupação ou market share, ou ao montar a receita de um grupo com várias unidades e linhas de produto.
---

# Orçamento de receita

Carregue `premissas-e-drivers` antes desta skill: os drivers, as premissas e a base realizada já têm
de estar fechados. Aqui se aplica o par volume × preço a cada linha; se o driver ainda é palpite,
volte uma skill.

A receita é a linha que puxa o orçamento inteiro: ela define a necessidade de pessoal, de custo
variável e de capacidade (CapEx). Errar a receita propaga para tudo. Por isso ela se constrói de
baixo para cima — linha a linha, unidade a unidade — e nunca por um percentual global sobre o ano
anterior.

## 1. A estrutura de três colunas

Cada linha de receita carrega, lado a lado: **realizado ano-2, realizado ano-1, orçado ano**, com a
variação percentual entre elas. A terceira coluna é a única projetada; as duas primeiras vêm da base
realizada e existem para que a projeção seja lida *contra a tendência*, não no vácuo.

```
Receita orçada da linha = Volume orçado × Preço unitário orçado
```

Volume e preço são projetados **separadamente**, cada um do seu driver, e só então multiplicados.
Projetar a receita direto (um número de faturamento) perde a capacidade de explicar e de reprever —
e é o erro que a abordagem driver-based existe para evitar.

## 2. Projetar o volume

O volume orçado vem do driver de volume definido em `premissas-e-drivers`, nunca de um crescimento
arbitrado. Os três padrões mais comuns:

**Volume por capacidade e ocupação** (locação, hotelaria, serviço com ativo):
```
Volume = capacidade instalada × dias do período × % de ocupação orçada
```
A capacidade é fato (frota, UHs, estações). A ocupação é a premissa, e ela parte do realizado: se a
ocupação rodou a 48% no ano, orçar 70% exige uma ação comercial nomeada que justifique o salto, não
otimismo. Ocupação orçada acima do histórico sem alavanca declarada é o sinal número um de orçamento
inflado.

**Volume por market share** (revenda, bens de consumo):
```
Volume = mercado endereçável projetado × share orçado
```
O mercado projetado vem de fonte externa (associação setorial, projeção macro); o share parte do
realizado. Ganho de share orçado precisa de causa: canal novo, produto novo, concorrente saindo.

**Volume por carteira** (serviço recorrente):
```
Volume = contratos ativos no início + novos − churn
```
Novos e churn são premissas com histórico. Orçar churn zero é o erro clássico.

## 3. Projetar o preço

O preço orçado tem duas origens, dependendo de o produto ser revendido ou produzido/prestado.

**Preço por repasse** (serviço, locação): preço realizado × reajuste orçado (inflação, dissídio,
reposicionamento de tabela). O reajuste é premissa com fonte.

**Preço por formação de custo** (revenda, produto novo): o preço se constrói do custo para cima, e
esse bloco é a parte que mais rende em concessionária e distribuição:
```
Preço = custo de compra + frete + outros custos diretos
        ÷ (1 − % de margem bruta alvo)
```
Aqui o orçamento de receita e o de custo se encontram: o custo de compra projetado alimenta tanto a
receita (via preço) quanto o CMV. Projete-os na mesma aba, para que um reajuste de custo de compra
reprecifique automaticamente a venda e o CMV — e não gere a incoerência de uma margem que não fecha.

**O mix é a terceira alavanca de preço**, e a mais esquecida. Preço médio sobe ou cai pela mudança de
composição entre linhas de margem diferente, sem nenhuma linha mudar de preço. Se o orçamento assume
mix diferente do realizado, isso é uma premissa e entra na aba `Premissas`.

## 4. Múltiplas unidades e o cuidado da consolidação

Grupo com várias unidades (filiais, lojas, SPEs) orça **cada unidade na sua coluna**, com a mesma
estrutura de linhas, e consolida depois (`ciclo-calendario-e-consolidacao`). Dois cuidados:

- **Não orce o consolidado direto.** O total do grupo é soma das unidades, calculada, nunca
  projetada à parte. Orçar o consolidado e ratear para baixo esconde a unidade que destrói resultado.
- **Receita entre unidades do grupo é intercompany** e não pode inflar a receita consolidada. Fee de
  gestão da holding cobrado das controladas, venda entre filiais: marque na origem e elimine na
  consolidação. (O tratamento de intercompany está em `acta-dados-e-analytics:consolidacao-e-intercompany`
  quando o mandato cruzar os dois; aqui basta marcar a linha.)

## 5. A lente AI-first

Projetar volume e preço linha a linha para dezenas de linhas × unidades é exatamente o volume de
trabalho em que o agente substitui horas de digitação: aplicar o driver a cada linha, puxar a
premissa da aba, montar a estrutura de três colunas, calcular a variação. **O julgamento humano fica
na premissa de ocupação/share e no mix** — as duas entradas que decidem se a receita é alcançável.
O agente monta a planilha de receita; o responsável valida as premissas de salto antes de o número
virar meta.

## O que entregar

1. A planilha de receita por linha e por unidade, com as três colunas (dois realizados, um orçado) e
   a variação.
2. Volume e preço projetados **separadamente** por linha, cada um rastreável ao seu driver e premissa.
3. A formação de preço por custo, onde houver, amarrada ao custo de compra que também alimenta o CMV.
4. As premissas de salto (ocupação, share, mix acima do histórico) com a alavanca comercial que as
   justifica, nomeada.
5. As linhas de receita intercompany marcadas, para eliminação na consolidação.

## Próximo passo

`orcamento-de-despesa-e-pessoal` para o lado do custo (o custo variável depende do volume orçado
aqui), e `capex-e-depreciacao` se o volume projetado exigir capacidade acima da instalada.
