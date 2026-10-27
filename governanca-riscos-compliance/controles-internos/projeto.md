---
titulo: Controles Internos
pratica: governanca-riscos-compliance
duracao_tipica: 6 a 10 semanas
plugin: acta-controles-internos
---

## O que é, e quando a ACTA é contratada para isso

Um trabalho de controles internos inventaria o ambiente de controle da Companhia numa matriz de
riscos e controles ancorada no COSO 2013, confirma por walkthrough que o controle escrito é o
controle praticado, separa a avaliação de desenho da de efetividade operacional, testa efetividade
com amostra dimensionada, trata a dependência que os controles gerais de TI criam sobre tudo que se
apoia em sistema, e classifica cada falha numa escala de severidade que define a quem comunicar. O
entregável é a matriz de riscos e controles, as conclusões de desenho e de efetividade, e o memorando
de deficiências com o plano de ação.

O método é escrito para o mid-market brasileiro, onde raramente há SOX completo: cada skill declara o
que é exigência de companhia registrada na SEC e o que é boa prática aplicável a empresa fechada. A
firma costuma ser contratada em três situações:

- **A Companhia não tem matriz de controles e ninguém enxerga o ambiente inteiro.** Construir o RACM é
  o entregável, e muitas vezes o de maior valor percebido: é a primeira vez que a empresa vê o próprio
  ambiente de controle em uma página.
- **A empresa vai ser auditada, vendida, captar ou abrir capital.** A asserção de que os controles
  existem e operam precisa de lastro, e o auditor independente quer saber em quais controles pode se
  apoiar.
- **Os mesmos achados voltam todo ano.** O cliente quer entender por que o controle não corrige o que
  já sabe estar quebrado — quase sempre um componente do COSO (tipicamente Monitoramento) sem nenhum
  controle mapeado.

## As etapas do ciclo de vida

Uma skill por etapa. A ordem não é sugestão: o ITGC vem antes dos testes de aplicação porque é ele que
autoriza a amostra de 1 do controle automatizado e a confiança nos relatórios que viram população; e a
avaliação de desenho precede a de efetividade porque controle mal desenhado não segue para teste.

| # | Etapa | O que fecha a etapa |
|---|---|---|
| 1 | Matriz de riscos e controles | RACM de 25 colunas ancorado no COSO 2013, controle amarrado a risco e asserção por código, controles chave marcados com razão, e as quatro leituras de cobertura |
| 2 | Walkthrough e narrativa | A transação percorrida do nascimento ao razão, a narrativa do processo como ele é, a matriz de pontos de controle e as lacunas de desenho colhidas no percurso |
| 3 | ITGC | Os quatro domínios de controles gerais de TI avaliados, o teste de IPE de todo relatório usado como evidência, e a conclusão de dependência sobre o que se apoia em sistema |
| 4 | Desenho versus efetividade | As duas colunas separadas preenchidas em 100% das linhas, os dois backlogs (implantação × correção) e o quadrante impossível conferido em zero |
| 5 | Teste de controle e amostragem | A efetividade dos controles que sobreviveram ao corte, com roteiro, amostra dimensionada e distribuída, e exceção investigada por causa e extensão |
| 6 | Deficiências e severidade | Cada falha classificada em simples, significativa ou fraqueza material, a agregação por asserção e causa comum, e o quadro de comunicação por nível |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**A matriz chega do cliente com uma coluna única de status.** `Não efetivo` não distingue controle que
não existe de controle que existe e falhou, e nenhum dos dois backlogs — implantar o que falta, corrigir
o que opera mal — sobrevive. *Prevenção:* a primeira entrega é o desdobramento em duas colunas, desenho
e efetividade, reabrindo linha a linha; trate como trabalho dimensionado, não como ajuste de formatação.

**Testa-se efetividade de controle mal desenhado.** Gastam-se horas para produzir uma amostra de 100%
de conformidade e uma conclusão `Eficaz` que convive com o risco integralmente descoberto. *Prevenção:*
controle com desenho `Não Implementado` não segue para teste; redirecione as horas e registre a decisão
de escopo, nunca a ausência.

**Conclui-se controle só com indagação.** A conclusão de efetividade vira a opinião do entrevistado em
papel timbrado da auditoria. *Prevenção:* indagação nunca conclui sozinha — corrobore com observação,
inspeção ou reperformance, que têm força probatória superior.

**Usa-se o relatório do ERP como evidência sem testá-lo.** A amostra impecável extraída de um relatório
que omite uma filial conclui sobre uma população que não é a população. *Prevenção:* teste de completude
e exatidão (IPE) em todo relatório usado como evidência, inclusive os que a própria auditoria extraiu.

**ITGC ineficaz escrito como oportunidade de melhoria.** "Os controles gerais de TI apresentam
oportunidades" esvazia o trabalho de TI inteiro e não comunica que os controles automatizados e os
relatórios daquele ambiente deixaram de ser confiáveis. *Prevenção:* ITGC ineficaz é conclusão, com a
lista dos controles contaminados e a amostra de 1 que cai — não ressalva lateral.

**Rebaixa-se a deficiência porque "nunca aconteceu nada".** A escala avalia o maior erro que poderia
passar, não o que passou; o histórico limpo informa a probabilidade, não a elimina. *Prevenção:* avaliar
magnitude potencial e probabilidade sempre, e agregar as deficiências que afetam a mesma asserção ou têm
a mesma causa antes de fixar o nível.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Matriz de riscos e controles (RACM) | Planilha de 25 colunas, retangular, controle × risco × asserção por código | Auditoria interna / Conselho |
| Narrativa e matriz de pontos de controle | Texto por processo, com fluxograma e pontos de controle marcados pelo código do RACM | Donos de processo e auditoria |
| Matriz de ITGC e testes de IPE | Planilha nos quatro domínios, com completude e exatidão documentadas | Auditoria e TI |
| Papéis de trabalho dos testes | Matriz item × atributo, população, amostra e exceções, reproduzível | Interno e auditável |
| Memorando de deficiências | Deficiências classificadas, agregadas, com plano de ação e quadro de comunicação | Governança / diretoria |
| Relatório de auditoria | Deck no padrão da casa, com desenho, efetividade e severidade | Comitê de auditoria / sócios |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador na auditoria interna, na controladoria ou na diretoria que
aprova o escopo e recebe o relatório; os donos de cada processo, que respondem o RACM e são percorridos
no walkthrough; e a TI (própria ou o provedor terceirizado) para o escopo de ITGC e as extrações de
sistema.

**Do nosso lado:** um auditor responsável pela condução, pelo RACM, pelos papéis de trabalho e pela
classificação de severidade, com o sócio responsável validando o nível das deficiências — sobretudo a
fronteira da fraqueza material e a comunicação escrita aos responsáveis pela governança — antes da
emissão.

## O que é preciso ter antes de começar

- **O escopo das contas e processos significativos**, fechado com o patrocinador, para orientar o
  corte *top-down* do RACM.
- **Acesso aos executores de cada processo**, para os walkthroughs — sem percorrer, não se confirma se
  o controle descrito é o praticado.
- **O patamar de materialidade de referência**, acordado com o cliente (receita, resultado, patrimônio
  ou fluxo de caixa): sem ele, "fraqueza material" é opinião.
- **As aplicações que sustentam as contas significativas e acesso às extrações**, para o escopo de ITGC
  e os testes de IPE.
- **A matriz de controles existente**, se houver (empresa com SOX, subsidiária de listada estrangeira,
  empresa em preparação de IPO), para começar pela crítica em vez da construção.
