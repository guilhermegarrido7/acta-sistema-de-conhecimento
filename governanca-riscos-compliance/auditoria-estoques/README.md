# Auditoria de Estoques

Auditoria do ciclo de estoques: planejamento e corte do inventário, contagem e segunda contagem
cega, acuracidade por item e por valor, custeio e giro, obsolescência e provisão, movimentação,
perdas e ajuste de inventário.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Segundo pré-requisito: `acta-metodo-auditoria`**, também declarado como dependência. Este plugin é de **processo auditado**. As
> regras invioláveis, a doutrina do número exato, a regra R8, o papel de trabalho, o programa de
> testes, a redação de achados e o tratamento de bases vivem lá e **não são repetidos aqui**. Cada
> skill manda carregá-lo antes.
>
> **Terceiro, quando o mandato for de controles:** `acta-controles-internos` traz a matriz formal de
> riscos e controles, o walkthrough, a distinção entre desenho e efetividade e a classificação de
> severidade de deficiência. Também não se repetem aqui.
>
> **Status: completo.** As 5 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz a auditoria de estoques respondendo às quatro perguntas do ciclo, e não só à primeira:
o que está no depósito é o que o sistema diz, está avaliado pelo custo certo, vale o que está
registrado, e entrou e saiu por movimento autorizado. Fixa o corte de movimentação antes da
contagem, desenha a segunda contagem cega e a recontagem dirigida por limite declarado, apura a
divergência item a item e calcula os dois indicadores de acuracidade, separa a divergência que se
compensa entre itens da perda que é real, reperforma o custo unitário transação a transação, varre a
base inteira atrás de saldo sem custo e de custo negativo, recalcula a provisão pelo critério formal
e confronta o custo com o valor realizável líquido item a item, concilia transferência pelas duas
pontas e trata 100% dos ajustes de inventário pela data, pelo aprovador e pelo usuário que lançou.

Traz o que é próprio do domínio e não existe no plugin de método: as quatro perguntas do ciclo com o
que falha quando cada uma não é feita, os seis blocos executáveis com o controle de melhor prática,
a distinção entre acuracidade por item e por valor e quando cada uma sustenta a conclusão, a
mecânica de campo da planilha de contagem e do roteiro do dia, o padrão Plano A/B/C de degradação
declarada da evidência, e os quatorze riscos codificados com a matriz risco × controle × teste.

## Skills

| Skill | Pergunta do ciclo | Descrição |
|---|---|---|
| `matriz-de-riscos-de-estoques` | Entrada e transversal | As quatro perguntas do ciclo, os seis blocos executáveis, os quatorze riscos codificados `INV.R<NN>` classificados no Dicionário de Riscos da casa, os seis que decidem o trabalho e as seis perguntas que dimensionam o mandato. |
| `acuracidade-e-inventario` | 1 | Corte de movimentação, congelamento, estoque de terceiro, a contagem, a segunda contagem cega e a recontagem dirigida, a apuração item a item, os dois indicadores de acuracidade e a divergência que se compensa entre itens. |
| `custeio-e-giro` | 2 | Método declarado contra método parametrizado, reperformance de custo médio e de PEPS, composição do custo de entrada, os sete cortes de base sobre saldo e custo, giro e cobertura por classe e o aging de item sem movimentação. |
| `obsolescencia-e-provisao` | 3 | O critério antes do número, reperformance da provisão com os três resíduos, as três réguas de aging, o teste de valor realizável líquido item a item e a provisão que nunca vira baixa efetiva. |
| `movimentacao-e-perdas` | 4 | Entrada com documento, baixa com requisição, transferência conciliada pelas duas pontas, perda normal contra anormal, descarte e sucata, e os seis cortes sobre 100% dos ajustes de inventário. |

## Fluxo típico

`matriz-de-riscos-de-estoques` (dimensiona o mandato, declara a aplicabilidade e monta o registro de
riscos) → `programa-de-testes` do plugin de método (tipo de teste, frequência, amostragem) →
`acuracidade-e-inventario` → `custeio-e-giro` → `obsolescencia-e-provisao` →
`movimentacao-e-perdas`, com `bases-e-conciliacao` e `papel-de-trabalho` carregados a cada bloco
executado, e `redacao-de-achados` e `relatorio-de-auditoria` no fechamento.

A ordem tem uma restrição que os outros ciclos não têm: **o inventário tem data marcada e não se
repete.** O planejamento de `acuracidade-e-inventario` precisa estar pronto antes da data-base, e o
corte de movimentação não é recuperável depois. Por isso o cronograma do mandato se monta ao
contrário, da data da contagem para trás, e os blocos de custeio, provisão e movimentação, que
rodam sobre base e não sobre campo, ocupam o tempo que sobra.

Ao fechar, o que se aprendeu volta para a matriz (risco novo, controle novo, forma de testar) e o
estado do engajamento vai para o checkpoint de `acta-way`.

## Fronteira com auditoria de compras

O recebimento é o elo final do ciclo de compras e o elo inicial do ciclo de estoques, e o mesmo
evento físico é testado pelos dois plugins por ângulos diferentes.
`acta-auditoria-compras:recebimento-e-pagamento` testa quem atestou, se conferiu quantidade e
especificação, e se o pagamento casou com o pedido e com a nota.
`acta-auditoria-estoques:movimentacao-e-perdas` §1 testa a outra metade: se o que foi recebido virou
saldo, pela quantidade certa, no depósito certo, na data certa e com custo. Num mandato que cubra os
dois ciclos, o casamento entre recebimento e entrada de estoque se executa uma vez só, e o papel de
trabalho declara de qual lado ele está.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-auditoria`. Não repita
aqui o que já está lá, em particular a doutrina do número, o tratamento de bases e o casamento com
consumo de pool, a estrutura do papel de trabalho e o vocabulário do campo Resultado, a taxonomia de
tipo de teste e a régua de amostragem, os conceitos e o código de risco, a redação de ponto e a
calibração de severidade, e o ritual de aprendizado. A taxonomia de categoria de risco vive em
`acta-gestao-de-riscos:taxonomia-de-riscos`, e a matriz deste plugin classifica no vocabulário de
lá.

Nome de cliente e nome de pessoa não entram em skill. A planilha de contagem identifica a equipe por
código de dupla, nunca por nome, e no papel de trabalho e no relatório quem contou, quem custodia e
quem aprovou ajuste se descrevem pelo cargo e pelo registro.

Percentual de perda esperada, limite de divergência para recontagem, faixas de aging e percentuais de
provisão citados nas skills são **exemplo de parâmetro**, não padrão de mercado: variam por política
e por natureza do estoque, e o auditor lê a política vigente do mandato antes de testar aderência a
ela. Sobre a norma contábil, as skills descrevem a regra pelo conteúdo e não citam número de item,
por decisão deliberada: item errado derruba o achado junto com a citação.
