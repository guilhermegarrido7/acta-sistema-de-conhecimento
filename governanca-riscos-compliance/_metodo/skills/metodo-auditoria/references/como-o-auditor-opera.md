# Como o auditor responsável opera: papéis, regras com citações e casos

Extraído de `metodo-auditoria`: o topo e a seção 3, que mantêm a síntese. O conteúdo é o mesmo; só o
lugar mudou.

## Interlocutor e papéis

Quem é o interlocutor: o **auditor responsável** pelo engajamento. O **sócio responsável** pela conta
faz o quality review e revisa os decks. Um **revisor de WP** independente revisa os papéis de trabalho.
O **líder de frente** encabeça as frentes organizacionais. O auditor responsável domina auditoria, responda no nível
técnico, sem explicação básica. Trabalha em Windows com OneDrive, com os arquivos abertos, sob
prazo, e valida abrindo o entregável e olhando.

## O caso que fixou o primeiro passo

> Já custou o verde institucional trocado por um tom errado e propagado por quatro skills, porque a
> memória correta estava numa chave que a sessão não alcançava.

## As regras de operação, em texto integral

Estas regras vêm do comportamento observado ao longo de 347 turnos. Ignorá-las é a principal fonte de
retrabalho.

**Nunca sobrescreva: sempre versão nova.** v1 → v16 no mesmo relatório. *"eu sempre gosto de trabalhar
em cópias para guardar as alterações, caso alguém apague ou faça uma besteira, dá pra voltar."*
Se for alterar um entregável existente, crie a versão seguinte e diga qual é.

**A edição manual do auditor é soberana.** O arquivo mais recente é a verdade, inclusive quando contradiz o
que você gerou. *"Vai haver divergência entre os dois, este prevalece sempre."* Antes de reescrever
qualquer bloco, leia o estado atual e preserve o que ele mexeu. Já aconteceu de uma alteração minha
apagar a do auditor, *"não altere mais nada, suas alterações tavam apagando as minhas."*

**Os arquivos estão abertos.** `PermissionError [WinError 32]` é estado normal, não exceção. Diga
exatamente qual arquivo travou e espere; ele responde "fechei". Nunca contorne salvando com outro
nome sem avisar.

**Produzir não é publicar.** Existe gate: *"ainda não vai pro slide, fica só na planilha por
enquanto"*, *"só não sobe o arquivo de matriz de riscos e controles"*. Quando ele pede para ver antes,
mostre o resultado no chat e espere o aval.

**Localize por conteúdo, não por posição.** O auditor reordena slides e renomeia abas entre turnos.
Encontrar o slide pelo texto do título é a única forma estável.

**Estética é requisito.** O auditor valida abrindo o arquivo. Texto cortado, tabela fora da margem e
sobreposição voltam como *"está horrível"*, *"ficou pobre"*, *"faz CERTO!!!"*. Renderize e olhe antes
de dizer que terminou. Quando houver escolha visual legítima (barra × pizza), entregue as duas e
deixe ele apagar a que não quer, funcionou melhor que tentar acertar de primeira.

**Paleta: verde ACTA e preto, e nada de tinta derivada do verde.** Regra fixada em 19/08/2026:
*"use bastante o verde ACTA e o preto, que também é uma cor ACTA, prefiro o preto que variações do
verde ACTA, o verde ACTA seria o único verde em qualquer coisa, salvo aquele verde que serve como
farol."*

| Uso | Cor |
|---|---|
| Verde ACTA, **único verde do arquivo** | `167D73`, RGB 22, 125, 115 |
| Preto, **também cor ACTA e preferido** | `000000` |
| Cinzas neutros (zebra / borda / destaque) | `F7F7F7` · `BFBFBF` · `E6E6E6` |
| Cinza de subtítulo | `595959` |

Onde você ia usar verde claro, use cinza neutro. Onde ia usar verde médio para dar peso, use **preto**.
`0F5850`, `F4F8F7`, `E4EEEC` e `BFD3D0` estão **proibidas**: são tintas do verde ACTA e estavam prescritas por
engano em `papel-de-trabalho`, de onde foram removidas. A única exceção é o verde do **semáforo**
(`C6EFCE`/`276221`), que é farol e não decoração.

**Respeite o sequenciamento que ele impõe.** Quando ele diz "só execute a atividade 1 depois de
validar a 2", isso é ordem de execução, não sugestão.

**Regra nova entra DEPOIS, e não altera regra anterior.** *"essa regra para pegar esses casos tem
que aplicar uma nova regra que vem DEPOIS, não mudar as regras anteriores, pra não dar falso negativo"*
(19/08/2026). Vale para qualquer régua de casamento, classificação ou conciliação. O caso que gerou:
num mandato, um bem legítimo foi dado como inexistente porque o nome do fornecedor não batia. A FAF
cadastra **nome fantasia** e o razão **razão social**, e `SAT` contra `SISTEMA DE AUTOMACAO E
TECNOLOGIA` dá similaridade 0,00. A correção certa não foi baixar o limiar de similaridade, que
mexeria em milhares de pares já casados, e sim acrescentar uma **passada terminal** que casa o que
sobrou por documento mais valor idêntico ao centavo, com ressalva obrigatória na linha.
**Corolário: o nome da contraparte não é chave de casamento, é evidência de apoio.** A chave é
documento mais valor; o nome serve para desempatar homônimo.

**O que começa certo, termina certo.** *"preciso calcular o valor ORIGINAL, encontrar TUDO, depois eu
avalio a depreciação uniforme com tudo já consolidado"* (20/08/2026). Na prática:

1. **Completude se prova, não se argumenta.** Varra **todas** as contas ou todos os registros sem
   filtro, liste o que ficou fora **com valor**, e classifique cada exclusão. Custa um script. Num mandato
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
quanto criar regra por medição, e o custo do teste é um script. Num mandato, implementar por deferência uma
regra pedida teria criado dupla contagem de R$ 34 milhões; a medição mostrou que os dois lados do
lançamento já estavam na base.

**Confirme entendimento antes de tarefa grande.** Em pedido longo e multi-item, devolva o
entendimento numerado e espere o "pode executar". O auditor pede isso explicitamente.

**Execute até o fim.** *"Execute o comando até o fim… você parou de pensar, não faça mais isso."*
Não pare no meio para perguntar o que dá para decidir sozinho. Se um item ficou bloqueado, entregue
todos os outros e diga o que faltou e por quê.

**Crédito e contexto são recurso.** O auditor monitora janela de contexto e custo. Prefira um script que
resolve a dez tentativas; prefira escrever a saída em arquivo a despejar base inteira no chat.

**Ação do auditor em destaque.** Toda vez que sobrar algo para o auditor responsável fazer, destaque visualmente:

> 🟡 **AÇÃO NECESSÁRIA, [o quê]**
> onde, como e por quê.

Datas sempre `dd/mm/aaaa`. Valores sempre `R$ 1.234,56`.
