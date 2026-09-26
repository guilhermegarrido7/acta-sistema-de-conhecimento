---
name: recontato-do-respondente
description: Confirme com o próprio respondente que a coleta registrada na base ocorreu, por roteiro curto e código de ocorrência padronizado, e leia o resultado separando não contato de negativa. Acionar ao planejar a reexecução por telefone, ao codificar tentativas de contato, ou ao interpretar taxa de confirmação baixa.
---

# Recontato do respondente

Carregue antes: `acta-way` e `acta-metodo-auditoria`.

## 1. O que este teste prova, e o que não prova

O recontato é o único procedimento da auditoria que sai da base e vai à realidade. Ele responde uma
pergunta só: **esta coleta existiu?**

Ele não confere as respostas. Ninguém lembra, meses depois, que nota deu para a limpeza de um
banheiro, e pedir isso destrói a credibilidade da ligação e contamina o teste. A conferência de
conteúdo é da gravação, em T3 da bateria de testes. Aqui se confirma a **existência do encontro**,
e nada mais.

Essa fronteira também é o que mantém a ligação curta o bastante para ter taxa de resposta utilizável.

## 2. O roteiro

Quatro movimentos, nesta ordem, sem improviso:

1. **Identificação e finalidade.** Quem liga, em nome de que trabalho, e que se trata de verificação
   independente de uma pesquisa.
2. **Confirmação de identidade.** A pessoa que atende é a pessoa registrada. Se não é, a ligação
   termina ali, com código próprio, e nunca se pergunta nada sobre a pesquisa a terceiro.
3. **A pergunta única.** Se a pessoa esteve no local e no período, e se foi abordada para uma
   pesquisa naquela ocasião.
4. **Encerramento**, sem oferecer a resposta esperada.

> **A regra que mais protege o teste: não descreva a pesquisa antes de perguntar.** Explicar como a
> abordagem costuma ser feita, e só então perguntar se ela ocorreu, produz confirmação por
> complacência. A explicação só vem depois de a pessoa dizer que não lembra, e o fato de ter vindo
> depois fica registrado no código de ocorrência.

## 3. O código de ocorrência

Toda tentativa de contato recebe um código de uma tabela fechada, e a tabela é a mesma em todos os
ciclos. Quando o trabalho é regulado, a tabela vem da norma e não é alterável; quando não é, use a
mesma estrutura.

Os códigos se organizam em três blocos, e a distinção entre os blocos é o que dá sentido ao
resultado:

| Bloco | Situações | Entra no denominador da confirmação? |
|---|---|---|
| Sem contato útil | Não atende, desligado ou ocupado, número inexistente, número em formato inválido, pessoa ausente no momento | Não |
| Contato com pessoa diversa | O número pertence a outra pessoa | Não, e vira achado de cadastro |
| Contato com o respondente | Confirmou, negou, não lembra, desligou antes de confirmar | Sim |

O catálogo completo, com a redação de cada código e a regra de escolha entre códigos próximos, está
em [references/codigos-de-ocorrencia.md](references/codigos-de-ocorrencia.md).

## 4. A leitura do resultado, que é onde se erra

**Não contato não é negativa.** Um telefone que não atende não diz nada sobre a coleta. Somar não
contato com negativa produz uma taxa de confirmação artificialmente baixa, e é o erro que mais
compromete a conclusão deste teste.

Calcule sempre três números, e publique os três:

| Número | Cálculo | O que diz |
|---|---|---|
| Taxa de contato útil | contatos com o respondente / tentativas | Qualidade do cadastro telefônico |
| Taxa de confirmação | confirmaram / contatos com o respondente | Existência da coleta |
| Taxa de negativa explícita | negaram ter sido abordados / contatos com o respondente | O indício forte |

A terceira é a que carrega gravidade. Uma pessoa que afirma ter estado no local e nega ter sido
abordada é indício direto de registro sem coleta, e um punhado desses vale mais que uma taxa de
confirmação mediana.

Separe ainda os que **negam ter estado no local**, porque essa negativa contradiz não só a coleta mas
o evento inteiro, e cruza com T8 da bateria de testes.

## 5. Política de tentativas

Fixe antes de começar, e registre no papel:

- **Número de tentativas por registro** e o intervalo mínimo entre elas.
- **Faixas de horário**, distribuídas, porque concentrar tentativas num único horário mede
  disponibilidade, não existência de coleta.
- **Critério de encerramento** de um registro como não contatado.

Sem política escrita, a taxa de contato útil vira função do esforço de quem ligou, e deixa de ser
comparável entre ciclos. Em trabalho contínuo, a comparabilidade entre ciclos é o produto.

## 6. Dado pessoal na ligação

- **Nunca revele a terceiro** que a pessoa participou de uma pesquisa, nem qualquer resposta dela.
- **Não colete nada de novo.** Se a pessoa oferece opinião sobre o serviço, agradeça e não registre:
  o dado não foi coletado pelo instrumento e não pertence à base.
- **O número de telefone não sai do papel de trabalho.** No relatório, o registro é o sequencial.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Conferir as respostas contra a gravação | `bateria-de-testes-de-base` |
| Cobrar retorno de participante de pesquisa própria | `acta-pesquisa-salarial:conducao-da-coleta` |
| Anonimização e retenção | `acta-way:anonimizacao-e-lgpd` |
