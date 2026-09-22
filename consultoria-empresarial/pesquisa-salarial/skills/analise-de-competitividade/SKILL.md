---
name: analise-de-competitividade
description: Analise a competitividade da remuneração do cliente contra o painel. Acionar ao calcular comparatio, gap e ajuste necessário, ao classificar posição na faixa, ao estimar custo de equalização em cenários, ou ao priorizar por criticidade versus gap.
---

# Análise de competitividade

Etapa 8. A estatística de mercado já existe em `B7_ESTATISTICAS`; esta etapa
confronta o cliente com ela e produz `B8_COMPETITIVIDADE`. É a primeira etapa em
que o projeto deixa de descrever o mercado e passa a afirmar alguma coisa sobre o
cliente, o que muda o padrão de prova exigido de cada número.

Carregue `metodo-pesquisa-salarial` antes desta skill: as regras de ouro, o cartão
de identidade do projeto e os mínimos de anonimização valem aqui integralmente e
não são repetidos. As fórmulas estão em `references/03-livro-de-calculos.md`,
Grupo 4 (C-16 a C-24), e o julgamento estatístico está em
`estatistica-remuneracao`. Nenhum dos dois é reescrito aqui: esta skill trata da
sequência de trabalho e das decisões que a sequência exige.

## 1. Antes de começar

Quatro coisas precisam estar fechadas. Se alguma faltar, a etapa não começa.

| Pré-condição | Por quê |
| --- | --- |
| `B7_ESTATISTICAS` aprovada nos checks de `modelagem-planilhas` | Comparatio sobre estatística não validada propaga erro em todo o relatório |
| Qual valor do cliente entra na comparação | Salário base, base mais adicionais fixos, ou remuneração total. Uma escolha por análise, declarada |
| Como o cliente é representado por cargo | Média dos incumbentes, mediana dos incumbentes, ou ponto médio da faixa vigente |
| Fator de encargos do cliente | Entra em C-20 e muda o custo de equalização em dezenas de pontos percentuais |

A segunda e a terceira decisão parecem detalhe e não são. Cliente com dispersão
interna alta num cargo (dois incumbentes, um com o dobro do outro) tem comparatio
muito diferente conforme se use média ou mediana. A convenção padrão do plugin é
média dos incumbentes para o cálculo e dispersão interna reportada ao lado, porque
a pergunta orçamentária é sobre a folha, não sobre o incumbente típico. Divergir
dessa convenção é possível, desde que registrado em `B10_LOG_AUDITORIA`.

## 2. Passo a passo

### 2.1 Montar a base de confronto

Uma linha por cargo do cliente, por recorte e por segmentação obrigatória do
cartão de identidade. Cargo sem amostra suficiente entra na base com a marca de
amostra insuficiente e sem valor calculado. Não apagar a linha: a ausência de
resultado é resultado, e o slide que declara o que não se pôde afirmar depende
dessa linha existir.

### 2.2 Calcular os índices por cargo

Na ordem, aplicando C-16, C-17 e C-18:

1. Comparatio contra mediana, contra Q1 e contra Q3.
2. Gap absoluto e gap percentual.
3. Ajuste necessário para a mediana, que não é o gap com sinal trocado.
4. Posição na faixa, quando o recorte tiver n suficiente para publicar mínimo e
   máximo.

O ajuste necessário é o número que vai para a conversa de orçamento. Publicar só
o gap percentual e deixar o cliente inferir o aumento produz subestimação
sistemática do custo, e a diferença cresce quanto maior o gap.

### 2.3 Classificar

C-24, cinco faixas, com a banda de alinhamento de 0,95 a 1,05. A escolha da banda
vai para a nota metodológica, porque ela é convenção e não resultado. Manter a
mesma escala em todos os artefatos: relatório, Excel e painel. Escala diferente
entre entregáveis é a divergência mais visível para o cliente e a mais barata de
evitar.

### 2.4 Agregar

C-19, ponderado por headcount, nos três níveis que o relatório usa: total do
cliente, família e nível funcional. Ponderar por headcount responde à pergunta de
exposição da folha. Se o cliente pedir também a média simples dos comparatios,
calcule e rotule como prática média por cargo, que é outra pergunta.

Cuidado recorrente: agregação que atravessa populações internas heterogêneas do
cliente viola a regra R4. Quando o cartão de identidade registra segmentação
obrigatória, o índice consolidado só existe segmentado, e o número único de capa
precisa dizer a que população se refere.

### 2.5 Atribuir causa a cada gap relevante

Todo gap que vai ao relatório recebe uma causa, e apenas uma, entre três:

| Causa | Como se reconhece | O que ela implica |
| --- | --- | --- |
| Composição | O cliente paga pouco de base e muito de adicional, ou o contrário | O gap de base some quando se compara remuneração total. Problema de desenho do pacote |
| Posicionamento | Cliente e mercado têm a mesma composição, e o cliente está sistematicamente abaixo | Decisão de política salarial. É o gap que o orçamento resolve |
| Escopo | O cargo do cliente cobre mais ou menos do que o cargo do mercado | Sintoma de matching, não de remuneração. Volta para `matching-cargos` antes de virar achado |

Gap sem causa atribuída não entra no relatório. Sem esse passo, a recomendação
sai genérica e o cliente responde com a explicação que o consultor deveria ter
levado pronta.

### 2.6 Estimar o custo de equalização

C-20, em três cenários obrigatórios: Q1, mediana e Q3. Regras que mudam o número
e precisam estar explícitas na planilha:

- Só entra cargo abaixo do alvo do cenário. Equalizar não reduz quem está acima,
  e supor redução produz um custo líquido que o cliente não vai executar.
- O multiplicador anual (13,33 na convenção do livro) e o fator de encargos
  aparecem como parâmetros de célula, nunca embutidos na fórmula.
- Cargo com amostra insuficiente fica fora do custo e é reportado à parte, com
  headcount, para que a diretoria saiba o tamanho do que não foi orçado.
- Efeito de cascata sobre a estrutura interna (quem está logo acima do cargo
  equalizado) não é calculado aqui. Isso é tabela salarial, fora de escopo pela
  regra R5, e vira nota de alerta no relatório.

### 2.7 Priorizar

Matriz de criticidade do cargo contra tamanho do gap, usando a camada de
criticidade definida na Etapa 1 (`references/04-mbb-e-ia.md`, A.4). O quadrante
de gap alto com criticidade alta é a recomendação de primeira onda. Cruze com o
Pareto de exposição financeira: em todo projeto, uma minoria de cargos concentra
a maior parte do custo, e a lista de ação precisa caber numa decisão de comitê.

### 2.8 Testar antes de fechar

Cinco testes rápidos que pegam quase todo erro desta etapa:

1. Recalcular por caminho independente uma amostra de vinte cargos (planilha
   contra script, ou o inverso).
2. Conferir que a soma dos custos por cargo bate com o total do cenário.
3. Verificar se algum comparatio caiu fora de uma faixa plausível (abaixo de 0,5
   ou acima de 2,0). Quase sempre é unidade, jornada ou matching, não realidade.
4. Confrontar os achados com as hipóteses escritas antes da coleta (A.3). Hipótese
   refutada é achado, e precisa entrar no relatório como tal.
5. Conferir que nenhum cargo abaixo do mínimo amostral recebeu comparatio.

## 3. Artefato e onde ele é gravado

`B8_COMPETITIVIDADE`, uma linha por cargo, recorte e segmentação, com as colunas
de índice, classificação, causa atribuída, custo por cenário e camada de
criticidade. Nome de arquivo pela convenção da seção 6 do método
(`AAAAMMDD_B8_COMPETITIVIDADE_vNN.xlsx`), gravado em `~~pasta de trabalho`, junto
às demais bases.

A base entra no release congelado junto com B7 e B9. A partir do congelamento,
relatório, Excel de consulta e painel leem daqui e não recalculam. Correção gera
novo release, nunca edição do arquivo congelado.

Registrar em `B10_LOG_AUDITORIA`: a escolha de representação do cliente, o fator
de encargos usado, a banda de alinhamento, as exclusões de cargo do cálculo de
custo e quem revisou.

## 4. Gate de qualidade

A etapa está concluída quando todas estas afirmações forem verdadeiras:

- Todo cargo do escopo tem uma linha em B8, com resultado ou com marca de amostra
  insuficiente, e nenhum cargo abaixo do mínimo recebeu índice publicado.
- Os três cenários de custo fecham, e o parâmetro de encargos e o multiplicador
  anual estão visíveis como célula.
- Todo gap que vai ao relatório tem causa atribuída entre composição,
  posicionamento e escopo.
- Nenhum índice agregado mistura populações internas que o cartão de identidade
  manda segmentar.
- Vinte cargos foram recalculados por caminho independente por um segundo
  consultor, com o resultado registrado no log.
- As hipóteses formuladas antes da coleta foram confrontadas com os resultados, e
  as refutadas estão anotadas para entrar no relatório.

## 5. Erros a evitar

- Confundir gap com ajuste necessário. É o erro de leitura mais caro do projeto e
  ele se propaga para o orçamento do cliente.
- Tratar a mediana como meta. A mediana é onde o mercado está; o posicionamento é
  decisão do cliente, e o relatório apresenta cenários.
- Recomendar contenção para cargo acima do mercado sem investigar escopo, tempo
  de casa e criticidade de reposição.
- Calcular custo de equalização líquido, compensando quem está acima com quem
  está abaixo. Nenhuma organização executa redução nominal, e o número fica
  irreal.
- Rodar a análise sobre B7 ainda não congelada e ter que refazer tudo depois do
  release.
- Deixar cargo com coeficiente de variação alto passar direto para o
  comparatio. Esse cargo volta para revisão de matching antes, conforme C-14.
- Publicar índice agregado de uma população heterogênea porque o número
  consolidado ficou mais apresentável.
