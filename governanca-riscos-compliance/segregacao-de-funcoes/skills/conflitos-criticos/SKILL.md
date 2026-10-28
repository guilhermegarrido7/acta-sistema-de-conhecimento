---
name: conflitos-criticos
description: Trabalhe o catálogo dos pares de funções que decidem o resultado, com o dano concreto e o teste de cada um, do cadastro de fornecedor com liberação de pagamento à parametrização acumulada com transação. Acionar ao priorizar quais conflitos testar, ao escrever o dano de um par na matriz, ao defender uma exceção diante do gestor, ou ao calibrar severidade.
---

# Os conflitos que decidem o trabalho

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill. Monte a matriz em `matriz-de-sod` primeiro: aqui
está o conteúdo das células, não a forma delas.

O catálogo completo, com código, dano, teste e evidência por par, está em
[`references/catalogo-de-conflitos.md`](references/catalogo-de-conflitos.md). Esta skill explica
como o catálogo foi construído, como se lê e por que estes pares e não outros.

## 1. O critério: quem fecha o ciclo sozinho

Um par entra no catálogo quando a acumulação permite **consumar um dano sem que nenhum terceiro
precise agir**. Não é a incompatibilidade teórica entre custódia, autorização e registro: é a
pergunta operacional de quantas pessoas precisam se mover para que o dinheiro saia, o estoque suma
ou o resultado mude.

Essa pergunta tem uma vantagem prática: ela se responde em campo, com o fluxo na mão, e produz uma
resposta que o gestor da área entende sem treinamento em controles. "Nesta configuração, uma pessoa
sozinha cadastra o beneficiário, gera a obrigação e libera a transferência" encerra a discussão.
"Há violação do princípio de segregação entre autorização e execução" abre uma discussão sobre
princípios, que é a discussão que o auditor perde.

## 2. Os cinco que quase sempre importam

O catálogo tem mais entradas, mas cinco famílias respondem pela maior parte da perda em operação
brasileira de porte médio, e é por elas que o trabalho começa.

**Cadastrar fornecedor e liberar pagamento.** O conflito mais caro que existe, porque não precisa de
fraude elaborada: quem cria o beneficiário e libera a transferência paga a quem quiser. O dano não
depende de nota falsa nem de conluio. A variante que passa despercebida é mais discreta que o
cadastro novo: **alterar dado bancário** de fornecedor legítimo e já homologado. Não gera cadastro
novo, não aparece em nenhum relatório de exceção, e o pagamento sai com todo o processo de compra
regular por trás. Quem testa só cadastro novo perde a variante que o desvio real usa.

**Aprovar a requisição e aprovar o pedido.** Duas aprovações no papel, uma pessoa na prática. A
alçada da segunda aprovação existe para conferir o que a primeira decidiu, e quando são a mesma
pessoa a Companhia tem um controle a menos do que acredita ter. É o conflito que mais frequentemente
convive com conformidade documental impecável, e é o que abre caminho para o fracionamento e para o
direcionamento de fornecedor de `acta-auditoria-compras`.

**Lançar e conciliar.** Quem faz o lançamento e concilia a própria conta audita a si mesmo. O dano
não é o erro: é que o erro, ou o desvio, **nunca aparece**, porque a conciliação existe exatamente
para revelá-lo. Vale para banco, para contas a receber, para estoque e para adiantamentos, e é o
conflito que sustenta todos os demais no tempo, porque é o que impede a descoberta.

**Admitir e processar a folha.** Quem cadastra o empregado e roda a folha cria empregado
inexistente, e o pagamento sai mensalmente, por canal legítimo, com encargos recolhidos e tudo o
mais. A variante silenciosa é a alteração de dado bancário do empregado ativo, pela mesma mecânica
do primeiro par. O conflito muitas vezes não aparece na matriz porque pessoal costuma ser tratado
como área de apoio, e não como ciclo de desembolso, que é o que ela é.

**Parametrizar e transacionar.** O conflito que quase nenhuma matriz de cliente traz. Quem altera a
regra não precisa burlar a regra: baixa a tolerância do bloqueio de três vias, muda o teto da
alçada, desliga a obrigatoriedade de pedido, e depois transaciona dentro dos novos limites, com
todos os controles automatizados aprovando. Todo controle de aplicação testado pela auditoria supõe
que o parâmetro é estável no período, e quem tem o parâmetro e a transação derruba a suposição.
Este é o par que liga diretamente ao teste de gestão de mudanças de `acta-controles-internos:itgc`
§3, e é onde a fronteira entre SoD de negócio e SoD de TI deixa de existir.

## 3. Os conflitos do lado de TI

Segregação de funções não termina no ciclo de negócio. Três pares vivem inteiramente dentro de TI, e
os três são pré-requisito dos demais: quem os detém contorna qualquer conflito de negócio sem
aparecer em nenhuma consulta de perfil.

**Desenvolver e promover a produção.** Quem escreve o código e o move para produção coloca em
produção o que quiser, sem teste e sem aceite. É o controle que sustenta o domínio de mudanças
inteiro, e o desenho que funciona separa três papéis em três pessoas: quem desenvolve em ambiente de
desenvolvimento, quem move para qualidade e testa, quem move para produção depois do aceite do
usuário. O desenho é verificável em uma tabela de uma página, pessoa por pessoa, com o ambiente em
que cada uma pode alterar e o ato que cada uma executa. Peça essa tabela, e peça a demonstração em
tela de que o acesso de cada uma para em onde a tabela diz.

**Administrar o banco e transacionar no negócio.** Acesso privilegiado ao banco de dados altera
saldo, apaga registro e cria lançamento sem passar por nenhuma tela e sem deixar rastro em nenhum
log de aplicação. O usuário de negócio que também tem esse acesso não precisa de nenhum perfil
conflitante: ele tem todos. Este é o corte que vem antes de qualquer análise de perfil, porque uma
única ocorrência invalida a conclusão sobre a base inteira.

**Conceder o próprio acesso.** Quem administra a base de usuários se concede qualquer perfil e o
revoga depois. A consulta útil não é sobre a base de usuários de hoje: é sobre o **log de concessões
do período**, procurando o caso em que solicitante, aprovador e executor são a mesma pessoa, e o caso
da concessão temporária que não aparece na foto da base porque já foi revogada. Foto de base não
detecta acesso que existiu por três dias.

## 4. Como usar o catálogo

Não adote as entradas em bloco. O catálogo é ponto de partida e tem de passar por dois filtros antes
de virar matriz do mandato:

**Aplicabilidade.** Um par só entra se as duas funções existem na Companhia e se o objeto que ligam
é relevante. Companhia sem almoxarifado não tem o par de custódia e inventário, e incluí-lo produz
linha "não aplicável" que polui a matriz e sugere trabalho que não foi feito.

**Escopo.** As quatro dimensões de `matriz-de-sod` §4 valem entrada por entrada. O mesmo par é
crítico onde há alçada ilimitada e médio onde o teto é baixo.

E acrescente o que o catálogo não tem, porque ele é genérico por construção: o conflito específico do
setor do mandato. Concessionária de serviço público tem o par de medir e faturar. Operação com
balança tem o par de pesar e apontar. Distribuidora tem o par de conceder desconto e negociar prazo.
Esses pares vêm do fluxo do processo, não de lista pronta, e costumam ser os de maior valor
percebido no relatório.

## 5. Escrever o dano

A regra de redação de `acta-metodo-auditoria:redacao-de-achados` vale integralmente, e esta skill
acrescenta uma exigência própria do domínio: **o achado de SoD se escreve sobre a capacidade, nunca
sobre a conduta**.

O que se afirma é que a configuração permite. O que não se afirma é que alguém fez. A matrícula
aparece porque o teste precisa dela para ser reproduzível, e o cargo aparece porque ele explica
por que o acesso foi concedido. A pessoa não aparece, e a intenção dela não é objeto do trabalho.
Um relatório que atribui intenção perde o achado junto com a discussão, e neste domínio a tentação é
maior do que em qualquer outro, porque o resultado do teste é uma lista de gente.

Formulação que funciona: a função X e a função Y, incompatíveis pelo par `SOD.<NN>`, estão
atribuídas simultaneamente a N usuários ativos no sistema Z, o que permite a um único identificador
executar a sequência de atos descrita, sem intervenção de terceiro.

## O que entregar

1. O catálogo aplicável ao mandato, filtrado por aplicabilidade e calibrado por escopo, com as
   entradas descartadas e a razão de cada descarte.
2. Os pares específicos do setor, levantados do fluxo e não de lista pronta.
3. O dano escrito por par, em uma frase, na forma de sequência de atos.
4. Os três pares de TI testados antes de qualquer análise de perfil de negócio, com o corte de
   acesso privilegiado ao banco feito primeiro.
5. O teste de concessão sobre o **log do período**, e não apenas sobre a foto da base.
6. A severidade por par, com a régua de `matriz-de-sod` §5 aplicada e a calibração declarada.

## Checklist antes de dar por concluído

- Todo par do catálogo ou está testado, ou está descartado com razão escrita.
- Os cinco pares do §2 tratados, inclusive a variante de alteração de dado bancário nos dois que a
  têm.
- O par de parametrizar e transacionar testado, e a conclusão amarrada à gestão de mudanças.
- Os três pares de TI do §3 testados, com a tabela de quem move o quê entre ambientes obtida.
- Concessão do próprio acesso testada por log do período, não por foto da base.
- Pelo menos um par específico do setor, vindo do fluxo do mandato.
- Achado escrito sobre capacidade, sem atribuição de conduta, e sem nome de pessoa.

## Próximo passo

`perfis-e-acessos`, que explica como cada conflito efetivo entrou na base e não saiu, e
`mitigacao-e-monitoramento` para os pares que a Companhia não tem gente para separar.
