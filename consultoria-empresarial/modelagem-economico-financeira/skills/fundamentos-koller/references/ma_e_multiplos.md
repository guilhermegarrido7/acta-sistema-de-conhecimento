# M&A e Múltiplos — Aplicações do Framework Koller

## 1. Múltiplos e sua Fundação Koller

Todo múltiplo é uma simplificação do DCF. Entender a relação ajuda a calibrar e questionar múltiplos de mercado.

### Derivação EV/NOPLAT (P/E equivalente operacional)

Da Key Value Driver Formula:
```
EV = NOPLAT₁ × (1 − g/ROIC) / (WACC − g)
EV/NOPLAT = (1 − g/ROIC) / (WACC − g)
```

Implicação: o múltiplo EV/NOPLAT (e analogamente EV/EBITA) sobe quando:
- g aumenta (crescimento cria mais valor se ROIC > WACC)
- ROIC aumenta (mais eficiente o capital empregado)
- WACC cai (menor custo de capital)

### EV/IC (Market Value / Capital Investido)

```
EV/IC = (ROIC − g) / (WACC − g)

Se ROIC = WACC → EV/IC = 1 (valor = capital deployed)
Se ROIC > WACC → EV/IC > 1 (prêmio pelo spread positivo)
Se ROIC < WACC → EV/IC < 1 (desconto pela destruição de valor)
```

---

## 2. Múltiplos Comuns em M&A e sua Interpretação

| Múltiplo | Base | Vantagem | Limitação |
|---|---|---|---|
| EV/EBITDA | EBITDA | Amplamente usado; proxy de caixa | Ignora CAPEX e D&A real; inflado por arrendamentos pré-IFRS 16 |
| EV/EBITA | EBITA | Mais rigoroso; exclui amortização de PPA | Menos disponível publicamente |
| EV/NOPLAT | NOPLAT | Consistente com ROIC; correto do ponto de vista econômico | Requer ajuste manual |
| EV/Receita | Receita | Útil para early-stage ou margens voláteis | Ignora lucratividade |
| EV/IC | IC | Liga múltiplo ao ROIC | Requer cálculo do IC |
| P/E | Lucro líquido | Familiar para investidores | Distorcido por alavancagem e política contábil |

**Prática Koller:** usar EV/EBITA e EV/IC como múltiplos âncora. EV/EBITDA aceito como proxy para comunicação, mas reconciliar com EV/EBITA para análise.

---

## 3. Análise de Transações Precedentes (Comps de Transações)

### Estrutura de coleta

Para cada transação comparável:

```
1. Identificação da transação
   - Empresa alvo (target), adquirente, data, setor
   - Percentual adquirido e controle

2. Métricas financeiras do target
   - LTM EBITDA / EBITA / NOPLAT (últimos 12 meses antes do fechamento)
   - Receita LTM
   - EBITDA normalizado (excluir itens não recorrentes)

3. Preço pago
   - Equity value da transação
   - (+) Dívida líquida na data de fechamento (caixa livre de dívida)
   - = Enterprise Value (EV) implícito

4. Múltiplos implícitos
   - EV/EBITDA LTM
   - EV/EBITDA projetado (se disponível)
   - EV/Receita LTM
   - Prêmio sobre o preço de mercado pré-anúncio (se empresa listada)
```

### Ajustes de comparabilidade

- **Controle vs. minoritário:** transações de controle têm prêmio de controle (15–30% tipicamente)
- **Tamanho:** empresas menores negociam com desconto (iliquidez, risco operacional)
- **Ciclo de mercado:** transações em pico de ciclo têm múltiplos maiores que em vale
- **Sinergias incluídas:** o adquirente pode pagar mais se capturar sinergias; isso inflaciona o EV observado

---

## 4. Avaliação de Sinergias (Framework Koller)

```
Valor das Sinergias = EV(Combinado) − EV(Target standalone) − EV(Acquirer standalone)

Tipos:
(+) Sinergias de receita (cross-selling, pricing power, novos mercados)
    [mais incertas; descontar com taxa maior ou aplicar haircut]
(+) Sinergias de custo (redundâncias SG&A, economias de escala, procurement)
    [mais concretas; capturar no NOPLAT normalizado pós-integração]
(−) Custos de integração (one-time)
    [tratar como investimento: reduz caixa ou aumenta IC]
= Sinergias Líquidas (após custos de integração)
```

**Regra de criação de valor em M&A:**
```
Criação de valor para o acquirer = Sinergias − Prêmio pago ao target
```
Se o acquirer paga o valor total das sinergias ao target, o retorno incremental é zero.

---

## 5. ROIC sobre o Preço Pago (Return on Capital Deployed)

Em M&A, o ROIC relevante para o adquirente inclui o goodwill pago:

```
ROIC (incl. goodwill) = NOPLAT(standalone + sinergias) / IC(incl. goodwill pago)

Para criação de valor: ROIC(incl. goodwill) > WACC do adquirente
```

**Dilution/Accretion de EPS:** métrica relevante para comunicação com mercado, mas não equivalente à criação de valor econômico. Uma aquisição pode ser accretive em EPS e ainda assim destruir valor (se ROIC < WACC).

---

## 6. Estruturas de Pagamento e Ajustes de Preço

### Earn-out

Pagamento contingente atrelado à performance futura. Implicações:
- Reduz risco do comprador (paga mais se a empresa performar)
- Cria incentivos de curto prazo para o vendedor (pode prejudicar investimentos de longo prazo)
- Difícil de precificar: usar VP dos earn-outs esperados na construção do EV

### Correção monetária de parcelas diferidas

Para parcelas pagas meses após o fechamento:
```
Valor corrigido = Valor base × (1 + Índice acumulado desde fechamento)
Índice comum em M&A BR: IPCA acumulado no período
```

**Importante:** aplicar o índice de forma cumulativa (não por parcela isolada). Se o contrato define IPCA "desde a data de fechamento", todas as parcelas são corrigidas pelo mesmo índice acumulado, não cada uma pelo período individual.

### Cash Free / Debt Free (CFDF)

```
Preço de transação = EV (referência)
                   − Dívida líquida na data de fechamento
                   + Ajuste de capital de giro (vs. target de CGOL)
                   = Equity value a ser pago
```

O mecanismo de ajuste de capital de giro (working capital peg) é padrão em transações mid-market para evitar que o vendedor drene CGOL antes do fechamento.

---

## 7. Normalização de EBITDA para M&A

O EBITDA de M&A é diferente do EBITDA contábil. Ajustes típicos em sell-side:

```
EBITDA contábil (DRE)
(+) Despesas não recorrentes (reestruturação, consultoria de venda, litígios one-time)
(−) Receitas não recorrentes (ganhos na venda de ativos, créditos fiscais extraordinários)
(+) Pro-forma de aquisições recentes (anualize resultado de empresas adquiridas no período)
(+) Run-rate de iniciativas implementadas mas não totalmente capturadas no histórico
(+/−) Ajustes de remuneração de sócios (pró-labore acima/abaixo do mercado)
(+/−) Ajustes de transações com partes relacionadas (aluguéis, serviços — a mercado?)
= EBITDA Normalizado M&A
```

**Atenção:** cada ajuste deve ser documentado e defensável em due diligence. Adquirentes compram EBITDA futuro, não histórico — o EBITDA normalizado deve refletir a capacidade recorrente.

---

## 8. Due Diligence Financeira — Checklist de Qualidade de Resultados

- [ ] Estoques: divergência entre saldo sistêmico e físico? (baixas não realizadas inflam margem bruta)
- [ ] Receita: política de reconhecimento consistente com IFRS 15/CPC 47? Adiantamentos de clientes reconhecidos prematuramente?
- [ ] Provisões: provisões operacionais adequadas (garantias, devoluções, contingências)?
- [ ] Partes relacionadas: transações a preços de mercado?
- [ ] CAPEX vs. OPEX: despesas operacionais capitalizadas indevidamente?
- [ ] Capital de giro: tendência de DSO (prazo de recebimento), DIO (giro de estoque), DPO (prazo de pagamento) — pressão de liquidez?
- [ ] Caixa: caixa restrito ou comprometido? Caixa excedente de fato disponível?
- [ ] Dívida: passivos contingentes relevantes não provisionados?
- [ ] Leases: todos os contratos de arrendamento mapeados e capitalizados (CPC 06 R2)?
