---
name: painel-de-participantes
description: Componha e feche o painel de empresas participantes da pesquisa. Acionar ao definir critérios de comparabilidade, ao dimensionar o número de convites, ao obter aprovação formal do painel, ou ao decidir consolidação de recorte com amostra insuficiente.
---

# Painel de participantes

Carregue `metodo-pesquisa-salarial` antes desta skill: os mínimos de agregação da seção 4
determinam quantas empresas o painel precisa ter para que o resultado possa ser
publicado, e não são repetidos aqui.

Etapa 3 do ciclo. O painel é o produto da pesquisa tanto quanto a estatística. Um painel
mal composto produz número tecnicamente correto e comercialmente inútil, porque compara
o cliente com quem ele não disputa talento.

## 1. O painel é uma decisão de comparabilidade

A lista que o cliente entrega é ponto de partida, nunca painel final. Ela costuma
refletir o setor formal do cliente e o mapa mental do RH, e quase nunca o mercado real de
disputa de talento. O trabalho desta etapa é transformar uma lista de simpatia em um
painel defensável cargo a cargo.

O teste é direto: para cada cargo crítico, pergunte de onde o cliente contrata e para
onde ele perde gente. Se as empresas dessas duas respostas não estiverem no painel, o
painel está errado, por mais que a lista tenha ficado bonita.

## 2. Critérios de comparabilidade

Aplique os eixos definidos no cartão de identidade, com o peso que o projeto exigir.
Nenhum eixo decide sozinho, e um eixo que não muda nada não deve entrar.

| Eixo | O que observar | Quando pesa mais |
| --- | --- | --- |
| Porte | Headcount, faturamento, e a medida física do setor quando existir | Cargos de gestão, onde escala é o que define o nível |
| Setor e subsetor | Atividade fim, regulação aplicável, estrutura de custo de pessoal | Cargos técnicos com formação regulada |
| Região | Mercado de trabalho local, custo de vida, convenção coletiva aplicável | Cargos operacionais e administrativos |
| Maturidade de gestão de pessoas | Existência de estrutura de cargos, política formal, prática de variável | Sempre, porque define se o participante consegue responder o instrumento |
| Natureza jurídica e regime | Privado, terceiro setor, participação pública, teto de remuneração aplicável | Quando o cliente tem população sujeita a regime distinto |

O mercado relevante de um cargo corporativo raramente é o mesmo do cargo de atividade
fim. Cliente de setor especializado costuma ter a lacuna previsível: faltam comparáveis
corporativos de grande porte de fora do seu setor, porque é de lá que vem o diretor
financeiro e o gerente de TI. Procure ativamente essa lacuna, ela existe em quase todo
projeto e não aparece sozinha.

## 3. O protocolo de composição

1. **Herdar** a lista indicada pelo cliente, com a justificativa dele por empresa. Peça a
   justificativa explicitamente: o motivo pelo qual uma empresa está na lista é
   informação de comparabilidade.
2. **Aplicar os critérios** da seção 2 a cada empresa, atribuindo uma justificativa
   textual de comparabilidade. Empresa sem justificativa escrita não entra.
3. **Procurar as lacunas** que a lista do cliente não cobre, cruzando com os cargos
   críticos. Proponha as empresas que faltam, com o motivo.
4. **Dimensionar os convites** contra a taxa histórica de resposta (seção 4).
5. **Classificar em titular e reserva**, para que a substituição na etapa de convites
   seja execução e não nova rodada de aprovação.
6. **Submeter à aprovação formal** do patrocinador antes de qualquer contato com
   participante.

## 4. Dimensionar convites, não desejos

O erro que mais mata pesquisa de remuneração é convidar contra a meta em vez de convidar
contra a taxa de conversão. A meta é o mínimo amostral, e o mínimo amostral é piso de
publicação, não alvo de convite.

Conversão observada em pesquisa proprietária de primeira edição fica entre 40% e 60% dos
convites. A prática padrão é convidar pelo menos 50% acima do mínimo amostral do recorte,
e mais que isso quando qualquer destas condições valer:

- Primeira edição da pesquisa, sem relação prévia com os convidados.
- Painel de empresas que competem diretamente entre si, onde a recusa por receio
  concorrencial é mais provável.
- Instrumento longo, com bloco de benefícios e de remuneração variável.
- Janela de coleta coincidindo com fechamento de exercício ou com negociação de
  convenção coletiva.

Dimensione recorte a recorte, nunca no total. Painel com trinta e seis convites
distribuídos mal entre três recortes fecha dois e derruba um, e o recorte derrubado é
justamente aquele que o cliente esperava.

## 5. Decidir agora o que fazer com recorte insuficiente

Esta decisão é tomada nesta etapa, com o painel na mão, e nunca depois da coleta. Depois
da coleta ela deixa de ser decisão metodológica e vira conveniência para salvar um
número, o que é exatamente o que a regra R2 proíbe.

| Opção | Efeito | Quando preferir |
| --- | --- | --- |
| Consolidar o recorte pequeno no recorte vizinho mais próximo | O vizinho atinge o mínimo com folga, e se perde granularidade local | Quando a disputa por talento naquele recorte é regional e não hiperlocal |
| Manter o recorte isolado, abaixo do mínimo | Resultado publicado com a marca de amostra insuficiente, sem mínimo e máximo | Só quando o cliente tem unidades ali com decisão salarial própria e a granularidade é indispensável |

Registre a escolha no log de auditoria com a justificativa, e informe o cliente por
escrito. Quem descobre na apresentação que um recorte não será publicado entende isso
como falha de execução, mesmo quando a regra estava acordada.

## 6. Registrar o painel em B3

`B3_PAINEL_PARTICIPANTES` é dimensão, grão de uma instituição convidada. A estrutura de
campos está em `references/01-mapa-arquivos-e-bases.md`, Parte B.1. Quatro convenções de
preenchimento merecem atenção nesta etapa:

- Cada empresa recebe `EMP-##` na entrada e passa a ser referida só por esse código em
  toda base, entregável e conversa com ferramenta de IA. A tabela que liga código a nome
  real fica em arquivo separado, de acesso restrito.
- `justificativa_comparabilidade` é campo de texto obrigatório e é o que se responde
  quando o cliente perguntar, na apresentação, por que essa empresa está no painel e
  aquela não. Escrever depois é reconstruir memória.
- `origem_indicacao` distingue a empresa vinda do cliente da vinda da ACTA. É o que
  permite reportar a composição do painel com honestidade na nota metodológica.
- `flag_reserva` separa titular de reserva desde a aprovação, e `status_convite` começa
  em Não convidada para todas.

## 7. Artefato produzido e onde ele é gravado

| Artefato | Conteúdo | Onde vive |
| --- | --- | --- |
| Matriz de amostragem | Uma linha por empresa, com eixos de comparabilidade, justificativa, recorte, titular ou reserva | `B3_PAINEL_PARTICIPANTES`, camada 1 |
| Documento de aprovação do painel | Painel proposto, lacunas endereçadas, dimensionamento por recorte, regra de recorte insuficiente | Anexo de ata, assinado pelo patrocinador |
| Tabela de identificação `EMP-##` | Código contra nome real | Arquivo separado, acesso restrito, fora do fluxo das bases |
| Decisão de recorte insuficiente | Opção escolhida e justificativa | `B10_LOG_AUDITORIA` |

## 8. Gate de qualidade da etapa

- Painel aprovado formalmente pelo patrocinador, por escrito, antes de qualquer convite.
- Toda empresa com justificativa de comparabilidade escrita e recorte atribuído.
- Número de convites por recorte dimensionado contra a taxa de conversão, não contra o
  mínimo amostral.
- Lacunas de comparabilidade dos cargos críticos identificadas e endereçadas, ou
  declaradas como aceitas pelo cliente.
- Reservas definidas e ordenadas, com o critério de acionamento acordado.
- Regra de recorte com amostra insuficiente decidida e registrada.
- `EMP-##` atribuído a todas as empresas, com a tabela de identificação já segregada.
- Nenhum nome de empresa participante circulando em base, apresentação ou ferramenta de
  IA a partir daqui.

## 9. Erros a evitar

- Aceitar a lista do cliente como painel final porque ela veio do patrocinador.
- Convidar exatamente o mínimo amostral e torcer.
- Dimensionar convites no agregado em vez de recorte a recorte.
- Compor painel olhando o setor formal em vez do mercado de disputa de talento por
  cargo crítico.
- Começar a convidar antes da aprovação formal. Convite enviado não volta, e painel
  reprovado depois de convidado queima o relacionamento com quem ficou de fora.
- Deixar a justificativa de comparabilidade para escrever na nota metodológica. Ela é
  insumo desta etapa, não redação da etapa 10.
- Adiar a decisão de recorte insuficiente para quando o problema aparecer.
- Manter nome de empresa nas planilhas de trabalho por comodidade.
