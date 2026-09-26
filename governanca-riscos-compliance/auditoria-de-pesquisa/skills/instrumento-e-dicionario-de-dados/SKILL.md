---
name: instrumento-e-dicionario-de-dados
description: Critique o instrumento e o dicionário de dados de uma pesquisa antes do campo, campo a campo, com tipo, domínio fechado, obrigatoriedade e condicionalidade. Acionar ao receber o questionário ou o layout da base, ao montar a tabela de domínios que vai sustentar os testes, ou ao avaliar se uma base entregue é auditável.
---

# O instrumento e o dicionário de dados

Carregue antes: `acta-way` e `acta-metodo-auditoria`.

## 1. Por que este elo vem primeiro

**Base sem dicionário não é auditável, é interpretável.** Sem domínio declarado, um campo com valor
`0` pode ser nota zero, ausência de resposta ou pergunta não aplicável, e as três leituras produzem
médias diferentes do mesmo dado. O dicionário é o que transforma divergência de opinião em achado.

Por isso o dicionário é exigido como **entrega do operador**, não reconstruído pelo auditor. Quando o
operador não tem, o primeiro achado do trabalho já está escrito.

## 2. As três tabelas que o instrumento precisa ter

**Tabela de identificação.** Um campo por elemento que localiza o registro no mundo: código do local,
tipo de coleta, identificador do evento observado, data do evento, data e hora da coleta,
identificador do coletador, nome do arquivo de gravação. É essa tabela que permite confrontar o
registro contra fonte externa. Sem ela, a base é um conjunto de notas sem âncora.

**Tabela de perguntas.** Uma linha por pergunta, com seis colunas:

| Coluna | Conteúdo |
|---|---|
| Id | O código estável do indicador, que sobrevive à renumeração do questionário |
| Nome do campo | Como aparece no cabeçalho da base |
| Pergunta a ser realizada | O texto literal, como dito ao respondente |
| Respostas | O domínio fechado, valor a valor |
| Tipo | Numérico, alfabético, data, data e hora, livre |
| Referência | O item de contrato ou norma que obriga aquela pergunta |

**Tabela de perfil.** Os campos sobre o respondente, separados dos campos de avaliação. A separação
não é cosmética: perfil é dado pessoal com regra de retenção própria, e avaliação não.

## 3. O domínio fechado, e o valor que significa ausência

A regra prática que evita a maior parte do retrabalho:

> **Todo campo de avaliação declara explicitamente o valor reservado para ausência de resposta, e
> esse valor nunca entra no cálculo.** Se a escala vai de 1 a 5 e `0` é ausência, a média de cada
> pergunta tem denominador próprio, igual ao número de respondentes que efetivamente responderam
> aquela pergunta.

A consequência é que **a base tem tantos denominadores quanto perguntas**. Numa remessa mensal real,
uma pergunta foi respondida por praticamente toda a amostra e outra, aplicável apenas a quem usou um
serviço específico, por menos de vinte pessoas. Tratar as duas com o mesmo denominador é o erro de
apuração mais comum que a casa encontra, e é silencioso: o número sai plausível.

Campos condicionais precisam do gatilho declarado na própria linha da tabela: qual resposta anterior
abre aquela pergunta. Sem isso não dá para distinguir ausência legítima de não resposta.

## 4. O roteiro

O texto literal importa. Duas perguntas com a mesma intenção e redações diferentes produzem séries
que não se comparam entre si, e a comparabilidade entre ciclos é metade do valor de um indicador
contínuo.

Confira três coisas no roteiro:

- **Ordem das perguntas fixa.** Ordem é tratamento experimental. Se ela mudou entre ciclos, o corte
  da série é achado.
- **Escala apresentada ao respondente**, e não apenas codificada na base. O respondente precisa ouvir
  os rótulos, não os números.
- **Abertura e encerramento padronizados**, incluindo a identificação de quem conduz e a finalidade.

## 5. O teste de auditabilidade da base entregue

Antes de qualquer teste de conteúdo, rode seis verificações de forma sobre o arquivo recebido:

1. **Cabeçalho bate com o dicionário**, campo a campo, na ordem e no nome.
2. **Um registro por linha**, sem linha de total, sem linha em branco intercalada, sem cabeçalho
   repetido no meio.
3. **Tipo respeitado em todas as linhas**: data que é data em toda a coluna, e não texto em algumas.
4. **Valor fora de domínio**: qualquer célula com valor que a tabela de perguntas não prevê.
5. **Identificador único** de registro, sem duplicata exata e sem duplicata por chave de negócio.
6. **Layout estável entre ciclos.** Coluna nova, coluna removida ou coluna reordenada quebra toda
   leitura por posição fixa, e quebra calada.

Nenhuma dessas seis é sofisticada, e todas já apareceram. A quarta e a sexta são as que mais viram
achado.

## 6. Quando o dicionário é imposto por norma

Em indicador regulado, a tabela de perguntas não é escolha do operador: vem do contrato ou do ato
normativo. Isso muda o teste. A pergunta deixa de ser "o instrumento é bom" e passa a ser **"o
instrumento aplicado é o instrumento exigido"**, campo a campo, texto a texto, domínio a domínio.

Registre a referência normativa na própria tabela de perguntas, na coluna de referência. É ela que
sustenta o achado quando o operador aplicou pergunta com redação própria no lugar da obrigatória.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Desenhar instrumento próprio da casa | `acta-pesquisa-salarial:instrumento-de-coleta` |
| Conferir cobertura do plano amostral | `amostra-e-aderencia-ao-plano` |
| Rodar os testes de consistência | `bateria-de-testes-de-base` |
