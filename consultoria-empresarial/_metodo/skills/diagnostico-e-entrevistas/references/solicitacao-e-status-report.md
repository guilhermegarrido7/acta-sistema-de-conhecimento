# Solicitação de informações e status report

Referência de `diagnostico-e-entrevistas`. Carrega ao redigir a carta de solicitação, ao montar o
status report, ou ao escalonar pendência que não chega.

## 1. Os blocos da carta

A carta é endereçada ao patrocinador do projeto no cliente e assinada pelo sócio responsável. Seis
blocos, na ordem.

### 1.1 Informações gerais

Uma linha por item, com o período entre parênteses e o formato preferido.

- Estrutura organizacional
- Quadro de pessoal por departamento, com data de admissão, data de desligamento e salário base, por
  ano do período
- Balancete analítico mensal, por ano do período
- Extratos bancários do exercício corrente
- Contratos com fornecedores em vigor
- Relatórios gerenciais produzidos pela própria gestão, por ano do período

Peça sempre em planilha, e diga "preferencialmente". PDF de balancete custa uma semana de extração
por coordenada e o cliente quase sempre tem a planilha.

### 1.2 Blocos temáticos do que a gestão deveria acompanhar

Aqui você não está pedindo dado: está diagnosticando a maturidade da gestão. Peça o indicador pelo
nome. Se ele não existe, você já sabe disso antes da primeira entrevista, e o status `Não encontrado`
vira achado por si só.

Blocos que se repetem em qualquer operação:

| Bloco | Itens típicos |
|---|---|
| Estrutura de custos | Custo por unidade ocupada e por unidade disponível, custo de mão de obra por departamento, utilidades, custo unitário dos serviços de apoio, custo de manutenção por unidade e por mês |
| Indicadores operacionais | Receita por unidade disponível, preço médio realizado, taxa de utilização da capacidade |
| Gestão de receita | Receita por canal, comissão por intermediário, comissão por operador ou agência |
| Comercial e marketing | Avaliação pública, posição frente a concorrentes, taxa de conversão, satisfação e recompra |

### 1.3 Arquivos eletrônicos, Prioridade A e Prioridade B

**Prioridade A** é o que trava o diagnóstico: o transacional operacional do período inteiro, o
cadastro de clientes, o transacional por ponto de venda, a ficha técnica de produto com insumo e
custo unitário, o faturamento fiscal, as transações de cartão, as ordens de serviço.

**Prioridade B** é o que enriquece: compras e contas a pagar (cadastro de fornecedores, pedidos,
notas de entrada, títulos quitados), almoxarifado (cadastro de itens com ponto de ressuprimento e
estoque mínimo, requisições, saldos, ajustes de inventário), folha (cadastro e folha verba a verba).

Sem a separação, o cliente entrega o fácil e o difícil nunca chega. Com ela, você tem argumento para
cobrar: "os itens de Prioridade A ainda pendentes travam quatro análises".

### 1.4 O layout por arquivo

Um bloco por extração. Cabeçalho com o nome do arquivo, o período, e a lista de campos, um por
linha, terminando em **"demais campos"**. O "demais campos" é deliberado: o sistema do cliente tem
campos que você não sabe que existem, e é mais barato receber a extração inteira do que pedir três
vezes.

Campos que costumam faltar e custam caro depois:

- **Chave de ligação entre as bases.** Código do item, código do fornecedor, matrícula. Sem chave,
  cruzamento vira casamento por descrição, que não fecha.
- **Data do lançamento no sistema**, separada da data de emissão do documento. A diferença entre as
  duas é achado de tempestividade.
- **Centro de custo ou setor** em toda base transacional. É o que permite abrir qualquer número por
  área depois.
- **Unidade de medida** em tudo que tem quantidade.
- **Natureza da operação** no faturamento. Sem ela não há leitura fiscal.
- **Valor bruto e valor líquido** separados nas transações de recebimento, mais a taxa. É o que
  permite quantificar o custo do meio de pagamento.

### 1.5 O fecho

Duas frases: "outros documentos e informações ainda serão solicitados ao longo dos trabalhos" e a
colocação à disposição. A primeira evita que a carta vire contrato fechado; a segunda evita que o
segundo pedido pareça falha de planejamento.

## 2. O status report

Documento separado da carta, reemitido a cada remessa, com a mesma numeração de seções da carta para
que as duas se leiam lado a lado.

Cabeçalho: nome do trabalho e unidades cobertas. Depois, uma tabela por seção, três colunas: **Item
Solicitado · Status · Observação**.

### 2.1 Como escrever a observação

| Status | Observação |
|---|---|
| `Suprido` | `Documento(s): <caminho relativo exato>` e, quando for pasta, a natureza do conteúdo e a contagem aproximada de arquivos. Quando houver uma fonte por unidade, numere: `Documento 1:`, `Documento 2:`. |
| `Parcial` | Começa com `Não encontrado:` seguido do que falta, com precisão. Se o que veio é útil mas insuficiente, descreva em uma linha o que veio e depois o buraco. |
| `Não encontrado` | Traço. Nada mais. |

Agrupe numa única linha os itens que vieram ou faltaram em bloco, para o documento não virar
inventário: "custo por unidade ocupada, custo por unidade disponível, mão de obra, utilidades,
manutenção" numa linha só, com status `Não encontrado`, diz mais do que cinco linhas idênticas.

### 2.2 A cobrança

- **Nunca cobre por e-mail solto.** Cobre reenviando o status report com as linhas pendentes, e
  diga na mensagem quantos itens de Prioridade A seguem abertos e o que cada um bloqueia.
- **Pendência que persiste vira limitação declarada**, não some. Passe o item para a lista de
  limitações conhecidas (ver `defesa-tecnica-e-limitacoes`) e diga no entregável qual análise ficou
  sem base. Um diagnóstico que declara quatro análises bloqueadas por ausência de dado é mais forte
  que um que as omite.
- **Ausência recorrente é achado de gestão.** O cliente que não consegue extrair o transacional de
  compras do próprio sistema tem um problema de controle, e isso entra no relatório.
