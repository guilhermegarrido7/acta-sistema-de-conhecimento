---
name: consolidacao-e-intercompany
description: Consolide o resultado de um grupo de várias empresas e elimine as transações entre elas para não inflar o todo. Acionar ao consolidar demonstrações de um grupo multiempresa, ao identificar e eliminar transações intercompany, ao tratar fee de gestão entre holding e controladas, ou ao montar a visão por empresa e por CNPJ de um grupo.
---

# Consolidação e intercompany

Carregue `acta-metodo-consultoria:mapeamento-as-is` antes desta skill (a base reconstruída e a
planilha-mestre). Consolide apenas base validada
(`qualidade-e-validacao`) e reclassificada (`reclassificacao-gerencial`): consolidar antes de
reclassificar soma gavetas diferentes, e consolidar antes de validar propaga o erro de uma empresa
para o grupo.

Um grupo não é a soma das suas empresas. Entre elas há transações que, somadas, contam a mesma
receita duas vezes: a holding cobra um fee da controlada, uma filial vende para outra. A consolidação
que ignora isso infla o grupo e mostra um resultado que não existe. **Identificar e eliminar o
intercompany é o que separa consolidar de somar planilhas.**

## 1. A sequência da consolidação

A ordem não é opcional — cada passo depende do anterior:

1. **Padronização.** Toda empresa na mesma estrutura de categorias gerenciais e no mesmo plano de
   contas analítico. Empresa com categoria que as outras não têm mapeia para a estrutura comum antes
   de entrar. Sem isso, a soma mistura naturezas na mesma linha.
2. **Identificação do intercompany.** Marcar, na origem, todo lançamento que representa transação
   entre empresas do grupo (seção 2).
3. **Soma bruta por empresa.** Cada empresa na sua coluna, somada — a visão "por empresa" e "por
   CNPJ" que a diretoria quer ver.
4. **Eliminação.** Remover as transações intercompany para chegar ao consolidado real.
5. **Fechamento.** O consolidado reconcilia: Σ empresas − eliminações = grupo.

## 2. Como identificar o intercompany

O intercompany aparece como um lançamento que tem **contrapartida espelhada em outra empresa do
grupo**: é receita numa e custo na outra, ou débito numa e crédito na outra. Os padrões:

| Padrão | Exemplo | Como identificar |
|---|---|---|
| **Fee de gestão** | Holding cobra administração das controladas | Receita de serviço na holding × despesa de gestão na controlada, mesmo valor, mesma competência |
| **Rateio de despesa** | Despesa paga por uma empresa e rateada ao grupo | Débito numa empresa, crédito nas demais pelo rateio |
| **Empréstimo intercompany** | Uma empresa financia outra | Passivo numa (mútuo a pagar) × ativo na outra (mútuo a receber) |
| **Venda entre unidades** | Filial vende para filial | Receita numa × custo/estoque na outra |

A marca do intercompany é o **espelho**: o mesmo valor aparecendo com sinais opostos em duas empresas
do grupo. A varredura que o encontra cruza as duas pontas pela chave (valor + competência +
contraparte). Lançamento que o cliente *diz* ser intercompany mas não tem a contrapartida espelhada
é hipótese não confirmada — trate como o par falta/sobra do inventário: confirme as duas pontas antes
de eliminar.

## 3. A eliminação, e o que ela revela

Eliminar o intercompany não é só limpar o número — é o que **revela qual empresa do grupo cria e qual
destrói valor de verdade**. Uma controlada que parece lucrativa pode estar vivendo de fee cobrado da
holding; eliminado o fee, o resultado real aparece. Essa é, muitas vezes, a resposta à pergunta de
negócio do projeto.

Duas disciplinas na eliminação:

- **Elimine pelas duas pontas, sempre.** Tirar a receita de uma empresa sem tirar o custo da outra
  desequilibra o consolidado. A eliminação é um par.
- **Guarde a visão antes e depois.** O gerencial por empresa (com intercompany) e o consolidado (sem)
  respondem perguntas diferentes: o primeiro mostra como cada empresa opera; o segundo, o resultado
  real do grupo. Entregue os dois, declarando qual é qual.

## 4. A lente AI-first

Cruzar milhares de lançamentos de ~15 empresas para achar os pares espelhados, padronizar estruturas
diferentes e fechar a consolidação é exatamente o volume que torna a consolidação manual lenta e
sujeita a erro — e é o que o agente executa com uma varredura sistemática: ele padroniza, identifica
os candidatos a intercompany pela contrapartida espelhada, e monta o consolidado com e sem
eliminação. **O julgamento humano fica na confirmação do intercompany ambíguo** (o lançamento que
parece espelho mas pode ser coincidência) **e na leitura do que a eliminação revela**. O agente
entrega o consolidado reconciliado; o responsável interpreta qual empresa o resultado real expõe.

## O que entregar

1. As empresas padronizadas na estrutura de categorias comum, prontas para somar.
2. A relação de transações intercompany identificadas, cada uma com as duas pontas espelhadas
   confirmadas.
3. As duas visões: gerencial por empresa (com intercompany) e consolidado real (sem), declaradas.
4. A prova de fechamento: Σ empresas − eliminações = grupo.
5. A leitura do que a eliminação revelou — qual empresa cria e qual destrói valor depois do
   intercompany.

## Próximo passo

`modelo-analitico-e-visualizacao`, para montar a estrutura dinâmica que lê o consolidado por empresa,
por categoria e por período, e o painel que a diretoria consulta.
