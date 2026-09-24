---
titulo: Matriz de achados de convênio
---

# Matriz de achados de convênio

O formato de registro de achado deste tipo de trabalho. A redação do ponto, a calibração de
severidade e o vocabulário do campo Resultado vivem em `redacao-de-achados`, no plugin de método, e
não se repetem aqui. O que esta referência traz é a **estrutura da planilha** e a coluna que o
convênio tem e os outros trabalhos não: a glosa.

## A planilha

Um arquivo por convênio, nomeado pelo número do convênio. Três abas:

| Aba | Conteúdo |
|---|---|
| **Matriz de achados** | Uma linha por achado, com as colunas abaixo |
| **Base de pagamentos** | Os lançamentos que sustentam os achados de valor, com fonte de recurso e documento bancário |
| **Uma aba por achado** (`1.1`, `1.2`, ...) | O detalhamento do achado: população testada, critério, evidência, memória de cálculo da glosa |

A terceira é o que faz a matriz funcionar. A linha da aba principal é o resumo que vai ao gestor; a
aba do achado é o que um terceiro precisa para reproduzir a conclusão, que é a exigência de
documentação das normas do IIA.

## As colunas da aba principal

| Coluna | O que vai nela |
|---|---|
| **#** | Numeração hierárquica, `<bloco>.<sequência>`, estável do rascunho ao relatório final |
| **Nº do convênio** | Permite consolidar achados de vários convênios numa visão de carteira |
| **Apontamento** | O título do achado, em uma linha, escrito sobre o fato |
| **Situação encontrada** | O achado: o que foi testado, em que população, o que se encontrou, com número exato |
| **Indícios de glosa?** | Sim ou não. É o campo que separa achado de controle de achado de valor |
| **Valor (R$)** | O valor proposto para glosa, com a memória de cálculo na aba do achado |
| **Critério de análise** | A norma, a cláusula do instrumento ou o princípio contra o qual o fato é desvio. Sem critério não há achado, há opinião |
| **Observação** | Limitação de escopo, evidência que faltou, ressalva do auditor |
| **Status** | O andamento do ponto no ciclo de discussão |
| **Ação de correção** | O que o gestor se comprometeu a fazer, com responsável e prazo |
| **Resposta do gestor do convênio** | A manifestação, transcrita, sem edição |

## A coluna de glosa

É a diferença de fundo entre este trabalho e uma auditoria de processo interno. Em compras, o achado
produz recomendação; aqui, produz **valor a devolver**. Três disciplinas:

**Separe o achado de valor do achado de controle.** Ausência de segregação na aprovação é achado de
controle, e a coluna de glosa fica vazia. Despesa fora da vigência é achado de valor, e o número
tem de estar lá. Um mesmo fato pode gerar os dois pontos, e é comum que gere.

**A memória de cálculo vive na aba do achado, nunca só na linha.** Valor do lançamento, fonte do
recurso, proporção do aporte do concedente quando a glosa for proporcional, correção se aplicável, e
o caminho da conta de origem ao destino quando o achado for de desvio de finalidade.

**Indício não é condenação.** A coluna se chama indício de glosa porque a decisão de glosar é do
concedente, depois de ouvir o parceiro. O auditor conclui sobre o fato e sobre o critério, propõe o
valor, e não decide a devolução. A redação segue a mesma disciplina de sempre: escreva sobre o fato
observado e sobre o controle ausente, nunca sobre a intenção de quem gastou.

## Consolidação de carteira

Quando o mandato cobre vários convênios, consolide as matrizes por apontamento, e não por convênio. O
mesmo achado repetido em vários convênios do mesmo concedente deixa de ser falha de execução de um
parceiro e passa a ser deficiência do processo de concessão e de acompanhamento, com severidade
diferente e destinatário diferente. É o ponto de maior valor que este tipo de trabalho produz, e ele
só existe se a numeração dos apontamentos for comparável entre os arquivos.
