---
name: admissao-e-desligamento
description: Teste a tempestividade do registro contra o início efetivo da prestação, o dossiê do admitido, o recálculo das verbas rescisórias e a saída completa de quem foi desligado. Acionar ao testar admissão ou rescisão, ao cruzar data de desligamento com a última competência paga, ou ao verificar revogação de acesso na saída.
---

# Admissão, desligamento e as duas datas que organizam o vínculo

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 valem aqui integralmente e não são repetidas. Este plugin é de processo auditado;
o método vive no plugin de método. O universo e a estrutura da base estão em `universo-da-folha`.

Blocos **FOP.02** e **FOP.06**. Riscos `FOP.R06`, `FOP.R07`, `FOP.R08`, `FOP.R15` e `FOP.R16`.

## 1. Por que as duas pontas são um bloco só

Admissão e desligamento são o mesmo teste aplicado em sentidos opostos. Nos dois casos a pergunta é
se a data registrada no sistema coincide com a data em que a pessoa efetivamente começou ou parou de
trabalhar, e nos dois casos a evidência que responde não está na folha: está no ponto, no crachá, no
acesso ao sistema, no exame médico e na fatura do plano de saúde.

O erro de admissão custa multa e contribuição do período não registrado. O erro de desligamento custa
salário pago a quem não trabalha, benefício faturado para quem saiu e, no caso do acesso, uma
credencial ativa nas mãos de alguém que a empresa já não controla. Nenhum dos dois produz
contracheque com defeito, e é por isso que os dois passam na conferência mensal.

## 2. Admissão: a data que tem de vir antes

`FOP.R06`. Teste de população sobre 100% das admissões do período. A ordem correta dos eventos é
fixa, e cada inversão é achado próprio:

```
Exame admissional → Registro e assinatura do contrato → Evento transmitido ao fisco trabalhista
  → Primeiro dia de prestação
```

Monte uma linha por admitido com as cinco datas e classifique cada inversão:

| Inversão encontrada | O que significa |
|---|---|
| Primeira marcação de ponto anterior à data de admissão | Prestação sem registro. É o achado mais grave do bloco, e o período sem registro é contribuição não recolhida |
| Primeiro acesso ao sistema ou ao crachá anterior à admissão | Mesma conclusão, por evidência independente do ponto. Vale quando não há ponto para o cargo |
| Exame admissional posterior ao início | O exame perde a função, que é atestar aptidão antes da exposição ao risco |
| Exame ausente no dossiê | Achado de documentação, e responsabilidade que sobrevive ao fim do contrato |
| Evento transmitido depois do início da prestação | Descumprimento de prazo declaratório, com multa própria, independente do mérito do registro |
| Data de admissão alterada depois do registro inicial | População pequena e de alto risco. Levante a trilha de quem alterou, quando e de que valor para que valor |

Dois cortes que se rodam junto, e costumam dobrar o número de casos:

1. **Contrato de experiência.** Confira a duração, a prorrogação única e a data de término contra a
   continuidade da prestação. Contrato de experiência que venceu e a pessoa continuou trabalhando
   converteu-se em contrato por prazo indeterminado, e o efeito aparece na rescisão, não na admissão.
2. **Readmissão.** Pessoa que sai e volta em intervalo curto merece leitura própria: ou houve
   rescisão sem motivo real, com verbas pagas indevidamente, ou o desligamento foi instrumento para
   zerar direito. Levante a relação de matrículas com mais de um vínculo e o intervalo entre eles.

## 3. O dossiê e o cadastro

`FOP.R07` e `FOP.R08`. Amostra estratificada por data de admissão, com os admitidos no período
testados a 100% quando o volume permitir.

**O dossiê.** Peça a relação de documentos exigida pelo próprio cliente e teste a aderência a ela,
em vez de aplicar uma lista da casa. O que tem de existir, em qualquer política: documento de
identificação, contrato assinado com a função e o salário contratados, exame admissional, termo de
opção de vale-transporte, declaração de dependentes para fins de imposto e de salário-família, e a
ficha de registro. Onde houver cota legal, aprendiz ou pessoa com deficiência, a documentação
específica entra na mesma conferência.

**O cadastro contra o contrato.** Confronte, campo a campo, o que o contrato diz com o que o sistema
registrou: função, salário, jornada, data de início, centro de custo e regime. Divergência entre
contrato e cadastro é a origem silenciosa de erro em toda a vida do vínculo, porque é o cadastro que
calcula, não o contrato.

**Os cortes de duplicidade e de consistência**, sobre a base inteira:

- Mesmo número de documento em duas matrículas ativas.
- Mesma conta bancária recebendo por mais de uma matrícula. Ver `universo-da-folha` §6.
- Data de nascimento e nome semelhante em matrículas distintas, que é como a duplicidade sobrevive
  quando o documento foi digitado errado de propósito.
- Pessoa cadastrada sem centro de custo, sem função ou com função que não existe na estrutura.
- Salário fora da faixa do cargo, e dispersão salarial dentro do mesmo cargo e da mesma seção
  (`FOP.R08`). Teste ainda 100% das alterações salariais do período contra a aprovação, e leia as
  que ocorreram fora do mês de reajuste coletivo, que são as que exigem alçada individual.

## 4. Afastamento, férias e a folha de quem não está trabalhando

A população que está na folha sem estar no trabalho é a que menos recebe atenção e a que mais
produz resíduo. Levante a relação de afastados e de pessoas em férias por competência e cruze com
três bases:

1. **Marcações de ponto no período de afastamento ou de férias.** Marcação durante férias é férias
   não usufruídas com pagamento de férias, e o efeito é o pagamento em dobro do período. Marcação
   durante afastamento previdenciário é trabalho durante benefício, com consequência própria.
2. **Lançamentos de folha durante o afastamento.** Confira quem custeia o quê em cada tipo de
   afastamento, e em especial a manutenção e a cobrança da parte da pessoa no plano de saúde. Ver
   `encargos-e-beneficios` §4.
3. **Programação e pagamento de férias.** Períodos aquisitivos vencidos, aviso de férias, prazo de
   pagamento, abono pecuniário dentro do limite e a média de variáveis integrada na base. A média a
   integrar é a mesma apurada em `horas-extras-e-jornada` §4.

Afastamento longo sem retorno e sem desligamento formal é o caso que mais persiste: a pessoa some do
ponto, permanece no cadastro, e o vínculo fica aberto sem que ninguém decida nada. Levante quem está
afastado há mais tempo e o que a empresa fez a respeito.

## 5. O desligamento que não termina

`FOP.R15`. O achado mais barato de encontrar do ciclo inteiro e o mais frequentemente ausente do
programa. Teste de população, sobre 100% dos desligados do período e dos doze meses anteriores.

**O teste central.** Para cada pessoa desligada, compare a data de demissão do cadastro com a última
competência em que ela teve lançamento de folha, e classifique a diferença:

| Situação | Tratamento |
|---|---|
| Último lançamento na competência do desligamento, na folha de rescisão | Esperado |
| Lançamento em competência posterior, em folha mensal | Pagamento a desligado. Quantifique e apure desde quando a situação existe |
| Lançamento posterior em folha complementar ou de acerto | Pode ser legítimo, e precisa da justificativa documentada do acerto |
| Sem lançamento de rescisão em nenhuma competência | Desligamento sem rescisão calculada, ou data de demissão registrada sem o evento correspondente |
| Data de demissão posterior à última marcação de ponto por margem grande | A pessoa parou de trabalhar antes da data registrada, e o intervalo precisa de explicação |

**As outras quatro saídas que têm de acontecer junto.** O desligamento na folha é apenas uma delas, e
o teste isolado da folha deixa passar as mais caras:

1. **Benefício.** Cruze a relação de desligados com a fatura do plano de saúde, do vale-refeição e do
   vale-transporte das competências seguintes. Pessoa desligada cobrada na fatura é custo indevido
   recorrente, e o valor é recuperável junto ao prestador. Ver `encargos-e-beneficios` §4.
2. **Pagamento bancário.** Confronte com o arquivo de remessa das competências posteriores. Crédito a
   desligado fora da rescisão é o resíduo mais grave, e se apura por matrícula e valor.
3. **Acesso a sistema e a instalações.** É onde a auditoria de folha encosta em controle de acesso.
   Cruze a relação de desligados com a base de usuários ativos do sistema de folha, do sistema de
   gestão e do controle de acesso físico, e apure **a defasagem em dias entre a data do desligamento
   e a data da revogação**, pessoa a pessoa. A distribuição dessa defasagem é a peça de evidência:
   média alta indica processo sem gatilho, e casos de usuário ativo meses depois da saída indicam que
   gatilho nenhum existe. O desenho do controle, a matriz de perfis e a remediação estão em
   `acta-segregacao-de-funcoes:perfis-e-acessos`, e o achado de acesso se escreve lá, não aqui: o que
   esta skill entrega é a evidência de que a comunicação do desligamento não chegou.
4. **Crachá, equipamento e procuração.** Termo de devolução, e o cancelamento de procuração, de
   cartão corporativo e de assinatura bancária, quando o cargo os tinha.

A causa raiz dos cinco resíduos costuma ser a mesma: não existe comunicação formal do desligamento às
áreas afetadas, com confirmação de execução. O ponto se escreve sobre essa comunicação ausente, e não
sobre cada resíduo isoladamente.

## 6. Rescisão, aviso prévio e verbas

`FOP.R16`. Amostra dirigida aos maiores valores, aos motivos atípicos e a quem tinha remuneração
variável, com o recálculo integral feito fora do sistema.

**O que decide o cálculo, e se confere antes de recalcular:** o motivo do desligamento, a data do
aviso e a forma dele (trabalhado ou indenizado), a projeção do aviso indenizado sobre as demais
verbas, o saldo de banco de horas, as férias vencidas e proporcionais com o terço, o décimo terceiro
proporcional, e a média de variáveis e de horas extras que integra cada uma dessas bases.

Os pontos em que o recálculo mais dá diferença:

1. **A média de variáveis não integrada.** Comissão, prêmio e hora extra habitual compõem a base das
   verbas rescisórias. A folha que calcula a rescisão sobre o salário fixo puro subpaga toda pessoa
   com variável, e o erro é sistemático.
2. **O aviso prévio indenizado e sua projeção.** O período projetado conta para o tempo de serviço e
   repercute nas férias e no décimo terceiro proporcionais. É a omissão mais frequente.
3. **O acréscimo de dias de aviso por tempo de casa.** Confira contra o tempo de serviço apurado do
   cadastro, e não contra o informado na planilha de cálculo.
4. **O saldo de banco de horas.** Saldo positivo se paga com o adicional na rescisão; saldo negativo
   tem regra própria, e o desconto do saldo negativo é achado quando feito sem previsão no acordo.
5. **O motivo declarado contra a documentação.** Pedido de demissão sem carta assinada, justa causa
   sem a apuração documentada, e acordo entre as partes sem o instrumento correspondente. O motivo
   decide as verbas, então motivo sem lastro é cálculo sem critério.
6. **A compensação de descontos.** Consignado em aberto, adiantamento, vale-transporte e avarias. Há
   limite para o que se desconta da rescisão, e desconto acima do limite é devolução.

**Prazo e formalização.** Confronte a data do desligamento com a data do pagamento em 100%, e apure
o atraso, que tem penalidade própria em favor da pessoa. Confira ainda o termo de rescisão assinado,
a assistência sindical onde a convenção a exigir, e a guia de recolhimento rescisório do fundo de
garantia. Rescisão paga no prazo e não formalizada continua sendo passivo, porque o que se discute
depois é o que está assinado.

**Homologação e quitação.** Onde houver programa de desligamento coletivo ou acordo homologado, leia
o instrumento antes de concluir: o alcance da quitação muda o que ainda é passivo e o que já não é.

### Planos A/B/C

- **Plano A**: cadastro completo com as datas de admissão, demissão e motivo, dossiês físicos ou
  digitalizados, base de marcações, base de usuários dos sistemas com data de criação e de revogação,
  faturas dos benefícios, arquivos bancários e cálculos de rescisão. Cruzamentos em 100% e recálculo
  por amostra dirigida.
- **Plano B**: sem a base de usuários com datas, a defasagem de revogação não se mede; teste a
  existência de usuário ativo de pessoa desligada na foto de hoje, que ainda prova a falha do
  gatilho, e declare que a tempestividade da revogação não foi testada. Sem a base de marcações, a
  tempestividade da admissão passa a depender do crachá ou do primeiro acesso ao sistema.
- **Plano C**: dossiês indisponíveis ou dispersos entre filiais. A conferência documental cai; o
  cruzamento de datas sobre o cadastro permanece, e a ausência de dossiê organizado é ela própria
  deficiência de desenho, que se conclui em vez de se ressalvar.
- **Limitação**: *"O teste de tempestividade cobre [N] admissões, [X]% das do período; o cruzamento
  de desligados abrange [M] pessoas e [P] competências posteriores; a defasagem de revogação de
  acesso foi medida em [Q] sistemas de [R] existentes."*

## O que entregar

1. A linha do tempo de datas de 100% das admissões, com as inversões classificadas e o período de
   prestação sem registro quantificado.
2. Os contratos de experiência vencidos com continuidade e a relação de readmissões em intervalo
   curto.
3. A conferência do dossiê e do cadastro contra o contrato, com os cortes de duplicidade e a
   dispersão salarial por cargo e seção.
4. O cruzamento de afastados e de pessoas em férias com marcações, lançamentos e faturas, e a relação
   de afastamentos longos sem decisão.
5. O cruzamento de 100% dos desligados com as competências posteriores, com as cinco saídas testadas
   e cada resíduo quantificado.
6. A distribuição da defasagem entre desligamento e revogação de acesso, por sistema, encaminhada a
   `acta-segregacao-de-funcoes:perfis-e-acessos`.
7. O recálculo das rescisões da amostra, com a diferença por pessoa, a extrapolação para a população
   e os atrasos de pagamento quantificados.
8. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`terceiros-e-pj`, porque a relação de desligados que voltaram a prestar serviço como pessoa jurídica
é um dos sinais que aquela skill acumula. A redação do ponto e a calibração de severidade estão em
`redacao-de-achados` e em `acta-controles-internos:deficiencias-e-severidade`.
