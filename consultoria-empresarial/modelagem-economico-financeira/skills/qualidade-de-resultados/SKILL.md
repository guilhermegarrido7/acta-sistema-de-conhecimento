---
name: qualidade-de-resultados
description: Normalizar EBITDA em quatro famílias de ajuste — não recorrentes, pró-forma, contábeis e run-rate — e produzir a tabela de add-backs auditável. Acionar ao normalizar EBITDA, ao discutir add-backs com o vendedor, ao avaliar qualidade de resultados, ou ao defender o EBITDA de referência diante do comprador.
---

# Qualidade de resultados — o EBITDA que se defende

## Papel desta skill

**Oráculo. Não escreve na planilha.** Direciona quais ajustes fazer, contesta os que não se
sustentam, e formata a tabela de add-backs. Quem digita é o analista.

Fundamento: skill `fundamentos-koller`, reference `contexto_brasil_cpc.md` (seção de normalização
Brasil) e `ma_e_multiplos.md` (normalização para M&A).

## Por que esta é a etapa de maior alavancagem do mandato

O EBITDA normalizado multiplicado pelo múltiplo **é o preço**. Um add-back de R$ 500 mil em EBITDA a
8,0x vale R$ 4 milhões de enterprise value. Nenhuma outra hora de trabalho no projeto tem essa
alavancagem — e nenhuma outra é tão atacada na due diligence.

Daí a regra que governa tudo aqui:

> **Todo add-back tem de sobreviver a um comprador hostil com acesso ao balancete.**

Um add-back que o comprador derruba não custa só o valor dele: custa credibilidade em todos os
outros. Melhor entregar um EBITDA normalizado menor e inteiramente defensável do que um maior que
será negociado para baixo item por item, com o vendedor assistindo.

## As quatro famílias

O modelo da casa organiza a normalização em quatro blocos. A distinção não é burocrática: cada
família tem um ônus de prova diferente e é atacada de forma diferente.

### Família 1 — Não recorrentes

Eventos que aconteceram e não se repetem. Ônus de prova: **baixo a médio**. É a família mais aceita.

| Ajuste | Sinal | Cuidado |
|---|---|---|
| Ganho/perda na venda de ativo | Remover | Se a empresa vende ativo todo ano, é recorrente. Cheque os 3 anos. |
| Despesa de reestruturação | Somar de volta | Demissão em massa, fechamento de unidade. Precisa de rescisões e atas. |
| Multa, autuação, sinistro | Somar de volta | Autuação recorrente indica processo mal controlado — o comprador vai tratar como custo do negócio. |
| Perda por sinistro não coberto | Somar de volta | Incêndio, enchente. Cheque a apólice e o laudo. |
| Constituição ou reversão de provisão | Remover o efeito | Reversão de provisão infla EBITDA sem caixa. Muito comum e muito atacado. |
| Despesa jurídica de evento único | Somar de volta | Não a assessoria jurídica recorrente. |

**Teste de recorrência:** olhe os três anos. Se o "não recorrente" aparece em dois deles, ele é
recorrente com nome diferente. Esse é o teste que o comprador vai aplicar, então aplique você
primeiro.

### Família 2 — Pró-forma (normalização de empresa familiar)

Ajustes que refletem como a empresa opera **sob um dono profissional**. Ônus de prova:
**médio a alto**. É a família mais valiosa em mid-market fechado brasileiro e a mais contestada.

| Ajuste | Como sustentar |
|---|---|
| Pró-labore acima do mercado | Compare com salário de mercado para a função. **Substitua, não elimine**: se o sócio é o diretor comercial de fato, o comprador vai ter de contratar alguém. Add-back = pró-labore pago − custo de mercado do cargo. |
| Familiares na folha sem função | Precisa de organograma e de quem faz o que. Se o filho é o gerente de operações, não é add-back. |
| Despesas pessoais na empresa | Veículo de uso pessoal, viagem, plano de saúde familiar, cartão. Documente conta a conta com o balancete analítico. |
| Aluguel de imóvel do sócio fora de mercado | Ajuste para valor de mercado, com laudo ou pesquisa. Se o imóvel entra na transação, o tratamento é outro — confirme a estrutura. |
| Contrato não *arm's length* com parte relacionada | Compra de insumo de empresa do sócio a preço não de mercado. Precisa do preço de mercado comprovado. |
| Serviço prestado por empresa do grupo sem custo | Ajuste **negativo**: se o comprador vai ter de pagar por isso, o EBITDA cai. |

**A honestidade que protege o mandato:** a família pró-forma tem ajustes nos dois sentidos. Um
valuation que só traz add-backs positivos sinaliza ao comprador que a normalização é peça de venda,
não análise. Encontrar e declarar um ajuste negativo compra credibilidade para os positivos.

### Família 3 — Contábeis

Efeitos de política contábil, não de operação. Ônus de prova: **baixo**, mas exige coerência.

| Ajuste | Nota |
|---|---|
| IFRS 16 / CPC 06 R2 | Se o alvo capitaliza lease e o comparável não (ou vice-versa), o EBITDA não é comparável. Padronize alvo e comparáveis. Ver `reorganizacao-contabil`. |
| Equivalência patrimonial | Fora do EBITDA operacional — é resultado de participação. |
| Depreciação acelerada ou incentivada | Não afeta EBITDA, mas afeta EBIT e NOPAT. Relevante ali, não aqui. |
| Mudança de critério de reconhecimento de receita | Se houve mudança no período, a série histórica não é comparável. Reexprima. |
| Capitalização de despesa que deveria ser custo | Infla EBITDA e o imobilizado. Verifique o roll-forward de PP&E. |

### Família 4 — Run-rate

Ajustes que projetam o presente para o ano cheio. Ônus de prova: **alto**. É a família mais
agressiva e a que o comprador aceita menos — frequentemente empurrada para earn-out.

| Ajuste | O que exigir antes de aceitar |
|---|---|
| Aquisição feita no meio do ano | DRE da adquirida nos meses anteriores. Só então anualize. |
| Contrato novo já assinado | **Contrato assinado**, com preço e volume, e data de início. Proposta ou LOI não é run-rate. |
| Redução de custo já implementada | A implementação tem de estar concluída e visível nos últimos meses. Plano de redução não conta. |
| Aumento de preço já praticado | Notas fiscais dos meses pós-aumento. |
| Unidade nova em ramp-up | Perigoso. Anualizar ramp-up presume maturidade que não existe. Prefira tratar como projeção, não como normalização. |

**Regra de fronteira:** run-rate normaliza o que **já é fato** e apenas não completou 12 meses.
Qualquer coisa que dependa de execução futura pertence à projeção (skill `projecao-e-cenarios`), não
ao EBITDA histórico. Misturar os dois é o erro que faz o comprador desconfiar do modelo inteiro — e
com razão, porque é dupla contagem: o crescimento entra no EBITDA base *e* na taxa de crescimento.

## A tabela de add-backs

Formato que se defende em due diligence. Uma linha por ajuste, nunca agrupada:

| Ano | Família | Ajuste | Valor (R$ mil) | Evidência | Recorrência | Status |
|---|---|---|---|---|---|---|
| 2024 | Não recorrente | Perda por sinistro no galpão | +420 | Laudo + apólice | Único | Sustentado |
| 2024 | Pró-forma | Pró-labore acima de mercado (2 sócios) | +680 | Folha + pesquisa salarial | Recorrente | Sustentado |
| 2024 | Pró-forma | Serviço de TI prestado pela holding sem cobrança | −150 | Contrato ausente | Recorrente | Sustentado |
| 2024 | Run-rate | Contrato assinado em out/24 | +310 | Contrato + primeira NF | A confirmar | Discutível |

Colunas que não são decorativas:

- **Evidência** — o documento específico, não "conforme informado pela empresa". Add-back sem
  documento é add-back que cai.
- **Recorrência** — se o ajuste se repete todo ano, ele muda o EBITDA de todos os anos, não só de um.
- **Status** — *sustentado* vs. *discutível*. Marcar o que é discutível você mesmo é o que permite
  negociar de posição forte: você já sabe o que vai ceder.

Ao final: **EBITDA reportado → EBITDA normalizado**, com o total por família e o percentual de
ajuste sobre o reportado.

## O termômetro do percentual de ajuste

O ajuste total como percentual do EBITDA reportado é lido pelo comprador como sinal:

- **até ~10%** — normal em empresa familiar, passa sem atrito.
- **10% a 25%** — esperado em mid-market brasileiro com governança familiar. Exige tabela impecável.
- **acima de ~30%** — o comprador vai questionar se o negócio de fato gera o que se afirma. Não
  significa que está errado, significa que a carga de prova é integral e que a estrutura da
  transação provavelmente vai migrar para earn-out.
- **acima de ~50%** — o EBITDA normalizado deixa de ser normalização e passa a ser reconstrução do
  negócio. Alerte o usuário explicitamente: o risco de perda de credibilidade supera o ganho de
  preço, e vale considerar apresentar o EBITDA reportado com os ajustes como upside separado.

Esses são limiares de leitura de mercado, não regra contábil.

## Red flags de qualidade de resultados

Sinais de que o EBITDA reportado já é frágil antes de qualquer ajuste:

- **Receita concentrada** — um cliente acima de 20% da receita, ou os cinco maiores acima de 60%.
- **Contas a receber crescendo acima da receita** e aging deteriorando: pode haver receita
  reconhecida que não vira caixa.
- **Estoque crescendo acima do custo** — obsolescência não provisionada.
- **Margem que salta sem explicação operacional** entre exercícios.
- **Fechamento de dezembro descolado** dos outros meses — indício de ajuste de fechamento.
- **Provisão para devedores duvidosos ausente** ou irrisória numa carteira pulverizada.
- **Capitalização crescente** de despesas no imobilizado.
- **Contabilidade trocada de escritório** no período analisado — a série pode não ser comparável.
- **Diferença entre a DRE contábil e a DRE gerencial** que a empresa usa para decidir. Peça as duas
  e reconcilie: a diferença é sempre informativa.

## O que perguntar ao usuário

- Qual ano é o **EBITDA de referência** da transação: o último fechado, o LTM, ou o run-rate? A
  escolha muda o preço e precisa ser explícita no deck.
- Os add-backs já foram discutidos com o vendedor? Add-back que o próprio vendedor não sabe explicar
  numa reunião é passivo, não ativo.
- Há due diligence contábil contratada pelo comprador prevista? Se sim, calibre o rigor para esse
  nível desde já.

## O que entregar

1. A tabela de add-backs completa, por ano, por família, com evidência e status.
2. A ponte EBITDA reportado → normalizado, com o percentual de ajuste.
3. A lista de red flags de qualidade de resultados, com a leitura de cada uma.
4. **A lista dos ajustes que você recomendou NÃO fazer**, e por quê. Tem valor duplo: protege o
   mandato e mostra ao vendedor que a normalização foi analítica.

## Próximo passo

`diagnostico-de-roic` — o EBITDA normalizado alimenta o NOPAT, e é ali que se vê se a empresa cria
valor. Depois, `projecao-e-cenarios`, tomando cuidado para não recontar o run-rate.
