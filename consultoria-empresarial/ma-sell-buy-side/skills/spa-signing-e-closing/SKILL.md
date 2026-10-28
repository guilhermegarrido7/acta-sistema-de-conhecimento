---
name: spa-signing-e-closing
description: "Defender a posição econômica do contrato de compra e venda até o fechamento: mecanismo de preço, indenização, CADE e funds flow. Acionar ao revisar term sheet ou markup do SPA, ao preparar o closing, ou ao apurar ajuste pós-fechamento."
---

# SPA, signing e closing: a posição econômica até o dinheiro trocar de mão

## Papel desta skill

Direciona a posição econômica do contrato de compra e venda de quotas ou ações (o SPA), da proposta
aceita ao fechamento e aos ajustes posteriores: mecanismo de preço, earn-out, retenções,
indenização, MAC, condições precedentes e a mecânica de fechamento. **Não redige cláusula e não
emite parecer**: minuta, markup e parecer são da assessoria jurídica. A ACTA entrega o term sheet
econômico que a minuta tem de refletir, lê cada markup em reais e confere, antes do signing, se a
minuta refletiu o que foi acordado.

## O term sheet econômico

Uma tabela, entregue à assessoria jurídica antes da primeira minuta e atualizada a cada rodada:

| Termo | Posição | Concessão possível | Limite | Fundamento |
|---|---|---|---|---|
| Preço, base e data-base | | | | |
| Mecanismo (locked box ou completion accounts) | | | | |
| Dívida líquida, itens assemelhados e peg de capital de giro | | | | |
| Earn-out | | | | |
| Escrow ou holdback | | | | |
| Cap, basket, de minimis, sobrevivência | | | | |
| Indenizações específicas e seguro W&I | | | | |
| MAC | | | | |
| Condições precedentes e data-limite | | | | |
| Ticking fee | | | | |

**Fundamento** amarra a posição ao número: o achado do registro de `due-diligence-e-data-room`, a
ponte de `negociacao-e-loi`, o cálculo do peg. Posição sem fundamento cede na primeira objeção.

> **Cada termo do contrato tem preço.** Escrow maior, cap maior, sobrevivência mais longa e MAC mais
> amplo valem dinheiro. Leia o markup em reais antes de aceitar ou recusar.

## Mecanismo de preço

### Locked box

O preço é fixado sobre um balanço de referência (a data do locked box), anterior ao signing. O
resultado econômico a partir dessa data é do comprador, e o vendedor se compromete a não extrair
valor até o fechamento.

- **Leakage**: toda saída de valor para o vendedor ou suas partes relacionadas depois da data do
  locked box: dividendo, juros sobre capital próprio, mútuo, pagamento a parte relacionada fora de
  condição de mercado, bônus de transação, custo do vendedor pago pela sociedade. Leakage não
  permitido é devolvido, real por real.
- **Leakage permitido**: lista fechada e quantificada no contrato (remuneração dos sócios no curso
  normal, contrato com parte relacionada em condição de mercado, dividendo já acordado). O que não
  está na lista não é permitido.
- **Ticking fee**: compensa o vendedor pela geração de caixa entre a data do locked box e o
  fechamento, que passa a ser do comprador. Valor diário ou taxa sobre o equity value, até o closing.
  Quanto mais longo o intervalo (aprovação do CADE, anuências), mais ela pesa.

Funciona quando o balanço de referência é confiável (auditado ou revisado) e a diligência já o
testou. Favorece o vendedor: certeza de preço e nenhum ajuste depois do fechamento.

### Completion accounts

O preço é um enterprise value ajustado pelo balanço de fechamento: dívida líquida apurada e capital
de giro contra o peg.

- **O peg é o capital de giro normalizado**, com a sazonalidade tratada (ver `negociacao-e-loi`). O
  cálculo vem de `acta-modelagem-economico-financeira:capital-de-giro-e-capex`, e os itens
  assemelhados a dívida, de `acta-modelagem-economico-financeira:qualidade-de-resultados`, se o
  plugin estiver instalado.
- **Políticas contábeis do balanço de fechamento** definidas no contrato, em hierarquia: a política
  específica acordada, depois a prática consistente com o balanço de referência, depois a norma.
- **Calendário**: estimativa no fechamento (closing statement), balanço definitivo em prazo
  contratual, prazo de revisão pela outra parte e perito contábil independente para a divergência.
- **Franquia de ajuste**: abaixo de um valor mínimo, não há ajuste. Evita disputa por centavos.

Interessa mais ao comprador: o risco econômico só passa no fechamento, e ele paga pelo que recebe. O
custo é a disputa sobre o balanço de fechamento, que o locked box restringe a leakage.

**Dividendo antes do fechamento é decisão de preço.** Distribuir antes da data do locked box reduz o
preço; distribuir depois é leakage; deixar o caixa na sociedade entra no equity value pelo CFDF. O
líquido do vendedor em cada rota mudou com a Lei 15.270/2025: ver o parágrafo em `negociacao-e-loi`
e levar a conta à assessoria tributária.

## Earn-out

A escolha da métrica está em `negociacao-e-loi` (ancorar no que o vendedor controla e audita). No
contrato, o que tem de estar fechado:

- **Definição contábil congelada**: a métrica é apurada pelas políticas do ano-base, com a lista do
  que entra e do que não entra (custo corporativo, receita intragrupo, efeito de aquisição
  posterior).
- **Período, fórmula e exemplo numérico anexo**, com piso, teto e regra de recuperação entre anos.
- **Controle**: quem apura, com qual auditoria, e o acesso do vendedor a livros e relatórios no
  período.
- **Proteção e aceleração**: manter a operação que gera a métrica, investimento mínimo, vedação de
  realocar receita; e o que acontece se o comprador vender a empresa ou descumprir a proteção.
- **Disputa e compensação**: perito contábil para o cálculo, o foro que a assessoria jurídica definir
  para o resto; desconto de indenização no earn-out só por valor reconhecido em decisão ou acordo.

Earn-out condicionado à permanência do vendedor como empregado pode ser tratado pelo comprador como
remuneração por serviço posterior à combinação, e não como preço (CPC 15 (R1), itens B54 e B55). O
efeito contábil e fiscal é da assessoria do comprador; a ACTA o sinaliza antes do term sheet.

## Escrow e holdback

No escrow, o dinheiro fica com um agente terceiro, e o risco do vendedor é o custo de carregamento.
No holdback, fica com o comprador, e o risco do vendedor passa a ser o crédito do comprador: use-o só
para valor pequeno e comprador sólido. Dimensione pela soma das indenizações específicas (o registro
de achados, com valor e probabilidade de cada uma) e, se houver, uma parcela para declarações
gerais. Libere em parcelas amarradas aos prazos de sobrevivência e ao encerramento de cada
contingência. Negocie também quem fica com o rendimento da conta e o prazo para o comprador se opor
à liberação.

## Declarações, garantias e indenização

As declarações e garantias descrevem o estado da sociedade; violada uma delas, a indenização paga a
perda. A posição econômica se resume a quatro parâmetros e ao tratamento do achado conhecido:

| Parâmetro | O que define | Vendedor quer | Comprador quer |
|---|---|---|---|
| Cap | Teto da indenização geral | Baixo | Alto |
| Basket | Perda acumulada a partir da qual se paga: franquia (só o excedente) ou gatilho (tudo, desde o primeiro real) | Alto, como franquia | Baixo, como gatilho |
| De minimis | Valor mínimo por reclamação | Alto | Baixo |
| Sobrevivência | Prazo para reclamar, por tipo de declaração | Curto | Longo |

- **Declarações fundamentais** (titularidade, capacidade, poderes) costumam ter cap e prazo próprios,
  maiores.
- **Fiscais, trabalhistas e ambientais** costumam ter prazo atrelado ao prazo legal de cobrança,
  definido pela assessoria jurídica.
- **Achado conhecido não fica na indenização geral.** Vai para preço ou indenização específica, com
  valor e escrow próprios (ver a tabela de tratamento em `due-diligence-e-data-room`).

O papel da ACTA é transformar a tabela em custo esperado: para cada combinação de cap, basket e
prazo, quanto o vendedor espera pagar, dado o registro de achados. É essa conta que permite trocar
um parâmetro por preço com critério.

**Seguro W&I.** A apólice de warranty and indemnity cobre perda por violação de declaração, e pode
ser contratada pelo comprador ou pelo vendedor. Permite cap menor e saída mais limpa ao vendedor, ao
custo de prêmio e retenção. Risco conhecido na diligência tende a ficar fora da cobertura;
disponibilidade, custo e exclusões no mid-market variam com setor e porte (a confirmar com corretor
em cada mandato). Compare em reais com escrow e cap; não é solução padrão.

## Condições precedentes e o CADE

Condições típicas: aprovação do CADE e de agência setorial, anuência de terceiros (contrato com
mudança de controle, financiador), reorganização societária, ausência de MAC, declarações verdadeiras
na data do fechamento. Para cada uma: responsável, prazo e consequência se não ocorrer. A
**data-limite** (long stop date) tem de caber no prazo realista da condição mais lenta.

**CADE.** A notificação é obrigatória quando, cumulativamente, um dos grupos envolvidos registrou no
último balanço faturamento bruto anual ou volume de negócios total no país, no ano anterior à
operação, de pelo menos R$ 750 milhões, e outro grupo, de pelo menos R$ 75 milhões (Lei 12.529/2011,
art. 88, I e II). Os valores são os da Portaria Interministerial MJ/MF 994/2012, que atualizou, com
base no § 1º, os R$ 400 milhões e R$ 30 milhões do texto da lei; confirme a vigência na data da
operação.

- **Prazo**: controle prévio em até 240 dias do protocolo (§ 2º), dilatável por até 60 dias a pedido
  das partes ou por até 90 dias por decisão fundamentada do Tribunal (§ 9º).
- **Consumação antes da apreciação**: nulidade, multa de R$ 60 mil a R$ 60 milhões e processo
  administrativo (§ 3º). Até a decisão final, as condições de concorrência entre as partes têm de ser
  preservadas (§ 4º).
- **Abaixo dos patamares**: o CADE pode requerer a submissão em até 1 ano da consumação (§ 7º).

Consequências econômicas: o prazo do CADE entra no cronograma e na data-limite; no locked box, a
ticking fee remunera a espera; a obrigação de aceitar remédios e a multa por rescisão quando a
aprovação não vem são posições a negociar. Se a operação é notificável, e por qual rito, decide a
assessoria concorrencial.

**Entre signing e closing**, as obrigações de conduta do alvo (curso normal dos negócios,
consentimento do comprador para atos relevantes) não podem dar ao comprador ingerência na gestão
comercial antes da aprovação (ver o guia do CADE citado em `due-diligence-e-data-room`).

## Signing, closing e a mecânica de fechamento

Signing e closing simultâneos só quando não há notificação ao CADE nem anuência pendente. Com
intervalo, o vendedor carrega a deterioração do negócio, o leakage e o risco de financiamento do
comprador; as proteções são o MAC, a conduta no intervalo, a ticking fee e a garantia de
financiamento.

**MAC.** A cláusula de efeito adverso relevante (MAC ou MAE) permite ao comprador não fechar se o
alvo sofrer deterioração relevante no intervalo. O vendedor quer definição estreita e exclusões
amplas (economia geral, setor, mudança de lei, efeito do anúncio da transação, ato pedido pelo
comprador); o comprador, definição ampla. A ACTA leva à mesa o que "relevante" significa em número:
se houver métrica objetiva (queda de EBITDA, perda de contrato), calibre-a pela sensibilidade do
valuation, para que a cláusula proteja do que de fato muda o preço.

No fechamento, dois documentos econômicos: o **closing statement**, que calcula o preço linha a
linha, da base contratual ao valor pago, e o **funds flow**, que diz quem paga a quem, quanto, em
qual conta e contra qual documento. Fontes iguais a usos, ao centavo; conferência por quem não montou
a planilha; dado bancário confirmado por canal independente do e-mail que o enviou. Modelos, linhas
típicas e o calendário pós-fechamento em
[references/fechamento-e-funds-flow.md](references/fechamento-e-funds-flow.md).

**Depois do fechamento**, o ajuste de preço (completion accounts), as apurações do earn-out, as
reclamações de indenização e as liberações do escrow seguem o calendário do contrato, que a ACTA
controla até a última liberação.

**PPA (buy-side).** O comprador aloca o preço. O CPC 15 (R1) exige mensurar a valor justo, na data
da aquisição, os ativos identificáveis adquiridos e os passivos assumidos, inclusive intangíveis que
o alvo não registrava, e reconhecer o residual como ágio por expectativa de rentabilidade futura
(goodwill). Na apuração fiscal, o custo de aquisição se desdobra em valor patrimonial, mais-valia e
goodwill, e o aproveitamento dos dois últimos após incorporação, fusão ou cisão depende de laudo
protocolado no prazo e de aquisição entre partes não dependentes (Decreto-Lei 1.598/1977, art. 20,
na redação da Lei 12.973/2014; Lei 12.973/2014, arts. 20, 22 e 25). O prazo do laudo corre desde a
aquisição. Detalhe em [references/ppa-e-alocacao-do-preco.md](references/ppa-e-alocacao-do-preco.md).

## O que entregar

1. O term sheet econômico, com posição, concessão possível, limite e fundamento por termo.
2. A leitura de cada markup em reais.
3. O mecanismo de preço recomendado: leakage permitido e ticking fee (locked box), ou definições, peg
   e calendário de ajuste (completion accounts).
4. O earn-out com métrica, fórmula, exemplo numérico, controle e disputa.
5. O dimensionamento de escrow ou holdback e o custo esperado do pacote de indenização.
6. O cronograma das condições precedentes, com o prazo do CADE e a data-limite.
7. O closing statement e o funds flow conferidos.
8. O calendário pós-fechamento e, no buy-side, o suporte ao PPA.

> Instrumento jurídico é competência de advogado. Esta skill prepara e defende a posição econômica;
> a minuta e o parecer são da assessoria jurídica do mandato.

## Próximo passo

Com o fechamento, o estado final do mandato vai para o checkpoint (`acta-way:checkpoint`), e o que
se generaliza vira benchmark, pela regra de propagação de `convencoes-de-projeto`.
