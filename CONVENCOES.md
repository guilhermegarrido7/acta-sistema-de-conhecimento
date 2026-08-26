# Convenções do repositório

Contrato que todo plugin deste repositório segue. Vale para quem escreve skill e para o Claude que
a executa.

## 1. Placeholders de pasta

Skill **não contém caminho de máquina**. Caminho é do engajamento e da pessoa, não do método: se
entrar na skill, ela para de funcionar para o resto da equipe no dia seguinte.

Onde a skill precisa se referir a um lugar, usa um placeholder `~~`:

| Placeholder | Significa |
|---|---|
| `~~arquivos recebidos` | Pasta compartilhada com o cliente. **Somente leitura.** Nunca gravar, mover, renomear ou criar arquivo nela. |
| `~~pasta de trabalho` | Raiz ACTA do engajamento, onde o trabalho é produzido. |
| `~~controle` | Pasta de controle do engajamento: `HISTORICO.md`, `APRENDIZADOS.md`. |
| `~~entregaveis` | Saída de decks, planilhas e relatórios finais. |
| `~~interpretador python` | Python local, resolvido em execução — nunca escrito literalmente. |

A convenção é a mesma que a Anthropic usa em `CONNECTORS.md` para conectores: descrever a
**categoria**, não o produto.

## 2. A regra de perguntar

> **Se o insumo necessário não foi informado, pergunte antes de agir.**

Não deduza pelo nome do arquivo. Não escolha "o mais recente". Não assuma a pasta padrão. Não invente
um caminho plausível.

Uma pergunta custa um turno. Um entregável construído sobre o arquivo errado custa o trabalho inteiro
e, pior, a confiança no número.

Vale para: qual base, qual competência, qual versão do papel de trabalho, qual pasta do engajamento,
qual recorte, qual data de referência.

## 3. Camadas: o que vai onde

| Camada | Onde | O que |
|---|---|---|
| Fundação | `fundacao/acta-way` | Método transversal a **toda** a firma: identidade visual, convenções de entregável, ambiente técnico, anonimização e LGPD, checkpoint, ritual de aprendizado. |
| Método de prática | `<pratica>/_metodo` | Como se conduz um trabalho **daquela prática** — auditoria ou consultoria. |
| Projeto | `<pratica>/<projeto>` | Só o que é **particular daquele projeto**: as skills de etapa do ciclo de vida. |

**Não repita camada de baixo na de cima.** Se a regra vale para todo projeto, ela mora em `acta-way`
e a skill de etapa apenas manda carregá-la. Duplicar significa corrigir em 32 lugares.

## 3b. Checkpoint: o estado atravessa pessoas, a sessão não

Sessão de Claude é por pessoa e por máquina. O que a equipe compartilha é o arquivo na pasta do
engajamento. Todo projeto da ACTA mantém:

```
~~pasta de trabalho/
├── CLAUDE.md · AGENTS.md      regras estáveis, carregadas automaticamente
└── ~~controle/
    ├── CHECKPOINT.md          estado consolidado. Quem chega lê ISTO primeiro.
    ├── Sessoes/               uma por sessão, imutável, nome único, nunca conflita
    └── APRENDIZADOS.md        lição reutilizável em outro cliente
```

Duas regras que não se negociam:

- **Arquivo em `Sessoes/` nunca é editado depois de gravado.** Corrigiu? Nova entrada.
- **Apresentar, esperar validação, só então gravar.** Nunca escrever calado.

O protocolo completo está em `acta-way`, skill `checkpoint`. Skill de projeto **não redefine** o
mecanismo: aponta para ele e acrescenta só o que é específico daquele tipo de trabalho.

## 4. Anatomia de um plugin

```
<pratica>/<projeto>/
├── .claude-plugin/plugin.json     name, version, description, author — e nada mais
├── README.md                      o que faz, tabela de skills, fluxo típico
├── skills/<etapa>/SKILL.md        uma pasta por skill
│   └── references/                material de apoio daquela skill
├── casos/<cliente>.md             o engajamento como aconteceu
└── benchmarks/<cliente>.md        o que dali é reutilizável em outro cliente
```

Sem `SKILL.md` na raiz do plugin e sem campo `skills` no manifesto: as skills são auto-descobertas de
`skills/*/SKILL.md`. É o padrão dos plugins de negócio da Anthropic (`data`, `finance`, `legal`).

## 5. Frontmatter de skill

```yaml
---
name: <igual ao nome da pasta, kebab-case>
description: <verbo no imperativo, o entregável>. Acionar ao <gatilho 1>, ao <gatilho 2>, ao <gatilho 3>, ou ao <gatilho 4>.
user-invocable: false   # só para skill de conhecimento de fundo, que não é uma ação
---
```

- `description` entre **220 e 380 caracteres**. Ela carrega em **toda sessão** — é o que custa
  contexto permanente e é o que faz o roteamento. Longa demais desperdiça; vaga demais não dispara.
- **Nome de cliente não entra na `description`.** Cliente é caso de benchmark, vive em `casos/`.
- Nome de pessoa não entra em lugar nenhum do método: use o papel (*o auditor responsável*,
  *o sócio responsável*, *o revisor de WP*).

## 6. Casos e benchmarks

Cliente tem valor como referência de engajamento, não como gatilho de skill:

- `casos/<cliente>.md` — o que foi feito, como, o que deu errado, quanto custou.
- `benchmarks/<cliente>.md` — o que dali se generaliza e vale no próximo cliente.

Fora da `description`, o caso não custa contexto permanente e fica onde é consultável quando se
quer comparar com um engajamento anterior.
