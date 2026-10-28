---
name: faturamento-e-nf
description: Teste a emissão da nota fiscal, o cancelamento e o corte de competência da receita. Acionar ao confrontar medição aceita contra nota emitida, ao verificar a aderência tributária da emissão, ao avaliar cancelamento com motivo, alçada e prazo legal, ao testar cut-off nas viradas de mês e de exercício, ou ao conciliar faturamento com o razão contábil.
---

# Faturamento, nota fiscal, cut-off e conciliação com o razão

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
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
medição, caminho que **nunca** encontra a medição que não virou nota. Parta dos dois lados: a
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

**A exposição é substancialmente maior no produto**, não transporte o teste de um para o outro, nem
a conclusão. Confirme a espécie de documento emitida em cada linha de receita do mandato antes de
escrever o teste: uma mesma empresa costuma emitir as duas.

### IBS e CBS no documento fiscal (posição em out/2026)

Todo documento fiscal eletrônico de operação com bem ou serviço passa a levar IBS e CBS, inclusive
em operação imune, isenta, com alíquota zero ou suspensão, e o que se informa ali é confissão do
valor devido (LC 214/2025, art. 60, caput e §§ 1º e 2º). Em 2026 as alíquotas são de teste, 0,9% de
CBS e 0,1% de IBS (arts. 346 e 343), e quem cumpre as obrigações acessórias fica dispensado de
recolhê-las (art. 348, § 1º). Calendário e efeitos da transição: plugin de modelagem, skill
`impostos-e-prejuizos-fiscais`, reference `transicao-tributaria-2026-2033.md`.

**Data de obrigatoriedade das principais espécies** (Ato Conjunto RFB/CGIBS nº 4, de 30/07/2026,
conforme a Receita Federal em 31/07/2026; a lista completa está na fonte, no fim da skill):

| Espécie | Início |
|---|---|
| NF-e de fornecimento de bens, NFC-e, CT-e, CT-e OS, MDF-e, NF3e, BP-e (exceto aéreo, urbano, semiurbano e metropolitano) | 03/08/2026 |
| NFS-e dos serviços em geral sujeitos ao ISS; NFCom | 01/10/2026 |
| NFS-e de plataformas digitais, locações, condomínios e subitens 1.03, 1.05, 1.09 e 16.01 da LC 116; NF-e de quem é contribuinte de IBS e CBS sem ser do ICMS; NFAg, NFGas, NF-e de alienação de imóveis | 01/12/2026 |
| Documentos do Simples Nacional; NF-e de importação; NF-e de combustíveis na tributação monofásica | 01/01/2027 |

**Obrigatório não quer dizer rejeitado.** O CGIBS havia anunciado a rejeição, a partir de
03/08/2026, do documento sem os novos campos, com base no Ato Conjunto RFB/CGIBS nº 1, de
22/12/2025. O Ato Técnico Conjunto RFB/CGIBS nº 1, de 31/07/2026, adiou essas validações: NF-e,
NFC-e, CT-e, CT-e OS, GTV-e, BP-e, NF3e e NFCom são autorizados mesmo sem todos os campos, e a
obrigação de preenchê-los continua (CGIBS e Receita Federal, esclarecimento de ago/2026). O
comunicado da Receita Federal de 01/08/2026 falara em suspensão do preenchimento; o esclarecimento
restringiu a medida às regras de validação e rejeição. Em out/2026, a rejeição pela simples ausência
do grupo seguia sem data (Contábeis, 10/10/2026; a confirmar na nota técnica vigente). Na NFS-e, a
ausência não impede a autorização até 31/12/2026, mas configura desconformidade depois da data da
categoria (perguntas e respostas do Portal Nacional da NFS-e de set/2026, segundo Contábeis; a
confirmar no portal).

**NFS-e de padrão nacional.** Desde 01/01/2026, o município autoriza a emissão da NFS-e de padrão
nacional no ambiente nacional ou, se tiver emissor próprio, compartilha a nota no leiaute
padronizado com o ambiente de dados nacional da NFS-e (LC 214/2025, art. 62, § 1º, I, aplicável
até 31/12/2032 pelo § 2º). O leiaute é nacional mesmo com emissor municipal, e o teste de campos é o
mesmo nos dois casos.

O que isso acrescenta ao teste, por espécie emitida no mandato:

1. **Presença do grupo IBS/CBS** em 100% dos documentos emitidos depois da data da espécie, lida no
   XML. Documento autorizado sem o grupo não está conforme: é obrigação acessória descumprida, que
   põe em risco a dispensa de recolhimento de 2026 (art. 348, § 1º). O programa de conformidade de
   2026, previsto para dar prazo adicional de regularização a quem demonstra conduta cooperativa,
   foi regulamentado pelo Ato Conjunto RFB/CGIBS nº 5, de 12/08/2026: registre se o cliente se
   enquadra e se regularizou dentro do prazo.
2. **Consistência do que foi informado**: classificação tributária da operação, base de cálculo por
   fora (art. 12, § 2º) e alíquotas do período. Grupo preenchido com erro é confissão de valor errado
   (art. 60, § 1º), autorizado ou não.
3. **Uma data de corte por espécie**, não uma por empresa: quem emite NF-e e NFS-e tem duas.

## 3. Cancelamento de nota

Todo cancelamento tem de ter **motivo registrado, aprovação na alçada competente, reemissão na
competência correta e observância do prazo legal**.

> **O prazo de cancelamento varia por espécie de documento fiscal, por unidade da federação e, na
> nota de serviço, pela regra do município ou do ambiente nacional; as regras da nota de produto são
> substancialmente mais restritas que as da nota de serviço.** Confirme o prazo na legislação vigente
> aplicável ao mandato. Não transporte o prazo de um trabalho anterior.

**NF-e: a regra-base.** O cancelamento é pedido em até 24 horas da Autorização de Uso, desde que não
tenha havido circulação da mercadoria, prestação de serviço ou vinculação a duplicata escritural
(Ajuste SINIEF 07/05, cláusula décima segunda, na redação do Ajuste SINIEF 44/20, em vigor desde
11/12/2020). O prazo está no texto do próprio ajuste. A unidade federada pode receber pedido
extemporâneo em caso excepcional (parágrafo único), e há prazo de até 168 horas numa hipótese de
contingência (cláusula décima segunda-A, incluída pelo Ajuste SINIEF 13/25, desde 03/08/2026).
Cancelamento registrado fora dessas janelas pede a evidência do pedido extemporâneo aceito pela UF.

**A carta de correção eletrônica não substitui o cancelamento.** A CC-e não corrige as variáveis
que determinam o valor do imposto (base de cálculo, alíquota, diferença de preço, quantidade, valor
da operação ou da prestação), dado cadastral que mude o remetente ou o destinatário, a data de
emissão ou de saída, campos da NF-e de exportação informados na DU-E, nem inclui ou altera parcelas
de venda a prazo (Ajuste SINIEF 07/05, cláusula décima quarta-A, I a V). A última CC-e consolida as
anteriores (§ 4º), e o protocolo de recepção não valida o conteúdo (§ 6º).

Cortes que revelam o que a relação de cancelamentos esconde:

- **Cancelamento sem reemissão**: a receita simplesmente desapareceu. Confronte cada nota cancelada
  contra a nota substituta, por competência.
- **Reemissão em competência posterior**: cancelou em uma competência e reemitiu em outra: é erro de
  corte disfarçado de cancelamento (§4).
- **Concentração em fim de período**: cancelamentos agrupados nos últimos dias do mês ou do
  exercício merecem leitura própria.
- **Mesmo tomador, cancelamentos repetidos**: sintoma de divergência recorrente de medição ou de
  aceite, não de erro de digitação.
- **CC-e no lugar de cancelamento fora do prazo**: correção que mexe em valor, quantidade,
  destinatário ou data é vedada. Leia o texto de cada CC-e do período, não só a contagem de eventos.

### Planos A/B/C

- **Plano A**: relação sistêmica de cancelamentos × motivo × alçada × reemissão, conferida contra o
  prazo legal aplicável, e relação dos eventos de CC-e com o texto de cada correção.
- **Plano B**: sem relação sistêmica: cruze notas canceladas × reemitidas por competência a partir
  dos arquivos eletrônicos ou do relatório fiscal.
- **Plano C**: sem qualquer relação: conclua pela ausência do controle de aprovação e declare.
- **Nota de leitura**: a data de cancelamento nem sempre está no topo do documento; já apareceu em
  campo de observações gerais. Varra o documento inteiro antes de declarar ausência.
- **Limitação**: *"O prazo de cancelamento foi avaliado contra a legislação vigente aplicável à
  espécie de documento emitida; a evidência de aprovação em alçada [foi / não foi] disponibilizada."*

## 4. Cut-off: a receita está na competência certa?

Programas de receita costumam parar no aging e **nunca perguntar se a receita está na competência
certa**. O risco existe sempre que o fato gerador e a emissão não coincidem, e neste domínio eles
quase nunca coincidem: a execução é diária, a medição é mensal, o aceite vem depois da medição, a
emissão vem depois do aceite, e o faturamento costuma ocorrer em data fixa.

**Teste as viradas de mês, e a virada de exercício em dobro.** A bateria:

1. **Janela em torno do corte**: selecione as notas emitidas nos últimos dias de uma competência e
   nos primeiros da seguinte, e confronte a data do **fato gerador** (execução medida) com a
   competência de reconhecimento.
2. **Aceite de uma competência, nota de outra**: mapeie a defasagem média entre aceite e emissão. A
   defasagem em si não é achado; a defasagem que atravessa o corte é.
3. **Serviço executado e ainda não medido na data-base**: existe receita a faturar reconhecida? A
   ausência de reconhecimento é subavaliação da receita do período.
4. **Nota emitida sem execução no período**: o espelho do anterior.
5. **Cancelamento e reemissão atravessando o corte** (§3).

Quantifique o efeito líquido **e o efeito em módulo**: valores positivos e negativos que se anulam no
total escondem a magnitude real da imprecisão de corte.

## 5. Conciliação faturamento × razão contábil

Concluir sobre o faturamento sem saber se ele chegou íntegro à contabilidade é concluir sobre metade
do elo. Concilie **por competência e por produto** (ou por linha de receita).

> A conciliação só por total engana: diferença positiva de um produto compensa a negativa de outro e
> o total fecha errado, com aparência de certo.

O que a conciliação tem de produzir:

1. **Confronto global**: quantidade e valor de notas emitidas × receita registrada no razão, por
   competência, com a diferença e o percentual sobre a base maior.
2. **Abertura por produto ou linha de receita**: a mesma conta, um nível abaixo.
3. **Lançamentos manuais diretos na conta de receita**: identifique todos: quem lançou, quando, com
   que histórico e com que documento suporte. Lançamento manual em conta de receita é a via clássica
   de ajuste sem lastro.
4. **Diferenças de arredondamento e de tributo**: separe o que é diferença de critério (receita
   bruta × líquida, tributos destacados) do que é divergência real. Declare o critério usado.

A mecânica de casar as duas bases com consumo de pool e os quadros de saída estão em
`bases-e-conciliacao` §4; referencie, não repita.

### Planos A/B/C

- **Plano A**: razão analítico da conta de receita + relatório completo de notas emitidas, ambos por
  competência, conciliados ao centavo com os quase-pares isolados.
- **Plano B**: só razão sintético: conciliação por competência sem abertura por produto. Declare que
  a compensação entre produtos não foi testável.
- **Plano C**: sem acesso ao razão: o elo 7 cai inteiro. Conclua sobre o faturamento e declare
  explicitamente que a integridade do registro contábil da receita não foi objeto do trabalho.
- **Limitação**: *"A conciliação abrange [N] competências e [X]% do valor faturado; a abertura por
  linha de receita [foi / não foi] possível; foram identificados [N] lançamentos manuais na conta de
  receita, no valor de R$ [valor]."*

## O que entregar

1. Confronto medição aceita × nota emitida pelos dois lados, com aceites sem nota isolados.
2. Teste de aderência fiscal por espécie de documento emitida, com o grupo IBS/CBS conferido a
   partir da data de obrigatoriedade de cada espécie.
3. Relação de cancelamentos com motivo, alçada, reemissão e prazo legal conferido, e das CC-e com o
   texto de cada correção.
4. Bateria de cut-off nas viradas de mês e de exercício, com efeito líquido e em módulo.
5. Conciliação faturamento × razão por competência e por produto, com os lançamentos manuais
   identificados nominalmente pelo registro, não pela pessoa.
6. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`recebimento-e-inadimplencia`. A redação do ponto e a calibração de severidade estão em
`redacao-de-achados`.

## Fontes dos §§ 2 e 3 (acesso em 26/10/2026)

- LC 214/2025, arts. 12, 60, 62, 343, 346 e 348, publicação original na Câmara dos Deputados:
  https://www2.camara.leg.br/legin/fed/leicom/2025/leicomplementar-214-16-janeiro-2025-796905-publicacaooriginal-174141-pl.html
- Receita Federal, 31/07/2026, cronograma do Ato Conjunto RFB/CGIBS nº 4/2026:
  https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/julho/receita-federal-e-comite-gestor-do-ibs-publicam-o-cronograma-de-implementacao-dos-documentos-fiscais-eletronicos-da-reforma-tributaria-do-consumo
- Receita Federal, listas de atos conjuntos e de atos técnicos conjuntos RFB/CGIBS, atualizadas em
  16/10/2026:
  https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria-do-consumo/legislacao/atos-conjuntos
  e
  https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/legislacao/atos-tecnicos-conjuntos
- CGIBS, comunicado anterior ao adiamento (rejeição a partir de 03/08/2026):
  https://www.cgibs.gov.br/prazo-para-adequacao-dos-sistemas-de-emissao-de-notas-fiscais-ao-regulamento-do-ibs-encerra-em
- CGIBS e Receita Federal, esclarecimento de ago/2026 sobre o adiamento das validações, em
  reprodução: https://www.legisweb.com.br/noticia/?id=34131 ; comunicado de 01/08/2026 relatado
  pela Fenacon:
  https://fenacon.org.br/reforma-tributaria/receita-informa-que-suspendera-exigencia-de-campos-da-cbs-e-do-ibs-em-documentos-fiscais-eletronicos/
- Contábeis, 10/10/2026, rejeição sem data de produção:
  https://www.contabeis.com.br/noticias/79893/nf-e-na-reforma-campos-de-ibs-e-cbs-e-rejeicoes-em-2026/ ;
  Contábeis, set/2026, perguntas e respostas do Portal Nacional da NFS-e:
  https://www.contabeis.com.br/noticias/79499/nfs-e-sem-ibs-e-cbs-entenda-a-desconformidade/
- Ajuste SINIEF 07/05, texto consolidado no CONFAZ (cláusulas décima segunda, décima segunda-A e
  décima quarta-A): https://www.confaz.fazenda.gov.br/legislacao/ajustes/2005/AJ_007_05

Os textos dos Atos Conjuntos nº 1/2025, 4/2026 e 5/2026 e do Ato Técnico Conjunto nº 1/2026 não
foram abertos: datas e conteúdo vêm das notícias oficiais. Confira o texto antes de citar em
entregável.
