---
name: negociacao-e-loi
description: Conduzir a fase de negociação — quantificar sinergia, calcular o teto de preço do comprador, estruturar mecanismo de preço em CFDF, earn-out e escrow, e desarmar objeções de múltiplo. Acionar ao receber proposta ou LOI, ao discutir estrutura ou mecanismo de preço, ao negociar earn-out, ou ao conceder exclusividade.
---

# Negociação e LOI — do interesse ao preço acordado

## Papel desta skill

Direciona a análise econômica da negociação: quanto o comprador suporta pagar, como estruturar, e
como responder às objeções. **Não redige instrumento jurídico e não substitui advogado** — NDA, LOI
e contrato de compra e venda são minutados e revisados por assessoria jurídica. O que esta skill faz
é preparar a posição econômica que o instrumento vai formalizar.

## A equação que governa a negociação

```
Valor criado para o comprador  =  melhorias que ele consegue fazer  −  prêmio que ele paga
```

Simples e implacável. Ela diz três coisas:

1. **O teto do comprador é o valor das melhorias que ele consegue fazer.** Acima disso, ele destrói
   valor próprio. O prêmio médio para controle costuma girar em torno de 30% sobre o valor pré-anúncio
   em mercado listado — mas *média não é o teto de ninguém em particular*.
2. **Compradores diferentes têm tetos diferentes**, porque fazem melhorias diferentes. É a razão de
   ser da `segmentacao-de-compradores`.
3. **O trabalho do assessor sell-side é fazer o comprador ver as melhorias que ele consegue fazer** —
   e capturar parte delas no preço via competição.

## Quantificar sinergia — o protocolo

O erro comum: estimar sinergia pela diferença de desempenho entre comprador e alvo. Ter 200 pontos-base
mais de margem que o alvo **não** significa que o alvo chegará lá. Não há regra de bolso; a estimativa
vem de análise.

Três passos:

**1. Baseline detalhado.** Custo e capital das duas empresas **como se seguissem independentes**, ao
longo das estruturas de custo de cada uma. Serve para garantir que tudo está contabilizado e que **não
haverá dupla contagem** ao estimar a economia. O baseline tem de ser consistente com os valuations
intrínsecos.

**2. Economia por categoria de custo**, customizada ao setor. E o que dá precisão: **amarre cada
economia a uma atividade operacional**. Qual a redução de headcount equivalente à economia de SG&A?
Qual a receita por colaborador resultante? Quanto cai o custo de distribuição quando os caminhões
viajam cheios — e *a receita é suficiente para enchê-los?*

**3. Teste contra benchmark.** Compare o agregado da combinação com benchmarks setoriais de margem e
eficiência de capital, e pergunte se o **ROIC e o crescimento resultantes fazem sentido** para a
economia daquele setor. Em particular: o ROIC da combinada tem de aterrissar num nível compatível com
o valor terminal e com a estrutura competitiva. Quanto mais difícil sustentar vantagem, mais as
melhorias precisam ser reduzidas gradualmente no longo prazo. Ver plugin de valuation,
`diagnostico-de-roic` e `valor-terminal`.

Um ponto de método que rende: **envolva quem opera, não só quem faz conta.** Gestor de linha
experiente frequentemente já sabe coisas sobre o alvo — capacidade real, problema de qualidade,
necessidade iminente de investimento — que não estão no domínio público e mudam a estimativa.

## A assimetria que decide a tática

A evidência é robusta e assimétrica:

| Tipo de sinergia | O que a evidência mostra |
|---|---|
| **Custo e capital** | Cerca de 86% dos compradores capturam ao menos 70% da economia estimada. |
| **Receita** | Quase metade dos compradores realiza menos de 70% do previsto. Em cerca de um quarto dos casos, menos de 30%. |

**Consequência tática direta:**

- **Sinergia de custo e capital é moeda forte.** Ancore o argumento de prêmio nela.
- **Sinergia de receita é moeda fraca.** O comprador vai descontá-la agressivamente, e a evidência lhe
  dá razão. Use-a como upside qualitativo.
- **E use-a como justificativa de earn-out.** Se o comprador quer descontar do preço a incerteza da
  sinergia de receita, ofereça earn-out sobre ela: **quem alega incerteza deve pagar contingente**. O
  vendedor participa se ela se materializar, em vez de brigar por ela no preço à vista.

Nota que favorece o vendedor: a sinergia identificada na diligência é o **piso**, não o teto — há
evidência de que oportunidades relevantes só aparecem depois do fechamento, e que em cerca de metade
dos casos a estimativa pré-fechamento não serviu de roteiro adequado. Vale dizer isso ao comprador que
trata a própria estimativa como teto.

## O teto do comprador — duas contas, lado a lado

Calcule as duas para cada comprador da lista curta. Elas convergem e se checam.

**Conta 1 — prêmio ≤ melhorias.** O valor das melhorias que aquele comprador faz, descontado, é o
prêmio máximo que ele suporta.

**Conta 2 — o ROIC do deal.**

```
ROIC do deal = (lucro do alvo + melhorias) / preço total de compra

Compra cria valor para o comprador  ⇔  ROIC do deal > WACC do comprador
```

A segunda é mais poderosa na mesa, porque **desloca a conversa do múltiplo para as melhorias** — que
é exatamente onde o vendedor tem argumento. E é uma calculadora simples e defensável do preço-teto.

## Desarmar a objeção do múltiplo

A objeção mais frequente: *"esse múltiplo não fecha para mim"*, *"o deal fica dilutivo"*, *"não passa
no meu comitê pelo impacto no resultado"*.

Duas respostas, ambas com lastro empírico:

**1. Diluição de lucro não tem relação com criação de valor.** Num estudo de 117 transações grandes,
a accretion ou dilution de lucro **não foi fator na reação do mercado** — nem um mês nem um ano após
o anúncio, e independentemente de o lucro por ação esperado dois anos adiante ser maior, menor ou
igual.

**2. Deal accretive pode destruir valor, e deal dilutivo pode criar.** O mecanismo do primeiro caso:
o comprador financia 100% do deal com dívida apoiada no caixa combinado, mas o negócio adquirido não
sustentaria aquela dívida sozinho — ele adiciona risco ao acionista existente sem compensá-lo, e o
lucro sobe porque o resultado do alvo excede o juro após imposto. Accretive e destruindo valor ao
mesmo tempo. O inverso: um alvo de crescimento rápido a múltiplo alto deprime o lucro por alguns anos
e cria valor se o crescimento e o retorno se materializarem.

O teste correto é sempre o mesmo: **ROIC do deal contra o WACC do comprador.**

Use isso com discernimento. É argumento legítimo quando a objeção contábil está sendo usada para
comprimir preço; não é argumento para empurrar um deal que de fato não fecha economicamente para
aquele comprador.

## Mecanismo de preço

### CFDF — a base

*Cash-free debt-free*: o comprador adquire a operação sem caixa e sem dívida, e a ponte de enterprise
value para equity value define o que o vendedor recebe.

**Essa ponte precisa estar pronta e reconciliada antes da negociação**, não durante. Ver plugin de
valuation, `triangulacao-e-faixa` — é exatamente a mesma conta, e cada item dela é um ponto de
negociação: o que conta como dívida, o que é caixa excedente, como se tratam parcelamento tributário,
contingência e mútuo de sócio.

### Ajuste de capital de giro

O comprador quer receber a empresa com capital de giro "normal". Define-se um **nível de referência**
— tipicamente a média de 12 meses, ou os dias históricos aplicados à receita — e o preço se ajusta
para cima ou para baixo pela diferença no fechamento.

Três pontos que costumam ser mal negociados e custam dinheiro:

- **A definição do nível de referência.** Média de qual período? Se o negócio é sazonal, a média de
  12 meses e o saldo de uma data específica são muito diferentes.
- **O que entra no capital de giro para fins de ajuste.** Antecipação de recebível, imposto a
  recuperar, adiantamento de cliente — cada um precisa estar dentro ou fora explicitamente.
- **Quem prepara o balanço de fechamento e como se resolve divergência.** Defina o mecanismo antes,
  não depois.

### As formas de pagamento, e o risco que cada uma aloca

| Forma | Quem carrega o risco | Nota |
|---|---|---|
| **Caixa no fechamento** | Comprador | O que o vendedor quer maximizar. |
| **Parcela diferida** | Vendedor (vira credor) | Exija indexador e garantia. Sem garantia, é crédito sem lastro. |
| **Earn-out** | Vendedor | Ver abaixo. |
| **Rollover / permuta de participação** | Vendedor (vira sócio minoritário) | O comprador *quer* que o fundador compartilhe risco. **O vendedor deve cobrar por isso**, não conceder de graça — e negociar direitos de minoritário, saída e antidiluição. |
| **Escrow / retenção** | Vendedor | Para contingência identificada. Negocie prazo, gatilho de liberação e limite. |
| **Vendor finance** | Vendedor | Financiar o próprio comprador. Preço tem de refletir. |

**Sempre que houver preço diferido, earn-out, rollover ou vendor finance, o vendedor fica credor ou
sócio do comprador.** Isso torna a **capacidade de endividamento e a solvência do comprador**
diligência obrigatória — não é cortesia, é proteção. Ver `segmentacao-de-compradores` e, no plugin de
valuation, `saude-de-credito`.

### Earn-out — como não perder

Earn-out é a estrutura que mais frequentemente decepciona o vendedor, e quase sempre por desenho.

A regra que evita a maior parte dos problemas:

> **Ancore o earn-out em métrica que o vendedor controla e pode auditar.**

Por que: depois do fechamento, o comprador controla a operação. Se a métrica é EBITDA consolidado,
receita sinérgica ou resultado de unidade integrada, o comprador tem inúmeras decisões legítimas —
alocação de custo corporativo, mudança de política comercial, reorganização — que afetam a métrica
sem má-fé. E a evidência de que sinergia de receita frequentemente não se materializa torna earn-out
ancorado nela uma aposta ruim.

Métricas melhores, em ordem: **volume físico** · **receita bruta da linha original** · **contrato
específico assinado ou renovado** · **marco operacional verificável** (licença obtida, planta em
operação).

Além da métrica, negocie explicitamente: período · fórmula com exemplo numérico anexo · quem apura e
com que auditoria · **cláusulas de proteção** (o comprador se compromete a não desmontar a operação
que gera a métrica, a manter investimento mínimo, a não realocar receita) · o que acontece se o
comprador vender a empresa antes do fim do período · e o tratamento em caso de disputa.

## Exclusividade

O comprador vai pedir exclusividade para fazer diligência. Conceder cedo demais é o erro mais custoso
do processo, porque **número de proponentes simultâneos é a variável que mais move o preço** — ver
`segmentacao-de-compradores`.

> **Exclusividade só se concede contra preço e condições firmes, por prazo curto e determinado.**

Antes de conceder, tenha por escrito: preço, mecanismo, estrutura de pagamento, condições
suspensivas, tratamento de contingências conhecidas, e prazo. Uma LOI com faixa de preço ampla e
"sujeito a diligência satisfatória" não é compromisso — é opção grátis sobre o seu mandato.

E conheça o padrão de conduta do comprador: quem renegocia preço sistematicamente após a LOI custa
meses. Isso é critério de qualificação.

## O custo e o prazo da captura

Dois parâmetros que o comprador conhece e o vendedor raramente:

- **O custo de implementar a sinergia é da ordem de um ano de economias.** Reestruturação, rescisão,
  integração de sistema, consultoria.
- **Há janela.** A captura se concentra no primeiro ciclo orçamentário após o fechamento; o que não
  entra no orçamento tende a não acontecer. Sinergia tem prazo de validade.

Isso importa ao vendedor por dois motivos: explica por que o comprador não paga o valor bruto da
sinergia (ele tem custo para capturá-la), e é argumento de **velocidade de processo** — um fechamento
que perde o ciclo orçamentário vale menos para o comprador.

## A maldição do vencedor — e a honestidade que ela exige

Quando vários compradores avaliam o mesmo alvo e identificam sinergias parecidas, **quem mais
superestima a sinergia oferece o preço mais alto**. Koller trata isso como erro do comprador; do lado
do vendedor, é a razão econômica do processo estruturado.

A linha que não se atravessa: **maximizar preço via competição é legítimo; induzir superestimativa
com informação enviesada não é.** A informação entregue tem de ser correta e completa dentro do que
foi divulgado. O processo cria a competição; a informação não cria a ilusão.

Na prática isso protege o mandato: comprador que descobre na diligência que a informação era
enviesada não renegocia — ele sai, e conta aos outros.

## Depois da LOI

- **Diligência estratégica, não só contábil.** O comprador vai reter a tese de melhor dono. Antecipe
  as perguntas.
- **Reteste a tese.** Se a diligência derruba uma premissa material, é melhor saber e reprecificar do
  que descobrir na assinatura.
- **Sinergia reversa** — o que o comprador *perde* ao integrar: cliente em conflito, contrato com
  cláusula de mudança de controle, incentivo fiscal que se extingue. Levante você primeiro. Ver
  `estudo-setorial` e, no plugin de valuation, `impostos-e-prejuizos-fiscais`.
- **Cláusula de mudança de controle** em contratos relevantes, licenças e financiamentos. É o achado
  que mais frequentemente atrasa fechamento.

## O que entregar

1. A quantificação de sinergia pelos três passos, separando custo e capital de receita.
2. Para cada comprador da lista curta: as duas contas de teto, lado a lado.
3. A ponte CFDF reconciliada, com cada item marcado como acordado ou em disputa.
4. A recomendação de estrutura de pagamento, com o risco que cada parcela aloca ao vendedor.
5. Se houver earn-out: a métrica proposta, por que o vendedor a controla e a audita, e as cláusulas de
   proteção.
6. A posição sobre exclusividade: o que exigir antes de conceder, e por quanto tempo.
7. A lista de achados que precisam ser resolvidos antes da assinatura — mudança de controle,
   contingência, mútuo de sócio, aval pessoal do sócio.

> Instrumento jurídico é competência de advogado. Esta skill prepara a posição econômica; a minuta e
> o parecer são da assessoria jurídica do mandato.
