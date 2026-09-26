---
name: conducao-da-coleta
description: Opere o campo da pesquisa até a base bruta estar completa. Acionar ao abrir o campo, ao triar retorno de participante, ao sanear resposta incompleta ou implausível, ao operar cobrança e escalonamento, ou ao declarar o corte de encerramento da coleta.
---

# Condução da coleta

Etapa 6. Começa quando o instrumento está homologado e os convites confirmados, e
termina quando `B5_COLETA_BRUTA` está fechada. É a etapa de menor densidade técnica
e maior risco de cronograma: nada aqui é difícil, e é exatamente por isso que
escorrega.

Carregue `metodo-pesquisa-salarial` antes desta skill. A fronteira com as etapas
vizinhas: o convite e a confirmação de participação são de
`plano-de-comunicacao-e-convites`; o desenho do formulário é de
`instrumento-de-coleta`; a normalização e os checks são de
`tratamento-e-validacao-da-base`. Aqui se trata de operar o campo e de decidir
quando ele fecha.

## 1. Antes do primeiro envio

Cinco definições que se fecham em uma reunião e evitam metade dos problemas do
campo:

| Definição | Critério |
| --- | --- |
| Janela de coleta | Data de abertura e prazo declarado ao participante. Prazo padrão de 15 dias corridos, nunca aberto |
| Data teto | A data em que o campo fecha independentemente da cobertura. Deriva do cronograma contratado, não da coleta |
| Canal único | Um endereço de retorno e um responsável nomeado. Retorno que chega em três caixas diferentes se perde |
| Repositório | Pasta de acesso restrito, provisionada e testada, para receber arquivo com dado de terceiro |
| Responsável de campo | Um consultor, com nome, que responde pelo controle diário. Campo sem dono para em três dias |

A janela declarada é curta de propósito. Prazo longo não aumenta a taxa de
resposta, adia o início do trabalho de todo mundo e concentra os retornos no
último dia de qualquer forma.

## 2. Controle de campo

O controle vive em `B3_PAINEL_PARTICIPANTES`, no campo `status_convite` com os
valores de `Dom_StatusConvite`, mais `data_convite`, `data_resposta` e
`nº_follow_ups`. Atualizar no dia em que o evento acontece, não em lote na
sexta-feira.

Quatro indicadores, revistos duas vezes por semana:

1. **Taxa de retorno**: respondentes sobre confirmados. Referência de conversão em
   pesquisa proprietária de primeira edição, entre 40% e 60% dos convites.
2. **Cobertura por recorte**: empresas distintas com retorno válido em cada recorte,
   contra o mínimo amostral do cartão de identidade. É o indicador que decide o
   encerramento, e o único que importa de verdade.
3. **Cobertura por cargo crítico**: quantos dos cargos marcados como críticos já
   têm observação suficiente. Um recorte completo com os cargos errados não resolve
   a pergunta do cliente.
4. **Fila de saneamento**: retornos recebidos e ainda não aceitos. Fila que cresce
   significa que a triagem parou, e retorno parado envelhece: quanto mais tarde se
   pergunta, menor a chance de o participante responder.

Quando a cobertura de um recorte estiver claramente abaixo do mínimo na metade da
janela, acione o plano acordado na Etapa 1 (consolidar com recorte vizinho, ou
manter isolado com a marca de amostra insuficiente). Decidir isso no fim do campo
é decidir sob pressão e sem alternativa.

## 3. Protocolo de recebimento

Todo retorno passa pelos mesmos quatro passos, na ordem, sem exceção para retorno
que "parece limpo":

1. **Registro.** Uma linha em `Log_Recebimento` com `cod_empresa`, data e hora,
   canal, nome do arquivo recebido e quem recebeu.
2. **Acuse em um dia útil.** Confirmação de recebimento ao participante, mesmo que
   a triagem ainda não tenha sido feita. Silêncio depois do envio é o que faz o
   participante não responder à rodada de saneamento.
3. **Carga em B5 sem edição manual.** O arquivo entra como veio. `B5_COLETA_BRUTA`
   é base imutável: nenhuma correção acontece nela, nem de acento, nem de casa
   decimal. Correção é coluna de B6, na Etapa 7.
4. **Arquivamento do original.** O arquivo recebido fica guardado com o nome
   original e o hash, no repositório restrito. É o que permite provar depois o que o
   participante informou.

Se o retorno vier em formato fora do instrumento (planilha própria do participante,
PDF, corpo de e-mail), converta para o layout do instrumento, grave a versão
convertida como carga e mantenha o original. A conversão é um evento de B10, com
autor e data.

## 4. Triagem em três passes

Aplicar na ordem. O primeiro passe que reprovar interrompe os seguintes, porque
retorno incompleto não vale plausibilidade.

**Passe 1, completude.** Os quatro obrigatórios mínimos preenchidos em toda linha
(valor, jornada, número de incumbentes, data de referência); o bloco A completo; os
blocos ativados no escopo presentes; `confirma_match` respondido em todas as
linhas.

**Passe 2, plausibilidade.** Rodar os mesmos testes que a validação de entrada faz,
porque retorno por planilha ou por conversão não passou por ela:

| Sinal | Leitura mais provável |
| --- | --- |
| Valor uma ordem de grandeza acima dos demais | Valor anual informado como mensal, ou centavos |
| Faixa fora de ordem, ou amplitude acima de 3 | Cargos distintos agrupados sob o mesmo título |
| Salário abaixo do piso declarado | Erro de digitação, ou valor proporcional a jornada parcial não declarada |
| Jornada em branco com regime de escala marcado | Campo não aplicável mal interpretado |
| Moeda ausente em projeto com C-25 ativo | Preenchimento na moeda local sem marcar |
| Todos os cargos com o mesmo valor | Preenchimento por faixa da tabela salarial, não por folha real |

**Passe 3, cobertura.** Quantos cargos do escopo o participante confirmou, quantos
marcou como parcial e quantos como "não temos". Retorno com proporção alta de match
parcial volta para `matching-cargos` antes de ser aceito, não depois da agregação.

Cada retorno recebe um status de triagem: aceito, em saneamento, ou recusado. O
status fica em `Log_Recebimento` com a data.

## 5. Saneamento com o participante

Regras que preservam a relação e o cronograma ao mesmo tempo:

- **Uma rodada consolidada, não três e-mails.** Junte todas as dúvidas do retorno em
  uma mensagem só, com a pergunta ao lado do dado que a motivou.
- **Pergunte o dado, não o erro.** "Confirma que o valor do cargo X é mensal?" em vez
  de "o valor do cargo X está errado". O participante está prestando um favor.
- **Prazo de 5 dias úteis** e teto de duas rodadas por participante. Depois disso,
  o que não foi esclarecido vira exclusão com motivo em B6, não estimativa.
- **Nunca preencha por ele.** Inferir a jornada ou a periodicidade que o participante
  não declarou é inventar dado de mercado, contra a regra R2.
- **Registre a resposta.** A correção informada vira evento em B10 e coluna de
  tratamento em B6, nunca sobrescrita de B5.

Retorno parcialmente aproveitável é aproveitado. Um participante que respondeu 40
dos 60 cargos entra na base com os 40, e os 20 ficam sem observação dele. Descartar
o retorno inteiro por incompletude parcial é perder amostra que já custou convite.

## 6. Cadência de cobrança e escalonamento

A cobrança aqui é do retorno de quem já confirmou participação. A cadência tem
quatro degraus, e cada degrau muda o canal ou o emissor, não só o texto:

| Degrau | Momento | Canal e emissor |
| --- | --- | --- |
| 1 | 5 dias após o envio | E-mail do consultor de campo, com o link ou o arquivo reenviado |
| 2 | 3 dias antes do prazo | Telefone ou mensagem ao interlocutor, com oferta de apoio no preenchimento |
| 3 | No prazo vencido | E-mail do responsável técnico, com prazo final de 5 dias e a data de encerramento declarada |
| 4 | 5 dias após o vencido | Sócio ao patrocinador do participante, apenas quando o participante for indicação direta do cliente ou peça central do recorte |

O degrau 4 gasta capital de relacionamento e não se usa para completar número. Usa
para participante cuja ausência inviabiliza um recorte. Antes de acioná-lo, verifique
se o custo é menor que o de ativar uma reserva.

Substituição por reserva: a partir do degrau 3 sem resposta, acione a empresa
marcada com `flag_reserva` no mesmo recorte e no mesmo critério de comparabilidade.
A substituta entra com a janela restante, não com uma janela nova, e a substituição
fica registrada em B3 e em B10. Reserva acionada no último terço da janela quase
nunca retorna a tempo; o momento útil de acionar é o degrau 3, não o 4.

## 7. O corte de encerramento

Encerrar é decisão, não consequência. Tem três critérios e a decisão é do
responsável técnico, registrada por escrito.

| Critério | Encerra quando |
| --- | --- |
| Cobertura | Todos os recortes atingiram o mínimo amostral, e os cargos críticos têm observação suficiente |
| Data teto | A data teto chegou, com a cobertura que houver |
| Custo marginal | Os últimos retornos não mudam nenhuma estatística publicável, e cada dia adicional atrasa a Etapa 7 sem ganho |

A declaração de encerramento é um documento curto, e é o que fecha a etapa:
data e hora do corte; quantas empresas foram convidadas, confirmaram e retornaram;
taxa de retorno por recorte; quais recortes ficaram abaixo do mínimo e o que se
decidiu para cada um; quais participantes ficaram em saneamento não concluído e como
foram tratados; quem decidiu. Retorno que chegar depois do corte não entra na base:
entra como nota na declaração, e a decisão de reabrir, se houver, gera novo corte
com nova declaração.

Esse documento é o insumo do item 1 da nota metodológica do relatório (composição da
amostra, convidadas, respondentes e taxa de resposta). Escrevê-lo agora, com os
números na mão, custa uma hora; reconstruí-lo na Etapa 10 custa um dia e sai errado.

## 8. Artefato e onde grava

| Artefato | Onde |
| --- | --- |
| Base bruta consolidada, imutável | `B5_COLETA_BRUTA`, aba `Coleta` |
| Registro de recebimento e triagem por participante | `B5_COLETA_BRUTA`, aba `Log_Recebimento` |
| Controle de campo atualizado | `B3_PAINEL_PARTICIPANTES` |
| Arquivos originais recebidos, com hash | Repositório restrito de dados de terceiros |
| Declaração de encerramento da coleta | `~~pasta de trabalho`, e evento em `B10_LOG_AUDITORIA` |
| Rodadas de saneamento e conversões de formato | `B10_LOG_AUDITORIA` |

## 9. Gate de qualidade da etapa

- [ ] Todo participante com status final em B3, sem ninguém em "Convidada" ou
      "Confirmada" na data do corte.
- [ ] Todo retorno recebido tem linha em `Log_Recebimento`, com status de triagem
      e data.
- [ ] Todo retorno aceito passou pelos três passes de triagem.
- [ ] Nenhuma célula de B5 foi editada depois da carga. A base bruta é idêntica ao
      que o participante informou.
- [ ] Todo arquivo original está arquivado com hash no repositório restrito.
- [ ] Nenhum campo obrigatório foi preenchido por inferência da equipe.
- [ ] Toda rodada de saneamento, conversão de formato e substituição de participante
      está em B10.
- [ ] Cobertura por recorte e por cargo crítico medida e registrada, com o
      tratamento decidido para cada recorte abaixo do mínimo.
- [ ] Declaração de encerramento escrita, com data, números e responsável.
- [ ] Dados de contato dos interlocutores permanecem em base segregada.

## 10. Erros a evitar

- Corrigir na base bruta. B5 é registro, e registro editado não prova nada.
- Deixar a triagem acumular para o fim do campo. Dúvida enviada duas semanas depois
  do retorno costuma não ser respondida.
- Encerrar por cansaço, sem declaração. Sem o corte registrado, o número de
  respondentes muda de versão para versão do relatório.
- Prorrogar a janela em silêncio, por participante. Prazo que todo mundo descobre
  ser flexível deixa de organizar o campo.
- Aceitar retorno em formato livre sem converter e sem guardar o original.
- Preencher jornada, periodicidade ou moeda ausente com o valor mais provável.
- Acionar reserva tarde demais para ela responder.
- Tratar match parcial em massa como problema da Etapa 7. Ele volta para revisão de
  matching enquanto o participante ainda está disponível.
