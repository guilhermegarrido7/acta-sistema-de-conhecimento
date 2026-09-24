---
name: defesa-tecnica-e-limitacoes
description: Escreva o registro de decisões metodológicas revistas, a lista de limitações e itens em aberto, e a regra de precedência entre entregáveis que impede um número superado de voltar. Acionar ao mudar metodologia no meio do projeto, ao declarar o que o dado não permitiu concluir, ao revisar consistência entre deck e documentos, ou ao preparar a defesa do número diante do cliente.
---

# Defesa técnica, decisões revistas e limitações

Carregue `mapeamento-as-is` e `desenho-to-be` antes: esta skill documenta o que aquelas duas
decidiram, e documenta principalmente o que elas decidiram **e depois mudaram**.

## Papel desta skill

Um diagnóstico longo muda de metodologia no meio do caminho. Isso é saudável e é inevitável. O que
não é aceitável é que a mudança fique na cabeça de quem fez. Esta skill produz o **documento de
metodologia e considerações**: o artefato que permite a outra pessoa, com a mesma documentação,
reproduzir os números, e que impede que uma metodologia já descartada seja reintroduzida por quem
não estava na sala quando ela caiu.

Ele é escrito **durante** o projeto, não no fim. Escrito no fim, ele vira racionalização.

## 1. O registro de decisões revistas

Uma seção do documento, uma entrada por decisão. Cada entrada tem quatro elementos: **o que se fazia
antes**, **o que se faz agora**, **por que mudou**, e **o efeito numérico da mudança**.

O quarto elemento é o que costuma faltar e é o que dá credibilidade. "Mudamos a fórmula de utilização
da capacidade" é uma nota. "Mudamos a fórmula de utilização da capacidade, e a série média do ano caiu
de X para Y" é uma defesa.

Quando uma definição passou por várias versões, registre **todas**, em tabela, com o motivo do
abandono de cada uma:

| Versão | Fórmula | Por que foi abandonada |
|---|---|---|
| 1 | Denominador que somava categorias sobrepostas | Não sustenta a identidade entre os indicadores derivados nem é a convenção da referência de mercado |
| 2 | Numerador vindo de planilha derivada | Dependia de fonte de segundo nível, com divergência entre bases |
| 3 | Denominador sobre capacidade cadastral bruta | Não excluía capacidade fora de operação |
| 4 (vigente) | Capacidade cadastral menos bloqueada | Padrão setorial, e sustenta a identidade |

Tipos de revisão que se repetem em qualquer diagnóstico e que valem registro nominal:

- **Troca de fonte** para um período específico, com o motivo (ver o mês de encerramento em
  `mapeamento-as-is`).
- **Série sintética substituída por contagem real.** Uma série derivada por fórmula reversa
  apresentava desvio sistemático de 8% a 30% contra a contagem real da extração bruta. Registre o
  desvio medido, não só a troca.
- **Campo errado da extração.** Dois campos com nomes quase idênticos, e o errado distorcendo um
  número material. Registre qual é o correto e qual é a checagem de identidade que detecta a troca.
- **Bruto para líquido.** Uma conta com crédito real dentro do período, padronizada para débito menos
  crédito por consistência com os demais itens.
- **Troca de referência de mercado**, com o recorte antigo e o novo.
- **Bug de fórmula com efeito material.** Referência relativa onde deveria ser absoluta, dupla
  contagem por rótulo de agrupamento incompleto, denominadores diferentes comparados entre si. Cada
  um desses já mudou um número em ordem de grandeza. Registre o valor antes e depois.
- **Total "validado" que era artefato.** Números que circulavam como validados e eram, na verdade, o
  débito e o crédito brutos de um lançamento de encerramento. Essa entrada é a mais importante do
  registro, porque é a que impede o número velho de voltar.
- **Item removido de uma quantificação**, com o motivo, e com a metodologia preservada para quem
  quiser reabrir.

## 2. Limitações conhecidas e itens em aberto

Lista numerada, em seção própria, no próprio entregável e não num anexo separado. Cada item tem:
**o que não foi possível concluir**, **por quê**, **o que mudaria se fosse resolvido** e **de quem
depende**.

O terceiro elemento é o que transforma a lista de um pedido de desculpas num instrumento. "Se a
hipótese alternativa se confirmar, R$ X voltam à quantificação e a série do indicador Y cai" é uma
frase que faz o cliente buscar o dado.

Categorias que aparecem em praticamente todo diagnóstico:

| Categoria | Exemplo genérico |
|---|---|
| Natureza de um dado não confirmada | Um bloqueio de capacidade que pode ser incapacidade física ou retenção comercial, com evidência nos dois sentidos |
| Conta agregada sem segregação | Utilidades diluídas dentro de administrativas, sem subconta, impedindo o indicador |
| Dado inexistente | Extração que se revelou cópia de outra unidade, bloqueando um conjunto nomeado de análises |
| Leitura qualitativa por falta de fórmula reproduzível | Indicador de cobertura de dívida sem o contrato em mãos |
| Divergência histórica não reconciliada | Recálculo que difere de um número publicado em relatório anterior, com a origem da diferença não identificada |
| Premissa arbitrada | A única premissa do projeto que não vem de fonte, marcada como tal |
| Métrica sem fonte formal | Referência que todo mundo cita e ninguém consegue atribuir, e por isso não é usada |
| Indicador que exige dado externo indisponível | Índices que dependem de dados de conjunto de concorrentes |
| Documento-base desatualizado | Fichas técnicas de produto com anos de defasagem, que sustentariam a conclusão com mais rigor |
| Contas espelhadas que não conciliam | Partes ligadas, as duas pontas, com a divergência quantificada e a recomendação de confirmar antes de negociar |

**Nunca resolva um item em aberto escrevendo uma conclusão confortável.** O item fica aberto, com a
quantificação do que está em jogo. Um diagnóstico com treze limitações declaradas e quantificadas é
mais forte que um com nenhuma, porque o leitor sabe onde pisar.

## 3. A revisão cruzada entre entregáveis

Um diagnóstico produz planilha, deck e documentos. Eles divergem, e divergem de um jeito específico:
**o banner de revisão é atualizado e o corpo do documento não.**

Padrões reais encontrados em revisão cruzada, todos no mesmo projeto:

- Banner com um valor de receita de equilíbrio e corpo do documento com outro, com os demais
  indicadores coincidindo.
- Banner com o total corrigido e a tabela-resumo do mesmo documento ainda somando o total da versão
  anterior.
- Documento inteiro desatualizado, publicando fórmula de uma metodologia já descartada.
- Ressalva metodológica **superada** que recomenda exatamente o procedimento que foi abandonado por
  produzir valor contaminado.
- Erro de texto isolado: o corpo declara um valor de referência e a tabela ao lado usa outro, sendo o
  da tabela o correto.
- Duas bases brutas diferentes chegando ao mesmo resultado final validado, com diferença relevante
  nos dois lados. Ambas fecham contra a âncora, e mesmo assim precisam ser reconciliadas.

**Procedimento de revisão cruzada**, antes de qualquer circulação externa:

1. Liste todo número publicado em cada documento derivado.
2. Confronte cada um contra a planilha-mestre, item a item.
3. Para cada divergência, declare qual prevalece e corrija o derivado, nunca a planilha.
4. Registre as divergências encontradas numa tabela própria, com documento, número e tratamento.

## 4. A regra de precedência entre entregáveis

> **Em caso de divergência, a planilha-mestre prevalece, seguida do deck vigente. Os documentos são
> derivados e podem conter resíduo de versão anterior.**

Escreva essa regra **no banner dos próprios documentos derivados**. Um documento que declara a
própria subordinação é um documento que não vai ser citado contra a planilha numa reunião.

Corolários:

- **Documento marcado como superado se marca no título e no banner**, e vai para `Versões
  Anteriores` no mesmo dia. Documento superado que continua na pasta principal volta a circular.
- **Nunca cite um documento derivado como fonte de um número.** Nem internamente.
- **Quando a planilha muda, a lista de derivados a corrigir é conhecida**, porque a aba que mapeia o
  deck existe. Use-a.

## 5. Estrutura do documento de metodologia

Ordem que funciona, e que o próprio leitor consegue navegar:

1. Escopo e entidades, com os recortes analíticos
2. Fontes de dados e hierarquia de autoridade
3. Convenções contábeis fundamentais
4. Os tratamentos excepcionais, um por seção, com o achado metodológico que os motivou
5. Definições operacionais padronizadas
6. Estrutura do demonstrativo reconstruído
7. Os indicadores, um por seção, com fórmula e ressalva de nomenclatura
8. Referências externas e suas fontes, incluindo as rejeitadas
9. Exceções, anomalias e tratamento de dados
10. Convenções de construção dos entregáveis
11. **Decisões metodológicas revistas ao longo do projeto**
12. **Limitações conhecidas e itens em aberto**
13. Resumo dos números finais
14. Anexo: checklist de revisão de qualquer número novo

As seções 11 e 12 são as que existem **para defesa técnica**. As demais existem para reprodução.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| A hierarquia de fontes e o checklist de número novo | `diagnostico-e-entrevistas` |
| A construção da base e da planilha-mestre | `mapeamento-as-is` |
| Redação, tom e voz do entregável | `acta-way:redacao-acta` |
| Documentação que permite repetir um teste de auditoria | `acta-metodo-auditoria:papel-de-trabalho` |
