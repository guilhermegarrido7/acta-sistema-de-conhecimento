---
name: acta-auditoria
description: Skill mestra da metodologia de auditoria interna da ACTA Advisory. Carregue esta skill SEMPRE que o trabalho envolver auditoria interna, controles internos, papel de trabalho (WP), programa/plano de testes, matriz de riscos e controles, ponto de auditoria, achado, deficiência, walkthrough, narrativa de processo, memorando de deficiências, status report de auditoria, relatório de auditoria em PowerPoint, extrato bancário, fatura de cartão corporativo, base de pagamentos, conciliação, ou qualquer pasta de cliente da ACTA (Bosque da Paz, Solví/Consórcio BA, BBA, Grupo JSG/Ilhéus). Vale também quando o pedido não usa a palavra "auditoria" mas é claramente trabalho de auditoria, "cruze essas duas bases e me diga o que não bate", "monte o WP disso", "gera o ponto pro relatório", "revisa o plano de testes", "tabula essas faturas". Ela contém as regras invioláveis, a doutrina do número exato, as regras de operação do Emanuel e o roteamento para as skills subordinadas, carregue-a primeiro e deixe que ela indique as demais.
---

# Auditoria interna ACTA: skill mestra

> ## 🔴 PRIMEIRO PASSO, ANTES DE QUALQUER COISA
>
> **Leia a memória de longo prazo do usuário: `~/.claude/CLAUDE.md`.** É a autoridade sobre identidade
> visual, dados cadastrais, quem é quem e como o Emanuel quer trabalhar. Depois, o `CLAUDE.md` da raiz
> do engajamento, o `_Controle ACTA\HISTORICO.md` e o `APRENDIZADOS.md`.
>
> **Se o ambiente tiver uma skill própria de memória do usuário** — no do Emanuel ela se chama
> `memoria` — carregue-a para o protocolo completo: a armadilha da chave por diretório,
> onde gravar cada tipo de fato, e a regra de que **divergência entre registros se pergunta, nunca se
> unifica por conta própria**.
>
> Isso não é formalidade. Já custou o verde institucional trocado por um tom errado e propagado por
> quatro skills, porque a memória correta estava numa chave que a sessão não alcançava.

Esta skill comanda as demais. Ela carrega o que vale para **todo** trabalho de auditoria da ACTA:
as regras que não se negociam, a disciplina numérica, o modo de operar do Emanuel e o ritual de
aprendizado. As skills subordinadas trazem a mecânica de cada entregável, carregue-as conforme a
tabela de roteamento no fim deste documento.

Quem é o interlocutor: **Emanuel Rebouças**, auditor responsável da ACTA Advisory. Sócio responsável
**Maurício Sacramento** (faz quality review e revisa os decks). Revisor de WP **Matheus Souza**.
Marcio Mourão encabeça as frentes organizacionais. Emanuel domina auditoria, responda no nível
técnico, sem explicação básica. Ele trabalha em Windows com OneDrive, com os arquivos abertos, sob
prazo, e valida abrindo o entregável e olhando.

---

## 1. As sete regras invioláveis

**R1, A pasta do cliente é somente leitura.** Em todo engajamento existe uma pasta compartilhada
com o cliente (na ACTA, tipicamente `07. Arquivos Recebidos`). O cliente vê tudo que está lá. Nunca
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

> Exemplo canônico: a política manda homologar fornecedor. O controle é "verificar a existência de
> processo de homologação, contemplando critérios, documentos exigidos, responsável, cadastro de
> homologados e reavaliação periódica". Achado: *"A política cita a homologação, porém não existe o
> processo."*

E a ressalva que acompanha qualquer avaliação de normativo: se as políticas foram emitidas **depois**
do período auditado, deficiência de política é de **desenho atual**, não se cobra aderência
retroativa a norma que não existia. Declare isso.

---

## 2. A doutrina do número

Esta seção existe porque foi aqui que o método falhou mais. Onze números entregues ao Emanuel
precisaram ser retratados, e **todos tinham a mesma causa: agregar antes de validar o universo.**
Total de fatura tratado como transação inflou um saldo em 4,6×. Parcelas da mesma compra contadas
como 148 duplicidades. Homônimos no cadastro contando pagamento em dobro. Percentual formatado com
zero decimais que virou conclusão sobre a ausência de regra, quando a regra existia e fechava ao
centavo.

**A ordem correta, sem atalho:**

1. **Defina o universo antes de somar.** Quantas linhas o arquivo tem? Quantas são transação e
   quantas são cabeçalho, subtotal, total, rodapé de página, linha de continuação? Some só depois de
   responder.
2. **Reconcilie contra um total independente.** O total da fatura, o saldo do extrato, o valor
   declarado pelo cliente. Se a sua soma não bate com um total que você não calculou, você ainda não
   entendeu a base.
3. **Casamento item a item, com tolerância declarada.** Ao confrontar duas bases, case valor a valor
   consumindo um pool (cada contraparte só pode casar uma vez, senão homônimos e repetições contam em
   dobro). Declare a tolerância, 1 centavo, e trate os quase-pares como achado próprio: diferença
   de centavos entre fatura e sistema é prova de lançamento manual.
4. **Separe fenômenos que se parecem.** Parcelamento não é duplicidade. Cobrança recorrente
   automática não é gasto discricionário. Seguro operacional não é seguro do cartão. Antes de
   classificar por palavra-chave, olhe a lista de valores distintos.
5. **Se o universo é contável, conte-o inteiro.** Nunca escreva `~`, "cerca de", "aproximadamente"
   para algo que dá para contar. Emanuel formulou a regra assim: *"entendo que você precisou olhar
   100% delas, o valor tem de ser exato e a quantificação de todos os dados precisam ter acurácia."*
6. **Cheque a consistência interna antes de entregar.** Se um parágrafo diz 100% e outro diz 20%, um
   dos dois está medindo outro universo. Descubra qual antes que o Emanuel descubra.
7. **Tente refutar o seu próprio número.** Pergunte: qual é a explicação inocente para isso? Se
   existe e você não a testou, você ainda não tem achado, tem hipótese. Três dos onze erros morreram
   no rascunho justamente porque essa pergunta foi feita.

**Quando um número já publicado estiver errado**, corrija de frente: diga o número que estava errado,
o certo, e a causa, em duas linhas. Depois propague para **todos** os artefatos, WP, deck, matriz,
texto do ponto. Número corrigido em um lugar e velho em outro é pior que o erro original. E registre
a correção no histórico do projeto (ver `acta-aprendizado`).

---

## 3. Como o Emanuel opera

Estas regras vêm do comportamento observado ao longo de 347 turnos. Ignorá-las é a principal fonte de
retrabalho.

**Nunca sobrescreva: sempre versão nova.** v1 → v16 no mesmo relatório. *"eu sempre gosto de trabalhar
em cópias para guardar as alterações, caso alguém apague ou faça uma besteira, dá pra voltar."*
Se for alterar um entregável existente, crie a versão seguinte e diga qual é.

**A edição manual dele é soberana.** O arquivo mais recente é a verdade, inclusive quando contradiz o
que você gerou. *"Vai haver divergência entre os dois, este prevalece sempre."* Antes de reescrever
qualquer bloco, leia o estado atual e preserve o que ele mexeu. Já aconteceu de uma alteração minha
apagar a dele, *"não altere mais nada, suas alterações tavam apagando as minhas."*

**Os arquivos estão abertos.** `PermissionError [WinError 32]` é estado normal, não exceção. Diga
exatamente qual arquivo travou e espere; ele responde "fechei". Nunca contorne salvando com outro
nome sem avisar.

**Produzir não é publicar.** Existe gate: *"ainda não vai pro slide, fica só na planilha por
enquanto"*, *"só não sobe o arquivo de matriz de riscos e controles"*. Quando ele pede para ver antes,
mostre o resultado no chat e espere o aval.

**Localize por conteúdo, não por posição.** Ele reordena slides e renomeia abas entre turnos.
Encontrar o slide pelo texto do título é a única forma estável.

**Estética é requisito.** Ele valida abrindo o arquivo. Texto cortado, tabela fora da margem e
sobreposição voltam como *"está horrível"*, *"ficou pobre"*, *"faz CERTO!!!"*. Renderize e olhe antes
de dizer que terminou. Quando houver escolha visual legítima (barra × pizza), entregue as duas e
deixe ele apagar a que não quer, funcionou melhor que tentar acertar de primeira.

**Paleta: verde ACTA e preto, e nada de tinta derivada do verde.** Regra dele, 19/08/2026:
*"use bastante o verde ACTA e o preto, que também é uma cor ACTA, prefiro o preto que variações do
verde ACTA, o verde ACTA seria o único verde em qualquer coisa, salvo aquele verde que serve como
farol."*

| Uso | Cor |
|---|---|
| Verde ACTA, **único verde do arquivo** | `167D73` — RGB 22, 125, 115 |
| Preto, **também cor ACTA e preferido** | `000000` |
| Cinzas neutros (zebra / borda / destaque) | `F7F7F7` · `BFBFBF` · `E6E6E6` |
| Cinza de subtítulo | `595959` |

Onde você ia usar verde claro, use cinza neutro. Onde ia usar verde médio para dar peso, use **preto**.
`0F5850`, `F4F8F7`, `E4EEEC` e `BFD3D0` estão **proibidas**: são tintas do verde ACTA e estavam prescritas por
engano em `acta-papel-de-trabalho`, de onde foram removidas. A única exceção é o verde do **semáforo**
(`C6EFCE`/`276221`), que é farol e não decoração.

**Respeite o sequenciamento que ele impõe.** Quando ele diz "só execute a atividade 1 depois de
validar a 2", isso é ordem de execução, não sugestão.

**Regra nova entra DEPOIS, e não altera regra anterior.** *"essa regra para pegar esses casos tem
que aplicar uma nova regra que vem DEPOIS, não mudar as regras anteriores, pra não dar falso negativo"*
(19/08/2026). Vale para qualquer régua de casamento, classificação ou conciliação. O caso que gerou:
no BBA, um bem legítimo foi dado como inexistente porque o nome do fornecedor não batia — a FAF
cadastra **nome fantasia** e o razão **razão social**, e `SAT` contra `SISTEMA DE AUTOMACAO E
TECNOLOGIA` dá similaridade 0,00. A correção certa não foi baixar o limiar de similaridade, que
mexeria em milhares de pares já casados, e sim acrescentar uma **passada terminal** que casa o que
sobrou por documento mais valor idêntico ao centavo, com ressalva obrigatória na linha.
**Corolário: o nome da contraparte não é chave de casamento, é evidência de apoio.** A chave é
documento mais valor; o nome serve para desempatar homônimo.

**O que começa certo, termina certo.** *"preciso calcular o valor ORIGINAL, encontrar TUDO, depois eu
avalio a depreciação uniforme com tudo já consolidado"* (20/08/2026). Na prática:

1. **Completude se prova, não se argumenta.** Varra **todas** as contas ou todos os registros sem
   filtro, liste o que ficou fora **com valor**, e classifique cada exclusão. Custa um script. No BBA
   isso revelou que uma conta dada como "fora do universo" estava dentro, e provou que tudo o que
   ficava fora era depreciação acumulada ou obra em andamento.
2. **Nunca feche diferença de uma grandeza com número de outra.** Custo não se explica com residual.
3. **Ausência de contraparte é achado com nome**, não redução de escopo.
4. **Menor bloco isolável primeiro.** Quando as duas partes medem grandezas diferentes, amarre
   ponta a ponta o menor bloco isolável antes de discutir o agregado: uma amarração exata num bloco
   pequeno vale mais que aproximação no total.

**Chave composta: teste o componente que se repete.** Antes de usar um identificador como chave, conte
quantas vezes cada valor aparece. Se repete, ele é **componente**, não chave. E o sinal de chave certa
não é só a taxa de acerto: é a **ausência de casos que casam com valor divergente**. Taxa alta com
divergências significa chave frouxa; taxa média com zero divergência significa chave certa.

**Hipótese do revisor também se testa antes de implementar.** Descartar regra por medição vale tanto
quanto criar regra por medição, e o custo do teste é um script. No BBA, implementar por deferência uma
regra pedida teria criado dupla contagem de R$ 34 milhões; a medição mostrou que os dois lados do
lançamento já estavam na base.

**Confirme entendimento antes de tarefa grande.** Em pedido longo e multi-item, devolva o
entendimento numerado e espere o "pode executar". Ele pede isso explicitamente.

**Execute até o fim.** *"Execute o comando até o fim… você parou de pensar, não faça mais isso."*
Não pare no meio para perguntar o que dá para decidir sozinho. Se um item ficou bloqueado, entregue
todos os outros e diga o que faltou e por quê.

**Crédito e contexto são recurso.** Ele monitora janela de contexto e custo. Prefira um script que
resolve a dez tentativas; prefira escrever a saída em arquivo a despejar base inteira no chat.

**Ação dele em destaque.** Toda vez que sobrar algo para o Emanuel fazer, destaque visualmente:

> 🟡 **AÇÃO NECESSÁRIA, [o quê]**
> onde, como e por quê.

Datas sempre `dd/mm/aaaa`. Valores sempre `R$ 1.234,56`.

---

## 4. Ambiente técnico

O preâmbulo abaixo elimina cerca de 40% de todos os erros técnicos já observados. Use-o sem pensar.

```bash
PY="$(which python || echo '<caminho do Python instalado localmente, na pasta AppData do usuário>')"
"$PY" caminho/do/script.py
```

- `python` e `python3` caem no stub quebrado da Microsoft Store. Sempre o caminho completo.
- **Escreva scripts com a ferramenta Write, nunca por heredoc.** Heredoc com acento, apóstrofo ou
  caminho com barra invertida quebra em `unexpected EOF`.
- **Nunca `print` com `→ − ⚠ Σ ​`.** O console é cp1252 e estoura `UnicodeEncodeError`. Grave a
  saída em arquivo `encoding="utf-8"` e leia o arquivo.
- Bibliotecas presentes: `openpyxl`, `python-docx`, `python-pptx`, `pandas`+`xlrd` (para `.xls`
  antigo), `pdfplumber`, `pypdf`, `fitz` (PyMuPDF), `pywin32` (COM).

Detalhes, armadilhas conhecidas e receitas de render estão em
[references/ambiente-windows.md](references/ambiente-windows.md), leia quando for mexer em COM,
render, arquivo travado ou cache do OneDrive.

---

## 5. Ritual de aprendizado: obrigatório

**Antes de sobrescrever ou publicar qualquer entregável, pare e faça o momento de aprendizado com o
Emanuel.** Isso não é formalidade: é o mecanismo que impede que o mesmo erro volte no próximo cliente
e que o conhecimento se perca quando a sessão fecha, já se perderam 68 dias de auditoria numa pasta
de memória vazia.

Todo processo novo, um tipo de base que você nunca tratou, um teste que você inventou, um layout que
você resolveu, gera três coisas:

1. **O que aprendi** (a técnica, em 2, 4 linhas, reutilizável em outro cliente).
2. **O que errei e como descobri** (inclusive o erro que morreu no rascunho).
3. **O que ficou em aberto.**

Apresente isso no chat, em bloco curto e destacado, e **espere a reflexão dele antes de gravar**. Ele
corrige a lição, foi assim que "não existe regra no Swile" virou "a regra existe e fecha ao centavo".

Depois de validado, registre no **histórico do projeto**, que todo engajamento mantém:

```
<raiz do engajamento>\_Controle ACTA\HISTORICO.md      ← feitos, refeitos, não feitos
<raiz do engajamento>\_Controle ACTA\APRENDIZADOS.md   ← técnica e erro, reutilizáveis
```

Nunca dentro da pasta do cliente (R1). A mecânica completa, o formato do ledger e o critério do que
promover a memória ou a skill estão em **`acta-aprendizado`**, carregue-a no momento do ritual.

---

## 6. Roteamento: qual skill subordinada carregar

| O que você vai fazer | Carregue |
|---|---|
| Ler/tratar extrato bancário, fatura de cartão, planilhão de pagamentos, base de colaboradores, cadastro de fornecedores; conciliar duas bases; definir amostra | **`acta-bases`** |
| Montar ou atualizar papel de trabalho: capa, abas de evidência, aba de critérios, resultado | **`acta-papel-de-trabalho`** |
| Criar/revisar programa de testes, matriz de testes, registro de riscos R1..Rx, matriz controles × riscos, grau de implementação, régua de riscos | **`acta-programa-de-trabalho`** |
| Escrever ponto de auditoria, achado, memorando de deficiências, texto de status report, recomendação, severidade | **`acta-redacao`** |
| Montar/alterar slide no deck de auditoria, tabela ou gráfico em PPTX, organograma, fluxo AS IS | **`acta-relatorio`** |
| Fechar um bloco de trabalho, registrar o que foi feito/refeito, promover lição a memória ou skill | **`acta-aprendizado`** |
| Auditar o ciclo de receita: contrato, medição/BM, aceite, faturamento/NF, tabela de preços, reajuste, glosa, notificação, inadimplência/aging, cancelamento/balança/MTR | **`acta-contas-a-receber`** |

**Memória NÃO é skill da ACTA.** Ler ou gravar memória de longo prazo, decidir se o fato é do
usuário ou do projeto, resolver divergência entre registros: isso é protocolo **pessoal do
usuário**, não metodologia da ACTA. Se o ambiente tiver uma skill de memória, carregue-a **antes
de produzir qualquer coisa** — no do Emanuel ela se chama **`memoria`**. **Se não tiver, siga
sem:** nada nesta skill depende dela, e o mínimo é ler o `CLAUDE.md` global e o do engajamento
antes de produzir.

Mais de uma pode valer ao mesmo tempo, um ponto novo no relatório normalmente pede `acta-bases`
(o número), `acta-redacao` (o texto) e `acta-relatorio` (o slide). Carregue as que o trabalho pedir.

As seis primeiras linhas são skills de **mecânica** (como fazer o entregável). `acta-contas-a-receber`
é uma skill de **domínio** (o que testar num processo): ela orquestra as de mecânica e se
retroalimenta a cada execução. Skills de domínio de outros processos entram aqui à medida que forem
criadas.

---

## 7. Checklist antes de dizer que terminou

**Conteúdo:** toda afirmação tem fonte? Fato separado de percepção, percepção atribuída?
Contradições registradas em vez de resolvidas por escolha? Declarei desenho ou efetividade? Cada
ponto tem Condição + Risco + Recomendação + Severidade? A recomendação é acionável (o quê, quem, qual
gatilho)? Registrei o que **não** foi possível concluir e o que falta solicitar?

**Número:** universo definido e declarado? Soma reconciliada contra total independente? Nenhum `~`?
Percentuais consistentes entre si e com as tabelas? Se corrigi número já publicado, propaguei para
todos os artefatos?

**Forma:** paleta e fonte ACTA; vocabulário fechado respeitado; primeira pessoa do plural, pretérito;
sem adjetivo de intensidade; sem julgar pessoas; IDs sem duplicidade e nenhum ID já emitido
renumerado; datas `dd/mm/aaaa`.

**Destino e integridade:** o arquivo **não** foi salvo na pasta do cliente? Está na pasta correta?
É versão nova em vez de sobrescrita? As edições manuais do Emanuel foram preservadas? Rendeirizei o
`.pptx`/`.docx` e **olhei**? Abre sem aviso de reparo?

**Aprendizado:** fiz o momento de reflexão com ele antes de gravar? Atualizei `HISTORICO.md` e
`APRENDIZADOS.md`?
