---
name: coleta-e-diagnostico
description: Levante os insumos do ciclo com o checklist de oito blocos e as entrevistas AS IS antes de desenhar qualquer fluxo. Acionar ao abrir a coleta de um mandato de mapeamento, ao priorizar o que pedir primeiro, ao definir formato esperado e fonte por cargo, ou ao preparar entrevista com o executor do processo.
---

# Coleta e diagnóstico

Carregue `acta-way` antes desta skill: ambiente técnico, anonimização e o protocolo de checkpoint
valem aqui integralmente e **não** são repetidos. O método de prática — condução de entrevista,
diagnóstico, gestão de escopo — virá de `acta-metodo-consultoria`; enquanto esse plugin for esqueleto,
o que esta skill assume dele está dito aqui.

Classifique o ciclo com `taxonomia-de-processos` antes de coletar: a coluna "processo(s) impactado(s)"
do checklist só existe se a matriz de subprocessos já existir.

## Papel desta skill

A coleta é o que permite ao método da casa fazer a inversão que o define: **chegar ao workshop com o
To-Be já desenhado**. Sem coleta, a consultoria chega com perguntas, e o cliente passa o dia
desenhando — o que ele já sabia fazer sozinho e não precisava contratar.

A regra de fronteira: **nada é desenhado antes de o bloco crítico fechar.** Desenhar sobre suposição
produz fluxograma que o grupo refuta em cinco minutos, e o dia inteiro vira reconstrução.

## 1. O instrumento: uma linha por informação

O checklist é uma tabela única, com colunas fixas. Não é um e-mail pedindo "os documentos do
processo" — pedido vago volta vago.

| Coluna | O que carrega |
|---|---|
| `Nº` | Sequencial estável. É por ele que se cobra. |
| `CATEGORIA` | O bloco (B1 a B8). |
| `INFORMAÇÃO NECESSÁRIA` | O item, em uma frase que um não-consultor entende. |
| `FORMATO ESPERADO` | Tabela com as colunas nomeadas, Sim/Não + descrição, lista, arquivo, print. |
| `FONTE SUGERIDA` | **O cargo** que tem a resposta — nunca o nome da pessoa. |
| `PROCESSO(S) IMPACTADO(S)` | Os subprocessos que travam se o item não vier. |
| `RESPOSTA/ANEXO` | O que voltou. |
| `STATUS` | Pendente / Parcial / Recebido / Não aplicável. |
| `OBSERVAÇÃO` | Por que está parcial, o que foi substituído, o que ficou de fora. |

Duas colunas fazem o trabalho pesado, e são as duas que se costuma omitir:

**`FORMATO ESPERADO` mata a ambiguidade.** "Alçadas de aprovação" volta como parágrafo de política;
"tabela com colunas Faixa de valor · Aprovador · Tipo de gasto" volta como tabela. Quando o formato é
declarado, o cliente não interpreta o pedido — ele preenche.

**`FONTE SUGERIDA` transforma o checklist em roteiro de agendamento.** Ao declarar o cargo por item
(CFO, Controller, TI, RH, comprador, jurídico, almoxarife), o checklist se reordena sozinho por
pessoa, e a agenda de entrevistas sai dele sem trabalho adicional. Quem monta agenda antes de saber
quem detém o quê agenda duas vezes.

## 2. Os oito blocos e a ordem de pedido

A prioridade não é preferência: é **dependência**. O que vem primeiro é o que destrava desenhar o
resto.

| Bloco | Prioridade | Conteúdo |
|---|---|---|
| **B1 Contexto institucional** | 1ª | Segmento, porte, unidades, grau de centralização, ERP com versão e módulos ativos, sistemas complementares, maturidade de processos. |
| **B2 Organograma e equipe** | 1ª | Organograma **só das áreas do ciclo**, lista nome/cargo/área, **confirmação de segregação de funções**, comitês, perfis de acesso. |
| **B3 Alçadas de aprovação** | 2ª — **crítico** | Faixas de valor × aprovadores, diferença por tipo de gasto, alçadas de pagamento, quem assina contrato, valor a partir do qual contrato é obrigatório. |
| **B4 Tipos e categorias** | 3ª | Categorias de gasto ou de receita com volume, operação internacional, sazonalidade, classificação de urgência, fundo fixo, recorrentes. |
| **B5 Políticas e regras** | 3ª | Nº mínimo de cotações por faixa, critério de seleção, fornecedor único, **lead time alvo por etapa**, prazo de pagamento, quem atesta serviço, tratamento de divergência. |
| **B6 Base de cadastro** | 4ª | Base homologada, exportação do cadastro **sem dados bancários nem fiscais sensíveis**, critérios de homologação, avaliação periódica, cadastros críticos, contratos ativos. |
| **B7 Processo atual AS IS** | **CRÍTICO** | Ver §3. |
| **B8 KPIs e metas** | 5ª | Indicadores de hoje + print do painel, orçamento por categoria, expectativas da diretoria, meta de ganho, rituais de gestão. |

O detalhamento item a item — os 54 itens com formato esperado e fonte — está em
`references/checklist-de-coleta.md`, pronto para virar a planilha enviada ao cliente.

### Por que B3 é marcado crítico

Sem a tabela de alçadas, o manual descreve "encaminhar para aprovação" e nunca diz **para quem**. O
resultado é um manual que descreve o processo e não o opera: bonito na apresentação, inútil na mesa
de quem executa. Quando B3 não vem, não se avança para o desenho do subprocesso de aprovação — se
escala.

### Por que B6 vem com restrição explícita

O pedido é da **estrutura** do cadastro e dos **critérios** de homologação, não dos dados. Dado
bancário e fiscal de terceiro não é necessário para mapear processo e é passivo de LGPD que a firma
carrega sem contrapartida. Peça a exportação sem essas colunas e diga por quê — o cliente costuma
agradecer. Ver `acta-way` para o tratamento de dado pessoal recebido.

## 3. B7: o insumo mais crítico do projeto

> **É o que evita que o manual seja puramente teórico.**

B7 não se coleta por formulário. Coleta-se por **entrevista com quem executa**, e o que se busca é a
diferença entre o processo que a política descreve e o processo que acontece.

Duas entrevistas obrigatórias, de 60 minutos cada:

**(a) O executor da ponta — o passo a passo de hoje.** Peça que ele narre um caso real recente, do
gatilho ao encerramento, com o computador aberto. A pergunta que abre o mapa: *"me mostra o último
que você fez"*. O que se registra:

- O que acontece **no sistema** × o que acontece em **e-mail, mensageiro ou planilha**. Esta
  separação é o insumo direto dos marcadores `M` do fluxograma e da metade das oportunidades.
- Gargalos e reclamações, nas palavras dele.
- Onde ele **contorna** o processo formal, e o motivo. Contorno com motivo legítimo vira regra nova;
  contorno sem motivo vira achado.

**(b) O responsável pelo fechamento — o ciclo financeiro.** Prazo médio real (não o da política),
formalização de contrato, tratamento de divergência, e a pergunta que nunca se pula: **existe
conferência automática entre pedido, recebimento e documento fiscal, e ela é de fato automática?**
"Existe" e "é automática" são respostas diferentes, e a segunda é a que muda o desenho.

Três cautelas de campo:

1. **Entreviste quem executa, não quem coordena.** O coordenador descreve o processo desenhado; o
   executor descreve o que acontece. Ambos são necessários, e o segundo é o que falta.
2. **Não corrija o entrevistado.** A entrevista AS IS não é o momento de apontar o erro — apontar
   fecha a fonte. Registre e leve para o desenho.
3. **Confirme volume.** "Às vezes acontece" precisa virar número antes de entrar no fluxo: exceção de
   2% vira anotação, exceção de 40% vira caminho desenhado.

## 4. Operação da coleta

- **Envie o checklist inteiro, cobre por prioridade.** Mandar por partes esconde o tamanho do pedido
  e produz três rodadas de surpresa.
- **Um responsável do lado do cliente**, com a lista na mão, e uma reunião curta de status por
  semana sobre o `STATUS` das linhas — não sobre o projeto.
- **`STATUS` é do consultor, não do cliente.** Item marcado Recebido quando veio coisa diferente é
  dívida que estoura no workshop.
- **"Não aplicável" exige justificativa na observação.** É a diferença entre um item que o cliente
  não tem e um item que ninguém procurou.
- **Congele a coleta antes de desenhar.** Insumo que chega depois do desenho pronto entra como
  crítica na versão `vPósWS`, não como retrabalho do material.

## O que entregar

1. O checklist preenchido, com `STATUS` fechado em todas as linhas e as observações escritas.
2. As notas das entrevistas AS IS, por subprocesso, separando sistema × fora de sistema.
3. A lista do que **não** veio, o que trava e o que foi assumido no lugar — esta lista abre o
   workshop e é o que protege o desenho de ser refutado por falta de insumo.
4. A primeira leitura de oportunidades, ainda bruta, que alimenta `oportunidades-e-quick-wins`.

Onde gravar: material recebido permanece em `~~arquivos recebidos`, somente leitura; checklist e
notas em `~~pasta de trabalho`. Estado da coleta no checkpoint de `acta-way`.

## Próximo passo

`fluxo-e-regras-de-negocio`, para converter a coleta no To-Be desenhado, e
`oportunidades-e-quick-wins`, para transformar gargalo relatado em oportunidade redigida. Os dois
precisam estar prontos **antes** de `workshop-de-mapeamento`.
