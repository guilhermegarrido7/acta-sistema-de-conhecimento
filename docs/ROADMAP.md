# Roadmap

Status de cada plugin. **Só entra no `marketplace.json` o que tem conteúdo**, assim ninguém
instala plugin vazio. Promover um plugin = escrever as skills, depois adicionar a entrada no
marketplace.

Legenda: **Publicado** no marketplace · **Parcial** tem conteúdo, ainda incompleto ·
**Esqueleto** só estrutura.

## Fundação

| Plugin | Status | No marketplace | Observação |
|---|---|---|---|
| `acta-way` | Completo | sim | 7 de 7 skills com conteúdo real: `checkpoint` (com handoff e detecção de bifurcação), `ambiente-tecnico`, `edicao-em-massa`, `identidade-visual` (paleta, tipografia, contraste e a reconciliação com o tema do PowerPoint), `convencoes-de-entregavel`, `anonimizacao-e-lgpd` e `redacao-acta`. |

## Conceitos

| Plugin | Status | No marketplace | Observação |
|---|---|---|---|
| `acta-pensadores-de-negocios` | Completo | sim | 1 skill roteadora (`lentes`) e 14 lentes em `skills/lentes/references/`, lidas sob demanda: o plugin custa uma descrição no contexto, em vez de quinze (−~930 tokens). Fronteira com `acta-modelagem-economico-financeira` declarada em `references/tim-koller.md`. |

## Consultoria Empresarial

| Plugin | Status | No marketplace | Observação |
|---|---|---|---|
| `acta-metodo-consultoria` | Completo | sim | 6 skills do método transversal da prática: diagnóstico e entrevistas (com a hierarquia de autoridade entre fontes divergentes fechada antes do primeiro cálculo), mapeamento AS IS, desenho TO BE, priorização e roadmap, gestão de mudança, e defesa técnica com o registro de decisões metodológicas revistas. Escrito a partir da metodologia registrada de um diagnóstico econômico-financeiro de 17 meses. |
| `acta-planejamento-estrategico` | Completo | sim | 7 skills organizadas nos quatro workshops da casa: diagnóstico, propósito/visão/valores, ambientes, direcionadores e mapa estratégico, desdobramento e metas, painel, mais a mecânica de condução de workshop. |
| `acta-planejamento-orcamentario` | Completo | sim | 6 skills, método driver-based (âncora Driver-Based Budgeting + Beyond Budgeting + ZBB + Rolling Forecast + CPC 27): premissas e drivers (com a escolha de modelo), orçamento de receita por volume × preço, despesa e pessoal com encargos apurados, CapEx e depreciação com os três reflexos, ciclo/calendário/consolidação multiunidade, análise de variação volume-preço-mix e forecast. Validado em caso de grupo de mobilidade mid-market. Ver [MAPEAMENTO-AI-FIRST.md](MAPEAMENTO-AI-FIRST.md) §3.1. |
| `acta-operacoes-inteligentes` | Esqueleto | não | Desenho de modelos de operação apoiados em automação e analytics: identificação de casos, … |
| `acta-centro-servicos-compartilhados` | Esqueleto | não | Estruturação de CSC: escopo de serviços, modelo de atendimento e SLA, dimensionamento, cat… |
| `acta-modelos-de-custeio` | Esqueleto | não | Desenho de modelo de custeio: escolha do método, mapeamento de direcionadores, rateio, cus… |
| `acta-reducao-estrategica-de-custos` | Esqueleto | não | Programa de redução de custos: baseline de gastos, identificação e priorização de alavanca… |
| `acta-transformacao-comercial` | Esqueleto | não | Transformação comercial e crescimento de receita: diagnóstico do funil, política comercial… |
| `acta-excelencia-operacional` | Completo | sim | 7 skills: taxonomia de processos, coleta e diagnóstico, workshop de mapeamento, fluxo e regras de negócio, oportunidades e quick wins, SLA e indicadores, manual de processos. |
| `acta-ma-sell-buy-side` | Completo | sim | 12 de 12 skills com conteúdo real, do estudo setorial ao closing: convenções de projeto, estudo setorial, transações precedentes, go-to-market, teaser, segmentação de compradores, IM, solicitação de informações, negociação/LOI, processo competitivo e propostas, due diligence e data room, SPA e closing (com o PPA em `references/`). |
| `acta-modelagem-economico-financeira` | Completo | sim | 14 de 14 skills com conteúdo real, framework Koller/McKinsey: fundamentos, reorganização contábil, ROIC, custo de capital, capital de giro/CapEx, impostos (com a transição tributária 2026–2033 e a Lei 15.270/2025 em `references/`), projeção de mercado/equity story, projeção/cenários, saúde de crédito, valor terminal, triangulação, revisão de modelo, relatório de valuation. CPC 51 a partir de 2027. Custo always-on ~979 tokens, perto do teto de 1.000. |
| `acta-selecao-de-erp` | Esqueleto | não | Seleção de ERP: levantamento de requisitos, matriz de aderência, RFP, avaliação de fornece… |
| `acta-dados-e-analytics` | Completo | sim | 7 skills, analytics financeiro de consolidação (âncora CRISP-DM + DAMA-DMBOK qualidade + McKinsey data-driven, lente AI-first): diagnóstico e escopo com a pergunta antes do dado, ingestão e tratamento com ETL agêntico, qualidade e validação com reconciliação contra fonte autoritativa, reclassificação gerencial com total invariante, consolidação e intercompany pela contrapartida espelhada, modelo analítico e visualização com decisão de pipeline, insight e recomendação com dono humano. Validado em caso de grupo imobiliário/hoteleiro multiempresa. Ver [MAPEAMENTO-AI-FIRST.md](MAPEAMENTO-AI-FIRST.md) §3.2. |
| `acta-pccr` | Esqueleto | não | Construção de PCCR: descrição e avaliação de cargos, arquitetura de carreira, tabela salar… |
| `acta-pesquisa-salarial` | Completo | sim | 18 de 18 skills com conteúdo real: o método da casa, as 13 etapas do ciclo de vida (de escopo e proposta a encerramento e lições aprendidas), matching de cargos, estatística de remuneração, modelagem de planilhas e painel em Power BI. |
| `acta-avaliacao-de-desempenho` | Esqueleto | não | Desenho de avaliação de desempenho: modelo e ciclo, competências e metas, calibração, feed… |
| `acta-remuneracao-variavel` | Esqueleto | não | Desenho de remuneração variável: elegibilidade, indicadores e metas, curva de pagamento, s… |
| `acta-reestruturacao-organizacional` | A mapear | não | **Serviço oficial do portfólio, ainda sem esqueleto.** Desenho de estrutura organizacional, posicionamento de lideranças, linhas de reporte, cargos e responsabilidades. Aguarda matéria-prima real. |
| `acta-dimensionamento-de-quadro` | A mapear | não | **Serviço oficial do portfólio, ainda sem esqueleto.** Cálculo de headcount por volumetria operacional, sazonalidade, senioridade e carga horária. Aguarda matéria-prima real. |
| `acta-supply-chain` | A mapear | não | **Serviço oficial do portfólio, ainda sem esqueleto.** Procurement (estratégia de compras, SKUs, gestão de fornecedores), logística e S&OP. Aguarda matéria-prima real. |
| `acta-levantamento-de-capital` | A mapear | não | **Serviço oficial do portfólio (M&A/F&A), ainda sem esqueleto.** Business plan e modelagem, distribuição da oportunidade a investidores, negociação de termos, coordenação de diligência e legal. Fronteira com `acta-ma-sell-buy-side` e `acta-modelagem-economico-financeira` a declarar. Aguarda matéria-prima real. |
| `acta-business-plan` | A mapear | não | **Serviço oficial do portfólio (M&A/F&A), ainda sem esqueleto.** Desenvolvimento de business plan para empresas, acionistas e investidores. Matéria-prima parcial em projetos de business plan e em mandato de M&A de grupo de saúde. Aguarda consolidação. |

## Governança, Riscos e Compliance

| Plugin | Status | No marketplace | Observação |
|---|---|---|---|
| `acta-metodo-auditoria` | Completo | sim | 7 de 7 skills com conteúdo real: método, bases e conciliação, papel de trabalho, programa de testes, redação de achados, relatório e aprendizado. Metodologia de campo absorvida e anonimizada. A skill mestra (`metodo-auditoria`) carrega as regras R1 a R8 e manda o detalhe para `references/`: ~2 mil tokens por ativação, contra ~4,6 mil antes. |
| `acta-governanca` | Esqueleto | não | Estruturação de governança corporativa: instâncias e alçadas, regimento e estatuto, compos… |
| `acta-gestao-de-riscos` | Completo | sim | 6 skills ancoradas em COSO ERM 2017 e ISO 31000: taxonomia com o dicionário de riscos da casa (4 componentes, 8 grupos, 52 categorias) em references, apetite e tolerância revelados da prática, escalas de impacto e probabilidade com o nível Limitação de Escopo, matriz e mapa de calor por zonas, planos de resposta com teste de suficiência, monitoramento e KRI. |
| `acta-revenue-assurance` | Completo | sim | 7 skills: ciclo da receita, contrato e cadastro, medição e aceite, faturamento e NF, recebimento e inadimplência, matriz de riscos da receita (14 riscos do ciclo + 4 de evento), e receita de evento (fechamento por natureza — patrocínio, permuta, cortesia, bebidas — contra a autorização de faturamento). A variante de evento validada em caso de fechamento de grande show. |
| `acta-segregacao-de-funcoes` | Completo | sim | 4 skills: matriz de SoD, catálogo de conflitos críticos, ciclo de vida do acesso (concessão, revisão periódica, revogação no desligamento) e controle compensatório para quando não há gente para segregar. Escrito a partir de dois ciclos de SOX IT. Fronteira com `acta-controles-internos:itgc` declarada. |
| `acta-programa-de-integridade` | Completo | sim | 6 skills: pilares do programa (12 pilares cobrindo os 15 incisos do art. 57 do Decreto 11.129/2022, mais Lei 14.133/2021 e Decreto 12.304/2024), código de conduta, canal de denúncias, due diligence de terceiros (com os dois modos, homologação e investigação de vínculo, mais o padrão de interposta pessoa), treinamento e comunicação, e monitoramento e teste. A estrutura do laudo, as fontes de consulta e o protocolo de mídia negativa em `references/`. Escrito de três casos executados. |
| `acta-controles-internos` | Completo | sim | 6 skills ancoradas em COSO 2013 e PCAOB AS 2201: matriz de riscos e controles, walkthrough e narrativa, desenho × efetividade, teste e amostragem, deficiências e severidade, ITGC. |
| `acta-forense` | Esqueleto | não | Investigação forense: preservação de evidência, análise documental e de dados, entrevistas… |
| `acta-esg` | Esqueleto | não | Diagnóstico e estruturação ESG: materialidade, indicadores e frameworks de reporte, plano … |
| `acta-auditoria-folha` | Completo | sim | 6 skills: universo da folha e conciliação com a contabilidade e com o pagamento, encargos e benefícios pela base de incidência, jornada com o cruzamento do ponto contra a folha, admissão e desligamento, terceiros e pejotização (entrega matriz de sinais e escala para o jurídico, sem qualificar a relação), e a matriz de riscos. |
| `acta-auditoria-estoques` | Completo | sim | 5 skills: acuracidade e inventário (corte, segunda contagem cega, recontagem dirigida por bloco físico, os dois indicadores de acuracidade), custeio e giro, obsolescência e provisão, movimentação e perdas, e a matriz com 14 riscos `INV.R<NN>` classificados no dicionário da casa. Escrito de um inventário físico real. |
| `acta-auditoria-compras` | Completo | sim | 6 skills do ciclo PTP: ciclo em sete elos, matriz dos quinze riscos, requisição e alçada (com a bateria de fracionamento por população), cotação e seleção (sinais de direcionamento e cruzamento de conflito de interesse), contrato e aditivo, recebimento e pagamento (três vias e as sete variantes de duplicidade). |
| `acta-auditoria-convenios` | Completo | sim | 6 skills, plugin novo fora do desenho original da seção 3: ciclo do convênio, matriz de riscos, estruturação e formalização, execução e fornecedores, prestação de contas (reconciliação do extrato contra o sistema, desvio de finalidade, regra dos 80%) e contrapartida e encerramento. O desfecho é valor a devolver, não recomendação, e é isso que o separa de `acta-auditoria-compras`. Escrito de catorze ordens de serviço de mesma estrutura. |
| `acta-auditoria-de-pesquisa` | Completo | sim | 6 skills, plugin novo fora do desenho original: ciclo e os dois modos (indicador contínuo reportado a regulador e apuração pontual de resultado), instrumento e dicionário de dados, aderência da amostra conferida contra a população oficial, bateria de oito testes organizada por famílias de gravidade, recontato do respondente com tabela fechada de códigos e as três taxas que nunca se somam, e a apuração com denominador próprio por pergunta. Escrito de ciclos mensais de verificação de indicador regulado e de duas edições de apuração auditada de resultado. |
| `acta-auditoria-marketing` | Esqueleto | não | Auditoria de gastos de marketing: verbas e patrocínios, contratação de agências, comprovaç… |
| `acta-auditoria-producao` | Esqueleto | não | Auditoria do ciclo de produção: apontamento, consumo e perdas, produtividade, manutenção e… |

---

## Ordem sugerida

As três camadas de fundação estão escritas, e é delas que os plugins de projeto dependem:

1. ~~**`acta-way`**~~ concluído. As sete skills da fundação, e skill de projeto passa a apontar para
   elas em vez de redefinir paleta, nomenclatura, anonimização ou padrão de escrita.
2. ~~**`acta-metodo-auditoria`**~~ concluído. É o método que todo plugin de processo auditado
   referencia sem repetir.
3. ~~**`acta-metodo-consultoria`**~~ concluído. O equivalente para a prática de Consultoria
   Empresarial, escrito a partir da metodologia registrada de um diagnóstico econômico-financeiro.
4. ~~**`acta-pesquisa-salarial`**~~ concluído, 18 de 18 skills.

Daqui em diante vale a regra do `MAPEAMENTO.md` seção 4: **um plugin só sai de esqueleto quando
houver projeto executado de onde extrair método.** Escrever sem caso de uso produz conteúdo
genérico, que é pior que esqueleto honesto. Os plugins promovidos desde então nasceram todos de
matéria-prima real da pasta de projetos, e cada um registra no MAPEAMENTO qual foi.

## Ao completar um plugin

1. Escrever as skills em `skills/<etapa>/SKILL.md`.
2. Atualizar o `README.md` do plugin com a tabela de skills e o fluxo típico, mantendo o aviso de
   pré-requisito no topo.
3. Declarar no `plugin.json` o campo `dependencies`: `acta-way` sempre, e o método da prática
   (`acta-metodo-auditoria` ou `acta-metodo-consultoria`) quando as skills mandarem carregá-lo. O
   validador barra plugin publicado sem `acta-way` nas dependências.
4. Subir a `version` no `plugin.json`.
5. Adicionar a entrada em `.claude-plugin/marketplace.json`.
6. Atualizar a linha aqui.
7. `py -3 scripts/validar-skills.py` e `claude plugin validate <dir> --strict`.
