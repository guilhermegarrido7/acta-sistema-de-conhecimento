# A doutrina do número: a causa dos erros, a ordem completa e a correção

Extraído de `metodo-auditoria`, seção 2, que mantém a versão curta de cada passo. O conteúdo é o
mesmo; só o lugar mudou.

Esta seção existe porque foi aqui que o método falhou mais. Onze números entregues ao auditor responsável
precisaram ser retratados, e **todos tinham a mesma causa: agregar antes de validar o universo.**
Total de fatura tratado como transação inflou um saldo em 4,6×. Parcelas da mesma compra contadas
como 148 duplicidades. Homônimos no cadastro contando pagamento em dobro. Percentual formatado com
zero decimais que virou conclusão sobre a ausência de regra, quando a regra existia e fechava ao
centavo.

**A ordem correta, sem atalho:**

1. **Defina o universo antes de somar.** Quantas linhas o arquivo tem? Quantas são transação e
   quantas são cabeçalho, subtotal, total, rodapé de página, linha de continuação? Some só depois de
   responder.
2. **Reconcilie contra um total independente.** O total da fatura, o saldo do extrato, o valor
   declarado pelo cliente. Se a sua soma não bate com um total que você não calculou, você ainda não
   entendeu a base.
3. **Casamento item a item, com tolerância declarada.** Ao confrontar duas bases, case valor a valor
   consumindo um pool (cada contraparte só pode casar uma vez, senão homônimos e repetições contam em
   dobro). Declare a tolerância, 1 centavo, e trate os quase-pares como achado próprio: diferença
   de centavos entre fatura e sistema é prova de lançamento manual.
4. **Separe fenômenos que se parecem.** Parcelamento não é duplicidade. Cobrança recorrente
   automática não é gasto discricionário. Seguro operacional não é seguro do cartão. Antes de
   classificar por palavra-chave, olhe a lista de valores distintos.
5. **Se o universo é contável, conte-o inteiro.** Nunca escreva `~`, "cerca de", "aproximadamente"
   para algo que dá para contar. O auditor responsável formulou a regra assim: *"entendo que você precisou olhar
   100% delas, o valor tem de ser exato e a quantificação de todos os dados precisam ter acurácia."*
6. **Cheque a consistência interna antes de entregar.** Se um parágrafo diz 100% e outro diz 20%, um
   dos dois está medindo outro universo. Descubra qual antes que o revisor descubra.
7. **Tente refutar o seu próprio número.** Pergunte: qual é a explicação inocente para isso? Se
   existe e você não a testou, você ainda não tem achado, tem hipótese. Três dos onze erros morreram
   no rascunho justamente porque essa pergunta foi feita.

**Quando um número já publicado estiver errado**, corrija de frente: diga o número que estava errado,
o certo, e a causa, em duas linhas. Depois propague para **todos** os artefatos, WP, deck, matriz,
texto do ponto. Número corrigido em um lugar e velho em outro é pior que o erro original. E registre
a correção no histórico do projeto (ver `aprendizado-e-historico`).
