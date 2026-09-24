---
titulo: Fundamentos
---

## A ideia que sustenta o método

Segregação de funções é mais velha que qualquer framework de controle. A ideia é uma só: nenhuma
pessoa deve controlar todas as etapas de uma transação, porque quem inicia, autoriza, executa,
custodia e registra sozinho não precisa burlar controle nenhum. O referencial de controle interno
consolidou o princípio, a prática de SOX o transformou em teste com evidência, e o corpo de
governança de TI deu a ele o vocabulário de acesso, perfil e transação em que ele hoje se apura.

O que este plugin acrescenta é a tradução, que é onde o trabalho realmente acontece. Entre o
princípio e a base de usuários existem quatro camadas: a função (o verbo sobre o objeto), a
transação (o objeto do sistema que a executa), o perfil (o agrupamento que se atribui) e o usuário
(a conta que recebe). A matriz se **desenha** na camada de função e se **testa** na camada de
usuário, e quem pula a tradução produz a matriz que quase todo cliente já tem na gaveta: bonita,
genérica e nunca testada.

Daí a primeira escolha de método. **Conflito no papel e conflito efetivo são dois objetos, com dois
testes e dois achados.** O primeiro está na descrição de cargo e no fluxo, existe antes de qualquer
sistema, e se apura lendo o desenho. O segundo está no identificador de usuário, é contável, e se
apura por consulta sobre a base. A combinação que quase todo trabalho perde é a terceira: desenho
que concentra as duas funções e sistema que, por circunstância, ainda não deu os dois perfis à mesma
pessoa. Ali não há controle, há sorte, e concluir "sem exceções" nesse caso é concluir sobre o dia da
extração.

A segunda escolha é a régua de severidade, e ela é operacional em vez de principiológica: o nível
sai da pergunta de **quantas pessoas precisam se mover para o dano se consumar**. Crítico é quem
fecha o ciclo sozinho. A vantagem prática aparece na reunião de fechamento. Dizer que uma pessoa
cadastra o beneficiário, gera a obrigação e libera a transferência encerra a discussão. Dizer que há
violação do princípio de segregação entre autorização e execução abre uma discussão sobre
princípios, que é a discussão que o auditor perde.

A terceira é o corte que vem antes de tudo. Privilégio administrativo no banco de dados altera saldo,
apaga registro e cria lançamento sem passar por tela e sem rastro em log de aplicação. Uma única
ocorrência invalida a conclusão sobre a base inteira, então esse teste roda primeiro, não por último.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| COBIT | O referencial de governança e gestão de TI corporativa, com os objetivos de gerenciar identidade e acesso lógico, mudanças e operações | A camada de perfil e transação de `matriz-de-sod` §1, o ciclo de vida do acesso de `perfis-e-acessos`, e a fronteira com `acta-controles-internos:itgc`, que cobre os domínios de ITGC de forma geral |
| COSO, Internal Control, Integrated Framework | O referencial de controle interno em que a segregação de funções aparece como atividade de controle, com a separação entre iniciar, autorizar, executar, custodiar e registrar | O critério de montagem do catálogo de `conflitos-criticos` §1, e a distinção entre controle preventivo ausente e controle detectivo compensatório de `mitigacao-e-monitoramento` §2 |
| Prática de SOX sobre controles gerais de TI | A disciplina de testar desenho e efetividade operacional de cada controle de acesso com evidência arquivada, em ciclos comparáveis entre exercícios | A numeração estável dos quatro atos de `perfis-e-acessos` §1, o corte entre fase intermediária e fase final, e a régua de controle remediado em `references/populacao-e-amostra.md` |
| Régua de amostragem por frequência de controle | O dimensionamento da amostra pela frequência com que o controle opera e pelo nível de risco, herdado do ambiente de companhia registrada na SEC | O dimensionamento de concessão e de revisão periódica, via `acta-metodo-auditoria:programa-de-testes`, e a preferência por 100% sempre que a base é cruzável |
| Normas do IIA | O corpo normativo da auditoria interna, inclusive a exigência de documentação que permita a um terceiro reproduzir o teste | Os critérios do papel de trabalho com as quatro dimensões de escopo e a data e hora da extração (`matriz-de-sod` §4 e §7) |
| Biblioteca de políticas de ITGC da ACTA | Ativo da casa, codificado a partir de dois ciclos completos: concessão e modificação de acesso, revisão periódica, administração de banco de dados, revogação no desligamento, regras de senha, segregação em controle de mudanças, monitoramento e restauração de backup | A tabela de atributos de concessão de `perfis-e-acessos` §2, os três testes da revisão periódica (§3) e as exigências da revisão independente de log em `mitigacao-e-monitoramento` §4 |
| Catálogo de conflitos `SOD.<NN>` da ACTA | Ativo da casa: os pares de funções incompatíveis com dano escrito, teste e evidência por par, estável entre entidades e entre ciclos | `references/catalogo-de-conflitos.md` e a matriz triangular de `matriz-de-sod` §2 |
| LGPD | O regime de tratamento de dado pessoal, com base mínima, finalidade declarada e descarte | O cruzamento de usuários ativos contra vínculo vigente de `perfis-e-acessos` §4, e a descrição do conflito por matrícula e cargo, nunca por nome |

## Onde a ACTA se afasta do manual

**A divergência principal é de premissa.** O padrão pressupõe empresa com gente suficiente para
segregar: há quem cadastre, há quem aprove, há quem pague e há quem concilie, e o trabalho do
revisor é constatar que as quatro funções estão em quatro mãos. No mid-market brasileiro a retaguarda
tem duas ou três pessoas no total, e as quatro funções estão em duas mãos por aritmética, não por
descuido.

Recomendar segregação nesse contexto produz um ponto que nunca é remediado. Pior: ensina o cliente a
ignorar o resto do relatório, porque a primeira recomendação que ele lê é impossível de executar.
Por isso a casa inverte a ordem do esforço. Primeiro esgota as quatro saídas mais baratas, que
resolvem a maior parte dos casos sem contratação: redistribuir entre quem já existe (o conflito
quase sempre vem de concentração por conveniência, não de falta de gente), subir a aprovação um
nível, usar o limite parametrizado do sistema como teto do dano, ou tirar a rotina de casa para a
contabilidade terceirizada. Só depois desenha o compensatório, que custa uma rotina recorrente para
sempre e por isso é a última alternativa.

O compensatório que a casa entrega é uma tabela de seis campos, não uma frase de recomendação:
conflito coberto, ato de controle em verbo concreto, dono por cargo que não seja o próprio
controlado, frequência compatível com a velocidade do dano, evidência com data e autor, e revisor.
Um compensatório sem qualquer um dos seis não opera seis meses depois de escrito. E o que sobra
depois de tudo, e sempre sobra, vira **risco residual formalmente aceito**, com quem aceita por
cargo, a exposição dimensionada, prazo e gatilho de reavaliação escrito. Concentração aceita porque
a área tem três pessoas deixa de ser aceitável quando ela tem oito, e sem o gatilho a aceitação vira
permanente exatamente quando a empresa cresce e o risco aumenta.

**A segunda divergência é sobre o que se chama de compensatório.** Tempo de casa não é controle, e é
justamente o perfil de quem acumulou acesso por vinte anos. Log que ninguém lê não detecta nada: o
controle é a leitura, não o registro. Conferência de saldo no fechamento confere o total e não a
composição, então não pega pagamento indevido a beneficiário cadastrado. Aprovação em lote sem o
detalhe do beneficiário é assinatura. O teste é sempre o mesmo, e é uma pergunta: este controle,
operando como descrito, teria detectado o dano deste par? Se a resposta exige supor que alguém
repararia em algo, não é controle.

**A terceira é a medida de tempestividade.** O padrão mede a revogação no desligamento a partir da
abertura do chamado, que é o SLA de TI. A casa reporta as duas medidas, sempre, porque o risco corre
do desligamento e não do chamado. Quando pessoal abre o chamado dias depois da rescisão, TI cumpre o
prazo e o acesso ficou ativo o dobro do tempo. Concluir "controle eficaz" olhando só o prazo de TI é
concluir que não houve exposição quando houve, e escrever o achado contra TI é errar o destinatário
e garantir que ele não seja tratado.

**A quarta é o conflito entre aplicações.** A consulta de SoD roda por sistema, e por isso perde o
conflito mais perigoso da operação brasileira de porte médio: cadastrar o fornecedor no ERP e
transmitir o pagamento no portal do banco. São duas bases, dois catálogos de perfil e com frequência
dois donos. A casa constrói a base consolidada por pessoa e não por login, casando as contas pelo
identificador funcional, e declara nos critérios como o casamento foi feito e quantas contas não
casaram.

**A quinta é o par que quase nenhuma matriz de cliente traz: parametrizar e transacionar.** Quem
altera a regra não precisa burlar a regra. Baixa a tolerância do bloqueio de três vias, muda o teto
da alçada, desliga a obrigatoriedade de pedido, e depois transaciona dentro dos novos limites com
todos os controles automatizados aprovando. Todo controle de aplicação testado supõe que o parâmetro
é estável no período, e esse par derruba a suposição. É onde a fronteira entre SoD de negócio e SoD
de TI deixa de existir.
