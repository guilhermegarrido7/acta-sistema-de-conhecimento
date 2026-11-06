# Matriz de decisões: custo de capital

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

---

## CC-01 · Rota da moeda do WACC

| Alternativa | Quando usar | Efeito | Risco |
|---|---|---|---|
| Build-up direto em R$ (Rf nominal ou NTN-B longa) | Fluxo em R$ nominal, comprador doméstico, quer-se evitar a conversão | Ke já sai em R$; o CRP pode estar parcialmente no yield soberano | Somar CRP a Rf soberano brasileiro conta risco-país duas vezes |
| Build-up em US$ convertido por diferencial de inflação | Beta e ERP de mercado desenvolvido, fairness opinion | Separa risco de negócio e risco-país de forma auditável | Kd e Ke equivalentes em R$ podem sair abaixo do soberano |

**Teste obrigatório, qualquer rota:** o Kd equivalente em R$ não pode ficar abaixo do yield do título
soberano de prazo comparável. Se ficar, a rota está mal calibrada.

**Pergunta ao usuário:** o comprador provável compara a taxa com NTN-B ou com Treasury + CRP?

**Exemplo registrado.** Caso A: rota em US$ no cenário standalone; rota direta em R$ no cenário do
comprador estratégico, depois que a revisão mostrou Kd equivalente em R$ abaixo do soberano.

## CC-02 · Taxa livre de risco: ponto ou média

| Alternativa | Quando usar | Risco |
|---|---|---|
| Yield na data-base | Padrão de mercado; coerente com a data do valuation | Volátil em momento de estresse |
| Média de N anos | Normalizar momento atípico de juros | Descasada da data-base; precisa de justificativa |
| NTN-B longa + inflação de longo prazo | Rota direta em R$ com fluxo nominal | Conferir coerência com a inflação do fluxo |

**Registrar no checkpoint:** título, prazo, janela, data e fonte.

## CC-03 · Prêmio de risco de mercado (ERP)

Implícito (reage ao momento) ou histórico (estável). Nenhum é errado. Declarar qual, a fonte e a
data, e usar o mesmo entre alvo e comparáveis. Se houver prêmio de porte (CC-04), o ERP tem de vir
da mesma família de calibração.

## CC-04 · Prêmio de porte

| Alternativa | Quando usar | Efeito | Risco |
|---|---|---|---|
| **Não somar; risco tratado nos fluxos e cenários** (padrão sugerido) | Comprador estratégico que absorve o risco; risco de porte já refletido em cenário pessimista ou em premissa conservadora | Ke sem prêmio ad hoc | Comprador financeiro contesta pelo argumento de custo histórico maior em empresas pequenas |
| Somar prêmio por decil de capitalização | Laudo para minoritário, comprador financeiro, alvo microcap | Eleva o Ke; reduz o valor de forma material | Misturar fonte do prêmio com ERP de outra família; decil não declarado |

**Fontes para a recomendação padrão:**
- Damodaran, ["The Small Cap Premium: Where Is the Beef?"](https://aswathdamodaran.substack.com/p/the-small-cap-premium-where-is-the-15-04-11)
  (2015; também em *Business Valuation Review*, v. 34, n. 4): o prêmio não se sustenta nos dados
  históricos recentes e não aparece nos preços atuais.
- McKinsey, ["Avoiding a risk premium that unnecessarily kills your project"](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/avoiding-a-risk-premium-that-unnecessarily-kills-your-project)
  (2012): prêmio ad hoc na taxa destrói valor presente de forma desproporcional; o risco deve ir
  para os fluxos e cenários.
- Koller, Goedhart & Wessels, *Valuation*, 7ª ed. (Wiley, 2020), cap. 15. **Página a conferir em
  exemplar físico antes de citar como afirmação literal.**

**Contraponto que o analista precisa responder:** McKinsey,
["Does scale matter to capital markets?"](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/does-scale-matter-to-capital-markets)
(2005) mostra retorno estável acima de cerca de US$ 500 milhões de valor de mercado e custo
historicamente maior abaixo disso. Alvo mid-market fica abaixo desse patamar.

**Pergunta ao usuário:** o risco de porte já está nos fluxos ou nos cenários? Se não está, onde
entra?

**Exemplo registrado.** Caso A: prêmio de porte por decil no cenário standalone; retirado no cenário
do comprador estratégico, com fundamento em Damodaran (2015) e McKinsey (2012).

## CC-05 · Desconto de iliquidez (DLOM)

| Alternativa | Quando usar | Risco |
|---|---|---|
| Não aplicar | Transação de controle de 100% do capital, comprador já definido, valor como preço de transação | Laudo para minoritário fica exposto |
| Prêmio no Ke | Convenção do mandato; iliquidez tratada como risco de taxa | Mistura com porte; dupla contagem se houver desconto no equity |
| Desconto sobre o equity value | Laudo de participação minoritária, sem saída | Percentual fixo de 20% a 30% sem calibração |

**Regra:** WACC **ou** valor, nunca os dois.

**Critérios de Damodaran para dimensionar** ([Estimating Illiquidity Discounts](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valquestions/illiquiddisc.htm);
[Measuring the Illiquidity Discount](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=841484)):
o desconto varia com a empresa. É menor com mais caixa e ativos líquidos, com saúde financeira e
fluxo positivo, e com maior chance de abertura de capital. Damodaran não recomenda abandonar o
desconto; critica o percentual fixo.

**Exemplo registrado.** Caso A: não aplicado. Fundamento: transação de controle de 100% do capital,
com comprador estratégico definido.

## CC-06 · Custo da dívida

| Alternativa | Quando usar | Risco |
|---|---|---|
| Yield observado | Dívida atual representativa do custo marginal | Taxa inflada por restrição de crédito, ou subsidiada com prazo curto |
| Spread sintético setorial sobre Rf | Dívida atual não representativa | Pode ficar abaixo do custo que o alvo de fato paga |
| Rating sintético pela cobertura de juros | Há EBIT e despesa financeira confiáveis | Cobertura volátil distorce o rating |

**Teste:** Kd ≥ soberano de prazo comparável. **Declarar** a diferença entre o Kd adotado e o custo
efetivo da dívida atual; ela é alavanca de valor do comprador (ver `saude-de-credito`).

**Exemplo registrado.** Caso A: spread sintético setorial, abaixo do custo bancário efetivo; a
diferença foi declarada na revisão.

## CC-07 · Estrutura de capital com escudo fiscal zero

No lucro presumido, ou com prejuízo fiscal amplo, a dívida não gera escudo fiscal. Sem escudo, a
alavancagem não deveria reduzir o custo de capital abaixo do custo desalavancado (Ku).

| Alternativa | Quando usar | Risco |
|---|---|---|
| D/V-alvo do setor | Padrão; estrutura sustentável de longo prazo | Com t = 0, um Kd baixo puxa o WACC para baixo do Ku sem fundamento |
| D/V atual | Estrutura atual é a de regime | Raramente é |
| Custo desalavancado (Ku) | Escudo zero e Kd sintético abaixo do custo efetivo | Ignora a estrutura que o comprador vai adotar |

**Teste obrigatório quando t = 0:** calcular o Ku e comparar com o WACC. Se WACC < Ku, justificar a
diferença no checkpoint ou adotar o Ku.

**Exemplo registrado.** Caso A: D/V-alvo setorial com escudo zero; a revisão independente apontou a
diferença contra o custo desalavancado como ponto de contestação do comprador.

## CC-08 · Método do risco-país

Spread soberano (padrão), spread ajustado por volatilidade relativa (número maior) ou lambda
(exposição da empresa ao país). Alvo com receita e operação inteiramente no Brasil: lambda = 1.
Reduzir o lambda exige argumento de receita indexada a dólar ou operação exportadora.
