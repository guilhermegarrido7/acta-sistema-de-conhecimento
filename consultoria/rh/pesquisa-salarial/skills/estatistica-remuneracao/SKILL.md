---
name: estatistica-remuneracao
description: >
  Estatística aplicada a pesquisa de remuneração. Acionar em amostragem, definição
  de mínimos, cálculo e interpretação de mín, Q1, média, mediana, Q3, máx, dispersão,
  outliers, percentis e leitura de competitividade. As fórmulas ficam em
  references/03-livro-de-calculos.md. Este módulo trata do julgamento: qual medida
  usar, quando não publicar, como interpretar.
---

# Estatística aplicada a remuneração

## 1. Por que a mediana é a medida central e não a média

Distribuições salariais são assimétricas à direita: poucos valores muito altos
puxam a média, a mediana não se move. Em amostra de 12 empresas, um único hospital
premium eleva a média em 10% ou mais sem que a prática de mercado tenha mudado.

Consequência operacional: **a mediana é a referência de posicionamento**, a média é
informação complementar. Quando média e mediana divergem mais de 25% (validação V2),
isso é um achado a explicar, não um número a publicar sem comentário. A explicação
usual é assimetria legítima ou erro de matching, e o teste de C-14 distingue os dois.

## 2. Amostragem: o que este projeto realmente tem

A amostra é **intencional**, não probabilística. Não há sorteio, há seleção de
comparáveis relevantes. Isso tem três implicações que precisam constar da nota
metodológica:

1. Não cabe calcular margem de erro nem intervalo de confiança no sentido clássico.
   Reportar isso seria falsa precisão. O que cabe reportar é o n, a composição e os
   critérios de seleção.
2. A representatividade é argumentada por composição (porte, setor, região,
   complexidade), não por aleatoriedade.
3. Existe viés de autosseleção: quem responde a pesquisa de remuneração tende a ser
   instituição mais estruturada em RH, o que costuma enviesar levemente para cima.
   Declarar a limitação é mais defensável que ignorá-la.

O mínimo de 12 empresas por recorte é convenção metodológica de robustez do projeto,
não resultado de cálculo de tamanho de amostra. Tratar como piso, não como meta:
o alvo de convites deve ser 18 por recorte, porque conversão de primeira edição é
tipicamente de 40% a 60%.

### Regra de consolidação de recorte com amostra insuficiente (decidir na Etapa 1)

É comum que um dos recortes planejados fique abaixo do mínimo amostral. No
caso FJS, o recorte "Bahia interior" tinha apenas 6 empresas indicadas contra
o mínimo de 12, e a decisão foi entre consolidá-lo dentro do recorte
"Nordeste" ou mantê-lo isolado.

| Opção | Efeito | Quando preferir |
| --- | --- | --- |
| Consolidar o recorte pequeno dentro do recorte vizinho mais próximo | O recorte vizinho atinge o mínimo mais facilmente, mas perde granularidade local | Preferível se o interesse for competição por talentos regional, e não hiperlocal |
| Manter o recorte isolado, mesmo abaixo do mínimo | Recorte fica com amostra limitada, resultados publicados com a marca de amostra insuficiente | Só se o cliente tiver unidades naquele recorte com decisão salarial própria e a granularidade for indispensável |

A escolha depende do mapeamento de populações internas do cliente. Não
decidir antes de ter esse mapeamento e registrar a decisão no log.

## 3. Quando o n é pequeno

Este é o problema estatístico central do projeto. Com 265 cargos e 12 empresas por
recorte, muitos cargos terão de 2 a 6 observações. Hierarquia de respostas, na
ordem:

1. **Publicar o que o n permite** (tabela de mínimos amostrais do livro de cálculos,
   Grupo 3). Mediana com n igual a 5 é informação útil; mínimo e máximo com n igual
   a 5 é exposição de participante.
2. **Agregar para cima.** Se o cargo individual não tem n, reporte no nível de
   subfamília e senioridade. "Analista de RH pleno" sem n vira "Analista pleno,
   família Gestão de Pessoas". A agregação precisa ser declarada na tabela.
3. **Agregar recorte.** Cargo sem n em Salvador pode ter n em Nordeste. Reportar
   com a marca do recorte usado.
4. **Declarar amostra insuficiente.** É uma resposta legítima e profissional.
   Estimar é que não é.

Nunca combinar cargos de níveis funcionais diferentes para atingir n. Isso troca um
problema declarado (falta de dado) por um problema oculto (dado errado).

## 4. Outliers: marcar não é excluir

Erro comum: aplicar Tukey automaticamente e excluir. Em n igual a 12, a regra
sinaliza dados legítimos. A sequência obrigatória está em C-15: plausibilidade
primeiro, teste estatístico depois, decisão humana no final, transparência sempre.

Perguntas a fazer antes de excluir:
- O valor é implausível ou apenas alto? Hospital premium pagando 60% acima da
  mediana é plausível.
- O participante confundiu unidade (anual por mensal, com adicional por sem)?
- A jornada é diferente e não foi declarada?
- O conteúdo do cargo é o mesmo? Um "Coordenador" que gerencia 400 pessoas não é
  outlier salarial, é outro cargo.

Regra prática: exclusão por erro de dado é técnica; exclusão por valor incômodo é
manipulação. A diferença fica registrada em `motivo_exclusao`.

## 5. Interpretação para o cliente

Três traduções que precisam estar no relatório porque são as três confusões mais
frequentes:

**Gap não é ajuste.** Estar 20% abaixo da mediana exige 25% de aumento para
equalizar. Ver C-17.

**Mediana não é meta.** A mediana é onde o mercado está, não onde o cliente deve estar.
A decisão de posicionamento (mediana, Q3, P90) é política da instituição e depende
da criticidade do cargo, da dificuldade de reposição e da restrição orçamentária.
O relatório informa a referência e apresenta cenários; o cliente decide.

**Estar acima do mercado não é erro automático.** Pode refletir escopo maior, tempo
de casa, retenção de conhecimento crítico ou herança de estrutura. Investigar antes
de recomendar contenção, porque recomendar redução com base apenas em comparatio é
o tipo de conclusão que se mostra errada quando o gestor explica o contexto.

## 6. Nota metodológica obrigatória do relatório

Duas páginas, com estes oito itens. Ausência de qualquer um deles é lacuna
auditável:

1. Composição da amostra por recorte, com n de convidadas, respondentes e taxa de
   resposta.
2. Critérios de seleção do painel e natureza intencional da amostra.
3. Método de matching e distribuição dos graus de match (total, parcial, proxy).
4. Data-base e regra de atualização aplicada (C-07), com índice e fonte.
5. Tratamento de jornada (C-08) e quais cargos foram normalizados.
6. Método de percentil usado, com exemplo numérico reproduzível.
7. Regra de outliers, número de observações excluídas e motivos agregados.
8. Mínimos de agregação e regra de anonimização aplicada.
