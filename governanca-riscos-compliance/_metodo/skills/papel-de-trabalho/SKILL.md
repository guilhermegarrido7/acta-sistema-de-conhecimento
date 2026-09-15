---
name: papel-de-trabalho
description: Monte e atualize papel de trabalho de auditoria com capa, evidência, critérios e resultado rastreáveis. Acionar ao abrir um WP novo, ao estruturar abas de evidência, ao registrar critério de teste, ao consolidar o resultado de um teste executado, ou ao arquivar versões de um WP.
---

# Papel de trabalho: estrutura, evidência e arquivamento

Carregue `metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não
são repetidas.

## Papel desta skill

O papel de trabalho é o **repositório da evidência**: se o número está no relatório, ele tem de ser
reconstituível aqui. A formulação da casa é literal — *registre no papel de trabalho, tudo tem que
ficar lá*.

Um WP bem feito não é uma planilha bonita: é uma planilha que **outra pessoa reproduz sem perguntar
nada**. Tudo nesta skill existe para isso.

Comece sempre pelo gabarito estrutural da casa: **copie o modelo e altere valores de célula**, não
recrie o arquivo do zero, senão perde fonte, cores institucionais e dimensões.

## 1. Código e nome do arquivo

```
WP.<PROCESSO>.<NN>
```

A abreviação do processo segue o processo **do cliente**; não invente sem confirmar (regra R8).
Abreviações em uso incluem `PESS` (Pessoal), `CP` (Contas a Pagar), `CR` (Contas a Receber), `CC`
(Cartões Corporativos), `AR` (Auditoria de Receitas), `IMOB` (Imobilizado).

Nome do arquivo: `<CÓDIGO> - <Descrição curta>.xlsx`, por exemplo
`CC.01 - Cartões Corporativos (natureza e controles).xlsx`.

Destino: a pasta de papéis de trabalho do engajamento (`~~pasta de trabalho`), organizada por etapa e
processo. **Nunca** na pasta de arquivos recebidos do cliente, que é somente leitura (regra R1).

## 2. A aba `WP`: a capa

Estrutura fixa, rótulos na coluna C e valores na coluna D:

```
PAPEL DE TRABALHO - AUDITORIA INTERNA
Processo:                <processo, subprocesso (empresas envolvidas)>
CÓDIGO WP                <WP.XXX.NN>
Preparado por:           ACTA Advisory
Data preparação:         dd/mm/aaaa
Revisado por:            <o revisor de WP do engajamento>
Data revisão:
Período de escopo:       dd/mm/aaaa a dd/mm/aaaa

Documentos Analisados:   quais arquivos, quantos, de onde vieram
Descrição do teste:      "Verificar a existência de ... contemplando ..."
Aspectos identificados:  o resultado, no padrão de redacao-de-achados
Recomendação:            (i) ... (ii) ... (iii) ...
Testes relacionados:     códigos de outros WPs e do programa de testes
Resultado:               <vocabulário fechado, abaixo>

© <ANO> ACTA Advisory. Todos os direitos reservados.   Informações confidenciais.
```

O rodapé do modelo vem preenchido com o cliente anterior — **adapte sempre** ao cliente do mandato.

**Campo Resultado: vocabulário fechado.** Escolha exatamente um valor. Duas colunas, porque são duas
perguntas diferentes:

| Conclusão de controle | Status do trabalho |
|---|---|
| Eficaz | Concluído |
| Parcialmente Eficaz | Concluído com Apontamentos |
| Ineficaz | Inconclusivo, Pendente Documentação |
| Não Aplicável | Não Conformidade Identificada |

A separação entre as duas colunas é a regra R6 (desenho ≠ efetividade) virando estrutura. A fonte
canônica do vocabulário de conclusão é `programa-de-testes`; aqui ele é aplicado.

**`Aspectos identificados` é o campo que vira o ponto do relatório.** Escreva-o no padrão de
`redacao-de-achados`, com número exato e referência. O nível esperado, num exemplo com valores
ilustrativos:

> "Verificamos 1.800 lançamentos nas 74 faturas do período, dos quais 1.636 são compras, totalizando
> R$ 870 mil. Identificamos 13 cartões ativos, sendo uma única portadora responsável por 92,8% do
> valor, e um titular sem qualquer compra cujo cartão registra apenas os débitos automáticos de
> fatura (31,1% do total): quem paga não é quem gasta, e o titular não consta na base de
> colaboradores."

Note o que o exemplo faz: número exato, percentual sem arredondar para "cerca de", e a conclusão
extraída do número na mesma frase.

## 3. Abas de evidência

Numere `T1`, `T2`, … `Tn`, com nome curto e falante: `T4 Natureza`, `T8 Parcelamentos`,
`T15 Conciliação`, `T21.1 Fatura sem contrapartida`. Uma aba por teste ou por corte de análise. Um WP
já chegou a 27 abas — e isso é bom: **cada número do slide tem uma aba que o reconstrói**.

Padrão visual de cada aba:

```
A1        título da aba      Arial 12/13 bold, preto            ← NÃO mesclar
A2        subtítulo/método   Arial 9 itálico, cinza 595959      ← universo, critério, tolerância
linha 4   cabeçalho          Arial 9 bold branco sobre 167D73, centralizado, wrap, borda
linha 5+  dados              Arial 9 preto, zebra F7F7F7 nas ímpares, borda BFBFBF
TOTAL     totalizador        negrito, fundo E6E6E6
```

Mais: `freeze_panes` na primeira linha de dados; `auto_filter.ref` quando a aba é lista longa;
`sheet_view.showGridLines = False`; larguras ajustadas; `wrap_text` só nas colunas de texto livre;
formato `#,##0.00` para valor, `#,##0` para quantidade, `0.0%` para percentual.

### Nunca use célula mesclada em papel de trabalho

É regra dura, e a razão é operacional: mesclagem trava fórmula, ordenação, filtro e `freeze_panes`.
A preferência declarada da casa é **deixar sem gridlines e deixar o texto atravessar as células**.

Consequências práticas:

- **Título e subtítulo não se mesclam.** Com `showGridLines = False`, o texto atravessa as células
  vizinhas e fica com a mesma aparência, sem o custo.
- **Faixa de seção não existe como linha mesclada.** Para agrupar linhas por bloco, isso é **uma
  coluna** `Bloco` com o valor repetido em cada linha. Ganho extra: o bloco passa a ser filtrável e
  ordenável, o que a faixa nunca foi.
- **Régua e matriz com "célula que ocupa várias linhas"**: repita o valor em todas as linhas.
  Repetição é barata; mesclagem custa a planilha inteira.
- Ao **atualizar** WP com mesclagem herdada, desfaça (`ws.unmerge_cells`) antes de escrever, e avise
  que desfez.

Verifique antes de publicar, em **todas** as abas:

```python
assert not ws.merged_cells.ranges
```

### Cores

A paleta institucional é da firma, não da auditoria — a fonte definitiva será
`acta-way:identidade-visual` quando essa skill existir. O que é específico do papel de trabalho, e
fica aqui, é a **aplicação em Excel**:

| Uso | Cor |
|---|---|
| Verde institucional, **único verde do arquivo** | `167D73` — cabeçalho de tabela, rótulo de capa |
| Preto, **também cor da casa e preferido a variações do verde** | `000000` — título, texto de dado |
| Cinza neutro, zebra | `F7F7F7` |
| Cinza neutro, borda | `BFBFBF` |
| Cinza neutro, destaque e total | `E6E6E6` |
| Cinza de subtítulo | `595959` |
| Coluna acrescentada depois | `FBF4E6` (creme, para o revisor enxergar o que mudou) |

**Nunca use tinta derivada do verde institucional.** Onde caberia um verde claro, use cinza neutro;
onde caberia verde médio para dar peso, use **preto**. A única exceção é o semáforo, que é farol e
não decoração:

| Status | Fundo | Fonte |
|---|---|---|
| Vermelho, não implementado | `FFC7CE` | `9C0006` |
| Âmbar, parcial | `FFEB9C` | `9C5700` |
| Verde, implementado | `C6EFCE` | `276221` |
| Cinza, não testado | `D9D9D9` | `595959` |

Armadilhas de openpyxl e de ambiente (inclusive por que `auto_filter.ref` junto com `add_table()`
corrompe o arquivo) vivem em `acta-way:ambiente-tecnico`.

## 4. A aba `Critérios`: o que separa WP de planilha

Toda análise que envolve extração, classificação ou cruzamento ganha uma aba final registrando o
método. É ela que permite outra pessoa — ou você mesmo daqui a três meses — reproduzir o número, e é
ela que transforma limitação em **evidência de rigor** em vez de lacuna.

Registre:

- **Origem** — quais arquivos, quantos, de qual pasta, com qual data.
- **Universo** — total de linhas, quantas são transação, o que foi excluído e por quê (ex.: "48
  linhas de totalização de fatura excluídas da soma e capturadas em separado para conciliação").
- **Critério de classificação** — as regras de natureza na ordem em que são aplicadas, e o resíduo
  não classificado com o percentual.
- **Critério de casamento** — chave, tolerância, consumo de pool, o que conta como quase-par (ver
  `bases-e-conciliacao` §4).
- **Limitações** — o que não foi possível testar e o que precisa ser solicitado.
- **Ressalva metodológica** — quando aplicável, por exemplo política emitida após o período auditado.

## 5. Atualizar um WP existente

Cenário frequente: o auditor já mexeu no arquivo, ou pede para acrescentar um teste a um WP fechado.

1. **Copie para o scratchpad e trabalhe na cópia.** O arquivo original costuma estar aberto.
2. **Leia o estado atual antes de escrever.** Pode haver aba renomeada, número ajustado, observação
   incluída. **A versão do auditor prevalece** — edição manual é soberana.
3. **Acrescente, não substitua.** Nova aba `Tn` no fim; atualize a capa (`Aspectos identificados`,
   `Recomendação`, `Testes relacionados`) para refletir o teste novo.
4. **Propague o número.** Se o teste novo altera valor que já está no relatório ou na matriz, corrija
   nos dois no mesmo passo. Número corrigido num lugar e velho no outro é **pior que o erro
   original**.
5. **Releia o arquivo salvo por caminho independente** antes de publicar — cache de sincronização
   mente.
6. Publique e informe quantas abas o WP passou a ter e o que mudou.

Quando houver mais de um WP cobrindo a mesma coisa, unifique — e, ao unificar, **corrija as
referências cruzadas** nos outros WPs e no programa de testes. Unificar e deixar referência velha já
custou um passe inteiro de revisão.

## 6. WP que nasce de análise do próprio auditor

Às vezes a análise já foi feita à mão e o pedido é "suba isso como WP". Nesse caso:

- **Preserve integralmente a análise como aba de evidência.** Não refaça o cálculo por cima.
- **Confira e reconcilie por fora.** Se divergir, **mostre a divergência** em vez de corrigir em
  silêncio — a hipótese do revisor também se testa.
- Escreva a capa, o `Aspectos identificados` e a `Recomendação`, e mapeie quais testes do programa
  esse WP cobre.

## 7. Arquivamento de versões

A regra de nunca sobrescrever produz muitas versões: um WP na v7, outro na v4, outro na v39. Sem
arquivamento, a pasta fica ilegível justamente quando o entregável precisa ser achado.

```
~~pasta de trabalho/
  <TIPO>/
    WP.<TIPO>.<NN> - <nome> v<N>.xlsx     ← a versão VIGENTE, solta na pasta do tipo
    WP.<NN>/                               ← o HISTÓRICO daquele WP
      WP.<TIPO>.<NN> - <nome> v1.xlsx
      ...
```

**A mecânica:** grava a `v<N+1>` na pasta do tipo e **move a `v<N>`** para a pasta de histórico. A
pasta do tipo tem sempre exatamente uma versão de cada WP, a vigente. Quem abre a pasta vê o
entregável, não o histórico.

Três restrições que já custaram retrabalho:

- **O limite de 255 caracteres de caminho no Windows é restrição, não detalhe.** Meça o caminho de
  destino mais longo antes de mover. Se estourar, encurte o **nome do arquivo** — nunca abandone o
  arquivamento.
- **Arquivo aberto no Excel não se move** (`PermissionError WinError 32`). O desenho já evita o
  problema: a versão vigente, que é a que costuma estar aberta, fica solta e não precisa ser movida.
  Ao mover histórico, trate o erro por arquivo e reporte quais ficaram.
- **WP por instância precisa de um nível a mais.** Quando o WP é um arquivo por entidade — um por
  centro de custo, um por projeto, um por conta —, a pasta de histórico recebe centenas de arquivos
  por versão e o remédio vira a doença. Num mandato, um WP por centro de custo acumulou milhares de
  arquivos em 30 versões. Nesse caso, uma subpasta por versão (`v30/`, `v29/`) dentro da pasta do WP.

**O que não se move:** pasta de outro auditor, arquivo recebido do cliente, e nada que outra frente
esteja consumindo. Mover é irreversível: liste antes e peça confirmação.

## O que entregar

1. O WP com capa completa, `Resultado` no vocabulário fechado e `Aspectos identificados` no padrão de
   redação.
2. As abas de evidência no padrão visual, sem uma única célula mesclada (com o `assert` rodado).
3. A aba `Critérios` preenchida — origem, universo, critérios, limitações, ressalvas.
4. As referências cruzadas para os outros WPs e para o programa de testes, conferidas nos dois
   sentidos.
5. O arquivamento da versão anterior feito, com a pasta do tipo contendo só a vigente.

## Próximo passo

`redacao-de-achados`, para converter `Aspectos identificados` em ponto de auditoria com condição,
risco, recomendação e severidade. Se o WP revelou que o teste previsto não se sustenta, volte a
`programa-de-testes`.
