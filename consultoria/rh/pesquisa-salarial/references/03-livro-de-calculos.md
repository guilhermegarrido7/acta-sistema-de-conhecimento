# Livro de cálculos (fonte única de verdade, template)

Toda estatística, índice e valor derivado de um projeto de pesquisa de remuneração
está definido aqui. Regra absoluta: se um número aparece em qualquer entregável,
existe um ID deste livro que o produz. Cálculo novo entra aqui antes de ser
executado, em qualquer projeto que use este plugin.

Cada ficha traz: definição, fórmula matemática, implementação em Excel (funções em
português do Brasil), implementação em DAX quando aplicável, parâmetros de decisão
e validação. A coluna `id_calculo_livro` do `B10_LOG_AUDITORIA` referencia estes IDs.

## Convenções gerais

| Convenção | Definição |
| --- | --- |
| Moeda | Real, valor mensal, duas casas decimais apenas na exibição |
| Precisão interna | Nenhum arredondamento intermediário. Arredondar somente na camada de apresentação |
| Percentuais | Uma casa decimal na exibição, valor cheio no cálculo |
| Base de jornada | 44 horas semanais, 220 horas mensais |
| FTE | 1,0. Cargos parciais são normalizados por C-08 |
| Data-base da pesquisa | Definir na Etapa 1 e registrar aqui. Sugestão: último dia do mês anterior ao início da coleta |
| Método de percentil padrão | Interpolação linear inclusiva (`QUARTIL.INC`, `PERCENTIL.INC`) |
| Base de cálculo | Somente linhas de `B6_BASE_TRATADA` com `flag_excluido = FALSO` |

Justificativa do método de percentil: a versão inclusiva é o padrão do Excel, opera
com qualquer n maior ou igual a 1 e é a mais usada em relatórios de remuneração no
Brasil. A versão exclusiva exige n maior que 3 para o primeiro e o terceiro quartis
e produz valores mais extremos em amostras pequenas, o que é justamente o cenário
deste projeto (12 empresas por recorte). Registrar a escolha na nota metodológica do
relatório, porque a diferença entre os dois métodos em amostra de 12 observações
chega a alguns pontos percentuais e é a origem mais comum de contestação de
resultado por parte do cliente.

---

## Grupo 1. Estatísticas de posição

### C-01 Mínimo e máximo

Menor e maior salário observado para o cargo no recorte, após tratamento.

```
minimo = min(x_i)      maximo = max(x_i)
```

Excel: `=MÍNIMO(faixa)` e `=MÁXIMO(faixa)`
DAX: `MINX(base, [salario])` e `MAXX(base, [salario])`

Validação: mínimo maior ou igual ao piso da convenção aplicável ao cargo. Se
inferior, verificar se o participante informou valor proporcional a jornada
reduzida sem declarar (erro frequente).

Regra de publicação: não publicar mínimo e máximo com menos de 5 observações
individuais, porque revelam o extremo de um participante identificável.

### C-02 Média aritmética simples

Média das observações, cada empresa com peso igual.

```
media = (1/n) * soma(x_i)
```

Excel: `=MÉDIA(faixa)`

Uso: comparação entre empresas do painel, quando o interesse é a prática das
instituições e não a realidade do contingente de pessoas.

### C-03 Média ponderada por número de incumbentes

```
media_ponderada = soma(x_i * h_i) / soma(h_i)
```
onde `h_i` é o número de incumbentes do cargo na empresa i.

Excel: `=SOMARPRODUTO(salarios; incumbentes)/SOMA(incumbentes)`
DAX: `DIVIDE(SUMX(base, [salario]*[n_incumbentes]), SUM(base[n_incumbentes]))`

Decisão metodológica obrigatória em todo projeto: a pesquisa reporta média simples
ou ponderada? Recomendação padrão: **reportar a média simples como padrão e a
ponderada como coluna complementar**. Razão: quando o próprio cliente contratante
participa da amostra ou tem porte muito maior que os demais participantes,
ponderar por headcount faria a estatística de mercado ser puxada por esse
participante, o que descaracteriza a referência externa. A ponderada é útil para
dimensionar impacto financeiro (C-20), não para definir referência de mercado.
Documentar as duas e explicar a diferença no relatório. Esta situação foi
observada no caso FJS (17.400 colaboradores, dominante em cargos assistenciais)
e é comum em qualquer cliente de grande porte relativo ao seu painel.

### C-04 Mediana

Valor central da distribuição ordenada. É a medida central de referência da
pesquisa, porque é robusta a valores extremos, ao contrário da média.

```
mediana = x_((n+1)/2)                se n impar
mediana = (x_(n/2) + x_(n/2+1)) / 2  se n par
```

Excel: `=MED(faixa)`
DAX: `MEDIAN(base[salario])`

### C-05 Primeiro e terceiro quartis

Q1: valor abaixo do qual estão 25% das observações. Q3: valor abaixo do qual estão
75%. Método inclusivo, interpolação linear.

```
posicao(Q1) = 1 + 0,25 * (n - 1)
posicao(Q3) = 1 + 0,75 * (n - 1)
valor = x_inferior + fracao * (x_superior - x_inferior)
```

Excel: `=QUARTIL.INC(faixa;1)` e `=QUARTIL.INC(faixa;3)`
DAX: `PERCENTILE.INC(base[salario], 0.25)` e `PERCENTILE.INC(base[salario], 0.75)`

Exemplo de auditoria (n = 12, salários ordenados de 3.000 a 8.500): posição de Q1 =
1 + 0,25 x 11 = 3,75, ou seja, o terceiro valor mais 75% da distância até o quarto.
Este exemplo deve ser reproduzido na nota metodológica para que o cliente possa
conferir manualmente.

### C-06 Percentis 10 e 90

Excel: `=PERCENTIL.INC(faixa;0,1)` e `=PERCENTIL.INC(faixa;0,9)`

Uso: apenas em cargos com n maior ou igual a 10. Abaixo disso, P10 e P90 são
praticamente o mínimo e o máximo e não agregam informação.

### C-22 Frequência do cargo

Duas contagens distintas, jamais confundidas:

```
n_empresas     = contagem distinta de cod_empresa com dado valido para o cargo
n_incumbentes  = soma de n_incumbentes das empresas com dado valido
```

Excel: `=CONT.VALORES(...)` sobre a lista de empresas distintas, ou
`=SOMARPRODUTO((intervalo<>"")/CONT.SE(intervalo;intervalo&""))` para distintos.
DAX: `DISTINCTCOUNT(base[cod_empresa])` e `SUM(base[n_incumbentes])`

Toda tabela publicada exibe `n_empresas` ao lado das estatísticas. Estatística sem
n é inauditável e, em pesquisa de remuneração, é o principal indício de baixa
qualidade metodológica.

---

## Grupo 2. Normalizações (aplicar antes de qualquer estatística)

### C-07 Atualização à data-base

Traz salários com datas de referência diferentes para uma data comum. Sem isso, a
mediana mistura folha pré e pós reajuste de convenção.

```
salario_atualizado = salario_informado * (1 + i)^(m/12)
```
onde `i` é a taxa anual de atualização e `m` o número de meses entre a data de
referência informada e a data-base da pesquisa.

Alternativa preferida quando a informação existe: aplicar o reajuste efetivo
declarado pelo participante (`ultimo_reajuste_pct`) quando a data de referência for
anterior à data-base e o reajuste tiver ocorrido no intervalo.

Parâmetro `i` a definir na Etapa 1. Critério: usar o índice de reajuste da
convenção coletiva predominante do setor saúde na Bahia; na ausência, INPC
acumulado 12 meses. Registrar a fonte, a data de extração e o valor usado.

Regra prática: se o intervalo for de até 3 meses, não atualizar e registrar a
decisão. Abaixo disso o ajuste é menor que o erro amostral e adiciona complexidade
sem ganho de precisão.

Excel: `=salario*(1+$i$1)^(meses/12)`

### C-08 Normalização de jornada e de regime de trabalho

Crítico em qualquer setor com jornadas heterogêneas dentro do mesmo escopo.
Exemplos já observados: no setor saúde, convivem 44h administrativas, 36h de
enfermagem, 30h de fisioterapia, 20h de médicos e escalas 12x36 (caso FJS); em
educação, convivem professores mensalistas e horistas remunerados por
carga-aula (caso PASB, ver C-26 para a mensalização de horista).

```
salario_hora            = salario_mensal / (jornada_semanal * 4,3333)
salario_norm_referencia = salario_hora * jornada_referencia_mensal_h
```

`jornada_referencia_mensal_h` é definida no cartão de identidade do projeto
(220 horas para jornada de 44h semanais é a referência mais comum no Brasil,
mas cada projeto declara a sua).

Decisão obrigatória: comparar valor mensal nominal ou valor normalizado por
hora? Recomendação: **reportar as duas colunas**, com o nominal como principal
(porque é o que o colaborador recebe e o que o cliente paga) e o normalizado
por hora como coluna de controle, obrigatória em todo cargo cujo regime de
jornada varie dentro do escopo. Comparar um cargo de 36h com o mesmo cargo em
44h em valor nominal é erro metodológico grave e é uma das contestações mais
previsíveis do cliente.

Regra: cargos com regime de escala (12x36, plantonista, ou equivalente do
setor) são agrupados separadamente dos administrativos, nunca no mesmo pool
estatístico. Cargos horistas seguem C-26 antes de entrar em qualquer pool.

### C-09 Remuneração fixa anual garantida

```
rem_fixa_anual = salario_mensal * (12 + n_salarios_extras)
```
Padrão brasileiro: 12 salários mais o 13º, mais um terço constitucional de férias,
resultando no fator 13,33 quando o terço é considerado. Definir se o terço entra ou
não e aplicar a mesma regra a todos, inclusive ao cliente contratante.

### C-10 Remuneração variável

```
variavel_target_R$ = salario_mensal * target_salarios
variavel_paga_R$   = salario_mensal * pago_ultimo_ciclo_salarios
taxa_realizacao    = variavel_paga_R$ / variavel_target_R$
```

Reportar sempre o pago, não o target. Target não pago não é remuneração, é
intenção. A taxa de realização é um indicador de qualidade do programa e vale como
achado no relatório.

Prevalência: `pct_empresas_com_variavel = empresas com variável para o cargo /
empresas com o cargo`. Em muitos cargos operacionais do terceiro setor a
prevalência será baixa, e reportar a média do variável apenas entre quem paga
distorce a leitura. Reportar prevalência e valor condicional, separados.

### C-11 Remuneração total em dinheiro

```
total_dinheiro_mensal = salario_base + adicionais_fixos + gratificacoes
                        + (variavel_paga_anual / 12)
```
Adicionais de insalubridade, periculosidade e noturno entram aqui, nunca no salário
base. Manter as camadas separadas é o que permite comparar o base com o mercado e,
em seguida, explicar diferenças por composição.

### C-12 Monetização de benefícios e remuneração total

```
beneficio_mensal_empresa = custo_bruto_empresa - coparticipacao_colaborador
total_rewards_mensal     = total_dinheiro_mensal + soma(beneficios_monetizados)
```

Convenções de monetização a fixar e aplicar uniformemente: plano de saúde pelo
custo per capita da empresa (titular, sem dependentes, salvo indicação contrária);
alimentação pelo valor mensal líquido do desconto; previdência pela contribuição
efetiva da empresa; seguro de vida pelo prêmio mensal, não pelo capital segurado.
Benefícios sem valor monetário direto (day off, home office, licenças) entram como
prevalência qualitativa, jamais monetizados por estimativa.

### C-13 Encargos e custo total de folha

```
fator_encargos = inss_patronal + rat_fap + terceiros + fgts + provisoes
custo_total    = rem_fixa_anual/12 * (1 + fator_encargos) + beneficios_mensais
```

Alerta obrigatório em qualquer projeto: regimes tributários especiais (no Brasil,
entidade filantrópica com CEBAS tem isenção da cota patronal do INSS; outras
jurisdições têm equivalentes) mudam o custo total sem mudar a remuneração ao
colaborador. Comparar custo total entre regimes diferentes sem segmentar produz
conclusão errada e é uma armadilha analítica clássica neste tipo de projeto.
A comparação primária da pesquisa é sempre a remuneração ao colaborador. Custo do
empregador é análise complementar, sempre segmentada por regime tributário, com
nota explícita.

---

## Grupo 3. Dispersão e tratamento de outliers

### C-14 Dispersão

```
desvio_padrao   = raiz( soma((x_i - media)^2) / (n - 1) )     (amostral)
coef_variacao   = desvio_padrao / media
IQR             = Q3 - Q1
amplitude_faixa = (maximo / minimo) - 1
midpoint        = (minimo + maximo) / 2
```

Excel: `=DESVPAD.A(faixa)` para o desvio amostral.

Leitura: coeficiente de variação acima de 0,35 no mesmo cargo e recorte indica que
o pool provavelmente agrupa cargos de conteúdo diferente. Trate como alerta de
matching, não como característica do mercado. É o teste mais eficiente para
encontrar erro de matching depois da coleta.

### C-15 Identificação e tratamento de outliers

Sequência obrigatória, na ordem:

**Passo 1, plausibilidade.** Antes de qualquer teste estatístico, verificar erro de
preenchimento: valor anual informado como mensal, valor em centavos, jornada
divergente não declarada, salário abaixo do piso legal. Erro de preenchimento é
corrigido junto ao participante, não excluído.

**Passo 2, regra de Tukey.**
```
limite_inferior = Q1 - 1,5 * IQR
limite_superior = Q3 + 1,5 * IQR
```
Observações fora dos limites são marcadas com `flag_outlier = VERDADEIRO`.

**Passo 3, decisão caso a caso.** Marcar não é excluir. Em amostras de 12
observações, a regra de Tukey pode sinalizar um dado legítimo (por exemplo, o
hospital premium que realmente paga muito acima). A exclusão só ocorre com
justificativa registrada em `motivo_exclusao`. Categorias válidas de exclusão: erro
de preenchimento não corrigível, cargo com conteúdo comprovadamente distinto,
jornada incompatível, dado de natureza jurídica não comparável.

**Passo 4, transparência.** O relatório informa quantas observações foram excluídas
e por qual motivo, em nível agregado. Pesquisa que não declara o tratamento de
outliers não é auditável.

Alternativa a considerar em cargos com n grande: em vez de excluir, usar
**winsorização** nos percentis 5 e 95, preservando o n. Registrar a escolha.

### Mínimos amostrais para publicação

| n_empresas | O que publicar |
| --- | --- |
| 0 a 4 | Nada. Marcar "amostra insuficiente" |
| 5 a 7 | Mediana e n apenas |
| 8 a 11 | Mediana, Q1, Q3, média, n |
| 12 ou mais | Conjunto completo, incluindo mínimo, máximo, P10 e P90 |

Nenhum participante isolado pode responder por mais de 25% das observações de um
dado publicado.

---

## Grupo 4. Competitividade

### C-16 Comparatio

Razão entre o salário do cliente e a referência de mercado. É o índice central do
relatório.

```
comparatio_mediana = salario_cliente / mediana_mercado
```
Também calcular contra Q1 e Q3 para posicionar o cliente na faixa.

Excel: `=salario_cliente/mediana` formatado como percentual.

Leitura: 1,00 significa alinhado à mediana. 0,85 significa 15% abaixo da mediana.

### C-17 Gap absoluto e percentual

```
gap_absoluto   = salario_cliente - mediana_mercado
gap_percentual = (salario_cliente / mediana_mercado) - 1
```

Cuidado de interpretação que precisa constar no relatório: estar 20% abaixo da
mediana não significa que 20% de aumento resolve. Significa que o custo de
equalizar à mediana é de 25% sobre o salário atual, porque a base do percentual é
diferente. Fórmula do ajuste necessário:
```
ajuste_para_mediana_pct = (mediana_mercado / salario_cliente) - 1
```
Confundir gap com ajuste necessário é o erro de leitura mais comum em relatórios de
remuneração e gera decisão de orçamento errada.

### C-18 Posição na faixa de mercado

```
posicao_na_faixa = (salario_cliente - minimo) / (maximo - minimo)
```
Resultado entre 0 e 1. Complementa o comparatio informando onde o cliente está dentro
da amplitude praticada, e não apenas em relação ao centro.

### C-19 Índice de competitividade agregado

Para família, nível funcional ou total da Fundação:
```
indice_agregado = soma(comparatio_c * headcount_c) / soma(headcount_c)
```
Ponderar por headcount é correto aqui, porque a pergunta é sobre a exposição real
da folha, não sobre prática de mercado.

### C-24 Classificação do gap

Faixas para o painel e para o mapa de calor do relatório:

| Comparatio | Classificação | Cor sugerida |
| --- | --- | --- |
| Abaixo de 0,85 | Muito abaixo do mercado | vermelho |
| 0,85 a 0,95 | Abaixo do mercado | laranja |
| 0,95 a 1,05 | Alinhado à mediana | verde |
| 1,05 a 1,15 | Acima do mercado | azul |
| Acima de 1,15 | Muito acima do mercado | azul escuro |

A banda de 10 pontos percentuais em torno de 1,00 como zona de alinhamento é
prática usual e reconhece o erro amostral inerente a painéis de 12 empresas.
Registrar a escolha na nota metodológica.

### C-20 Impacto financeiro do ajuste

```
custo_equalizacao_cargo = (mediana_mercado - salario_cliente) * headcount * 13,33
                          * (1 + fator_encargos)
```
Calcular somente para cargos com comparatio abaixo do limite definido pelo cliente.
Três cenários obrigatórios no relatório: equalizar ao Q1, à mediana e ao Q3, com o
custo anual total de cada um. Este é o número que a diretoria do cliente costuma
usar para justificar orçamento, e no caso FJS foi o principal insumo da defesa do
equilíbrio econômico-financeiro nos contratos de gestão com o poder público.

### C-21 Prevalência de benefício

```
prevalencia = empresas que oferecem o beneficio / empresas respondentes do recorte
```
Excel: `=CONT.SE(faixa;"Sim")/CONT.VALORES(faixa)`

---

## Grupo 6. Cálculos de generalização (ativar conforme o cartão de identidade)

Os três cálculos abaixo não estavam no primeiro projeto que originou este livro
(FJS, moeda única, sem horista). Foram generalizados a partir do caso PASB, que
convivia com moeda mista e com cargos horistas. Ativar cada um conforme o
cartão de identidade do projeto atual (`SKILL.md`, seção 1).

### C-25 Conversão cambial

Traz valores informados em moeda diferente da moeda de referência do projeto
para uma base comparável, antes de qualquer estatística.

```
salario_convertido = salario_moeda_origem * taxa_conversao_aplicada
```

A taxa é única para todo o projeto e fixada na data-base, nunca recalculada
por participante ou por data de preenchimento.

```
taxa_conversao_aplicada = taxa de fechamento na data-base, fonte declarada no
                           cartão de identidade
```

Parâmetros a fixar na Etapa 1 e registrar no log de auditoria: moeda de
referência, fonte da taxa (ex.: Banco Central, provedor de mercado), data de
extração. Excel: `=salario_origem * $taxa_conversao$`.

Regra prática: se o projeto não tem participante em moeda diferente da
referência, este cálculo permanece inativo e não aparece na nota
metodológica. Ativá-lo sem necessidade cria complexidade desnecessária.

### C-26 Mensalização de horista

Converte valor por hora ou por aula em equivalente mensal, para tornar
comparável com cargos mensalistas do mesmo nível.

```
salario_mensal_equivalente = valor_hora_ou_aula * carga_horaria_referencia_mensal
```

A carga horária de referência é declarada pelo cliente e documentada na nota
metodológica. No caso PASB, a referência foi 176 horas-aula mensais para
professores horistas.

Regra de segmentação: cargos horistas mensalizados entram no mesmo pool
estatístico dos mensalistas apenas se a carga de referência for razoável e
declarada. Caso contrário, tratar como subpopulação separada, seguindo a
mesma lógica de C-08 (normalização de jornada) e da regra R4 do SKILL.md.

Excel: `=valor_hora * $carga_horaria_referencia$`.

### C-27 Exclusão de cargo sem ocupante

Regra fixa, não um cálculo numérico, mas registrada aqui porque afeta
diretamente n_empresas e n_incumbentes.

```
se n_incumbentes = 0 então flag_excluido = VERDADEIRO
                        e motivo_exclusao = "cargo sem ocupante"
```

Generalizado a partir do caso PASB (cargo de especialização sem ocupante,
desconsiderado da amostra). Diferente de um outlier (C-15), este não é um
valor discrepante, é a ausência de base amostral para o cargo naquele
participante. A linha nunca entra em B7, mas fica registrada em B6 com o
motivo padronizado, preservando a rastreabilidade.

---

## Grupo 5. Validações obrigatórias antes de publicar

Executar como checklist. Falha em qualquer item bloqueia a publicação.

| # | Validação | Regra |
| --- | --- | --- |
| V1 | Ordenação estatística | `minimo <= Q1 <= mediana <= Q3 <= maximo` em 100% das linhas |
| V2 | Média versus mediana | Diferença acima de 25% indica assimetria forte, investigar antes de publicar |
| V3 | n consistente | `n_empresas` em B7 igual à contagem distinta em B6 |
| V4 | Mínimo amostral | Nenhuma linha publicada com n abaixo do limite da tabela do Grupo 3 |
| V5 | Concentração | Nenhum participante com mais de 25% das observações de um dado |
| V6 | Piso legal | Nenhum mínimo abaixo do piso da convenção ou do salário mínimo vigente |
| V7 | Jornada | Todo cargo com regime de jornada relevante ao setor com coluna normalizada preenchida |
| V8 | Data-base | Todas as observações na mesma data de referência após C-07 |
| V9 | Segmentação | Nenhum output que misture populações internas heterogêneas do cliente sem segmentar |
| V10 | Rastreabilidade | Toda exclusão em B6 com motivo textual preenchido |
| V11 | Coerência entre entregáveis | Relatório, Excel e Power BI leem a mesma versão de B7 |
| V12 | Coeficiente de variação | Cargos com CV acima de 0,35 revisados quanto ao matching |
| V13 | Conversão cambial | Nenhum valor em moeda diferente da referência sem conversão aplicada (quando C-25 estiver ativo) |
| V14 | Cargo sem ocupante | Nenhuma linha com n_incumbentes = 0 presente em B7 (deve estar excluída via C-27) |
