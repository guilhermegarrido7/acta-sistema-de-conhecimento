---
name: premissas-e-drivers
description: Defina os drivers operacionais e as premissas que sustentam o orçamento, e escolha o modelo (incremental, base zero ou híbrido). Acionar ao abrir a construção de um orçamento, ao decidir entre base zero e incremental, ao mapear os direcionadores de volume, preço e custo, ou ao fechar as premissas macro antes de projetar qualquer linha.
---

# Premissas e drivers

Carregue `acta-metodo-consultoria` antes desta skill: a hierarquia de autoridade entre fontes, a
reconstrução de base a partir do dado bruto e a planilha-mestre com rastreabilidade valem aqui e não
são repetidas. O orçamento é um projeto de consultoria como os outros; o que muda é que o número
olha para a frente.

Esta é a skill de entrada do plugin. Nada se projeta antes de os drivers e as premissas estarem
fechados, porque orçamento sem driver é o ano passado multiplicado por um palpite.

## 1. A decisão que vem antes de tudo: qual modelo

O modelo não é preferência de método, é consequência do que o cliente precisa decidir. Fixe isto no
primeiro encontro, por escrito, porque ele define quanto trabalho o orçamento vai dar e o que ele
consegue responder.

| Modelo | Quando usar | O que custa | O que entrega |
|---|---|---|---|
| **Incremental** | Operação estável, estrutura madura, pergunta é "quanto cresce" | Baixo | Rápido, mas carrega a ineficiência do ano-base para dentro do novo ano |
| **Base zero (ZBB)** | Custo fora de controle, troca de gestão, pergunta é "o que de fato precisamos financiar" | Alto | Cada linha justificada do zero; corta gordura que o incremental esconde |
| **Híbrido** | O caso comum em mid-market | Médio | Base zero nas linhas que viraram problema (SG&A, pessoal), incremental no resto |

**A regra prática da casa: híbrido por padrão.** Base zero em tudo é caro demais para o mid-market e
raramente se sustenta no segundo ciclo. Aplique base zero onde o gasto está sob suspeita e
incremental com driver onde a operação é estável. Declare, linha a linha, qual tratamento recebeu.

> Base zero **não é skill separada**: é esta decisão de modelo, tomada aqui. A mecânica de orçar cada
> linha é das skills de receita, despesa e CapEx; o que muda com ZBB é que a linha parte de zero e
> exige justificativa, em vez de partir do realizado.

## 2. O princípio driver-based

O orçamento da casa é **construído de drivers operacionais**, não de percentual sobre o ano anterior.
Cada linha de receita e de custo se decompõe no driver físico que a gera e no valor unitário:

```
Linha = driver de volume × valor unitário
```

Isso não é preciosismo: é o que torna o orçamento **defensável e reprevísivel**. Quando a diretoria
pergunta "por que a receita cai 8%", a resposta driver-based é "a ocupação projetada cai de 52% para
48% e o preço sobe 3%", não "aplicamos -8%". E quando o realizado chega, a variação se abre no driver
que a causou (`analise-de-variacao-e-forecast`), não num resíduo inexplicável.

Os drivers mudam por natureza de negócio. Alguns exemplos reais de mandatos:

| Negócio | Driver de volume | Valor unitário |
|---|---|---|
| Locação de equipamento | Diárias ocupadas = frota × dias × % ocupação | Preço da diária por categoria |
| Revenda (concessionária) | Unidades vendidas por categoria | Preço = custo + frete + margem |
| Serviço recorrente | Contratos ativos × ticket | Preço por faixa de serviço |
| Hotelaria | UH-noites ocupadas = UHs × dias × ocupação | Diária média (ADR) |

O driver de volume quase sempre se decompõe de novo: "diárias ocupadas" não é um número arbitrado, é
`frota disponível × dias do período × taxa de ocupação`, e cada um desses três é uma premissa com
dono e fonte. É aí que o orçamento ganha rastreabilidade.

## 3. As premissas, e de onde cada uma vem

Premissa sem fonte é chute com aparência de número. Toda premissa do orçamento entra numa aba única
(`Premissas`), com valor, unidade, fonte e responsável, e as linhas do orçamento referenciam essa
aba — nunca um número digitado direto na célula de projeção.

| Família | Exemplos | Fonte típica |
|---|---|---|
| **Macro** | Inflação, câmbio, taxa de juros, reajuste salarial (dissídio) | Boletim Focus, convenção coletiva, política interna |
| **Volume** | Crescimento de mercado, market share, capacidade instalada, ocupação | Histórico realizado + meta comercial validada |
| **Preço** | Reajuste de tabela, repasse de inflação, mix | Política comercial do cliente |
| **Custo unitário** | Custo de compra, frete, encargos sobre folha | Contrato de fornecedor, contabilidade |
| **Estrutura** | Headcount-alvo, abertura/fechamento de unidade, novos contratos | Decisão da diretoria, por escrito |

**A premissa de crescimento é a mais perigosa.** O cliente quase sempre traz uma meta de
crescimento que é aspiração, não projeção. Sua função é separar as duas: a meta entra como *cenário*
(`projecao-e-cenarios` da modelagem, quando houver), e a projeção-base parte do realizado ajustado
pelos drivers que o cliente controla. Orçar a aspiração como base produz o orçamento que ninguém bate
e que vira peça de ficção no terceiro mês.

## 4. A base realizada: o ponto de partida honesto

Driver-based exige conhecer o realizado por driver, não só o total. Antes de projetar, reconstrua
dois anos de realizado (`acta-metodo-consultoria:mapeamento-as-is`) abertos nos mesmos drivers em que
o orçamento será construído:

- Receita realizada = volume realizado × preço realizado, por linha. Se o cliente só tem o total,
  reconstrua o volume e o preço implícito — senão não há como projetar driver-based.
- Custo realizado por natureza, separado entre fixo e variável (a classificação importa no
  break-even e na variação).
- A série em **valor do período**, nunca em saldo acumulado. (A armadilha do "Saldo Atual" do
  balancete está em `acta-metodo-consultoria:mapeamento-as-is` e vale integralmente aqui.)

O padrão de três colunas que o orçamento usa — **realizado ano-2, realizado ano-1, orçado ano** —
começa a ser montado aqui: as duas primeiras colunas são a base realizada, e a variação entre elas já
revela a tendência que a projeção precisa explicar ou romper.

## 5. A lente AI-first

A montagem de premissas e a reconstrução do realizado por driver é trabalho repetível e é onde o
agente entrega mais: extrair o volume e o preço implícito de uma base de faturamento, consolidar o
realizado por linha, montar a aba `Premissas` com fonte por célula. O agente produz essa base; **o
julgamento que fica com o humano é a premissa de crescimento e a escolha do modelo** — as duas
decisões que definem se o orçamento é projeção ou ficção. Apresente premissas e modelo ao
responsável e só projete depois do aceite.

## O que entregar

1. A decisão de modelo (incremental, base zero, híbrido), com o tratamento declarado por bloco de
   linha.
2. O mapa de drivers: para cada linha de receita e de custo, o driver de volume e o valor unitário,
   com a decomposição do driver até a premissa.
3. A aba `Premissas` completa: valor, unidade, fonte e responsável por premissa.
4. A base realizada de dois anos, aberta nos mesmos drivers, validada contra a contabilidade.
5. A separação explícita entre meta/aspiração (vai para cenário) e projeção-base.

## Próximo passo

`orcamento-de-receita`, que aplica o par volume × preço às linhas de entrada. Em paralelo,
`orcamento-de-despesa-e-pessoal` para o lado do custo. O CapEx (`capex-e-depreciacao`) só entra
depois que a receita define a necessidade de capacidade.
