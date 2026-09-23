---
name: contrato-e-aditivo
description: Teste o pedido e o contrato contra a proposta vencedora e controle o crescimento por aditivos. Acionar ao conferir preço, prazo e condição de pagamento do instrumento, ao avaliar pedido emitido depois da entrega, ao apurar o acumulado de aditivos sobre o valor original, ou ao julgar se o aditivo mudou o objeto.
---

# Pedido, contrato e aditivo

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elo 5 do ciclo (`ciclo-ptp` §2). Bloco **PTP.05**.

O instrumento é onde a decisão de compra vira obrigação. Dois riscos dominam, e são de naturezas
opostas: o **pedido emitido tarde demais**, que documenta uma compra que já aconteceu, e o **aditivo
que cresce**, que transforma um contrato pequeno e competido num contrato grande e não competido.

## 1. O pedido contra a proposta vencedora

Confronto de base, item a item, entre a proposta escolhida e o pedido emitido. Quatro campos, e cada
divergência tem leitura própria:

| Campo | Divergência típica | O que costuma ser |
|---|---|---|
| Preço unitário | Centavos, em poucos itens | Digitação manual no pedido. Achado de controle de entrada |
| Preço unitário | Acima da proposta, em todos os itens | Renegociação não documentada, ou proposta trocada depois da escolha |
| Quantidade | Pedido maior que a cotação | O preço foi obtido para um volume e aplicado a outro. A vantagem cotada desaparece |
| Prazo de pagamento | Pedido mais curto que a proposta | Vantagem financeira concedida ao fornecedor sem contrapartida |
| Prazo de entrega | Pedido mais longo | Critério de julgamento fraudado: o fornecedor venceu por prazo que não vai cumprir |

O par 2 de `ciclo-ptp` §4. Faça o confronto em base completa quando a lista de pedidos couber em
planilha, que é o caso em quase todo mandato de mid-market. A mecânica de casar as duas listas está
em `bases-e-conciliacao`.

## 2. Anterioridade do pedido

`PTP.R10`. Em 100% da base, confronte a data do pedido com a **data de entrega** e com a **data de
emissão do documento fiscal**. Três resultados, e os dois últimos são achado:

1. Pedido anterior à entrega e à nota: conforme.
2. Pedido posterior à entrega: a compra foi feita por fora e o pedido é regularização. O recebimento
   não teve pedido contra o qual conferir, e o controle de quantidade e preço não existiu.
3. Pedido posterior à própria nota: o pedido foi emitido **copiando** a nota, e por isso os dois
   sempre fecham. Todo teste de três vias que use esse pedido está contaminado, e vale dizer isso no
   papel de trabalho antes de reportar a conformidade do bloco PTP.07.

Apure o volume e o valor dos pedidos retroativos por comprador, por fornecedor e por área
requisitante. A concentração diz se o problema é de processo ou de uma pessoa, e essa distinção muda
a recomendação.

## 3. O instrumento, quando há contrato

Em compra de serviço continuado, obra e fornecimento recorrente, o pedido não basta. O que se confirma:

| Atributo | O que confirmar |
|---|---|
| Existência e anterioridade | Contrato assinado pelas duas partes antes do início da execução. Serviço prestado antes da assinatura é execução sem instrumento, ainda que paga |
| Alçada e chancela | Aprovação pela alçada competente, registrada, e revisão jurídica ou uso de minuta padrão chancelada |
| Cláusulas mandatórias | Objeto, preço e reajuste, prazo e vigência, obrigações das partes, penalidade por inadimplemento, rescisão, anticorrupção e, em serviço com mão de obra, a exigência de comprovação de encargos |
| Garantias | Quando previstas (retenção, caução, seguro), estão constituídas, vigentes e pelo valor contratado |
| Aderência ao processo de seleção | O contrato reflete a proposta vencedora, e não uma versão renegociada depois da escolha |

**Reajuste.** Reperforme: índice previsto, série e número-índice corretos, data-base e periodicidade
mínima respeitadas, base de aplicação correta, e formalização por termo aditivo ou apostilamento
aprovado em alçada. Reajuste correto na conta e informal no processo continua sendo achado. É o
mesmo teste do lado da receita, com o sinal trocado: aqui o erro custa dinheiro à empresa auditada.

**Cláusula de comprovação de encargos em serviço com mão de obra dedicada.** Sem ela, e sem a
exigência efetiva dos comprovantes a cada medição, a empresa fica exposta à responsabilidade
subsidiária. Teste a exigência **e** a prática: a cláusula existe, e a documentação está sendo pedida
e conferida antes de cada pagamento?

## 4. Aditivo: o contrato que cresce sem competir

`PTP.R11`. O contrato foi competido uma vez, por um valor. Três anos e sete aditivos depois, vale
quatro vezes mais, e a competição que o legitimou é irrelevante.

### A apuração

Para cada contrato vigente no período, monte a linha do tempo:

```
valor original | aditivo 1 (valor, data, objeto) | ... | valor acumulado | % sobre o original
prazo original | prorrogações                    | ... | prazo acumulado | vigência total
```

Cortes:

1. **Percentual acumulado de acréscimo sobre o valor original**, por contrato. Ordene decrescente. Os
   primeiros da lista são o trabalho.
2. **Número de prorrogações e vigência total.** Contrato de doze meses prorrogado seis vezes é um
   contrato de sete anos sem competição, e a comparação do preço dele com o mercado atual costuma ser
   o achado de valor.
3. **Aditivo que muda o objeto.** Compare a descrição do objeto do aditivo com a do instrumento
   original. Acréscimo de escopo que não é desdobramento natural do objeto é contratação nova
   disfarçada: deveria ter tido cotação própria. Este é o corte que exige leitura, não consulta.
4. **Aditivo imediatamente posterior à assinatura.** Acréscimo nos primeiros meses indica que o
   objeto original estava subdimensionado na competição, e a proposta vencedora venceu por um preço
   que nunca foi o preço da necessidade real.
5. **Trilha de alçada do aditivo.** O aditivo foi aprovado pela alçada correspondente ao **valor
   acumulado**, ou só ao valor do próprio aditivo? Aprovar aditivo pela faixa do incremento é a
   versão contratual do fracionamento, e o controle correto é apurar a alçada pelo acumulado.
6. **Aditivo de prazo com preço congelado ou reajustado fora do contrato.** Os dois são achado, por
   razões opostas.

### Como se conclui

Separe o que é acréscimo com justificativa técnica registrada e aprovada do que é acréscimo sem ela,
e quantifique os dois. O ponto não é que aditivo seja irregular: obra e serviço continuado mudam. O
ponto é o **acréscimo sucessivo que dispensa nova competição sem que ninguém tenha decidido isso**, e
a ausência de limite acumulado é a deficiência de desenho que permite o resto.

### Planos A/B/C

- **Plano A**: relação de contratos com valor original, todos os aditivos com data, valor e objeto, e
  a trilha de aprovação de cada um; leitura dos objetos dos contratos de maior acréscimo.
- **Plano B**: sem relação consolidada de aditivos: reconstrua a partir da base de pedidos vinculados
  ao contrato e dos pagamentos por fornecedor, e declare que a reconstrução foi da auditoria.
- **Plano C**: sem controle de contratos (os instrumentos existem em pasta física ou em unidade de
  rede, sem base): conclua pela ausência de gestão de contratos, que é achado próprio, e limite a
  análise aos maiores fornecedores por valor pago no período.
- **Limitação**: *"A apuração de aditivos abrange [N] contratos, [X]% do valor contratado vigente; a
  relação de aditivos foi reconstruída pela auditoria a partir da base de pedidos, na ausência de
  controle consolidado."*

## 5. Adiantamento a fornecedor

Desvio do fluxo principal que não aparece em nenhum teste de três vias, porque o pagamento acontece
antes de existir recebimento e nota. O que se testa: previsão contratual do adiantamento, alçada
específica para concedê-lo, garantia exigida quando o valor é relevante, e principalmente a **baixa
por entrega**. Monte o aging dos adiantamentos em aberto por idade e por fornecedor: adiantamento
antigo sem baixa é ou entrega não registrada, ou dinheiro que saiu e não voltou em bem nenhum.

## O que entregar

1. Confronto proposta vencedora × pedido, campo a campo, com as divergências isoladas e classificadas.
2. Relação de pedidos retroativos, com valor, comprador, fornecedor e área, e a marcação dos que
   contaminam o teste de três vias.
3. Checklist de cláusulas × instrumento para os contratos do escopo, com as ausentes listadas.
4. Reperformance do reajuste: índice, data-base, base de aplicação e formalização.
5. A linha do tempo de aditivos por contrato, com percentual acumulado sobre o original, vigência
   total, mudanças de objeto e a alçada que aprovou cada aditivo.
6. Aging de adiantamentos em aberto, por idade e por fornecedor.
7. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`recebimento-e-pagamento`. O pedido validado aqui é uma das três vias do casamento lá; pedido
retroativo invalida a via, e isso se declara antes de concluir sobre o bloco PTP.07.
