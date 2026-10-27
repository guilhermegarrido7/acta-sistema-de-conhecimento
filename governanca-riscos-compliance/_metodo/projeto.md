---
titulo: Método de Auditoria ACTA
pratica: governanca-riscos-compliance
duracao_tipica: Transversal — não é um engajamento
plugin: acta-metodo-auditoria
---

## O que é, e quando a ACTA é contratada para isso

Este não é um projeto vendável: é a **camada de método que toda auditoria carrega.** É o "ACTA way of
work" em auditoria interna — as regras que não se negociam, a doutrina do número exato, o modo de
operar e a mecânica de cada entregável. Os plugins de domínio (`acta-revenue-assurance`,
`acta-auditoria-convenios`, `acta-auditoria-folha`, `acta-auditoria-estoques`, `acta-auditoria-compras`
e os demais) trazem o *o que testar* de cada ciclo e orquestram as skills daqui, que trazem o *como
fazer o entregável.*

O que distingue o método é a disciplina da evidência e da rastreabilidade: nenhuma conclusão existe
sem papel de trabalho que a lastreie, nenhum número é aproximado quando pode ser exato, e cada achado
percorre a estrutura Condição / Risco / Recomendação com severidade calibrada. Pessoas aparecem por
papel — *o auditor responsável*, *o sócio responsável*, *o revisor de WP* — e nunca por nome; o insumo
que não foi informado se pergunta, não se deduz pelo nome do arquivo nem pelo "mais recente".

## As etapas do método

Uma skill por etapa. `metodo-auditoria` não é sequencial: é o conhecimento de fundo
(`user-invocable: false`) com as regras invioláveis e o roteamento, que as demais carregam. As outras
seis são a mecânica, na ordem em que o trabalho de campo se desenrola.

| # | Etapa | O que fecha a etapa |
|---|---|---|
| 1 | Método de auditoria | As oito regras invioláveis, a doutrina do número exato e o ritual de aprendizado assimilados — a base que governa tudo |
| 2 | Bases e conciliação | A sequência de leitura de arquivo, a classificação por natureza com resíduo medido, o casamento com consumo de pool e a amostra documentada |
| 3 | Papel de trabalho | O WP com código, capa, critérios, abas de evidência sem célula mesclada e o campo Resultado no vocabulário fechado |
| 4 | Programa de testes | A matriz de testes, a taxonomia fechada de tipo de teste, a régua de amostragem, o registro de riscos e a separação desenho × efetividade |
| 5 | Redação de achados | O achado em Condição / Risco / Recomendação, com severidade, codificação de prefixo e consolidação das entrevistas |
| 6 | Relatório de auditoria | O deck no padrão da casa e o relatório detalhado em Word, com tabela, gráfico nativo e o render conferido |
| 7 | Aprendizado e histórico | O ledger do engajamento fechado e a decisão sobre promover a lição a método |

## Onde este projeto dá errado

São armadilhas de método, e cada uma já custou retrabalho ou um achado fraco num engajamento real.

**Aproxima-se o número que podia ser exato.** "Cerca de 40 mil" quando o extrato dá o centavo esvazia
a força do achado e abre flanco na defesa. *Prevenção:* a doutrina do número exato — o valor vem da
fonte, ao centavo, e a aproximação só entra quando declarada como estimativa.

**Conclui-se sem papel de trabalho que lastreie.** O achado está no deck, mas a evidência que o
sustenta não está em WP rastreável, e na contestação não há o que mostrar. *Prevenção:* todo
resultado nasce num WP com código, capa, critérios e abas de evidência.

**Parte-se para o teste mais produtivo antes de fixar o critério.** Começar pela conciliação sem o
critério contra o qual classificar os resíduos gera uma lista sem enquadramento. *Prevenção:* o
programa de testes e a matriz de riscos fixam o critério antes do campo.

**Mistura-se desenho e efetividade do controle.** Conclui-se que o controle é eficaz quando só se
testou se ele existe. *Prevenção:* a separação explícita entre teste de desenho e teste de
efetividade, no programa de testes.

**O achado não separa Condição, Risco e Recomendação.** Vira um parágrafo de reclamação sem causa
nem consequência, e a severidade fica no "achômetro". *Prevenção:* a estrutura fechada e a régua de
severidade da skill de redação.

**A lição aprendida morre no engajamento.** O mesmo erro de método reaparece no projeto seguinte
porque ninguém decidiu se ele subia para a metodologia. *Prevenção:* o ritual de aprendizado e a
decisão explícita de promover ou não a lição a método.

## O que se entrega

Num engajamento, o método se materializa nestes artefatos — o plugin de domínio define o *o que
testar*.

| Artefato | Formato | Para quem |
|---|---|---|
| Matriz de riscos e controles | Planilha com código, risco × controle × teste, no Dicionário da casa | Auditoria interna / diretoria |
| Programa de testes | Matriz de testes com tipo, amostra e separação desenho × efetividade | Interno e revisável |
| Papéis de trabalho | WPs com código, capa, critérios e abas de evidência rastreáveis | Interno e auditável |
| Matriz de achados | Cada achado em Condição / Risco / Recomendação, com severidade e código | Comitê de auditoria / gestão |
| Relatório de auditoria | Deck no padrão da casa e relatório detalhado em Word | Comitê de auditoria / Conselho |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador na auditoria interna, na controladoria ou no comitê de
auditoria, que recebe o relatório e decide sobre os achados; e os pontos focais das áreas auditadas,
que dão acesso a bases, sistemas e evidências. Os aprovadores e responsáveis se descrevem por cargo e
papel, nunca por nome.

**Do nosso lado:** o auditor responsável pela condução, pelas conciliações e pelos papéis de
trabalho, com o sócio responsável validando a severidade dos achados e o número antes de ele ir ao
comitê. O revisor de WP confere a rastreabilidade.

## O que é preciso ter antes de começar

- **O escopo e o ciclo a auditar**, que o plugin de domínio detalha em *o que testar*.
- **As bases e o acesso aos sistemas** das áreas auditadas, na sequência de leitura que a skill de
  bases prescreve — insumo não informado se pergunta, não se deduz.
- **Os critérios contra os quais medir** (norma, contrato, política, tabela de alçada), porque é o
  critério que classifica o resíduo e sustenta o achado.
- **`acta-way` instalado**, onde vivem o checkpoint — sobre o qual roda `aprendizado-e-historico` — a
  identidade visual, a anonimização e o catálogo de armadilhas de ambiente.
