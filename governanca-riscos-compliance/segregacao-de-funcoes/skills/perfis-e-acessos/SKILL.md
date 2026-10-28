---
name: perfis-e-acessos
description: Teste o ciclo de vida do acesso ponta a ponta, da concessão à revogação no desligamento, medindo tempestividade em dias e tratando usuário genérico, conta de serviço e privilégio de banco. Acionar ao testar concessão ou modificação de acesso, ao avaliar a revisão periódica de perfis, ao medir a revogação no desligamento, ou ao inventariar conta genérica e acesso privilegiado.
---

# O ciclo de vida do acesso

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill. `acta-controles-internos:itgc` §2 traz a tabela
de pontos de controle de acesso e não se repete aqui: esta skill é o teste ponta a ponta de cada
ponto, com a mecânica de população, amostra e evidência.

O dimensionamento de amostra vive em `acta-metodo-auditoria:programa-de-testes`. O que é próprio
deste ciclo (anualização de população parcial, o corte entre fase intermediária e fase final, e a
régua de controle remediado) está em
[`references/populacao-e-amostra.md`](references/populacao-e-amostra.md).

## 1. Os quatro atos, e por que a numeração importa

O ciclo tem quatro atos, e em ambiente de companhia registrada na SEC eles aparecem como controles
numerados e estáveis entre entidades e entre exercícios. A numeração corrente nesse tipo de ambiente
é útil como padrão de codificação, e a ACTA a adota:

| Cód. | Ato | Frequência típica | Pergunta-mestra |
|---|---|---|---|
| `1.1.1` | Conceder ou modificar acesso | diária | o perfil concedido é o perfil aprovado, e a aprovação veio antes? |
| `1.2.1` | Revisar periodicamente os acessos | semestral ou trimestral | a revisão produziu revogação, e quem revisou podia revisar? |
| `1.3.3` | Administrar o banco de dados | anual ou semestral | quem tem privilégio no banco, por que tem, e como o uso é monitorado? |
| `1.4.1` | Revogar no desligamento | diária | quantos dias o acesso sobreviveu ao desligamento? |

A vantagem de numerar assim é a comparação entre ciclos: o mesmo controle tem o mesmo número no ano
seguinte, e a evolução se lê sem mapa de-para. A frequência da coluna do meio é o que dimensiona a
amostra, e inferir frequência em vez de constatá-la contamina o dimensionamento inteiro.

## 2. Concessão e modificação

**População.** Todo chamado de acesso aberto no período, extraído da ferramenta de chamados. É
relatório gerado por sistema e exige teste de completude e exatidão antes de qualquer amostra:
o `acta-controles-internos:itgc` §4 vale integralmente e o teste se documenta no papel de trabalho.
O corte de completude mais barato é confrontar a contagem de chamados de acesso com a base de
admissões e transferências do período: admissão sem chamado de acesso é ou acesso concedido fora do
processo, ou admitido que não usa sistema, e as duas hipóteses precisam de resposta.

**Atributos por item da amostra**, e os quatro têm de estar presentes:

| Atributo | O que se confirma | Onde falha |
|---|---|---|
| Solicitação formal | chamado registrado, com solicitante e perfil pedido | pedido por e-mail ou verbal, sem registro |
| Aprovação do gestor | aprovação **anterior** à concessão, por quem tem competência sobre a área de destino | aprovação posterior, ou dada pelo próprio solicitante |
| Execução conforme | o perfil efetivamente atribuído é **igual** ao aprovado, nem mais nem menos | concessão que vem junto com perfil vizinho "porque o pacote é esse" |
| Rastro em tela | evidência da atribuição no sistema, não apenas o chamado fechado | chamado encerrado sem prova de execução |

**A cadeia aninhada de chamados.** Em ambiente maduro, a concessão não é um chamado: é uma árvore. O
chamado pai carrega a autorização do gestor; os filhos carregam a execução, com frequência um por
sistema, e os netos carregam o ato técnico (a execução do script em produção, o comando no banco).
O teste tem de percorrer a árvore inteira, porque a autorização mora no topo e a prova da execução
mora na folha. Papel de trabalho que arquiva só o chamado pai comprova a autorização e não comprova
nada sobre o que foi concedido.

**Modificação é o caso mais perigoso, e é o mais negligenciado.** Transferência entre áreas gera
solicitação de acesso novo e quase nunca gera revogação do anterior. É a origem número um do conflito
efetivo inter-perfil de `matriz-de-sod` §6, porque o usuário acumula em camadas ao longo da carreira
e ninguém é dono da retirada. Teste explicitamente: para a base de transferidos do período, o perfil
da área de origem foi removido? Esse corte costuma render mais que o teste de concessão inteiro.

**Seleção dirigida em vez de aleatória.** Quando a escolha da amostra exige ler a descrição de cada
chamado (para separar acesso de negócio de acesso técnico, ou para cobrir sistemas distintos), a
seleção é dirigida e isso se **declara**, com o critério escrito. Seleção dirigida não documentada
vira, na revisão, amostra sem método. E quando um item selecionado se revela inválido (chamado
duplicado, chamado que não é de concessão), **substitua e registre a substituição**, com o item
descartado, a razão e o item que entrou no lugar.

## 3. Revisão periódica de perfis

O controle que mais produz evidência e menos produz efeito. Três testes, e o terceiro é o que decide.

**Cobertura.** A base revisada é a base completa de usuários na data de corte, ou alguém ficou de
fora? Confronte a base enviada aos gestores com a extração íntegra do sistema. Filial esquecida,
perfil técnico fora da lista e usuário sem gestor definido são as três lacunas recorrentes.

**Competência de quem revisou.** Cada gestor revisa os usuários da sua área, e quem revisa precisa ter
autoridade sobre eles. Quando a revisão é delegada, a delegação é um documento e tem requisitos:
quem delega, quem recebe, o escopo, **e a data de término**. Delegação sem data de término é
delegação vigente para sempre, o que a política da própria Companhia costuma proibir, e delegação
vencida que continua sendo usada é achado ainda que a revisão em si tenha sido bem feita. Peça o
documento, leia a data, e confronte com a política de alçadas. Esse é um achado que sobrevive a
vários ciclos de auditoria porque ninguém abre o anexo.

**Ação decorrente, que é o teste que vale.** Revisão de acesso sem revogação é revisão que não
aconteceu. O que prova o controle não é o e-mail do gestor devolvendo a planilha: é a **lista de
acessos revogados** em consequência, com o chamado de execução de cada um e a confirmação em tela de
que o perfil saiu. Percorra o caminho completo: item contestado pelo gestor, chamado aberto, perfil
removido, base pós-revisão sem aquele par usuário e perfil. Base de centenas de usuários que produz
zero revogação é sinal de carimbo, e a pergunta ao gestor é direta: quantos itens você contestou?

## 4. Revogação no desligamento, e a medida que importa

O controle mais simples de testar e o que produz o achado mais indefensável, porque o resultado é um
número de dias.

**A população é a de desligados do período**, extraída do sistema de pessoal, não da lista que TI
mantém. Extrair da base de TI é perguntar ao controlado se ele falhou. O confronto entre a relação de
desligados de pessoal e a relação que TI usou como insumo é, por si, um teste: divergência entre as
duas significa que TI trabalhou com uma lista incompleta, e os desligados ausentes da lista de TI são
exatamente os que ninguém revogou.

**Meça a partir da data de desligamento, nunca da data do chamado.** Esta é a distinção que decide o
resultado do teste inteiro. O SLA de TI corre do chamado; o risco corre do desligamento. Quando
pessoal abre o chamado dias depois da rescisão, TI cumpre o prazo e o acesso ficou ativo o dobro do
tempo. Reporte as duas medidas, sempre:

| Medida | Como se calcula | O que conclui |
|---|---|---|
| **Prazo de TI** | data da revogação menos data do chamado | se o controle de TI operou dentro do próprio SLA |
| **Prazo de exposição** | data da revogação menos data do desligamento | por quantos dias o acesso sobreviveu ao vínculo. É a medida do risco |

Quando as duas divergem, o achado **não é de TI**: é do processo de comunicação entre pessoal e
tecnologia, e a recomendação é o SLA de abertura do chamado, com dono nomeado do lado de pessoal.
Escrever esse achado contra TI é errar o destinatário e garantir que ele não seja tratado. Escrever
apenas o prazo de TI e concluir "controle eficaz" é pior: é concluir que não houve exposição quando
houve.

Declare sempre o **maior prazo do período**, não só a média. Uma média de três dias com um caso de
sessenta é uma média que esconde o achado.

**Feche com o corte de vínculo.** Base de usuários ativos cruzada com a base de pessoal vigente, a
100%. Usuário ativo sem vínculo é o teste de maior rendimento do ciclo, é barato, e não depende de
amostra nenhuma. Faça-o cedo, porque o resultado muda a conclusão de todos os outros testes.

## 5. Usuário genérico, conta de serviço e prestador

Três populações que a base de usuários trata como uma e que exigem tratamento distinto.

**Usuário genérico** (`consulta`, `caixa01`, `almoxarifado`) quebra a trilha de auditoria de tudo o
que faz, porque nenhum ato é imputável. Inventarie um a um e exija, para cada: a finalidade escrita,
o dono por cargo, os perfis que detém, a razão pela qual não pode ser nominal, e o controle que
substitui a imputabilidade (livro de uso, restrição de horário, restrição de estação). Genérico com
perfil transacional é achado; genérico com perfil de consulta é risco menor e ainda assim entra no
inventário.

**Conta de serviço** existe para integração entre sistemas e não deve ter login interativo. Três
perguntas: ela consegue entrar pela tela? Qual o dono por cargo? A senha muda alguma vez? Conta de
serviço com acesso interativo é acesso privilegiado anônimo, e costuma ter o perfil mais amplo da
base porque foi criada para "não dar erro na integração".

**Prestador e terceiro** entram na base de usuários e não entram na folha, o que faz o corte de
vínculo do §4 acusar falso positivo e, pior, esconder o caso real. Mantenha a base de terceiros com
data de término contratual e rode o mesmo teste de tempestividade contra ela. Acesso de consultoria
de implantação que sobreviveu ao projeto é o caso clássico, e costuma ser privilegiado.

## 6. Acesso privilegiado e o banco de dados

O corte que vem antes de todos os outros, porque uma única ocorrência invalida a conclusão sobre a
base inteira: quem tem privilégio no banco altera dado sem passar por tela e sem deixar rastro em
log de aplicação.

O que se pede, e é uma página:

1. A **relação nominal** de contas com privilégio administrativo, por camada (aplicação, banco,
   sistema operacional) e por ambiente, com o cargo de cada uma e a justificativa de negócio.
2. A confirmação de que nenhuma delas é também usuário transacional de negócio (`SOD.27` do catálogo
   de `conflitos-criticos`).
3. O **monitoramento do uso**: log de acesso privilegiado, quem o revisa, com que frequência, e a
   evidência das revisões do período.

**Terceirizar a administração do banco não terceiriza o controle.** Quando o administrador é
prestador, ele tipicamente tem privilégio total em desenvolvimento, qualidade e produção
simultaneamente, o que nenhum empregado teria. A declaração de que ele não participa dos processos de
negócio é premissa do desenho, não é controle: o que transforma a premissa em controle é a revisão
independente do log de uso, por alguém da Companhia, com periodicidade definida e evidência
guardada. Sem essa revisão, o que existe é confiança contratual, e isso se escreve no relatório com
essas palavras.

## O que entregar

1. O escopo por sistema e por camada, com o teste de completude e exatidão de cada população extraída.
2. Concessão: amostra dimensionada e documentada, com a árvore de chamados percorrida, o critério de
   seleção declarado quando dirigida, e as substituições registradas.
3. Modificação: o teste de revogação do perfil de origem para a base completa de transferidos.
4. Revisão periódica: cobertura confrontada, competência de quem revisou (com a validade da delegação
   verificada), e a **relação de revogações decorrentes** com o rastro até a tela.
5. Revogação: as duas medidas de prazo, média e maior do período, com o achado endereçado ao dono
   certo quando a divergência for de pessoal.
6. O cruzamento usuários ativos × vínculo vigente, a 100%, incluindo a base de terceiros por contrato.
7. O inventário de usuário genérico e de conta de serviço, com dono por cargo e finalidade.
8. A relação de contas privilegiadas por camada e ambiente, com a evidência da revisão de log do
   período.

## Checklist antes de dar por concluído

- Toda população extraída de sistema com teste de completude e exatidão documentado.
- Aprovação de concessão verificada como **anterior** à atribuição, e perfil concedido conferido
  contra o aprovado.
- Árvore de chamados percorrida até a folha, com a prova da execução, e não só o chamado pai.
- Transferidos do período testados quanto à revogação do perfil de origem.
- Revisão periódica testada pela revogação decorrente, com a delegação de autoridade verificada
  quanto à vigência e à data de término.
- Tempestividade medida do **desligamento**, e não do chamado, com o maior prazo do período
  declarado e o achado endereçado ao dono correto.
- Cruzamento de vínculo rodado a 100%, empregados e terceiros.
- Conta genérica e conta de serviço inventariadas, com dono por cargo e com o login interativo
  verificado.
- Acesso privilegiado ao banco levantado e revisado por log, com a administração terceirizada
  tratada como premissa de desenho que exige revisão independente.
- Nenhum nome de pessoa no relatório: matrícula e cargo.

## Próximo passo

`matriz-de-sod` para converter os perfis levantados em conflito efetivo, e
`mitigacao-e-monitoramento` para o que fazer quando a revogação recomendada deixa a operação sem
quem execute a função.
