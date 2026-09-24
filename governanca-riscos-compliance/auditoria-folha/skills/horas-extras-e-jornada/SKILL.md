---
name: horas-extras-e-jornada
description: Cruze o ponto com a folha e recalcule sobrejornada, adicional noturno, intervalo intrajornada, sobreaviso e banco de horas, isolando o padrão de hora extra habitual que descaracteriza a eventualidade. Acionar ao testar jornada, ao confrontar horas apontadas com horas pagas, ao avaliar acordo de compensação, ou ao dimensionar o reflexo da sobrejornada.
---

# Jornada, sobrejornada e o cruzamento do ponto com a folha

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 valem aqui integralmente e não são repetidas. Este plugin é de processo auditado;
o método vive no plugin de método. O universo e a estrutura da base estão em `universo-da-folha`.

Bloco **FOP.03**. Riscos `FOP.R09`, `FOP.R10` e `FOP.R11`.

Este é o bloco em que a auditoria de folha encontra a segunda base do trabalho. Todos os outros
testes se resolvem dentro da folha; este exige o registro de ponto, que é um sistema diferente,
frequentemente de outro fornecedor, e quase sempre tratado como fonte de alimentação da folha e não
como objeto de auditoria. É ali que mora o passivo de jornada.

## 1. O que se precisa antes de testar qualquer hora

Sem estes seis itens, o que se faz aqui é conferência aritmética, não auditoria de jornada:

1. **A convenção coletiva vigente**, e a anterior se o período atravessa a data-base. Ela fixa o
   percentual do adicional acima do mínimo legal, o tratamento do intervalo, as regras de banco de
   horas e, com frequência, o adicional noturno e o sobreaviso.
2. **A jornada contratada de cada pessoa ou grupo**, com o horário e a escala, e o quadro de horário
   afixado. Sem a jornada contratada não existe conceito de hora extra, porque não há referência.
3. **O acordo de compensação ou de banco de horas**, com a forma de celebração e a vigência. Acordo
   inexistente, vencido ou celebrado na forma errada derruba a compensação inteira, e o efeito é que
   **toda hora compensada vira hora extra devida**. É o achado de maior valor deste bloco.
4. **A relação de quem está dispensado de marcar ponto**, e a razão declarada de cada dispensa.
5. **A base analítica do ponto**, marcação a marcação, e não o espelho consolidado. O espelho já traz
   o total apurado pelo sistema de ponto, que é justamente o número que se quer recalcular.
6. **A parametrização do sistema de ponto**: tolerância de marcação, arredondamento, regra de
   compensação automática, tratamento de intervalo pré-assinalado. A tolerância generosa e a
   pré-assinalação do intervalo são os dois parâmetros que apagam sobrejornada antes de ela chegar
   na folha, e nenhum dos dois aparece no espelho.

Peça a **demonstração em tela da integração** entre ponto e folha, e não a declaração de que ela
existe. Onde o apontamento é digitado por alguém a partir de uma planilha, o controle é a digitação,
e é essa a conclusão.

## 2. O cruzamento ponto contra folha

`FOP.R10`. Teste de população, por pessoa e por competência, sobre todo o período. Não amostre: o
cruzamento é barato, e o que ele encontra não se encontra de outro jeito.

```
Horas apontadas no ponto (extras, faltas, atrasos, noturnas, ausência de intervalo)
  × Horas pagas ou descontadas na folha, por rubrica
```

Os resíduos dos dois lados, e o que cada um significa:

| Resíduo | O que significa |
|---|---|
| Hora extra paga acima da apontada | Pagamento sem apontamento. Pode ser acerto de competência anterior, e então tem de estar identificado; se não estiver, é pagamento sem lastro |
| Hora extra apontada e não paga | Passivo. É o resíduo que a empresa não vê, porque ninguém reclama do que não recebeu sem saber |
| Falta ou atraso apontado e não descontado | Pode ser abono, e o abono precisa de aprovação registrada. Abono generalizado sem registro é ausência de controle |
| Pessoa na folha sem nenhuma marcação no período | Ou está dispensada de marcar, e a dispensa tem de estar na relação da §1, ou não está trabalhando |
| Pessoa marcando ponto e ausente da folha | Trabalho sem registro. É o resíduo mais grave do cruzamento |

Três cortes que se rodam junto e dirigem o resto:

1. **Pessoas que deveriam marcar e não marcam**, por seção e por cargo. Compare com a relação de
   dispensados, e trate cada exceção não relacionada como achado de controle.
2. **Marcações idênticas todos os dias**, ao minuto, por longos períodos. Ponto britânico é marcação
   administrativa, não registro de jornada, e invalida o controle como evidência inteira.
3. **Marcação em lote**, várias pessoas com o mesmo carimbo de tempo de inclusão, tipicamente por um
   supervisor no fim do mês. Ajuste posterior é legítimo e precisa de trilha; ajuste em lote é
   preenchimento.

Levante, à parte, **100% dos ajustes manuais de marcação**: quem ajustou, quando, de que valor para
que valor, com que justificativa. É população pequena, de alto risco, e onde a sobrejornada
desaparece sem deixar rastro na folha.

## 3. Os recálculos

`FOP.R11`. Amostra estratificada, dirigida a quem tem maior volume e a quem tem jornada atípica, com
o recálculo feito fora do sistema, do zero, a partir da marcação bruta.

**Sobrejornada.** Recalcule a hora normal (salário sobre o divisor de jornada aplicável), aplique o
adicional devido pela convenção, que pode ser superior ao mínimo legal e pode variar entre dia útil,
descanso e feriado, e confronte com o valor pago. Verifique o limite diário de sobrejornada e o
cumprimento do descanso semanal: pessoa que trabalhou todos os dias da semana tem tratamento próprio
e costuma passar batido, porque o sistema soma horas sem olhar a sequência de dias.

**Adicional noturno.** O recálculo que mais dá diferença, por três razões que se somam. Primeiro, a
hora noturna tem duração reduzida, e o sistema que apura por hora de relógio subapura. Segundo, há
prorrogação do adicional quando a jornada iniciada à noite avança para o período diurno. Terceiro, a
jornada mista quebra a apuração ao meio, e é onde o parâmetro erra. **Isole quem tem jornada mista e
recalcule esse grupo separadamente**, porque a diferença média dele não se parece com a do grupo de
jornada integralmente noturna. Confira ainda se o adicional noturno compõe a base da hora extra
noturna, que é a omissão clássica.

**Intervalo intrajornada.** Levante, sobre a base bruta de marcações, todos os dias em que o
intervalo registrado foi inferior ao mínimo da jornada daquela pessoa, e todos em que não houve
marcação de intervalo com intervalo pré-assinalado no parâmetro. Confronte com a rubrica de
pagamento de intervalo suprimido, se ela existir. Onde a rubrica não existe no dicionário, a
conclusão é que a supressão de intervalo não é paga, e o número de ocorrências mede o passivo.

**Sobreaviso e prontidão.** Identifique quem fica à disposição fora da jornada, por escala ou por
plantão. Peça a escala e confronte com a folha. Onde houver escala e não houver rubrica de
sobreaviso, o regime está sendo praticado sem remuneração, e a escala é a evidência.

**Banco de horas.** Quatro verificações, nesta ordem, porque a primeira pode derrubar as outras três:

1. O acordo existe, está vigente e foi celebrado na forma exigida para aquele arranjo?
2. O prazo de compensação está sendo cumprido, por pessoa? Saldo positivo que ultrapassa o prazo
   converte-se em hora extra devida, com o adicional.
3. O saldo de cada pessoa é apurado e comunicado, e é zerado no desligamento com o pagamento do
   saldo positivo?
4. A proporção de compensação aplicada é a do acordo, inclusive para hora trabalhada em descanso e
   feriado, que costuma ter proporção diferente?

Monte o **saldo de banco de horas por pessoa ao longo da série**. Saldo positivo que só cresce é
banco de horas usado como forma de não pagar sobrejornada, e o gráfico dessa série é a peça de
evidência do ponto.

## 4. Hora extra habitual: o achado que só a série revela

`FOP.R09`. O risco de maior valor deste bloco, e o que os programas de folha mais deixam passar,
porque cada hora extra examinada isoladamente está correta: foi apontada, foi aprovada, foi paga com
o adicional certo.

O desvio está na **frequência**. Quando a sobrejornada deixa de ser eventual e passa a ser rotina,
ela integra a remuneração para todos os efeitos, e repercute em descanso semanal remunerado, férias
com o terço, décimo terceiro, fundo de garantia e verbas rescisórias. É esse reflexo que não é pago,
e ele é grande: incide sobre uma média que a empresa nunca calculou.

**O teste:**

1. **Monte a matriz pessoa por competência** com as horas extras de cada um, sobre todo o período.
2. **Classifique cada pessoa pela recorrência**: em quantas das competências ela teve sobrejornada, e
   qual a média mensal de horas. Quem tem sobrejornada em quase todas as competências está em regime
   habitual, qualquer que seja o volume mensal.
3. **Verifique se a média está sendo integrada** na base de férias, de décimo terceiro e da rescisão.
   Recalcule pessoa a pessoa na amostra, e confronte com o pago. A falta dessa integração é o achado.
4. **Meça o passivo**: a diferença por pessoa, multiplicada pelo número de eventos em que a média
   deveria ter entrado, ao longo de todo o período em que a habitualidade se configurou.
5. **Leia a distribuição por área.** Habitualidade concentrada numa seção não é indisciplina
   individual, é quadro subdimensionado, e o ponto se escreve sobre o dimensionamento e sobre o
   controle ausente, não sobre as pessoas.

Dois cortes complementares que valem a peça de evidência:

- **A série mensal do total de horas extras contra a série de headcount.** Hora extra crescendo com
  quadro estável ou em queda é a assinatura do subdimensionamento, e o gráfico convence mais que a
  tabela.
- **Os maiores volumes individuais.** Quem tem volume mensal muito acima do grupo merece amostra
  dirigida: aprovação de cada ocorrência, sobrejornada em fim de semana e feriado, e jornadas que
  atravessam a virada do dia, que são as que estouram o descanso entre jornadas.

## 5. Os confrontos externos ao ponto

Quando a marcação é a única evidência, a conclusão fica limitada ao que a marcação diz, e a marcação
pode ter sido feita por outro. Três confrontos independentes, todos baratos onde os dados existem:

1. **Registro de acesso às instalações** contra a marcação de ponto. Divergência sistemática aponta
   marcação feita por terceiro ou fora do local de trabalho.
2. **Registro de acesso aos sistemas** contra o ponto, para trabalho administrativo. Atividade
   registrada fora da jornada apontada é trabalho não apontado, e é evidência de sobrejornada não
   remunerada, que é a direção do passivo.
3. **Relação de quem está de férias ou afastado** contra as marcações do período. Ver
   `admissao-e-desligamento` §4.

### Planos A/B/C

- **Plano A**: base bruta de marcações de todo o período, parametrização do sistema de ponto, base
  analítica da folha, escalas, convenção vigente e acordo de compensação. Cruzamento em 100% e
  recálculo por amostra estratificada.
- **Plano B**: só o espelho consolidado do ponto, sem a marcação bruta. O recálculo de intervalo e de
  adicional noturno cai, porque ambos dependem da marcação; o cruzamento de totais permanece, e a
  conclusão se limita a diferenças entre o apurado pelo sistema de ponto e o pago pela folha.
  Declare que a apuração do próprio sistema de ponto não foi testada.
- **Plano C**: não há registro eletrônico de jornada, ou ele existe para parte do quadro. A ausência
  de controle de jornada é ela própria a conclusão, e é achado de desenho, não limitação de escopo.
  Redirecione o esforço para a análise da rubrica de hora extra na matriz por competência, para as
  reclamatórias por objeto e para a evidência externa da §5.
- **Limitação**: *"O cruzamento ponto contra folha abrange [N] pessoas e [M] competências, [X]% do
  quadro médio do período; [P] pessoas estão dispensadas de marcação e fora da conclusão de jornada;
  o recálculo de adicional noturno cobre [Q] registros, estratificados entre jornada noturna integral
  e jornada mista."*

## O que entregar

1. Cruzamento ponto contra folha em 100%, com os cinco resíduos isolados, quantificados em horas e
   em valor.
2. Os três cortes de integridade do ponto (quem não marca, marcação idêntica, marcação em lote) e
   100% dos ajustes manuais com autor, justificativa e valor alterado.
3. Recálculo de sobrejornada, adicional noturno com jornada mista isolada, intervalo intrajornada e
   sobreaviso, na amostra estratificada, com a diferença por pessoa e a extrapolação para a população.
4. A avaliação do acordo de banco de horas, o saldo por pessoa ao longo da série, e o valor do saldo
   vencido convertido em hora extra devida.
5. A matriz de recorrência de hora extra por pessoa e competência, a classificação de habitualidade,
   e o reflexo não pago recalculado com o passivo estimado.
6. A série de horas extras contra a série de headcount, por área, como peça de evidência.
7. A parametrização do sistema de ponto documentada, com tolerância, arredondamento e tratamento de
   intervalo.
8. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`admissao-e-desligamento`, onde a média de horas extras apurada aqui entra no recálculo das verbas
rescisórias. A redação do ponto e a calibração de severidade estão em `redacao-de-achados` e em
`acta-controles-internos:deficiencias-e-severidade`.
