# NOPLAT — Construção Detalhada e Casos Especiais

## 1. Ponto de Partida: Reorganização da DRE

A DRE contábil mistura resultado operacional, não operacional e efeitos da estrutura de capital. O objetivo é isolar o lucro operacional puro.

```
Receita líquida de vendas
(−) CPV (excl. depreciação/amortização se quiser chegar pelo EBITDA)
(−) Despesas com vendas
(−) Despesas gerais e administrativas
(−) Depreciação e amortização operacional
(+) Adição: juros implícitos de arrendamentos capitalizados (CPC 06 R2)
    [porque o aluguel contábil é substituído por D&A + juros; só D&A é operacional]
(−) Amortização de intangíveis adquiridos (excluir — vai para EBITA, não EBIT)
= EBITA (Earnings Before Interest, Tax, and Amortization of acquired intangibles)
```

**Por que EBITA e não EBITDA?**
- A depreciação do PP&E é uma despesa operacional real (representa consumo de ativos).
- Usar EBITDA como proxy de FCF superestima a caixa disponível para reinvestimento.
- Koller usa EBITA. Para fins de M&A mid-market, EBITDA é aceito como proxy, mas o ROIC correto é calculado via NOPLAT/EBITA.

---

## 2. Impostos Operacionais Ajustados

Objetivo: calcular o imposto que a empresa pagaria se fosse 100% financiada por equity, sem receitas/despesas não operacionais.

```
Imposto de Renda + CSLL reportados na DRE
(+) IR/CSLL sobre despesas financeiras (= despesa financeira bruta × alíquota efetiva)
    [desfaz o escudo fiscal da dívida]
(−) IR/CSLL sobre receitas não operacionais líquidas (= receita n.o. × alíquota ef.)
    [retira o efeito de itens não recorrentes/não operacionais]
= Impostos Operacionais Ajustados
```

**Alíquota efetiva:** usar IR/CSLL total reportado / Resultado antes do IR, excluindo efeitos de diferidos se distorcerem. No Brasil, alíquota nominal combinada IR+CSLL = 34%.

**NOPLAT = EBITA − Impostos Operacionais Ajustados**

---

## 3. Casos Especiais no NOPLAT

### 3.1 Arrendamentos (CPC 06 R2 / IFRS 16)

Antes da capitalização, o aluguel operacional era linha única na DRE (despesa operacional).
Após CPC 06 R2, a empresa reconhece:
- D&A sobre o ativo de direito de uso (ROU)
- Despesa financeira sobre o passivo de arrendamento

**Impacto no NOPLAT:**
- A D&A do ROU já está no resultado — permanece operacional ✓
- A despesa financeira deve ser **excluída** do NOPLAT (é financiamento)
- No EBITA, adicionar de volta a despesa financeira de arrendamentos

```
EBITA = EBIT contábil (pós-CPC 06 R2)
      + Despesa de juros de arrendamentos (linha "Encargos financeiros — arrendamentos")
      − Amortização de intangíveis adquiridos
```

**No Capital Investido:** o passivo de arrendamento é um **equivalente de dívida** — entra em IC pela perspectiva de financiamento, e o ativo ROU líquido de D&A acumulada entra pela perspectiva operacional.

### 3.2 Despesas de P&D Capitalizadas

Koller recomenda tratar P&D como investimento de capital (não despesa).

```
Ajuste no NOPLAT:
(+) Despesa de P&D do período (adicionar de volta — não é despesa operacional corrente)
(−) Amortização do P&D capitalizado acumulado

Ajuste no Capital Investido:
(+) P&D capitalizado bruto acumulado
(−) Amortização acumulada de P&D capitalizado
= P&D capitalizado líquido → inclui em IC
```

*Aplicação mid-market Brasil:* geralmente irrelevante; usar quando a empresa tem investimentos contínuos em desenvolvimento de produto com vida útil definível.

### 3.3 Receitas e Despesas Não Recorrentes

- **Ganhos/perdas na venda de ativos:** excluir do NOPLAT (não operacional)
- **Provisões de reestruturação:** excluir do NOPLAT; o passivo provisão entra como equivalente de dívida no IC até ser realizado
- **Receita financeira sobre caixa excedente:** excluir do NOPLAT
- **Equivalentes de caixa aplicados:** excluir do IC (são ativos não operacionais)

### 3.4 Stock Options / Remuneração Baseada em Ações

Tratar como despesa operacional no NOPLAT (já é exigido por IFRS 2 / CPC 10). Nenhum ajuste necessário além do que já está na DRE.

No IC: não inclui os efeitos não realizados de planos de stock option em aberto.

### 3.5 Imposto Diferido Ativo/Passivo

- **Passivo de imposto diferido líquido:** é um **equivalente de patrimônio** — inclui no IC pela perspectiva de financiamento (não é dívida, mas também não é operacional).
- Na DRE: a variação no imposto diferido geralmente está embutida na linha de IR. Para o NOPLAT, usar o imposto corrente + efeitos operacionais do diferido. Na prática, Koller aceita usar o imposto total (corrente + diferido) como base e ajustar apenas pelo escudo fiscal e itens não operacionais.

---

## 4. Reconciliação NOPLAT ↔ Lucro Líquido

```
NOPLAT
(+) Despesas financeiras líquidas após impostos [= despesa financeira × (1 − alíq.)]
(+) Receitas não operacionais após impostos
(−) Variação em equivalentes de patrimônio (ex: variação no imp. diferido)
= Lucro Líquido Contábil
```

Esta reconciliação é útil para auditar o cálculo.

---

## 5. Crescimento do NOPLAT

```
g_NOPLAT = Crescimento de receita × (1 + ΔMargem)

Taxa de reinvestimento (IR):
IR = Investimento Líquido em IC / NOPLAT = g / ROIC
```

Se ROIC for constante: crescimento de NOPLAT = crescimento de receita (margem estável).
Se margem expande: NOPLAT cresce mais rápido que receita — fonte de valor via eficiência operacional.

---

## 6. Checklist de Qualidade do NOPLAT

Antes de usar em valuation ou ROIC, verificar:

- [ ] EBITA está livre de receitas/despesas financeiras?
- [ ] Amortização de intangíveis adquiridos (M&A) foi excluída para chegar ao EBITA?
- [ ] Impostos operacionais foram recalculados (não usar IR reportado diretamente)?
- [ ] Itens não recorrentes (venda de ativos, reestruturação) foram excluídos?
- [ ] Juros de leases CPC 06 R2 foram adicionados de volta ao EBITA?
- [ ] Receita financeira de caixa excedente foi excluída?
- [ ] O NOPLAT é consistente com o IC (mesmo perímetro de ativos)?
