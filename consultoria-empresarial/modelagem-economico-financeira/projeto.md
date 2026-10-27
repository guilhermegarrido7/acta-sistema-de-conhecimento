---
titulo: Modelagem Econômico-Financeira
pratica: consultoria-empresarial
duracao_tipica: 4 a 8 semanas
plugin: acta-modelagem-economico-financeira
---

## O que é, e quando a ACTA é contratada para isso

Um trabalho de modelagem econômico-financeira constrói e julga um modelo completo no framework
Koller/McKinsey: reorganiza as demonstrações contábeis em NOPLAT e capital investido, diagnostica a
criação de valor pelo ROIC contra o WACC, projeta mercado e cenários, calcula o custo de capital,
fecha o valor terminal, triangula a faixa de valor e entrega o relatório de valuation na identidade
da casa. O entregável é a **faixa de valor defensável** — nunca um número único — com o argumento de
cada extremo e o modelo que a sustenta, auditável célula a célula.

O que distingue o método é a inversão em relação à projeção de DRE com múltiplo colado no fim: aqui o
eixo é econômico. A DRE e o balanço que a empresa entrega respondem a uma pergunta fiscal e
societária; o valuation responde a outra — *quanto capital está empregado na operação e quanto ela
devolve sobre esse capital.* Sem a reorganização, não há ROIC; sem ROIC, não há como separar o
crescimento que cria valor do que destrói. As skills operam como oráculo: direcionam, questionam e
revisam, mas quem digita na planilha é o analista, porque quem corrige precisa entender o erro e
porque a rastreabilidade do modelo não pode passar por terceiros.

A firma costuma ser contratada em três situações:

- **Uma transação precisa de valuation.** Como insumo de um mandato de M&A (sell ou buy-side), para
  fundamentar o múltiplo-alvo, a faixa e o teto do comprador.
- **O acionista ou o conselho quer saber quanto o negócio vale, e por quê.** Decisão de captação,
  entrada ou saída de sócio, sucessão — valuation standalone com a tese de valor explicitada.
- **Um modelo existente precisa ser auditado antes de ir à mesa.** A revisão em três camadas
  (robustez técnica, consistência econômica, plausibilidade) antes da due diligence do comprador.

## As etapas do ciclo de vida

Uma skill por etapa, na ordem de construção. `fundamentos-koller` não é etapa: é a camada teórica
(`user-invocable: false`) que as demais carregam sob demanda quando o conceito exato é necessário.

| # | Etapa | O que fecha a etapa |
|---|---|---|
| 1 | Reorganização contábil | As demonstrações em base NOPLAT e capital investido, com a reconciliação obrigatória entre as duas perspectivas |
| 2 | Qualidade de resultados | O EBITDA normalizado nas quatro famílias de ajuste, com a tabela de add-backs auditável |
| 3 | Diagnóstico de ROIC | O veredito de criação de valor: decomposição margem × giro, lucro econômico, spread contra o WACC e duração da vantagem (CAP) |
| 4 | Custo de capital | O WACC em reais defendido: CAPM com beta setorial realavancado, risco-país, prêmio de porte, iliquidez e custo de dívida sintético |
| 5 | Capital de giro e CapEx | Os cronogramas operacionais coerentes com o ROIC, e o CapEx separado entre manutenção e expansão |
| 6 | Impostos e prejuízos fiscais | A linha de impostos com regime, alíquota efetiva, corrente e diferido, e o prejuízo fiscal aproveitado no limite de 30% |
| 7 | Projeção de mercado e equity story | A tese de crescimento sabatinada: mecanismo de mercado e de participação, antes de travar o número |
| 8 | Projeção e cenários | A projeção de resultado e caixa em cenários, com a coerência crescimento × reinvestimento imposta pelo ROIC |
| 9 | Saúde de crédito | O diagnóstico de endividamento, cobertura e capacidade de dívida (EBITDAR quando há arrendamento) |
| 10 | Valor terminal | O `g` escolhido e defendido pela fórmula dos value drivers, com os testes de convergência rodados |
| 11 | Triangulação e faixa | O football field entre DCF, múltiplos e precedentes, com a ponte de EV para equity value |
| 12 | Revisão de modelo | A bateria das três camadas rodada em modo somente-leitura, com as falhas apontadas |
| 13 | Relatório de valuation | O deck no padrão da casa, com títulos-asserção e a faixa apresentada |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**Projeta-se a DRE e cola-se um múltiplo no fim.** Sem a reorganização em NOPLAT e capital investido,
não existe ROIC, e sem ROIC não se sabe se o crescimento cria ou destrói valor. *Prevenção:* a
reorganização contábil é a etapa 1, com a reconciliação entre as duas perspectivas fechada antes de
qualquer projeção.

**Premia-se crescimento num negócio cujo ROIC está abaixo do WACC.** Aí crescer destrói valor, e um
plano de expansão agressivo torna a empresa menos valiosa, não mais — muda o sinal da recomendação
inteira. *Prevenção:* o diagnóstico de ROIC antes da projeção, para saber se o modelo deve premiar
ou penalizar crescimento.

**O número de crescimento não tem mecanismo.** "O mercado cresce 12% ao ano" é torcida disfarçada de
premissa, e cai no primeiro comprador cético. *Prevenção:* a equity story escrita — de onde vem o
crescimento de mercado, de onde vem o ganho de participação — sabatinada antes de travar no modelo.

**O valor terminal embute o impossível.** Ele responde por metade a três quartos do enterprise value,
e um `g` de 5,5% em vez de 3,5% não parece nada num slide mas domina o preço. *Prevenção:* o `g` pela
fórmula dos value drivers e os testes de convergência do spread ROIC-WACC — meia hora aqui vale mais
que uma semana refinando o ano 3.

**Entrega-se um número único.** Ele convida à negociação do próprio número e finge uma precisão que o
valuation de empresa fechada não tem. *Prevenção:* uma faixa com o argumento de cada extremo, com
metodologias que convergem — a conversa passa a ser *onde dentro da faixa*.

**Revisa-se a versão errada do modelo, ou se corrige a planilha por fora.** Modelo de valuation tem
versões, e revisar a errada é pior que não revisar; planilha alterada por terceiros perde
rastreabilidade. *Prevenção:* confirmar o caminho do arquivo com o usuário e revisar em modo
somente-leitura — a correção volta para o analista.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Modelo econômico-financeiro | Planilha auditável, base NOPLAT/capital investido, com cenários e sensibilidade | Interno e cliente (analista) |
| Tabela de normalização de EBITDA | Add-backs nas quatro famílias, com memória de cálculo | Vendedor / comprador |
| Diagnóstico de ROIC | Decomposição margem × giro, spread contra o WACC, duração da vantagem | Interno / tese de valor |
| Football field | Faixa triangulada entre DCF, múltiplos e precedentes, com a ponte EV → equity | Cliente / contraparte |
| Relatório de valuation | Deck no padrão da casa, com títulos-asserção e a faixa defendida | Acionista / conselho / contraparte |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador no acionista, no conselho ou na diretoria financeira, que
recebe o resultado e decide sobre ele; e pontos focais em controladoria e finanças que fornecem o
balancete analítico, o CapEx segregado e os parâmetros operacionais.

**Do nosso lado:** o analista que constrói e digita o modelo, e o consultor ou sócio responsável que
opera as skills como oráculo — direciona o método, contesta número implausível, defende o WACC e o
`g`, e valida a faixa antes de ela sair da casa. Quando a modelagem é insumo de um mandato de M&A, o
handoff com `acta-ma-sell-buy-side` é explícito.

## O que é preciso ter antes de começar

- **O balancete analítico em Excel**, sem o qual a reorganização contábil é só estimativa sintética.
- **As demonstrações dos últimos exercícios e o histórico de CapEx segregado entre manutenção e
  expansão**, para distinguir o negócio que converte EBITDA em caixa do que precisa investir para
  crescer.
- **Os parâmetros do setor e da estrutura de capital** (beta setorial, comparáveis, precedentes) que
  sustentam o WACC e a triangulação.
- **A tese de crescimento ou os elementos para construí-la**, porque a projeção precisa de mecanismo,
  não só de método.
- **`acta-way` instalado**, onde vive o checkpoint entre sessões e consultores.
