---
name: apuracao-do-indicador-e-memoria
description: Recalcule o indicador do zero a partir da base testada, com denominador próprio por pergunta e base ajustada quando houver exclusão, e escreva a memória de cálculo publicável e o parecer. Acionar ao apurar resultado de pesquisa ou premiação, ao recalcular índice reportado por terceiro, ou ao redigir a memória de cálculo.
---

# Apuração do indicador e memória de cálculo

Carregue antes: `acta-way:checkpoint` e `acta-metodo-auditoria:metodo-auditoria`.

## 1. Reexecutar, não conferir

O auditor calcula o indicador **da base bruta**, com fórmula própria, sem abrir a planilha do
operador. Só depois compara. Conferir a planilha alheia encontra erro de digitação e não encontra
erro de regra, porque a regra errada aplicada corretamente passa em qualquer conferência.

A comparação tem três desfechos, e os três são úteis: bate, não bate por diferença explicável, não
bate e a diferença não fecha. O terceiro é achado imediato, mesmo antes de identificada a causa.

## 2. As duas famílias de indicador

A confusão entre elas é a causa mais comum de indicador publicado errado.

**Média de escala.** A nota do item é a média aritmética das notas válidas. Resultado na unidade da
escala, de 1 a 5.

**Proporção de satisfação.** O item não tem média: tem a **participação das respostas iguais ou
acima de um corte** no total de respostas válidas. Resultado entre 0 e 1.

Numa mesma pesquisa convivem itens das duas famílias, e a regra de qual item pertence a qual vem do
contrato ou da norma, nunca da conveniência. Publicar lado a lado, sem rótulo, um item que vale 4,35
e outro que vale 0,94 é o sintoma visível de que a distinção se perdeu. **A memória de cálculo
declara a família de cada item, item a item.**

## 3. O denominador próprio por pergunta

> **Cada pergunta tem o seu denominador, e ele é o número de respostas válidas daquela pergunta.**

Respostas válidas excluem o valor reservado a ausência e excluem o que o campo condicional tornou
não aplicável. Numa remessa mensal real, itens do mesmo questionário tiveram denominadores que
variaram de dezenas a centenas de respondentes, porque uns eram aplicáveis a todos e outros só a quem
usou determinado serviço.

Consequências práticas que precisam estar na memória:

- **O denominador de cada item é publicado ao lado do resultado.** Um item apurado sobre poucas
  respostas continua válido, mas o leitor precisa ver sobre o que ele foi calculado.
- **Índice agregado não é média de médias sem critério.** A ponderação é a que a norma manda; se ela
  não manda nenhuma, a média simples dos itens é declarada como escolha, não apresentada como fato.
- **Item com denominador abaixo do mínimo declarado não entra no agregado**, e a exclusão aparece.

## 4. Base ajustada por exclusão

Quando uma resposta sai da amostra por conflito de interesse ou por reprovação em teste, o
denominador do avaliado afetado muda, e só o dele.

A mecânica, em três passos:

1. **Recalcule o total possível daquele avaliado**: número de perguntas, vezes a nota máxima, vezes o
   número de avaliadores válidos **para aquele avaliado**.
2. **Compare todos por resultado relativo**, obtido pela divisão do total obtido pelo total possível
   de cada um.
3. **Marque o avaliado afetado** com nota de rodapé dizendo qual ajuste foi feito e por quê.

Sem o passo 1, a exclusão penaliza o avaliado por um conflito que não é dele. Num caso executado, o
ajuste correto mudou a colocação final, e o registro da mecânica na memória de cálculo foi o que
permitiu publicar o resultado sem contestação.

## 5. A memória de cálculo

O entregável do modo pontual, e um anexo obrigatório do modo contínuo. Cinco seções fixas:

| Seção | Conteúdo |
|---|---|
| Contextualização | O que é o indicador, quem coletou, qual o papel da auditoria |
| Conflito de interesse | Vínculos identificados, quem comunicou, qual o ajuste. Por papel, nunca por nome |
| Memória de cálculo | Cada métrica definida em uma frase, com a fórmula e o denominador |
| Resultados | A tabela completa, com denominador por item e nota de rodapé em cada ajuste |
| Conclusão | O resultado e a razão dele, em linguagem que sobrevive à leitura de quem não fez a conta |

Duas regras de redação da memória:

- **Definir antes de usar.** Toda métrica citada nos resultados foi definida na seção anterior, com o
  cálculo escrito por extenso.
- **A tabela de resultados é reprodutível.** Um leitor com a base e a memória chega ao mesmo número.
  Se não chega, falta uma regra na memória, e é essa regra que a revisão procura.

## 6. O parecer

Em trabalho contínuo, o parecer fecha o ciclo e tem quatro elementos:

- **Aderência da amostra ao plano**, com a classificação do elo de amostra.
- **Resultado da bateria de testes**, por teste e por registro.
- **Resultado do recontato**, com as três taxas separadas.
- **Opinião sobre o indicador publicado**: se ele decorre da base, e com que ressalvas.

A ordem é deliberada. O número vem por último porque ele só significa alguma coisa depois que a base
que o produziu foi qualificada. Abrir pelo número convida o leitor a parar ali.

Quando um dos elos reprova, o parecer diz **em que direção** o indicador está errado, sempre que der
para saber. "Provavelmente superestimado, porque o estrato descoberto é o de pior avaliação" é
conclusão acionável; "não foi possível opinar" é o último recurso, não o primeiro.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Estatística de remuneração | `acta-pesquisa-salarial:estatistica-remuneracao` |
| Estrutura do relatório de auditoria | `acta-metodo-auditoria:relatorio-de-auditoria` |
| Qualificar a base antes de calcular | `bateria-de-testes-de-base` |
