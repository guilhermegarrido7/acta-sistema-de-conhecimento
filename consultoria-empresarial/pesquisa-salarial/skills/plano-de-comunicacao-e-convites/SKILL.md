---
name: plano-de-comunicacao-e-convites
description: Conduza a comunicação com as empresas participantes, do convite à confirmação. Acionar ao definir identidade da pesquisa e contrapartida, ao redigir carta-convite e FAQ, ao operar cadência de follow-up, ou ao substituir participante que declinou.
---

# Plano de comunicação e convites

Carregue `metodo-pesquisa-salarial` antes desta skill: a regra R3 e os mínimos de
agregação da seção 4 são o conteúdo que a carta-convite promete ao participante, e não
são repetidos aqui.

Etapa 4 do ciclo. Começa com o painel aprovado e termina com confirmações suficientes
para abrir a coleta. É a etapa que determina a taxa de resposta, e taxa de resposta é o
que decide se a pesquisa vai poder publicar os recortes prometidos.

## 1. As seis decisões do plano

O plano de comunicação é um documento de decisão submetido ao patrocinador, com as
opções e a recomendação da ACTA em cada eixo. Não é um texto de convite. Levar as seis
decisões juntas evita a reabertura de uma delas no meio da coleta.

**Identidade da pesquisa.** O convidado sabe quem contratou, ou a pesquisa é conduzida
pela ACTA sem revelar o contratante? Revelar aumenta a adesão quando o cliente é
referência no setor e reduz quando ele é concorrente direto de quem se quer convidar.
Pesquisa identificada exige que o cliente aceite aparecer; pesquisa não identificada
exige que a ACTA responda sozinha pela credibilidade do painel.

**Contrapartida.** O que o participante recebe por fornecer dado. O padrão é o relatório
individual, com o posicionamento da empresa contra a mediana do seu recorte. A decisão a
tomar é a granularidade dessa devolutiva, e ela precisa ser decidida agora porque define
o desenho do instrumento e o esforço da etapa 12. Contrapartida genérica derruba adesão;
contrapartida ampla demais vira projeto dentro do projeto.

**Granularidade do que se devolve.** Quais cortes o participante vê, e quais não vê.
Devolver o recorte inteiro é padrão. Devolver corte por cargo individual só é possível
onde o mínimo de agregação for atendido, e prometer isso antes de saber o n é como se
cria a promessa impossível de cumprir.

**Tom e canal.** Quem assina o convite (sócio, responsável técnico, ou o patrocinador do
cliente), por qual canal chega, e se há contato telefônico prévio. Convite frio por
e-mail tem a pior conversão de todas as combinações. Ligação prévia de quem tem relação
com o interlocutor é o que mais move a taxa de resposta, e não custa nada além de
agenda.

**Sigilo.** Qual instrumento protege o dado do participante: NDA bilateral, termo de
confidencialidade unilateral da ACTA, ou cláusula no próprio convite. Defina também o
prazo de retenção do dado e o que acontece com ele no encerramento. Participante de
pesquisa de remuneração decide participar com base nessa resposta, não com base no
design do formulário.

**Cronograma de campo.** Data de disparo, janela de resposta, datas dos follow-ups e
corte de encerramento. O corte é definido aqui e comunicado no convite, não negociado
depois com quem atrasou.

## 2. O kit de comunicação

Quatro peças, produzidas antes do primeiro disparo. Escrever tudo depois de começar a
convidar produz versões divergentes entre participantes, e a divergência aparece quando
dois interlocutores conversam entre si.

| Peça | Função | Extensão |
| --- | --- | --- |
| Carta-convite | Pedir a participação e responder à pergunta do sigilo antes que ela seja feita | Uma página |
| FAQ | Responder por escrito as objeções previsíveis, para que a resposta seja igual para todos | Duas páginas |
| Termo de sigilo | Instrumento definido na decisão de sigilo | Conforme o jurídico |
| Guia do respondente | O que será pedido, quanto tempo leva, quem na empresa precisa participar | Uma página |

O guia do respondente é a peça mais subestimada. O interlocutor de RH precisa saber, na
hora de aceitar, se vai conseguir levantar o dado internamente. Sem essa informação ele
não recusa: ele aceita e some, o que é pior, porque consome a janela de coleta.

## 3. O que a carta-convite precisa conter

- Quem conduz a pesquisa e, conforme a decisão de identidade, quem a contratou.
- Objeto e abrangência em uma frase, incluindo se há benefícios e remuneração variável.
- O recorte no qual aquela empresa foi classificada, e por que ela foi convidada. O
  convidado quer saber com quem está sendo comparado.
- A contrapartida, descrita pelo que ela contém, não pelo nome.
- As regras de sigilo em linguagem direta: dado agregado, mínimo de empresas por
  estatística publicada, nenhuma empresa nominalmente associada a valor, supressão
  quando o mínimo não for atingido. Este bloco é o que converte o convite.
- Esforço estimado e janela de resposta, com a data de corte explícita.
- Nome e contato direto de uma pessoa da ACTA para dúvidas.
- Prazo de retenção e destino do dado ao fim do projeto.

Redação padrão pode ser produzida com apoio de IA, com revisão de tom e de fato antes do
envio. Nenhum nome de participante e nenhum dado de remuneração entra na ferramenta.

## 4. Cadência de follow-up

Follow-up é o que tira a conversão de 20% e leva a 50%. Opere por cadência definida no
plano, com o registro em `B3_PAINEL_PARTICIPANTES` a cada contato.

| Momento | Ação | Canal |
| --- | --- | --- |
| Antes do disparo | Contato prévio de quem tem relação com o interlocutor, avisando que o convite chega | Telefone ou mensagem |
| D0 | Disparo do convite com o kit completo | E-mail nominal, nunca lista oculta |
| D+4 | Confirmação de recebimento para quem não respondeu | E-mail curto, mesma thread |
| D+10 | Contato por voz para quem não respondeu nem recusou | Telefone |
| Meio da janela | Aviso de prazo, com oferta de apoio no preenchimento | E-mail |
| D-3 do corte | Último aviso, com a consequência declarada de forma neutra | E-mail e telefone |

Quem confirmou e não entregou é assunto da etapa `conducao-da-coleta`, não desta. Aqui o
objetivo termina na confirmação.

Registre `status_convite` usando o domínio fechado `Dom_StatusConvite` (Não convidada,
Convidada, Confirmada, Declinada, Sem resposta, Substituída), mais `data_convite`,
`data_resposta` e número de follow-ups. Status em texto livre destrói o controle de
participação em duas semanas.

## 5. Recusa e substituição

Recusa é informação, não perda. Pergunte o motivo e registre-o: receio concorrencial,
falta de estrutura para levantar o dado, política corporativa, momento ruim. O padrão de
recusa muda o desenho da próxima edição da pesquisa e o argumento da carta-convite.

A substituição aciona a reserva da mesma célula de comparabilidade, definida na etapa
anterior. Regras:

- Substituir dentro do mesmo recorte e da mesma faixa de porte. Substituição que muda a
  composição do recorte anula a justificativa aprovada pelo patrocinador.
- Se as reservas daquele recorte se esgotarem, isso é escalonamento ao patrocinador, com
  a opção de ampliar o painel ou acionar a regra de recorte insuficiente. Não é decisão
  do consultor de campo.
- Toda substituição vira linha no log de auditoria, com data, quem saiu, quem entrou e
  por quê.

Acompanhe a conversão por recorte, não no agregado. O agregado esconde o recorte que
está afundando, e o recorte que afunda é o que vai gerar a conversa difícil na
apresentação.

## 6. Artefato produzido e onde ele é gravado

| Artefato | Onde vive |
| --- | --- |
| Plano de comunicação com as seis decisões e a recomendação da ACTA | Documento de decisão do patrocinador, anexo de ata |
| Kit de comunicação (carta, FAQ, termo, guia) | Repositório do projeto, versionado, uma versão por edição da pesquisa |
| Controle de participação atualizado | `B3_PAINEL_PARTICIPANTES`, campos de status, datas e follow-ups |
| Termos de sigilo assinados | Repositório seguro, com `nda_assinado` e `data_nda` refletidos em B3 |
| Motivos de recusa e substituições | `B10_LOG_AUDITORIA` |
| Relatório de conversão por recorte | Atualizado a cada follow-up, insumo do comitê |

## 7. Gate de qualidade da etapa

- As seis decisões do plano tomadas e registradas por escrito pelo patrocinador.
- Kit de comunicação completo e revisado antes do primeiro disparo.
- Regras de sigilo e mínimos de agregação declarados na carta-convite, em linguagem que
  o interlocutor entende sem consultar o jurídico.
- Convites disparados nominalmente, com o registro de data por empresa.
- Confirmações atingindo, em cada recorte, o número dimensionado na etapa anterior, ou o
  déficit escalado ao patrocinador com plano de ação.
- Instrumento de sigilo assinado por todos os confirmados antes do envio do formulário.
- `status_convite` preenchido para todas as empresas do painel, sem campo vazio.
- Motivo de recusa registrado para cada declínio.
- Contrapartida e granularidade da devolutiva acordadas e comunicadas de forma idêntica
  a todos os participantes.

## 8. Erros a evitar

- Disparar convite antes de decidir a contrapartida. O convidado pergunta na primeira
  resposta, e improvisar cria promessas diferentes por participante.
- Prometer devolutiva por cargo individual sem saber se o n vai permitir.
- Enviar convite em cópia oculta para a lista inteira. Além de impessoal, revela a
  existência do painel a quem ainda não aceitou participar.
- Deixar o sigilo para o anexo. É a primeira preocupação de quem vai ceder dado de
  remuneração, e precisa estar no corpo da carta.
- Tratar follow-up como opcional por desconforto. A diferença entre painel que fecha e
  painel que não fecha está aí.
- Substituir participante por outro de recorte ou porte diferente para preencher vaga.
- Acompanhar conversão só no total do painel.
- Negociar extensão de prazo individual com quem atrasou, sem mover o corte para todos.
  A data de corte publicada no convite é o que sustenta o cronograma da coleta.
