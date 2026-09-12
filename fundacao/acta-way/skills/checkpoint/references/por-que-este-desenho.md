# Por que o checkpoint é desenhado assim

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


---

# A pergunta diária, em detalhe

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
