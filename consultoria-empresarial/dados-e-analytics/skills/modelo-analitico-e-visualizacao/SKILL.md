---
name: modelo-analitico-e-visualizacao
description: Monte o modelo analítico que lê a base por qualquer recorte e o painel que a diretoria consulta, e decida o que vale automatizar. Acionar ao montar tabela dinâmica ou modelo com SUMIFS, ao desenhar painel de indicadores, ao conectar a base ao Power BI, ou ao avaliar automatizar o pipeline de dados recorrente.
---

# Modelo analítico e visualização

Carregue `acta-metodo-consultoria` antes desta skill. Modele apenas sobre base validada, reclassificada
e, em grupo, consolidada: o painel bonito sobre dado errado é o jeito mais rápido de um número falso
chegar à diretoria com cara de verdade.

O modelo analítico é a camada que transforma a base tratada em respostas por qualquer recorte —
empresa, categoria, período, centro de custo. A visualização é como a resposta chega a quem decide. E
a automação é a pergunta que a consultoria AI-first faz ao fim: isto vai se repetir, vale virar
pipeline?

> Fronteira com `acta-pesquisa-salarial:dashboard-powerbi`: a construção técnica do painel em Power BI
> (modelo de dados, DAX, publicação) está detalhada lá. Esta skill traz a decisão analítica — o que o
> modelo precisa responder e como o painel comunica — e aponta para lá na execução do BI.

## 1. O modelo que responde por recorte

O modelo analítico se organiza para responder à pergunta de negócio por qualquer dimensão, sem
refazer conta. A estrutura da casa:

- **Uma base de fato única**, em formato longo (um lançamento por linha, com todas as dimensões em
  colunas: empresa, categoria, centro de custo, período, valor). É dela que tudo deriva.
- **As visões derivam por agregação**, não por cópia. Tabela dinâmica, ou `SUMIFS` por dimensão,
  lendo a base de fato. Nunca uma segunda base digitada à mão, que descola da primeira no dia
  seguinte.
- **Toda célula de resultado rastreia à base de fato**, que rastreia à origem (`ingestao-e-tratamento`).
  A cadeia inteira é auditável: do número no painel ao lançamento no extrato.

O teste do modelo: mudar uma dimensão (filtrar uma empresa, trocar o período) reflete em todas as
visões sem retrabalho. Se mudar o recorte exige refazer conta, o modelo está errado — é uma coleção
de planilhas, não um modelo.

## 2. A visualização orientada à decisão

O painel não é um mostruário de gráficos; é o instrumento que leva a resposta a quem decide. A
disciplina:

| Princípio | O que significa |
|---|---|
| **Começa pela pergunta** | O primeiro quadro responde a pergunta de negócio do escopo, não "a receita por mês" genérica |
| **Hierarquia de leitura** | Do número que decide (topo) ao detalhe que explica (drill-down), não tudo no mesmo nível |
| **Comparação, não valor solto** | Todo número contra uma referência (orçado, ano anterior, benchmark); valor sem comparação não informa |
| **Honestidade visual** | Eixo que começa em zero, escala que não engana, o dado que falta sinalizado e não escondido |

A regra da casa (`acta-way:identidade-visual`) vale: paleta, tipografia e contraste do padrão ACTA.
O painel é entregável, segue a identidade.

## 3. A decisão de automação

Aqui a consultoria AI-first se separa da tradicional. Terminado o projeto, a pergunta é: **este
trabalho vai se repetir?** Se a consolidação é mensal, se o tratamento de cartão é recorrente, se a
variação orçamentária roda todo fechamento — então o valor não está em refazer à mão todo mês, está
em **operacionalizar o pipeline**.

| Sinal | Decisão |
|---|---|
| Análise pontual, não se repete | Entregar o modelo e o painel; não automatizar |
| Recorrente, fonte estável | Vale pipeline: ingestão → tratamento → validação → consolidação automatizados, com o agente rodando o ciclo e o humano revisando o resultado |
| Recorrente, fonte instável | Automatizar o que é estável, manter o julgamento humano onde a fonte varia |

O pipeline AI-first não é "tirar o humano": é tirar o humano do trabalho determinístico (buscar,
normalizar, reconciliar) e mantê-lo no ponto de decisão (a classificação ambígua, a diferença não
resolvida, a leitura do resultado). O mesmo princípio de executor + checkpoint que atravessa o
método. Automatizar a reconciliação não dispensa a validação de `qualidade-e-validacao`; só a faz
rodar sozinha, com o humano aprovando a saída.

## 4. O que fica fora

Modelo analítico de dado financeiro gerencial **não é** modelo econômico-financeiro de valuation
(`acta-modelagem-economico-financeira`) nem orçamento (`acta-planejamento-orcamentario`). Aqui se lê
o que aconteceu, por recorte; lá se projeta o que vai acontecer. Quando o mandato cruzar — o painel
que mostra realizado contra orçado — a leitura é daqui, a projeção é de lá.

## O que entregar

1. A base de fato única em formato longo, com as dimensões em colunas, da qual todas as visões
   derivam por agregação.
2. O modelo analítico que responde por recorte (dinâmica ou SUMIFS), com rastreabilidade do resultado
   à origem.
3. O painel orientado à decisão, no padrão visual da casa, começando pela pergunta de negócio.
4. A recomendação de automação: o que vale virar pipeline recorrente e o que fica pontual, com o
   ponto de revisão humana declarado.

## Próximo passo

`insight-e-recomendacao`. O modelo e o painel mostram o quê; falta o porquê e o que fazer — o
deliverable que fecha o projeto é a decisão, não a ferramenta.
