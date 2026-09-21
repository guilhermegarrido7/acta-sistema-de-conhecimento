---
titulo: Fundamentos
---

## A ideia que sustenta o método

Pesquisa de remuneração é estatística descritiva sobre uma amostra que ninguém sorteou. O painel é
intencional, montado por comparabilidade de porte, setor e geografia, e essa natureza define o que o
método pode afirmar. Cabe reportar n, composição e critério de seleção. Não cabe margem de erro nem
intervalo de confiança, que seriam falsa precisão importada da amostragem probabilística. Da mesma
natureza vem a escolha da mediana como medida central de referência: distribuição salarial é
assimétrica à direita, e num painel de doze empresas uma única organização que paga muito acima
desloca a média sem que a prática de mercado tenha se movido.

A segunda tradição é a de avaliação de cargos por fatores, linhagem que vem do método Hay e de seus
sucessores: comparar posições pelo conteúdo do trabalho, decomposto em fatores ponderados, em vez de
pelo título que cada organização escolheu usar. O matching da casa aplica quatro fatores (conteúdo e
responsabilidades, complexidade e autonomia, escala e escopo, requisitos) com pesos declarados e um
score que classifica o par em match total, parcial, proxy ou sem match. Isso existe porque erro de
matching é o único erro do projeto que fica invisível depois da agregação. Uma vez que dois cargos
diferentes entram no mesmo pool, a mediana resultante é um número sem significado e nada no
relatório denuncia isso, exceto o coeficiente de variação, que é justamente por isso um teste
obrigatório antes de publicar.

A terceira camada é jurídica e não é acessória. Troca de informação de remuneração entre
concorrentes é tema de direito da concorrência, e o dado do participante é informação sensível sob a
LGPD. Por isso os mínimos de agregação vêm antes de qualquer decisão editorial: cinco empresas
distintas para publicar estatística de posição, mínimo e máximo suprimidos abaixo de cinco
observações individuais, nenhum participante respondendo por mais de 25% das observações de um dado
publicado. A regra prática que resume o conjunto é simples de aplicar em revisão: se o leitor puder
inferir o valor de um concorrente específico a partir do output, o output está errado.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Método Hay de avaliação de cargos (Hay Guide Chart, hoje Korn Ferry) | Avaliação de posição por fatores ponderados de conteúdo, em vez de por nomenclatura | `matching-cargos`, os quatro fatores com peso e o score de 0 a 100 |
| Total Rewards | Recorte da remuneração em camadas: fixo, adicionais, variável, benefícios e encargos | `escopo-e-proposta` (fronteira do escopo), dicionário de dados, cálculos de remuneração total |
| Comparatio | Índice clássico de gestão de remuneração: salário do cliente sobre a referência de mercado | `analise-de-competitividade`, cálculo C-16, medida central do painel Power BI |
| Estatística de posição (mediana, Q1, Q3, P10, P90) | Descrição da distribuição por quantis, robusta a valor extremo | `estatistica-remuneracao`; fichas C-01 a C-06 do livro de cálculos |
| Percentil por interpolação linear inclusiva | Convenção de cálculo (`QUARTIL.INC`, `PERCENTIL.INC`), escolhida sobre a exclusiva por operar com n pequeno | Convenções gerais do livro de cálculos; declarada com exemplo numérico na nota metodológica |
| Regra de Tukey (1,5 × IQR) | Critério de sinalização de outlier pela amplitude interquartil | C-15, passo 2 do tratamento de outliers |
| Winsorização | Alternativa à exclusão, preserva o n substituindo o extremo | C-15, cargos com n grande |
| Amostragem intencional (não probabilística) | Seleção de comparáveis relevantes, sem sorteio, com viés de autosseleção declarado | `estatistica-remuneracao`, seção de amostragem; item 2 da nota metodológica |
| LGPD (Lei 13.709/2018) | Proteção de dado pessoal, aplicável ao participante e não só ao cliente contratante | Regra de ouro R3; anonimização na entrada; protocolo de uso de IA |
| Lei de defesa da concorrência (Lei 12.529/2011) | Limites à troca de informação sensível entre concorrentes | Mínimos de agregação, submetidos ao jurídico antes da primeira divulgação de cada projeto |
| Convenção coletiva e piso da categoria | Referência legal de remuneração mínima por categoria e data-base de reajuste | Validação V6; cálculo C-07 de atualização à data-base; leitura de cargos ancorados em piso |
| Princípio da Pirâmide, de Barbara Minto, e MECE | Resposta primeiro, decomposição mutuamente exclusiva e coletivamente exaustiva | Storyline do relatório (a conclusão vai no slide 3); famílias, níveis e recortes como partições |
| Storytelling com Dados, de Cole Nussbaumer Knaflic | Gramática de gráfico: eliminar tinta que não é dado, uma cor de destaque por visual | Parte B da especificação de design, regras de gráfico do relatório |
| Modelagem dimensional em esquema estrela (tradição Kimball) | Tabela fato e dimensões, relacionamento um para muitos em direção única | `dashboard-powerbi`, modelo de dados e medidas DAX |

## Onde a ACTA se afasta do manual

A casa usa a lógica de fatores da avaliação de cargos sem fazer avaliação de cargos. O método Hay e
seus derivados existem para produzir uma hierarquia de pontos que sustenta estrutura de carreira e
tabela salarial; aqui os quatro fatores servem apenas para decidir se o cargo do cliente e o cargo
do participante são o mesmo trabalho. Estrutura de cargos, tabela salarial, enquadramento e PCCR
estão fora do escopo do contrato de pesquisa por regra fixa, e pedido nessa direção vira Change
Request registrado, não entrega silenciosa. A separação é metodológica antes de ser comercial: a
pesquisa informa a referência externa e apresenta cenários, e a decisão de posicionamento (mediana,
Q3, P90) é política da instituição, que depende de criticidade do cargo, dificuldade de reposição e
restrição orçamentária.

Duas escolhas de tratamento contrariam o reflexo do manual, e as duas têm razão concreta. O mínimo
de doze empresas por recorte é convenção de robustez do projeto, não resultado de cálculo de tamanho
de amostra, e por isso é tratado como piso e não como meta: o alvo de convites fica em dezoito por
recorte, porque a conversão de primeira edição costuma ficar entre 40% e 60%. E a média reportada
por padrão é a simples, com a ponderada por incumbentes como coluna complementar, o inverso do que a
intuição de impacto financeiro sugeriria. Quando o cliente contratante participa da amostra e tem
porte muito maior que os demais, ponderar por headcount faz a estatística de mercado ser puxada pelo
próprio cliente, o que descaracteriza a referência externa. A ponderada volta a ser a medida correta
no índice agregado de competitividade e no custo de equalização, onde a pergunta é exposição de
folha e não prática de mercado. O mesmo espírito governa o outlier: a regra de Tukey marca, o
consultor decide caso a caso, e exclusão sem motivo registrado em `motivo_exclusao` não acontece,
porque exclusão por erro de dado é técnica e exclusão por valor incômodo é manipulação.
