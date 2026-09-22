---
name: abertura-e-cartao-de-identidade
description: Abra o projeto preenchendo o cartão de identidade e diagnosticando os insumos do cliente. Acionar no kick-off, ao registrar particularidades estruturais que mudam a metodologia, ao inventariar as bases recebidas, ou ao avaliar a qualidade da base de cargos do cliente.
---

# Abertura e cartão de identidade

Carregue `metodo-pesquisa-salarial` antes desta skill: o cartão de identidade em branco,
as regras de ouro e os mínimos de anonimização estão lá e não são repetidos aqui. Esta
skill trata de como preencher o cartão e o que fazer com o que o preenchimento revelar.

Etapa 2 do ciclo. O propósito é simples de enunciar e difícil de executar: sair da
abertura sem nenhuma decisão metodológica em aberto. Toda decisão adiada aqui volta na
Etapa 7 ou 8, quando mudá-la custa recoletar dado.

## 1. O kick-off tem pauta fixa

Duas horas, com o patrocinador presente na primeira hora e o ponto focal operacional na
segunda. Pauta:

1. Confirmação da tríade de escopo fechada na proposta. Se o cliente descrever escopo
   diferente do contratado, pare a reunião e resolva antes de seguir.
2. Percurso do cartão de identidade, campo a campo, com o patrocinador. Os campos que
   ele não souber responder viram pendência com data, não suposição.
3. Caça às particularidades estruturais (seção 3 abaixo).
4. Entrega do checklist de insumos com responsável e data por item.
5. Acordo sobre a governança: quem aprova o painel, quem recebe a pré-leitura, com que
   frequência há comitê.

Saia da sala com a ata. O cartão preenchido a quatro mãos na reunião vale mais que o
cartão preenchido depois pelo consultor a partir da memória.

## 2. Preencher o cartão de identidade

O cartão é o contrato técnico do projeto. Placeholder `{{ }}` remanescente é etapa
aberta. Três campos concentram o risco e merecem atenção acima dos demais:

**Mínimo amostral por recorte.** Trate como piso de publicação, jamais como meta. O
padrão sugerido é 12 empresas respondentes por recorte, e o alvo de convites decorre dele, não o
contrário. Registrar esse número no cartão é o que permite dimensionar o painel na
etapa seguinte sem rediscussão.

**Critério de nivelamento.** Pergunte explicitamente o que diferencia os níveis de um
mesmo cargo. Pode ser senioridade convencional, qualificação acadêmica, tempo de casa
ou outro eixo, e pode variar por família. Assumir senioridade sem perguntar produz
matching que parece preciso e é arbitrário. Ver padrão 3.3 em `matching-cargos`.

**Segmentações obrigatórias internas.** Toda população interna do cliente cuja lógica
de remuneração seja distinta entra aqui, nominalmente. É o campo que aciona a regra R4
e o que impede que a estatística agregada misture regimes incomparáveis.

Moeda, regime de jornada e recortes definem quais módulos de cálculo ficam ativos no
projeto. Mais de uma moeda ativa `C-FX`. Presença de horista ativa `C-HOR`. Registre a
ativação no log, porque ela muda a normalização de toda a base.

## 3. Caçar as particularidades estruturais

Todo cliente tem pelo menos uma característica que muda uma decisão técnica do projeto.
Encontrá-la na abertura é barato; descobri-la depois da coleta custa recoleta. Faça as
cinco perguntas abaixo ao ponto focal, com a base de cargos aberta na frente.

| Pergunta | O que ela procura | Onde o achado vai parar |
| --- | --- | --- |
| Qual é o cargo mais alto da estrutura e como vocês o chamam? | Nomenclatura de topo sem equivalente de mercado | Padrão 3.1 de `matching-cargos`, coleta de headcount, orçamento e subordinação |
| Um cargo desse nome aqui cobre a empresa toda ou uma unidade? | Estrutura centralizada versus distribuída | `fator_escala` em B4, padrão 3.2 |
| O que diferencia o nível I do nível II nesse cargo? | Critério de nivelamento não convencional | Campo `criterio_nivelamento` do cartão e de B1, padrão 3.3 |
| Existe grupo de gente aqui cuja regra de salário é outra? | População interna heterogênea | Segmentação obrigatória do cartão, regra R4, padrão 3.4 |
| Quais desses cargos vocês acham que o mercado não tem? | Baixa prevalência esperada | Marcação de alto risco de amostra insuficiente, padrão 3.5 |

Registre cada particularidade encontrada na subseção do cartão, com a implicação
metodológica escrita ao lado. Particularidade anotada sem a implicação é curiosidade,
não decisão.

## 4. Inventariar os insumos

O checklist dos dez insumos de kick-off está em `references/01-mapa-arquivos-e-bases.md`,
Parte A.1, com a coluna do que cada um bloqueia. Não transcreva a lista, use-a. O que
importa na execução é o protocolo em volta dela:

- Cada insumo pendente vira uma linha de pendência no checkpoint do projeto, com
  responsável nominal do lado do cliente e data de compromisso.
- Insumo sem data firme é o melhor preditor isolado de atraso de cronograma. Trate a
  ausência de data como risco escalado, não como pendência comum.
- Os insumos 1 (cargos com descrição), 5 (repositório seguro) e 7 (decisão sobre
  identidade da pesquisa e contrapartida) bloqueiam etapas inteiras a jusante. Eles
  entram na pauta do primeiro comitê, sempre.

## 5. Diagnosticar a base de cargos recebida

Toda base de cargos de cliente chega com os mesmos sete tipos de problema,
independentemente do setor. O catálogo está na Parte A.2 do mapa de arquivos, com o
método de detecção de cada um. Aplique-o inteiro antes de qualquer matching e devolva os
achados ao cliente em um único documento, junto com o pedido das descrições faltantes.

Duas regras de corte que não admitem exceção:

- Cargo com duplicidade, senioridade inconsistente, grafia irregular, metadado essencial
  ausente ou sem correspondência esperada de mercado não entra em matching até ser
  esclarecido pelo cliente.
- Cargo sem ocupante é excluído da estatística com motivo padronizado registrado, nunca
  apenas observado em rodapé.

Devolver o diagnóstico cedo tem efeito colateral útil: mostra ao cliente que a qualidade
do dado de entrada é responsabilidade dele, e antecipa a conversa que, sem isso,
acontece na apresentação final.

## 6. Decisões que precisam sair da abertura

Além do cartão, a abertura fecha cinco decisões que parecem de etapas futuras e que
custam caro se forem adiadas.

1. **Camadas de criticidade dos cargos.** Classificar em críticos, relevantes e cauda
   longa, com o cliente. Define onde a hora de consultor sênior vai ser gasta. Ver
   `references/04-mbb-e-ia.md`, A.4.
2. **Hipóteses da pesquisa.** Escritas antes da coleta, porque elas determinam quais
   cortes precisam existir no instrumento. Hipótese formulada depois da coleta
   frequentemente não pode ser testada, porque o dado não foi pedido.
3. **Ghost deck do relatório.** Estrutura completa com títulos provisórios e slides
   vazios, validada com o comitê. Revela quais análises são necessárias e, sobretudo,
   quais não são.
4. **Verificação de licença do painel interativo.** Se o cliente não tiver licença para
   os usuários que vão consumir o painel, o plano de contingência é acionado agora, não
   na etapa de produção. Ver `references/05-arquitetura-entregaveis.md`, item A6.
5. **Modelo do relatório individual do participante**, montado com empresa fictícia.
   Permite acordar a granularidade com o patrocinador vendo o artefato, o que é
   diferente de descrevê-lo.

## 7. Artefato produzido e onde ele é gravado

| Artefato | Onde vive |
| --- | --- |
| Cartão de identidade preenchido, sem placeholders | Cópia do `metodo-pesquisa-salarial` na pasta do projeto do cliente |
| Particularidades estruturais com implicação metodológica | Subseção do mesmo cartão, e seção 0 do `CHECKPOINT.md` |
| `B1_CARGOS_CLIENTE` carregada, com `CG-###` atribuído | Camada 1 do mapa de bases, nomenclatura `AAAAMMDD_B1_CARGOS_CLIENTE_vNN.xlsx` |
| `B2_ESTRUTURA_CLIENTE` carregada | Camada 1, mesma convenção |
| Diagnóstico da base de cargos | Documento ao cliente, com cópia no log de auditoria |
| Pendências de insumo `P-01`, `P-02` | Seção 6 do `CHECKPOINT.md` |
| Ata de kick-off com a governança acordada | Repositório do projeto |

O código `CG-###` de cada cargo é atribuído aqui, em ordem alfabética da lista original,
e nunca muda, mesmo que o nome do cargo seja corrigido depois. Renumerar cargo no meio
do projeto quebra toda a rastreabilidade a jusante.

## 8. Gate de qualidade da etapa

- Cartão de identidade sem nenhum placeholder `{{ }}`.
- Pelo menos uma particularidade estrutural registrada com a implicação metodológica
  escrita. Nenhum cliente tem zero.
- Critério de nivelamento perguntado ao cliente e documentado por família, não assumido.
- Populações internas heterogêneas mapeadas, ou declaração explícita de que não existem.
- `B1_CARGOS_CLIENTE` carregada, com `CG-###` estável e headcount conferido contra a
  folha do cliente.
- Diagnóstico da base de cargos devolvido ao cliente, com a lista de cargos bloqueados
  para matching.
- Todos os dez insumos com status: recebido, ou pendente com responsável e data.
- Repositório seguro provisionado e NDA do projeto assinado.
- Camadas de criticidade classificadas e hipóteses escritas.
- Módulos de cálculo condicionais ativados ou descartados por decisão registrada
  (conversão cambial, mensalização de horista).

## 9. Erros a evitar

- Preencher o cartão sozinho, depois da reunião, a partir do que se entendeu. O cartão é
  preenchido com o cliente.
- Deixar o mínimo amostral "a definir". Ele parametriza o painel, o instrumento e a
  regra de publicação; sem ele, a etapa seguinte não pode começar.
- Assumir que o critério de nivelamento é senioridade porque a planilha tem I, II e III.
- Aceitar a base de cargos sem descrição e começar o matching com base no título. Sem
  descrição não há matching, e isso é risco de projeto a escalar, não problema a
  contornar.
- Tratar a ausência de populações internas heterogêneas como padrão. Procure antes de
  concluir que não existem.
- Adiar o ghost deck para quando houver dado. Ele existe justamente para definir qual
  dado precisa existir.
- Renumerar `CG-###` depois de corrigir o nome de um cargo.
