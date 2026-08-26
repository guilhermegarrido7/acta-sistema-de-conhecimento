#!/usr/bin/env node
// Hook de SessionStart do acta-way.
// Le quais plugins ACTA estao habilitados e lembra do custo always-on caso
// haja mais de um ativo, ou caso o unico ativo nao esteja em uso nesta
// conversa. Nunca falha a sessao: qualquer erro aqui e engolido e o hook
// sai silenciosamente (exit 0, sem output), porque um lembrete de higiene de
// contexto nao pode travar o inicio de uma sessao de trabalho real.

const fs = require("fs");
const os = require("os");
const path = require("path");

const MARKETPLACE = "acta-sistema-de-conhecimento";

function lerPluginsHabilitados() {
  const p = path.join(os.homedir(), ".claude", "settings.json");
  const j = JSON.parse(fs.readFileSync(p, "utf8"));
  const mapa = j.enabledPlugins || {};
  return Object.keys(mapa)
    .filter((chave) => mapa[chave] === true && chave.endsWith("@" + MARKETPLACE))
    .map((chave) => chave.split("@")[0])
    .sort();
}

function montarContexto(ativos) {
  if (ativos.length === 0) return null;

  const lista = ativos.map((n) => "`" + n + "`").join(", ");

  return (
    "Plugins do ACTA Sistema de Conhecimento habilitados nesta maquina: " + lista + ".\n\n" +
    "Cada plugin habilitado soma um custo fixo de contexto (\"always-on\") em TODA sessao, " +
    "mesmo em conversas sem nenhuma relacao com ele — e o preco de manter a descricao das " +
    "skills disponivel para o roteamento. Nao e cobrado por uso, e cobrado por estar ativo.\n\n" +
    "Se esta conversa nao for sobre um dos projetos acima, mencione isso ao usuario logo na " +
    "primeira resposta, em uma linha curta, e sugira desativar o que nao estiver em uso agora:\n" +
    "`claude plugin disable <nome>` (reversivel a qualquer momento com `claude plugin enable <nome>`).\n" +
    "Nao repita esse lembrete depois da primeira mensagem da sessao."
  );
}

function main() {
  const ativos = lerPluginsHabilitados();
  const contexto = montarContexto(ativos);
  if (!contexto) return; // nada ACTA habilitado: hook nao diz nada

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "SessionStart",
        additionalContext: contexto,
      },
    })
  );
}

try {
  main();
} catch (erro) {
  // silencioso de proposito — ver comentario no topo do arquivo
}
process.exit(0);
