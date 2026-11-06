# Matriz de decisões: diagnóstico de ROIC

Oráculo, não regra. Cada bloco traz a pergunta, as alternativas, quando usar cada uma, o efeito, o
risco e a recomendação padrão. **O analista decide** e registra a escolha no checkpoint do
engajamento com o ID do bloco (`acta-way:checkpoint`, `references/TEMPLATE-registro-de-decisao.md`).
Alternativa nova só entra aqui depois de aparecer num projeto real e ser validada pelo sócio
responsável. Os exemplos citam casos anonimizados de [`casos/`](../../../casos/).

---

## RO-01 · Onde o ROIC é obrigatório

| Alternativa | Status |
|---|---|
| Obrigatório no modelo e no deck | Descartada: pesa o deck sem ganho para todo leitor |
| **Obrigatório no modelo; opcional no deck** | **Regra da casa** |
| Opcional nos dois | Descartada: sem ROIC projetado, ninguém confere g contra RONIC |

**Mínimo no modelo:**
- ROIC histórico e projetado na mesma base de NOPAT e de capital investido (ver
  `reorganizacao-contabil`, RC-01 e RC-02);
- decomposição margem NOPAT × giro do capital;
- lucro econômico = (ROIC − WACC) × capital investido.

**No deck:** entra quando sustenta a tese de criação de valor ou o RONIC do terminal. A escolha fica
registrada no checkpoint.

**Exemplo registrado.** Caso A: modelo sem decomposição margem × giro e sem lucro econômico; o ROIC
histórico das primeiras versões misturava EBITDA contábil com imposto normalizado.

## RO-02 · Origem do RONIC do terminal

| Alternativa | Quando usar | Risco |
|---|---|---|
| ROIC do próprio alvo no último ano explícito | Vantagem competitiva com duração documentada | Spread perpétuo por inércia |
| ROIC médio do setor | Convergência ao setor ao fim do CAP | Fonte setorial de outro país ou de outra escala |
| Convergência gradual entre os dois, em estágio intermediário | ROIC do alvo muito acima do setor | Mais premissas para defender |
| RONIC = WACC | Sem vantagem após o horizonte | Subestima negócio com vantagem durável |

**Teste:** comparar o RONIC com o ROIC projetado do último ano explícito. Diferença material exige a
justificativa da convergência ou da manutenção, registrada no checkpoint.

**Exemplo registrado.** Caso A: RONIC igual ao ROIC médio setorial de base internacional, sem
comparação documentada com o ROIC projetado do alvo.
