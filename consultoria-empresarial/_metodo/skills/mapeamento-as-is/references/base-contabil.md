# Base contábil: encerramento, plano de contas e demonstrativo reconstruído

Referência de `mapeamento-as-is`. Carrega ao extrair balancete, ao tratar o mês de encerramento do
exercício, ou ao montar a estrutura do demonstrativo.

## 1. O mês de encerramento do exercício

É a armadilha mais cara da etapa, e ela é matemática, não acidental.

No mês de encerramento o sistema contábil lança a zeragem das contas de resultado. Para uma conta de
despesa, esse lançamento é um crédito de valor igual ao saldo acumulado do ano. O efeito no balancete
daquele mês:

```
Crédito_encerramento = Saldo Anterior + Débito_real     (sempre, por construção)
Saldo Atual = 0
```

### 1.1 A regra do "lado limpo" não funciona

A primeira hipótese de qualquer equipe é: para despesa, usar o débito bruto, que seria o lado não
contaminado; para receita, o crédito bruto.

**A regra é incompleta e produz distorção material.** Ao extrair o registro analítico do mesmo mês,
comprova-se que em várias contas o lado supostamente limpo **também** carrega componente de
fechamento e reclassificação. Ordens de grandeza verificadas em engajamento real, sem identificar as
contas: custo de mercadoria vendida superestimado em 136%; material de consumo em 475%; uma conta de
reembolso que era 100% artefato e tinha valor real zero; uma conta de comissões com o **sinal
invertido**. Contas de **receita** também aparecem contaminadas.

### 1.2 A regra adotada

> **No mês de encerramento, a única fonte válida é o registro analítico lançamento a lançamento.** O
> analítico não contém o lançamento de encerramento, portanto seus débitos e créditos são limpos por
> construção.

Estrutura típica do registro analítico: uma seção por conta-folha (não há conta agregada), os
lançamentos individuais, e uma linha final de totais. Os valores da linha de totais costumam não
estar nas colunas que a intuição sugere: mapeie pelo rótulo, confira num par de contas cuja soma você
consegue reproduzir, e só então processe o arquivo inteiro.

**Liste nominalmente as contas confirmadas sem contaminação** (aquelas em que débito bruto é igual ao
analítico). Essa lista é o que permite trabalhar sem abrir exceção conta a conta no resto do projeto.

### 1.3 Quando o analítico não abre todas as contas

Procedimento: usar os valores exatos das contas que o analítico abre, e **ratear o resíduo pela
mediana da razão crédito sobre débito dos meses anteriores de cada grupo**, reescalando para fechar
no total exato da conta de encerramento. Mediana e não média, para neutralizar o efeito de um mês
atípico.

> **Consequência a declarar sempre:** o **resultado do mês é exato**; **apenas a abertura por linha é
> estimada**. Escreva isso no slide, não na nota de rodapé.

### 1.4 O efeito contraintuitivo nas referências internas

Corrigir um dado para baixo pode **aumentar** a perda quantificada. Se o mês corrigido é um dos que
formam a referência interna, uma referência mais baixa aumenta o excedente de todos os outros meses.
Num engajamento, a referência de custo de pessoal por unidade caiu cerca de 16% e o item
correspondente de perda subiu 26,7%. Isso é esperado e não é erro: declare a mecânica antes que o
cliente pergunte.

### 1.5 O efeito no diagnóstico não é cosmético

Conclusões que mudaram de lado depois da correção, em engajamento real: um custo de mercadoria que
estourava a referência de mercado passou a ficar abaixo dela; o custo operacional total do mês caiu
cerca de 38%, e com ele os indicadores por unidade; e uma "variação não usual" que sustentava um
slide inteiro revelou-se 100% artefato contábil, e o slide foi excluído.

Documente tudo numa aba própria da planilha-mestre, linha a linha, com o comparativo entre a fonte
bruta e o analítico e o efeito no resultado. É a aba que responde à pergunta mais difícil que o
cliente vai fazer.

## 2. Plano de contas e classificação

Monte uma tabela única, válida para todas as entidades, com quatro colunas: código da conta,
descrição, se entra no resultado operacional, e a classificação fixo contra variável para o ponto de
equilíbrio.

Decisões que precisam estar explícitas nessa tabela:

- **Receitas não operacionais ficam fora do resultado operacional.** A conta de receitas diversas
  costuma carregar receita financeira, e ela não é operacional.
- **Comissão sobre venda é variável**, e é a que mais se esquece. Um rótulo de agrupamento que dizia
  "marketing, terceiros, manutenção e administrativas" omitia comissões, e a omissão causava dupla
  contagem no ponto de equilíbrio mensal. Confirme o agrupamento por casamento exato contra o
  balancete, conta a conta.
- **Depreciação e amortização é fixa, e sai do resultado operacional antes dos juros.** Cuidado com
  a entidade em que a depreciação só passa a ser lançada no meio da série: a série fica incomparável
  entre períodos, e isso precisa ser declarado.
- **Contas estatísticas** (as que existem só para contagem, fora do razão de resultado) ficam fora do
  resultado, mas são úteis como denominador. Marque-as.
- **Dívida entre partes ligadas** fica fora do resultado e entra na leitura patrimonial.

## 3. Estrutura do demonstrativo reconstruído

```
  Receita Líquida
− Custo das mercadorias e serviços vendidos
− Transferências internas (conta credora, sinal invertido)
− Pessoal
− Despesas gerais, comerciais e administrativas
  (marketing + comissões + terceiros + manutenção + administrativas − D&A)
= EBITDA
− Depreciação e amortização
= EBIT
− Despesas financeiras (a conta inteira, bruta)
+ Receitas não operacionais
= Resultado
```

Duas correções de rótulo que a casa já teve de fazer e que valem como padrão:

- **"Resultado financeiro" que nunca foi um resultado.** A linha assim rotulada era a conta de
  despesa financeira inteira, ou seja, despesa bruta. As receitas financeiras existiam, escondidas
  dentro de receitas diversas. O rótulo correto é "Despesas financeiras (total, conta X)". Se você
  quiser o resultado financeiro líquido de verdade, calcule-o em aba própria, subconta a subconta.
- **Agrupamento cujo rótulo não lista todos os componentes.** Se o rótulo diz quatro itens e o
  agrupamento soma cinco, alguém vai contar o quinto duas vezes. O rótulo lista tudo, ou lista nada e
  aponta para a tabela do plano de contas.

## 4. Ponto de equilíbrio

Quando o diagnóstico incluir análise custo-volume-lucro:

- **Separe fixo de variável pela tabela do plano de contas**, não por julgamento caso a caso.
- **O mix de produto é indispensável.** Margem de contribuição média ponderada sobre um mix que você
  não mediu produz um ponto de equilíbrio que não existe.
- **Registre o método descartado e o motivo.** Se um primeiro método foi abandonado (por exemplo,
  custo fixo dividido por capacidade e por dias, que não é análise custo-volume-lucro), escreva-o na
  seção de decisões revistas, para que ele não volte na revisão seguinte.
- **A identidade fecha contra a âncora contábil.** Receita de equilíbrio, margem de contribuição e
  custo fixo têm de reproduzir o resultado do exercício. É a mesma checagem da seção 2 da skill.
- **Homogeneíze os denominadores antes de concluir.** Num engajamento, a tese de que uma unidade
  estava "quase no equilíbrio" era falsa: comparava a utilização medida sobre o estoque
  comercializável com um ponto de equilíbrio calculado sobre a capacidade física. Homogeneizado, o
  gap dobrou.
