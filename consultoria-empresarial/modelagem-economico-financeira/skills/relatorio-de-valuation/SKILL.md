---
name: relatorio-de-valuation
description: Estruturar e produzir o relatório de valuation em PowerPoint no template ACTA, com quatro capítulos e apêndice, títulos por tópico com linha de mensagem, mapa modelo-slides e manifesto de release. Acionar ao montar ou revisar o deck de valuation, ao definir a storyline, ao conciliar números do deck com o modelo, ou ao rodar o checklist antes de entregar.
---

# Relatório de valuation: a arquitetura do documento e o release

## Papel desta skill

Direciona a estrutura, o tom e a montagem do relatório. Redige texto e monta slide quando pedido.
Não inventa número: todo dado que aparece no relatório vem do modelo (skills desta pasta) ou de
fonte citada. Esta skill organiza a apresentação, não o cálculo.

O relatório de valuation da ACTA segue um padrão de casa, testado em mandatos reais. Reaproveitá-lo
integralmente é o objetivo; desviar da estrutura sem motivo é o erro mais comum.

## O que o relatório é, e o que ele não é

É o documento que **converte o modelo em argumento**. Cada capítulo tem um trabalho: situar o leitor
(sumário), justificar por que a empresa cria valor (companhia e drivers), expor as premissas de forma
auditável (premissas), mostrar o número com a faixa em volta dele (resultados) e guardar o material
técnico rastreável (apêndice). Não é um dump de planilha em slide: toda tabela e todo gráfico está
ali para sustentar a linha de mensagem do slide.

## Identidade visual e template

- **Paleta, tipografia e armadilhas do tema PowerPoint** (Rawline SemiBold com `b="0"`, `clrMap`,
  tabelas "No Style, No Grid"): `acta-way:identidade-visual`, seção 4. Não repita aqui.
- **Template:** o template oficial de valuation da casa (`@@Template - Slide Valuation.pptx`). Ele
  **não é versionado neste repositório**, que é público. Pergunte ao usuário o caminho; não use outro
  deck como base.
- **Layouts, grade em polegadas, componentes e densidade de tabela:**
  [references/componentes-e-geometria.md](references/componentes-e-geometria.md).

## Estrutura de capítulos

Quatro capítulos de conteúdo e um apêndice padrão. Detalhe slide a slide em
[references/arquitetura-do-relatorio.md](references/arquitetura-do-relatorio.md).

| Bloco | Conteúdo | Obrigatório |
|---|---|---|
| Abertura | Capa, Aviso legal, Sumário do valuation | Sim |
| I. Sumário executivo | Um slide-síntese: metodologia, faixa e ponto central | Sim |
| II. A Companhia e drivers de valor | Companhia e mercado, DRE histórica, normalização de EBITDA, capital investido, ROIC e duração da vantagem | Sim |
| III. Premissas e observações | Metodologia, premissas macro, drivers da projeção, WACC, dívida e capital de giro | Sim |
| IV. Resultados | DRE projetada, capital investido, FCFF, Sumário do valuation | Sim |
| V. Apêndice | Sensibilidade WACC × g, ponte EV–equity com a data, decisões de custo de capital com fontes, premissas e fontes, cálculo por método, glossário | Cada item, quando existir no modelo |
| Fechamento | Slide de encerramento da casa | Sim |

Adapte a quantidade de slides por capítulo ao mandato; a ordem e a função de cada capítulo não
mudam. Omita o que não se aplica (marco regulatório, receita de terceiro), nunca Aviso legal, Sumário
do valuation, Sumário executivo e o Sumário do valuation dos resultados.

## Títulos: tópico padronizado e linha de mensagem

O título do slide nomeia o tópico, não a conclusão. Padrão da casa em duas linhas:

```
<Nome do capítulo>
<Tópico do slide>
```

Exemplo: "Premissas e observações / Custo médio ponderado de capital (WACC)". A lista de tópicos
padrão por capítulo está em `references/arquitetura-do-relatorio.md`.

**A conclusão vai na linha de mensagem**, logo abaixo da régua do título ou no primeiro bullet do
corpo: uma frase, com número e fonte, sem adjetivo. Exemplo de forma: "WACC de X% em reais nominais,
com Ke pelo CAPM e Kd sintético; fontes na nota". O leitor que só lesse as linhas de mensagem sairia
com o argumento completo.

Esta regra vale para o relatório de valuation. `teaser` e `information-memorandum`, do plugin de M&A,
são material de venda e mantêm título-asserção.

## Convenções de tabela, gráfico e nota

- **Histórico + projetado**: anos históricos sem sufixo, projetados com `E` (2026E). Casas decimais
  iguais dentro da mesma coluna.
- **Nota de rodapé numerada** ("Nota (1): ...") quando a cifra depende de fonte externa ou de cálculo
  não óbvio, no rodapé, nunca no corpo.
- **Fonte sempre citada** no placeholder de fonte do layout, mesmo repetida entre slides. A ACTA não
  é fonte: cite o dado primário (Companhia, órgão, autor). Padrões de nota, fonte e disclaimer:
  [references/fontes-notas-e-disclosures.md](references/fontes-notas-e-disclosures.md).
- **Disclaimer explícito** em toda limitação de comparabilidade (amostra pequena, escala diferente,
  dado estimado). Omitir para parecer mais robusto é o que a diligência do comprador expõe primeiro.
- **Caixa de metodologia** antes de todo resultado (valor terminal, WACC): título em Rawline SemiBold
  na cor primária e 2 a 4 frases sobre o método.
- **Faixa de ±% fixo** só rotulada como convenção, com a sensibilidade WACC × g no apêndice
  (`triangulacao-e-faixa`, TF-03).

## Tom e voz

Terceira pessoa institucional ("Este relatório foi elaborado...", nunca "nós elaboramos"). Denso e
factual: casas decimais consistentes, nunca arredondamento que esconda o driver. Nenhum adjetivo sem
número que o sustente. Resultado ruim ou dado atípico é dito explicitamente, na mesma régua de
honestidade que `qualidade-de-resultados` aplica ao EBITDA normalizado.

## Do modelo ao slide

Todo número do deck tem célula de origem no modelo. O mapa de qual saída alimenta qual slide, e
como registrá-lo para a conciliação automática:
[references/mapa-modelo-para-slides.md](references/mapa-modelo-para-slides.md).

## Release: o manifesto antes de entregar

O deck não sai da casa sem o manifesto de release gerado por
`scripts/manifesto_release.py`: hash do modelo e do deck, erros de fórmula, conciliação modelo ×
deck pelo mapa, diff contra a versão anterior, busca de resíduos, gate de data da ponte e render em
PDF. Uso, parâmetros e leitura do resultado:
[references/qa-e-release-pptx.md](references/qa-e-release-pptx.md).

Antes de renderizar ou editar via COM, consultar `acta-way:ambiente-tecnico` (cópia de arquivo
travado, instância do Office do usuário, retry de RPC).

## Checklist antes de entregar

1. Todo slide de conteúdo tem título por tópico no padrão de duas linhas e linha de mensagem com
   número e fonte.
2. Todo número que aparece em mais de um slide (WACC, faixa, múltiplo, dívida líquida) é idêntico em
   todos os lugares e bate com a célula do modelo (manifesto, conciliação).
3. Toda tabela e gráfico tem fonte; nenhuma fonte é a ACTA; nenhuma é "fontes diversas".
4. Toda limitação relevante tem disclaimer no slide.
5. Paleta e tipografia do tema; nenhuma forma arredondada nova (o `roundRect` do layout de sumário é
   herança do template, não padrão).
6. Os divisores de capítulo batem com o Sumário do valuation.
7. Apêndice com sensibilidade WACC × g, ponte com a data e as decisões de custo de capital com fonte.
8. Manifesto de release sem pendência de gate.

## Matriz de decisões

Estrutura de capítulos (RV-01) e tipo de título (RV-02):
[references/matriz-de-decisoes.md](references/matriz-de-decisoes.md).

## O que entregar

1. O deck completo na estrutura acima, com os slides necessários ao mandato.
2. O mapa modelo → slides preenchido.
3. O manifesto de release, arquivado junto do deck em `~~entregaveis`.

## Próximo passo

Nenhum. Este é o artefato final do mandato de valuation. Se o relatório ou o manifesto expuser uma
inconsistência no modelo, volte para `revisao-de-modelo` antes de corrigir o slide.
