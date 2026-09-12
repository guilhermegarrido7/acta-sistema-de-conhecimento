# Mecânica de código: PPTX e DOCX do relatório de auditoria

Apoio de `relatorio-de-auditoria`. O SKILL.md traz o padrão editorial e visual; aqui está o código
que o implementa. Armadilhas de ambiente (arquivo travado, encoding do console, cache do OneDrive,
receita de render por COM) **não** vivem aqui: carregue `acta-way:ambiente-tecnico`.

---

## 1. Matar o estilo nativo da tabela

Primeiro passo de toda tabela, antes de qualquer preenchimento. Sem isso o PowerPoint reaplica o
estilo do tema por cima do que você escreveu.

```python
from pptx.oxml.ns import qn

tbl = shape.table._tbl
pr = tbl.tblPr
for el in pr.findall(qn("a:tableStyleId")):
    pr.remove(el)
for flag in ("firstRow", "firstCol", "lastRow", "lastCol", "bandRow", "bandCol"):
    pr.set(flag, "0")
```

## 2. Preenchimento de célula e borda

```python
from pptx.dml.color import RGBColor
from pptx.util import Pt

cell.fill.solid()
cell.fill.fore_color.rgb = RGBColor(0x16, 0x7D, 0x73)   # cabeçalho
run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
run.font.bold = True
run.font.size = Pt(7.5)                                  # ver escala por nº de linhas no SKILL.md
```

`RGBColor` é subclasse de `tuple`: **não** use `isinstance(x, tuple)` para distinguir uma cor de uma
lista de valores — dá falso positivo. E atribuir string a `.rgb` levanta
`ValueError: assigned value must be type RGBColor`.

## 3. Largura de coluna

Definir `.width` no shape da tabela **não** redimensiona as colunas. Escale uma a uma,
proporcionalmente:

```python
fator = largura_alvo / sum(c.width for c in table.columns)
for c in table.columns:
    c.width = int(c.width * fator)
```

## 4. Gráfico nativo

Gráfico nativo, nunca imagem: o auditor responsável edita os dados depois, direto no PowerPoint.

```python
from pptx.chart.data import CategoryChartData
from pptx.enum.chart import XL_CHART_TYPE

cd = CategoryChartData()
cd.categories = competencias                 # ex.: jan/2026 … dez/2026
cd.add_series("Meio de pagamento A", valores)   # rótulo genérico, nunca identificador real
shape = slide.shapes.add_chart(
    XL_CHART_TYPE.COLUMN_STACKED, x, y, cx, cy, cd
).chart
```

> **Nunca ponha identificador sensível no rótulo de série.** Final de cartão, CPF/CNPJ, número de
> conta, matrícula e nome de pessoa ficam fora do rótulo — use o papel ou um rótulo genérico
> (`Meio de pagamento A`, `Centro de custo 1`). O dado identificador vive no papel de trabalho, com
> acesso restrito, não num deck que circula.

Tipos em uso: `COLUMN_STACKED` (evolução por competência), `BAR_STACKED_100` (grau de implementação
por processo), `PIE` (composição).

Atualizar um gráfico existente sem recriá-lo:

```python
chart.replace_data(cd)
```

Cor por ponto na pizza:

```python
pt = chart.plots[0].series[0].points[i]
pt.format.fill.solid()
pt.format.fill.fore_color.rgb = RGBColor(0xC0, 0x39, 0x2B)
```

## 5. Caixas de texto soltas que parecem tabela

Alguns decks herdados trazem grades de caixas de texto, não tabelas. Escalar proporcionalmente corta
o rótulo. Nesses casos:

```python
tf.word_wrap = True
# piso de fonte 6,2 pt — abaixo disso é ilegível no projetor
```

Se for reformar o slide, prefira converter a grade em tabela real.

---

## 6. Deck → relatório detalhado em Word

A ordem das seções, o desenho da matriz II.A e a geometria da página estão no SKILL.md, §8. Aqui só
o caminho de código.

**Passo 1 — extrair o deck para JSON.**

```python
from pptx import Presentation

prs = Presentation(caminho_deck)
slides = []
for i, s in enumerate(prs.slides, 1):
    slides.append({
        "n": i,
        "titulo": titulo_do_slide(s),
        "corpo": [p.text for sh in s.shapes if sh.has_text_frame
                  for p in sh.text_frame.paragraphs],
        "tabelas": [[[c.text for c in row.cells] for row in sh.table.rows]
                    for sh in s.shapes if sh.has_table],
        "imagens": salvar_imagens(s, pasta_imagens),
    })
```

Filtre logo e faixa decorativa **por dimensão** antes de reinserir: imagem abaixo de um limiar de
largura/altura, ou ancorada na banda lateral, é elemento de identidade, não evidência.

**Passo 2 — agrupar e numerar.** Slides viram aspectos numerados em sequência; um bloco temático
vira um título em caixa alta. A numeração é contínua no documento inteiro, não reinicia por bloco.

**Passo 3 — sanitizar todo texto antes de escrever.**

```python
import re

def sanitiza(txt):
    # remove remissão interna de produção: versão de deck, nº de slide, código de WP
    txt = re.sub(r"\b(v\d+|slide\s*\d+|WP[-\s]?\d+[\w.-]*)\b", "Vide Seção II.B", txt, flags=re.I)
    # caracteres de controle: quebra de linha do PowerPoint entra como byte de controle e o XML do
    # Word rejeita com "ValueError: All strings must be XML compatible"
    return "".join(ch for ch in txt if ch == "\n" or ch == "\t" or ord(ch) >= 32)
```

**Passo 4 — geometria da página.**

```python
from docx.shared import Cm

sec = doc.sections[0]
sec.left_margin = sec.right_margin = Cm(3)
sec.top_margin = sec.bottom_margin = Cm(2.5)
```

Cabeçalho: logo à esquerda, rótulo do trabalho à direita, linha na cor institucional. Rodapé: nota
de confidencialidade e campo `PAGE`. O índice usa remissão textual às seções (I, II.A, II.B, III,
Anexos); a paginação é atualizada no Word pelo próprio usuário ao abrir.

**Passo 5 — verificar por render.** Exporte para PDF com `ExportAsFixedFormat` via Word COM,
converta as páginas com `fitz` e **olhe**. Foi assim que apareceram a remissão interna vazada e a
fonte substituída. Receita de COM e armadilhas do ambiente: `acta-way:ambiente-tecnico`.

**Fonte não instalada.** A fonte institucional pode não estar na máquina que gera. O nome fica
correto no arquivo, mas o render local sai substituído e a tipografia não pode ser julgada por ele.
Declare a fonte também no tema do documento e avise que a conferência tipográfica é na máquina do
auditor responsável.
