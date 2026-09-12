#!/usr/bin/env python3
"""Valida as skills do repositório contra o padrão da casa.

Uso:
    python scripts/validar-skills.py            # valida tudo
    python scripts/validar-skills.py <caminho>  # valida um plugin

Os limites estão em docs/MAPEAMENTO.md, seção "Padrão de skill". Este script existe para que a
regra pegue: sem ele, o teto de descrição é intenção, e o custo always-on do marketplace cresce a
cada contribuição.
"""
import os
import re
import sys

# Os limites de descrição são os de CONVENCOES.md §5, que já eram a regra da casa — este script
# só passou a aplicá-la. Mudou lá, mude aqui.
MIN_DESC = 220          # abaixo disso a skill é vaga demais e não dispara
MAX_DESC = 380          # acima disso desperdiça contexto em toda sessão
MAX_LINHAS = 300        # corpo do SKILL.md; acima disso, mover para references/
MAX_SKILLS_PLUGIN = 12  # acima disso o plugin passa de ~1 mil tokens always-on

# Nomes que não podem aparecer no conteúdo publicado. O marketplace é compartilhado na firma:
# caso real vira exemplo anonimizado. Acrescente aqui ao fechar um novo mandato.
# Casados com fronteira de palavra — "Solví" não pode casar dentro de "resolvido".
PROIBIDOS = [
    "bosque da paz", "solví", "solvi", "consórcio ba", "consorcio ba",
    "grupo jsg", "bahia ecologia", "baeco", "cirklo", "eletromídia", "eletromidia",
    "tronox", "neogrid", "concremat", "new chase", "premium entretenimento",
]
PADRAO_PROIBIDOS = {p: re.compile(rf"(?<![\w]){re.escape(p)}(?![\w])", re.I) for p in PROIBIDOS}

# Material de referência de terceiros, estacionado no repositório e não publicado como plugin.
# Ver a seção "Material de referência solto" do README da raiz.
IGNORAR = {"evitar-escrita-de-IA"}


def frontmatter(txt):
    m = re.match(r"^---\n(.*?)\n---", txt, re.S)
    if not m:
        return None, txt
    bloco = m.group(1)
    campos = {}
    for campo in re.finditer(r"^([a-z][a-z-]*):\s*(.*?)(?=\n[a-z][a-z-]*:|\Z)", bloco, re.S | re.M):
        campos[campo.group(1)] = " ".join(campo.group(2).split())
    return campos, txt[m.end():]


def validar(raiz):
    erros, avisos = [], []
    por_plugin = {}

    for dirpath, dirnames, filenames in os.walk(raiz):
        dirnames[:] = [d for d in dirnames if d not in IGNORAR and d != ".git"]
        if ".git" in dirpath:
            continue
        if "SKILL.md" not in filenames:
            continue

        caminho = os.path.join(dirpath, "SKILL.md")
        rel = os.path.relpath(caminho, raiz)
        txt = open(caminho, encoding="utf-8").read()
        campos, corpo = frontmatter(txt)

        if campos is None:
            erros.append(f"{rel}: sem frontmatter YAML (o `---` tem de ser a primeira linha).")
            continue

        desc = campos.get("description", "")
        if not desc:
            erros.append(f"{rel}: sem `description` — é o que o Claude usa para rotear.")
        elif len(desc) > MAX_DESC:
            erros.append(
                f"{rel}: description com {len(desc)} caracteres (teto {MAX_DESC}). "
                f"Custo always-on ~{len(desc)//4} tokens em toda sessão."
            )
        elif len(desc) < MIN_DESC:
            avisos.append(
                f"{rel}: description com {len(desc)} caracteres (mínimo {MIN_DESC}). "
                "Vaga demais tende a não disparar — acrescente gatilhos concretos."
            )

        n_linhas = len(corpo.splitlines())
        if n_linhas > MAX_LINHAS:
            avisos.append(
                f"{rel}: corpo com {n_linhas} linhas (teto {MAX_LINHAS}). "
                "Mover detalhe para references/, que só carrega quando necessário."
            )

        achados = sorted({p for p, padrao in PADRAO_PROIBIDOS.items() if padrao.search(txt)})
        if achados:
            erros.append(f"{rel}: nome de cliente no texto: {', '.join(achados)}. Anonimize.")

        partes = os.path.normpath(rel).split(os.sep)
        plugin = partes[partes.index("skills") - 1] if "skills" in partes else partes[0]
        por_plugin.setdefault(plugin, []).append(rel)

    for plugin, skills in sorted(por_plugin.items()):
        if len(skills) > MAX_SKILLS_PLUGIN:
            avisos.append(
                f"{plugin}: {len(skills)} skills (teto sugerido {MAX_SKILLS_PLUGIN}). "
                "Avalie dividir o plugin ou fundir skills próximas."
            )

    return erros, avisos, por_plugin


def main():
    raiz = sys.argv[1] if len(sys.argv) > 1 else "."
    erros, avisos, por_plugin = validar(raiz)

    total = sum(len(v) for v in por_plugin.values())
    print(f"Skills verificadas: {total} em {len(por_plugin)} plugin(s).\n")

    for a in avisos:
        print(f"  aviso  {a}")
    for e in erros:
        print(f"  ERRO   {e}")

    if not erros and not avisos:
        print("  Tudo dentro do padrão.")
    print()

    if erros:
        print(f"{len(erros)} erro(s). Corrija antes de publicar.")
        return 1
    if avisos:
        print(f"{len(avisos)} aviso(s). Não bloqueiam, mas avalie.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
