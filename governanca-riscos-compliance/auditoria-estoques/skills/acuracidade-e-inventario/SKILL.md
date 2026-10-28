---
name: acuracidade-e-inventario
description: Planeje e acompanhe o inventário físico e apure a acuracidade do estoque, do corte de movimentação à recontagem dirigida. Acionar ao preparar ou acompanhar contagem, ao desenhar a segunda contagem cega, ao apurar divergência entre contagem e sistema, ou ao calcular acuracidade por item e por valor.
---

# Acuracidade e inventário físico

Carregue `acta-metodo-auditoria:metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

Pergunta 1 do ciclo (`matriz-de-riscos-de-estoques` §1). Blocos **INV.01**, **INV.02** e **INV.03**.

A contagem é o único momento em que o estoque é medido fora do sistema que se quer testar. Por isso
ela não se improvisa no dia: o que decide o resultado é o que foi feito antes de a primeira equipe
entrar no depósito.

A mecânica de campo (planilha de contagem coluna a coluna, roteiro do dia, vocabulário de ocorrência
e o kit da equipe) está em [references/planilha-e-roteiro.md](references/planilha-e-roteiro.md).
Esta skill traz a decisão de auditoria.

## 1. INV.01: o que se decide antes da contagem

| Decisão | O que confirmar |
|---|---|
| Data e abrangência | Data-base declarada, depósitos e locais cobertos, e o que ficou de fora com a razão escrita |
| Corte de movimentação | Última entrada e última saída registradas antes da contagem, identificadas por documento e por número |
| Congelamento | Movimentação suspensa no período da contagem, ou, quando impossível, área de movimento segregada e registrada |
| Estoque de terceiros | O que é de terceiro em poder da Companhia e o que é da Companhia em poder de terceiro, listado antes e contado à parte |
| Equipes | Composição, rodízio e a regra de que ninguém conta a área que custodia |
| Identificação do item | O padrão de descrição e de etiqueta, homologado antes, não negociado no corredor |

**O corte é o teste que mais rende e o que mais se esquece.** Fixe o número do último documento de
entrada e o do último de saída antes do início, registre-os em papel de trabalho assinado, e depois
confronte: nenhum documento de numeração posterior pode ter afetado o saldo contado, e nenhum de
numeração anterior pode estar fora dele. Mercadoria em doca, em trânsito e em conferência de
recebimento é onde o corte quebra, e é onde o mesmo item aparece duas vezes ou nenhuma.

**Congelamento.** Operação que não para tem de registrar o movimento ocorrido durante a contagem,
item a item, com hora. Sem esse registro, toda divergência apurada depois vira discussão sobre se o
item saiu antes ou depois de ser contado, e a discussão sempre termina a favor de quem movimentou.

### Estoque em poder de terceiro e de terceiro em poder da Companhia

Consignação, industrialização por encomenda, comodato e material em poder de prestador não são
detalhe: são a diferença entre o saldo contábil e o que se consegue ver. Levante a relação antes da
contagem, obtenha confirmação escrita do terceiro na data-base, e some ao contado somente o que a
Companhia controla. Estoque de terceiro contado como próprio infla a acuracidade e o ativo.

## 2. INV.02: a contagem, e a segunda contagem cega

A primeira contagem é registrada por local, por item e por quantidade, sem o saldo do sistema à
vista. Contador que enxerga o saldo esperado confirma o saldo esperado, e a contagem deixa de ser
medição para virar conferência.

**A segunda contagem é cega e independente.** Cega quer dizer sem acesso ao resultado da primeira;
independente quer dizer por equipe diferente, na mesma base física e com a mesma planilha em branco.
Ela não cobre tudo: cobre o que vale a pena, e a seleção se declara.

### Como selecionar o que vai para a segunda contagem

1. **Todos os itens de alto valor**, pelo critério de valor acumulado, tipicamente a faixa que
   concentra a maior parte do saldo. Acuracidade por valor se decide aqui.
2. **Itens de contagem difícil**: granel, item fracionável, item empilhado, item de embalagem
   múltipla, item sem etiqueta individual.
3. **Uma fatia aleatória do restante**, para que a seleção não seja previsível pela equipe de campo.
4. **Todo item cuja primeira contagem divergiu do sistema acima do limite declarado.**

O limite de divergência é parâmetro do mandato, definido antes e por escrito, e pode ser diferente
por valor e por quantidade. Limite definido depois de ver o resultado não é limite, é acomodação.

### A recontagem dirigida

Recontagem não é terceira contagem geral. É dirigida: vai aos itens em que primeira e segunda
contagem não fecharam entre si, ou em que ambas divergiram do sistema acima do limite. Executa-se
com as duas planilhas anteriores em mãos, com quem contou presente, e o resultado é conclusivo.
Recontar às cegas pela terceira vez só produz um terceiro número.

**Recontagem dirigida também se aciona por tipo de ocorrência**, e não só por diferença de
quantidade: a fatia de itens marcados como novos, sem etiqueta ou com etiqueta ilegível costuma ser
grande e concentra o erro de identificação. Trate essa fatia por bloco físico, varrendo o local
inteiro, e não item a item saltando de corredor em corredor.

## 3. INV.03: a apuração da divergência

A apuração casa três colunas por item, e as três ficam lado a lado no papel de trabalho: **saldo do
sistema, quantidade contada e diferença**, com valor unitário e valor da diferença. O padrão que
funciona é preservar o valor antigo ao lado do novo (descrição anterior, local anterior, saldo
anterior) em vez de sobrescrever, porque a análise da causa depende de ver os dois lados.

A regra de casamento: item a item, pela chave de identificação do item, com consumo de pool
(`bases-e-conciliacao` §4). Nunca por total de grupo. Diferença positiva de um item compensando a
negativa de outro é exatamente o que a apuração precisa expor, e o total esconde.

### Os dois indicadores, e qual se usa

| Indicador | Fórmula | O que responde |
|---|---|---|
| Acuracidade por item | Itens sem divergência ÷ itens contados | O controle de estoque funciona? |
| Acuracidade por valor | Valor absoluto das divergências ÷ valor do estoque contado, subtraído de 1 | Qual é a exposição em reais? |

**Os dois números são diferentes e não são substituíveis.** Um estoque com milhares de itens baratos
certos e alguns itens caros errados tem acuracidade por item alta e acuracidade por valor baixa. O
inverso também ocorre. A regra da casa: **reporte os dois, sempre, e diga qual sustenta cada
conclusão.** A conclusão sobre controle operacional se sustenta na acuracidade por item; a conclusão
sobre a demonstração contábil e sobre a materialidade do ajuste se sustenta na acuracidade por valor.

Duas exigências de disciplina na apuração:

- **Divergência se soma em valor absoluto.** Somar com sinal produz um número pequeno e falso,
  porque a falta de um item cancela a sobra de outro. O número com sinal serve para uma coisa só:
  dimensionar o ajuste contábil líquido.
- **Declare o universo.** Acuracidade apurada sobre os itens contados não é acuracidade do estoque
  se a contagem cobriu parte dele. Diga quantos itens e que percentual do valor foram cobertos.

### A divergência que se compensa entre itens

O achado mais mal interpretado do inventário. Item A com falta de 12 unidades e item B, parecido,
com sobra de 12 unidades, no mesmo local, não é perda de 12 nem ganho de 12: **é quase sempre erro
de identificação**, e a perda real é zero.

Como se confirma, em ordem:

1. **Pareie falta e sobra de mesma quantidade, no mesmo local ou em locais vizinhos**, entre itens do
   mesmo grupo. A varredura é de base e roda em minutos.
2. **Compare a descrição dos dois itens.** Quando o padrão de descrição é estruturado por atributo
   (tipo, marca, modelo, característica, cor), a confusão aparece na leitura: dois códigos com a
   mesma descrição e cor diferente, ou o mesmo item com duas descrições herdadas de compras
   distintas.
3. **Verifique o cadastro.** Item duplicado no cadastro, com dois códigos para o mesmo material, é a
   causa raiz mais comum e produz o par falta/sobra todo mês.
4. **Confirme em campo**, na recontagem dirigida, com o item na mão.

Confirmado, o achado muda de natureza: deixa de ser perda de estoque e passa a ser **falha de
cadastro e de identificação de item**, com impacto em requisição errada, compra desnecessária e
custeio, e sem ajuste líquido de valor. Reportar isso como perda é erro de auditoria e o cliente
derruba o ponto na primeira reunião.

**Cuidado com o inverso.** Compensação declarada sem prova é a saída fácil de quem quer zerar a
divergência. Par não confirmado em campo permanece como falta e como sobra, separado, e a conclusão
diz que a hipótese de troca de identificação não foi comprovada.

## 4. O que o auditor faz no dia, e o que ele não faz

O auditor **observa e reperforma**, não conduz a contagem. Reperformance quer dizer contar por conta
própria uma seleção de itens, no mesmo momento, e comparar com o que a equipe do cliente registrou.
Tamanho da seleção por `programa-de-testes`, com preferência pelos itens de maior valor e pelos de
contagem difícil.

Registre por observação direta: a contagem começou com o corte fixado, a equipe usou a planilha
homologada, a segunda equipe não teve acesso ao resultado da primeira, a movimentação esteve
suspensa, e as divergências foram tratadas por recontagem e não por ajuste no papel. Cada um desses
é um controle, e cada um observado como ausente é achado, mesmo que a acuracidade final seja boa.

**Meio independente de verificação.** Onde existir, use uma fonte que não seja a contagem manual
para checar uma categoria inteira: relação de ativos em rede para equipamento conectado, registro de
imagem para item fixo em área monitorada, balança para granel, leitura de código de barras contra a
planilha digitada. Vale como reperformance de população em vez de amostra, e custa pouco.

## 5. O ajuste de inventário, e o que ele revela

O ajuste é a saída contábil da divergência e a entrada do próximo teste (`movimentacao-e-perdas`
§4). Três cortes aqui:

1. **Valor bruto contra valor líquido.** Ajuste líquido pequeno com bruto grande significa controle
   ruim com resultado contábil neutro, e a conclusão é sobre o controle.
2. **Tempestividade.** Ajuste lançado meses depois da contagem, ou parcelado ao longo do exercício
   para diluir o impacto, é achado próprio.
3. **Aprovação.** Quem aprovou o ajuste, em que alçada, e se é pessoa distinta de quem contou e de
   quem custodia.

### Planos A/B/C

- **Plano A**: acompanhamento presencial na data-base, com corte fixado por você, primeira e segunda
  contagem observadas, reperformance própria e a base do sistema recebida congelada na mesma data.
- **Plano B**: sem presença na data-base: contagem posterior com roll-back documentado, reconstruindo
  o saldo da data-base pelas movimentações do intervalo, e o teste passa a depender inteiramente da
  qualidade dos documentos de movimentação, o que se declara.
- **Plano C**: sem contagem, apenas base do sistema: não se conclui sobre existência. O que resta é
  o teste analítico (saldo negativo, item sem movimentação, saldo sem custo) e a conclusão de que a
  existência física não foi verificada, redigida como limitação e não como opinião.
- **Limitação**: *"A contagem cobriu [N] itens, [X]% do valor do estoque na data-base; a segunda
  contagem cega alcançou [M] itens, [Y]% do valor; [K] pares de falta e sobra foram confirmados como
  erro de identificação em recontagem dirigida e estão excluídos da perda apurada."*

## O que entregar

1. O papel de trabalho do corte, com os números de documento de última entrada e última saída e o
   confronto com os documentos do intervalo.
2. A relação de estoque de terceiro e em poder de terceiro, com a confirmação escrita da data-base.
3. A planilha de apuração item a item, com saldo do sistema, contado, diferença em quantidade e em
   valor, e a coluna de ocorrência pelo vocabulário fechado.
4. Os dois indicadores de acuracidade, calculados, com o universo declarado e a indicação de qual
   sustenta cada conclusão.
5. A relação de pares falta e sobra, separada entre confirmados como erro de identificação e não
   confirmados, com a causa raiz de cadastro quando houver.
6. O resultado da reperformance própria e da verificação por meio independente.
7. Os controles observados no dia, cada um como presente ou ausente, com a evidência da observação.
8. O ajuste de inventário: bruto, líquido, data do lançamento e quem aprovou.

## Próximo passo

`custeio-e-giro`, porque a quantidade certa avaliada pelo custo errado continua produzindo saldo
errado. Depois `obsolescencia-e-provisao` e `movimentacao-e-perdas`.
