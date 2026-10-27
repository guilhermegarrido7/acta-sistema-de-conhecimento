---
titulo: De onde vem o método de orçamento
---

## O orçamento driver-based, e por que não o incremental

O método deste plugin é **driver-based budgeting**: o orçamento se constrói dos direcionadores
operacionais que de fato geram receita e custo — volume, preço, ocupação, headcount, horas-máquina —
e não do orçamento do ano anterior acrescido de um percentual. A diferença não é estética. Um
orçamento incremental carrega para dentro do novo ano toda a ineficiência do ano-base e, quando o
realizado desvia, não consegue dizer por quê. Um orçamento driver-based é defensável (cada linha
rastreia até um driver e uma premissa) e reprevísivel (a variação se abre no driver que a causou).

## As famílias de modelo

A literatura de FP&A organiza os modelos de orçamento por como cada um trata a linha de partida:

- **Incremental** — parte do realizado e ajusta. Barato, rápido, apropriado para operação estável.
- **Base zero (ZBB)** — cada linha parte de zero e exige justificativa. Caro, poderoso para cortar
  gasto fora de controle, difícil de sustentar em todas as linhas por muitos ciclos.
- **Driver-based / activity-based** — a linha se decompõe no driver × valor unitário. É a espinha
  dorsal do método da casa, combinável com incremental ou base zero na escolha da linha de partida.
- **Beyond Budgeting** — corrente que critica o orçamento anual fixo e propõe metas relativas e
  planejamento contínuo. Informa a prática de rolling forecast, abaixo.

Na ACTA, o padrão de mid-market é **híbrido**: driver-based em toda linha, base zero onde o gasto
está sob suspeita, incremental onde a operação é estável.

## Rolling forecast

O orçamento anual nasce defasado: é feito com a informação de meses antes de o ano começar e, em
novembro, só enxerga dois meses à frente. O **rolling forecast** mantém um horizonte constante (12 ou
18 meses), avançando a janela a cada fechamento, e reconcilia a projeção com a realidade sem
reescrever a linha de base aprovada. A separação entre o orçado (congelado) e o forecast (camada que
se atualiza) é o que preserva a responsabilização e, ao mesmo tempo, mantém a projeção útil.

## Fontes

- Corporate Finance Institute — modelos de orçamento em FP&A (incremental, ZBB, activity-based,
  driver-based, rolling forecast).
- Literatura de driver-based budgeting e de rolling forecast (planejamento contínuo).
- Beyond Budgeting (Hope & Fraser) — crítica ao orçamento anual fixo.
- CPC 27 / IAS 16 — depreciação por vida útil econômica, base da tabela de depreciação do CapEx.

> Conteúdo das fontes externas foi reescrito para conformidade com restrições de licenciamento. A
> metodologia da casa combina essas referências com o ajuste a mid-market brasileiro, validado em
> engajamento de projeção orçamentária multiunidade.
