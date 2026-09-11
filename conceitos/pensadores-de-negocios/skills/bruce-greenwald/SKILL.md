---
name: greenwald
description: Testar se existe barreira de entrada real — a única força capaz de produzir retorno persistente acima do custo de capital — e traduzi-la em valor por reposição de ativos, EPV e crescimento. Acionar ao definir moat e barreira de entrada, ao explicar rentabilidade acima da média do setor, ao avaliar dominância local ou de nicho, ou ao decidir se crescimento merece valor.
user-invocable: false
---

# Bruce Greenwald — existe barreira de entrada, ou não existe estratégia

## O que esta lente enxerga

A pergunta central de Greenwald é a mais estreita e a mais decisiva de toda a literatura de estratégia: **novos entrantes conseguem replicar o que esta empresa faz, na região onde ela faz, com o mesmo custo?** Se conseguem, não há estratégia — há operação, e o retorno vai convergir para o custo de capital, independentemente de quão bem gerida a empresa seja.

A unidade de análise é a **BARREIRA DE ENTRADA**, e nada mais. Greenwald lê Porter e conclui que das cinco forças apenas uma é estratégica; as outras quatro são táticas ou consequências. Rivalidade intensa, poder de cliente e poder de fornecedor descrevem como o lucro é dividido *dado* que ele existe; só a barreira de entrada determina *se* ele existe de forma persistente. Substitutos, para ele, são apenas concorrência com outro nome.

O segundo movimento — e o mais valioso em mid-market — é a **dominância local**. Vantagem competitiva é, na origem, um fenômeno geográfico ou de nicho. Escala é sempre **relativa**: 20% de um mercado local defensável vale mais que 2% de um mercado nacional. Empresas destroem valor persistentemente quando trocam dominância local por presença nacional diluída.

O terceiro movimento é a ponte com valuation. Greenwald não deixa a estratégia como narrativa: transforma barreira em número por meio de três camadas — reposição de ativos, EPV e crescimento — e sustenta que **valor de crescimento só existe dentro da barreira**. Fora dela, crescer consome capital a retorno igual ao custo de capital e vale zero. É a formulação estratégica do mesmo teorema que `koller` deriva pela aritmética do ROIC.

## Os frameworks

### 1. As três (e só três) fontes genuínas de barreira

| Fonte | Mecanismo | Evidência a buscar | Como morre |
|---|---|---|---|
| **Vantagem de oferta / custo** | Custo unitário estruturalmente menor por acesso privilegiado a recurso, tecnologia proprietária protegida, ativo insubstituível, localização, licença | Diferencial de custo unitário sustentado ≥ alguns pontos; contrato de longo prazo; licença que não se replica | Patente expira; tecnologia difunde; recurso deixa de ser escasso |
| **Vantagem de demanda / cativação de cliente** | O cliente não troca: hábito, custo de troca (financeiro, de processo, de risco), custo de busca | Churn baixo e estável; renovação alta; participação de carteira crescente sem preço; cliente permanece após piora relativa | Digitalização reduz busca; padronização reduz custo de troca; regulação obriga portabilidade |
| **Economias de escala (com cativação)** | Custo fixo diluído em base maior no mercado relevante — o entrante precisa da mesma escala para o mesmo custo, e não a consegue porque a demanda está cativa | Alto custo fixo (rede, densidade logística, P&D, marca regional, plantão técnico) + share dominante no mercado *relevante* + clientes cativos | Mercado cresce e acomoda um segundo player em escala; custo fixo deixa de ser relevante no custo total |

**A insistência central de Greenwald:** escala **sozinha não é barreira**. Sem cativação de cliente, o entrante ataca clientes livres, alcança escala e a vantagem evapora. Escala + cativação é a barreira mais durável que existe; escala pura é uma vantagem de curtíssimo prazo. E escala se mede **no mercado relevante** — regional, de nicho, de linha de produto — nunca no agregado nacional.

O que **não** é barreira, mesmo que apareça em todo memorando: gestão melhor, cultura forte, marca sem custo de troca, produto de qualidade superior, "relacionamento de 30 anos" não contratado, "know-how" replicável por contratação, primeiro-a-chegar sem os três mecanismos acima. Nada disso sobrevive a um entrante bem capitalizado.

### 2. O teste empírico de barreira — o que separa esta lente das outras

Barreira não se declara; se mede em duas séries históricas.

```
TESTE 1 — ESTABILIDADE DE MARKET SHARE (o teste dominante)
  Levantar share dos players no mercado relevante, por 5-10 anos.
  Ler a VARIÂNCIA, não o nível.
    Shares estáveis, líder estável, entradas raras e fracassadas
        -> barreira presente
    Shares oscilando, líder trocando, entrantes ganhando espaço
        -> NÃO há barreira, qualquer que seja o discurso
  Teste auxiliar: quantas empresas entraram nos últimos 10 anos?
                  quantas sobreviveram? quantas saíram?

TESTE 2 — RENTABILIDADE PERSISTENTE
  ROIC (pos-imposto, operacional) acima do custo de capital
  por 5-10 anos, atravessando pelo menos um ciclo.
    ROIC alto e persistente + share estável -> barreira real
    ROIC alto e share instável -> sorte, ciclo, ou contabilidade
    ROIC baixo e share estável -> mercado ruim protegido (valor limitado)

CONCLUSÃO: só quando OS DOIS testes passam a barreira existe.
Se passam, a pergunta seguinte é: QUAL das tres fontes explica?
Se nao se consegue nomear a fonte, o resultado dos testes e coincidencia.
```

Perguntas literais para o diagnóstico:
- "Quem entrou neste mercado nos últimos dez anos? O que aconteceu com eles?"
- "Se eu tivesse R$ 50 milhões e quisesse competir com vocês nesta região, o que exatamente eu não conseguiria fazer?"
- "Quanto custa, e quanto tempo leva, obter a mesma licença/autorização?"
- "Que percentual dos clientes de cinco anos atrás ainda é cliente hoje?"
- "Se seu preço subisse 10%, quantos clientes sairiam? E para onde iriam?"
- "Qual é o seu share no menor recorte geográfico em que você realmente compete?"

### 3. Dominância local

O raciocínio, em quatro passos:
1. Defina o mercado no **menor recorte defensável** — cidade, região metropolitana, raio de X km de um ativo, nicho de aplicação, segmento de cliente.
2. Meça o share **nesse** recorte. Compare com o segundo colocado: a razão líder/vice importa mais que o share absoluto (2:1 ou mais indica estrutura de dominância).
3. Identifique o mecanismo local: densidade logística (custo por rota cai com clientes por rota), ativo licenciado com raio econômico, plantão/atendimento com tempo de resposta, marca regional com custo de busca, base instalada.
4. Julgue a expansão pela pergunta: **a nova geografia herda a barreira ou começa do zero?** Adjacência que aumenta densidade sobre a mesma infraestrutura herda; salto para região onde há incumbente local dominante começa do zero — e enfrenta o mesmo mecanismo do outro lado.

Corolários duros e diretamente aplicáveis a plano de expansão de vendedor:
- Expansão para fora do raio da barreira é, por padrão, destruidora de valor até prova em contrário.
- Ser nº 1 em três cidades vale mais que ser nº 4 em quinze.
- Barreira não é transferível por aquisição a menos que o ativo adquirido tenha barreira própria local.

### 4. Valuation em três camadas

A metodologia de *Value Investing* — construída da mais confiável para a menos confiável, deliberadamente na ordem inversa da prática de mercado.

```
CAMADA 1 — VALOR DE REPOSIÇÃO DOS ATIVOS
  Quanto custaria a um entrante racional montar hoje a capacidade
  de gerar esta receita. Ativo por ativo, a custo de reposição:
    imobilizado a valor de reposição (não contábil)
    capital de giro a valor de realização
    intangíveis reproduzíveis: capitalizar o custo de reconstruir
      (base de clientes, marca regional, licenças, sistemas,
       treinamento de equipe, engenharia de processo)
  = o piso do valor em setor SEM barreira; e o valor que a
    competição forcaria em equilíbrio de longo prazo.

CAMADA 2 — EPV (EARNINGS POWER VALUE)
  EPV = Lucro operacional recorrente normalizado x (1 - t) / WACC
  Normalização, na ordem:
    1. margem EBIT media do ciclo (5-10 anos), não a do último ano
    2. remover não-recorrentes, pró-labore acima/abaixo de mercado,
       despesas de sócio, aluguel a partes relacionadas a preço fora
       de mercado, e o efeito de posição de ciclo
    3. ajustar depreciação para o CAPEX de MANUTENCAO real
       (capacidade constante), não para o CAPEX contábil
    4. assumir crescimento zero — deliberadamente
  Interpretação, o passo que faz a metodologia funcionar:
    EPV ~ Reposicao  -> setor competitivo, sem barreira (o normal)
    EPV >  Reposicao  -> barreira. O premio E o valor da barreira,
                         e SO se sustenta se os dois testes passaram
    EPV <  Reposicao  -> destruicao de valor: gestao ruim, setor em
                         excesso de capacidade, ou ativo obsoleto.
                         Valor esta na liquidacao ou na mudanca.

CAMADA 3 — VALOR DE CRESCIMENTO
  Crescer exige capital. O valor criado por unidade de capital
  investido depende do retorno marginal:
    SEM barreira  -> retorno marginal = WACC -> crescimento vale ZERO
                     (cresce receita, EBITDA, e nao cria valor)
    COM barreira  -> retorno marginal > WACC -> crescimento vale muito,
                     mas SOMENTE dentro do perimetro da barreira
  Logo: nunca pagar por crescimento fora da barreira. Esta é a regra
  que mais frequentemente separa preço defensável de preço narrativo.
```

Critério de julgamento final: o valor defensável de um alvo é `Reposição` quando nenhum dos dois testes passa; é `EPV` quando há barreira mas o crescimento está fora dela ou não é comprovável; e é `EPV + valor de crescimento` só quando barreira e crescimento coincidem no mesmo perímetro.

## Como aplicar

Roteiro para definir moat e sustentar múltiplo em mandato sell-side mid-market:

1. **Recorte o mercado relevante no menor perímetro defensável.** Este é o passo em que 80% das análises erram. Se o alvo opera resíduos com um aterro licenciado, o mercado é o raio econômico de transporte até aquele aterro — não "resíduos no Brasil".
2. **Rode o Teste 1 (share)**: liste entradas e saídas de dez anos e a evolução de share dos três maiores. Se não houver dado formal, reconstrua por licenças emitidas, frota, capacidade instalada, editais ganhos, ou entrevista com gestão e com clientes.
3. **Rode o Teste 2 (rentabilidade)**: ROIC normalizado por 5–10 anos — pedir a `koller` a definição de NOPLAT e capital investido, não usar margem EBITDA.
4. **Nomeie a fonte.** Escreva uma frase única: "A barreira é [oferta/demanda/escala+cativação], operando por [mecanismo concreto], no perímetro [geografia/nicho]." Se a frase não sair sem adjetivos vagos, não há barreira — e o equity story precisa ser reescrito em torno de outra coisa (ex.: consolidação, arbitragem de múltiplo, plataforma para o comprador).
5. **Delimite o perímetro da barreira no mapa.** Onde ela vale, onde não vale.
6. **Monte as três camadas de valor** e compare com o valuation em construção. Divergência grande entre EPV e DCF revela que o DCF está carregando crescimento fora da barreira — corrija o DCF, não a lente.
7. **Teste o plano de crescimento do vendedor contra o perímetro.** Cada projeto de expansão recebe um veredito: herda a barreira / começa do zero / ataca incumbente local. Para o que começa do zero, passe para `mcgrath` (discovery-driven planning) antes de atribuir qualquer valor.

**Dados a pedir ao usuário antes de aplicar:**
- Receita por região/unidade/nicho e, se possível, share estimado em cada recorte.
- Lista de concorrentes por recorte, com porte e tempo de mercado.
- Histórico de entrantes e de saídas nos últimos 10 anos.
- Taxa de retenção de clientes, receita por cohort, prazo médio de contrato, taxa de renovação.
- Estrutura de custo com fixo vs. variável e a métrica de densidade do negócio (clientes por rota, km por tonelada, ocupação, utilização de ativo).
- Licenças/autorizações: quais, validade, dificuldade e prazo de obtenção, quantas existem na região.
- Série de 5–10 anos de EBIT, capital investido, CAPEX total vs. CAPEX de manutenção.
- Valor de reposição de imobilizado e do intangível reproduzível.

## O que esta lente NÃO vê

- **É deliberadamente cega ao interior da empresa.** Gestão, cultura, talento e execução são tratados como replicáveis, logo irrelevantes. Isso é falso em serviços profissionais, engenharia complexa e saúde, onde equipe e reputação técnica produzem retorno persistente sem se encaixar nas três fontes. `prahalad`, `collins` e `ram-charan` cobrem esse vazio.
- **É estruturalmente conservadora.** A lente aplicada com rigor conclui, na maioria dos casos, "não há barreira, vale a reposição de ativos". Em um mandato sell-side isso pode subestimar sistematicamente ativos cuja tese é consolidação, sinergia com o comprador estratégico, ou opção real de plataforma — valor que é real na negociação e invisível aqui.
- **Não vê ativos novos.** EPV exige série histórica normalizável. Para empresa jovem, em rampa, ou pós-transformação, o EPV é próximo de inútil — não há ciclo para normalizar.
- **Não vê modelo de plataforma.** Efeito de rede é a fonte de barreira mais poderosa do século XXI e não aparece nomeada nas três fontes (é lida, com esforço, como escala + cativação, o que subestima sua dinâmica de tipping). Use `choudary`.
- **Trata barreira como estado, não como processo.** Não diz nada sobre como *construir* uma barreira que não existe, nem sobre a velocidade com que uma barreira existente se corrói. Barreiras regulatórias mudam por canetada; densidade logística se dissolve com um entrante que compra três concorrentes. `mcgrath` e `christensen` explicam a erosão.
- **Estabilidade de share pode enganar.** Share estável também ocorre em setor moribundo onde ninguém quer entrar, em cartel informal, e em mercado protegido por reserva regulatória prestes a ser aberto. Nos três casos a barreira "presente" é ilusão de valor.
- **A normalização é manipulável.** Escolher a janela do ciclo, o CAPEX de manutenção e o pró-labore de mercado dá ao analista latitude suficiente para chegar a quase qualquer EPV. O rigor da lente depende de disciplina fora dela.
- **Onde leva à conclusão errada, concretamente:** (a) recusar um alvo excelente porque a barreira é reputacional/humana e não cabe nas três caixas; (b) fixar preço em EPV quando o comprador estratégico paga por sinergia e posição, deixando valor na mesa em sell-side; (c) declarar barreira por share estável em mercado que ninguém quis atacar; (d) zerar o valor de um plano de crescimento adjacente que, de fato, aumenta a densidade e portanto reforça a barreira.

## Onde colide ou complementa

| Outra lente | Em que ponto discordam ou se somam | Quando preferir cada uma |
|---|---|---|
| `porter` | Colisão de origem: Greenwald reduz as cinco forças a uma e chama as outras quatro de tática. Porter responderia que rivalidade e poder de compra determinam a rentabilidade média mesmo sem entrantes. | `porter` para descrever o campo e o contexto setorial; `greenwald` para decidir se há moat e quanto ele vale. Em tese de investimento, esta lente decide. |
| `koller` | Complemento quase perfeito, por caminhos opostos: Greenwald chega ao "crescimento sem barreira vale zero" pela estratégia; Koller pela aritmética ROIC−WACC. EPV é primo do valor sem crescimento de Koller. | `greenwald` para o julgamento estratégico e o piso de reposição; `koller` para o rigor de NOPLAT, capital investido e valor terminal. Use as duas em qualquer valuation de M&A; a barreira é a premissa que sustenta o ROIC projetado. |
| `prahalad` | Discordância profunda sobre a natureza da vantagem: competência central é interna, cumulativa e replicável por contratação segundo Greenwald — logo não é barreira. Prahalad diria que é justamente o que explica o retorno. | `greenwald` em negócio de ativo, densidade e licença; `prahalad` em negócio de conhecimento, engenharia e serviço técnico. |
| `mcgrath` | Colisão frontal: Greenwald busca vantagem duradoura e a mede em estabilidade; McGrath afirma que durabilidade é a exceção e que estabilidade passada não prediz futuro. | `greenwald` em setor de infraestrutura, licença e ativo físico; `mcgrath` quando o setor está em inflexão ou o valor depende de um plano futuro. Para plano de expansão: `greenwald` define o perímetro, `mcgrath` testa as premissas fora dele. |
| `christensen` | Somam-se com aviso: disrupção é exatamente o mecanismo pelo qual uma barreira aparentemente sólida é contornada por baixo, sem ser atacada de frente. | `greenwald` para medir a barreira hoje; `christensen` para perguntar se o entrante virá por um vetor que a barreira não cobre. |
| `choudary` | Lacuna: efeito de rede não está nomeado nas três fontes e sua dinâmica (tipping, winner-take-most) não cabe no teste de estabilidade de share. | `choudary` sempre que houver dois lados; `greenwald` em cadeia linear. |
| `kotler` | Complemento operacional: cativação de cliente é medida e construída com o instrumental de Kotler (segmentação, retenção, LTV, custo de troca percebido). | `greenwald` para julgar se a cativação é barreira; `kotler` para construí-la e medi-la. |
| `jack-welch` | Ressonância: "nº 1 ou nº 2, ou saia" é dominância local com outro nome — e a mesma disciplina de perímetro. | `jack-welch` para a decisão de portfólio; `greenwald` para definir em qual mercado se conta o "nº 1". |

Ponte externa obrigatória: sempre que esta lente produzir EPV, valor de reposição ou julgamento sobre valor de crescimento, o número deve ser construído com o instrumental do plugin de valuation (NOPLAT, capital investido, WACC, normalização de EBITDA) e não com aproximações de guardanapo.

## Fontes

- Bruce Greenwald, Judd Kahn, Paul Sonkin, Michael van Biema — *Value Investing: From Graham to Buffett and Beyond* (2001; 2ª ed. 2020) — as três camadas de valor, reposição de ativos, EPV, valor de crescimento.
- Bruce Greenwald & Judd Kahn — *Competition Demystified: A Radically Simplified Approach to Business Strategy* (2005) — a tese de que só a barreira de entrada importa, as três fontes, escala com cativação, dominância local, o teste de estabilidade de share.
- Base intelectual da barreira de entrada: Joe Bain (1956) e a tradição de organização industrial anterior a Porter — a redução de Greenwald é, em parte, um retorno a Bain.
- A insistência de que "escala só vale combinada com cativação de cliente" é central em *Competition Demystified*; a formulação como regra de decisão em análise de alvo é **aplicação nossa** ao contexto de mid-market brasileiro.
- A equivalência entre "crescimento vale zero sem barreira" (Greenwald) e a fórmula de key value driver de `koller` é **leitura nossa**, não uma ponte que os autores fazem explicitamente.
- A aplicação de dominância local a densidade logística e a raio econômico de ativo licenciado é **extensão nossa** do conceito ao contexto setorial brasileiro, não exemplo do autor.
