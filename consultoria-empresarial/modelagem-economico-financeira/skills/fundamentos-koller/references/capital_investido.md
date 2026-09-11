# Capital Investido Operacional — Construção Detalhada

## 1. Princípio de Separação

O balanço contábil mistura:
- Ativos operacionais e não operacionais
- Passivos operacionais, dívida financeira e equivalentes de dívida/patrimônio

O Capital Investido (IC) isola apenas os **ativos necessários para operar o negócio**, financiados por todas as fontes (dívida + equity).

---

## 2. Capital de Giro Operacional Líquido

```
Ativo Circulante Operacional:
(+) Caixa mínimo operacional (≈ 1–2% da receita, ou saldo mínimo para operações)
    [NÃO inclui caixa excedente — este é ativo não operacional]
(+) Contas a receber (clientes)
(+) Estoques
(+) Outros ativos circulantes operacionais (adiantamentos, despesas antecipadas operacionais)

Passivo Circulante Operacional:
(−) Fornecedores
(−) Salários e encargos a pagar
(−) Impostos operacionais a pagar (IR corrente a pagar, PIS/COFINS, ICMS)
(−) Adiantamentos de clientes
(−) Outras obrigações operacionais

= Capital de Giro Operacional Líquido (CGOL)
```

**O que NÃO entra no CGOL:**
- Caixa excedente (acima do mínimo operacional) → ativo não operacional
- Parcelas correntes de dívidas financeiras → dívida financeira
- IR diferido corrente → equivalente de patrimônio
- Parcelas correntes de arrendamentos → equivalente de dívida

---

## 3. Ativos de Longo Prazo Operacionais

```
(+) Imobilizado líquido (PP&E) — terrenos, edificações, máquinas, veículos
(+) Ativo de Direito de Uso (ROU) líquido — CPC 06 R2 / IFRS 16
    [= valor presente dos pagamentos futuros de arrendamento, menos amortizações]
(+) Intangíveis operacionais (software, licenças, marcas desenvolvidas internamente)
(−) Amortização acumulada dos intangíveis operacionais
(+) Outros ativos operacionais de longo prazo (depósitos caução, adiantamentos LP operacionais)
(−) Outros passivos operacionais de longo prazo (provisões para garantias, receita diferida operacional LP)

= Ativos Operacionais Líquidos de Longo Prazo
```

---

## 4. Capital Investido Operacional (excl. goodwill)

```
CGOL
+ Ativos Operacionais Líquidos de Longo Prazo
= IC (excl. goodwill)
```

---

## 5. Tratamento do Goodwill e Intangíveis Adquiridos

### Goodwill reconhecido (pós-CPC 15 / IFRS 3)

```
(+) Goodwill bruto contábil
(+) Goodwill amortizado acumulado (aquisições realizadas antes do IFRS — equivalente de patrimônio)
    [necessário para comparabilidade histórica]
= Goodwill ajustado
```

### Intangíveis adquiridos em M&A (marcas, carteira de clientes, tecnologia)

- Estes **não** entram no IC operacional — são alocação do preço de compra (PPA)
- Para ROIC excl. goodwill: excluir intangíveis adquiridos e goodwill
- Para ROIC incl. goodwill: incluir ambos

**Regra prática em M&A mid-market Brasil:**
Em transações com PPA não realizado ou simplificado, tratar goodwill + intangíveis adquiridos como bloco único.

---

## 6. Equivalentes de Dívida (Debt Equivalents — DE)

São passivos que funcionam economicamente como dívida, mas são classificados fora das linhas de dívida financeira no balanço.

| Item | Tratamento | Relevância Mid-Market BR |
|---|---|---|
| Passivo de arrendamento (CPC 06 R2) | DE — subtrair do EV para chegar ao equity | Alta — desde 2019 obrigatório |
| Provisões de reestruturação | DE — se material e provável | Média |
| Obrigações previdenciárias não cobertas (CPC 33) | DE — deficit atuarial | Baixa — raro em mid-market |
| Passivos contingentes (provisão para processos) | Analisar caso a caso | Alta — comum em BR |
| Receita diferida (se exigir entrega futura significativa) | Pode ser DE | Baixa |

**Passivos de arrendamento CPC 06 R2:**
```
Passivo de arrendamento (curto + longo prazo) = equivalente de dívida
Ativo ROU líquido = entra no IC operacional (já incluso no item 3 acima)

Validação: IC(financiamento) deve incluir passivo de arrendamento como DE
           IC(operacional) deve incluir ativo ROU líquido
```

---

## 7. Equivalentes de Patrimônio (Equity Equivalents — EE)

São reservas contábeis que representam capital próprio econômico mas são classificadas fora do PL contábil.

| Item | Tratamento | Relevância Mid-Market BR |
|---|---|---|
| Passivo de IR diferido líquido | EE — adicionar ao PL | Alta |
| Ativo de IR diferido | Diminui EE (ou é ativo não operacional se de origem financeira) | Média |
| Goodwill amortizado acumulado (pré-IFRS) | EE | Baixa (histórico antigo) |
| Reservas de AFAC (adiantamentos para futuro aumento de capital) | EE | Média — comum em empresas fechadas BR |

**IR diferido:**
```
Passivo de IR diferido − Ativo de IR diferido = Passivo IR diferido líquido

Se positivo (passivo > ativo): equivalente de patrimônio → adicionar ao PL no IC
Se negativo (ativo > passivo): ativo não operacional → excluir do IC e tratar separadamente
```

---

## 8. Perspectiva de Financiamento (Total de Fundos Investidos)

```
Dívida financeira (CP + LP)
(+) Equivalentes de dívida (leases, reestruturação, previdência etc.)
= Dívida Total e Equivalentes

(+) Patrimônio líquido contábil
(+) Equivalentes de patrimônio (IR diferido, goodwill amortizado acumulado)
= Equity Total e Equivalentes

Dívida Total + Equity Total = Total de Fundos Investidos (TFI)

TFI = IC (operacional, incl. goodwill) + Ativos Não Operacionais
```

**Ativos Não Operacionais Comuns:**
- Caixa excedente e aplicações financeiras
- Investimentos em subsidiárias não consolidadas
- Imóveis não utilizados nas operações
- Ativos de pensão pré-pagos

---

## 9. Validação e Checklist de IC

- [ ] CGOL exclui caixa excedente e inclui apenas caixa mínimo operacional?
- [ ] Ativo ROU (CPC 06 R2) está incluído no IC operacional?
- [ ] Passivo de arrendamento está nas perspectivas de financiamento como DE?
- [ ] IR diferido foi classificado corretamente (EE ou ativo não operacional)?
- [ ] Goodwill e intangíveis adquiridos têm tratamento consistente entre períodos?
- [ ] IC(operacional) ≈ IC(financiamento) − ativos não operacionais?
- [ ] O IC é calculado em base média (início + fim / 2) para o ROIC?

---

## 10. ROIC: Com e Sem Goodwill

```
ROIC (excl. goodwill) = NOPLAT / IC médio (excl. goodwill e intangíveis adquiridos)
→ Mede a eficiência operacional intrínseca do negócio (independente do preço pago)

ROIC (incl. goodwill) = NOPLAT / IC médio (incl. goodwill e intangíveis adquiridos)
→ Mede o retorno sobre o capital total deployed pelo acquirer
→ Relevante para avaliar criação de valor em aquisições (compara com WACC)
```

Em análises de M&A, o **spread ROIC(incl. goodwill) vs. WACC** determina se a aquisição criou valor.
