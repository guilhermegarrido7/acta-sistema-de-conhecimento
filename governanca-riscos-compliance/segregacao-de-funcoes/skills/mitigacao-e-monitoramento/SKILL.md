---
name: mitigacao-e-monitoramento
description: Desenhe o controle compensatório quando não há gente para segregar, com dono nomeado por cargo, revisão independente de log e o registro formal da concentração como risco aceito. Acionar ao concluir que a segregação é inviável por porte, ao desenhar controle compensatório, ao montar revisão independente de log, ou ao formalizar aceitação de risco residual.
---

# Quando não há quem segregar

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill. `matriz-de-sod` e `conflitos-criticos` produzem
a lista de conflitos efetivos; esta skill trata do que se faz com os que não têm solução por
redistribuição.

No mid-market brasileiro, esse é o caso normal, e não a exceção. Uma área financeira de três pessoas
não separa cadastro, pagamento e conciliação, porque não há três pessoas disponíveis para cada uma
das três funções ao mesmo tempo. Recomendar segregação onde não há gente produz relatório que o
cliente arquiva com educação e um plano de ação que nunca sai do papel.

## 1. Antes do compensatório, quatro saídas mais baratas

Controle compensatório é a última alternativa, não a primeira, porque ele custa uma rotina recorrente
para sempre. Esgote as quatro anteriores e registre por que cada uma não serviu:

**Redistribuir entre quem já existe.** Quase sempre o conflito não vem de falta de gente: vem de
concentração por conveniência. A pergunta é de quantas pessoas a área dispõe no total, não de quantas
estão no setor onde o conflito apareceu. A conciliação bancária não precisa ser feita por quem
trabalha em tesouraria, e frequentemente o problema se resolve movendo uma rotina de meia hora por
semana para outra área.

**Subir a aprovação um nível.** Quando o conflito é entre executar e aprovar, mover a aprovação para
o nível acima resolve sem contratar ninguém. Funciona bem para desembolso e para lançamento manual, e
esbarra no teto: na diretoria não há nível acima dentro da empresa, e é onde entra o sócio, o
conselho ou o compensatório.

**Usar o limite do sistema.** Alçada de valor, bloqueio parametrizado e obrigatoriedade de referência
a pedido são segregação embutida: eles não impedem a acumulação de funções, mas limitam o dano a um
teto conhecido. Um conflito crítico com teto de valor baixo é um conflito alto, e às vezes médio. O
custo é uma parametrização, não um posto de trabalho. Confirme o limite na parametrização e na tela,
nunca na política.

**Tirar a rotina de casa.** Conciliação, folha e cadastro de fornecedor são rotinas que a contabilidade
terceirizada já executa em muitos clientes desse porte. Mover a conciliação para fora resolve o par
de lançar e conciliar sem contratação, desde que o prestador reporte a quem não executa.

## 2. O que é, e o que não é, controle compensatório

Compensatório é o controle que **detecta** o dano que a segregação ausente permitiria, com frequência
suficiente para que a detecção ainda sirva para alguma coisa. Ele não impede o ato; ele garante que o
ato apareça.

Quatro coisas que aparecem em relatório como compensatório e não são:

| O que o cliente apresenta | Por que não compensa |
|---|---|
| "Confiamos na pessoa, está há vinte anos na casa" | tempo de casa não é controle. É exatamente o perfil de quem tem acesso acumulado há vinte anos |
| "O sistema registra tudo em log" | log que ninguém lê não detecta nada. O controle é a leitura, não o registro |
| "O contador confere no fechamento" | conferência de saldo não detecta pagamento indevido a beneficiário cadastrado. Confere o total, não a composição |
| "A diretoria aprova todos os pagamentos" | aprovação em lote, sem o detalhe do beneficiário, é assinatura. Pergunte o que exatamente o aprovador olha |

O teste do compensatório é sempre o mesmo: **este controle, operando como descrito, teria detectado o
dano do par de SoD?** Se a resposta exige supor que alguém repararia em algo, não é controle.

## 3. O desenho: seis campos, e nenhum é dispensável

Um compensatório sem qualquer um dos seis campos abaixo não opera seis meses depois de escrito. É por
isso que o entregável desta skill é uma tabela e não um parágrafo de recomendação.

| Campo | O que registra | O erro que evita |
|---|---|---|
| **Conflito coberto** | o código `SOD.<NN>` e o dano que se quer detectar | compensatório genérico que não cobre conflito nenhum |
| **Ato de controle** | o que a pessoa faz, em verbo concreto: lê, confronta, assina, questiona | "monitorar", "acompanhar", "dar ciência" |
| **Dono, por cargo** | quem executa, nomeado por cargo, e que **não** pode ser quem detém o conflito | controle cujo dono é o próprio controlado |
| **Frequência** | e ela tem de ser compatível com a velocidade do dano | revisão anual de conflito de pagamento diário |
| **Evidência** | o artefato que prova a execução, com data e autor | controle que aconteceu e não se demonstra |
| **Revisor** | quem confere que o compensatório operou, e com que periodicidade | compensatório que ninguém audita, que é o destino padrão |

O campo que mais falha é a frequência. O compensatório precisa detectar dentro da janela em que o
dano ainda é recuperável, e para desembolso essa janela é de dias. Revisão mensal de pagamento
detecta a perda depois de um mês de perdas.

O segundo que mais falha é o dono. Dono é cargo, nunca pessoa, pelo motivo de sempre: pessoa sai, e o
controle sai com ela. Quando não existe cargo adequado dentro da área, o dono é de fora dela, e é aí
que o desenho fica bom: o compensatório mais forte é o executado por quem não responde ao mesmo
gestor que o controlado.

## 4. Revisão independente de log

É o compensatório de uso mais frequente para conflito de TI e para acesso privilegiado, e é o que
mais frequentemente existe no papel e não opera. Cinco exigências:

1. **Independente de verdade.** Quem revisa não reporta a quem é revisado. Analista revisando o
   próprio gerente não é revisão independente, e é o desenho mais comum.
2. **Escopo declarado.** Que log, de que sistema, de que camada, cobrindo que ações. "Log de acesso"
   não é escopo. Acesso privilegiado ao banco, alteração de parâmetro e concessão de acesso são três
   escopos distintos, com três revisões distintas.
3. **Critério de exceção escrito antes.** O que, naquele log, o revisor deve questionar: acesso fora
   de horário, comando de alteração direta em tabela transacional, concessão sem chamado associado.
   Sem critério prévio, a revisão é leitura e a conclusão é sempre "nada anormal".
4. **Rastro do questionamento.** O que prova a revisão é a pergunta feita e a resposta obtida, não a
   ata dizendo que se revisou. Revisão que nunca gerou uma pergunta em doze meses é revisão que não
   aconteceu, pelo mesmo raciocínio da revisão de acesso que nunca gerou revogação
   (`perfis-e-acessos` §3).
5. **Volume viável.** Log de milhares de linhas por dia não se revisa integralmente, e exigir isso
   garante que nada seja revisado. Defina o filtro, e o filtro passa a ser parte do desenho do
   controle: se ele exclui a ação perigosa, o controle não cobre o conflito.

**O caso da administração terceirizada do banco.** O prestador tem privilégio total em todos os
ambientes e declara que não participa de processo de negócio. A declaração é premissa do desenho e
não é controle. O que a transforma em controle é a revisão do log de uso por alguém da Companhia, com
critério de exceção escrito e evidência guardada. Quando essa revisão não existe, a redação correta é
que o ambiente depende de confiança contratual, sem verificação independente, e isso é uma frase de
relatório, não uma oportunidade de melhoria.

## 5. Exceção declarada e limitada

Nem toda concentração precisa de compensatório. Algumas precisam de **fronteira escrita**, que é uma
peça mais barata e frequentemente melhor.

O caso típico é a cobertura por ausência: o gestor de TI move a alteração para produção quando o
analista de infraestrutura está de férias. Isso não é quebra de segregação, desde que três coisas
estejam escritas e verificáveis: a condição que aciona a exceção (ausência do titular), o que a
exceção **não** autoriza (no caso, desenvolver e mover a própria alteração), e o registro de cada
acionamento, com data.

A diferença entre exceção declarada e conflito é essa: a exceção tem gatilho, limite e contagem. Sem
os três, o que existe é uma segunda pessoa com acesso permanente e uma explicação.

## 6. Registrar a concentração como risco aceito

O que sobra depois de tudo, e sempre sobra alguma coisa, vira **risco residual formalmente aceito**,
e isso é uma peça do trabalho, não um fracasso dele. Empresa de porte médio convive com concentração;
o que ela não pode é conviver sem saber.

O registro tem cinco elementos: o conflito e o dano, em uma frase; a razão pela qual a segregação não
é viável agora, que costuma ser efetivo ou custo e se escreve com número; o que se fez para reduzir o
dano (compensatório, teto de alçada, exceção declarada); a exposição que permanece, dimensionada
sempre que possível em valor ou em volume; e **quem aceita**, por cargo, com data.

Dois pontos que fazem esse registro valer alguma coisa:

**Quem aceita tem de ter alçada sobre o risco.** Gerente financeiro não aceita, em nome da Companhia,
o risco de desvio no próprio desembolso. Aceitação sobe para diretoria, sócio ou conselho, conforme a
governança — na instância formal de alçada da Companhia (definição de instâncias e alçadas é tema do
plugin `acta-governanca`, ainda não publicado).

**A aceitação tem prazo e gatilho de reavaliação.** Concentração aceita porque a área tem três
pessoas deixa de ser aceitável quando ela tem oito. Escreva o gatilho: efetivo da área, volume de
transações, entrada de investidor, início de processo de abertura de capital. Sem gatilho, a
aceitação vira permanente e o risco sai do radar exatamente quando a empresa cresce e ele aumenta.

## 7. Como isso entra no relatório

O achado de conflito e a recomendação de compensatório andam juntos e na mesma ordem: o conflito
efetivo, com o número exato de usuários; o dano, em sequência de atos; e a recomendação, que é o
desenho de seis campos do §3, não a frase "recomenda-se segregar as funções".

**Recomendação que não cabe no porte do cliente é recomendação desperdiçada**, e ela custa mais do que
parece: ela ensina o cliente a ignorar o resto do relatório. Quando o compensatório é a única saída
viável, diga isso no relatório, com a razão, e desenhe o compensatório. É trabalho mais difícil que
recomendar segregação, e é o que diferencia o relatório que vira plano de ação do relatório que vira
arquivo.

## O que entregar

1. Para cada conflito efetivo, a saída escolhida entre as cinco (redistribuir, subir alçada, limite de
   sistema, terceirizar, compensatório), com a razão do descarte das anteriores.
2. A tabela de compensatórios com os seis campos preenchidos, um por conflito coberto.
3. O desenho da revisão independente de log, com escopo por sistema e camada, critério de exceção
   escrito e filtro declarado.
4. As exceções por ausência, com gatilho, limite e forma de registro.
5. O registro de riscos residuais aceitos, com quem aceita por cargo, data, prazo e gatilho de
   reavaliação.
6. A recomendação por conflito, dimensionada ao porte, no formato do desenho e não da frase genérica.

## Checklist antes de dar por concluído

- Nenhum compensatório proposto sem que as quatro saídas mais baratas tenham sido avaliadas e
  descartadas por escrito.
- Nenhum dos seis campos em branco, e nenhum dono que seja a pessoa controlada.
- Frequência do compensatório compatível com a velocidade do dano que ele detecta.
- Revisão de log com independência real, critério de exceção prévio, filtro declarado e rastro de
  questionamento.
- Administração terceirizada de banco tratada como confiança contratual até que exista revisão
  independente do log.
- Exceção por ausência com gatilho, limite e contagem de acionamentos.
- Risco residual aceito por quem tem alçada, com prazo e gatilho de reavaliação escritos.
- Nenhuma recomendação de segregar onde não há efetivo para segregar.
- Dono sempre por cargo, nunca por nome.

## Próximo passo

`acta-metodo-auditoria:redacao-de-achados` para a redação dos pontos, e
`acta-controles-internos:deficiencias-e-severidade` para a agregação entre a deficiência de acesso e
os controles de negócio que dependem dela. O estado do engajamento vai para o checkpoint de
`acta-way`.
