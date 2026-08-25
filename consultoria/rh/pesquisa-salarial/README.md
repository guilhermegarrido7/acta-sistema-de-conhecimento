# Pesquisa Salarial

Plugin metodológico da ACTA para projetos de Pesquisa de Remuneração e
Benefícios. Generalizado a partir de dois casos: FJS (em planejamento,
terceiro setor de saúde) e PASB (concluído, educação internacional). O
racional completo de generalização está em `ESTUDO-BENCHMARKING.md`.

## Estrutura desta pasta

```
Pesquisa Salarial/
├── README.md                    este arquivo
├── ESTUDO-BENCHMARKING.md       o que é genérico, o que é do caso, e por quê
├── plugin/                      o método reutilizável, sem nome de cliente
│   ├── SKILL.md                 roteador, com cartão de identidade a preencher
│   ├── CHECKPOINT_TEMPLATE.md   modelo de checkpoint (mestre e por consultor)
│   ├── references/              módulos de referência (dados, cálculos, IA, entregáveis, storyline)
│   └── skills/                  módulos técnicos (estatística, matching, planilhas, Power BI)
├── benchmarks/                  estudo de caso de cada projeto de origem
│   ├── FJS.md
│   └── PASB.md
└── casos/                       um subdiretório por projeto real que usar o plugin
```

## Como usar em um projeto novo

1. Copiar a pasta `plugin/` para o Project do cliente novo no Claude (ou para
   o repositório de trabalho daquele projeto).
2. Preencher o cartão de identidade na seção 1 do `SKILL.md` do plugin: nome
   do cliente, escopo, moeda, regime de jornada, recortes, particularidades
   estruturais.
3. Ativar os módulos condicionais que se aplicarem (conversão cambial,
   mensalização de horista) e desativar os que não se aplicarem.
4. Seguir o fluxo por etapa da seção 3 do `SKILL.md`.
5. Criar uma entrada em `casos/` apontando para onde o trabalho do projeto
   vive (não duplicar dado de cliente neste repositório de conhecimento).
6. Ao concluir o projeto, escrever um novo arquivo em `benchmarks/` seguindo
   o formato de `FJS.md` e `PASB.md`, e revisar `ESTUDO-BENCHMARKING.md` para
   decidir se alguma prática nova do projeto deve subir para o plugin.

## Regra de manutenção do plugin

Uma prática só sobe de um caso individual para o `plugin/` quando aparece pela
segunda vez em um projeto diferente, com o mesmo raciocínio metodológico. Isso
é o que evita que o plugin vire uma coleção de particularidades do primeiro
cliente disfarçada de método geral. Ver seção 5 do `ESTUDO-BENCHMARKING.md`.

## Escopo deliberadamente fora deste plugin

Este plugin cobre pesquisa de remuneração e benefícios. Não cobre construção
de Plano de Cargos, Carreira e Remuneração, enquadramento, avaliação de
desempenho ou desenho organizacional, mesmo que esses temas apareçam como
demanda natural de sequência em praticamente todo projeto (ver `SKILL.md`,
regra R5). Se a ACTA padronizar um método para essas frentes, ele deve viver
em uma pasta própria dentro de `ACTA Conhecimentos/Projetos/`, não dentro
deste plugin.
