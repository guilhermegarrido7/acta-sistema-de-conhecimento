---
name: ciclo-da-auditoria-de-pesquisa
description: Conduza a auditoria independente de uma pesquisa ou de um indicador apurado por terceiro, nos dois modos da casa, o ciclo recorrente reportado a regulador e a apuração pontual de resultado. Acionar ao abrir trabalho de verificação de pesquisa, ao definir o que a opinião cobre e o que não cobre, ou ao tratar conflito de interesse de avaliador.
---

# O ciclo da auditoria de pesquisa

Carregue antes: `acta-way` e `acta-metodo-auditoria`. As regras invioláveis, o papel de trabalho, o
programa de testes e a redação de achado vivem lá e não são repetidos aqui.

## 1. O que este trabalho é

Alguém coletou dados de pessoas, calculou um número a partir deles e vai publicar esse número. O
auditor não coleta nada e não recalcula por gosto: ele responde **se o número publicado é sustentado
pelos dados que dizem tê-lo produzido**.

Isso separa o trabalho de duas coisas parecidas com as quais ele é confundido:

| Não é | Porque |
|---|---|
| Fazer a pesquisa | Quem faz não audita. A independência é o produto. |
| Pesquisa de satisfação própria do cliente | Ali o objetivo é conhecer o cliente. Aqui é verificar terceiro. |

## 2. Os dois modos

A casa executa este trabalho em duas formas, com o mesmo método e cadências diferentes.

**Modo contínuo.** Um operador coleta mensalmente e reporta um indicador a um regulador ou a um
contrato. O auditor repete o ciclo todo mês sobre a remessa do mês. A comparabilidade entre meses
vira produto: o mesmo teste, aplicado da mesma forma, permite ler tendência de qualidade da coleta e
não só o mês corrente. É nesse modo que o método foi maturado, ao longo de ciclos mensais
consecutivos.

**Modo pontual.** Um evento é decidido por notas de avaliadores, e alguém precisa atestar a apuração
antes da divulgação. Ciclo único, prazo curto, e o produto é uma memória de cálculo publicável.

O que muda entre eles não é a bateria de testes. É o peso: no contínuo, o recontato do respondente
carrega o trabalho; no pontual, a memória de cálculo e o tratamento de conflito de interesse
carregam.

## 3. O ciclo em seis elos

```
1. Instrumento        o que foi perguntado, com que domínios, por qual roteiro
2. Plano amostral     quantas respostas, de que estratos, contra que população
3. Base entregue      os registros que o operador diz ter coletado
4. Testes de base     consistência interna e contra fonte externa
5. Recontato          o respondente confirma que a resposta existiu
6. Apuração           o cálculo, a memória e o parecer
```

Os elos 1 e 2 são de **desenho** e precisam ser criticados antes do campo, quando ainda dá para
corrigir. Os elos 3 a 5 são de **execução**. O elo 6 é o entregável.

> **A ordem importa e é contraintuitiva.** O instinto é começar pelo cálculo, porque é o número que
> vai ser publicado. Recalcular primeiro é desperdício: se a base tiver registro que não existiu, o
> recálculo correto de um dado falso é um número errado com aparência de conferido.

## 4. O que a opinião cobre

Escreva isto no primeiro dia, e repita no parecer. Uma auditoria de pesquisa assegura:

- que os registros da base correspondem a coletas que **de fato ocorreram**, na medida testada;
- que a base é **internamente consistente** e aderente ao dicionário de dados;
- que a amostra **cobre o plano** declarado, ou onde ela não cobre;
- que o indicador publicado **decorre aritmeticamente** da base, pela regra declarada.

E não assegura que a resposta dada pela pessoa seja verdadeira, nem que a opinião medida represente
a população além do que o plano amostral sustenta. A distinção parece óbvia e é a origem da maior
parte da expectativa mal ajustada do contratante.

## 5. Independência e conflito de interesse

Dois conflitos diferentes, tratados de formas diferentes.

**Conflito do auditor.** Vale a regra geral da casa: o auditor não avalia trabalho que ajudou a
produzir. Se a firma desenhou o instrumento, não audita a coleta feita com ele.

**Conflito do avaliador.** Próprio do modo pontual, e é o que exige método. Quando um avaliador tem
vínculo com um avaliado, a resposta daquele avaliador **sobre aquele avaliado** sai da amostra. A
armadilha está no que vem depois:

> **Excluir a resposta sem ajustar o denominador inverte o resultado.** Se a nota de um participante
> passa a ser somada sobre um avaliador a menos, e a comparação continua sendo por soma de pontos,
> aquele participante é punido por um conflito que não é dele. O ajuste correto recalcula o **total
> possível** daquele participante e compara todos por **nota relativa**, não por soma absoluta.

Num caso executado, o participante afetado pelo conflito terminou em primeiro lugar justamente
porque a base de comparação foi ajustada. Se a apuração tivesse ficado na soma bruta, ele teria
ficado em posição intermediária, e o resultado publicado seria consequência do conflito e não do
mérito. A exclusão do voto é a parte fácil; o ajuste do denominador é o método.

O registro do conflito entra na memória de cálculo com três elementos: qual vínculo, quem comunicou,
e qual foi o ajuste. Nunca por nome de pessoa no entregável metodológico; por papel.

## 6. Dado pessoal

A base de uma auditoria de pesquisa carrega nome, telefone, ano de nascimento e escolaridade de
pessoas naturais, e o recontato é feito ligando para elas. Três regras de campo, além do que
`acta-way:anonimizacao-e-lgpd` já estabelece:

- **O papel de trabalho carrega o identificador, o relatório não.** No entregável, o registro é o
  número sequencial da amostra, nunca o nome ou o telefone.
- **O recontato se identifica como auditoria** e declara por que tem o número, na primeira frase.
- **O dado pessoal não muda de finalidade.** O telefone serve para confirmar a coleta e para mais
  nada.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Desenhar e operar pesquisa própria | `acta-pesquisa-salarial` |
| Testar controle interno do operador | `acta-controles-internos` |
| Método, papel de trabalho, achado | `acta-metodo-auditoria` |
| Classificar risco na taxonomia da casa | `acta-gestao-de-riscos` |
