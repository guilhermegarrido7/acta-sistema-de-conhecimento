---
name: diagnostico-e-entrevistas
description: Abra um diagnóstico com escopo, entidades e recortes analíticos fechados, a solicitação de informações estruturada por layout de arquivo e o status report que cobra pendência. Acionar ao abrir engajamento de diagnóstico, ao montar a lista de informações a pedir, ao cobrar dado que não chegou, ao definir a autoridade entre fontes divergentes, ou ao entrevistar a gestão.
---

# Diagnóstico: escopo, insumos e entrevistas

Carregue antes: `acta-way` (checkpoint, convenções de entregável, anonimização) e a skill
`metodo-consultoria` deste plugin não existe: o que vale para todo o método está distribuído entre
as seis skills daqui, e esta é a primeira do ciclo.

## Papel desta skill

A abertura do trabalho. Ela produz três artefatos e uma decisão. Os artefatos são a **declaração de
escopo e recortes**, a **carta de solicitação de informações** e o **status report de pendências**. A
decisão é a **hierarquia de autoridade entre fontes**, que precisa estar fechada antes de o primeiro
número ser calculado, não depois da primeira divergência.

## 1. Escopo, entidades e recortes analíticos

Um diagnóstico tem sempre mais de uma entidade ou unidade e mais de uma janela de tempo. Abra o
trabalho com uma tabela de entidades e uma lista fechada de recortes.

**Tabela de entidades.** Uma coluna por unidade analisada, com sigla contábil, capacidade instalada
(a unidade física que denomina os indicadores), dívida bancária e dívida entre partes ligadas. É a
tabela que responde "o que exatamente está dentro" antes de qualquer cálculo.

**Recortes.** Escolha poucos, nomeie cada um, e declare o que cada um serve. Num diagnóstico de 17
meses a casa usou três:

| Recorte | Janela | Para que serve |
|---|---|---|
| Ano-calendário fechado | 12 meses | Ponto de equilíbrio, resultado contábil validado, comparação com exercício encerrado |
| Período completo | todos os meses com dado nas duas pontas | Custo de oportunidade, séries de indicadores, leitura de tendência |
| Janela homóloga | mesmos meses em dois anos | Comparação ano contra ano sem distorção de sazonalidade |

> **A regra que evita a maior parte do retrabalho: todo número citado declara a qual recorte
> pertence.** Num diagnóstico real, a maior parte das divergências apontadas na revisão não era erro
> de cálculo: era a comparação de dois números corretos calculados em recortes diferentes.

O período completo é escolhido por um critério, não por conveniência: é a janela em que existe dado
operacional **e** contábil em **todas** as entidades. Declare o critério junto com a janela.

## 2. A estrutura de pasta do diagnóstico

Reusável, e ela mesma é método. Dentro de `~~pasta de trabalho`:

```
0- Benchmarking                      referência externa coletada, com a fonte inteira arquivada
1- Solicitação de Informações        a proposta, a carta de solicitação
2- Informações Financeiras e Operacionais
   1- Informações Gerais             balancetes, razão, contratos, organograma
   2- Relatórios Gerenciais          o que a gestão já produz
   3- Arquivos Eletrônicos           extração transacional por sistema e por unidade
3- Estudos e análises                planilha-mestre, análises intermediárias
   Arquivos não utilizados           o que foi recebido e descartado, com o motivo
   Principais achados
4- Apresentações                     o deck vigente, Versões Anteriores, Scripts
Status Report - Solicitação de Informações
```

Duas pastas costumam ser esquecidas e são as que mais valem: **`Arquivos não utilizados`**, que
impede que o mesmo arquivo seja reavaliado três vezes, e **`Versões Anteriores`**, que é onde a
versão superada vai antes de qualquer edição, nunca solta ao lado do arquivo vigente.

Quando o trabalho é recorrente e se repete em muitas frentes (uma ordem de serviço por frente), a
árvore de cada frente é idêntica e rasa: documentos normativos, administrativo, base de dados,
reuniões, produtos finais, relatórios anteriores. Na raiz do mandato ficam os artefatos transversais:
programa de trabalho, matriz de achados, planilha de análise consolidada. Catorze frentes com a mesma
árvore é o que prova que a árvore é método e não improviso.

## 3. A solicitação de informações

Erro comum: pedir "os dados financeiros". O que chega é irreconciliável. A carta da casa pede
**arquivo por arquivo, com o layout de campos esperado e o período**.

Estrutura da carta, nesta ordem:

1. **Abertura curta**, dizendo que a disponibilização pode ser particionada. Isso destrava a primeira
   remessa em dias em vez de semanas.
2. **Informações gerais**: organograma, quadro de pessoal por departamento com admissão, desligamento
   e salário base, balancete analítico mensal, extratos, contratos vigentes, relatórios gerenciais.
3. **Blocos temáticos** do que a gestão deveria acompanhar: estrutura de custos, indicadores
   operacionais, gestão de receita, comercial e marketing. Pedir o indicador pelo nome revela, por si
   só, se ele existe.
4. **Arquivos eletrônicos, em Prioridade A e Prioridade B.** A prioridade é a alavanca de
   negociação: sem ela, o cliente entrega o que é fácil e o difícil nunca chega.
5. **Layout por arquivo**: um bloco por extração, com o período e a lista de campos, terminando em
   "demais campos". Exemplos de blocos que se repetem em qualquer setor: cadastro de clientes,
   transacional por ponto de venda, ficha técnica de produto com insumo e custo unitário,
   faturamento com CFOP e impostos, transações de cartão com bruto, líquido e taxa, ordens de
   serviço, cadastro de fornecedores, pedidos de compra, notas de entrada, títulos pagos, cadastro e
   movimentação de estoque, ajustes de inventário, cadastro de pessoal e folha verba a verba.
6. **Fecho**: "outros documentos serão solicitados ao longo dos trabalhos". Sem isso, a primeira lista
   vira contrato e o segundo pedido vira atrito.

O detalhamento dos blocos e a mecânica de cobrança estão em
[references/solicitacao-e-status-report.md](references/solicitacao-e-status-report.md).

Quando o trabalho for uma transação e não um diagnóstico, a lista de data room é outra: use
`acta-ma-sell-buy-side:solicitacao-de-informacoes`. Esta aqui é a de diagnóstico operacional e
econômico-financeiro.

## 4. O status report de pendências

É uma etapa de projeto, não um e-mail. Um documento vivo, uma linha por item solicitado, três
colunas: **Item solicitado · Status · Observação**.

Vocabulário fechado da coluna Status, três valores e nenhum a mais:

| Status | Significa |
|---|---|
| `Suprido` | O arquivo existe e responde ao pedido. A observação traz o caminho relativo exato e a contagem aproximada de arquivos. |
| `Parcial` | Chegou parte. A observação começa com **"Não encontrado:"** e diz exatamente o que falta, não o que veio. |
| `Não encontrado` | Nada chegou. Observação vazia. |

Três disciplinas que fazem o documento funcionar:

- **A observação de `Suprido` aponta o caminho, não o nome do arquivo.** O cliente precisa conseguir
  abrir. E o caminho registrado é o que a planilha-mestre vai citar como fonte depois.
- **`Parcial` nunca descreve o que veio.** Descreve o buraco. "Traz as taxas de comissão vigentes por
  canal; falta a série histórica de valores efetivamente pagos" é acionável. "Recebido parcialmente"
  não é.
- **Pergunta aberta vira pergunta escrita no próprio item.** Quando o dado existe mas a série é curta,
  registre a pergunta na observação ("há série histórica disponível?"), em vez de abrir uma thread
  paralela que ninguém rastreia.

Reemita o status report a cada remessa. A linha que muda de `Não encontrado` para `Suprido` é o
progresso do projeto, e é o único gráfico de avanço que a gestão do cliente entende sem explicação.

## 5. Hierarquia de autoridade entre fontes

Feche isto no primeiro dia. A regra genérica, que vale para qualquer diagnóstico:

1. **Registro analítico lançamento a lançamento**, quando existir para o período em questão.
2. **Demonstrativo consolidado do período** (balancete, fechamento mensal), para os demais períodos.
3. **Extração bruta do sistema transacional**, para todo dado operacional. Nunca planilha derivada
   de indicador.
4. **Documento, relatório e apresentação nunca são fonte.** Todo número publicado é rastreável até
   1, 2 ou 3.

> **Princípio: nenhum número do entregável é transcrito de outro entregável.** Todo dado de entrada
> carrega, na própria célula, a conta ou o campo de origem e o arquivo de onde veio, com link para o
> arquivo-fonte.

A regra de precedência completa, a mecânica de rastreabilidade célula a célula, a tolerância de
reconciliação e o checklist de revisão de qualquer número novo estão em
[references/hierarquia-de-fontes.md](references/hierarquia-de-fontes.md).

## 6. Entrevistas

A entrevista de diagnóstico não é a entrevista de mapeamento de processo. Lá o objetivo é reconstruir
o fluxo passo a passo (`acta-excelencia-operacional:coleta-e-diagnostico`). Aqui o objetivo é
**explicar o número**: por que a margem caiu, por que o custo daquele mês destoa, por que o indicador
que a gestão acompanha não bate com o que o balancete mostra.

Consequência prática: **entreviste depois de ter o número, não antes.** A pergunta "como funciona o
processo de compras?" produz uma descrição idealizada. A pergunta "o custo de material de limpeza
desta unidade em novembro foi quatro vezes o dos outros meses, o que aconteceu?" produz o fato.

Quatro regras de registro, herdadas do método de auditoria e válidas integralmente aqui:

- **Fato e percepção em campos separados.** "A conciliação é feita em planilha" é fato. "O sistema é
  ruim" é percepção, e sai atribuída a quem disse, por papel e nunca por nome.
- **Contradição não se resolve escolhendo um lado.** Registre as duas versões e diga o que pedir para
  fechar. Divergência entre duas áreas sobre o mesmo número é achado.
- **Toda afirmação tem fonte.** Item de política, documento ausente, fala do entrevistado, ou o
  próprio teste.
- **Não invente preenchimento plausível.** "Não foi possível concluir, falta X" é entregável; número
  bonito e errado não é.

Pessoas aparecem por papel: *o controller*, *o gerente da unidade*, *o responsável pelo financeiro*,
*o sócio responsável*. Nome nunca entra no método.

## 7. Alertas de qualidade de dado, desde a primeira leitura

O que chega do cliente vem com defeito, e o defeito é achado. Registre num log próprio e não conserte
em silêncio. Padrões que já apareceram:

- **Arquivo que é cópia byte a byte de outra unidade.** Dezessete arquivos mensais de uma unidade
  eram duplicata dos da outra, com os mesmos nomes de cliente e os mesmos pontos de venda. Não é
  dado ruim: é dado que não existe, e bloqueia por si só um conjunto de análises. Declare o bloqueio.
- **Valor idêntico em dois meses consecutivos** numa conta de consumo. Provável lançamento represado.
- **Rubrica nova no meio da série**, que quebra a comparabilidade ano contra ano do indicador que a
  usa como base.
- **Layout do arquivo que muda no meio do período** (um mês com doze colunas contra vinte e seis nos
  demais). Qualquer leitura por índice fixo de coluna quebra calada.

A checagem contra esses padrões é feita **antes** de a base analítica ser montada. Depois, o defeito
já virou número publicado.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Reconstruir a base a partir da fonte bruta | `mapeamento-as-is` |
| Mapear processo, fluxo e regra de negócio | `acta-excelencia-operacional` |
| Data room de transação | `acta-ma-sell-buy-side:solicitacao-de-informacoes` |
| Checkpoint, anonimização, identidade visual | `acta-way` |
