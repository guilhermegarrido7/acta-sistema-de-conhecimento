---
name: tratamento-e-validacao-da-base
description: Transforme a base bruta em base tratada e assinada, pronta para virar estatística. Acionar ao normalizar jornada, moeda, periodicidade e data-base, ao aplicar a ordem correta dos cálculos do Grupo 2, ao registrar exclusão com motivo, ao rodar os checks de consistência e as validações V1 a V14, ou ao assinar tecnicamente a base.
---

# Tratamento e validação da base

Etapa 7. Recebe `B5_COLETA_BRUTA` fechada e entrega `B6_BASE_TRATADA` assinada. É a
única camada do projeto onde se calcula: acima dela só existe registro, abaixo dela
só existe leitura.

Carregue `metodo-pesquisa-salarial` antes desta skill. As fórmulas estão em
`references/03-livro-de-calculos.md` e não são repetidas aqui; a construção da
planilha e as fórmulas de teste dos checks estão em `modelagem-planilhas`; o
julgamento estatístico sobre outliers, n pequeno e escolha de medida está em
`estatistica-remuneracao`. Esta skill é a ordem de execução, o registro e o gate.

## 1. Os três princípios da etapa

**B5 nunca é tocada.** B6 é uma cópia com colunas acrescentadas, e toda versão de B6
aponta para uma única versão de B5. Se B5 mudar, B6 é refeita, não remendada.

**Todo tratamento é coluna, não substituição.** O valor informado permanece na linha
ao lado do valor normalizado, do convertido e do atualizado. Rastreabilidade (R1)
significa poder reconstruir a cadeia inteira, e isso só existe se cada passo deixou
sua própria coluna.

**Exclusão é declarada, nunca silenciosa.** Nenhuma linha some. Ela recebe
`flag_excluido = VERDADEIRO` e `motivo_exclusao` em texto, e continua em B6.

## 2. A ordem obrigatória das normalizações

A ordem importa e não é intuitiva. Converter moeda depois de mensalizar horista, ou
atualizar à data-base antes de normalizar jornada, produz número que passa em todos
os checks e está errado. Execute nesta sequência, uma coluna por passo:

| # | Passo | Cálculo | O que produz |
| --- | --- | --- | --- |
| 1 | Exclusões estruturais | C-27 | Linhas com `n_incumbentes = 0` marcadas como "cargo sem ocupante" |
| 2 | Filtro de matching | `matching-cargos` | Só entram linhas com `flag_usar_na_estatistica = TRUE` em B4 |
| 3 | Conversão cambial | C-25 | `salario_convertido_moeda_referencia`, taxa única do projeto na data-base |
| 4 | Mensalização de horista | C-26 | Valor por hora ou aula levado a equivalente mensal pela carga de referência declarada |
| 5 | Normalização de jornada | C-08 | `salario_normalizado_jornada_referencia`, ao lado do nominal |
| 6 | Atualização à data-base | C-07 | `salario_atualizado_database` |
| 7 | Composição de remuneração | C-09 a C-13 | Fixa anual, variável paga, total em dinheiro, benefícios monetizados, custo total quando no escopo |
| 8 | Dispersão e marcação de outlier | C-14 e C-15 | `flag_outlier`, `regra_outlier_aplicada` |
| 9 | Peso e exclusões de análise | C-15, C-27 | `peso_headcount`, `flag_excluido`, `motivo_exclusao` |

Três regras de segmentação que atravessam a sequência e não se resolvem com coluna:
cargo em regime de escala nunca entra no mesmo pool estatístico do administrativo;
horista mensalizado só entra no pool dos mensalistas se a carga de referência for
declarada e razoável, caso contrário vira subpopulação própria; populações internas
heterogêneas do cliente nunca se misturam sem segmentação explícita (R4).

Passo 6 tem uma regra de parada que economiza trabalho: intervalo de até três meses
entre a data de referência informada e a data-base não se atualiza, porque o ajuste
fica menor que o erro amostral. Registre a decisão em vez de aplicá-la calado.

## 3. Taxonomia de motivos de exclusão

`motivo_exclusao` é texto livre, mas parte de uma lista fechada de categorias. Sem
categoria padronizada, o item 7 da nota metodológica (número de exclusões por motivo
agregado) não é calculável.

| Categoria | Quando | Origem |
| --- | --- | --- |
| Cargo sem ocupante | `n_incumbentes = 0` | C-27, automático |
| Sem match suficiente | Score abaixo de 45 em B4 | `matching-cargos` |
| Erro de preenchimento não corrigível | Saneamento encerrado sem resposta do participante | Etapa 6 |
| Conteúdo de cargo comprovadamente distinto | Revisão de matching disparada por CV alto | C-14, V12 |
| Jornada incompatível | Regime que a normalização não torna comparável | C-08 |
| Natureza jurídica não comparável | Regime de remuneração fora do universo do recorte | Cartão de identidade |
| Obrigatório mínimo ausente | Falta valor, jornada, incumbentes ou data de referência | Etapa 6 |

Exclusão por erro de dado é técnica. Exclusão por valor incômodo é manipulação, e a
diferença entre as duas fica visível justamente em `motivo_exclusao`. Se a
justificativa que você escreveria for "o valor puxa a mediana", a linha fica.

## 4. Execução dos checks

Os doze checks de consistência ficam na aba `Checks` do arquivo de análise, com
fórmula em `modelagem-planilhas`, seção 4, e correspondem às validações V1 a V12 do
livro de cálculos. V13 (conversão cambial) e V14 (cargo sem ocupante) entram quando
o Grupo 6 estiver ativo. O que esta etapa acrescenta é o protocolo de rodá-los:

1. **Rode o conjunto inteiro, sempre.** Não existe check dispensado por ser
   "obviamente OK". O custo de rodar os quatorze é o de apertar um botão.
2. **Trate ERRO como bloqueio, não como aviso.** A base não avança para B7 com
   qualquer ERRO aberto. Não há exceção negociada com prazo.
3. **Cada ERRO fechado deixa rastro**: o que estava errado, o que foi feito, qual
   linha mudou, quem fez. Evento em `B10_LOG_AUDITORIA` com `id_calculo_livro`.
4. **Rode de novo depois de cada correção.** Correção de check costuma abrir outro,
   principalmente entre os pares ordenação, concentração e mínimo amostral.
5. **Guarde a captura do painel de checks todo verde**, com data e versão de B6. É o
   que sustenta a assinatura técnica.

Dois checks merecem leitura, não só resultado. O CV acima de 0,35 (V12) não é
característica de mercado, é alerta de que o pool agrupa cargos de conteúdo
diferente, e a resposta é revisão de matching, não nota de rodapé. A diferença de
mais de 25% entre média e mediana (V2) é achado a explicar antes de publicar, e as
duas explicações possíveis, assimetria legítima e erro de matching, se distinguem
pelo teste de C-14.

## 5. Integridade entre bases

Três verificações que não são de conteúdo e sim de estrutura, e que ninguém percebe
faltando até o número não fechar:

- Nenhuma linha de B5 sem `cod_empresa` válido em B3 e `cod_cargo` válido em B1.
- `n_empresas` é sempre contagem distinta de `cod_empresa`, nunca contagem de linhas.
  Um participante com três incumbentes no mesmo cargo é uma empresa.
- Soma de headcount por cargo em B1 confere com a folha do cliente.

E duas regras de versão: toda versão de B6 aponta para uma única versão de B5, e
recálculo de B7 gera nova versão, jamais edição no lugar.

## 6. Assinatura técnica da base tratada

A base tratada não fica pronta, fica assinada. A assinatura é um registro em B10 com
data, autor, versão de B6, versão de B5 consumida, contagem de linhas totais, linhas
excluídas por categoria, e a confirmação de que os quatorze checks passaram. Quem
assina é o consultor que executou o tratamento.

A assinatura é o que autoriza a Etapa 9 a congelar o release. Sem ela, congelar é
congelar dúvida.

## 7. Artefato e onde grava

| Artefato | Onde |
| --- | --- |
| Base tratada, com todas as colunas de tratamento | `B6_BASE_TRATADA`, aba `Base` |
| Regras aplicadas, com parâmetros usados (taxa de câmbio, índice de atualização, carga de referência, jornada de referência) | `B6_BASE_TRATADA`, aba `Regras_Aplicadas` |
| Linhas excluídas com categoria e motivo textual | `B6_BASE_TRATADA`, aba `Exclusoes` |
| Painel de checks, com resultado e contagem | `B7_B8_ANALISE`, aba `Checks` |
| Parâmetros do projeto, sem constante dentro de fórmula | Aba `Parametros` |
| Assinatura técnica e eventos de correção | `B10_LOG_AUDITORIA` |

Nomenclatura conforme a convenção da casa: `AAAAMMDD_B6_BASE_TRATADA_vNN.xlsx`, com
a data da versão, não a do dado.

## 8. Gate de qualidade da etapa

- [ ] B5 permanece idêntica à entrega da Etapa 6, sem uma célula alterada.
- [ ] A versão de B6 aponta para uma única versão de B5, declarada.
- [ ] Os nove passos do Grupo 2 foram executados na ordem, cada um com sua coluna.
- [ ] Os parâmetros usados (taxa, data da taxa e fonte; índice de atualização e
      fonte; carga de referência; jornada de referência) estão na aba de regras e no
      log, nenhum escrito dentro de fórmula.
- [ ] Cargos em regime de escala, horistas e populações internas heterogêneas estão
      segregados, não apenas marcados.
- [ ] Toda linha excluída tem categoria da lista fechada e motivo textual.
- [ ] Nenhuma exclusão tem como justificativa o efeito do valor sobre a estatística.
- [ ] Os quatorze checks rodaram na versão final de B6 e nenhum está em ERRO.
- [ ] Todo cargo com CV acima de 0,35 voltou para revisão de matching, e o resultado
      da revisão está registrado.
- [ ] Toda linha com diferença acima de 25% entre média e mediana tem explicação
      escrita.
- [ ] As três verificações de integridade entre bases passaram.
- [ ] A base está assinada em B10, com contagens e a confirmação dos checks.

## 9. Erros a evitar

- Inverter a ordem das normalizações. Converter moeda depois de atualizar à
  data-base, ou atualizar antes de normalizar jornada, produz número plausível e
  errado.
- Arredondar no meio do caminho. Arredondamento é da camada de apresentação, e
  arredondar antes gera soma que não fecha.
- Substituir o valor informado pelo normalizado na mesma coluna. Some a única prova
  do que o participante declarou.
- Excluir automaticamente tudo que a regra de Tukey marcou. Marcar não é excluir, e
  em amostra pequena a regra sinaliza dado legítimo.
- Tratar ERRO de check como pendência para depois. A base inteira fica bloqueada até
  fechar.
- Calcular estatística fora de B6. Fórmula de percentil dentro de slide, de aba de
  apresentação ou de medida do painel é a origem mais comum de divergência entre
  entregáveis.
- Contar linhas em vez de empresas distintas no `n`.
- Considerar a base pronta sem assinatura em B10.
