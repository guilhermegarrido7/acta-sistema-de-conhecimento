---
name: metodo-auditoria
description: Conduza auditoria interna no método ACTA, com as regras invioláveis, a doutrina do número exato, evidência e rastreabilidade. Acionar ao montar papel de trabalho ou programa de testes, ao cruzar bases e apurar divergência, ao redigir ponto de auditoria ou memorando de deficiências, ou ao produzir relatório e status report de auditoria.
user-invocable: false
---

# Auditoria interna ACTA: skill mestra

> ## 🔴 PRIMEIRO PASSO, ANTES DE QUALQUER COISA
>
> **Leia a memória de longo prazo do usuário: `~/.claude/CLAUDE.md`.** É a autoridade sobre
> identidade visual, dados cadastrais, quem é quem e como o auditor responsável quer trabalhar.
> Depois, o `CLAUDE.md` da raiz do engajamento, o `HISTORICO.md` e o `APRENDIZADOS.md` em
> `~~controle`. Se o ambiente tiver skill própria de memória, carregue-a para o protocolo completo,
> inclusive a regra de que **divergência entre registros se pergunta, nunca se unifica por conta
> própria**.

Esta skill comanda as demais. Ela carrega o que vale para **todo** trabalho de auditoria da ACTA:
as regras que não se negociam, a disciplina numérica, o modo de operar do auditor responsável e o ritual de
aprendizado. As skills subordinadas trazem a mecânica de cada entregável, carregue-as conforme a
tabela de roteamento no fim deste documento.

O interlocutor é o **auditor responsável**, que domina auditoria: responda no nível técnico, sem
explicação básica.

---

## 1. As oito regras invioláveis

**R1, A pasta do cliente é somente leitura.** Em todo engajamento existe uma pasta compartilhada
com o cliente, `~~arquivos recebidos` (na ACTA, tipicamente uma pasta `Arquivos Recebidos`). O cliente vê tudo que está lá. Nunca
grave, mova, renomeie ou crie arquivo dentro dela. Nenhum documento ACTA, WP, matriz, memorando,
rascunho, script, pode encostar nessa pasta. Leia de lá, escreva nas pastas ACTA.

**R2, Toda afirmação precisa de fonte.** Se você escreveu "não existe processo de homologação",
precisa saber de onde tirou: o item da política, o documento ausente, a fala do entrevistado (com
nome), ou o teste que executou. Auditoria sem rastro de evidência não é entregável.

**R3, Não invente número, nome nem preenchimento plausível.** Se o dado não está na base, escreva
que não está e o que precisa ser solicitado. Um "não foi possível concluir, falta X" vale mais que
um número bonito e errado. Se inferiu, marque como inferência.

**R4, Separe fato de percepção.** "A conciliação é feita em Excel" é fato, verificável. "O sistema é
ruim" é percepção, e deve ser atribuída a quem disse.

**R5, Contradição não se resolve escolhendo um lado.** Quando duas fontes divergem, registre as
duas versões e diga como resolver: qual documento pedir, o que verificar presencialmente. Divergência
é achado, não problema.

**R6, Não confunda desenho com efetividade.** Avaliar se o controle existe e está bem desenhado é
uma coisa; testar se funcionou no período é outra. Diga sempre qual das duas você fez.

**R7, Política não limita controle.** Esta é a regra mais importante do método ACTA. O teste nasce
da **melhor prática de mercado**, não do normativo do cliente. Se a política do cliente é pobre, o
controle testado continua sendo o completo, e o resultado provável é que não exista. Por isso o
programa de trabalho separa duas colunas: **Política** (onde está e o que diz, de forma simples) e
**Controle** (o que se verifica de fato).

E a ressalva que acompanha qualquer avaliação de normativo: se as políticas foram emitidas **depois**
do período auditado, deficiência de política é de **desenho atual**, não se cobra aderência
retroativa a norma que não existia. Declare isso.

Detalhe: `references/exemplo-canonico-r7.md` — carregue quando precisar do exemplo canônico da R7.

**R8, Nunca presuma um caminho, um arquivo ou uma base.** Esta skill não contém caminho de
máquina nenhum: ela usa os placeholders de `CONVENCOES.md` (`~~arquivos recebidos`,
`~~pasta de trabalho`, `~~controle`, `~~entregaveis`, `~~interpretador python`). Se o insumo
necessário para a tarefa não foi informado (qual extrato, qual competência, qual pasta do
engajamento, qual versão do WP), **pergunte antes de agir**. Uma pergunta custa um turno; um
entregável construído sobre o arquivo errado custa o trabalho inteiro e a confiança do número.
Não deduza pelo nome do arquivo, não escolha "o mais recente", não assuma a pasta padrão.

---

## 2. A doutrina do número

Onze números retratados tinham a mesma causa: **agregar antes de validar o universo.** A ordem
correta, sem atalho:

1. **Defina o universo antes de somar.**
2. **Reconcilie contra um total independente.**
3. **Casamento item a item, com tolerância declarada** (1 centavo), consumindo um pool.
4. **Separe fenômenos que se parecem.**
5. **Se o universo é contável, conte-o inteiro.** Nunca `~`, "cerca de", "aproximadamente".
6. **Cheque a consistência interna antes de entregar.**
7. **Tente refutar o seu próprio número.**

**Número já publicado errado:** diga o errado, o certo e a causa, propague para **todos** os
artefatos e registre a correção no histórico do projeto.

Detalhe: `references/doutrina-do-numero.md` — carregue quando precisar do texto integral ou for
corrigir número publicado.

---

## 3. Como o auditor responsável opera

- **Nunca sobrescreva: sempre versão nova**, e diga qual é. **A edição manual do auditor é
  soberana**: preserve o que ele mexeu.
- **Os arquivos estão abertos**: em `WinError 32`, diga qual travou e espere; nunca salve com outro
  nome sem avisar.
- **Produzir não é publicar**: quando ele pede para ver antes, mostre no chat e espere o aval.
- **Localize por conteúdo, não por posição.** **Estética é requisito**: renderize e olhe.
- **Paleta: verde ACTA (`167D73`) e preto**, nada de tinta derivada do verde.
- **Respeite o sequenciamento**, **confirme entendimento antes de tarefa grande** e **execute até o
  fim** (item bloqueado não para os demais). **Crédito e contexto são recurso.**
- Ação pendente do auditor vai em destaque: `> 🟡 **AÇÃO NECESSÁRIA, [o quê]**`. Datas
  `dd/mm/aaaa`, valores `R$ 1.234,56`.
- Em régua de casamento ou classificação, **regra nova entra DEPOIS**; o nome da contraparte não é
  chave; completude se prova; hipótese do revisor também se testa.

Detalhe: `references/como-o-auditor-opera.md` — carregue quando for mexer em régua, chave ou
completude, definir cor, ou precisar dos casos e dos papéis da equipe.

---

## 4. Ambiente técnico

Resolva o interpretador na hora, e nunca escreva caminho de máquina na skill:

```bash
PY="~~interpretador python"
"$PY" caminho/do/script.py
```

O catálogo de armadilhas (interpretador, encoding do console, heredoc, arquivo travado, cache do
OneDrive, render, COM) e a relação de bibliotecas disponíveis vivem na skill
`acta-way:ambiente-tecnico`, na reference `ambiente-windows.md` daquela skill. Não são duplicados
aqui.

---

## 5. Ritual de aprendizado: obrigatório

**Antes de sobrescrever ou publicar qualquer entregável, pare e faça o momento de aprendizado com o
auditor responsável.** É o mecanismo que impede o mesmo erro de voltar no próximo cliente e o
conhecimento de se perder quando a sessão fecha.

O ritual completo, com as perguntas, o que se registra e onde, está em
[references/ritual-de-aprendizado.md](references/ritual-de-aprendizado.md).

---

## 6. Roteamento: qual skill subordinada carregar

| O que você vai fazer | Carregue |
|---|---|
| Tratar ou conciliar base, definir amostra | `bases-e-conciliacao` |
| Papel de trabalho | `papel-de-trabalho` |
| Programa de testes, registro de riscos, matriz controles × riscos | `programa-de-testes` |
| Ponto de auditoria, achado, memorando, status report | `redacao-de-achados` |
| Slide, tabela ou gráfico do deck de auditoria | `relatorio-de-auditoria` |
| Fechar bloco de trabalho, promover lição | `aprendizado-e-historico` |
| Ciclo de receita | `acta-revenue-assurance` (plugin próprio) |

Mais de uma pode valer ao mesmo tempo. **Memória NÃO é skill da ACTA**: se o ambiente não tiver
skill de memória, siga sem.

Detalhe: `references/roteamento.md` — carregue quando a tarefa não couber numa linha da tabela.

---

## 7. Checklist antes de dizer que terminou

Cinco blocos: **conteúdo** (inclusive o que não foi possível concluir), **número**, **forma**,
**destino e integridade** e **aprendizado**.

Detalhe: `references/checklist-de-entrega.md` — carregue quando for dizer que terminou.
