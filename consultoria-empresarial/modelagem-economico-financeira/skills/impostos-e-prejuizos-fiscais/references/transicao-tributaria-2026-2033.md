# Transição tributária 2026–2033: reforma do consumo e tributação de dividendos

**Posição em out/2026** (fontes acessadas em 26/10/2026). Material de apoio da skill
`impostos-e-prejuizos-fiscais`. Direciona a modelagem no valuation e no orçamento; não substitui
parecer da assessoria tributária do cliente ou do mandato.

Convenções deste texto:

- Todo fato normativo traz a norma e o artigo, ou o órgão, o ato e a data. As URLs estão na seção 7.
- **(a confirmar)**: não conferido no texto da norma ou do ato. **(verificar estado)**: depende de
  decisão judicial ou administrativa pendente em out/2026.
- **Leitura ACTA**: inferência de modelagem a partir da norma, a validar com a assessoria tributária.
- Os artigos da LC 214/2025 foram conferidos na publicação original. A LC 227/2026, que instituiu o
  Comitê Gestor do IBS (art. 1º), e os regulamentos de 2026 podem ter alterado ou detalhado esses
  dispositivos (a confirmar). Confira a redação vigente antes de citar um artigo em entregável.

## 1. Reforma do consumo: o calendário (EC 132/2023 e LC 214/2025)

| Ano | O que vigora | Fonte |
|---|---|---|
| 2026 | Ano de teste: CBS a 0,9% e IBS a 0,1% (alíquota estadual). O valor recolhido é compensado com PIS/Cofins do mesmo período; sem débito suficiente, é compensado com outro tributo federal ou ressarcido em até 60 dias, mediante pedido. Quem cumpre as obrigações acessórias fica dispensado do recolhimento e continua obrigado a pagar PIS/Cofins integralmente. As alíquotas de teste não se aplicam ao Simples Nacional. | ADCT, art. 125; LC 214/2025, arts. 343, 346 e 348 |
| 2027 | CBS plena, pela alíquota fixada pela União (na falta de lei específica, a de referência), reduzida em 0,1 ponto percentual em 2027 e 2028. PIS e Cofins extintos, com a legislação revogada a partir de 01/01/2027. IPI com alíquotas reduzidas a zero, exceto para produtos com industrialização incentivada na Zona Franca de Manaus, e sem incidência cumulativa com o Imposto Seletivo, que passa a ser cobrado. | ADCT, arts. 126 e 127, parágrafo único; LC 214/2025, arts. 14, 347 e 542 |
| 2027–2028 | IBS a 0,05% (estadual) mais 0,05% (municipal). | ADCT, art. 127; LC 214/2025, art. 344 |
| 2029–2032 | ICMS e ISS cobrados a 9/10 (2029), 8/10 (2030), 7/10 (2031) e 6/10 (2032) das alíquotas das respectivas legislações; benefícios e incentivos desses impostos reduzidos na mesma proporção. As alíquotas de referência do IBS são fixadas para que a receita do IBS reponha a redução de ICMS e ISS. | ADCT, arts. 128 e 130, II e III; LC 214/2025, art. 349, II |
| 2033 | ICMS e ISS extintos. Ficam revogadas, entre outras, a LC 87/1996, a LC 116/2003 e a LC 160/2017. | ADCT, art. 129; LC 214/2025, art. 543 |

Três pontos que pesam na modelagem e na diligência:

- **Base de cálculo.** IBS e CBS são calculados por fora: não integram a própria base nem a do IPI,
  e ICMS, ISS e PIS/Cofins ficam fora da base de IBS e CBS de 2026 a 2032 (LC 214/2025, art. 12,
  § 2º, I, II e V).
- **Alíquota por destino.** A alíquota do IBS de cada operação é a soma das alíquotas do Estado e do
  Município de destino (LC 214/2025, art. 15). Cada ente fixa a sua por lei, vinculada ou não à
  alíquota de referência; sem lei específica, vale a de referência (art. 14, §§ 2º e 3º).
- **Obrigações acessórias de 2026.** O Ato Conjunto RFB/CGIBS nº 1, de 22/12/2025, fixou as
  obrigações acessórias do ano. O Ato Conjunto RFB/CGIBS nº 4, de 30/07/2026, fixou a data de início
  da obrigatoriedade de emissão de cada documento fiscal eletrônico com IBS e CBS, em cumprimento ao
  art. 112 do Decreto 12.955/2026 (regulamento da CBS) e da Resolução CGIBS nº 6/2026 (regulamento
  do IBS): NF-e de fornecimento de bens e NFC-e em 03/08/2026; NFS-e dos serviços em geral sujeitos
  ao ISS e NFCom em 01/10/2026, o que adiou para a nota de serviço a data de 03/08/2026 antes
  anunciada pelo CGIBS; outras espécies em 01/12/2026; documentos do Simples Nacional em 01/01/2027
  (Receita Federal, 31/07/2026). Obrigatório não quer dizer rejeitado: o Ato Técnico Conjunto
  RFB/CGIBS nº 1, de 31/07/2026, adiou as validações que rejeitariam, a partir de 03/08/2026, o
  documento sem os novos campos, e a obrigação de preenchê-los continua (CGIBS e Receita Federal,
  esclarecimento de ago/2026, em reprodução: https://www.legisweb.com.br/noticia/?id=34131). A
  apuração do ano é informativa, sem efeito tributário (CGIBS, comunicado de 2026), e quem cumpre as
  obrigações acessórias fica dispensado do recolhimento (LC 214/2025, art. 348, § 1º). O programa de
  conformidade de 2026 foi regulamentado pelo Ato Conjunto RFB/CGIBS nº 5, de 12/08/2026 (lista de
  atos conjuntos da Receita Federal, atualizada em 16/10/2026). Textos dos atos não consultados;
  datas e conteúdo vêm das notícias e listas da Receita Federal e do CGIBS citadas (a confirmar no
  texto antes de citar em entregável).
  Cronograma por espécie e teste do documento: plugin de revenue assurance, skill `faturamento-e-nf`,
  §2.

### 1.1 Alíquota de referência: o que está fixado em out/2026

**Rito.** Resolução do Senado fixa a alíquota de referência da CBS para 2027 a 2033 e as do IBS
para 2029 a 2033, com base em cálculo do TCU sobre proposta do Poder Executivo (CBS) e do Comitê
Gestor (IBS) (LC 214/2025, art. 349, caput e § 3º). Na regra geral, o TCU envia os cálculos até
15/09 e o Senado fixa até 31/10 do ano anterior ao da vigência (art. 349, § 1º). Em 2026 esses
prazos e o de envio da proposta foram prorrogados em 45 dias (art. 353, § 2º), o que dá 14/09/2026
para a proposta, 30/10/2026 para o TCU e 15/12/2026 para o Senado. Se a fixação passar de 22/12,
valem provisoriamente as alíquotas calculadas pelo TCU (art. 349, § 2º). A fixação não se sujeita
à noventena do art. 150, III, "c", da Constituição (ADCT, art. 130, § 1º), e o valor é arredondado
ao décimo de ponto percentual mais próximo (LC 214/2025, art. 349, § 14).

**Estado em 26/10/2026.** Nenhuma alíquota de referência estava fixada. A Receita Federal enviou ao
TCU, em 14/09/2026, a proposta de cálculo da CBS de 2027 sem estimativa numérica (Conjur,
15/10/2026), e o TCU pautou a deliberação para 28/10/2026 (reformatributaria.com, out/2026).
Verifique o resultado antes de usar qualquer número.

**Estimativas públicas, nenhuma oficial:**

| Número | Quem e quando | Natureza |
|---|---|---|
| 27,91% (IBS + CBS), dos quais 18,70% de IBS | Resolução CGIBS nº 14, de 29/07/2026, que estimou a arrecadação do IBS de 2027. Parte da alíquota total de 26,50% (parcela do IBS de 17,70%) estimada pela Secretaria Extraordinária da Reforma Tributária e de nova alíquota total estimada de 27,91%, com fator de atualização de 1,0532, até a parcela do IBS de 18,70% | Parâmetro metodológico do ato, sem valor de alíquota aplicável (Legal 500, 2026; Conjur, 15/10/2026). Texto da resolução não consultado (a confirmar) |
| 9,21% (CBS) | Diferença aritmética entre 27,91% e 18,70%, feita por analistas | Inferência; não consta como alíquota em ato oficial |
| 8,8% a 9,3% (CBS de 2027) | Tributaristas ouvidos pelo Valor, 14/09/2026 | Estimativa de mercado |

**Trava de 26,5%.** Na avaliação quinquenal, se a soma das alíquotas de referência estimadas
superar 26,5%, o Executivo, ouvido o Comitê Gestor, envia projeto de lei complementar com medidas
para reduzir o percentual (LC 214/2025, art. 475, §§ 10 a 12). Não é teto automático de alíquota.

**Controvérsia em formação (verificar estado).** Há tese de que a CBS, por ser contribuição social,
continuaria sujeita à noventena do art. 195, § 6º, da Constituição, que o ADCT não afastou
expressamente (Conjur, 15/10/2026). Se a tese prosperar, a alíquota fixada em dezembro só seria
cobrada 90 dias depois da publicação.

**A alíquota do contribuinte não é a de referência.** A LC prevê operações com alíquota reduzida em
60% e em 30% da alíquota-padrão, regimes específicos e créditos presumidos (LC 214/2025, arts. 126
e 351, I e II). A alíquota do modelo sai da classificação fiscal de cada linha de receita.

### 1.2 Split payment

**O que a LC prevê.** Na liquidação financeira de uma venda, o prestador de serviço de pagamento
segrega e recolhe IBS e CBS ao Comitê Gestor e à Receita Federal (LC 214/2025, art. 31). No
procedimento padrão, recolhe a diferença entre o débito destacado no documento fiscal e a parcela
já extinta; se a consulta ao sistema não for possível, recolhe o débito integral, e o excedente
volta ao fornecedor em até 3 dias úteis (art. 32, §§ 3º e 4º). Nas vendas a quem não é contribuinte
do regime regular, o fornecedor pode optar pelo procedimento simplificado, com percentual
preestabelecido sobre o valor da operação e devolução do excedente em até 3 dias úteis após a
apuração (art. 33). A implementação é gradual, definida por ato conjunto do Comitê Gestor e da
Receita Federal, que pode tornar a adoção facultativa em algumas hipóteses; nas vendas a não
contribuintes, começa ao mesmo tempo nos principais instrumentos de pagamento do varejo (art. 35,
§§ 1º a 3º).

**Estado em out/2026.** O Ato Conjunto RFB/CGIBS nº 2, publicado em 03/06/2026, aprovou o manual de
integração e a especificação técnica da Plataforma Pública do Split Payment, para que os
prestadores de serviço de pagamento desenvolvam suas soluções (Ministério da Fazenda, 08/06/2026).
O calendário de obrigatoriedade por instrumento de pagamento e por tipo de operação não foi
identificado (a confirmar).

### 1.3 Crédito, ressarcimento e saldos que vêm do sistema atual

- **Crédito amplo.** O contribuinte do regime regular apropria crédito de IBS e de CBS sobre as
  aquisições, salvo as de uso ou consumo pessoal (lista do art. 57) e outras hipóteses previstas na
  LC, com duas condições: documento fiscal eletrônico idôneo e extinção do débito do fornecedor
  (LC 214/2025, art. 47, caput e § 1º, II). O débito se extingue por compensação, pagamento, split
  payment, recolhimento pelo adquirente ou pagamento pelo responsável (art. 27). Crédito de IBS não
  abate CBS, e vice-versa (art. 47, § 1º, I). Venda com alíquota reduzida não obriga a estornar
  crédito, salvo previsão expressa (art. 47, § 10).
- **Fornecedor do Simples.** Se o fornecedor não optou pelo regime regular, o adquirente credita o
  valor de IBS e CBS pago no Simples, não a alíquota cheia (art. 47, § 9º).
- **Folha não gera crédito.** IBS e CBS não incidem sobre o serviço prestado em relação de emprego
  nem sobre a atuação de administradores e conselheiros (art. 6º, I). Negócio intensivo em mão de
  obra tem pouca compra para creditar.
- **Ressarcimento de saldo credor** (art. 39, § 3º, e art. 40): até 30 dias para contribuinte em
  programa de conformidade, nos casos do art. 40; até 60 dias nos casos do art. 40 (crédito de ativo
  imobilizado, ou pedido de até 150% da média mensal de créditos menos débitos dos 24 meses
  anteriores); até 180 dias nos demais. Sem manifestação no prazo, o ressarcimento ocorre em 15 dias
  (art. 39, § 4º); fiscalização suspende o prazo por até 360 dias (§§ 5º a 7º); o valor é corrigido
  pela Selic a partir do segundo mês após o pedido (§ 9º).
- **Saldo de PIS/Cofins** não utilizado até a extinção: continua válido, compensa CBS e pode ser
  ressarcido ou compensado com outros tributos federais nas condições da legislação dessas
  contribuições na data da extinção (art. 378).
- **Saldo credor de ICMS** existente ao fim de 2032 e homologado pelo Estado: compensado com o IBS
  pelo prazo remanescente, quando relativo a bens do ativo permanente (LC 87/1996, art. 20, § 5º),
  e em 240 parcelas mensais, iguais e sucessivas, nos demais casos (ADCT, art. 134, §§ 1º e 3º). O
  rito de homologação depende de lei complementar (art. 134, caput); se a LC 227/2026 já o definiu,
  a confirmar.

### 1.4 Benefícios fiscais de ICMS

- Caem na mesma proporção das alíquotas de 2029 a 2032 e acabam com o imposto em 2033; os
  benefícios convalidados pela LC 160/2017 seguem a mesma redução (ADCT, art. 128, §§ 1º e 2º; LC
  214/2025, art. 543, VI, que revoga a LC 160/2017 a partir de 2033).
- O Fundo de Compensação de Benefícios Fiscais ou Financeiro-Fiscais do ICMS compensa, de 2029 a
  2032, beneficiários de benefícios concedidos por prazo certo e sob condição (EC 132/2023, art. 12,
  caput). A União aporta de R$ 8 bilhões (2025) a R$ 32 bilhões (2028 e 2029), voltando a R$ 8
  bilhões em 2032, em valores de 2023 corrigidos pelo IPCA (art. 12, § 1º).
- A compensação alcança benefícios onerosos regularmente concedidos até 31/05/2023, com as
  condições cumpridas e, quando aplicável, o registro e o depósito exigidos pela LC 160/2017, e
  depende de habilitação (LC 214/2025, art. 384, parágrafo único, I).

### 1.5 Contratos vigentes

- **Com a administração pública**, inclusive concessões: ajuste para restabelecer o equilíbrio
  econômico-financeiro quando comprovado o desequilíbrio pela mudança da carga tributária efetiva,
  mesmo que a matriz de risco atribua à contratada o impacto tributário superveniente (LC 214/2025,
  art. 374, caput e § 2º). A carga efetiva considera crédito, repasse, transição e benefícios
  extintos (art. 374, § 1º). Redução de carga leva à revisão de ofício (art. 375). O pedido vai
  instruído com cálculo e é decidido em até 90 dias, prorrogáveis uma vez (art. 376, IV e § 1º).
- **Privados:** o capítulo não se aplica (art. 373, § 2º). Vale a cláusula de tributos e de
  reajuste de cada contrato.

## 2. Como modelar no valuation e no orçamento

### 2.1 A regra

1. Projete os tributos sobre a receita ano a ano pelo calendário da seção 1. Carga de 2025 mantida
   até a perpetuidade é erro.
2. O ano terminal fica no regime de 2033: IBS e CBS plenos; ICMS, ISS, PIS, Cofins e IPI (salvo Zona
   Franca) fora; nenhum benefício de ICMS. Se o horizonte explícito termina antes de 2033,
   normalize o ano terminal para esse regime (ver `valor-terminal`).
3. O driver é o preço líquido de tributos. A receita bruta é consequência da carga de cada ano; o
   que move EBITDA, NOPAT e valor é a hipótese de repasse, o crédito sobre as compras e o capital de
   giro.
4. Enquanto a alíquota de referência não for publicada, a premissa entra como faixa, com fonte e
   data (seção 1.1), e é trocada pelo número oficial quando sair.
5. Tributo sobre a receita fica nas deduções e chega ao NOPAT pela margem. O imposto operacional do
   NOPAT continua sendo IRPJ e CSLL (passos 2 e 4 da skill).

### 2.2 Receita bruta e deduções, por ano

| Linha | 2026 | 2027–2028 | 2029–2032 | 2033 em diante |
|---|---|---|---|---|
| PIS/Cofins | Integral | Extinto | Extinto | Extinto |
| CBS | 0,9% destacado, sem efeito econômico se cumpridas as obrigações acessórias | Alíquota da CBS menos 0,1 p.p. | Alíquota da CBS | Alíquota da CBS |
| IBS | 0,1% destacado, idem | 0,1% (0,05% + 0,05%) | Sobe conforme ICMS e ISS caem | Pleno |
| ICMS e ISS | Integral | Integral | 90%, 80%, 70% e 60% da alíquota | Extintos |
| Benefício de ICMS | Integral | Integral | Cai na proporção da alíquota | Zero |
| IPI | Integral | Zero, salvo Zona Franca | Idem | Idem |
| Imposto Seletivo | Não cobrado | Onde incidir | Onde incidir | Onde incidir |

Leitura ACTA: em 2026, se o cliente não cumpriu as obrigações acessórias, a dispensa do art. 348,
§ 1º, não o alcança. O recolhimento de teste continua compensável com PIS/Cofins (art. 348, I e II),
mas vira ponto de diligência.

### 2.3 Crédito amplo e margem

- Referência de carga atual: 3,65% sobre a receita, sem crédito, no PIS/Cofins cumulativo (0,65% +
  3%), e 9,25% com crédito restrito no não cumulativo (1,65% + 7,6%), que são as alíquotas do
  sistema-padrão citadas na LC 224/2025, art. 4º, § 3º, III.
- Com a CBS e o IBS, a carga líquida é a alíquota sobre o valor adicionado: débito sobre a venda
  menos crédito sobre as compras creditáveis. Monte a conta por linha de negócio, separando compras
  que passam a dar crédito (despesas que hoje não creditam PIS/Cofins nem ICMS), compras de
  fornecedor do Simples (crédito menor) e folha (sem crédito).
- Leitura ACTA, a quantificar caso a caso: serviço intensivo em mão de obra, hoje no cumulativo,
  tende a ter carga maior e perde margem se não repassar; negócio com muita compra de serviço e de
  despesa geral sem crédito hoje tende a ganhar crédito.

### 2.4 Preço e repasse

Colunas de modelagem em leitura ACTA:

| Cliente | O que acontece com o tributo | Como modelar |
|---|---|---|
| Contribuinte do regime regular | Credita o IBS e a CBS da compra | O preço que importa é o líquido. Caso base com margem líquida preservada; teste perda de preço líquido |
| Optante do Simples, consumidor final, não contribuinte | O tributo é custo final | Repasse depende de elasticidade e concorrência: cenário com repasse parcial |
| Administração pública | Reequilíbrio pelo art. 374 | Modele o desequilíbrio até a decisão (até 90 dias, prorrogáveis) e a revisão de ofício quando a carga cai (art. 375) |
| Contrato privado longo | Depende da cláusula | Leia a cláusula de tributos e de reajuste antes de projetar |

### 2.5 Capital de giro

- **Split payment (leitura ACTA).** Hoje o tributo da venda fica no caixa entre o recebimento e o
  recolhimento. Com o split payment, ele é segregado na liquidação (art. 31): a conta de tributos a
  recolher encolhe, com uma saída de caixa não recorrente quando o mecanismo passar a valer para o
  meio de recebimento do cliente. Calendário a confirmar (seção 1.2).
- **Crédito no tempo do pagamento (leitura ACTA).** O crédito do adquirente depende da extinção do
  débito do fornecedor (art. 47), e não só da nota. Com split payment, a extinção tende a coincidir
  com o pagamento ao fornecedor, e prazo médio de pagamento longo atrasa o crédito. Modele o crédito
  defasado pelo prazo de pagamento até o regulamento indicar outra coisa.
- **Saldo credor acumulado (leitura ACTA).** Exportador, empresa em fase de investimento e quem
  vende com alíquota reduzida tendem a acumular saldo, que vira valor a receber do Fisco no prazo do
  art. 39 (30, 60 ou 180 dias, mais a eventual fiscalização). Saldo crescente no histórico indica
  que o prazo vai pesar.
- **Saldos legados.** PIS/Cofins: compensáveis com CBS (art. 378); modele o consumo. ICMS ao fim de
  2032: 240 parcelas mensais (ADCT, art. 134, § 3º, II); trate a valor presente, fora do capital de
  giro normalizado.

### 2.6 Benefícios fiscais de ICMS

- Projete o benefício com redução de 10%, 20%, 30% e 40% de 2029 a 2032 (a proporção das alíquotas)
  e zero a partir de 2033.
- A compensação do Fundo só entra no modelo se o benefício for oneroso, concedido até 31/05/2023,
  com condições cumpridas e habilitação (LC 214/2025, art. 384). Sem a documentação, fica fora do
  caso base.
- Benefício de ICMS no ano terminal é erro.
- Some o corte de 10% dos benefícios federais da LC 224/2025 (seção 4).

### 2.7 Perguntas ao cliente

1. Regime de PIS/Cofins (cumulativo, não cumulativo ou misto) e de IRPJ de cada empresa do grupo.
2. Receita por tipo de cliente (contribuinte do regime regular, Simples, consumidor final,
   administração pública), com o percentual de cada um.
3. Classificação fiscal (NCM/NBS) das principais linhas e enquadramento em alíquota reduzida,
   regime específico ou Imposto Seletivo.
4. Compras: participação de fornecedores do Simples, despesas hoje sem crédito e prazo médio de
   pagamento.
5. Meios de recebimento (cartão, Pix, boleto, transferência) e prazo médio de recebimento.
6. Benefícios de ICMS e ISS: ato concessivo, prazo, condição onerosa, registro e depósito (LC
   160/2017) e habilitação ao Fundo de Compensação.
7. Saldos credores de ICMS e de PIS/Cofins: valor, origem, idade, homologação e histórico de uso e
   de ressarcimento.
8. Contratos: cláusula de tributos e de reajuste; contratos públicos e pedidos de reequilíbrio já
   protocolados.
9. Política de preço para 2027: tabela com tributo por fora e plano de repasse por tipo de cliente.
10. Conformidade de 2026: documentos fiscais com os campos de IBS e CBS a partir da data de cada
    espécie (NF-e e NFC-e em 03/08/2026; NFS-e e NFCom em 01/10/2026; ver seção 1),
    parametrização do ERP e obrigações acessórias em dia.
11. Benefícios federais atingidos pela LC 224/2025 e efeito do acréscimo no lucro presumido.

### 2.8 O que a diligência de M&A verifica

| Frente | O que pedir | Saída econômica |
|---|---|---|
| Preço | Contratos relevantes com a cláusula de tributos; tabela de preço de 2027; receita por tipo de cliente; pedidos de reequilíbrio com o poder público | EBITDA de referência e projeção com repasse explícito; risco de margem em contrato sem cláusula |
| Crédito | Composição e idade dos saldos de ICMS e de PIS/Cofins a recuperar; homologações; créditos presumidos e benefícios em uso | Saldo a valor presente na ponte EV → equity, fora do nível de referência de capital de giro; indenização específica para crédito glosado |
| Capital de giro | Tributos a recolher e a recuperar dos últimos 12 a 24 meses; meios de recebimento; prazos de pagamento a fornecedor | Nível de referência sem a distorção da transição (o histórico de 2026 não reflete CBS plena nem split payment) e regra explícita para saldos tributários no ajuste de fechamento |
| Benefícios | Ato concessivo, condições, cláusula de perda por mudança de controle, habilitação ao Fundo | Benefício modelado com prazo e redução legal; condição precedente ou preço se houver perda |
| Conformidade de 2026 | Documentos fiscais com os campos de IBS e CBS; obrigações acessórias do ano de teste | Sem conformidade, a dispensa de recolhimento de 2026 não se aplica (art. 348, § 1º): contingência e custo de regularização |
| Dividendos | Atas de aprovação até 31/12/2025, ou até 31/01/2026 sob a liminar do STF (verificar estado); cronograma de pagamento; retenção de 2026 | Item assemelhado a dívida; contingência se a retenção não foi feita (seção 3) |

Estrutura da transação: IBS e CBS não incidem sobre a alienação de participação societária nem
sobre a transmissão de bens em fusão, cisão, incorporação e integralização ou devolução de capital
(LC 214/2025, art. 6º, III e IV), ressalvados o art. 5º, III, e o conjunto de atos que constitua,
na essência, operação onerosa com bem ou serviço (art. 6º, § 1º). Venda de ativos fora dessas
hipóteses: tratamento a confirmar com a assessoria tributária.

## 3. Lei 15.270/2025: dividendos e tributação mínima

**Vigência.** Sancionada em 26/11/2025, publicada no DOU de 27/11/2025, com efeitos a partir de
01/01/2026 (art. 8º).

### 3.1 O que a lei estabelece

- **Retenção mensal** (Lei 9.250/1995, art. 6º-A, incluído pela Lei 15.270/2025): lucros e
  dividendos pagos, creditados, empregados ou entregues por uma mesma pessoa jurídica a uma mesma
  pessoa física residente no Brasil, em montante superior a R$ 50 mil no mês, sofrem retenção de
  10% sobre o total do valor, e não só sobre o excedente (caput). Não se admite dedução da base
  (§ 1º). Havendo mais de um pagamento no mês, a retenção é recalculada sobre o total do mês (§ 2º).
- **Transição da retenção** (art. 6º-A, § 3º): ficam fora os lucros e dividendos relativos a
  resultados apurados até 2025, cuja distribuição tenha sido aprovada até 31/12/2025 e que sejam
  exigíveis pela legislação civil ou empresarial, desde que o pagamento ocorra nos termos
  originalmente previstos no ato de aprovação.
- **Tributação mínima (IRPFM)** (Lei 9.250/1995, art. 16-A): a partir do exercício de 2027
  (ano-calendário de 2026), para a pessoa física cuja soma de rendimentos no ano supere R$ 600 mil.
  A base inclui rendimentos isentos, tributados exclusivamente na fonte e sujeitos a alíquota zero
  ou reduzida, com as exclusões do § 1º (entre elas, ganhos de capital fora de bolsa, poupança,
  doação em adiantamento de legítima ou herança, certos títulos incentivados e indenizações).
  Alíquota de 10% para rendimentos a partir de R$ 1,2 milhão; entre R$ 600 mil e R$ 1,2 milhão,
  cresce linearmente de 0% a 10%, pela fórmula alíquota (%) = rendimentos / 60.000 − 10 (§ 2º). Do
  imposto mínimo deduzem-se o IRPF devido no ajuste, o imposto retido exclusivamente na fonte sobre
  rendimentos da base, o imposto pago definitivamente e o redutor do art. 16-B (§ 3º). Do resultado
  deduz-se o valor retido pelo art. 6º-A (§ 5º).
- **Transição do IRPFM** (art. 16-A, § 1º, XII): ficam fora da base os lucros e dividendos de
  resultados até 2025, com distribuição aprovada até 31/12/2025 pelo órgão societário competente,
  pagos em 2026, 2027 ou 2028 nos termos do ato de aprovação.
- **Redutor** (Lei 9.250/1995, art. 16-B): quando a alíquota efetiva de IRPJ e CSLL da pessoa
  jurídica somada à alíquota efetiva do IRPFM sobre os dividendos dela passa da soma das alíquotas
  nominais de IRPJ e CSLL (34% na regra geral; percentuais próprios para os setores do § 1º, II e
  III, a confirmar), concede-se redutor sobre esses dividendos. A alíquota efetiva da pessoa
  jurídica é a razão entre IRPJ e CSLL devidos e o lucro contábil antes dos tributos sobre a renda,
  no exercício a que se referem os lucros (§ 3º). O redutor exige demonstrações financeiras
  elaboradas conforme a legislação societária e as normas contábeis (§ 4º); empresa fora do lucro
  real pode optar por um lucro contábil simplificado (§ 6º).
- **Remessa ao exterior** (Lei 9.249/1995, art. 10, § 4º, na redação da Lei 15.270/2025): retenção
  de 10% sobre lucros e dividendos remetidos ao exterior. O § 5º exclui, entre outros, os resultados
  até 2025 nas mesmas condições de aprovação e pagamento, governos estrangeiros com reciprocidade e
  entidades no exterior que administram benefícios previdenciários (demais hipóteses a confirmar). O
  beneficiário no exterior pode pedir crédito quando a alíquota efetiva da pessoa jurídica somada
  aos 10% passar da soma das nominais de IRPJ e CSLL, em até 360 dias contados de cada exercício
  (art. 10-A).

### 3.2 O que afeta a empresa e o que afeta o acionista

| Efeito | Fluxo da empresa (FCFF, EV) | Líquido do acionista |
|---|---|---|
| Retenção de 10% (art. 6º-A) | Nenhum: a sociedade retém e recolhe em nome do sócio. Gera obrigação acessória e, se não feita, contingência da pagadora (extensão com a assessoria tributária) | Antecipação, deduzida no IRPFM do ano |
| IRPFM (art. 16-A) | Nenhum | Imposto anual, função da renda total da pessoa física |
| Redutor (art. 16-B) | Nenhum direto. A alíquota efetiva da empresa e demonstrações financeiras regulares passam a ter valor econômico para o sócio | Reduz o IRPFM quando a carga combinada passa de 34% |
| Remessa ao exterior (art. 10, § 4º) | Nenhum no FCFF | 10% na fonte, com o crédito do art. 10-A |
| Dividendo aprovado e não pago | Obrigação da sociedade com os sócios: item assemelhado a dívida na ponte EV → equity (ver `triangulacao-e-faixa`) | Fora da retenção e da base do IRPFM se pago nos termos do ato |

**Regra de modelagem.** O modelo da casa avalia a empresa: FCFF descontado ao WACC. Não ajuste
WACC nem FCFF pelo imposto do acionista sobre dividendos. Ele entra no líquido do vendedor, rota por
rota (dividendo antes do fechamento ou preço), com a conta da assessoria tributária sobre os
cenários de preço e de caixa da ACTA (ver `acta-ma-sell-buy-side:negociacao-e-loi`, se estiver
instalado).

### 3.3 Contencioso (verificar estado)

- **STF.** As ADIs 7.912 e 7.914 questionam o prazo de 31/12/2025 para aprovar a distribuição, com
  o argumento de que a Lei das S.A. e o Código Civil preveem essa deliberação nos quatro meses
  seguintes ao fim do exercício; a ADI 7.917 questiona a aplicação a optantes do Simples Nacional
  (STF, notícia de 24/12/2025). Liminar de 26/12/2025, nas ADIs 7.912 e 7.914, prorrogou o prazo
  para 31/01/2026 (Valor, 26/12/2025). O referendo começou no Plenário Virtual em 13/02/2026 e foi
  interrompido por pedido de destaque em 18/02/2026, para reinício em sessão presencial sem data
  (Conjur, 19/02/2026). Desfecho até out/2026 não confirmado. Consequência: distribuição aprovada entre
  01/01 e 31/01/2026 depende da manutenção da liminar.
- **TRF4.** Em 05/08/2026, no agravo de instrumento 5026333-41.2026.4.04.0000, tutela recursal
  parcial determinou, só para as partes, que a retenção sobre pagamentos mensais entre R$ 50 mil e
  R$ 100 mil não supere o percentual compatível com a tributação anual projetada. O mérito será
  julgado pela Turma (TRF4, notícia de 05/08/2026). A regra para terceiros não muda.

## 4. LC 224/2025: corte de benefícios federais e lucro presumido

**O que é.** Lei complementar que dispõe sobre a redução e os critérios de concessão de incentivos
e benefícios de natureza tributária, financeira ou creditícia da União (ementa), publicada em
26/12/2025 segundo fontes secundárias (data a confirmar no DOU).

- **Corte linear** (art. 4º): benefícios federais de PIS/Cofins, IRPJ, CSLL, Imposto de Importação,
  IPI e contribuição previdenciária patronal (§ 1º) são reduzidos cumulativamente pela regra do
  § 4º: isenção e alíquota zero passam a 10% da alíquota-padrão; alíquota reduzida vira 90% da
  reduzida mais 10% da padrão; redução de base ou de tributo cai a 90%; crédito presumido ou
  financeiro fica limitado a 90%; regimes cobrados como percentual da receita sobem 10%; regimes de
  base presumida têm acréscimo de 10% nos percentuais de presunção.
- **Lucro presumido** (art. 4º, § 5º): o acréscimo só vale sobre a parcela da receita bruta total
  que exceder R$ 5 milhões no ano, aplicado proporcionalmente a cada período de apuração e a cada
  atividade. Acórdão do TRF3 de 28/09/2026 cita o parâmetro trimestral de R$ 1,25 milhão adotado na
  regulamentação (instrução normativa da Receita Federal, número a confirmar).
- **Exceções** (art. 4º, § 8º, incisos I a XIII): entre outras, imunidades, benefício por prazo
  determinado com condição onerosa já cumprida (investimento previsto em projeto aprovado pelo
  Executivo federal até 31/12/2025), benefícios com teto global e habilitação prévia, alíquotas ad
  rem e a política industrial de TIC e semicondutores. Confira caso a caso.
- **Outras mudanças**: a lei alterou a Lei 9.249/1995 e a Lei 7.689/1988 (ementa); fontes
  secundárias apontam aumento do imposto retido sobre juros sobre capital próprio e da carga de
  instituições de pagamento e apostas (percentuais a confirmar). Vigência por tributo: a confirmar.
- **Contencioso**: em 28/09/2026, o TRF3 negou provimento a agravos de instrumento contra o
  indeferimento de liminar que pedia a suspensão do acréscimo do presumido (verificar estado).

**Modelagem.** Recalcule a alíquota efetiva do presumido com o acréscimo sobre a receita acima de
R$ 5 milhões e refaça a comparação presumido × real do passo 1 da skill. Na leitura corrente, o
acréscimo é de 10% sobre o percentual, e não de 10 pontos: um percentual de presunção de 32%
passaria a 35,2% sobre a parcela excedente (a confirmar na regulamentação). Reveja também cada
benefício federal que o modelo carrega.

## 5. STF, Tema 1.401: a trava de 30% na extinção da pessoa jurídica

**O que é.** Tema 1.401 da repercussão geral: se é constitucional limitar a compensação de prejuízo
fiscal do IRPJ e de base negativa da CSLL, na forma dos arts. 15 e 16 da Lei 9.065/1995 e do art. 58
da Lei 8.981/1995, quando a pessoa jurídica é extinta. Repercussão geral reconhecida em 31/05/2025;
acórdão publicado em 21/08/2025; mérito pendente na consulta de 26/10/2026 (verificar estado).

**Modelagem.** No caso base, a trava de 30% vale também no último período da pessoa jurídica
extinta, e o saldo que sobra se perde na incorporação. Compensação integral na extinção é upside
condicionado ao julgamento: entra em cenário, não no caso base, e só interessa quando a estrutura
prevê incorporar a pessoa jurídica que detém o prejuízo.

## 6. Red flags da transição

- PIS/Cofins projetados depois de 2026, ou ICMS e ISS depois de 2032.
- Benefício de ICMS no ano terminal, ou compensação pelo Fundo sem prova de onerosidade e de
  habilitação.
- 27,91% ou 9,21% tratados como alíquota oficial.
- Receita bruta como driver, com margem preservada sem hipótese explícita de repasse.
- Saldo credor de ICMS no capital de giro pelo valor de face.
- Nível de referência de capital de giro calculado sobre histórico que não reflete CBS plena nem
  split payment.
- Dividendo aprovado até 31/12/2025 e não pago fora da ponte EV → equity.
- Retenção de 10% sobre dividendos tratada como redução do EV.

## 7. Fontes

Acesso em 26/10/2026. O portal do Planalto não respondeu na data; os textos foram conferidos na
Câmara dos Deputados ou em reprodução, indicada abaixo. Os itens 13, 14, 17, 18, 19 e 20, e o link
do Ato Conjunto RFB/CGIBS nº 1/2025 no item 6, foram conferidos pelo resumo do buscador, sem abrir a
página. O item 8 e a página do CGIBS no item 6 foram abertos na revisão de 26/10/2026; os itens 21
a 24 entraram nessa revisão.

Normas e atos:

1. Emenda Constitucional 132/2023 (ADCT, arts. 125 a 134; art. 12 da EC), publicação original na
   Câmara dos Deputados:
   https://www2.camara.leg.br/legin/fed/emecon/2023/emendaconstitucional-132-20-dezembro-2023-795084-publicacaooriginal-170513-pl.html
2. Lei Complementar 214/2025, publicação original na Câmara dos Deputados:
   https://www2.camara.leg.br/legin/fed/leicom/2025/leicomplementar-214-16-janeiro-2025-796905-publicacaooriginal-174141-pl.html
   (texto compilado, não acessado: https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm)
3. Lei 15.270/2025, dados da norma na Câmara dos Deputados:
   https://www2.camara.leg.br/legin/fed/lei/2025/lei-15270-26-novembro-2025-798354-norma-pl.html ;
   Senado Federal (DOU de 27/11/2025, p. 3): https://legis.senado.leg.br/norma/41758136 ; texto dos
   arts. 6º-A, 16-A e 16-B da Lei 9.250/1995 e dos arts. 10 e 10-A da Lei 9.249/1995, conferido em
   reprodução: https://modeloinicial.com.br/lei/L-15270-2025/lei-15270 (Planalto, não acessado:
   https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15270.htm)
4. Lei Complementar 224/2025, ementa e art. 4º, em reprodução (com ementas de acórdãos do TRF3 de
   28/09/2026): https://modeloinicial.com.br/lei/LCP-224-2025/lei-complementar-224 e
   https://modeloinicial.com.br/lei/LCP-224-2025/lei-complementar-224/art-4
5. Lei Complementar 227/2026, art. 1º, em reprodução:
   https://modeloinicial.com.br/lei/LCP-227-2026/lei-complementar-227
6. Ato Conjunto RFB/CGIBS nº 1, de 22/12/2025: https://www.legisweb.com.br/legislacao/?id=488401 ;
   CGIBS, prazo de adequação dos sistemas de emissão até 31/07/2026:
   https://www.cgibs.gov.br/prazo-para-adequacao-dos-sistemas-de-emissao-de-notas-fiscais-ao-regulamento-do-ibs-encerra-em
7. Ministério da Fazenda, 08/06/2026, Ato Conjunto RFB/CGIBS nº 2 e documentação técnica do split
   payment:
   https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/junho/receita-federal-e-comite-gestor-do-ibs-publicam-documentacao-tecnica-da-plataforma-publica-do-split-payment
8. Receita Federal, jul/2026, Ato Conjunto RFB/CGIBS nº 4/2026, Decreto 12.955/2026 e Resolução
   CGIBS nº 6/2026:
   https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/julho/receita-federal-e-comite-gestor-do-ibs-publicam-o-cronograma-de-implementacao-dos-documentos-fiscais-eletronicos-da-reforma-tributaria-do-consumo
9. STF, Tema 1.401 da repercussão geral:
   https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=1401
10. STF, notícia de 24/12/2025, ADIs 7.912, 7.914 e 7.917:
    https://noticias.stf.jus.br/postsnoticias/stf-recebe-acoes-contra-nova-lei-sobre-tributacao-de-dividendos-e-altas-rendas/
11. TRF4, notícia de 05/08/2026, agravo de instrumento 5026333-41.2026.4.04.0000:
    https://www.trf4.jus.br/trf4/controlador.php?acao=noticia_visualizar&id_noticia=30364

Imprensa e análises, para estado de processos e estimativas:

12. Conjur, 19/02/2026, pedido de destaque no referendo da liminar:
    https://conjur.com.br/2026-fev-19/stf-interrompe-analise-sobre-prorrogacao-do-prazo-para-aprovacao-de-dividendos-2/
13. Valor, 26/12/2025, liminar que prorrogou o prazo para 31/01/2026:
    https://valor.globo.com/google/amp/legislacao/noticia/2025/12/26/stf-adia-para-31-de-janeiro-prazo-para-deliberao-sobre-dividendos-para-evitar-tributao.ghtml
14. Valor, 14/02/2026, início do julgamento da liminar:
    https://valor.globo.com/google/amp/legislacao/noticia/2026/02/14/stf-comeca-a-julgar-liminar-que-adiou-tributacao-de-dividendos.ghtml
15. Conjur, 15/10/2026, prazos de 2026, proposta da Receita e noventena da CBS:
    https://conjur.com.br/2026-out-15/aliquota-da-cbs-para-2027-e-anterioridade-nonagesimal-uma-controversia-constitucional-em-formacao/
16. reformatributaria.com, out/2026, pauta do TCU de 28/10/2026:
    https://www.reformatributaria.com/iva/tcu-marca-para-4a-feira-deliberacao-de-processo-sobre-o-calculo-da-cbs/
17. Legal 500, 2026, parâmetros da Resolução CGIBS nº 14/2026:
    https://www.legal500.com/intelligence/brazil/tax/aliquota-da-cbs-tem-estimativa-implicita-de-921-revelada-por-resolucao-do-cgibs
18. Valor, 14/09/2026, estimativa de 8,8% a 9,3% para a CBS:
    https://valor.globo.com/google/amp/impresso/noticia/2026/09/14/governo-e-tcu-iniciam-calculos-da-nova-cbs.ghtml
19. CNN Brasil, 14/09/2026, proposta da Receita ao TCU sem alíquota:
    https://www.cnnbrasil.com.br/economia/money/macroeconomia/receita-apresenta-ao-tcu-calculo-da-cbs-sem-estimar-aliquota/
20. Fontes secundárias sobre a data de publicação e o alcance da LC 224/2025:
    https://pradvogados.com.br/2026/01/02/lei-complementar-224-2025-reduz-incentivos-fiscais-e-eleva-a-tributacao-para-diversos-setores/
    e https://fasadv.com.br/pt/bra/publication/lei-complementar-no-224-2025-restricao-de-incentivos-fiscais-e-aumento-de-carga-tributaria

Documentos fiscais e conformidade de 2026:

21. CGIBS e Receita Federal, esclarecimento de ago/2026 sobre o adiamento das validações de rejeição,
    em reprodução: https://www.legisweb.com.br/noticia/?id=34131
22. Receita Federal, lista dos Atos Conjuntos RFB/CGIBS da reforma do consumo:
    https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/legislacao/atos-conjuntos
23. CGIBS, lista dos Atos Técnicos Conjuntos, inclusive o nº 1, de 31/07/2026:
    https://www.cgibs.gov.br/atos-tecnicos-conjuntos
24. Ato Conjunto RFB/CGIBS nº 5, de 12/08/2026, que regulamenta para 2026 o Programa Nacional de
    Conformidade Tributária (LC 214/2025, arts. 471-A a 471-C), em reprodução:
    https://www.legisweb.com.br/legislacao/?id=499233
