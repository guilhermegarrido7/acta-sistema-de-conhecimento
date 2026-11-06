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
| CG-01 | Caixa mínimo | Percentual da receita líquida (Koller) |
| QR-02 | Receita com risco de descontinuidade | Contrato relevante excluído do EBITDA normalizado |
| PC-01 | Atingir meta | Premissa operacional do cenário do comprador calibrada sobre um EV-alvo |
| PC-02 | Sinergias | Embutidas nos drivers operacionais |
| VT-01 | Fonte do múltiplo de saída | Múltiplo de transação no conservador; múltiplo menor, sem fonte documentada, na integração |
| VT-03 | g e RONIC | g diferente entre cenários; RONIC = ROIC médio setorial |
| FK-01 | Convenção de desconto | Meio de ano, com o primeiro ano projetado integral |
| RV-01 | Capítulos | Quatro e apêndice |
| RV-02 | Títulos | Por tópico, em duas linhas |

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

## O que funcionou e ficou como prática

- Revisão independente com recálculo integral das fórmulas e conciliação de centenas de números entre
  modelo e deck, antes do release. Generalizada em `scripts/manifesto_release.py`.
- Dois cenários sobre o mesmo modelo, com seletor, em vez de dois arquivos divergentes.
- Decisões de custo de capital estudadas e fundamentadas em literatura antes de entrar no modelo.

## Pendências de método

- Citação de Koller, *Valuation*, 7ª ed., cap. 15, sobre prêmio de porte: conferir página em exemplar
  físico.
- Origem do múltiplo de saída do cenário de integração: registrar no checkpoint do engajamento.
