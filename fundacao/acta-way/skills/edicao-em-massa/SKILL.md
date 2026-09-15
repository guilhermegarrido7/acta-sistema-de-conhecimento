---
name: edicao-em-massa
description: Altere muitos arquivos de uma vez sem quebrar nenhum, com as proteções que evitam a substituição que casa onde não devia e a validação obrigatória depois. Acionar ao rodar substituição em lote, ao renumerar códigos, ao propagar uma correção por vários arquivos, ou ao editar frontmatter de skill por script.
---

# Edição em massa: alterar muitos arquivos sem quebrar nenhum

## Papel desta skill

Vale para qualquer alteração que toque vários arquivos de uma vez: renumerar códigos de risco,
propagar a correção de um número por papel de trabalho, relatório e matriz, padronizar nomenclatura,
ou editar o frontmatter de um conjunto de skills.

O perigo dessa operação não é errar alto — é **errar em silêncio**. Uma substituição mal construída
não falha: ela grava, e o estrago aparece depois, em outro arquivo, sem rastro de causa. As três
proteções abaixo cobrem os modos de falha que já aconteceram.

## Proteção 1: substitua por token inteiro, nunca por trecho

O caso canônico é a renumeração: substituir `R1` por `R7` casa **dentro** de `R12`, `R15`, `R1.3`.
O arquivo continua válido, o script reporta sucesso, e a matriz fica errada.

Use fronteira de palavra, e confira a contagem antes e depois:

```python
import re
padrao = re.compile(rf"(?<![\w.]){re.escape(antigo)}(?![\w.])")
n = len(padrao.findall(texto))       # conte ANTES
texto = padrao.sub(novo, texto)      # substitua
# depois: recontagem no corpo inteiro, e conferência de que o total fecha
```

A recontagem é o passo que ninguém faz e que pega o erro. **Se o número de substituições não é o que
você previu, pare** — não é "deu mais que o esperado", é que a régua casou onde não devia.

Dois corolários:

- **Intervalo numérico não é conectivo.** Ao expandir `R1 a R7` para a lista de códigos, `a` e `até`
  são parte do intervalo, não texto a preservar. Trate o intervalo como intervalo antes de tocar nos
  tokens.
- **Nome literal de arquivo é dado, não prosa.** Uma substituição que corrige texto corrido não pode
  atravessar o nome de um arquivo citado, senão a referência quebra e só se descobre ao clicar.

## Proteção 2: valor de YAML não citado não aceita dois-pontos seguido de espaço

Esta é a armadilha mais cara, porque ela **apaga a skill sem apagar o arquivo**.

No frontmatter, um valor não citado que contenha `: ` encerra o valor ali e o parser lê o resto como
outro campo, ou desiste do bloco inteiro. O arquivo continua existindo, o texto continua legível, e
a skill simplesmente **some da lista de gatilhos** — não dispara mais, e ninguém recebe erro.

```yaml
# quebra em silêncio
description: Monte o relatório: capa, tabelas e gráficos. Acionar ao...

# correto — aspas
description: "Monte o relatório: capa, tabelas e gráficos. Acionar ao..."

# correto — sem dois-pontos
description: Monte o relatório com capa, tabelas e gráficos. Acionar ao...
```

A regra prática: **ao editar `description` por script, ou cite o valor inteiro, ou garanta que não
há `: ` dentro dele.** A segunda opção costuma ser melhor, porque descrição com dois-pontos tende a
estar querendo ser duas frases.

O mesmo vale para `#` (inicia comentário) e para valor que comece com `-`, `[`, `{`, `&`, `*` ou `!`.

## Proteção 3: valide por script depois, sempre

Edição em massa sem validação depois é aposta. A validação não é reler um arquivo de amostra: é
rodar uma verificação que cubra **todos** os arquivos tocados.

Para skills e documentação deste repositório, isso é literal:

```bash
python scripts/validar-skills.py
```

Ele carrega o frontmatter de toda skill — então uma `description` quebrada pela Proteção 2 aparece
imediatamente como "sem frontmatter" ou "sem description", em vez de virar uma skill muda que
ninguém nota por semanas.

Para edição em massa fora deste repositório, o equivalente é: abrir programaticamente todos os
arquivos gravados e confirmar que continuam parseáveis no formato deles, e que a contagem de
ocorrências fecha com o previsto.

## O roteiro

1. **Liste os arquivos que serão tocados** e mostre a lista antes de executar. Edição em massa é
   difícil de reverter; a regra R8 (perguntar em vez de presumir) vale aqui com força.
2. **Conte as ocorrências esperadas**, por arquivo e no total.
3. **Rode numa cópia primeiro** quando a operação for sobre pasta de cliente — ela é somente leitura
   (regra R1), e o trabalho acontece na área de trabalho do engajamento.
4. **Execute com token inteiro**, nunca com trecho.
5. **Reconte e compare** com o previsto. Divergência é motivo para parar, não para prosseguir.
6. **Valide por script** todos os arquivos gravados.
7. **Diga o que mudou**: quantos arquivos, quantas ocorrências, e o que ficou de fora e por quê.

## O que entregar

1. A lista de arquivos tocados, com a contagem de ocorrências por arquivo.
2. A confirmação de que a recontagem fechou com o previsto — ou a explicação da divergência.
3. O resultado da validação por script.
4. O que **não** foi alterado apesar de casar com o padrão, e por quê.

## Próximo passo

Se a edição em massa propagou a correção de um número já entregue ao cliente, `checkpoint` — a
correção precisa virar entrada de sessão, porque quem chega depois tem de saber que o número mudou e
por quê.
