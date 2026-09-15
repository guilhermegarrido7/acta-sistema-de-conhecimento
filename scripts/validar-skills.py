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

# A lista de nomes de cliente NÃO vive neste arquivo, e não pode viver: o repositório é público,
# e uma relação da carteira da firma versionada aqui seria o mesmo vazamento que este script existe
# para impedir. Ela fica em `clientes.local.txt` na raiz — um nome por linha, ignorado pelo git.
# Sem esse arquivo o script roda e avisa que a checagem de cliente não foi executada.
ARQUIVO_CLIENTES = "clientes.local.txt"


def carregar_clientes(raiz):
    """Lê a relação local de nomes proibidos.

    Um nome por linha. Prefixo `=` força casamento sensível a maiúsculas, para o caso em que o
    nome do cliente colide com palavra comum: `=Célula` pega "a Célula" e não pega "célula
    mesclada". Sem o prefixo, o casamento ignora maiúsculas.
    """
    caminho = os.path.join(raiz, ARQUIVO_CLIENTES)
    if not os.path.exists(caminho):
        return None
    padroes = {}
    for linha in open(caminho, encoding="utf-8"):
        linha = linha.split("#", 1)[0].strip()
        if not linha:
            continue
        sensivel = linha.startswith("=")
        nome = linha[1:].strip() if sensivel else linha
        if not nome:
            continue
        # Fronteira de palavra: um nome curto não pode casar dentro de outra palavra.
        padroes[nome] = re.compile(
            rf"(?<![\w]){re.escape(nome)}(?![\w])", 0 if sensivel else re.I
        )
    return padroes

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
    clientes = carregar_clientes(raiz)
    if clientes is None:
        avisos.append(
            f"{ARQUIVO_CLIENTES} não encontrado na raiz — a checagem de nome de cliente NÃO rodou. "
            "Crie o arquivo (um nome por linha) para que ela passe a valer nesta máquina."
        )

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

        if clientes:
            achados = sorted({n for n, padrao in clientes.items() if padrao.search(txt)})
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
