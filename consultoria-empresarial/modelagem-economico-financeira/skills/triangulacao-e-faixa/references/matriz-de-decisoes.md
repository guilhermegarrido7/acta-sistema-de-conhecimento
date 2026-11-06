# Matriz de decisões: triangulação e faixa

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

---

## TF-01 · Data da ponte de EV para equity value

**Gate, não escolha:** o EV, a dívida líquida e cada item da ponte têm de estar na mesma data. Datas
diferentes bloqueiam o release (ver `revisao-de-modelo`). A escolha é só **como** alinhar.

| Alternativa | Como funciona | Quando usar | Risco |
|---|---|---|---|
| **Data-base = último balanço disponível** (padrão sugerido) | Desconta só o fluxo remanescente do ano (stub period), com o fator de desconto ajustado | Há balanço intermediário confiável | Exige projetar o período parcial |
| Manter a data-base anterior e usar a dívida dessa data | Ponte com o balanço da própria data-base | O balanço da data-base é o último auditado ou revisado | Ignora caixa gerado e dívida contraída depois |
| Levar o EV à data da dívida | EV × (1 + WACC)^t, menos FCF e dividendos do intervalo | Ajuste rápido com o modelo fechado | Sem o FCF realizado do intervalo, distorce o valor |

**Pergunta ao usuário:** qual é o último balanço confiável, e a data-base coincide com ele?

**Exemplo registrado.** Caso A: EV em data-base anual e dívida líquida de balanço semestral
posterior. A divergência foi identificada na revisão.

## TF-02 · Itens não operacionais na ponte

Para cada item (caixa excedente, ativo não operacional, contingência, dividendo a pagar, mútuo com
sócio, parcelamento tributário), registrar: entra ou não, valor, data, fonte e justificativa.
**Nenhum item fica fora sem registro.**

**Exemplo registrado.** Caso A: itens não operacionais identificados no balanço ficaram fora da
ponte sem registro; a lacuna foi apontada na revisão.

## TF-03 · Construção da faixa de valor

| Alternativa | Quando usar | Risco |
|---|---|---|
| Sensibilidade WACC × g | DCF como método principal | Grade larga demais se o passo não for calibrado |
| Cenários (pessimista, base, otimista) | Incerteza está nas premissas operacionais | Misturar com sensibilidade de taxa na mesma faixa |
| Football field entre métodos | Há múltiplos e transações comparáveis | Média esconde divergência que é achado |
| ±% de convenção sobre o ponto central | Comunicação simples ao cliente | Faixa sem origem econômica; é o primeiro ponto atacado |

**Regra:** o ±% é permitido só como convenção de apresentação, rotulado como tal e acompanhado da
sensibilidade WACC × g, que é item mínimo do modelo. Se o ±% for mais estreito que a amplitude da
sensibilidade no passo usual da grade, o deck sinaliza.

**Registrar no checkpoint:** método da faixa, amplitude, passo da grade de WACC e de g.

**Exemplo registrado.** Caso A: faixa apresentada como ±% fixo, sem grade de sensibilidade. A lacuna
foi identificada na revisão.

## TF-04 · Valor standalone ou com sinergias

| Alternativa | Quando usar | Risco |
|---|---|---|
| Standalone com melhorias (padrão para o vendedor) | Valuation para o vendedor ou laudo | Subestima o que o comprador estratégico pode pagar |
| Cenário do comprador, com sinergias em linhas próprias | Comprador definido, negociação de preço | Sinergia embutida em driver operacional fica invisível |
| Os dois, lado a lado | Processo com comprador estratégico conhecido | Leitor confundir o teto do comprador com o caso base |

**Recomendação:** quando houver cenário do comprador, mostrar a parcela de sinergia e quanto dela o
preço transfere ao vendedor. A modelagem da sinergia segue `projecao-e-cenarios` (PC-02).

**Exemplo registrado.** Caso A: dois modelos, conservador e de integração com o comprador; no de
integração, a sinergia entrou embutida nos drivers operacionais.
