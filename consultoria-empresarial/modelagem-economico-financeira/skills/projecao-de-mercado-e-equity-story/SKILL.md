---
name: projecao-de-mercado-e-equity-story
description: Projetar mercado, market share e receita por um menu de métodos (top-down, bottom-up, convergência a peers, curva-S, regressão macro, teto regulatório) e amarrar o número a uma equity story sabatinada. Acionar ao projetar mercado ou market share, ao construir a tese de crescimento, ou ao estressar projeção otimista demais.
---

# Projeção de mercado e equity story — o número precisa de uma tese, não só de um método

## Papel desta skill

**Oráculo. Não escreve na planilha.** Direciona a escolha do método de projeção de mercado/receita,
constrói a equity story que sustenta o número, e sabatina o resultado antes de ele travar no modelo.
Quem digita é o analista.

Esta skill não substitui `projecao-e-cenarios` — ela vem **antes**. `projecao-e-cenarios` disciplina
a arquitetura da projeção (drivers, capacidade, coerência ROIC/reinvestimento) assumindo que a tese de
crescimento já existe. Esta skill constrói essa tese: de onde vem o crescimento de mercado, de onde
vem o ganho ou perda de participação, e por que essa combinação é defensável na frente de um
comprador cético.

## O princípio

> **Um número de crescimento sem mecanismo é uma opinião. Uma equity story é o mecanismo escrito.**

"O mercado vai crescer 12% ao ano" não é uma projeção — é uma torcida disfarçada de premissa. "O
mercado cresce porque [driver estrutural], a empresa ganha participação porque [vantagem
identificável e não replicável em 12 meses], e esse ganho desacelera a partir do ano X porque
[mecanismo de reversão à média]" é uma equity story: tem origem, tem mecanismo, e tem prazo. É esse
terceiro elemento — o prazo em que o mecanismo deixa de operar — que mais falta nas projeções de
mid-market, e é o que a seção de sabatina, adiante, existe para forçar.

## Métodos de projeção — um menu, não uma lista fechada

Nenhum método abaixo é obrigatório e nenhum é o "certo" por padrão. O critério de escolha é: qual
método usa o dado mais forte que este mandato realmente tem? Métodos alternativos aos listados são
bem-vindos sempre que tiverem o mesmo rigor de lastro exigido em `projecao-e-cenarios`.

| Método | Lógica | Quando usar | Risco típico |
|---|---|---|---|
| **Top-down (TAM → SAM → SOM)** | Tamanho total do mercado × fração endereçável × participação obtível | Mercado com dado de tamanho confiável (associação setorial, órgão regulador, research pago) | Confundir TAM com SAM: usar o mercado total como se fosse endereçável infla a base inteira |
| **Bottom-up (capacidade × utilização)** | Receita como função da capacidade instalada e da taxa de ocupação | Negócio com ativo físico limitante (planta, frota, licença de operação) — ver `projecao-e-cenarios`, Passo 1 | Ignorar o teto de capacidade e projetar volume que o ativo não produz |
| **Convergência a peers/benchmark setorial** | A taxa de crescimento (ou o ROIC) do alvo converge à média de comparáveis mais maduros à medida que a empresa escala | Peers internacionais ou nacionais em estágio mais maduro do mesmo modelo de negócio estão disponíveis | Escolher peers por rótulo de setor, não por economia do negócio (mesma ressalva de `triangulacao-e-faixa`) |
| **Curva-S / adoção** | Crescimento acelerado na fase de penetração, inflexão, depois desaceleração | Produto, serviço ou mercado novo ainda em criação, sem histórico longo | Assumir que a empresa está sempre na fase acelerada da curva, nunca na de maturação |
| **Regressão em driver macro** | Receita ou volume como função de um indicador externo (população, PIB regional, indicador setorial oficial) | Driver macro com série histórica longa e relação causal plausível com a demanda | Regressão espúria: correlação histórica sem mecanismo econômico que a explique |
| **Teto regulatório ou normativo** | Meta oficial de política pública, cota ou marco regulatório define o piso ou o teto do mercado endereçável | Setor com meta pública explícita (plano setorial, marco legal, cronograma de metas) | Tratar a meta oficial como certeza de cumprimento no prazo — metas públicas atrasam com frequência |
| **Análogo internacional** | Um mercado mais maduro em outro país serve de proxy do estágio futuro do mercado local | Mercado local nascente, mercado análogo maduro com dado público disponível | Ignorar diferenças estruturais (regulação, renda, geografia) que impedem a analogia direta |

Combinar dois ou três métodos e comparar as saídas é prática recomendada, não exceção — quando dois
métodos independentes convergem para a mesma faixa, a projeção fica mais defensável do que qualquer
método sozinho conseguiria sustentar.

## Construindo a equity story

A equity story tem três elementos obrigatórios, na ordem:

1. **Mecanismo de crescimento de mercado** — por que o mercado (ou o driver de demanda) cresce,
   independente da empresa. Precisa de fonte externa, não da opinião do vendedor.
2. **Mecanismo de ganho (ou perda) de participação** — o que a empresa tem que lhe permite crescer
   acima, junto, ou abaixo do mercado. Aqui a equity story se conecta diretamente ao CAP diagnosticado
   em `diagnostico-de-roic`: um ganho de share sem vantagem competitiva identificável não é
   sustentável, é sorte com prazo de validade.
3. **Prazo do mecanismo** — até quando o mecanismo 1 e o mecanismo 2 continuam operando com a
   intensidade projetada, e o que acontece depois (convergência a que patamar, ver `valor-terminal`).

Uma regra emprestada da skill `teaser` do plugin de M&A, e igualmente válida aqui: **já contratado
pesa mais que projetado.** Backlog assinado, contrato com vigência, capacidade já expandida sustentam
a equity story com peso pleno; expectativa de mercado, intenção de expansão e conversa em andamento
entram como upside declarado, nunca como base do cenário central.

### O que não é mecanismo

"Equipe comercial forte", "marca reconhecida", "bom relacionamento com cliente" — os mesmos atributos
que `diagnostico-de-roic` já rejeita como sustentação de CAP não sustentam ganho de market share
projetado pela mesma razão: se um concorrente replica em 12 meses, não é mecanismo, é vantagem
temporária que já deveria estar se dissipando no ano 1 da projeção, não no ano 5.

## Sabatina da projeção

Antes de travar o número no modelo, submeta a equity story ao mesmo processo da skill `sabatina`
(argumentar contra a versão mais forte, não a mais fraca). Adaptado a projeção de mercado/receita:

1. **Construa o caso otimista mais forte que a evidência permite** — não o caso do vendedor, o caso
   que um comprador entusiasmado construiria sozinho com os mesmos dados. Onde ele se apoia: qual
   mecanismo, qual velocidade de execução, qual ausência de resposta competitiva.
2. **Construa o caso pessimista mais forte** — o que um comprador cético, ou o próprio due diligence,
   vai apontar primeiro. Reversão à média mais rápida, resposta competitiva, execução mais lenta do
   que o histórico sugere, dependência de um mecanismo regulatório que atrasa.
3. **Responda a cada um com o dado que os desarma ou os confirma** — não descarte o caso pessimista
   por desconforto; se ele resistir à resposta, ele deveria mover o cenário base, não só o
   pessimista.
4. **Sintetize em uma trajetória central defensável** — o cenário base não é a média aritmética dos
   dois extremos; é a trajetória que sobrevive ao contra-argumento mais forte de cada lado. Registre
   explicitamente o que foi descartado do caso otimista e por quê, e o que do caso pessimista foi
   incorporado ao base.

O resultado dessa sabatina alimenta diretamente os três cenários de `projecao-e-cenarios` — o
otimista e o pessimista ali não são deslocamentos arbitrários, são os casos sabatinados aqui.

## Armadilhas comuns

- **TAM em vez de SAM/SOM.** Usar o tamanho total do mercado sem aplicar a fração endereçável infla
  o teto de crescimento de forma que nenhum comprador informado aceita sem questionar.
- **Ganho de share sem mecanismo.** Projetar aumento de participação porque "a empresa é melhor" sem
  nomear o que a torna melhor e por que isso não é replicável.
- **Dupla contagem de crescimento macro e ganho de share.** Se o mercado já cresce 10% e a empresa
  ganha 3 p.p. de share ao ano, a receita não pode crescer 13% partindo de uma base que já capturou
  os dois efeitos somados sem verificar a matemática de participação.
- **Ignorar resposta competitiva.** Nenhuma vantagem de mercado é permanente; a projeção que não
  desacelera nunca está assumindo ausência de concorrência para sempre.
- **Método único sem triangulação.** Quando existe mais de um método aplicável e apenas o mais
  favorável foi usado, isso é o primeiro ponto que a diligência do comprador vai atacar.
- **Convergência sem prazo declarado.** Dizer que "o crescimento converge à média do setor" sem
  declarar em que ano isso acontece é adiar a pergunta, não respondê-la.

## O que entregar

1. O método (ou os métodos combinados) escolhido, com o motivo da escolha e o motivo de descarte
   dos demais.
2. A equity story nos três elementos: mecanismo de mercado, mecanismo de participação, prazo de
   ambos.
3. O resultado da sabatina: caso otimista, caso pessimista, a resposta a cada um, e a síntese que
   virou o cenário base.
4. A checagem de dupla contagem entre crescimento de mercado e ganho de participação.
5. A projeção de mercado/share/receita resultante, pronta para entrar em `projecao-e-cenarios` como
   o driver de topo da árvore de receita.

## Próximo passo

`projecao-e-cenarios` — onde esta tese vira árvore de drivers, cenários formais e a verificação de
coerência com ROIC e taxa de reinvestimento. E `diagnostico-de-roic`, se a sabatina revelar que o
mecanismo de participação de mercado é, na verdade, o mesmo mecanismo que já sustenta (ou não) o CAP.
