---
name: desenho-to-be
description: Defina o patamar-alvo de um diagnóstico e quantifique a distância até ele: as três famílias de referência, a regra de fonte citável, o cálculo do custo de oportunidade e o que fica deliberadamente fora da soma. Acionar ao escolher benchmark, ao quantificar perda ou potencial, ao comparar unidade com o próprio histórico, ou ao defender o tamanho do prêmio diante do cliente.
---

# TO BE: o patamar-alvo e o tamanho do prêmio

Carregue `mapeamento-as-is` antes: sem base validada contra âncora e sem definição única de
denominador, toda comparação com referência externa é ruído.

## Papel desta skill

Responder a duas perguntas que o cliente contratou: **onde esta operação deveria estar** e **quanto
custa não estar lá**. O produto é um patamar-alvo por linha de custo e de receita, e um número de
perda ou potencial que sobrevive a uma sabatina.

> **Fronteira, declarada.** Isto **não** é o desenho do processo futuro. Fluxo To-Be com raias,
> regras de negócio codificadas, workshop de crítica e homologação vivem em
> `acta-excelencia-operacional`. Aqui o To-Be é **econômico**: o patamar de custo, de preço, de
> utilização e de produtividade que a operação deveria atingir, com a referência que sustenta esse
> patamar. Quando o engajamento tem as duas frentes, o To-Be econômico daqui é o que dá tamanho ao
> To-Be de processo de lá.

## 1. As três famílias de referência

Nem todo custo tem referência de mercado publicada. Em vez de inventar uma, a casa usa três famílias,
declaradas no próprio slide.

| Família | Quando usar | Referência |
|---|---|---|
| **Referência de mercado** | Existe publicação citável, com recorte compatível | O valor publicado, com instituição, edição e recorte |
| **Referência interna** | Não há publicação, mas o próprio ativo já demonstrou o patamar | O desempenho do próprio ativo nos meses de melhor operação |
| **Sem referência** | Não há publicação nem patamar interno demonstrado | O total incorrido, quando todo ele é evitável por natureza |

A terceira família é a mais contestada e a mais defensável quando bem usada. Ela se aplica a itens em
que a pergunta não é "quanto deveria custar" mas "por que existe": capacidade que sequer foi
colocada à venda, juros de dívida que o ativo não precisaria ter contraído, custo de antecipação de
recebível que uma gestão de caixa adequada dispensaria.

## 2. Referência interna: a lógica e a fórmula

A lógica: **em alta temporada, ou no melhor mês de operação, o ativo demonstra a eficiência que é
capaz de atingir.** O múltiplo desses meses vira a referência para os demais. Não é uma aspiração
teórica: é o próprio cliente, com a própria equipe e a própria estrutura.

```
Múltiplo do mês      = Custo real do mês ÷ Unidades-período Ocupadas do mês
Múltiplo referência  = Σ Custo dos meses de referência ÷ Σ Unidades Ocupadas desses meses
Excedente do mês     = MAX(0; Múltiplo do mês − Múltiplo referência) × Unidades Ocupadas do mês
Item                 = Σ Excedentes de todos os meses do recorte
```

Três disciplinas:

- **O `MAX(0; …)` não é detalhe.** Sem ele, mês melhor que a referência gera crédito e a soma vira
  uma média disfarçada. Custo de oportunidade **só soma ineficiência**, nunca compensa.
- **A referência é a razão das somas, não a média das razões.** Somar os custos e somar os volumes, e
  dividir uma soma pela outra. A média das razões pondera mal os meses pequenos.
- **Meses com flag de invalidade ficam fora dos dois lados.** Fora da referência e fora do
  excedente.

A armadilha de fórmula que já custou um número inteiro: o excedente lia a referência por **referência
relativa**, e a referência só existia na primeira coluna. Todos os meses menos o primeiro liam zero,
e o excedente virava o custo inteiro. Um item saltou de trinta e um mil para um milhão e duzentos
mil reais. **Referência de célula fixa é absoluta, sempre.** Confira abrindo a fórmula do último mês,
não do primeiro.

## 3. Referência de mercado: a disciplina de fonte

Duas regras absolutas, detalhadas em
`diagnostico-e-entrevistas`, [references/hierarquia-de-fontes.md](../diagnostico-e-entrevistas/references/hierarquia-de-fontes.md):

- **Nunca publique referência sem fonte citável.** Instituição, publicação, edição, data e recorte.
- **No máximo uma ou duas fontes por indicador.**

E uma terceira, que é a que mais protege o trabalho: **mantenha o registro das referências
rejeitadas e do motivo**. Sem ele, a referência descartada volta na revisão seguinte, porque alguém
lembrou dela e não lembrou do motivo. Motivos reais que já descartaram referência: base geográfica
incompatível com a estrutura trabalhista brasileira; dedução própria apresentada como referência
publicada; faixa que circulava em versões antigas sem fonte identificável; recorte nacional
substituído por recorte regional mais aderente à localização do ativo.

**Onde não há referência citável, publique a série sem juízo de valor**, e declare isso no slide. Uma
série de custo por unidade sem benchmark, apresentada como "não existe referência de mercado
publicada para este indicador", é honesta e ainda assim informa: a tendência e a dispersão entre
unidades falam sozinhas.

**Quando a referência for uma premissa arbitrada e não uma fonte**, marque-a como tal, dê a faixa
usual de mercado, e ponha-a na lista de itens em aberto. Num diagnóstico, exatamente uma premissa em
todo o cálculo era arbitrada, e declará-la explicitamente foi o que blindou as outras.

## 4. O que fica deliberadamente fora da soma

A seção mais importante do entregável de quantificação, e a que ninguém escreve.

Um item sai da soma quando:

- **Não é evitável pela gestão** no horizonte do diagnóstico.
- **Se sobrepõe a outro item já contado.** Dupla contagem em quantificação de perda é o erro que
  destrói a credibilidade do número inteiro.
- **A referência não resiste.** Se a única referência disponível para o item é uma dedução própria, o
  item sai, mesmo que a intuição diga que ele é real.
- **A natureza do gasto é de investimento diferido, não de ineficiência corrente.** Manutenção
  postergada, por exemplo: o baixo gasto de hoje é passivo de amanhã, não economia. Já saiu da soma
  em engajamento real, com a metodologia preservada na documentação para quem quiser reabrir.

Escreva a lista de exclusões **com o valor de cada item excluído**. O cliente que vê "excluímos R$ X
porque Y" confia no que ficou. O cliente que vê só o total pergunta o que foi inflado.

## 5. Como o número é apresentado

- **Não é projeção.** Cada item é calculado sobre dado realizado, comparado a uma referência. Diga
  isso na primeira linha do slide, porque a primeira reação do cliente é tratar o número como
  promessa de resultado futuro.
- **Um quadro por item**, com: a família de referência, a referência usada e sua fonte, a fórmula, o
  período, e o valor. Nenhum item aparece só no total.
- **O total vem depois dos itens**, nunca antes. E vem acompanhado do recorte temporal a que se
  refere.
- **Nunca apresente o total como "o que a empresa vai economizar".** Apresente como "o valor que a
  operação deixou de capturar no período, medido contra a referência X". A diferença entre as duas
  frases é o que separa um diagnóstico de uma proposta comercial.

## 6. Indicadores complementares que costumam valer o esforço

Além das linhas do demonstrativo, três leituras que quase sempre produzem achado e quase sempre são
esquecidas:

- **Gap entre receita registrada na contabilidade e receita documentada fiscalmente**, por linha de
  produto. A diferença é exposição, e é quantificável.
- **Custo do meio de pagamento e da antecipação de recebível.** Costuma estar diluído em despesas
  financeiras e, isolado, vira um dos maiores itens evitáveis do diagnóstico.
- **Partes ligadas, as duas pontas.** Contas espelhadas entre entidades do mesmo grupo raramente
  conciliam. Num caso, as duas pontas divergiam em centenas de milhares de reais em cada perna,
  enquanto as posições líquidas ficavam muito próximas, o que sugeria alocação em pernas diferentes e
  não valores divergentes. Nesse caso, **não conclua: registre a divergência, diga o que sugere, e
  exija confirmação do financeiro antes de qualquer negociação ou compensação de saldo.** E verifique
  se existe contrato, prazo, taxa e correção: sem isso não há como classificar entre circulante e não
  circulante nem estimar o custo financeiro implícito.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Fluxo To-Be, regra de negócio, workshop de crítica | `acta-excelencia-operacional` |
| Direcionador estratégico, mapa estratégico, meta | `acta-planejamento-estrategico` |
| Projeção, cenário, valor terminal | `acta-modelagem-economico-financeira` |
| Transformar o gap em plano de ação priorizado | `priorizacao-e-roadmap` |
