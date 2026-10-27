---
titulo: Auditoria de Folha de Pagamento
pratica: governanca-riscos-compliance
duracao_tipica: 4 a 8 semanas
plugin: acta-auditoria-folha
---

## O que é, e quando a ACTA é contratada para isso

A auditoria de folha testa o ciclo pela **regra que gerou os pagamentos**, não pelo contracheque que
cada pessoa recebeu. Folha é, na empresa brasileira de porte médio, a maior linha de custo depois de
matéria-prima, e a de erro mais silencioso: o erro de folha não estoura, ele se repete todo mês por
parametrização e aparece anos depois em fiscalização ou reclamatória, com juros e multa. Por isso o
trabalho não é recalcular a folha inteira — é achar a regra errada que se repete, medir por quantas
competências ela rodou, e dimensionar o passivo que ela acumulou.

A diferença de mentalidade que define o método: a conferência pergunta se o contracheque daquele mês
está certo; a auditoria pergunta **desde quando está errado e para quantas pessoas**. A firma costuma ser
contratada em três situações:

- **Suspeita de passivo trabalhista ou previdenciário acumulado.** Reclamatórias recorrentes com o mesmo
  tema, ou uma fiscalização iminente, levantam a pergunta de quanto a parametrização vem acumulando.
- **Preparação para venda, auditoria ou captação.** O passivo de folha é contingência que o comprador ou
  o auditor vai querer dimensionada: incidência, hora extra habitual, pejotização.
- **Troca de sistema, de BPO de folha ou de gestão de RH.** A Companhia quer saber o que a parametrização
  atual esconde antes de migrar, porque o erro migra junto.

## As etapas do ciclo de vida

Uma skill por bloco. A ordem não segue a vida do vínculo, e isso é deliberado: começa pela incidência,
onde um erro de parametrização multiplica por toda a população e por todas as competências; jornada vem
antes de desligamento porque a média de horas extras é insumo do recálculo das verbas rescisórias; e os
prestadores sem vínculo direto vêm por último porque a população deles só se fecha depois do universo.

| # | Bloco | O que fecha a etapa |
|---|---|---|
| 1 | Universo da folha (FOP.01/05) | Competências e períodos de cálculo cobertos, série de headcount conciliada, dicionário de rubricas com as leituras críticas, e os quatro pares conciliados ao centavo |
| 2 | Matriz de riscos da folha | Os dezoito riscos codificados `FOP.R<NN>` e a matriz risco × controle × como se testa, com os cinco que decidem o trabalho identificados |
| 3 | Encargos e benefícios (FOP.04) | A base de cada encargo reconstruída e confrontada com a gravada em 100%, o caminho base → guia, e a conciliação a três pontas de cada benefício |
| 4 | Horas extras e jornada (FOP.03) | O cruzamento ponto × folha em toda a população, os recálculos de sobrejornada, e a matriz de recorrência que revela a habitualidade |
| 5 | Admissão e desligamento (FOP.02/06) | A linha do tempo de datas e suas inversões, o cruzamento de desligados com competências, benefício, banco e acesso, e o recálculo das rescisórias |
| 6 | Terceiros e PJ (FOP.07) | A população de prestadores consolidada de oito fontes e a matriz prestador × sinal de pessoalidade, subordinação, habitualidade e onerosidade |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**Conclui-se sobre uma base que já chegou incompleta.** O sistema exporta por competência, coligada e
período de cálculo, e quem exporta entrega só o período 1 — somem rescisão, folha complementar e décimo
terceiro. *Prevenção:* pedir a relação de todos os períodos processados e confrontar com a base; a folha
complementar, que existe para corrigir o que o fechamento errou, é a população mais informativa.

**Soma-se o que não se soma.** O auditor iniciante soma provento, desconto e base e chega a um total que
não existe em lugar nenhum — a base é reflexo do provento, não parcela nova. *Prevenção:* separar as três
naturezas na entrada; a base de cada encargo se **reconstrói** pela parametrização declarada e se confronta
com a gravada, e a diferença é rubrica com incidência errada.

**Aceita-se a incidência declarada no dicionário sem testar o critério.** O sistema pode aplicar
fielmente uma incidência que já é errada à luz da natureza da verba — nome de rubrica não decide natureza.
*Prevenção:* a segunda passagem, lendo rubrica a rubrica das dez maiores para baixo, confrontando a
incidência declarada com a pergunta "esta verba retribui o trabalho ou compensa despesa?".

**Trata-se a hora extra como evento isolado de cada mês.** A hora extra habitual só aparece na série: uma
rubrica que cresce em linha reta com headcount estável é habitualidade se instalando, com reflexo não pago
em férias, 13º e rescisão. *Prevenção:* a matriz de recorrência ao longo das competências, e o recálculo
do reflexo, não apenas a conferência do mês.

**Para a medida da rescisão tardia na data do chamado, não na do desligamento, ou esquece o desligado na
folha.** Desligado que continua na folha, no benefício, no banco ou com acesso ativo é custo indevido que
se repete. *Prevenção:* cruzar a base de desligados com as competências posteriores, o benefício faturado,
o banco e os acessos — a 100%.

**Mede-se o reembolso e o adicional sem pedir o lastro.** Reembolso sem comprovante de despesa é verba
salarial com nome de reembolso, e PJ, cooperado ou estagiário sem objeto definido e com subordinação é
pejotização. *Prevenção:* exigir comprovante antes do pagamento, e montar a matriz prestador × sinais de
pessoalidade, subordinação, habitualidade e onerosidade.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Universo e dicionário de rubricas | Planilha de competências/períodos, série de headcount e dicionário com as leituras críticas | Interno e auditável |
| Matriz de riscos e controles da folha | Planilha código `FOP.R<NN>`, risco × controle × teste | Auditoria interna / diretoria |
| Papéis de trabalho por bloco | Reconstrução de base, conciliações a três pontas, cruzamentos ponto × folha, rastreáveis | Interno e auditável |
| Passivo quantificado por achado | Memória de cálculo com alíquota, nº de competências e encargo de mora | Diretoria / jurídico |
| Relatório de auditoria | Deck no padrão da casa, achados descritos por cargo e registro, sem nome | Comitê de auditoria / diretoria |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador na auditoria interna, na controladoria ou na diretoria; o
departamento de pessoal (ou o BPO de folha) como ponto focal, que entrega a base analítica, o dicionário
de rubricas, as guias e as declarações; o RH para dossiês, admissões e desligamentos; e o jurídico para o
dimensionamento do passivo.

**Do nosso lado:** um auditor responsável pela condução, pela reconstrução das bases e pelos papéis de
trabalho, com o sócio responsável validando a severidade dos achados e o passivo estimado antes do comitê
— e cuidando do tratamento de dado pessoal, que na folha pesa mais que em qualquer outro mandato (o achado
se descreve por cargo, seção e registro, nunca por nome).

## O que é preciso ter antes de começar

- **A base analítica de lançamentos, por pessoa e por rubrica, de todas as competências e períodos de
  cálculo** — não o resumo, que não sustenta nenhum teste de bloco.
- **O dicionário de rubricas com a incidência declarada por encargo**, as fórmulas e as datas de criação e
  alteração: é o critério contra o qual tudo se testa.
- **As guias recolhidas, as declarações transmitidas ao fisco trabalhista e o arquivo bancário** (remessa,
  retorno e extrato), para os quatro pares de conciliação.
- **O controle de ponto integrável à folha, as faturas dos prestadores de benefício e as relações de
  elegíveis**, para jornada e para a conciliação a três pontas.
- **A decisão de tratamento de dado pessoal acordada na abertura**, na forma da anonimização da casa — base
  de folha reúne identificador direto, remuneração e dado sensível no mesmo arquivo.
