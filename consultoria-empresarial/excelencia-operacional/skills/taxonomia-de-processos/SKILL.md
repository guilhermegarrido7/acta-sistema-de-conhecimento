---
name: taxonomia-de-processos
description: Classifique o ciclo nos cinco níveis de modelagem e codifique processos, subprocessos e regras. Acionar ao abrir o mapeamento de um ciclo, ao decidir se algo é processo, atividade ou tarefa, ao montar a matriz de processos e subprocessos, ou ao definir o prefixo de codificação das regras de negócio.
---

# Taxonomia de processos

Carregue `acta-way` antes desta skill: ambiente técnico, convenções de entregável e o protocolo de
checkpoint valem aqui integralmente e **não** são repetidos. O método de prática — diagnóstico,
entrevista, desenho TO BE, priorização — virá de `acta-metodo-consultoria`; enquanto esse plugin for
esqueleto, o que esta skill precisa dele está dito aqui e em mais nada.

## Papel desta skill

Esta é a **régua** do mapeamento. Todas as outras skills do plugin pressupõem que o ciclo já foi
classificado: sem isso, um workshop discute objetivo de tarefa achando que discute processo, um
fluxograma mistura decisão de negócio com clique de sistema, e o manual final não tem nível de
detalhe constante de um capítulo para o outro.

O erro mais caro do mapeamento não é desenhar errado — é desenhar **no nível errado**, e só perceber
quando o cliente diz, no workshop, que aquilo "é muito raso" ou "é minúcia demais".

## 1. Os cinco níveis

| Nível | Elemento | Definição | Foco |
|---|---|---|---|
| 1 | Cadeia de Valor | Visão marco. Agrupa os processos primários e os de suporte da organização. | Estratégico |
| 2 | Processo Integrado / Macroprocesso | Processos interligados de ponta a ponta, atravessando áreas. | Tático / Interfuncional |
| 3 | Processos e Subprocessos | Desdobramento por departamento ou equipe. | Tático / Operacional |
| 4 | Atividade | Sequência lógica ilustrada por fluxograma: regras, decisões, atores. | Operacional |
| 5 | Tarefa | O "como fazer": POP, manual passo a passo, instrução de trabalho. | Execução |

**Âncora:** o **APQC Process Classification Framework** é a referência de mercado para hierarquia de
processos — ele contribui o vocabulário e a ideia de categorias/grupos/processos/atividades como
níveis estáveis e comparáveis entre empresas. A ACTA usa a mesma lógica de níveis, com a nomenclatura
acima, que é a que o cliente mid-market brasileiro reconhece.

### Onde o mandato normalmente vive

Um mandato de mapeamento de ciclo (PTP, OTC, RTR, HTR) contrata **níveis 2 a 4**: o macroprocesso
inteiro, quebrado em subprocessos, cada um com fluxograma de atividades. O **nível 5 é escopo à
parte** — POP por tarefa multiplica o esforço e quase nunca cabe no mesmo prazo. Diga isso na
proposta, não no meio do projeto.

### Três testes para decidir o nível de um item

1. **Teste do entregável.** Se ele entrega algo que alguém fora da área consome, é subprocesso
   (nível 3). Se só alimenta o passo seguinte da mesma área, é atividade (nível 4).
2. **Teste do ator.** Atividade tem **um** ator responsável por executá-la. Se você precisa de três
   áreas para descrever "a atividade", ela é subprocesso disfarçado.
3. **Teste da tela.** Se a descrição precisa dizer em qual campo se digita o quê, você caiu no nível
   5. Sobe de volta: isso é conteúdo de POP, não de fluxograma.

## 2. Notação BPMN simplificada

**Âncora:** **BPMN 2.0 (OMG)** é a notação padrão de modelagem de processos de negócio; ela contribui
a semântica dos elementos (evento, atividade, gateway, raia) e a garantia de que o desenho é legível
por qualquer analista treinado. A ACTA usa um **subconjunto** dela — o suficiente para o cliente ler
sem treinamento e não o bastante para virar exercício de notação.

Duas regras que vão em toda legenda entregue ao cliente:

> A leitura é **sempre da esquerda para a direita**. Todo fluxo começa no círculo verde e termina no
> vermelho.

| Família | Elementos em uso |
|---|---|
| Eventos | início · término · tempo/espera (marca SLA) · mensagem (e-mail) · fim por mensagem |
| Atividades | Tarefa · Tarefa manual (marcador `M`) · Atividade automática (integração entre sistemas, sem ação humana) · Subprocesso |
| Decisões | Losango, **com a condicionante escrita dentro ou ao lado** — losango sem pergunta não é decisão, é enfeite |
| Conexões | Sequência · Associação · Conector `A`/`B` para continuar o fluxo em outra faixa ou slide · Anotação |
| Estrutura | **Raias = áreas ou atores** · logos de sistema dentro das caixas |

A legenda completa, com a explicação em linguagem leiga de cada símbolo — a que se projeta no
primeiro slide do workshop —, está em `references/notacao-bpmn-simplificada.md`.

O que **não** se usa: gateway paralelo/inclusivo, evento intermediário de compensação, pool múltiplo,
sinalização de erro. Se o processo real precisa deles, ele é exceção e se descreve em anotação de
texto, não em símbolo que o cliente terá de aprender.

## 3. Codificação

Codificar não é burocracia: é o que permite a uma regra ser citada num achado, num sistema e num
treinamento sem ambiguidade, e é o que faz o manual final ter índice remissivo.

**Subprocesso.** Prefixo mnemônico de **2 a 4 letras** derivado do nome do subprocesso, em caixa
alta. Exemplos de derivação: Política → `POL`, Cadastro → `CAD`, Medição → `MED`, Recebimento →
`REC`.

**Regra de negócio.** `<PREFIXO>.<NN>` — prefixo do subprocesso + sequencial de dois dígitos:
`POL.01`, `CAD.01`, `MED.07`, `REC.12`.

Três regras de higiene:

- **Prefixo é único no ciclo inteiro.** Antes de criar, confira a matriz. Dois subprocessos disputando
  `REC` (Recebimento e Recrutamento) é o tipo de colisão que só aparece na consolidação do manual.
- **Código não se reaproveita.** Regra descartada no workshop deixa buraco na sequência. O buraco é
  informação: alguém vai perguntar pela `MED.04` e a resposta "foi rejeitada no workshop" é melhor
  que uma `MED.04` diferente da que ele viu.
- **O código nasce no material pré-workshop e não muda depois.** Renumerar entre a versão do workshop
  e a `vPósWS` quebra a rastreabilidade da crítica do cliente.

## 4. A matriz de processos e subprocessos

Artefato de **duas vidas**: é o mapa mural que abre todo workshop e é o índice do manual final.

O que ela mostra:

- Os processos do ciclo em colunas ou faixas, e os subprocessos dentro de cada um.
- O **fora de escopo marcado em amarelo** — visível, nomeado, no mesmo mapa. Esta é a decisão de
  desenho mais útil do artefato: escopo negativo que fica pendurado num anexo de proposta é escopo
  que vai ser cobrado depois; escopo negativo impresso na parede, que o cliente olha o dia inteiro,
  é escopo acordado.
- O prefixo de codificação de cada subprocesso, discreto, junto ao nome.

É **artefato vivo**: sai do diagnóstico como hipótese, é criticado no primeiro workshop, e reemite a
cada rodada. Quando um subprocesso se revela dois, a matriz muda — e a mudança é registrada, porque
ela altera o esforço contratado.

Ao abrir o dia, a matriz é o primeiro slide e o facilitador marca nela onde o grupo está. Grupo que
perde a noção de onde está no ciclo discute o mesmo assunto duas vezes.

## 5. Nome de arquivo

`AAAAMMDD_WS<n>_<Projeto>_<NomeDoProcesso>[_v<Versão>]`

O sufixo **`vPósWS`** marca o material reemitido depois do workshop, com os resultados da crítica já
incorporados. É a única versão que alimenta o manual — material pré-workshop nunca entra no
entregável final, por mais bonito que esteja.

`<Projeto>` é o codinome do mandato, nunca o nome do cliente. Ver `acta-way` para a convenção geral de
nomeação e versionamento de entregável.

## O que entregar

1. A árvore do ciclo nos níveis 2, 3 e 4, com o nível 5 declarado como fora de escopo (ou dentro,
   se foi contratado).
2. A matriz de processos e subprocessos, com o fora de escopo em amarelo.
3. A tabela de prefixos: subprocesso → prefixo, sem colisão.
4. A legenda de notação, em uma página, pronta para abrir o workshop.

## Próximo passo

`coleta-e-diagnostico`, para levantar o que sustenta o desenho antes de desenhar. Se a matriz já foi
homologada e a coleta está fechada, siga direto para `workshop-de-mapeamento`.
