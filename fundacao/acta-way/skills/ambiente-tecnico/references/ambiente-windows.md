# Ambiente Windows + OneDrive: armadilhas conhecidas e receitas

Catálogo das falhas que já custaram tempo em trabalhos da ACTA, com a solução que funcionou.
Consulte quando for mexer em COM, render, arquivo travado, cache do OneDrive ou encoding.

## Sumário
1. Interpretador e execução
2. Encoding
3. Arquivos travados
4. Cache do OneDrive / SharePoint
5. Leitura de planilhas
6. Leitura de PDF
7. Render para conferência visual
8. PowerPoint via COM
9. Dependências ausentes

---

## 1. Interpretador e execução

```bash
PY="~~interpretador python"
"$PY" script.py
```

`python` e `python3` no Bash caem no stub da Microsoft Store, a mensagem é *"Python não foi
encontrado; executar sem argumentos para instalar do Microsoft Store"* e o exit code é 49 ou 9009.

**Escreva o script com a ferramenta Write.** Heredoc (`python << 'EOF'`) quebra com acento, apóstrofo
ou caminho com barra invertida: o erro é `unexpected EOF while looking for matching ''`. Aconteceu
seis vezes. Não vale tentar escapar, a ferramenta Write resolve.

O Bash disponível é Git Bash (POSIX). PowerShell também está disponível, com sintaxe própria: sem
`&&`/`||`, sem ternário, `2>&1` em executável nativo gera `NativeCommandError` mesmo em sucesso.

---

## 2. Encoding

O console é **cp1252**. `print()` com `→` `−` `⚠` `Σ` `​` `Ă` estoura
`UnicodeEncodeError: 'charmap' codec can't encode character`.

Duas saídas, na ordem de preferência:

```python
# 1. grave em arquivo e leia o arquivo depois (mais confiável)
io.open("saida.txt", "w", encoding="utf-8").write("\n".join(linhas))

# 2. ou reconfigure o stdout no início do script
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
```

`openpyxl` recusa caracteres de controle em célula: `IllegalCharacterError`. Limpe com
`re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", texto)` antes de escrever.

---

## 3. Arquivos travados

`PermissionError [Errno 13]` ou `[WinError 32] O arquivo já está sendo usado por outro processo`
significa que o usuário tem o arquivo aberto no Excel ou PowerPoint. Isso é o **estado normal**, 
onze turnos da conversa são só ele dizendo "fechei".

Como lidar:

- Diga **exatamente qual arquivo** travou, com o nome completo. Ele fecha e responde.
- Antes disso, copie para o scratchpad e **continue trabalhando na cópia**, só a publicação precisa
  do arquivo destino.
- Nunca salve com nome alternativo silenciosamente. Ele perde a versão de vista.
- `mv` do Bash falha com `Device or resource busy` pelo mesmo motivo.

Arquivos temporários do Office (`~$nome.xlsx`) devem ser ignorados em qualquer varredura de pasta.

---

## 4. Cache do OneDrive / SharePoint

**Episódio real:** o PowerPoint via COM abriu uma **cópia em cache** de um caminho sincronizado,
enquanto o arquivo em disco estava correto. Dois renders consecutivos mostraram conteúdo velho e me
levaram a "corrigir" o que já estava certo.

Padrão seguro para qualquer edição de arquivo em pasta sincronizada:

1. `shutil.copy2(origem, scratchpad)`, copie para local.
2. Opere na cópia local.
3. **Releia a cópia por um caminho independente** (`python-pptx`/`openpyxl` direto no arquivo) e
   confira o que você acha que escreveu.
4. Só então `shutil.copy2(local, destino)`.

Nunca confie no render como única prova de que a escrita funcionou.

---

## 5. Leitura de planilhas

| Situação | O que fazer |
|---|---|
| `.xls` antigo | `pandas.read_excel(p, engine="xlrd")`, openpyxl não abre |
| Cabeçalho não está na linha 1 | **Verifique sempre.** Base de colaboradores do Bosque: linha 3. Bases de pagamento do AG.10: linha 2. Assumir linha 1 perde dados em silêncio |
| Célula mesclada | `MergedCell.value` é **read-only**. Faça `ws.unmerge_cells(...)` antes de escrever |
| Fórmulas | `data_only=True` devolve o valor calculado; sem isso vem a fórmula em texto |
| Base grande (>50k linhas) | `read_only=True` na leitura; `ws.append(lista)` na escrita, nunca célula a célula |
| Autofiltro + tabela nativa | Nunca use `ws.auto_filter.ref` junto com `ws.add_table()`, conflito de XML corrompe o arquivo |
| Descobrir colunas | Nunca chute índice. Leia o cabeçalho, monte o mapa `nome → índice`, e falhe alto se faltar coluna esperada |
| **Gravar workbook com imagem** | **Um único `wb.save()` por processo.** O segundo save do mesmo workbook estoura `ValueError: I/O operation on closed file` nas imagens (openpyxl fecha os handles no primeiro save) e grava um `.xlsx` truncado, **sem `[Content_Types].xml`**, que o Excel recusa. Custou o WP.AR.02 do Consórcio BA, recuperado pelo histórico de versões do OneDrive. Se precisar de duas gravações, rode dois processos, ou monte tudo em memória e salve uma vez |
| `freeze_panes` em aba com linha mesclada | Passe **coordenada em texto** (`ws.freeze_panes = 'E5'`), nunca um objeto de célula: `ws.cell(...)` sobre região mesclada devolve `MergedCell`, e a atribuição estoura `TypeError: 'MergedCell' object is not iterable` |

---

## 6. Leitura de PDF

**Leitura linear embaralha colunas.** `page.get_text()` devolve o texto na ordem interna do PDF, que
em fatura e boletim de medição não corresponde às colunas. Extrair por coordenada é o único jeito
confiável:

```python
import fitz
pg = fitz.open(p)[0]
palavras = pg.get_text("words")          # (x0, y0, x1, y1, texto, ...)
# agrupe por y com tolerância ~2.6 para formar a linha
# para cada linha, escolha o número cujo centro em x está mais próximo
# do centro da coluna do cabeçalho ("R$", "Valor", "Qtd")
```

Outras notas:

- **PDF com senha:** `fitz.open(p); doc.authenticate("0451")`. Senhas por cliente ficam no CLAUDE.md
  do engajamento, não aqui.
- **PDF que é imagem:** `pytesseract` não está instalado. Use render + leitura visual (ferramenta
  Read na imagem). Funcionou para ler assinaturas e carimbos em aceites digitalizados.
- **PDF rotacionado:** `page.set_rotation(90)` ou `prerotate` antes do `get_pixmap`.
- A ferramenta Read com parâmetro `pages` falha por falta de poppler. Leia sem `pages` ou extraia com
  `fitz`/`pdfplumber`.
- **Campo escondido:** dados críticos podem estar fora do lugar óbvio. A data de cancelamento das
  NFSe estava em "OUTRAS INFORMAÇÕES", não no topo. Varra o documento inteiro antes de concluir que
  o dado não existe.

---

## 7. Render para conferência visual

Inspeção programática **não** pega estouro de caixa, texto cortado nem sobreposição. As alturas
armazenadas mentem: uma tabela reportou 5,10" quando a altura real era 1,68". Renderize e olhe.

```powershell
# PPTX -> PNG
$app = New-Object -ComObject PowerPoint.Application
$pres = $app.Presentations.Open($caminho, $true, $false, $false)
$pres.Slides.Item($n).Export("$out\slide$n.png", "PNG", 1600, 900)
$pres.Close(); $app.Quit()
```

```powershell
# DOCX -> PDF -> PNG
$w = New-Object -ComObject Word.Application
$doc = $w.Documents.Open($caminho)
$doc.SaveAs([ref]$pdf, [ref]17)     # 17 = wdFormatPDF
$doc.Close(); $w.Quit()
# depois, em Python: fitz -> page.get_pixmap(dpi=110).save(png)
```

Depois do render, **leia o PNG** com a ferramenta Read. É o passo que evita o retrabalho estético.

---

## 8. PowerPoint via COM

**`MoveTo` desloca índices.** Um segundo `MoveTo` sobre índice antigo pega o slide errado. Isso já
destruiu um slide do diretor: o índice deslocou, a rotina de limpeza apagou um slide real, e o
conteúdo só foi recuperado de uma cópia anterior.

**Padrão seguro, adotado em definitivo:** duplique o **último** slide e escreva no fim. Se a posição
importa, mova **uma única vez** e reconfira a contagem e o título antes de qualquer outra operação.

Outros pontos:

- `Presentation.Close` falha com "Cannot perform this action with a modal dialog showing" se houver
  diálogo aberto. Verifique `Get-Process POWERPNT` antes.
- Remover slide editando `sldIdLst` sem tratar a relação corrompe o `.pptx` (partes duplicadas, aviso
  de reparo ao abrir). Prefira **editar no lugar**: limpar as shapes e redesenhar.
- Localize o slide **pelo texto do título**, nunca pelo índice, o usuário reordena entre turnos.

---

## 9. Dependências ausentes

Não estão instalados: `pandoc`, `pdftoppm`/poppler, `pytesseract`, `pikepdf`, `node`+`docx`.
`pywin32` foi instalado no meio do caminho, confirme com
`"$PY" -c "import win32com; print('ok')"` antes de usar COM.

Antes de assumir que uma biblioteca existe, teste:

```bash
"$PY" -c "import importlib
for m in ('openpyxl','pptx','docx','fitz','pdfplumber','pandas','xlrd','win32com'):
    try: importlib.import_module(m); print('ok', m)
    except Exception as e: print('FALTA', m, type(e).__name__)"
```
