---
titulo: ACTA Way
pratica: fundacao
duracao_tipica: Fundação transversal — não é um engajamento
plugin: acta-way
---

## O que é, e por que todo projeto assume isto carregado

`acta-way` é a fundação do método da firma: a camada que vale para **todo** projeto da ACTA, seja de
Consultoria Empresarial ou de Governança, Riscos e Compliance. Reúne o mecanismo de checkpoint entre
sessões e consultores, o catálogo de armadilhas de ambiente Windows/OneDrive, a identidade visual, as
convenções de entregável, a anonimização e a LGPD, e o padrão de redação da casa. Não é um tipo de
projeto: é o que os plugins de projeto referenciam em vez de redefinir, e por isso é pré-requisito de
todos.

O problema que a fundação existe para resolver é a duplicação: sem ela, cada projeto reescreveria por
conta própria a paleta, a nomenclatura, a régua de anonimização e o padrão de escrita, e cada um
divergiria do outro. A regra que mantém isso coeso é simples — **skill de projeto não redefine o que
está aqui: aponta para cá e acrescenta só o que é particular daquele tipo de trabalho.** Há ainda um
hook de início de sessão (`hooks/session-start.js`) que, uma vez por sessão nova, lembra quais plugins
ACTA estão habilitados na máquina e sugere desabilitar os que não estão em uso — porque o custo
always-on é cobrado por plugin habilitado, não por skill usada.

## As skills da fundação

| # | Skill | O que resolve |
|---|---|---|
| 1 | checkpoint | Registrar e retomar o estado de um engajamento entre sessões e consultores: os quatro momentos do protocolo, a detecção do modo de operação, a regra de defasagem e os templates de `CLAUDE.md`, `CHECKPOINT.md`, `Sessoes/` e `APRENDIZADOS.md` |
| 2 | ambiente-tecnico | As armadilhas de Windows, OneDrive e automação Office (leitura de planilha e PDF, geração de PPTX/DOCX via COM, arquivo travado, cache do OneDrive, encoding de console), com a solução que funcionou |
| 3 | edicao-em-massa | Alterar muitos arquivos de uma vez sem quebrar nenhum: substituição por token inteiro, a armadilha do YAML que apaga a skill em silêncio e a validação obrigatória depois |
| 4 | identidade-visual | A paleta e a tipografia da casa em qualquer suporte, a regra de contraste que impede o turquesa de carregar texto em fundo claro, e a reconciliação com o tema do PowerPoint |
| 5 | convencoes-de-entregavel | Nomear, versionar e arquivar arquivo de projeto: data em prefixo, contagem de versão por documento, pasta de versões anteriores, quarentena de legado e o que muda quando o arquivo sai da casa |
| 6 | anonimizacao-e-lgpd | Transformar caso real em exemplo anonimizado: o validador que barra nome publicado, a diferença entre anonimizar e agregar, e o que fazer quando o cliente manda base com CPF |
| 7 | redacao-acta | O padrão de escrita da firma: zero travessões, sem enchimento, título de ação no slide, a doutrina do número exato e a forma de achado e recomendação |

## Como se usa no dia a dia

As skills da fundação disparam por evento, não por etapa de projeto. `checkpoint` abre e fecha cada
sessão de trabalho, e é por onde quem chega ao engajamento lê o estado consolidado — porque a sessão
de assistente não atravessa pessoas nem máquinas, mas o arquivo na pasta compartilhada atravessa.
`ambiente-tecnico` entra sempre que se roda script Python, se lê planilha ou PDF, ou se gera um
documento Office. `edicao-em-massa` entra na substituição em lote e na renumeração de códigos.
`identidade-visual`, `convencoes-de-entregavel` e `redacao-acta` entram na produção e na revisão de
qualquer entregável, e `anonimizacao-e-lgpd` sempre que um caso real vira exemplo ou que uma base com
dado pessoal chega. O plugin de prática que conduz o projeto chama cada uma quando precisa, em vez de
reescrever o que elas trazem.

## O que é preciso ter antes de usar

- **Instalar `acta-way` primeiro, sempre, antes de qualquer plugin de projeto** — o manifesto de
  plugin não tem campo de dependência, então sem ele instalado nenhum outro plugin da ACTA consegue
  usar o checkpoint.
- **Copiar os templates de `skills/checkpoint/references/` para a pasta do engajamento** ao abrir um
  projeto novo: o `TEMPLATE-CLAUDE.md` traz o passo a passo, são cinco minutos, uma vez por projeto.
- **Manter `clientes.local.txt` atualizado na própria máquina**, porque ele alimenta a checagem de
  nome do validador e é mantido por máquina de propósito — cliente novo exige que cada consultor
  acrescente o nome na própria lista.
