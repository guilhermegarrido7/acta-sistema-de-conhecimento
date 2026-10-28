---
titulo: Fundamentos
---

## A ideia que sustenta o método

Gestão de riscos nasceu como disciplina financeira, de mensuração de exposição de carteira, e migrou
para a gestão corporativa quando ficou claro que o que quebra uma empresa raramente é o risco que
ela mediu. As duas referências mundiais dessa migração dizem, cada uma à sua maneira, a mesma coisa:
risco é efeito da incerteza sobre objetivo, e portanto não existe avaliação de risco que não comece
pela pergunta "objetivo de quê". Risco sem objetivo declarado é lista de coisas ruins.

Daí vem a primeira escolha de método da casa: **o vocabulário vem antes do exercício**. O Dicionário
de Riscos da ACTA, com quatro componentes, oito grupos e 52 categorias numeradas, é anterior a
qualquer workshop. A ordem inversa, que é a usual, pede primeiro que cada área liste seus riscos e
depois tenta organizar o que voltou. O resultado dessa ordem inversa é previsível: entre cento e
cinquenta e trezentos enunciados, um terço deles o mesmo risco escrito por três áreas com três
palavras diferentes, e a concentração real desaparece na fragmentação.

A segunda escolha é sobre a régua. A escala qualitativa pura é o defeito mais comum da disciplina e
o mais fácil de corrigir: "impacto alto" para o gerente de TI e "impacto alto" para o diretor
financeiro estão separados por uma ordem de grandeza, e ninguém percebe isso na sala. Ancorar
impacto em valor absoluto e em percentual de EBITDA custa uma conversa com o CFO e devolve
comparabilidade entre áreas, entre anos e entre clientes.

A terceira é o nível **Limitação de Escopo**, que a casa carrega da avaliação de risco de terceiro
para a avaliação corporativa. Ele separa "avaliei e está baixo" de "não consegui avaliar". Sem ele,
a categoria em que a informação foi mais difícil de obter, que costuma ser a categoria em que o
problema estava, recebe nota baixa por ausência de evento, e o laudo produz exatamente o falso
conforto que existia para evitar.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| COSO ERM 2017, Enterprise Risk Management, Integrating with Strategy and Performance | O referencial que reposicionou gestão de riscos como parte da definição de estratégia, com cinco componentes e vinte princípios, e que introduziu apetite a risco como elemento de governança | A declaração de apetite por componente de `apetite-e-tolerancia` §2, a linha de apetite que corta o mapa em `matriz-e-mapa-de-calor` §2, e a exigência de que o risco se amarre a objetivo |
| ISO 31000:2018 | A norma de gestão de riscos: princípios, estrutura e processo, com risco definido como efeito da incerteza sobre objetivos | O processo em etapas (identificar, analisar, avaliar, tratar, monitorar) que organiza a sequência das seis skills, e a exigência de contexto antes de identificação |
| IEC 31010:2019 (técnicas de avaliação de risco) | O catálogo de técnicas, da entrevista estruturada à análise de cenários, com critério de escolha por adequação | A escolha de workshop com voto individual e ordenação forçada em `avaliacao-impacto-probabilidade` §3, e a decisão de não usar técnica quantitativa onde o dado não sustenta |
| COSO 2013, Internal Control, Integrated Framework | O referencial de controle interno, e a régua de quando um controle pode ser considerado presente e funcionando | A avaliação residual de `avaliacao-impacto-probabilidade` §6, e a fronteira com `acta-controles-internos`, que é quem apura efetividade |
| Dicionário de Riscos da ACTA Consultores | Ativo proprietário da casa: taxonomia de quatro componentes subdividida em grupos e 52 categorias numeradas, em uso na classificação de risco de terceiro | `taxonomia-de-riscos` inteira, e `references/dicionario-de-riscos.md` |
| Escala de avaliação de risco de terceiro da casa | A régua de quatro níveis usada no laudo: Limitação de Escopo, Baixo, Médio, Alto | `avaliacao-impacto-probabilidade` §5, e a ação de dimensionamento de `planos-de-resposta` §5 |
| IBGC, Código das Melhores Práticas de Governança Corporativa | O corpo de referência brasileiro sobre instância de decisão, alçada e responsabilidade do conselho | O nível em que a aceitação formal de risco tem de ser tomada (`planos-de-resposta` §4) e o destinatário do escalonamento |
| Literatura de vieses em julgamento sob incerteza (Kahneman e Tversky) | A evidência de que estimativa de probabilidade é sistematicamente enviesada por ancoragem, disponibilidade e aversão a extremo | O viés de concentração no meio da escala e os quatro mecanismos contra ele em `avaliacao-impacto-probabilidade` §3 |
| Prática de KRI de instituição financeira regulada | A disciplina de indicador com limite, faixa de alerta e escalonamento formal, herdada do ambiente bancário | As três faixas e o gatilho com destinatário e prazo em `monitoramento-e-kri` §3 |
| LGPD | O regime de tratamento de dado pessoal, com base mínima, finalidade declarada e descarte | A categoria 44 do dicionário, e o cuidado com dado pessoal na avaliação de terceiro |

## Onde a ACTA se afasta do manual

**A divergência principal é de premissa.** COSO ERM e ISO 31000 pressupõem que existe uma estrutura
de gestão de riscos a ser aperfeiçoada: há conselho, há comitê, há política, há apetite declarado,
há segunda linha. O trabalho típico da casa é numa empresa que **nunca teve nada disso**. Não há
comitê de riscos, não há política, com frequência não há conselho, e a pergunta "qual é o apetite a
risco da Companhia?" numa reunião de abertura produz silêncio.

A leitura literal do manual nesse contexto leva a uma recomendação inútil: estabeleça a governança
de riscos, crie o comitê, declare o apetite, e então comece. É a receita de um projeto de dezoito
meses que não sai do primeiro entregável. A casa faz o inverso: **o apetite existe, ele só nunca foi
escrito**, e está nas decisões já tomadas. Recusas de negócio, covenants assinados, tabela de
alçadas vigente, apólices contratadas e o histórico de perda absorvida sem mudança de comportamento
são, todos, declarações de apetite com número. O trabalho é revelá-los e submetê-los a confirmação,
com uma pergunta fechada: "é isto que a Companhia pratica. Confirma, ou quer mudar?"

Confirmar o que já se faz é decisão barata, e por isso acontece. Declarar apetite do zero, em
abstrato, é decisão cara, e por isso é adiada. A diferença entre os dois caminhos é a diferença
entre um documento aprovado no primeiro trimestre e um documento que nunca sai da pasta do
consultor. Quando o praticado for insustentável, e às vezes é, a proposta vai com duas colunas,
praticado e recomendado, com a diferença quantificada. O que não se faz é escrever só o recomendado
e apresentá-lo como se fosse a prática: o conselho aprova, nada muda, e o documento passa a servir
de prova de que o risco era conhecido.

**A segunda divergência é sobre a pontuação.** O manual e quase toda ferramenta de mercado
multiplicam impacto por probabilidade e ordenam pelo produto. A casa usa zonas. O produto empata 4x1
com 1x4 e com 2x2, que são três situações com respostas diferentes, e o empate acontece exatamente
na linha de cima, onde a decisão está: o evento raro e devastador sai com a mesma nota da rotina
barata, e some da priorização. Continuidade de negócio, ataque cibernético crítico e perda do
executivo principal vivem nessa casa.

**A terceira é sobre a escala par.** Cinco níveis é o padrão de mercado e produz a nuvem no centro
do mapa. Quatro níveis não é sofisticação métrica, é remoção de saída de emergência: nota extrema
exige defesa, nota central não exige explicação a ninguém, e o viés é de incentivo e não de
percepção. Junto com a ordenação forçada antes da pontuação e o voto individual antes da discussão,
é o que faz o mapa ter extremos.

**A quarta é o escopo declarado.** O manual trata a avaliação como cobertura do universo de riscos.
A casa declara explicitamente o que **não** foi avaliado, categoria por categoria, e apresenta a
estrutura completa do dicionário sinalizando as que tiveram abrangência. O silêncio sobre uma
categoria é lido como ausência de risco por qualquer leitor razoável, e essa leitura errada é a
única coisa que um trabalho de riscos entrega quando é mal feito.

**A quinta é sobre o tamanho do primeiro ciclo.** O manual descreve o processo maduro. A casa
entrega o primeiro ciclo deliberadamente pequeno: dez ações, cinco a oito KRI, painel de uma página.
Quarenta ações num cliente que nunca teve gestão de riscos produz zero ação executada, e a
credibilidade do processo no ano dois depende inteiramente de o ano um ter fechado alguma coisa.
