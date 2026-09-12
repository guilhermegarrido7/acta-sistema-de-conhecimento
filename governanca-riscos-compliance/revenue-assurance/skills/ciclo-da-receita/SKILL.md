---
name: ciclo-da-receita
description: Mapeie o ciclo da receita em sete elos e monte o escopo do trabalho, do preço ao razão contábil. Acionar ao abrir uma auditoria de receita ou de contas a receber, ao decidir quais blocos executáveis se aplicam ao mandato, ao declarar elo inaplicável, ou ao definir os pares de bases que têm de fechar.
---

# O ciclo da receita: escopo, elos e blocos executáveis

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de **processo auditado** — o método de auditar vive no plugin de método,
aqui vive o que é próprio do ciclo de receita.

Esta é a skill de entrada do plugin. Ela decide **o que se audita**; as demais dizem **como**.

## 1. A pergunta-mestra

> **Faturou-se exatamente o que foi prestado, medido e aceito, pelo preço contratual vigente;
> recebeu-se o que se faturou; e a receita chegou íntegra à contabilidade, na competência certa?**

Todo achado de receita é um desvio em algum ponto dessa cadeia. Auditar receita é seguir o dinheiro
do direito ao caixa, e depois do caixa ao razão.

## 2. Os sete elos, e a pergunta-mestra de cada um

```
Preço → Contrato e cadastro → Medição → Aceite → Faturamento/NF → Recebimento → Contabilização
        [transversais: glosa e notificação · reajuste · índice de desempenho · cancelamento de NF]
```

| # | Elo | Pergunta-mestra do elo | Skill |
|---|---|---|---|
| 1 | **Preço** | O preço a praticar está formalizado, vigente e reajustado pelo índice contratual? | `contrato-e-cadastro` |
| 2 | **Contrato e cadastro** | Existe direito contratual formalizado, aprovado em alçada, e ele está refletido no sistema antes da prestação? | `contrato-e-cadastro` |
| 3 | **Medição** | O que foi medido corresponde ao que foi executado, e a quantidade tem lastro operacional rastreável? | `medicao-e-aceite` |
| 4 | **Aceite** | O cliente reconheceu formalmente o que foi medido, por quem tem poder para tanto, antes de a nota ser emitida? | `medicao-e-aceite` |
| 5 | **Faturamento / NF** | Faturou-se integralmente o aceito, líquido de glosa, na competência certa e com a nota fiscalmente correta? | `faturamento-e-nf` |
| 6 | **Recebimento** | Recebeu-se o faturado, e o que não foi recebido está gerido, cobrado e encargado? | `recebimento-e-inadimplencia` |
| 7 | **Contabilização** | A receita faturada chegou íntegra ao razão, por competência e por produto? | `faturamento-e-nf` |

Um elo mal auditado contamina os seguintes: medição errada faturada e aceita vira recebimento errado
e receita contabilizada errada. Por isso a ordem importa e **não se pula elo em silêncio** — elo que
não se aplica ao mandato é **declarado inaplicável**, com a razão, e não omitido.

## 3. Os blocos executáveis e o controle de melhor prática de cada

Numeração no padrão `WP.<PROCESSO>.<NN>`; abreviação sugerida **REC**. O controle da terceira coluna
é o de **melhor prática de mercado**, não o normativo interno do cliente — quando o cliente tiver
política própria sobre o tema, cite-a pelo assunto (*a política interna de receitas do cliente, item
sobre aceite prévio à emissão*) sem transcrever código de item, que é informação não pública dele.

| WP | Bloco | O controle (melhor prática) |
|---|---|---|
| **REC.01** | Avaliação contratual | Contrato existe, foi aprovado nas alçadas, tem chancela jurídica registrada, contém as cláusulas mandatórias (objeto, preço, reajuste, prazo, glosa/penalidade, anticorrupção) e assinatura bilateral **antes** do início da prestação. |
| **REC.02** | Cadastro do contrato e aditivos | Contrato cadastrado no sistema, vinculado ao cliente, pelo valor correto, com parametrização que **impede** alocar recurso ou faturar sem contrato vigente; aditivos refletidos no cadastro. |
| **REC.03** | Tabela de preços e reajuste | Preço unitário praticado adere à proposta/tabela vigente; reajuste aplicado pelo índice contratual, na data-base contratual, com memória de cálculo formalizada. |
| **REC.04** | Medição, aceite, faturamento e glosa | Cada boletim de medição confere com o serviço prestado; PU medido bate com o contratual vigente; a medição foi aceita antes da nota; toda medição aceita foi faturada integralmente; glosas identificadas, quantificadas e conciliadas. |
| **REC.05** | Medição física e aferição metrológica | Quando a quantidade vem de instrumento (balança, medidor de vazão), o instrumento tem aferição vigente por entidade credenciada, o registro é íntegro e rastreável, e há contraprova externa. **Declare N/A** quando a remuneração for por carga, viagem ou quantidade fixa contratada. |
| **REC.06** | Recebimento, aging e encargos | Carteira em aging; parciais e pós-vencimento registrados; baixa de título lastreada em ingresso efetivo de recursos; juros e multa cobrados, e dispensa só por decisão formal em alçada. |
| **REC.07** | Emissão, cancelamento, cut-off e conciliação com o razão | Nota fiscalmente correta; cancelamento com motivo, alçada e reemissão tempestiva na competência; receita reconhecida na competência do fato gerador; faturamento conciliado ao razão por competência e por produto. |

O detalhe de cada bloco está na skill correspondente. A mecânica de montar o papel de trabalho
(capa, abas de teste, aba Critérios, vocabulário do campo Resultado) está em `papel-de-trabalho`; a
taxonomia de tipo de teste, a régua de amostragem e o código de risco, em `programa-de-testes`.

## 4. Os cinco pares de bases que têm de fechar

A doutrina do número está em `acta-metodo-auditoria`; a mecânica de tratar base e casar valor com
consumo de pool, em `bases-e-conciliacao`. O que é próprio da receita são **quais** pares fecham:

1. **Medição × contrato** — para cada medição, `PU medido = PU contratual vigente` (já reajustado).
   Divergência de centavo é lançamento manual: é achado, não arredondamento.
2. **Medição × aceite** — toda medição faturada tem aceite formal do cliente. Confirme **quem** tem
   poder de aceitar no mandato e valide os assinantes um a um.
3. **Aceite × nota fiscal** — a nota é posterior ao aceite e igual ao valor aceito, líquido de glosa.
4. **Nota fiscal × recebimento** — o recebido corresponde à nota; parciais e pós-vencimento
   registrados e explicados.
5. **Glosa × notificação** — cada glosa tem número e data; concilie a relação de glosas contra o
   controle de notificações **antes** de somar qualquer coisa.

Defina o universo (as competências efetivamente cobertas) e reconcilie ao centavo. Nunca `~`.

## 5. Planos A, B e C: o padrão de execução deste plugin

É o ativo mais reaproveitável do domínio. Para **cada teste**, registre a forma ideal e os fallbacks,
porque a forma ideal quase nunca está disponível — e a diferença entre o auditor sênior e o júnior é
saber o Plano B sem baixar o rigor da conclusão.

```
Teste: <nome>   ·   WP: <código>
Plano A (forma certa):  a evidência ideal e como obtê-la.
Plano B:                falta o dado ideal — a evidência substituta e o que ela ainda prova.
Plano C:                nem isso existe — indagação formal + limitação de escopo declarada.
Limitação a declarar:   a frase exata que entra na aba Critérios e, se material, no ponto.
```

> **Regra de ouro: degradar a evidência não é degradar a conclusão em silêncio.**

Todo Plano B ou C vem com a limitação declarada na aba `Critérios` do papel de trabalho e, se
material, no ponto do relatório. Limitação declarada é evidência de rigor; limitação calada é o que
transforma um trabalho em retratação. Um *"não foi possível concluir, falta X"* vale mais que um
número bonito e errado.

**Conclusão ≠ ressalva.** Há limitações que não geram ressalva, geram conclusão: se o instrumento que
apura a quantidade faturada não tem aferição metrológica vigente no período, a receita daquele
período está contaminada, e isso se conclui — não se ressalva. Ver `medicao-e-aceite` §4.

## 6. Como dimensionar o escopo do mandato

Antes de escrever o programa, responda estas seis perguntas ao mandato — e pergunte, não deduza (R8):

1. **Como o serviço é medido?** Por quantidade física apurada em instrumento, por carga/viagem, por
   quantidade fixa contratada, ou por disponibilidade? É aqui que o preço se forma, e é o que decide
   se o bloco REC.05 existe.
2. **Quantos clientes e de que natureza?** Cliente único de natureza pública colapsa boa parte do
   ciclo: pode não haver tabela de preços comercial (o preço vem do edital e do projeto básico), não
   há originação de venda a testar, e a interrupção do serviço por inadimplência costuma ser
   contratualmente inaplicável — testa-se registro e cobrança, não corte.
3. **O valor a receber é modulado por desempenho ou por glosa?** Se sim, o índice e a relação de
   glosas entram no escopo e têm de ser reperformados.
4. **Que espécie de documento fiscal é emitida?** Nota de serviço e nota de produto têm regras e
   prazos de cancelamento distintos, e exposição fiscal muito diferente. Ver `faturamento-e-nf` §2.
5. **A receita tem contrapartida em outro processo?** Venda de material valorizado, sucata ou
   subproduto é **receita na venda e baixa de estoque na saída**. Se o escopo cobre os dois, escreva
   o par recíproco de testes e faça cada um citar o ID do outro — sem isso, cada processo audita
   metade: a saída sem nota é invisível para quem olha só a baixa, e a nota sem baixa é invisível
   para quem olha só a receita.
6. **O escopo inclui presença física?** Se não inclui, converta cada ponto de roteiro operacional em
   teste retrospectivo: pergunte *que rastro este controle deixou?* e teste o rastro do último ciclo
   realizado. Um ponto, um teste, uma conclusão — nunca comprima o roteiro num teste-ônibus, porque
   os pontos falham por razões diferentes. Antes de fechar, varra o programa por resíduo de presença
   ("no momento da auditoria", "acompanhar a contagem", dependência da data do próximo ciclo).

## 7. O que não transportar de um mandato para o outro

Um ciclo de receita simples não é o ciclo completo. Quando o mandato tem cliente único, serviço por
carga e contrato único, boa parte dos elos colapsa — e é fundamental registrar **qual** colapsou e
por quê, para que o próximo trabalho não herde a simplificação como se fosse o método.

Não transporte entre mandatos: prazo de cancelamento de nota (varia por espécie de documento e por
unidade da federação), percentual de take-or-pay e pesos de índice de desempenho (são cláusula
daquele contrato), inaplicabilidade do bloco de medição física, e ausência de tabela de preços
comercial. Tudo isso se relê no contrato do mandato corrente.

## Próximo passo

`matriz-de-riscos-da-receita`, para converter os elos em registro de riscos e programa de testes;
depois as skills de elo, na ordem do ciclo. O registro do que se aprendeu ao fechar o trabalho vai
para `acta-way:checkpoint` e para o ritual de aprendizado do plugin de método.
