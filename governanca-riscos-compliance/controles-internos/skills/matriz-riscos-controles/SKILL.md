---
name: matriz-riscos-controles
description: Monte e critique a matriz de riscos e controles (RACM) de um ambiente de controles internos. Acionar ao inventariar controles de um processo, ao codificar controle e amarrá-lo a risco e a asserção contábil, ao classificar controle como chave, ao ancorar a matriz nos componentes e princípios do COSO, ou ao medir cobertura e apontar risco órfão.
---

# Matriz de riscos e controles (RACM)

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas.

Carregue também `programa-de-testes`, do mesmo plugin. Lá vivem — e **não são repetidos aqui** — os
cinco conceitos de risco que não se misturam, o código de risco `<CódProcesso>.R<NN>`, a taxonomia
fechada de categoria de risco, a taxonomia de tipo de teste, a régua de amostragem por frequência ×
risco, o vocabulário de conclusão e as 26 colunas da matriz de testes da ACTA.

## Papel desta skill

A matriz de testes de `programa-de-testes` é **documento de comando do trabalho da auditoria**: o que
*nós* vamos testar. O RACM desta skill é outra coisa: é o **inventário do ambiente de controle da
Companhia** — o que a empresa afirma ter, amarrado ao risco que cada controle mitiga e à afirmação
das demonstrações financeiras que ele protege.

Os dois convivem. O RACM é insumo; a matriz de testes é derivada dele mais o que o auditor decide
testar. Quando o cliente já tem RACM (empresa com SOX, subsidiária de listada estrangeira, empresa
em preparação de IPO), o trabalho começa criticando o RACM existente. Quando não tem — o caso comum
no mid-market brasileiro —, **construir o RACM é o entregável**, e muitas vezes o de maior valor
percebido, porque é a primeira vez que a Companhia vê o próprio ambiente de controle em uma página.

## 1. A âncora: COSO 2013

O **COSO Internal Control – Integrated Framework**, na revisão de 2013, é o referencial mundial do
que significa "controle interno". Ele contribui três coisas para o RACM:

- **Cinco componentes**: Ambiente de Controle, Avaliação de Riscos, Atividades de Controle,
  Informação e Comunicação, e Monitoramento. Todo controle inventariado pertence a um deles.
- **Dezessete princípios** distribuídos entre os cinco componentes, que detalham o que cada
  componente exige para ser considerado presente e funcionando. Cite o princípio pelo conteúdo
  (*"o princípio de que a organização demonstra compromisso com integridade e valores éticos"*),
  **nunca pelo número decorado** — errar o número destrói a credibilidade do documento inteiro.
- **Pontos de foco**, que são exemplos do que evidencia um princípio. Não são obrigatórios nem
  exaustivos, e o COSO diz isso expressamente.

A regra do COSO que mais organiza o trabalho: um sistema de controle interno só é **efetivo** se os
cinco componentes estão presentes, funcionando **e operando de forma integrada**, e se **todos** os
princípios relevantes estão presentes e funcionando. Disso decorre a consequência prática que o
cliente mid-market quase nunca antecipa: **não existe compensar Ambiente de Controle fraco com
excesso de Atividade de Controle.** Se a alta administração não exerce supervisão e o contador é o
mesmo que assina o cheque, nenhuma quantidade de conferência de nota resolve.

No RACM isso vira três colunas de ancoragem — componente, princípio e ponto de foco — que são
exatamente as colunas que um RACM corporativo de referência trazia e deixava em branco em todas as
linhas. **Coluna de framework em branco é pior que coluna ausente:** sugere mapeamento que não
existe.

### Controles de entidade e controles de processo

O COSO separa, e o RACM tem de separar:

| | Controle de entidade (ELC) | Controle de processo (PLC) |
|---|---|---|
| Onde opera | acima do processo: tom da liderança, código de conduta, canal de denúncia, comitê, alçadas estatutárias, política de RH, revisão de resultado pela diretoria | dentro do fluxo: aprovação de requisição, conciliação, conferência de recebimento, corte de competência |
| O que responde | a Companhia tem ambiente que torna controle possível? | esta transação foi processada certo? |
| Como se testa | predominantemente por indagação estruturada, inspeção de ata, de política e de evidência de funcionamento do órgão | por atributo, sobre população e amostra |

Diagnóstico de mid-market que só mapeia PLC entrega metade do trabalho. A causa-raiz da maioria dos
achados de processo está no ELC, e recomendar "conferir a nota" quando o problema é ausência de
segregação entre quem compra e quem paga é tratar sintoma.

## 2. Escopo: por onde se decide o que entra no RACM

Em ambiente SOX, a escolha não é livre — a **PCAOB AS 2201** prescreve a abordagem *top-down*:
parte-se das demonstrações financeiras e do nível da entidade, desce-se às contas e divulgações
significativas, identificam-se as **asserções relevantes** de cada uma, e só então se chega aos
processos e aos controles que endereçam aquelas asserções. Controle que não endereça asserção
relevante de conta significativa **não entra no escopo**, por mais bem desenhado que seja.

Em trabalho de empresa fechada, a mesma lógica vale como **disciplina de foco**, não como exigência:
sem ela o inventário de controles vira lista de tudo que alguém faz, com 300 linhas e nenhuma
prioridade. E a **ISA 315 / NBC TA 315** contribui a outra metade — o entendimento da entidade e do
seu ambiente, incluindo o sistema de controle interno, como base para identificar onde o erro
material pode nascer. É dela que vem a exigência de entender o **fluxo de informação**, e não apenas
a lista de controles: por onde a transação entra, como é registrada, processada e reportada.

As asserções que orientam o corte, para cada conta significativa: **existência/ocorrência**,
**integridade**, **exatidão**, **corte de competência**, **classificação**, **avaliação/alocação** e
**direitos e obrigações**. No RACM elas viram coluna, e a coluna tem um uso só: mostrar **asserção
descoberta** — aquela para a qual nenhum controle foi mapeado.

## 3. Colunas do RACM

Nesta ordem. As que o RACM acrescenta em relação à matriz de testes de `programa-de-testes` estão
marcadas com ▲.

| # | Coluna | Conteúdo |
|---|---|---|
| 1 | Ciclo / Entidade | o ciclo de negócio e a unidade jurídica ou funcional a que o controle pertence |
| 2 | Processo | o processo do ciclo (Acesso a Programas e Dados, Compras, Faturamento, Fechamento) |
| 3 | Código do controle ▲ | identificador estável — §4 |
| 4 | Título | o controle em uma linha, na voz de quem o executa |
| 5 | Descrição | o controle como ele opera: quem, o quê, com que frequência, contra qual critério, com que evidência |
| 6 | Objetivo do controle ▲ | o que se assegura — redação que começa com *"Assegurar que..."* |
| 7 | Atributos testáveis ▲ | A, B, C, D... — §5 |
| 8 | Frequência | taxonomia fechada — §5 |
| 9 | Natureza | `Preventivo` · `Detectivo` |
| 10 | Modo de execução | `Manual` · `Automático` · `Semiautomático` (híbrido, ou *IT-dependent manual*) |
| 11 | Significância ▲ | `Chave` · `Não chave` — §6 |
| 12 | Componente COSO ▲ | um dos cinco |
| 13 | Princípio COSO ▲ | o princípio endereçado, pelo conteúdo |
| 14 | Asserções cobertas ▲ | existência, integridade, exatidão, corte, classificação, avaliação, direitos e obrigações |
| 15 | Riscos (Cód.) | `<CódProcesso>.R<NN>`, associação por código — nunca o texto do risco repetido |
| 16 | Nível de risco do controle ▲ | `Alto` · `Médio` · `Baixo` — dimensiona a amostra |
| 17 | Executor do controle | **o cargo**, jamais o nome da pessoa |
| 18 | Revisor / supervisor | o cargo de quem supervisiona a execução |
| 19 | Aplicações envolvidas ▲ | os sistemas de que o controle depende — dispara a dependência de ITGC |
| 20 | Evidência do controle | o rastro que o controle deixa e que permite testá-lo depois |
| 21 | Documentação de suporte solicitada ▲ | o que precisa ser pedido à Companhia para testar (o *PBC*) |
| 22 | Status de desenho | `Implementado` · `Parcialmente Implementado` · `Não Implementado` · `Não Aplicável` · `A avaliar` |
| 23 | Conclusão de efetividade | `Eficaz` · `Parcialmente Eficaz` · `Ineficaz` |
| 24 | Deficiências abertas ▲ | código da deficiência associada, se houver |
| 25 | Confiança do auditor externo ▲ | `Sim` · `Não` — o auditor independente se apoia neste controle? |

As colunas 22 e 23 são as mesmas de `programa-de-testes` e pelo mesmo motivo: **um RACM corporativo
de referência tinha uma única coluna `Status Controle`**, o que impede distinguir controle que não
existe de controle que existe e falhou.

Matriz retangular, **sem célula mesclada em nenhuma aba**. O agrupamento que a tentação manda virar
faixa mesclada vira **coluna**.

## 4. Código de controle

Um RACM de referência de multinacional usava a composição hierárquica abaixo. É boa, e vale copiar a
**estrutura** — não o conteúdo de ninguém:

```
<ENTIDADE>-<FUNÇÃO>.<DOMÍNIO>.<APLICAÇÃO>.<REFERÊNCIA NUMÉRICA>
```

Exemplo de padrão de codificação, e nada além disso: um código no formato `IT-1.1.1` compondo com
prefixo de entidade e de domínio (`BR-TI.ADP.APP07.IT-1.1.1`) permite ler, sem abrir nada, que é um
controle de TI, da entidade Brasil, do domínio de acesso, sobre a aplicação 07, referência 1.1.1.

Três propriedades que fazem o código servir:

- **A referência numérica é estável entre entidades e entre ciclos.** O controle de concessão de
  acesso é `1.1.1` no Brasil e `1.1.1` na Espanha, o que permite consolidar o resultado global sem
  mapa de-para. É o principal ganho, e o que se perde ao numerar sequencialmente por ordem de
  descoberta.
- **O prefixo de domínio agrupa** e sobrevive a reordenação da planilha.
- **Nunca renumere código já emitido.** Ele já está em papel de trabalho, em e-mail e no relatório do
  auditor independente. Controle que sai de escopo recebe status, não some.

No mid-market, onde não há herança corporativa, use `<SIGLA DO PROCESSO>-C<NN>` (`CMP-C01`,
`CTP-C04`, `FEC-C02`) — a mesma lógica do código de risco de `programa-de-testes`, com `C` de
controle, para que risco e controle sejam visivelmente de espécies distintas na mesma planilha.

## 5. Atributos e frequência

**Atributo** é o que decompõe um controle em pontos verificáveis, um por letra:

> A. A solicitação foi registrada no sistema de chamados com o justificante do gestor.
> B. A aprovação partiu do gestor da área do usuário.
> C. A aprovação é anterior à concessão.
> D. O perfil concedido é o perfil aprovado.

Essa decomposição é o que torna o teste executável e o que permite concluir com precisão: falhou
apenas o atributo C significa "controle opera, mas fora de tempo", conclusão diferente de falhar A.
Sem atributos, o testador escreve "OK" e ninguém sabe o que foi olhado. **Atributo não é inciso de
teste** — a regra de `programa-de-testes` de quebrar teste com mais de quatro incisos de naturezas
distintas continua valendo; atributos são verificações da **mesma** natureza sobre o **mesmo** item.

**Taxonomia fechada de frequência**, porque é ela que dimensiona a amostra: `Múltiplas vezes ao dia`
· `Diária` · `Semanal` · `Mensal` · `Trimestral` · `Semestral` · `Anual` · `Por ocorrência` ·
`Ad hoc`.

`Por ocorrência` é a que mais causa erro. Um controle que dispara a cada evento (cada admissão, cada
desligamento, cada mudança promovida) **não é anual só porque a política é revisada uma vez por
ano**: a população é o número de eventos do período, e a amostra sai daí. Na régua de
`programa-de-testes`, `Por ocorrência` entra pela **frequência efetiva observada na população**, não
pela frequência declarada na política. `Ad hoc` sem população apurável é sinal de controle não
evidenciável — e controle não evidenciável não opera.

## 6. Controle chave

`Chave` quando a falha isolada daquele controle já produz o risco, sem que nenhum outro o detenha.
Três testes rápidos:

1. Se este controle não existisse, o erro chegaria às demonstrações? Se sim, é chave.
2. Existe outro controle que capturaria o mesmo erro dentro do período de reporte? Se sim, os dois
   dificilmente são chave — escolha o mais direto e o mais evidenciável.
3. O auditor independente se apoia neste controle para reduzir teste substantivo? Se sim, é chave
   por definição prática.

**Não crie coluna `Key control` que vale `Sim` em 100% das linhas.** Num RACM corporativo de
referência, essa coluna estava oculta e valia `Sim` em todas: era o critério do filtro que gerou o
arquivo, não informação. Quando tudo é chave, nada é.

## 7. Cobertura: o uso real da matriz

O RACM montado e nunca cruzado é planilha. O valor está em quatro leituras, todas geradas **por
código**, nunca à mão:

| Leitura | O que revela | O que fazer |
|---|---|---|
| Risco sem controle | lacuna de cobertura | recomendação de implantação, e é o achado de desenho mais forte que existe |
| Controle sem risco | controle possivelmente desnecessário | ou falta o risco no registro, ou o controle é custo sem propósito |
| Asserção sem controle | conta significativa desprotegida numa dimensão | volta ao §2: a asserção é mesmo relevante? |
| Princípio COSO sem controle | componente possivelmente ausente | se for de Ambiente de Controle, é candidato natural a deficiência significativa |

A quarta leitura é a que o cliente mid-market nunca fez e a que mais move o Conselho: mostrar que o
componente **Monitoramento** não tem nenhum controle mapeado explica, de uma vez, por que os mesmos
achados voltam todo ano.

**Só declare cobertura de processo cujos testes estejam fechados.** Sem resultado não há como afirmar
vulnerabilidade residual — deixe *a definir* e sinalize, em vez de publicar um percentual que vai ser
retratado.

## O que entregar

1. O RACM com as 25 colunas, retangular, sem célula mesclada, com componente e princípio COSO
   preenchidos em **todas** as linhas.
2. O registro de riscos em aba própria, no código e na taxonomia de `programa-de-testes`, com
   `Controles associados` gerado por código.
3. As quatro leituras de cobertura do §7, cada uma como lista nomeada, não como número solto.
4. A separação explícita entre controle de entidade e controle de processo, com a contagem de cada.
5. A lista de controles `Chave`, com a razão de cada um ser chave — e não apenas a marcação.

## Checklist antes de dar por concluído

- Nenhum nome de pessoa em coluna de executor ou revisor: só cargo.
- Nenhuma coluna de framework (componente, princípio, asserção) em branco ou com `--`.
- Nenhum controle sem risco associado; nenhum risco sem controle associado que não esteja na lista
  de lacunas do §7.
- Frequência preenchida em 100% das linhas, e nenhum `Ad hoc` sem população apurável declarada.
- Nenhum código de controle renumerado; nenhum controle removido em silêncio.
- `Chave` marcado em uma fração da matriz, com razão declarada — não em todas as linhas.

## Próximo passo

`walkthrough-e-narrativa`, que confirma se o controle descrito no RACM é o controle que de fato
acontece. Depois `desenho-vs-efetividade` e `teste-de-controle-e-amostragem`. Quando o processo for
de TI, `itgc` substitui a taxonomia de processo do §2 pelos quatro domínios de controles gerais.
