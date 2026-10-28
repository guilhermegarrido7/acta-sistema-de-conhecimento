---
name: insight-e-recomendacao
description: Transforme o resultado da análise em recomendação pronta para decisão, ligando o número à ação e sustentando a causa. Acionar ao fechar um projeto de analytics, ao converter dado em recomendação, ao escrever a leitura de um painel para a diretoria, ou ao separar o que o dado mostra do que ele prova.
---

# Insight e recomendação

Carregue `acta-metodo-consultoria:defesa-tecnica-e-limitacoes` antes desta skill: a defesa técnica
do número e o registro de limitações valem aqui integralmente. Esta é a skill que fecha o plugin, e a que justifica todas as
anteriores: sem ela, o projeto entregou uma ferramenta, não uma decisão.

O deliverable de analytics em consultoria **é a decisão, não o painel**. O cliente não contratou um
dashboard; contratou a resposta a uma pergunta de negócio e o que fazer com ela. Um projeto que
entrega o modelo e para no gráfico deixou o trabalho mais difícil — interpretar — para quem menos tem
tempo e contexto para fazê-lo.

## 1. Da análise ao insight: três níveis

Nem todo número é insight, e nem todo insight é recomendação. A escada:

| Nível | O que é | Exemplo |
|---|---|---|
| **Dado** | O que a base mostra | "A unidade X teve resultado de −R$ 2 MM" |
| **Insight** | O que o dado revela, com a causa | "A unidade X só é deficitária depois de eliminado o fee da holding; na operação, ela cobre custo" |
| **Recomendação** | O que fazer, e por quê | "Rever a política de fee intercompany: ela mascara o resultado real de X e distorce a decisão de continuar ou fechar" |

A regra: **todo projeto sobe a escada até a recomendação.** Parar no dado é relatório de sistema;
parar no insight é análise sem consequência. A recomendação é o que a diretoria consegue aprovar e
mandar executar.

## 2. A disciplina da causa: o que o dado mostra × o que ele prova

O erro mais caro do analytics é confundir correlação com causa, e vender a primeira como a segunda. A
base mostra que duas coisas andam juntas; ela não prova que uma causa a outra. A disciplina:

- **Declare o que o dado sustenta e o que é hipótese.** "O gasto com cartão fora de política cresceu
  40%" é dado. "Porque o controle de aprovação afrouxou" é hipótese — plausível, mas a base de cartão
  não a prova sozinha; precisa do dado de aprovação.
- **Separe o número do juízo.** O número é da base validada; o juízo é seu, e se declara como juízo.
  Misturar os dois faz o cliente derrubar o número junto com a opinião quando discorda da opinião.
- **A recomendação carrega a incerteza.** Recomendação sobre insight comprovado é diferente de
  recomendação sobre hipótese a testar. Diga qual é qual; a diretoria decide com o grau de confiança
  à vista.

Isto é a defesa técnica do `acta-metodo-consultoria` aplicada ao analytics: o número se sustenta na
base validada, a causa se sustenta na evidência disponível, e o que falta de evidência se declara
como limitação, não se preenche com narrativa.

## 3. Como a recomendação se apresenta

A recomendação fecha o ciclo que começou na pergunta de negócio (`diagnostico-e-escopo-de-dados`).
Ela responde, em ordem:

1. **A resposta à pergunta**, direta, com o número que a sustenta.
2. **A causa**, separando o comprovado do provável.
3. **A ação recomendada**, com o impacto estimado e o que ela exige.
4. **A limitação**, honesta: o que a análise não cobriu, o dado que faltou, a hipótese não testada.

O formato segue `acta-way:redacao-acta` e, no deck, `acta-way:identidade-visual`. A recomendação de
consultoria tem título-asserção (a frase afirma a conclusão, não descreve o gráfico): "A unidade X
cria valor operacional; o prejuízo é artefato do fee intercompany" diz mais que "Análise de resultado
por unidade".

## 4. A lente AI-first

O agente monta a escada até o insight — lê o painel, identifica o padrão, propõe a causa provável a
partir dos dados disponíveis, redige a primeira versão da recomendação com título-asserção. É muito
trabalho de síntese que ele adianta. **Mas a recomendação é o ponto de julgamento mais alto do
projeto, e é onde o humano decide de fato**: validar a causa, assumir o juízo, calibrar a confiança,
e responder pela recomendação diante do cliente. O agente propõe a leitura; o consultor assume a
recomendação. Recomendação de consultoria tem dono humano — é o que o cliente está pagando e é quem
responde se ela estiver errada.

## O que entregar

1. A resposta à pergunta de negócio do escopo, direta, com o número da base validada que a sustenta.
2. A causa, separando o que o dado prova do que é hipótese a testar.
3. A recomendação acionável, com impacto estimado e o que ela exige para executar.
4. As limitações: o que não foi coberto, o dado que faltou, a hipótese não comprovada.
5. O deck ou documento final no padrão da casa, com título-asserção, dono humano da recomendação.

## Próximo passo

Fecha o ciclo do plugin. O que se aprendeu (dicionário de classificação novo, armadilha de
consolidação, fonte que não reconcilia) realimenta o método, e o estado do engajamento vai para o
checkpoint de `acta-way`. Se o trabalho é recorrente, a decisão de pipeline de
`modelo-analitico-e-visualizacao` §3 é o que mantém o valor vivo depois da entrega.
