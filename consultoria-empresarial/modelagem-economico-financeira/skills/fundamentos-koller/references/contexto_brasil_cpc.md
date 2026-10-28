# Contexto Brasil: adaptações CPC/IFRS para o framework Koller

## 1. Mapa de Equivalências CPC ↔ Koller

| Conceito Koller | CPC Equivalente | Notas |
|---|---|---|
| Operating Leases capitalizados | CPC 06 R2 (IFRS 16) | Obrigatório desde 2019; mid-market frequentemente subestima passivos |
| Pension obligations (benefit defined) | CPC 33 (IAS 19) | Raro em mid-market BR, concentrado em grandes empresas |
| Goodwill e intangíveis adquiridos | CPC 15 (IFRS 3) | Não amortizado; impairment test anual (CPC 01) |
| Imposto Diferido | CPC 32 (IAS 12) | Passivo líquido = equivalente de patrimônio |
| Contingências/Provisões | CPC 25 (IAS 37) | Passivos prováveis = equivalentes de dívida |
| Benefícios a empregados (CP) | CPC 33 (IAS 19) | Férias, 13º, PLR: entram em passivo operacional |
| Reconhecimento de receita | CPC 47 (IFRS 15) | Impacta timing de receita e adiantamentos de clientes |
| Instrumentos financeiros | CPC 48 (IFRS 9) | Derivativos de hedge, aplicações financeiras |
| Apresentação da DRE (categorias e MPMs) | CPC 51 (IFRS 18) | Substitui o CPC 26 (R1) nos exercícios iniciados a partir de 01/01/2027; ver seção 5 |

---

## 2. CPC 06 R2 / IFRS 16: arrendamentos

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
  - Encargos financeiros sobre Passivo de Arrendamento (financeiro, excluir do NOPLAT)

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

## 3. CPC 33: benefícios a empregados

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

## 4. CPC 15: combinações de negócios (goodwill)

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

**Intangíveis adquiridos (PPA, Purchase Price Allocation):**
```
Marcas adquiridas, carteira de clientes, tecnologia, contratos →
São amortizados (vida útil definida) ou testados por impairment (vida útil indefinida)
A amortização vai para EBIT contábil → excluir ao calcular EBITA (é amortização de PPA)
```

---

## 5. CPC 51 / IFRS 18: a DRE por categorias (exercícios a partir de 2027)

**Norma e alcance.** O CPC 51 (Apresentação e Divulgação em Demonstrações Contábeis), correlato ao
IFRS 18, substitui o CPC 26 (R1). A Resolução CVM 237, de 24/12/2025, o torna obrigatório para a
companhia aberta nos exercícios iniciados em ou após 01/01/2027 e revoga a Resolução CVM 106 (que
aprovava o CPC 26 R1) e a Resolução CVM 156 (divulgação voluntária de LAJIDA e LAJIR). Para as
demais entidades que seguem as normas completas do CFC, a NBC TG 51 tem a mesma vigência e revoga a
NBC TG 26 (NBC TG 51, item 2 e cláusula de vigência). A empresa fechada que adota a norma de PME
(NBC TG 1000) fica fora do alcance (a confirmar).

| O que muda | Regra | Item da NBC TG 51 |
|---|---|---|
| Cinco categorias | Operacional, investimento, financiamento, tributos sobre o lucro e operações descontinuadas | 47 |
| Operacional | Residual: recebe tudo o que não está nas outras quatro | 52 |
| Investimento | Resultado de coligadas, joint ventures e controladas não consolidadas, de caixa e equivalentes, e de ativo que gera retorno individualmente e em grande parte independente dos demais recursos | 53 e 54 |
| Financiamento | Receitas e despesas de passivo que só capta recursos (empréstimo, debênture), com o custo de transação; de outros passivos, só juros e efeito de mudança de taxa que outra norma manda identificar | 59 a 61 |
| Subtotais obrigatórios | Lucro operacional; lucro antes de financiamento e tributos sobre o lucro; lucro líquido | 69 a 72 |
| MPM | Subtotal usado em comunicação pública fora das demonstrações para dar a visão da administração sobre o desempenho, como o EBITDA ajustado. Vai para nota única, com cálculo, motivo, conciliação ao subtotal mais comparável e efeito de tributos e de não controladores por item conciliado | 117, 122 e 123 |
| Não é MPM | Lucro bruto; lucro operacional antes de depreciação, amortização e impairment do CPC 01 (o mais próximo de um EBITDA sem ajuste); lucro antes dos tributos, entre outros | 118 |

Entidade cuja atividade principal é investir em ativos ou financiar clientes (banco, financeira,
entidade de investimento) leva parte do resultado de investimento e de financiamento para a
categoria operacional (itens 49 e 50). Comparável desse tipo pede leitura própria.

**Efeito no valuation.**

- **Lucro operacional não é NOPAT.** A categoria é residual e, em regra, carrega não recorrentes,
  resultado na venda de imobilizado, impairment e amortização de intangível adquirido. A
  reorganização de `reorganizacao-contabil` continua obrigatória: o subtotal é ponto de partida, não
  resultado.
- **Parte da separação vem pronta.** Equivalência patrimonial e rendimento de caixa saem do
  operacional (item 53), e os juros de passivo financeiro vão para financiamento (itens 60 e 61),
  como na reorganização Koller. Confira em nota onde a empresa classificou os juros do arrendamento
  (CPC 06) e a atualização de provisões. Use as categorias para conferir a classificação, não para
  substituí-la.
- **A nota de MPM melhora o comparável.** O EBITDA ajustado da listada passa a ter conciliação item a
  item, com efeito tributário, e o EBITDA da listada pode mudar de definição com a saída da Resolução
  CVM 156. Refaça o múltiplo do comparável sobre a mesma definição de EBITDA do alvo antes de
  aplicá-lo (ver `qualidade-de-resultados`).
- **A série histórica quebra na adoção.** As demonstrações anteriores seguem o CPC 26. Reclassifique
  esses anos pelo mesmo critério antes de ler tendência de margem.

Fontes desta seção: CVM, notícia de 24/12/2025 sobre as Resoluções CVM 237 e 238
(https://www.gov.br/cvm/pt-br/assuntos/noticias/2025/cvm-edita-normas-sobre-novas-regras-contabeis-provenientes-do-pronunciamento-tecnico-cpc-51/);
ementas das Resoluções CVM 106 e 156
(https://conteudo.cvm.gov.br/legislacao/resolucoes/resol106.html e
https://conteudo.cvm.gov.br/legislacao/resolucoes/resol156.html); CPC, ficha do CPC 51, aprovado em
10/10/2025 (https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos/Pronunciamento?Id=162);
NBC TG 51, de 13/11/2025, conferida em reprodução (https://www.legisweb.com.br/legislacao/?id=488310).
Os itens citados são os da NBC TG 51, elaborada a partir do CPC 51; confira a numeração no texto do
CPC antes de citar item em entregável. Acesso em 26/10/2026.

---

## 6. Ajustes de normalização de EBITDA no contexto Brasil

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

## 7. Checklist Específico Mid-Market Brasil

### Qualidade de Resultados

- [ ] Estoque: reconciliar saldo contábil com contagem física; divergências indicam baixas não realizadas (inflam margem bruta)
- [ ] CPC 06 R2: todos os contratos de arrendamento identificados e capitalizados?
- [ ] Pró-labore: ajustado a mercado?
- [ ] Transações com partes relacionadas: imóveis, empréstimos entre sócios e empresa, serviços
- [ ] Contingências fiscais/trabalhistas: levantamento atualizado, comum ser material em BR
- [ ] Regime tributário: Simples / Presumido / Real, e implicações para normalização
- [ ] Receita: concentração em poucos clientes? (risco de churn pós-transação)
- [ ] CAPEX de manutenção vs. expansão: separar para estimar FCF sustentável
- [ ] Exercícios a partir de 2027 (CPC 51): lucro operacional reconciliado ao NOPAT e nota de MPM lida, se houver (seção 5)

### Estrutura da Dívida

- [ ] Dívida financeira com garantia real (alienação fiduciária, hipoteca)?
- [ ] Dívidas com sócios (mútuo): tratar como dívida financeira ou equity dependendo da intenção
- [ ] Subvenções governamentais (BNDES, FINEP, Fundos regionais): verificar cláusulas de change of control
- [ ] Passivos de arrendamento CPC 06 R2: levantamento completo de contratos

---

## 8. Taxa de desconto: peculiaridades do Brasil

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
