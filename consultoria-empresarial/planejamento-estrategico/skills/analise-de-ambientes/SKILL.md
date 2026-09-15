---
name: analise-de-ambientes
description: Analisar o ambiente externo e interno e fechar a matriz SWOT, os cenários e os vetores de mudança priorizados. Acionar ao montar o panorama macro e setorial, ao mapear concorrência e barreiras, ao conduzir o WS2 de SWOT, ou ao construir cenários em vez de extrapolar o ano corrente.
---

# Análise de ambientes — o WS2

## Subordinação

Esta skill é de **projeto**. O método transversal da firma vive em `acta-way` — carregue-a para o
protocolo de checkpoint entre sessões e consultores, para as convenções de entregável e para a regra
de anonimização. O **método de prática** (pesquisa, entrevista de especialista, diagnóstico as-is)
virá de `acta-metodo-consultoria` quando ele sair do esqueleto; até lá, o que estiver aqui é o
particular do planejamento estratégico.

> Se `acta-way` não estiver instalado, avise o usuário em vez de improvisar o protocolo:
> `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.

Aqui é onde a tentação de reensinar teoria é maior — e onde a regra é mais firme. **Julgamento
estratégico não se resolve nesta skill.** Por que este setor rende o que rende, se a concentração
observada é barreira ou é acidente, se a vantagem desta empresa é fosso ou é posição transitória,
quando abandonar uma vantagem em erosão: tudo isso é pergunta de lente. Carregue
`acta-pensadores-de-negocios`, skill `lentes`, e deixe a roteadora escolher entre Porter, Greenwald,
McGrath, Collins e os demais. Esta skill entrega o **levantamento estruturado** contra o qual essas
lentes são aplicadas.

A mecânica da sala está em `workshops-de-planejamento`.

## O que esta skill entrega

Três produtos, nesta ordem: o **panorama de ambientes** (externo e interno), os **cenários** e a
**matriz SWOT validada em sala**, com os vetores de mudança priorizados por negócio. É o insumo
direto do mapa estratégico do WS3 — todo objetivo do mapa tem que ser rastreável a um item daqui.

## 1. Ambiente externo

### 1.1 Macro: três colunas, nunca uma

O quadro macroeconômico do plano se lê em **três colunas — último ano fechado, ano corrente
estimado, próximo ano projetado** — e em quatro blocos:

| Bloco | Indicadores que entram |
|---|---|
| **Atividade** | PIB real e nominal, e a abertura por agricultura, indústria e serviços; consumo privado e do governo; investimento; exportações e importações |
| **Trabalho, inflação e juros** | Desemprego (fim de período e média), IPCA, IGP-M, taxa básica |
| **Setor externo** | Balança comercial, conta corrente, investimento direto, reservas, câmbio (fim de período e média) |
| **Fiscal** | Resultado primário e nominal, dívida líquida e bruta em proporção do PIB |

Duas regras que fazem esse quadro valer alguma coisa:

- **Fonte única e declarada, com data.** Casa de análise, boletim de expectativas, organismo
  multilateral — escolha uma, cite no rodapé de todo slide e não misture. Números de fontes
  diferentes na mesma tabela produzem a discussão errada.
- **Cada linha só entra se alguém puder dizer o que ela faz com este negócio.** Um quadro macro que
  a sala lê e não consegue traduzir em consequência é slide de abertura, não análise. Escreva a
  implicação no próprio slide.

Selecione **a abertura que importa para este setor**. Para negócio que vende bem de capital, juros e
crédito dominam. Para negócio exposto a insumo importado, câmbio e cadeia global dominam. Para
negócio de infraestrutura, investimento público e programas de financiamento dominam.

### 1.2 Programas públicos e linhas de financiamento

Em mid-market brasileiro este bloco rende mais do que o quadro macro, e quase sempre é o que é
pulado. Levante, com valor anunciado, prazo e condição de elegibilidade: programas federais de
investimento e o recorte regional pertinente; linhas de financiamento de bens de capital e as
condições reais (prazo, carência, exigência de conteúdo nacional); programas setoriais e estaduais.

O achado típico é útil: mesmo em cenário de juros altos, programas específicos criam **bolsões de
demanda** e financiamento subsidiado para um recorte do portfólio. Isso muda priorização de
segmento — e é exatamente o tipo de coisa que nenhuma leitura macro agregada mostra.

### 1.3 Choques de cadeia e dependências

Levante as dependências estruturais que podem parar a operação em semanas, não em anos: componente
crítico com fornecimento concentrado, insumo sujeito a restrição de exportação, fornecedor único,
regulação em mudança. Para cada uma, escreva a **implicação por unidade de negócio, separadamente** —
o mesmo choque atinge negócios diferentes do mesmo grupo por mecanismos diferentes, e a resposta
estratégica de cada um é diferente.

Isto é diagnóstico de exposição, não previsão. O produto é uma lista de dependências com o prazo em
que cada uma se manifesta; se ela vai se manifestar é matéria de cenário.

### 1.4 Análise competitiva

Por mercado relevante — e mercado relevante costuma ser mais estreito do que a sala supõe:

- **Segmentação e tamanho de cada segmento**, com a participação de cada um no total.
- **Participação de mercado dos principais competidores**, no segmento certo. Concentração medida no
  mercado inteiro esconde a estrutura que interessa.
- **Barreiras de entrada e de saída** observáveis: escala mínima, capital imobilizado, certificação,
  rede de distribuição, contrato de longo prazo, relação com fabricante.
- **Vantagem competitiva declarada de cada concorrente** — como o próprio mercado a descreve.
- **Movimentos recentes**: entrada, saída, consolidação, mudança de modelo.

E **pare aqui**. Interpretar essa estrutura — se a concentração é fosso sustentável, se o recorte de
segmento onde a empresa é forte é defensável, se a posição intermediária é vantagem ou é terra de
ninguém — é o trabalho da lente. Traga a estrutura levantada e chame `acta-pensadores-de-negocios`.

> **Fronteira com M&A.** `acta-ma-sell-buy-side`, skill `estudo-setorial`, também produz tese
> setorial, panorama de mercado e análise competitiva. **O objetivo é outro e o formato não se
> reaproveita.** Lá o estudo existe para sustentar um múltiplo diante de um comprador: é argumento de
> venda, otimizado para o lado comprador enxergar a tese. Aqui o estudo existe para a liderança
> decidir para onde a empresa vai: precisa expor a fraqueza com o mesmo cuidado com que expõe a
> oportunidade. Um panorama de venda usado como diagnóstico interno produz plano construído sobre o
> próprio marketing.

### 1.5 Vetores de mudança

Vetor de mudança é uma força estrutural que altera as regras do setor ao longo do horizonte do
plano — digitalização da cadeia, servitização, conectividade de ativos, escassez de mão de obra,
mudança regulatória, transição energética, consolidação.

O método tem três passos, e o terceiro é o que quase sempre falta:

1. **Levantar** o conjunto de vetores do setor, a partir de pesquisa setorial e de entrevista com
   especialista.
2. **Priorizar** — cinco no máximo, e **por unidade de negócio**. O mesmo grupo prioriza vetores
   diferentes para negócios diferentes, e isso é sinal de que a análise está certa.
3. **Traduzir em implicação específica.** *"Servitização"* não é um achado. *"Expandir para receita
   recorrente — consórcio, seguro, seminovo e locação — porque a margem de produto novo está sendo
   comprimida pelo canal"* é um achado, e vira objetivo no WS3.

Um vetor que não sobrevive à tradução do passo 3 sai da lista. Vetor genérico em slide é o material
que mais consome tempo de sala e menos produz decisão.

## 2. Ambiente interno

Espelho do externo, e com a mesma exigência de evidência:

- **Capacidades instaladas**: técnica, comercial, operacional, de gestão, financeira, de pessoas.
- **Competências-chave** — o que a empresa faz que o concorrente não replica rápido, dito como
  capacidade, não como posição.
- **Desempenho recente**: rentabilidade por linha, produtividade, ocupação de ativo, concentração de
  carteira, estrutura de capital.
- **Lacunas de gestão**: governança, retaguarda, sistema, informação gerencial, ritmo de decisão.

**Percepção e fato andam em colunas separadas.** *"Perdemos produtividade"* é percepção até virar
número; a entrevista levanta, a análise interna verifica. Uma fraqueza que atravessa o WS2 sem
verificação vira objetivo com meta inventada no WS4.

**O caso frequente que merece atenção:** a vantagem competitiva que a liderança declara costuma ser
uma **posição de mercado** — *"somos médios, ganhamos dos pequenos e não disputamos com os
grandes"* — e não uma capacidade. Pode ser verdade e ser frágil ao mesmo tempo, porque posição
intermediária é exatamente o lugar que consolidação elimina. Registre como declarado, leve para a
lente e devolva à sala no WS2 como pergunta, não como veredito.

## 3. Cenários

Cenário não é o ano corrente com margem de mais ou menos dez por cento. Extrapolar o passado recente
é planejamento por previsão; o plano precisa de planejamento por cenários — preparar a empresa para
múltiplos futuros em vez de acertar um.

Método enxuto que cabe em cinco semanas:

1. Separe o que se **sabe** (estrutura de custo, contrato em carteira, capacidade instalada,
   regulação vigente) do que é **incerteza** (trajetória de juros, decisão de investimento de cliente
   âncora, movimento de consolidação, mudança regulatória em curso).
2. Escolha **as duas incertezas de maior impacto e maior imprevisibilidade**. Só duas — três já
   produz oito quadrantes e nenhuma decisão.
3. Monte três cenários nomeados, com a implicação de cada um para receita, investimento e estrutura.
4. Para cada cenário, registre **o gatilho observável** que dirá qual está se materializando, e a
   resposta preparada. É isto que separa cenário de exercício de imaginação — e é o que a reunião de
   acompanhamento vai monitorar.

## 4. A matriz SWOT

Fecha o WS2 e é a ponte para o mapa estratégico. Quatro perguntas, e a formulação importa:

| | Origem interna | Origem externa |
|---|---|---|
| **Favorável** | **Forças** — o que fazemos que gera vantagem em relação aos competidores? | **Oportunidades** — que acontecimentos favoráveis de mercado podem gerar crescimento? |
| **Desfavorável** | **Fraquezas** — que deficiências significativas temos em relação aos competidores? | **Ameaças** — que condições de mercado podem impactar negativamente o negócio? |

Regras que evitam a SWOT decorativa:

- **Toda força e fraqueza é relativa ao competidor.** "Temos boa equipe técnica" não é força até
  estar dito contra quem.
- **Uma SWOT por negócio**, quando há mais de uma unidade. Consolidar SWOT de negócios diferentes
  produz matriz que não orienta nenhum deles.
- **Cada item vem de uma evidência levantada** nas seções 1 e 2, e carrega a referência.
- **Cinco a sete itens por quadrante.** Lista de vinte é inventário, não priorização — use a votação
  do workshop para cortar.
- **Item que não gera objetivo no WS3 é ruído.** Na revisão final, marque cada item da SWOT com o
  objetivo que ele originou; o que ficar órfão, ou vira objetivo ou sai da matriz.

## 5. Fronteiras

| Pergunta | Onde se resolve |
|---|---|
| Que lente aplicar ao julgamento competitivo, à durabilidade da vantagem, à leitura de estrutura setorial | `acta-pensadores-de-negocios`, skill `lentes` |
| Tese setorial para sustentar múltiplo em transação | `acta-ma-sell-buy-side`, skill `estudo-setorial` — propósito diferente, não reaproveite |
| Percepções de mercado colhidas antes do WS2 | `diagnostico-de-posicionamento` |
| Kit, pré-leitura, votação e ata | `workshops-de-planejamento` |
| Transformar SWOT e cenários em objetivos | `direcionadores-e-objetivos` |
| Fontes, citação e identidade visual do deck | `acta-way` |
