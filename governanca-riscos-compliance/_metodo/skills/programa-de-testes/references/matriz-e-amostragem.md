# Matriz de testes: as 26 colunas, a régua de amostragem e as abas de apoio

Detalhe operacional da skill `programa-de-testes`. Consulte ao montar o arquivo do zero, ao conferir
se uma matriz herdada tem as colunas certas, ou ao dimensionar amostra.

## 1. As 26 colunas, nesta ordem

As 17 primeiras são a substância histórica do método. As demais vieram de um RACM corporativo de
referência e são o que torna a matriz operável e rastreável.

| # | Coluna | Conteúdo |
|---|---|---|
| 1 | Área | área da Companhia (ex.: `Excelência Comercial`, `Operações e Suprimentos`, `Finanças & Planejamento`) |
| 2 | Cód. Processo | a sigla (`CTR`, `EST`, `CTP`, `FPG`) — prefixo do ID de teste e do código de risco |
| 3 | Processo | Compras, Contas a Pagar, Contas a Receber, Estoque, Tesouraria, Aspectos Gerais, Pessoal |
| 4 | Subprocesso | etapa do ciclo (ex.: Identificação da necessidade, Cotação, Pagamento) |
| 5 | **Bloco** | o agrupamento que antes era faixa mesclada (`3. Balança e Pesagem`). **Coluna, nunca merge** |
| 6 | Atividade | atividade numerada do fluxo (1..n) |
| 7 | ID do teste | `<PROC>.<TIPO>.<NN>` |
| 8 | Objetivo do teste | o que se busca comprovar |
| 9 | Política | onde está no normativo do cliente e o que diz |
| 10 | Controle | o que se verifica, em melhores práticas |
| 11 | Tipo de Controle | taxonomia fechada. É aqui que se marca `Key control` |
| 12 | Tipo de Teste | vocabulário fechado de **5** valores |
| 13 | Abrangência | `100%` ou `Amostral` |
| 14 | Frequência do Controle | alimenta a régua de amostra (§2) |
| 15 | Amostra / Universo | universo e critério de seleção |
| 16 | Evidência requerida | o documento que comprova |
| 17 | Solicitação | o item da carta que alimenta o teste (`C.8`), ou `In loco` |
| 18 | WP | código do papel de trabalho que executa |
| 19 | Riscos (Cód.) | `CTR.R01, EST.R03` |
| 20 | Status do Controle (desenho) | `Implementado` · `Parcialmente Implementado` · `Não Implementado` · `Não Aplicável` · `A avaliar` |
| 21 | Conclusão do Teste (efetividade) | `Eficaz` · `Parcialmente Eficaz` · `Ineficaz` |
| 22 | Achado / Evidência | o que foi encontrado, com número exato |
| 23 | Crítica ACTA | a leitura de auditor sobre o controle |
| 24 | Responsável | o auditor designado |
| 25 | Status do teste | `Pendente` · `Em andamento` · `Concluído`. Sem estado de revisão |
| 26 | Doc. Recebida? | `Sim` · `Não` · `Pendente` · `Não aplicável` — operacionaliza a razão da não testabilidade |

**Não** crie coluna `Key control` separada. No RACM corporativo de referência essa coluna estava
oculta e valia `Sim` em 100% das linhas: era o critério do filtro que gerou o arquivo, não
informação. `Key control` é atributo do Tipo de Controle (coluna 11).

**Nada de célula mesclada** — a matriz é retangular, sempre. Regra completa e verificação em
`papel-de-trabalho`.

## 2. Abrangência e a régua de amostragem

**Primeiro critério, e é o que manda:** dá para cruzar bases e verificar 100% dos casos? Então é
`100%`. Amostra **só** quando o cruzamento integral não é possível.

**Segundo critério, para dimensionar a amostra:** a régua abaixo cruza a frequência do controle com o
nível de risco. Nasce de auditoria SOX, mas é de uso corrente.

| Frequência do controle | População estimada de ocorrências | Baixo | Médio | Alto |
|---|---|---|---|---|
| Anual | 1 | 1 | 1 | 1 |
| Trimestral | 4 | 1 | 2 | 3 |
| Mensal | 12 | 2 | 3 | 4 |
| Semanal | 52 | 5 | 10 | 15 |
| Diária | 250 | 20 | 30 | 40 |
| Múltiplas vezes ao dia | acima de 250 | 25 | 45 | 60 |

Leve a régua para uma aba própria do arquivo e preencha a coluna `Frequência do Controle` em todas as
linhas. Se a frequência foi **inferida** do subprocesso em vez de constatada em campo, declare a
inferência nos Critérios: ela define o tamanho da amostra, e inferência silenciosa contamina o
dimensionamento inteiro.

## 3. ID do teste

`<PROCESSO>.<TIPO>.<NN>`, com `CT` para teste de controle e `SU` para substantivo/analítico.
Exemplos: `CTP.CT.06`, `CTR.CT.04`, `AG.07`, `CP.01`.

Abreviações de processo em uso: `CMP`/Compras · `CTP`/Contas a Pagar · `CTR`/Contas a Receber ·
`TES`/Tesouraria · `EST`/Estoque · `AG`/Aspectos Gerais · `PESS`/Pessoal · `TRV`/transversal.

**Nunca renumere um ID já emitido.** Ele já está em papel de trabalho, slide e e-mail.

## 4. Colunas da aba de riscos

Nesta ordem: `Cód.` · `Bloco / Subprocesso` · `Risco (categoria)` · `Evento de risco` ·
`Fator de risco` · `Impacto` · `Vulnerabilidade` · `Origem` · `Controles associados` · `Qtd.`

`Controles associados` é o índice reverso e a coluna mais útil do registro: vazia significa risco sem
cobertura — ou o risco não é real, ou falta controle. Gere-a **por código**, a partir da coluna
`Riscos (Cód.)` da matriz, nunca à mão.

`Origem` distingue as duas fontes do risco: os do **ciclo do processo**, mapeados no planejamento, e
os **identificados na execução**, recolhidos de dentro dos achados.

## 5. Fator × evento: pares de reescrita

| Errado, é fator | Certo, é evento |
|---|---|
| Pagamento manual no portal, fora da rotina de remessa | Desembolso realizado fora da rotina autorizada de pagamento |
| Uso do cartão como via paralela ao processo de Compras | Aquisição sem processo competitivo, sem pedido e sem atesto |
| Titularidade de cartão em nome de pessoa terceira | Utilização de recursos por pessoa sem vínculo comprovado |
| Verba salarial paga como benefício | Contingência tributária e trabalhista por reclassificação de verba |

**Armadilha real, vista num RACM corporativo de referência:** um risco tinha como evento *"Autuações
fiscais decorrentes de pagamentos sem suporte fiscal adequado"* e como fator *"Multas ou sanções
fiscais pelo não recolhimento de tributos"* — o fator estava preenchido com o **impacto**. O fator
verdadeiro era "ausência de conferência do suporte fiscal antes do pagamento". Fator preenchido com
impacto quebra a associação do controle preventivo: não sobra condição para o controle atacar.

## 6. Matriz limpa para o relatório

Poucas colunas, e só o que foi efetivamente testado:

```
Processo | Subprocesso | Controle | Conclusão | Riscos (só os IDs)
```

Todo controle entra com um dos três resultados de efetividade, porque o que não pôde ser testado é
`Ineficaz`, e não "Não testado".

**Régua de riscos:** os riscos distribuídos pelas atividades do ciclo, em ordem. Quando vários riscos
pertencem à mesma atividade, a atividade ocupa as linhas dos seus riscos. Se não couber em um slide,
divida por origem (ciclo × execução) em vez de reduzir a fonte até ficar ilegível.

**No slide** (PPTX), mesclar verticalmente a célula da Atividade é aceitável: é figura, não planilha.
**No Excel, jamais** — repita o valor da atividade em cada linha. Se o mesmo dado alimenta o slide e a
planilha, mantenha a planilha retangular e mescle só na hora de desenhar o slide. Layout, gráficos e
mecânica de slide em `relatorio-de-auditoria`.
