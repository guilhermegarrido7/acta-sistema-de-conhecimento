---
name: identidade-visual
description: Aplicar o padrão visual da ACTA em qualquer entregável, da paleta e da tipografia da casa à regra de contraste que impede o turquesa de carregar texto em fundo claro. Acionar ao montar deck, documento, planilha ou painel, ao escolher cor de gráfico ou de fundo, ao definir fonte, ou ao revisar a aparência de um entregável antes de entregar.
---

# Identidade visual: o padrão da casa em qualquer entregável

## Papel desta skill

Vale para tudo que sai com a marca: PowerPoint, Word, Excel, painel de BI, documento em Markdown que
vira PDF, página do portal interno. Ela fixa a paleta, a tipografia e as regras de uso que se quebram
com facilidade.

Não é sobre gosto. Os dois erros que esta skill existe para impedir são mensuráveis: texto que o
cliente não consegue ler por falta de contraste, e dois entregáveis do mesmo projeto com verdes
diferentes.

## 1. A paleta

Fonte de verdade da marca na web, apurada do site institucional.

| Papel | Hex | Onde entra |
|---|---|---|
| Turquesa da marca | `#24BEB6` | Acento, o tom do logo. Decorativo em fundo claro (ver seção 2) |
| Teal | `#006E63` | Verde profundo. Faixa, botão, e **todo texto e link verde em fundo claro** |
| Teal água | `#00949B` | Segunda série de gráfico, variação dentro da família |
| Petróleo | `#0A2D30` | Fundo escuro, capa, divisor de capítulo |
| Texto corpo | `#333333` | Parágrafo, célula de tabela |
| Texto forte | `#222222` | Título, rótulo de destaque |
| Apoio | `#69727D` | Legenda, texto secundário |
| Apoio claro | `#8C99A2` | Nota de rodapé, fonte, hierarquia mais baixa |

Sequência para gráfico de várias séries, nesta ordem: `#006E63`, `#00949B`, `#24BEB6`, `#0A2D30`.
A ordem importa. Ela começa pelo tom que sobrevive à impressão em preto e branco e termina no que
some.

## 2. A regra que mais se quebra: turquesa não carrega texto em fundo claro

O turquesa `#24BEB6` sobre branco tem contraste de **2,25 para 1**. O mínimo de acessibilidade para
texto corrido é **4,5 para 1**. Ele fica bonito na tela do designer e desaparece no projetor da sala
de reunião do cliente, no papel impresso e para quem tem baixa visão.

| Combinação | Contraste | Serve para |
|---|---|---|
| `#24BEB6` sobre branco | 2,25 : 1 | Só elemento decorativo: filete, ícone grande, preenchimento de barra, fundo de chip |
| `#006E63` sobre branco | 6,2 : 1 | Texto, link, rótulo, título. **É o verde de texto em fundo claro** |
| `#24BEB6` sobre `#0A2D30` | 6,5 : 1 | Texto, rótulo e título sobre o fundo escuro |
| `#333333` sobre branco | 12,6 : 1 | Corpo de texto padrão |

Três consequências práticas:

1. **Link em fundo claro é `#006E63`.** Nunca turquesa.
2. **Rótulo de dado dentro de uma barra turquesa é `#0A2D30` ou branco**, decidido pelo tom da barra,
   nunca herdado do estilo de texto do gráfico.
3. **O turquesa vira cor de texto quando o fundo vira petróleo.** É o único caso em que ele carrega
   informação. Capa, divisor de capítulo e caixa de destaque escura são o lugar dele.

Barra de gráfico e ícone não são texto, e a régua de 4,5 para 1 não se aplica a eles. Um filete
turquesa sobre branco está correto. O que está errado é escrever em cima dele.

## 3. Tipografia

**Avenir LT Pro** é a tipografia institucional. Ela é licenciada e **não pode ser servida na web sem
contrato**, então a distinção abaixo não é preferência, é licença.

| Suporte | Fonte | Observação |
|---|---|---|
| Documento produzido e entregue como arquivo (PPTX, DOCX, XLSX, PDF) | Avenir LT Pro | A fonte está instalada nas máquinas da casa e é embutida no PDF |
| Qualquer coisa servida na web (portal, painel publicado, página HTML) | Figtree | Substituta livre mais próxima, disponível em fonte aberta |
| Máquina sem Avenir instalada | Figtree | Antes de improvisar, ver a seção 4 |

Nunca misturar duas famílias no mesmo documento. Peso resolve hierarquia: semibold para título de
bloco e ênfase dentro de parágrafo, regular para corpo. Itálico só para nome de publicação e termo
estrangeiro, nunca para ênfase.

**Antes de entregar arquivo que vai ser aberto fora da casa, embuta a fonte ou exporte em PDF.** Um
PPTX com Avenir aberto numa máquina sem Avenir substitui a fonte e desmonta o layout de todo slide,
e o cliente vê isso antes de você.

## 4. Reconciliação com o tema do PowerPoint

A skill `relatorio-de-valuation`, do plugin de modelagem econômico-financeira, documenta os tokens
extraídos do tema "ACTA" instalado no PowerPoint da casa. Eles **divergem** dos valores da web em
dois pontos, e a divergência é real, não erro de apuração de nenhum dos dois lados.

| Item | Web (esta skill) | Tema do PowerPoint | Qual vale |
|---|---|---|---|
| Verde primário | `#006E63` | `#167D73` | Cada um no seu suporte. Ver abaixo |
| Tipografia | Avenir LT Pro, Figtree na web | Rawline | Cada um no seu suporte. Ver abaixo |
| Azuis de série | não existem | `#334E6F`, `#87AFC7`, `#A3BFD9`, `#C5D3E8` | Só no tema do PPT |

A regra de convivência:

- **Deck montado a partir do tema instalado no PowerPoint segue o tema.** Trocar a cor ou a fonte
  slide a slide num template de tema quebra o vínculo com os placeholders e produz um deck que
  ninguém consegue manter. E o histórico de decks já entregues ao cliente ficaria visivelmente
  inconsistente com o próximo.
- **Web, painel publicado e qualquer coisa fora do tema seguem a paleta da web.** É a marca como o
  cliente a encontra no site.
- **Documento novo fora do PowerPoint segue a paleta da web.** Word, Excel, Markdown, HTML.
- **Nunca no mesmo documento.** `#167D73` e `#006E63` ocupam o mesmo papel e são distinguíveis lado a
  lado. Dois verdes no mesmo deck parecem descuido, e são.

Os dois verdes escuros passam no teste de contraste sobre branco (`#167D73` dá cerca de 5,0 para 1),
então a escolha entre eles é de consistência, não de acessibilidade. **A regra da seção 2 vale nos
dois mundos**: nenhum dos temas autoriza texto turquesa sobre fundo claro.

Quando o tema do PowerPoint for revisto para convergir com a web, esta tabela é o lugar de registrar
a mudança, e a `relatorio-de-valuation` passa a apontar para cá. Até lá, as duas versões coexistem
declaradas.

## 5. Uso por suporte

**PowerPoint.** Slide 16:9. Título no topo, faixa de largura total. Rodapé fixo com fonte e nota.
Divisor de capítulo em fundo petróleo com o numeral e o título, sem conteúdo analítico. Nenhum
elemento fora do placeholder do layout: caixa de texto solta é o que quebra o deck na primeira
revisão.

**Word.** Título em `#222222`, corpo em `#333333`. Verde só em título de seção e em filete, e sempre
o teal. Tabela com cabeçalho em fundo teal e texto branco, corpo sem preenchimento, linha divisória
em cinza de apoio. Sem borda cheia em todas as células.

**Excel.** A planilha entregue ao cliente tem a mesma paleta; a planilha de trabalho não precisa,
mas precisa da convenção de cor de célula da casa (entrada, fórmula, referência externa), que é
convenção de modelo e não de marca. Aba de resultado com cabeçalho teal, número alinhado à direita,
casas decimais iguais dentro da mesma coluna.

**Painel.** A regra de contraste é mais dura aqui, porque o leitor escolhe o zoom e o dispositivo.
Fundo claro, texto `#333333`, acento turquesa só em elemento gráfico. Cartão de indicador com o
número em `#222222` e o rótulo em `#69727D`, nunca o número em turquesa.

## 6. O que nunca aparece

- Logo esticado, rotacionado, com sombra, ou recolorido. Existe versão para fundo claro e versão para
  fundo escuro; se nenhuma serve, o fundo está errado, não o logo.
- Cor fora da paleta. Vermelho e âmbar entram apenas como semáforo de indicador, em componente que já
  declara a escala, nunca como cor decorativa.
- Gradiente, sombra projetada, bisel, e gráfico em três dimensões.
- Imagem de banco de imagens genérica preenchendo slide. Espaço em branco é melhor que ilustração
  que não diz nada.
- Fonte de sistema substituindo a da casa em silêncio. Se a fonte não está instalada, resolva antes
  de produzir, não depois.
- Texto turquesa sobre branco, que é o item que reaparece em toda revisão.

## 7. Checklist antes de entregar

1. Toda cor usada está na tabela da seção 1, ou é o semáforo declarado de um indicador.
2. Nenhum texto turquesa sobre fundo claro. Confira rótulo de gráfico e link, que são onde ele se
   esconde.
3. Uma única família tipográfica no documento inteiro.
4. Um único verde escuro no documento inteiro, o do suporte correto pela seção 4.
5. Fonte embutida, ou entrega em PDF.
6. Gráfico legível em preto e branco, porque parte dos clientes imprime.
7. Logo na versão certa para o fundo, sem deformação.

## Próximo passo

`convencoes-de-entregavel` para nomear e arquivar o arquivo pronto, e `redacao-acta` para o texto que
vai dentro dele. Para renderizar PPTX ou XLSX por script, ver `ambiente-tecnico` antes.
