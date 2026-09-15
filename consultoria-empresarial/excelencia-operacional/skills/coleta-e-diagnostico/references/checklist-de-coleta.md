# Checklist de coleta — oito blocos

Estrutura de referência para montar a planilha enviada ao cliente. Um mandato típico fecha em torno
de **54 itens**. Adapte ao ciclo (PTP, OTC, RTR, HTR) trocando o vocabulário do objeto — "fornecedor"
vira "cliente" no OTC, "colaborador" no HTR —, mantendo os blocos e a ordem de prioridade.

Colunas da planilha, na ordem:

`Nº | CATEGORIA | INFORMAÇÃO NECESSÁRIA | FORMATO ESPERADO | FONTE SUGERIDA | PROCESSO(S) IMPACTADO(S) | RESPOSTA/ANEXO | STATUS | OBSERVAÇÃO`

`FONTE SUGERIDA` é sempre **cargo**, nunca nome. `PROCESSO(S) IMPACTADO(S)` referencia os prefixos de
subprocesso definidos em `taxonomia-de-processos`.

---

## B1 — Contexto institucional · prioridade 1ª

| Informação | Formato esperado | Fonte |
|---|---|---|
| Segmento de atuação e principais linhas de negócio | Texto curto | Diretoria |
| Porte: faturamento, nº de colaboradores, nº de unidades | Tabela | CFO |
| Unidades e localidades envolvidas no ciclo | Lista | Controller |
| Grau de centralização: o que é decidido na matriz × na unidade | Tabela unidade × decisão | CFO |
| ERP em uso, **com versão e módulos ativos** | Texto + lista de módulos | TI |
| Sistemas complementares que tocam o ciclo (portal, workflow, assinatura, BI) | Tabela sistema · função · integrado ao ERP Sim/Não | TI |
| Grau de maturidade percebido dos processos do ciclo | Escala + justificativa | Controller |
| Projetos em curso que alteram o ciclo nos próximos 12 meses | Lista | Diretoria |

Versão e módulos não são detalhe técnico: eles decidem se uma oportunidade é parametrização (semanas)
ou projeto de sistema (trimestres).

## B2 — Organograma e equipe · prioridade 1ª

| Informação | Formato esperado | Fonte |
|---|---|---|
| Organograma **apenas das áreas do ciclo** | Arquivo | RH |
| Lista nome · cargo · área · a quem reporta | Tabela | RH |
| Nº de pessoas por atividade do ciclo e dedicação (integral/parcial) | Tabela | Gestor da área |
| **Confirmação de segregação de funções**: quem solicita, quem aprova, quem executa, quem paga | Tabela atividade × cargo | Controller |
| Comitês existentes: composição, periodicidade, alçada | Tabela | Diretoria |
| Perfis de acesso no ERP por cargo do ciclo | Tabela ou print | TI |

Acúmulo de papéis descoberto aqui vira regra de negócio e vira oportunidade — ver
`oportunidades-e-quick-wins`, pilar `O&P`.

## B3 — Alçadas de aprovação · prioridade 2ª · **CRÍTICO**

| Informação | Formato esperado | Fonte |
|---|---|---|
| Faixas de valor × aprovadores | Tabela faixa · aprovador · nº de aprovações | CFO |
| Diferença de alçada por tipo (investimento, custeio, emergencial) | Tabela | CFO |
| Alçadas de **pagamento**, se diferentes das de aprovação da despesa | Tabela | Controller |
| Quem assina contrato, por faixa | Tabela | Jurídico |
| Valor a partir do qual contrato formal é obrigatório | Valor + regra | Jurídico |
| Alçada de exceção: quem pode furar a regra e como se registra | Sim/Não + descrição | Controller |

**Sem B3 o manual não tem valor prático.** Não avance para o desenho do subprocesso de aprovação com
este bloco aberto — escale.

## B4 — Tipos e categorias · prioridade 3ª

| Informação | Formato esperado | Fonte |
|---|---|---|
| Categorias do ciclo com volume anual (quantidade e valor) | Tabela | Controller |
| Operação internacional: existe? que categorias? | Sim/Não + descrição | CFO |
| Sazonalidade: meses de pico e de vale | Tabela ou gráfico | Gestor da área |
| Classificação de urgência em uso e quem classifica | Lista + critério | Gestor da área |
| Fundo fixo / caixa pequeno: existe, limite, prestação de contas | Sim/Não + descrição | Controller |
| Itens recorrentes (contratos continuados, assinaturas) | Lista | Comprador |

## B5 — Políticas e regras · prioridade 3ª

| Informação | Formato esperado | Fonte |
|---|---|---|
| Políticas formais vigentes do ciclo | Arquivo | Controller |
| Nº mínimo de cotações por faixa de valor | Tabela | Comprador |
| Critério de seleção (menor preço, técnica e preço, outro) | Descrição | Comprador |
| Regra de fornecedor único / dispensa: quando e quem autoriza | Descrição | Comprador |
| **Lead time alvo por etapa** do ciclo | Tabela etapa · prazo alvo | Gestor da área |
| Prazo de pagamento padrão e exceções | Tabela | Controller |
| Quem atesta o recebimento de serviço (vs. material) | Cargo + regra | Gestor da área |
| Tratamento de divergência (quantidade, preço, qualidade) | Descrição do fluxo atual | Almoxarife / Controller |

Lead time alvo declarado aqui é a matéria-prima da coluna SUGESTÕES de `sla-e-indicadores`. Quando não
existe, o SLA sugerido nasce do que a entrevista AS IS mediu, e isso se declara.

## B6 — Base de cadastro · prioridade 4ª

| Informação | Formato esperado | Fonte |
|---|---|---|
| Base homologada: quantidade de registros ativos | Número | Comprador |
| **Exportação do cadastro sem dados bancários nem fiscais sensíveis** | Arquivo | TI |
| Critérios de homologação vigentes | Lista + documentos exigidos | Comprador |
| Existe avaliação periódica? periodicidade e critério | Sim/Não + descrição | Comprador |
| Cadastros críticos (concentração, exclusividade) | Lista por categoria | Comprador |
| Contratos ativos: quantidade, vigência, renovação automática | Tabela | Jurídico |

O pedido é da **estrutura** e dos **critérios**. Dado bancário e fiscal de terceiro não é necessário
para mapear processo, e recebê-lo cria passivo de LGPD sem contrapartida.

## B7 — Processo atual AS IS · **CRÍTICO**

Coletado por entrevista, não por formulário. Ver §3 da skill.

| Informação | Formato | Fonte | Duração |
|---|---|---|---|
| Passo a passo de hoje, narrado sobre um caso real recente | Entrevista com o computador aberto | Executor da ponta | 60 min |
| O que é sistema × o que é e-mail, mensageiro ou planilha | Mapa por etapa | Executor da ponta | na mesma |
| Gargalos e reclamações, nas palavras de quem executa | Notas | Executor da ponta | na mesma |
| Contornos do processo formal e o motivo de cada um | Notas | Executor da ponta | na mesma |
| Ciclo financeiro: prazo médio **real** por etapa | Entrevista + extração | Controller | 60 min |
| Conferência automática entre pedido, recebimento e documento fiscal: existe? é automática? | Sim/Não + descrição | Controller / TI | na mesma |
| Formalização de contrato: quando ocorre na prática | Descrição | Jurídico | — |
| Volume das exceções relatadas ("às vezes acontece" → número) | Número ou % | Gestor da área | — |

## B8 — KPIs e metas · prioridade 5ª

| Informação | Formato esperado | Fonte |
|---|---|---|
| Indicadores acompanhados hoje no ciclo | Lista + definição de cada | Controller |
| Print ou exportação do painel em uso | Arquivo | Controller |
| Orçamento por categoria e realizado do último exercício | Tabela | CFO |
| Expectativas da diretoria com o projeto | Notas de conversa | Diretoria |
| Meta de ganho declarada (economia, redução de prazo, redução de esforço) | Número + prazo | CFO |
| Rituais de gestão: reuniões, periodicidade, quem participa, o que se decide | Tabela | Gestor da área |

B8 é o contraponto de `sla-e-indicadores`: indicador que já existe e funciona não se substitui por
elegância. Herde a definição operacional em uso, e só proponha troca quando a definição atual for
ambígua ou não medir o que o processo entrega.
