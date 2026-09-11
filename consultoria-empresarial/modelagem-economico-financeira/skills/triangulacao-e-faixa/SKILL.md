---
name: triangulacao-e-faixa
description: Triangular o valor por múltiplos, transações precedentes e DCF, montar o football field e defender uma faixa em vez de um número. Acionar ao consolidar o resultado do valuation, ao selecionar comparáveis, ao discutir prêmio de controle ou desconto de iliquidez, ou ao construir a ponte de EV para equity value.
---

# Triangulação e faixa — o valuation que se apresenta

## Papel desta skill

**Oráculo. Não escreve na planilha nem no deck.** Direciona a seleção de metodologias, a construção
das faixas e a defesa do resultado. Quem digita é o analista.

Fundamento: skill `fundamentos-koller`, reference `ma_e_multiplos.md`.

## O princípio

> **Entregue uma faixa, com o argumento de cada extremo. Nunca um número.**

Um número único convida à negociação do número. Uma faixa com quatro metodologias que convergem
desloca a conversa para *onde dentro da faixa*, que é a conversa em que o assessor tem argumento — e
é a diferença entre defender um valuation e defender uma opinião.

E há um segundo motivo, menos tático: um número único é intelectualmente desonesto. O valuation de
uma empresa fechada tem incerteza irredutível, e fingir precisão de três casas destrói credibilidade
com quem sabe disso.

## A ponte de EV para equity value

Antes de qualquer faixa, a ponte — porque as metodologias produzem **enterprise value** e o vendedor
recebe **equity value**. É aqui que o mandato ganha ou perde dinheiro sem que ninguém discuta
múltiplo.

```
ENTERPRISE VALUE
(−) Dívida financeira bruta
(−) Parcelamentos tributários
(−) Passivo de arrendamento                     (se capitalizado no capital investido)
(−) Contingências prováveis
(−) Mútuos e contas a pagar a sócios
(−) Dividendos declarados e não pagos
(−) Participação de minoritários                (se houver, a valor)
(+) Caixa e aplicações excedentes               (só o excedente; o operacional já está no EV)
(+) Ativos não operacionais                     (imóvel não operacional, participações, depósitos judiciais)
(+/−) Ajuste de capital de giro vs. o normalizado
= EQUITY VALUE
```

Quatro regras que evitam os erros que mais aparecem:

1. **Coerência com o capital investido.** Se o arrendamento foi capitalizado no capital investido,
   ele sai aqui. Se não foi capitalizado (o aluguel ficou na despesa), ele **não** sai aqui — senão o
   mesmo compromisso é descontado duas vezes. Ver `reorganizacao-contabil`.
2. **Só o caixa excedente entra.** O caixa operacional mínimo já está dentro do EV, na operação.
3. **Contingência possível não entra na ponte** — mas entra na negociação, como escrow, retenção ou
   indenização específica. Diga isso explicitamente.
4. **A ponte é a base do CFDF.** *Cash-free debt-free* é exatamente esta conta, e ela precisa estar
   pronta e reconciliada antes da negociação de mecanismo de preço.

Apresente a ponte como um slide próprio. É onde o vendedor entende por que o "valor da empresa" não é
o que ele recebe — conversa que é melhor ter no valuation do que na assinatura.

## As metodologias

### DCF

O método primário, e o único que reflete a economia específica do alvo. As demais metodologias
importam a opinião do mercado sobre outras empresas.

Apresente o DCF em cenários — otimista, base, pessimista — de `projecao-e-cenarios`, e a
sensibilidade WACC × `g` de `custo-de-capital` e `valor-terminal`.

### Múltiplos de mercado (comparáveis listadas)

**Quais múltiplos, e por quê:**

| Múltiplo | Uso |
|---|---|
| **EV/EBITA** | O tecnicamente superior, porque exclui a amortização de intangível adquirido e é neutro a política de depreciação. Pouco usado no mercado brasileiro. |
| **EV/EBITDA** | O padrão de mercado. É a linguagem do comprador, e é o que você vai usar. Ignora intensidade de capital — dois negócios com o mesmo EBITDA e CapEx muito diferente não valem o mesmo múltiplo, e é preciso dizer isso. |
| **EV/Capital Investido** | Subutilizado e muito informativo: **`EV/IC > 1` se e somente se `ROIC > WACC`**. É a checagem que amarra o múltiplo ao diagnóstico de criação de valor. |
| **EV/Receita** | Só quando o EBITDA é irrelevante ou negativo. Ignora margem inteiramente. |
| **P/L** | **Evite em M&A.** Contamina com estrutura de capital e com política contábil, e o que se negocia é o enterprise value, não a ação. |

**Ajustes obrigatórios no múltiplo do comparável**, sem os quais a comparação não vale:

- Padronize o tratamento de **arrendamento** entre alvo e comparáveis.
- Retire **ativos e resultados não operacionais** do numerador e do denominador.
- Use **múltiplo forward** quando disponível, e declare se é trailing ou forward — misturar as duas
  bases é erro comum e material.
- Use **mediana**, não média: amostra pequena, sensível a outlier.

**A checagem `EV/IC`:** se o alvo tem ROIC bem acima do WACC e o múltiplo implícito de `EV/IC` sai
próximo de 1, há incoerência entre o diagnóstico e o valor. Vale investigar antes de apresentar.

### Transações precedentes

Vêm do plugin de M&A, skill `transacoes-precedentes` — com a lógica de inclusão e exclusão de cada
deal como parte do entregável.

> Se `acta-ma-sell-buy-side` não estiver instalado, **avise o usuário** em vez de improvisar a
> seleção de amostra:
> `claude plugin install acta-ma-sell-buy-side@acta-sistema-de-conhecimento --scope user`

Duas notas de método:

- **Transação precedente já contém prêmio de controle** — é transação de controle. Somar prêmio de
  controle sobre múltiplo de transação é dupla contagem.
- **Múltiplo de listada não contém prêmio de controle** — é preço de lote minoritário em bolsa.

Essa assimetria é a razão pela qual as duas faixas do football field não são comparáveis linha a
linha, e vale explicá-la no deck.

## Seleção de comparáveis

O critério é **a economia do negócio**, não o código setorial. Duas empresas do mesmo setor podem ter
economias opostas — uma asset-heavy com contrato longo, outra asset-light com receita spot.

Em ordem de importância:

1. **Estrutura de receita** — contratada vs. spot, recorrente vs. projeto.
2. **Intensidade de capital** — giro do capital investido similar.
3. **ROIC e crescimento** — comparável com ROIC muito diferente não sustenta o mesmo múltiplo, e a
   fórmula dos value drivers explica por quê.
4. **Posição competitiva** — barreira similar.
5. **Porte** — informa, mas raramente há comparável do porte do alvo. Listada grande é referência de
   teto, e diga que é.
6. **Geografia** — mercado local, regulação, custo de capital.

**Declare a amostra e o critério.** Uma tabela de comparáveis sem o critério de seleção é a primeira
coisa que o comprador desmonta.

### O problema de amostra pequena

É a norma em mid-market brasileiro. Setores inteiros têm duas ou três listadas, e nenhuma do porte do
alvo. Respostas honestas, em ordem de preferência:

1. **Amplie para comparáveis internacionais** com economia similar, ajustando o custo de capital — e
   declare o ajuste.
2. **Use poucos comparáveis bem escolhidos** e diga que são poucos. Três comparáveis bem justificados
   valem mais que doze forçados.
3. **Dê mais peso ao DCF** e trate os múltiplos como sanity check, explicitamente.

O que **não** fazer: encher a amostra com empresas de economia diferente para ter um `n` respeitável.
Isso produz uma mediana que não significa nada e uma faixa que não se defende.

## O football field

O modelo da casa traz quatro metodologias: **transações precedentes · múltiplos de mercado · DCF base
· DCF otimista**. A construção de cada faixa precisa de critério declarado.

### Como definir cada faixa

| Metodologia | Faixa | Nota |
|---|---|---|
| Múltiplos de mercado | Do 1º ao 3º quartil dos comparáveis, aplicado ao EBITDA de referência | Quartil é mais robusto que mínimo-máximo, que é dominado por outlier |
| Transações precedentes | Do piso ao teto justificados da amostra | Ver `transacoes-precedentes`: quem tem os critérios vai ao teto, quem não tem ancora a base |
| DCF | Da sensibilidade WACC × `g`, ou dos cenários | **Escolha uma das duas e diga qual.** Misturar cenário operacional com sensibilidade de taxa produz uma faixa que ninguém sabe interpretar |
| DCF otimista | Cenário otimista | Deixe claro que é cenário, não caso base |

### Regras de apresentação

- **Ordem fixa**, da metodologia mais ancorada em mercado à mais específica do alvo, ou o inverso —
  mas fixa, e a mesma em todos os decks da casa.
- **Rótulo com o número em cada extremo.**
- **A faixa consolidada** — a interseção ou o intervalo central onde as metodologias concordam. É o
  entregável.
- **A largura é informação.** Faixas estreitas e convergentes sinalizam um ativo de leitura clara.
  Faixas largas e divergentes sinalizam ou incerteza real ou premissa frágil — e nesse caso a
  divergência precisa ser explicada, não escondida com uma média.

**Quando o DCF e os múltiplos divergem muito**, isso não é um problema a resolver com média: é o
achado. Ou o alvo tem economia diferente dos comparáveis (e é isso que sustenta prêmio ou desconto),
ou uma das duas está errada. Investigue e apresente a explicação — é o slide mais forte do deck
quando bem feito.

## Prêmio de controle e desconto de iliquidez

Os dois ajustes mais mal aplicados do valuation de empresa fechada.

**Prêmio de controle.** A prática de mercado aplica um prêmio sobre múltiplo de listada para refletir
que se está comprando controle. Koller e Damodaran são céticos com prêmio genérico, e o argumento é
bom: **o prêmio não é um número de mercado, é o valor das melhorias que aquele comprador consegue
fazer.** Um prêmio médio de mercado aplicado sem tese de melhoria é numerologia.

O tratamento defensável:

- Sobre **múltiplo de listada**, o prêmio pode entrar — declarado, com a fonte da faixa observada e,
  de preferência, com a tese de melhoria que o justifica.
- Sobre **transação precedente**, nunca — já está lá.
- Se houver tese de melhoria específica identificada, **modele-a** em vez de aplicar prêmio genérico.
  Vale mais, e é discutível com o comprador.

**Desconto de iliquidez.** Ver `custo-de-capital`: aplique no WACC **ou** no valor, nunca nos dois. E
em mandato sell-side, ele trabalha contra o vendedor — dimensione com o mesmo rigor dos demais
componentes, não como folga de conservadorismo.

## Sinergias — o valor para quem

Distinção que organiza a negociação inteira:

| Conceito | O que é | Quem captura |
|---|---|---|
| **Valor standalone** | O alvo como está, sob a gestão atual | O piso do vendedor |
| **Valor com melhorias operacionais** | Standalone + o que qualquer dono competente faria | Negociável |
| **Valor com sinergias** | + o que *aquele* comprador específico consegue | Depende do processo competitivo |

O vendedor não tem direito à sinergia — ela pertence ao comprador que a cria. **O que a captura para
o vendedor é a competição entre compradores**, e é por isso que o processo importa tanto quanto o
número.

Consequência prática para o valuation: **o valuation entregue ao vendedor é o standalone com
melhorias**, e a sinergia é tratada como o que explica por que um comprador pagaria acima da faixa.
Colocar sinergia dentro do caso base infla o valuation e cria expectativa que o processo não
sustenta.

Ver plugin de M&A, `segmentacao-de-compradores` — comprador diferente tem sinergia diferente, e é
isso que define a lista de abordagem.

## O que entregar

1. A ponte EV → equity value, item por item, reconciliada.
2. Cada metodologia com sua faixa e o critério de construção declarado.
3. A amostra de comparáveis, com o critério de seleção e a declaração se é pequena.
4. O football field com as faixas rotuladas e a faixa consolidada.
5. A explicação de qualquer divergência material entre metodologias.
6. Prêmio de controle e desconto de iliquidez: se aplicados, onde e com que argumento; se não, por
   que não.
7. A separação standalone / com melhorias / com sinergias, e o que vai ao vendedor.

## Próximo passo

`revisao-de-modelo` — a bateria de auditoria antes de o número sair da casa. E `benchmark-bancos`,
para conferir cada escolha metodológica contra a prática das casas de referência.
