---
titulo: Fundamentos
---

## A ideia que sustenta o método

Programa de integridade no Brasil nasceu de uma troca explícita: a lei responsabiliza a pessoa
jurídica objetivamente por ato lesivo à administração pública, e depois diz que a existência de
mecanismos internos de integridade com **aplicação efetiva** pesa na dosimetria da sanção. O
regulamento define o que é o programa e enumera os parâmetros pelos quais ele é avaliado. Essa
construção tem uma consequência que decide a metodologia inteira: o objeto de avaliação não é o
conjunto de documentos, é o conjunto de evidências de que os documentos foram aplicados.

Daí a escolha central do plugin. A régua de maturidade é aplicada **pilar a pilar**, com o corte
decisivo entre formalizado e aplicado, e a prova de aplicação é sempre um registro datado produzido
pela operação: o laudo de diligência anterior à assinatura do contrato, o termo de ciência do
admitido do mês passado, o protocolo do canal com data de encerramento, a ata com o tema em pauta.
Nenhuma dessas provas passa pela área de integridade descrevendo a si mesma, e é exatamente por isso
que elas servem.

A segunda escolha é sobre onde o trabalho tem lastro real. Cinco dos seis pilares aqui se apoiam em
base normativa vinculante, que é diferente de conteúdo genérico mas não é o mesmo que experiência de
execução. O sexto, a due diligence de terceiros, a casa executou, e a skill correspondente é a mais
densa do plugin porque ela carrega decisões que só aparecem quando o laudo precisa ser entregue: a
diferença entre a varredura de homologação e o aprofundamento investigativo, a declaração de que
quem definiu escopo e critérios foi a contratante, a captura de evidência da fonte que **não**
retornou ocorrência, e a varredura final do nome de cliente herdado do modelo.

A terceira é a fronteira com a gestão de riscos. O Dicionário de Riscos da ACTA nasceu na avaliação
de risco de terceiro e hoje vive no plugin de gestão de riscos, que é o dono dele. Este plugin
classifica e referencia; não redefine. Taxonomia duplicada é taxonomia que diverge em dois anos, e o
valor do dicionário está inteiro na comparabilidade entre trabalhos e entre anos.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Lei 12.846/2013 | Responsabilização administrativa e civil da pessoa jurídica por ato lesivo à administração pública, nacional ou estrangeira, em regime objetivo, com o programa de integridade pesando na dosimetria | A base de `pilares-do-programa` §1, e a razão de o pilar de terceiros existir: o ato praticado por quem age em nome da empresa alcança a empresa |
| Decreto 11.129/2022 | Regulamenta a lei, define programa de integridade e enumera os parâmetros de avaliação | Os dez pilares de `pilares-do-programa` §2 e a bateria de testes de `monitoramento-e-teste` §2, que é a mesma lista vista pelo lado da evidência |
| DOJ, Evaluation of Corporate Compliance Programs (ECCP) | Guia público do Departamento de Justiça norte-americano para avaliar programa de compliance, organizado em três perguntas | A pergunta de se o programa funciona na prática, que organiza `monitoramento-e-teste` §1 e a preferência por evidência transacional sobre evidência descritiva |
| ISO 37001 | Norma de sistema de gestão antissuborno, certificável | A disciplina de sistema de gestão: objetivo, controle operacional, análise crítica e melhoria registrada, em `monitoramento-e-teste` §1 e §6 |
| Dicionário de Riscos da ACTA | Taxonomia fechada da casa, quatro componentes, oito grupos, 52 categorias numeradas, hospedada em `acta-gestao-de-riscos` | A classificação do terceiro em `due-diligence-de-terceiros` §3, com a estrutura completa sinalizada no laudo |
| Escala com Limitação de Escopo | Decisão de método da casa: quatro níveis, sendo o primeiro a declaração de que a categoria não pôde ser avaliada | A avaliação por categoria no laudo, e a regra de que certidão não emitida não vira Baixo |
| COSO, Internal Control, Integrated Framework | Referencial de controle interno: atividade de controle existe para mitigar risco identificado, e se avalia se está presente e funcionando | A distinção entre desenho e efetividade que atravessa a régua de maturidade, com a mecânica em `acta-controles-internos` |
| LGPD | Regime de tratamento de dado pessoal, com base mínima, finalidade declarada e descarte | A §7 de `due-diligence-de-terceiros` e a anonimização obrigatória dos casos usados em treinamento |
| Método de auditoria da casa | Papel de trabalho, tipo de teste, régua de amostragem, redação de achado e degradação declarada da evidência | Todo o `monitoramento-e-teste` e o Modo B da due diligence, sem repetição do que vive em `acta-metodo-auditoria` |

## Onde a ACTA se afasta do manual

**O manual entrega pilares; a casa entrega evidência por pilar.** O diagnóstico usual de programa de
integridade lê as políticas, entrevista os responsáveis e produz uma nota de maturidade por
dimensão. Aqui a nota só existe amarrada a um registro datado, e a régua tem um corte explícito
entre formalizado e aplicado justamente para tornar caro o diagnóstico que confunde documento com
prática. A consequência prática é que o trabalho começa pedindo bases, não agendando entrevistas.

**O teste que decide o pilar de terceiros é uma comparação de datas.** Ordenar os contratos do
período pela data de assinatura e confrontar com a data do laudo de diligência custa uma consulta e
derruba o pilar na maioria dos casos: a diligência existe, o processo existe, e sai depois do
contrato. O manual pergunta se há procedimento de diligência. A casa pergunta se ele é anterior ao
contrato, porque diligência posterior não é controle.

**A ausência de ocorrência não é boa notícia por padrão.** É aqui que a casa mais se afasta da
prática de mercado em due diligence. O laudo comum classifica como risco baixo tudo o que não
retornou nada, e o leitor confunde "consultei e está limpo" com "não consegui consultar". O nível
Limitação de Escopo existe para separar os dois, e a disciplina associada é cara e inegociável:
capturar a evidência da fonte que não retornou nada, contar separadamente as fontes sem ocorrência e
as fontes com informação, e sinalizar no laudo a estrutura completa do dicionário para que a
categoria fora de escopo não seja lida como categoria sem risco.

**Canal de denúncias se avalia pelo que acontece quando o denunciado está no fluxo.** O desenho
comum descreve independência pela contratação de plataforma externa, e para aí. A casa testa três
camadas separadas, e a que quase sempre falha não é o recebimento: é o acesso. Plataforma que dá
perfil de administrador ao responsável pela integridade entrega a ele a denúncia contra ele, e a
política escrita de desvio não muda isso. Por isso o teste é sobre a matriz de perfis e a trilha de
acesso, e não sobre o procedimento.

**O terceiro se avalia pela linha do tempo, e não pelo cadastro atual.** Consulta ao quadro
societário do dia mostra a estrutura já arrumada. O que revela interposição é a sequência datada de
alterações, sobreposta ao período de vínculo e ao período do contrato. Saída de sócio administrador
poucos dias depois da entrada de pessoa ligada, e sociedade simultânea ao cargo na contratante, são
padrões que só existem no tempo. E o que se conclui é o fato datado e o controle ausente, nunca a
intenção: linha do tempo prova coincidência, não prova dolo, e achado que atribui intenção perde o
mérito junto com a discussão.
