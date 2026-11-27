# Caso A · Rede regional de mídia exterior digital, mid-market

Valuation para venda a comprador estratégico do setor, conduzido em 2026. Este registro guarda só as
**escolhas metodológicas** e as lacunas que a revisão encontrou. O driver de receita, o cálculo de
CapEx por unidade física e os números do cliente são particularidades do negócio e ficam no
checkpoint do engajamento, fora deste repositório público.

## O mandato em uma linha

Laudo em dois cenários sobre um único modelo canônico: conservador (standalone) e de integração com o
comprador. Modelo em Excel com abas de capa, inputs, modelo, outputs e médias setoriais; relatório de
40 slides no template de valuation da casa.

## Escolhas metodológicas

| ID | Decisão | Escolha no caso |
|---|---|---|
| CC-01 | Rota da moeda do WACC | US$ convertido no standalone; R$ direto no cenário do comprador |
| CC-04 | Prêmio de porte | Aplicado por decil no standalone; retirado no cenário do comprador (Damodaran 2015; McKinsey 2012) |
| CC-05 | DLOM | Não aplicado: controle de 100% do capital, comprador estratégico definido |
| CC-06 | Custo da dívida | Spread sintético setorial, abaixo do custo bancário efetivo |
| CC-07 | Estrutura com escudo zero | D/V-alvo setorial com lucro presumido (t = 0) |
| IM-01 | Regime | Lucro presumido no horizonte, com a transição da LC 224/2025 |
| CG-01 | Caixa no capital de giro | Percentual da receita líquida (Koller) no início; depois, caixa zero no giro e todo o caixa na ponte |
| QR-02 | Receita com risco de descontinuidade | Contrato relevante excluído do EBITDA normalizado |
| PC-01 | Atingir meta | Premissa operacional do cenário do comprador calibrada sobre um EV-alvo |
| PC-02 | Sinergias | Embutidas nos drivers operacionais |
| VT-01 | Fonte do múltiplo de saída | Múltiplo de transação no conservador; múltiplo menor, sem fonte documentada, na integração |
| VT-03 | g e RONIC | g diferente entre cenários; RONIC = ROIC médio setorial |
| FK-01 | Convenção de desconto | Meio de ano, com o primeiro ano projetado integral; depois, data-base trimestral com período parcial e meio de período |
| RV-01 | Capítulos | Quatro e apêndice |
| RV-02 | Títulos | Por tópico, em duas linhas |
| PC-03 | Ano corrente parcialmente realizado | Realizado até a data-base × (1 + fator de sazonalidade); drivers a partir do ano seguinte |
| CG-02 | IBS/CBS no capital de giro | Recebível com tributo e passivo em dias antes do split; recebível líquido sem passivo depois |

## O que a revisão encontrou

| Lacuna | Virou na skill |
|---|---|
| EV em data-base anual e dívida líquida de balanço semestral posterior | Gate TF-01 em `revisao-de-modelo` |
| Itens não operacionais fora da ponte sem registro | TF-02 |
| Capital histórico bruto e projetado líquido; NOPAT histórico híbrido | Gates RC-01 e RC-02 |
| Faixa de ±% fixo sem sensibilidade WACC × g | TF-03 |
| Múltiplo de saída sem fonte documentada; peso igual ao da perpetuidade em versões anteriores | VT-01 e VT-02 |
| Sem margem × giro e sem lucro econômico | RO-01 |
| Stress, payout e NOPAT top-down vs. bottom-up não refeitos no cenário final | `revisao-de-modelo`, testes mínimos |
| Premissa por Atingir meta usada direto como cenário | PC-01 (caso reverso) |
| WACC abaixo do custo desalavancado com escudo zero | CC-07 |
| ACTA citada como fonte em slide | `fontes-notas-e-disclosures.md` e gate G4 do manifesto |
| Ano corrente com três quartos realizados projetado por drivers | PC-03 |
| Receita de contrato fora do numerador, mas volume dentro do denominador, inflando o preço por unidade | `ano-corrente-e-sazonalidade.md`, seção 4 |
| Utilização de meio de ano comparada com a de ano cheio | `ano-corrente-e-sazonalidade.md`, seção 5 |
| Receita operacional e contábil divergentes, com critérios de reconhecimento diferentes por ano | `ano-corrente-e-sazonalidade.md`, seção 7 |
| Passivo de IBS/CBS com prazo igual ao PMR | CG-02 |
| IRPJ/CSLL a recolher fora do capital de giro e da ponte | RC-04 |
| Duas versões da base histórica com EBITDA diferente, créditos de revisão contábil e valor fixo no código | Red flags de `qualidade-de-resultados` |
| Ajuste de fechamento contra conta de sócios, fora da DRE | Red flags de `reorganizacao-contabil` e regra 8 da ponte |
| Nota de premissa desatualizada e arquivo-fonte com data de corte anterior à data-base | Checklist de `revisao-de-modelo` |
| EV declarado inalterado sem recálculo forçado | `edicao-e-validacao-do-modelo.md` |
| Numeração de nota duplicada, "0" no lugar de "n.a." e premissa divergente entre slides | Checklist de `relatorio-de-valuation` |

## O que funcionou e ficou como prática

- Revisão independente com recálculo integral das fórmulas e conciliação de centenas de números entre
  modelo e deck, antes do release. Generalizada em `scripts/manifesto_release.py`.
- Dois cenários sobre o mesmo modelo, com seletor, em vez de dois arquivos divergentes.
- Decisões de custo de capital estudadas e fundamentadas em literatura antes de entrar no modelo.
- Auditoria da base histórica contra DRE e balancete de cada ano, com conferência do analista sobre o
  relatório da auditoria.

## Pendências de método

- Citação de Koller, *Valuation*, 7ª ed., cap. 15, sobre prêmio de porte: conferir página em exemplar
  físico.
- Origem do múltiplo de saída do cenário de integração: registrar no checkpoint do engajamento.
