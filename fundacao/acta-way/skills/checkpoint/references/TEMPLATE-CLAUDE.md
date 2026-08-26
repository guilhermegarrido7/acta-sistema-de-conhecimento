# Template: `CLAUDE.md` e `AGENTS.md` da pasta do engajamento

Dois arquivos na **raiz da pasta de trabalho** do engajamento. O Claude Code os carrega
automaticamente ao abrir a pasta — é isso que faz o Claude de qualquer consultor ler o checkpoint
sem que ninguém precise pedir.

## Como instalar num projeto novo

1. Copiar o conteúdo do bloco `AGENTS.md` abaixo para `~~pasta de trabalho/AGENTS.md`.
2. Copiar o bloco `CLAUDE.md` para `~~pasta de trabalho/CLAUDE.md`.
3. Preencher os campos entre chaves.

**Use o import `@AGENTS.md`, não symlink.** No Windows, criar link simbólico exige privilégio de
administrador ou Modo de Desenvolvedor — o import funciona sempre.

**Limite: 200 linhas.** Arquivo maior consome contexto em toda sessão e reduz a adesão às regras.
Detalhe de método vai na skill do plugin, não aqui. Estado do projeto vai no `CHECKPOINT.md`, não
aqui. Aqui ficam só as regras estáveis do engajamento.

---

## Bloco 1: `AGENTS.md`

```markdown
# Engajamento: {{CLIENTE}} — {{PROJETO}}

Prática: {{Consultoria Empresarial / Governança, Riscos e Compliance}}
Plugin ACTA: `{{acta-pesquisa-salarial}}`
Consultores: {{nomes}}

## Antes de qualquer coisa

1. Leia `{{pasta de controle}}/CHECKPOINT.md`.
2. Liste `{{pasta de controle}}/Sessoes/`. Toda entrada posterior à última consolidação
   é trabalho que ainda não entrou no estado: leia todas.
3. Faça a leitura de volta — diga o que entendeu do estado — e **espere confirmação**
   antes de produzir.

Se não conseguir alcançar essas pastas, você está em modo Desktop: peça o `CHECKPOINT.md`
anexado e avise que não consegue verificar se existe versão mais recente.

## Ao fim da sessão

Grave a entrada em `{{pasta de controle}}/Sessoes/AAAAMMDD-HHMM <Consultor>.md` e
consolide o `CHECKPOINT.md`. Apresente antes, espere validação, só então grave.

## Nunca

- Gravar, mover ou renomear qualquer coisa em `{{pasta do cliente}}`. Somente leitura.
- Editar arquivo que já existe em `Sessoes/`. São imutáveis.
- Presumir caminho de arquivo ou de pasta. Se o insumo não foi informado, **pergunte**.

## Caminhos

| Placeholder | Neste engajamento |
|---|---|
| `~~pasta de trabalho` | `{{caminho}}` |
| `~~arquivos recebidos` | `{{caminho}}` — somente leitura |
| `~~controle` | `{{caminho}}` |
| `~~entregaveis` | `{{caminho}}` |
```

---

## Bloco 2: `CLAUDE.md`

```markdown
@AGENTS.md
```

Uma linha. O Claude Code lê `CLAUDE.md`, não `AGENTS.md`; o import faz os dois apontarem para o
mesmo conteúdo, sem duplicar. Se o engajamento tiver alguma regra específica de Claude Code, ela
entra abaixo do import.

---

## Por que dois arquivos

`AGENTS.md` é convenção aberta, hoje sob a Agentic AI Foundation da Linux Foundation, lida por
Codex, Cursor, Copilot, Gemini CLI, Windsurf e outros. `CLAUDE.md` é o que o Claude Code lê. Manter
os dois custa uma linha e garante que a pasta continue funcionando se alguém da equipe usar outra
ferramenta.
