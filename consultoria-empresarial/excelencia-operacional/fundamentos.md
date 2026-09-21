---
titulo: Fundamentos
---

## A ideia que sustenta o método

Este plugin vem da tradição de gestão por processos, a que trata a empresa como uma cadeia de
atividades que atravessa áreas em vez de um organograma. Ela nasceu da constatação de que o
desperdício raramente mora dentro de um departamento: mora na fronteira entre dois, onde um entrega
o que o outro não recebe e ninguém é responsável pela junção. O trabalho dessa disciplina é tornar
essa cadeia visível, estável e cobrável. Visível pelo fluxograma, estável pela regra de negócio
escrita, cobrável pelo indicador com definição operacional.

O problema que ela resolve é de memória e de variação. Em empresa de mid-market o processo existe na
cabeça de quem executa, muda quando a pessoa sai e varia entre duas pessoas que fazem a mesma coisa.
As duas âncoras que o método usa atacam exatamente isso. O APQC Process Classification Framework dá
a hierarquia de níveis que permite comparar e não confundir processo com tarefa, e o BPMN da OMG dá
a semântica dos símbolos, para que o desenho seja legível por qualquer analista treinado e não
dependa da convenção de quem desenhou. O Lean entra depois, e entra por uma porta estreita: a
taxonomia de desperdício, que é o que transforma "achei lento" em categoria de oportunidade.

A ACTA opera assim porque o risco real de um projeto de mapeamento não é desenhar errado, é entregar
um manual bem escrito que ninguém usa. Todo o desenho do método aponta para esse risco. O nível de
modelagem é decidido antes de qualquer coisa ser desenhada, porque o erro caro é desenhar no nível
errado e descobrir no workshop. As regras são codificadas para poderem ser citadas num treinamento,
num achado de auditoria ou num chamado de sistema. E cada capítulo do manual carrega um indicador com
dono por cargo, porque enquanto a apuração acontece o capítulo está vivo, e quando ela para o manual
começa a envelhecer no mesmo dia.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| APQC Process Classification Framework | Referência de mercado para hierarquia de processos, com categorias, grupos, processos e atividades como níveis estáveis e comparáveis entre empresas | Os cinco níveis de modelagem de `taxonomia-de-processos`, e a decisão de que o mandato contrata os níveis 2 a 4 |
| BPMN 2.0 (OMG) | Notação padrão de modelagem de processos de negócio: evento, atividade, gateway, raia | A notação simplificada de `taxonomia-de-processos` e o desenho To-Be de `fluxo-e-regras-de-negocio` |
| Lean | Taxonomia de desperdício: espera, retrabalho, superprocessamento, movimentação, estoque e talento subutilizado | Classificação de origem das oportunidades em `oportunidades-e-quick-wins`, e a organização das cartas de sugestões dos facilitadores em `workshop-de-mapeamento` |
| Matriz esforço por impacto | Padrão de priorização que separa quick win, projeto, item de carona e descarte | As colunas VALOR POTENCIAL e COMPLEXIDADE de `oportunidades-e-quick-wins`, e a composição da primeira onda |
| SIPOC | Disciplina de nomear fornecedor, entrada, processo, saída e cliente antes de descrever o miolo | O elemento 2 da grade de definição de subprocesso em `workshop-de-mapeamento`, e as interfaces entre subprocessos vizinhos no fluxograma |
| RACI | Matriz de atribuição de responsabilidade por atividade | O elemento 3 da mesma grade, na versão reduzida de três papéis de atendimento; a matriz completa se deriva dela quando contratada |
| Definição operacional de indicador | Convenção de medição que exige fonte, população e recorte de tempo declarados para que duas pessoas apurem o mesmo número | A regra que governa `sla-e-indicadores`, e o bloco 1 de cada coluna do quadro de duas colunas |
| Indicador de esforço e indicador de resultado | Distinção entre o que mede quanto se trabalhou e o que mede o que se entregou | Composição dos secundários em `sla-e-indicadores`: o principal é quase sempre de resultado |
| Segregação de funções | Princípio de controle interno que separa quem autoriza, quem executa e quem registra | Bloco B2 do checklist de `coleta-e-diagnostico`, e o pilar O&P de `oportunidades-e-quick-wins` |
| Conferência de três vias | Controle que casa pedido, recebimento e documento fiscal antes do pagamento | Pergunta obrigatória da entrevista com o responsável pelo fechamento em `coleta-e-diagnostico`, e oportunidade recorrente no ciclo PTP |
| Controle de versões de norma interna | Convenção de versionamento que separa correção de redação de mudança de conteúdo normativo | A escada `vPósWS`, `v1.0`, `v1.1` e `v2.0` de `manual-de-processos`, com nova aprovação formal a cada `v2.0` |

## Onde a ACTA se afasta do manual

A divergência maior é de quem desenha. O manual de facilitação de processos manda construir o fluxo
com o grupo, na sala, a partir da folha em branco. A casa faz o contrário: chega ao workshop com o
To-Be já desenhado, as regras já codificadas, o SLA já sugerido e as oportunidades já redigidas, e o
cliente critica e homologa em vez de desenhar. A razão é de produtividade e de honestidade. Oito
pessoas construindo um fluxo no quadro produzem num dia o que um analista produz numa manhã, e
produzem pior, porque o grupo desenha o processo que cada um gostaria de ter. Diante de um desenho
concreto, o mesmo analista aponta o erro em segundos. O custo dessa escolha é que material mal
preparado arruína o dia inteiro e não há como compensar em sala, e por isso o esforço do mandato
mora na véspera.

As outras divergências são menores e todas na mesma direção, a de reduzir o que o cliente precisa
aprender para poder discordar. Do BPMN se usa um subconjunto deliberado, sem gateway paralelo, sem
evento de compensação e sem pool múltiplo: o que o processo real precisar além disso vira anotação
de texto, porque símbolo que exige treinamento é símbolo que não é criticado. Do Lean se usa a
taxonomia de perda e nada mais, sem evento kaizen, sem mapa de fluxo de valor e sem estudo de tempos,
que são escopo de outro projeto e não cabem no prazo deste. O SLA vive dentro da caixa do fluxograma
e não numa tabela separada, porque prazo que só aparece no slide de indicadores é prazo que ninguém
consulta enquanto executa. E a redação sugerida pela consultoria fica impressa ao lado da redação
aprovada pelo cliente, em vez de ser substituída por ela: quando a meta não for atingida meses
depois, as duas versões estão no mesmo slide, com data, e a diferença entre elas é a decisão do
cliente.
