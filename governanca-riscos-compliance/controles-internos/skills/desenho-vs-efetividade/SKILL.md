---
name: desenho-vs-efetividade
description: Avalie desenho e efetividade operacional como duas conclusões separadas, e decida o que segue para teste. Acionar ao julgar se o controle descrito mitigaria o risco, ao decidir se vale testar efetividade, ao criticar matriz de cliente com coluna única de status, ou ao concluir sobre controle que não pôde ser testado.
---

# Desenho versus efetividade operacional

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas.

De `programa-de-testes` vale integralmente, e não é repetido: o vocabulário fechado de conclusão
(`Eficaz` · `Parcialmente Eficaz` · `Ineficaz`), o vocabulário de status de desenho
(`Implementado` · `Parcialmente Implementado` · `Não Implementado` · `Não Aplicável` · `A avaliar`),
as duas colunas em que eles vivem e a fórmula do grau de eficácia. Esta skill é a **regra R6 do
método** — desenho não é efetividade — desdobrada em procedimento.

## Papel desta skill

Existem duas perguntas sobre todo controle, e elas têm respostas independentes. Confundi-las é o
erro conceitual mais caro de um trabalho de controles internos, porque ele não aparece no meio do
caminho: aparece no final, quando o Conselho pergunta se o problema é que o controle não existe ou
que ele existe e não funciona, e o documento não sabe responder.

| | Desenho | Efetividade operacional |
|---|---|---|
| Pergunta | se operasse exatamente como descrito, este controle mitigaria o risco? | ele de fato operou no período, na frequência prevista e por quem devia? |
| Sobre o quê se debruça | a descrição do controle, lida contra o risco | a população de ocorrências do período |
| Evidência primária | narrativa, política, walkthrough, parametrização | amostra de execuções, com o rastro de cada uma |
| Conclui | o controle é adequado ou é insuficiente | o controle opera ou falha, e com que taxa |
| Coluna do RACM | `Status de desenho` | `Conclusão de efetividade` |

A consequência que ninguém antecipa: **um controle pode ser impecavelmente desenhado e nunca ter
sido executado.** A política existe, o fluxo no sistema existe, a alçada está parametrizada, e
nenhuma requisição do ano passou por ela porque todo mundo usa a exceção. Desenho `Implementado`,
efetividade `Ineficaz`. E o inverso também: um controle rudimentar, mal descrito, sem política, que
o encarregado executa religiosamente todo dia com rastro em planilha assinada, é desenho
`Parcialmente Implementado` com efetividade `Eficaz`.

Nenhuma dessas duas combinações cabe em uma coluna só.

## 1. Avaliação de desenho: o que se pergunta

Desenho se avalia **lendo**, não amostrando. Cinco perguntas, na ordem, e a primeira que falhar já
conclui:

1. **O controle endereça o risco declarado?** Confira contra o risco associado no RACM, pelo código.
   Controle de conferência de nota não mitiga risco de compra sem necessidade — mitiga risco de
   pagamento indevido. Desalinhamento entre controle e risco é deficiência de desenho, ainda que o
   controle seja excelente para outra coisa.
2. **A natureza é compatível com o momento do risco?** Controle detectivo não previne evento cujo
   impacto é irreversível no instante em que ocorre. Pagamento indevido conciliado 40 dias depois é
   detecção tardia, não mitigação.
3. **A frequência alcança o período de exposição?** Revisão anual de acesso não mitiga risco cuja
   janela de materialização é semanal. Aqui a resposta é sempre comparativa: frequência do controle
   contra frequência do evento.
4. **Quem executa tem competência e independência para executar?** Aprovador que não tem como
   verificar o que aprova é carimbo. Executor que também é a parte interessada é conflito, e o
   controle é mal desenhado por construção, mesmo que opere com disciplina.
5. **O controle deixa rastro suficiente para ser testado por terceiro?** Controle sem rastro é, na
   prática, controle não evidenciável. Isso é achado de desenho, e não de efetividade — a lacuna
   está na concepção, não na execução.

**O walkthrough é o insumo principal desta avaliação**, e não o substitui: percorrer uma transação
confirma que o controle existe e opera uma vez. As cinco perguntas continuam sendo julgamento sobre
a descrição, não sobre a amostra de um.

**Vocabulário de saída.** `Implementado` quando as cinco passam. `Parcialmente Implementado` quando o
controle existe e mitiga parte do risco, ou existe sem formalização, ou cobre parte dos atributos.
`Não Implementado` quando o controle não existe ou não endereça o risco. `Não Aplicável` quando o
risco não se materializa naquela entidade, **com a razão declarada** — nunca como fuga de avaliação.

## 2. Avaliação de efetividade: o que se pergunta

Efetividade se avalia **testando**, sobre a população do período. As perguntas mudam de natureza:

1. **A população existe e é completa?** Sem população íntegra não há teste de efetividade, há
   impressão. A integridade da população, quando extraída de sistema, depende de ITGC e de teste de
   completude do relatório — ver `itgc`.
2. **O controle operou em cada item da amostra, atributo por atributo?** Os atributos vêm do RACM
   (`matriz-riscos-controles` §5). Falha isolada do atributo de tempestividade e falha do atributo de
   competência do aprovador são conclusões diferentes.
3. **Operou na frequência prevista ao longo de todo o período?** Controle mensal executado nos meses
   1 a 4 e abandonado do 5 em diante é ineficaz no período, ainda que a amostra do início passe.
4. **Foi executado por quem o desenho prevê?** Execução por quem não tem a alçada equivale a não
   execução, mesmo com o resultado certo.

O procedimento, as técnicas, o dimensionamento da amostra e o tratamento de exceção vivem em
`teste-de-controle-e-amostragem`.

## 3. A ordem importa: não se testa efetividade de controle mal desenhado

Regra de sequenciamento, e é regra de escopo, não de preferência:

> **Controle com desenho `Não Implementado` não segue para teste de efetividade.**

A razão é aritmética antes de ser metodológica: a conclusão já está dada. Um controle que, mesmo
operando perfeitamente, não mitiga o risco, continua não mitigando o risco depois de 40 itens
testados. As horas gastas produzem uma amostra com 100% de conformidade e uma conclusão que engana,
porque `Eficaz` na coluna de efetividade convive com risco integralmente descoberto.

Três consequências operacionais:

- **Declare a decisão, nunca a ausência.** No RACM, desenho `Não Implementado` e efetividade
  `Ineficaz` com razão (i) — o controle não existe. Branco, "N/T" ou "Não testado" são
  proibidos; o Conselho lê branco como esquecimento.
- **Redirecione as horas e registre o redirecionamento.** As horas liberadas vão para os processos
  onde há o que testar, e a realocação entra no ledger do engajamento.
- **`Parcialmente Implementado` segue para teste, com escopo reduzido.** Testa-se a parte que
  existe, pelos atributos que existem, e a conclusão de efetividade vale apenas para eles. Declare o
  recorte no papel de trabalho, senão a conclusão parece mais ampla do que é.

A ordem também explica por que o cronograma de um trabalho de controles internos tem duas fases
distintas, e por que comprimi-las em uma produz retrabalho: a fase de desenho é que define a
população de controles da fase de efetividade.

## 4. A coluna única do cliente, e o que ela esconde

A matriz que chega do cliente costuma trazer uma **única** coluna de status do controle. Não é
descuido de preenchimento: é decisão de modelagem que apaga informação, e o efeito é sistemático.

| O que a coluna única mostra | O que ela esconde |
|---|---|
| `Não efetivo` | se o controle não existe, existe e falhou, ou existe e não foi evidenciado |
| `Efetivo` | se a conclusão veio de teste com amostra ou de leitura da política |
| `Efetivo` em controle novo | que o controle foi implantado em setembro e não cobre o período |
| percentual agregado de efetividade | que metade das linhas nunca teve teste |

O prejuízo concreto: **nenhuma das quatro leituras acionáveis sobrevive**. Não se consegue extrair o
backlog de implantação (que sai dos `Não Implementado`), nem o backlog de correção operacional (que
sai dos `Ineficaz` com desenho `Implementado`) — e são planos de ação com donos, prazos e custos
completamente diferentes. Implantar controle que não existe é projeto; corrigir execução de controle
existente é disciplina de gestão.

**Ao receber matriz com coluna única, a primeira entrega é o desdobramento em duas.** Na prática isso
obriga a reabrir linha a linha, porque o valor antigo não se distribui automaticamente: `Não efetivo`
pode virar qualquer uma das combinações. Trate o desdobramento como trabalho, dimensione-o na
proposta, e não como ajuste de formatação.

## 5. Controle que não pôde ser testado é ineficaz por default

A regra vem de `programa-de-testes` e aqui ela recebe o procedimento. **Nunca existe "não testado"
como resultado.** Se não houve como testar, o controle não é evidenciável no período, portanto não se
pode afirmar que operou — e a conclusão é `Ineficaz`.

O que a torna defensável é a **razão registrada ao lado**, em três situações que parecem iguais no
resultado e são completamente diferentes na recomendação:

| Razão | O que significa | Recomendação típica | Severidade tende a |
|---|---|---|---|
| **(i) O controle não existe** | não há atividade a testar; a lacuna é de desenho | implantar o controle, com dono e prazo | subir |
| **(ii) Existe, mas não foi evidenciado pela Companhia** | a atividade é descrita e o rastro não foi produzido, ou não existe rastro | instituir evidência formal do controle; renovar a solicitação | depende de haver rastro ou não |
| **(iii) Depende de acesso sistêmico não obtido** | a limitação é do trabalho, não necessariamente do controle | obter acesso e reexecutar; declarar limitação de escopo | manter-se, com ressalva de escopo |

Três disciplinas que separam a regra de um carimbo:

- **(ii) e (iii) não se confundem.** Documentação não entregue depois de solicitação formal e
  reiterada é problema da Companhia e vira achado. Acesso não concedido à auditoria é **limitação de
  escopo**, precisa constar do relatório como tal, e em ambiente SOX afeta a própria opinião sobre
  controles internos.
- **Registre a tentativa, com data.** A razão (ii) só sustenta achado se houver a solicitação
  documental amarrada (a coluna `Solicitação` de `programa-de-testes`) e o não atendimento
  registrado. Sem isso, a Companhia responde que nunca foi pedido, e ela ganha a discussão.
- **(iii) não vira `Eficaz` por cortesia.** Se o acesso chegou tarde demais para testar, a conclusão
  permanece, com a limitação declarada. A tentação de escrever "não avaliado" para não penalizar o
  cliente é a origem da maior parte das matrizes sem conclusão.

## 6. SOX e empresa fechada: o que é exigência e o que é boa prática

A separação entre as duas avaliações não é preferência da casa, mas o **peso normativo muda** com o
regime da empresa:

- **Companhia registrada na SEC (SOX 404).** A **PCAOB AS 2201** exige as duas avaliações, exige
  avaliar desenho antes de testar efetividade, e exige que a efetividade seja avaliada **em data-base
  específica** (as-of date), com evidência de operação ao longo de período suficiente antes dela.
  Controle implantado em novembro raramente sustenta conclusão de efetividade no encerramento de
  dezembro — o período de operação é curto demais para amostra.
- **Empresa fechada brasileira, diagnóstico de controles.** Não há exigência de opinião sobre
  controles internos, e não há data-base normativa. A separação vale como **boa prática, e como a
  única forma de o entregável gerar plano de ação utilizável**. O período de avaliação é o acordado
  na proposta, e precisa estar declarado no relatório: conclusão de efetividade sem período
  declarado não significa nada.
- **O COSO 2013 é comum aos dois regimes** e é a âncora conceitual: avaliar um princípio é verificar
  que ele está **presente** (o desenho existe) **e funcionando** (opera ao longo do tempo). As duas
  palavras do critério do COSO são exatamente as duas avaliações desta skill, e é por isso que elas
  não colapsam.

No mid-market, a leitura que mais move o cliente costuma ser a matriz cruzada das duas dimensões:

| | Efetividade `Eficaz` | Efetividade `Ineficaz` |
|---|---|---|
| **Desenho `Implementado`** | controle confiável; candidato a apoio do auditor externo | problema de execução e de gestão, não de estrutura |
| **Desenho `Não Implementado`** | combinação impossível; se aparecer, há erro de preenchimento | lacuna estrutural; entra no backlog de implantação |

O quadrante impossível é um teste de consistência da própria matriz: **rode-o por código antes de
entregar.**

## O que entregar

1. As duas colunas preenchidas em 100% das linhas do RACM, com vocabulário fechado, sem célula em
   default de dropdown e sem branco.
2. A lista de controles com desenho `Não Implementado` que **não** seguiram para teste, cada um com a
   decisão de escopo registrada.
3. A lista do que não pôde ser testado, com a razão classificada em (i), (ii) ou (iii), e a data da
   solicitação documental correspondente quando for (ii).
4. A matriz cruzada desenho × efetividade, com a contagem de cada quadrante e o quadrante impossível
   conferido em zero.
5. Os dois backlogs separados: implantação de controle inexistente e correção de execução de controle
   existente.
6. Quando a matriz de origem tinha coluna única, o registro do desdobramento: quantas linhas foram
   reabertas e como cada valor antigo se distribuiu.

## Checklist antes de dar por concluído

- Nenhuma linha com conclusão de efetividade `Eficaz` e desenho `Não Implementado`.
- Nenhum "Não testado", "N/T", "A avaliar" remanescente ou célula em branco nas duas colunas.
- Toda razão (ii) tem solicitação documental amarrada, com data e não atendimento registrado.
- Toda razão (iii) aparece também como limitação de escopo no relatório.
- Nenhum controle com desenho `Não Aplicável` sem a razão declarada.
- O período de avaliação de efetividade está declarado no relatório, com data inicial e final.
- Conclusão de efetividade de controle implantado no meio do período declara desde quando ele opera.

## Próximo passo

`teste-de-controle-e-amostragem`, que executa a avaliação de efetividade dos controles que
sobreviveram ao corte de desenho. O que falhou em qualquer das duas avaliações vai para
`deficiencias-e-severidade`, e a redação do ponto é de `redacao-de-achados`, do plugin de método.
