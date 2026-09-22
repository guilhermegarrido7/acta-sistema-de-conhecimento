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
| `edicao-em-massa` | Alterar muitos arquivos de uma vez sem quebrar nenhum: substituição por token inteiro, a armadilha do YAML que apaga a skill em silêncio, e a validação obrigatória depois | ✅ |
| `identidade-visual` | A paleta e a tipografia da casa em qualquer suporte, a regra de contraste que impede o turquesa de carregar texto em fundo claro, e a reconciliação com o tema do PowerPoint | ✅ |
| `convencoes-de-entregavel` | Nomear, versionar e arquivar arquivo de projeto: data em prefixo, contagem de versão por documento, versões anteriores, quarentena de legado e o que muda quando o arquivo sai da casa | ✅ |
| `anonimizacao-e-lgpd` | Caso real vira exemplo anonimizado: o validador que barra nome publicado, a diferença entre anonimizar e agregar, e o que fazer quando o cliente manda base com CPF | ✅ |
| `redacao-acta` | O padrão de escrita da firma: zero travessões, sem enchimento, título de ação no slide, a doutrina do número exato e a forma de achado e recomendação | ✅ |

## Hook: lembrete de always-on

`hooks/session-start.js` dispara uma vez a cada sessão nova (evento `SessionStart`), independente
do assunto da conversa. Ele lê `~/.claude/settings.json` e, se algum plugin `@acta-sistema-de-
conhecimento` estiver habilitado, instrui o Claude a mencionar isso na primeira resposta e sugerir
desativar o que não estiver em uso:

> Plugins do ACTA Sistema de Conhecimento habilitados nesta máquina: `acta-pesquisa-salarial`.
> Se esta conversa não for sobre um dos projetos acima, considere `claude plugin disable <nome>`.

**Por que isso existe:** custo always-on é cobrado por plugin **habilitado**, não por skill
**usada**: a `description` de toda skill instalada precisa estar disponível para o Claude decidir
se ela é relevante, mesmo antes de saber do que você vai falar. Instalar não é o problema; deixar
ligado sem usar, sim.

Se nenhum plugin ACTA estiver habilitado, o hook não produz saída nenhuma, silencioso por
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
`TEMPLATE-CLAUDE.md` traz o passo a passo: são cinco minutos, uma vez por projeto.

## Roadmap

As sete skills da fundação estão escritas. O que a camada de fundação existe para evitar é cada
projeto reescrever por conta própria a paleta, a nomenclatura, a régua de anonimização e o padrão de
escrita, então **skill de projeto não redefine nenhuma das quatro**: aponta para cá e acrescenta só o
que é particular daquele tipo de trabalho.

Dois pontos abertos, para quando houver decisão:

- O tema "ACTA" instalado no PowerPoint diverge da paleta e da tipografia da web. A divergência está
  declarada em `identidade-visual`, seção 4, com a regra de qual vale em qual suporte. Quando o tema
  for revisto para convergir, é aquela tabela que muda.
- `clientes.local.txt`, que alimenta a checagem de nome do validador, é mantido por máquina de
  propósito, então cliente novo exige que cada consultor acrescente o nome na própria lista. Ver
  `anonimizacao-e-lgpd`, seção 2.
