# Auditoria Interna da Receita

Auditoria do ciclo de receita e revenue assurance: contrato, cadastro, medição, aceite, faturamento,
reajuste, glosa, cancelamento de nota, cut-off, inadimplência e conciliação com o razão.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`) — é onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Segundo pré-requisito: `acta-metodo-auditoria`.** Este plugin é de **processo auditado**. As
> regras invioláveis, a doutrina do número exato, a regra R8, o papel de trabalho, o programa de
> testes, a redação de achados e o tratamento de bases vivem lá e **não são repetidos aqui** — cada
> skill manda carregá-lo antes.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.
> Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz a auditoria do ciclo de receita ponta a ponta, seguindo o dinheiro do direito ao caixa e do
caixa ao razão: fixa o critério contratual e o preço vigente, testa a medição contra evidência
operacional independente e o aceite contra quem tem poder de aceitar, confronta o aceito com o
faturado pelos dois lados da população, verifica a aderência tributária da emissão e o cancelamento,
testa o corte de competência e a conciliação com o razão, e fecha no aging, na baixa lastreada em
ingresso efetivo e na reperformance dos encargos de mora.

Traz o que é próprio do domínio e não existe no plugin de método: o ciclo em sete elos com a
pergunta-mestra de cada, os sete blocos executáveis com o controle de melhor prática, os cinco pares
de bases que têm de fechar, o padrão Plano A/B/C de degradação declarada da evidência, e os quatorze
riscos codificados com a matriz risco × controle × teste.

## Skills

| Skill | Elo do ciclo | Descrição |
|---|---|---|
| `ciclo-da-receita` | Entrada | O ciclo em sete elos com a pergunta-mestra de cada, os sete blocos executáveis, os cinco pares de bases, o padrão Plano A/B/C e as seis perguntas que dimensionam o escopo do mandato. |
| `matriz-de-riscos-da-receita` | Transversal | Os quatorze riscos codificados `REC.R<NN>`, a matriz risco × controle × como se testa, e os quatro riscos que costumam faltar (fiscal, encargos de mora, cut-off, conciliação com o razão). |
| `contrato-e-cadastro` | 1 e 2 | Cláusulas mandatórias, alçadas e chancela jurídica; cadastro do contrato, parametrização de valor e bloqueio operante; preço unitário, tabela e reperformance do reajuste. |
| `medicao-e-aceite` | 3 e 4 | Medição contra evidência operacional; aceite formal, anterior à nota e por quem tem poder; glosas conciliadas por número e data e a taxa de conversão; pesagem, integridade do registro e aferição metrológica. |
| `faturamento-e-nf` | 5 e 7 | Faturamento integral do aceito pelos dois lados; aderência tributária por espécie de documento; cancelamento com motivo, alçada e prazo legal; cut-off nas viradas; conciliação faturamento × razão. |
| `recebimento-e-inadimplencia` | 6 | Aging reconciliado ao razão; baixa × ingresso efetivo de recursos; reperformance de juros e multa em 100% dos títulos pagos em atraso; cobrança, interrupção e provisão. |

## Fluxo típico

`ciclo-da-receita` (dimensiona o escopo e declara os elos inaplicáveis) →
`matriz-de-riscos-da-receita` (registro de riscos e matriz) → `programa-de-testes` do plugin de
método (tipo de teste, frequência, amostragem) → `contrato-e-cadastro` → `medicao-e-aceite` →
`faturamento-e-nf` → `recebimento-e-inadimplencia`, com `bases-e-conciliacao` e `papel-de-trabalho`
carregados a cada bloco executado, e `redacao-de-achados` e `relatorio-de-auditoria` no fechamento.

A ordem não é burocrática: o critério contratual fixado no primeiro elo é o que sustenta o confronto
dos seguintes. Auditar medição antes de fixar o preço vigente é construir conclusão sobre referência
que ainda pode mudar.

Ao fechar, o que se aprendeu volta para a matriz (risco novo, controle novo, forma de testar) e o
estado do engajamento vai para o checkpoint de `acta-way`.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-auditoria`. Não repita
aqui o que já está lá — em particular a doutrina do número, o tratamento de bases e o casamento com
consumo de pool, a estrutura do papel de trabalho e o vocabulário do campo Resultado, a taxonomia de
tipo de teste e a régua de amostragem, os conceitos e o código de risco, a redação de ponto e a
calibração de severidade, e o ritual de aprendizado.

Nome de cliente e nome de pessoa não entram em skill. Estrutura contratual citada nas skills
(modulação por índice de desempenho, take-or-pay, preço variável por atributo de qualidade) é
**exemplo de estrutura**, não cláusula de um contrato nem padrão de mercado: pesos, percentuais e
faixas variam por contrato, e o auditor lê o contrato do mandato antes de calcular.
