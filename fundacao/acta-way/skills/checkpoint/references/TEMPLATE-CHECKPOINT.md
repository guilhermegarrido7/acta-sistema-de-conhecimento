# CHECKPOINT — {{CLIENTE}} · {{PROJETO}}

> Documento vivo, consolidado pelo Claude ao fim de cada sessão.
> **Quem retoma o projeto lê este arquivo primeiro.**
> Nunca edite `Sessoes/` retroativamente: aquelas entradas são imutáveis.

**Versão:** `v{{N}}`
**Consolidado em:** `{{AAAAMMDD-HHMM}}`
**Consolidado por:** `{{CONSULTOR}}`

---

## 0. Identidade do engajamento

| | |
|---|---|
| Cliente | `{{cliente}}` |
| Projeto | `{{projeto}}` |
| Prática | `{{Consultoria Empresarial / Governança, Riscos e Compliance}}` |
| Plugin ACTA em uso | `{{acta-pesquisa-salarial, acta-auditoria-folha, ...}}` |
| Pasta de trabalho | `{{caminho completo — ~~pasta de trabalho}}` |
| Pasta do cliente (somente leitura) | `{{caminho — ~~arquivos recebidos}}` |
| Pasta de entregáveis | `{{caminho — ~~entregaveis}}` |
| Sócio responsável | `{{nome}}` |
| Consultores ativos | `{{nomes, separados por vírgula}}` |
| D0 | `{{dd/mm/aaaa}}` |
| Conclusão prevista | `{{dd/mm/aaaa}}` |

> A contagem de **consultores ativos** define o limiar de defasagem: com 2 ou mais, o checkpoint
> fica defasado na virada da jornada e bloqueia produção após 1 dia útil.

## 1. Semáforo

**Status:** `{{🟢 no rumo / 🟡 atenção / 🔴 em risco}}`
**Porque:** `{{uma frase, factual, sem adjetivo de intensidade}}`

## 2. Estado por etapa

| Etapa | Status | Observação |
|---|---|---|
| `{{1, nome}}` | `{{concluída / em curso / não iniciada}}` | `{{}}` |

## 3. Próximos passos

Lista de ação, separada do estado. Nunca em prosa.

| # | O quê | Quem | Até quando |
|---|---|---|---|
| 1 | `{{ação}}` | `{{responsável}}` | `{{dd/mm/aaaa}}` |

## 4. Riscos e contingências

O que pode dar errado e o que fazer se der.

| Risco | Sinal de alerta | Contingência |
|---|---|---|
| `{{risco}}` | `{{como se percebe}}` | `{{o que fazer}}` |

## 5. Decisões metodológicas

Índice. O registro completo, com justificativa e contrapartida, está na entrada de sessão indicada.

| ID | Data | Decisão | Registrada em |
|---|---|---|---|
| DM-01 | `{{dd/mm/aaaa}}` | `{{decisão em uma linha}}` | `Sessoes/{{arquivo}}` |

### Decisões pendentes

| ID | Decisão | Quem decide | Até quando |
|---|---|---|---|
| DP-01 | `{{}}` | `{{}}` | `{{}}` |

## 6. Pendências de insumo

| # | Insumo | De quem | Pedido em | Status |
|---|---|---|---|---|
| P-01 | `{{}}` | `{{}}` | `{{dd/mm/aaaa}}` | `{{aberta / recebida / sem data firme}}` |

## 7. Entregáveis e versões

| Entregável | Versão | Local | Última alteração |
|---|---|---|---|
| `{{}}` | `{{}}` | `~~entregaveis/{{}}` | `{{dd/mm/aaaa}} por {{consultor}}` |

---

## 8. Sessões consolidadas

Ordem cronológica inversa. Toda entrada em `Sessoes/` com timestamp posterior à consolidação desta
versão ainda **não** está refletida acima.

| Sessão | Consultor | Entrou na versão |
|---|---|---|
| `{{AAAAMMDD-HHMM}}` | `{{nome}}` | `v{{N}}` |
