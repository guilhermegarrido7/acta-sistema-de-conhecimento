---
name: reforma-tributaria
description: Mapear os tributos de um alvo a partir de 2027, do setor, da operação e do regime até a alíquota, o crédito e o caixa, com artigo da norma e data de corte. Acionar ao projetar IBS, CBS e Imposto Seletivo, ao tratar aluguel ou operação intragrupo, ao modelar consórcio, ou ao conferir se a premissa ainda vale.
---

# Reforma tributária: do setor ao parâmetro, com data de corte

> **Skill atualizada até 17/11/2026.** A posição jurídica e os parâmetros foram conferidos nessa data.
> **Toda resposta que usar esta skill abre informando a data de corte** e pede ao usuário que confira
> a lista "O que conferir antes de usar", ao fim deste arquivo, porque a regulamentação ainda se
> move. Parâmetro sem data e sem fonte não entra no modelo.

## Papel desta skill

**Oráculo. Não escreve na planilha.** Dado o setor, a operação e o regime do alvo, aponta quais
tributos incidem, a alíquota ou a faixa defensável, o mecanismo (débito, crédito, split payment,
ressarcimento) e o calendário de 2026 a 2033. Contesta a premissa tributária do modelo. Quem digita é
o analista.

**Não substitui parecer tributário.** Complementa `impostos-e-prejuizos-fiscais`, que trata IRPJ,
CSLL, prejuízo fiscal e a trava de 30%. Esta skill trata os tributos sobre o consumo (IBS, CBS e
Imposto Seletivo) e aponta o que mudou na tributação da renda (Lei 15.270/2025 e LC 224/2025).

## Por que a skill existe separada

A reforma do consumo (EC 132/2023, LC 214/2025 e LC 227/2026) troca PIS, Cofins, ICMS e ISS por CBS e
IBS, zera o IPI (salvo Zona Franca) e cria o Imposto Seletivo. Muda a conta do crédito, do preço e do
capital de giro. A carga de hoje mantida até a perpetuidade é erro, e
o erro vai nos dois sentidos: serviço com muita mão de obra e hoje no PIS e Cofins cumulativo tende a
perder margem, e negócio com muita compra de serviço sem crédito hoje tende a ganhar. O efeito só
aparece depois de classificar cada linha de receita e cada linha de compra.

## Passo 1: entender o alvo, sem supor

Pergunte. Não deduza do setor, do faturamento nem do nome do arquivo.

1. **Setor e atividade.** Classificação de cada linha de receita: NBS para serviço e NCM/SH para bem.
   Sem classificação fiscal não há alíquota.
2. **Operação.** Venda de bem, prestação de serviço, locação (de bem móvel ou imóvel), contrato com
   poder público, exportação, importação, operação com empresa do mesmo grupo.
3. **Regime do contribuinte.** Regime regular de IBS e CBS ou Simples Nacional (com ou sem opção pelo
   regime regular, LC 214/2025, art. 41). Regime de IRPJ de cada empresa do grupo (`impostos-e-prejuizos-fiscais`).
4. **Quem compra.** Contribuinte do regime regular (credita), optante do Simples, consumidor final,
   administração pública (reequilíbrio e redutor de compras públicas).
5. **Estrutura jurídica.** Consórcio, sociedade em conta de participação, condomínio e fundo não são
   contribuintes (art. 26). Quem paga é o consorciado, na proporção, salvo opção pelo regime regular.

## Passo 2: classificar o enquadramento

A alíquota do contribuinte sai da classificação de cada linha, não da alíquota de referência.
Árvore completa, com artigo de cada regime e fichas por setor (ambiental e resíduos, engenharia e
consultoria, transporte, imobiliário, financeiro, saúde e educação, agro, combustíveis):
[references/setor-e-operacao.md](references/setor-e-operacao.md).

Ordem de leitura: não contribuinte e não incidência, depois alíquota-padrão, redução de 30% ou de 60%,
alíquota zero e isenção, crédito presumido, regime específico, Imposto Seletivo.

## Passo 3: os tributos por ente federativo, de 2026 a 2033

| Ente | Hoje | 2026 | 2027 e 2028 | 2029 a 2032 | 2033 |
|---|---|---|---|---|---|
| **União** | PIS, Cofins, IPI | CBS de teste a 0,9%, compensada com PIS e Cofins | CBS no lugar de PIS e Cofins; IPI a zero, salvo Zona Franca; Imposto Seletivo começa | CBS | CBS |
| **União, renda** | IRPJ e CSLL | Retenção de 10% sobre dividendos acima de R$ 50 mil por mês (Lei 15.270/2025). LC 224/2025: corte de 10% nos benefícios federais e acréscimo no lucro presumido sobre a receita acima de R$ 5 milhões (vigência por tributo a confirmar) | Tributação mínima da pessoa física a partir do exercício de 2027 (ano-calendário 2026) | idem | idem |
| **Estados** | ICMS | IBS de teste a 0,1% (parcela estadual) | ICMS integral; IBS estadual a 0,05% | ICMS a 9/10, 8/10, 7/10 e 6/10; IBS repõe | ICMS extinto; IBS pleno |
| **Municípios** | ISS | idem | ISS integral; IBS municipal a 0,05% | ISS a 9/10, 8/10, 7/10 e 6/10; IBS repõe | ISS extinto; IBS pleno |
| **ITCMD** | Lei estadual | Sem mudança | LC 227/2026 institui normas gerais (efeito a confirmar) | idem | idem |

O IBS é um só, de competência compartilhada de Estados, Municípios e Distrito Federal, administrado
pelo Comitê Gestor (LC 214/2025, art. 1º, I). O calendário detalhado, com artigo, está na reference
`impostos-e-prejuizos-fiscais/references/transicao-tributaria-2026-2033.md`, seção 1.

## Passo 4: parâmetros, com data e fonte (posição em 17/11/2026)

| Parâmetro | Valor | Status | Fonte |
|---|---|---|---|
| CBS de 2026 | 0,9% | Em vigor, ano de teste | LC 214/2025, arts. 343 e 346 |
| IBS de 2026 | 0,1% | Em vigor, ano de teste | idem |
| **CBS de referência de 2027** | **11,3468%, arredondado para 11,3%** | **Cálculo do TCU de 28/10/2026. Falta a resolução do Senado (prazo 15/12/2026). Se passar de 22/12, vale o cálculo do TCU** | LC 214/2025, arts. 349 e 353, § 2º; TC 006.529/2026-7 |
| CBS cobrada em 2027 e 2028 | Referência menos 0,1 ponto percentual, ou seja, 11,2% se a referência ficar em 11,3% | **Leitura ACTA**, sem lei específica da União | LC 214/2025, arts. 14, § 3º, e 347 |
| IBS de 2027 e 2028 | 0,1% (0,05% estadual e 0,05% municipal) | Em vigor a partir de 2027 | LC 214/2025, art. 344 |
| IBS de referência de 2029 a 2033 | **Não fixado.** O Comitê Gestor usa 18,7% como parâmetro metodológico | Não é alíquota aplicável | Resolução CGIBS nº 14/2026 (texto não aberto) |
| Redutor de compras públicas de 2027 | 44,16% | Cálculo do TCU, pendente do Senado | LC 214/2025, arts. 349, III, e 473 |
| Soma de CBS e IBS de referência | Próxima de 30% (11,3% mais 18,7%) | Conta de comparação publicada na imprensa. **Não é alíquota fixada** | Conjur, 12/11/2026 |
| Gatilho de 26,5% | Revisão por lei complementar, não teto | Na avaliação quinquenal | LC 214/2025, art. 475, §§ 10 e 11 |
| Redução da referência da CBS se a média 2027 e 2028 exceder o teto | A partir de 2030 | Mecanismo legal | LC 214/2025, art. 368 |
| Alíquotas do Imposto Seletivo de 2027 | Fixadas pela MP 1.399/2026, de 04/11/2026 | Em tramitação | MP 1.399/2026, art. 16 reduz a CBS pela arrecadação do IS |

**Regra de uso.** Caso base com a CBS de 11,3% e a cobrada de 11,2% em 2027 e 2028, marcada como
cálculo do TCU pendente do Senado, e sensibilidade para a faixa de 8,8% a 11,3%. Troque pelo número da
resolução do Senado quando ela sair. O IBS de 2029 em diante entra em faixa, com a fonte e a data, e
nunca como número oficial.

## Passo 5: os mecanismos que movem o valor

O valor se move por três canais, que a modelagem separa: **repasse** ao preço, **crédito amplo** sobre
as compras e **capital de giro**.

| Mecanismo | Regra | Norma |
|---|---|---|
| Crédito amplo | Sobre as aquisições, com documento fiscal idôneo e extinção do débito do fornecedor. Uso ou consumo pessoal fica fora, e o que se usa preponderantemente na atividade não é uso pessoal | arts. 47 e 57 |
| Folha | Não gera crédito. Serviço prestado em relação de emprego não sofre incidência | art. 6º, I |
| Split payment | O tributo é segregado na liquidação financeira. O crédito do adquirente acompanha o pagamento ao fornecedor | arts. 31 a 35 |
| Ressarcimento de saldo credor | 30, 60 ou 180 dias conforme o caso, com correção pela Selic | arts. 39 e 40 |
| Saldos legados | PIS e Cofins compensam a CBS; ICMS homologado compensa o IBS em 240 parcelas | art. 378; ADCT, art. 134 |
| Contrato com poder público | Reequilíbrio quando a carga efetiva muda; revisão de ofício quando cai | arts. 373 a 376 |

Detalhe, conta por ano e perguntas ao cliente: reference de transição, seções 1.2, 1.3, 2.2 a 2.8.

## Passo 6: operações que pedem teste próprio

- **Operação entre partes relacionadas.** O fornecimento a valor abaixo do mercado a parte relacionada
  é tributado (art. 5º, IV), com base no valor de mercado (art. 12, § 4º, IV).
- **Aluguel.** Bem móvel (frota, equipamento) segue o regime regular e a alíquota-padrão. Bem imóvel
  segue o regime específico, com redução de 70% (art. 261, parágrafo único).
- **Consórcio.** Não é contribuinte (art. 26, II). Sem opção pelo regime regular, os consorciados pagam
  na proporção (art. 26, § 3º).
- **Teste de neutralidade.** Sete perguntas que dizem se o tributo indireto sobre o aluguel
  intercompany é neutro ou custo: [references/intercompany-aluguel-consorcio.md](references/intercompany-aluguel-consorcio.md).

**Frota de veículos em 2026.** A Receita Federal entende que veículo não é máquina nem equipamento para
o crédito de PIS e Cofins sobre aluguel. Até 2026, o aluguel de frota entre empresas do grupo pode ser
custo líquido, mesmo com a eliminação no consolidado. A partir de 2027, o crédito amplo tende a
neutralizá-lo. Os dois momentos precisam estar separados no modelo.

## Passo 7: como entra no modelo

1. Projete o tributo sobre a receita ano a ano pelo calendário, e ponha o **ano terminal no regime de
   2033** (IBS e CBS plenos, sem ICMS, ISS, PIS e Cofins, sem benefício de ICMS), mesmo que o
   horizonte explícito termine antes (`valor-terminal`, `impostos-e-prejuizos-fiscais`).
2. O driver é o **preço líquido de tributos**. Receita bruta é consequência.
3. Modele o repasse por tipo de cliente: contribuinte regular (preço líquido preservado), Simples e
   consumidor final (repasse parcial) e poder público (reequilíbrio).
4. Modele o crédito defasado pelo prazo de pagamento ao fornecedor até o regulamento indicar outra
   coisa, e o saldo credor como valor a receber, fora do capital de giro normalizado.
5. Peça ao cliente o plano tributário até 2033. Se o plano parar antes, o terminal usa o regime de
   2033, não a última alíquota do plano.
6. Com repasse integral ao cliente contribuinte, calcule IBS e CBS por fora sobre a receita líquida
   base: receita líquida e EBITDA ficam preservados, e a reforma passa a atuar no capital de giro e na
   base do IRPJ/CSLL, e não no EBITDA.
7. No lucro presumido, a base do IRPJ/CSLL a partir de 2027 é a receita bruta sem IBS/CBS. Registre a
   base legal na nota do modelo.
8. A data do split payment é hipótese do modelo. O texto diz que ela se apoia na primeira etapa B2B e
   que o cronograma de operação plena não está fixado. Fontes e o que vale como indício:
   `impostos-e-prejuizos-fiscais`, reference de transição, seção 1.2.

## Red flags

- PIS e Cofins projetados depois de 2026, ou ICMS e ISS depois de 2032, ou benefício de ICMS no ano
  terminal.
- 27,91%, 9,21% ou a soma de cerca de 30% tratados como alíquota oficial. A CBS de 11,3% tratada como
  fixada sem a resolução do Senado.
- Alíquota aplicada sem classificação NBS ou NCM da linha de receita.
- Redução de 30% aplicada à pessoa jurídica sem conferir os cinco requisitos do art. 127, § 1º, II.
- Eliminação de aluguel intercompany sem conferir preço de mercado, crédito, perímetro e regime atual.
- Consórcio tratado como contribuinte sem conferir a opção pelo regime regular.
- Receita bruta como driver, com margem preservada sem hipótese de repasse.
- Resposta sem a data de corte da skill.
- Data de split apresentada como fato, ou apoiada em nota técnica de outro documento fiscal ou em notícia sem fonte primária.

## O que entregar

1. A data de corte e o resultado da conferência da lista abaixo.
2. O quadro de enquadramento por linha de receita: NBS ou NCM, regime, artigo, alíquota ou faixa, fonte.
3. O regime de cada empresa do grupo e a estrutura jurídica (consórcio, SCP, fundo).
4. O tratamento de operação entre partes relacionadas, aluguel e consórcio, com a condição que sustenta
   a neutralidade ou o custo.
5. O calendário ano a ano aplicado ao modelo, com a fonte e a data de cada parâmetro.
6. As perguntas pendentes ao cliente e os pontos a confirmar com a assessoria tributária.

## O que conferir antes de usar

Esta skill só vale até a data de corte. Antes de usar, confira:

1. **Resolução do Senado** com a CBS de referência e o redutor de compras públicas (prazo 15/12/2026).
2. **MP 1.399/2026** e a lei de conversão (Imposto Seletivo e efeito na CBS).
3. **Atos do CGIBS e da Receita Federal** e os regulamentos (Decreto 12.955/2026; Resolução CGIBS nº 6/2026).
4. **Decisões do STF e dos TRFs** (Lei 15.270/2025, LC 224/2025, Tema 1.401) e eventuais ações contra a
   LC 214 e a LC 227.
5. **Novas alterações da LC 214.** A LC 227/2026 mexeu em mais de 700 dispositivos.

Fontes, decisões e o que não foi encontrado:
[references/fontes-e-jurisprudencia.md](references/fontes-e-jurisprudencia.md).

## Próximo passo

`impostos-e-prejuizos-fiscais` para IRPJ, CSLL e prejuízo fiscal. `projecao-e-cenarios` para o repasse
e o reequilíbrio. `capital-de-giro-e-capex` para split payment e saldo credor. `valor-terminal` para o
ano terminal em 2033.
