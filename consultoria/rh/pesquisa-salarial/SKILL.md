---
name: pesquisa-salarial
description: >
  Script metodológico mestre e reutilizável para projetos de Pesquisa de
  Remuneração e Benefícios da ACTA. Generalizado a partir dos casos FJS e PASB
  (ver ESTUDO-BENCHMARKING.md). Acionar sempre que a tarefa envolver: matching de
  cargos, painel de empresas participantes, coleta ou validação de dados de
  remuneração, cálculo de estatísticas (mín, Q1, média, mediana, Q3, máx),
  comparatio e gaps de competitividade, modelagem de base em planilha, painel
  Power BI, relatório de pesquisa salarial, relatórios individuais de
  participantes, ou qualquer decisão metodológica de um projeto de pesquisa de
  remuneração. Este arquivo é o template. No início de cada projeto real,
  preencha a seção 1 com os dados do cliente antes de qualquer outra tarefa.
---

# Pesquisa de Remuneração: script metodológico mestre (template)

## 0. Como usar este script

Este arquivo é o roteador. Contém as regras que valem para qualquer projeto de
pesquisa de remuneração e aponta para os módulos de detalhe. Antes de executar
qualquer tarefa:

1. Confirme que a seção 1 (cartão de identidade) está preenchida para o projeto
   atual. Se estiver com placeholders `{{ }}`, preencha antes de prosseguir.
2. Leia a seção 2 (regras de ouro). Não são negociáveis, valem para todo projeto.
3. Identifique a etapa da tarefa na seção 3 e carregue apenas os módulos
   indicados.
4. Ao terminar, registre no checkpoint do projeto conforme a seção 7.

**Módulos de referência** (ler sob demanda, não todos de uma vez):

| Arquivo | Quando ler |
| --- | --- |
| `references/01-mapa-arquivos-e-bases.md` | Sempre que precisar localizar um insumo, uma base ou o nome canônico de um arquivo |
| `references/02-dicionario-de-dados.md` | Modelagem do formulário de coleta, validação da base bruta, modelagem do Power BI |
| `references/03-livro-de-calculos.md` | Qualquer cálculo estatístico ou índice. É a fonte única de verdade das fórmulas |
| `references/04-mbb-e-ia.md` | Estruturação de entregas, storyline do relatório, uso de IA no projeto |
| `references/05-arquitetura-entregaveis.md` | Escolha de stack (Excel, Power BI, HTML), cadeia de dados, conceito de release congelado, esqueleto de produção dos entregáveis |
| `references/06-storyline-relatorio-ppt.md` | Mapa slide a slide do relatório final e especificação de design do template visual ACTA |
| `skills/estatistica-remuneracao.md` | Tratamento estatístico, outliers, mínimos amostrais, percentis |
| `skills/matching-cargos.md` | Equivalência de cargos do cliente versus mercado, incluindo os padrões de problema já catalogados (escala, nomenclatura, critério de nível alternativo) |
| `skills/modelagem-planilhas.md` | Construção da base tratada e da tabela comparativa em Excel |
| `skills/dashboard-powerbi.md` | Modelo de dados, medidas DAX e publicação do painel |

Este plugin nasceu do case FJS (planejamento) e do case PASB (concluído). O
racional de cada decisão de generalização está em `../ESTUDO-BENCHMARKING.md`,
um nível acima desta pasta. Ao encontrar uma situação nova que pareça específica
demais para este template, ler esse estudo primeiro: ele explica o critério de
quando uma prática de um caso sobe para regra geral.

## 1. Cartão de identidade do projeto (preencher no início de cada projeto)

| Item | Definição |
| --- | --- |
| Cliente | `{{NOME_CLIENTE}}` |
| Executor | ACTA Advisory / ACTA Consulting |
| Instrumento | `{{CONTRATO_OU_PROPOSTA_REF}}` |
| Objeto | Pesquisa de Remuneração `{{ABRANGENCIA: Salário, Cargos, Benefícios...}}` |
| Escopo em cargos | `{{N_CARGOS}}` cargos, base de `{{DATA_BASE_ESCOPO}}` |
| Abrangência de remuneração | `{{Total Rewards: fixo + variável + benefícios + encargos, ou subconjunto}}` |
| Moeda(s) de trabalho | `{{MOEDA_REFERENCIA}}`. Se houver mais de uma, ativar `C-FX` no livro de cálculos |
| Regime(s) de jornada | `{{mensalista / horista / misto}}`. Se houver horista, ativar `C-HOR` |
| Recortes de comparação | `{{RECORTES}}` (geográfico, de porte, de setor, ou combinação; ver seção 3 de `matching-cargos.md`) |
| Mínimo amostral por recorte | `{{N_MINIMO_EMPRESAS}}` empresas respondentes (padrão sugerido: 12) |
| Método de matching | Por conteúdo do cargo, nunca por nomenclatura (regra fixa, não editar) |
| Critério de nivelamento | `{{senioridade / qualificação / tempo de casa / outro}}`, definido por família de cargo |
| Segmentações obrigatórias internas | `{{ex.: unidade própria vs. contrato de gestão; escola regional vs. nacional}}` |
| Duração contratada | `{{DURACAO}}` |
| D0 | `{{DATA_INICIO}}` |
| Entregáveis finais | `{{lista, ver references/05-arquitetura-entregaveis.md}}` |
| Sponsor do cliente | `{{NOME, CARGO}}` |
| Ponto focal do cliente | `{{NOME, CARGO}}` |
| Responsável técnico ACTA | `{{NOME}}` |

### Particularidades estruturais do cliente que mudam a metodologia

Preencher esta subseção com o equivalente, para o cliente atual, das quatro
particularidades identificadas no case FJS (porte incomum, nomenclatura sem
equivalente de mercado, estrutura de gestão centralizada, populações internas
heterogêneas) e do case PASB (moeda mista, horista, critério de nível por
qualificação, sub-painéis regional/nacional). Todo projeto tem pelo menos uma
particularidade que muda uma decisão técnica; identificá-la na Etapa 1 evita
descobri-la depois da coleta.

1. `{{particularidade 1 e sua implicação metodológica}}`
2. `{{particularidade 2 e sua implicação metodológica}}`
3. `{{particularidade 3 e sua implicação metodológica}}`

## 2. Regras de ouro (não negociáveis, valem para qualquer projeto)

**R1. Rastreabilidade total.** Nenhum número aparece em entregável sem que se
possa reconstruir a cadeia: linha da base bruta, regra de tratamento aplicada,
fórmula, resultado. Todo cálculo segue exatamente o
`references/03-livro-de-calculos.md`. Se um cálculo necessário não estiver lá,
escreva a definição no livro primeiro e depois calcule.

**R2. Nunca inventar dado de mercado.** Se um cargo não tem match suficiente ou o
n é abaixo do mínimo, o output é "amostra insuficiente", não uma estimativa. Não
há interpolação entre cargos, não há benchmark de memória, não há dado de fonte
pública apresentado como dado de participante.

**R3. Confidencialidade e sigilo por construção.** Nenhum output identifica o
dado de uma empresa individual. Nenhum participante aparece nominalmente
associado a um valor. Aplique os mínimos de agregação da seção 4 antes de
publicar qualquer estatística. Cláusulas contratuais de sigilo e a LGPD (Lei
13.709/18) valem para os dados dos participantes, não só para os do cliente
contratante.

**R4. Segmentação obrigatória.** Todo resultado é apresentado por, no mínimo, o
recorte principal do projeto. Quando envolver populações internas heterogêneas
do cliente (ver cartão de identidade), a segmentação também se aplica a elas.
Este princípio veio da FJS (unidade própria versus contrato de gestão) e do
PASB (escola regional versus nacional): é regra geral, não caso particular.

**R5. Escopo é escopo.** Atividades tipicamente fora do contrato de pesquisa de
remuneração: estrutura de cargos e carreira, tabela salarial, enquadramento,
PCCR, avaliação de desempenho, impactos trabalhistas, desenho organizacional,
treinamento, saneamento de bases, gestão de mudança e parametrização de
sistemas. Confirmar contra o contrato do projeto atual. Se o pedido cair nesses
itens, não execute: registre como Change Request e escale ao responsável
técnico.

**R6. Uma única data de referência.** Todos os valores de remuneração são
levados à data-base do projeto antes de qualquer comparação. Ver
`03-livro-de-calculos.md`, cálculo de atualização à data-base.

**R7. Português do Brasil, sem travessão.** Toda saída textual em pt-BR. Não
usar travessão nem hífen duplo como pontuação de pausa nos documentos do
projeto.

## 3. Fluxo por etapa: o que fazer e o que carregar

Adaptar os prazos de cada etapa ao contrato do projeto atual. A sequência lógica
abaixo é estável entre projetos; a duração não é.

### Etapa 1, Alinhamento e Preparação

| Tarefa | Módulos a carregar | Entrega |
| --- | --- | --- |
| Preencher o cartão de identidade (seção 1) | Este arquivo | Cartão de identidade sem placeholders |
| Fechar painel de participantes | `01-mapa-arquivos-e-bases.md`, `estatistica-remuneracao.md` (seção amostragem) | Matriz de amostragem com justificativa por participante |
| Plano de Comunicação com cenários | `04-mbb-e-ia.md` | Documento de decisão para o Sponsor (identidade, contrapartida, granularidade, tom, sigilo, cronograma) |
| Dicionário de dados e formulário de coleta | `02-dicionario-de-dados.md` | Formulário homologado com participante-piloto |
| Recebimento da base do cliente | `02-dicionario-de-dados.md`, `modelagem-planilhas.md` | Base carregada e validada |

Checklist de qualidade da Etapa 1: painel aprovado formalmente pelo Sponsor; NDA
assinado; repositório seguro provisionado; dicionário de dados validado por um
participante-piloto real, não apenas internamente.

### Etapa 2, Coleta e Consolidação

| Tarefa | Módulos | Entrega |
| --- | --- | --- |
| Convites, follow-up, substituições | `01-mapa-arquivos-e-bases.md` | Controle de participação atualizado periodicamente |
| Matching dos cargos do cliente | `matching-cargos.md` | Mapa de matching com grau de aderência e justificativa |
| Coleta de remuneração e benefícios | `02-dicionario-de-dados.md` | Base bruta por participante |
| Tabulação e tratamento | `estatistica-remuneracao.md`, `03-livro-de-calculos.md`, `modelagem-planilhas.md` | Base tratada assinada tecnicamente |

Gate de saída da Etapa 2: nenhuma estatística sai da base tratada antes de
passar os checks de consistência do `modelagem-planilhas.md`.

### Etapa 3, Análise e Recomendações

| Tarefa | Módulos | Entrega |
| --- | --- | --- |
| Congelamento do release | `05-arquitetura-entregaveis.md` | Base congelada com hash, consumida por todos os entregáveis |
| Competitividade e gaps | `03-livro-de-calculos.md`, `estatistica-remuneracao.md` | Análise por cargo, família, nível e recorte |
| Relatório final | `06-storyline-relatorio-ppt.md`, `04-mbb-e-ia.md` | PDF/PPT diagramado, apto a impressão |
| Tabela comparativa | `modelagem-planilhas.md` | Excel de consulta |
| Painel interativo | `dashboard-powerbi.md` | Power BI publicado (ou HTML de contingência, ver `05-arquitetura-entregaveis.md`) |
| Relatórios individuais | `04-mbb-e-ia.md` (seção participantes) | Um relatório por participante, na granularidade acordada |

## 4. Mínimos de agregação e anonimização (aplicar antes de publicar)

Padrão de mercado em pesquisas de remuneração conduzidas por terceiro
independente. Adote como regra técnica e submeta à validação do jurídico antes
da primeira divulgação de cada projeto, porque troca de informação sensível
entre concorrentes é tema de direito concorrencial (Lei 12.529/2011).

| Regra | Parâmetro | Consequência se não atendido |
| --- | --- | --- |
| n mínimo de empresas por dado publicado | 5 empresas distintas | Não publica estatística de posição, apenas sinaliza "amostra insuficiente" |
| n mínimo de observações individuais | 5 incumbentes | Publica apenas mediana e n, sem mín/máx |
| Concentração máxima de um participante | 25% das observações do cargo | Reponderar ou suprimir o dado |
| Identificação | Nenhum participante nominalmente ligado a valor | Bloqueio de publicação |
| Defasagem | Dados com data de referência definida e comum | Aplicar a regra de atualização à data-base |

Regra prática: se o leitor puder inferir o valor de um concorrente específico a
partir do output, o output está errado.

## 5. Mapeamento de arquivos e bases (visão geral)

Detalhe completo em `references/01-mapa-arquivos-e-bases.md`, que também traz o
protocolo de inventário de insumos a repetir em cada novo projeto.

**Bases a construir em todo projeto** (nomes canônicos): `B1_CARGOS_CLIENTE`,
`B2_ESTRUTURA_CLIENTE`, `B3_PAINEL_PARTICIPANTES`, `B4_MATCHING`,
`B5_COLETA_BRUTA`, `B6_BASE_TRATADA`, `B7_ESTATISTICAS`, `B8_COMPETITIVIDADE`,
`B9_BENEFICIOS`, `B10_LOG_AUDITORIA`.

## 6. Convenções operacionais

**Nomenclatura de arquivo:** `AAAAMMDD_Bn_NOME_vNN.xlsx`, exemplo
`20260901_B5_COLETA_BRUTA_v03.xlsx`. Data é a da versão, não a do dado.

**Códigos estáveis:** cada cargo do cliente recebe `CG-###` na ordem alfabética
da lista original e nunca muda, mesmo se o nome for corrigido. Cada empresa
participante recebe `EMP-##` e é sempre referida por esse código nas bases. A
tabela que liga código a nome real fica em arquivo separado, de acesso
restrito.

**Versionamento:** nenhuma sobrescrita de arquivo entregue. Nova versão, novo
sufixo, e uma linha em `B10_LOG_AUDITORIA` com data, autor, o que mudou e por
quê.

**Unidade monetária e temporal padrão:** definir no cartão de identidade (moeda
de referência, jornada de referência, FTE de referência). Toda conversão
cambial, de jornada ou de periodicidade é explícita e registrada.

**Um cálculo, um lugar:** estatística é calculada uma única vez, na base
tratada. Relatório, Excel de consulta e Power BI consomem o mesmo resultado.
Recalcular no slide é a principal fonte de divergência entre entregáveis.

## 7. Protocolo de checkpoint

Ao final de qualquer sessão de trabalho, atualize o checkpoint do projeto (ver
`CHECKPOINT_TEMPLATE.md` para o formato) com: o que foi concluído, arquivos
gerados ou alterados com versão, decisões metodológicas tomadas (e onde foram
registradas no livro de cálculos), pendências abertas com responsável, e o
próximo passo imediato. Em projetos com mais de um consultor, cada consultor
mantém seu próprio arquivo de checkpoint nos anexos do Project, além do arquivo
mestre na pasta do projeto, conforme detalhado no template.

## 8. Guarda-corpos

- Não emitir parecer jurídico, trabalhista ou tributário, salvo se estiver
  expressamente no escopo contratado.
- Não recomendar valor de remuneração individual para pessoa nomeada. A
  pesquisa informa faixas de mercado por cargo.
- Não tratar dado pessoal identificável de colaborador. A coleta é por cargo,
  em nível agregado. Se chegar planilha com nome, CPF ou matrícula, anonimizar
  na entrada e registrar o fato.
- Sinalizar imediatamente qualquer pedido que amplie escopo (R5).
