---
name: bases-e-conciliacao
description: Trate bases de auditoria e concilie fontes divergentes com universo declarado e soma reconciliada. Acionar ao ler extrato bancário, fatura de cartão corporativo, planilhão de pagamentos, base de colaboradores ou cadastro de fornecedores, ao cruzar duas bases e apurar o que não bate, ou ao definir e documentar amostra.
---

# Tratamento de bases e conciliação

Carregue `metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não
são repetidas.

## Papel desta skill

Esta é a **mecânica** da doutrina do número. A skill mãe diz por que o número tem de fechar; esta diz
como fazer ele fechar, arquivo a arquivo.

A razão de ela existir no lugar que ocupa: **quase todo erro de número que chega ao cliente nasce
aqui**, na leitura e na agregação, não na conclusão. A ordem das seções abaixo não é burocracia — é o
que separa um achado auditável de um número que vai ser retratado.

## 1. Antes de somar qualquer coisa, entenda o arquivo

Sequência obrigatória para cada arquivo novo. Nenhum passo é pulável.

**1.1 Localize o cabeçalho.** Não assuma linha 1. Já vieram base com cabeçalho na linha 3 (banner e
legenda acima) e na linha 2. Assumir errado perde a primeira linha de dados **em silêncio**: sem
erro, sem aviso, sem nada no console.

**1.2 Monte o mapa de colunas por nome, nunca por índice fixo.** E **falhe alto** se faltar coluna
esperada. Um `KeyError` no começo é infinitamente melhor que uma coluna trocada no fim.

**1.3 Classifique cada linha antes de agregar.** Quantas são transação? Quantas são cabeçalho de
seção, subtotal, total, rodapé repetido de página, linha de continuação?

> O caso que define a regra: num lote de faturas, 48 linhas cuja descrição era literalmente `'R` eram
> os **totais de cada fatura**. Somadas junto com as compras, inflaram o gasto do cartão em **4,6×**
> o valor real. Excluídas e capturadas em separado, viraram a base da conciliação — o mesmo dado que
> destruiria o número passou a prová-lo.

**1.4 Reconcilie contra um total que você não calculou.** O total impresso na fatura, o saldo final
do extrato, o valor que o cliente declarou. Se não bate, **você ainda não entendeu a base**. Não
avance.

**1.5 Liste os valores distintos das colunas que vai classificar.** Formas de pagamento, naturezas,
status, nomes de fornecedor. É aqui que aparecem o nome com erro de digitação que nenhuma
palavra-chave captura, e os homônimos que vão contar em dobro.

## 2. Extração de PDF: por coordenada, não linear

`page.get_text()` devolve texto na ordem interna do PDF, que em fatura e boletim de medição **não**
corresponde às colunas. Ler linearmente embaralha valor com data e descrição.

```python
import fitz
doc = fitz.open(caminho)
doc.authenticate("~~senha do documento")   # quando houver; a senha vive no CLAUDE.md do engajamento
pg = doc[0]
palavras = pg.get_text("words")            # (x0, y0, x1, y1, texto, bloco, linha, palavra)

# 1. agrupe por y com tolerância ~2,6 para reconstruir a linha visual
# 2. identifique o centro em x da coluna alvo pelo cabeçalho ("R$", "Valor", "Qtd")
# 3. para cada linha, escolha o numérico cujo centro em x está mais próximo desse centro
```

Notas que já custaram tempo:

- **Fatura multi-cartão.** Uma fatura consolidada tem seções por portador. Só a **linha de seção
  nominal** é autoritativa para atribuir o portador; o número repetido no rodapé de cada página não
  é. Errar isso já atribuiu compras ao portador errado duas vezes. Regra que funcionou: linha sem
  nome antes do número do cartão é cabeçalho de página, ignore.
- **Página escaneada de lado.** Termo de aceite, boletim de medição e canhoto assinado vêm
  frequentemente rotacionados, e a leitura visual do render torto não é confiável. Rotacione
  **antes** de olhar: `pg.set_rotation(90)` (ou 270) e depois `pg.get_pixmap(dpi=150).save(png)`.
  `pg.rotation` diz o ângulo declarado no PDF, que nem sempre corresponde à orientação da imagem
  digitalizada. Ao abrir lote de escaneado, renderize a primeira página de cada arquivo e confira a
  orientação antes de processar o lote inteiro.
- **Aceite de medição costuma ter mais de uma página.** O boletim de avaliação vive na segunda página
  do PDF da nota, não em arquivo próprio. Antes de reportar ausência de boletim, varra todas as
  páginas de todos os anexos.
- **Dado em campo inesperado.** A data de cancelamento de nota de serviço já apareceu em "OUTRAS
  INFORMAÇÕES", não no topo. Varra o documento inteiro antes de declarar ausência.
- **PDF que é imagem.** Sem OCR no ambiente padrão: renderize e leia visualmente. Funciona para
  assinatura e carimbo de aceite. Confira quantas páginas cada arquivo tem antes de concluir que
  falta anexo.

Para `.xls` antigo, encoding, célula mesclada e limites do openpyxl, ver `acta-way:ambiente-tecnico`.

## 3. Classificação por natureza

Classificar por palavra-chave é rápido e traiçoeiro. Três regras.

**Ordene as regras da mais específica para a mais genérica, e teste as exclusões.** Uma regra
`"SEGURO"` capturou o nome de uma seguradora cujo produto era um seguro **operacional** parcelado em
10×, e o rotulou como seguro do cartão, custo de titularidade. O erro dobrou: a natureza estava
errada **e** a contagem também ("11 lançamentos em 13 cartões" quando era 1 cartão). Prefira a lista
nomeada das seguradoras conhecidas antes da regra genérica, e valide contando os instrumentos
distintos afetados.

**Meça o resíduo e reporte-o.** Quanto ficou em "outros" ou "não classificado"? Acima de ~5% o
revisor devolve. Baixar de 10,2% para 0,8% se faz abrindo a lista de estabelecimentos e criando
categorias reais — nunca inventando um balde maior.

**Separe fenômenos que se parecem.** É o padrão de erro mais caro da etapa:

| Parece | Mas é | Como distinguir |
|---|---|---|
| Duplicidade | Parcela da mesma compra | Mesmo estabelecimento e valor em competências seguidas, com marcação `n/N` na descrição. Num teste, 148 dos 167 "duplicados" eram isso |
| Gasto discricionário | Cobrança recorrente automática (SaaS, streaming) | Mesmo valor, mesmo dia do mês, mesmo fornecedor. Num teste de fim de semana, respondia por 63% do valor apontado |
| Seguro do instrumento | Seguro operacional parcelado | O fornecedor é seguradora conhecida, o valor é alto e está parcelado |
| Pagamento a fornecedor | Débito automático de fatura | O fornecedor lançado é o **banco emissor**, não o estabelecimento |

Ao reduzir uma tabela para o relatório, mantenha **um de cada** e diga que reduziu. Nunca apague a
evidência do papel de trabalho.

## 4. Cruzamento de duas bases

O casamento valor a valor com **consumo de pool** é o método. Sem consumo, homônimo e repetição
contam em dobro — foi assim que um fornecedor apareceu com exatamente o dobro do valor real.

```python
import collections
pool = collections.defaultdict(list)
for x in base_b:
    pool[round(x["valor"], 2)].append(x)

casados, sem_par = [], []
for r in sorted(base_a, key=lambda z: -z["valor"]):
    k = round(r["valor"], 2)
    if pool.get(k):
        casados.append((r, pool[k].pop()))     # consome: cada contraparte casa uma vez só
    else:
        sem_par.append(r)
sobra = [x for v in pool.values() for x in v]  # lado B sem par
```

Depois do casamento, sempre produza **quatro quadros**:

1. **Confronto global** — quantidade e valor de cada lado, a diferença, e o percentual sobre a base
   maior.
2. **Quem cada lado registra** — num caso, 97,9% dos lançamentos da base traziam o **banco** como
   fornecedor, e o estabelecimento real não existia no cadastro. É por isso que aquele canal de gasto
   não aparecia em nenhum teste de Compras.
3. **Resultado do casamento** — casados, sem contrapartida (com valor e percentual), e a sobra do
   outro lado.
4. **Por competência** — a divergência quase nunca é uniforme no tempo, e o mês que destoa é o
   achado.

**Os quase-pares são achado próprio.** Diferença de centavos entre fatura e sistema (R$ 2.720,16 ×
R$ 2.720,17) não acontece em importação automática, só em digitação. Isole numa aba própria e declare
o critério: tolerância de R$ 0,10, pares consumidos uma vez.

**Declare sempre** o universo de cada lado, o critério de casamento, a tolerância e o que ficou de
fora. Isso vira a aba Critérios do papel de trabalho (ver `papel-de-trabalho`) e transforma limitação
em evidência de rigor.

### 4.1 Quando não existe chave natural, derive a chave do procedimento de cadastro

Há universo em que o documento não existe do outro lado e nenhuma chave de documento fecha. O caso
canônico é o **bem de projeto**: ele nasce do agrupamento de várias notas e é cadastrado pelo valor
total do movimento, então **não tem nota fiscal própria**. Procurar nota ali produz órfão em massa —
e o órfão é falso.

> **A pergunta certa não é "que campos eu tenho", é "como o registro é criado".**

Quem cadastra um bem de projeto digita centro de custo, conta e data; o valor sai do movimento. A
chave é essa trinca, e ela está no **procedimento**, não na base.

Três regras que vieram de aprender isso do jeito difícil:

1. **Teste a chave no nível de agregação em que o sistema opera**, não no nível em que o seu modelo
   pensa. Se o cadastro não carrega o projeto, o casamento **não pode** ser por projeto: dois
   projetos que ativam no mesmo dia, no mesmo centro de custo e conta, casam **somados**.
2. **Falha num único caso não invalida a chave.** Antes de descartar, verifique se o que falhou é
   agregação, e não chave errada. Descartar chave boa custa mais do que testá-la mais uma vez.
3. **Órfão em massa é suspeita de chave faltando**, não de base incompleta. Se a régua nova
   reetiqueta centenas de linhas **sem mover um centavo** do ajuste, o defeito era de leitura, não de
   dado — e essa é a assinatura de chave ausente.

**Chave nova entra como passada terminal**, depois das anteriores, nunca afrouxando parâmetro de
régua já rodada: afrouxar altera todo par já casado e desfaz, em silêncio, casamento que estava
certo. A prova de não regressão é reexecutar o que já fechava e comparar número a número.

## 5. Bateria de testes para base financeira

Não é checklist a cumprir cego. Escolha o que a base sustenta e **diga o que não deu para testar**.

**Inventário e segregação.** Quantos instrumentos (cartões, contas, usuários)? Quem é titular, quem
gasta, quem paga, quem aprova? A separação entre quem paga e quem gasta é achado forte: um titular
com zero compras e apenas os débitos automáticos da fatura significa que **quem paga não é quem
gasta** — e o nome pode não estar nem na base de colaboradores.

**Contorno de processo.** Quanto do valor caiu em naturezas que exigiriam requisição, cotação, pedido
e recebimento? Num mandato, 53,9% do valor em 946 compras. É a quantificação do bypass, e costuma ser
o número que mais impressiona o Conselho.

**Pulverização.** Compare o ticket médio contra a base principal. Num caso: 4,5% do valor mas 15,3%
das transações, com ticket 70,6% menor. Prova o canal de gasto pulverizado.

**Custo financeiro e de titularidade.** IOF, anuidade, juros, multa, tarifa, saque. Separe do gasto
operacional: é despesa sem contraprestação.

**Parcelamentos.** Agrupe por (empresa, banco, final, data de origem, estabelecimento sem a marcação
`n/N`) e calcule `restantes = N − última_parcela_vista`. O compromisso que **vence depois do período
auditado** é o número que interessa ao Conselho, porque é obrigação assumida e ainda não registrada.

**Demais cortes:** recorrência, fim de semana, internacional, pessoa física, indício de uso pessoal,
duplicidade, completude documental (nota, comprovante), favorecido divergente do fornecedor,
fornecedor × colaborador (CPF/CNPJ, endereço, conta), integridade de cadastro (CNPJ em branco,
duplicado, genérico, ID repetido).

Sobre o teste de fim de semana, uma cautela: em empresa cuja diretoria trabalha sábado e domingo, o
dia da semana isolado **não é achado**. Depure parcela repetida e cobrança automática antes de
reportar qualquer número.

## 6. Amostragem

Diga sempre: universo, tamanho, critério de seleção e por quê. Os critérios em uso:

- **Dirigida por risco** — maiores valores, naturezas sensíveis, fornecedor sem contrato, favorecido
  divergente.
- **Por classe ou canal** — 5 a 10 por tipo, quando o objetivo é entender o processo.
- **Volumétrica** — quantidade fixa por teste, calibrada pela régua frequência × risco de
  `programa-de-testes`.
- **Universo completo** — quando é contável, conte tudo. Não amostre o que dá para fechar a 100%.

## O que entregar

1. A base tratada, com o universo declarado e a reconciliação contra total independente fechada.
2. O mapa de classificação com o resíduo medido e reportado.
3. Quando houver cruzamento, os quatro quadros e a aba de quase-pares.
4. O critério de casamento por extenso: chave, tolerância, consumo de pool, o que ficou fora.
5. A amostra com universo, tamanho, critério e justificativa.
6. A lista explícita do que **não** foi possível testar e por quê.

Onde gravar cada produto: base tratada e extração intermediária em `~~arquivos gerados`; papel de
trabalho formal em `~~pasta de trabalho`; script no scratchpad da sessão, **nunca** na pasta do
cliente, que é somente leitura (regra R1).

## Próximo passo

`papel-de-trabalho`, para formalizar a evidência com capa, aba de critérios e rastreabilidade. Se o
tratamento revelou que o teste previsto não se sustenta na base disponível, volte a
`programa-de-testes` antes de executar.
