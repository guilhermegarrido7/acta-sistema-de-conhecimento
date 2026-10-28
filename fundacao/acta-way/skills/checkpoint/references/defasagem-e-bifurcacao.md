# Defasagem e bifurcação de sessão em texto integral

Extraído de `checkpoint`, seção 6, que mantém a tabela de limiares, os sintomas e a regra de não
unificar. O conteúdo é o mesmo; só o lugar mudou.

## 6. Detecção de defasagem

O limiar depende de quantos consultores estão ativos, porque dois dias num projeto solo é
irrelevante e quatro horas num projeto de três consultores em coleta é perigoso.

**Bloquear** significa: não produzir entregável sobre estado defasado até o consultor confirmar que
conferiu a pasta. Não é obstrução, é o que impede refazer o trabalho que o colega já fez.

## 6.1 Bifurcação de sessão

Defasagem é o estado ficar velho. **Bifurcação é pior**: duas sessões partem do mesmo ponto e
seguem em paralelo, cada uma achando que é a única. Nenhuma das duas fica desatualizada: as duas
ficam certas e incompatíveis, e a descoberta acontece tarde, quando os dois trabalhos já não se
somam. Já custou um retrabalho inteiro.

Dois sintomas que revelam a bifurcação antes do prejuízo:

- **Duas entradas em `~~controle/Sessoes/` com o mesmo consultor e horários sobrepostos.** É a
  checagem barata, e a estrutura de nome por timestamp existe justamente para torná-la possível.
- **O `CHECKPOINT.md` mudou entre a sua leitura e a sua gravação** (seção 7, passo 4). Se mudou e
  não foi você, alguém consolidou em paralelo.

Quando houver suspeita, a conferência definitiva é no próprio histórico de conversas: os transcripts
ficam em `~/.claude/projects/<chave do projeto>/*.jsonl`, um arquivo por sessão, e **os primeiros
registros de cada arquivo carregam o UUID da sessão de origem**. Duas sessões que compartilham os
UUIDs iniciais e divergem a partir de certo ponto são uma bifurcação, não duas sessões
independentes.

**Ao detectar, não unifique por conta própria.** Apresente as duas linhas de trabalho, o ponto em que
divergiram, e pergunte qual prevalece, pela mesma regra da seção 3 para cópia conflitante de arquivo.
