# Componentes e geometria do template de valuation

Medidas apuradas do template oficial de valuation da casa (`@@Template - Slide Valuation.pptx`), em
polegadas. O template não é versionado neste repositório público; peça o caminho ao usuário.
Paleta, tipografia e armadilhas do tema estão em `acta-way:identidade-visual`, seção 4.

## Formato

Widescreen 13,333 × 7,5 pol (16:9). Um slide master, **cinco layouts**. O template traz **cinco
slides de exemplo**, que são removidos ao montar o deck.

| Índice | Layout | Uso |
|---|---|---|
| `[0]` | `1_ACTA - Capa` | Capa do relatório: título, subtítulo e mês |
| `[1]` | `ACTA - Capa` | Divisor de capítulo: numeral (`I.`) e título do capítulo |
| `[2]` | `1_Custom Layout` | Sumário do valuation: quatro linhas numeradas (`#1` a `#4`) com seta e caixa |
| `[3]` | `ACTA - Conteúdo` | O único layout de conteúdo |
| `[4]` | `ACTA - Fechamento` | Encerramento |

Monte sempre abrindo o template como base e removendo os slides de exemplo: réguas, logo e copyright
vivem nos layouts e renderizam sozinhos. Não copie forma de layout para o slide.

## Grade do layout de conteúdo `[3]`

| Elemento | x | y | largura | altura |
|---|---|---|---|---|
| Título (placeholder) | 0,446 | 0,452 | 12,441 | 0,688 |
| Régua superior | 0,446 | 1,140 | 12,441 | — |
| Corpo (placeholder) | 0,446 | 1,333 | 12,441 | 5,489 |
| Régua inferior | 0,446 | 6,968 | 12,441 | — |
| Fonte e nota (placeholder) | 4,079 | 7,063 | 4,184 | 0,333 |
| Copyright (fixo, 9 pt) | 0,275 | 7,114 | 3,804 | 0,252 |
| Logo (versão escura) | 12,063 | 7,020 | 0,882 | 0,333 |

Não há número de página em nenhum layout: a identidade não usa paginação.

## Tipografia aplicada no corpo

**Título** no layout de conteúdo: 28 pt, Rawline SemiBold com `b="0"`, cor herdada do tema (sai teal
pelo `clrMap`). Não force cor nem tamanho slide a slide.

Medido num relatório real da casa: corpo de tabela e texto em **12 pt** (a grande maioria dos runs),
rótulos secundários em 10 a 11 pt, notas e fontes em **8 pt**, título em duas linhas (capítulo e
tópico). Rawline para corpo, Rawline SemiBold (com `bold = False`) para ênfase e títulos de bloco.
Cores de texto observadas: `#262626` no corpo, `#595959` em texto secundário, `#167D73` em destaque,
`#FFFFFF` sobre fundo escuro.

## Componentes recorrentes

| Componente | Forma | Regra |
|---|---|---|
| Linha de mensagem | Texto logo abaixo da régua superior, ou primeiro bullet do corpo | Uma frase com número e fonte |
| Caixa de metodologia | Bloco lateral, título em Rawline SemiBold teal, 2 a 4 frases | Antes de todo resultado |
| Tabela histórico + projetado | Estilo "No Style, No Grid", cabeçalho navy `#334E6F` com texto branco | Formatação explícita célula a célula |
| Barra de conclusão | Faixa no rodapé do corpo com a faixa de valor | Só no Sumário executivo e no Sumário do valuation |
| Chip numerado | Retângulo teal com texto branco | Sequência de passos ou de transações |
| Football field | Barras horizontais por método, com rótulos nos extremos | Ordem fixa dos métodos |

**Formas arredondadas.** O layout `[2]` traz `roundRect` nas caixas do sumário. É herança do template
e fica como está; não crie forma arredondada nova em slide de conteúdo.

## Densidade de tabela

| Medida | Limite prático |
|---|---|
| Linhas por tabela | Até 22, com altura de linha de 0,25 pol |
| Colunas | Até 9 (rótulo + histórico + projetado) |
| Tabelas por slide | Até 2, quando a segunda é resumo da primeira |

Acima disso, divida em dois slides ou mova o detalhe para o apêndice.
