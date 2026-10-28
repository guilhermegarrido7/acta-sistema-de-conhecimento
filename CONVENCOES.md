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
| `~~interpretador python` | Python local, resolvido em execução, nunca escrito literalmente. |

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
| Método de prática | `<pratica>/_metodo` | Como se conduz um trabalho **daquela prática**: auditoria ou consultoria. |
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

O protocolo completo está em `acta-way:checkpoint`. Skill de projeto **não redefine** o
mecanismo: aponta para ele e acrescenta só o que é específico daquele tipo de trabalho.

**A dependência é declarada no `plugin.json`.** O manifesto tem o campo `dependencies`, e o
`claude plugin install` instala junto o que estiver listado ali, resolvendo pelo nome dentro do mesmo
marketplace ([documentação](https://code.claude.com/docs/en/plugin-dependencies)). Sem a declaração,
o texto "carregue `acta-way:checkpoint`" dentro de uma skill aponta para uma skill que não
existe na sessão, e falha calada.

**Regra de todo plugin:**

- `dependencies` lista `acta-way` (em todos, menos no próprio `acta-way`) e o método da prática
  quando as skills mandam carregá-lo: `acta-metodo-auditoria` nos plugins de processo auditado,
  `acta-metodo-consultoria` nos de consultoria que o usam.
- O `README.md` mantém o aviso de pré-requisito no topo, com o comando de instalação manual, para
  quem usa uma versão do Claude Code que não instala dependências.
- `scripts/validar-skills.py` barra plugin publicado sem `acta-way` nas dependências, ou com
  dependência que não está no `marketplace.json`.

## 3c. Custo always-on: instale só o que está em uso

Todo plugin **habilitado** soma tokens fixos em **toda sessão nova**, mesmo em conversas sem relação
nenhuma com ele. É o preço de manter a `description` de cada skill disponível para o roteamento
antes mesmo de o Claude saber do que você vai falar. Não é cobrado por skill usada, é cobrado por
plugin ligado.

`acta-way` traz um hook de `SessionStart` (`fundacao/acta-way/hooks/`) que lembra disso uma vez por
sessão nova, só quando algum plugin ACTA está habilitado, e sugere desativar o que não estiver em
uso:

```bash
claude plugin disable <nome>    # some do custo, reversível
claude plugin enable <nome>     # volta a qualquer momento
```

Regra prática: habilite o plugin do projeto em que você está trabalhando; desative ao encerrar,
`uninstall` só se não for retomar tão cedo.

**E a listagem tem teto.** Os nomes e as descrições das skills cabem num orçamento de 1% da janela de
contexto do modelo. Quando passa disso, o Claude Code corta as descrições das skills menos usadas e
mantém só o nome, e a skill certa deixa de disparar porque o gatilho sumiu
([documentação](https://code.claude.com/docs/en/skills)). Habilitar tudo custa contexto e também
piora o roteamento. `/doctor` mostra o custo da listagem na sua máquina, e `/skill-doctor` aponta o
que desligar.

`user-invocable: false` não economiza nada: só tira a skill do menu `/`, e a descrição continua no
contexto. A descrição só sai do contexto com `disable-model-invocation: true`, que também impede o
Claude de carregar a skill sozinho. Serve para ação manual, não para conhecimento de fundo.

## 4. Anatomia de um plugin

```
<pratica>/<projeto>/
├── .claude-plugin/plugin.json     name, version, description, author e dependencies
├── README.md                      o que faz, tabela de skills, fluxo típico
├── skills/<etapa>/SKILL.md        uma pasta por skill
│   └── references/                material de apoio daquela skill
├── casos/<caso>.md                o engajamento como aconteceu, anonimizado
└── benchmarks/<caso>.md           o que dali é reutilizável em outro cliente
```

Sem `SKILL.md` na raiz do plugin e sem campo `skills` no manifesto: as skills são auto-descobertas de
`skills/*/SKILL.md`. É o padrão dos plugins de negócio da Anthropic (`data`, `finance`, `legal`).

## 5. Frontmatter de skill

```yaml
---
name: <igual ao nome da pasta, kebab-case>
description: <verbo no imperativo, o entregável>. Acionar ao <gatilho 1>, ao <gatilho 2>, ao <gatilho 3>, ou ao <gatilho 4>.
user-invocable: false   # tira do menu /; não reduz custo, a description segue no contexto (§3c)
---
```

- `description` entre **220 e 380 caracteres**. Ela carrega em **toda sessão**: é o que custa
  contexto permanente e é o que faz o roteamento. Longa demais desperdiça; vaga demais não dispara.
  O Claude Code corta cada entrada em 1.536 caracteres; o teto da casa é bem menor de propósito,
  porque o que pesa é o orçamento total da listagem (§3c).
- Quando uma skill mandar carregar outra de outro plugin, nomeie a skill
  (`acta-metodo-auditoria:metodo-auditoria`), não o plugin inteiro. "Carregue
  `acta-metodo-consultoria`" deixa o agente escolher entre carregar seis skills ou nenhuma.
- **Nome de cliente não entra na `description`.** Cliente é caso de benchmark, vive em `casos/`.
- Nome de pessoa não entra em lugar nenhum do método: use o papel (*o auditor responsável*,
  *o sócio responsável*, *o revisor de WP*).

## 6. Casos e benchmarks

Cliente tem valor como referência de engajamento, não como gatilho de skill:

- `casos/<caso>.md`: o que foi feito, como, o que deu errado, quanto custou.
- `benchmarks/<caso>.md`: o que dali se generaliza e vale no próximo cliente.

O nome do arquivo e o texto identificam o cliente pelo setor e pelo porte, nunca pelo nome
(`caso-a.md`, "Grande gerador corporativo, setor siderúrgico"). O validador barra os nomes de
`clientes.local.txt` em todo `.md` do repositório, inclusive nestas duas pastas.

Fora da `description`, o caso não custa contexto permanente e fica onde é consultável quando se
quer comparar com um engajamento anterior.
