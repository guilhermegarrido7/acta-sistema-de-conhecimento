---
name: encargos-e-beneficios
description: Teste a base de incidência de contribuição previdenciária, fundo de garantia e imposto retido, e concilie vale-transporte, refeição, plano de saúde e consignado com a fatura do prestador. Acionar ao reconstruir base de incidência, ao caçar rubrica com parametrização errada, ao apurar desconto indevido de benefício, ou ao conciliar guia recolhida com a folha.
---

# Encargos, impostos e benefícios

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 valem aqui integralmente e não são repetidas. Este plugin é de processo auditado;
o método vive no plugin de método. O universo, o dicionário de rubricas e a distinção entre provento,
desconto e base estão em `universo-da-folha`, e esta skill os pressupõe.

Bloco **FOP.04**. Riscos `FOP.R01`, `FOP.R12`, `FOP.R13` e `FOP.R14`.

É o bloco de maior valor do trabalho, por uma razão aritmética: o erro aqui é um percentual pequeno
aplicado sobre a maior linha de custo da empresa, multiplicado por todas as pessoas e por todas as
competências em que a parametrização rodou, acrescido de encargo de mora. Nenhum contracheque sai
errado. O total é que está errado desde sempre.

## 1. O que decide a base, e por que ela é o objeto do teste

Três encargos incidem sobre a folha com bases distintas, e a distinção entre elas é a origem de quase
todo o achado deste bloco:

| Encargo | Natureza | O que decide a inclusão de uma verba na base |
|---|---|---|
| Contribuição previdenciária | Contribuição da pessoa, retida, e contribuição patronal, com adicionais setoriais e de risco ambiental | A verba retribui o trabalho (salarial) ou indeniza e ressarce (indenizatória). Tem parcelas expressamente excluídas por lei |
| Fundo de garantia | Depósito do empregador | Base próxima à previdenciária, com diferenças relevantes. Incide também sobre parcelas de aviso e décimo terceiro |
| Imposto retido na fonte | Retenção sobre rendimento da pessoa | Base própria, com deduções e com parcelas isentas que não coincidem com as excluídas da previdenciária |

**As três bases não coincidem, e a rubrica que incide numa pode não incidir na outra.** Esta é a
armadilha central: a parametrização da rubrica exige uma decisão por encargo, não uma decisão só, e
o erro típico é replicar a incidência previdenciária para as outras duas.

O critério de fundo, e o que se pergunta de cada rubrica, é sempre o mesmo:

> **Esta verba retribui o trabalho, com habitualidade, ou compensa uma despesa, um dano ou um
> evento excepcional?**

Verba que retribui o trabalho é salarial e integra a base, ainda que tenha nome de ajuda, de auxílio
ou de reembolso. Verba que ressarce despesa comprovada, ou indeniza, não integra. **Nome de rubrica
não decide natureza de verba**, e é exatamente por isso que o teste começa pela leitura das rubricas
antes de qualquer cálculo. Quando a legislação lista expressamente uma exclusão, descreva a obrigação
pelo seu conteúdo e não invente número de artigo: o critério que sustenta o achado é a natureza da
verba e a parametrização declarada, não a citação.

As rubricas que mais concentram erro de classificação, em ordem de frequência observada: prêmio e
bônus não eventuais, ajuda de custo paga com habitualidade e sem comprovação de despesa, abono e
gratificação recorrentes, auxílio-alimentação conforme a forma de concessão, parcela da participação
nos resultados paga fora dos requisitos de acordo prévio, adicional pago por rubrica separada da
principal, e a diária de viagem paga sem prestação de contas.

## 2. O teste central: reconstruir a base e confrontar com a gravada

`FOP.R01`. É teste de população, nunca de amostra, e é o que produz o maior número do relatório.

**O procedimento**, sobre a base analítica de lançamentos de todas as competências:

1. **Extraia a incidência declarada** de cada rubrica no dicionário: incide na base previdenciária?
   na de fundo de garantia? na de imposto retido? Essa é a regra do cliente, e é o primeiro critério.
2. **Some, por pessoa e por competência, os proventos cuja rubrica incide** em cada encargo. Esse é o
   valor reconstruído.
3. **Confronte com a base gravada** pela folha, rubrica a rubrica de base, por pessoa e competência.
   Toda diferença é achado, sem exceção de materialidade nesta etapa: a diferença de centavo em uma
   pessoa costuma ser a ponta de uma regra que roda em toda a população.
4. **Classifique cada diferença** em três causas, que exigem tratamento diferente: rubrica cuja
   incidência declarada não foi aplicada pelo sistema (falha de parametrização); rubrica cuja
   incidência declarada é ela própria incorreta à luz da natureza da verba (falha de critério, e é a
   mais cara); e lançamento manual sobre a base, feito fora do cálculo.
5. **Para cada erro confirmado, meça o passivo**: diferença de base multiplicada pela alíquota,
   multiplicada pelo número de competências em que a parametrização vigorou, mais encargo de mora.
   Vá até a data da criação ou da última alteração da rubrica, que está no dicionário, e não até o
   início do período auditado. O período auditado limita o teste, não o passivo.

**A segunda passagem, sobre o critério.** O passo 3 testa se o sistema aplicou o que foi declarado.
O passo 4 testa se o declarado está certo, e este é o teste que quase nunca é feito. Leia rubrica a
rubrica, das dez maiores para baixo, e confronte a incidência declarada com a natureza da verba pela
pergunta da §1. Onde houver divergência, peça o fundamento da parametrização por escrito antes de
concluir: às vezes existe decisão judicial própria do cliente sustentando a exclusão, e isso muda o
ponto de achado para risco declarado.

**Os dois cortes rápidos**, que dirigem a leitura:

- **Rubricas com incidência zerada em todos os encargos**, ordenadas pelo valor total pago no
  período. Cada uma precisa de fundamento próprio.
- **A mesma rubrica com incidência diferente entre entidades do grupo.** Uma das duas está errada, e
  o confronto interno dispensa qualquer critério externo para abrir a conversa.

## 3. Da base ao recolhimento

`FOP.R13`. Reconstruída e testada a base, confira o caminho dela até a guia.

1. **Base gravada contra base declarada contra guia recolhida**, por competência e por entidade. Os
   três números têm de ser o mesmo. Onde não forem, a diferença se explica por competência, não por
   total do ano.
2. **Alíquota aplicada.** Confirme a alíquota patronal, os adicionais setoriais e de terceiros, e o
   percentual de risco ambiental do trabalho, contra a atividade preponderante declarada de cada
   estabelecimento. Atividade preponderante errada é achado de baixa visibilidade e de alto valor,
   porque o percentual incide sobre a folha inteira daquele estabelecimento.
3. **Saldo a recolher no fim da competência contra o pagamento do mês seguinte.** O que ficou no
   passivo e não foi pago é achado de recolhimento, não de cálculo.
4. **Data de vencimento contra data de recolhimento**, em 100%. Recolhimento em atraso gera encargo
   de mora que a empresa já pagou ou ainda vai pagar, e se quantifica.
5. **Imposto retido**: confira a tabela vigente na competência, as deduções aplicadas, e em especial
   os dependentes declarados contra a documentação. Recalcule a retenção na amostra, isolando quem
   tem rendimento variável, quem recebeu parcela acumulada e quem recebeu décimo terceiro, que têm
   regra própria.
6. **Fundo de garantia**: confronte o depósito de cada competência com a base gravada e com o extrato
   da conta vinculada, e verifique o depósito sobre as parcelas de aviso e de décimo terceiro, que é
   onde a falta costuma estar.
7. **Certidões de regularidade.** Peça as vigentes. Certidão negada é indício de divergência já
   conhecida pelo fisco, e muda a prioridade do trabalho.

**Folha contra declaração ao fisco trabalhista** (`FOP.R14`): confronte por competência e por rubrica
o que a folha calculou com o que foi transmitido nos eventos periódicos, e levante a relação de
eventos transmitidos fora do prazo e de retificações. Divergência entre folha e declaração é risco de
autuação independente do mérito do cálculo, porque o número declarado é o que a fiscalização usa como
ponto de partida. Retificação recorrente da mesma competência é sintoma de processo de fechamento
instável, e vale como achado de controle mesmo sem diferença residual.

## 4. Benefícios: a conciliação a três pontas

`FOP.R12`. O erro aqui produz passivo nos dois sentidos, e é por isso que o teste tem de olhar as
duas direções. Desconto indevido gera devolução para a pessoa, com penalidade quando indevido de
má-fé. Benefício custeado para quem não é elegível gera custo e, conforme a verba, base de incidência
não reconhecida.

**O procedimento, por benefício e por competência.** Três documentos que quase nunca são conciliados
juntos:

```
Fatura do prestador (quem foi cobrado)
  × Relação de elegíveis (quem tinha direito, pela política e pelo cadastro de dependentes)
  × Desconto na folha (de quem foi efetivamente descontado, e quanto)
```

Os resíduos, e o que cada um significa:

| Resíduo | O que significa |
|---|---|
| Cobrado na fatura e não elegível | Custo indevido. Tipicamente pessoa desligada, ver `admissao-e-desligamento` §5, ou dependente fora do grau aceito |
| Cobrado e elegível, sem desconto na folha | A empresa assumiu a parte da pessoa. Conforme o benefício, é remuneração indireta e pode compor base |
| Descontado na folha e não cobrado na fatura | Desconto sem contrapartida. É o resíduo mais grave, e devolve em dobro |
| Descontado em valor diferente do cobrado | Erro de tabela, de faixa etária ou de coparticipação. Verifique se o sentido do erro é sistemático |

### Vale-transporte

Quatro testes, e o primeiro é o que mais aparece:

1. **Teto do desconto.** O desconto tem limite percentual sobre o salário básico, e o excedente é
   custo do empregador. Recalcule em 100%: é aritmética simples sobre a base, e o erro se repete
   todo mês em quem está na faixa salarial baixa.
2. **Quantidade contra dias úteis.** Vales concedidos no mês contra os dias efetivamente trabalhados,
   descontadas férias, afastamento e falta. Concessão fixa mensal, sem ajuste por ausência, é
   pagamento de benefício em duplicidade com o desconto de falta.
3. **Transporte fornecido pela empresa e vale ao mesmo tempo.** Cruze a relação de quem usa o
   fretado com a de quem recebe vale.
4. **Saldo negativo recorrente na folha.** Pessoa cujos descontos superam os proventos, mês após mês,
   é sinal de desconto acumulado acima da capacidade, e costuma esconder desconto irregular. Levante
   a população inteira com saldo negativo e trate como amostra dirigida.

### Alimentação e refeição

Confira a forma de concessão e o percentual de participação da pessoa, e confronte o valor concedido
com o valor descontado. A forma de concessão decide se a verba compõe ou não base de incidência, e
essa decisão é do cliente: obtenha-a por escrito e teste a aderência a ela, em vez de assumir.

### Plano de saúde e odontológico

O benefício mais caro e o de conciliação mais suja. Além da conciliação a três pontas:

- **Grau de parentesco dos dependentes** contra a política. Dependente fora do grau aceito é custo
  indevido, e o achado se descreve pelo grau, nunca pelo nome.
- **Coparticipação e plano diferenciado.** Quem escolheu plano superior paga a diferença? Teste a
  cobrança da diferença em 100% de quem tem plano acima do padrão.
- **Pessoa afastada e pessoa desligada.** Em ambos os casos há regra própria sobre manutenção do
  benefício e sobre quem custeia a parte da pessoa. Teste a cobrança dessa parte, que é a obrigação
  mais frequentemente esquecida.
- **Cuidado de dado sensível.** Fatura de plano de saúde contém informação de saúde. Trabalhe por
  matrícula e por contagem. `acta-way:anonimizacao-e-lgpd` vale integralmente, e a relação nominal de
  quem usou o plano não entra em papel de trabalho, em anexo nem em relatório.

### Empréstimo consignado e convênio

1. **Autorização assinada** para cada desconto, na amostra. Desconto sem autorização é indevido,
   qualquer que seja o valor.
2. **Valor descontado na folha contra o valor repassado à instituição**, por competência, no total e
   por pessoa. O total costuma bater e o individual não, e a diferença individual é que é o achado.
3. **Contratos em aberto há muito tempo** e pessoas com empréstimos sucessivos. O primeiro é falha de
   baixa; o segundo é indicador de risco que a área de pessoal deveria acompanhar.
4. **Saldo contábil de empréstimos contra a soma dos saldos individuais em aberto.** É a conciliação
   que fecha o assunto, e a diferença aponta desconto que parou sem quitação.
5. **Desconto que continua após o desligamento** e saldo devedor não abatido na rescisão.

### Previdência complementar e demais benefícios

Concilie o descontado da pessoa e o aportado pela empresa com o valor repassado à entidade, confira
o percentual de contribuição patronal contra o regulamento do plano, e teste o tratamento dos saldos
de quem se afastou ou se desligou no período. Para auxílio educação e reembolsos em geral, o ponto de
teste é o mesmo: **existe comprovante de despesa antes do pagamento?** Reembolso sem comprovação é
verba salarial com nome de reembolso, e volta para o teste da §2.

## 5. Provisões

Confronte a provisão de férias e de décimo terceiro com o direito apurado pessoa a pessoa, incluindo
os encargos sobre a provisão. A provisão calculada sobre salário sem a média de variáveis e
adicionais é subavaliada, e a média a incluir é a mesma que entra no cálculo do pagamento. Teste
também a existência de pessoas com períodos aquisitivos de férias vencidos, que é ao mesmo tempo
passivo crescente, risco de pagamento em dobro e indicador de quadro subdimensionado.

### Planos A/B/C

- **Plano A**: base analítica de lançamentos de todas as competências, dicionário de rubricas com
  incidência declarada, guias recolhidas, arquivos das declarações transmitidas, faturas dos
  prestadores de benefício e relação de elegíveis. Reconstrução da base em 100% e conciliação a três
  pontas por competência.
- **Plano B**: sem o dicionário com a incidência declarada, a reconstrução perde o critério interno;
  classifique as rubricas pela natureza da verba a partir da descrição e da fórmula, valide a
  classificação com a área de pessoal por escrito, e declare que o teste passou a medir a
  parametrização contra o critério da casa, e não contra o critério do cliente. **A ausência do
  dicionário é ela própria deficiência de desenho**, e entra como achado.
- **Plano C**: sem a base analítica, só com o resumo por competência, a reconstrução não é possível.
  Não degrade em silêncio: conclua que o teste de incidência não foi executável, redirecione o esforço
  para a conciliação base gravada contra guia recolhida e para a leitura crítica do dicionário, e
  declare a limitação.
- **Limitação**: *"A reconstrução da base de incidência abrange [N] competências e [X] rubricas, [Y]%
  do valor pago no período; a incidência foi confrontada com a declarada no dicionário vigente em
  [data]; [M] rubricas não tiveram a incidência declarada localizada e estão fora da conclusão."*

## O que entregar

1. A base de cada encargo reconstruída e confrontada com a gravada, em 100%, com as diferenças
   classificadas nas três causas.
2. A leitura crítica da incidência declarada das maiores rubricas, com as divergências de critério e
   o fundamento obtido do cliente para cada uma.
3. Para cada erro de incidência confirmado, o passivo estimado, com a memória de cálculo, o número de
   competências afetadas e a data de origem da parametrização.
4. Conciliação base gravada contra declarada contra guia recolhida, por competência e por entidade, e
   a relação de recolhimentos em atraso com o encargo de mora quantificado.
5. A alíquota de risco ambiental testada contra a atividade preponderante de cada estabelecimento.
6. A conciliação a três pontas de cada benefício, com os quatro resíduos isolados e quantificados.
7. Os testes próprios de vale-transporte, plano de saúde e consignado, com a população de saldo
   negativo recorrente tratada.
8. Provisões de férias e décimo terceiro confrontadas com o direito apurado, e a relação de períodos
   aquisitivos vencidos.
9. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`horas-extras-e-jornada`, porque a média de horas extras é insumo da base de férias, de décimo
terceiro e de rescisão testados aqui. A redação do ponto e a calibração de severidade estão em
`redacao-de-achados` e em `acta-controles-internos:deficiencias-e-severidade`.
