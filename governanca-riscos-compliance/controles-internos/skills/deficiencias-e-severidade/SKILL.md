---
name: deficiencias-e-severidade
description: Classifique a deficiência de controle interno em simples, significativa ou fraqueza material, agregue as que se somam e defina a quem comunicar. Acionar ao converter falha de teste em deficiência, ao calibrar severidade por magnitude e probabilidade, ao agregar deficiências da mesma asserção, ou ao definir instrumento de comunicação.
---

# Deficiências de controle e severidade

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas.

## Papel desta skill, e a fronteira com `redacao-de-achados`

A fronteira é explícita e não se atravessa nos dois sentidos:

| Vive em `redacao-de-achados` (plugin de método) | Vive aqui |
|---|---|
| a **forma** do ponto: Condição, Risco, Recomendação | a **classificação de severidade sob a ótica de controles internos** |
| a voz, o tempo verbal, as fórmulas consagradas, a proibição de travessão | a escala de três níveis e o critério de cada |
| a codificação `D-01…D-nn` do Memorando de Deficiências | a agregação de deficiências que se somam |
| a régua `ALTA` · `MÉDIA` · `BAIXA` do relatório de auditoria interna | quem precisa ser comunicado, e em que instrumento |

Em uma frase: **a redação do ponto é lá; a classificação de severidade é aqui.** As duas réguas
convivem e não são a mesma — o §6 faz a ponte entre elas, e é o ponto em que a maioria dos trabalhos
mistura as coisas.

## 1. O que é deficiência de controle

Existe deficiência quando o desenho ou a operação de um controle **não permite que a administração ou
os empregados, no curso normal das suas funções, previnam ou detectem erros em tempo hábil**. É a
definição da **PCAOB AS 2201**, e ela contém as duas origens possíveis, que vêm de
`desenho-vs-efetividade`:

- **Deficiência de desenho**: o controle necessário não existe, ou o controle existente não é
  adequado para atingir o objetivo, mesmo operando como descrito.
- **Deficiência de operação**: o controle é adequado, mas não opera como desenhado, ou quem o executa
  não tem a autoridade ou a competência para executá-lo efetivamente.

A origem entra no ponto, porque muda a recomendação: implantar controle é projeto, corrigir execução
é gestão.

## 2. A escala de três níveis

A escala é a da **PCAOB AS 2201**, ancorada conceitualmente no **COSO 2013** (um princípio ausente ou
não funcionando é, no mínimo, deficiência significativa). Três níveis, e nada entre eles:

| Nível | Critério | Formulação prática |
|---|---|---|
| **Deficiência simples** | falha que não atinge o patamar de significativa | o controle falha, e a chance de isso produzir erro relevante nas demonstrações é remota, ou o erro possível é imaterial |
| **Deficiência significativa** | deficiência, ou combinação de deficiências, **menos severa** que fraqueza material, mas **suficientemente importante para merecer a atenção dos responsáveis pela governança** | há chance razoável de erro que, ainda que não material, importa a quem supervisiona: Conselho, Comitê de Auditoria, sócios |
| **Fraqueza material** (*material weakness*) | deficiência, ou combinação de deficiências, tal que existe **chance razoável** de que um erro **material** nas demonstrações não seja prevenido nem detectado em tempo hábil | o controle falha de forma que o erro material passa; é o nível que, em SOX, obriga a conclusão de que o controle interno **não é efetivo** |

**O critério tem duas dimensões, e as duas entram sempre:**

- **Magnitude potencial.** Não o erro que ocorreu, mas o **maior erro que poderia ocorrer** por
  aquela falha. A pergunta é sobre exposição, não sobre histórico: qual é o volume de transações que
  passa pelo controle, e qual valor por transação.
- **Probabilidade.** A chance de o erro ocorrer e não ser detectado. O padrão é *chance razoável* —
  não "provável", não "certo". O limiar é baixo de propósito, e a tentação de lê-lo como "provável"
  é o que mais desclassifica deficiência para baixo.

**Controles compensatórios entram na avaliação da probabilidade, e só valem se forem testados.**
Alegar que outro controle captura o erro sem ter testado esse outro controle é rebaixar severidade
por hipótese. Se o compensatório foi testado e é eficaz, ele reduz a probabilidade e pode baixar o
nível — e isso se registra, com o código do controle compensatório.

**Indicadores que puxam para fraqueza material,** independentemente do resto da avaliação:

- fraude, de qualquer magnitude, envolvendo a alta administração;
- reapresentação de demonstrações financeiras para corrigir erro relevante de período anterior;
- erro material identificado pelo auditor independente que os controles da Companhia não detectariam;
- supervisão inefetiva sobre o processo de reporte financeiro por parte dos responsáveis pela
  governança;
- ausência de segregação de funções em processo com acesso a ativo líquido.

## 3. Agregação: o passo que quase todo mundo pula

**Deficiências individualmente pequenas que afetam a mesma asserção, a mesma conta ou o mesmo
processo somam-se, e a combinação pode subir de nível.** A definição normativa dos dois níveis
superiores diz literalmente *"deficiência, ou combinação de deficiências"*. Avaliar uma a uma e parar
aí é avaliação incompleta, não avaliação conservadora.

O procedimento, e é procedimento, não leitura:

1. **Agrupe as deficiências por asserção e conta significativa**, usando a coluna de asserções do
   RACM. Cada deficiência já traz o controle, e o controle já traz as asserções que ele cobria.
2. **Para cada grupo, pergunte pela exposição conjunta**: considerando **todas** essas falhas
   simultaneamente, qual é o maior erro que poderia atravessar sem ser detectado naquela asserção?
3. **Verifique se sobrou algum controle de pé no grupo.** Três deficiências simples em controles que
   cobriam a mesma asserção, sem nenhum controle remanescente eficaz sobre ela, deixam a asserção
   **descoberta** — e asserção descoberta em conta significativa é, no mínimo, deficiência
   significativa.
4. **Agregue também por processo e por causa comum.** Deficiências em contas distintas que têm a
   mesma causa-raiz (o mesmo executor sem segregação, o mesmo sistema sem ITGC, a mesma ausência de
   supervisão) formam um grupo, ainda que as asserções sejam diferentes.
5. **Registre a agregação, não só o resultado.** O ponto agregado cita os códigos das deficiências
   que o compõem, e cada deficiência individual permanece no memorando com o seu código — agregar
   não é fundir nem apagar.

**A agregação que mais aparece na prática:** ITGC deficiente somado a controles de aplicação que
dependem dele. Individualmente, "revisão de acesso não é formalizada" parece deficiência simples;
agregada aos oito controles automatizados que dependem daquele ambiente, muda de patamar — é a
conclusão de `itgc`, e ela é conclusão, não ressalva.

**Agregação não é média.** Cinco simples não viram automaticamente uma significativa; a pergunta
continua sendo a exposição conjunta. E uma única deficiência pode ser fraqueza material sozinha.

## 4. Deficiência de controle não é erro encontrado

Duas coisas independentes, e confundi-las produz os dois erros opostos:

| Situação | Existe? | Comentário |
|---|---|---|
| Controle deficiente, **sem** erro material no período | sim, e é frequente | a exposição existiu e nada ocorreu. A deficiência permanece: avalia-se o que **poderia** ter passado, não o que passou. "Não houve prejuízo" não é defesa |
| Erro material, **sem** deficiência de controle | sim, e é raro | o controle operou e o erro veio de fora do seu alcance. Exige demonstração, não alegação — na maioria das vezes o erro que passou revela o controle que faltava |
| Controle deficiente **e** erro ocorrido | sim | o erro é evidência da materialização; entra no ponto como fato, com número exato e referência |
| Nenhum erro, nenhum controle | não é conclusão | é ausência de teste. Ver `desenho-vs-efetividade` §5 |

A consequência prática mais útil na discussão com o cliente: quando a resposta for *"mas nunca
aconteceu nada"*, a réplica não é retórica, é metodológica. A escala avalia **chance razoável de erro
material**, e o histórico limpo de um período informa a probabilidade, não a elimina — sobretudo
quando o controle que deveria detectar é justamente o que não opera, caso em que o histórico limpo
pode significar apenas que nada foi detectado.

## 5. Comunicação: quem precisa saber de quê

O nível define **destinatário, instrumento e prazo**. Esta é a parte da escala que tem consequência
imediata, e a que o cliente mais sente.

| Nível | Quem precisa saber | Instrumento | Quando |
|---|---|---|---|
| **Deficiência simples** | a gerência do processo | memorando de deficiências, com plano de ação | no ciclo, junto com o relatório |
| **Deficiência significativa** | responsáveis pela governança: Conselho, Comitê de Auditoria, ou os sócios quando não há órgão | comunicação **por escrito** aos responsáveis pela governança, além do memorando | tempestivamente, antes da emissão do relatório do ciclo |
| **Fraqueza material** | responsáveis pela governança **e** administração; em SOX, também o auditor independente e o mercado | comunicação por escrito; em SOX, divulgação de que o controle interno **não é efetivo** | tempestivamente, sem esperar o fechamento do ciclo |

Três regras de comunicação:

- **Comunicação por escrito dos dois níveis superiores não é opcional em ambiente SOX**, e é boa
  prática fora dele. Comunicar verbalmente em reunião e registrar só em ata do cliente não cumpre.
- **A escalada não pede permissão da gerência do processo.** Deficiência significativa vai ao órgão
  de governança ainda que a gerência discorde da classificação. A discordância se registra ao lado,
  como manifestação da administração, e não substitui a comunicação.
- **Deficiência não remediada volta no ciclo seguinte, com a idade declarada.** Deficiência aberta há
  três ciclos é sinal de falha de monitoramento, e a reincidência é, por si, argumento de elevação de
  nível: se o sistema de controle não corrige o que já sabe estar quebrado, o componente
  Monitoramento do COSO não está funcionando.

## 6. SOX e empresa fechada: a ponte entre as duas réguas

- **Companhia registrada na SEC.** A escala de três níveis é **normativa**. Fraqueza material tem
  consequência automática: a administração conclui que o controle interno sobre o reporte financeiro
  não é efetivo, e isso é divulgado. Não há espaço para calibrar o rótulo por conveniência.
- **Empresa fechada brasileira.** Não há obrigação de opinar sobre controles internos nem de divulgar
  nada ao mercado. A escala continua valendo como **boa prática**, e é o que dá ao Conselho ou aos
  sócios uma régua defensável em vez de adjetivos. O que muda é a consequência externa, não o
  critério.
- **A materialidade precisa estar declarada.** A palavra "material" só significa algo contra um
  número. Em auditoria de demonstrações financeiras ela vem da materialidade do trabalho; em
  diagnóstico de controles de empresa fechada, **acorde e registre um patamar de referência com o
  cliente** — receita, resultado, patrimônio ou fluxo de caixa do período. Sem patamar declarado,
  "fraqueza material" é opinião, e a primeira pergunta do cliente derruba o ponto.

**A ponte com a régua de `redacao-de-achados`.** O relatório de auditoria interna da casa comunica
gravidade pelo campo Severidade, com `ALTA` · `MÉDIA` · `BAIXA`. São duas réguas com propósitos
distintos: a desta skill é **técnica de controles internos**, a de lá é **de priorização do plano de
ação**. A correspondência típica, que é orientação e não conversão automática:

| Severidade do relatório | Corresponde tipicamente a |
|---|---|
| `ALTA` | fraqueza material, e deficiência significativa com vetor de fraude ou exposição societária |
| `MÉDIA` | deficiência significativa; deficiência simples em controle chave |
| `BAIXA` | deficiência simples de formalização, padronização ou eficiência |

**Quando as duas réguas divergirem, declare as duas**, não escolha uma. Uma deficiência simples de
formalização que se repete há três ciclos pode ser `MÉDIA` na priorização e continuar simples na
escala técnica, e o relatório deve dizer exatamente isso. Forçar as duas a coincidir é o erro que
transforma a classificação técnica em rótulo decorativo.

## O que entregar

1. O registro de deficiências, uma linha por deficiência, com: código, controle de origem, origem
   (desenho ou operação), asserção afetada, magnitude potencial, probabilidade, nível e razão do
   nível em uma frase.
2. A análise de agregação por asserção, por conta significativa e por causa comum, com os grupos
   nomeados e o resultado de cada — inclusive os grupos que **não** subiram de nível.
3. A lista de asserções que ficaram descobertas depois de considerada a agregação.
4. Os controles compensatórios invocados, cada um com o código e a evidência de que foi **testado**.
5. O patamar de materialidade adotado, declarado com a base e o valor de referência.
6. O quadro de comunicação: o que vai a quem, em que instrumento, com a data.
7. A relação de deficiências de ciclos anteriores não remediadas, com a idade de cada uma.

## Checklist antes de dar por concluído

- Toda deficiência tem nível atribuído, com magnitude e probabilidade declaradas, e nenhuma tem nível
  intermediário inventado.
- A análise de agregação foi feita e está registrada, mesmo quando o resultado é "nenhum grupo sobe".
- Nenhum controle compensatório invocado sem teste, e nenhum invocado sem código.
- Nenhuma deficiência rebaixada com o argumento de que não houve prejuízo no período.
- A materialidade de referência está declarada em número, com a base.
- Toda deficiência significativa e toda fraqueza material têm comunicação escrita registrada, com
  destinatário e data.
- Deficiências reincidentes trazem a idade e a razão de ainda estarem abertas.
- A severidade do relatório e o nível técnico estão ambos declarados quando divergem.

## Próximo passo

`redacao-de-achados`, do plugin de método, que converte cada deficiência em ponto com Condição, Risco
e Recomendação, e `relatorio-de-auditoria`, que leva o quadro-resumo ao deck. Quando a deficiência é
de ambiente de TI, a agregação obrigatória com os controles dependentes está em `itgc`.
