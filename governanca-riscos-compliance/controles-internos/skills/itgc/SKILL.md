---
name: itgc
description: Avalie e teste controles gerais de TI nos quatro domínios e conclua sobre a dependência que eles criam. Acionar ao mapear acessos, mudanças, operações e desenvolvimento, ao testar completude e exatidão de relatório gerado por sistema, ao decidir se um controle automatizado pode ser testado com amostra de 1, ou ao avaliar o efeito de ITGC ineficaz.
---

# ITGC: controles gerais de tecnologia da informação

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas.

As técnicas de teste, o dimensionamento de amostra e o tratamento de exceção vivem em
`teste-de-controle-e-amostragem` e não se repetem: ITGC testa-se com as mesmas quatro técnicas e a
mesma régua. A separação desenho × efetividade é de `desenho-vs-efetividade`, e a classificação de
severidade é de `deficiencias-e-severidade`.

## 1. A dependência: por que o ITGC vem primeiro

ITGC não é um capítulo do trabalho de controles internos. É **precondição** de tudo o que se apoia em
sistema, e a razão é lógica, não normativa:

> **Controle de aplicação e relatório gerado por sistema só são confiáveis se os ITGCs forem
> efetivos.**

Um bloqueio parametrizado impede o pagamento a fornecedor não cadastrado. Isso vale se — e somente se
— ninguém puder alterar o parâmetro sem autorização (gestão de mudanças), ninguém tiver acesso
privilegiado para contornar a regra (gestão de acessos), e a rotina que executa a validação rodar
como previsto (operações). Sem esses três, o bloqueio testado hoje não diz nada sobre ontem.

Daí decorrem quatro consequências práticas, e a quarta é a que costuma ser suavizada indevidamente:

- **O ITGC é testado antes dos controles de aplicação**, e o cronograma precisa refletir isso.
  Descobrir ITGC deficiente depois de testar quarenta controles automatizados invalida os quarenta.
- **A amostra de 1 do controle automatizado depende do ITGC.** É a presunção de invariância do
  sistema (`teste-de-controle-e-amostragem` §3) que autoriza testar um item só. Sem ITGC efetivo, a
  presunção cai.
- **Toda população extraída de sistema herda a confiabilidade do ambiente.** Por isso o teste de IPE
  do §4 é obrigatório, e por isso ele não substitui o ITGC: são camadas distintas.
- **ITGC ineficaz é conclusão, não ressalva.** A formulação correta não é *"ressalvamos que os
  controles gerais de TI apresentam oportunidades de melhoria"*. É: os controles automatizados e os
  relatórios que dependem daquele ambiente **não puderam ser considerados confiáveis no período**, e
  os controles que se apoiavam neles passam a exigir teste substantivo ou conclusão `Ineficaz`.
  Escrever isso como observação lateral é o erro que esvazia o trabalho de TI inteiro.

**Escopo: quais sistemas entram.** Não todos. Entram as aplicações de que dependem controles chave,
contas significativas ou relatórios usados como evidência — a mesma disciplina *top-down* de
`matriz-riscos-controles` §2. A coluna `Aplicações envolvidas` do RACM é exatamente o que gera essa
lista, e é por isso que ela existe. Para cada aplicação em escopo, o ITGC alcança as **camadas**:
aplicação, banco de dados, sistema operacional e rede, quando o acesso por camada inferior permite
contornar o controle da superior. Declarar escopo "sistema X" sem dizer em que camadas é escopo
incompleto.

**Âncoras.** O **COBIT** organiza os domínios e os objetivos de controle de TI; a **PCAOB AS 2201**
estabelece a dependência entre ITGC, controles de aplicação e evidência de sistema; a **ISO/IEC
27001** contribui onde o trabalho toca segurança da informação como disciplina própria, e não deve
ser invocada onde o objeto é confiabilidade do reporte financeiro.

## 2. Gestão de acessos

O domínio que mais produz achado, e o que mais rapidamente contamina outros controles, porque acesso
indevido derruba segregação de funções em todos os processos de negócio simultaneamente.

| Ponto de controle | O que se verifica | Evidência típica |
|---|---|---|
| **Concessão** | solicitação formal, aprovação do gestor da área **antes** da concessão, perfil concedido igual ao aprovado | chamado, aprovação com data e hora, tela do perfil atribuído |
| **Revisão periódica** | recertificação por gestor com periodicidade definida, cobrindo a base completa de usuários, com **ação efetiva** sobre o que foi contestado | base revisada, evidência da revisão por gestor, e o rastro das revogações que decorreram dela |
| **Revogação na saída** | acesso removido no desligamento, com tempestividade medida em dias | relação de desligados do período cruzada com a base de usuários ativos |
| **Acesso privilegiado** | quem tem perfil de administrador, por que tem, e como o uso é monitorado | relação nominal de contas privilegiadas, por cargo, com justificativa e log de uso |
| **Segregação de funções** | matriz de conflitos definida e monitorada; combinações proibidas ausentes da base | matriz SoD da Companhia e o cruzamento contra os perfis efetivos |
| **Autenticação** | política de senha, autenticação multifator onde cabe, contas genéricas identificadas e justificadas | parametrização vigente, com a evidência de estabilidade no período |

Cinco armadilhas recorrentes:

- **Revisão de acesso sem ação é revisão que não aconteceu.** A evidência de que o gestor recebeu a
  planilha não é evidência de controle: o que prova o controle é a revogação decorrente. Revisão em
  que nenhum acesso foi removido, em base de centenas de usuários, é sinal de carimbo, não de base
  limpa.
- **Conta genérica e conta de serviço** não têm responsável identificável e, portanto, quebram a
  trilha de auditoria de tudo que fazem. Inventarie, exija dono nominal por cargo e restrinja o uso
  interativo.
- **Revogação medida em dias, não em "sim/não".** A métrica útil é o prazo entre o desligamento e a
  revogação, com o maior prazo do período declarado. Acesso removido 40 dias depois é acesso ativo
  por 40 dias.
- **Usuário ativo sem vínculo** é o teste mais simples e o de maior rendimento: base de usuários
  cruzada com a folha do período. Faça-o cedo.
- **O acesso do TI ao ambiente de produção** é o privilégio que a matriz do cliente esquece, e é o
  que permite alterar dado sem passar por nenhum controle de aplicação.

## 3. Gestão de mudanças, operações e desenvolvimento

### Gestão de mudanças

| Ponto de controle | O que se verifica |
|---|---|
| **Solicitação** | toda mudança em produção nasce de registro formal, com demandante e motivo |
| **Aprovação** | aprovação funcional (quem pediu) e técnica (quem avalia impacto), **antes** da promoção |
| **Teste e homologação** | evidência de teste, com aceite do usuário de negócio, antes da entrada em produção |
| **Segregação entre desenvolver e promover** | quem escreve o código **não** é quem o promove a produção; ambientes separados |
| **Mudança emergencial** | caminho de exceção definido, com aprovação posterior obrigatória e prazo, e a relação das emergenciais do período |

A segregação entre desenvolvimento e promoção é o ponto de controle que sustenta todos os demais do
domínio: sem ela, o fluxo de aprovação é contornável por quem tiver pressa. **O caminho emergencial é
onde mora o risco real**: quando a maioria das mudanças do período entrou como emergencial, o
processo formal existe no papel e não opera — e essa contagem é o teste mais barato do domínio.
Sistema sem nenhuma mudança registrada no período também é sinal, não é conforto: ou não houve
mudança (verificável) ou elas não passam pelo processo.

### Operações

| Ponto de controle | O que se verifica |
|---|---|
| **Job scheduling** | rotinas críticas agendadas, com monitoramento de execução; falha gera alerta e tratamento registrado |
| **Backup** | rotina definida, execução monitorada, retenção declarada |
| **Restore testado** | restauração efetivamente testada no período, com resultado registrado |
| **Monitoramento de incidentes** | incidentes registrados, classificados, tratados, com prazo e causa |

**Backup sem teste de restauração é backup presumido.** É o achado mais comum e o mais fácil de
demonstrar: peça a evidência do último teste de restauração e a data. Se nunca houve, o controle não
existe — a fita que não restaura tem valor zero no dia em que precisa.

### Desenvolvimento e aquisição de sistemas

Domínio que só entra em escopo quando houve implantação, migração ou aquisição relevante no período.
Pontos: requisitos aprovados pelo negócio; **migração de dados com conciliação antes e depois**, com
saldos batidos e documentados; testes de aceitação com aceite formal; segregação entre ambientes; e
controles do sistema legado mantidos até o desligamento efetivo. A migração é o momento de maior
exposição do ciclo inteiro e tipicamente não tem controle desenhado — um saldo que muda na migração
sem conciliação não volta a ser reconstituível depois.

## 4. Relatório gerado por sistema (IPE)

**A lacuna mais comum do mercado**, e a que mais rapidamente invalida teste bem executado.

Sempre que o auditor usa um relatório do ERP como evidência — a população para amostrar, o saldo para
conciliar, a relação de usuários, o razão auxiliar, o relatório de aging —, aquele relatório é
**informação produzida pela entidade** (*information produced by the entity*), e não é evidência
pronta. Ele precisa ser testado quanto a **completude** e **exatidão**, e a razão é direta: uma
amostra impecável extraída de um relatório que omite uma filial conclui sobre uma população que não é
a população.

O procedimento, e ele vale para todo relatório usado como evidência, inclusive os que o próprio
auditor extraiu:

1. **Identifique a fonte e os parâmetros.** Que sistema, que transação ou relatório, que filtros,
   que período, que data e hora da extração, e quem extraiu. Sem os parâmetros, o relatório não se
   reproduz.
2. **Teste a completude.** Some o relatório e concilie com fonte independente: o razão, o balancete,
   a contagem total do sistema, ou o mesmo relatório com filtro mais amplo. Confira o **total de
   registros**, não apenas o total em valor.
3. **Teste a exatidão.** Selecione itens do relatório e confira contra a transação de origem no
   sistema, campo a campo, para os campos que o teste usa. Faça também o caminho inverso: itens do
   sistema que deveriam estar no relatório e confira se estão.
4. **Avalie o risco do próprio relatório.** Relatório padrão do sistema, não parametrizável, tem
   risco menor. Relatório customizado, query construída sob demanda, ou extração exportada para
   planilha e editada têm risco alto — e **planilha intermediária entre a extração e o uso é ponto de
   quebra**: sem log, sem versionamento, editável por qualquer um.
5. **Extraia você mesmo sempre que possível.** Extração feita pelo auditor, com os parâmetros
   registrados, elimina a discussão sobre o que foi filtrado. Quando a extração é da Companhia, peça
   a tela dos parâmetros junto com o arquivo.
6. **Registre o teste no papel de trabalho.** IPE testado e não documentado equivale a IPE não
   testado quando o WP é revisado.

**O relatório usado no controle do cliente também é IPE.** Se o controle é "o gerente analisa o
relatório de aging mensal", o teste de efetividade daquele controle precisa alcançar a confiabilidade
do relatório que o gerente analisa. Controle perfeito sobre relatório incompleto conclui sobre nada,
e essa é a cadeia que quase nunca é fechada.

## 5. Codificação de controle por domínio

Exemplo de **padrão de codificação**, e nada além disso — a estrutura é útil, o conteúdo é de quem
escreve a sua própria matriz. Prefixo de domínio mais numeração hierárquica:

```
<PREFIXO DE DOMÍNIO>-<NÍVEL 1>.<NÍVEL 2>.<NÍVEL 3>
```

| Prefixo | Domínio | Faixa hierárquica |
|---|---|---|
| `AC` | Acesso a programas e dados | `AC-1.1.x` concessão · `AC-1.2.x` revisão · `AC-1.3.x` revogação · `AC-1.4.x` privilegiado |
| `CM` | Gestão de mudanças | `CM-2.1.x` solicitação e aprovação · `CM-2.2.x` teste · `CM-2.3.x` promoção e segregação |
| `OP` | Operações | `OP-3.1.x` jobs · `OP-3.2.x` backup e restore · `OP-3.3.x` incidentes |
| `DV` | Desenvolvimento e aquisição | `DV-4.1.x` requisitos · `DV-4.2.x` migração · `DV-4.3.x` aceitação |

Composto com prefixo de entidade e de aplicação, como em `matriz-riscos-controles` §4, um código
passa a ser legível sem abrir nada: entidade, domínio, aplicação e referência numérica. As três
propriedades que fazem o padrão servir são as mesmas de lá, e a principal é que **a referência
numérica é estável entre entidades e entre ciclos** — o controle de concessão de acesso tem o mesmo
número em toda entidade, o que permite consolidar sem mapa de-para. Nunca renumere código já emitido.

## 6. ITGC ineficaz: o que fazer com o resto do trabalho

Quando um domínio conclui `Ineficaz`, a consequência é imediata e precisa estar no relatório como
conclusão. O efeito é assimétrico por domínio:

| Domínio ineficaz | Efeito sobre o que depende |
|---|---|
| **Acessos** | segregação de funções não é confiável em nenhum processo daquele sistema; controles automatizados podem ter sido contornados; relatórios podem ter sido alterados |
| **Mudanças** | a configuração testada hoje não se presume vigente durante o período; **cai a amostra de 1** de todo controle automatizado |
| **Operações** | rotinas automáticas podem não ter executado; integridade de dado depende de backup não testado |
| **Desenvolvimento** | saldos migrados não são reconstituíveis; controles do legado podem ter se perdido na transição |

Três caminhos, e só três, para o que dependia do ambiente:

1. **Testar o controle dependente como manual**, com amostra pela frequência e pelo período inteiro,
   em vez de amostra de 1. Custa horas, e as horas precisam existir no orçamento.
2. **Substituir por teste substantivo** sobre o resultado, quando o controle não puder ser testado.
3. **Concluir `Ineficaz`** com razão (iii) de `desenho-vs-efetividade`, quando nenhuma das duas for
   possível.

**E agregue.** A deficiência de ITGC mais os controles dependentes formam um grupo de agregação
obrigatório em `deficiencias-e-severidade` §3: individualmente, "a revisão de acesso não é
formalizada" parece simples; agregada aos controles que dependem daquele ambiente, muda de patamar.

## 7. Mid-market brasileiro: o que muda

- **Não há área de TI com processos formalizados; frequentemente há um provedor terceirizado.**
  Quando o ambiente é operado por terceiro, o controle da Companhia sobre o terceiro entra em escopo:
  contrato com cláusula de nível de serviço, monitoramento, e a pergunta de quem, do lado do
  fornecedor, tem acesso privilegiado ao ambiente do cliente. Relatório de asseguração do provedor,
  quando existir, é evidência; quando não existir, a lacuna é da Companhia, não do provedor.
- **ERP de prateleira com parametrização feita pelo implantador anos atrás** é o cenário padrão.
  Ninguém sabe qual regra está ligada. Levantar a parametrização vigente costuma ser, por si, item de
  alto valor percebido.
- **Acesso privilegiado concentrado em uma ou duas pessoas** é a regra, não a exceção. Não adianta
  recomendar segregação onde não há gente: a recomendação viável é monitoramento compensatório com
  revisão independente de log, e ela precisa ser desenhada para o porte.
- **Nada aqui é exigência SOX para empresa fechada.** ITGC estruturado por domínio, com evidência
  formal e recertificação periódica, é exigência para companhia registrada na SEC; para empresa
  fechada é **boa prática**, e a gradação se faz pelos sistemas que sustentam as contas
  significativas — não pelo inventário completo de aplicações.
- **A planilha é o sistema.** Quando o controle roda em Excel, o ITGC aplicável é o controle sobre a
  planilha: quem tem acesso, como se versiona, se as fórmulas são protegidas, e quem valida os
  vínculos. Mapeie as planilhas críticas com dono e finalidade, como em `walkthrough-e-narrativa` §6.

## O que entregar

1. O escopo de ITGC: aplicações em escopo, com a razão de cada uma, e as camadas alcançadas por
   aplicação.
2. A matriz de ITGC nos quatro domínios, codificada pelo padrão do §5, integrada ao RACM.
3. O teste de IPE de **todo** relatório usado como evidência, próprio ou do cliente, com fonte,
   parâmetros, e os testes de completude e exatidão documentados.
4. A relação de contas privilegiadas por cargo, com justificativa, e o cruzamento usuários ativos ×
   vínculo vigente.
5. A medição de tempestividade de revogação: prazo médio e maior prazo do período, em dias.
6. A contagem de mudanças do período por caminho, separando o formal do emergencial.
7. A data e o resultado do último teste de restauração de backup.
8. A **conclusão de dependência**: a lista dos controles de aplicação e relatórios cuja confiabilidade
   fica comprometida por cada deficiência de ITGC, com o caminho adotado para cada um.

## Checklist antes de dar por concluído

- Nenhum controle automatizado concluído com amostra de 1 sem ITGC de mudanças e de acessos efetivo.
- Nenhum relatório usado como evidência sem teste de IPE documentado, inclusive os extraídos pela
  própria auditoria.
- Nenhuma conta privilegiada sem justificativa e sem dono por cargo; nenhuma conta genérica sem
  inventário.
- Revisão de acesso testada pela **ação decorrente**, não pelo envio da base.
- Tempestividade de revogação medida em dias, com o maior prazo do período declarado.
- Caminho emergencial de mudanças com contagem do período e aprovação posterior verificada.
- Teste de restauração de backup com data e resultado, não apenas rotina de backup configurada.
- ITGC ineficaz redigido como **conclusão**, com a lista de controles contaminados, e não como
  ressalva ou oportunidade de melhoria.
- Nenhum nome de pessoa: contas e responsáveis aparecem por cargo.

## Próximo passo

`deficiencias-e-severidade`, com a agregação obrigatória entre a deficiência de ITGC e os controles
dependentes. Os controles de aplicação que sobreviverem à dependência seguem em
`teste-de-controle-e-amostragem`, e a redação dos pontos é de `redacao-de-achados`, do plugin de
método.
