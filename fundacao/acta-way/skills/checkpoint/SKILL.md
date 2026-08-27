---
name: checkpoint
description: Registre e retome o estado de um engajamento ACTA entre sessões e entre consultores. Acionar ao abrir qualquer sessão de trabalho num projeto, quando o consultor pedir o checkpoint, sinalizar que vai encerrar a sessão ou trocar de chat, quando a conversa estiver pesada e for hora de sugerir um chat novo, ou na pergunta diária de início de dia e fim de tarde.
argument-hint: "[abrir | fechar | consolidar]"
---

# Checkpoint ACTA

Sessão de Claude não atravessa pessoas. Sessões são armazenadas por diretório e por máquina, e
desktop, web e IDE mantêm históricos separados. Quando um consultor decide algo às 16h, o Claude do
colega às 9h do dia seguinte não sabe de nada.

O que atravessa é **o arquivo na pasta compartilhada do engajamento**. Esta skill é o protocolo de
escrever e ler esse arquivo.

> **A metade que todo mundo esquece.** Escrever o checkpoint não resolve nada sozinho. Se ninguém
> obriga o Claude do colega a **ler** no início da sessão, o arquivo existe e continua invisível.
> Por isso o protocolo tem momentos de leitura e momentos de escrita, e eles não são os mesmos.

**A responsabilidade de saber em que versão está é do consultor, não do Claude.** Esta skill não
fica anunciando "estamos na v14" a cada resposta, nem grava a cada etapa concluída ou decisão
tomada — isso é ruído, e checkpoint que interrompe demais vira checkpoint ignorado. O Claude informa
a versão nos momentos definidos abaixo: ao abrir a sessão, na pergunta diária, e ao fechar. Fora
disso, se o consultor perder a conta, a saída é simples: perguntar "em que versão estamos", que
aciona a leitura do arquivo.

---

## 1. Estrutura no engajamento

```
~~pasta de trabalho/
├── CLAUDE.md                          carregado automaticamente pelo Claude Code
├── AGENTS.md                          mesmo conteúdo, para outras ferramentas
└── ~~controle/
    ├── CHECKPOINT.md                  estado consolidado. Quem chega lê ISTO.
    ├── Sessoes/
    │   ├── 20260826-1430 Guilherme.md imutável, nunca conflita
    │   └── 20260826-0915 Maria.md
    └── APRENDIZADOS.md                lição reutilizável em OUTRO cliente
```

Dois artefatos com papéis distintos, e a distinção é o que faz o mecanismo sobreviver ao OneDrive:

| | `Sessoes/*.md` | `CHECKPOINT.md` |
|---|---|---|
| Natureza | log de eventos, **append-only** | estado derivado, **consolidado** |
| Escrita | um arquivo novo por sessão | reescrito a cada consolidação |
| Conflito | impossível: nome único por construção | possível, mas **reconstruível a partir do log** |
| Quem edita | quem trabalhou | o Claude, ao fechar a sessão |

**Arquivo em `Sessoes/` nunca é editado depois de escrito.** Corrigiu algo? Nova entrada dizendo o
que corrige. É o que preserva o porquê da decisão original junto do seu contexto.

**Decisão metodológica não tem arquivo próprio.** Fica na entrada de sessão (imutável) e é indexada
na tabela de decisões do `CHECKPOINT.md`, que aponta de volta para a sessão onde foi tomada.

---

## 2. Os dois modos, detectados e não escolhidos

Não pergunte o modo, nem guarde na memória: memória de Claude é por pessoa e não chega no colega,
que é exatamente o problema que este mecanismo resolve. **Detecte tentando alcançar a pasta.**

| | Modo Claude Code | Modo Desktop / Web |
|---|---|---|
| Detecção | consegue ler `~~controle/` | não consegue |
| Leitura | lê `CHECKPOINT.md` e lista `Sessoes/` | pede o `CHECKPOINT.md` anexado |
| Escrita | grava direto; o OneDrive sincroniza | gera o bloco pronto, com nome de arquivo e caminho, e pede o upload |
| Defasagem | **detecta de fato** | **estima pela idade** |
| Cópia conflitante | **detecta** | invisível |

O que **precisa** ser perguntado uma vez por engajamento é o **caminho da pasta** — nunca presuma
(regra da casa). Uma vez sabido, ele fica registrado na seção 0 do `CHECKPOINT.md`, onde todo
consultor lê do mesmo lugar.

---

## 3. Momento 1: ABRIR a sessão

**Antes de produzir qualquer coisa.**

1. Ler `~~controle/CHECKPOINT.md`. Anotar a versão, o carimbo de consolidação, e os dois campos de
   lembrete da seção 0 (`Última pergunta diária`, `Última pergunta pós-17h`).
2. Listar `~~controle/Sessoes/`. Toda entrada com timestamp **posterior** à consolidação é trabalho
   que ainda não entrou no estado: ler todas.
3. Procurar cópia conflitante do OneDrive, arquivo terminado em `-<NOMEDAMAQUINA>.md`. Se existir,
   avisar: houve edição simultânea e alguém precisa reconciliar. O OneDrive guarda no máximo
   **5** dessas e não avisa ninguém.
4. Avaliar defasagem (seção 6).
5. Avaliar se é caso da pergunta diária (seção 5) — não é a mesma coisa que a leitura de volta
   abaixo: a leitura de volta confirma entendimento, a pergunta diária oferece gerar um checkpoint
   novo.
6. **Fazer a leitura de volta e esperar confirmação.**

### A leitura de volta

Não basta ler; é preciso demonstrar que entendeu, e deixar o consultor corrigir antes de você
produzir em cima de um entendimento errado.

```
Li o CHECKPOINT.md v14, consolidado em 26/08 14:30 por Guilherme Garrido.

Atenção: há 2 sessões não consolidadas, ambas da Maria (26/08 16:20 e 27/08 09:05). Li as duas.

Entendo que:
- Etapa 3, coleta. 8 de 12 participantes responderam.
- DM-04 fixou o critério de nivelamento por conteúdo.
- 2 pendências abertas, ambas com a Maria.
- Próximo passo: fechar o matching dos 4 cargos de TI.

Confirma, ou algo mudou desde então?
```

No modo Desktop, o mesmo, com o limite dito na cara:

```
O checkpoint anexado é v14, de 25/08. Hoje é 27/08.
Não consigo verificar se existe versão mais nova. Confira na pasta antes de prosseguir.
```

---

## 4. Momento 2: quando GRAVAR

Só quatro gatilhos escrevem checkpoint. Fora deles, o trabalho segue normalmente na conversa — o
que foi feito, decidido ou pendente fica ali, e só vira uma entrada de sessão quando um destes
ocorrer:

1. **O consultor pede o checkpoint** — explicitamente, invocando a skill ou simplesmente pedindo
   "atualiza o checkpoint" / "gera o arquivo".
2. **O consultor sinaliza que está encerrando** a sessão, ou que vai trocar de chat.
3. **A conversa está pesada.** Você percebe sinais de contexto extenso — muitas trocas, muita
   ferramenta chamada, o próprio Claude Code oferecendo resumir/compactar a sessão — e é hora de
   sugerir abrir um chat novo. Nesse caso, **avise antes de agir:**

   > Esta conversa está ficando pesada em contexto. Vou gerar o checkpoint agora para você abrir um
   > chat novo sem perder o que fizemos.

   e só então grave.
4. **A pergunta diária** (seção 5), quando o consultor responde que sim.

**Não grave fora destes quatro casos** — nem a cada etapa concluída, nem a cada entregável criado,
nem a cada decisão isolada. Acumule na conversa; consolide no gatilho.

**Sempre, nos quatro casos:** apresente o que vai entrar na entrada de sessão, **espere a
validação**, só então grave. Nunca escreva calado.

---

## 5. A pergunta diária: o nudge de economia

Independente dos gatilhos da seção 4, ofereça gerar o checkpoint em até **duas janelas por dia
corrido** — nunca mais que isso, mesmo que a conversa continue por horas ou vire outro chat.

| Janela | Dispara quando | Só pergunta se |
|---|---|---|
| Início do dia | a primeira mensagem de uma sessão cai numa data diferente da registrada em `Última pergunta diária` | ainda não perguntou hoje |
| Fim de tarde | qualquer mensagem depois das 17h (confira a hora real, ex.: comando `date` no Bash, não deduza) | ainda não perguntou depois das 17h hoje |

A pergunta é curta e sempre informa a versão atual, para o consultor decidir com o dado em mãos:

> Você está na v14 do checkpoint, consolidada em 26/08. Quer que eu gere uma atualização agora?

- **Se sim:** siga o Momento 2 → Momento 3 (fechar) normalmente.
- **Se não:** registre que perguntou (abaixo) e siga trabalhando. Não insista, não repita na mesma
  janela.

**Registre que perguntou, sempre, independente da resposta.** Atualize os dois campos da seção 0 do
`CHECKPOINT.md`:

```
Última pergunta diária: {{AAAAMMDD}}
Última pergunta pós-17h: {{AAAAMMDD}}
```

Isso não gera uma nova versão do checkpoint sozinho — é só a marcação do lembrete, para outro chat
aberto mais tarde no mesmo dia não perguntar de novo. O registro está no arquivo, não na sessão, e
por isso qualquer chat novo o enxerga.

**O que isto não é:** um lembrete a cada meia hora, nem cobrança. É uma pergunta, no máximo duas
vezes por dia, pensada para caber no hábito de quem já pausa no fim da manhã e no fim da tarde —
sem custar mais que isso em tokens.

---

## 6. Detecção de defasagem

O limiar depende de quantos consultores estão ativos, porque dois dias num projeto solo é
irrelevante e quatro horas num projeto de três consultores em coleta é perigoso.

| Consultores ativos | Avisa | Bloqueia produção até conferir |
|---|---|---|
| 1 | 2 dias úteis | 5 dias úteis |
| 2 ou mais | mesma jornada | 1 dia útil |

**Bloquear** significa: não produzir entregável sobre estado defasado até o consultor confirmar que
conferiu a pasta. Não é obstrução, é o que impede refazer o trabalho que o colega já fez.

---

## 7. Momento 3: FECHAR

Acionado por qualquer um dos quatro gatilhos da seção 4.

1. Montar a entrada de sessão pelo template `references/TEMPLATE-entrada-de-sessao.md`, com tudo
   que se acumulou na conversa desde a última entrada.
2. Apresentar no chat. **Esperar validação.**
3. Gravar em `~~controle/Sessoes/AAAAMMDD-HHMM <Consultor>.md`.
   No modo Desktop: entregar o bloco pronto e dizer o nome do arquivo e o caminho exato.
4. Consolidar o `CHECKPOINT.md`: incorporar a entrada, subir a versão, carimbar data e autor.
   Antes de gravar, **reler** o `CHECKPOINT.md`. Se ele mudou desde que você o leu, alguém
   consolidou em paralelo e é preciso incorporar aquilo também.
5. Se houve lição reutilizável em outro cliente, seguir a seção 9.

---

## 8. Datas: duas convenções

Nós escrevemos DD/MM por hábito, e isso quebra ordenação de arquivo.

- **Nome de arquivo e campo lido por máquina:** `AAAAMMDD-HHMM`. Ordena sozinho e não é ambíguo.
- **Prosa e entregável ao cliente:** `dd/mm/aaaa`, como a metodologia ACTA já manda.

---

## 9. Metodologia não é projeto

| Mudou | Registra em | Chega no colega por |
|---|---|---|
| Estado, arquivo, decisão **do engajamento** | `~~controle/` | sincronização do OneDrive |
| Regra, fórmula, template, ou seja, **a metodologia** | repositório do plugin, no GitHub | `claude plugin update` |

Se uma melhoria de método for registrada só no checkpoint do projeto, **o próximo cliente não
recebe**. `APRENDIZADOS.md` é o estágio intermediário: captura no calor do trabalho, e quando a
lição se prova reutilizável, proponha promovê-la para a skill no repositório.

Critério para promover: a lição vale para **outro cliente**, não só para este. Se vale só para este
engajamento, é decisão de projeto e fica no `CHECKPOINT.md`.

---

## 10. Documentação e conformidade

Para engajamentos de auditoria interna isto não é organização, é requisito. A Norma 14.6 do IIA,
vigente desde 09/01/2025, exige que a documentação permita que um auditor interno informado e
prudente, ou pessoa igualmente informada e competente, **repita o trabalho e chegue aos mesmos
resultados**, e lista como obrigatório o registro de **quem executou e quem supervisionou**.

Por isso o formato comum já carrega, em toda entrada de sessão: a **fonte do dado**, **quem
preparou**, **quando**, e o espaço de **revisão**. Na consultoria isso é disciplina barata; na
auditoria, é conformidade. O mesmo ato satisfaz os dois.

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

- **Gatilhos estreitos de escrita** existem porque checkpoint que grava a cada etapa ou decisão
  interrompe o trabalho e é o primeiro hábito que a equipe abandona. Gravar só em fronteira real de
  sessão preserva o mecanismo no longo prazo.
- **A pergunta diária, com estado persistido no arquivo**, é o que torna a economia de tokens
  compatível com hábito de equipe: pergunta pouco, nunca duas vezes na mesma janela, mesmo entre
  chats diferentes, porque o registro mora no `CHECKPOINT.md` e não na sessão.
- **Log append-only mais estado derivado** é o modelo de event sourcing de Fowler: persistir duas
  coisas distintas, um log de eventos e um estado de aplicação. Como o estado é derivável do log,
  uma cópia conflitante nele é aborrecimento, não perda.
- **Arquivo por consultor** vem do comportamento documentado do OneDrive: arquivo não-Office em
  edição simultânea gera cópia com o nome da máquina anexado, **sem merge**, com teto de 5 cópias.
  Co-autoria existe só para `.docx`, `.pptx` e `.xlsx`. Nome único por consultor torna o conflito
  impossível por construção.
- **Nome por timestamp, não por número sequencial**, para que dois consultores nunca disputem o
  mesmo número. É o mesmo motivo pelo qual as ferramentas de ADR abandonaram numeração sequencial.
- **Leitura de volta** vem do protocolo clínico I-PASS, onde o receptor confirma o entendimento
  antes de assumir. É o elemento que quase todo template corporativo omite.
- **Decisão com justificativa e contrapartida** segue o Y-statement: registra o *porquê*, que é o
  que sempre se perde. Sem ele, quem chega ou aceita cegamente ou reverte cegamente.

Os componentes são padrões estabelecidos e citáveis. **A combinação deles para handoff entre sessões
de agente é desenho da ACTA**: não existe padrão de mercado consolidado para essa camada.
