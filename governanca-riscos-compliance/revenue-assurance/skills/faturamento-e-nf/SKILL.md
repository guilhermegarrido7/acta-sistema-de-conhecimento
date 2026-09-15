---
name: faturamento-e-nf
description: Teste a emissão da nota fiscal, o cancelamento e o corte de competência da receita. Acionar ao confrontar medição aceita contra nota emitida, ao verificar a aderência tributária da emissão, ao avaliar cancelamento com motivo, alçada e prazo legal, ao testar cut-off nas viradas de mês e de exercício, ou ao conciliar faturamento com o razão contábil.
---

# Faturamento, nota fiscal, cut-off e conciliação com o razão

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elos 5 e 7 do ciclo (`ciclo-da-receita` §2). Blocos **REC.04** (faturamento) e **REC.07**.

Três perguntas distintas, que programas de receita costumam colapsar numa só: **faturou-se tudo o que
foi aceito?**, **a nota está fiscalmente correta?** e **a receita está na competência certa e chegou
íntegra ao razão?**. São riscos diferentes, com controles diferentes, e cada um merece seu teste.

## 1. Faturamento integral do medido e aceito

O confronto é **medição aceita × nota emitida**, competência a competência, em base completa. Quatro
resultados possíveis, e todos são achado exceto o primeiro:

| Resultado | Leitura |
|---|---|
| Nota = valor aceito, líquido de glosa | Conforme |
| Nota < valor aceito | Subfaturamento: receita renunciada sem decisão. Quantifique |
| Nota > valor aceito | Faturamento sem lastro de aceite |
| Aceite sem nota | Entrega sem faturamento. O risco mais silencioso do elo |

O quarto é o que escapa de quase todo programa, porque o teste usual parte da nota e vai para a
medição — caminho que **nunca** encontra a medição que não virou nota. Parta dos dois lados: a
população de aceites e a população de notas, casadas com consumo de pool (`bases-e-conciliacao` §4).

A mesma lógica vale para venda de material valorizado, sucata e subproduto: saída sem nota é
invisível para quem olha só a baixa de estoque, e nota sem baixa é invisível para quem olha só a
receita. Escreva o par recíproco de testes (`ciclo-da-receita` §6, pergunta 5).

**Formação de preço em receita acessória.** Venda recorrente a comprador único por espécie, sem
cotação periódica nem referência de índice, é o padrão clássico de preço desatualizado. Confirme se
existe mais de um interessado no mercado local antes de aceitar o preço praticado como razoável.

## 2. Aderência fiscal da emissão

Testar emissão e cancelamento sem olhar a **correção tributária da própria nota** deixa descoberto um
risco de multa e sanção que costuma ser maior que o risco de quantidade. É um dos quatro riscos que
faltavam nos programas de receita da casa (ver `matriz-de-riscos-da-receita` §2).

| Espécie de documento | O que conferir |
|---|---|
| Nota de **serviço** | Enquadramento do serviço, município de prestação e de incidência, alíquota, retenções aplicáveis e sua evidência |
| Nota de **produto** | Código de operação, classificação fiscal da mercadoria, base de cálculo, alíquotas, substituição tributária, unidade da federação de destino |

**A exposição é substancialmente maior no produto** — não transporte o teste de um para o outro, nem
a conclusão. Confirme a espécie de documento emitida em cada linha de receita do mandato antes de
escrever o teste: uma mesma empresa costuma emitir as duas.

## 3. Cancelamento de nota

Todo cancelamento tem de ter **motivo registrado, aprovação na alçada competente, reemissão na
competência correta e observância do prazo legal**.

> **O prazo de cancelamento varia por espécie de documento fiscal e por unidade da federação, e as
> regras da nota de produto são substancialmente mais restritas que as da nota de serviço.** Confirme
> o prazo na legislação vigente aplicável ao mandato. Não transporte o prazo de um trabalho anterior.

Cortes que revelam o que a relação de cancelamentos esconde:

- **Cancelamento sem reemissão** — a receita simplesmente desapareceu. Confronte cada nota cancelada
  contra a nota substituta, por competência.
- **Reemissão em competência posterior** — cancelou em uma competência e reemitiu em outra: é erro de
  corte disfarçado de cancelamento (§4).
- **Concentração em fim de período** — cancelamentos agrupados nos últimos dias do mês ou do
  exercício merecem leitura própria.
- **Mesmo tomador, cancelamentos repetidos** — sintoma de divergência recorrente de medição ou de
  aceite, não de erro de digitação.

### Planos A/B/C

- **Plano A** — relação sistêmica de cancelamentos × motivo × alçada × reemissão, conferida contra o
  prazo legal aplicável.
- **Plano B** — sem relação sistêmica: cruze notas canceladas × reemitidas por competência a partir
  dos arquivos eletrônicos ou do relatório fiscal.
- **Plano C** — sem qualquer relação: conclua pela ausência do controle de aprovação e declare.
- **Nota de leitura** — a data de cancelamento nem sempre está no topo do documento; já apareceu em
  campo de observações gerais. Varra o documento inteiro antes de declarar ausência.
- **Limitação** — *"O prazo de cancelamento foi avaliado contra a legislação vigente aplicável à
  espécie de documento emitida; a evidência de aprovação em alçada [foi / não foi] disponibilizada."*

## 4. Cut-off: a receita está na competência certa?

Programas de receita costumam parar no aging e **nunca perguntar se a receita está na competência
certa**. O risco existe sempre que o fato gerador e a emissão não coincidem — e neste domínio eles
quase nunca coincidem: a execução é diária, a medição é mensal, o aceite vem depois da medição, a
emissão vem depois do aceite, e o faturamento costuma ocorrer em data fixa.

**Teste as viradas de mês, e a virada de exercício em dobro.** A bateria:

1. **Janela em torno do corte** — selecione as notas emitidas nos últimos dias de uma competência e
   nos primeiros da seguinte, e confronte a data do **fato gerador** (execução medida) com a
   competência de reconhecimento.
2. **Aceite de uma competência, nota de outra** — mapeie a defasagem média entre aceite e emissão. A
   defasagem em si não é achado; a defasagem que atravessa o corte é.
3. **Serviço executado e ainda não medido na data-base** — existe receita a faturar reconhecida? A
   ausência de reconhecimento é subavaliação da receita do período.
4. **Nota emitida sem execução no período** — o espelho do anterior.
5. **Cancelamento e reemissão atravessando o corte** (§3).

Quantifique o efeito líquido **e o efeito em módulo**: valores positivos e negativos que se anulam no
total escondem a magnitude real da imprecisão de corte.

## 5. Conciliação faturamento × razão contábil

Concluir sobre o faturamento sem saber se ele chegou íntegro à contabilidade é concluir sobre metade
do elo. Concilie **por competência e por produto** (ou por linha de receita).

> A conciliação só por total engana: diferença positiva de um produto compensa a negativa de outro e
> o total fecha errado, com aparência de certo.

O que a conciliação tem de produzir:

1. **Confronto global** — quantidade e valor de notas emitidas × receita registrada no razão, por
   competência, com a diferença e o percentual sobre a base maior.
2. **Abertura por produto ou linha de receita** — a mesma conta, um nível abaixo.
3. **Lançamentos manuais diretos na conta de receita** — identifique todos: quem lançou, quando, com
   que histórico e com que documento suporte. Lançamento manual em conta de receita é a via clássica
   de ajuste sem lastro.
4. **Diferenças de arredondamento e de tributo** — separe o que é diferença de critério (receita
   bruta × líquida, tributos destacados) do que é divergência real. Declare o critério usado.

A mecânica de casar as duas bases com consumo de pool e os quadros de saída estão em
`bases-e-conciliacao` §4 — referencie, não repita.

### Planos A/B/C

- **Plano A** — razão analítico da conta de receita + relatório completo de notas emitidas, ambos por
  competência, conciliados ao centavo com os quase-pares isolados.
- **Plano B** — só razão sintético: conciliação por competência sem abertura por produto. Declare que
  a compensação entre produtos não foi testável.
- **Plano C** — sem acesso ao razão: o elo 7 cai inteiro. Conclua sobre o faturamento e declare
  explicitamente que a integridade do registro contábil da receita não foi objeto do trabalho.
- **Limitação** — *"A conciliação abrange [N] competências e [X]% do valor faturado; a abertura por
  linha de receita [foi / não foi] possível; foram identificados [N] lançamentos manuais na conta de
  receita, no valor de R$ [valor]."*

## O que entregar

1. Confronto medição aceita × nota emitida pelos dois lados, com aceites sem nota isolados.
2. Teste de aderência fiscal por espécie de documento emitida.
3. Relação de cancelamentos com motivo, alçada, reemissão e prazo legal conferido.
4. Bateria de cut-off nas viradas de mês e de exercício, com efeito líquido e em módulo.
5. Conciliação faturamento × razão por competência e por produto, com os lançamentos manuais
   identificados nominalmente pelo registro, não pela pessoa.
6. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`recebimento-e-inadimplencia`. A redação do ponto e a calibração de severidade estão em
`redacao-de-achados`.
