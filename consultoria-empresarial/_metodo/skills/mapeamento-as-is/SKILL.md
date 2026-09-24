---
name: mapeamento-as-is
description: Reconstrua a situação atual do cliente a partir da fonte bruta: base analítica a partir de balancete, definições operacionais únicas, tratamento de exceção e anomalia, e a planilha-mestre rastreável. Acionar ao montar a base de um diagnóstico, ao reconstruir demonstrativo a partir de balancete, ao padronizar definição de indicador, ou ao tratar mês inválido e dado anômalo.
---

# AS IS: a base analítica reconstruída

Carregue `diagnostico-e-entrevistas` antes: a hierarquia de fontes, a tolerância de reconciliação e o
checklist de revisão de número novo valem aqui integralmente e não são repetidos.

## Papel desta skill

Transformar o que o cliente entregou numa **base analítica única, rastreável e validada contra uma
âncora externa**. É a etapa mais longa de um diagnóstico e a que decide se o trabalho sobrevive à
primeira contestação.

> **Fronteira, declarada.** Isto **não** é mapeamento de processo. Fluxo, raia, notação, SIPOC,
> matriz de responsabilidade, workshop de crítica e manual de processos vivem em
> `acta-excelencia-operacional`. Aqui o AS IS é o **retrato econômico e operacional** da situação
> atual: quanto se ganha, quanto se gasta, com que produtividade, medido de onde. Num engajamento que
> tenha as duas frentes, as duas skills rodam em paralelo e se encontram no diagnóstico final.

## 1. A base contábil, e as três armadilhas

O balancete é a fonte mais abundante e a mais traiçoeira. Três regras antes de qualquer extração.

**Valor do mês é `Débito do mês − Crédito do mês`.** Nunca o saldo acumulado, que só coincide com o
valor do mês em janeiro. Esse ponto já gerou erro real e é a primeira checagem em qualquer extração
nova.

**Mapeie as colunas pela direita, não por índice.** Os quatro últimos campos numéricos da linha são,
nesta ordem, saldo anterior, débito, crédito e saldo atual. A posição absoluta varia entre arquivos
do mesmo cliente, e já apareceu um mês com doze colunas contra vinte e seis nos demais.

**Conta credora existe e inverte o sinal.** Conta de transferência interna reduz custo em vez de
aumentá-lo. Tratá-la como despesa igual ao débito bruto é erro clássico. Conta de transferência
interna também sai da classificação fixo contra variável do ponto de equilíbrio, porque não é custo
real.

O mês de encerramento do exercício é um caso à parte, e é o achado metodológico mais caro de um
diagnóstico: está em [references/base-contabil.md](references/base-contabil.md), junto com a
estrutura do demonstrativo reconstruído e a âncora de validação.

## 2. A âncora de validação

Todo diagnóstico econômico-financeiro precisa de **um número que você não calculou** e contra o qual
o seu demonstrativo reconstruído fecha. Tipicamente a conta de resultado do exercício, que só tem
movimento no mês de encerramento e registra o resultado do ano fechado.

> A regra: **a base reconstruída fecha ao centavo contra a âncora, em todas as entidades.** Qualquer
> metodologia proposta, inclusive a que você vai propor amanhã, precisa reproduzir esse número.

É a validação mais forte disponível, e é barata. Sem ela, você tem um demonstrativo plausível; com
ela, tem um demonstrativo defensável.

Cuidado com a âncora falsa. Num engajamento, dois totais de receita e despesa circulavam há meses
como "validados" e eram, na verdade, o débito e o crédito brutos do lançamento de encerramento. Um
número redondo que aparece em três documentos não é âncora: âncora é conta identificada, com código,
e reproduzida da fonte.

## 3. Definições operacionais únicas

A causa número um de o mesmo indicador aparecer com dois valores em slides diferentes é ter duas
definições de denominador. A correção é institucional, não pontual: **uma definição por numerador e
por denominador, escrita, datada, aplicada de forma idêntica em todas as entidades e em todos os
indicadores derivados.**

Padrão de escrita, com o vocabulário generalizado para qualquer operação de serviço com receita por
unidade de capacidade disponível:

```
Unidade-período Disponível = (Capacidade cadastral × dias do período) − Capacidade bloqueada
Unidade-período Ocupada    = Uso comercializado + Uso de curta duração
Taxa de utilização         = Ocupada ÷ Disponível
Preço médio realizado      = campo de preço médio por unidade OCUPADA da extração bruta
Receita por unidade disponível = Preço médio realizado × Taxa de utilização
Receita total por unidade disponível = Receita líquida ÷ Unidade-período Disponível
Custo por unidade ocupada  = Custo operacional total ÷ Unidade-período Ocupada
Custo por unidade disponível = Custo operacional total ÷ Unidade-período Disponível
Resultado por unidade disponível = EBITDA ÷ Unidade-período Disponível
```

Três disciplinas que acompanham as fórmulas:

- **Excluir capacidade fora de operação do denominador**, e não da capacidade cadastral. É o padrão
  dos sistemas uniformes de contas setoriais, e é o que torna a série comparável com referência
  externa.
- **Ler sempre do acumulado do período na extração bruta**, nunca do instantâneo diário.
- **Checar a identidade.** Receita por unidade disponível tem de bater com preço médio × utilização.
  Se não bate, você pegou o campo errado. Num engajamento, a extração tinha dois campos de preço
  médio com nomes quase idênticos, um por unidade total e outro por unidade ocupada; usar o errado
  distorceu materialmente a quantificação da perda, e só apareceu quando alguém testou a identidade.

**Declare a data da padronização.** Ela divide o projeto em antes e depois, e todo número anterior
precisa ser refeito ou marcado como superado.

## 4. Rótulo honesto de indicador

Quando o indicador publicado se afasta da definição canônica, o rótulo é uma decisão de comunicação
e a ressalva vai no próprio slide. Dois casos que se repetem:

- **Indicador rotulado com o nome de mercado mas calculado sobre outra base.** Se a estrutura do
  demonstrativo não segrega a linha que a definição canônica manda segregar, a aproximação é
  aceitável, mas se declara: "tecnicamente seria X, usamos Y porque a linha Z não está segregada
  nesta estrutura".
- **Nomenclatura que mudou de edição.** Métrica que o mercado historicamente chamava de um jeito e
  que o padrão vigente renomeou. Use o nome vigente no cálculo e o nome conhecido no rótulo, com nota
  explicativa. Nunca calcule duas versões e publique as duas.

E o teste que elimina definição inútil: **se a definição alternativa produz um número idêntico a
outra linha que já existe no demonstrativo, ela não acrescenta informação.** Descarte e diga por quê.

## 5. Exceções, anomalias e a célula que nunca fica vazia

Dado de cliente tem buraco. O buraco se trata por mecanismo explícito, nunca por conserto silencioso.

**Flag de invalidade.** Uma linha própria na base, `Flag: período válido para cálculo por unidade`,
com `1` ou `0`. Período com flag `0` é excluído de toda média, de toda referência interna e de toda
leitura de tendência, e aparece marcado como atípico em **todos** os gráficos. Caso real: uma
extração mensal registrou um único dia em vez do mês inteiro, vinte e três unidades-período em vez
de cerca de setecentas.

**Override documentado.** Uma segunda linha, `Override (exceções)`, com o valor substituto e a
justificativa ao lado. O valor substituto nunca sobrescreve o dado original: os dois convivem, e a
fórmula escolhe.

> **Célula vazia é proibida.** Vazio é lido como zero e corrompe média, soma e percentual em silêncio.
> Todo campo sem dado recebe o valor explícito, `0`, `n/d` ou a flag, conforme o caso.

**Anomalia que não é erro.** Nem todo valor estranho se corrige. Bloqueio de capacidade anormalmente
alto em dois meses pode ser incapacidade física (e o tratamento padrão se aplica) ou retenção
comercial (e aí o número inteiro muda de natureza). Quando a evidência não decide, aplique o padrão,
ponha nota no slide, e **abra item na lista de limitações** com a quantificação do que muda se a
hipótese alternativa se confirmar. Num engajamento, esse item valia mais de meio milhão de reais na
quantificação da perda, e a honestidade de declará-lo foi o que sustentou o restante do número.

## 6. A planilha-mestre

Um arquivo, todas as abas, todo o cálculo. Convenções mínimas:

- **Código de cores:** azul é dado de entrada e só existe na aba Base de Dados; verde é referência a
  outra aba; preto é fórmula calculada na própria aba; vermelho é alerta ou valor que a análise
  contesta; cinza itálico é metadado (unidade, fonte, nota metodológica).
- **Navegação uniforme:** em toda aba de cálculo, coluna A é o indicador, B é a unidade, C é a fonte
  ou a fórmula, D em diante são os períodos.
- **Nunca inserir linha no meio de uma aba.** Hyperlink interno guarda o destino como texto e não é
  reajustado quando linhas são inseridas. Linha nova vai sempre no fim, mesmo que fique fora de
  ordem.
- Uma aba dedicada por ajuste estrutural (o comparativo fonte bruta contra registro analítico, por
  exemplo), documentando linha a linha o efeito no resultado.

O detalhamento (as abas típicas, a aba nominal de pessoal, a manutenção da aba que mapeia o deck, a
verificação obrigatória depois de escrita programática) está em
[references/planilha-mestre.md](references/planilha-mestre.md).

## 7. O que entregar no fim do AS IS

1. Demonstrativo reconstruído, por entidade e por período, fechando contra a âncora.
2. Séries dos indicadores, com a definição única declarada ao lado de cada uma.
3. Log de exceções, com flag, override e justificativa.
4. Log de alertas de qualidade de dado, com o que cada um bloqueia.
5. A planilha-mestre com a rastreabilidade célula a célula.

Só depois disso a comparação com referência externa faz sentido. Ir para o benchmark antes de fechar
a âncora é o erro que obriga a refazer o deck inteiro.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Fluxo, raia, notação, regra de negócio, manual de processos | `acta-excelencia-operacional` |
| Reorganizar demonstrações em NOPAT e capital investido | `acta-modelagem-economico-financeira:reorganizacao-contabil` |
| Normalizar EBITDA para transação | `acta-modelagem-economico-financeira:qualidade-de-resultados` |
| Leitura de arquivo, célula mesclada, limites de biblioteca | `acta-way:ambiente-tecnico` |
| Referência de comparação e quantificação do gap | `desenho-to-be` |
