---
name: terceiros-e-pj
description: Reúna os sinais de pessoalidade, subordinação e habitualidade em PJ, cooperativa, estágio e terceiro alocado dentro do cliente, e trate o resultado como conjunto de indícios a escalar para a assessoria jurídica. Acionar ao mapear prestador sem vínculo direto, ao cruzar PJ com ponto e acesso, ou ao testar estágio e cooperativa.
---

# Trabalhador sem vínculo direto: PJ, cooperado, estagiário e terceiro

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 valem aqui integralmente e não são repetidas. Este plugin é de processo auditado;
o método vive no plugin de método. O universo e a estrutura da base estão em `universo-da-folha`.

Bloco **FOP.07**. Riscos `FOP.R17` e `FOP.R18`.

## 1. O que esta skill produz, e o que ela não produz

Este é o único bloco do ciclo cujo objeto não está na folha. Quem se testa aqui está no contas a
pagar, no contrato de prestação de serviço, no crachá e na base de usuários dos sistemas, e
justamente por isso é a população que nenhuma auditoria de folha alcança sem sair da folha.

**O produto do teste é um conjunto de sinais acumulados, não um veredito.** Auditoria não reconhece
vínculo: quem reconhece é a fiscalização ou o juízo, olhando o caso concreto, com prova que esta
skill não produz. O que se entrega é a relação de prestadores ordenada pela quantidade e pela força
dos sinais reunidos, com a evidência de cada sinal, e a recomendação de exame jurídico para os que
concentram muitos.

Três consequências práticas dessa fronteira, e as três valem para a redação do ponto:

1. **O achado se escreve sobre o fato observado e sobre o controle ausente**, nunca sobre a
   qualificação jurídica da relação. "O prestador registra ponto no sistema da empresa e recebe
   escala semanal da chefia da área" é achado. "Há vínculo empregatício" não é, e escrever isso
   entrega a discussão inteira à contraparte na primeira reunião.
2. **Quando os sinais se acumulam num prestador, escale para a assessoria jurídica** antes de
   fechar o relatório, e registre o encaminhamento. O controle ausente que a auditoria aponta é a
   falta de parecer prévio e de revisão periódica dos contratos, e esse parecer é de quem tem
   competência para dá-lo.
3. **O passivo se estima em faixa, não em número fechado**, porque ele depende do reconhecimento.
   Calcule o que seria devido por prestador reclassificado (encargos não recolhidos, férias, décimo
   terceiro, fundo de garantia, verbas rescisórias, por todo o período do contrato) e apresente como
   exposição máxima, dizendo que é isso.

## 2. Fechar a população antes de testar

O erro de escopo aqui é maior que em qualquer outro bloco: a população não está em lugar nenhum
pronta, e quem monta a lista costuma montar só a parte que conhece. Peça e reúna:

| Fonte | O que ela traz |
|---|---|
| Contas a pagar, fornecedores de serviço | A população base de PJ. Filtre por objeto de serviço e por natureza da despesa, não por nome |
| Contratos de prestação de serviço vigentes e encerrados no período | O objeto contratado, o prazo, a forma de remuneração e a cláusula de pessoalidade |
| Relação de estagiários, com a instituição de ensino | População própria, com requisitos próprios |
| Contratos com cooperativa e com empresa de terceirização | Inclui o número de pessoas alocadas por posto |
| Relação de aprendizes | Entra no teste de cota |
| Base de crachás e de acesso às instalações | Quem entra todo dia e não está na folha |
| Base de usuários dos sistemas | Quem tem conta corporativa e não está na folha |
| Relação de reclamatórias por objeto | Pedido de reconhecimento de vínculo já ajuizado é o mapa pronto |

**O cruzamento que fecha a população**: quem tem crachá ou usuário ativo e não está na base de
folha. Todo nome dessa lista é ou prestador conhecido, ou prestador que ninguém mapeou, e a segunda
categoria existe em quase todo mandato. `acta-way:anonimizacao-e-lgpd` vale aqui como em toda a
folha: trabalhe por identificador de prestador e por cargo, e mantenha a tabela de ligação separada.

## 3. Pejotização: os sinais e como cada um se evidencia

`FOP.R17`. Os quatro elementos que a lei reúne para caracterizar relação de emprego são pessoalidade,
subordinação, habitualidade e onerosidade. A auditoria não os declara: ela levanta indício de cada
um, com evidência verificável, e conta quantos se acumulam no mesmo prestador.

| Elemento | Sinal observável | Onde se obtém a evidência |
|---|---|---|
| **Pessoalidade** | O contrato nomeia a pessoa física que executa, ou proíbe substituição; a mesma pessoa aparece em todas as notas; a PJ tem sócio único e nenhum empregado | Contrato, notas fiscais ao longo da série, cadastro da empresa prestadora |
| **Subordinação** | O prestador cumpre horário, registra ponto, consta de escala, recebe ordem direta de chefia da área, participa de avaliação de desempenho, usa uniforme e crachá igual ao do quadro | Ponto, escala, organograma, e-mail e comunicação interna, base de acesso |
| **Habitualidade** | Faturamento mensal contínuo por muitos meses, valor estável, sem vinculação a entrega ou marco | Série de pagamentos por prestador e por competência, no contas a pagar |
| **Onerosidade** | Remuneração fixa mensal, com reajuste anual na data-base, ou paga em duas parcelas no padrão de adiantamento e saldo | Mesma série, olhando valor e data |

Os cinco cruzamentos que produzem a maior parte dos sinais, todos baratos:

1. **Exclusividade de faturamento.** Peça ao prestador PJ, ou levante pelo contrato, se ele fatura
   para outros tomadores. Prestador que fatura só para o cliente, mês após mês, é o sinal mais forte
   do conjunto, e o mais fácil de verificar.
2. **A série mensal de pagamentos por prestador.** Valor idêntico todo mês, por anos, com reajuste
   na data-base da categoria, descreve salário. Pagamento que varia com entrega descreve serviço.
3. **O prestador no ponto e no acesso.** Marcação de ponto, registro de entrada diária em horário de
   expediente e conta de usuário com perfil equivalente ao de um empregado da mesma área.
4. **A função comparada ao quadro.** Prestador que exerce função que existe na estrutura de cargos,
   lado a lado com empregados que fazem a mesma coisa, sob a mesma chefia. Compare a remuneração
   mensal do prestador com o custo total de um empregado no mesmo cargo: quando ela fica próxima do
   salário e distante do custo com encargos, a economia obtida é a medida do passivo evitado.
5. **O ex-empregado que voltou como PJ.** Cruze a base de desligados de `admissao-e-desligamento`
   §5 com a base de prestadores, por documento. Desligamento seguido de contratação da PJ do mesmo
   indivíduo, para a mesma função, é o caso que concentra mais sinais de uma vez.

Complete com três leituras sobre a PJ contratada: data de abertura próxima à data do contrato,
endereço coincidente com o do sócio ou com o do próprio cliente, e objeto social genérico ou
incompatível com o serviço prestado. Nenhuma delas conclui sozinha, e todas entram na contagem.

**Como consolidar.** Monte a matriz prestador por sinal, um sinal por coluna, marcando presente,
ausente ou não verificável, com a fonte da evidência. Ordene pela contagem. A leitura é de
concentração: prestador com um ou dois sinais isolados é ruído, e prestador que acumula pessoalidade,
subordinação e habitualidade ao mesmo tempo é o que vai para o parecer jurídico.

### Risco a acompanhar: Tema 1.389 do STF

O STF reconheceu repercussão geral no ARE 1.532.603, Tema 1.389, sobre a competência e o ônus da
prova nos processos que discutem fraude no contrato civil ou comercial de prestação de serviços, e
sobre a licitude da contratação de pessoa jurídica ou de trabalhador autônomo para essa finalidade
(portal do STF). Em abril de 2025, o relator suspendeu em todo o país os processos sobre o tema. Em
junho de 2026, retirou a suspensão na primeira e na segunda instâncias da Justiça do Trabalho, que
voltaram a instruir e julgar, e manteve o processo suspenso depois do julgamento pelo TRT até a
fixação da tese (STF, notícia sobre a decisão). Em 26/10/2026, o mérito está pendente: a última
movimentação no portal, de 18/10/2026, é a conclusão ao relator.

Nada aqui antecipa o resultado. Três consequências para o trabalho:

1. A tese pode mudar quem julga o pedido de vínculo e quem tem de provar a fraude, e com isso o peso
   jurídico de cada sinal da matriz. A matriz continua sendo de fato observado; a leitura jurídica é
   da assessoria jurídica.
2. A exposição máxima da §1 sai com a ressalva de que o tema está pendente, e com a data da consulta
   ao andamento.
3. Reclamatória de vínculo da relação da §2 pode estar suspensa depois do julgamento no TRT. A
   situação de cada uma se pede ao jurídico do cliente, e não se presume.

Antes de emitir o relatório, consulte de novo o andamento do tema no portal do STF.

## 4. Cooperativa de mão de obra

Cooperativa legítima reúne profissionais que se organizam para ofertar serviço em conjunto, com
autonomia e rateio entre os cooperados. Cooperativa de fachada intermedia mão de obra subordinada, e
o efeito, quando afastada, é o vínculo direto com o tomador.

O que se testa, e onde cada resposta aparece:

1. **O estatuto e a adesão.** O cooperado aderiu por ato próprio, ou foi encaminhado pela empresa que
   o contratou? Peça a ficha de matrícula e a data de adesão de quem trabalha no cliente.
2. **A dupla qualidade e a autonomia.** O cooperado presta o serviço e também se beneficia da
   estrutura da cooperativa, ou apenas recebe repasse? O rateio de sobras existe e é distribuído?
3. **A rotina no tomador.** Mesma bateria da §3: ponto, escala, ordem direta, uniforme, avaliação.
   Cooperado subordinado à chefia do tomador descaracteriza o arranjo inteiro.
4. **A exclusividade.** Cooperativa cujo único tomador é o cliente, e cujos cooperados trabalham
   apenas ali, é intermediação com outro nome.
5. **A substituição de quadro próprio.** Compare a função dos cooperados com a dos empregados do
   mesmo setor. Cooperado fazendo o que o empregado do lado faz é o sinal mais direto.
6. **O recolhimento e a retenção.** Confira a retenção devida sobre a nota da cooperativa e o
   recolhimento das contribuições, por competência.

## 5. Estágio

Estágio fora dos requisitos é o desvio mais comum e o de correção mais barata, porque quase sempre
decorre de processo ausente e não de intenção. Teste em 100% dos estagiários:

1. **Matrícula e frequência regular** na instituição de ensino, com a comprovação atualizada. A
   perda do vínculo acadêmico encerra a possibilidade do estágio, e o sistema não avisa ninguém.
2. **Termo de compromisso** celebrado entre estudante, instituição e empresa, vigente, e **plano de
   atividades** compatível com o curso. Plano genérico, ou atividade sem relação com o curso,
   descaracteriza a finalidade educativa.
3. **Supervisor designado** na empresa, com a relação de estagiários por supervisor dentro do limite,
   e **relatório periódico de atividades** efetivamente produzido.
4. **Jornada** dentro do limite diário e semanal aplicável ao nível de ensino, testada contra o ponto
   e não contra o termo. Estagiário com marcação em jornada de empregado, ou com hora extra, está
   fora do arranjo.
5. **Duração** dentro do limite máximo no mesmo concedente, e **recesso** concedido e remunerado na
   proporção do tempo de estágio.
6. **Bolsa e auxílio-transporte** pagos conforme o termo, e seguro contra acidentes pessoais vigente,
   que é o requisito mais esquecido.
7. **Quadro de estagiários contra quadro de empregados**, por setor. Setor que opera com estagiários
   em maioria, executando a atividade-fim, não está formando ninguém.

Trate à parte a **cota de aprendizes** e a **cota de pessoas com deficiência**: são obrigações de
percentual sobre o quadro, com base de cálculo própria e fiscalização ativa, e o teste é aritmético
sobre o headcount por estabelecimento apurado em `universo-da-folha` §3.3. Descumprimento de cota é
achado de conformidade com multa mensurável, e a mensuração entra no relatório.

## 6. O terceiro que trabalha dentro do cliente

Terceirização é arranjo legítimo. O que a torna passivo é a forma de execução, e o teste separa dois
riscos que costumam ser tratados como um só.

**Risco de subordinação direta.** O terceiro que recebe ordem, escala e avaliação da chefia do
tomador, usa o mesmo crachá e o mesmo sistema, e é tratado como parte da equipe, aponta para vínculo
direto com o tomador. Aplique a bateria da §3 a ele, com uma diferença importante: aqui o sinal mais
forte não é o faturamento, e sim a **cadeia de comando**. Peça o organograma da área, leia a
comunicação interna e pergunte quem distribui a tarefa diária, quem aprova a folga e quem decide o
horário. A resposta honesta a essas três perguntas decide o ponto.

**Risco de responsabilidade subsidiária.** Independente de subordinação, o tomador responde pelas
obrigações trabalhistas que o prestador deixou de cumprir, e a defesa é a fiscalização documentada.
`FOP.R18`. O que se testa, por prestador e por competência:

1. Comprovante de recolhimento das contribuições e do fundo de garantia dos empregados alocados.
2. Folha de pagamento e comprovante de quitação dos alocados, e a relação nominal atualizada de quem
   está no posto.
3. Comprovação de benefícios devidos pela convenção da categoria do prestador, que não é a do
   tomador.
4. Retenção devida sobre a nota fiscal de serviço com cessão de mão de obra, calculada e recolhida.
5. Certidões de regularidade do prestador, renovadas.
6. **A cláusula de retenção de pagamento na falta de comprovação, e o uso efetivo dela.** Cláusula
   que existe e nunca foi acionada, num prestador com pendência documentada, é controle de papel.

Levante ainda a situação econômica dos prestadores relevantes e a existência de reclamatórias em que
o cliente figura no polo passivo junto com eles. Prestador em dificuldade financeira converte risco
subsidiário em desembolso, e é o gatilho que muda a prioridade do achado.

### Planos A/B/C

- **Plano A**: contratos vigentes e encerrados, série de pagamentos por prestador, bases de crachá e
  de usuários, ponto e escala das áreas que usam terceiros, documentação de estágio e de cooperativa,
  comprovantes de recolhimento dos prestadores e relação de reclamatórias por objeto. Matriz de
  sinais montada sobre a população inteira de prestadores.
- **Plano B**: sem as bases de acesso e de ponto, os sinais de subordinação dependem de contrato,
  organograma e indagação formal. A matriz continua válida, com as colunas de subordinação marcadas
  como não verificáveis, e a impossibilidade de verificar se declara.
- **Plano C**: a relação de prestadores não é obtenível de forma organizada, ou o contas a pagar não
  separa serviço de pessoa física e de pessoa jurídica. Conclua sobre a ausência de gestão da
  população de prestadores, que é achado de desenho, e redirecione o esforço para os contratos de
  maior valor e para as reclamatórias já ajuizadas.
- **Limitação**: *"A matriz de sinais cobre [N] prestadores, [X]% do valor pago a serviços de pessoa
  jurídica no período; [M] colunas de subordinação não foram verificáveis por ausência de base de
  acesso; a conclusão é de acúmulo de indícios e não de qualificação jurídica da relação."*

## O que entregar

1. A população de prestadores sem vínculo direto, consolidada das oito fontes da §2, com os
   encontrados pelo cruzamento de crachá e usuário destacados.
2. A matriz prestador por sinal, com a evidência de cada marcação e a ordenação por concentração.
3. Para os prestadores de maior concentração, a exposição máxima estimada por pessoa e por período de
   contrato, apresentada como faixa, com o encaminhamento à assessoria jurídica registrado.
4. A relação de ex-empregados recontratados como pessoa jurídica, com a função comparada.
5. Os testes de cooperativa, com autonomia, exclusividade e retenção avaliadas.
6. Os sete testes de estágio em 100% dos estagiários, e o cálculo das cotas de aprendiz e de pessoa
   com deficiência contra o quadro por estabelecimento.
7. A fiscalização documentada de cada prestador de serviço com mão de obra alocada, por competência,
   e o uso efetivo da cláusula de retenção.
8. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

Fechamento. Os prestadores escalados para parecer jurídico voltam para o registro de riscos em
`matriz-de-riscos-da-folha`, e o que o mandato revelou de arranjo novo é promovido lá. A redação do
ponto e a calibração de severidade estão em `redacao-de-achados` e em
`acta-controles-internos:deficiencias-e-severidade`.
