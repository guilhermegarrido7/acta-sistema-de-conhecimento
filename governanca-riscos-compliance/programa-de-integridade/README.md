# Programa de Integridade

Implantação e avaliação de programa de integridade: os parâmetros do Decreto 11.129/2022 como régua,
código de conduta que decide caso concreto, canal de denúncias com independência testável, due
diligence de terceiros com dossiê de evidência, treinamento segmentado por exposição e o teste que
apura se o programa funciona na prática.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`). É onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Segundo pré-requisito: `acta-gestao-de-riscos`.** O **Dicionário de Riscos da ACTA** (quatro
> componentes, oito grupos, 52 categorias numeradas) e a escala de avaliação com o nível Limitação
> de Escopo vivem lá, e **não são repetidos aqui**. A skill `due-diligence-de-terceiros` classifica
> no dicionário de lá e referencia a skill de lá; ela não cria taxonomia nem escala própria.
>
> **Terceiro, quando o mandato for de teste de efetividade:** `acta-metodo-auditoria`. O papel de
> trabalho, a taxonomia de tipo de teste, a régua de amostragem e a redação de achado vivem lá.
> `monitoramento-e-teste` manda carregá-lo antes.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Implanta ou diagnostica programa de integridade em empresa que precisa responder à Lei 12.846/2013 e
ao Decreto 11.129/2022, seja por exigência de contratante, por exposição a poder público ou por
decisão de sócio. Trata os parâmetros de avaliação do decreto como régua de maturidade pilar a
pilar, e não como lista de documentos a produzir: o corte que decide o trabalho é o que separa
política formalizada de política aplicada, e ele se prova com registro datado produzido pela
operação, nunca com declaração do gestor.

O ativo próprio do plugin é a **due diligence de terceiros**, a única skill com lastro de produção da
casa. Dela saem os dois modos do trabalho (background check de homologação e aprofundamento
investigativo de vínculo), a estrutura completa do laudo com as ressalvas que delimitam a
responsabilidade da firma, a lista de fontes com a mecânica de captura de evidência, e o teste de
linha do tempo societária que revela interposição de pessoa.

## Skills

| Skill | Etapa | Descrição |
|---|---|---|
| `pilares-do-programa` | Entrada e diagnóstico | Os dez pilares com o entregável que comprova cada um, a régua de maturidade em quatro níveis aplicada pilar a pilar, as cinco evidências que provam comprometimento da alta direção e a sequência de implantação com as três dependências que não se invertem. |
| `codigo-de-conduta` | Regra | A régua de decidibilidade que separa princípio de regra aplicável, os dez temas obrigatórios, a cláusula de integridade para contrato de terceiro, o termo de ciência conferido em 100% dos admitidos e o teste de consistência disciplinar por nível hierárquico. |
| `canal-de-denuncias` | Reporte | As três camadas de independência e como testá-las, a diferença entre anonimato e confidencialidade com o protocolo de retorno, os quatro marcos de prazo, o desvio obrigatório quando o denunciado está no fluxo e o monitoramento de não retaliação. |
| `due-diligence-de-terceiros` | Terceiros | Os dois modos do trabalho, a profundidade por criticidade, a classificação no dicionário de `acta-gestao-de-riscos`, o dossiê de evidência com captura de fonte sem ocorrência, o teste de linha do tempo societária e os quatro gates antes de entregar. |
| `treinamento-e-comunicacao` | Capacitação | Segmentação por exposição em cinco públicos, dilema construído sobre caso anonimizado da própria operação, cobertura medida sobre o quadro ativo em três cortes, as quatro medidas de eficácia e a comunicação recorrente entre campanhas. |
| `monitoramento-e-teste` | Efetividade | A bateria de testes por pilar sobre população, os quatro testes transversais, os indicadores com o par que impede leitura confortável, a independência de quem testa e o plano de ação amarrado à régua de maturidade. |

## Fluxo típico

`pilares-do-programa` (diagnóstico e escopo) → avaliação de risco de integridade em
`acta-gestao-de-riscos` → `codigo-de-conduta` → `canal-de-denuncias` → `due-diligence-de-terceiros`
→ `treinamento-e-comunicacao` → `monitoramento-e-teste`, com o resultado do teste voltando para a
régua de maturidade de `pilares-do-programa` no ciclo seguinte.

Três pontos da ordem não se invertem. A avaliação de risco vem antes da política, porque política
escrita antes do risco cobre o que o modelo de mercado prevê e não o que a operação tem. O código
vem antes do canal, porque canal sem regra de conduta escrita recebe reclamação e não tem critério
para classificar o que chegou. E o canal vem antes do treinamento, porque treinamento que ensina a
reportar sem ter para onde reportar cria passivo.

Quando o mandato for apenas de avaliação de terceiro, o que acontece com frequência, `due-diligence-de-terceiros` roda sozinha, com `acta-gestao-de-riscos:taxonomia-de-riscos` carregado.

Ao fechar, o estado do engajamento vai para o checkpoint de `acta-way`.

## Onde este plugin encosta em outros

`acta-gestao-de-riscos` é dono do Dicionário de Riscos e da escala de avaliação, inclusive do nível
Limitação de Escopo. Aqui só se classifica e se referencia.

`acta-auditoria-compras` trata conflito de interesse com fornecedor em `cotacao-e-selecao` §5, e a
fronteira é de método: lá o teste é cruzamento de base contra base dentro do ciclo de compras, para
descobrir se existe vínculo; aqui o trabalho começa sobre um terceiro já apontado, e é de fonte
externa e linha do tempo societária. Um acha o caso, o outro o instrui.

`acta-metodo-auditoria` é dono do papel de trabalho, do tipo de teste, da amostragem e da redação de
achado, usados integralmente em `monitoramento-e-teste` e no Modo B da due diligence.
`acta-controles-internos` traz a distinção entre desenho e efetividade de controle.
`acta-way:anonimizacao-e-lgpd` governa todo o dado pessoal que este plugin toca.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-auditoria`. Não repita
aqui o que já está lá.

Nome de cliente, de terceiro avaliado e de pessoa não entram em skill, e neste plugin isso tem peso
extra: a matéria-prima é laudo de due diligence com razão social, número de inscrição, nome de sócio
e endereço residencial. Escreva "o terceiro avaliado", "o fornecedor", "a Companhia contratante".
Vale integralmente `acta-way:anonimizacao-e-lgpd`. O gate de varredura de nome herdado de modelo, em
`due-diligence-de-terceiros` §6, existe porque o erro já aconteceu em produção.

Limites de valor de brinde, prazos de tratamento de denúncia e periodicidade de reciclagem citados
nas skills são **exemplo de parâmetro**, não padrão de mercado: variam por política, e o que se
testa é a aderência à política vigente do cliente na data do fato.

Exigência normativa se descreve pelo conteúdo. Este plugin não cita número de artigo, inciso ou item
que não tenha sido conferido na fonte.
