# CHECKPOINT: {{NOME DO PROJETO}}

Este é o template de checkpoint do plugin `pesquisa-salarial`. Copiar para cada
novo projeto em duas modalidades, conforme o número de consultores envolvidos.

## Como instanciar em um projeto novo

**Se houver apenas um consultor:** copiar este arquivo como `CHECKPOINT.md` na
pasta mestre do projeto. É o único arquivo de checkpoint necessário.

**Se houver mais de um consultor trabalhando em paralelo** (foi o caso da FJS,
com três consultores): manter dois níveis.

1. Um arquivo mestre `CHECKPOINT.md` na pasta mestre do projeto (ex.: OneDrive),
   consolidado periodicamente a partir dos arquivos individuais.
2. Um arquivo por consultor dentro dos anexos do Project no Claude, nomeado
   `CHECKPOINT (Nome do Consultor).md`, preenchido pelas criações e atualizações
   que aquele consultor realizou. No início do corpo de cada arquivo individual,
   incluir uma linha de instrução equivalente a: "Este é o documento de
   checkpoint do consultor {{NOME}}; sinalize a ele quando uma etapa do
   planejamento, uma criação ou uma alteração de arquivo tiver sido realizada,
   para que o checkpoint seja atualizado nos anexos do projeto e também na
   pasta mestre."

Em ambos os casos, o corpo do documento (seções 1 a 9 abaixo) segue a mesma
estrutura. O que muda é apenas quem escreve e onde o arquivo vive.

---

Documento vivo. Atualizar ao final de toda sessão de trabalho, por qualquer
consultor. É o mecanismo que substitui o compartilhamento de conversas: quem
retoma o projeto lê este arquivo primeiro e o carrega junto com o `SKILL.md`.

**Última atualização:** `{{DATA}}`
**Atualizado por:** `{{CONSULTOR OU "setup inicial"}}`
**Etapa atual:** `{{Etapa X, nome da etapa}}`
**Semana do projeto:** `{{N de M}}`

---

## 1. Estado do projeto

| Dimensão | Situação |
| --- | --- |
| Contrato | `{{status}}` |
| Escopo | `{{n cargos confirmados, ressalvas}}` |
| D0 | `{{data}}` |
| Conclusão declarada no plano | `{{data}}` |
| Conclusão calculada pelo cronograma atual | `{{data, ou "confere com o declarado"}}` |
| Base do cliente | `{{recebida / parcial / não recebida}}` |
| Painel de participantes | `{{status}}` |
| Plano de comunicação | `{{status}}` |
| Ferramenta de coleta | `{{status}}` |
| Responsável ACTA nomeado | `{{status}}` |
| Repositório seguro | `{{status}}` |

## 2. Semáforo por entrega da etapa atual

| Entrega | Status | Bloqueio |
| --- | --- | --- |
| `{{entrega 1}}` | `{{status}}` | `{{bloqueio, se houver}}` |

## 3. Decisões metodológicas tomadas

| ID | Data | Decisão | Onde está registrada |
| --- | --- | --- | --- |
| DM-01 | `{{data}}` | `{{decisão}}` | `{{referência no livro de cálculos ou outro módulo}}` |

## 4. Decisões metodológicas pendentes

| ID | Decisão | Quem decide | Prazo |
| --- | --- | --- | --- |
| DP-01 | `{{decisão}}` | `{{responsável}}` | `{{prazo}}` |

## 5. Pendências de insumo (rastreio periódico)

| # | Insumo | Responsável | Compromisso | Status |
| --- | --- | --- | --- | --- |
| P-01 | `{{insumo}}` | `{{responsável}}` | `{{data ou "sem data firme"}}` | `{{status}}` |

## 6. Achados de qualidade já registrados

1. `{{achado, ex.: duplicidade na base de cargos, inconsistência de nomenclatura}}`

## 7. Bases de dados: estado

| Base | Existe | Versão | Observação |
| --- | --- | --- | --- |
| `B1_CARGOS_CLIENTE` | `{{status}}` | `{{versão}}` | `{{observação}}` |

## 8. Próximos passos imediatos

1. `{{passo}}`

---

## 9. Log de sessões

Formato obrigatório. Uma entrada por sessão de trabalho, a mais recente no
topo.

```
### [AAAA-MM-DD] Consultor: [nome] | Duração: [h]
Objetivo da sessão:
Feito:
Arquivos criados ou alterados (com versão):
Decisões tomadas (com ID e onde foram registradas):
Pendências geradas (com responsável):
Próximo passo para quem retomar:
```
