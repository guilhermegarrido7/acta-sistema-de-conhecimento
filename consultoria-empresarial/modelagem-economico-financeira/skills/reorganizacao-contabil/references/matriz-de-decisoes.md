# Matriz de decisões: reorganização contábil

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

---

## RC-01 · Base do capital investido: bruta ou líquida

| Alternativa | Quando usar | Risco |
|---|---|---|
| Líquida de depreciação (padrão Koller) | Padrão para ROIC e fluxo | Ativo muito depreciado infla o ROIC (ver red flags) |
| Bruta | Leitura de capital econômico de reposição | Incomparável com fluxo projetado em base líquida |

**Gate, não escolha:** histórico e projetado na **mesma base**. Histórico bruto com projetado líquido
quebra a série de ROIC e o teste de reinvestimento, e bloqueia o release em `revisao-de-modelo`.

**Exemplo registrado.** Caso A: capital histórico em base bruta e projetado em base líquida. A
divergência foi identificada na revisão.

## RC-02 · Base do NOPAT histórico

**Gate:** o NOPAT histórico usa o mesmo EBITDA (contábil ou normalizado) e o mesmo critério de
imposto operacional do NOPAT projetado. NOPAT híbrido (EBITDA de uma base, imposto de outra) produz
ROIC histórico sem leitura.

**Exemplo registrado.** Caso A: ROIC histórico calculado com EBITDA contábil e imposto normalizado.

## RC-03 · Arrendamentos (CPC 06 R2 / IFRS 16)

**Pergunta obrigatória:** há arrendamento relevante (imóvel, ponto, equipamento, frota)?

| Alternativa | Quando usar | Exige coerência em |
|---|---|---|
| Capitalizar: EBITDA pós-IFRS 16, passivo de arrendamento como dívida | Arrendamento relevante e de longo prazo; comparáveis reportam pós-IFRS 16 | Múltiplo pós-IFRS 16, beta com arrendamento no D, passivo na ponte |
| Manter como despesa operacional (pré-IFRS 16) | Arrendamento curto ou irrelevante; comparáveis em base pré | Múltiplo pré-IFRS 16, nada na ponte |

**Regra:** a mesma escolha em quatro lugares: capital investido, beta (`custo-de-capital`), múltiplo
e ponte (`triangulacao-e-faixa`). Ver `fundamentos-koller`, `references/capital_investido.md`.

**Exemplo registrado.** Caso A: tratamento de arrendamentos não documentado no modelo.
