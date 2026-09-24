---
titulo: Fundamentos
---

## A ideia que sustenta o método

Auditar convênio não é auditar uma empresa. É auditar uma **relação entre duas entidades com caixas
separados**, em que uma repassa o dinheiro e a outra o gasta, e em que o repassador só enxerga o
gasto pelo que o executor resolveu anexar a um sistema. A distância entre o ato de pagar e o ato de
ver é o objeto do trabalho inteiro. Todo o resto do método deriva daí.

Essa separação produz três consequências que não existem em auditoria de processo próprio. A
primeira é que **não há controle interno do cliente para testar na ponta que gasta**. Numa auditoria
de compras se pede a tabela de alçadas, a demonstração do bloqueio em tela, a trilha de aprovação.
Aqui, o parceiro contratou pelas regras dele, e o que chegou ao concedente foi um pacote de propostas
e notas. A avaliação de controle se desloca para o lado do concedente, e a pergunta deixa de ser
"como o parceiro contrata" e passa a ser "o que o concedente exigiu, e o que ele conferiu do que
exigiu".

A segunda é que a **comprovação é de dois tipos e não de um**. Documento fiscal comprova que houve
pagamento; não comprova que houve serviço. Numa compra própria, a entrada em estoque ou a
movimentação do sistema fecha a lacuna. Num convênio de serviço, a lacuna é a regra: consultoria,
instrutoria, evento, capacitação. Por isso a evidência de execução vira bloco executável próprio, e
por isso a crítica do entregável é o que distingue o trabalho da conferência de papel.

A terceira, e a mais determinante, é que **o achado tem valor**. A auditoria de convênio não termina
em recomendação, termina em proposta de glosa, e a glosa é uma quantia que alguém vai ser chamado a
devolver. Isso muda a exigência de evidência em cada teste, muda a redação do ponto, e obriga a
matriz de achados a carregar uma coluna que as outras práticas não têm.

A separação de caixas também explica onde o dinheiro se perde. O preço da contratação costuma ser o
suspeito de partida, e raramente é ele: o dinheiro se perde na **fronteira da conta**. Recurso que
sai da conta do convênio para outra conta do parceiro, despesa paga fora da vigência, contrapartida econômica
declarada sem nunca ter passado por caixa, saldo rendendo em aplicação e apropriado como se fosse do
executor. São todos achados de fronteira, e é por isso que a reconciliação entre o extrato bancário e
o sistema de prestação de contas é o centro do método, e não um teste entre outros.

## Como este plugin nasceu

Não pelo esqueleto de temas previstos, e sim por matéria-prima, que é a regra da casa para tirar algo
do mapa. O mapeamento da pasta de projetos executados encontrou o maior acervo da firma num único
tipo de trabalho: **catorze ordens de serviço de auditoria de convênio**, do mesmo concedente, com a
mesma árvore de pastas, o mesmo programa de trabalho em três blocos, o mesmo planilhão de
fornecedores e a mesma matriz de achados. Catorze repetições da mesma forma é a prova mais forte de
que existe método, e não improviso repetido.

O que o acervo revelou além do que a memória da casa guardava: o programa tem **três** blocos, e não
dois. Estruturação e execução são os que se lembram; o terceiro, apuração de resultados, é o que
responde à única pergunta que o concedente realmente fez ao assinar o convênio, e é o que costuma ser
o mais frouxo do relatório.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Lei 13.019/2014, o Marco Regulatório das Organizações da Sociedade Civil, e seu decreto regulamentador | O regime das parcerias entre administração pública e organizações da sociedade civil: plano de trabalho, chamamento, prestação de contas, responsabilidade do gestor da parceria | A arquitetura do ciclo em `ciclo-do-convenio` §2, a exigência de plano de trabalho anterior à execução e a figura do gestor designado em `estruturacao-e-formalizacao` §3 |
| Jurisprudência do Tribunal de Contas da União sobre prestação de contas de recurso repassado | A doutrina consolidada de destinação vinculada, ônus da comprovação por quem recebeu, e devolução com correção quando o recurso foi aplicado fora do objeto | O tratamento de desvio de finalidade em `prestacao-de-contas` §3 e a lógica da glosa na matriz de achados |
| A instrução normativa do próprio concedente | Em entidade do Sistema S, a norma interna que fixa habilitação, proporção de aporte, prazos de prestação de contas e rito de encerramento | A linha do tempo de `ciclo-do-convenio` §4, a relação de habilitação e a composição do aporte em `estruturacao-e-formalizacao` §2 e §5 |
| Normas do IIA | O corpo normativo da auditoria interna, inclusive a exigência de documentação suficiente para que um terceiro reproduza o trabalho | O papel de trabalho por bloco, a aba própria por achado na matriz, e o padrão Plano A/B/C, que registra tanto a evidência obtida quanto a que faltou |
| COSO, Internal Control, Integrated Framework | O referencial de controle interno: atividade de controle existe para mitigar risco identificado, e se avalia se está presente e funcionando | A estrutura risco por controle e por teste de `matriz-de-riscos-do-convenio`, e o confronto com a matriz de risco elaborada pelo próprio concedente |
| ACFE, esquemas de fraude em desembolso | A taxonomia de conluio com fornecedor, empresa de fachada e pagamento a terceiro | `CNV.R13` e `CNV.R14`, e a regra de concluir sobre o fato e sobre o controle, nunca sobre a intenção da pessoa |
| Dicionário de Riscos da ACTA | A taxonomia fechada da casa, em quatro componentes e 52 categorias numeradas | A classificação obrigatória de todo risco de `matriz-de-riscos-do-convenio`, que não cria vocabulário próprio |
| LGPD | O regime de tratamento de dado pessoal, com base mínima, finalidade declarada e descarte | O cruzamento de quadro societário com base de pessoal e com quadro de associados em `execucao-e-fornecedores` §3 |

## Onde a ACTA se afasta do manual

**O manual audita o convênio; a casa audita também a concessão.** O programa usual conclui sobre o
que o parceiro fez com o dinheiro. Metade dos achados mais graves, porém, é do lado do concedente:
parecer emitido depois da assinatura, ressalva arquivada sem tratamento, parcela liberada sem a
prestação parcial analisada, parceiro com pendência anterior recebendo repasse novo, mesma pessoa
aprovando todas as etapas do ciclo. Esses pontos não aparecem se o trabalho olhar só para fora, e são
os que mudam processo.

**A conclusão de carteira vale mais que a conclusão de convênio.** Catorze ordens de serviço por
convênio produzem catorze relatórios e uma constatação que nenhum deles contém: o achado que se
repete em vários convênios deixa de ser falha de execução de um parceiro e passa a ser deficiência do
processo de concessão. Por isso a numeração dos apontamentos é comparável entre arquivos, e por isso
a consolidação por apontamento está na referência da matriz de achados.

**A contrapartida econômica não se aceita pela planilha.** É a parte do convênio que nunca passa por
caixa, e o programa usual a confere somando valores declarados. A casa trata cada lançamento como
afirmação a ser comprovada, com três perguntas em ordem: a natureza é elegível pela norma, houve uso
efetivo no projeto, e o valor tem memória de cálculo. E aplica um corte que quase nunca é feito: item
declarado como aporte próprio do parceiro que a conta do convênio pagou está duplamente contado, e
gera glosa de valor cheio.

**A meta se audita pelo desenho, e não só pelo resultado.** Meta sem indicador, sem fórmula e sem
fonte de dado não pode ser cumprida nem descumprida. O achado, nesse caso, não é contra o relatório
final do parceiro, é contra o plano de trabalho que o concedente aprovou, e se escreve no capítulo de
estruturação mesmo tendo sido descoberto no encerramento. Enquadrar isso como falha de prestação de
contas transfere para o executor um problema que nasceu na mesa de quem concedeu.
