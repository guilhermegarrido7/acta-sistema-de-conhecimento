#!/usr/bin/env python3
"""Manifesto de release do valuation: modelo (.xlsx) + deck (.pptx).

Só lê. Trabalha sobre cópias em pasta temporária, nunca sobre o arquivo original, para não travar
arquivo aberto pelo usuário nem disparar sincronização do OneDrive.

Uso:
    python manifesto_release.py --modelo M.xlsx --deck D.pptx --saida manifesto.md
        [--mapa mapa.csv] [--deck-anterior D_v_anterior.pptx]
        [--proibidos termos.txt] [--recalcular] [--render]

Gates (falha = código de saída 1):
    G1  nenhum erro de fórmula no modelo (#REF!, #DIV/0!, #N/A, #VALUE!, #NAME?, #NUM!)
    G2  todo número do mapa aparece no slide indicado, formatado em pt-BR
    G3  data do EV = data da dívida líquida (linhas `data_base` e `data_divida` do mapa)
    G4  nenhum resíduo (placeholder, texto de layout, erro de fórmula, termo proibido, ACTA como fonte)

Formato do mapa (CSV com `;`, cabeçalho obrigatório):
    id;slide;rotulo;aba;celula;formato;escala
    ev_perp;30;EV perpetuidade;Outputs;F12;num:2;1000
    wacc;36;WACC;Inputs;L59;pct:2;1
    data_base;;Data-base;Inputs;F69;data;
    data_divida;;Data da dívida líquida;Modelo;J300;data;
`formato`: num:<casas> | pct:<casas> | mult:<casas> | data. `escala`: divisor aplicado antes de
formatar (1000 converte R$ mil em R$ MM). `slide` vazio = valor só conferido no modelo.
"""
import argparse
import csv
import datetime as dt
import difflib
import hashlib
import os
import re
import shutil
import sys
import tempfile
import time

ERROS_FORMULA = ("#REF!", "#DIV/0!", "#N/A", "#VALUE!", "#NAME?", "#NUM!", "#NULL!")
RESIDUOS = [
    (r"\{\{", "placeholder {{ }}"),
    (r"\bX{3,}\b|\bx{4}\b", "placeholder XXXX"),
    (r"(?i)lorem ipsum", "lorem ipsum"),
    (r"\bTBD\b|\bA DEFINIR\b", "TBD / a definir"),
    (r"(?i)click to edit|clique para editar", "texto de layout"),
    (r"#REF!|#DIV/0!|#N/A|#VALUE!|#NAME\?", "erro de fórmula colado no slide"),
]
FONTE_ACTA = re.compile(r"(?i)\bfontes?\s*:.*\bACTA\b")


def sha256(caminho):
    h = hashlib.sha256()
    with open(caminho, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def copia(caminho, pasta):
    destino = os.path.join(pasta, os.path.basename(caminho))
    shutil.copy2(caminho, destino)
    return destino


def com_retry(fn, tentativas=8):
    """Repete chamada COM rejeitada por instância ocupada (RPC_E_CALL_REJECTED)."""
    for i in range(tentativas):
        try:
            return fn()
        except Exception as e:  # pywintypes.com_error
            if "0x80010001" in str(e) or "-2147418111" in str(e):
                time.sleep(1 + i)
                continue
            raise
    return fn()


def recalcular_excel(caminho):
    """Recalcula numa instância NOVA do Excel e encerra só ela."""
    import win32com.client as w

    xl = w.DispatchEx("Excel.Application")
    xl.Visible = False
    xl.DisplayAlerts = False
    try:
        wb = com_retry(lambda: xl.Workbooks.Open(caminho, UpdateLinks=0, ReadOnly=False))
        com_retry(lambda: xl.CalculateFull())
        com_retry(lambda: wb.Save())
        wb.Close(SaveChanges=False)
    finally:
        xl.Quit()  # instância criada aqui, não a do usuário


def ler_modelo(caminho):
    from openpyxl import load_workbook

    wb = load_workbook(caminho, data_only=True, read_only=True)
    erros = []
    for ws in wb.worksheets:
        for linha in ws.iter_rows():
            for c in linha:
                v = c.value
                if isinstance(v, str) and v.strip() in ERROS_FORMULA:
                    erros.append(f"{ws.title}!{c.coordinate} = {v.strip()}")
    return wb, erros


def valor_celula(wb, aba, celula):
    return wb[aba][celula].value


def fmt_ptbr(v, formato, escala):
    if formato == "data":
        if isinstance(v, (dt.datetime, dt.date)):
            return v.strftime("%d/%m/%Y")
        return str(v)
    tipo, _, casas = formato.partition(":")
    casas = int(casas or 0)
    x = float(v) / float(escala or 1)
    if tipo == "pct":
        x *= 100
    s = f"{x:,.{casas}f}".replace(",", "§").replace(".", ",").replace("§", ".")
    return s + ("%" if tipo == "pct" else "x" if tipo == "mult" else "")


def textos_deck(caminho):
    from pptx import Presentation

    p = Presentation(caminho)
    slides = []
    for s in p.slides:
        partes = []
        for sh in s.shapes:
            if sh.has_text_frame:
                partes.append(sh.text_frame.text)
            if getattr(sh, "has_table", False) and sh.has_table:
                for row in sh.table.rows:
                    partes.append(" | ".join(c.text for c in row.cells))
        slides.append("\n".join(partes).replace("\x0b", "\n"))
    return slides


def render_pdf(caminho_pptx, saida_pdf):
    import pythoncom
    import win32com.client as w

    ja_aberto = True
    try:
        app = w.GetActiveObject("PowerPoint.Application")
    except pythoncom.com_error:
        ja_aberto = False
        app = w.Dispatch("PowerPoint.Application")
    pres = com_retry(lambda: app.Presentations.Open(caminho_pptx, ReadOnly=True, WithWindow=False))
    try:
        n = pres.Slides.Count
        com_retry(lambda: pres.SaveAs(saida_pdf, 32))  # ppSaveAsPDF
    finally:
        pres.Close()
        if not ja_aberto:
            app.Quit()  # só fecha o PowerPoint se fomos nós que abrimos
    return n


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--modelo", required=True)
    ap.add_argument("--deck", required=True)
    ap.add_argument("--saida", required=True)
    ap.add_argument("--mapa")
    ap.add_argument("--deck-anterior")
    ap.add_argument("--proibidos", help="um termo por linha: nomes que não podem aparecer no deck")
    ap.add_argument("--recalcular", action="store_true", help="recalcula o modelo numa instância nova do Excel")
    ap.add_argument("--render", action="store_true", help="exporta o deck em PDF pelo PowerPoint")
    a = ap.parse_args()

    tmp = tempfile.mkdtemp(prefix="manifesto_")
    modelo = copia(os.path.abspath(a.modelo), tmp)
    deck = copia(os.path.abspath(a.deck), tmp)
    gates, linhas = {}, []
    add = linhas.append

    add(f"# Manifesto de release\n\nGerado em {dt.datetime.now():%d/%m/%Y %H:%M}. Só leitura, sobre cópias.\n")
    add("## 1. Arquivos\n\n| Arquivo | SHA-256 | Tamanho |\n|---|---|---|")
    for orig in (a.modelo, a.deck):
        add(f"| `{os.path.basename(orig)}` | `{sha256(orig)}` | {os.path.getsize(orig):,} B |")
    add("\nO hash identifica o arquivo conferido. Se o arquivo enviado tiver outro hash, o manifesto não vale para ele.\n")

    if a.recalcular:
        recalcular_excel(modelo)
    wb, erros = ler_modelo(modelo)
    gates["G1 erros de fórmula"] = not erros
    add(f"## 2. Modelo\n\nRecalculado nesta execução: {'sim' if a.recalcular else 'não (valores em cache do último salvamento)'}.")
    add(f"Erros de fórmula: **{len(erros)}**.")
    for e in erros[:50]:
        add(f"- {e}")
    add("")

    slides = textos_deck(deck)
    add(f"## 3. Deck\n\nSlides: **{len(slides)}**.\n")

    add("## 4. Conciliação modelo × deck\n")
    if a.mapa:
        datas, falhas, total = {}, [], 0
        with open(a.mapa, encoding="utf-8-sig", newline="") as f:
            for r in csv.DictReader(f, delimiter=";"):
                v = valor_celula(wb, r["aba"], r["celula"])
                if r["id"] in ("data_base", "data_divida"):
                    datas[r["id"]] = v
                if not r.get("slide"):
                    continue
                total += 1
                alvo = fmt_ptbr(v, r["formato"], r.get("escala") or 1)
                n = int(r["slide"])
                ok = 1 <= n <= len(slides) and alvo in slides[n - 1]
                if not ok:
                    falhas.append(f"| {r['id']} | {r['rotulo']} | {n} | {r['aba']}!{r['celula']} | `{alvo}` |")
        gates["G2 conciliação"] = not falhas
        add(f"Itens conferidos: {total}. Divergências: **{len(falhas)}**.\n")
        if falhas:
            add("| ID | Rótulo | Slide | Célula | Valor esperado no slide |\n|---|---|---|---|---|")
            linhas.extend(falhas)
        if "data_base" in datas and "data_divida" in datas:
            iguais = datas["data_base"] == datas["data_divida"]
            gates["G3 data da ponte"] = iguais
            add(f"\nData-base do EV: `{fmt_ptbr(datas['data_base'], 'data', 1)}`. "
                f"Data da dívida líquida: `{fmt_ptbr(datas['data_divida'], 'data', 1)}`. "
                f"{'Mesma data.' if iguais else '**Datas diferentes: gate aberto (triangulacao-e-faixa, TF-01).**'}")
        else:
            gates["G3 data da ponte"] = False
            add("\n**Mapa sem as linhas `data_base` e `data_divida`: gate de data não conferido.**")
    else:
        gates["G2 conciliação"] = False
        gates["G3 data da ponte"] = False
        add("**Sem mapa: conciliação e gate de data não rodaram.** Ver `references/mapa-modelo-para-slides.md`.")
    add("")

    add("## 5. Resíduos\n")
    proibidos = []
    if a.proibidos:
        # utf-8-sig: arquivo salvo pelo PowerShell ou pelo Bloco de Notas vem com BOM, e o BOM grudado
        # no primeiro termo faz ele nunca casar.
        proibidos = [l.strip() for l in open(a.proibidos, encoding="utf-8-sig") if l.strip() and not l.startswith("#")]
    achados = []
    for i, t in enumerate(slides, 1):
        for padrao, nome in RESIDUOS:
            for m in re.finditer(padrao, t):
                achados.append(f"| {i} | {nome} | `{m.group(0)}` |")
        for linha in t.splitlines():
            if FONTE_ACTA.search(linha):
                achados.append(f"| {i} | ACTA citada como fonte | `{linha.strip()[:80]}` |")
        for termo in proibidos:
            if re.search(rf"(?i)(?<!\w){re.escape(termo)}(?!\w)", t):
                achados.append(f"| {i} | termo proibido | `{termo}` |")
    gates["G4 resíduos"] = not achados
    add(f"Achados: **{len(achados)}**.\n")
    if achados:
        add("| Slide | Tipo | Trecho |\n|---|---|---|")
        linhas.extend(achados)
    add("")

    if a.deck_anterior:
        ant = textos_deck(copia(os.path.abspath(a.deck_anterior), tmp))
        add(f"## 6. Diff contra `{os.path.basename(a.deck_anterior)}`\n")
        add(f"Slides: {len(ant)} → {len(slides)}.\n")
        mudados = []
        for i in range(max(len(ant), len(slides))):
            x = ant[i] if i < len(ant) else ""
            y = slides[i] if i < len(slides) else ""
            if x != y:
                mudados.append(i + 1)
                d = list(difflib.unified_diff(x.splitlines(), y.splitlines(), lineterm="", n=0))[2:]
                add(f"<details><summary>Slide {i + 1}</summary>\n\n```diff\n" + "\n".join(d[:60]) + "\n```\n</details>\n")
        add(f"Slides alterados: {mudados or 'nenhum'}.\n")

    if a.render:
        pdf = os.path.splitext(os.path.abspath(a.saida))[0] + ".pdf"
        n = render_pdf(deck, pdf)
        add(f"## 7. Render\n\nPDF: `{os.path.basename(pdf)}`, {n} slides, SHA-256 `{sha256(pdf)}`.\n")

    add("## Gates\n\n| Gate | Resultado |\n|---|---|")
    for g, ok in gates.items():
        add(f"| {g} | {'ok' if ok else '**aberto**'} |")
    veredito = all(gates.values())
    add(f"\n**Veredito: {'pronto para release' if veredito else 'NÃO liberar: há gate aberto'}.**\n")

    with open(a.saida, "w", encoding="utf-8") as f:
        f.write("\n".join(linhas))
    shutil.rmtree(tmp, ignore_errors=True)
    print(f"Manifesto gravado em {a.saida}. Veredito: {'ok' if veredito else 'gate aberto'}.")
    return 0 if veredito else 1


if __name__ == "__main__":
    sys.exit(main())
