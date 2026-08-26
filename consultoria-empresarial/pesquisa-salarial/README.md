# Pesquisa Salarial

Metodologia ACTA para projetos de Pesquisa de Remuneração e Benefícios, generalizada a partir dos
casos FJS e PASB. Uma skill por etapa do ciclo de vida, do escopo comercial ao encerramento.

> **Pré-requisito: instale `acta-way` antes.**
> ```bash
> claude plugin install acta-way@acta-sistema-de-conhecimento --scope user
> ```
> É onde vive o mecanismo de checkpoint entre sessões e consultores (seção 7 do método, abaixo). Sem
> ele instalado, a instrução "carregue `acta-way`, skill `checkpoint`" não encontra nada — o
> manifesto de plugin não tem campo de dependência, ninguém instala isso por você.

Vizinho de `acta-pccr`: a pesquisa alimenta a tabela salarial do Plano de Cargos, mas é um projeto
com metodologia, entregáveis e ciclo próprios.

## Skills

| # | Skill | Etapa | Status |
|---|---|---|---|
| — | `metodo-pesquisa-salarial` | Regras de ouro, cartão de identidade, mínimos de anonimização, checkpoint | ✅ |
| 1 | `escopo-e-proposta` | Qualificação da demanda, fronteira de escopo, precificação | esqueleto |
| 2 | `abertura-e-cartao-de-identidade` | Kick-off, particularidades estruturais, inventário de insumos | esqueleto |
| 3 | `painel-de-participantes` | Comparabilidade, dimensionamento, aprovação do painel | esqueleto |
| 4 | `plano-de-comunicacao-e-convites` | Identidade da pesquisa, contrapartida, carta-convite, follow-up | esqueleto |
| 5 | `instrumento-de-coleta` | Formulário, dicionário de dados, validação na entrada, piloto | esqueleto |
| 6 | `conducao-da-coleta` | Recebimento, triagem, saneamento, escalonamento, corte | esqueleto |
| 7 | `tratamento-e-validacao-da-base` | Normalizações, outliers, checks de consistência, exclusões | esqueleto |
| 8 | `matching-cargos` | Equivalência de cargos, quatro fatores, graus de match | ✅ |
| 9 | `estatistica-remuneracao` | Mínimos amostrais, qual medida usar, quando não publicar | ✅ |
| 10 | `analise-de-competitividade` | Comparatio, gap, custo de equalização, priorização | esqueleto |
| 11 | `release-e-governanca-de-dados` | Congelamento R1.0, revisão independente, versionamento | esqueleto |
| 12 | `modelagem-planilhas` | Arquitetura de abas, fórmulas auditáveis, Excel de consulta | ✅ |
| 13 | `relatorio-e-storyline` | Ghost deck, títulos de ação, arco de três atos, design ACTA | esqueleto |
| 14 | `dashboard-powerbi` | Modelo estrela, medidas DAX, páginas, supressão, publicação | ✅ |
| 15 | `apresentacao-ao-cliente` | Pré-leitura, ensaio, coerência entre artefatos, Comitê Gestor | esqueleto |
| 16 | `relatorios-individuais-participantes` | Contrapartida a cada participante, piloto, distribuição | esqueleto |
| 17 | `encerramento-e-licoes-aprendidas` | Pacote de encerramento, arquivamento, escrita do benchmark | esqueleto |

Cada skill em esqueleto já traz, no próprio arquivo, **a fonte a consolidar** — em qual reference e
em qual seção está o material que vira aquela etapa. Onde não há material, o esqueleto diz
explicitamente que é lacuna.

## Onde está o material

| Pasta | Conteúdo |
|---|---|
| `references/01-mapa-arquivos-e-bases.md` | Bases B1 a B10, painel de participantes |
| `references/02-dicionario-de-dados.md` | Instrumento de coleta, blocos, domínios |
| `references/03-livro-de-calculos.md` | Fonte única das fórmulas C-01 a C-27 e validações V1-V14 |
| `references/04-mbb-e-ia.md` | Padrão de raciocínio e protocolo de uso de IA |
| `references/05-arquitetura-entregaveis.md` | Fases A a D, especificação de cada entregável |
| `references/06-storyline-relatorio-ppt.md` | Storyline do relatório e design ACTA |
| `references/ESTUDO-BENCHMARKING.md` | Meta-metodologia: como o método evolui a cada caso |
| `casos/` | Engajamentos como aconteceram |
| `benchmarks/` | O que de cada caso se generaliza |

## Lacunas conhecidas

A metodologia é forte da base tratada em diante e fraca do contrato até o dado chegar. Sem conteúdo
hoje: proposta comercial, plano de comunicação com participantes, condução do campo de coleta, e
NDA/contratação de participantes.
