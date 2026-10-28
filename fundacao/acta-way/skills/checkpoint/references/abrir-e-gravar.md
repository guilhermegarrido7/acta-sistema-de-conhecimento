# Abrir e gravar: os passos e os gatilhos em texto integral

Extraído de `checkpoint`, seções 3, 4 e 5, que mantêm a versão curta. O conteúdo é o mesmo; só o
lugar mudou.

## 3. Momento 1: ABRIR a sessão

1. Ler `~~controle/CHECKPOINT.md`. Anotar a versão, o carimbo de consolidação, e os dois campos de
   lembrete da seção 0 (`Última pergunta diária`, `Última pergunta pós-17h`).
2. Listar `~~controle/Sessoes/`. Toda entrada com timestamp **posterior** à consolidação é trabalho
   que ainda não entrou no estado: ler todas.
3. Procurar cópia conflitante do OneDrive, arquivo terminado em `-<NOMEDAMAQUINA>.md`. Se existir,
   avisar: houve edição simultânea e alguém precisa reconciliar. O OneDrive guarda no máximo
   **5** dessas e não avisa ninguém.
4. Avaliar defasagem (seção 6).
5. Avaliar se é caso da pergunta diária (seção 5), que não é a mesma coisa que a leitura de volta
   abaixo: a leitura de volta confirma entendimento, a pergunta diária oferece gerar um checkpoint
   novo.
6. **Fazer a leitura de volta e esperar confirmação.**

## 4. Momento 2: quando GRAVAR

Só quatro gatilhos escrevem checkpoint. Fora deles, o trabalho segue normalmente na conversa: o
que foi feito, decidido ou pendente fica ali, e só vira uma entrada de sessão quando um destes
ocorrer:

1. **O consultor pede o checkpoint**, explicitamente, invocando a skill ou simplesmente pedindo
   "atualiza o checkpoint" / "gera o arquivo".
2. **O consultor sinaliza que está encerrando** a sessão, ou que vai trocar de chat.
3. **A conversa está pesada.** Você percebe sinais de contexto extenso (muitas trocas, muita
   ferramenta chamada, o próprio Claude Code oferecendo resumir/compactar a sessão) e é hora de
   sugerir abrir um chat novo. Nesse caso, **avise antes de agir:**

   > Esta conversa está ficando pesada em contexto. Vou gerar o checkpoint agora para você abrir um
   > chat novo sem perder o que fizemos.

   e só então grave.
4. **A pergunta diária** (seção 5), quando o consultor responde que sim.

**Não grave fora destes quatro casos**: nem a cada etapa concluída, nem a cada entregável criado,
nem a cada decisão isolada. Acumule na conversa; consolide no gatilho.

**Sempre, nos quatro casos:** apresente o que vai entrar na entrada de sessão, **espere a
validação**, só então grave. Nunca escreva calado.

## 5. A pergunta diária: o nudge de economia

Uma vez por jornada, na abertura, e uma vez no fim da tarde: um lembrete curto de que sessão longa
custa contexto e de que fechar a sessão preserva o estado. **Nunca duas vezes na mesma janela**,
mesmo entre chats diferentes. O registro de que já perguntou mora no `CHECKPOINT.md`, não na
sessão, e é isso que torna o nudge compatível com hábito de equipe.
