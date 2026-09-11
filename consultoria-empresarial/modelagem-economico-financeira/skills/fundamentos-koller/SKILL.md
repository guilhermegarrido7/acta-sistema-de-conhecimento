---
name: fundamentos-koller
description: Fundamentar o valuation no framework Koller/McKinsey — NOPLAT, capital investido, ROIC, lucro econômico, FCF e a key value driver formula. Acionar ao reorganizar demonstrações contábeis, ao calcular ROIC ou lucro econômico, ao montar DCF ou valor terminal, ou ao interpretar múltiplos de enterprise value.
user-invocable: false
---

# Fundamentos Koller — camada de referência

Esta é a **camada de fundamento teórico** do plugin. Ela não é uma etapa do trabalho: é o que as
outras skills invocam quando precisam do conceito exato.

As skills de etapa (`reorganizacao-contabil`, `diagnostico-de-roic`, `custo-de-capital`,
`valor-terminal`, `triangulacao-e-faixa`, `revisao-de-modelo`, ...) dizem *o que fazer e em que
ordem*. Esta diz *por que a conta é essa*. Quando houver conflito aparente, o método da etapa manda —
ele já traduziu Koller para a realidade de mid-market fechado brasileiro.

Este documento é o ponto de entrada para análises de valuation no framework Koller (McKinsey). Para tópicos avançados, carregue o arquivo de referência apropriado conforme indicado em cada seção.

---

## Princípio Central

> **Empresas criam valor quando investem capital a taxas de retorno superiores ao custo desse capital. As duas alavancas são: crescimento e ROIC.**

O valor de uma empresa é determinado por:
- **ROIC** (retorno sobre o capital investido operacional)
- **g** (taxa de crescimento do NOPLAT/receita)
- **WACC** (custo médio ponderado de capital)

Fórmula dos Key Value Drivers: `Valor = NOPLAT₁ × (1 − g/ROIC) / (WACC − g)`

---

## Mapa de Conceitos

```
Demonstrações Contábeis (GAAP/IFRS/CPC)
        ↓ Reorganização
┌─────────────────────────────────────┐
│  NOPLAT                             │  → Numerador do ROIC
│  (Lucro Operacional Ajustado)       │  → Base do FCF
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  Capital Investido Operacional      │  → Denominador do ROIC
│  (IC)                               │  → Base do Lucro Econômico
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  ROIC = NOPLAT / IC médio           │  → Driver primário de valor
│  Lucro Econômico = (ROIC−WACC)×IC  │  → Medida anual de criação de valor
│  FCF = NOPLAT − ΔIC                 │  → Base do DCF
└─────────────────────────────────────┘
        ↓
┌─────────────────────────────────────┐
│  Enterprise DCF / APV / Múltiplos  │  → Valuation final
└─────────────────────────────────────┘
```

---

## 1. NOPLAT — Net Operating Profit Less Adjusted Taxes

### Lógica de construção

**NOPLAT = EBITA − Impostos Operacionais Ajustados**

Onde EBITA = Resultado antes de juros, impostos e amortização de intangíveis adquiridos.

```
(+) Receita líquida
(−) CPV
(−) Despesas operacionais (SG&A, P&D)
(−) Depreciação
(+) Juros de arrendamentos capitalizados (CPC 06 R2 / IFRS 16)
= EBITA

(−) Impostos operacionais ajustados
= NOPLAT
```

### Cálculo dos impostos operacionais ajustados

```
Imposto de renda/CSLL reportado
(+) Escudo fiscal dos juros (despesa financeira × alíquota efetiva)
(−) Imposto sobre receitas/despesas não operacionais
= Impostos Operacionais Ajustados
```

**Regra crítica:** NOPLAT deve ser neutro à estrutura de capital. O escudo fiscal dos juros deve ser adicionado de volta aos impostos reportados.

> Para detalhamento completo com exemplos numéricos e tratamentos especiais (R&D capitalizado, stock options, pensões), carregue: `references/noplat_detalhado.md`

---

## 2. Capital Investido Operacional (IC)

### Perspectiva Operacional (de cima para baixo)

```
Capital de Giro Operacional
(+) Ativo Circulante Operacional (caixa mínimo, estoques, recebíveis)
(−) Passivo Circulante Operacional (fornecedores, obrigações operacionais)
= Capital de Giro Operacional Líquido

(+) Imobilizado líquido (PP&E)
(+) Arrendamentos capitalizados (CPC 06 R2)
(+) Outros ativos operacionais líquidos de longo prazo
= Capital Investido (excl. goodwill)

(+) Goodwill e intangíveis adquiridos (líquidos de amortização)
(+) Goodwill não reportado acumulado (aquisições por pooling)
= Capital Investido (incl. goodwill)
```

### Perspectiva de Financiamento (de baixo para cima)

```
(+) Dívida financeira
(+) Equivalentes de Dívida:
    - Passivos de arrendamentos (CPC 06 R2)
    - Provisões de reestruturação
    - Obrigações previdenciárias não cobertas (CPC 33)
    - Outros passivos assemelhados a dívida
(+) Patrimônio líquido contábil
(+) Equivalentes de Patrimônio:
    - Impostos diferidos (passivo líquido de ativo)
    - Reservas de suavização de resultado
    - Goodwill amortizado acumulado
= Total de Fundos Investidos = IC + Ativos Não Operacionais
```

**Consistência obrigatória:** IC pela perspectiva operacional = IC pela perspectiva de financiamento (após subtrair ativos não operacionais).

> Para tratamentos específicos de equivalentes de dívida/patrimônio, goodwill, arrendamentos IFRS 16/CPC 06 R2 e pensões CPC 33 no contexto mid-market brasileiro: `references/capital_investido.md`

---

## 3. ROIC e Decomposição

```
ROIC = NOPLAT / IC Médio

Decomposição:
ROIC = Margem EBITA (ajustada) × Giro do Capital Investido
     = (NOPLAT / Receita) × (Receita / IC)
```

### ROIC com e sem goodwill

| Métrica | Uso |
|---|---|
| ROIC excl. goodwill | Avalia eficiência operacional intrínseca do negócio |
| ROIC incl. goodwill | Avalia retorno sobre o capital total deployed (ex-M&A) |

Em análises de aquisição, o **ROIC incl. goodwill** é o relevante para avaliar retorno sobre o preço pago.

---

## 4. Lucro Econômico (Economic Profit)

```
Lucro Econômico = (ROIC − WACC) × IC
               = NOPLAT − (IC × WACC)
```

**Interpretação estratégica:**
- ROIC > WACC → criação de valor; crescimento acelera a criação
- ROIC = WACC → crescimento é neutro para o valor
- ROIC < WACC → destruição de valor; crescimento piora o resultado

**Equivalência DCF ↔ Lucro Econômico:**
```
Valor = IC₀ + VP(Lucros Econômicos futuros)
      = VP(FCF futuros) descontado ao WACC
```

---

## 5. Free Cash Flow (FCF)

```
FCF = NOPLAT
    (+) Depreciação e amortização (operacional)
    (−) CAPEX bruto
    (−) Variação do Capital de Giro Operacional Líquido
    (−) Variação em outros ativos operacionais líquidos
    = FCF (consistente com ROIC, sem itens não operacionais)
```

Ou de forma compacta: **FCF = NOPLAT − Investimento Líquido em IC**

Onde: `Investimento Líquido = IC_t − IC_{t-1}`

---

## 6. Key Value Driver Formula

```
Valor = NOPLAT₁ × (1 − g/ROIC) / (WACC − g)
```

Premissas: ROIC e g constantes na perpetuidade. Útil para valor terminal / valor residual.

**Derivação da taxa de reinvestimento:**
```
IR (Investment Rate) = g / ROIC
FCF = NOPLAT × (1 − IR) = NOPLAT × (1 − g/ROIC)
```

**Implicações para valuation de M&A:**
- Para ROIC = WACC: crescimento não adiciona valor → múltiplo implícito = 1/WACC
- Para ROIC >> WACC: crescimento amplifica valor → justifica múltiplos elevados
- Sensibilidade: pequenas mudanças em ROIC ou g na perpetuidade têm impacto desproporcionalmente grande no valor

---

## 7. Estrutura do Enterprise DCF

```
Valor de Operações
= VP(FCFs do período explícito) + VP(Valor Terminal)

(+) Ativos não operacionais (caixa excedente, equivalentes, participações)
= Enterprise Value (Valor da Empresa)

(−) Dívida financeira e equivalentes de dívida
(−) Passivos de arrendamentos (CPC 06 R2)
(−) Obrigações previdenciárias não cobertas
= Equity Value (Valor do Patrimônio Líquido)

÷ Número de ações
= Valor por ação
```

> Para cálculo do WACC, continuidade de valor (valor terminal por crescimento perpétuo vs. múltiplo de saída), método APV e modelos de equity DCF: `references/estrutura_dcf_wacc.md`

---

## 8. Múltiplos e Calibração

| Múltiplo | Relação com Framework Koller |
|---|---|
| EV/EBITA | Proxy do ROIC × múltiplo de crescimento |
| EV/IC (valor de mercado / capital investido) | Diretamente derivado de (ROIC−g)/(WACC−g) |
| P/E | Distorcido por estrutura de capital; evitar como métrica primária |
| EV/EBITDA | Útil operacionalmente, mas não consistente com ROIC (ignora DA) |

**Relação EV/IC → ROIC:**
Quando EV/IC > 1 → mercado precifica ROIC > WACC
Quando EV/IC < 1 → mercado precifica destruição de valor

> Para análise de transações precedentes, triangulação de múltiplos e ajustes mid-market Brasil: `references/ma_e_multiplos.md`

---

## 9. Contexto Brasil / CPC-IFRS

Principais adaptações ao framework Koller para empresas mid-market brasileiras:

| Item | Tratamento Koller | Adaptação CPC |
|---|---|---|
| Arrendamentos | Capitaliza como dívida | CPC 06 R2 / IFRS 16 obrigatório |
| Pensões benefício definido | Passivo atuarial = equiv. dívida | CPC 33 — raro em mid-market |
| Impostos diferidos | Equiv. patrimônio (passivo liq.) | Reconhecer via DRE/balanço |
| Goodwill | Não amortizado (IFRS 3) | CPC 15 — teste de impairment |
| NOPLAT base | EBITA | Usar EBIT + juros CPC 06 R2 |

> Para tratamentos detalhados por item contábil CPC, ajustes de normalização de EBITDA para M&A e checklist de due diligence financeira: `references/contexto_brasil_cpc.md`

---

## Navegação por Arquivos de Referência

| Arquivo | Conteúdo |
|---|---|
| `references/noplat_detalhado.md` | Construção linha a linha do NOPLAT; casos especiais (R&D, leases, pensions) |
| `references/capital_investido.md` | Equivalentes de dívida/patrimônio; goodwill; capitalização de leases |
| `references/estrutura_dcf_wacc.md` | WACC; valor terminal; APV; modelos de equity |
| `references/ma_e_multiplos.md` | Transações precedentes; múltiplos; sinergias; retorno sobre preço pago |
| `references/contexto_brasil_cpc.md` | CPC 06 R2, CPC 33, CPC 15; EBITDA normalizado; mid-market BR |

**Regra de leitura:** Carregue apenas o(s) arquivo(s) relevante(s) para a tarefa específica. Para uma análise histórica de ROIC, carregue `noplat_detalhado.md` + `capital_investido.md`. Para due diligence de M&A, carregue `ma_e_multiplos.md` + `contexto_brasil_cpc.md`.
