---
titulo: Fundamentos
---

## A ideia que sustenta o método

A auditoria de folha vem da mesma tradição que organiza o exame por ciclos de transação, e o ciclo de
pessoal é um dos clássicos dessa literatura: as contas de despesa com pessoal, de provisões e de
obrigações a recolher são movimentadas pelos mesmos eventos, protegidas pelos mesmos controles e
alimentadas pelo mesmo cadastro. O que diferencia a folha dos outros ciclos é a origem do critério.
Em compras, o critério é a política interna do cliente. Na folha, o critério é externo e tem três
camadas que não coincidem entre si: a lei trabalhista, a convenção coletiva da categoria, e a
parametrização que o cliente escolheu quando implantou o sistema.

É essa terceira camada que concentra o achado. O sistema de folha calcula corretamente aquilo que
mandaram ele calcular, e por isso o erro não aparece em nenhum contracheque: ele aparece na regra que
gerou todos os contracheques. Uma rubrica marcada como não incidente reduz a base de contribuição de
toda a população, em todas as competências, sem produzir uma única soma errada. Um acordo de
compensação celebrado na forma errada converte em hora extra devida todas as horas que foram
compensadas. Uma pessoa desligada que continua na folha gera crédito bancário regular, aprovado por
quem tinha alçada para aprová-lo.

Daí as três escolhas de método que organizam o plugin. A primeira é que **o objeto do teste é a
parametrização, não o contracheque**: a base de incidência se reconstrói pela regra declarada e se
confronta com a base gravada, em 100% da população. A segunda é que **a série vale mais que a
amostra**: habitualidade de hora extra, saldo crescente de banco de horas e volume de folha
complementar só existem ao longo do tempo, e uma amostra de uma competência os apaga. A terceira é
que o passivo se calcula. O erro de folha tem valor aritmético (diferença de base, vezes alíquota,
vezes número de competências, mais encargo de mora), e um ponto sem esse número perde a prioridade
que merece.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Consolidação das Leis do Trabalho | A lei que define relação de emprego pelos elementos de pessoalidade, subordinação, habitualidade e onerosidade, fixa limites de jornada e intervalo, e organiza aviso prévio e verbas rescisórias | A bateria de sinais de `terceiros-e-pj` §3, os recálculos de `horas-extras-e-jornada` §3, e o cálculo rescisório de `admissao-e-desligamento` §6 |
| eSocial, leiautes e eventos | O padrão de escrituração digital das obrigações trabalhistas, previdenciárias e fiscais, com eventos de cadastro, periódicos e não periódicos, cada um com prazo próprio | O quarto par de `universo-da-folha` §6 (folha contra o declarado), o risco `FOP.R14`, e o teste de tempestividade do evento de admissão em `admissao-e-desligamento` §2 |
| Convenção coletiva aplicável | O instrumento que fixa piso, percentual de adicional acima do mínimo legal, regras de banco de horas, benefícios devidos e exigências de formalização, e que muda a cada data-base | O critério de metade dos testes do plugin; o pedido do instrumento vigente e do anterior em `universo-da-folha` §9, e a parametrização testada em `horas-extras-e-jornada` §1 |
| Normas do IIA | O corpo normativo da auditoria interna, inclusive a exigência de documentação suficiente para que um terceiro reproduza o trabalho | O papel de trabalho por bloco FOP e o padrão Plano A/B/C, que registra tanto a evidência obtida quanto a que faltou |
| LGPD | O regime de tratamento de dado pessoal, com base mínima, finalidade declarada e descarte, e o tratamento agravado de dado pessoal sensível | O protocolo de sete regras de `universo-da-folha` §7, o cuidado com rubrica de saúde e de filiação sindical, e a descrição de todo achado por cargo e por registro |
| COSO, Internal Control, Integrated Framework (revisão de 2013) | O referencial de controle interno: atividade de controle existe para mitigar risco identificado, e se avalia se está presente e funcionando | A estrutura risco por controle por teste de `matriz-de-riscos-da-folha`, e o confronto de cobertura com a matriz do próprio cliente (§4) |
| Segregação de funções e controle de acesso | O princípio de que cadastrar, lançar variável, processar, revisar e liberar pagamento não podem ficar na mesma mão, e a exigência de revogação tempestiva no desligamento | O risco `FOP.R05`, e a defasagem entre desligamento e revogação medida em `admissao-e-desligamento` §5, que é encaminhada a `acta-segregacao-de-funcoes:perfis-e-acessos` |

Nenhuma numeração de artigo é citada nas skills, e isso é deliberado. A obrigação se descreve pelo
conteúdo, porque o número muda com reforma legislativa e com a data-base da convenção, e uma citação
errada derruba o achado inteiro numa discussão em que o mérito estava certo.

## Onde a ACTA se afasta do manual

O manual de auditoria de folha pressupõe um departamento pessoal estruturado, com dicionário de
rubricas mantido, sistema de ponto integrado à folha e uma área de relações trabalhistas que
interpreta a convenção coletiva. Sobre essa premissa, o programa padrão faz sentido: amostra de
contracheques, conferência de rescisões, confronto da guia com a folha, teste de acesso ao sistema.

O trabalho típico da casa é em empresa de porte médio, e ali a premissa não se sustenta. O
apontamento é parcialmente manual, com planilha entre o relógio e a folha, ou com digitação a partir
de folha de frequência assinada. O dicionário de rubricas foi montado na implantação por um consultor
que foi embora, e ninguém o revisou desde então. E a convenção coletiva é aplicada por interpretação
de **uma única pessoa**, que costuma ser a mesma que processa a folha, e cuja leitura nunca foi
revista por ninguém.

Isso muda o que se testa primeiro. A casa começa pelo **dicionário de rubricas e pela reconstrução da
base de incidência**, antes de olhar qualquer contracheque, porque é ali que está o erro que se
multiplica. Depois vem a **série histórica**, que é onde a habitualidade e o banco de horas aparecem.
A amostra de documentos vem por último, e serve para confirmar o que a população já apontou.

A segunda divergência é sobre o ponto. O manual trata o registro de jornada como fonte de alimentação
da folha, e o audita conferindo se as horas apuradas foram pagas. A casa o trata como **objeto de
auditoria por direito próprio**, e testa a parametrização dele: tolerância de marcação, arredondamento
e intervalo pré-assinalado apagam sobrejornada antes de ela chegar na folha, e nenhum desses
parâmetros aparece no espelho que o cliente entrega. Onde o apontamento é digitado por alguém a partir
de planilha, a conclusão é que o controle é a digitação, e isso se escreve.

A terceira é sobre a única pessoa que interpreta a convenção. O manual trata isso como risco de
concentração de conhecimento, com recomendação de formalizar procedimento e treinar substituto. A
casa trata como **risco de critério**: quando uma pessoa decide sozinha o que a cláusula quer dizer,
e a decisão está parametrizada no sistema há anos, o teste não é se a decisão foi seguida, é se ela
está certa. Por isso a leitura crítica da incidência declarada, em `encargos-e-beneficios` §2, é
apresentada como segunda passagem obrigatória e não como refinamento opcional.

A quarta é a fronteira com o jurídico. Os sinais de pejotização, de cooperativa de fachada e de
estágio irregular são levantados dentro do escopo da auditoria, porque o cruzamento é barato e porque
a sua ausência é exatamente o que permite o arranjo sobreviver a auditorias sucessivas. O que a casa
não faz é concluir sobre a qualificação jurídica da relação. O produto é a matriz de sinais com a
evidência de cada um, e o encaminhamento formal para parecer de quem tem competência para dá-lo.
