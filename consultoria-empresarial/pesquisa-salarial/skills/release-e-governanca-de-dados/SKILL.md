---
name: release-e-governanca-de-dados
description: Congele o release da pesquisa salarial e governe os números entregues. Acionar ao fechar o release com hash, ao fazer a revisão independente, ao marcar o release no entregável, ou ao propagar correção de número já divulgado.
---

# Release e governança de dados

Etapa 9. Fica entre a base tratada e a produção dos entregáveis, e existe por um
motivo: número errado descoberto pelo cliente custa mais que o erro original, e
custa credibilidade que não se recompra. Esta é a etapa que protege a firma.

Carregue `metodo-pesquisa-salarial` antes desta skill. A arquitetura da cadeia de
dados está em `references/05-arquitetura-entregaveis.md`; o tratamento e os checks
que precedem o congelamento estão em `tratamento-e-validacao-da-base`. Aqui se trata
de congelar, revisar, marcar e corrigir.

## 1. O que o release é

Um release é o conjunto de estatísticas calculadas, exportado e imutável, que todos
os entregáveis leem sem recalcular. Congela `B7_ESTATISTICAS`,
`B8_COMPETITIVIDADE` e `B9_BENEFICIOS`, mais os parâmetros que produziram esses
números.

| Camada | Pode calcular? |
| --- | --- |
| B5 bruta | Não. É registro |
| B6 tratada | Sim. É a única camada onde se calcula |
| B7 a B9, release | Não. Já está calculado |
| Entregáveis | Não. Apenas formatam e agregam |

A exceção conhecida é o painel interativo, que por requisito recalcula percentis
dinamicamente a partir de B6. Por isso ele é conferido contra o release em uma
amostra de vinte cargos, e o resultado dessa conferência vai para o log. Nenhuma
outra exceção existe, e pedido de exceção vira decisão do responsável técnico
registrada, não combinado verbal.

## 2. Sequência de congelamento

Não comece sem a assinatura técnica de B6 em `B10_LOG_AUDITORIA`. Congelar base não
assinada é congelar dúvida.

1. **Calcular B7, B8 e B9** a partir da versão assinada de B6, em uma execução
   única. Nenhum recálculo parcial, nenhuma célula ajustada à mão depois.
2. **Aplicar a supressão por mínimo amostral antes da exportação.** O dado que não
   pode ser publicado não sai suprimido no visual, sai ausente do arquivo. Filtro de
   visual não protege confidencialidade contra quem muda o filtro.
3. **Exportar** B7, B8 e B9 em formato estável (CSV ou Parquet), um arquivo por base.
4. **Calcular o hash** de cada arquivo exportado e a contagem de linhas.
5. **Nomear o release**: `R1.0` para o primeiro, incremento na segunda casa para
   correção (`R1.1`), na primeira para nova rodada de coleta.
6. **Registrar em B10** um evento por arquivo, com data e hora, autor, versão de B6
   consumida, hash, contagem de linhas e o número do release.
7. **Congelar o diretório.** Os arquivos do release ficam em pasta de somente
   leitura, separada da pasta de trabalho. Editar arquivo de release é falha de
   processo, não erro de digitação.
8. **Registrar os parâmetros do release** junto com os arquivos: data-base, taxa de
   câmbio e fonte, índice de atualização e fonte, jornada de referência, carga de
   referência de horista, método de percentil, mínimos amostrais aplicados. Um
   número só é reconstruível se os parâmetros que o geraram estiverem ao lado dele.

## 3. Revisão independente

Quem calculou não revisa. Quem revisa assina em B10. Com equipe de duas pessoas, o
revisor é o segundo consultor; com uma só, é o responsável técnico, e essa
limitação fica declarada no log.

Escopo mínimo da revisão, sobre uma amostra de vinte cargos escolhidos com critério
e não por conveniência (os cinco de maior headcount, os cinco críticos, os cinco de
maior gap e cinco por sorteio):

| # | O que o revisor reconfere | Fonte contra fonte |
| --- | --- | --- |
| 1 | Refaz a estatística do cargo | B6 filtrada contra a linha do release |
| 2 | Confere o `n` como contagem distinta de empresas | B6 contra B7 |
| 3 | Confere a supressão por mínimo amostral | Tabela de mínimos contra o que existe no arquivo |
| 4 | Confere a concentração máxima de 25% por participante | B6 contra o dado publicado |
| 5 | Refaz comparatio e gap | C-16 e C-17 contra B8 |
| 6 | Confere a ordenação estatística | V1 na linha do release |
| 7 | Confere a segmentação de populações internas | R4 contra os recortes do release |
| 8 | Testa a reidentificação | Tenta inferir o valor de um participante a partir do output |

O item 8 é o teste que não tem fórmula e é o mais importante. Se o revisor conseguir
inferir quanto uma empresa específica paga a partir do que vai ser publicado, o
release não sai, independentemente de todos os mínimos numéricos terem passado.

Divergência encontrada bloqueia o release. Não se corrige a linha e segue: volta
para B6, corrige, reassina, e o congelamento recomeça do passo 1. O revisor registra
em B10 o que conferiu, o que divergiu e o desfecho.

## 4. Marca de release nos entregáveis

Todo artefato carrega o release na capa e no rodapé, e cada slide, aba ou página de
resultado carrega a linha de rastreabilidade no formato
`Base R1.0 | Cálculo C-16 | n = 14 empresas`.

Custa uma linha de oito pontos e resolve a discussão sobre número antes dela
começar. É também o que permite, meses depois, saber se a tabela que o cliente está
citando é a atual.

Nomenclatura de artefato: `AAAAMMDD_ARTEFATO_Rn.n_vNN.ext`. Aprovado pelo
patrocinador, o artefato vira `_FINAL` e não é mais editado. Correção gera novo
release e novo ciclo, nunca edição do arquivo aprovado. Toda geração de artefato
entra em B10 com o release consumido e o revisor.

Antes de qualquer arquivo sair da firma: exibir colunas e abas ocultas, remover
filtro ativo, conferir que nenhum nome de empresa participante aparece em célula,
comentário, nome de aba ou propriedade do arquivo. Coluna oculta com participante
identificado em arquivo enviado é o incidente mais caro possível nesta etapa,
porque atinge o painel do ano seguinte.

## 5. Correção de número já divulgado

Este é o procedimento que a etapa existe para ter pronto. Executar na ordem, e o
primeiro passo é sempre o mesmo.

**Passo 1, parar a circulação.** Assim que a suspeita é levantada, nenhum entregável
novo sai e nenhuma versão em circulação é atualizada por conta própria. Registre a
suspeita em B10 com data, hora e quem levantou, antes de investigar.

**Passo 2, reproduzir e classificar.** Reconstrua o número pela cadeia (linha de B5,
regra de B6, ID do livro, linha do release). A classificação define o resto:

| Severidade | Definição | Prazo e quem comunica |
| --- | --- | --- |
| Alta | O número muda uma conclusão, uma recomendação ou um valor de ajuste; ou expõe dado de participante | Mesmo dia. Sócio ao patrocinador, por telefone antes de qualquer documento |
| Média | O número muda, mas a leitura e a decisão permanecem | Até 2 dias úteis. Responsável técnico ao ponto focal, por escrito |
| Baixa | Erro de apresentação, arredondamento ou rótulo, sem mudar o valor | No próximo ciclo de entrega, com nota |

Erro que expõe dado de participante é sempre alta, mesmo que o valor esteja certo.

**Passo 3, corrigir na origem.** A correção acontece em B6, nunca no arquivo do
release e nunca no entregável. B6 é corrigida, os checks rodam de novo inteiros, a
base é reassinada.

**Passo 4, gerar o novo release.** `R1.1`, pela sequência da seção 2, com nova
revisão independente. A revisão do release corrigido cobre a amostra de vinte cargos
mais todos os cargos afetados pela correção.

**Passo 5, regerar todos os entregáveis.** Todos, não apenas o que continha o
número. Regerar quatro artefatos de uma fonte única é trabalho de horas; caçar de
onde veio um número divergente entre versões é trabalho de dias, e produz uma
segunda versão errada.

**Passo 6, comunicar e substituir.** A comunicação diz o que mudou, por que mudou, o
que permanece válido e qual versão substitui qual. Peça a substituição das cópias em
circulação, nominalmente, para cada destinatário conhecido. Em pesquisa de painel, o
participante que recebeu relatório individual afetado também é destinatário.

**Passo 7, registrar o incidente.** Em B10 e em `APRENDIZADOS.md` do engajamento: o
que aconteceu, qual check deveria ter pego, e o que muda no processo. Correção que
não vira aprendizado volta.

## 6. Artefato e onde grava

| Artefato | Onde |
| --- | --- |
| Arquivos congelados de B7, B8 e B9, com hash e contagem | Pasta de release, somente leitura, em `~~pasta de trabalho` |
| Ficha do release: número, data, versão de B6, parâmetros, hashes | Junto aos arquivos, e evento em `B10_LOG_AUDITORIA` |
| Registro da revisão independente, com amostra, achados e desfecho | `B10_LOG_AUDITORIA`, assinado pelo revisor |
| Conferência do painel interativo contra o release | `B10_LOG_AUDITORIA` |
| Registro de incidente e propagação de correção | `B10_LOG_AUDITORIA` e `APRENDIZADOS.md` |

## 7. Gate de qualidade da etapa

Este gate é o mais estrito do projeto, e nenhum item é dispensável por prazo. Item
aberto significa release não congelado, e release não congelado significa que nenhum
entregável pode ser produzido.

**Pré-condições**

- [ ] B6 assinada tecnicamente em B10, com contagens e confirmação dos checks.
- [ ] Os quatorze checks e validações rodaram na versão final de B6, todos OK.
- [ ] Nenhuma correção pendente de saneamento com participante em aberto.

**Congelamento**

- [ ] B7, B8 e B9 calculados em execução única a partir da versão assinada de B6.
- [ ] Supressão por mínimo amostral aplicada na exportação. Nenhum dado abaixo do
      mínimo existe dentro do arquivo do release.
- [ ] Nenhum participante responde por mais de 25% das observações de um dado
      publicado.
- [ ] Nenhum nome de empresa participante em qualquer arquivo do release.
- [ ] Hash e contagem de linhas calculados para cada arquivo e registrados em B10.
- [ ] Número do release atribuído, e a ficha de parâmetros gravada junto aos
      arquivos.
- [ ] Pasta do release em somente leitura.

**Revisão independente**

- [ ] Executada por quem não calculou, ou a limitação declarada em B10.
- [ ] Amostra de vinte cargos com o critério de seleção declarado.
- [ ] Os oito itens da seção 3 conferidos, inclusive o teste de reidentificação.
- [ ] Nenhuma divergência em aberto. Divergência tratada significa B6 corrigida,
      reassinada e release recongelado, não linha ajustada.
- [ ] Registro da revisão em B10, com o nome do revisor.

**Propagação**

- [ ] Todo entregável lê exclusivamente este release, sem recálculo local.
- [ ] Marca de release na capa e no rodapé de todo artefato.
- [ ] Linha de rastreabilidade em cada slide, aba e página de resultado.
- [ ] Painel interativo conferido contra o release em vinte cargos, resultado em B10.
- [ ] Coerência entre os três artefatos verificada nos mesmos vinte cargos.
      Divergência bloqueia a entrega.
- [ ] Nenhum arquivo entregue com aba oculta, coluna oculta, filtro ativo ou vínculo
      externo.

**Prontidão para correção**

- [ ] Qualquer número de qualquer entregável é reconstruível informando release, ID
      de cálculo, cargo e recorte.
- [ ] A lista de destinatários de cada artefato está registrada, com data de envio.
      Sem ela, não há como substituir cópia em circulação.

## 8. Erros a evitar

- Congelar antes de a base estar assinada.
- Corrigir uma célula dentro do arquivo do release. O release deixa de valer como
  prova no instante em que alguém o edita.
- Aceitar que o revisor seja quem calculou, porque o prazo apertou. A revisão
  independente é o único mecanismo que pega o erro que o autor não enxerga.
- Revisar com amostra de conveniência, escolhendo os cargos que já se conhece.
- Corrigir só o entregável onde o erro apareceu, e deixar os outros três com o
  número antigo.
- Comunicar correção de severidade alta por e-mail antes de falar com o
  patrocinador.
- Publicar dado abaixo do mínimo com o número escondido no visual em vez de ausente
  do arquivo.
- Deixar a lista de destinatários por reconstituir. Na hora da correção, não há
  tempo de descobrir quem tem qual versão.
