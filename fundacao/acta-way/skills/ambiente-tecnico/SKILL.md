---
name: ambiente-tecnico
description: Evite as armadilhas conhecidas de Windows, OneDrive e automação Office nos trabalhos da ACTA. Acionar ao rodar script Python, ao ler planilha ou PDF, ao gerar ou renderizar PPTX e DOCX via COM, ao tratar arquivo travado ou cache do OneDrive, ou ao investigar erro de encoding no console.
user-invocable: false
---

# Ambiente técnico ACTA

Catálogo das falhas que já custaram tempo em trabalhos da ACTA, com a solução que funcionou. Vale
para qualquer projeto da firma — auditoria ou consultoria.

## Preâmbulo que elimina a maior parte dos erros

```bash
PY="~~interpretador python"
"$PY" caminho/do/script.py
```

- `python` e `python3` no Bash caem no **stub quebrado da Microsoft Store** — a mensagem é *"Python
  não foi encontrado"* e o exit code é 49 ou 9009. Resolva o interpretador na hora; nunca escreva um
  caminho de máquina numa skill (ver [CONVENCOES.md](../../../../CONVENCOES.md)).
- **Escreva script com a ferramenta Write, nunca por heredoc.** Heredoc com acento, apóstrofo ou
  barra invertida quebra em `unexpected EOF`.
- **Nunca `print` com `→ − ⚠ Σ`.** O console é cp1252 e estoura `UnicodeEncodeError`. Grave a saída
  em arquivo com `encoding="utf-8"` e leia o arquivo.

## Catálogo completo

O detalhamento — interpretador, encoding, arquivos travados, cache do OneDrive e SharePoint, leitura
de planilha e de PDF, render para conferência visual, PowerPoint via COM, dependências ausentes —
está em [`references/ambiente-windows.md`](references/ambiente-windows.md).

## Regra que atravessa tudo

Antes de abrir, sobrescrever ou renderizar um arquivo, confirme **qual** arquivo. Se não foi
informado, pergunte. Arquivo travado normalmente significa que o usuário está com ele aberto — isso
é estado normal, não erro: trate como sinal para gravar uma versão nova, não para forçar escrita.
