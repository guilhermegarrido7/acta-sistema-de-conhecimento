---
name: contrato-e-cadastro
description: Teste a formalização do contrato e o seu reflexo no sistema, do instrumento assinado à tabela de preços e ao reajuste. Acionar ao avaliar cláusulas mandatórias e alçadas, ao conferir cadastro, vínculo e bloqueio de alocação sem contrato vigente, ao confrontar preço unitário praticado com o contratual, ou ao validar reajuste por índice.
---

# Contrato, cadastro e preço

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elos 1 e 2 do ciclo (`ciclo-da-receita` §2). Blocos **REC.01**, **REC.02** e **REC.03**.

## Por que este elo vem primeiro

O contrato é a **fonte do critério** de todos os testes seguintes. Sem o preço unitário vigente não
há confronto de medição; sem a cláusula de glosa não há como julgar a glosa aplicada; sem a data-base
de reajuste não há como julgar o índice. Auditar medição antes de fixar o critério contratual é
construir conclusão sobre referência que ainda pode mudar.

Consequência prática: **leia o contrato inteiro antes de pedir base**. A lista do que pedir sai da
leitura, não de um checklist genérico.

## 1. REC.01 — Avaliação contratual

### O que se testa

| Atributo | O que confirmar |
|---|---|
| Existência e vigência | Instrumento assinado pelas duas partes, com prazo vigente no período auditado, e aditivos identificados em sequência. |
| Anterioridade | **Assinatura antes do início da prestação.** Serviço prestado antes da assinatura é prestação sem direito formalizado, ainda que faturado e recebido. |
| Alçada | Evidência de aprovação pela alçada competente — não a assinatura, que é o ato final, mas a aprovação que a autoriza. |
| Chancela jurídica | Registro de revisão pela área jurídica, ou uso de minuta padrão já chancelada. |
| Cláusulas mandatórias | Objeto, preço e forma de reajuste, prazo, glosa e penalidade, rescisão, e cláusula anticorrupção. |

Monte o teste como **checklist de cláusulas × instrumento**, linha a linha, com a referência da
cláusula encontrada. Cláusula ausente é achado de desenho, não de operação.

### Quando o contrato decorre de processo licitatório

Se o instrumento já estava assinado quando o trabalho começou e o escopo não inclui o processo de
contratação, a avaliação é **de cláusulas e chancelas vigentes**, não de aderência ao edital.
Declare isso: um leitor do papel de trabalho presume o contrário.

Nesse caso, o edital e o projeto básico assumem o papel que a proposta comercial teria — são eles
que trazem a planilha de preços, os níveis de serviço e os critérios de glosa. Peça os dois.

### Planos A/B/C

- **Plano A** — instrumento assinado + evidência de aprovação em alçada + chancela jurídica;
  checklist de cláusulas conferido linha a linha.
- **Plano B** — sem a trilha de aprovação: ateste as cláusulas presentes no instrumento e registre a
  ausência da trilha como **deficiência de desenho atual**, não como ressalva de escopo.
- **Plano C** — só cópia não assinada: indagação formal ao mandato e limitação declarada.
- **Limitação** — *"Avaliamos as cláusulas do contrato vigente; não nos foi disponibilizada a trilha
  de aprovação por alçada nem a evidência de chancela jurídica."*

## 2. REC.02 — Cadastro do contrato no sistema e aditivos

O contrato só produz controle se o sistema o conhece. Três camadas, em ordem de força:

1. **Existência do cadastro** — o contrato consta, vinculado ao cliente correto, com vigência e
   objeto coerentes com o instrumento.
2. **Parametrização de valor** — o valor cadastrado é o valor contratual, e não um valor simbólico.
   Cadastro por valor simbólico existe, aparece na tela e **não parametriza nada**: não limita
   faturamento, não sinaliza estouro, não sustenta consumo. É achado próprio.
3. **Bloqueio operante** — o sistema **impede** alocar recurso, emitir medição ou faturar sem
   contrato vigente cadastrado. Peça a **demonstração em tela** da tentativa bloqueada. Bloqueio
   declarado em política não é bloqueio operante, e a diferença entre os dois é o achado.

**Aditivos.** Todo aditivo de prazo, valor, escopo ou preço tem de estar refletido no cadastro, com a
mesma trilha de alçada do contrato original. Aditivo assinado e não cadastrado produz faturamento
contra parâmetro vencido — sintoma clássico: divergência de PU que começa exatamente na competência
seguinte à do aditivo.

### Planos A/B/C

- **Plano A** — tela do sistema com o contrato vinculado e pelo valor correto, mais o teste do
  bloqueio demonstrado em tela.
- **Plano B** — cadastro existe mas por valor simbólico: ateste a existência e aponte que o valor não
  parametriza a alocação nem o faturamento.
- **Plano C** — sem acesso ao sistema: relatório de contratos extraído pelo cliente, com declaração
  de quem extraiu, quando e de qual módulo. A conclusão passa a ser de existência, não de desenho.
- **Limitação** — *"O contrato consta cadastrado; o valor registrado é simbólico e não parametriza a
  alocação. O bloqueio de faturamento sem contrato vigente não foi demonstrado em tela."*

## 3. REC.03 — Preço unitário, tabela e reajuste

### Preço

Confronte, competência a competência, o **PU faturado contra o PU contratual vigente**. É confronto
de base, não amostral: a lista de itens de um contrato de serviço é contável. A mecânica de casar as
duas listas está em `bases-e-conciliacao`.

Três padrões de divergência, com leituras diferentes:

| Divergência | O que costuma ser |
|---|---|
| Centavos, em poucos itens | Digitação manual na medição ou na nota. Achado de controle de entrada. |
| Percentual constante em todos os itens, a partir de uma competência | Reajuste aplicado sem formalização, ou aplicado antes da data-base. |
| Um item só, valor muito diferente | Item errado da tabela, ou item fora de contrato sendo faturado. |

**Nem todo mandato tem tabela de preços comercial.** Quando há cliente único e o preço nasce da
planilha contratual ou do edital, não existe política de precificação a testar — o teste é de
aderência à planilha contratual. Diga isso no papel de trabalho, senão o bloco parece incompleto.

### Reajuste

O reajuste é o teste mais reperformável do elo e o mais frequentemente errado. Reperforme:

1. **Índice**: é o índice previsto no contrato, na série e no número-índice corretos? Índice
   substituto aplicado sem aditivo é aplicação fora do contrato.
2. **Data-base e periodicidade**: a contagem parte da data contratual e respeita a periodicidade
   mínima? Reajuste antecipado é receita reconhecida a maior no intervalo.
3. **Base de aplicação**: incide sobre quais itens? Item novo, incluído por aditivo, costuma ter
   data-base própria e não acompanha a do contrato original.
4. **Formalização**: existe apostilamento, termo aditivo ou registro equivalente aprovado em alçada?
   Reajuste correto na conta e informal no processo continua sendo achado.

### Planos A/B/C

- **Plano A** — proposta ou tabela vigente + memória de cálculo do reajuste pelo índice contratual;
  confronto PU faturado × PU vigente em 100% dos itens, competência a competência.
- **Plano B** — sem tabela comercial: use a planilha de preços do contrato ou do edital como
  referência, e a cláusula de reajuste como critério, reperformando o índice você mesmo.
- **Plano C** — proposta/planilha não disponibilizada: o confronto de PU trava. Indague formalmente,
  registre a data do pedido e declare. Não estime o preço a partir da própria nota — isso é
  reconstruir o critério a partir do que se queria testar.
- **Limitação** — *"O confronto de preço unitário foi feito contra a planilha contratual; não há
  tabela de preços comercial aplicável a cliente único. A memória de reajuste não foi
  disponibilizada; o índice foi reperformado pela auditoria a partir da série pública."*

## 4. Estruturas contratuais que mudam o teste

Aparecem com frequência em contratos de serviço continuado. **São exemplos de estrutura, não padrão
de mercado nem cláusula de um contrato específico**: os parâmetros, pesos e percentuais variam de
contrato para contrato, e o auditor lê o contrato do mandato antes de calcular qualquer coisa.

- **Índice de desempenho composto.** O valor a receber é modulado por um índice que pondera
  indicadores de qualidade, de execução e de atendimento ao usuário. A estrutura é
  `índice = Σ (peso_i × indicador_i)`, e um fator de modulação aplica esse índice ao valor medido,
  normalmente dentro de uma faixa contratada. **Os indicadores, os pesos e a faixa são cláusula do
  contrato** — leia-os antes de reperformar, e reperforme a partir dos indicadores-fonte, nunca a
  partir do índice já calculado pelo cliente.
- **Take-or-pay.** Cobra-se um percentual contratual do volume contratado e não retirado pelo
  cliente. **O percentual é a própria base da conta** e varia por contrato: confirme-o no instrumento
  vigente antes de calcular, e apure separadamente cobrança a menor, a maior e ausência de cobrança.
- **Preço variável por qualidade.** Quando o preço depende de um atributo apurado do produto (poder
  calorífico, teor, grau), o atributo é um **multiplicador oculto**: erro nele não aparece em
  conferência de quantidade nem de tabela, só em reperformance do preço. Exija o laudo por
  competência e reperforme.
- **Quantidade fixa contratada.** Quando o contrato fixa a quantidade mensal, todo desvio de produção
  tem destino obrigatório: produção acima exige evidência da venda do excedente, produção abaixo
  exige as tratativas de compra da falta. Excedente sem venda evidenciada é receita não capturada.

## O que entregar

1. Checklist de cláusulas × instrumento, com a referência de cada cláusula encontrada e a lista das
   ausentes.
2. Evidência de alçada e de chancela jurídica, ou a declaração de ausência.
3. Tela do cadastro do contrato, com valor e vínculo, e o resultado do teste do bloqueio.
4. Confronto PU faturado × PU contratual vigente, 100% dos itens, com as divergências isoladas e
   classificadas.
5. Reperformance do reajuste: índice, data-base, base de aplicação, formalização.
6. A lista do que não foi possível testar, com a limitação redigida para a aba Critérios.

## Próximo passo

`medicao-e-aceite`. O preço unitário fixado aqui é o critério do confronto lá — se o critério não
fechou, o teste de medição não se sustenta e o programa volta a `programa-de-testes`.
