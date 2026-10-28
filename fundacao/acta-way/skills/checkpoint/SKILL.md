---
name: checkpoint
description: Registre e retome o estado de um engajamento ACTA entre sessões e entre consultores. Acionar ao abrir qualquer sessão de trabalho num projeto, quando o consultor pedir o checkpoint, sinalizar que vai encerrar a sessão ou trocar de chat, quando a conversa estiver pesada e for hora de sugerir um chat novo, ou na pergunta diária de início de dia e fim de tarde.
argument-hint: "[abrir | fechar | consolidar]"
---

# Checkpoint ACTA

Sessão de Claude não atravessa pessoas. O que atravessa é **o arquivo na pasta compartilhada do
engajamento**. Esta skill é o protocolo de escrever e ler esse arquivo.

**A responsabilidade de saber em que versão está é do consultor, não do Claude.** Informe a versão
só ao abrir a sessão, na pergunta diária e ao fechar; se ele perguntar "em que versão estamos", leia
o arquivo.

---

## 1. Estrutura no engajamento

`~~controle/` guarda o `CHECKPOINT.md` (estado consolidado), `Sessoes/` (log append-only, uma entrada
por sessão) e o `APRENDIZADOS.md`. **Arquivo em `Sessoes/` nunca é editado depois de escrito**:
corrigiu, nova entrada. Decisão metodológica fica na entrada de sessão e é indexada no `CHECKPOINT.md`.

Detalhe: `references/contexto-e-estrutura.md` — carregue quando for montar a pasta ou explicar o
protocolo.

---

## 2. Os dois modos, detectados e não escolhidos

**Detecte tentando alcançar a pasta**; não pergunte o modo nem o guarde na memória. Claude Code lê e
grava direto em `~~controle/`; Desktop / Web pede o `CHECKPOINT.md` anexado e entrega o bloco pronto,
com nome e caminho. O **caminho da pasta** se pergunta uma vez por engajamento, nunca se presume, e
fica na seção 0 do `CHECKPOINT.md`.

Detalhe: `references/contexto-e-estrutura.md` — carregue quando estiver no modo Desktop / Web.

---

## 3. Momento 1: ABRIR a sessão

**Antes de produzir qualquer coisa.**

1. Ler `~~controle/CHECKPOINT.md`: versão, carimbo e campos de lembrete da seção 0.
2. Ler toda entrada de `~~controle/Sessoes/` posterior à consolidação.
3. Procurar cópia conflitante do OneDrive (`-<NOMEDAMAQUINA>.md`); se houver, avisar que alguém
   precisa reconciliar.
4. Avaliar defasagem (seção 6).
5. Avaliar se é caso da pergunta diária (seção 5).
6. **Fazer a leitura de volta e esperar confirmação.**

### A leitura de volta

Antes de produzir, diga a versão, a data e o autor da consolidação, as sessões não consolidadas que
leu e o que entendeu (etapa, decisões, pendências, próximo passo), e pergunte se confirma. No
Desktop, diga que não consegue verificar se existe versão mais nova.

Detalhe: `references/modelos-de-fala.md` — carregue quando quiser o modelo de texto.

---

## 4. Momento 2: quando GRAVAR

Só quatro gatilhos escrevem checkpoint:

1. **O consultor pede o checkpoint** ("atualiza o checkpoint", "gera o arquivo").
2. **O consultor sinaliza que está encerrando** a sessão, ou que vai trocar de chat.
3. **A conversa está pesada** (muitas trocas e ferramentas, o Claude Code oferecendo compactar):
   **avise antes de agir** e só então grave.
4. **A pergunta diária** (seção 5), quando o consultor responde que sim.

Fora deles não grave, nem a cada etapa, entregável ou decisão: acumule na conversa, consolide no
gatilho. **Sempre:** apresente o que vai entrar, **espere a validação**, só então grave.

Detalhe: `references/abrir-e-gravar.md` — carregue quando quiser o texto integral das seções 3 a 5.

---

## 5. A pergunta diária: o nudge de economia

Na abertura do dia e no fim da tarde, **nunca duas vezes na mesma janela**, mesmo entre chats: o
registro de que já perguntou mora no `CHECKPOINT.md`, não na sessão.

O texto da pergunta, os dois campos de estado na seção 0 do `CHECKPOINT.md` e o comportamento em
cada modo estão em [references/por-que-este-desenho.md](references/por-que-este-desenho.md).

---

## 6. Detecção de defasagem

| Consultores ativos | Avisa | Bloqueia produção até conferir |
|---|---|---|
| 1 | 2 dias úteis | 5 dias úteis |
| 2 ou mais | mesma jornada | 1 dia útil |

**Bloquear** é não produzir entregável sobre estado defasado até o consultor confirmar que conferiu
a pasta.

### 6.1 Bifurcação de sessão

Duas sessões partem do mesmo ponto e seguem em paralelo. Sintomas: duas entradas em `Sessoes/` do
mesmo consultor com horários sobrepostos, ou o `CHECKPOINT.md` mudou entre a sua leitura e a sua
gravação (seção 7, passo 4). **Ao detectar, não unifique por conta própria**: apresente as duas
linhas, onde divergiram, e pergunte qual prevalece.

Detalhe: `references/defasagem-e-bifurcacao.md` — carregue quando suspeitar de bifurcação.

---

## 7. Momento 3: FECHAR

Acionado por qualquer um dos quatro gatilhos da seção 4.

1. Montar a entrada de sessão pelo `references/TEMPLATE-entrada-de-sessao.md`, com tudo que se
   acumulou na conversa desde a última entrada.
2. Apresentar no chat. **Esperar validação.**
3. Gravar em `~~controle/Sessoes/AAAAMMDD-HHMM <Consultor>.md` (no Desktop, entregar o bloco pronto
   com nome e caminho exato).
4. **Reler** o `CHECKPOINT.md` e consolidá-lo: incorporar a entrada (e o que outro tenha consolidado
   em paralelo), subir a versão, carimbar data e autor.
5. Lição reutilizável em outro cliente: seção 9.

### 7.1 Handoff: quando a próxima sessão começa antes de esta acabar

Se o trabalho continua em outro lugar, a entrada leva também: o ponto exato em que a tarefa parou, o
que já foi tentado e não funcionou, as decisões fora do `CHECKPOINT.md`, qual sessão faz o quê e o
próximo passo. O resumo começa com `[handoff]`.

Detalhe: `references/fechar-e-handoff.md` — carregue quando for fazer handoff.

---

## 8. Datas: duas convenções

Nós escrevemos DD/MM por hábito, e isso quebra ordenação de arquivo.

- **Nome de arquivo e campo lido por máquina:** `AAAAMMDD-HHMM`. Ordena sozinho e não é ambíguo.
- **Prosa e entregável ao cliente:** `dd/mm/aaaa`, como a metodologia ACTA já manda.

---

## 9. Metodologia não é projeto

Estado e decisão do engajamento vão em `~~controle/`; regra, fórmula e template, no repositório do
plugin. `APRENDIZADOS.md` é o estágio intermediário: lição que vale para **outro cliente** se propõe
para a skill; a que vale só para este fica no `CHECKPOINT.md`.

Detalhe: `references/metodologia-e-conformidade.md` — carregue quando for promover lição.

---

## 10. Documentação e conformidade

Em auditoria interna é requisito (Norma 14.6 do IIA): toda entrada de sessão carrega **fonte do
dado**, **quem preparou**, **quando** e **revisão**.

Detalhe: `references/metodologia-e-conformidade.md` — carregue quando precisar citar a norma.

---

## 11. Templates

| Arquivo | Uso |
|---|---|
| `references/TEMPLATE-CHECKPOINT.md` | estado consolidado do engajamento, com os dois campos de lembrete diário na seção 0 |
| `references/TEMPLATE-entrada-de-sessao.md` | uma por sessão de trabalho |
| `references/TEMPLATE-APRENDIZADOS.md` | lição reutilizável |
| `references/TEMPLATE-CLAUDE.md` | raiz do engajamento, carregado automaticamente |

---

## 12. Por que este desenho

Padrões citáveis, combinados num desenho da ACTA para handoff entre sessões de agente. O racional
item a item está em [references/por-que-este-desenho.md](references/por-que-este-desenho.md).
