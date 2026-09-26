# Pesquisa Salarial

Metodologia ACTA para projetos de Pesquisa de Remuneração e Benefícios, generalizada a partir dos
Casos A e B. Uma skill por etapa do ciclo de vida, do escopo comercial ao encerramento.

> **Pré-requisito: instale `acta-way` antes.**
> ```bash
> claude plugin install acta-way@acta-sistema-de-conhecimento --scope user
> ```
> É onde vive o mecanismo de checkpoint entre sessões e consultores (seção 7 do método, abaixo). Sem
> ele instalado, a instrução "carregue `acta-way`, skill `checkpoint`" não encontra nada. O
> manifesto de plugin não tem campo de dependência, ninguém instala isso por você.

Vizinho de `acta-pccr`: a pesquisa alimenta a tabela salarial do Plano de Cargos, mas é um projeto
com metodologia, entregáveis e ciclo próprios.

## Skills

| # | Skill | Etapa | Status |
|---|---|---|---|
| - | `metodo-pesquisa-salarial` | Regras de ouro, cartão de identidade, mínimos de anonimização, checkpoint | ✅ |
| 1 | `escopo-e-proposta` | Qualificação da demanda, fronteira de escopo, precificação | ✅ |
| 2 | `abertura-e-cartao-de-identidade` | Kick-off, particularidades estruturais, inventário de insumos | ✅ |
| 3 | `painel-de-participantes` | Comparabilidade, dimensionamento, aprovação do painel | ✅ |
| 4 | `plano-de-comunicacao-e-convites` | Identidade da pesquisa, contrapartida, carta-convite, follow-up | ✅ |
| 5 | `instrumento-de-coleta` | Formulário, dicionário de dados, validação na entrada, piloto | ✅ |
| 6 | `conducao-da-coleta` | Recebimento, triagem, saneamento, escalonamento, corte | ✅ |
| 7 | `tratamento-e-validacao-da-base` | Normalizações, outliers, checks de consistência, exclusões | ✅ |
| 8 | `matching-cargos` | Equivalência de cargos, quatro fatores, graus de match | ✅ |
| 9 | `estatistica-remuneracao` | Mínimos amostrais, qual medida usar, quando não publicar | ✅ |
| 10 | `analise-de-competitividade` | Comparatio, gap, custo de equalização, priorização | ✅ |
| 11 | `release-e-governanca-de-dados` | Congelamento R1.0, revisão independente, versionamento | ✅ |
| 12 | `modelagem-planilhas` | Arquitetura de abas, fórmulas auditáveis, Excel de consulta | ✅ |
| 13 | `relatorio-e-storyline` | Ghost deck, títulos de ação, arco de três atos, design ACTA | ✅ |
| 14 | `dashboard-powerbi` | Modelo estrela, medidas DAX, páginas, supressão, publicação | ✅ |
| 15 | `apresentacao-ao-cliente` | Pré-leitura, ensaio, coerência entre artefatos, Comitê Gestor | ✅ |
| 16 | `relatorios-individuais-participantes` | Contrapartida a cada participante, piloto, distribuição | ✅ |
| 17 | `encerramento-e-licoes-aprendidas` | Pacote de encerramento, arquivamento, escrita do benchmark | ✅ |

As 18 skills têm metodologia escrita. O material de apoio que sustenta cada etapa continua em
`references/`, que só carrega quando a skill precisa do detalhe.

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
