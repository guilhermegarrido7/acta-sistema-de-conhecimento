# Convenções da planilha-mestre

Referência de `mapeamento-as-is`. Carrega ao criar ou alterar a planilha de cálculo de um
diagnóstico.

A planilha-mestre é o entregável técnico do diagnóstico. O deck é derivado dela; os documentos são
derivados do deck. Essa ordem é a regra de precedência entre entregáveis, e está declarada no banner
de cada documento derivado.

## 1. Código de cores

| Cor | Significa | Onde pode aparecer |
|---|---|---|
| Azul | Dado de entrada, digitado | **Apenas** na aba Base de Dados |
| Verde | Referência a outra aba | Qualquer aba de cálculo |
| Preto | Fórmula calculada na própria aba | Qualquer aba de cálculo |
| Vermelho | Alerta, ou valor que a análise contesta | Qualquer aba |
| Cinza itálico | Metadado: unidade, fonte, nota metodológica | Qualquer aba |

A regra que o código de cores existe para tornar visível: **azul fora da Base de Dados é erro**.
Alguém digitou número numa aba de cálculo, e esse número não tem fonte rastreável.

## 2. Navegação

Em toda aba de cálculo, sem exceção:

| Coluna | Conteúdo |
|---|---|
| A | Nome do indicador |
| B | Unidade (R$, %, unidades, R$/unidade) |
| C | Fonte ou fórmula, em texto legível |
| D em diante | Um período por coluna, na ordem cronológica |

A coluna C é a que mais paga. Ela é o que permite a um revisor entender a aba sem clicar em nenhuma
célula, e é o que sobrevive quando a planilha é exportada.

## 3. Abas típicas

Uma organização que já rodou em diagnóstico de duas entidades, com catorze abas:

- **Capa**: o que é, versão, data, autoria por papel, regra de precedência entre entregáveis.
- **Base de Dados**: todo dado de entrada, um hyperlink por célula para o arquivo-fonte.
- **Base de dados dos slides**: cada número publicado mapeado de volta para a linha da Base de Dados.
- **Aba nominal de pessoal por setor**: uma linha por pessoa e por setor, com link para a folha de
  origem. Quem mudou de setor no período aparece uma vez em cada. É a aba que responde "quem
  exatamente está nesta área", e é a única forma de defender um número de headcount numa reunião.
- **Aba de ajustes estruturais**: o comparativo fonte bruta contra registro analítico, linha a linha,
  com o efeito no resultado.
- **Aba de detalhamento financeiro**: série mensal por subconta.
- **Abas de cálculo por entidade**: as mesmas abas, na mesma ordem, para cada entidade.

Quando o cálculo de pessoal usa a folha e não o balancete, declare o **multiplicador de encargos**
usado e onde ele foi arbitrado. É um dos números que mais se pede para reconciliar depois.

## 4. As três armadilhas de manutenção

### 4.1 Nunca inserir linha no meio de uma aba

Hyperlink interno guarda o destino como **texto** (`'Base de Dados'!A147`), e a planilha **não** o
reajusta quando linhas são inseridas acima. Toda linha nova vai no fim da aba, mesmo que fique fora
da ordem lógica. A ordem lógica se recupera com a coluna A; o link quebrado não se recupera.

### 4.2 A aba que mapeia o deck precisa ser renumerada

A aba Base de dados dos slides segue a numeração do deck vigente. Se slides forem inseridos no meio
da apresentação, ela desalinha inteira. Num engajamento, a inserção de doze slides deslocou 62
rótulos em até doze posições, e o realinhamento foi manual.

Procedimento que funciona: **realinhe os blocos existentes** para a nova numeração e **acrescente os
blocos novos no fim da aba**, fora da ordem do deck, para não quebrar os links internos das linhas já
existentes. Feio e correto vence bonito e quebrado.

### 4.3 Verificação obrigatória depois de escrita programática

Depois de qualquer escrita automatizada na planilha, **conte os hyperlinks no XML do arquivo antes e
depois**. O round-trip preserva os links, mas a interface de programação **não os expõe**: consultar
o objeto na linguagem devolve zero mesmo com mais de mil links no arquivo, o que produz falso
negativo e faz alguém "recriar" links que já existiam.

As armadilhas de ambiente (bibliotecas que quebram com metadados malformados, recálculo de fórmula
em cache, ausência de ferramentas de linha de comando no ambiente padrão) não são deste plugin: elas
vivem em `acta-way:ambiente-tecnico`.

## 5. Versionamento e backup

- **Backup antes de qualquer edição.** Sem exceção, inclusive para a edição de uma célula.
- **Versão anterior vai para a subpasta `Versões Anteriores`** dentro da pasta daquela entidade,
  nunca solta ao lado do arquivo vigente. Dois arquivos com nome parecido na mesma pasta é como o
  número errado chega ao cliente.
- O nome do arquivo vigente não carrega data nem versão; quem carrega é o arquivo arquivado.

## 6. Convenções do deck derivado

- **Zero fonte interna nos slides.** Não citar balancete, registro analítico, número de conta,
  planilha nem relatório gerencial. Fonte só para dado externo, com instituição, publicação, edição e
  recorte.
- **Zero travessão** no texto. Faixa de período usa "a" ou hífen; o separador é o ponto médio; o
  sinal de menos permanece em fórmula e em valor negativo.
- **Gráfico sempre nativo**, nunca imagem. O cliente vai querer mudar um rótulo na reunião.
- Todo indicador por unidade usa as definições únicas declaradas no projeto, sem exceção.

O restante do padrão visual (paleta, tipografia, geometria de slide, capa) vive em
`acta-way:identidade-visual` e `acta-way:convencoes-de-entregavel`.
