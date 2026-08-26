# Mapa de arquivos e bases de dados (template)

Este módulo tem duas partes. A Parte A é o protocolo a repetir no início de todo
projeto novo (o que inventariar, como avaliar qualidade da base de cargos, como
compor o painel). A Parte B é a arquitetura de bases de dados, que é estável
entre projetos e não precisa ser redesenhada a cada cliente.

## Parte A. Protocolo de inventário e diagnóstico inicial

### A.1 Checklist de insumos a coletar no kick-off

Repetir esta lista em todo projeto, adaptando os nomes dos responsáveis. É a
generalização do que os casos FJS e PASB pediram, cada um com seu vocabulário
próprio (a FJS chama de "estrutura salarial vigente", a pesquisa PASB chamava de
"tabelas praticadas").

| # | Insumo | Bloqueia |
| --- | --- | --- |
| 1 | Lista de cargos no escopo, com descrição sumária de responsabilidades | Todo o matching |
| 2 | Estrutura de remuneração vigente do cliente (tabelas, faixas, data-base) | Cálculo de comparatio e gaps |
| 3 | Política de benefícios e remuneração variável do cliente | Análise de Total Rewards |
| 4 | Mapeamento de populações internas heterogêneas, se existirem (unidades, filiais, regionais, regimes distintos) | Segmentação obrigatória (regra R4) |
| 5 | Repositório seguro para dados de terceiros | Início da coleta |
| 6 | Painel de participantes indicado pelo cliente, com justificativa | Composição do painel |
| 7 | Decisão sobre identidade da pesquisa e contrapartida aos participantes | Disparo dos convites |
| 8 | Composição de encargos e regime tributário do cliente | Cálculo de custo total, se estiver no escopo |
| 9 | Moeda(s) de referência do cliente e dos participantes esperados | Ativa ou não o módulo de conversão cambial |
| 10 | Regime(s) de jornada praticados (mensalista, horista, escala) | Ativa ou não o módulo de mensalização de horista |

Registrar cada insumo pendente com responsável e data de compromisso no
checkpoint do projeto (`P-01`, `P-02`, ...). Insumo sem data firme é o principal
preditor de atraso de cronograma nos dois casos que originaram este plugin.

### A.2 Checklist de qualidade da base de cargos recebida

Toda base de cargos recebida de cliente carrega os mesmos tipos de problema,
independentemente do setor. Aplicar este checklist antes de iniciar o matching e
devolver os achados ao cliente junto com o pedido de descrições.

| # | Problema | Como detectar | Exemplo já observado |
| --- | --- | --- | --- |
| 1 | Duplicidade literal de cargo | Contagem de valores distintos versus total de linhas | Caso FJS: um cargo técnico duplicado na planilha original |
| 2 | Senioridade inconsistente | Verificar se a régua (numeração romana, nomenclatura, ausência de sufixo) é uniforme e sem lacunas | Caso FJS: mistura de I a V com Júnior/Pleno/Sênior no mesmo conjunto |
| 3 | Acentuação e grafia irregulares | Normalizar antes de usar como chave | Comum em bases exportadas de sistemas de folha antigos |
| 4 | Ausência de metadados essenciais (headcount, unidade, família, nível) | Verificar colunas presentes contra o dicionário de dados | Recorrente em toda primeira entrega de cliente |
| 5 | Cargo sem correspondência de mercado esperada | Cruzar título com vocabulário de mercado do setor | Cargos de nomenclatura interna, sem verbete comum no setor |
| 6 | Cargo sem ocupante | Confirmar headcount declarado antes do matching | Caso PASB: cargo de especialização sem ocupante, desconsiderado da amostra |
| 7 | Critério de nível não documentado | Perguntar ao cliente o que diferencia os níveis antes de assumir ordenação | Caso PASB: nível de professor definido por qualificação acadêmica, não por série |

Um cargo com qualquer um dos problemas 1 a 5 não entra em matching até ser
esclarecido com o cliente. Um cargo com o problema 6 é excluído da estatística
com motivo padronizado, não apenas observado em rodapé.

### A.3 Protocolo de composição do painel de participantes

1. Herdar a lista indicada pelo cliente como ponto de partida, nunca como
   painel final.
2. Aplicar os critérios de comparabilidade do projeto (porte, setor, região,
   maturidade de gestão, e qualquer eixo de comparabilidade adicional definido
   no cartão de identidade).
3. Identificar lacunas de comparabilidade que a lista do cliente não cobre. No
   caso FJS, a lacuna era a ausência de comparáveis corporativos de grande
   porte fora do setor de saúde. Toda pesquisa tende a ter uma lacuna análoga;
   procurá-la ativamente na Etapa 1.
4. Dimensionar convites acima do mínimo amostral. Referência de conversão
   observada em pesquisa proprietária de primeira edição: entre 40% e 60% dos
   convites. Convidar 50% acima do mínimo é a prática recomendada por padrão.
5. Submeter o painel revisado à aprovação formal do Sponsor antes do disparo
   dos convites.

## Parte B. Arquitetura de bases de dados (estável entre projetos)

Modelo estrela simples. Três dimensões, um fato principal, três camadas de
processamento. A mesma arquitetura serve à planilha e ao Power BI.

```
CAMADA 1: INSUMO                CAMADA 2: PROCESSAMENTO         CAMADA 3: CONSUMO
B1_CARGOS_CLIENTE  ─────┐
B2_ESTRUTURA_CLIENTE ───┼──> B4_MATCHING ──> B5_COLETA_BRUTA ──> B6_BASE_TRATADA ──┬──> B7_ESTATISTICAS ──> Relatorio
B3_PAINEL_PARTICIPANTES ┘                                                          ├──> B8_COMPETITIVIDADE ──> Tabela Excel
                                                                                    ├──> B9_BENEFICIOS ──> Power BI
                                                                                    └──> B10_LOG_AUDITORIA ──> Rel. individuais
```

### B.1 Dimensões

**`B1_CARGOS_CLIENTE`** (dimensão Cargo, grão: um cargo do cliente)

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| `cod_cargo` | texto CG-### | sim |
| `nome_cargo_cliente` | texto | sim |
| `nome_cargo_normalizado` | texto | sim |
| `familia` | lista, definida por projeto | sim |
| `subfamilia` | lista | não |
| `nivel_funcional` | lista, definida por projeto | sim |
| `criterio_nivelamento` | texto (senioridade, qualificação, tempo de casa, outro) | sim |
| `nivelamento_valor` | texto ou número, conforme o critério | sim |
| `natureza` | lista, definida por projeto | sim |
| `headcount_cliente` | inteiro | sim |
| `jornada_padrao_h` | número | sim |
| `regime_jornada` | lista: mensalista, horista, escala | sim |
| `moeda_referencia` | texto | sim |
| `formacao_requisito` | texto | não |
| `flag_convencao` | booleano | sim |
| `flag_cargo_critico` | booleano | sim |
| `flag_sem_ocupante` | booleano | sim |
| `status_matching` | lista: Não iniciado, Em análise, Match total, Match parcial, Proxy, Sem match | sim |

**`B3_PAINEL_PARTICIPANTES`** (dimensão Participante, grão: uma instituição
convidada)

Campos: `cod_empresa`, `nome_empresa` (restrito), `recorte` (o eixo de
comparação principal do projeto, geográfico ou de outra natureza),
`cidade_uf_pais`, `setor`, `subsetor`, `porte_colaboradores`, `porte_leitos_ou_
equivalente`, `faturamento_faixa`, `certificacao`, `origem_indicacao`,
`justificativa_comparabilidade`, `status_convite`, `data_convite`,
`data_resposta`, `nº_follow_ups`, `interlocutor` (segregado por LGPD),
`nda_assinado`, `data_nda`, `flag_reserva`, `granularidade_retorno`.

`Dim_Recorte` e `Dim_Populacao_Interna` (a generalização de "unidade própria
versus contrato de gestão" e de "escola regional versus nacional") completam o
modelo.

### B.2 Fato e camadas

**`B4_MATCHING`** (grão: cargo do cliente x participante x cargo do
participante)

Campos: `cod_cargo`, `cod_empresa`, `cargo_mercado_titulo`, `grau_match` (Total,
Parcial, Proxy, Sem match), `score_match` (0 a 100, ver
`skills/matching-cargos.md`), `fator_escala` (quando aplicável), `justificativa`,
`validado_por`, `data_validacao`, `flag_usar_na_estatistica`.

**`B5_COLETA_BRUTA`** (grão: cargo mercado x participante x componente de
remuneração)

Recebe exatamente o que o participante informou, sem tratamento. Base
imutável. Campos principais: `cod_empresa`, `cod_cargo`, `n_incumbentes`,
`salario_base_min`, `salario_base_med`, `salario_base_max`, `moeda`,
`jornada_h`, `regime_jornada`, `data_referencia`, `periodicidade`,
`rem_variavel_tipo`, `rem_variavel_target_pct`, `rem_variavel_pago_pct`, blocos
de benefícios (ver dicionário de dados), `encargos_pct`,
`observacao_participante`.

**`B6_BASE_TRATADA`** (grão idêntico a B5, com colunas de tratamento
adicionadas)

Nunca sobrescreve B5. Acrescenta: `salario_normalizado_jornada_referencia`,
`salario_convertido_moeda_referencia`, `salario_atualizado_database`,
`flag_outlier`, `regra_outlier_aplicada`, `flag_excluido`, `motivo_exclusao`,
`peso_headcount`, `versao_tratamento`. Toda exclusão tem motivo textual.

**`B7_ESTATISTICAS`** (grão: cargo x recorte)

`cod_cargo`, `recorte`, `n_empresas`, `n_incumbentes`, `minimo`, `q1`, `media`,
`media_ponderada`, `mediana`, `q3`, `maximo`, `desvio_padrao`,
`coef_variacao`, `iqr`, `p10`, `p90`, `flag_amostra_suficiente`,
`metodo_percentil`, `data_calculo`, `versao_base`.

**`B8_COMPETITIVIDADE`** (grão: cargo x recorte x população interna, se houver)

`salario_cliente`, `comparatio_mediana`, `comparatio_q1`, `comparatio_q3`,
`gap_absoluto`, `gap_percentual`, `posicao_na_faixa`, `classificacao`,
`impacto_folha_estimado`, `prioridade_ajuste`.

**`B9_BENEFICIOS`** (grão: benefício x participante x recorte)

`prevalencia_pct`, `valor_mediano`, `coparticipacao_pct`, `elegibilidade`,
`valor_monetizado_mensal`. A lista de benefícios pesquisados é definida por
projeto (ver `02-dicionario-de-dados.md`); a estrutura da base não muda.

**`B10_LOG_AUDITORIA`** (grão: um evento)

`data_hora`, `autor`, `base_afetada`, `versao_origem`, `versao_destino`,
`tipo_evento`, `descricao`, `id_calculo_livro`, `quantidade_linhas_afetadas`.
Este é o artefato que torna o projeto auditável e o que permite mais de um
consultor trabalhar sem se sobrescrever.

### B.3 Regras de integridade entre bases (fixas, não editar por projeto)

1. Nenhuma linha de B5 sem `cod_empresa` válido em B3 e `cod_cargo` válido em
   B1.
2. Nenhum cargo em B7 com `flag_amostra_suficiente = FALSE` pode aparecer em
   B8.
3. `n_empresas` em B7 é sempre contagem distinta de `cod_empresa`, nunca de
   linhas.
4. Soma de headcount por cargo em B1 confere com a folha do cliente.
5. Toda versão de B6 aponta para uma única versão de B5.
6. Recálculo de B7 sempre gera nova versão, jamais edição in loco.
7. Todo cargo com `flag_sem_ocupante = TRUE` é excluído de B6 com motivo
   padronizado, nunca silenciosamente.
