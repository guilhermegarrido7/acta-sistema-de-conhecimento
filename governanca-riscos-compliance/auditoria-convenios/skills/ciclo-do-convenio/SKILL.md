---
name: ciclo-do-convenio
description: Mapeie o ciclo do convênio em sete elos e monte o escopo da auditoria, do instrumento ao termo de encerramento, com os prazos normativos e onde cada teste entra. Acionar ao abrir auditoria de convênio ou parceria, ao decidir quais blocos se aplicam ao mandato, ao declarar elo inaplicável, ou ao montar a linha do tempo de prazos.
---

# O ciclo do convênio: escopo, elos e blocos executáveis

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de **processo auditado**. O método de auditar vive no plugin de método;
aqui vive o que é próprio do convênio.

Esta é a skill de entrada do plugin. Ela decide **o que se audita**; as demais dizem **como**.

## 1. A pergunta-mestra

> **O convênio nasceu de um instrumento regular com parceiro habilitado, recebeu os aportes na
> proporção e nos marcos previstos, gastou o dinheiro dentro do objeto e da vigência, comprovou o
> gasto com documento e com evidência de entrega, e entregou a meta que justificou o repasse?**

Auditar convênio é diferente de auditar compra própria em um ponto que organiza o trabalho inteiro:
**quem gasta não é quem paga**. O concedente repassa, o parceiro executa e contrata, e o concedente
só vê o gasto depois, pelo que foi anexado ao sistema de prestação de contas. Todo o método existe
para cobrir essa distância.

## 2. Os sete elos, e a pergunta-mestra de cada um

```
Projeto e plano de trabalho → Habilitação do parceiro → Instrumento e aprovação
  → Aporte e liberação de parcela → Execução e contratação pelo parceiro
  → Prestação de contas → Apuração de resultado e encerramento
  [transversais: termo aditivo · remanejamento de rubrica · contrapartida econômica]
```

| # | Elo | Pergunta-mestra do elo | Skill |
|---|---|---|---|
| 1 | **Projeto e plano de trabalho** | O objeto adere aos objetivos estratégicos do concedente, e o plano de trabalho foi emitido antes da execução, com ações, rubricas e cronograma físico e financeiro? | `estruturacao-e-formalizacao` |
| 2 | **Habilitação do parceiro** | O parceiro tem existência, regularidade fiscal, capacidade técnica comprovada e nenhuma pendência de convênio anterior nem registro em cadastro de inidôneos? | `estruturacao-e-formalizacao` |
| 3 | **Instrumento e aprovação** | O instrumento foi assinado por quem tinha alçada, com os pareceres obrigatórios emitidos antes da assinatura, e as excepcionalidades acatadas estão justificadas? | `estruturacao-e-formalizacao` |
| 4 | **Aporte e liberação de parcela** | A proporção entre aporte do concedente e contrapartida do parceiro é a da norma, e cada parcela saiu depois de cumprida a condição de execução da anterior? | `prestacao-de-contas` |
| 5 | **Execução e contratação pelo parceiro** | O fornecedor foi contratado por processo competitivo, existe de fato, tem qualificação para o serviço, e há evidência de que o serviço ocorreu? | `execucao-e-fornecedores` |
| 6 | **Prestação de contas** | Cada lançamento no sistema tem contrapartida no extrato da conta específica, dentro da vigência, dentro da rubrica e dentro do objeto? | `prestacao-de-contas` |
| 7 | **Apuração de resultado e encerramento** | A meta era mensurável, foi medida com evidência crítica, e o encerramento tratou o que não foi atingido? | `contrapartida-e-encerramento` |

Elo mal auditado contamina os seguintes, e aqui a contaminação tem endereço conhecido: **plano de
trabalho vago produz meta inauditável no elo 7**, e parceiro habilitado sem crítica produz uma
execução inteira que não se consegue glosar depois. **Não se pula elo em silêncio**: elo que não se
aplica ao mandato é **declarado inaplicável**, com a razão, e não omitido.

## 3. Os blocos executáveis e o controle de melhor prática de cada

Numeração no padrão `WP.<PROCESSO>.<NN>`; abreviação sugerida **CNV**. O controle da terceira coluna
é o de **melhor prática**, não o normativo do concedente. Quando o concedente tiver instrução
normativa própria sobre o tema, cite-a pelo assunto (*a instrução normativa do concedente, no
capítulo de habilitação da entidade parceira*) sem transcrever numeração de artigo, que é informação
interna dele.

| WP | Bloco | O controle (melhor prática) |
|---|---|---|
| **CNV.01** | Projeto e plano de trabalho | Plano de trabalho aprovado antes do início da execução, com detalhamento de fonte de recurso, descrição das ações, rubricas e cronograma físico e financeiro, vinculado a objetivo estratégico declarado. |
| **CNV.02** | Habilitação do parceiro | Documentação societária, certidões de regularidade fiscal e trabalhista, atestados de capacidade técnica, consulta a cadastros de inidôneos e declaração da área contábil sobre pendência em convênio anterior. |
| **CNV.03** | Instrumento, pareceres e alçada | Pareceres obrigatórios das áreas emitidos antes da assinatura, aprovação na alçada devida, excepcionalidade acatada com justificativa formal, e conta corrente específica aberta para o convênio. |
| **CNV.04** | Matriz de risco do convênio | Matriz elaborada no prazo normativo após a assinatura, encaminhada à instância de governança, cobrindo o que os pareceres apontaram e o que eles não apontaram. |
| **CNV.05** | Aporte e proporção | Composição do aporte entre concedente e parceiro conforme a norma, com a parcela econômica da contrapartida limitada, e cada liberação condicionada à execução da parcela anterior. |
| **CNV.06** | Contratação pelo parceiro | Processo competitivo com número mínimo de cotações, seleção por critério declarado, contrato formalizado e aderência do objeto à atividade econômica do fornecedor. |
| **CNV.07** | Due diligence de fornecedor | Verificação de existência, situação cadastral, endereço, quadro societário, relacionamento entre concorrentes e vínculo com pessoal do concedente ou do parceiro. |
| **CNV.08** | Evidência de execução do serviço | Produto do serviço arquivado junto ao lançamento: medição, relatório, lista de presença, registro de evento, com ateste por quem não contratou. |
| **CNV.09** | Reconciliação extrato contra sistema | Conta corrente exclusiva do convênio, conciliada periodicamente com o sistema de prestação de contas, sem transferência para outra conta do parceiro e sem movimentação fora da vigência. |
| **CNV.10** | Resultado e encerramento | Meta com critério objetivo de apuração, medição com evidência, parecer técnico de encerramento e tratamento formal do que não foi atingido, inclusive devolução. |

O detalhe de cada bloco está na skill correspondente. A mecânica do papel de trabalho está em
`papel-de-trabalho`; a taxonomia de tipo de teste, a régua de amostragem e o código de risco, em
`programa-de-testes`. O programa de teste completo, nos três blocos e com o texto de cada teste, está
em [references/programa-de-teste.md](references/programa-de-teste.md). O formato de registro de
achado da casa, com a coluna de glosa, está em
[references/matriz-de-achados.md](references/matriz-de-achados.md).

## 4. A linha do tempo normativa

Convênio é o raro processo em que o **prazo é achado por si só**, sem que nada mais precise estar
errado. Monte a linha do tempo no primeiro dia de campo, porque ela dimensiona metade do trabalho:

| Marco | Referência de prazo | O que se testa |
|---|---|---|
| Assinatura do instrumento | Marco zero | Data contra a data dos pareceres e das certidões |
| Matriz de risco do convênio | Prazo normativo curto após a assinatura (no mandato observado, 60 dias) | Elaboração e encaminhamento à instância de governança |
| Início da execução | Definido no plano de trabalho | Despesa e contrato anteriores a ele |
| Prestação de contas parcial | **Antes** da liberação da parcela seguinte | Existência, análise e aprovação antes do repasse |
| Fim da vigência | Definido no instrumento e nos aditivos | Pagamento e nota fiscal após essa data |
| Prestação de contas final | Prazo normativo após o fim da vigência (no mandato observado, 90 dias) | Entrega e análise dentro do prazo |
| Termo de encerramento | Prazo normativo após a prestação final (no mandato observado, 120 dias) | Emissão, parecer técnico e destino do saldo |

Os prazos entre parênteses são **parâmetro daquele concedente**, não padrão de mercado. Leia a
instrução normativa vigente do mandato antes de testar aderência a ela, e confira se ela mudou
durante a vigência do convênio auditado.

## 5. Planos A, B e C: o padrão de execução deste plugin

Para **cada teste**, registre a forma ideal e os fallbacks, porque a forma ideal quase nunca está
disponível:

```
Teste: <nome>   ·   WP: <código>
Plano A (forma certa):  a evidência ideal e como obtê-la.
Plano B:                falta o dado ideal; a evidência substituta e o que ela ainda prova.
Plano C:                nem isso existe; indagação formal + limitação de escopo declarada.
Limitação a declarar:   a frase exata que entra na aba Critérios e, se material, no ponto.
```

> **Regra de ouro: degradar a evidência não é degradar a conclusão em silêncio.**

A degradação típica do convênio tem nome: **o extrato bancário**. Ele vem do parceiro, não do
concedente, e chega tarde, incompleto, em imagem, ou só do período em que convém. Sem extrato, a
reconciliação do bloco CNV.09 não degrada, ela cai, e a ausência é ela própria achado sobre o
controle de acompanhamento do concedente. Peça o extrato no primeiro ofício, em arquivo, da
abertura da conta ao encerramento, e registre a data do pedido.

## 6. Como dimensionar o escopo do mandato

Pergunte, não deduza (R8):

1. **O trabalho é sobre um convênio ou sobre a carteira?** Ordem de serviço por convênio produz
   conclusão por convênio. Achado de processo, do lado do concedente, só se sustenta olhando a
   carteira, e é o que o comitê costuma querer sem pedir com essas palavras.
2. **Qual é a instrução normativa vigente, e qual valia na assinatura?** São perguntas diferentes, e
   convênio plurianual atravessa versões. Teste contra a norma vigente na data do ato.
3. **Qual o estágio do convênio?** Vigente, encerrado ou em prestação final. Convênio vigente não
   tem elo 7 para auditar e tem elo 4 aberto; convênio encerrado permite conclusão sobre resultado.
4. **A conta é exclusiva do convênio?** Se o parceiro movimentou o recurso em conta compartilhada, a
   reconciliação muda de natureza e o desvio de finalidade fica indemonstrável por extrato. Isso é
   achado antes de ser limitação.
5. **Há contrapartida econômica, e em que proporção?** É a parte mais frágil de todo convênio, porque
   não passa por caixa. Ver `contrapartida-e-encerramento`.
6. **Existe relatório de auditoria anterior sobre este parceiro ou este convênio?** Achado repetido
   entre convênios é achado de processo do concedente, com severidade diferente do achado isolado.

## 7. O que não transportar de um mandato para o outro

Não transporte: prazos normativos e percentuais de aporte (são norma daquele concedente e mudam de
versão), a lista de sistemas corporativos em que o convênio deve estar cadastrado, o layout da base
extraída do sistema de prestação de contas, e a conclusão de que a conta do convênio é exclusiva.
Transporte, sim, a estrutura de pastas do papel de trabalho e a matriz de achados, que são da casa.

## Próximo passo

`matriz-de-riscos-do-convenio`, para converter os elos em registro de riscos e programa de testes;
depois as skills de elo, na ordem do ciclo. O registro do que se aprendeu ao fechar vai para
`acta-way:checkpoint` e para o ritual de aprendizado do plugin de método.
