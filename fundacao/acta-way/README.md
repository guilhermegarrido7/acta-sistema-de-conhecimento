# ACTA Way

Método transversal à firma inteira. É a camada de fundação do Sistema de Conhecimento: o que vale
para **todo** projeto da ACTA, seja de Consultoria Empresarial ou de Governança, Riscos e
Compliance.

Todo plugin de projeto assume que este está carregado e **não repete** o que está aqui.

## Skills

| Skill | O que traz | Status |
|---|---|---|
| `checkpoint` | Como registrar e retomar o estado de um engajamento entre sessões e entre consultores | ✅ |
| `ambiente-tecnico` | Armadilhas de Windows, OneDrive e automação Office, com a solução que funcionou | ✅ |

## Hook: lembrete de always-on

`hooks/session-start.js` dispara uma vez a cada sessão nova (evento `SessionStart`), independente
do assunto da conversa. Ele lê `~/.claude/settings.json` e, se algum plugin `@acta-sistema-de-
conhecimento` estiver habilitado, instrui o Claude a mencionar isso na primeira resposta e sugerir
desativar o que não estiver em uso:

> Plugins do ACTA Sistema de Conhecimento habilitados nesta máquina: `acta-pesquisa-salarial`.
> Se esta conversa não for sobre um dos projetos acima, considere `claude plugin disable <nome>`.

**Por que isso existe:** custo always-on é cobrado por plugin **habilitado**, não por skill
**usada** — a `description` de toda skill instalada precisa estar disponível para o Claude decidir
se ela é relevante, mesmo antes de saber do que você vai falar. Instalar não é o problema; deixar
ligado sem usar, sim.

Se nenhum plugin ACTA estiver habilitado, o hook não produz saída nenhuma — silencioso por
construção, nunca interrompe uma sessão que não tem nada a ver com isto.

## Por que o checkpoint existe

Sessão de Claude não atravessa pessoas. Sessões ficam guardadas por diretório e por máquina, e
desktop, web e IDE mantêm históricos separados. Um consultor decide algo às 16h e o Claude do colega
às 9h do dia seguinte não sabe de nada.

O que atravessa é o arquivo na pasta compartilhada do engajamento:

```
~~pasta de trabalho/
├── CLAUDE.md          carregado automaticamente pelo Claude Code
├── AGENTS.md          mesmo conteúdo, para outras ferramentas
└── ~~controle/
    ├── CHECKPOINT.md  estado consolidado. Quem chega lê ISTO.
    ├── Sessoes/       uma entrada por sessão, imutável, nunca conflita
    └── APRENDIZADOS.md
```

A skill `checkpoint` traz o protocolo dos quatro momentos, a detecção automática do modo de operação
(Claude Code com acesso à pasta, ou Desktop sem acesso), a regra de defasagem, e os templates.

## Instalar num projeto novo

Copie os templates de `skills/checkpoint/references/` para a pasta do engajamento. O
`TEMPLATE-CLAUDE.md` traz o passo a passo — são cinco minutos, uma vez por projeto.

## Roadmap

Falta escrever, nesta ordem de utilidade:

- `identidade-visual` — paleta ACTA, tipografia, o que nunca aparece num entregável
- `convencoes-de-entregavel` — nomenclatura de arquivo, versionamento, estrutura de PPTX e XLSX
- `anonimizacao-e-lgpd` — mínimos de agregação, o que não se publica, base legal
- `redacao-acta` — primeira pessoa do plural, pretérito, vocabulário fechado, sem adjetivo de intensidade

Hoje cada projeto reescreve essas quatro por conta própria, que é exatamente o que a camada de
fundação existe para evitar.
