---
titulo: A planilha de contagem e o roteiro do dia
---

# A planilha de contagem e o roteiro do dia

Mecânica de campo do inventário físico. O que decide o teste está em `acuracidade-e-inventario`;
aqui está o que faz a contagem render no dia e a apuração fechar depois.

Tudo abaixo vem de trabalho real de inventário conduzido pela casa. Os nomes de coluna são
adaptáveis ao ERP do cliente, a lógica não.

## 1. A planilha, coluna a coluna

Três blocos de colunas, nesta ordem, e a ordem importa porque o contador preenche da esquerda para a
direita com a prancheta apoiada no joelho.

### Bloco 1: o que identifica o item e o local

| Coluna | Para que serve |
|---|---|
| Unidade | Separa filial, planta ou CNPJ quando há mais de um |
| Código do local | Chave curta e estável do local, do tipo bloco ponto sala. É a chave de agrupamento da recontagem |
| Localização | O nome legível do local, para o contador achar o corredor |
| Tipo do item | Categoria curta e fechada (cadeira, mesa, notebook, cabo). É o que permite agrupar sem depender da descrição longa |
| Descrição | O padrão estruturado, ver §2 |
| Etiqueta ou código do item | O identificador individual. Etiqueta ausente ou ilegível é ocorrência, não é item novo |
| Etiqueta nova | Preenchida quando o item recebe identificação no ato da contagem |

### Bloco 2: o que vem do sistema, para confronto

Saldo ou quantidade do sistema, unidade de medida, grupo e subgrupo, data de aquisição ou de
entrada, número do documento fiscal de origem, valor unitário, valor total. Estas colunas vêm
preenchidas na planilha de apuração e **ficam ocultas na planilha de campo da primeira contagem**.

### Bloco 3: o que a contagem produz

| Coluna | Para que serve |
|---|---|
| Quantidade contada | O número medido |
| Estado de conservação | Vocabulário fechado (bom, regular, ruim, inservível). Alimenta `obsolescencia-e-provisao` |
| Data da contagem | Obrigatória. Sem ela, não se distingue primeira de segunda contagem nem se apura o corte |
| Equipe | Identificação da dupla por código, nunca por nome de pessoa no papel de trabalho publicado |
| Segunda contagem | Marca se a linha pertence à contagem cega |
| Contagem duplicada | Marca o item que apareceu em duas folhas, para não ser somado duas vezes |
| Ocorrência | Vocabulário fechado, ver §3 |
| Observação | Texto livre, e só isso. Nada que precise ser somado ou filtrado entra aqui |
| Descrição anterior | O valor do sistema, preservado ao lado do novo |
| Local anterior | O valor do sistema, preservado ao lado do novo |

**As duas últimas são a coluna mais subestimada da planilha.** Preservar o valor antigo ao lado do
novo, em vez de sobrescrever, é o que permite apurar a divergência de descrição e de local depois,
sem voltar à base original. Sobrescrever destrói a evidência.

## 2. O padrão de descrição, e por que ele se valida por máquina

Descrição livre impede o casamento e produz o par falta e sobra falso. O padrão que funciona é
estruturado por atributo, com separador fixo:

```
TIPO | MARCA | MODELO | CARACTERÍSTICA | COR
CADEIRA | FABRICANTE A | MODELO 4711 | ASSENTO ESTOFADO 46 CM | CINZA
CABO DE REDE | FABRICANTE B | CAT6 | ROLO 305 M | AZUL
```

Atributo ausente deixa o campo vazio, e o separador permanece. Isso dá um teste mecânico que roda
sobre a planilha inteira e custa uma fórmula: **contar os separadores de cada linha**. Toda linha
tem de ter exatamente quatro. Linha com três perdeu um atributo, linha com cinco tem separador
dentro do texto. O teste pega o erro de digitação no mesmo dia, enquanto o item ainda está no
corredor, e não na consolidação três semanas depois.

Vale manter duas colunas de descrição lado a lado, a do sistema do cliente e a capturada em campo,
com uma coluna de comparação. A diferença entre as duas é a medida da qualidade do cadastro, e ela
entra no relatório por conta própria.

## 3. O vocabulário fechado de ocorrência

Sem lista fechada em validação de dados, o mesmo fato entra como cinco valores diferentes, com
caixa alta, caixa baixa e espaço no fim, e a apuração por tabela dinâmica deixa de funcionar. Esse
erro custa um dia de saneamento por semana de contagem.

| Ocorrência | O que significa | Para onde vai |
|---|---|---|
| Conforme | Contado igual ao sistema, no local esperado | Numerador da acuracidade |
| Divergência de quantidade | Contado diferente do sistema | Apuração de falta e sobra |
| Local errado | Item existe, está em local diferente do registrado | Não é perda. É falha de controle de movimentação |
| Descrição divergente | Item existe, descrição do sistema não corresponde ao físico | Falha de cadastro |
| Descrição e local divergentes | As duas acima | Falha de cadastro e de movimentação |
| Item novo | Encontrado em campo, sem registro no sistema | Sobra. Vai para recontagem dirigida antes de virar achado |
| Sem etiqueta | Item identificado no sistema, sem identificação física | Falha de identificação, não é item novo |
| Reetiquetado | Item que recebeu identificação nova no ato | Controle de rastreabilidade |
| Não localizado | Consta no sistema, não encontrado | Falta. Vai para recontagem dirigida |

Duas regras de operação: a coluna é **lista suspensa**, não texto livre; e **item novo e não
localizado não viram achado antes da recontagem dirigida**, porque essas duas ocorrências são
justamente as que a segunda passagem mais derruba.

## 4. O roteiro do dia

**Véspera**

1. Fixar e registrar o corte: número do último documento de entrada e do último de saída.
2. Congelar a base do sistema e guardar a cópia, com data e hora da extração.
3. Imprimir as folhas de campo por local, sem o saldo do sistema.
4. Conferir o kit: prancheta, trena ou balança quando houver granel, leitor de código quando houver,
   etiquetas em branco, caneta que escreva em pé.
5. Fechar a escala de duplas, com o rodízio, e a regra de que ninguém conta a área que custodia.

**Abertura**

6. Reunião curta com as equipes: o padrão de descrição, o vocabulário de ocorrência, o que fazer com
   item duvidoso (marca a ocorrência e segue, não decide no corredor).
7. Confirmar em campo que a movimentação está suspensa e que a área de recebimento está segregada.

**Durante**

8. Varredura por local, do fundo para a porta, local esgotado antes de passar ao seguinte.
9. Folha entregue e conferida quanto ao preenchimento no fim de cada local, não no fim do dia.
10. Registro de qualquer movimentação ocorrida durante a contagem, com hora e documento.
11. Reperformance do auditor: contagem própria de uma seleção, no momento, sem avisar qual.

**Fechamento do dia**

12. Digitação no mesmo dia, com conferência por segunda pessoa.
13. Rodar os testes mecânicos: contagem de separadores da descrição, duplicidade de etiqueta, linha
    sem quantidade, ocorrência fora da lista.
14. Apurar a lista de recontagem dirigida do dia seguinte, por bloco físico, e não por item solto.

**Depois**

15. Segunda contagem cega dos itens selecionados, por equipe distinta, com folha em branco.
16. Recontagem dirigida dos itens em que primeira e segunda não fecharam.
17. Apuração da divergência e dos dois indicadores de acuracidade.
18. Ata de encerramento, com a data-base, o universo coberto e as assinaturas.

## 5. Versionamento da consolidação

A consolidação passa por várias versões antes de fechar, e cada uma corrige um lote de divergências
de identificação. Duas disciplinas evitam o retrabalho que isso costuma gerar:

- **Uma versão por evento, com data no nome do arquivo e registro do que mudou.** Versão que corrige
  duas coisas ao mesmo tempo impede saber qual correção produziu qual efeito na acuracidade.
- **A versão em que o indicador foi calculado fica congelada e é a que vai ao papel de trabalho.**
  Indicador recalculado sobre versão posterior, sem refazer o caminho, produz número que não
  reconcilia com o relatório, e é o tipo de inconsistência que o cliente encontra primeiro.
