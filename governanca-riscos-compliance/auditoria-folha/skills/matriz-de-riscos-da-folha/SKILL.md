---
name: matriz-de-riscos-da-folha
description: Monte o registro de riscos e a matriz risco por controle e por teste do ciclo de folha, com os dezoito riscos codificados da casa. Acionar ao abrir o programa de testes de folha, ao verificar se a matriz do mandato cobre incidência parametrizada errada, hora extra habitual, pagamento a desligado e pejotização, ou ao promover risco novo.
---

# Matriz de riscos e controles da folha

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

A taxonomia de tipo de teste, a régua de amostragem, os conceitos de risco (categoria, evento, fator)
e o formato do código `<CódProcesso>.R<NN>` estão em `programa-de-testes`. A estrutura formal da
matriz risco por controle, o walkthrough e a distinção entre desenho e efetividade estão em
`acta-controles-internos`. Esta skill traz apenas **o conteúdo de folha**: quais riscos existem no
ciclo, que controle de melhor prática os mitiga, e como cada um se testa.

## 1. Os dezoito riscos do ciclo de folha

Processo `FOP`. Blocos executáveis em `universo-da-folha` §2. O controle da terceira coluna é o de
**melhor prática de mercado**, não o normativo interno do cliente. Severidade é sugestão de partida;
calibre no caso, com `redacao-de-achados` e `acta-controles-internos:deficiencias-e-severidade`.

| Código | Bloco | Risco | Controle (melhor prática) | Como se testa | Sev. |
|---|---|---|---|---|---|
| `FOP.R01` ★ | FOP.01 | **Rubrica com incidência parametrizada errada**: verba de natureza salarial marcada como não incidente, ou o inverso, replicando o erro em toda a população e em todas as competências | Dicionário de rubricas com incidência declarada, revisão na criação e na alteração por quem não processa, e reavaliação periódica | Reconstrução da base de cada encargo pela incidência declarada, confrontada com a base gravada, em 100% da população; leitura das rubricas sem incidência em nenhum encargo | Alta |
| `FOP.R02` | FOP.01 | Rubrica criada ou alterada fora do fluxo, sem aprovação, ou rubrica genérica usada como escoadouro de pagamento fora de política | Alçada e trilha nominal para criação e alteração de rubrica, com justificativa e revisão independente | 100% das rubricas criadas ou alteradas no período: quem, quando, com que autorização, e quantas pessoas foram pagas por ela | Alta |
| `FOP.R03` | FOP.01 | Folha não concilia com a contabilidade, ou a diferença é empurrada por lançamento manual em conta de pessoal | Conciliação mensal por conta e por competência, assinada por quem não processa a folha, com tratamento formal da diferença | Conciliação por conta e competência ao centavo; 100% dos lançamentos manuais em conta de pessoal; provisão de férias e décimo terceiro contra o direito apurado | Alta |
| `FOP.R04` | FOP.05 | Crédito bancário sem lançamento correspondente na folha, pagamento a pessoa fora do cadastro, ou conta bancária de terceiro recebendo por uma matrícula | Conciliação folha, remessa, retorno e extrato; alçada de tesouraria distinta da de folha; validação da titularidade da conta | Casamento por matrícula e valor nos quatro documentos; a mesma conta recebendo por mais de uma matrícula; alterações de conta bancária a 100% | Alta |
| `FOP.R05` | FOP.05 | Ausência de segregação entre cadastrar, lançar variável, processar, revisar e liberar o pagamento | Perfis segregados no sistema, revisão da folha por pessoa independente de quem processa, e aprovação do líquido total por alçada | Matriz de acesso às transações críticas; quem processou contra quem revisou contra quem liberou, em 100% das competências | Alta |
| `FOP.R06` | FOP.02 | Pessoa prestando serviço antes do registro, ou registro sem exame admissional prévio | Registro e exame anteriores ao início da prestação, com checklist de documentação conferido por quem não admite | Data de admissão contra data do exame, contra primeira marcação de ponto e contra o evento transmitido, em 100% das admissões | Alta |
| `FOP.R07` | FOP.02 | Cadastro inconsistente ou duplicado: a mesma pessoa em duas matrículas, dois centros de custo ou duas contas bancárias | Crítica automática nos campos-chave na inclusão e conferência independente do cadastro contra a documentação | Duplicidade por documento, por conta bancária e por data de nascimento com nome semelhante; inventário por amostra estratificada | Média |
| `FOP.R08` | FOP.02 | Salário fora da faixa do cargo, ou pessoas no mesmo cargo com dispersão salarial sem justificativa | Estrutura de cargos e salários aprovada, vinculada ao cargo no sistema, com alçada para exceção | Salário contra a faixa do cargo em 100%; dispersão por cargo e por seção; 100% das alterações salariais do período contra a aprovação | Média |
| `FOP.R09` ★ | FOP.03 | **Hora extra habitual**: sobrejornada recorrente que descaracteriza a eventualidade e integra a remuneração para todos os efeitos, com reflexo não pago | Aprovação prévia de hora extra, acompanhamento de recorrência por pessoa e por área, e dimensionamento do quadro quando a recorrência se instala | Frequência por pessoa e por competência ao longo da série; reflexo em descanso semanal, férias, décimo terceiro e rescisão recalculado na amostra | Alta |
| `FOP.R10` | FOP.03 | Divergência entre ponto e folha: hora paga acima da apontada, falta não descontada, ou pessoa que deveria marcar e não marca | Integração do ponto com a folha, com crítica de inconsistência e tratamento formal da exceção antes do fechamento | Confronto ponto contra folha em 100% da população e do período, por pessoa e competência, com os resíduos dos dois lados | Alta |
| `FOP.R11` | FOP.03 | Adicional noturno, intervalo intrajornada, sobreaviso e banco de horas calculados por regra errada ou não pagos | Parametrização revisada contra a convenção vigente e acordo de compensação formalizado e válido | Recálculo na amostra, isolando jornada mista; marcações sem intervalo mínimo; saldo e prazo de compensação do banco de horas | Alta |
| `FOP.R12` ★ | FOP.04 | **Benefício descontado a mais ou a menos**: desconto sem autorização, desconto acima do teto, benefício faturado para quem não é elegível, dependente indevido | Importação automática do desconto a partir do arquivo do prestador, conciliação mensal fatura contra elegível contra descontado, e autorização assinada por desconto | Conciliação a três pontas por competência; teto do desconto de vale-transporte; dependentes contra o grau de parentesco aceito; pessoas com saldo negativo recorrente | Alta |
| `FOP.R13` | FOP.04 | Recolhimento a menor ou a maior de contribuição previdenciária, fundo de garantia e imposto retido, ou recolhimento em atraso | Cálculo automático sobre base parametrizada, atualização tempestiva das tabelas e conciliação da guia com a base gravada | Base gravada contra guia recolhida por competência; saldo a recolher contra o pagamento do mês seguinte; data de vencimento contra data de recolhimento | Alta |
| `FOP.R14` | FOP.04 | Divergência entre o que a folha calculou e o que foi declarado ao fisco trabalhista, ou evento transmitido fora do prazo | Conferência da declaração contra a folha antes da transmissão, e monitoramento de recibo e de retificação | Folha contra o transmitido, por competência e por rubrica; relação de eventos transmitidos fora do prazo e de retificações | Alta |
| `FOP.R15` ★ | FOP.06 | **Pessoa desligada que continua na folha** ou continua com benefício ativo, acesso ativo e crédito bancário | Comunicação formal do desligamento às áreas afetadas, inativação na folha e cancelamento do benefício na mesma competência | Data de demissão contra lançamentos posteriores, em 100%; contra a fatura do benefício do mês seguinte; contra o arquivo bancário | Alta |
| `FOP.R16` | FOP.06 | Verba rescisória calculada a menor ou a maior, paga fora do prazo, ou rescisão concluída sem aprovação | Cálculo automático com parâmetros revisados, aprovação formal da rescisão e controle do prazo de pagamento | Recálculo integral na amostra dirigida aos maiores e aos motivos atípicos; data do desligamento contra data do pagamento em 100% | Alta |
| `FOP.R17` ★ | FOP.07 | **Pejotização**: prestador contratado como pessoa jurídica que trabalha com pessoalidade, subordinação, habitualidade e onerosidade, configurando vínculo não reconhecido | Política de contratação com critério objetivo, parecer prévio para contratação de PJ e revisão periódica dos contratos vigentes | Cruzamento do prestador com a base de pessoal e com o ponto; exclusividade de faturamento; tempo de contrato; comparação da função com cargo existente no quadro | Alta |
| `FOP.R18` | FOP.07 | Estágio, aprendizagem, cooperativa e terceirização usados fora dos requisitos legais, ou terceiro sem fiscalização documentada do cumprimento das obrigações trabalhistas | Requisitos verificados na contratação, e rotina documentada de fiscalização das obrigações do prestador, com retenção do pagamento na falta | Convênio, plano de atividades e supervisão do estágio; cota de aprendiz e de pessoa com deficiência; comprovantes de recolhimento do prestador por competência | Alta |

★ = os cinco riscos que decidem a auditoria de folha. Ver §2.

## 2. Os cinco que decidem o trabalho

Programa de folha que confere contracheque, confirma que a rescisão foi assinada e checa se a guia
foi recolhida passa a impressão de cobertura e não encosta em nenhum dos cinco abaixo. Eles têm em
comum uma característica: **o contracheque individual está aritmeticamente correto**. O sistema
calculou certo a partir de uma regra errada, e a regra errada é que é o achado.

**1. Incidência parametrizada errada (`FOP.R01`).** Uma rubrica de natureza salarial marcada como não
incidente reduz a base de contribuição de todas as pessoas que a recebem, em todas as competências,
sem nunca produzir um único contracheque com erro de soma. O passivo é o produto de um erro pequeno
por muitas pessoas e por muitos meses, mais encargo de mora, e por isso costuma ser o maior número do
relatório. O teste é de população: reconstruir a base pela incidência declarada e confrontar com a
gravada. Ver `encargos-e-beneficios` §2.

**2. Hora extra habitual (`FOP.R09`).** Cada hora extra foi aprovada, apontada e paga com o adicional
correto. O desvio não está em nenhuma delas: está na frequência. Quando a sobrejornada deixa de ser
eventual, ela integra a remuneração e repercute em descanso semanal, férias, décimo terceiro, fundo
de garantia e rescisão, e é esse reflexo que não é pago. O teste é a série temporal por pessoa, nunca
a amostra de um mês. Ver `horas-extras-e-jornada` §4.

**3. Benefício descontado a mais ou a menos (`FOP.R12`).** O único risco do ciclo que produz passivo
nos dois sentidos ao mesmo tempo: desconto indevido gera devolução em dobro para a pessoa, e
benefício pago a quem não é elegível gera custo e, conforme a verba, base de incidência. Testa-se
conciliando três documentos que quase nunca são conciliados juntos: a fatura do prestador, a relação
de elegíveis e o desconto da folha. Ver `encargos-e-beneficios` §4.

**4. Pessoa desligada que continua na folha (`FOP.R15`).** O achado mais fácil de encontrar e o mais
frequentemente ausente do programa, porque exige cruzar a data de demissão do cadastro com os
lançamentos das competências seguintes, com a fatura do plano de saúde e com o arquivo bancário. É
teste de população, roda em minutos, e o valor é recuperável. Ver `admissao-e-desligamento` §5.

**5. Pejotização (`FOP.R17`).** O risco de maior passivo por pessoa de todo o ciclo, e o único que
não se testa dentro da base de folha: exige cruzar contratos de prestação de serviço com a base de
pessoal, com o controle de acesso e com o ponto. Reconhecido o vínculo, o passivo vai de todos os
encargos não recolhidos a todas as verbas não pagas, por todo o período do contrato. Ver
`terceiros-e-pj`.

**Uma nota de categoria.** Os riscos de folha costumam ser classificados como falha operacional de
departamento pessoal. Os cinco acima são eventos de **passivo trabalhista e tributário**, com
mensuração, provisão e dono diferentes. Se a taxonomia do mandato não tiver a categoria, crie-a antes
de classificar: categoria errada some do mapa de calor da área errada, e o comitê precisa ver estes.

**Uma nota de mensuração.** Diferente de compras, aqui o achado quase sempre **tem valor calculável**:
diferença de base multiplicada pela alíquota, multiplicada pelo número de competências, mais encargo
de mora. Calcule. Um ponto de folha sem o passivo estimado perde a prioridade que merece, e a
estimativa é o que transforma o achado em decisão de provisão.

## 3. Como usar a matriz num mandato

1. **Parta dos dezoito.** Eles são o piso, não o teto.
2. **Marque a aplicabilidade bloco a bloco**, usando as sete perguntas de `universo-da-folha` §9.
   Risco inaplicável **se declara com a razão**: onde não há trabalho noturno nem escala, parte de
   `FOP.R11` não se aplica, e isso se escreve, não se omite.
3. **Acrescente o que o mandato trouxer.** Remuneração por comissão traz o reflexo em descanso
   semanal e o risco de estorno; operação rural, portuária ou de transporte traz jornada própria;
   expatriado traz regime previdenciário e tributário próprio; participação nos resultados traz o
   requisito de acordo prévio com metas objetivas, e a sua ausência converte a verba em salário. O
   risco nasce da forma de remunerar e da atividade, não do setor.
4. **Associe controle e teste por código**, nunca repetindo o texto do risco na linha do controle.
5. **Promova o risco novo de volta para cá** ao fechar o trabalho, com o controle e a forma de testar.

## 4. Quando o cliente já tem a própria matriz

Auditar sobre a matriz do cliente sem confrontá-la é herdar os pontos cegos dele. Três verificações:

- **Cobertura dos blocos.** Os sete blocos de `universo-da-folha` §2 aparecem? Rubrica e trabalhador
  sem vínculo direto são os que mais faltam, porque não têm dono claro entre pessoal, fiscal e
  jurídico.
- **Cobertura dos cinco da §2.** É o teste de maturidade mais rápido que existe para matriz de folha.
  Matriz que só tem "erro no cálculo da folha" e "atraso no recolhimento" cobre o erro visível e
  ignora o passivo que se acumula em silêncio.
- **Controle sem risco e risco sem controle.** Conferência de contracheque por amostra, que aparece
  em quase toda matriz de folha, não ataca nenhum dos cinco: é atividade, não controle.

A ausência de um risco na matriz do cliente é achado de desenho do processo de gestão de riscos, e
entra no relatório como tal. Não se corrige em silêncio acrescentando o risco ao programa.

## O que entregar

1. O registro de riscos do mandato, em aba própria, código `FOP.R<NN>`, com categoria, evento e fator.
2. A matriz risco por controle por teste, associada por código.
3. A lista dos riscos declarados inaplicáveis, com a razão contratual, operacional ou coletiva.
4. Para cada risco confirmado, o passivo estimado, com a memória de cálculo e o número de
   competências afetadas.
5. Os riscos novos que o mandato revelou, prontos para promoção a esta matriz.
6. Quando houver matriz do cliente: o confronto de cobertura e os riscos ausentes apontados.

## Próximo passo

`programa-de-testes`, para converter a matriz em programa com tipo de teste, frequência e régua de
amostragem; depois as skills de bloco, começando por `encargos-e-beneficios`, que é onde está o
risco de maior valor.
