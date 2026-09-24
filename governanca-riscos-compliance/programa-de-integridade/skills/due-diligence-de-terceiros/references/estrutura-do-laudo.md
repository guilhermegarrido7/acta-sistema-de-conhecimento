---
titulo: Estrutura do laudo de avaliação de risco de terceiro
---

# Estrutura do laudo de avaliação de risco de terceiro

Padrão da casa para o Modo A, o background check de homologação. A ordem importa: as ressalvas
vêm antes do resultado, porque o leitor que pula direto para a nota precisa esbarrar no que ela
não significa.

Nenhum exemplo abaixo traz nome real. Onde o laudo nomeia, este arquivo escreve "o terceiro
avaliado" e "a Companhia contratante".

## 1. Capa

- Título do trabalho e identificação do terceiro avaliado.
- **Classificação de confidencialidade em destaque.** O laudo é de uso interno da contratante e não
  se divulga, inclusive para o próprio terceiro pesquisado.
- **Ressalva de não recomendação, na própria capa**: o relatório não é recomendação de aplicação de
  penalidade nem de interrupção de fornecimento ou de relacionamento. É resumo de informação
  pesquisada conforme escopo e critérios especificados pela contratante, para uso na análise e
  decisão dela.

## 2. Dados da pesquisa

Declara de onde veio a informação e o que ela não alcança:

- As fontes são bureaus de consulta pública e órgãos de Poder, além de cadastros de proteção ao
  crédito, tendo como chave os dados cadastrais do terceiro (razão social ou nome, número de
  inscrição da pessoa jurídica e da pessoa física, e nomes do quadro societário).
- Ainda que as fontes tenham abrangência alta, **não é possível esgotar todas as possibilidades de
  avaliação de risco** para a contratante. Essa frase não é formalidade. É o que impede o laudo de
  ser lido como certificado.

## 3. Dados cadastrais

Bloco factual, todo ele confrontável com o comprovante de inscrição anexado ao dossiê:

razão social ou nome · número de inscrição · situação cadastral na receita e a data dela · data de
abertura · atividade principal · natureza jurídica · endereço · contato · quadro societário com
nome e qualificação de cada integrante.

O comprovante de inscrição entra como imagem no corpo, e como arquivo no dossiê.

## 4. Critérios para avaliação de risco

Declara que a classificação usa o **Dicionário de Riscos da ACTA**, com a estrutura de quatro
componentes (Estratégico, Financeiro, Operacional, Regulamentar) segregados em grupos e categorias.
A definição do dicionário vive em `acta-gestao-de-riscos:taxonomia-de-riscos`, e o laudo remete a
ela em vez de reescrevê-la.

Em seguida, a tabela de **categorias dentro do escopo com a descrição do que foi verificado em
cada uma**. Essa tabela é o contrato de leitura do laudo: ela diz o que a nota de cada categoria
significa. Exemplo de granularidade esperada, sem nomear ninguém:

| Categoria | O que foi verificado |
|---|---|
| Compliance | Aderência a exigência legal padrão (certidão negativa, alvará) e a exigência específica da atividade fim do terceiro; atividade executada em desacordo com norma, política, legislação ou regulamentação |
| Reputação e Imagem | Degradação de reputação por exposição do terceiro ou de seus sócios |
| Fluxo de Caixa | Indicadores de liquidez sobre o balanço do terceiro, e a dependência econômica dele em relação à contratante, medida pela representatividade do contrato no faturamento |
| Obrigações Contratuais | Conformidade das atividades de controle na gestão dos contratos ativos (assinatura, vigência, validade de tabela de preço) e aderência da contratação ao procedimento da contratante |
| Trabalhista e Previdenciário | Práticas aparentemente incompatíveis com a legislação ou com acordo de trabalho; processos identificados em fonte pública; não conformidade perante órgão fiscalizador nas três esferas |

## 5. A estrutura completa do dicionário, com sinalização

O laudo reproduz a estrutura inteira das 52 categorias e **sinaliza as que tiveram abrangência**
nas consultas realizadas. Sem isso, o leitor lê silêncio como ausência de risco. A sinalização é o
que torna honesto um escopo parcial.

## 6. Sumário executivo

Tabela de três colunas: **componente do risco · categoria · avaliação do risco**, com a legenda da
escala de quatro níveis (Limitação de Escopo, Baixo, Médio, Alto). A escala é a de
`acta-gestao-de-riscos:avaliacao-impacto-probabilidade` §5, e Limitação de Escopo não é grau de
risco, é declaração de que a categoria não pôde ser avaliada.

## 7. Ocorrências encontradas

Os contadores, em destaque visual, apurados sobre a inscrição do pesquisado:

- protestos
- processos judiciais
- fontes consultadas sem ocorrência
- fontes que retornaram informação
- situação cadastral na receita

Cada número tem de fechar com o dossiê e com o corpo do laudo.

## 8. Resultados detalhados

- **Perfil do quadro societário**: sócios, e as demais empresas em que aparecem, com os respectivos
  quadros. Quando a busca não encontra outras relações relevantes, o laudo diz isso de forma
  expressa, e não omite a seção.
- **Análise de endereço físico**: o endereço declarado no cadastro e no sítio do terceiro é
  confrontado com imagem de rua e com vista de satélite. O que se procura é incompatibilidade entre
  a atividade declarada e o que existe no local: endereço residencial, escritório virtual, imóvel
  compartilhado por várias empresas, lote vazio. Quando o local exibe identificação visual do
  terceiro compatível com a atividade, isso é evidência favorável e se registra com a imagem.
- **Pesquisa em mídias digitais**: sítio, redes sociais e busca aberta. O que interessa não é a
  estética da presença digital: é a existência de operação real, a data da última manifestação, e a
  ausência ou presença de conteúdo negativo. Presença digital desatualizada há muito tempo em
  terceiro que deveria estar operando é sinal, não detalhe.
- **Consulta a cadastros restritivos**: empresas punidas pelo órgão federal de controle interno,
  cadastro de empregadores flagrados em trabalho análogo ao de escravo, e embargo ambiental do
  órgão federal de meio ambiente. O laudo nomeia cada cadastro consultado, mesmo sem ocorrência.
- **Certidões de débito** nas esferas federal, municipal e estadual. Certidão que não pôde ser
  emitida vira Limitação de Escopo na categoria correspondente, com o motivo. Débito com
  exigibilidade suspensa se registra como tal, e não como inadimplência.
- **Portal da transparência**: recursos públicos recebidos, participação em licitação e resultado
  dela, sanção registrada. Participação em licitação sem êxito não é ocorrência negativa, e o laudo
  precisa dizer isso para não induzir leitura errada.

## 9. Anexo: produto do trabalho, limitações e sigilo

**Produto do trabalho.** O relatório resume o resultado de pesquisa de registro em fonte pública e
privada, incluindo processo judicial, situação de crédito, participação societária e mídia
eletrônica. O foco é registro confirmável pelos números de inscrição de pessoa jurídica e física.
O papel da casa foi **executar as consultas e aplicar os critérios especificados pela contratante**,
que definiu escopo, itens consultados e critérios de classificação. Repete-se aqui a ressalva de
não recomendação da capa.

**Limitações.** Escrever todas, sempre:

- Pesquisa de processo judicial e de certidão fiscal depende da publicidade e da cobertura da base.
- Pode existir informação relevante indisponível ou não localizada, e não é possível confirmar a
  totalidade nem a veracidade do que se obtém em consulta em linha.
- Processo em segredo de justiça não aparece em busca aberta.
- O escopo de informação pública varia por jurisdição. A pesquisa é dirigida a pessoa e entidade
  domiciliada no país; domicílio no exterior exige envolvimento de equipe na jurisdição respectiva.
- Dado cadastral incompleto ou incorreto sobre o objeto de pesquisa compromete o resultado.
- **Repetir a pesquisa pode produzir resultado diferente**, por alteração das bases. A casa não
  responde por divergência decorrente de alteração ou supressão de informação pela base entre
  consultas.
- A avaliação usa somente dado público coletado na metodologia validada pela contratante, que a
  considera suficiente para a decisão dela.
- A frequência de atualização da pesquisa é responsabilidade exclusiva da contratante.
- A casa se reserva o direito de atualizar o relatório se novo fato se tornar público.

**Dado pessoal.** O trabalho pode identificar dado pessoal tutelado por direito de personalidade e
informação protegida por sigilo legal. Esse conteúdo **não compõe o conjunto entregue** e é
salvaguardado pelas partes, salvo por determinação legal específica.

**Definição dos pesquisados.** A contratante é a única responsável pela definição dos nomes e
entidades a pesquisar.

**Sigilo.** O resultado é de uso exclusivo da contratante e não se compartilha com terceiros.
