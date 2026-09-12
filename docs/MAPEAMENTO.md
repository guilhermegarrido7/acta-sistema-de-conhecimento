# Mapeamento e prioridades

Este documento responde: **o que cada plugin vai conter, em que ordem os plugins são escritos, e
que regras impedem o marketplace de ficar pesado.** O status corrente de cada plugin vive em
[ROADMAP.md](ROADMAP.md); a decisão de arquitetura, em [ARQUITETURA.md](ARQUITETURA.md).

---

## 1. Diagnóstico

**Linha de base**, medida antes da rodada de trabalho que este documento organiza. Os números
abaixo são o problema que a seção 4 ataca — não o estado atual. O estado atual vive em
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
de fronteira entre si e com os outros plugins — e não está no `marketplace.json`, nem aparece no
README raiz. Ninguém na firma consegue instalá-lo. O `README.md` da raiz também está defasado: marca
como prontos apenas `_metodo` e Pesquisa Salarial, quando Modelagem Econômico-Financeira e M&A também
já estão publicados.

**2. O custo always-on não tem teto declarado.** A arquitetura acertou ao separar um plugin por
projeto — o custo permanente é por *skill*, e paga-se só pelo plugin instalado. Mas não existe regra
escrita limitando o tamanho da `description`, que é exatamente o que se paga em toda sessão. Sem
teto, o marketplace engorda sozinho a cada contribuição.

**3. Não há porta de entrada.** Com 33 plugins previstos, um consultor que chega não tem como saber o
que instalar para o engajamento dele. O README descreve a estrutura do repositório, não o caminho de
uso.

---

## 2. Padrão de skill (o teto que impede o marketplace de engordar)

As regras já existiam em [CONVENCOES.md](../CONVENCOES.md) §5 — o que faltava era aplicá-las.
`scripts/validar-skills.py` passa a fazer isso:

| Regra | Limite | Severidade | Por quê |
|---|---|---|---|
| `description` | **220 a 380 caracteres** | erro acima, aviso abaixo | É o que se paga em toda sessão. 380 caracteres ≈ 95 tokens. |
| Corpo do `SKILL.md` | **≤ 300 linhas** | aviso | Acima disso, mover detalhe para `references/`, que só carrega quando necessário. |
| Skills por plugin | **5 a 12** | aviso | Abaixo de 5, o plugin provavelmente não merece existir sozinho; acima de 12, o custo always-on passa de ~1 mil tokens. |
| Nome de cliente real | **Proibido** | erro | O marketplace é compartilhado na firma. Casos viram exemplo anonimizado em `casos/`. |
| Nome de pessoa | **Proibido** | erro | A metodologia é da casa, não de um consultor. |
| Repetição entre camadas | **Proibida** | manual | Fundação (`acta-way`) e método de prática (`_metodo`) não são repetidos no plugin de projeto — referencie. |

O corpo da skill pode e deve ser denso — ele só custa quando dispara. O que precisa ser enxuto é a
`description`. Escrever skill longa é barato; escrever *muitas* skills, e com descrição inchada, é
que é caro.

Rode antes de publicar:

```bash
python scripts/validar-skills.py
```

### A relação de clientes

Vive em `clientes.local.txt` na raiz, **fora do versionamento**: publicar a carteira da firma seria
o mesmo vazamento que o script existe para impedir. Um nome por linha; acrescente ao fechar cada
mandato novo. Sem o arquivo, o script roda e **avisa** que a checagem de cliente não foi executada,
em vez de dar por feita.

Quando o nome do cliente colide com palavra comum — há cliente chamado *Célula*, e "célula
mesclada" aparece em quase toda skill de auditoria —, prefixe a linha com `=` para forçar
casamento sensível a maiúsculas. Sem isso, o alarme falso é tão frequente que a equipe desliga a
verificação, que é o pior desfecho possível.

---

## 3. Desenho alvo por plugin

Cada plugin abaixo tem um desenho de 5 a 8 skills e uma âncora de mercado declarada. A âncora existe
para que o conteúdo não seja opinião da casa sobre o tema, mas a prática consagrada mais o ajuste da
ACTA a mid-market brasileiro.

### Fundação

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-way` | checkpoint ✅ · ambiente-tecnico ✅ · edicao-em-massa ✅ · identidade-visual · convencoes-de-entregavel · anonimizacao-e-lgpd · redacao-acta | Identidade da casa; LGPD |

### Governança, Riscos e Compliance

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-metodo-auditoria` ✅ | metodo-auditoria · aprendizado-e-historico · bases-e-conciliacao · papel-de-trabalho · programa-de-testes · redacao-de-achados · relatorio-de-auditoria | IIA Global Internal Audit Standards (2024) |
| `acta-controles-internos` | matriz-riscos-controles · walkthrough-e-narrativa · desenho-vs-efetividade · teste-de-controle-e-amostragem · deficiencias-e-severidade · itgc | COSO 2013 (5 componentes, 17 princípios); PCAOB AS 2201; COBIT |
| `acta-gestao-de-riscos` | taxonomia-de-riscos · apetite-e-tolerancia · avaliacao-impacto-probabilidade · matriz-e-mapa-de-calor · planos-de-resposta · monitoramento-e-kri | COSO ERM 2017; ISO 31000 |
| `acta-revenue-assurance` ✅ | ciclo-da-receita · contrato-e-cadastro · medicao-e-aceite · faturamento-e-nf · recebimento-e-inadimplencia · matriz-de-riscos-da-receita | Ciclo OTC; IIA |
| `acta-auditoria-folha` | universo-da-folha · encargos-e-beneficios · horas-extras-e-jornada · admissao-e-desligamento · terceiros-e-pj | CLT; eSocial; IIA |
| `acta-auditoria-compras` | ciclo-ptp · requisicao-e-alcada · cotacao-e-selecao · contrato-e-aditivo · recebimento-e-pagamento | APQC PCF 4.0; ciclo PTP |
| `acta-auditoria-estoques` | acuracidade-e-inventario · custeio-e-giro · obsolescencia-e-provisao · movimentacao-e-perdas | CPC 16; IIA |
| `acta-auditoria-marketing` | verbas-e-patrocinios · contratacao-de-agencias · comprovacao-de-entrega · brindes-e-conflito | ACFE; Lei 12.846 |
| `acta-auditoria-producao` | apontamento-e-consumo · perdas-e-refugo · produtividade · manutencao | Lean; CPC 16 |
| `acta-programa-de-integridade` | pilares-do-programa · codigo-de-conduta · canal-de-denuncias · due-diligence-de-terceiros · treinamento-e-comunicacao · monitoramento-e-teste | Lei 12.846 + Decreto 11.129/2022; DOJ ECCP; ISO 37001 |
| `acta-forense` | preservacao-de-evidencia · analise-documental-e-de-dados · entrevista-investigativa · relatorio-forense | ACFE Fraud Examiners Manual; triângulo da fraude |
| `acta-governanca` | instancias-e-alcadas · estatuto-e-regimento · composicao-de-conselho · politicas-corporativas | IBGC Código das Melhores Práticas |
| `acta-esg` | materialidade · indicadores-e-frameworks · coleta-e-asseguracao · plano-e-reporte | GRI; SASB; ISSB (IFRS S1/S2) |
| `acta-segregacao-de-funcoes` | matriz-de-sod · conflitos-criticos · perfis-e-acessos · mitigacao-e-monitoramento | SoD; COBIT; controles de acesso |

### Consultoria Empresarial

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-metodo-consultoria` | diagnostico-e-entrevistas · mapeamento-as-is · desenho-to-be · priorizacao-e-roadmap · gestao-de-mudanca | Método de consultoria; APQC |
| `acta-excelencia-operacional` | taxonomia-de-processos · workshop-de-mapeamento · fluxo-as-is-e-narrativa · matriz-raci · gaps-e-quick-wins · desenho-to-be · indicadores-de-processo | **APQC PCF 4.0**; BPMN 2.0 (OMG); SIPOC; Lean |
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
| `acta-ma-sell-buy-side` | ✅ 9 skills | Prática sell-side mid-market |
| `acta-pesquisa-salarial` | ✅ 5 escritas de 18 | Estatística de remuneração |

### Conceitos

| Plugin | Skills alvo | Âncora |
|---|---|---|
| `acta-pensadores-de-negocios` | ✅ 15 lentes escritas | Obra primária de cada autor |

✅ = já escrito.

---

## 4. Prioridades

A ordem abaixo é por valor entregue sobre esforço, com peso para o que já tem matéria-prima escrita
e para o que destrava outros plugins.

### P0 — Higiene do catálogo ✅

Destrava valor que já existe. Esforço de horas.

1. ✅ Publicar `acta-pensadores-de-negocios` no `marketplace.json` — 15 skills prontas, que estavam
   invisíveis.
2. ✅ Atualizar o `README.md` da raiz: marcar o que está publicado, incluir a categoria Conceitos.
3. ✅ Criar o **guia de instalação por engajamento** — "vou fazer uma auditoria de folha: instalo o
   quê?".

### P1 — Absorver a metodologia de auditoria já escrita

O maior ativo disponível: metodologia de auditoria testada em campo, que preenche cinco esqueletos
existentes e origina um plugin novo.

4. ✅ Merge nos esqueletos de `acta-metodo-auditoria`: bases-e-conciliacao, papel-de-trabalho,
   programa-de-testes, redacao-de-achados, relatorio-de-auditoria.
5. ✅ Escrever `acta-revenue-assurance` a partir do material de ciclo de receita.
6. ✅ Deduplicar contra `acta-way` — o que é fundação ficou na fundação. Os três blocos órfãos
   ganharam destino: edição em massa virou skill própria (`acta-way:edicao-em-massa`), e handoff
   entre sessões e detecção de bifurcação entraram em `acta-way:checkpoint` (§7.1 e §6.1).
7. ✅ No merge, aplicar o padrão da seção 2 e remover nome de pessoa e de cliente.

### P2 — Guardrails ✅

Sem isso, o padrão da seção 2 é só intenção.

8. ✅ O padrão de skill já estava em `CONVENCOES.md` §5 — o que faltava era aplicá-lo.
9. ✅ `scripts/validar-skills.py`. A relação de clientes vive em `clientes.local.txt`, fora do
   versionamento: publicar a carteira da firma seria o mesmo vazamento que o script impede.

### P3 — Plugins com matéria-prima real

Nesta ordem, porque cada um tem projeto real de onde extrair:

10. `acta-excelencia-operacional` — material de mapeamento PTP de projeto real.
11. `acta-controles-internos` — material de SOX de projeto real.
12. `acta-planejamento-estrategico` — material de benchmarking e de dois clientes.
13. `acta-auditoria-compras` — reaproveita o ciclo PTP mapeado em (10).

### P4 — Demais plugins

Por demanda de engajamento real, seguindo o desenho da seção 3. Um plugin só sai de esqueleto quando
houver projeto que justifique — escrever metodologia sem caso de uso produz conteúdo genérico, que é
pior que esqueleto honesto.

---

## 5. Como este documento é mantido

Ao concluir um item, marque-o aqui e atualize a linha correspondente em [ROADMAP.md](ROADMAP.md). O
desenho alvo da seção 3 não é contrato: se o engajamento real mostrar que um plugin precisa de outra
decomposição, mude aqui antes de escrever as skills.
