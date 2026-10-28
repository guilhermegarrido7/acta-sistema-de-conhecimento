---
name: qualidade-e-validacao
description: Prove que a base tratada é confiável antes de analisar, checando completude e consistência e reconciliando contra uma fonte autoritativa. Acionar ao validar uma base antes de publicar número, ao reconciliar dado tratado contra a contabilidade ou o extrato, ao medir completude e consistência, ou ao declarar a confiabilidade de uma base.
---

# Qualidade e validação

Carregue antes desta skill `acta-metodo-consultoria:diagnostico-e-entrevistas` (a hierarquia de
autoridade entre fontes) e `acta-metodo-consultoria:mapeamento-as-is` (a âncora de validação, o número
que o consultor não calculou): são o coração desta etapa e não se repetem aqui.

Esta skill existe porque base tratada **não é** base confiável. O tratamento arruma o formato; a
validação prova que o conteúdo bate com a realidade. Pular esta etapa é a causa raiz do pior desfecho
de um projeto de dados: o número publicado que o cliente derruba porque não fecha com a contabilidade
dele. Nenhum número sai desta skill sem passar por ela.

## 1. As três perguntas da qualidade

| Dimensão | A pergunta | Como se mede |
|---|---|---|
| **Completude** | Falta lançamento? Falta período? Falta entidade? | Contagem esperada × contagem real; buraco de período; conta de controle |
| **Consistência** | O dado contradiz a si mesmo? | Soma das partes × total; mesmo lançamento com valores diferentes; chave duplicada |
| **Acurácia** | O dado bate com a fonte autoritativa? | Reconciliação contra a contabilidade / extrato (seção 2) |

Completude é a mais esquecida e a mais perigosa. Uma base 95% completa produz uma análise 100%
confiante sobre um retrato que falta um pedaço — e o pedaço que falta é quase sempre o que importa
(a unidade que não exportou, o mês que o sistema pulou). Declare a completude em número: "a base cobre
N lançamentos, X% do valor esperado da conta de controle".

## 2. A reconciliação contra a fonte autoritativa

Esta é a validação que sustenta o número. A base tratada tem de **fechar contra uma fonte que não foi
você quem construiu** — o mesmo princípio da âncora de validação do `acta-metodo-consultoria`:

| Base tratada | Fonte autoritativa | O que a reconciliação prova |
|---|---|---|
| Lançamentos de cartão classificados | Fatura total do cartão / razão do período | Nenhum lançamento foi perdido ou duplicado no tratamento |
| Receita consolidada por entidade | Balancete / razão de cada entidade | A consolidação não inventou nem perdeu receita |
| Base de despesa reclassificada | Total da conta societária | A reclassificação preservou o total (só mudou a visão) |

A regra: **reconcilie em valor e por chave, com consumo de pool** (`acta-metodo-auditoria:bases-e-conciliacao`
quando o mandato cruzar com auditoria; o princípio é o mesmo). Reconciliar só o total esconde a
compensação — um lançamento a mais de R$ 100 e um a menos de R$ 100 fecham o total e escondem dois
erros. A diferença, quando existir, se investiga até a origem; diferença "pequena" não explicada é
diferença não resolvida.

## 3. O que fazer com o que não reconcilia

| Situação | Tratamento |
|---|---|
| Diferença rastreável a um lançamento | Corrigir na camada de tratamento, re-rodar a reconciliação |
| Diferença estrutural (fonte autoritativa inclui o que a base não cobre) | Declarar o escopo da diferença, não forçar o fechamento |
| Base não reconcilia e a causa não se acha | **Não publicar o número.** Declarar a base como não validada e reportar como limitação |

A terceira linha é a que separa o trabalho sério do apressado. Número que não reconcilia e vai para o
deck mesmo assim é uma bomba-relógio: ela estoura na primeira reunião em que alguém do cliente
confere contra o sistema. A doutrina do número exato do `acta-metodo-auditoria` vale aqui mesmo fora
de um mandato de auditoria: ou o número fecha, ou se declara que não fecha.

## 4. A lente AI-first

Checar completude, rodar consistência, reconciliar contra a fonte autoritativa por chave e por valor
é cálculo determinístico de alto volume — o agente faz com uma varredura que o humano não faz à mão
sem erro. Ele conta, soma, concilia, lista as diferenças por lançamento. **O julgamento humano fica
na decisão sobre a diferença não resolvida** — investigar mais, declarar estrutural, ou barrar o
número. O agente entrega o resultado da reconciliação; o responsável decide se a base está liberada
para análise. É um checkpoint que não se pula.

## O que entregar

1. A completude declarada em número: lançamentos e percentual do valor da conta de controle cobertos.
2. Os checks de consistência (soma das partes × total, chaves duplicadas, valores contraditórios) com
   resultado.
3. A reconciliação contra a fonte autoritativa, em valor e por chave com consumo de pool, fechando ou
   com a diferença investigada.
4. A lista de diferenças não resolvidas, cada uma com o tratamento (corrigida, estrutural declarada,
   ou base não validada).
5. O veredito: base liberada para análise, ou declarada não validada com a limitação registrada.

## Próximo passo

Com a base validada, segue a análise propriamente dita: `reclassificacao-gerencial` (do societário
para a visão de gestão) e, em grupo, `consolidacao-e-intercompany`.
