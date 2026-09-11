# Contexto Brasil — Adaptações CPC/IFRS para o Framework Koller

## 1. Mapa de Equivalências CPC ↔ Koller

| Conceito Koller | CPC Equivalente | Notas |
|---|---|---|
| Operating Leases capitalizados | CPC 06 R2 (IFRS 16) | Obrigatório desde 2019; mid-market frequentemente subestima passivos |
| Pension obligations (benefit defined) | CPC 33 (IAS 19) | Raro em mid-market BR — concentrado em grandes empresas |
| Goodwill e intangíveis adquiridos | CPC 15 (IFRS 3) | Não amortizado; impairment test anual (CPC 01) |
| Imposto Diferido | CPC 32 (IAS 12) | Passivo líquido = equivalente de patrimônio |
| Contingências/Provisões | CPC 25 (IAS 37) | Passivos prováveis = equivalentes de dívida |
| Benefícios a empregados (CP) | CPC 33 (IAS 19) | Férias, 13º, PLR — entram em passivo operacional |
| Reconhecimento de receita | CPC 47 (IFRS 15) | Impacta timing de receita e adiantamentos de clientes |
| Instrumentos financeiros | CPC 48 (IFRS 9) | Derivativos de hedge, aplicações financeiras |

---

## 2. CPC 06 R2 / IFRS 16 — Arrendamentos

### Impacto no NOPLAT e IC

**Antes do CPC 06 R2 (regime de leasing operacional):**
```
DRE: Despesa de aluguel (operacional, linha única)
IC: Nenhum impacto (arrendamento off-balance)
EBITDA: incluía a despesa de aluguel como custo operacional
```

**Após CPC 06 R2 (obrigatório a partir de 2019):**
```
DRE:
  - D&A sobre Ativo ROU (operacional)
  - Encargos financeiros sobre Passivo de Arrendamento (financeiro — excluir do NOPLAT)

Balanço:
  - Ativo ROU (operacional) → entra no IC
  - Passivo de Arrendamento (curto + longo prazo) → equivalente de dívida

Para o NOPLAT:
  EBITA = EBIT + Encargos financeiros de arrendamentos (adicionar de volta)
  O EBIT já inclui a D&A do ROU, que é operacional
```

### Impacto em métricas de M&A

```
EBITDA pré-IFRS 16 ≠ EBITDA pós-IFRS 16

Ajuste aproximado para EBITDA pré-IFRS 16 (normalizado):
EBITDA pós-IFRS 16 − D&A do ROU = EBITDA caixa aproximado
ou
EBITDA pré-IFRS 16 ≈ EBITDA pós-IFRS 16 − D&A do ROU + Encargos de arrendamentos

Em transações mid-market, verificar se o EBITDA apresentado pelo target é pré ou pós-IFRS 16. 
A diferença pode ser material para empresas com alta exposição a aluguéis (varejo, logística, educação).
```

### EV bridge com leases

```
EV implícito na transação
(−) Dívida financeira
(−) Passivos de arrendamento (CPC 06 R2) → equivalente de dívida
(+) Caixa e equivalentes
= Equity Value CFDF
```

**Atenção:** em transações mid-market brasileiras, é comum o vendedor apresentar EBITDA sem o efeito do CPC 06 R2 (ou pré-2019). Verificar o tratamento antes de calcular múltiplos.

---

## 3. CPC 33 — Benefícios a Empregados

### Benefício Definido vs. Contribuição Definida

**Contribuição definida (CD):** empresa contribui valor fixo por período. Não há passivo adicional. A maioria dos planos de previdência privada corporativa no Brasil é CD.

**Benefício definido (BD):** empresa garante benefício futuro. Gera passivo atuarial. Relevante principalmente em:
- Empresas de grande porte com fundos patrocinados (Previ/BB, Petros/Petrobras, Funcef/CEF)
- Empresas privatizadas que herdaram planos BD de era estatal

**Para mid-market brasileiro:** raramente aplicável. Se aparecer:

```
Passivo atuarial líquido (obrigação projetada − ativos do plano) = equivalente de dívida
Custo do serviço corrente → operacional (NOPLAT)
Juros sobre o passivo líquido → não operacional (excluir do NOPLAT)
```

---

## 4. CPC 15 — Combinações de Negócios (Goodwill)

```
Goodwill = Preço pago − Fair value dos ativos líquidos identificáveis do target

Tratamento IFRS/CPC:
- NÃO é amortizado (desde adoção do IFRS pelo Brasil, 2010)
- Sujeito a teste de impairment anual (CPC 01)
- Se impairment reconhecido: baixa no resultado → excluir do NOPLAT (não recorrente)
```

**No ROIC:**
- ROIC excl. goodwill: exclui goodwill do IC → mede performance operacional pura
- ROIC incl. goodwill: inclui goodwill (e intangíveis PPA) → mede retorno sobre capital total deployed

**Intangíveis adquiridos (PPA — Purchase Price Allocation):**
```
Marcas adquiridas, carteira de clientes, tecnologia, contratos →
São amortizados (vida útil definida) ou testados por impairment (vida útil indefinida)
A amortização vai para EBIT contábil → excluir ao calcular EBITA (é amortização de PPA)
```

---

## 5. Ajustes de Normalização EBITDA — Contexto Brasil

### Pró-labore acima/abaixo do mercado

Empresas familiares mid-market frequentemente pagam pró-labore abaixo do salário de mercado para o sócio-operador:

```
Ajuste: adicionar ao EBITDA a diferença entre remuneração de mercado e pró-labore pago
(reduz EBITDA normalizado se pró-labore era menor que mercado)
```

### Aluguel de imóvel próprio / relacionado

Se a empresa usa imóvel do sócio sem pagar aluguel, ou paga aluguel abaixo do mercado:

```
Ajuste: incluir aluguel de mercado como despesa (reduz EBITDA normalizado)
```

### Tributos e Regimes Fiscais

- Empresas no Simples Nacional → podem ter tributação efetiva diferente do regime presumido/real
- Créditos de PIS/COFINS não aproveitados → podem distorcer CPV
- ICMS diferido → pode gerar passivo relevante não refletido no CGOL

### Receitas Antecipadas / Adiantamentos de Clientes

Se a empresa recebe adiantamentos e reconhece receita antes da entrega, o EBITDA histórico pode estar inflado. Verificar política de reconhecimento de receita (CPC 47).

---

## 6. Checklist Específico Mid-Market Brasil

### Qualidade de Resultados

- [ ] Estoque: reconciliar saldo contábil com contagem física — divergências indicam baixas não realizadas (inflam margem bruta)
- [ ] CPC 06 R2: todos os contratos de arrendamento identificados e capitalizados?
- [ ] Pró-labore: ajustado a mercado?
- [ ] Transações com partes relacionadas: imóveis, empréstimos entre sócios e empresa, serviços
- [ ] Contingências fiscais/trabalhistas: levantamento atualizado — comum ser material em BR
- [ ] Regime tributário: Simples / Presumido / Real — e implicações para normalização
- [ ] Receita: concentração em poucos clientes? (risco de churn pós-transação)
- [ ] CAPEX de manutenção vs. expansão: separar para estimar FCF sustentável

### Estrutura da Dívida

- [ ] Dívida financeira com garantia real (alienação fiduciária, hipoteca)?
- [ ] Dívidas com sócios (mútuo): tratar como dívida financeira ou equity dependendo da intenção
- [ ] Subvenções governamentais (BNDES, FINEP, Fundos regionais): verificar cláusulas de change of control
- [ ] Passivos de arrendamento CPC 06 R2 — levantamento completo de contratos

---

## 7. Taxa de Desconto — Peculiaridades Brasil

### WACC em BRL

```
Ke_BRL = (1 + Ke_USD) × (1 + Diferencial de inflação BR vs. EUA) − 1
ou
Ke_BRL = Rf_BRL + β × ERP_EUA + Prêmio risco-país

Prêmio risco-país: EMBI+ Brasil (spread soberano)
Rf_BRL: NTN-B de prazo longo como proxy (IPCA + yield real)
```

### Ajuste de Iliquidez para Empresas Fechadas

Para empresas mid-market não listadas:
```
Ke_ajustado = Ke_CAPM + Prêmio iliquidez (1–3%) + Prêmio empresa pequena (1–4%)
```

Resulta em WACC tipicamente 2–5 pp acima do observado em pares listados de grande porte.
