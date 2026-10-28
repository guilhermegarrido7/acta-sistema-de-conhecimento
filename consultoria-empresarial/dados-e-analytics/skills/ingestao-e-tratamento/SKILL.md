---
name: ingestao-e-tratamento
description: Traga a base crua ao formato analisável, normalizando moeda, data, formato e classificando o lançamento a partir da descrição. Acionar ao tratar extrato de cartão ou banco, ao normalizar base multimoeda ou multiformato, ao classificar despesa por descrição livre, ou ao padronizar lançamentos de fontes diferentes para uma base única.
---

# Ingestão e tratamento

Carregue `acta-metodo-consultoria:mapeamento-as-is` antes desta skill (base reconstruída, flag e
override documentados). Tratamento de dado é onde o projeto de
analytics ganha ou perde a confiança do número: uma base mal tratada produz análise sofisticada sobre
lixo. Em mid-market, esta é a etapa mais longa e a que o cliente mais subestima.

A regra que atravessa tudo: **toda transformação é rastreável e reversível.** Nunca sobrescreva o dado
bruto. A base crua fica preservada, e o tratamento é uma camada que se pode auditar e refazer — o
mesmo princípio da planilha-mestre com célula rastreável à origem do `acta-metodo-consultoria`.

## 1. As quatro normalizações

Base crua de fontes diferentes chega incompatível em quatro dimensões. Normalize as quatro antes de
qualquer soma, porque somar dado não normalizado produz número plausível e errado.

| Dimensão | Problema típico | Normalização |
|---|---|---|
| **Moeda** | Lançamentos em BRL e em moeda estrangeira na mesma base | Converter pela taxa da data do lançamento, guardando o valor original e a taxa usada |
| **Data** | Formatos mistos (dd/mm/aaaa, serial do Excel, texto), fuso | Padronizar para data ISO, declarando o fuso quando relevante |
| **Formato de número** | Separador decimal e de milhar trocados, texto em célula numérica | Converter para número, sinalizando o que não converteu em vez de descartar |
| **Estrutura** | Cada fonte com colunas e ordem próprias | Mapear para um esquema único de colunas antes de empilhar |

**O erro de moeda é o mais caro e o mais silencioso:** converter tudo por uma taxa única de
fechamento, em vez da taxa da data de cada lançamento, distorce o valor e ninguém percebe até o total
não bater com a contabilidade. Guarde sempre o valor original ao lado do convertido.

## 2. Classificação a partir de descrição livre

O caso mais comum e mais trabalhoso: a base traz uma descrição livre ("MERCADO LIVRE", "CLIMARIO",
"TRES CORACOES ALIMENTOS") e é preciso classificar cada lançamento numa categoria gerencial e num
centro de custo. É aqui que a lente AI-first muda a economia do trabalho (seção 4).

A disciplina da classificação:

1. **Dicionário de classificação, não regra ad hoc.** Monte um mapa de "descrição → categoria",
   crescente, para que a mesma descrição sempre caia na mesma categoria. Classificar lançamento a
   lançamento de memória produz inconsistência que a análise depois expõe.
2. **O que não se classifica com confiança vira "a classificar", não um chute.** Uma categoria de
   exceção visível é honesta; um lançamento jogado numa categoria plausível é erro que se propaga.
3. **A classificação é revisável pelo cliente.** Quem conhece o gasto é quem o fez; a classificação
   final tem aceite de quem tem o contexto.

## 3. O tratamento de lançamento problemático

| Problema | Tratamento |
|---|---|
| Duplicata (mesmo lançamento em dois extratos) | Identificar por chave (data + valor + descrição) e marcar, não apagar em silêncio |
| Estorno / reembolso | Manter com sinal correto; estorno que vira entrada positiva infla a base |
| Lançamento sem valor ou sem data | Sinalizar como inválido e excluir da análise **com registro**, nunca descartar calado |
| Valor negativo onde se espera positivo | Investigar antes de tratar: pode ser crédito legítimo ou sinal trocado |

A regra do `acta-metodo-consultoria` vale integralmente: anomalia se trata por **flag e override
documentado**, não por conserto silencioso. A base tratada carrega uma coluna que diz o que foi feito
com cada lançamento que não entrou cru.

## 4. A lente AI-first: o ETL agêntico

Esta é a etapa onde a consultoria AI-first mais se distancia da tradicional. Normalizar centenas de
lançamentos, classificar por descrição, identificar duplicatas e estornos é precisamente o trabalho
que tornava o tratamento de dados caro e demorado em mid-market — e é o que o agente executa bem: ele
aplica as quatro normalizações, propõe a classificação por descrição contra o dicionário, e sinaliza
o que não classificou com confiança. **O julgamento humano fica na validação da classificação
ambígua e na decisão sobre o lançamento anômalo** — manter, excluir, investigar. O agente entrega a
base tratada com a coluna de tratamento; o responsável aceita antes de ela virar insumo de análise.

O que não muda com o agente: a rastreabilidade. A base bruta é preservada, e o tratamento é uma
camada auditável. Agente que sobrescreve o dado cru é tão errado quanto consultor que o faz.

## O que entregar

1. A base tratada num esquema único de colunas, com as quatro normalizações aplicadas (moeda, data,
   formato, estrutura).
2. O valor original preservado ao lado do normalizado, com a taxa de conversão quando houver moeda.
3. O dicionário de classificação (descrição → categoria → centro de custo), crescente e reaproveitável.
4. A coluna de tratamento, dizendo o que foi feito com cada lançamento que não entrou cru (duplicata,
   estorno, inválido, a classificar).
5. A base bruta preservada, intocada, ao lado da tratada.

## Próximo passo

`qualidade-e-validacao`, porque a base tratada ainda não é confiável até provar que está completa,
consistente e reconcilia com uma fonte autoritativa.
