---
name: medicao-e-aceite
description: Teste a medição do serviço e o aceite do cliente antes da nota, incluindo glosas e pesagem. Acionar ao conferir boletim de medição contra evidência operacional, ao validar termo de aceite e assinantes, ao conciliar glosas por número e data, ao apurar a taxa de conversão de notificação em glosa, ou ao auditar balança e aferição metrológica.
---

# Medição, aceite e glosa

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elos 3 e 4 do ciclo (`ciclo-da-receita` §2). Blocos **REC.04** e **REC.05**.

É aqui que a receita **se forma**. O contrato define o preço; a medição define a quantidade. Erro de
quantidade não aparece em nenhum teste de preço, de nota ou de recebimento — os três estarão
perfeitamente consistentes com uma medição errada.

## 1. Medição contra evidência operacional

O boletim de medição é **documento da própria contratada**. Ele não prova o serviço: ele o declara.
A prova é a evidência operacional independente que o sustenta.

| Forma de medição | Evidência operacional a confrontar |
|---|---|
| Por carga ou viagem | Roteiro executado, controle de recipientes ou caçambas, apontamento de equipe, registro de percurso |
| Por quantidade física apurada em instrumento | Registro do instrumento (ticket de pesagem, leitura de medidor) e o documento de controle externo vinculado |
| Por quantidade fixa contratada | Relatório de apuração emitido por agente externo ao contratado |
| Por disponibilidade ou nível de serviço | Indicadores-fonte e o registro de ocorrências do período |

Dois confrontos, sempre: **quantidade medida × evidência de execução** e **PU medido × PU contratual
vigente**, ao centavo. O segundo é o par 1 de `ciclo-da-receita` §4.

**Competência.** Medição é mensal, execução é diária. Teste a atribuição de competência das
quantidades na virada do mês: quantidade executada no fim do mês e medida no mês seguinte é o vetor
mais comum de erro de corte, e ele se propaga até o razão (ver `faturamento-e-nf` §3).

## 2. Aceite formal

A nota não pode anteceder o reconhecimento do cliente. Três verificações, e a terceira é a que se
esquece:

1. **Existência** — há termo de aceite, boletim chancelado, ou o instrumento equivalente previsto no
   contrato, para cada medição faturada.
2. **Anterioridade** — a data do aceite antecede a data de emissão da nota. Aceite posterior à nota
   inverte o controle: o cliente passou a homologar o que já foi cobrado.
3. **Poder de quem assina** — **quem tem poder de aceitar neste mandato?** Confirme no contrato e na
   designação formal do gestor, e valide os assinantes um a um contra essa lista. Aceite assinado por
   quem não tem competência formal é aceite inexistente, ainda que carimbado.

O valor aceito é o que pode ser faturado: aceite parcial ou aceite com ressalva **é glosa**, e tem de
aparecer na conciliação da seção 3.

### Plano B do aceite: documento em imagem

Termo de aceite e boletim de medição chegam com frequência escaneados, muitos rotacionados, e alguns
com o boletim na segunda página do PDF da própria nota. Trate como leitura de documento em imagem:
rotacione antes de olhar, renderize e leia visualmente, e **varra todas as páginas de todos os anexos
antes de declarar ausência de boletim**. A mecânica está em `bases-e-conciliacao` §2 — não a repita
no papel de trabalho, referencie.

- **Plano C** — sem aceite documentado: indagação formal, e o teste conclui pela ausência do controle,
  não por não testado.
- **Limitação** — *"Os aceites foram avaliados sobre [N] documentos, correspondentes a [X]% das
  medições faturadas no período; os demais não foram disponibilizados."*

## 3. Glosas e notificações

Glosa é receita que **deixou de existir** por descumprimento contratual reconhecido. Auditar glosa é
auditar duas coisas ao mesmo tempo: se a glosa aplicada está correta, e se a glosa **devida** foi
aplicada.

**Concilie por número e por data, antes de somar.** Cada glosa tem identificador e data de origem.
A relação de glosas do cliente e o controle de notificações são bases diferentes, com universos
diferentes, e somar qualquer uma delas antes de reconciliá-las produz número que não se sustenta.
Defina o universo — as competências efetivamente cobertas por cada base — e declare-o.

### A taxa de conversão

```
taxa de conversão = glosas efetivas ÷ notificações recebidas
```

**No mesmo universo de competências.** Numerador e denominador têm de vir do mesmo período e das
mesmas bases. É a métrica de efetividade da fiscalização do contratante e, do lado da contratada, a
medida da exposição que ainda não se materializou.

> **O erro a não repetir:** calcular a conversão a partir da relação de glosas. A relação **só lista
> glosas aplicadas** — dizer que 100% delas foram glosadas é tautológico, não é achado. O
> denominador é a notificação, e ele vive na outra base.

Quando o controle de notificações começa depois do início do período auditado, a taxa **só é válida a
partir daí**. Declare o recorte junto com o número, sempre na mesma frase.

### Planos A/B/C

- **Plano A** — relação de glosas conciliada por número e data ao controle de notificações; universo
  igual às competências cobertas por ambas; soma só depois da reconciliação ao centavo.
- **Plano B** — relação disponível só de algumas competências: concilie o que há, declare o universo
  parcial, e use o controle de notificações para a série mensal completa.
- **Plano C** — sem controle de notificações: a conversão não é apurável. Conclua sobre as glosas
  aplicadas e declare que a glosa **devida e não aplicada** não foi testável.
- **Limitação** — *"A conciliação de glosas abrange as competências [X] e [Y], únicas com relação
  disponibilizada; a série mensal e a taxa de conversão usam o controle de notificações a partir de
  [competência inicial]."*

### Índice de desempenho

Quando o contrato modula o valor a receber por um índice composto de indicadores, **reperforme o
índice a partir dos indicadores-fonte**, nunca a partir do índice já calculado. Os pesos, os
indicadores e a faixa de modulação são cláusula daquele contrato e variam de mandato para mandato:
leia-os antes. A estrutura típica está em `contrato-e-cadastro` §4.

## 4. REC.05 — Medição física e aferição metrológica

Quando a receita é o produto `quantidade física × preço`, a quantidade é **integralmente auditável**
e o teste tem de ser de base, não amostral.

### A bateria de cortes sobre 100% dos registros

Peça o relatório completo do instrumento em formato tabular, com identificador do registro, data,
hora, veículo ou ponto, tara, bruto, líquido, cliente, tipo de material e o documento de controle
externo vinculado. Sobre ele, oito cortes:

1. **Reperformance do líquido** — `bruto − tara`. Divergência é cálculo manual ou edição.
2. **Sequência numérica** dos registros — saltos, repetições, duplicidades.
3. **Tara registrada × tara cadastrada do veículo** — peça o cadastro de frota com tara.
4. **Registro fora do horário de operação** e em dia não operacional — peça o calendário oficial.
5. **Registro sem documento de controle externo** vinculado.
6. **Mesmo veículo com registros simultâneos** ou com intervalo inviável entre entradas.
7. **Concentração anormal de valores redondos** ou repetidos.
8. **Líquido zero ou negativo.**

**O cadastro criado na fila é o vetor clássico.** Cruze data e hora de criação do cadastro de
cliente, veículo ou tipo de material com a data e hora do **primeiro registro correspondente**.
Cadastro nascido no mesmo instante da pesagem é recebimento sem validação prévia — e esse cruzamento
converte uma indagação em teste de base.

**Registros manuais, alterados e cancelados: 100%, sem discussão de amostra.** População pequena e de
altíssimo risco. Para cada um: motivo, data, responsável, alçada de aprovação, evidência suporte. E
peça a demonstração **em tela** do bloqueio que impede registro manual fora do fluxo.

**O documento de controle externo é a única contraprova.** O registro do instrumento é gerado pela
própria unidade; o documento de rastreabilidade emitido no sistema de controle externo, não.
Confronte placa, condutor, gerador, tipo de material, origem e destino entre os dois e o cadastro.
Amostra dirigida por maior quantidade e por cliente, incluindo **todos** os cadastros emergenciais.

### Aferição metrológica: o teste que pode invalidar tudo

Exija certificado emitido por entidade credenciada pelo órgão metrológico competente, **vigente no
período auditado**, mais a periodicidade cumprida e os registros de manutenção do instrumento.

> **Sem aferição vigente, 100% da receita apurada por aquele instrumento no período está
> contaminada — e isso é conclusão, não ressalva.**

Vale igualmente para balança e para medidor de vazão: o medidor é o equivalente funcional da balança
e recebe o mesmo teste. Se o certificado cobre apenas parte do período, **quantifique a receita da
janela descoberta** — é esse número que vai ao ponto.

### Planos A/B/C

- **Plano A** — relatório completo em formato tabular, os oito cortes, o cruzamento de cadastro na
  fila, 100% dos registros manuais e o confronto com a contraprova externa.
- **Plano B** — sem relatório tabular: extraia dos registros em PDF por coordenada
  (`bases-e-conciliacao` §2) e declare o universo extraído contra o total informado.
- **Plano C** — só relatório sintético por cliente e mês: os oito cortes caem; restam o confronto com
  a medição e a conciliação de quantidade. Declare que a **integridade do registro não foi testável**.
- **N/A** — remuneração por carga, viagem ou quantidade fixa: declare a inaplicabilidade com a razão
  contratual. Bloco inaplicável se declara, não se omite.
- **Limitação** — *"A integridade do registro foi testada sobre [N] lançamentos, [X]% do total
  informado de [T]. O certificado de aferição cobre [período]; a receita apurada fora dessa cobertura
  é de R$ [valor]."*

## 5. Reperformance em vez de conferência documental

Quando a fonte do faturamento é uma planilha operacional alimentada à mão — produção, retirada, horas
paradas, perdas, atributo de qualidade —, ela **é** a base da receita e recebe teste de base: dia a
dia, 100% dos dias, contra o relatório do sistema que gera o dado. Conferência documental não pega
erro de planilha alimentada à mão; reperformance pega.

Três cálculos, quando a estrutura contratual os previr (os parâmetros são do contrato do mandato, ver
`contrato-e-cadastro` §4): a apuração da quantidade dia a dia, a cobrança do volume contratado e não
retirado pelo percentual contratual, e o preço em função do atributo de qualidade apurado.

## O que entregar

1. Confronto medição × evidência operacional, com o universo declarado.
2. Confronto PU medido × PU contratual vigente, ao centavo.
3. Relação de aceites com data, valor e assinante validado contra a designação formal.
4. Conciliação glosa × notificação por número e data, e a taxa de conversão com o recorte declarado.
5. Quando houver instrumento: os oito cortes, os registros manuais a 100%, a contraprova externa e o
   certificado de aferição com a janela de cobertura e a receita descoberta quantificada.
6. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`faturamento-e-nf`. O valor aceito e líquido de glosa apurado aqui é o critério do confronto lá.
