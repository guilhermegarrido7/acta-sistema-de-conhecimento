---
name: teste-de-controle-e-amostragem
description: Execute o teste de efetividade de um controle, do roteiro à conclusão, com amostra dimensionada e exceção tratada. Acionar ao escolher entre indagação, observação, inspeção e reperformance, ao definir população e critério de seleção, ao dimensionar amostra de controle manual ou automatizado, ou ao tratar exceção encontrada.
---

# Teste de controle e amostragem

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas.

De `programa-de-testes` vale integralmente, e **não é repetido aqui**: a taxonomia fechada dos cinco
tipos de teste, a régua genérica de amostragem por frequência × risco, o vocabulário fechado de
conclusão e a regra de um teste, uma conclusão. De `papel-de-trabalho` vale a estrutura do WP, a
capa, o vocabulário do campo Resultado e a proibição de célula mesclada. Esta skill traz **apenas o
que é específico de testar um controle**: as técnicas e sua força probatória, o roteiro, o
dimensionamento próprio de controle e o tratamento de exceção.

De `desenho-vs-efetividade` vale a precondição: **só chega aqui controle cujo desenho foi avaliado**
e não é `Não Implementado`.

## 1. As quatro técnicas, e a hierarquia entre elas

As técnicas não são tipos de teste (isso é `programa-de-testes` §4) — são **meios de obter
evidência**, e têm força probatória desigual. A ordem abaixo é crescente:

| Técnica | O que é | O que prova | O que não prova |
|---|---|---|---|
| **Indagação** | perguntar a quem executa como o controle funciona | que existe entendimento declarado do processo | absolutamente nada sobre execução |
| **Observação** | ver o controle sendo executado | que o controle é executável e que foi executado naquele instante | que foi executado quando ninguém olhava |
| **Inspeção documental** | examinar o rastro que a execução deixou | que houve execução, com data, autor e conteúdo | que o executor de fato analisou, se o rastro for só assinatura |
| **Reperformance** | o auditor refaz o controle e compara com o resultado do executor | que o controle produz o resultado certo, e não apenas que foi marcado como feito | nada além do item reperformado |

Três regras que decorrem da hierarquia:

- **Indagação sozinha nunca conclui.** É a regra mais desrespeitada do campo. Entrevista é insumo de
  entendimento; conclusão de efetividade apoiada só em entrevista é opinião do entrevistado
  registrada em papel timbrado da auditoria. Toda indagação precisa ser **corroborada** por ao menos
  uma técnica de força superior. Em ambiente SOX isso é explícito na **PCAOB AS 2201**; fora dele
  continua sendo a diferença entre trabalho de auditoria e relatório de entrevistas.
- **Observação só vale para o instante observado.** Serve para controle contínuo (segregação física,
  conferência de recebimento na doca, contagem), e mesmo aí exige amostra de momentos, não um.
- **Reperformance é o que recupera efetividade quando a presença não foi possível.** Recalcular a
  conciliação, refazer o batimento, reexecutar o critério de aprovação contra a alçada vigente:
  procure o equivalente reperformável antes de aceitar que só restou desenho.

**Controle de revisão é o caso difícil.** "O gerente revisa o relatório mensal" costuma deixar como
rastro apenas uma assinatura ou um e-mail de "ok". Assinatura prova que o documento passou pela mesa,
não que houve revisão. Para concluir sobre controle de revisão, o teste precisa alcançar a
**precisão** da revisão: que critério o revisor aplica, qual limiar dispara investigação, e o que
aconteceu nas ocasiões em que o limiar foi ultrapassado. Peça os casos em que o controle **detectou**
algo — se nunca detectou nada em doze meses, ou o processo é perfeito, ou a revisão não tem precisão
que detecte.

## 2. O roteiro de teste

Todo teste de controle se escreve antes de ser executado, com cinco elementos. Sem os cinco, outra
pessoa não reproduz, e reprodutibilidade é o critério de `papel-de-trabalho`.

**1. População.** O conjunto completo de ocorrências do controle no período, com a **fonte, a data da
extração e a quantidade exata**. Duas exigências:

- **Declare o período** com data inicial e final. Amostra de período diferente do período de
  conclusão é o erro que mais invalida teste na revisão.
- **Teste a completude da população antes de amostrar.** Se ela veio de relatório do ERP, a
  completude e a exatidão daquele relatório precisam ser testadas — é o tema de IPE em `itgc`, e a
  lacuna mais comum do mercado. Amostra perfeita de população incompleta conclui sobre nada.

**2. Critério de seleção.** Como os itens saíram da população: aleatório com semente registrada,
sistemático com intervalo declarado, ou direcionado por atributo de risco. **Registre o método, e não
apenas o resultado** — seleção que não se reproduz é seleção que se suspeita. Seleção direcionada
(maiores valores, fornecedores novos, lançamentos manuais, itens em fim de período) é legítima, mas
**não é amostra estatística**: conclui sobre os itens selecionados e sobre mais nada, e isso precisa
estar escrito.

**3. O que se inspeciona em cada item.** Os atributos do RACM (`matriz-riscos-controles` §5), um por
letra, com a evidência esperada de cada. É o que transforma "conferi" em teste.

**4. O que caracteriza exceção.** Definido **antes** de olhar o primeiro item, senão o critério se
acomoda ao que se encontra. Escreva a condição de falha atributo a atributo: aprovação ausente,
aprovação posterior à execução, aprovador fora da alçada, evidência não localizada. **Evidência não
localizada é exceção**, não item neutro — controle sem rastro não se distingue de controle não
executado.

**5. A conclusão.** No vocabulário fechado, com a taxa de exceção e os atributos que falharam
nomeados.

## 3. Dimensionamento: o que é específico de teste de controle

A régua genérica frequência × risco vive em `programa-de-testes` e não se repete. O que é próprio de
controle é a **tradução da frequência em população e em tamanho**, e a bifurcação entre controle
manual e automatizado.

### Controle manual: a amostra sai da frequência

Referência de mercado, com a faixa dimensionada pelo nível de risco do controle no RACM (`Baixo` no
piso, `Alto` no teto):

| Frequência do controle | População anual aproximada | Amostra |
|---|---|---|
| `Múltiplas vezes ao dia` | acima de 250 | 25 a 60 |
| `Diária` | cerca de 250 | 20 a 40 |
| `Semanal` | cerca de 52 | 5 a 15 |
| `Mensal` | 12 | 2 a 5 |
| `Trimestral` | 4 | 2 |
| `Anual` | 1 | 1 |
| `Por ocorrência` | a população efetiva do período | pela faixa equivalente à frequência observada |

Quatro cuidados que a tabela sozinha não resolve:

- **`Por ocorrência` entra pela população real**, nunca pela periodicidade da política. Controle que
  dispara a cada desligamento tem por população o número de desligamentos do período; se foram 180,
  o dimensionamento é o de controle diário, não o de controle anual.
- **Período parcial reduz a população, não o rigor.** Teste que cobre seis meses parte da população
  de seis meses e conclui sobre seis meses. Nunca extrapole para o ano.
- **A amostra se distribui ao longo do período.** Doze itens todos de janeiro e fevereiro não
  sustentam conclusão anual, por maior que seja o número.
- **Amostra mínima é 1, e nunca é 0.** Controle anual testa-se com o único item existente. Se ele não
  existe, a conclusão é de `desenho-vs-efetividade`, razão (i).

### Controle automatizado: amostra de 1, mais teste de configuração

Controle **integralmente** automatizado — bloqueio parametrizado, cálculo do sistema, validação de
campo, regra de tolerância, impedimento de pagamento a fornecedor não cadastrado — testa-se de forma
estruturalmente diferente, e a razão é simples: **o sistema não varia.** Se a regra está
parametrizada e o ambiente é controlado, ela produz o mesmo resultado na primeira e na milésima
transação. Testar 40 itens de comportamento idêntico não acrescenta evidência, acrescenta horas.

O teste tem duas pernas, e **as duas são obrigatórias**:

1. **Amostra de 1, ou simulação sistêmica.** Um item que demonstre a regra operando. Mais forte: a
   tentativa de **violar** o bloqueio (tipo de teste `Simulação sistêmica` em `programa-de-testes`),
   porque prova que a regra impede, e não apenas que o caso testado estava em conformidade.
2. **Inspeção da configuração e da sua estabilidade no período.** A tela ou o extrato do parâmetro,
   mais a evidência de que ele não mudou durante o período — e, se mudou, a mudança correspondente no
   controle de gestão de mudanças.

> **A perna 2 não existe sem ITGC efetivo.** A amostra de 1 só se sustenta porque se presume que o
> sistema não foi alterado sem controle e que ninguém tem acesso para alterar o parâmetro à revelia.
> Essa presunção **é** o ITGC. Com ITGC ineficaz, a amostra de 1 perde a base e o controle
> automatizado precisa ser testado como manual, ou não pode ser testado — ver `itgc`.

**Controle semiautomático (IT-dependent manual)** é híbrido e exige as duas abordagens: a parte
sistêmica testa-se como automatizada, a parte humana pela frequência. O caso típico é o relatório de
exceções gerado pelo sistema e tratado por uma pessoa: testa-se a regra que gera o relatório **e** a
amostra de tratamentos. Classificar esse controle como automatizado, e concluir com amostra de 1, é
erro frequente e deixa a parte humana inteiramente sem teste.

## 4. Exceção encontrada: o que fazer antes de concluir

Encontrar exceção **não é o fim do teste**, é o início do trabalho que distingue auditoria de
contagem. A tentação é dupla e as duas pontas erram: descartar a exceção como caso isolado, ou
extrapolar a taxa linearmente para a população.

**Uma exceção em amostra pequena não se extrapola linearmente.** Uma falha em 25 itens não significa
4% de falha na população: o intervalo de confiança de uma amostra não estatística desse tamanho é
largo demais para sustentar a conta, e publicar "4% dos pagamentos" é precisão inventada — precisão
inventada é o que a doutrina do número exato proíbe. Reporte **a contagem observada**, com o tamanho
da amostra e o período, e nada além: *"identificamos 1 exceção em amostra de 25 pagamentos do
período"*.

A sequência obrigatória antes de concluir:

1. **Confirme que é exceção.** Peça a evidência faltante uma segunda vez, explicitamente, e registre
   a resposta. Boa parte das exceções de primeira passada é evidência arquivada em outro lugar.
2. **Investigue a causa.** Falha isolada de uma execução, falha de uma pessoa, falha de um período
   (férias, troca de sistema, virada de exercício) e falha estrutural do controle produzem achados e
   recomendações diferentes. Sem causa, a recomendação vira "atentar para o cumprimento", que não é
   recomendação.
3. **Delimite a extensão.** A causa identificada define onde mais procurar: se a falha é do período
   de virada de sistema, examine a janela inteira; se é de um executor, examine os itens daquele
   executor. Ampliar a amostra **aleatoriamente** depois de encontrar exceção é o pior dos dois
   mundos, porque dilui a taxa sem responder à causa.
4. **Avalie se o erro chegou às demonstrações.** Deficiência de controle e erro material são coisas
   distintas, e a distinção é de `deficiencias-e-severidade`.
5. **Conclua.** Exceção confirmada, com causa identificada e extensão delimitada, impede `Eficaz`. A
   escolha entre `Parcialmente Eficaz` e `Ineficaz` depende de o controle ter operado na maior parte
   dos casos e a falha ser atribuível a atributo específico (`Parcialmente Eficaz`), ou de a falha
   comprometer o propósito do controle (`Ineficaz`).

**Ampliação de amostra não converte `Ineficaz` em `Eficaz`.** Ampliar é procedimento para entender a
extensão, não para diluir a taxa até o resultado desejado. Quando a ampliação for feita, registre o
tamanho original, a exceção que a motivou e o tamanho final — ampliação silenciosa é o que mais
compromete a credibilidade de um papel de trabalho em revisão.

## 5. Evidência: o que fica no papel de trabalho

O critério é o de `papel-de-trabalho` e vale literal: **outra pessoa reproduz sem perguntar nada.**
Para teste de controle, isso significa oito itens, e a falta de qualquer um quebra a reprodução:

1. A descrição do controle testado e o seu código no RACM.
2. O período coberto, com data inicial e final.
3. A população: fonte, data e forma da extração, quantidade exata, e o teste de completude aplicado.
4. O critério de seleção, reproduzível, e a lista dos itens selecionados com identificador estável.
5. Os atributos testados, um por letra, e o resultado de cada atributo **por item** — a matriz
   item × atributo, não um "OK" agregado.
6. A evidência de cada item, arquivada e referenciada pelo identificador, não descrita de memória.
7. As exceções, com a causa investigada e a extensão delimitada.
8. A conclusão no vocabulário fechado, com os atributos que falharam nomeados.

**Captura de tela é evidência quando tem contexto**: usuário logado, data e hora, identificador da
transação e o filtro aplicado visíveis. Recorte de tela sem cabeçalho não prova de onde veio nem de
quando é. Extração de sistema arquiva-se no formato original, além de qualquer planilha derivada dela.

## 6. Mid-market brasileiro: o que muda

- **A população costuma não existir em forma extraível.** O controle acontece, o rastro está em
  pasta física, em caixa de e-mail ou em planilha sem versão. Construir a população passa a ser parte
  do teste, e o custo disso entra no dimensionamento das horas. Quando a população não é construível,
  a conclusão é `Ineficaz` com razão (ii).
- **Reperformance rende mais que inspeção.** Onde o rastro é pobre, refazer a conciliação, recalcular
  a folha de um mês ou rebater estoque contra razão produz evidência que a inspeção de assinaturas
  não produziria.
- **O tamanho de amostra não se negocia por conforto.** Reduzir 25 para 5 "porque a empresa é
  pequena" não é adaptação ao porte: população pequena já reduz a amostra pela própria régua. O que
  muda com o porte é a população, não o rigor.
- **Fora de SOX não há exigência de data-base, mas há exigência de período declarado.** Conclusão sem
  período é conclusão sem significado, e é o que mais se vê em diagnóstico de controles.

## O que entregar

1. O roteiro de teste por controle, com os cinco elementos do §2, escrito **antes** da execução.
2. A matriz item × atributo de cada teste, completa, sem célula em branco.
3. O dimensionamento justificado: frequência, população exata, nível de risco e amostra resultante,
   com a bifurcação manual × automatizado declarada por controle.
4. Para todo controle automatizado, as duas pernas: o item ou a simulação, e a inspeção de
   configuração com a evidência de estabilidade no período.
5. A relação de exceções, cada uma com causa investigada, extensão delimitada e a decisão de
   ampliação quando houve.
6. A conclusão por controle, no vocabulário fechado, devolvida à coluna de efetividade do RACM.

## Checklist antes de dar por concluído

- Nenhuma conclusão apoiada apenas em indagação.
- Toda população tem fonte, data de extração, quantidade exata e teste de completude registrado.
- Todo critério de seleção é reproduzível; toda seleção direcionada está declarada como não
  estatística.
- Nenhum controle automatizado concluído sem a inspeção de configuração e a evidência de estabilidade.
- Nenhum controle semiautomático concluído com amostra de 1.
- Nenhuma taxa de exceção extrapolada linearmente para a população.
- Toda ampliação de amostra registra tamanho original, motivo e tamanho final.
- Toda evidência de tela traz usuário, data, hora, identificador e filtro visíveis.
- A amostra está distribuída ao longo do período, e o período está declarado no papel de trabalho.

## Próximo passo

`deficiencias-e-severidade`, que classifica a falha encontrada e decide o que ela obriga a comunicar.
A redação do ponto é de `redacao-de-achados`, e o arquivamento da evidência segue `papel-de-trabalho`,
ambos do plugin de método. Quando o controle testado depende de sistema, `itgc` é precondição da
conclusão, não complemento dela.
