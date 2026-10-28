# Mapeamento e prioridades

Este documento responde: **o que cada plugin vai conter, em que ordem os plugins são escritos, e
que regras impedem o marketplace de ficar pesado.** O status corrente de cada plugin vive em
[ROADMAP.md](ROADMAP.md); a decisão de arquitetura, em [ARQUITETURA.md](ARQUITETURA.md).

---

## 1. Diagnóstico

**Linha de base**, medida antes da rodada de trabalho que este documento organiza. Os números
abaixo são o problema que a seção 4 ataca, não o estado atual. O estado atual vive em
[ROADMAP.md](ROADMAP.md).

| Métrica | Valor |
|---|---|
| Plugins no repositório | 33 |
| Plugins publicados no `marketplace.json` | 5 |
| Plugins com pelo menos uma skill escrita | 6 |
| Plugins 100% vazios (nenhum `SKILL.md`) | 27 |
| Skills escritas no total | 66 (das quais 18 ainda são esqueleto) |
| Custo always-on somado, se tudo estivesse instalado | ~5,1 mil tokens |
| Descrição média por skill | 310 caracteres (~78 tokens) |

### Os três problemas que o diagnóstico revelou

**1. Valor pronto e invisível.** `acta-pensadores-de-negocios` tem 15 skills escritas, com disciplina
de fronteira entre si e com os outros plugins, e não está no `marketplace.json`, nem aparece no
README raiz. Ninguém na firma consegue instalá-lo. O `README.md` da raiz também está defasado: marca
como prontos apenas `_metodo` e Pesquisa Salarial, quando Modelagem Econômico-Financeira e M&A também
já estão publicados.

**2. O custo always-on não tem teto declarado.** A arquitetura acertou ao separar um plugin por
projeto: o custo permanente é por *skill*, e paga-se só pelo plugin instalado. Mas não existe regra
escrita limitando o tamanho da `description`, que é exatamente o que se paga em toda sessão. Sem
teto, o marketplace engorda sozinho a cada contribuição.

**3. Não há porta de entrada.** Com 33 plugins previstos, um consultor que chega não tem como saber o
que instalar para o engajamento dele. O README descreve a estrutura do repositório, não o caminho de
uso.

---

## 2. Padrão de skill (o teto que impede o marketplace de engordar)

As regras já existiam em [CONVENCOES.md](../CONVENCOES.md) §5. O que faltava era aplicá-las.
`scripts/validar-skills.py` passa a fazer isso:

| Regra | Limite | Severidade | Por quê |
|---|---|---|---|
| `description` | **220 a 380 caracteres** | erro acima, aviso abaixo | É o que se paga em toda sessão. 380 caracteres ≈ 95 tokens. |
| Corpo do `SKILL.md` | **≤ 300 linhas** | aviso | Acima disso, mover detalhe para `references/`, que só carrega quando necessário. |
| Skills por plugin | **5 a 12** | referência | Abaixo de 5, o plugin provavelmente não merece existir sozinho. Acima de 12 não há aviso: o validador mede o custo, não a contagem. |
| Custo always-on do plugin | **≤ 1.000 tokens** | aviso | Soma de `len(description) // 4` das skills roteáveis. É o que o plugin custa em toda sessão em que está habilitado. |
| Nome de cliente real | **Proibido** | erro | O marketplace é compartilhado na firma. Casos viram exemplo anonimizado em `casos/`. |
| Nome de pessoa | **Proibido** | erro | A metodologia é da casa, não de um consultor. |
| Repetição entre camadas | **Proibida** | manual | Fundação (`acta-way`) e método de prática (`_metodo`) não são repetidos no plugin de projeto; referencie. |

O corpo da skill pode e deve ser denso, porque só custa quando dispara. O que precisa ser enxuto é a
`description`. Escrever skill longa é barato; escrever *muitas* skills, e com descrição inchada, é
que é caro.

Rode antes de publicar:

```bash
python scripts/validar-skills.py
```

### O teto por plugin mede tokens, não skills

A regra sempre quis dizer custo always-on; a contagem de skills era só o atalho para chegar nele. O
validador passou a medir a coisa: soma o tamanho das `description` do plugin, divide por quatro e
compara com **1.000 tokens**, que é o que toda sessão com aquele plugin instalado paga.

Um plugin de catorze skills enxutas custa menos que um de dez com descrição no limite, e era isso
que o atalho escondia.

**Exceção declarada: `acta-pesquisa-salarial`, só na contagem de skills.** São 18, acima das 12 da
tabela: o plugin reúne as etapas do ciclo da pesquisa e as técnicas que elas usam, e dividi-lo entre
ciclo e técnica obrigaria a instalar dois plugins para um trabalho só. No custo não há exceção:
depois do enxugamento das descrições, o plugin custa 997 tokens always-on, abaixo do teto de 1.000,
e o validador não emite aviso. A folga é de 3 tokens.

### A varredura de nome de cliente cobre todo `.md`

A versão anterior varria uma lista de nomes de arquivo (`projeto.md`, `fundamentos.md`, `README.md` e
`references/`). Lista de caminho permitido envelhece: a varredura total encontrou 89 ocorrências de
dois clientes em `benchmarks/`, em `casos/` e no corpo de três `SKILL.md`, nenhum desses caminhos
previsto na lista. Agora a varredura é total, e respeita o `.gitignore`, para não acusar arquivo que
já está de propósito fora do versionamento.

### A relação de clientes

Vive em `clientes.local.txt` na raiz, **fora do versionamento**: publicar a carteira da firma seria
o mesmo vazamento que o script existe para impedir. Um nome por linha; acrescente ao fechar cada
mandato novo. Sem o arquivo, o script roda e **avisa** que a checagem de cliente não foi executada,
em vez de dar por feita.

Quando o nome do cliente colide com palavra comum (há cliente chamado *Célula*, e "célula
mesclada" aparece em quase toda skill de auditoria), prefixe a linha com `=` para forçar
casamento sensível a maiúsculas. Sem isso, o alarme falso é tão frequente que a equipe desliga a
verificação, que é o pior desfecho possível.

---

## 3. Desenho alvo por plugin

Cada plugin abaixo tem um desenho de 5 a 8 skills e uma âncora de mercado declarada. A âncora existe
para que o conteúdo não seja opinião da casa sobre o tema, mas a prática consagrada mais o ajuste da
ACTA a mid-market brasileiro.

> **Esta tabela é o desenho original, não o status.** Vários plugins foram escritos com skills
> diferentes das listadas aqui. O status e a lista real de cada plugin estão em
> [ROADMAP.md](ROADMAP.md) e no `README.md` do plugin.

### Fundação

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-way` | checkpoint ✅ · ambiente-tecnico ✅ · edicao-em-massa ✅ · identidade-visual · convencoes-de-entregavel · anonimizacao-e-lgpd · redacao-acta | Identidade da casa; LGPD |

### Governança, Riscos e Compliance

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-metodo-auditoria` ✅ | metodo-auditoria · aprendizado-e-historico · bases-e-conciliacao · papel-de-trabalho · programa-de-testes · redacao-de-achados · relatorio-de-auditoria | IIA Global Internal Audit Standards (2024) |
| `acta-controles-internos` ✅ | matriz-riscos-controles · walkthrough-e-narrativa · desenho-vs-efetividade · teste-de-controle-e-amostragem · deficiencias-e-severidade · itgc | COSO 2013 (5 componentes, 17 princípios); PCAOB AS 2201; COBIT |
| `acta-gestao-de-riscos` | taxonomia-de-riscos · apetite-e-tolerancia · avaliacao-impacto-probabilidade · matriz-e-mapa-de-calor · planos-de-resposta · monitoramento-e-kri | COSO ERM 2017; ISO 31000 |
| `acta-revenue-assurance` ✅ | ciclo-da-receita · contrato-e-cadastro · medicao-e-aceite · faturamento-e-nf · recebimento-e-inadimplencia · matriz-de-riscos-da-receita | Ciclo OTC; IIA |
| `acta-auditoria-folha` | universo-da-folha · encargos-e-beneficios · horas-extras-e-jornada · admissao-e-desligamento · terceiros-e-pj | CLT; eSocial; IIA |
| `acta-auditoria-compras` ✅ | ciclo-ptp · requisicao-e-alcada · cotacao-e-selecao · contrato-e-aditivo · recebimento-e-pagamento · matriz-de-riscos-de-compras | APQC PCF Cross-Industry 8.0; ciclo PTP |
| `acta-auditoria-estoques` | acuracidade-e-inventario · custeio-e-giro · obsolescencia-e-provisao · movimentacao-e-perdas | CPC 16; IIA |
| `acta-auditoria-marketing` | verbas-e-patrocinios · contratacao-de-agencias · comprovacao-de-entrega · brindes-e-conflito | ACFE; Lei 12.846 |
| `acta-auditoria-producao` | apontamento-e-consumo · perdas-e-refugo · produtividade · manutencao | Lean; CPC 16 |
| `acta-programa-de-integridade` | pilares-do-programa · codigo-de-conduta · canal-de-denuncias · due-diligence-de-terceiros · treinamento-e-comunicacao · monitoramento-e-teste | Lei 12.846 + Decreto 11.129/2022; DOJ ECCP; ISO 37001:2025 |
| `acta-forense` | preservacao-de-evidencia · analise-documental-e-de-dados · entrevista-investigativa · relatorio-forense | ACFE Fraud Examiners Manual; triângulo da fraude |
| `acta-auditoria-convenios` | ciclo-do-convenio · matriz-de-riscos-do-convenio · estruturacao-e-formalizacao · execucao-e-fornecedores · prestacao-de-contas · contrapartida-e-encerramento | Lei 13.019/2014; jurisprudência do TCU; IIA; instrução normativa do concedente |
| `acta-governanca` | instancias-e-alcadas · estatuto-e-regimento · composicao-de-conselho · politicas-corporativas | IBGC Código das Melhores Práticas |
| `acta-esg` | materialidade · indicadores-e-frameworks · coleta-e-asseguracao · plano-e-reporte | GRI; SASB; ISSB (IFRS S1/S2) |
| `acta-segregacao-de-funcoes` | matriz-de-sod · conflitos-criticos · perfis-e-acessos · mitigacao-e-monitoramento | SoD; COBIT; controles de acesso |

### Consultoria Empresarial

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-metodo-consultoria` | diagnostico-e-entrevistas · mapeamento-as-is · desenho-to-be · priorizacao-e-roadmap · gestao-de-mudanca | Método de consultoria; APQC |
| `acta-excelencia-operacional` | taxonomia-de-processos · workshop-de-mapeamento · fluxo-as-is-e-narrativa · matriz-raci · gaps-e-quick-wins · desenho-to-be · indicadores-de-processo | **APQC PCF Cross-Industry 8.0**; BPMN 2.0.2 (OMG); SIPOC; Lean |
| `acta-planejamento-estrategico` | diagnostico-de-posicionamento · analise-competitiva · direcionadores-e-objetivos · desdobramento-e-metas · painel-e-acompanhamento | Porter; Balanced Scorecard (Kaplan/Norton); OKR; três horizontes |
| `acta-planejamento-orcamentario` | premissas-e-drivers · orcamento-base-zero · ciclo-e-calendario · forecast-e-reprevisao · analise-de-variacao | Beyond Budgeting; ZBB; rolling forecast |
| `acta-reducao-estrategica-de-custos` | baseline-de-gastos · spend-cube · alavancas-e-priorizacao · should-cost · captura-e-acompanhamento | ZBB; spend analytics; clean sheet |
| `acta-modelos-de-custeio` | escolha-do-metodo · direcionadores-e-rateio · custo-por-produto-e-cliente · margem-e-decisao | ABC/TDABC (Kaplan/Anderson); custeio variável |
| `acta-centro-servicos-compartilhados` | escopo-e-catalogo-de-servicos · modelo-de-atendimento-e-sla · dimensionamento · governanca-e-chargeback · transicao | The Hackett Group; modelos de maturidade de SSC |
| `acta-selecao-de-erp` | levantamento-de-requisitos · matriz-de-aderencia · rfp-e-processo · avaliacao-de-fornecedores · tco-e-decisao | Fit-gap; TCO; Gartner |
| `acta-dados-e-analytics` | diagnostico-de-maturidade · arquitetura-e-modelagem · governanca-de-dados · casos-de-uso-e-priorizacao · visualizacao | DAMA-DMBOK; TDWI |
| `acta-operacoes-inteligentes` | identificacao-de-casos · viabilidade-e-priorizacao · desenho-da-automacao · implantacao-e-sustentacao | Intelligent automation; Lean |
| `acta-transformacao-comercial` | diagnostico-do-funil · politica-comercial-e-pricing · forca-de-vendas · rotina-e-cadencia · indicadores | EVC pricing; sales force effectiveness |
| `acta-pccr` | descricao-e-avaliacao-de-cargos · arquitetura-de-carreira · tabela-salarial · enquadramento-e-transicao · politica-e-governanca | Hay/Korn Ferry point-factor; Mercer IPE |
| `acta-avaliacao-de-desempenho` | modelo-e-ciclo · competencias-e-metas · calibracao · feedback-e-pdi | 9-box; gestão por competências |
| `acta-remuneracao-variavel` | elegibilidade · indicadores-e-metas · curva-de-pagamento · simulacao-e-custo · politica | Práticas de PLR e ILP |
| `acta-modelagem-economico-financeira` | ✅ 14 skills | Koller/McKinsey; CPC/IFRS |
| `acta-ma-sell-buy-side` | ✅ 12 skills, do estudo setorial ao closing | Prática sell-side e buy-side mid-market; CPC 15 (R1); Lei 12.529/2011 |
| `acta-pesquisa-salarial` | ✅ 18 skills | Estatística de remuneração |

### Conceitos

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-pensadores-de-negocios` | ✅ 1 skill roteadora (`lentes`) e 14 lentes em `references/` | Obra primária de cada autor |

✅ = já escrito.

---

## 4. Prioridades

A ordem abaixo é por valor entregue sobre esforço, com peso para o que já tem matéria-prima escrita
e para o que destrava outros plugins.

### P0: higiene do catálogo ✅

Destrava valor que já existe. Esforço de horas.

1. ✅ Publicar `acta-pensadores-de-negocios` no `marketplace.json`, com 15 skills prontas que estavam
   invisíveis.
2. ✅ Atualizar o `README.md` da raiz: marcar o que está publicado, incluir a categoria Conceitos.
3. ✅ Criar o **guia de instalação por engajamento**, do tipo "vou fazer uma auditoria de folha: instalo o
   quê?".

### P1: absorver a metodologia de auditoria já escrita

O maior ativo disponível: metodologia de auditoria testada em campo, que preenche cinco esqueletos
existentes e origina um plugin novo.

4. ✅ Merge nos esqueletos de `acta-metodo-auditoria`: bases-e-conciliacao, papel-de-trabalho,
   programa-de-testes, redacao-de-achados, relatorio-de-auditoria.
5. ✅ Escrever `acta-revenue-assurance` a partir do material de ciclo de receita.
6. ✅ Deduplicar contra `acta-way`. O que é fundação ficou na fundação. Os três blocos órfãos
   ganharam destino: edição em massa virou skill própria (`acta-way:edicao-em-massa`), e handoff
   entre sessões e detecção de bifurcação entraram em `acta-way:checkpoint` (§7.1 e §6.1).
7. ✅ No merge, aplicar o padrão da seção 2 e remover nome de pessoa e de cliente.

### P2: guardrails ✅

Sem isso, o padrão da seção 2 é só intenção.

8. ✅ O padrão de skill já estava em `CONVENCOES.md` §5. O que faltava era aplicá-lo.
9. ✅ `scripts/validar-skills.py`. A relação de clientes vive em `clientes.local.txt`, fora do
   versionamento: publicar a carteira da firma seria o mesmo vazamento que o script impede.

### P3: plugins com matéria-prima real

Nesta ordem, porque cada um tem projeto real de onde extrair:

10. ✅ `acta-excelencia-operacional`, escrito a partir do material de mapeamento de ciclo PTP.
11. ✅ `acta-controles-internos`, escrito a partir de material de SOX de projeto real.
12. ✅ `acta-planejamento-estrategico`, escrito a partir do material de dois engajamentos.
13. ✅ `acta-auditoria-compras`, escrito a partir do ciclo PTP mapeado em (10), com uma sexta skill de
    matriz de riscos acrescentada ao desenho da seção 3, no padrão de `acta-revenue-assurance`.
14. ✅ `acta-gestao-de-riscos`, que **saiu do P4 porque apareceu matéria-prima real**: o Dicionário de
    Riscos da ACTA Consultores, taxonomia proprietária de quatro componentes, oito grupos e 52
    categorias numeradas, encontrado no template de mapa de riscos e no laudo de background check de
    terceiro de um engajamento de due diligence, já em uso em produção para classificar risco de
    fornecedor. Junto com ele veio a escala de avaliação de quatro níveis do laudo, com o nível
    Limitação de Escopo, que separa "avaliei e está baixo" de "não consegui avaliar". A taxonomia
    completa foi extraída e registrada em
    `governanca-riscos-compliance/gestao-de-riscos/skills/taxonomia-de-riscos/references/dicionario-de-riscos.md`.

15. ✅ `acta-metodo-consultoria`, que **saiu do P4 por matéria-prima real**: a metodologia registrada
    de um diagnóstico econômico-financeiro e operacional de 17 meses, com hierarquia de autoridade
    entre fontes divergentes, reconstrução de demonstração de resultado a partir de balancete,
    tratamento de anomalia com flag e override, e convenções de planilha-mestre. Somada à estrutura
    repetida de um contrato com catorze ordens de serviço. É a camada de método da prática de
    Consultoria Empresarial, equivalente ao que `acta-metodo-auditoria` é para GRC. Ganhou uma sexta
    skill fora do desenho da seção 3, `defesa-tecnica-e-limitacoes`, que registra decisão
    metodológica revista com o efeito numérico da mudança.
16. ✅ `acta-segregacao-de-funcoes`, **por matéria-prima real**: dois ciclos completos de SOX IT, com
    biblioteca de políticas de controles gerais de TI codificada e régua de amostragem por frequência
    de controle. A pasta foi movida de `consultoria-empresarial/` para
    `governanca-riscos-compliance/`, que é onde esta seção já a listava e onde a disciplina pertence.
17. ✅ `acta-auditoria-folha`, **por matéria-prima real**: programa de trabalho de auditoria de folha
    e base consolidada de um engajamento.
18. ✅ `acta-auditoria-estoques`, **por matéria-prima real**: um inventário físico com planilhas de
    contagem versionadas, segunda contagem marcada em coluna própria, conferência por meio
    independente e consolidação de v7 a v10. As colunas das planilhas é que revelaram o método, entre
    elas a validação mecânica da descrição por contagem de separadores, que pega o erro com o item
    ainda no corredor.

19. ✅ `acta-auditoria-convenios`, **plugin novo, fora do desenho da seção 3**. Ele não estava previsto
    em lugar nenhum, e apareceu ao mapear a pasta de projetos: catorze ordens de serviço do mesmo
    tipo de trabalho, todas com a mesma árvore de pastas e o mesmo programa de teste. Catorze
    repetições é o lastro mais forte do repositório. O desfecho do trabalho é **valor a devolver**,
    registrado como indício de glosa, e não recomendação de melhoria: é isso que o separa de
    `acta-auditoria-compras`, com quem ele divide a due diligence de fornecedor. Seis skills, com o
    programa de teste completo e o formato da matriz de achados em `references/`.

20. ✅ `acta-programa-de-integridade`, **por matéria-prima real**: três casos executados de due
    diligence de terceiro, com o dossiê completo de evidência. O material mostrou que são **dois
    gêneros de trabalho**, e não um: homologação de fornecedor novo, e investigação de vínculo entre
    fornecedor e pessoa da contratante. O segundo tem papel de trabalho no padrão de auditoria e
    produziu o teste de maior retorno da skill, o padrão de interposta pessoa (sócio que sai do
    quadro logo depois de o cônjuge entrar, tendo sido sócio do fornecedor enquanto ocupava cargo na
    contratante). As outras cinco skills se apoiam na lei anticorrupção e no decreto que a
    regulamenta, que enumeram os parâmetros do programa, mais o guia do DOJ e a ISO 37001:2025.

21. ✅ `acta-auditoria-de-pesquisa`, **por matéria-prima real**, e segundo plugin a nascer fora
    do desenho original: ciclos mensais consecutivos de verificação de um indicador de qualidade
    reportado a regulador, com dicionário de dados imposto por norma, acervo de gravações, base
    oficial de movimento como fonte independente e recontato telefônico com tabela de códigos
    padronizada, mais duas edições de apuração auditada de resultado decidido por avaliadores, de
    onde vieram a memória de cálculo e o ajuste de base por conflito de interesse. O que o separa de
    `acta-pesquisa-salarial` é a independência: lá a casa coleta, aqui a casa verifica quem coletou.

### P4: demais plugins

Por demanda de engajamento real, seguindo o desenho da seção 3. Um plugin só sai de esqueleto quando
houver projeto que justifique. Escrever metodologia sem caso de uso produz conteúdo genérico, que é
pior que esqueleto honesto.

Os itens 14 a 18 saíram daqui depois que a pasta de projetos executados da firma foi mapeada contra
os esqueletos. O critério foi o mesmo em todos: existe entregável real de onde extrair método, ou
seria conteúdo de manual? O que não passou nesse teste continua em esqueleto.

---

## 5. Como este documento é mantido

Ao concluir um item, marque-o aqui e atualize a linha correspondente em [ROADMAP.md](ROADMAP.md). O
desenho alvo da seção 3 não é contrato: se o engajamento real mostrar que um plugin precisa de outra
decomposição, mude aqui antes de escrever as skills.
