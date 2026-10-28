---
name: receita-de-evento
description: Audite o fechamento financeiro de um evento, apurando a receita real por natureza contra o que foi declarado e sinalizando pendência documental. Acionar ao auditar receita de evento ou show, ao confrontar apuração própria com autorização de faturamento, ao tratar patrocínio em produto, permuta ou cortesia, ou ao conciliar estoque de bebidas de um evento.
---

# Receita de evento

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Carregue também `ciclo-da-receita` e `matriz-de-riscos-da-receita`: esta skill é uma
**variante do ciclo de receita** aplicada a um evento, não um ciclo novo.

Um evento (show, festival, feira) fecha num período curto, com receita que vem de **várias naturezas
ao mesmo tempo** e boa parte dela **sem caixa** — patrocínio em produto, permuta, cortesia. O ciclo
clássico (contrato → medição → aceite → faturamento → recebimento) existe, mas comprimido e com uma
pergunta-mestra diferente: **a receita real do evento é a que foi declarada?** O desfecho não é
recomendação de controle; é a **diferença apurada por natureza** mais a lista de pendência documental.

## 1. A referência do confronto: a Autorização de Faturamento

No evento, o documento que declara a receita a reconhecer é a **AF (Autorização de Faturamento)**, ou
o razão da conta de receita do evento. A auditoria não parte dela como verdade: ela **apura a receita
por conta própria, natureza a natureza**, e confronta com a AF. O padrão de papel de trabalho é o
mesmo em todas as naturezas:

```
Diferença = Apuração ACTA − Valor da AF (ou razão)
```

Três colunas por item, lado a lado: **apuração ACTA, valor declarado (AF/razão), diferença**. E duas
colunas de pendência documental, porque no evento o documento costuma faltar: **falta AF** e **falta
contrato**. A diferença em dinheiro e a pendência documental são os dois produtos do trabalho.

> Por que não partir da AF como correta: a AF é feita na correria do fechamento, muitas vezes antes
> de todo contrato estar assinado e todo produto recebido. Ela é a declaração a testar, não a fonte
> autoritativa. A hierarquia de fontes (`acta-metodo-auditoria`) vale: contrato e evidência de
> ingresso mandam sobre a AF.

## 2. As naturezas de receita, e o que testar em cada

| Natureza | O que é | Caixa? | Risco próprio | Como se apura |
|---|---|---|---|---|
| **Patrocínio em dinheiro** | Cota paga em espécie | Sim | Cota sem contrato; valor divergente do contratado | Lançamento a lançamento no razão × contrato × AF |
| **Patrocínio em produto** | Cota paga em mercadoria/serviço (bebida, mídia) | **Não** | Produto não recebido, ou avaliado a valor inflado | Nota de entrada do produto × valor da cota; confirmar recebimento físico |
| **Permuta** | Troca de exposição por bem ou serviço (estrutura, mídia, engenharia) | **Não** | Permuta sem contrato; avaliação sem parâmetro de mercado | Apuração ACTA × AF, com o lastro da contrapartida recebida |
| **Cortesia** | Ingresso ou consumo concedido sem contrapartida | **Não** (é custo/renúncia) | Cortesia sem alçada; mão de obra temporária lançada como cortesia | Relação de cortesias × autorização; natureza do lançamento |
| **Bilheteria / bebidas** | Venda direta no evento | Sim | Estoque consumido sem venda registrada; perda não apurada | Conciliação de estoque (§4) |

**A regra de ouro do evento: receita não-caixa é onde o número escorrega.** Patrocínio em produto,
permuta e cortesia não passam pelo banco, então não há extrato para conciliar — o lastro é o
contrato e a evidência física de que a contrapartida existiu. Patrocínio em produto avaliado a valor
de tabela quando o custo real foi menor infla a receita do evento; permuta sem contrato é receita que
ninguém consegue comprovar. Trate as três naturezas não-caixa como a parte de maior risco.

## 3. Patrocínio, permuta e cortesia: o confronto documental

Para cada cota, três perguntas, nesta ordem:

1. **Existe contrato?** Patrocínio e permuta sem instrumento assinado são o achado mais comum
   (a coluna "falta contrato" do papel de trabalho). Sem contrato, não há como validar valor nem
   contrapartida.
2. **O valor bate?** Valor da AF × valor do contrato × apuração própria. Divergência entra como
   diferença, com o sinal (a maior ou a menor).
3. **A contrapartida foi entregue/recebida?** No patrocínio em dinheiro, é o ingresso no banco. No
   patrocínio em produto, é a nota de entrada da mercadoria. Na permuta, é a evidência do bem ou
   serviço recebido. Na cortesia, é a autorização em alçada.

**Cortesia tem uma armadilha de classificação:** mão de obra temporária e ajuda de custo lançadas
como "cortesia" não são receita renunciada, são despesa. Separe pela natureza do lançamento, não pelo
rótulo — o rótulo do evento mistura as duas.

## 4. Estoque de bebidas: a conciliação física

Onde há venda ou consumo de bebida, a receita se testa pela conciliação de estoque, item a item
(SKU), no mesmo padrão de `acta-auditoria-estoques` mas aplicado ao período do evento:

```
Estoque inicial (NF de compra)
  − Consumido (vendido + cortesia + sobra de estrutura)
  − Perdas e doações
  = Estoque final esperado   →   confrontar com o estoque final contado
```

O que o confronto revela: bebida que saiu do estoque sem venda registrada (receita não reconhecida ou
desvio), perda não apurada, e a diferença entre o comprado e o consumido. Apure por SKU — o total
esconde o item que sumiu. A quantidade vendida × preço reconcilia com a receita de bebidas da AF.

## 5. A lente AI-first

O fechamento de evento é trabalho de confronto de alto volume: dezenas de cotas de patrocínio,
lançamento a lançamento do ERP, conciliação de estoque por SKU, cada um contra contrato e AF. É
exatamente o que o agente executa — montar o papel de trabalho de três colunas por natureza, casar o
razão com a AF por consumo de pool, sinalizar as pendências documentais, apurar a diferença. **O
julgamento humano fica na avaliação da receita não-caixa** (o valor justo da permuta, se o produto
recebido vale a cota) e na classificação da cortesia entre renúncia e despesa. O agente entrega a
apuração e a lista de pendências; o responsável decide sobre o valor do que não tem preço de mercado.

## 6. Anonimização

A base de um evento traz nome de patrocinador e de pessoa física (cortesia, mão de obra). Nada disso
entra em skill nem em exemplo: patrocinador vira descrição por setor ("grande patrocinador —
bebidas", "patrocinador — automotivo"), e pessoa aparece por papel. O operador do evento é cliente;
o nome não entra. Vale a regra geral de `acta-way:anonimizacao-e-lgpd`.

## O que entregar

1. O papel de trabalho por natureza (patrocínio dinheiro, patrocínio produto, permuta, cortesia,
   bilheteria/bebidas), cada um com as três colunas: apuração ACTA, valor declarado (AF/razão),
   diferença.
2. As duas colunas de pendência documental (falta AF, falta contrato) preenchidas por cota.
3. A conciliação de estoque de bebidas por SKU, com o consumo aberto em vendido, cortesia, sobra e
   perda.
4. A diferença total apurada entre a receita declarada do evento e a receita real por natureza, com
   o sinal.
5. A classificação da cortesia entre receita renunciada e despesa, separada por natureza do
   lançamento.

## Próximo passo

`recebimento-e-inadimplencia` para a parte em caixa (patrocínio em dinheiro, bilheteria), e
`faturamento-e-nf` para a aderência fiscal da emissão. Ao fechar, promova à
`matriz-de-riscos-da-receita` o risco de evento que o mandato revelar, e leve o estado ao checkpoint
de `acta-way`.
