---
titulo: Pensadores de Negócios
pratica: conceitos
duracao_tipica: Biblioteca de lentes — não é um engajamento
plugin: acta-pensadores-de-negocios
---

## O que é, e quando uma lente é carregada

`pensadores-de-negocios` é uma biblioteca de lentes teóricas de estratégia, valor, gestão, mercado e
tecnologia, roteadas pela **pergunta que cada uma responde**, não pelo nome do autor. Não é um tipo
de projeto: é um conjunto de lentes analíticas consagradas que uma análise carrega quando precisa.

O problema que resolve é recorrente: usar o framework errado para a pergunta certa. Cinco forças
explica a rentabilidade média de um setor; não explica por que uma empresa específica supera essa
média. São perguntas diferentes, com lentes diferentes. Só uma skill é invocável — **`lentes`**, a
roteadora; as 14 lentes de pensador são `user-invocable: false` e carregam a partir dela, para que o
menu de comandos não fique poluído com 14 nomes de autor. O protocolo da roteadora tem quatro passos,
e o terceiro é obrigatório: antes de aplicar qualquer lente, ela apresenta de 2 a 4 candidatas dizendo
**o que cada uma enxerga e o que cada uma ignora**, e pergunta pelo contexto. Escolher a lente é parte
da análise, não preliminar dela.

## As lentes disponíveis

Uma linha por lente, com a pergunta que ela responde — não a biografia do autor.

| Lente | A pergunta que ela responde |
|---|---|
| lentes (roteadora) | Qual lente serve a esta análise, e o que ela deixa de fora? |
| michael-porter | Por que a rentabilidade média deste setor é alta ou baixa? |
| bruce-greenwald | Existe barreira de entrada real, a única força capaz de sustentar retorno acima do custo de capital? |
| tim-koller | O crescimento proposto cria ou destrói valor? Quem é o melhor proprietário deste ativo? |
| clayton-christensen | A empresa está presa à própria estrutura de custos e margem-alvo? Que trabalho o cliente contrata? |
| ck-prahalad | O que é competência organizacional, o que é ativo, e o que é dependência do fundador? |
| rita-mcgrath | E se a vantagem for transitória? Qual é a arena, e não o setor? |
| philip-kotler | Como se estrutura mercado e demanda por STP, mix, jornada e valor do cliente? |
| sangeet-choudary | Qual é a interação central deste negócio de dois lados, e o efeito de rede vence a escala? |
| jim-collins | Qual é o motor econômico único e o volante de crescimento da empresa? |
| jack-welch | Este negócio é nº 1 ou nº 2 no mercado que de fato disputa? |
| ram-charan | O básico fecha: caixa, margem, giro, crescimento e cliente? |
| tom-peters | A organização está alinhada nos 7S: estratégia, estrutura, sistemas, pessoal, estilo, habilidades, valores? |
| elon-musk | Qual é a restrição física real, decomposta de baixo para cima? |
| dario-amodei | Como a trajetória de capacidade de IA muda custo, preço e vantagem competitiva deste negócio? |

## Como se usa no dia a dia

A lente entra numa análise competitiva, numa tese de investimento ou num diagnóstico sempre pela
roteadora `lentes`: descreve-se o problema, ela propõe as candidatas com o que cada uma vê e ignora,
e só então a lente escolhida é aplicada. Uma mesma análise pode combinar lentes — Porter para a
estrutura do setor, Greenwald para a barreira de entrada específica da empresa, McGrath para testar
se a vantagem é durável. A regra é que a escolha seja justificada pela pergunta, não pela preferência
pelo autor.

A fronteira com `acta-modelagem-economico-financeira` está declarada em `tim-koller`, que é a **lente
de julgamento**: se o crescimento cria valor, se o múltiplo se justifica, quem é o melhor
proprietário. A **mecânica** correspondente — NOPLAT, capital investido, DCF, valor terminal,
múltiplos, ajustes CPC/IFRS — vive no plugin de valuation, na skill `fundamentos-koller`. Pergunta de
cálculo vai para lá; pergunta de julgamento fica aqui.

## O que é preciso ter antes de usar

- **`acta-way` instalado** como pré-requisito, onde vive o mecanismo de checkpoint entre sessões e
  consultores — o manifesto de plugin não tem campo de dependência, então sem ele nenhum outro plugin
  da ACTA usa o checkpoint.
- **A pergunta a responder, enunciada com clareza**, porque é ela que roteia a lente: a biblioteca se
  organiza por pergunta, não por autor.
- **`acta-modelagem-economico-financeira` instalado** quando a análise de `tim-koller` precisar virar
  cálculo — é lá que a mecânica de valuation está.
