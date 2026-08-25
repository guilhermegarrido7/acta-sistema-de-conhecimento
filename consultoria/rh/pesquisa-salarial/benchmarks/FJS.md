# Caso de referência: FJS (Fundação José Silveira)

Status: em planejamento. A pesquisa ainda não foi executada; este registro
documenta apenas as decisões metodológicas já tomadas no planejamento, usadas
como benchmark de método (não de resultado) para o plugin `pesquisa-salarial`.
Não conter, em nenhuma hipótese, dado de resultado de pesquisa, porque a
coleta ainda não ocorreu.

O trabalho vivo deste projeto está no Project dedicado à FJS, com o pacote
metodológico completo (`SKILL.md`, `references/`, `skills/`,
`CHECKPOINT.md`), fora deste repositório de conhecimento. Este arquivo é
apenas o resumo do que foi generalizado a partir dele.

## Resumo

Pesquisa de Total Rewards para 265 cargos da FJS, comparando-a a um painel de
instituições de saúde, terceiro setor e grandes grupos econômicos, em três
recortes geográficos (Salvador, Nordeste, Brasil). Contrato 20833, R$
57.000,00, 265 cargos, mínimo de 12 empresas por recorte.

## O que este caso ensinou ao plugin

Ver `../ESTUDO-BENCHMARKING.md` para o mapeamento completo. Resumo dos pontos
que se tornaram regra geral ou módulo do plugin:

- Matching por conteúdo com tratamento explícito de nomenclatura de topo sem
  equivalente (padrão 3.1 em `matching-cargos.md`).
- Fator de escala para estrutura corporativa centralizada versus estrutura
  distribuída no mercado (padrão 3.2).
- Segmentação obrigatória entre unidade própria e contrato de gestão,
  generalizada para "segmentação de sub-painel com lógica distinta" (regra
  R4 do `SKILL.md`).
- Regra 80/20 de priorização de cargos por criticidade, com faixas
  percentuais generalizadas em `04-mbb-e-ia.md`.
- Estrutura completa de release congelado e cadeia de rastreabilidade
  (`05-arquitetura-entregaveis.md`).
- Storyline de 42 slides em arco de três atos, com a resposta no slide 3
  (`06-storyline-relatorio-ppt.md`).
- Protocolo de checkpoint por consultor, para trabalho de mais de uma pessoa
  em paralelo (`CHECKPOINT_TEMPLATE.md`).

## O que não generalizar a partir deste caso

- Os 265 cargos e a lista de empresas indicadas.
- O problema específico do cargo Superintendente e a isenção de CEBAS
  (ficam como exemplos ilustrativos dos padrões gerais, não como regra).
- Qualquer valor de resultado, porque a coleta ainda não ocorreu.

## Atualização deste registro

Quando a pesquisa FJS for concluída, revisar este arquivo e o
`ESTUDO-BENCHMARKING.md` à luz do que realmente aconteceu na execução (não
apenas no planejamento), e verificar se alguma decisão tomada durante a
coleta ou a análise deveria subir do caso para o plugin.
