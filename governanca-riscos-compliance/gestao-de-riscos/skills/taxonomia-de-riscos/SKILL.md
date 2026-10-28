---
name: taxonomia-de-riscos
description: Classifique risco no Dicionário de Riscos da ACTA, com quatro componentes, oito grupos e 52 categorias numeradas, e decida quando criar categoria nova em vez de forçar encaixe. Acionar ao abrir o registro de riscos de um mandato, ao classificar risco de terceiro numa due diligence, ao criticar a lista livre de riscos do cliente, ou ao propor categoria nova.
---

# Taxonomia de riscos

O dicionário completo está em `references/dicionario-de-riscos.md`. Ele é longo e só precisa ser
carregado quando houver classificação para fazer. Esta skill traz o que decide: por que a taxonomia
é fechada, como se classifica, e o que fazer com o que não cabe.

Carregue `acta-way:checkpoint` para registrar e retomar o estado do engajamento. Quando o trabalho for de auditoria, o código
de risco por processo (`<CódProcesso>.R<NN>`) vive em `acta-metodo-auditoria:programa-de-testes` e é
outra coisa: aquilo identifica o risco dentro de um processo auditado, isto classifica qualquer risco
dentro do vocabulário da casa. Os dois convivem, e a matriz de auditoria costuma ter as duas colunas.

## 1. Por que a taxonomia é fechada

A pergunta aparece em todo mandato: por que não deixar cada área escrever seus riscos com as
palavras dela, que é mais rápido e gera menos discussão no workshop?

Porque o valor da gestão de riscos não está na lista. Está na **comparação**. Lista livre produz,
num cliente de porte médio, algo entre cento e cinquenta e trezentos enunciados, dos quais um terço
são o mesmo risco escrito de três jeitos por três áreas. Duas consequências imediatas:

- **Some a concentração.** "Atraso de fornecedor", "dependência do fornecedor X" e "ruptura de
  insumo" são a categoria 35. Separados, são três riscos médios que ninguém prioriza. Juntos, são um
  risco alto com dono único.
- **Some a série.** O mapa do ano seguinte não é comparável com o do ano anterior, porque as
  palavras mudaram. Gestão de riscos sem série histórica é um evento anual de workshop, não um
  processo.

A taxonomia fechada custa uma discussão a mais no workshop e devolve comparabilidade entre áreas,
entre unidades, entre anos e entre trabalhos diferentes da casa. O mesmo dicionário classifica o
risco de um terceiro numa due diligence e o risco corporativo de uma implantação, e por isso os dois
trabalhos conversam.

O argumento contrário honesto: taxonomia fechada esconde o risco emergente que ainda não tem
categoria. Verdade, e é por isso que existe a regra de extensão da §5. O que não se aceita é a
alternativa informal, em que cada consultor inventa a categoria na hora e ninguém registra.

## 2. A estrutura em três níveis

**Componente** (quatro) → **Grupo** (oito) → **Categoria** (52, numeradas de 1 a 52).

| Componente | Pergunta que ele responde |
|---|---|
| Estratégico | O risco ameaça a tese do negócio, a governança ou a posição competitiva? |
| Financeiro | O risco se materializa em caixa, em resultado financeiro ou em capacidade de honrar obrigação? |
| Operacional | O risco nasce da execução: processo, gente, tecnologia, ativo? |
| Regulamentar | O risco nasce de uma exigência externa: lei, norma, órgão fiscalizador, licença? |

O componente Regulamentar não tem camada de grupo. É assimetria deliberada do desenho, e não
precisa ser corrigida para o mapa ficar bonito.

**Onde a numeração importa.** O número é a chave. Ele é contínuo entre componentes, não se
renumera, e é o que permite empilhar mapas de anos diferentes numa planilha só. Toda vez que alguém
propõe "reorganizar a numeração para ficar mais lógica", o custo é a série histórica inteira.

## 3. Como classificar um risco

Quatro perguntas, nessa ordem. A ordem é o que evita o empate.

**Pergunta 1: onde o dano aparece primeiro?** Não onde ele nasce. Fraude de comprador nasce na
operação e aparece como conduta antiética: categoria 3, componente Estratégico. Vazamento de dado
pessoal nasce em TI e aparece como segurança da informação: categoria 44, componente Operacional,
mesmo tendo consequência regulatória.

**Pergunta 2: é o evento ou é a causa?** A categoria classifica o **evento**, não o fator que o
torna provável. "Sistema legado sem suporte" é fator; o evento é indisponibilidade (43) ou
integridade de dados (42), dependendo do que acontece quando o legado falha. Fator que vira
categoria produz taxonomia com duzentas entradas em dois anos.

**Pergunta 3: qual é a categoria mais específica que ainda contém o evento inteiro?** Desça o
máximo possível sem cortar parte do evento fora. Perda de cliente relevante que quebra o caixa é 28
(Concentração), não 25 (Fluxo de Caixa), porque 28 é mais específica e o efeito no caixa é
consequência, não o evento.

**Pergunta 4: se ainda houver dois candidatos, qual responde melhor "quem é o dono?"** A categoria
tem de cair no colo de alguém. Entre 37 (Obrigações Contratuais) e 51 (Legal e Societário) para um
contrato vencido não renovado, a resposta é 37, porque o dono é quem gere o contrato, e não o
jurídico societário.

**Um risco, uma categoria.** Classificação múltipla parece mais fiel e destrói o mapa: o mesmo
risco passa a contar duas vezes na contagem por componente e some da priorização por diluição.
Quando o risco realmente tem duas faces materialmente distintas, ele são dois riscos, com dois
enunciados, dois donos e duas respostas.

## 4. Os empates que aparecem toda vez

| Confusão | Regra de desempate |
|---|---|
| 1 Compliance × 46 a 52 Regulamentar | Compliance é o **sistema** de aderência (existe licença, existe certidão, existe controle de exigência). As categorias 46 a 52 são o **passivo específico** de cada matéria. Falta de alvará é 1; autuação trabalhista é 46. |
| 2 Reputação × 3 Conduta Antiética | 3 é o ato. 2 é a consequência de exposição. Se o ato ainda não é conhecido fora, o risco vivo é 3. |
| 25 Fluxo de Caixa × 27 Inadimplência | 27 é a perda com o devedor. 25 é a incapacidade da própria Companhia de pagar. Confundir os dois é o erro mais comum em avaliação de terceiro. |
| 33 Terceirizações × 35 Fornecimento | 35 é o risco de não receber o insumo. 33 é o risco assumido porque o terceiro executa atividade da Companhia, inclusive responsabilidade solidária. |
| 42 Integridade de Dados × 49 Contábil | 42 é o dado errado no sistema. 49 é o reconhecimento errado na demonstração. Base gerencial que não bate com o razão é 42. |
| 12 Gestão Comercial × 36 Práticas Comerciais | 12 é preço e margem. 36 é conduta de venda que gera passivo. |

## 5. Quando criar categoria nova

Três testes, todos obrigatórios:

1. **Não cabe em nenhuma das 52 sem deformar o enunciado.** Se couber com um adjetivo a mais, cabe.
2. **Vai se repetir.** Categoria existe para agregar ao longo do tempo. Evento de um cliente só, uma
   vez, é risco específico daquele registro, e não categoria.
3. **Tem dono possível.** Categoria sem área capaz de respondê-la vira linha órfã no mapa.

Passando os três: entra com o **número seguinte ao último em uso**, nunca por inserção no meio, com
a descrição de "o que cai aqui" escrita no mesmo formato do dicionário, e com registro de quando e
por que entrou. Categoria que caiu em desuso fica marcada como inativa, e não é removida: trabalho
antigo precisa continuar legível.

## 6. Quando o cliente já tem a própria taxonomia

Não substitua de saída. O que se faz é **mapa de para**: cada categoria do cliente aponta para a
categoria do dicionário, um para um sempre que possível. O exercício, que leva meia manhã, produz
três achados por si só:

- **Categoria do cliente que aponta para três do dicionário.** Está grossa demais para priorizar.
  Costuma ser "risco operacional" como categoria única.
- **Três categorias do cliente que apontam para uma.** Está fragmentada, e a consequência é a perda
  de concentração descrita na §1.
- **Categoria do dicionário sem nenhuma correspondente.** É cobertura ausente, e é o achado de mais
  valor. No mid-market, as que faltam com mais frequência são 6 (Sucessão), 41 (Dependência de
  Pessoal), 29 (Garantias) e 51 (Legal e Societário).

O mapa de para fica no entregável. Ele é o que permite ao cliente continuar falando a língua dele no
dia a dia sem perder a comparabilidade no reporte ao conselho.

## 7. Uso na avaliação de terceiro

Na due diligence de terceiro, o dicionário é aplicado de forma parcial e declarada: o escopo cobre
um subconjunto das 52 categorias, e o laudo **apresenta a estrutura completa sinalizando as que
tiveram abrangência** nas consultas realizadas. Essa sinalização não é enfeite. É o que impede o
leitor de ler silêncio como ausência de risco.

O subconjunto típico de um background check de fornecedor, montado sobre fonte pública, é: 1
Compliance, 2 Reputação e Imagem, 25 Fluxo de Caixa, 37 Obrigações Contratuais e 46 Trabalhista e
Previdenciário, com 3 Conduta Antiética e 51 Legal e Societário entrando quando há mídia negativa ou
alteração societária relevante. As demais ficam declaradas como fora de escopo.

A avaliação de cada categoria coberta usa a escala de quatro níveis de
`avaliacao-impacto-probabilidade` §5, com o nível Limitação de Escopo para o que não se conseguiu
avaliar.

## O que entregar

1. O registro de riscos do mandato com três colunas de classificação: componente, grupo, categoria
   (número e nome).
2. O mapa de para, quando o cliente tinha taxonomia própria, com as três leituras da §6.
3. A lista de categorias do dicionário sem nenhum risco identificado, declarada como tal. Categoria
   vazia é informação, e pode significar cobertura ausente ou risco genuinamente inexistente.
4. As categorias novas propostas, com os três testes da §5 respondidos por escrito.

## Próximo passo

`apetite-e-tolerancia`, para declarar por componente o quanto de risco a Companhia aceita antes de
avaliar cada linha. Se o apetite não estiver declarado, `avaliacao-impacto-probabilidade` vai
produzir notas sem régua.
