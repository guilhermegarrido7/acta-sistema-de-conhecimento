---
name: manual-de-processos
description: Consolide fluxos, regras, SLA e oportunidades no Manual de Processos e Regras de Negócio do ciclo e conduza a aprovação formal. Acionar ao fechar o ciclo depois dos workshops, ao montar o capítulo de um subprocesso, ao versionar de vPósWS para v1.0, ou ao submeter o manual aos gestores responsáveis.
---

# Manual de processos

Carregue `acta-way` antes desta skill: convenções de entregável, nomeação, versionamento, identidade
visual e o protocolo de checkpoint valem aqui e **não** são repetidos. O método de prática — gestão de
mudança, implantação, transferência de conhecimento — virá de `acta-metodo-consultoria`; enquanto esse
plugin for esqueleto, o que esta skill assume dele está dito aqui.

Esta skill **consolida**; ela não produz conteúdo novo. Fluxo e regras vêm de
`fluxo-e-regras-de-negocio`, metas de `sla-e-indicadores`, gaps de `oportunidades-e-quick-wins`,
estrutura e códigos de `taxonomia-de-processos`. Conteúdo que aparece pela primeira vez no manual é
conteúdo que não passou pelo workshop — e não deve entrar.

## Papel desta skill

O manual é **o entregável final do projeto** e o único artefato que sobrevive a ele. Tudo o mais —
matriz, A3, material de workshop — é meio.

A sequência do fecho, declarada e nesta ordem:

1. **Atualizar o desenho do modelo futuro** conforme os resultados do workshop.
2. **Submeter fluxogramas e regras de negócio à aprovação dos gestores responsáveis.**
3. **Elaborar o Manual de Processos e Regras de Negócio** do ciclo.

A ordem importa: o manual é montado **depois** da aprovação, não submetido como manual. Submeter o
documento inteiro de uma vez convida à revisão de forma em vez de revisão de conteúdo, e a discussão
migra do fluxo para a margem do slide.

### O manual é o nível 5

Na taxonomia dos cinco níveis (`taxonomia-de-processos`), o mandato entrega níveis 2 a 4. O manual é
o degrau que **aterrissa no nível 5**: é dele que saem POPs e instruções de trabalho.

Isso define o que ele é e o que não é: o manual descreve o "como fazer" no nível do processo — a
sequência, o critério, o prazo, o responsável por cargo. Ele **não** desce ao "em qual campo se
digita o quê", que é o POP e é escopo à parte. Se um capítulo começou a descrever tela, ele saiu do
nível contratado.

## 1. O que entra, por subprocesso

Um capítulo por subprocesso, com **a mesma grade, na mesma ordem, sempre**. Capítulo com estrutura
variável é capítulo que não se consulta: o leitor aprende onde procurar uma vez e usa isso o resto do
manual.

| # | Item | Origem |
|---|---|---|
| 1 | **Objetivo** — a redação APROVADA no workshop, não a sugerida | `workshop-de-mapeamento` |
| 2 | **Entradas e saídas** — documentos, sistemas, entregáveis, com o subprocesso vizinho nomeado | `workshop-de-mapeamento` |
| 3 | **Atores** — nos três papéis de atendimento, **por cargo** | `workshop-de-mapeamento` |
| 4 | **Fluxograma To-Be `vPósWS`** — raias, marcadores `M`, SLA inline, conectores, interfaces | `fluxo-e-regras-de-negocio` |
| 5 | **Regras de negócio codificadas**, com a **descrição aprovada**, nível de importância e impacto | `fluxo-e-regras-de-negocio` |
| 6 | **SLA acordado** — a coluna DEFINIÇÃO WORKSHOP, com definição operacional e responsável por cargo | `sla-e-indicadores` |
| 7 | **Oportunidades ainda abertas** — as que não foram implantadas até o fecho | `oportunidades-e-quick-wins` |

Três decisões de conteúdo que costumam ser questionadas:

**O objetivo é o aprovado, não o sugerido.** As três redações do menu e as escolhas de cada grupo
ficam no material de workshop, que é anexo. No manual entra uma frase: a que vale.

**A descrição da regra é a aprovada.** A sugerida permanece no material de homologação, não no
manual — o manual é norma, e norma tem uma redação só. A rastreabilidade entre sugerida e aprovada
vive no anexo de homologação, e é lá que se responde "por que ficou assim".

**Oportunidade aberta entra no manual, e isso é deliberado.** Manual que só mostra o processo
desenhado esconde o que a casa sabe que ainda dói. A seção de oportunidades abertas por capítulo é o
que impede que o diagnóstico se perca junto com o time do projeto — e é o que dá continuidade à
próxima onda.

## 2. Estrutura do documento

Além dos capítulos por subprocesso:

- **Apresentação** — escopo do ciclo, o que foi mapeado, **o que ficou de fora** (a mesma fronteira
  amarela da matriz, escrita em texto), método em um parágrafo, e a data de referência.
- **Matriz de processos e subprocessos** — o índice visual do manual, o mesmo artefato que abriu os
  workshops.
- **Legenda da notação** — antes do primeiro fluxograma, não num anexo. Leitor que precisa folhear
  até o fim para entender um símbolo fecha o documento.
- **Glossário e tabela de prefixos** — subprocesso → prefixo, e os termos do ciclo.
- **Índice remissivo de regras** — código → subprocesso → página. É o que faz a codificação valer o
  trabalho que deu, e é o que permite citar `REC.04` num treinamento, num achado de auditoria ou num
  chamado de sistema.
- **Consolidado de SLA** — a visão de todos os indicadores por dono de cargo, uma página. Serve ao
  ritual de gestão; as caixas continuam inline no fluxo.
- **Consolidado de oportunidades abertas** — a matriz valor × complexidade do ciclo inteiro, que é o
  insumo de roadmap.
- **Controle de versões e de aprovação** — ver §3 e §4.
- **Anexos de homologação** — quadrantes de crítica do A3, consolidação de objetivos por grupo,
  regras sugeridas × aprovadas, SLA sugerido × acordado.

A estrutura detalhada, com a árvore de seções e o que vai em cada folha de rosto, está em
`references/estrutura-do-manual.md`.

## 3. Versionamento

Duas camadas, que não se confundem:

**Camada 1 — o sufixo `vPósWS`.** Marca o material reemitido depois do workshop, com os resultados da
crítica incorporados. É estado de projeto, não versão de norma, e é **a única fonte que alimenta o
manual**. Material pré-workshop nunca entra no entregável final.

**Camada 2 — versionamento de conteúdo, `v1.0 → v1.1 → v2.0`.** Começa quando o manual é aprovado.

| Salto | Quando |
|---|---|
| `v1.0` | Primeira versão aprovada pelos gestores responsáveis. |
| `v1.1`, `v1.2` | Correção, esclarecimento de redação, ajuste de meta — **sem** mudança de fluxo nem de regra. |
| `v2.0` | Mudança de fluxo, de regra de negócio ou de SLA. Exige nova aprovação formal. |

A fronteira entre `v1.1` e `v2.0` é a pergunta: **alguém precisa executar diferente por causa
disto?** Se sim, é `v2.0` e passa por aprovação. Tratar mudança de regra como correção de redação é
como uma norma deixa de ser confiável — e, depois disso, ninguém mais consulta.

Regra herdada: **código de regra não se renumera entre versões.** Regra revogada deixa buraco na
sequência e o buraco é informação. Marque-a como revogada na versão em que saiu, em vez de apagá-la.

`<Projeto>` no nome do arquivo é o codinome do mandato, nunca o nome do cliente. A convenção geral
está em `acta-way` e o padrão de nome em `taxonomia-de-processos`.

## 4. Aprovação formal: etapa, não formalidade

> **Manual não aprovado não vira norma interna.** Ele vira documento de consultoria — que é lido uma
> vez e arquivado.

A aprovação é o que transfere a propriedade do processo da consultoria para o cliente. Como se
conduz:

1. **Submeta por partes e na ordem.** Primeiro os fluxogramas e as regras, por subprocesso, ao gestor
   responsável daquele subprocesso. Depois o manual montado. Aprovação por partes produz crítica de
   conteúdo; aprovação do calhamaço produz silêncio ou crítica de forma.
2. **Um aprovador por subprocesso, identificado por cargo.** Aprovação colegiada sem dono declarado
   não acontece — cada um espera o outro.
3. **Aprovação é registrada com data, cargo e versão.** A folha de controle de aprovação é parte do
   manual, não e-mail no arquivo do consultor.
4. **Ressalva vira item, não rodapé.** Gestor que aprova "com observações" está criando pendência.
   Registre-a como item com dono e prazo, ou resolva antes de fechar `v1.0`.
5. **Divergência entre gestores é escalada, não mediada em silêncio.** Duas áreas que discordam da
   interface entre seus subprocessos vão descobrir a discordância na execução — e aí o manual leva a
   culpa.

O que a aprovação **não** é: revisão de português. Mande o texto revisado antes, para que a atenção
do gestor vá para o fluxo.

## 5. O risco real: o manual de gaveta

Todo manual de processos corre o mesmo risco, e ele não é de qualidade do documento. Manual bem
escrito e não usado é o desfecho mais comum de projeto de mapeamento.

O que evita, e é o que esta skill entrega junto com o documento:

**(a) SLA medido.** Enquanto o indicador do capítulo estiver sendo apurado na frequência declarada e
lido no ritual de gestão, o capítulo está vivo. Quando a apuração para, o manual começa a envelhecer
no mesmo dia — e ninguém percebe por meses. O indicador é o sinal vital do processo.

**(b) Dono declarado por cargo.** Cada subprocesso tem um responsável nominal por cargo, que responde
por três coisas: o indicador, a aderência ao fluxo e a proposta de revisão. Sem dono, a revisão é
tarefa de todos, e tarefa de todos não tem data.

Três mecanismos complementares, baratos e que se combinam com os dois acima:

- **Ciclo de revisão com data no próprio documento.** "Próxima revisão: <mês/ano>" na folha de rosto.
  Data ausente é revisão que nunca vence.
- **Gatilho de revisão por evento**, além do calendário: mudança de sistema, mudança de estrutura,
  achado de auditoria sobre o processo, meta descumprida por dois períodos seguidos.
- **Ponto de entrada único.** O manual mora em um lugar declarado e citado no treinamento. Manual que
  circula como anexo de e-mail tem tantas versões quanto leitores.

O que **não** funciona, e é o que normalmente se tenta: treinamento de lançamento sozinho. Evento de
divulgação sem medição posterior produz adesão de três semanas.

## 6. Checagens antes de fechar `v1.0`

1. **Todo subprocesso da matriz tem capítulo** — inclusive os que não tiveram oportunidade, com a
   ausência declarada.
2. **Todo capítulo tem os sete itens da grade**, na ordem, sem item faltando por "não se aplica" não
   justificado.
3. **Todo fluxograma é `vPósWS`.** Nenhum desenho pré-workshop sobreviveu.
4. **Toda regra tem descrição aprovada.** Nenhuma ficou só com a sugerida.
5. **Todo SLA inline tem indicador no consolidado, com dono por cargo e frequência.**
6. **Toda interface fecha** — o que um capítulo entrega, o vizinho recebe, com o mesmo nome. Rode com
   os capítulos lado a lado; é a checagem que mais falha e falha em silêncio.
7. **Todo código citado no índice remissivo existe**, e sem colisão de prefixo.
8. **Zero identificação de pessoa física.** Atores, aprovadores e donos sempre por cargo.
9. **A folha de aprovação está preenchida**, com data, cargo e versão.

## O que entregar

1. O **Manual de Processos e Regras de Negócio** do ciclo, `v1.0` aprovado, com os capítulos por
   subprocesso e os consolidados.
2. A folha de controle de versões e a folha de aprovação preenchidas.
3. Os anexos de homologação, que sustentam cada decisão registrada no manual.
4. O consolidado de oportunidades abertas, com a matriz valor × complexidade, como insumo de roadmap.
5. O acordo de sustentação: dono por cargo por subprocesso, frequência de apuração, data da próxima
   revisão e os gatilhos de revisão por evento.

## Próximo passo

Fim do ciclo de mapeamento. Se um novo ciclo for contratado (PTP, OTC, RTR, HTR), volte a
`taxonomia-de-processos` — e reaproveite a legenda, os prefixos e a calibração de escala deste, que
já estão homologados pelo cliente. Se o nível 5 for contratado, o manual é o insumo direto dos POPs.
Registre o fecho no checkpoint de `acta-way`.
