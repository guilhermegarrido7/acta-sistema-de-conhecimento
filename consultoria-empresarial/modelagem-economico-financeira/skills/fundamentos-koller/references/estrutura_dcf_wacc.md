# Estrutura do DCF, WACC e Valor Terminal

## 1. Enterprise DCF — Fluxo Completo

```
Período Explícito (5–10 anos)
├── FCF₁, FCF₂, ... FCFₙ descontados ao WACC
└── VP(FCFs) = Σ FCFₜ / (1+WACC)ᵗ

Período Pós-Explícito
├── Valor Terminal (VT) calculado ao final do período explícito
└── VP(VT) = VT / (1+WACC)ⁿ

Valor das Operações = VP(FCFs) + VP(VT)
(+) Ativos Não Operacionais (caixa excedente, investimentos)
= Enterprise Value (EV)
(−) Dívida financeira e equivalentes de dívida (valor de mercado ou contábil)
(−) Passivos de arrendamento CPC 06 R2 (valor contábil do passivo)
(−) Outras obrigações previdenciárias não cobertas
= Equity Value
```

---

## 2. Valor Terminal

### 2a. Fórmula de Crescimento em Perpetuidade (Koller preferido)

```
VT = NOPLATₙ₊₁ × (1 − g/ROIC_cv) / (WACC − g)
```

Onde:
- `NOPLATₙ₊₁` = NOPLAT do primeiro ano pós-período explícito
- `g` = taxa de crescimento na continuidade (normalmente PIB nominal ou inflação + crescimento real)
- `ROIC_cv` = ROIC na continuidade (retorno incremental sobre novos investimentos)
- `WACC` = custo médio ponderado de capital

**Parâmetros típicos Brasil:**
- g longo prazo: 3–5% (inflação + crescimento real modesto)
- ROIC_cv: geralmente convergindo ao WACC no longo prazo (concorrência) ou acima se moat forte

### 2b. Múltiplo de Saída (sanity check)

```
VT = EBITDAₙ × Múltiplo_saída

ou

VT = NOPLATₙ × (1/WACC)  [se assumir ROIC_cv = WACC, crescimento neutro]
```

Usar como verificação do resultado do método de crescimento perpétuo.

### 2c. Sensibilidade do Valor Terminal

O VT tipicamente representa 60–80% do EV total. Pequenas variações em g e ROIC_cv têm impacto material. Sempre apresentar análise de sensibilidade (tabela g × ROIC_cv).

---

## 3. WACC

### Fórmula

```
WACC = Kd × (1 − t) × (D/V) + Ke × (E/V)

Onde:
V = D + E (valor de mercado da dívida + equity)
D/V = proporção de dívida no capital total
E/V = proporção de equity no capital total
Kd = custo da dívida (yield to maturity)
t = alíquota marginal de imposto (34% no Brasil para IR+CSLL)
Ke = custo do equity (CAPM ou build-up)
```

### Custo do Equity (Ke) — CAPM

```
Ke = Rf + β × (Rm − Rf) + Prêmio_país (se aplicável)

Componentes no Brasil:
- Rf: taxa livre de risco (US Treasury 10Y em USD + ou Selic/CDI sem risco em BRL)
- β: beta desalavancado do setor × fator de alavancagem da empresa
- Rm − Rf: prêmio de mercado histórico (5–7% para EUA como referência)
- Prêmio de risco-país: CDS Brasil ou EMBI+ (para empresas expostas ao risco soberano)
```

**Prática mid-market BR:**
Para empresas fechadas, adicionar prêmio de iliquidez (1–3%) e prêmio de empresa de pequeno porte (1–4%) ao Ke obtido pelo CAPM.

### Estrutura de Capital

Usar estrutura-alvo (não corrente se distorcida por ciclo ou aquisição). Para empresa fechada em processo de venda, usar estrutura da indústria como referência.

---

## 4. APV (Adjusted Present Value)

Alternativa ao WACC quando a estrutura de capital muda significativamente ao longo do tempo (ex: LBO, aquisição alavancada).

```
APV = VP(FCF descontado ao Ku — custo do equity sem alavancagem)
    + VP(Escudos Fiscais da dívida)

Ku = Ke desalavancado = custo do equity para empresa 100% equity

VP(Escudos Fiscais) depende da política de endividamento:
- Dívida fixa: descontar ao Kd (dívida sem risco de default)
- Dívida rebalanceada (proporcional ao EV): descontar ao Ku
```

**Quando usar APV vs. WACC:**
- WACC: estrutura de capital relativamente estável
- APV: estrutura de capital muda materialmente (LBO, turnaround, paydown acelerado)

---

## 5. Reconciliação Enterprise Value → Equity Value

```
Valor das Operações (VP FCFs + VP VT)
(+) Caixa e equivalentes (excedente — acima do mínimo operacional)
(+) Aplicações financeiras de curto prazo
(+) Participações em coligadas/JVs (avaliar separadamente)
(+) Outros ativos não operacionais (imóveis não utilizados, créditos fiscais não operacionais)
= Enterprise Value

(−) Dívidas financeiras (CP + LP, valor de mercado)
(−) Passivos de arrendamento (CPC 06 R2) — valor contábil do passivo
(−) Obrigações previdenciárias não cobertas (CPC 33) — deficit atuarial
(−) Passivos contingentes material (processos judiciais provisionados)
(−) Outras obrigações assemelhadas a dívida

= Equity Value (100%)
```

**Em M&A:** o preço de transação em base "cash free / debt free" (CFDF) implica ajustar pelo caixa e dívida na data de fechamento — mecanismo de preço de compra (PPC).

---

## 6. Modelo de Equity DCF

Alternativa ao Enterprise DCF; menos utilizada em M&A corporativo.

```
Fluxo de Caixa ao Equity = Lucro Líquido
                          + D&A
                          − CAPEX
                          − Variação de Capital de Giro
                          + Variação líquida de dívida (tomada − amortização)
                          = Dividendo potencial / FCFe

Desconto ao Ke (custo do equity)
= Valor do Equity diretamente
```

Vantagem: sem necessidade de subtrair dívida no final.
Desvantagem: sensível à projeção de estrutura de capital; difícil de usar quando IC muda muito.

---

## 7. Período Explícito: Boas Práticas

- **Horizonte:** 5–10 anos; usar 10 anos se a empresa ainda está em fase de crescimento elevado
- **Convergência:** ao final do período explícito, ROIC deve convergir para nível sustentável (não artificialmente alto)
- **Consistência:** crescimento de receita deve ser consistente com premissas de capital de giro e CAPEX (IC cresce junto)
- **Ajuste de mid-year:** usar convenção de meio de ano para approximar fluxos contínuos durante o ano

```
Ajuste mid-year: VP = Σ FCFₜ / (1+WACC)^(t−0.5)

Alternativamente: multiplicar o VP calculado com desconto de final de ano por (1+WACC)^0.5
```
