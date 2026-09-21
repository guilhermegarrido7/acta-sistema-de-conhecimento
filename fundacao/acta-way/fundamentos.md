---
titulo: Fundamentos
---

## A ideia que sustenta o método

O `acta-way` trata de um problema velho com roupa nova: como passar trabalho adiante sem perder o
porquê. Hospital resolve isso na passagem de plantão. Sistema distribuído resolve guardando o log
dos eventos antes do estado. Engenharia de software resolve registrando a decisão ao lado do código
que ela explica. As três tradições respondem à mesma pergunta, que é o que sobra de um trabalho
quando quem o fez sai da sala.

A pergunta ficou urgente porque a sessão de um agente não atravessa pessoas. O histórico fica
guardado por diretório e por máquina, desktop, web e IDE mantêm bases separadas, e a memória de
longo prazo do assistente é pessoal. Um consultor fixa um critério às 16h e o colega, na manhã
seguinte, abre uma sessão que não sabe de nada. O que atravessa é o arquivo na pasta compartilhada
do engajamento, e por isso o mecanismo inteiro gira em torno de dois artefatos de texto: um log
imutável, com um arquivo por sessão, e um estado consolidado que se deriva dele. Como o estado é
derivável, uma cópia conflitante nele custa aborrecimento e não perda.

As outras duas skills da fundação atacam o mesmo inimigo por outro lado, a falha que não emite erro.
Cabeçalho na linha 3 que faz sumir a primeira linha de dados. Dois-pontos no frontmatter que apaga a
skill do roteamento sem apagar o arquivo. Substituição de `R1` que casa dentro de `R12`. Cópia
conflitante que o OneDrive cria em silêncio e guarda no máximo cinco vezes. Nenhuma dessas falhas
aparece no console, e todas aparecem semanas depois, num entregável, sem rastro de causa. Daí a
insistência em contar antes e recontar depois, em reler por caminho independente o arquivo que você
acha que gravou, e em validar por script o conjunto inteiro dos arquivos tocados em vez de conferir
uma amostra.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Event sourcing (Martin Fowler) | Persistir duas coisas distintas, um log de eventos imutável e um estado de aplicação derivável dele | `checkpoint`: as entradas em `Sessoes/` são append-only, o `CHECKPOINT.md` é o estado consolidado e reconstruível |
| I-PASS | Protocolo clínico de passagem de plantão em que o receptor repete o que entendeu antes de assumir | `checkpoint`, Momento 1: a leitura de volta, com a espera obrigatória pela confirmação do consultor |
| Y-statement | Formato curto de registro de decisão que obriga a escrever a justificativa e a contrapartida aceita | `checkpoint`: a tabela de decisões, que aponta de volta para a entrada de sessão onde a decisão foi tomada |
| Architecture Decision Records (ADR) | Prática de guardar a decisão como arquivo versionado junto do trabalho, com nomes que não disputam número | `checkpoint`: nome de arquivo por carimbo de tempo e consultor, em vez de numeração sequencial |
| ISO 8601 | Data em ano, mês e dia, que ordena por si e não é ambígua entre convenções | `checkpoint` §8: `AAAAMMDD-HHMM` para nome de arquivo, `dd/mm/aaaa` para prosa e entregável |
| Normas Globais de Auditoria Interna do IIA, Norma 14.6 | Documentação que permita a um auditor informado repetir o trabalho e chegar ao mesmo resultado, com registro de quem executou e quem supervisionou | `checkpoint` §10: os campos de fonte do dado, preparador, data e revisão em toda entrada de sessão |
| Registro de lições aprendidas (PMI) | Repositório de aprendizado do projeto, alimentado ao longo da execução e não só no encerramento | `checkpoint` §9: o `APRENDIZADOS.md` como estágio intermediário, antes da promoção ao repositório |
| Documentação da Microsoft sobre co-autoria e cópias conflitantes | Co-autoria existe para `.docx`, `.pptx` e `.xlsx`; arquivo fora desses formatos, editado ao mesmo tempo, gera cópia com o nome da máquina, sem mesclagem, com teto de cinco | `checkpoint`: um arquivo por consultor, e a varredura por cópia conflitante na abertura da sessão |
| Especificação YAML | Regras do escalar não citado, que termina em `: ` e muda de sentido diante de `#`, `-`, `[`, `{`, `&`, `*` e `!` | `edicao-em-massa`, Proteção 2: a `description` que quebra em silêncio e tira a skill do roteamento |

## Onde a ACTA se afasta do manual

A prática corrente de documentação manda registrar a decisão assim que ela acontece. Aqui a escrita
é restrita a quatro gatilhos, e nenhum deles é "terminei uma etapa". O motivo é observado: checkpoint
que interrompe o trabalho é o primeiro hábito que a equipe abandona, e um mecanismo abandonado não
documenta nada. Pela mesma razão o lembrete diário aparece no máximo duas vezes por jornada, com o
registro de que já perguntou morando no arquivo e não na sessão, para que outro chat aberto à tarde
não repita a pergunta. Event sourcing, na origem, pressupõe reconstrução automática do estado a
partir do log. A casa faz a consolidação por pessoa e sempre apresenta o texto antes de gravar,
porque um estado errado consolidado em silêncio custa mais caro que um turno a mais de conversa.

A segunda divergência é sobre onde a lição mora. O registro de lições aprendidas, como o PMI o
descreve, é artefato do projeto e termina arquivado com ele. Na ACTA o `APRENDIZADOS.md` do
engajamento é um ponto de passagem: enquanto a lição estiver só ali, ela não existe para quem nunca
abriu aquela pasta, e o próximo cliente paga de novo pelo mesmo erro. O critério de promoção é uma
pergunta só, se aquilo vale para outro cliente, e a resposta positiva obriga a abrir alteração no
repositório do plugin. Vale registrar também o limite do que foi importado: os componentes acima são
padrões estabelecidos e citáveis, mas a combinação deles para handoff entre sessões de agente é
desenho da casa, porque não há padrão de mercado consolidado para essa camada.
