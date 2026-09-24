---
name: monitoramento-e-kri
description: Desenhe indicadores de risco que avisam antes do evento, separe antecedente de consequente, amarre cada um a um gatilho de escalonamento com destinatário e prazo, e fixe a cadência de reavaliação do mapa. Acionar ao definir KRI, ao converter limite de tolerância em gatilho, ao montar o painel de riscos, ou ao definir de quanto em quanto tempo o mapa se refaz.
---

# Monitoramento e KRI

Carregue `apetite-e-tolerancia` antes: o limite de tolerância é o gatilho do indicador. KRI sem
limite associado é gráfico bonito que ninguém olha no segundo trimestre.

Esta é a skill que decide se a implantação sobrevive à saída do consultor. Mapa e plano são
entregáveis de projeto; o monitoramento é o que transforma gestão de riscos em processo.

## 1. Antecedente e consequente

**Indicador consequente** mede o que já aconteceu. Número de acidentes no mês, perdas por fraude no
trimestre, multas recebidas no ano. Ele é fácil de obter, é auditável e chega tarde: quando ele se
move, o evento aconteceu.

**Indicador antecedente** mede a condição que torna o evento provável, e por isso se move antes.
Difícil de construir, e é o que justifica o trabalho.

| Risco | Consequente (chega tarde) | Antecedente (avisa antes) |
|---|---|---|
| 41 Dependência de Pessoal | Saída de pessoa-chave sem substituto | Nº de processos críticos com um único executante habilitado; nº de posições críticas sem sucessor formado |
| 27 Inadimplência | Perda reconhecida no resultado | Aging da carteira acima de 60 dias; percentual de clientes com limite vencido e não revisado |
| 44 Segurança da Informação | Incidente de vazamento | Nº de acessos privilegiados sem revisão no prazo; nº de contas de desligados ainda ativas |
| 46 Trabalhista | Condenações no período | Nº de horas extras acima do limite legal; percentual de terceirizados sem comprovação de recolhimento |
| 35 Fornecimento | Ruptura de insumo | Percentual de compras em fornecedor único; cobertura de estoque em dias para itens críticos |
| 25 Fluxo de Caixa | Atraso de pagamento a fornecedor | Dias de caixa disponível; percentual de faturamento concentrado num contratante |

**A pergunta que produz o antecedente:** o que teria de ser verdade, três meses antes, para que o
evento se tornasse provável? A resposta costuma ser um controle que parou de funcionar, uma
concentração que cresceu, ou uma fila que se acumulou. Esses três padrões cobrem a maioria dos KRI
úteis de um mandato de mid-market.

**Nem todo risco comporta um antecedente honesto.** Cenário político e econômico (categoria 20) não
tem. Forçar um indicador antecedente onde não existe produz métrica inventada, que é pior do que
métrica ausente porque cria a impressão de cobertura. Para esses, o monitoramento é qualitativo e
por evento: quem acompanha, com que frequência olha, e o que reporta.

## 2. Critérios de um KRI utilizável

Cinco, e um KRI que falha em qualquer um deles não entra no painel:

1. **Já existe ou custa pouco para existir.** Indicador que exige projeto de sistema morre no
   levantamento. No primeiro ciclo, prefira o que já é medido, mesmo que seja o segundo melhor
   indicador. O melhor indicador que ninguém consegue produzir vale zero.
2. **Tem dono, que é quem responde pelo risco.** Se o dono do KRI não é o dono da resposta, o
   indicador vira relatório para terceiro e ninguém age sobre ele.
3. **Tem limite, vindo da tolerância.** Sem limite, não há o que disparar.
4. **É sensível na faixa que importa.** Indicador que só se move depois do evento é consequente
   disfarçado. Teste com a série histórica: ele teria se movido antes do último incidente?
5. **É manipulável dentro de limites conhecidos.** Todo indicador é gerenciável por quem é cobrado
   por ele. Escolha aqueles cuja manipulação seja visível, e evite os que o próprio dono apura sem
   nenhuma fonte independente.

**De cinco a oito KRI no primeiro ciclo.** Painel com trinta indicadores não é monitorado, é
arquivado. Os cinco primeiros saem dos riscos da zona crítica e dos controles cuja falha atravessa
a linha de apetite, identificados em `matriz-e-mapa-de-calor` §3.

## 3. Gatilho de escalonamento

Um KRI com limite e sem consequência declarada é um número num slide. O gatilho é o que o torna
operante, e tem três faixas:

| Faixa | Posição contra a tolerância | O que dispara |
|---|---|---|
| Verde | Dentro do limite | Reporte de rotina no painel |
| Amarelo | Entre 80% e 100% do limite | Aviso ao dono do risco, com explicação escrita no ciclo seguinte |
| Vermelho | Acima do limite | Escalonamento formal, com destinatário nominal e prazo de resposta |

**A faixa amarela é a razão de existir do KRI.** Ela é o aviso antecipado. Painel de duas faixas
avisa junto com o evento, o que é o mesmo que não avisar.

Cada gatilho vermelho tem três campos escritos antes de acontecer: **para quem escala**, **em quanto
tempo**, e **o que a pessoa acionada tem de decidir**. O terceiro é o que costuma faltar. Escalonar
para o comitê sem dizer o que o comitê tem de decidir produz uma reunião em que o número é
apresentado, comentado e arquivado.

**Quando o gatilho dispara três vezes sem mudar nada**, o problema é o limite ou é o gatilho. Ou o
limite está apertado demais para a realidade da operação, e se recalibra com registro, ou a
consequência declarada não tem força e se escala um nível acima. O que não se faz é conviver com
alerta permanente: gatilho que dispara sempre é ruído, e ruído treina a organização a ignorar o
painel inteiro.

## 4. Cadência de reavaliação

Três ritmos, e confundi-los é o que faz a gestão de riscos virar um evento anual.

**Mensal ou trimestral: o KRI.** Leitura dos indicadores contra os limites e tratamento dos que
estouraram. Não se reavalia risco aqui. A frequência segue o indicador: caixa é mensal, concentração
de fornecedor é trimestral.

**Trimestral: o plano de resposta.** Ações vencidas, ações em risco de vencer, evidência de
conclusão das entregues. Reunião curta, com lista de vencidos aberta. Este é o rito cuja ausência
mata o plano, e ele custa quarenta minutos por trimestre.

**Anual: o mapa.** Reavaliação completa, com as mesmas escalas, comparando com o mapa anterior risco
a risco. O entregável central da reavaliação anual não é o mapa novo: é **a lista do que se moveu e
por quê**. Risco que subiu, risco que caiu, risco que entrou, risco que saiu. Mapa novo sem essa
lista não permite saber se a Companhia melhorou ou se a sala era diferente.

**Fora do calendário, por gatilho.** Cinco eventos reabrem o mapa independentemente da data:
aquisição ou entrada em novo mercado, mudança regulatória relevante para o setor, incidente de
impacto 3 ou 4 materializado, troca do executivo principal, e mudança de estrutura de capital ou de
controle. Declare essa lista na política, porque sem ela o mapa passa doze meses defasado depois de
um evento que mudou tudo.

**Incidente materializado é a melhor fonte de calibração que existe.** Quando algo acontece, volte
ao mapa: o risco estava lá? Com que nota? A nota estava certa? O controle que deveria pegar existia?
Esse exercício, feito em uma hora logo após o evento, corrige a escala com dado real e é a única
forma de a série histórica ganhar precisão ao longo dos anos. Pulá-lo é o que faz o mapa do ano
cinco ter a mesma qualidade do mapa do ano um.

## 5. O painel

Uma página. Cinco blocos:

1. **Os KRI**, com valor atual, limite e faixa, mais a seta de tendência contra o período anterior.
   A tendência importa tanto quanto o nível: indicador verde subindo há três ciclos é notícia.
2. **Os riscos da zona crítica**, com posição atual e status da resposta.
3. **As ações vencidas**, nominalmente, com dono e dias de atraso. Este bloco é o que faz o painel
   ser lido.
4. **O que mudou desde o ciclo anterior**: risco que se moveu, ação concluída, gatilho disparado.
5. **As aceitações vencendo no próximo ciclo**, com a data de reavaliação.

O quinto bloco é o que impede a aceitação formal de virar permanente por esquecimento, que é o
destino natural dela sem esse lembrete.

## 6. O que o cliente precisa ter quando o consultor sair

Este é o critério de encerramento do mandato de implantação, e vale a conversa explícita na abertura:

- Uma pessoa nomeada como responsável pelo processo, ainda que em tempo parcial e acumulando função.
- O registro de riscos em ferramenta que ela consiga atualizar sozinha. Planilha atualizada vence
  sistema abandonado.
- O painel rodando ao menos um ciclo completo **com o consultor assistindo, e não produzindo**.
- A data da próxima reavaliação anual em calendário, com convite enviado.
- A política com a lista de gatilhos extraordinários da §4.

Faltando o terceiro item, a implantação não foi concluída, foi entregue. A diferença aparece no mês
quatro, quando o primeiro ciclo que dependia só do cliente não acontece.

## O que entregar

1. De cinco a oito KRI, com dono, fonte do dado, periodicidade, limite e as três faixas.
2. A tabela de gatilhos: para quem escala, em quanto tempo, o que a pessoa acionada decide.
3. O painel de uma página, com os cinco blocos.
4. A cadência em calendário, com os três ritmos e a lista de gatilhos extraordinários.
5. O registro do ciclo rodado pelo cliente sozinho, com o que falhou e o que foi ajustado.

## Próximo passo

O ciclo fecha em `taxonomia-de-riscos`, na reavaliação anual, com os riscos novos que o ano revelou e
as categorias que o dicionário eventualmente precise ganhar. O estado do engajamento vai para o
checkpoint de `acta-way`.
