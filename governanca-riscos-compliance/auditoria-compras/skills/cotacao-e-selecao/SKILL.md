---
name: cotacao-e-selecao
description: Teste a competição entre fornecedores e a seleção do vencedor, do mapa comparativo ao quadro societário. Acionar ao avaliar número e independência das cotações, ao investigar sinais de direcionamento, ao testar dispensa e fornecedor único, ou ao cruzar sócios e endereços de fornecedor com a base de funcionários.
---

# Cotação, seleção e cadastro do fornecedor

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Elos 3 e 4 do ciclo (`ciclo-ptp` §2). Blocos **PTP.03** e **PTP.04**.

É aqui que o dinheiro **se perde**, e sem deixar marca contábil. O pedido reflete a proposta, o
recebimento reflete o pedido, o pagamento reflete a nota, e a empresa pagou 30% a mais do que pagaria
numa competição real. Nenhum teste de conformidade documental encontra isso, porque não há
inconformidade documental nenhuma.

## 1. Competição: existe, e é de verdade?

A política do cliente fixa o número mínimo de cotações por faixa de valor. O teste tem duas camadas,
e a segunda é a que importa.

**Camada 1, aderência à regra.** Em 100% dos pedidos acima da faixa que exige cotação: o número de
propostas anexadas atinge o mínimo? Existe mapa comparativo? O critério de julgamento (menor preço,
técnica e preço, menor custo total) está declarado, e está declarado **antes** da abertura das
propostas? O vencedor é o que o critério aponta, ou houve escolha divergente com justificativa?

Escolha divergente do critério não é irregular por si: menor preço com prazo inviável perde para o
segundo colocado, e isso é boa compra. **O achado é a divergência sem justificativa registrada e
aprovada por quem não foi o comprador.**

**Camada 2, independência.** Três propostas anexadas provam que há três papéis, não que houve três
concorrentes. A seção 2 é inteira sobre isso.

## 2. Os sinais de direcionamento

`PTP.R06`. Nenhum sinal isolado conclui. Dois ou três juntos, no mesmo processo, deixam de ser
coincidência, e a conclusão se escreve sobre o conjunto.

### Sinais de data

| Corte | O que revela |
|---|---|
| Data da proposta vencedora **anterior** à data da requisição | O fornecedor foi escolhido antes de a necessidade existir formalmente. É o sinal mais forte que existe, e o mais fácil de testar |
| Propostas perdedoras emitidas **depois** da vencedora, em sequência curta | As concorrentes foram buscadas para compor o processo depois da decisão |
| Todas as propostas com a mesma data, e o pedido no mesmo dia | Processo montado em bloco |
| Proposta sem data | Não é proposta, é orçamento genérico. Trate como ausência |

### Sinais de origem comum entre concorrentes

Os concorrentes precisam ser independentes entre si. Confronte, entre as propostas do mesmo processo:

1. **Endereço, telefone e domínio de e-mail.** Concorrentes no mesmo endereço, ou respondendo do
   mesmo domínio, não competem.
2. **Quadro societário.** Sócio comum entre duas concorrentes, ou sócios com o mesmo sobrenome, em
   empresas que disputam o mesmo processo.
3. **Formatação do documento.** Mesmo modelo de planilha, mesma fonte, mesmos erros de digitação,
   mesma ordem de itens, numeração de proposta em sequência entre empresas diferentes.
4. **Metadados do arquivo.** Quando as propostas chegam em arquivo eletrônico, autor, data de criação
   e programa usado costumam estar no documento. Propostas de três empresas com o mesmo autor são
   conclusivas, e essa é uma das poucas evidências digitais que um auditor obtém sem perícia.
5. **Aritmética das propostas.** Diferenças percentuais idênticas entre os três preços, valores em
   progressão regular, ou perdedoras arredondadas de forma grosseira ao lado de uma vencedora
   detalhada. A proposta de cortesia não é feita para ser lida.

### Sinais de padrão, na população

Fora do processo individual, na base inteira: fornecedor que aparece sempre como vencedor com o mesmo
par de perdedoras; empresas que só aparecem como perdedoras e nunca venceram nada; e a rotação
perfeita, em que três fornecedores se alternam na vitória em proporções suspeitas de regularidade.

### Como se conclui

Conclua sobre o que se viu, e nunca sobre a intenção de quem comprou: *"Nos [N] processos avaliados,
[M] apresentam propostas concorrentes com endereço e quadro societário comuns, e em [K] deles a
proposta vencedora antecede a requisição. A competição declarada não se confirma, e o preço praticado
não tem referência de mercado que o sustente."* Quando o valor for material, quantifique a exposição
por comparação com preço de referência obtido independentemente, e declare a fonte da referência.

## 3. Dispensa, fornecedor único e contrato guarda-chuva

Nem toda compra sem cotação é irregular. Três situações legítimas, cada uma com seu teste:

- **Fornecedor exclusivo.** Exige comprovação de exclusividade, não declaração do próprio fornecedor.
  Peça a carta do fabricante ou o registro equivalente, e confirme a vigência dela no período.
- **Contrato guarda-chuva ou de fornecimento vigente.** O pedido individual não se cota; o que se
  testa é a aderência do pedido ao preço e à condição do contrato, e a vigência do instrumento. O
  momento de testar a competição foi a contratação do guarda-chuva, e ela entra no escopo.
- **Urgência.** Ver `requisicao-e-alcada` §4. A urgência que se repete deixa de ser urgência.

Para todas: quem autorizou a dispensa tinha alçada **superior** à da compra? Dispensa autorizada pelo
próprio comprador é dispensa sem controle.

## 4. Cadastro e homologação do fornecedor

O cadastro é a porta. Fornecedor que entra sem homologação não passa por nenhum outro filtro depois.

| Atributo | O que confirmar |
|---|---|
| Homologação | Documentação exigida pela política, regularidade fiscal e trabalhista verificada, e aprovação por quem não é o comprador que o trouxe |
| Segregação | Quem cadastra não compra e não aprova pagamento. Comprador com acesso de criação de fornecedor é a deficiência de acesso mais cara do ciclo |
| Dado bancário | Alteração de conta bancária com alçada própria e confirmação por canal independente do que pediu a troca |
| Reavaliação | A base ativa é revista periodicamente, e o fornecedor inativo é bloqueado |

Cortes sobre a base de fornecedores, todos de população:

1. **Cadastro criado no mesmo dia (ou na mesma hora) do primeiro pedido.** O fornecedor nasceu para
   atender aquela compra, e a homologação, se existiu, foi formalidade posterior.
2. **Data de abertura da empresa próxima à data do primeiro pedido.** Empresa aberta semanas antes de
   vender pela primeira vez, sem histórico, em categoria que exige estrutura.
3. **Duplicidade de cadastro.** Mesmo fornecedor com dois registros, o que fraciona o gasto e engana
   qualquer análise de concentração. Cruze por raiz do documento de inscrição, por nome normalizado e
   por dados bancários iguais.
4. **Fornecedores com o mesmo dado bancário** e documentos de inscrição distintos.
5. **Alterações de dado bancário**, 100% delas: quem alterou, quando, com que documento suporte, e se
   houve pagamento logo em seguida. É o vetor de desvio mais direto do ciclo.
6. **Fornecedor inativo com pagamento no período.**

## 5. Conflito de interesse: o cruzamento que quase ninguém faz

`PTP.R08`. É o único teste do ciclo que sai da base de compras, e por isso é o que mais falta.

**O cruzamento.** De um lado, a base de fornecedores com quadro societário, endereço e telefone. De
outro, a base de pessoal com nome, documento, endereço, telefone e, quando disponível, o cadastro de
dependentes. Cruze por:

1. **Documento de inscrição de sócio contra documento de funcionário.** Casamento direto e conclusivo.
2. **Nome de sócio contra nome de funcionário**, e contra nome de dependente declarado.
3. **Endereço do fornecedor contra endereço residencial de funcionário.** Fornecedor cuja sede é a
   casa de quem aprova a compra.
4. **Telefone e conta bancária** comuns entre fornecedor e funcionário.
5. **Sobrenome incomum compartilhado** entre sócio e funcionário da área de compras, aprovação ou
   recebimento. Não conclui sozinho; abre indagação dirigida.

Depois de encontrado o vínculo, o teste muda de natureza: o que se apura é se a pessoa vinculada
participou da requisição, da cotação, da aprovação ou do recebimento daquele fornecedor, e se existe
declaração de conflito assinada e tempestiva. **Vínculo declarado e afastamento comprovado é controle
funcionando**; vínculo não declarado é o achado.

**Tratamento do dado.** Esse cruzamento usa dado pessoal de funcionário e exige base mínima, uso
restrito à finalidade e descarte ao fim do trabalho. A regra está em `acta-way:anonimizacao-e-lgpd` e
vale integralmente. No papel de trabalho e no relatório, o vínculo se descreve **pelo cargo e pelo
registro**, nunca pelo nome da pessoa.

### Planos A/B/C

- **Plano A**: base de fornecedores com quadro societário atualizado e base de pessoal com os campos
  de cruzamento; cruzamento automático em 100%, com os casamentos conferidos um a um.
- **Plano B**: sem quadro societário na base do cliente: consulte a fonte pública de registro
  empresarial para os fornecedores relevantes (maior gasto, criados no período, vencedores
  recorrentes) e declare o universo consultado.
- **Plano C**: sem acesso à base de pessoal: o cruzamento cai. Conclua pela **ausência do controle de
  declaração de conflito de interesse**, se for o caso, e declare que a existência de vínculo não foi
  testável. Não substitua o teste por indagação e não registre a resposta como se fosse evidência.
- **Limitação**: *"O cruzamento de vínculo abrange [N] fornecedores, correspondentes a [X]% do valor
  comprado no período; o quadro societário foi obtido de fonte pública de registro empresarial em
  [data]; a base de pessoal disponibilizada não contém endereço, e esse vetor não foi testado."*

## O que entregar

1. Aderência ao número mínimo de cotações por faixa, em 100% dos pedidos sujeitos à regra.
2. Mapa comparativo com critério declarado antes da abertura, e a relação de escolhas divergentes do
   critério, com justificativa e aprovação.
3. A bateria de sinais de direcionamento aplicada aos processos selecionados, com o conjunto de
   sinais que sustenta cada conclusão.
4. Relação de dispensas e fornecedores únicos, com a comprovação de exclusividade e a alçada que
   autorizou cada uma.
5. Cortes sobre a base de fornecedores, com cadastros nascidos na véspera do pedido, duplicidades e
   100% das alterações de dado bancário.
6. Resultado do cruzamento de conflito de interesse, descrito por cargo e por registro.
7. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`contrato-e-aditivo`. A proposta vencedora apurada aqui é o critério contra o qual o instrumento e os
aditivos são conferidos lá.
