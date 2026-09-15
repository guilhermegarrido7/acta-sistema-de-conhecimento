# Pensadores de Negócios

Biblioteca de lentes teóricas de estratégia, valor, gestão, mercado e tecnologia, roteadas por tipo
de pergunta e não por autor.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`) — é onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Status: completo.** 15 skills escritas — uma roteadora e 14 lentes.
> Publicado em `marketplace.json`. Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Dá acesso a um conjunto de lentes analíticas consagradas — Porter, Greenwald, Koller, Christensen,
Prahalad, McGrath, Collins e outras — organizadas pela **pergunta que cada uma responde**, não pelo
nome do autor. O plugin resolve um problema recorrente: usar o framework errado para a pergunta
certa. Cinco forças explica a rentabilidade média de um setor; não explica por que uma empresa
específica supera essa média. São perguntas diferentes, com lentes diferentes.

## Como se usa

Só uma skill é invocável: **`lentes`**, a roteadora. As 14 lentes de pensador são
`user-invocable: false` e carregam a partir dela — assim o menu de comandos não fica poluído com 14
nomes de autor.

O protocolo da roteadora tem quatro passos, e o terceiro é obrigatório: antes de aplicar qualquer
lente, ela apresenta de 2 a 4 candidatas dizendo **o que cada uma enxerga e o que cada uma ignora**,
e pergunta pelo contexto. Escolher a lente é parte da análise, não preliminar dela.

## Skills

| Skill | Pergunta que responde |
|---|---|
| `lentes` | **Roteadora.** Qual lente serve a esta análise, e o que ela deixa de fora? |
| `michael-porter` | Por que a rentabilidade média deste setor é alta ou baixa? |
| `bruce-greenwald` | Existe barreira de entrada real, a única força capaz de sustentar retorno acima do custo de capital? |
| `tim-koller` | O crescimento proposto cria ou destrói valor? Quem é o melhor proprietário deste ativo? |
| `clayton-christensen` | A empresa está presa à própria estrutura de custos e margem-alvo? Que trabalho o cliente contrata? |
| `ck-prahalad` | O que é competência organizacional, o que é ativo, e o que é dependência do fundador? |
| `rita-mcgrath` | E se a vantagem for transitória? Qual é a arena, e não o setor? |
| `jim-collins` | Qual é o motor econômico único e o volante de crescimento da empresa? |
| `jack-welch` | Este negócio é nº 1 ou nº 2 no mercado que de fato disputa? |
| `tom-peters` | A organização está alinhada nos 7S — estratégia, estrutura, sistemas, pessoal, estilo, habilidades, valores? |
| `philip-kotler` | Como se estrutura mercado e demanda por STP, mix, jornada e valor do cliente? |
| `ram-charan` | O básico fecha: caixa, margem, giro, crescimento e cliente? |
| `sangeet-choudary` | Qual é a interação central deste negócio de dois lados, e o efeito de rede vence a escala? |
| `elon-musk` | Qual é a restrição física real, decomposta de baixo para cima? |
| `dario-amodei` | Como a trajetória de capacidade de IA muda custo, preço e vantagem competitiva deste negócio? |

## Fronteira com os demais plugins

`tim-koller` é a **lente de julgamento** — se o crescimento cria valor, se o múltiplo se justifica,
quem é o melhor proprietário. A **mecânica** correspondente (NOPLAT, capital investido, DCF, valor
terminal, múltiplos, ajustes CPC/IFRS) vive em `acta-modelagem-economico-financeira`, na skill
`fundamentos-koller`. Pergunta de cálculo vai para lá; pergunta de julgamento fica aqui.

## Convenções

Este plugin segue as convenções do repositório. Ver [CONVENCOES.md](../../CONVENCOES.md).
