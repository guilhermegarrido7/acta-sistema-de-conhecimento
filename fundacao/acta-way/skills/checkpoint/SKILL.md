---
name: checkpoint
description: Registre e retome o estado de um engajamento ACTA entre sessões e entre consultores. Acionar ao abrir qualquer sessão de trabalho num projeto, ao concluir uma etapa, ao criar ou alterar entregável, ao tomar decisão metodológica, ou ao encerrar a sessão.
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
> Por isso o protocolo tem três momentos, e o primeiro é o de leitura.

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

1. Ler `~~controle/CHECKPOINT.md`. Anotar a versão e o carimbo de consolidação.
2. Listar `~~controle/Sessoes/`. Toda entrada com timestamp **posterior** à consolidação é trabalho
   que ainda não entrou no estado: ler todas.
3. Procurar cópia conflitante do OneDrive, arquivo terminado em `-<NOMEDAMAQUINA>.md`. Se existir,
   avisar: houve edição simultânea e alguém precisa reconciliar. O OneDrive guarda no máximo
   **5** dessas e não avisa ninguém.
4. Avaliar defasagem (seção 5).
5. **Fazer a leitura de volta e esperar confirmação.**

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

## 4. Momento 2: DURANTE, quando levantar

**Levante o checkpoint quando:** uma etapa for concluída, um entregável for criado, alterado ou
versionado, uma decisão metodológica for tomada, uma pendência for aberta ou resolvida, a sessão
estiver encerrando, ou houver handoff explícito para outro consultor.

**Não levante:** a cada mensagem, a cada rascunho, a cada consulta que não produziu nada. Checkpoint
que interrompe demais é checkpoint que passa a ser ignorado.

**Sempre:** apresente no chat, **espere a validação**, só então grave. Nunca escreva calado.

---

## 5. Momento 3: detecção de defasagem

O limiar depende de quantos consultores estão ativos, porque dois dias num projeto solo é
irrelevante e quatro horas num projeto de três consultores em coleta é perigoso.

| Consultores ativos | Avisa | Bloqueia produção até conferir |
|---|---|---|
| 1 | 2 dias úteis | 5 dias úteis |
| 2 ou mais | mesma jornada | 1 dia útil |

**Bloquear** significa: não produzir entregável sobre estado defasado até o consultor confirmar que
conferiu a pasta. Não é obstrução, é o que impede refazer o trabalho que o colega já fez.

---

## 6. Momento 4: FECHAR a sessão

1. Montar a entrada de sessão pelo template `references/entrada-de-sessao.md`.
2. Apresentar no chat. **Esperar validação.**
3. Gravar em `~~controle/Sessoes/AAAAMMDD-HHMM <Consultor>.md`.
   No modo Desktop: entregar o bloco pronto e dizer o nome do arquivo e o caminho exato.
4. Consolidar o `CHECKPOINT.md`: incorporar a entrada, subir a versão, carimbar data e autor.
   Antes de gravar, **reler** o `CHECKPOINT.md`. Se ele mudou desde que você o leu, alguém
   consolidou em paralelo e é preciso incorporar aquilo também.
5. Se houve lição reutilizável em outro cliente, seguir a seção 8.

---

## 7. Datas: duas convenções

Nós escrevemos DD/MM por hábito, e isso quebra ordenação de arquivo.

- **Nome de arquivo e campo lido por máquina:** `AAAAMMDD-HHMM`. Ordena sozinho e não é ambíguo.
- **Prosa e entregável ao cliente:** `dd/mm/aaaa`, como a metodologia ACTA já manda.

---

## 8. Metodologia não é projeto

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

## 9. Documentação e conformidade

Para engajamentos de auditoria interna isto não é organização, é requisito. A Norma 14.6 do IIA,
vigente desde 09/01/2025, exige que a documentação permita que um auditor interno informado e
prudente, ou pessoa igualmente informada e competente, **repita o trabalho e chegue aos mesmos
resultados**, e lista como obrigatório o registro de **quem executou e quem supervisionou**.

Por isso o formato comum já carrega, em toda entrada de sessão: a **fonte do dado**, **quem
preparou**, **quando**, e o espaço de **revisão**. Na consultoria isso é disciplina barata; na
auditoria, é conformidade. O mesmo ato satisfaz os dois.

---

## 10. Templates

| Arquivo | Uso |
|---|---|
| `references/TEMPLATE-CHECKPOINT.md` | estado consolidado do engajamento |
| `references/TEMPLATE-entrada-de-sessao.md` | uma por sessão de trabalho |
| `references/TEMPLATE-APRENDIZADOS.md` | lição reutilizável |
| `references/TEMPLATE-CLAUDE.md` | raiz do engajamento, carregado automaticamente |

---

## 11. Por que este desenho

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
