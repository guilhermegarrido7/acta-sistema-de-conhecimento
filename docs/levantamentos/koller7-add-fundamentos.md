# Koller 7ª ed. — O que é ADITIVO (Parte Quatro: Managing for Value + Parte Um: Fundamentos)

Avaliação de aditividade frente a dois plugins existentes de uma boutique brasileira de M&A
mid-market sell-side (alvos R$ 50-500 MM de receita, capital fechado, vendedor familiar).

- **Plugin de valuation** (12 skills oráculo): `fundamentos-koller` (corpus 6ª ed.), `reorganizacao-contabil`,
  `qualidade-de-resultados`, `diagnostico-de-roic` (inclui CAP), `capital-de-giro-e-capex`,
  `impostos-e-prejuizos-fiscais`, `projecao-e-cenarios`, `custo-de-capital`, `valor-terminal`,
  `triangulacao-e-faixa`, `revisao-de-modelo`, `benchmark-bancos`.
- **Plugin de M&A** (9 skills, a escrever): `convencoes-de-projeto`, `solicitacao-de-informacoes`,
  `estudo-setorial`, `transacoes-precedentes`, `teaser`, `information-memorandum`,
  `segmentacao-de-compradores`, `go-to-market`, `negociacao-e-loi`.

Vereditos: `ADICIONAR-ALTA` / `ADICIONAR-MÉDIA` / `JÁ COBERTO` / `IRRELEVANTE-MIDMARKET`.

---
# PARTE QUATRO — MANAGING FOR VALUE

## Cap 31 — Mergers and Acquisitions (p818-855)

> Capítulo mais aditivo de toda a faixa. Praticamente nada dele está nos plugins atuais, e quase
> tudo é diretamente operacionalizável em `negociacao-e-loi`, `segmentacao-de-compradores` e
> `go-to-market`. Leia como o "corpus de tese de venda" que faltava.

### 31.1 A equação canônica de criação de valor em M&A (p819-821)

**O que é** — A aritmética que governa quem ganha o quê numa transação:

```
Valor criado para os acionistas do COMPRADOR
  = Valor recebido pelo comprador − Preço pago

Valor recebido = valor intrínseco do alvo stand-alone (sob a gestão antiga)
                 + VP das melhorias de desempenho pós-aquisição
                   (que podem aparecer no negócio do alvo OU no do comprador)

Preço pago     = valor de mercado do alvo + prêmio necessário para convencer
                 o vendedor a vender
```

Quando o valor stand-alone do alvo é igual ao seu valor de mercado, colapsa em:

```
Valor criado para o comprador = Valor das melhorias − Prêmio pago
```

**Corolário direto (a frase mais útil do capítulo para o sell-side)**: *"se a empresa paga um
prêmio de 30%, ela precisa aumentar o valor do alvo em pelo menos 30% só para não destruir valor"*
(p820). Ou seja, o prêmio que o comprador consegue pagar é **limitado pela melhoria que ele
consegue produzir** — e o comprador que consegue produzir mais melhoria é o que pode pagar mais.
Isso é a espinha dorsal analítica da segmentação de compradores.

**Exemplo numérico do Exhibit 31.1 (p819-821)** — Empresa A compra Empresa B:
- Valor de mercado de B: US$ 1,0 bi
- Preço pago: US$ 1,3 bi (prêmio de 30%)
- Melhorias operacionais esperadas: +40% do valor de B → valor de B para A = US$ 1,4 bi
- Valor criado para A: US$ 1,4 bi − US$ 1,3 bi = **US$ 100 MM**
- Isso é **8% do montante investido** (Exhibit 31.2: matriz de valor criado por combinação de
  prêmio pago × melhoria operacional)
- E como A valia ~3× B (US$ 3 bi), a aquisição "grande" aumenta o valor de A em **apenas ~3%**
  (100/3.000). Lição: *"é difícil para um comprador criar um montante substancial de valor via
  aquisições"*.

**Calibração empírica das melhorias (Exhibit 31.3, p821)** — Em amostra de deals dos últimos 20
anos, McKinsey descontou as melhorias de desempenho anunciadas pelo WACC. As melhorias
**tipicamente excederam 50% do valor do alvo**. Kellogg e PepsiCo pagaram prêmios
excepcionalmente baixos e por isso capturaram mais valor. Ou seja: melhoria de 40% "parece
agressiva, mas é o que os melhores compradores frequentemente conseguem" (p821).

**Onde encaixa** — `negociacao-e-loi` (núcleo: a skill deve calcular, para cada comprador,
o "prêmio máximo suportável = valor das melhorias que AQUELE comprador consegue"), e
`segmentacao-de-compradores` (ordenar compradores por capacidade de melhoria).
**Veredito: ADICIONAR-ALTA.** **Página: p819-821.**

### 31.2 Evidência empírica — para quem a aquisição cria valor (p822-827)

**O que é** — O bloco de números que sustenta o argumento do assessor sell-side de que **o vendedor
é o lado que historicamente captura o valor**. Extração exaustiva:

| Achado | Número | Fonte no texto |
|---|---|---|
| Valor combinado (comprador + alvo) criado, em média | **+5,8%** | McKinsey, 1.770 aquisições, 1999-2013 (p823) |
| Reação da ação do comprador em deals grandes (média ponderada por valor) | **−1% a −3%** | Moeller/Schlingemann/Stulz (p824) |
| Underperformance do comprador vs. comparáveis nos 3 anos seguintes | **−5%** | Mitchell & Stafford (p824) |
| % de deals que criam algum valor para o comprador | **1/3 cria, 1/3 não cria, 1/3 inconclusivo** | McKinsey / Rehm & Sivertsen (p824) |
| Prêmio médio pago ao alvo sobre preço pré-anúncio | **~30%** (estável ao longo do tempo) | p824, p835 |
| % de compradores grandes que destroem valor em aquisições grandes | **1/3 ou mais** | p818 |
| % das aquisições de grandes empresas cujo alvo é < 5% do market cap do comprador | **95%** | p823 |

Nota metodológica de Koller (p823-825): a maioria dos estudos mede a reação do preço da ação ao
anúncio, o que faz com que **deals grandes dominem os resultados** — a avaliação do mercado sobre
deals pequenos é difícil de discernir. Sobre persistência do efeito-anúncio a evidência é
inconsistente: Sirower & Sahna mostram que a reação inicial é persistente e indica desempenho
futuro no ano seguinte; outros colegas de McKinsey, em amostra diferente de transações maiores em
janela de dois anos, acharam evidência inconclusiva. Reino Unido passou a exigir voto de
acionistas em aquisições grandes: Becht/Polo/Rossi mostraram que **quando os acionistas votaram, a
reação do preço da compradora foi muito mais provavelmente positiva** do que quando não votaram; e
que em transações maiores nos EUA, onde não há voto, as reações foram mais provavelmente negativas.

**Ondas de M&A (Exhibit 31.4, p822-823)** — atividade ocorre em ondas, dirigida por: (i) preços de
ações em alta e gestores otimistas (embora o racional fosse comprar na baixa); (ii) juros baixos,
especialmente para aquisições alavancadas de private equity; (iii) efeito imitação — uma grande
aquisição num setor estimula as demais a comprar também. **Uso no sell-side brasileiro**: timing de
go-to-market — janela de juros e de consolidação setorial é argumento de urgência legítimo.

**Onde encaixa** — `go-to-market` (timing e janela), `negociacao-e-loi` (municiar o vendedor:
"a evidência mostra que o vendedor captura a maior parte — não aceite o discurso do comprador de
que ele está pagando caro"), `information-memorandum` (racional de por que agora).
**Veredito: ADICIONAR-ALTA.** **Página: p818, p822-827.**

### 31.3 Os quatro arquétipos de comprador por programa de M&A (Exhibit 31.5, p825-826)

**O que é** — Para contornar o viés de "deal grande" dos estudos de anúncio, McKinsey classificou
**1.645 empresas não-bancárias, 2007-2017**, em quatro categorias, e mediu TSR mediano vs. peers:

1. **Programmatic acquirers** — muitas aquisições (definição na nota 9: *mais de dois deals
   pequenos ou médios por ano*). **Melhor desempenho: outperformance mediana de +0,9% de TSR por
   ano.** Distribuição com a assimetria mais positiva e o maior percentual de empresas superando
   os peers. Foram os **únicos que superaram os peers na maioria dos setores**.
2. **Large-deal companies** — ao menos um deal maior que 30% do valor do comprador.
   **Pior desempenho**, consistente com os estudos de efeito-anúncio. Distribuição
   fortemente assimétrica para o negativo.
3. **Organic companies** — quase nenhum M&A. Distribuição muito ampla (mistura de empresas jovens
   de alto crescimento com empresas em declínio gerenciando a queda).
4. **Selective acquirers** — o resíduo (não se encaixa nas outras três).

Ressalvas explícitas do texto: as bandas P25-P75 são muito largas e **se sobrepõem entre as
estratégias** — a mediana esconde muito. Variação setorial: **deals grandes funcionam melhor em
setores maduros de crescimento lento** (onde há valor em retirar capacidade excedente) e
**subperformam significativamente em setores de crescimento rápido** (o foco interno da integração
desvia a atenção da inovação contínua de produto). Fich/Nguyen/Officer (2017): **empresas grandes
comprando empresas pequenas criam mais valor do que quando compram empresas grandes**.

**Onde encaixa** — **`segmentacao-de-compradores` (uso direto)**: classificar cada comprador
potencial da long list como programmatic / large-deal / organic / selective. Um alvo mid-market
brasileiro de R$ 50-500 MM é, para quase qualquer estratégico relevante, um deal **pequeno**
(< 5% do valor do comprador) — exatamente o perfil em que a evidência diz que o comprador
tende a ganhar. Isso é um **argumento de venda para o comprador** ("este deal está no quadrante
que funciona") e um filtro de qualificação de comprador ("o programmatic acquirer tem
processo, decide mais rápido, e o board dele já aprovou a tese").
**Veredito: ADICIONAR-ALTA.** **Página: p825-826.**

### 31.4 Os quatro fatores que diferenciam deals bem-sucedidos (p827)

**O que é** — Características com evidência empírica de correlação com retorno positivo ao
comprador:

1. **Bons operadores têm mais sucesso.** Compradores cujos lucros e preço de ação cresceram acima
   da média do setor nos 3 anos anteriores à aquisição obtêm retornos positivos estatisticamente
   significativos no anúncio (Morck/Shleifer/Vishny). Resultado similar usando market-to-book
   como medida de desempenho (Servaes; Fich et al.).
2. **Prêmios baixos são melhores.** Compradores que pagam prêmio alto obtêm retorno negativo no
   anúncio (Sirower, *The Synergy Trap*; Travlos — significativo em Sirower, não em Travlos).
3. **Ser o único proponente ajuda.** Retorno da ação do comprador é **negativamente correlacionado
   com o número de proponentes** — quanto mais empresas tentando comprar, mais alto o preço
   (Morck et al.; Datta/Narayanan/Pinches, meta-análise).
4. **Deals privados performam melhor.** Aquisições de **empresas de capital fechado** e de
   subsidiárias de grandes empresas têm **retornos anormais mais altos** que aquisições de
   empresas listadas (Capron & Shen, INSEAD; Draper & Paudyal).

**Fatores que NÃO importam** (não indicam criação nem destruição de valor):
- se a transação é accretive ou dilutiva de lucro por ação;
- o P/E do comprador relativo ao P/E do alvo;
- o grau de relação entre comprador e alvo medido por código SIC (proxy de setor);
- se o deal é feito com economia forte ou fraca.

**Conclusão do texto** (p827-828): *não existe fórmula mágica*. Aquisições não são
inerentemente boas nem ruins — assim como marketing ou P&D não são. Cada deal precisa de lógica
estratégica própria, e a empresa precisa ter as competências relevantes para executar deals ou
programas de deals. Nos deals mais bem-sucedidos, os compradores têm **ideias de criação de valor
bem articuladas e específicas** antes de entrar. Os racionais dos deals menos bem-sucedidos são
vagos: "buscar escala internacional", "preencher lacunas de portfólio", "construir a terceira
perna do portfólio".

**Onde encaixa** — Dois usos poderosos e simétricos:
- **Ponto 3 (número de proponentes) é a justificativa acadêmica do processo competitivo
  sell-side**: mais compradores → preço mais alto para o vendedor. Vai em `go-to-market` como
  fundamentação da arquitetura do processo, e em `negociacao-e-loi` como razão para não conceder
  exclusividade cedo.
- **Ponto 4 (deals privados performam melhor)** é argumento para o comprador em
  `segmentacao-de-compradores`: transação de capital fechado com informação assimétrica é
  historicamente onde o comprador ganha.
- **Ponto 1** é filtro de qualificação: comprador que vem performando abaixo do setor é
  comprador de execução ruim e de risco de fechamento.
- A lista de "fatores que não importam" (especialmente accretion/dilution e código SIC) serve
  para desarmar objeções bobas do comprador na negociação — e, no caso do SIC, para justificar
  incluir compradores de setores adjacentes na long list.

**Veredito: ADICIONAR-ALTA.** **Página: p827.**

### 31.5 Os SEIS arquétipos de aquisição criadora de valor (p828-833)

**O que é** — Na ausência de pesquisa empírica capaz de classificar estratégias, Koller propõe seis
arquétipos derivados da prática. **Regra dura do texto: "se uma aquisição não se encaixa em um ou
mais desses arquétipos, é improvável que crie valor"** (p828). E: o racional estratégico deve ser
a **articulação específica** de um arquétipo, não um conceito vago como "crescimento" ou
"posicionamento estratégico"; e mesmo encaixando num arquétipo, não cria valor se pagar demais.

**1. Melhorar o desempenho da empresa-alvo** (p829)
Comprar e reduzir custos radicalmente para melhorar margem e fluxo de caixa; em alguns casos
também acelerar receita. É o que os melhores fundos de private equity fazem. **Evidência**:
Acharya/Hahn/Kehoe estudaram aquisições de PE bem-sucedidas (comprada, melhorada, vendida, sem
aquisições adicionais no meio) e acharam **aumento de margem de lucro operacional ~2,5 p.p. acima
dos peers** durante a propriedade do fundo — o que significa que muitas transações aumentaram a
margem ainda mais.
**A aritmética da alavancagem de margem (numericamente explícita, p829)** — é *mais fácil* melhorar
empresa de margem e ROIC baixos:
- Alvo com margem operacional de **6%**: cortar custos de 94% para 91% da receita eleva a margem a
  9% e **pode aumentar o valor da empresa em 50%**.
- Alvo com margem de **30%**: para aumentar o valor em 50% seria preciso ir a **45%** de margem —
  custos de 70% para 55% da receita, uma **redução de 21% da base de custos**. Expectativa
  provavelmente irrealista.
> **Implicação sell-side contraintuitiva e valiosa**: um alvo com margem baixa e ROIC baixo tem
> *mais espaço de melhoria para o comprador* e portanto suporta *prêmio maior*. Vender uma
> empresa familiar ineficiente não é um problema — é o arquétipo 1. A "gordura" (custos de
> família, estrutura inflada, capital de giro solto) é a fonte de sinergia do comprador, e o
> assessor deve **quantificá-la e cobrar por ela**, não esconder. Isso conecta diretamente com
> `reorganizacao-contabil` e `qualidade-de-resultados`: os ajustes normalizadores não são só
> limpeza contábil, são a **mensuração da sinergia disponível ao comprador**.

**2. Consolidar para retirar capacidade excedente do setor** (p829-830)
Setores maduros desenvolvem capacidade excedente (exemplo: químicos — empresas buscam
constantemente mais produção das mesmas plantas enquanto novos competidores, como a Arábia Saudita
em petroquímicos, entram; produção maior da capacidade existente + capacidade nova de entrantes →
mais oferta que demanda). Não é do interesse de nenhum competidor isolado fechar uma planta, mas é
mais fácil fechar plantas na entidade combinada resultante de uma aquisição do que, sem aquisição,
fechar as próprias plantas menos produtivas e terminar uma empresa menor. Não se limita a fábricas:
consolidação farmacêutica reduziu significativamente capacidade de força de vendas (com portfólios
alterados e nova forma de interagir com médicos) e de P&D.
**Duas ressalvas críticas**: (i) o **grosso do valor tende a ir para o vendedor**, não para o
comprador; (ii) **problema do free-rider** — todos os outros competidores do setor se beneficiam
da redução de capacidade sem tomar qualquer ação.

**3. Criar acesso a mercado para os produtos do alvo (ou, em alguns casos, do comprador)** (p830-831)
Empresas relativamente pequenas com produtos inovadores têm dificuldade de acessar todo o mercado
potencial (farmacêuticas pequenas não têm a força de vendas para visitar os médicos necessários).
**IBM**: entre 2010 e 2013 adquiriu **43 empresas por média de US$ 350 MM cada**; empurrando os
produtos delas pela força de vendas global, estimou acelerar substancialmente a receita das
adquiridas, **às vezes em mais de 40% nos primeiros dois anos** após cada aquisição.
**P&G/Gillette**: fluxo nos dois sentidos — P&G forte em alguns emergentes, Gillette com share
maior em outros; juntas introduziram produtos em novos mercados muito mais rápido.
> **Implicação sell-side**: este é o arquétipo mais frequentemente aplicável a um alvo brasileiro
> mid-market bom: produto/serviço/licença/base de clientes regional que um comprador com
> capilaridade nacional ou internacional escala. É o que o IM deve provar com dados
> (penetração atual vs. mercado endereçável, e por que o alvo não conseguiu chegar lá sozinho —
> restrição de capital, de força de vendas, de marca ou de licenças).

**4. Adquirir competências ou tecnologias mais rápido ou mais barato do que construir** (p831)
Motivos: velocidade, evitar royalties sobre tecnologia patenteada, e **manter a tecnologia longe
dos concorrentes**. Exemplos: Apple/Siri (2010), Apple/Novauris (reconhecimento de voz, 2014),
Apple/Beats (entrar em streaming rápido enquanto o mercado saía do modelo iTunes de compra e
download).
**Cisco**: de 1993 a 2001 adquiriu **71 empresas a preço médio de ~US$ 350 MM**, montando uma linha
ampla de soluções de rede no período de crescimento frenético da internet, levando a receita de
US$ 650 MM (1993) para US$ 22 bi (2001), com **~40% da receita de 2001 vindo diretamente dessas
aquisições**.

**5. Explorar escalabilidade específica do setor** (p831-832)
**Alerta forte**: é preciso muito cuidado ao justificar aquisição por economias de escala,
especialmente em deals grandes, porque **empresas grandes já operam em escala** — combiná-las
provavelmente não reduz custo unitário (exemplo: transportadoras de encomendas já operam algumas
das maiores frotas aéreas do mundo, muito eficientemente; combiná-las não geraria economia
substancial em operação de voo).
Escala **importa** quando: (i) **a unidade de capacidade incremental é grande** — custo de
desenvolver uma nova plataforma automotiva é enorme, então montadoras minimizam o número de
plataformas; a combinação Audi + Porsche + VW permite compartilhar plataformas (Audi Q7, Porsche
Cayenne e VW Touareg são baseados na mesma plataforma); (ii) **uma empresa grande compra uma
empresa subescala**. Compras/procurement geram escala mas com nuance: seguradoras de saúde
combinadas negociam melhores taxas com sistemas hospitalares — economia que podem passar aos
clientes — mas tipicamente **apenas nas cidades onde ambas já atuam**, porque a maioria dos
sistemas hospitalares é local; seguradoras que operam em cidades diferentes não ganham poder de
compra ao se combinar.
**Regra prática**: *"raramente economias de escala genéricas, como economia de back-office, são
grandes o suficiente para justificar uma aquisição. Economias de escala precisam ser
**únicas** para serem grandes o bastante para justificar uma aquisição."* (p832)
> **Implicação sell-side**: item (ii) é ouro — *empresa grande comprando empresa subescala* é
> exatamente o formato do mid-market brasileiro. O alvo de R$ 50-500 MM tipicamente é subescala em
> compras, logística, backoffice, custo de capital e capacidade de investimento. Quantificar isso
> é quantificar sinergia real e defensável.

**6. Escolher vencedores cedo e ajudá-los a desenvolver o negócio** (p832-833)
Aquisições no início do ciclo de vida de um novo produto ou setor, muito antes de os outros
reconhecerem que vai crescer. Típico em dispositivos médicos: grandes compram jovens inovadoras,
ajudam a refinar a tecnologia e aceleram/turbinam os lançamentos. **Payoff frequentemente leva 5+
anos.** Alto risco (exemplo do capítulo: cannabis nos EUA — legalizado em alguns estados, ilegal
no âmbito federal; algumas empresas de bens de consumo compraram players antecipando crescimento
alto apesar da incerteza). Requer disciplina em três dimensões: (i) investir cedo, antes de
concorrentes e mercado verem o potencial; (ii) **fazer múltiplas apostas e esperar que algumas
falhem**; (iii) ter as competências e a paciência para nutrir os negócios adquiridos.

**Onde encaixa** — Uso central em **`segmentacao-de-compradores`**: a segmentação deveria ser
feita **por arquétipo**, não por setor. Para cada comprador da long list, responder "qual dos seis
arquétipos ele executa com este alvo, e quanto vale?" — e o comprador que não encaixa em nenhum
arquétipo é comprador de baixa probabilidade e prêmio zero, e deve ser desqualificado ou tratado
como preenchimento de processo. Também alimenta `information-memorandum` (a seção de racional
estratégico do IM deve ser escrita **em várias versões, uma por arquétipo/cluster de comprador**)
e `teaser` (o gancho do teaser é o arquétipo). E `negociacao-e-loi`: o prêmio suportável é
função do arquétipo.
**Veredito: ADICIONAR-ALTA (o item mais aditivo do capítulo).** **Página: p828-833.**

### 31.6 Estratégias de "odds mais longas" (p833-836)

**O que é** — Quatro estratégias que podem criar valor, mas são mais difíceis de executar:

**a) Roll-up** (p833-834) — Consolidar mercados altamente fragmentados onde os competidores atuais
são pequenos demais para alcançar economias de escala. Exemplo: **Service Corporation
International** cresceu de uma casa funerária em Houston (anos 1960) para quase **2.000 casas
funerárias e cemitérios em 2018**. Funciona quando os negócios **como grupo** realizam economias de
custo substanciais ou receitas maiores que as unidades individuais (casas funerárias de uma mesma
cidade compartilham veículos, compras e backoffice; coordenam publicidade na cidade para reduzir
custo e obter receita maior). **Regra prática decisiva**: *"tamanho por si só não é o que cria um
roll-up bem-sucedido; o que importa é o **tipo certo de tamanho**"* — para a Service Corporation,
ter múltiplas localizações **na mesma cidade** foi mais importante que simplesmente ter muitas
filiais espalhadas por muitas cidades, porque as economias (compartilhar veículos) só se realizam
se as filiais são próximas. **Risco**: roll-ups são difíceis de disfarçar e **atraem imitadores** —
quando outros tentaram copiar a Service Corporation, os preços de algumas casas funerárias foram
levados a níveis que tornaram novas aquisições antieconômicas.
> **Implicação sell-side muito relevante ao Brasil**: o roll-up é o arquétipo dominante de PE e
> de estratégico em vários setores mid-market brasileiros (saúde, educação, serviços ambientais e
> resíduos, distribuição, farmácias, TI, agro-serviços). Três consequências operacionais: (1) na
> `segmentacao-de-compradores`, mapear **plataformas de roll-up já ativas** (quem já é
> consolidador financiado, com quantos add-ons e quanto de dry powder) — são os compradores de
> maior prêmio e maior velocidade; (2) o critério de "tipo certo de tamanho" diz **quais
> compradores especificamente pagam mais pelo seu alvo**: aquele cuja malha existente é
> *adjacente/sobreposta* à do alvo, não simplesmente o maior — o que permite ranquear compradores
> por **densidade geográfica ou de rota sobreposta**, um critério objetivo e raramente usado;
> (3) o risco de imitador/preço inflado é argumento de urgência: a janela de múltiplo de roll-up
> fecha.

**b) Consolidar para melhorar o comportamento competitivo** (p834) — Muitos executivos em setores
muito competitivos esperam que a consolidação leve os concorrentes a focar menos em competição por
preço, melhorando o ROIC do setor. **A evidência mostra que, a menos que o setor consolide para
apenas três ou quatro competidores E consiga manter entrantes fora, o comportamento de preço dos
competidores não muda** — há frequentemente incentivo para empresas menores ou novos entrantes
ganharem share via competição de preço. Num setor com dez competidores, **muitos deals precisam
ser concluídos antes de a base da competição mudar**.

**c) Fusão transformacional** (p834-835) — Rara, porque as circunstâncias precisam ser exatamente
as certas e o time de gestão precisa executar bem. Exemplo: **Novartis**, formada pela fusão de
US$ 30 bi entre Sandoz e Ciba-Geigy (anunciada em 1996). Sob o novo CEO Daniel Vasella, as duas
foram transformadas numa empresa inteiramente nova, usando a fusão como catalisador de mudança:
capturou **US$ 1,4 bi de sinergias de custo** *e* redefiniu missão, estratégia, portfólio,
organização e todos os processos-chave, de pesquisa a vendas — sem escolha automática pelo "jeito
Ciba" ou pelo "jeito Sandoz", com esforço sistemático de achar o melhor jeito em todas as áreas.
Deslocou o foco estratégico para inovação em life sciences (farmacêuticos, nutrição, agrícola) e
fez spin-off do negócio de US$ 7 bi da Ciba Specialty Chemicals (1997); reorganizou P&D
mundialmente **por área terapêutica em vez de geográfica** (permitindo construir franquia líder
mundial em oncologia); e criou cultura orientada a desempenho em todos os departamentos e camadas,
trocando remuneração **baseada em senioridade por baseada em desempenho**.

**d) Comprar barato** (p835-836) — Comprar a preço abaixo do valor intrínseco do alvo. *"Na nossa
experiência, oportunidades de criar valor dessa forma são raras e relativamente pequenas."*
Valores de mercado revertem ao intrínseco em prazos longos, mas há momentos breves de
desalinhamento: mercados às vezes reagem em excesso a notícias negativas (investigação criminal de
um executivo, falha de um único produto num portfólio de muitos produtos fortes). **Menos raro em
setores cíclicos**, onde ativos costumam estar subvalorizados no fundo do ciclo: comparando
valuations de mercado reais com valores intrínsecos baseados num modelo de "previsão perfeita",
empresas em setores cíclicos **poderiam mais que dobrar o retorno ao acionista** (relativo ao
retorno real) se adquirissem ativos no fundo do ciclo e vendessem no topo (Koller & de Heer). Mas
para obter controle o comprador precisa pagar prêmio sobre o valor de mercado corrente — os
prêmios variam muito, mas a média para controle corporativo é bastante estável, **perto de 30% do
preço pré-anúncio do equity do alvo**.
**Risco simétrico**: como valores de mercado podem desviar do intrínseco, a gestão precisa se
precaver contra o mercado estar **supervalorizando** um alvo potencial. Na bolha do fim dos anos
1990, empresas que se fundiram com ou adquiriram empresas de tecnologia, mídia e telecom viram
suas ações despencar quando o mercado reverteu. Pagar demais em mercado inflado é preocupação
séria, porque **a atividade de M&A parece aumentar após períodos de forte desempenho de mercado**.
Se os preços estão artificialmente altos, grandes melhorias são necessárias para justificar a
aquisição **mesmo quando o alvo pode ser comprado sem prêmio sobre o valor de mercado**.

**Winner's curse (p835-836)** — Para alvos perseguidos por múltiplos compradores, o prêmio sobe
dramaticamente. *Se várias empresas avaliam um dado alvo e todas identificam mais ou menos as
mesmas sinergias, aquela que **superestima mais** as sinergias potenciais oferecerá o preço mais
alto.* Como o preço ofertado é baseado numa superestimativa do valor a ser criado, o suposto
vencedor **paga demais e é, no fim, o perdedor** (Rock, 1986). Problema relacionado: **hubris** —
a tendência da gestão do comprador de superestimar sua capacidade de capturar melhorias de
desempenho da aquisição (Roll, 1986).
> **Implicação sell-side (usar com honestidade, é uma faca de dois gumes)**: o winner's curse é
> *literalmente o mecanismo pelo qual um processo competitivo bem conduzido maximiza o preço para
> o vendedor*. Koller o descreve como um erro do comprador; o assessor sell-side o lê como
> a razão econômica de existir do processo estruturado. Deve constar em `go-to-market` (por que
> rodar processo com múltiplos compradores simultâneos e prazos sincronizados) e em
> `negociacao-e-loi` (por que a exclusividade só é concedida contra preço e condições firmes).
> Combinado com o fator 3 da §31.4 (retorno do comprador é negativamente correlacionado com o
> número de proponentes), a evidência é inequívoca: **número de proponentes é a variável de
> processo que mais move o preço para o vendedor**.

**Onde encaixa** — Roll-up: `segmentacao-de-compradores` e `estudo-setorial`. Consolidação por
comportamento competitivo (regra dos 3-4 competidores): `estudo-setorial` — é um teste concreto
de quando a tese de consolidação de um setor é crível, e um filtro contra teses de consolidação
infundadas. Winner's curse e hubris: `go-to-market` + `negociacao-e-loi`. Comprar barato /
ciclicidade e "M&A aumenta após mercado forte": `projecao-e-cenarios` e `go-to-market` (timing de
saída no ciclo — o espelho do "comprar no fundo" é "vender no topo").
**Veredito: ADICIONAR-ALTA** (roll-up, winner's curse, regra dos 3-4 competidores, ciclicidade);
**IRRELEVANTE-MIDMARKET** (fusão transformacional).
**Página: p833-836.**
### 31.7 Estimativa de sinergias — o protocolo completo (p836-842)

**O que é** — A parte mais operacional do capítulo, e a mais diretamente convertível em
checklist de skill. Koller separa **custo/capital** de **receita**, e trata custo de
implementação e timing como itens de primeira classe.

**Princípio de abertura (p836)**: as fontes principais de valor em M&A são melhorias de **custo,
capital e receita** (as "sinergias") que a empresa combinada realiza. *Raramente um preço de compra
barato faz a mesma diferença.* Estimar as melhorias potenciais é um dos fatores de sucesso mais
importantes de M&A — junto com executá-las depois do fechamento.

**Sinergia é estimada TRÊS vezes, não uma (p836)** — (1) antes de as negociações começarem;
(2) durante as negociações, à medida que o comprador obtém mais informação; (3) **depois do
fechamento**. Muitas empresas negligenciam a terceira, mas ela é crítica: colegas de McKinsey
(Engert & Rosiello) acharam que **em quase 50% dos casos as estimativas pré-fechamento falharam em
fornecer um roteiro adequado para identificar plenamente as oportunidades de melhoria**.

**A assimetria custo vs. receita — o número mais útil do bloco (p836-837)**
McKinsey Merger Management Practice analisou **90 aquisições**:
- **86% dos compradores conseguiram capturar ao menos 70% das economias de custo estimadas.**
- **Quase metade dos compradores realizou menos de 70% das melhorias de receita almejadas.**
- **Em quase 1/4 das aquisições observadas, o comprador realizou menos de 30% das melhorias de
  receita almejadas.**
> **Uso sell-side**: sinergia de custo é moeda forte e defensável na negociação de preço; sinergia
> de receita é moeda fraca — o comprador vai descontá-la agressivamente e a evidência lhe dá
> razão. Consequência tática: ao construir o argumento de prêmio, **ancorar em sinergia de custo e
> capital**; usar sinergia de receita como upside qualitativo e como justificativa de earn-out (o
> vendedor participa da sinergia de receita se ela se materializar, em vez de brigar por ela no
> preço à vista). Simetricamente: se o comprador quer descontar do preço a incerteza da sinergia
> de receita, ofereça earn-out sobre ela — quem acredita na incerteza deve pagar contingente.

**Protocolo de estimativa de economias de custo e capital (p837-839)**
Erro comum a evitar: *estimar economias simplesmente calculando a diferença de desempenho
financeiro entre comprador e alvo*. Ter margem EBITA 200 bps maior que o alvo **não** se traduz
necessariamente em melhor desempenho para o alvo. **Não há regras de bolso fáceis** para estimar
economias de custo e capital; as melhores estimativas vêm de análise detalhada. Processo
sistemático em três passos:
1. **Baseline detalhado** de custo e capital *como se as duas empresas permanecessem
   independentes*, ao longo das diferentes partes das estruturas de custo das duas. Propósito:
   garantir que todos os custos de comprador e alvo estejam contabilizados e que **não haja risco
   de dupla contagem** ao estimar economias. Os custos e as necessidades de capital do baseline
   têm de ser **consistentes com os valuations intrínsecos**.
2. **Estimar sistematicamente as economias potenciais por categoria de custo** de ambas as
   empresas (Exhibit 31.6: framework amostral de categorias de economia de custo), garantindo que
   as categorias e as ideias de economia sejam **customizadas para a empresa e o setor**. Para
   precisão, **amarrar as economias explicitamente a atividades operacionais do negócio**: qual a
   redução equivalente de headcount responsável pela economia de SG&A? Qual a receita por headcount
   resultante? Quanto cai o custo de distribuição quando os caminhões viajam cheios em vez de
   parcialmente carregados? **A receita é suficiente para garantir caminhões cheios?**
3. **Testar contra benchmarks**: após completar a avaliação, **sempre** comparar o resultado
   agregado da combinação com benchmarks setoriais de margem operacional e eficiência de capital.
   Perguntar se o **ROIC e o crescimento projetados fazem sentido** dada a economia global esperada
   do setor. Só uma DRE e um balanço integrados e completamente desenvolvidos garantem que as
   estimativas de economia estão em linha com a realidade econômica. Em particular: garantir que
   **o ROIC da nova combinação aterrisse no nível certo para o valor terminal** e esteja em linha
   com a estrutura competitiva subjacente do setor. **"Quanto mais difícil for sustentar vantagem
   competitiva, mais é preciso reduzir gradualmente as melhorias de desempenho no longo prazo."**
   ← ponte direta e explícita com CAP / `diagnostico-de-roic` e `valor-terminal`.

**Envolver gestores de linha, não só finanças (p838)** — Ao amarrar economias a drivers
operacionais, envolver gestores de linha experientes. Um time integrado com analistas financeiros
*e* gestores de linha experientes tende a ser mais preciso que um time puramente de finanças.
Gestores de linha experientes frequentemente **já sabem detalhes sobre o alvo**, e nesse caso
geram insights sobre capacidade, problemas de qualidade e vendas unitárias **que não se acham
facilmente no domínio público**.
**Caso concreto (p838)**: numa aquisição, o head de operações liderou a estimativa de economias de
racionalizar capacidade industrial, redes de distribuição e fornecedores. Seu conhecimento profundo
sobre os **requisitos incomuns de manufatura de uma linha-chave de produtos** e sobre
**necessidades iminentes de investimento na planta principal do alvo** melhorou substancialmente
as estimativas. Além disso, numa entrevista de due diligence com o head de operações do alvo,
descobriu que **o alvo não tinha sistema ERP**. Cada um desses fatos **melhorou as negociações e a
estruturação do deal** — por exemplo, permitindo à gestão prometer que a principal localização
europeia do alvo seria mantida, mantendo flexibilidade sobre a principal planta americana. E o
envolvimento do gestor de operações garantiu que a empresa estava preparada para **agir rápido e
decisivamente** para capturar as economias após o fechamento.
> **Espelho sell-side**: isto descreve exatamente o que o comprador vai fazer na diligência do
> seu cliente. A skill `solicitacao-de-informacoes` deve **antecipar** essas perguntas
> (headcount por função, receita por headcount, taxa de ocupação de frota/planta, existência e
> qualidade de ERP, capex latente/diferido na planta principal, contratos de fornecedores) e a
> `revisao-de-modelo`/`qualidade-de-resultados` deve preparar as respostas antes de o comprador
> achar as surpresas. Note também dois pontos táticos: (a) descobertas de diligência **viram
> moeda de negociação e de estruturação** — o comprador troca compromissos (manter uma planta,
> manter o time) por preço, o que é exatamente o tipo de item que o assessor deve precificar em
> vez de conceder de graça; (b) capex latente e ausência de ERP são achados **recorrentes e
> previsíveis** em mid-market familiar brasileiro, e portanto devem ser tratados
> proativamente na preparação, não descobertos pelo comprador.

**Dispersão de economias por categoria (Exhibit 31.7, p839)** — Aquisição no setor automotivo:
economia de custo total estimada em **~10% dos custos combinados**, mas variando consideravelmente
por categoria:
- **Procurement**: embora seja a maior categoria de custo isolada de montadoras, a maioria das
  empresas já tem a escala necessária para negociar contratos favoráveis → economia estimada em
  **apenas 5%**.
- **P&D**: reduções estimadas em **33%**, ao consolidar o desenvolvimento de novos produtos e
  reduzir o número de ofertas esperadas. Essa redução teve **efeito de segunda ordem em
  manufatura**, porque os projetos migrariam para uma plataforma comum, reduzindo o custo global
  de manufatura.
- **Vendas e distribuição**: podiam ser reduzidas, mas a gestão decidiu **preservar o orçamento de
  marketing** da empresa combinada.
> Lição transportável: **nunca aplicar um percentual único de sinergia à base de custo total**;
> decompor por categoria. E o percentual mais alto costuma estar onde há **duplicação de
> desenvolvimento/estrutura**, não onde há maior volume de gasto — o intuitivo (compras, a maior
> linha) é justamente o de menor percentual, porque a escala já existia.

**Estimativa de melhorias de receita (p840-841)** — Tentador supor que a receita da combinada será
a soma stand-alone mais o novo cross-selling; a realidade costuma ser bem diferente. Os quatro
vazamentos:
(i) a fusão frequentemente **rompe relacionamentos existentes com clientes**, levando a perda de
negócio;
(ii) **competidores espertos usam fusões como oportunidade privilegiada para recrutar vendedores
estrela e especialistas de produto**;
(iii) alguns clientes usavam comprador e alvo como **fonte dupla**, e vão mover parte do negócio
para outra empresa para manter um mínimo de dois fornecedores;
(iv) clientes que decidem ficar durante a fusão **não terão vergonha de pedir concessões de preço**
e outras, e os vendedores estarão ansiosos para concedê-las por medo de perder o negócio.

Calibrar as premissas pro forma contra a realidade do mercado: desenvolver estimativas de poder de
preço e market share consistentes com o crescimento do mercado e a realidade competitiva.
**Caso (p840)**: uma empresa financeira global estimou que uma aquisição geraria **€ 1 bilhão** de
melhoria de vendas nos cinco anos seguintes, incluindo crescimento de lucro de dois dígitos no
primeiro ano. Mas o crescimento global do mercado era limitado, então o único jeito de atingir
essas metas de vendas era **baixar preços**. O **crescimento real de lucro foi de meros 2%**.

**As quatro fontes legítimas de melhoria de receita (p840)** — ser explícito sobre de onde se
espera que venha qualquer crescimento de receita além do caso-base. As melhorias tipicamente vêm
de uma ou mais de quatro fontes:
1. **Aumentar o nível de vendas de pico de cada produto**
2. **Chegar ao pico de vendas mais rápido**
3. **Estender a vida de cada produto**
4. **Adicionar novos produtos (ou features) que não poderiam ter sido desenvolvidos se as duas
   empresas tivessem permanecido independentes**

Alternativamente, aumentos de receita poderiam vir de **preços mais altos**, viabilizados pela
redução de competição — mas *a regulação antitruste existe precisamente para impedir que empresas
usem essa alavanca*, que transferiria valor de clientes para acionistas. Qualquer aumento de preço
tem de ser **diretamente atribuível a um aumento de valor para o cliente**, e não a redução de
escolha.

**Regra de modelagem (p841)**: projetar melhorias de receita em **valores absolutos por ano ou
como percentual da receita stand-alone**, e **não como aumento da taxa de crescimento da receita**
— com a abordagem de taxa de crescimento é fácil superestimar o impacto real das melhorias.

**Custos de implementação, requisitos e timing (p841-842)**
- Embora as melhorias de desempenho resultem de "fazer mais com menos", mudar ou combinar sistemas
  **sempre envolve algum custo**. Alguns são óbvios: custo de descomissionar uma planta,
  indenizações a serem pagas a funcionários dispensados. Outros são mais subtis e frequentemente
  esquecidos: **campanhas de rebranding** quando o nome do alvo muda, **custos de integração de
  sistemas de TI** diferentes, e **retreinamento de funcionários**.
- **Regra de bolso quantitativa (p841)**: *"não é incomum que os custos totais de implementação
  equivalham a um ano inteiro de economias de custo, ou mais."*
- Compradores frequentemente fazem premissas **excessivamente otimistas sobre quanto tempo levará
  para capturar as melhorias**. A realidade intervém de muitas formas: garantir suprimento estável
  aos clientes enquanto se fecha uma planta pode ser mais complicado do que o comprador espera;
  listas de clientes díspares de múltiplas fontes podem ser complicadas de integrar; examinar
  milhares de itens de linha da base de compras quase sempre leva mais horas que o estimado.
- **Regra de janela (p841)**: problemas de timing podem afetar se as melhorias são capturadas
  **de forma alguma**. *"Nossa experiência sugere que melhorias não capturadas dentro do primeiro
  ano orçamentário completo após a consolidação podem nunca ser capturadas"*, porque o ímpeto de
  capturá-las é atropelado por eventos subsequentes. **Atenção gerencial persistente importa.**
- **Data de validade das economias (p841-842)**: negligenciar a "use by date" de certas economias é
  igualmente problemático — muitas economias potenciais não ficam na mesa para sempre. Exemplo:
  uma fonte de economia de custo é eliminar capacidade excedente cíclica num setor em crescimento;
  mas nessas circunstâncias, a capacidade excedente **acabará sendo eliminada pelo crescimento
  natural**. Portanto, reduzir capacidade só gera economia incremental se a redução ocorrer
  **dentro da duração esperada do excesso de capacidade**.

**Onde encaixa** — Este bloco inteiro é a base de uma seção nova de `negociacao-e-loi`
("quantificação de sinergia e prêmio suportável") e de um checklist de antecipação em
`solicitacao-de-informacoes`. Também sugere **skill nova: `sinergias-e-tese-de-comprador` no
plugin de M&A** — dedicada a construir, para cada comprador da short list, uma estimativa de
sinergia de custo/capital/receita com baseline consistente com o valuation intrínseco, decomposição
por categoria, teste contra benchmark setorial, custo de implementação (~1 ano de economias),
timing (janela do primeiro ano orçamentário) e **prêmio suportável resultante**. Não existe
equivalente hoje: `transacoes-precedentes` dá múltiplo observado, não sinergia estimada;
`triangulacao-e-faixa` triangula valor stand-alone, não valor-para-o-comprador; `projecao-e-cenarios`
projeta o alvo isolado.
**Veredito: ADICIONAR-ALTA.** **Página: p836-842.**

### 31.8 Pagar em caixa ou em ações — e a alocação de risco (p842-844)

**O que é** — Pesquisa mostra que, em média, o retorno da ação do comprador em torno do anúncio é
**mais alto quando o comprador oferece caixa** do que quando oferece ações. Koller hesita em tirar
conclusão a partir de estatística agregada (mesmo empresas que pagam em caixa podem pagar demais).
Assumindo que o comprador não é restrito de capital, **a questão real é se os riscos e as
recompensas do deal devem ser compartilhados com os acionistas do alvo**:
- **Caixa**: os acionistas do comprador carregam **todo o risco** de capturar as sinergias e de ter
  pago demais.
- **Ações**: os acionistas do alvo **assumem parte do risco**.

**Exemplo numérico (Exhibit 31.8, p842-844)** — Comprador com market cap de US$ 1,0 bi, alvo com
US$ 500 MM. Preço total pago: **US$ 650 MM (prêmio de 30%)**. Dois cenários de DCF pós-transação:
melhorias **US$ 50 MM abaixo** do prêmio pago (downside) e **US$ 50 MM acima** (upside).
(Simplificação: valor de mercado = valor intrínseco para ambas.)
- **100% caixa**: os acionistas do alvo recebem US$ 650 MM **independentemente** de as melhorias
  serem suficientes para justificar o prêmio — não compartilham o risco de implementação. Os
  acionistas do comprador vêem sua participação valorizar +US$ 50 MM no upside e desvalorizar
  −US$ 50 MM no downside; **carregam o risco integral**.
- **100% ações**: os acionistas do alvo participam do risco de implementação por virtude de serem
  acionistas da nova entidade combinada. No **upside**, o payout deles cresce com as melhorias:
  recebem **US$ 670 MM** em valor em vez de US$ 650 MM — efetivamente, **ainda mais valor foi
  transferido dos acionistas do comprador para os do alvo**. Os acionistas do comprador aceitam
  essa forma de pagamento porque **estão protegidos se a implementação for mal**: se o deal
  destrói valor, os acionistas do alvo ficam com menos do que antes, mas ainda com um bom prêmio,
  já que sua fatia da combinada vale **US$ 630 MM** contra os US$ 500 MM de valor de mercado
  pré-deal.
Nota 25: acionistas do alvo com participações pequenas podem vender suas ações no mercado para
evitar o risco de implementação; acionistas influentes com participações grandes, como fundadores
e executivos seniores, **frequentemente concordam em não vender por um período determinado** — e
nesse caso compartilham o risco de implementação. (Isto é, literalmente, a lógica de **lock-up /
rollover do fundador**.)

**Os dois critérios de escolha (p844)**:
1. **Você acha que o alvo e/ou a sua empresa está super ou subvalorizada?** Durante uma bolha, há
   mais inclinação a pagar em ações, porque então todos compartilham o ônus da correção de mercado.
   Nesse cenário, desenvolver uma visão sobre a **supervalorização relativa** dos dois negócios. Se
   você acredita que suas ações estão mais supervalorizadas que as do alvo, elas **têm valor
   próprio como moeda de transação**. (Nota 26: o efeito de sinalização da contraprestação em ações
   é similar ao de uma emissão de ações — o mercado usará essa nova informação, de que as ações
   podem estar supervalorizadas, ao precificá-las.)
2. **Quanta confiança você tem na capacidade do deal de criar valor?** Quanto mais confiante,
   mais inclinado a pagar em **caixa**.

**Terceiro critério — estrutura de capital (p844)**: ao ponderar caixa vs. ações, considerar também
qual será a estrutura de capital ótima. A empresa consegue levantar caixa suficiente via oferta de
dívida para pagar o alvo inteiramente em caixa? **Estender demais as linhas de crédito para
adquirir uma empresa pode devastar o tomador.** Caso: um fornecedor automotivo tomou caixa
emprestado para pagar uma sequência de aquisições; as melhorias operacionais não se materializaram
como originalmente esperado (em parte porque a execução do plano pós-fusão não foi rigorosa), e a
empresa terminou com um endividamento que não conseguia suportar, **levando à falência**. Se a
estrutura de capital da entidade combinada não acomoda a dívida extra incorrida ao pagar caixa,
é preciso pagar parcial ou totalmente em ações, **independentemente de qualquer desejo de
compartilhar risco**.

**Onde encaixa** — `negociacao-e-loi`. Adaptação ao mid-market brasileiro: "ações" raramente é a
moeda, mas a **lógica de alocação de risco é idêntica** e se aplica às moedas que realmente
aparecem: **earn-out, rollover de participação (equity roll), preço diferido, escrow/holdback e
vendor finance**. A leitura de Koller dá o vocabulário econômico correto:
- *Caixa à vista* = vendedor não compartilha risco de implementação → o comprador desconta o
  prêmio, e tem razão em fazê-lo.
- *Earn-out / rollover* = vendedor compartilha risco → o comprador aceita um valor de face maior
  (o "US$ 670 MM no upside" do exemplo).
- Simetria crucial para o vendedor familiar: **rollover e earn-out transferem para o vendedor o
  risco de execução do COMPRADOR**, que é justamente o risco que a evidência empírica do próprio
  capítulo mostra ser alto (metade dos compradores não captura 70% da sinergia de receita; em ~50%
  dos casos a estimativa pré-fechamento não era roteiro adequado). Isso é um argumento
  quantificável contra earn-out ancorado em receita/sinergia/EBITDA consolidado e a favor de
  earn-out ancorado em **métricas que o vendedor controla e pode auditar**.
- O lock-up de fundador da nota 25 é o análogo direto do rollover: o comprador **quer** que o
  fundador compartilhe risco; o vendedor deve cobrar por isso.
- Também: **a capacidade de endividamento do comprador é due diligence reversa obrigatória** —
  o caso do fornecedor automotivo é simultaneamente risco de fechamento e risco de solvência do
  comprador (relevante quando há preço diferido, earn-out ou rollover, porque o vendedor fica
  credor ou sócio). Entra em `segmentacao-de-compradores` como critério de qualificação
  (capacidade e estrutura de financiamento) e em `go-to-market` (prova de fundos / comprovação de
  capacidade de pagamento antes de acesso a informação sensível).
**Veredito: ADICIONAR-ALTA.** **Página: p842-844.**

### 31.9 Foco em valor, não em contabilidade — accretion/dilution é ruído (p844-847)

**O que é** — Muitos gestores focam na accretion/dilution de lucros trazida pela aquisição em vez
do valor que ela pode criar — e fazem isso apesar de numerosos estudos mostrarem que os mercados
**não prestam atenção nenhuma** ao efeito da aquisição sobre números contábeis, reagindo apenas ao
valor que se estima que o deal crie. Focar em medidas contábeis é, portanto, perigoso e facilmente
leva a decisões ruins.

**Contexto contábil (p845)**: em 2005, IFRS e US GAAP eliminaram a amortização de goodwill. Da
noite para o dia, a maioria das aquisições que teriam sido dilutivas de LPA passou a ser
accretive. Em deals de caixa, a única diluição vem da despesa de juros adicional, que após impostos
é tipicamente **menos de 4% do valor do deal**. Em deals de ações, o deal é accretive se o **P/E do
comprador for maior que o do alvo**. Mas *mudar a contabilidade não muda a economia dos deals*.

**Exemplo 1 — accretive destruindo valor (Exhibit 31.9, p845-846)**: você decide se compra por
**US$ 500 MM em caixa** uma empresa precificada no mercado a **US$ 400 MM**. Sua empresa (o
comprador) vale US$ 1,6 bi e tem lucro líquido de US$ 80 MM. Por simplicidade, **nenhuma melhoria
operacional**. Financia o deal levantando dívida a **6% de juro pré-imposto**. O deal **destrói
valor: você paga US$ 100 MM demais**. Ainda assim, o lucro e o lucro por ação do ano seguinte
**aumentam**, porque o lucro após impostos da empresa adquirida (**US$ 30 MM**) excede o juro após
impostos exigido pela nova dívida (**US$ 19,5 MM**).
**Por que o lucro aumenta e o valor é destruído (p846)**: o comprador está tomando emprestado
**100% do valor do deal** com base nos fluxos de caixa combinados das duas empresas — mas o negócio
adquirido **não sustentaria esse nível de dívida por conta própria**. Como o comprador coloca um
endividamento maior sobre os acionistas existentes **sem compensá-los adequadamente pelo risco
adicional**, está destruindo valor.
**O teste correto (p846)**: *"Somente quando o ROIC (calculado como os lucros do alvo mais as
melhorias, dividido pelo preço total de compra) é maior que o custo médio ponderado de capital é
que os acionistas são adequadamente compensados."* No exemplo: investimento de US$ 500 MM e lucro
após impostos de US$ 30 MM → **ROIC de meros 6%**. Está acima do custo após impostos de financiar
a dívida (3,9%), mas **abaixo do WACC**.
**A mesma aquisição via troca de ações (p846)**: o comprador precisaria emitir **12,5 MM de novas
ações** para prover o prêmio de aquisição de 25% que os acionistas do alvo demandam (razão de troca
de 1,25 ação do comprador por ação do alvo, nota 27). Após o deal, a combinada teria 52,5 MM de
ações e lucro de US$ 110 MM → o **LPA sobe para US$ 2,10**, e o deal é **novamente accretive sem
ter criado nenhum valor subjacente**. O aumento é **resultado de matemática, não de valor criado
pelo deal**.

**Exemplo 2 — dilutivo criando valor (p846)**: inversamente, empresas às vezes **abandonam
aquisições que podem criar valor** só porque são dilutivas de lucros nos primeiros anos. Suponha
gastar **US$ 100 MM** para comprar uma empresa de crescimento rápido num mercado atraente, com
**P/E de 30×**. Antes das melhorias de desempenho, os lucros da aquisição serão **US$ 3,3 MM**. Se
você toma emprestado a **4% após impostos**, a despesa de juros será **US$ 4,0 MM**, levando a uma
**diluição de lucros de US$ 0,7 MM**. No entanto, se você consegue acelerar a taxa de crescimento
do alvo para **20% nos cinco anos seguintes** e o alvo obtém **25% de retorno sobre o capital**,
provavelmente **criará valor para os acionistas**, ainda que os lucros e o ROIC fiquem deprimidos
por alguns anos.

**Evidência de mercado (Exhibit 31.10, p846-847)** — Os mercados financeiros entendem a diferença
entre criar valor real e aumentar LPA. Num estudo de **117 transações americanas maiores que
US$ 3 bi**, colegas de McKinsey acharam que a accretion ou dilution de lucros resultante dos deals
**não foi um fator na reação do mercado**. Independentemente de o LPA esperado ser maior, menor ou
igual **dois anos após** o deal, a reação do mercado foi similar (dentro dos limites de
significância estatística) tanto **um mês** após o anúncio quanto **um ano** após o anúncio.

**Onde encaixa** — `negociacao-e-loi`: munição para **desarmar a objeção "esse múltiplo não fecha
para mim / o deal fica dilutivo / não passa no meu comitê por causa do impacto no resultado"**.
Duas frases utilizáveis: (a) diluição de LPA não tem relação empírica com criação de valor
(117 deals, nenhum efeito, a 1 mês e a 1 ano); (b) o teste correto é **ROIC do deal (lucro do alvo
+ melhorias ÷ preço total de compra) vs. WACC do comprador** — e essa reformulação **desloca a
conversa do múltiplo para as melhorias**, que é exatamente onde o vendedor tem argumento
(§31.5, arquétipo 1: quanto mais gordura no alvo, mais melhoria disponível). O teste
"ROIC do deal > WACC" é também uma **calculadora simples e defensável do preço-teto do comprador**,
complementar ao "prêmio ≤ melhorias" da §31.1 — e as duas devem ser calculadas lado a lado por
comprador. Também: `benchmark-bancos` (bancos de investimento costumam apresentar análise de
accretion/dilution ao comprador; Koller dá a base para relativizá-la quando ela é usada contra o
vendedor).
**Veredito: ADICIONAR-ALTA.** **Página: p844-847.**
### 31.10 Características dos melhores compradores — as quatro capacidades institucionais (p847-851)

**O que é** — Empresas são mais bem-sucedidas em M&A quando aplicam a ele o mesmo foco,
consistência e profissionalismo que aplicam a outras disciplinas críticas (Ferrer/Uhlaner/West).
Isso requer construir quatro capacidades institucionais frequentemente negligenciadas.

**1. Fazer M&A tematicamente (p847-848)** — Empresas bem-sucedidas desenvolvem um **pipeline** de
aquisições potenciais em torno de **dois ou três temas explícitos de M&A** que apoiam a estratégia
corporativa. Os temas são efetivamente **planos de negócio** que usam tanto M&A quanto
investimento orgânico para atingir um objetivo específico, **considerando explicitamente as
capacidades da organização e suas características como best owner de um negócio**. Temas
prioritários são aqueles em que a empresa **precisa** de M&A para entregar sua estratégia **e** tem
a capacidade de agregar valor aos alvos. São também altamente detalhados, e seu efeito é mensurável
em market share, segmento de cliente ou metas de desenvolvimento de produto.
**Exemplo do nível de especificidade (p848)** — tema de M&A de uma varejista global: *crescer via
entrada em dois mercados emergentes adquirindo apenas empresas locais que sejam **não lucrativas**
mas estejam **entre as três maiores** de seus mercados*. "Esse é um nível de especificidade que
poucas empresas alcançam." Como chegaram lá: partiram da meta estratégica (ser a terceira maior do
setor em cinco anos, atingível só com entrada agressiva em emergentes); uma empresa menos
disciplinada aceitaria essa meta estratégica como objetivo de M&A e passaria a um scan amplo de
alvos; mas eles refinaram mais — concluíram que entrar em mercados demais ao mesmo tempo era
impraticável (restrição de tempo de gestão e complexidade de entrar em novas geografias), então
limitaram a busca às **duas regiões mais promissoras**; sabiam que suas operações enxutas
ofereceriam melhorias de custo em empresas com **operações inflados** — especialmente dada a
importância de economias de escala no setor — e que **branding local e atender preferências locais
eram críticos**. Com o tema de M&A definido tão precisamente, conseguiram reduzir a lista de
candidatos a um punhado de empresas.
> **Uso sell-side (muito potente)**: isto é o **manual de engenharia reversa da
> `segmentacao-de-compradores`**. Se os melhores compradores operam por 2-3 temas explícitos,
> então a tarefa do assessor é **descobrir os temas de M&A declarados de cada comprador** (calls
> de resultados, apresentações a investidores, releases, entrevistas, histórico e padrão dos
> últimos deals) e **posicionar o alvo dentro de um tema existente**, em vez de fazer um pitch
> genérico. Um alvo que se encaixa num tema declarado tem probabilidade de resposta e prêmio
> muito maiores, e um caminho de aprovação interna já pavimentado. Também explica o critério
> aparentemente estranho "não lucrativa mas top-3": compradores disciplinados podem
> **preferir ativamente** o alvo com margem baixa e posição de mercado forte — mais uma vez o
> arquétipo 1 (§31.5), e um argumento adicional para não maquiar a ineficiência do alvo, mas
> enquadrá-la como espaço de melhoria mensurado.

**2. Gerenciar a reputação como comprador (p848-849)** — Poucas empresas consideram como são
percebidas pelos alvos, ou como sua proposta de valor como comprador se compara à dos
concorrentes. Muitas são lentas e reativas em identificar alvos potenciais, **tímidas demais em
cortejar e construir relacionamentos com eles**, ou táticas demais ao iniciar conversas; podem ter
metas tão amplas que não conseguem abordar proativamente uma lista de alvos.
Compradores que investem em sua reputação são percebidos como **ousados, focados em colaboração, e
capazes de prover mentoria real e capacidades distintivas ao alvo**. Mesmo algumas das organizações
maiores e mais complexas podem ser percebidas como compradores atraentes por alvos pequenos e
ágeis, **largamente em função de como se apresentam e gerenciam M&A**. Os melhores entre eles:
- lideram com **insight setorial profundo** e um **business case prático e focado em ganhar no
  mercado**, em vez de conversar sobre sinergias ou valor do deal;
- deixam os gestores da empresa-alvo **verem como podem ser bem-sucedidos na nova organização**,
  tipicamente habilitando a visão agressiva de crescimento da empresa menor;
- têm **funções escaláveis** e um **processo de M&A previsível e transparente**, fácil de navegar
  para os alvos.
Resultado: conseguem usar sua posição no mercado para **ter sucesso em dimensões que vão além do
preço** — e frequentemente **são abordados por alvos que ainda nem estão à venda**. Isso é uma
vantagem competitiva real, porque os melhores ativos migram para as empresas que percebem como
agregadoras de valor, e isso **reduz o tempo de busca, a complexidade da integração e as chances de
uma guerra de lances**.
**Exemplo (p849)** — numa empresa de alta tecnologia, esses conceitos se juntaram em torno do tema
"habilitar inovação". O investimento em reputação como comprador começou como campanha de
marketing externa, mas rapidamente entrou fundo no processo de M&A. Em discussões em conferências e
em comunidades de engenharia, os gestores usavam **depoimentos de funcionários de empresas
adquiridas** para reforçar seu track record de comprar empresas e prover-lhes a expertise e os
recursos necessários para acelerar seus pipelines de produto. Desenvolveram **relacionamentos
pessoais úteis** com executivos de empresas-alvo discutindo formas de trabalhar juntos **mesmo além
do contexto de um deal (ou em vez de um deal)**. E quando chegava a hora de apresentar planos de
integração e modelos de investimento futuro aos alvos, os gestores garantiam que as propostas
fossem **consistentes com a reputação** da compradora.
> **Uso sell-side de dupla mão**: (a) é um **critério de avaliação de comprador para o vendedor
> familiar** — que quase sempre se importa com o destino da empresa, do time e do nome. A skill
> `segmentacao-de-compradores` deveria produzir, além de capacidade de pagamento, um perfil de
> **reputação e track record de integração** de cada comprador: o que aconteceu com as últimas
> 3 empresas que ele comprou? Os sócios ficaram e por quanto tempo? A marca sobreviveu? A sede
> foi mantida? Houve litígio de earn-out? Isso é decisivo em mid-market familiar e é um
> diferencial de assessoria raramente entregue. (b) Explica por que existem compradores que
> "competem além do preço": o processo sell-side deve **extrair valor dessas dimensões**
> (permanência da marca, continuidade do time, autonomia operacional, papel do fundador,
> manutenção da unidade/planta) e **precificá-las** — trocá-las por preço — em vez de
> entregá-las de graça.
> **Alerta simétrico e importante**: "ser abordado por alvos que ainda nem estão à venda" é
> exatamente o *approach direto* que subtrai valor do vendedor por eliminar competição. Koller
> descreve isso como uma **vantagem competitiva deliberadamente construída pelo comprador**, o
> que é o argumento mais forte que existe para o vendedor familiar não negociar sozinho com o
> comprador que bateu à porta: aquele comprador investiu anos em capacidade de comprar sem
> concorrência.

**3. Confirmar a visão estratégica — due diligence ESTRATÉGICA (p849-850)** — Para muitas empresas,
o elo entre estratégia e transação **se rompe durante a due diligence**. Ao focar estritamente em
questões financeiras, legais, tributárias e operacionais, a diligência típica **falha em trazer os
dados críticos para testar se a visão estratégica do deal é válida**.
Para sustentar o impulso estratégico do deal, as empresas devem reforçar a diligência financeira
usual com **diligência estratégica**: testar o racional de criação de valor do deal contra a
informação mais detalhada disponível **após a assinatura da carta de intenções**, além de verificar
se sua visão do modelo operacional futuro é de fato alcançável. Uma diligência estratégica deve
**confirmar explicitamente os ativos, as capacidades e os relacionamentos que fazem de um
comprador o best owner de uma empresa-alvo específica**, e deve reforçar a confiança do time
executivo de que ele é **verdadeiramente um comprador vantajoso** daquele ativo.
É crítico que os executivos sejam honestos e minuciosos ao avaliar suas vantagens — idealmente
desenvolvendo um ponto de vista baseado em fatos sobre suas crenças, **testando-as com todos os
responsáveis por entregar valor no deal**, incluindo vendedores, engenheiros de P&D, RH e finanças.
**Caso de falha (p850)** — Tal abordagem teria ajudado uma grande empresa financeira cuja
diligência focou em **auditar as operações existentes** em vez de **testar a viabilidade dos
modelos operacionais futuros**. Os critérios de "comprador vantajoso" assumidos pela empresa
focavam em ser um dos operadores mais eficazes do setor, apoiado por sistemas e processos de TI
fortes. Os executivos seguiram com o deal **sem nunca saber que o time de TI tinha uma visão
diferente do estado final**, e descobriram **apenas após o fechamento** que os sistemas de TI das
duas empresas **não podiam ser integrados**.
> **Uso sell-side crítico**: note o timing — a diligência estratégica ocorre **depois da LOI**.
> Isso significa que a fase pós-LOI não é apenas confirmação de números: o comprador está
> **retestando a própria tese de best owner**, e é aí que ele **reprecifica ou desiste**. A skill
> `negociacao-e-loi` deve tratar isso explicitamente: (a) antecipar quais elementos da tese
> estratégica do comprador serão testados e **pré-validá-los** com o vendedor antes da LOI, para
> não haver surpresa que justifique reabertura de preço; (b) estruturar a LOI para **limitar o
> escopo de reabertura** — escopo de diligência fechado, prazos curtos, cláusulas de ajuste de
> preço vinculadas apenas a itens objetivos e mensuráveis (dívida líquida, capital de giro,
> contingências quantificadas), não a "revisão da tese estratégica"; (c) o risco de integração de
> TI/sistemas do exemplo é altamente recorrente em mid-market brasileiro (ERPs precários ou
> ausentes, controles informais, múltiplos CNPJs, contabilidade gerencial paralela) — deve estar
> em `solicitacao-de-informacoes` e ser resolvido na preparação, não descoberto na diligência.

**4. Reavaliar as metas de melhoria de desempenho ao longo do ciclo de vida do M&A (p850-851)** —
Uma das armadilhas mais comuns mas evitáveis em qualquer transação é **falhar em atualizar as
expectativas de melhoria de desempenho** à medida que o comprador aprende mais sobre o alvo durante
a integração. Empresas que tratam M&A como um projeto tipicamente constroem e obtêm aprovação para
o valuation **uma única vez**, durante a diligência, e então embutem essas metas nos orçamentos
operacionais. Isso **força as aspirações da organização para baixo, ao mínimo denominador comum**,
congelando as expectativas num momento em que a informação é incerta e raramente correlacionada
com o potencial real do deal.
**Casos de upside (p850)**: uma empresa de bens de consumo embalados **elevou as sinergias em
run-rate em 75%** depois que os gestores reconheceram que a **abordagem superior do alvo para
promoções em loja** podia ser usada para melhorar o negócio-base da compradora (note: **sinergia
reversa — do alvo para o comprador**). Uma farmacêutica **elevou suas sinergias em mais de 40%**
numa transação muito grande ao revisitar ativamente as estimativas imediatamente após o fechamento,
criando um **ambiente livre de risco** para os gestores apresentarem ideias novas; alguns anos
depois, havia capturado essas sinergias maiores.
**Táticas para construir capacidade real de realizar sinergias**: reunir stakeholders em
**"value creation summits"** que imitam a intensidade e o foco de um esforço de diligência mas
**mudam os incentivos para focar no upside**; e compradores experientes adotam uma abordagem de
**folha em branco** para fomentar criatividade, em vez de ancorar o exercício num modelo de
diligência financeira — que muitas vezes leva a sinergias apenas incrementais. Essas atividades
permitem reforçar a ideia de que **as estimativas de melhoria da diligência são o desempenho
mínimo aceitável**, e habituam os gestores a mirar mais alto.
> **Uso sell-side — talvez o insight de negociação mais valioso do capítulo**: se as estimativas
> de sinergia da diligência são reconhecidamente **o piso** — e o próprio Koller documenta upside
> de 40% a 75% capturado após o fechamento, além de que em ~50% dos casos a estimativa
> pré-fechamento não era roteiro adequado (§31.7) — então o número de sinergia que o comprador
> apresenta ao vendedor na negociação é **estruturalmente conservador e sistematicamente
> subestimado**. Isso é argumento direto e citável para (a) resistir ao desconto de sinergia no
> preço ("sua própria literatura diz que essa é a estimativa mínima"), e (b) preferir
> earn-out/rollover quando o comprador insiste que a sinergia é incerta — se ele acredita que é
> incerta, deixe-o pagar quando ela aparecer.
> Segundo ponto: a **sinergia reversa** (melhoria no negócio do comprador vinda de uma capacidade
> do alvo) é sistematicamente subestimada e quase nunca é paga. Ela aparece explicitamente na
> equação da §31.1 ("melhorias que aparecerão como fluxos de caixa melhores no negócio do alvo
> **ou no do comprador**"). O IM deveria explicitá-la: **o que o alvo faz melhor que o comprador?**
> (uma prática comercial, uma relação de fornecimento, uma licença, um processo, um talento, um
> canal, uma marca regional). Isso é criação de argumento de preço a partir de informação que
> o vendedor tem e o comprador não.
**Veredito: ADICIONAR-ALTA.** **Página: p847-851.**

### 31.11 Erros clássicos — síntese consolidada do capítulo

Compilação dos erros que Koller identifica ao longo do Cap 31, útil como checklist único de
`negociacao-e-loi` (cada erro do comprador é simultaneamente uma alavanca de preço e um risco de
fechamento para o vendedor):

| # | Erro | Página |
|---|---|---|
| 1 | Racional estratégico vago ("escala internacional", "preencher lacunas de portfólio", "terceira perna do portfólio") em vez de um arquétipo específico | p828 |
| 2 | Pagar prêmio acima do valor das melhorias que se consegue efetivamente produzir | p820, p827 |
| 3 | Winner's curse — vencer o leilão por ter superestimado mais as sinergias que os demais | p835-836 |
| 4 | Hubris — superestimar a própria capacidade de capturar melhorias | p836 |
| 5 | Justificar deal por economias de escala **genéricas** (back-office) quando ambas já operam em escala | p831-832 |
| 6 | Estimar sinergia pela diferença de margem entre comprador e alvo (regra de bolso) em vez de análise detalhada por categoria | p837 |
| 7 | Dupla contagem, por falta de baseline detalhado consistente com o valuation intrínseco | p837 |
| 8 | Superestimar sinergia de receita (metade dos compradores captura <70%; 1/4 captura <30%) | p836-837 |
| 9 | Modelar melhoria de receita como aumento da taxa de crescimento em vez de valor absoluto ou % da receita stand-alone | p841 |
| 10 | Esquecer custos de implementação (rebranding, integração de TI, retreinamento, severance) — tipicamente ≥ 1 ano de economias | p841 |
| 11 | Otimismo sobre timing; melhorias não capturadas no primeiro ano orçamentário completo podem nunca ser capturadas | p841 |
| 12 | Ignorar a "data de validade" das economias (capacidade excedente cíclica que o crescimento natural eliminaria de qualquer forma) | p841-842 |
| 13 | Congelar as metas de sinergia no valuation da diligência e nunca reavaliá-las | p850 |
| 14 | Time de estimativa puramente financeiro, sem gestores de linha experientes | p838 |
| 15 | Due diligence que audita operações existentes em vez de testar o modelo operacional futuro e a tese de best owner | p849-850 |
| 16 | Decidir por accretion/dilution de LPA em vez de ROIC do deal vs. WACC | p844-847 |
| 17 | Abandonar deal criador de valor por ser dilutivo nos primeiros anos | p846 |
| 18 | Sobre-alavancar para pagar em caixa, levando a endividamento insuportável (fornecedor automotivo → falência) | p844 |
| 19 | Esperar que a consolidação melhore o comportamento de preço sem chegar a 3-4 competidores com barreira a entrantes | p834 |
| 20 | Roll-up com o "tipo errado de tamanho" (filiais dispersas em vez de densas) e convite a imitadores que inflam preços | p833-834 |
| 21 | Supor que a receita combinada = soma stand-alone + cross-selling, ignorando ruptura de clientes, caça a vendedores, dupla-fonte e concessões de preço | p840 |
| 22 | Comprar em mercado inflado (M&A aumenta após períodos de forte desempenho de mercado) | p836 |
| 23 | Deal grande em setor de crescimento rápido — o foco interno da integração desvia da inovação de produto | p826 |

**Onde encaixa** — `negociacao-e-loi` e `revisao-de-modelo` (auditoria de modelo com sinergia).
**Veredito: ADICIONAR-ALTA.** **Página: p818-851.**

### 31.12 Síntese de aditividade do Cap 31

| Conceito | Destino | Veredito |
|---|---|---|
| Equação valor criado = melhorias − prêmio; prêmio suportável por comprador | `negociacao-e-loi`, `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Evidência: +5,8% combinado; −1 a −3% comprador; 1/3-1/3-1/3; prêmio ~30% | `negociacao-e-loi`, `information-memorandum` | ADICIONAR-ALTA |
| Quatro tipos de comprador (programmatic/large-deal/organic/selective) + TSR +0,9%/ano | `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Quatro fatores de sucesso (bom operador, prêmio baixo, único proponente, deal privado) | `go-to-market`, `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Fatores que NÃO importam (EPS, P/E relativo, código SIC, ciclo econômico) | `negociacao-e-loi`, `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Seis arquétipos de criação de valor | `segmentacao-de-compradores`, `teaser`, `information-memorandum` | ADICIONAR-ALTA |
| Aritmética da alavancagem de margem (6% vs 30%) e PE +2,5 p.p. de margem | `negociacao-e-loi`, `diagnostico-de-roic`, `qualidade-de-resultados` | ADICIONAR-ALTA |
| Roll-up e "tipo certo de tamanho"; densidade geográfica sobreposta | `segmentacao-de-compradores`, `estudo-setorial` | ADICIONAR-ALTA |
| Winner's curse e hubris | `go-to-market`, `negociacao-e-loi` | ADICIONAR-ALTA |
| Regra dos 3-4 competidores para tese de consolidação | `estudo-setorial` | ADICIONAR-ALTA |
| Protocolo de estimativa de sinergia (baseline → categoria → benchmark) | skill nova `sinergias-e-tese-de-comprador` (plugin M&A) | ADICIONAR-ALTA |
| Assimetria custo (86% capturam ≥70%) vs. receita (metade <70%; 1/4 <30%) | `negociacao-e-loi` | ADICIONAR-ALTA |
| Dispersão de sinergia por categoria (procurement 5% vs. P&D 33%) | `sinergias-e-tese-de-comprador` | ADICIONAR-MÉDIA |
| Custo de implementação ≈ 1 ano de economias; janela do 1º ano orçamentário; use-by date | `negociacao-e-loi` | ADICIONAR-ALTA |
| Quatro fontes de melhoria de receita; projetar em absoluto, não em taxa | `projecao-e-cenarios` | ADICIONAR-MÉDIA |
| Os quatro vazamentos de receita pós-fusão (clientes, vendedores, dupla-fonte, concessões) | `negociacao-e-loi` | ADICIONAR-MÉDIA |
| Caixa vs. ações → alocação de risco → earn-out/rollover/escrow/vendor finance | `negociacao-e-loi` | ADICIONAR-ALTA |
| Capacidade de endividamento do comprador como diligência reversa | `segmentacao-de-compradores`, `go-to-market` | ADICIONAR-ALTA |
| ROIC do deal vs. WACC; accretion/dilution é ruído (117 deals, US$ >3 bi) | `negociacao-e-loi`, `benchmark-bancos` | ADICIONAR-ALTA |
| M&A temático: 2-3 temas explícitos por comprador (engenharia reversa) | `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Reputação do comprador; competir além do preço; track record de integração | `segmentacao-de-compradores`, `go-to-market` | ADICIONAR-ALTA |
| Due diligence estratégica pós-LOI e reteste da tese de best owner | `negociacao-e-loi`, `solicitacao-de-informacoes` | ADICIONAR-ALTA |
| Sinergia da diligência é o piso (upside 40-75% pós-close); sinergia reversa | `negociacao-e-loi`, `information-memorandum` | ADICIONAR-ALTA |
| 23 erros clássicos (tabela) | `negociacao-e-loi`, `revisao-de-modelo` | ADICIONAR-ALTA |
| Ondas de M&A; comprar no fundo do ciclo (espelho: vender no topo) | `go-to-market` | ADICIONAR-MÉDIA |
| Fusão transformacional (Novartis) | — | IRRELEVANTE-MIDMARKET |
| Voto de acionistas em aquisições (UK vs. EUA) | — | IRRELEVANTE-MIDMARKET |

---
## Cap 28 — Corporate Portfolio Strategy (p746-771)

> Este é o capítulo do **best owner**. É a fundamentação econômica do pitch ao vendedor
> ("por que vender vale mais que manter") e a taxonomia analítica da `segmentacao-de-compradores`.
> Muito aditivo, mas exige tradução: Koller escreve do ponto de vista do executivo de uma
> multinacional listada gerenciando portfólio; nós usamos do ponto de vista do assessor de um
> vendedor familiar único.

### 28.1 Aposte no cavalo ou no jóquei? (p746-748)

**O que é** — Kaplan, Sensoy & Strömberg (JoF 2009) analisaram startups financiadas por venture
capital e rastrearam se acabaram grandes e bem-sucedidas o suficiente para abrir capital.
Conclusão: **é melhor ter vantagem competitiva (o cavalo) do que ter um bom time de gestão (o
jóquei)**. Com vantagem competitiva, o VC pode sempre trocar um time fraco; mas até o melhor time
pode não conseguir transformar um pangaré em puro-sangue. Buffett, citado (p747): *"quando um time
de gestão com reputação de brilhantismo se junta a um negócio com má economia fundamental, é a
reputação do negócio que permanece intacta."*
Contexto adjacente (p747): uma empresa de químicos commodity é improvável de jamais ganhar tanto
retorno sobre capital quanto uma que faz cereal de café da manhã de marca — a escolha do negócio é
determinante crítico do destino. **Mas** donos e gestores diferentes podem extrair mais ou menos
valor do *mesmo* negócio. Portanto, criar o máximo de valor exige **escolher negócios atrativos
combinado com identificar o dono capaz de gerar os maiores fluxos de caixa daquele negócio**.

Pesquisa de base do capítulo (p746): colegas publicaram em 2018 (Bradley/Hirt/Smit,
*Strategy Beyond the Hockey Stick*) resultado sobre **2.393 empresas globais**, identificando os
drivers que levaram algumas ao quintil superior de criação de valor: **setor e geografia** em que a
empresa participa, mais **cinco ações de gestão estratégica**: (1) mudar o portfólio de negócios
(via aquisições programáticas e desinvestimentos), (2) alocar recursos, (3) gastar capital,
(4) melhorar produtividade, (5) inovar para diferenciar produtos e serviços.

**Onde encaixa** — `estudo-setorial` (o argumento "setor e geografia são determinantes de primeira
ordem do ROIC alcançável" é a justificativa de por que o estudo setorial precede o valuation);
`diagnostico-de-roic` (cavalo > jóquei: a vantagem competitiva estrutural manda mais que a
qualidade da gestão — o que valida projetar CAP a partir da fonte de vantagem, não da qualidade do
time). No pitch ao vendedor familiar, é também um argumento delicado mas verdadeiro: **o valor do
negócio não depende principalmente de o fundador continuar**.
**Veredito: ADICIONAR-MÉDIA.** **Página: p746-748.**

### 28.2 O princípio do best owner e o caso General Mills/Pillsbury (p747-749)

**O que é** — O princípio central: **o valor de um negócio não é um número único, é um número por
dono potencial.** Caso clássico, com números (p748):
- **General Mills comprou a Pillsbury da Diageo em 2001 por US$ 10,4 bi.**
- Pouco depois, aumentou os **fluxos de caixa pré-imposto do negócio em mais de US$ 400 MM por
  ano**, elevando o **lucro operacional da Pillsbury em ~70%**.
- Por quê: o core da Diageo é bebida alcoólica; General Mills e Pillsbury vendem alimentos
  embalados. Sob a Diageo, a Pillsbury era operada **inteiramente separada** do core, porque
  manufatura, distribuição e marketing raramente se sobrepunham. A General Mills **reduziu
  substancialmente custos** em compras, manufatura e distribuição da Pillsbury, porque as operações
  das duas **duplicavam custos significativos**.
- Do lado da receita: a General Mills **impulsionou a receita da Pillsbury introduzindo produtos
  Pillsbury em escolas americanas**, onde já tinha presença forte.
- **Sinergia nos dois sentidos**: os **caminhões refrigerados da Pillsbury** foram usados para
  distribuir a nova linha de refeições refrigeradas da General Mills. (← o exemplo canônico de
  **sinergia reversa**, cf. Cap 31 §31.10.)

**A dupla condição de um deal atrativo (p748)** — A Pillsbury representava valor de pelo menos duas
formas no momento da venda: **seu valor para a General Mills e seu valor para a Diageo**.
- Para a General Mills achar o deal atrativo: o valor da Pillsbury **sob propriedade da General
  Mills** tinha de ser maior que o preço de US$ 10,4 bi.
- Para a Diageo achar o deal atrativo: a oferta da General Mills tinha de representar **mais do que
  o valor que a Diageo esperava criar com a Pillsbury no futuro**.
- De uma perspectiva de criação de valor, a General Mills era **melhor dona** da Pillsbury.
> Esta é **a formulação exata do argumento de venda ao vendedor familiar**, e o preço de reserva
> correto: o vendedor deve vender se e somente se o preço ofertado exceder o valor presente do que
> ele mesmo criaria mantendo o negócio (o "valor de continuar"). E a **zona de acordo** existe
> porque valor-para-o-comprador > valor-para-o-vendedor. A skill `negociacao-e-loi` deveria
> calcular explicitamente os dois lados; a `triangulacao-e-faixa` hoje produz uma faixa de valor
> "objetiva", que na prática é o **valor stand-alone sob o dono atual** — insuficiente.

**Ressalva honesta de Koller (p748)** — "Na prática, nunca se consegue apontar o dono ideal de uma
empresa, apenas o melhor entre os donos potenciais nas circunstâncias dadas." É teoricamente
possível que alguma outra empresa gerasse fluxos ainda maiores que a General Mills. Mas o caso
ilustra que **uma mudança de dono pode fazer uma diferença enorme no valor: 70% neste caso**.

**Exemplos adicionais de reordenamento por best owner (p747-748)**: por muitos anos, negócios de
farmacêuticos veterinários eram de empresas que também faziam farmacêuticos humanos; de **2009 a
2019** uma reestruturação massiva transformou o setor de saúde animal — com economia, vendas e
canais de distribuição diferentes, **cinco das maiores farmacêuticas (Bayer, J&J, Novartis, Pfizer,
Sanofi) venderam ou fizeram spin-off** de seus negócios de saúde animal. A **Elanco**, divisão da
Eli Lilly, **comprou seis empresas de saúde animal** nesse período e em **2019 foi ela mesma
spun-off** como empresa independente. No mesmo período, muitas farmacêuticas grandes (J&J, Merck,
Pfizer) venderam partes significativas de seus negócios de consumo.

Benefício social (p748-749): a melhor propriedade também ajuda a economia ao **redirecionar
recursos para seu uso de maior valor** — atividades significativas podem ser realizadas a custo
muito mais baixo, liberando capital e recursos humanos para outras atividades.

**Onde encaixa** — `segmentacao-de-compradores` (valor é por dono), `information-memorandum`
(estruturar o racional de valor por cluster de comprador), `negociacao-e-loi` (preço de reserva do
vendedor = valor de continuar; ZOPA), `triangulacao-e-faixa` (a faixa objetiva não é a resposta
final — há uma faixa por comprador).
**Veredito: ADICIONAR-ALTA.** **Página: p747-749.**

### 28.3 As CINCO fontes de best ownership (p749-753) — a taxonomia mais aditiva do capítulo

**O que é** — Para identificar o melhor dono de um negócio, é preciso primeiro entender as fontes
de valor de que os donos potenciais podem se valer. Koller cataloga cinco (um dono pode combinar
duas ou mais):

**1. Vínculos únicos com outros negócios (p749)** — A forma mais direta de um dono adicionar valor
é criar **vínculos entre negócios do seu portfólio, especialmente quando só a controladora
consegue fazer tal vínculo**. Exemplo canônico: uma mineradora tem os direitos de desenvolver um
campo de carvão em local remoto, longe de ferrovias ou infraestrutura. **Outra mineradora já opera
uma mina de carvão a dez milhas de distância** e já construiu a infraestrutura necessária,
incluindo a ferrovia. A segunda seria a melhor dona da nova mina porque **seu custo incremental de
desenvolver a mina é muito mais baixo que o de qualquer outro** — e portanto ela **pode comprar a
mina não desenvolvida a um preço mais alto que qualquer outra empresa do mercado e ainda obter
ROIC atrativo**. Tais vínculos podem ocorrer em qualquer ponto da cadeia de valor: de P&D a
manufatura, distribuição e vendas. Ex.: uma farmacêutica grande com força de vendas dedicada a
oncologia pode ser a melhor dona de uma farmacêutica pequena com um novo medicamento oncológico
promissor mas **sem força de vendas**.
> **Uso direto**: este é o **teste operacional de "quem pode pagar mais"** — custo incremental mais
> baixo (ou receita incremental mais alta) por proximidade de ativo, rede, licença ou canal. Em
> mid-market brasileiro isso é mapeável objetivamente: sobreposição/adjacência de malha logística,
> de área de concessão ou licença ambiental, de base de clientes, de CD, de rota, de registro
> regulatório (ANVISA, MAPA, licenças estaduais), de canal de distribuição. Combina exatamente com
> o critério de "tipo certo de tamanho" do roll-up (Cap 31 §31.6a).

**2. Competências distintivas (p750)** — O dono melhor pode ter competências funcionais ou
gerenciais distintivas de que o novo negócio se beneficia. Podem residir em qualquer parte do
sistema de negócio: desenvolvimento de produto, processos de manufatura, vendas e marketing.
**Mas para fazer diferença, a competência tem de ser um driver importante de sucesso naquele
setor.** Exemplo do teste: uma empresa com grandes competências de manufatura provavelmente **não**
seria melhor dona de um negócio de bens de consumo embalados, porque **os custos de manufatura
desse negócio não são grandes o suficiente para afetar sua posição competitiva**; em bens de
consumo, competências distintivas em desenvolver e comercializar marcas são mais prováveis de
tornar uma empresa melhor dona.
- **P&G (p750)**: em 2013 tinha **180 marcas**, incluindo **23 marcas de mais de US$ 1 bi** em
  vendas líquidas (quase todas em 1º ou 2º lugar em seus mercados) e **14 marcas de meio bilhão**,
  espalhadas por detergente, beleza, ração e fraldas. Algumas (Tide, Crest) eram marcas P&G havia
  décadas; adquiriu Gillette e Oral-B; desenvolveu Febreze e Swiffer do zero. Em **2014** a P&G
  determinou que suas competências distintivas se aplicavam melhor a **marcas muito grandes** e
  anunciou que **descontinuaria ou desinvestiria 90 a 100 de suas marcas**.
- **Danaher (p750-751)**: empresa diversificada com receita de **US$ 19 bi**, cujo sucesso vem do
  **Danaher Business System**. A Danaher **faz aquisições apenas onde acredita poder aplicar sua
  abordagem de gestão para melhorar substancialmente as margens**. Aplicando essa estratégia nos
  **25 anos anteriores**, aumentou consistentemente as margens das empresas adquiridas —
  **Gilbarco Veeder-Root** (soluções de ponto de venda) e **Videojet Technologies** (equipamento e
  software de codificação e marcação) tiveram **margens melhoradas em mais de 700 basis points**
  após a aquisição. Conforme cresceu em tamanho e complexidade, a Danaher também começou a
  desinvestir/spin-off dos negócios grandes o suficiente para andar sozinhos: em **2016** fez
  spin-off dos negócios de instrumentação profissional e tecnologias industriais na **Fortive**,
  que incluía Gilbarco Veeder-Root e **21 outros negócios** que a Danaher havia adquirido e
  melhorado; em **2018** anunciou o spin-off do negócio dental.
> **Uso direto**: o **+700 bps de margem da Danaher** é o benchmark quantitativo de quanto um
> comprador com sistema operacional distintivo consegue melhorar um alvo — número citável em
> `negociacao-e-loi`. E o teste "a competência tem de ser driver importante *neste* setor" é o
> filtro que separa comprador que realmente paga prêmio de comprador que só tem discurso.

**3. Melhor governança (p751)** — Independentemente de estarem ou não rodando a operação do dia a
dia, donos melhores podem adicionar valor pela **governança**, isto é, pela forma como eles (ou
seus representantes) interagem com o time de gestão para criar valor máximo no longo prazo. Os
melhores fundos de private equity não apenas recapitalizam empresas com dívida; **melhoram o
desempenho via melhor governança**.
**Evidência (p751)**: dois colegas analisaram **60 investimentos bem-sucedidos de 11 fundos líderes
de private equity** (Kehoe & Heel). Acharam que em **quase dois terços das transações, a fonte
primária de novo valor foi a melhoria do desempenho operacional da empresa relativamente aos
peers, via interação frutífera entre donos e time de gestão**. **Alavancagem financeira e timing
esperto dos investimentos — frequentemente citados como as fontes de sucesso mais importantes do
PE — não foram tão importantes quanto a governança melhorada.**
Como o PE governa diferente (p751): não têm tempo nem competência para rodar as investidas no dia a
dia, mas os fundos de melhor desempenho governam **muito diferentemente** de empresas listadas — e
isso é fonte-chave de sua sobreperformance. Tipicamente: introduzem **cultura de desempenho mais
forte**; fazem **mudanças rápidas de gestão** quando necessário; **encorajam gestores a abandonar
vacas sagradas**; dão aos gestores **liberdade para focar em horizonte mais longo, digamos cinco
anos**, em vez do horizonte típico de um ano de uma listada. Além disso: **os conselhos de empresas
de private equity dedicam três vezes mais dias a seu papel** que os de empresas de capital aberto,
e **gastam a maior parte do tempo em estratégia e gestão de desempenho**, em vez de compliance e
aversão a risco, onde os conselhos de listadas tipicamente focam (Acharya/Kehoe/Reyner).
> **Uso direto e muito relevante ao mid-market familiar brasileiro**: (a) é a explicação econômica
> honesta do que um fundo de PE traz — e serve para **preparar o vendedor familiar** para o que
> vai mudar (cultura de desempenho, troca de gestores, fim das vacas sagradas, conselho ativo),
> reduzindo ruptura na negociação e no pós-deal; (b) "2/3 do valor vem de melhoria operacional via
> governança, não de alavancagem" é **argumento contra a objeção comum do vendedor de que "o
> fundo só quer alavancar e vender"**; (c) é também critério de qualificação: um fundo cujo track
> record é só alavancagem é comprador de prêmio menor que um com sistema operacional; (d) o
> corolário para o pitch: **a empresa familiar com governança fraca tem, por definição, essa fonte
> de valor disponível ao comprador** — e portanto suporta prêmio. Entra em
> `segmentacao-de-compradores` e no diagnóstico de preparação.

**4. Melhor insight e previsão (p751-752)** — Empresas que agem sobre seu insight de como um
mercado e um setor vão evoluir, para expandir negócios existentes ou desenvolver novos, podem ser
melhores donas porque capitalizam ideias inovadoras. Exemplos: **Alibaba/Alipay** — os líderes
percebem que a **falta de confiança entre compradores e vendedores era barreira ao crescimento de
marketplaces online na China**, e em **2004** (cinco anos após a fundação) lançaram o **Alipay**,
um serviço de escrow (o comprador deposita o dinheiro com o Alipay; assim que as mercadorias são
enviadas e aceitas, o Alipay libera os fundos ao vendedor); o Alipay serve não só os negócios do
Alibaba mas **milhares de outros comerciantes**, e em **2011 foi spun-off** como empresa
independente. **Amazon/AWS** — como maior empresa de e-commerce do mundo, a Amazon desenvolveu
competências únicas em rodar sistemas de computação distribuída; em **2006** lançou oficialmente o
AWS vendendo cloud a empresas, governos e indivíduos; em **2012** a receita era estimada em
**US$ 1,8 bi** (a Amazon não divulgou o AWS como unidade separada até 2015); em **2018** o AWS
gerou **US$ 25 bi de receita e US$ 7,3 bi de lucro operacional**.

**5. Acesso distintivo a stakeholders críticos (p752-753)** — Acesso distintivo a talento, capital,
governo, fornecedores e clientes **beneficia primariamente empresas em alguns mercados asiáticos e
emergentes**. Vários fatores complicam operar em emergentes: **pools relativamente pequenos de
talento gerencial**, **mercados de capitais subdesenvolvidos** e **governos fortemente envolvidos
no negócio** como clientes, fornecedores e reguladores. Nesses mercados, conglomerados
diversificados de larga escala — **Tata e Reliance na Índia, Samsung e Hyundai na Coreia do Sul** —
podem ser melhores donos de muitos negócios porque são **empregadores mais atrativos** (podendo
selecionar os melhores talentos); quanto a capital, muitos países emergentes ainda precisam
construir infraestrutura, e tais projetos requerem **grandes montantes de capital que empresas
menores não conseguem levantar**; empresas também frequentemente precisam de **aprovação
governamental** para comprar terra e construir fábricas, além de garantias de infraestrutura e
eletricidade suficientes — e grandes conglomerados tipicamente têm os recursos e as relações para
**navegar o labirinto de regulação governamental**.
Em mercados desenvolvidos, acesso a talento e capital raramente é problema (nos EUA, empresas
menores de alto crescimento são frequentemente **mais** atrativas a talento que as grandes; capital
é prontamente disponível mesmo a negócios pequenos); e, com algumas exceções, **influência com o
governo raramente confere vantagem**, dados processos de compras governamentais mais arm's-length.
> **Relevância brasileira ALTA e específica**: o Brasil é mercado emergente, e essa fonte de best
> ownership **se aplica aqui de forma que não se aplica nos EUA**. Traduzida para o mid-market
> brasileiro sell-side, ela nomeia compradores que pagam prêmio por razões que o vendedor familiar
> normalmente não enxerga: (a) **acesso a capital barato** — o comprador com rating, acesso a
> mercado de capitais, funding de banco de fomento ou balanço em moeda forte vale mais que o
> alvo com custo de capital de empresa fechada (ver também Cap 4 sobre risco não diversificado);
> (b) **acesso a talento** — grupo consolidado atrai o gestor que a empresa familiar não consegue
> contratar; (c) **acesso a governo/regulador** — licenciamento ambiental, concessões, contratos
> públicos, agências setoriais, incentivos fiscais estaduais: isso é fonte real de melhor
> propriedade no Brasil, especialmente em setores regulados (resíduos, saneamento, saúde, energia,
> transporte). Deve virar critério explícito da `segmentacao-de-compradores` e argumento no IM.
> Nota adicional (p761-762): pesquisa preliminar não publicada da McKinsey mostra que
> **empresas mais diversificadas em mercados emergentes superam suas pares menos
> diversificadas** — o oposto do observado em mercados desenvolvidos. Isso significa que o
> **conglomerado diversificado brasileiro é comprador legítimo e potencialmente pagador de
> prêmio**, e não deve ser descartado da long list pelo argumento de "falta de sinergia" válido
> em mercado desenvolvido.

**Onde encaixa** — Núcleo de `segmentacao-de-compradores`: as cinco fontes são as **cinco colunas
da matriz de avaliação de comprador**. Também `information-memorandum` (o IM deve ser escrito para
ativar cada fonte) e `negociacao-e-loi` (o prêmio suportável por comprador é a soma das fontes que
ele consegue ativar).
**Veredito: ADICIONAR-ALTA.** **Página: p749-753.**

### 28.4 O ciclo de vida do best owner (p753-755)

**O que é** — **A definição de best owner não é estática**, e os melhores donos mudam ao longo do
tempo conforme as circunstâncias do negócio mudam. O melhor dono de um negócio pode, em momentos
diferentes, ser: **uma empresa maior, um fundo de private equity, um governo, um fundo soberano,
uma família, os clientes do negócio, seus funcionários, ou acionistas dispersos** quando o negócio
se torna uma empresa aberta listada.
Além disso, os candidatos a best owner evoluem diferentemente em partes diferentes do mundo (p753):
- **EUA**: a maioria das empresas grandes é listada ou pertence a fundos de private equity;
  tendem a abrir capital mais cedo que em outros lugares, então **raramente envolvem a segunda
  geração de uma família fundadora**.
- **Europa**: a propriedade governamental também tem papel importante.
- **Ásia e América do Sul**: **empresas grandes são frequentemente controladas por várias gerações
  de membros da família fundadora**, e relações familiares também criam vínculos de propriedade
  entre negócios diferentes. Os mercados de capitais nessas regiões **não são tão desenvolvidos**,
  então **os fundadores se preocupam mais em garantir que suas empresas permaneçam fiéis a seu
  legado depois de sua aposentadoria**.
> Este último parágrafo é a descrição literal do cliente-vendedor da boutique. Koller reconhece
> explicitamente que a **preocupação com legado é uma característica estrutural** do controlador
> familiar sul-americano, não uma idiossincrasia. Isso legitima tratar "legado, continuidade do
> nome, do time e da comunidade" como **critério de decisão de primeira classe** ao lado do preço
> — e o Cap 31 §31.10 mostra que compradores competem nessas dimensões, o que significa que elas
> são **precificáveis**.

**A sequência canônica (p753-755)** — Koller narra o ciclo completo, e cada etapa vem com a
justificativa econômica de por que o dono muda:
1. **Fundadores** são quase sempre os primeiros melhores donos: energia empreendedora, paixão e
   comprometimento tangível são essenciais para tirar a empresa do chão.
2. **Venture capital**: conforme o negócio cresce, provavelmente precisa de mais capital, então
   pode vender participação a um fundo especializado em ajudar novas empresas a crescer. Nesse
   ponto, **não é incomum que o fundo coloque novos gestores que suplantam ou complementam os
   fundadores**, trazendo competências e experiência mais adequadas a gerenciar a complexidade e
   os riscos de uma organização maior.
3. **Abertura de capital**: para prover ainda mais capital, o VC pode abrir o capital, vendendo
   ações a um leque de investidores e, no processo, permitindo a si mesmo, aos fundadores e aos
   gestores **realizar o valor da empresa que criaram**. Com a abertura, **o controle passa a um
   conselho independente** (embora os fundadores mantenham influência importante se continuarem
   com participações substanciais).
4. **Venda a uma empresa maior**: conforme o setor evolui, a empresa pode descobrir que **não
   consegue competir com empresas maiores** — por exemplo, porque precisa de **capacidade de
   distribuição muito além do que consegue construir sozinha em prazo razoável** para desafiar
   competidores globais. Outros fatores externos, como **mudanças regulatórias ou tecnológicas**,
   também podem criar necessidade de trocar de dono. Em resposta, a empresa pode se vender a uma
   empresa maior que tem a capacidade necessária — tornando-se uma linha de produto ou negócio
   dentro de uma divisão de uma corporação multinegócios, fundindo-se às funções de manufatura,
   vendas, distribuição e administrativas da divisão.
5. **Venda a private equity**: conforme os mercados da divisão maturam, o dono corporativo pode
   decidir focar em outros negócios de crescimento mais rápido, e **vender a divisão a um fundo de
   private equity**. Agora, com a divisão isolada, o fundo consegue ver que ela **acumulou um
   overhead central muito mais alto do que o necessário para um mercado de baixo crescimento** —
   e a resposta é **reestruturá-la para dar-lhe estrutura de custo mais enxuta**.
6. **Venda a especialista em marcas de baixo crescimento**: concluída a reestruturação, o fundo
   vende a divisão a uma empresa grande **especializada em rodar marcas de crescimento lento**.

**Síntese (p754-755)**: em cada estágio, cada best owner tomou ações que aumentaram os fluxos de
caixa, adicionando valor. O fundador teve a ideia; o VC deu capital e gestão profissional; a
abertura permitiu aos investidores iniciais realizar o valor do trabalho de base do fundador e
levantou mais caixa; a corporação grande acelerou o crescimento com capacidade global de
distribuição; o fundo de PE reestruturou quando o crescimento desacelerou; e a última empresa
aplicou suas competências em gerenciar marcas de baixo crescimento. **Todas as trocas de dono
faziam sentido em termos de criação de valor.**

**Onde encaixa** — **Este é o esqueleto do pitch ao vendedor familiar**, e é o argumento mais
elegante que existe para "por que agora": não é que o vendedor fez algo errado, é que **as
circunstâncias mudaram e outro dono passou a ser o melhor**. Sugere **skill nova:
`tese-de-venda-e-best-owner` no plugin de M&A** (ou uma seção obrigatória em
`convencoes-de-projeto` / `information-memorandum`) que responda: (i) por que o dono atual foi o
melhor dono até aqui; (ii) o que mudou (escala requerida, capital requerido, tecnologia, regulação,
sucessão, concentração de risco do dono); (iii) quem é o melhor dono agora e por qual das cinco
fontes; (iv) o que o vendedor perde ao esperar. Também `go-to-market` (timing: "sell-by date").
**Veredito: ADICIONAR-ALTA.** **Página: p753-755.**

### 28.5 Gestão dinâmica de portfólio e a evidência sobre desinvestimento (p755-758)

**O que é** — Aplicando a sequência de best owner, executivos devem continuamente identificar e
desenvolver ou adquirir empresas de que poderiam ser os melhores donos, **e desinvestir negócios de
que eram os melhores donos mas para os quais agora têm menos a contribuir que outro dono
potencial**. Como o melhor dono muda com o tempo, é preciso um **processo estruturado e regular de
estratégia corporativa** para rever e renovar a lista de ideias e alvos, e para **testar se algum
dos negócios existentes atingiu sua "sell-by date"**. Da mesma forma, conforme a demanda cai num
setor maduro, empresas antigas provavelmente têm capacidade excedente; se **não têm a vontade ou a
capacidade de encolher ativos e pessoas junto com a capacidade, então não são mais os melhores
donos do negócio**. E a qualquer momento na história de um negócio, um grupo de gestores pode estar
melhor equipado para gerenciá-lo que outro. Nesses momentos, **aquisições e desinvestimentos são
frequentemente a melhor ou a única forma de alocar recursos sensatamente**.

**Evidência: portfólio ativo bate portfólio passivo (p755)** — Estudo McKinsey de **200 grandes
empresas americanas ao longo de dez anos** (Brandimarte/Fallon/McNish) mostrou que empresas com
**abordagem passiva de portfólio** — aquelas que **não vendiam negócios, ou só vendiam negócios
ruins sob pressão** — **subperformaram** empresas com abordagem ativa. **Os melhores desempenhos
desinvestiam e adquiriam sistematicamente.** O processo é natural e nunca termina: uma unidade
desinvestida pode muito bem buscar novas separações mais tarde em sua vida, especialmente em
setores dinâmicos em rápido crescimento e mudança tecnológica.

**Caso General Dynamics (p755-756)** — No início dos anos 1990, a General Dynamics enfrentava
ambiente setorial desfavorável: previa-se declínio significativo dos gastos de defesa americanos, o
que prejudicaria a empresa como fornecedora de sistemas de armas. Quando o CEO **William A. Anders**
assumiu em **1991**, iniciou uma série de desinvestimentos. **A receita foi cortada pela metade em
dois anos, mas os retornos ao acionista foram extraordinários: taxa anualizada de 58% entre 1991 e
1995, mais que o dobro dos retornos dos principais pares.** Então, **a partir de 1995**, Anders
começou a **adquirir** empresas em subsetores atrativos; nos sete anos seguintes o **retorno
anualizado da General Dynamics excedeu 20%**, novamente mais que o dobro dos retornos típicos do
setor.
> Caso citável no pitch: **encolher deliberadamente pode ser a decisão de maior criação de valor**,
> e o mercado recompensa. Muito útil quando o vendedor familiar resiste a vender uma unidade ou a
> empresa por associar tamanho a sucesso.

**A tela de aquisição pelo prisma de best owner é DIFERENTE da tela tradicional (p756)** — Item
extremamente aditivo: *"Para aquisições, aplicar o princípio do best owner frequentemente leva
compradores potenciais a alvos muito diferentes daqueles produzidos por abordagens tradicionais de
triagem. As abordagens tradicionais frequentemente focam em achar alvos potenciais que **performem
bem financeiramente** e sejam **de alguma forma relacionados** às linhas de negócio da
controladora. Mas pelas lentes do best owner, tais características podem ser menos importantes ou
irrelevantes. Compradores potenciais podem se dar melhor buscando uma **empresa financeiramente
fraca com grande potencial de melhoria**, especialmente se o comprador tem expertise comprovada em
melhorar desempenho. Focar atenção em **oportunidades tangíveis de reduzir custos** ou em
**identificar clientes comuns** pode ser mais recompensador no longo prazo que investigar um alvo
pela razão vaga de que ele é de alguma forma relacionado à sua empresa."*
> **Uso direto e forte**: (a) confirma, de outro ângulo, a §31.5 arquétipo 1 e o §31.10 tema de
> M&A da varejista ("não lucrativa mas top-3"): **um alvo com desempenho financeiro fraco não é
> um alvo pior — para o comprador certo é o alvo melhor**. Isso reenquadra completamente como
> apresentar uma empresa familiar com margens baixas: não como problema a esconder, mas como
> **potencial de melhoria a quantificar**; (b) "identificar clientes comuns" e "oportunidades
> tangíveis de reduzir custos" são os **dois critérios objetivos** que devem substituir
> "adjacência setorial" na construção da long list de `segmentacao-de-compradores`, o que também
> corrobora o achado do Cap 31 de que **código SIC não prediz criação de valor**.

**A evidência sobre reação do mercado a desinvestimentos (p757)** — Executivos frequentemente se
preocupam que desinvestimentos pareçam admissão de fracasso, tornem a empresa menor e reduzam seu
valor de mercado. **A pesquisa mostra o contrário**:
- **O mercado reage consistentemente de forma POSITIVA a desinvestimentos, tanto vendas quanto
  spin-offs** (Mulherin & Boone, *Journal of Corporate Finance*, 2000).
- **Negócios objeto de spin-off tendem a aumentar suas margens de lucro em UM TERÇO nos três anos
  após a conclusão da transação** (Cusatis/Miles/Woolridge, JACF 1994).
- **Portanto, desinvestimentos planejados são um sinal de criação de valor bem-sucedida.**
> Números diretamente citáveis no pitch ao vendedor e no IM. O "+1/3 de margem em 3 anos após
> spin-off" é a evidência quantitativa de que **sair do guarda-chuva de um dono que não é o melhor
> dono libera desempenho** — argumento aplicável a carve-out de unidade familiar e a venda de
> empresa cujo controlador está desengajado ou descapitalizado.

**Encolher de propósito (p757-758)** — P&G (2014): descontinuar/desinvestir 90-100 marcas pequenas,
vender os negócios de ração e fazer spin-off da Duracell — "esse tipo de encolhimento pensado
permite que negócios disparatados foquem em suas necessidades únicas e situações competitivas".
Kraft (2012): dividida em **Mondelez International** (snacks global — biscoitos, crackers,
chocolate) e **Kraft Foods Group** (produtos de mercearia majoritariamente norte-americanos —
queijo, carnes, molhos, café); ambas em alimentos de marca, mas a gestão acreditava que os desafios
e oportunidades eram **diferentes o suficiente para serem melhor gerenciados como empresas
separadas**. (Nota 9: em 2015 a Kraft se fundiu com a Heinz.)
Outros casos de gestão dinâmica (p757): três das quatro maiores refinarias americanas por
capacidade nasceram de spin-off — **Marathon Petroleum** (a maior, spun-off da Marathon Oil em
2011), **Phillips 66** (a quarta, spin-off da ConocoPhillips em 2012), **Valero Energy** (a
segunda, originalmente spun-off da Coastal States Gas em 1980, cresceu por aquisições em 2000,
2001, 2005 e 2011, e em 2013 fez spin-off do varejo de gasolina para se tornar refinaria pura; em
2019 a Marathon Petroleum também anunciou intenção de spin-off do varejo).
Caso químico-farmacêutico (p756-757): 50 anos atrás, muitas farmacêuticas e químicas foram
combinadas porque requeriam processos e competências de manufatura similares; conforme os dois
setores maturaram, suas competências de pesquisa, manufatura e outras **divergiram
consideravelmente**, ao ponto de se tornarem "primos distantes em vez de empresas irmãs". Hoje as
chaves para rodar uma química de commodity são **escala, eficiência operacional e gestão de custos
e capex**; as chaves para rodar uma farmacêutica são **gerenciar pipeline de P&D, força de vendas
sofisticada, processo de aprovação regulatória e relações com governo** em sistemas de saúde
estatais que compram medicamentos. Por isso **quase todas as antigas empresas químico-farmacêuticas
combinadas se separaram** (Zeneca separada da Imperial Chemical Industries em 1993, depois fundida
formando AstraZeneca; Aventis separada da Hoechst em 1999, depois comprada pela Sanofi Synthelabo).
> **Uso**: o mecanismo aqui é o **teste de divergência de fatores-chave de sucesso** — dois
> negócios sob o mesmo dono deixam de fazer sentido quando os drivers de sucesso divergem. É o
> teste analítico que justifica um **carve-out**, situação comum no mid-market brasileiro (grupo
> familiar com 3-4 negócios sem relação, vendendo um). Deve entrar em `convencoes-de-projeto` /
> `estudo-setorial` como diagnóstico de escopo do que se vende.

**Onde encaixa** — `information-memorandum` e a tese de venda (evidência de reação positiva a
desinvestimentos, +1/3 de margem pós-spin-off, portfólio ativo > passivo, General Dynamics);
`segmentacao-de-compradores` (a tela de best owner substitui a tela de adjacência setorial);
`estudo-setorial` (teste de divergência de fatores-chave de sucesso para escopo de carve-out).
**Veredito: ADICIONAR-ALTA.** **Página: p755-758.**

### 28.6 O mito da diversificação (p758-762)

**O que é** — Pergunta perene: empresas devem manter portfólio diversificado de negócios? A ideia
pareceu desacreditada nos anos 1970, mas executivos ainda dizem coisas como *"é a terceira perna do
banquinho que dá estabilidade à empresa"*. Perspectiva de Koller: **diversificação não é
intrinsecamente boa nem ruim; depende de a controladora adicionar mais valor aos negócios que
possui do que qualquer outro dono potencial poderia** — isto é, de ela ser a melhor dona nas
circunstâncias.

**Refutação de "suavizar fluxo de caixa" (p758-759)**:
- **Não há evidência de que empresas diversificadas efetivamente gerem fluxos de caixa mais
  suaves**: examinando as **50 empresas do S&P 500 com a menor volatilidade de lucros de 1997 a
  2007**, **menos de dez podiam ser consideradas diversificadas** (no sentido de possuir negócios
  em mais de dois setores distintos).
- **Não há evidência de que investidores paguem preços mais altos por empresas menos voláteis**
  (ver Cap 7). Nas análises regulares de empresas diversificadas para clientes, "quase nunca
  achamos que o valor da soma das unidades de negócio de uma empresa diversificada seja
  substancialmente diferente do valor de mercado da empresa consolidada".
- **Argumento de mais dívida/benefício fiscal**: pode fazer sentido em teoria, mas "nunca
  encontramos empresas diversificadas que sistematicamente usassem mais dívida que seus pares".
- **Argumento mais sofisticado — aproveitar ciclos diferentes** (usar caixa de negócios no topo do
  ciclo para investir em negócios no fundo, quando competidores não diversificados não podem):
  "não encontramos empresas diversificadas que efetivamente se comportem assim. Na verdade,
  tipicamente encontramos o oposto: **os executivos seniores de empresas diversificadas não
  entendem suas unidades individuais bem o suficiente para ter a confiança de investir no fundo do
  ciclo**, quando nenhum dos competidores está investindo. **Empresas diversificadas tendem a
  responder a oportunidades mais lentamente** que empresas menos diversificadas."

**Benefícios elusivos, custos reais (p759-760)**:
- **Investidores conseguem diversificar suas carteiras a custo mais baixo** do que empresas
  conseguem diversificar seus portfólios de negócios, porque só precisam comprar e vender ações —
  algo que fazem facilmente e relativamente barato muitas vezes por ano. Em contraste, **mudar
  substancialmente a forma de um portfólio de negócios reais envolve custos de transação e
  disrupção consideráveis, e tipicamente leva muitos anos**.
- **As unidades de negócio de empresas diversificadas frequentemente performam pior que as de
  pares mais focados**, em parte por **complexidade e burocracia adicionais**.
- Nos EUA, ao final de **2010** havia apenas **22 conglomerados verdadeiros** (definição da nota 10
  — Cyriac/Koller/Thomsen: empresa com três ou mais unidades de negócio que **não têm clientes,
  sistemas de distribuição, tecnologias ou instalações de manufatura em comum**). Desde então,
  cinco anunciaram que se dividiriam ou desinvestiriam negócios importantes.

**A descoberta sobre a DISTRIBUIÇÃO de TSR (Exhibit 28.1, p760)** — Item analiticamente elegante:
*"O insight marcante não foi que o TSR médio era mais baixo para conglomerados, mas que
**o topo da distribuição foi decapitado**."*
- **Nenhum conglomerado do estudo excedeu TSR acima de 20%**, enquanto **o TSR de empresas mais
  focadas passou de 30%**.
- Por quê: os ganhos de upside são limitados porque **é improvável que todos os negócios diversos
  sobreperformem ao mesmo tempo** — os retornos das unidades que sobreperformam são **anulados
  pelas que subperformam**. Além disso, conglomerados são usualmente compostos de **negócios
  relativamente maduros**, muito além do ponto em que gerariam retornos altos inesperados.
- **Mas o downside não é limitado**, porque o desempenho de negócios mais maduros **pode cair muito
  mais do que pode subir**.
- **Exemplo matemático (p760)**: se uma unidade que representa **um terço** do valor do
  conglomerado ganha **20% de TSR** enquanto as outras ganham **10%**, a média ponderada é ~**14%**.
  Mas se o TSR daquela unidade é **−50%**, a média ponderada **é arrastada para ~2%**, mesmo antes
  de as outras unidades serem afetadas. Adicionalmente, o desempenho agregado ruim pode afetar a
  **motivação de toda a empresa** e sua **reputação com clientes, fornecedores e potenciais
  funcionários**.
> **Uso sell-side ALTO em contexto brasileiro**: o grupo familiar brasileiro típico com 3-4
> negócios sem relação (indústria + fazenda + imobiliária + participação em banco) **é exatamente
> o conglomerado da definição da nota 10**. Este bloco é o argumento analítico de por que separar
> os negócios cria valor — e, notavelmente, o argumento não é "a média é pior", é
> **"você renunciou ao upside"**. Isso é muito mais persuasivo com um controlador familiar do que
> um argumento de média, porque nomeia o custo de oportunidade concreto: nenhuma das suas
> unidades pode jamais entregar o retorno que entregaria isolada, e uma unidade ruim pode
> arrastar tudo. Vai em `information-memorandum` e no pitch/tese de venda.

**O que de fato importa — as três práticas de conglomerados de alto desempenho (p761)**:
1. **Rebalanceiam continuamente seus portfólios comprando empresas cujo desempenho conseguem
   melhorar** (remissão explícita ao Cap 31).
2. **Gerenciam agressivamente a alocação de capital entre unidades no nível corporativo**: todo o
   caixa que excede as necessidades operacionais é **transferido à controladora**, que decide como
   alocá-lo entre oportunidades de negócio ou investimento atuais e novas, **com base no potencial
   de crescimento e nos retornos sobre capital investido**. Exemplo: as unidades da **Berkshire
   Hathaway** são racionalizadas do ponto de vista de capital — capital excedente é enviado para
   onde é mais produtivo, e **todos os investimentos pagam pelo capital que usam**.
3. **Operam de forma muito parecida com os melhores fundos de private equity**: com um **centro
   corporativo enxuto** que restringe seu envolvimento na gestão das unidades a **selecionar
   líderes, alocar capital, avaliar estratégia, definir metas de desempenho e monitorar
   desempenho**. E igualmente importante: **não criam processos corporativos extensos nem grandes
   centros de serviços compartilhados** — "você não vai encontrar programas corporativos de
   redução de capital de giro, porque isso pode não ser prioridade para todas as partes da
   empresa". Na **Illinois Tool Works**, as unidades são primariamente autossuficientes, com ampla
   autoridade para se autogerir desde que os gestores adiram à **regra 80/20** da empresa (80% da
   receita vem de 20% dos clientes) e aos princípios de inovação; o centro corporativo cuida
   largamente de impostos, auditoria, relações com investidores e algumas funções centralizadas de
   RH.

**Conglomerados em mercados emergentes (p761-762)** — A situação econômica em emergentes é distinta
o suficiente para Koller ser cauteloso ao aplicar insights de empresas do mundo desenvolvido.
**Pesquisa preliminar não publicada da McKinsey mostra que empresas mais diversificadas em
mercados emergentes SUPERAM suas pares menos diversificadas — o que não é o caso em mercados
desenvolvidos.** Espera-se que a estrutura de conglomerado desapareça eventualmente, mas o ritmo
varia por país e setor. Contornos da mudança: negócios de infraestrutura e outros intensivos em
capital provavelmente continuarão parte de grandes conglomerados enquanto o acesso a capital e
conexões for importante; empresas que dependem menos de acesso a capital e conexões tendem a focar
em oportunidades diferentes das dos grandes conglomerados — incluindo as orientadas a exportação,
como serviços de TI e farmacêuticos. A ascensão de serviços de TI e farmacêuticos na Índia e de
empresas de internet na China mostra que **a vantagem dos grandes conglomerados em acesso a talento
gerencial já caiu**; conforme os emergentes se abrem a mais investidores estrangeiros, sua vantagem
em acesso a capital também pode declinar — **deixando o acesso a governo como sua última força
remanescente**, restringindo ainda mais suas oportunidades a setores onde essa influência
permanece importante. Embora possa levar décadas, tamanho e diversificação de conglomerados
**eventualmente se tornarão impedimentos em vez de vantagens**.
> **Nuance importante para o Brasil, e é uma ressalva contra aplicar o capítulo cegamente**:
> em mercado emergente a diversificação **pode** criar valor. Consequências práticas: (a) não
> descartar conglomerado brasileiro da long list por "falta de encaixe estratégico";
> (b) ao argumentar com um vendedor familiar diversificado que ele deve vender uma unidade, o
> argumento do "topo da distribuição decapitado" é válido, mas o argumento de "diversificação
> destrói valor por si" **não é** — no Brasil, acesso a capital e a governo ainda é fonte real de
> best ownership. Ser honesto sobre isso aumenta a credibilidade do assessor.

**Onde encaixa** — `information-memorandum` e tese de venda (upside decapitado; custos reais da
diversificação; investidor diversifica mais barato que a empresa); `estudo-setorial` (definição
operacional de conglomerado; ressalva emergente). O bloco sobre "as três práticas" é sobre gestão
corporativa e é **IRRELEVANTE-MIDMARKET** para o uso sell-side, exceto o item 1 (que já está no
Cap 31) e a alocação de capital baseada em ROIC.
**Veredito: ADICIONAR-MÉDIA** (mito da diversificação e distribuição de TSR — útil, mas
secundário e requer cuidado no contexto emergente); **IRRELEVANTE-MIDMARKET** (as três práticas de
conglomerados de alto desempenho; conglomerados emergentes como tópico de gestão).
**Página: p758-762.**

### 28.7 Construindo o portfólio — o checklist de avaliação de unidade e as quatro cenários de valor (p762-769)

**O que é** — Abordagem sistemática de 30 anos de prática. Dois passos: avaliação das unidades e
análise de cenários.

**Passo 1 — Perguntas de avaliação de cada unidade (Exhibit 28.2, p762-763)**
Perguntas primárias:
- A unidade está num **mercado atrativo** — especificamente, um mercado com **ROIC e oportunidades
  de crescimento atrativos**?
- A unidade tem **vantagem competitiva sobre os pares**, evidenciada por crescimento ou ROIC mais
  altos? **Quais são as fontes da vantagem? São sustentáveis?**
- **Por que a controladora é uma melhor dona da unidade? Que vantagens ela traz?**
- A unidade dá à empresa a **opção de expansão**?
- Há **pontos de inflexão à frente** no mercado de produto da unidade (positivos ou negativos) que
  afetem seu valor?
Fatores secundários:
- A unidade tem algum **impacto de risco** sobre o resto da empresa?
- Em base líquida, a unidade **provê ou consome caixa**?
- O potencial de criar valor é **grande o suficiente para ter impacto significativo** no valor da
  empresa inteira?
- A unidade **consome muito mais tempo de gestão** que as outras, relativamente a seu potencial de
  criação de valor?

**Passo 2 — Os QUATRO cenários de valor por unidade (p764)** — Item muito aditivo:
1. **Valor DCF de baseline ou "momentum"**: cresce em linha com seus mercados de produto
   subjacentes, **sem qualquer mudança de desempenho relativo aos pares** (pode ser complementado
   com um valuation por múltiplos relativo aos pares, para ver se há um gap a fechar).
2. **Valor DCF baseado em melhorias operacionais potenciais ou planejadas** — por exemplo,
   aumentando margens, acelerando o crescimento de receita do core e melhorando a eficiência de
   capital.
3. **Valor para donos alternativos, caso a unidade fosse desinvestida.**
4. **Valor com oportunidades adicionais de crescimento** via inovação ou aquisições.
> **Uso direto e importante**: esta é **exatamente a arquitetura de cenários que uma
> `triangulacao-e-faixa` sell-side deveria produzir**, e é diferente do que ela provavelmente
> produz hoje. O cenário 1 (momentum, sem melhoria relativa) é o **piso honesto**; o cenário 2 é o
> **valor sob gestão melhorada** (que é o que o comprador vai capturar — logo, o que sustenta o
> prêmio); o cenário 3 é o **valor para dono alternativo** (o teto por comprador, cf. Cap 31
> §31.1); o cenário 4 é o **upside de crescimento** (a moeda de earn-out). Recomendação: adotar
> estes quatro cenários como padrão em `projecao-e-cenarios` e `triangulacao-e-faixa`, no lugar de
> um "base/otimista/pessimista" genérico — porque estes quatro cenários **mapeiam para partes
> diferentes da negociação**.

**O caso Hexa Corporation (p764-769)** — Empresa de **US$ 10,65 bi** com seis negócios. Bom modelo
de raciocínio de "vender vs. manter", com números:
- **Consumerco** (bens de consumo embalados de marca): **ROIC alto**, mas crescimento apenas
  acompanhando a inflação; por tamanho e ROIC alto, respondia por **~72% do valor total da Hexa**.
- **Foodco** (serviços de alimentação por contrato): lucros crescendo, mas **ROIC baixo** por
  exigências altas de investimento em instalações.
- **Woodco** (fabricante de móveis de médio porte): formada pela aquisição de **oito empresas
  menores**, ainda em consolidação; **retornos em declínio contínuo**.
- **Newsco** (jornal pequeno), **Propco** (incorporadora pequena), **Finco** (financeira de
  consumo pequena).

Diagnóstico inicial (Exhibit 28.3, p765): o **valor DCF da Hexa no cenário momentum aproximadamente
igualava seu valor de mercado**. A análise de fluxo de caixa mostrou que, enquanto a Hexa gerava
fluxo de caixa discricionário substancial na Consumerco, **grande parte desse dinheiro foi afundado
em Woodco e Foodco, e relativamente pouco foi reinvestido na Consumerco**. Além disso, pouco do
caixa voltou aos acionistas: **nos cinco anos anteriores, a Hexa tinha, em efeito, tomado
emprestado para pagar dividendos**.
> Padrão de altíssima frequência em grupo familiar brasileiro: **o negócio bom subsidia o negócio
> ruim e é descapitalizado no processo**. Esse é um diagnóstico que a boutique pode entregar e que
> sustenta tanto o argumento de venda quanto o de escopo (vender qual unidade).

Diagnóstico por unidade e valor destravado:
- **Consumerco (manter e melhorar; +≥37% de valor)** — Apesar de marcas fortes e liderança de share
  na maioria das linhas, havia espaço para aumentar receita significativamente e ganhar margens
  ainda maiores: (i) a Consumerco vinha **cortando P&D e publicidade** para gerar caixa para os
  esforços de diversificação da Hexa e amortecer o desempenho ruim de outras partes do portfólio —
  aumentar esses investimentos levaria a volumes mais altos nos produtos existentes e encorajaria
  a introdução de produtos adicionais de margem alta; (ii) apesar da posição de liderança,
  **seus preços eram mais baixos que os de marcas menos populares** — o valor criado por aumentos
  de preço mais que compensaria qualquer perda de volume; (iii) **sua força de vendas era menos da
  metade tão produtiva** quanto as de outras empresas vendendo pelos mesmos canais — a
  produtividade poderia subir para perto do nível dos pares; (iv) havia espaço para cortar custos,
  particularmente em **compras e gestão de estoques** — o custo das vendas poderia ser reduzido
  facilmente em **um ponto percentual**. Somando: **o valor da Consumerco poderia aumentar em ao
  menos 37%**.
- **Foodco (vender)** — Claramente candidata a desinvestimento: **ROIC menor que o custo de
  capital, então seu crescimento estava destruindo valor**. O setor como um todo era extremamente
  competitivo, embora alguns grandes players ganhassem retornos respeitáveis — mas até os retornos
  deles começavam a declinar. **A marca Consumerco, usada pela Foodco, tinha pouco valor** na
  construção do negócio, e a Foodco seria **incapaz de desenvolver economias de escala
  significativas**, ao menos no curto prazo. Pior, tinha **apetite voraz por capital** para
  construir instalações, mas não gerava retorno sobre novo investimento suficiente para cobrir o
  custo de capital. Por fim, era candidata **particularmente forte** porque **um novo dono, um
  competidor maior e em crescimento, poderia melhorar dramaticamente seu desempenho**.
- **Woodco (melhorar primeiro, vender depois; +33%)** — Também podia melhorar dramaticamente sob
  propriedade da Hexa, se atingisse o nível de desempenho das melhores empresas de móveis: isso
  exigiria **focar menos em crescimento e mais em margens mais altas**, construir **melhores
  sistemas de informação gerencial e de controle**, e **manter-se em seus produtos familiares de
  mercado de massa** em vez de partir para mobiliário premium, como planejava. Embora a análise
  sugerisse que a Woodco também poderia ser vendida (por exemplo, a uma empresa que compra e
  melhora fabricantes de móveis menores), **faria pouco sentido para a Hexa vendê-la
  imediatamente, no meio de sua consolidação, quando compradores potenciais poderiam se preocupar
  que o negócio desmoronasse. Se a consolidação tivesse êxito, a Hexa poderia vender a Woodco por
  um preço muito mais alto em 12 a 18 meses**, e o valor da Woodco poderia aumentar **33%** como
  resultado.
  > **Item de altíssimo valor prático para a boutique**: é a articulação canônica de **"quando NÃO
  > vender agora"** — e portanto de quando recomendar um projeto de preparação de 12-18 meses em
  > vez de ir a mercado. O critério é específico: **não venda no meio de uma integração ou
  > transformação incompleta, porque o comprador desconta o risco de o negócio desmoronar.**
  > Isso deve ser um teste explícito em `convencoes-de-projeto` (diagnóstico de prontidão para
  > mercado) e em `go-to-market` (timing).
- **Newsco e Propco (vender)** — ambas **subescala** e **incapazes de atrair os melhores talentos**
  como parte da Hexa; além disso, **existiam compradores prontos para ambas**, então
  desinvestimento era a escolha clara.
- **Finco (liquidar)** — O setor de crédito ao consumo se tornou tão competitivo que **o spread
  entre custos de captação e as taxas que a Finco ganhava em novos empréstimos não cobria seus
  custos operacionais**. Descobriu-se que **a carteira de empréstimos existente poderia ser
  vendida por mais do que o negócio inteiro valia** — em efeito, **cada ano de novos negócios
  estava dissipando parte do valor inerente à carteira existente**. Recomendação: **liquidar a
  carteira e fechar a Finco**.
  > Mecanismo transportável: quando o **valor de liquidação dos ativos excede o valor do negócio em
  > continuidade**, a nova originação está destruindo valor. Teste útil em ativos brasileiros
  > intensivos em ativos (imóveis, frota, terra, carteira de crédito) — e frequentemente é o que
  > define o piso da faixa de valor.
- **Overhead corporativo (p768)** — A equipe achou que o staff corporativo da Hexa havia crescido
  com a complexidade do portfólio ao ponto de **as unidades terem sido obrigadas a contratar staff
  apenas para interagir com o staff corporativo**. Simplificando o portfólio, a Hexa poderia
  **cortar custos corporativos em 50%**.
- **Crescimento (p768)** — Do lado da receita, a Hexa tinha feito pouco para aproveitar as marcas
  fortes da Consumerco para incubar novos negócios. Análise rápida mostrou que, se conseguisse
  achar novas oportunidades de crescimento gerando **US$ 1,5 bi a US$ 3 bi em vendas**, poderia
  **aumentar o valor de mercado da Consumerco em US$ 2,4 bi ou mais**.
- **Resultado total (Exhibit 28.4, p768-769)**: a reestruturação poderia **aumentar o valor da Hexa
  em 48% sem as iniciativas extras de crescimento, e em até 78% com iniciativas de crescimento
  bem-sucedidas** (embora estas pudessem ser difíceis de realizar).

**Síntese do capítulo (p769)** — Para construir um portfólio de negócios criadores de valor, os
gestores devem colocar **a questão da melhor propriedade em primeiro plano** em qualquer análise da
linha de negócios atual. **Se outra empresa seria uma melhor dona de um negócio, então esse negócio
é candidato a desinvestimento. Inversamente, se você identifica negócios dos quais sua empresa
poderia criar mais valor que seus donos atuais, esses negócios são alvos apropriados de aquisição.**
O dono que se qualifica como melhor pode mudar ao longo do ciclo de vida do negócio e pode variar
com a geografia.

**Onde encaixa** — Os quatro cenários de valor: `projecao-e-cenarios` e `triangulacao-e-faixa`
(**ADICIONAR-ALTA**). O checklist de avaliação de unidade: `convencoes-de-projeto` (diagnóstico
inicial de escopo) e `estudo-setorial` — **ADICIONAR-MÉDIA**, é essencialmente uma versão
condensada do que o valuation já faz, mas o item "por que a controladora é melhor dona?" é novo e
valioso. O critério "não vender no meio de uma transformação incompleta": `go-to-market` e
`convencoes-de-projeto` — **ADICIONAR-ALTA**. O teste de valor de liquidação > valor em
continuidade: `triangulacao-e-faixa` — **ADICIONAR-MÉDIA**. A narrativa Hexa em si:
**ADICIONAR-MÉDIA** como material de pitch (padrão "o negócio bom subsidia o ruim").
**Página: p762-769.**

### 28.8 Síntese de aditividade do Cap 28

| Conceito | Destino | Veredito |
|---|---|---|
| Princípio do best owner; valor é por dono; Pillsbury +70% de lucro operacional | `segmentacao-de-compradores`, `negociacao-e-loi` | ADICIONAR-ALTA |
| Dupla condição do deal atrativo (valor p/ comprador > preço; preço > valor de continuar do vendedor) → preço de reserva e ZOPA | `negociacao-e-loi` | ADICIONAR-ALTA |
| As cinco fontes de best ownership (vínculos únicos, competências, governança, insight, acesso a stakeholders) | `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Vínculo único = custo incremental menor = pode pagar mais (caso da mina/ferrovia) | `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Danaher +700 bps de margem; PE: 2/3 do valor vem de governança, não de alavancagem | `negociacao-e-loi`, `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Acesso a capital/talento/governo como fonte de best ownership em mercado EMERGENTE | `segmentacao-de-compradores`, `information-memorandum` | ADICIONAR-ALTA |
| Ciclo de vida do best owner (fundador → VC → IPO → estratégico → PE → especialista) | skill nova `tese-de-venda-e-best-owner` / `information-memorandum` | ADICIONAR-ALTA |
| Controlador familiar sul-americano e preocupação com legado como característica estrutural | `convencoes-de-projeto`, `go-to-market` | ADICIONAR-MÉDIA |
| Portfólio ativo > passivo (200 empresas, 10 anos); General Dynamics 58% a.a. | `information-memorandum`, tese de venda | ADICIONAR-ALTA |
| Mercado reage POSITIVAMENTE a desinvestimentos; spin-offs +1/3 de margem em 3 anos | `information-memorandum`, tese de venda | ADICIONAR-ALTA |
| Tela de best owner ≠ tela tradicional: buscar empresa financeiramente FRACA com potencial | `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Critérios objetivos de long list: clientes comuns + oportunidade tangível de custo (não adjacência de setor) | `segmentacao-de-compradores` | ADICIONAR-ALTA |
| Teste de divergência de fatores-chave de sucesso (químico/farma) para escopo de carve-out | `estudo-setorial`, `convencoes-de-projeto` | ADICIONAR-MÉDIA |
| Os quatro cenários de valor por unidade (momentum / com melhorias / p/ dono alternativo / com crescimento) | `projecao-e-cenarios`, `triangulacao-e-faixa` | ADICIONAR-ALTA |
| "Não vender no meio de uma transformação incompleta" (Woodco: +33% em 12-18 meses) | `go-to-market`, `convencoes-de-projeto` | ADICIONAR-ALTA |
| Valor de liquidação > valor em continuidade (Finco) como teste de piso | `triangulacao-e-faixa` | ADICIONAR-MÉDIA |
| Distribuição de TSR de conglomerado: topo decapitado (nenhum >20% vs. focadas >30%) | `information-memorandum`, tese de venda | ADICIONAR-MÉDIA |
| Refutação de "suavizar fluxo de caixa"; investidor diversifica mais barato | tese de venda | ADICIONAR-MÉDIA |
| Ressalva: em mercado emergente, diversificadas SUPERAM as focadas | `segmentacao-de-compradores` (não descartar conglomerado) | ADICIONAR-MÉDIA |
| Checklist de avaliação de unidade de negócio | `convencoes-de-projeto` | ADICIONAR-MÉDIA |
| Cavalo vs. jóquei (vantagem competitiva > time de gestão) | `diagnostico-de-roic`, `estudo-setorial` | ADICIONAR-MÉDIA |
| As três práticas de conglomerados de alto desempenho (alocação central de capital, centro enxuto) | — | IRRELEVANTE-MIDMARKET |
| Conglomerados em emergentes como tópico de gestão corporativa | — | IRRELEVANTE-MIDMARKET |

---
