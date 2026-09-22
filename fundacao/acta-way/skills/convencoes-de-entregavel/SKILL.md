---
name: convencoes-de-entregavel
description: Nomear, versionar e arquivar arquivo de projeto pelo padrão da casa, com a data em prefixo, a contagem de versão por documento, a pasta de versões anteriores e a quarentena de legado. Acionar ao criar ou revisar entregável, ao nomear arquivo, ao organizar a pasta de um engajamento, ou ao encontrar arquivo solto sem convenção.
---

# Convenções de entregável: nomear, versionar, arquivar

## Papel desta skill

Vale para qualquer projeto da ACTA, de qualquer prática. Ela fixa o nome do arquivo, a contagem de
versão, onde a versão antiga vai morar e o que acontece com material herdado.

**O que não vive aqui.** O mecanismo de checkpoint (`CHECKPOINT.md`, `Sessoes/`, `APRENDIZADOS.md`)
está em `checkpoint`. A aparência do documento está em `identidade-visual`. O texto dentro dele está
em `redacao-acta`. A árvore de pastas numerada de um mandato de M&A, o codinome de projeto e a
propagação do entregável para o benchmarking do mandato seguinte estão na skill
`convencoes-de-projeto` do plugin de M&A, que é a versão daquele tipo de trabalho e não se
generaliza.

**Não renomeie nem mova arquivo sem confirmar.** A pasta de um projeto em andamento é memória
compartilhada da equipe. Reorganização silenciosa destrói rastro e é irreversível na prática, porque
ninguém lembra o nome antigo.

## 1. O nome do arquivo

```
YYYYMMDD <Nome da atividade> v<N> <INICIAIS>.<ext>
```

| Elemento | Regra |
|---|---|
| `YYYYMMDD` | Data absoluta, sem separador, sempre **prefixo**. Ordena cronologicamente no explorador de arquivos e não é ambígua entre convenções de data |
| `<Nome da atividade>` | Curto, descreve a **atividade**, não o arquivo. "Matriz de Riscos", não "Planilha final" |
| `v<N>` | Sequencial **por documento**. Não por dia, não por projeto, não por atividade parecida |
| `<INICIAIS>` | Iniciais de quem produziu **aquela versão**. Em coautoria, de quem produziu a versão, não da dupla |

**A data é a da criação da atividade, não a da última edição.** Um relatório criado em 06/05 e
revisado em 01/06 mantém `20260506` no nome e sobe para `v2`. É isso que preserva a identidade do
documento ao longo do projeto: se a data acompanhasse a edição, o mesmo documento teria um nome novo
a cada toque e ninguém saberia que é o mesmo.

Duas convenções de data convivem, e confundi-las é o erro comum:

- **Nome de arquivo e campo lido por máquina**: `YYYYMMDD`. Ordena sozinho.
- **Prosa, capa, rodapé, qualquer coisa que o cliente lê**: `dd/mm/aaaa`.

## 2. Versionar

A contagem é por documento. Um documento tem sua própria sequência `v1`, `v2`, `v3`, independente de
todos os outros arquivos do projeto.

**Ao revisar:** mova a versão anterior para `Versões anteriores/` e crie a nova com `v<N+1>` do mesmo
nome de atividade. **Nunca sobrescreva** arquivo que já foi compartilhado ou que é entregável.

**Toda pasta de entregável tem sua própria `Versões anteriores/`.** Uma pasta central de versões
antigas para o projeto inteiro não funciona: ninguém sabe em qual delas mover, e o histórico se
dispersa longe do documento que ele explica.

Não existe versão "final". Existe a versão mais alta. `v7` é a corrente porque é a mais alta, e isso
é verificável no explorador de arquivos sem abrir nada. "Final", "final revisada", "final v2" e
"versão boa" são a forma de perder a conta.

**Salto de versão é sintoma.** `v2`, `v3`, `v5`, `v9` levanta a pergunta de se as faltantes
existiram e onde estão. Se um número foi queimado por engano, registre por quê na entrada de sessão
(ver `checkpoint`) em vez de deixar a lacuna sem explicação.

### O prefixo `@`: template canônico

`@` marca template ou referência canônica da casa, e fixa o arquivo no topo da ordenação alfabética.
O número de `@` marca a geração: `@@` é a mais nova, `@` a anterior. Ao encontrar duas gerações do
mesmo template, **pergunte qual é a canônica** em vez de assumir que a mais recente por data de
arquivo é a certa. Template antigo costuma ter data de arquivo nova porque alguém o abriu.

### Antipadrões

O que aparece quando não há convenção, e o que cada um custa:

| Antipadrão | Custo |
|---|---|
| Data no fim do nome, ou em formato invertido | Não ordena. A lista da pasta deixa de ser cronológica |
| `atualizada`, `revisada`, `a alterar`, `ok` no nome | Atualizada em relação a quê? Qual é a corrente? |
| `BACKUP` no nome | Backup é a pasta `Versões anteriores`, não o nome |
| `(1)`, `(002)`, `- Copia` | Duplicata de download nunca resolvida. Duas fontes de verdade |
| Nome do cliente no arquivo de método ou de template | Ver `anonimizacao-e-lgpd` |
| Inicial ausente | Autoria não rastreável. Ninguém sabe a quem perguntar |

## 3. Onde o arquivo mora

Os lugares são descritos por placeholder `~~`, nunca por caminho de máquina. É a convenção do
repositório (`CONVENCOES.md`, seção 1) e existe porque caminho é do projeto e da pessoa, não do
método.

| Placeholder | O que é | Regra |
|---|---|---|
| `~~arquivos recebidos` | Pasta compartilhada com o cliente | **Somente leitura.** Nunca gravar, mover, renomear ou criar arquivo nela |
| `~~pasta de trabalho` | Raiz ACTA do projeto | Onde o trabalho acontece |
| `~~controle` | Controle do projeto | `CHECKPOINT.md`, `Sessoes/`, `APRENDIZADOS.md` |
| `~~entregaveis` | Saída final | Só o que foi ou vai ser entregue |

Três regras de arrumação que valem em qualquer projeto:

1. **Nada solto na raiz.** Entregável na raiz da pasta de trabalho é o primeiro sintoma de projeto
   desorganizado, e o mais fácil de checar.
2. **Crie a subpasta vazia antes de precisar dela.** Uma pasta de etapa vazia declara à equipe que
   aquela etapa existe e está pendente. É sinal de processo, não desorganização.
3. **O mesmo documento não vive em duas pastas.** Se precisa ser acessível de dois lugares, escolha
   um e aponte do outro. Duplicata byte a byte divergem na primeira revisão e ninguém percebe.

## 4. Legado e quarentena

Projeto que herda material de trabalho anterior, do cliente ou de outra consultoria: tudo vai para
`Informações antigas/<ano>/`.

**Nunca deletado, nunca no caminho.** O material de cinco anos atrás pode importar numa discussão
três meses depois, e ninguém lembra que existia. Deixá-lo misturado com o material corrente é pior:
alguém vai produzir sobre a base errada.

A quarentena resolve os dois lados de uma vez, e a pergunta de auditoria é uma só: **o legado está
separado, ou convive com o corrente?**

## 5. O arquivo que sai da casa

Quando o entregável vai para fora, três coisas mudam.

- **Formato.** Documento de leitura sai em PDF, salvo quando o cliente precisa editar. PDF preserva
  fonte e layout (ver `identidade-visual`, seção 3) e impede edição acidental do que foi entregue.
  Planilha que o cliente vai operar sai em XLSX, com as abas de trabalho e as fórmulas de
  rascunho removidas.
- **Nome.** O nome interno com inicial e versão é da casa, não do cliente. Para fora, o nome é o do
  documento e a data em `dd/mm/aaaa` ou o mês de referência. A versão interna continua no arquivo que
  fica em `~~entregaveis`, e a correspondência entre os dois vai na entrada de sessão.
- **Conteúdo residual.** Antes de enviar, confira comentário não resolvido, alteração controlada
  ainda ativa, célula de rascunho fora da área impressa, nota do autor, marcador de posição não
  preenchido, e propriedades do arquivo com o nome de quem criou o template. É o que mais vaza.

**Arquivo entregue nunca é editado por cima.** Se saiu errado, sobe uma versão nova com a correção
declarada. Corrigir em silêncio um número que o cliente já viu é o pior resultado possível, porque a
próxima divergência que ele encontrar vai ser atribuída a nós sem defesa.

## 6. Roteiro ao criar um entregável

1. Leia o melhor entregável anterior do mesmo tipo antes de produzir qualquer coisa. É o que mantém o
   padrão da casa e o que evita reinventar estrutura já testada.
2. Confirme o nome da atividade e as iniciais. Não deduza a autoria pelo dono da sessão.
3. Nomeie no padrão da seção 1 já em `v1`, antes da primeira linha de conteúdo. Arquivo que nasce
   sem nome nunca ganha um.
4. Ao revisar: mova a anterior, suba a versão, não sobrescreva.
5. Ao entregar: ver seção 5, e registrar a entrega na entrada de sessão.

## 7. O que verificar ao abrir ou auditar um projeto

- Os nomes seguem `YYYYMMDD ... vN INICIAIS`?
- Há arquivo solto na raiz da pasta de trabalho?
- Toda pasta de entregável tem `Versões anteriores/`?
- Há duplicata do mesmo documento em duas pastas?
- Há salto de versão sem explicação?
- O legado está em quarentena?
- Alguém gravou algo em `~~arquivos recebidos`?
- Existe algum "final" no nome de algum arquivo?

## Próximo passo

`checkpoint` para registrar a versão corrente e a entrega no estado do projeto. `edicao-em-massa` se
a padronização de nomenclatura for aplicada de uma vez sobre muitos arquivos, que é exatamente o tipo
de operação que erra em silêncio.
