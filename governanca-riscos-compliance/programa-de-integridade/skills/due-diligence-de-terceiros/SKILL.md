---
name: due-diligence-de-terceiros
description: Conduza avaliação de risco de terceiro em fonte pública, do background check de homologação ao aprofundamento investigativo de vínculo, com classificação no Dicionário de Riscos da ACTA e dossiê de evidência rastreável. Acionar ao homologar fornecedor, ao investigar sinal de conflito de interesse, ao montar o laudo, ou ao decidir a profundidade da diligência.
---

# Due diligence de terceiros

Skill central deste plugin, e a única com lastro de execução da casa. O que está aqui saiu de
trabalhos entregues, não de manual.

**Carregue antes:**

- `acta-gestao-de-riscos:taxonomia-de-riscos`. A classificação do risco do terceiro usa o
  **Dicionário de Riscos da ACTA**, quatro componentes, oito grupos, 52 categorias numeradas, que
  vive lá em `references/dicionario-de-riscos.md`. Esta skill **não redefine a taxonomia** e não
  cria categoria própria de terceiro. O uso parcial e declarado do dicionário na avaliação de
  terceiro está na §7 daquela skill.
- `acta-gestao-de-riscos:avaliacao-impacto-probabilidade` §5. A escala de quatro níveis
  (**Limitação de Escopo, Baixo, Médio, Alto**) e a regra de registro da limitação são de lá.
  Aqui não se reescreve escala.
- `acta-way:anonimizacao-e-lgpd`. Todo o material desta skill trata dado pessoal de sócio e de
  administrador. Ver §7.

## 1. Os dois modos, e a decisão de qual rodar

O trabalho tem dois formatos distintos, e confundi-los é o erro de escopo mais caro.

**Modo A, background check de homologação.** Varredura padronizada e ampla sobre um terceiro,
normalmente antes da contratação ou na renovação do cadastro. Cobertura larga e profundidade rasa:
cadastro, listas restritivas, certidões, processos, protestos, mídia, endereço. Produz o laudo
descrito em `references/estrutura-do-laudo.md`. Conclui com avaliação por categoria de risco.

**Modo B, aprofundamento investigativo.** Disparado por um sinal, e não por calendário: vínculo
suspeito, mídia negativa, fornecedor que nasceu perto do contrato, empresa que troca de sócio na
véspera. Cobertura estreita e profundidade grande: linha do tempo societária, registro civil,
histórico profissional declarado em fonte aberta, mapa de relacionamento. Não produz laudo de
homologação. Produz **papel de trabalho** no padrão de `acta-metodo-auditoria:papel-de-trabalho`,
com campo Resultado, preparador e revisor.

**O gate de entrada.** Antes de começar, três perguntas respondidas por escrito:

1. Quem definiu o escopo e os critérios? Em trabalho de fonte pública, **quem define a lista de
   pesquisados e os critérios de classificação é a contratante**, e o laudo diz isso. O papel da
   casa é executar as consultas e aplicar os critérios definidos. Sem essa declaração, a firma
   assume responsabilidade por uma decisão de negócio que não é dela.
2. É Modo A ou Modo B? Se houver dúvida, é Modo A, e o Modo B se abre depois por achado.
3. Qual o subconjunto de categorias do dicionário que o escopo cobre? Ver §3.

## 2. Profundidade por criticidade do terceiro

Diligenciar todo fornecedor com a mesma profundidade é caro e, pior, produz laudo raso onde
precisava ser fundo. A régua é de exposição, não de valor de contrato isolado:

| Faixa | O que coloca o terceiro aqui | Profundidade |
|---|---|---|
| Alta | Interage com agente público em nome da contratante, opera licença ou autorização, intermedeia, representa, despacha, ou responde por parcela relevante do gasto | Modo A completo, com demonstração financeira solicitada, formulário de integridade respondido e entrevista |
| Média | Fornece serviço contínuo com pessoal alocado, acessa dado pessoal ou sistema, ou atua em atividade fim | Modo A completo sobre fonte pública, sem entrevista |
| Baixa | Fornecimento pontual, sem interface pública nem alocação de pessoal | Consulta cadastral e listas restritivas, com registro datado |

Quem intermedeia perante a administração pública sobe para Alta independentemente de valor. É a
faixa em que o risco da contratante não é o dinheiro do contrato, e sim o ato praticado em nome dela.

**Reavaliação.** A frequência de atualização é decisão da contratante e se registra como tal. O que
a casa entrega é a data da consulta, porque pesquisa em base pública **não é reproduzível**: a mesma
consulta repetida noutro dia devolve resultado diferente, e o laudo traz essa ressalva.

## 3. Classificação, sem inventar taxonomia

O terceiro é classificado nas categorias do Dicionário de Riscos da ACTA. O escopo de fonte pública
cobre um subconjunto, e o laudo **apresenta a estrutura completa do dicionário sinalizando as
categorias que tiveram abrangência** nas consultas. Categoria não sinalizada é categoria não
avaliada, e isso precisa estar visível.

O subconjunto usual de um background check de fornecedor está na §7 de `taxonomia-de-riscos`. Duas
disciplinas próprias deste trabalho:

- **A categoria de fluxo de caixa é sobre o terceiro pagar as contas dele**, apurada por indicador
  de liquidez sobre o balanço, mais a dependência econômica do terceiro em relação à contratante.
  Sem demonstração financeira, a categoria é Limitação de Escopo, nunca Baixo.
- **Ausência de ocorrência não é avaliação Baixo em toda categoria.** É Baixo quando a fonte cobria
  a pergunta e nada apareceu. É Limitação de Escopo quando a fonte não pôde ser consultada, o
  processo corre em segredo, ou o terceiro não devolveu o que foi pedido.

## 4. O dossiê de evidência

O laudo é o resumo. A evidência é o dossiê, e ele é o que sobrevive a um questionamento.

Um arquivo por consulta, nomeado pela fonte, com a data no conteúdo. O padrão de captura é imprimir
a página consultada em PDF, porque a base muda. Para varredura de mídia, a captura vai até a
terceira página de resultados ou os cinquenta primeiros retornos, o que vier primeiro, **inclusive
quando não houver ocorrência**: a página vazia datada é a prova de que a consulta foi feita.

A lista de fontes, os termos de busca de mídia negativa e a mecânica de captura estão em
`references/fontes-de-consulta.md`.

**Contadores.** O laudo fecha com contagem explícita: protestos, processos judiciais, fontes
consultadas sem ocorrência e fontes que retornaram informação. A contagem obriga a fechar o dossiê
contra o texto. Se o corpo cita uma ocorrência que a contagem não tem, um dos dois está errado, e é
melhor descobrir antes do cliente.

## 5. O teste de vínculo e interposta pessoa

É o teste do Modo B, e o de maior retorno. Ele não se faz com dado de compras, e por isso quase
nunca é feito.

**A linha do tempo é a ferramenta.** Monte duas séries datadas e sobreponha:

1. **Societária**, do quadro de sócios e administradores: entrada, saída, mudança de qualificação,
   alteração de capital, mudança de endereço, alteração de atividade principal.
2. **De relacionamento com a contratante**, do vínculo do executivo ou do contrato do fornecedor:
   admissão, início do contrato, primeiro pedido, desligamento.

Os padrões que a sobreposição revela:

- **Saída societária logo após a entrada de pessoa ligada.** Sócio administrador que deixa o quadro
  poucos dias depois de o cônjuge, parente ou antigo colega entrar nele é a assinatura clássica da
  interposição. A saída formal resolve o cadastro e não resolve o interesse.
- **Simultaneidade entre cargo na contratante e sociedade no fornecedor.** Fonte aberta de histórico
  profissional costuma declarar período de cargo com mês de início e de fim, e é confrontável com o
  período societário. Quando as duas janelas se cruzam, o vínculo existiu durante a relação
  comercial, mesmo que hoje não exista.
- **Parentesco e casamento.** Registro civil confirma o que o sobrenome apenas sugere. Sobrenome
  comum abre indagação; certidão fecha o ponto.
- **Núcleo societário recorrente.** Mapa de relacionamento que mostra as mesmas pessoas em várias
  empresas do mesmo grupo de atividade, algumas baixadas ou inaptas, é indício de estrutura
  montada, e cada empresa isolada pareceria regular.

**O que se conclui, e o que não se conclui.** Conclui-se sobre o **fato datado** e sobre o
**controle ausente**: não houve declaração de conflito, ou houve e não foi tempestiva, ou existia e
ninguém confrontou com o quadro societário. Não se conclui sobre a intenção da pessoa. Linha do
tempo prova coincidência de datas, e não prova dolo. Achado que atribui intenção perde o mérito
junto com a discussão.

**Fronteira com `acta-auditoria-compras:cotacao-e-selecao` §5.** Lá o cruzamento é de base contra
base, dentro de um mandato de auditoria do ciclo de compras: fornecedores contra pessoal, em 100%,
para descobrir se existe vínculo. Aqui o trabalho começa depois, sobre um terceiro já apontado, e é
de fonte externa e linha do tempo. Um acha o caso; o outro o instrui. Não repita o cruzamento de
base aqui, e não repita a linha do tempo lá.

## 6. Os quatro gates antes de entregar

Todos obrigatórios. O terceiro e o quarto vieram de erro cometido.

1. **Contagem contra corpo.** Os contadores do sumário batem com as ocorrências descritas no texto,
   e cada ocorrência descrita tem arquivo correspondente no dossiê.
2. **Categoria sem avaliação.** Nenhuma categoria dentro do escopo ficou sem nota. Nenhuma recebeu
   Baixo por ausência de consulta. Cada Limitação de Escopo traz os três campos exigidos pela §5 de
   `avaliacao-impacto-probabilidade`: o que faltou, por que faltou, e o que se saberia se existisse.
3. **Varredura de nome herdado de modelo.** O laudo é montado sobre modelo de trabalho anterior, e o
   nome da contratante anterior sobrevive no corpo com frequência alta. Busque no arquivo final o
   nome de cada contratante já atendida e o nome do terceiro de cada laudo anterior. Um laudo
   entregue com o nome de outro cliente no meio do texto custa o cliente, e é falha de sigilo, não
   deslize de revisão.
4. **Ressalva de não recomendação.** O laudo declara, na capa e no anexo, que **não é recomendação
   de penalidade nem de interrupção de fornecimento**. A decisão é da contratante. Sem essa
   declaração, a casa está opinando sobre a continuidade de um contrato que não leu.

## 7. Dado pessoal

O trabalho trata nome, documento de identificação, filiação, data de nascimento, endereço
residencial e estado civil de pessoa que não é cliente da firma e não foi consultada. Vale
integralmente `acta-way:anonimizacao-e-lgpd`, e três regras se aplicam sempre:

- **Base mínima e finalidade declarada.** Coleta-se o que a pergunta de integridade exige. Filiação
  e data de nascimento servem para desambiguar homônimo, não para compor perfil.
- **O que não entra no entregável.** Dado pessoal coberto por sigilo legal e dado sensível não
  compõem o resultado entregue, ainda que tenham aparecido na consulta. Isso se escreve no contrato
  e se cumpre no arquivo.
- **Descarte e circulação.** O dossiê fica na pasta do projeto, não circula fora dele, e não vira
  exemplo de método. Em skill, em template e em material interno, o terceiro é "o terceiro
  avaliado", "o fornecedor", "a Companhia contratante".

## 8. Quando o trabalho é de auditoria interna: o Requisito Tópico de Terceiros

O IIA emitiu o Requisito Tópico de Terceiros (*Third-Party Topical Requirement*) em 15/09/2025, e
ele vigora desde 15/09/2026 (theiia.org). Requisito Tópico é componente obrigatório do IPPF, aplicado
com as Normas Globais de Auditoria Interna: quando a avaliação de risco da função de auditoria
interna leva o tema ao plano, todo trabalho de asseguração sobre terceiros tem de cobrir, como linha
de base mínima, o desenho e a implementação dos processos de governança, de gestão de risco e de
controle sobre terceiros. Em consultoria, o requisito é recomendado e não obrigatório. A exclusão
de item segue a orientação de aplicação do IIA, e a casa registra a justificativa no papel de
trabalho.

A consequência para esta skill é de fronteira. O laudo do Modo A e o papel de trabalho do Modo B são
diligência sobre um terceiro, prestada à contratante, e não asseguração sobre o processo de gestão
de terceiros dela. Quando a casa atuar como auditoria interna, própria do cliente ou terceirizada, e
o objeto for esse processo, a skill cobre a camada de controle na seleção e na contratação: a faixa
de criticidade da §2, o laudo anterior ao contrato e o teste de datas de `monitoramento-e-teste` §2.
Não cobre a governança do programa de terceiros (política, papéis, inventário, reporte ao colegiado)
nem a gestão do risco ao longo do contrato (reavaliação, monitoramento, encerramento). Essas duas
partes entram no programa de trabalho a partir do texto do requisito, com a avaliação de
aplicabilidade registrada no papel de trabalho (itens do requisito a confirmar no documento do IIA
antes do primeiro trabalho).

O IIA anuncia ainda um Requisito Tópico de Anticorrupção para o quarto trimestre de 2026, não
emitido até 26/10/2026 (theiia.org). Quando for emitido, vale do mesmo modo para a asseguração sobre o
programa de integridade, e `monitoramento-e-teste` deve ser revisto contra ele.

## O que entregar

1. O gate de entrada respondido: quem definiu escopo e critérios, modo A ou B, subconjunto de
   categorias coberto.
2. A faixa de criticidade do terceiro, com a razão que o colocou nela.
3. O laudo no padrão de `references/estrutura-do-laudo.md`, ou o papel de trabalho, no Modo B.
4. O dossiê de evidência, um arquivo por consulta, com data, inclusive as consultas sem ocorrência.
5. A estrutura completa do dicionário com sinalização das categorias cobertas, e a avaliação por
   categoria na escala de quatro níveis.
6. Os quatro gates da §6 percorridos, com a varredura de nome herdado registrada.
7. Em trabalho de auditoria interna sobre o processo de terceiros, a avaliação de aplicabilidade do
   Requisito Tópico de Terceiros, com as exclusões justificadas (§8).

## Próximo passo

`monitoramento-e-teste`, que trata a diligência como controle a ser testado: se a homologação
existe no papel e o contrato foi assinado antes do laudo sair, o pilar não está funcionando.
