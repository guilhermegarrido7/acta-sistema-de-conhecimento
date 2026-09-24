# Hierarquia de fontes, rastreabilidade e tolerância

Referência de `diagnostico-e-entrevistas`. Carrega quando houver divergência entre fontes, quando se
for montar a rastreabilidade do entregável, ou quando um número novo entrar na base.

## 1. A regra de precedência, escrita para o engajamento

Escreva a tabela abaixo no `CLAUDE.md` do engajamento, preenchida com as fontes reais, antes do
primeiro cálculo. Ela é o desempate para o resto do projeto.

| Ordem | Classe de fonte | Quando é a autoridade | Por que |
|---|---|---|---|
| 1 | Registro analítico lançamento a lançamento (razão, extração transacional completa) | No período em que existir | Não contém lançamento de ajuste, agregação nem reclassificação de fechamento |
| 2 | Demonstrativo consolidado do período (balancete mensal, fechamento) | Nos demais períodos | É a base contábil oficial, mas já vem agregada |
| 3 | Extração bruta do sistema operacional | Todo dado de volume, quantidade e preço médio | Planilha derivada de indicador já embute definição de terceiro |
| 4 | Documento, relatório, apresentação, planilha intermediária | **Nunca** | São derivados; carregam resíduo de versão anterior |

Duas consequências que a regra impõe:

- **A fonte pode mudar de mês para mês na mesma conta.** É legítimo, desde que a troca esteja
  declarada e o motivo registrado. Um período de fechamento contaminado por lançamento de
  encerramento exige o registro analítico, mesmo que todos os outros meses venham do balancete.
- **Confirme quais contas são imunes.** Nem toda conta se contamina. Liste nominalmente as que
  fecham ao centavo entre a fonte 1 e a fonte 2, porque essa lista é o que permite usar a fonte mais
  barata no resto do trabalho sem abrir exceção caso a caso.

## 2. Rastreabilidade célula a célula

O padrão da casa, quando o entregável de cálculo é uma planilha-mestre:

- Uma aba **Base de Dados** concentra **todo** dado de entrada. Nenhuma outra aba digita número.
- Cada célula de entrada carrega, em colunas próprias, a **conta ou campo de origem** e o
  **arquivo-fonte**, com hyperlink para o arquivo no repositório do projeto, com âncora para a linha
  quando aplicável. Num diagnóstico, essa aba chegou a 1.360 hyperlinks, um por célula de entrada.
- Uma aba **Base de dados dos slides** mapeia cada número publicado no deck de volta para a linha
  correspondente da Base de Dados. É o que permite responder "de onde saiu esse número" em segundos,
  na frente do cliente.

A armadilha de manutenção dessa segunda aba (renumeração quando slides são inseridos no meio do
deck) está em `mapeamento-as-is`, referência de planilha-mestre.

## 3. Tolerância de reconciliação

Nas reconciliações contra fonte bruta, o critério de aceitação da casa é **±R$ 2,00 e ±0,1 ponto
percentual**.

Diferença acima disso é **achado e se investiga**, nunca se arredonda. Diferença abaixo disso se
registra na nota de reconciliação e se segue. O critério é escrito no entregável, não fica no
entendimento de quem fez.

## 4. Fontes externas de comparação

Duas regras, e elas são absolutas:

- **Nunca publique referência externa sem fonte citável.** Nome da instituição, nome da publicação,
  edição, data e recorte geográfico ou setorial. "A prática de mercado é de 30% a 40%" sem fonte não
  entra no entregável, mesmo que todo mundo saiba que é verdade.
- **No máximo uma ou duas fontes por indicador.** Três fontes para o mesmo indicador viram discussão
  sobre qual usar, e a discussão chega ao cliente.

Mantenha um registro de **referências rejeitadas e o motivo**. Ele vale tanto quanto o das adotadas,
porque impede que uma referência já descartada volte na revisão seguinte. Motivos que já
descartaram referência em engajamento real: base geográfica incompatível com a realidade trabalhista
brasileira; dedução própria apresentada como referência publicada; número que circulava em versões
antigas sem fonte formal identificável; recorte nacional substituído por recorte regional mais
aderente à localização do ativo.

Onde não existe referência citável, a série é publicada **sem juízo de adequado ou inadequado**, e
essa ausência é declarada no próprio slide. É mais honesto e, na prática, mais persuasivo.

## 5. Checklist de revisão de qualquer número novo

Rode antes de um número entrar no entregável. Adapte os itens 1, 2 e 8 ao plano de contas do
engajamento.

1. O valor mensal de conta de resultado usa **Débito − Crédito**, e não o saldo acumulado?
2. Se o mês é o de **encerramento do exercício**, o valor veio do **registro analítico**?
3. A métrica por unidade usa a **definição única** de numerador e denominador declarada no projeto?
4. O **denominador** é o mesmo dos outros indicadores com os quais este será comparado?
5. Qual é o **recorte temporal**? Está declarado ao lado do número?
6. Se há referência de comparação, ela tem **fonte citável**? Se não tem, a série está publicada sem
   juízo de valor?
7. Meses com **flag de invalidade** foram excluídos do cálculo?
8. A conta é **credora**? O sinal está correto?
9. O resultado do exercício ainda fecha contra a **âncora contábil** externa?
10. Se subcontas foram somadas, elas **reconstroem o total** da conta-mãe?
11. Se o número vem de uma base paralela (folha, cadastro, sistema operacional) e não do
    demonstrativo contábil, isso está declarado, com o multiplicador de encargos usado, quando
    houver?
12. Se slides foram inseridos no deck, a aba de mapeamento do deck foi **renumerada**?
13. Se o número envolve **serviço de dívida ou amortização**, ficou claro que esse componente vem de
    cronograma contratual e não do demonstrativo contábil?
