---
name: matriz-e-mapa-de-calor
description: Construa a matriz de risco e o mapa de calor, posicione risco inerente e residual, corte o mapa pela linha de apetite e obrigue cada figura a dizer o que muda de decisão. Acionar ao montar a matriz 4x4, ao plotar inerente contra residual, ao escolher as cores e os cortes do mapa, ou ao preparar a leitura do mapa para o conselho.
---

# Matriz e mapa de calor

Carregue `avaliacao-impacto-probabilidade` antes: a grade só existe se as duas escalas estiverem
ancoradas. Mapa bonito sobre escala frouxa é o entregável mais perigoso desta disciplina, porque
tem aparência de rigor e transporta a frouxidão inteira até a mesa do conselho.

## 1. A grade

Quatro por quatro. Impacto no eixo vertical, probabilidade no horizontal, nível 1 na origem.

Quatro por quatro, e não cinco por cinco, pela razão da escala par de `avaliacao-impacto-probabilidade`
§3: sem centro, não há casa neutra para onde a nota indecisa escorrega. A grade 5x5 tem uma casa
central que costuma concentrar sozinha um terço dos riscos de um mandato.

**Não multiplique impacto por probabilidade.** O produto é a prática mais difundida e a mais
enganosa da disciplina. Ele empata 4x1 com 1x4 e com 2x2, que são três situações que exigem
respostas diferentes: o primeiro é um evento raro que pode quebrar a empresa e pede transferência ou
plano de contingência; o segundo é um incômodo frequente e barato que pede melhoria de processo; o
terceiro é rotina. Um número só apaga essa distinção, e a apaga justamente na linha de cima, que é
onde a decisão está.

Use **zonas**, e não pontuação:

| Zona | Casas | O que significa |
|---|---|---|
| Crítica | Impacto 4 com probabilidade 3 ou 4; impacto 3 com probabilidade 4 | Resposta obrigatória, com dono e prazo, e reporte ao conselho |
| Alta | Impacto 4 com probabilidade 1 ou 2; impacto 3 com probabilidade 2 ou 3; impacto 2 com probabilidade 4 | Resposta obrigatória, aprovação no nível executivo |
| Moderada | Diagonal restante | Resposta ou aceitação formal, com registro |
| Baixa | Impacto 1 ou 2 com probabilidade 1 ou 2 | Aceitação registrada, monitoramento por exceção |

**A zona de impacto 4 com probabilidade 1 merece nome próprio no relatório.** É o evento raro e
devastador, e é onde a multiplicação mais engana: ele sai com nota 4, empatado com a rotina, e some
da priorização. Continuidade de negócio, incêndio, perda do executivo principal e ataque
cibernético crítico vivem aí, e todos exigem resposta, ainda que a resposta seja transferência ou
plano de contingência em vez de controle preventivo.

## 2. A linha de apetite

A linha de apetite é o que transforma a grade em instrumento de decisão. Ela é traçada sobre o mapa
a partir da declaração de `apetite-e-tolerancia`, e divide o que exige resposta do que pode ser
aceito.

A linha se move por componente, e essa é a razão de declarar apetite separado para os quatro. Uma
Companhia com apetite baixo em Regulamentar e moderado em Estratégico tem duas linhas em posições
diferentes, e o mesmo par 3x3 exige resposta num componente e aceitação registrada no outro. Mapa
com linha única para os quatro componentes está descartando a declaração de apetite que custou meia
manhã de conselho.

**Mapa sem linha de apetite é infográfico.** Ele mostra onde os riscos estão e não diz se isso é
aceitável, que é a única pergunta que o conselho vai fazer.

## 3. Inerente contra residual

Plote os dois no mesmo mapa, com uma seta do inerente ao residual. É a figura de maior densidade de
informação do entregável inteiro, porque ela não mostra risco: mostra **o efeito do controle**.

Quatro leituras, e as quatro são achado:

**Seta longa.** O controle funciona e o inerente era alto. É o controle a proteger em qualquer corte
de custo, e vale dizer isso com essas palavras no relatório, porque é exatamente o controle que
parece dispensável justamente por estar funcionando.

**Seta curta ou ausente em risco alto.** O controle não existe, ou existe e não muda nada. É a
prioridade do plano de resposta, e a pergunta imediata é se o controle está ausente ou apenas
inefetivo, que são diagnósticos com respostas distintas.

**Seta que atravessa a linha de apetite.** O controle é o que mantém o risco dentro do apetite. Ele
é crítico por definição, e a falha dele estoura a política. Esses controles precisam de monitoramento
próprio, e é daqui que costuma sair a melhor lista de KRI de `monitoramento-e-kri`.

**Seta uniforme em todo o mapa.** Todos os riscos caíram exatamente um nível. Isso não é um retrato
da realidade, é o artefato descrito em `avaliacao-impacto-probabilidade` §6: as duas notas saíram na
mesma conversa e a inerente foi reconstruída para trás. Refaça o inerente em sessão separada.

**Residual acima do inerente é erro de preenchimento**, e não uma descoberta. Acontece quando o
avaliador interpretou inerente como "o que acontece em condições normais". Vale a verificação
mecânica antes de gerar a figura.

## 4. Cinco erros de construção

**Plotar as 52 categorias.** O mapa comporta de quinze a vinte e cinco pontos antes de virar mancha.
Acima disso, plote o risco priorizado e leve o registro completo para o anexo. Mapa ilegível não é
completo, é inútil.

**Bolha proporcional a um terceiro eixo.** Tamanho de bolha por exposição financeira, por
velocidade ou por qualquer outra dimensão parece sofisticado e é lido errado por todo mundo, porque
a percepção de área não é linear. Se a terceira dimensão importa, faça um segundo mapa.

**Cor sem correspondência com zona.** Verde, amarelo e vermelho têm de sair da tabela de zonas da
§1, e não do gradiente automático da ferramenta. Gradiente contínuo sugere precisão que a escala
não tem.

**Mapa por área em vez de por componente.** Tenta agradar a organização e destrói a comparação. A
visão por área é uma segunda figura, derivada, e não a principal.

**Mapa sem data e sem escopo na própria figura.** Mapa circula solto por dois anos. Data de
avaliação, população de riscos e escopo vão no rodapé da figura, não só no corpo do relatório.

## 5. O erro que decide a qualidade do trabalho

O mapa de calor é a peça mais requisitada e a mais inútil quando entregue sozinha. Ele não conclui
nada. Ele localiza.

Todo mapa entregue pela casa vem acompanhado de três frases, e a ausência delas é motivo de devolver
o entregável:

1. **O que está acima da linha de apetite e, portanto, exige resposta.** Com a lista nominal dos
   riscos, não só a mancha.
2. **O que mudou desde a última avaliação, e por quê.** Risco que entrou, risco que saiu, risco que
   se moveu. Se for o primeiro mapa, diga que é o primeiro e que a comparação começa no próximo.
3. **Qual decisão a Companhia precisa tomar agora por causa deste mapa.** Aprovar o plano de
   resposta dos riscos críticos, alocar orçamento, aceitar formalmente um risco, contratar seguro.
   Se não houver decisão pendente, o mapa não precisava ter sido feito.

**O teste de descarte.** Cubra o mapa com a mão e leia o resto do relatório. Se a conclusão continua
a mesma, o mapa é ilustração. Isso é aceitável, desde que seja sabido, e não é aceitável quando o
mapa foi o produto principal de seis semanas de trabalho.

A pergunta que o conselho faz e que costuma pegar o consultor desprevenido: "e o que vocês acham que
a gente deveria fazer?". O mapa não responde. Quem responde é `planos-de-resposta`, e é por isso que
o mapa nunca é o último entregável de um mandato de implantação.

## O que entregar

1. A matriz 4x4 com as zonas definidas e a linha de apetite traçada, por componente.
2. O mapa com os riscos priorizados, inerente e residual, com seta entre os dois.
3. As quatro leituras de seta da §3, escritas, com os controles críticos identificados.
4. As três frases da §5.
5. O registro completo no anexo, com todos os riscos avaliados, inclusive os que não entraram na
   figura e os que estão em Limitação de Escopo.

## Próximo passo

`planos-de-resposta`, para converter o que está acima da linha de apetite em resposta com dono e
prazo.
