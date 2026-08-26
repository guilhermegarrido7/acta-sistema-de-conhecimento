---
name: dashboard-powerbi
description: >
  Construção do painel interativo entregável em Power BI: modelo de dados, medidas
  DAX, páginas, filtros, segurança e publicação. Acionar na atividade de modelagem
  do dataset, escrita de medidas, desenho das páginas do painel e treinamento dos
  usuários do cliente.
---

# Painel Power BI

## 1. Modelo de dados

Esquema estrela. Uma tabela fato, dimensões conectadas por relacionamento um para
muitos, direção única. Não usar relacionamento bidirecional, é a principal causa de
medida com resultado inexplicável.

```
Dim_Cargo (cod_cargo)  ─┐
Dim_Empresa (cod_empresa)─┤
Dim_Recorte (recorte)   ─┼──> Fato_Remuneracao (grão: cargo x empresa x recorte)
Dim_Unidade (unidade)   ─┤
Dim_Beneficio           ─┘
                            Fato_Cliente (grão: cargo x unidade)  <- Dim_Cargo, Dim_Unidade
```

Decisões de modelagem:

- **Carregar `B6_BASE_TRATADA`, não `B7_ESTATISTICAS`.** O Power BI calcula os
  percentis dinamicamente, o que é o que permite ao usuário filtrar por recorte e
  ver a estatística recalculada. Carregar apenas o resultado pré-agregado mata a
  interatividade, que é o requisito do entregável.
- **Fato_Cliente separado do fato de mercado.** Naturezas distintas. Uni-los na mesma
  tabela obriga a filtrar tudo por um campo de origem e complica toda medida.
- **`Dim_Cargo` é a ponte** entre os dois fatos. É o que permite comparar o cliente versus
  mercado no mesmo visual.
- **Nunca expor `nome_empresa`** no modelo publicado. Somente `cod_empresa`, e
  apenas em medidas de contagem. Se o nome não está no modelo, não pode vazar por
  drill-through, exportação ou tooltip.

## 2. Medidas DAX essenciais

```dax
n Empresas = DISTINCTCOUNT(Fato_Remuneracao[cod_empresa])

n Incumbentes = SUM(Fato_Remuneracao[n_incumbentes])

Amostra Suficiente =
IF([n Empresas] >= 12, "Completa",
   IF([n Empresas] >= 8, "Parcial",
      IF([n Empresas] >= 5, "Limitada", "Insuficiente")))

Mediana Mercado =
VAR n = [n Empresas]
RETURN IF(n >= 5, MEDIAN(Fato_Remuneracao[salario_normalizado]), BLANK())

Q1 Mercado =
IF([n Empresas] >= 8, PERCENTILE.INC(Fato_Remuneracao[salario_normalizado], 0.25), BLANK())

Q3 Mercado =
IF([n Empresas] >= 8, PERCENTILE.INC(Fato_Remuneracao[salario_normalizado], 0.75), BLANK())

Minimo Mercado =
IF([n Empresas] >= 12, MIN(Fato_Remuneracao[salario_normalizado]), BLANK())

Maximo Mercado =
IF([n Empresas] >= 12, MAX(Fato_Remuneracao[salario_normalizado]), BLANK())

Media Ponderada Mercado =
DIVIDE(
    SUMX(Fato_Remuneracao, Fato_Remuneracao[salario_normalizado] * Fato_Remuneracao[n_incumbentes]),
    SUM(Fato_Remuneracao[n_incumbentes])
)

Salario Cliente = AVERAGE(Fato_Cliente[salario_normalizado])

Comparatio = DIVIDE([Salario Cliente], [Mediana Mercado])

Gap % = DIVIDE([Salario Cliente], [Mediana Mercado]) - 1

Ajuste para Mediana % = DIVIDE([Mediana Mercado], [Salario Cliente]) - 1

Classificacao Gap =
VAR c = [Comparatio]
RETURN
SWITCH(TRUE(),
    ISBLANK(c), "Sem amostra",
    c < 0.85, "Muito abaixo",
    c < 0.95, "Abaixo",
    c < 1.05, "Alinhado",
    c < 1.15, "Acima",
    "Muito acima")

Indice Competitividade Ponderado =
DIVIDE(
    SUMX(VALUES(Dim_Cargo[cod_cargo]), [Comparatio] * [n Incumbentes Cliente]),
    SUMX(VALUES(Dim_Cargo[cod_cargo]), [n Incumbentes Cliente])
)

Custo Equalizacao Mediana =
SUMX(
    VALUES(Dim_Cargo[cod_cargo]),
    VAR delta = [Mediana Mercado] - [Salario Cliente]
    RETURN IF(delta > 0, delta * [n Incumbentes Cliente] * 13.33 * (1 + [Fator Encargos]), 0)
)

Prevalencia Beneficio =
DIVIDE(
    CALCULATE(DISTINCTCOUNT(Fato_Beneficio[cod_empresa]), Fato_Beneficio[oferece] = "Sim"),
    DISTINCTCOUNT(Fato_Beneficio[cod_empresa])
)
```

Regra crítica: **a supressão por mínimo amostral vive na medida**, não no visual.
Isso garante que nenhum filtro do usuário consiga expor um dado abaixo do mínimo de
agregação. Confiar em filtro de página para proteger confidencialidade não funciona,
porque o usuário pode alterar o filtro.

## 3. Páginas do painel

Cinco páginas. Mais que isso não é usado.

**1. Visão geral.** Cartões: número de cargos analisados, empresas participantes por
recorte, índice de competitividade ponderado, custo de equalização à mediana.
Gráfico de barras com distribuição dos cargos por classificação de gap. Mapa de
calor por família e nível funcional.

**2. Consulta por cargo.** Seletor de cargo. Gráfico de faixa (mínimo, Q1, mediana,
Q3, máximo) com marcador da posição do cliente. Cartões de n, comparatio, gap e ajuste
necessário. Tabela dos três recortes lado a lado.

**3. Comparativo entre recortes.** Salvador versus Nordeste versus Brasil, por
família e nível. Responde à pergunta de política: o gap é local ou nacional.

**4. Benefícios.** Prevalência por benefício e recorte, valor mediano, pacote do cliente
versus pacote de mercado.

**5. Cenários e priorização.** Custo de equalizar ao Q1, à mediana e ao Q3, com
filtro por criticidade de cargo. É a página que a diretoria vai usar.

Página adicional obrigatória, fora da navegação principal: **metodologia e
limitações**, com data-base, composição da amostra e regras de supressão.

## 4. Desenho e usabilidade

- Título de ação em cada página, como no relatório.
- Segmentações sempre no mesmo lugar (painel esquerdo), com estado padrão definido.
- Indicação visual explícita quando o dado está suprimido: exibir "amostra
  insuficiente", nunca zero nem célula vazia sem explicação. Vazio sem rótulo é
  interpretado como erro do painel.
- Formatação condicional na classificação de gap, com a mesma paleta do relatório.
- Tooltip com n e método em todo visual que mostre estatística.
- Botão de limpar filtros (marcador).
- Não usar mais de dois tipos de gráfico por página.

## 5. Publicação, acesso e sustentação

Definir e registrar antes de publicar, porque é pendência do plano de comunicação:

| Item | Decisão a tomar |
| --- | --- |
| Onde publica | Workspace do tenant do cliente (preferível, mantém o dado no ambiente dele) ou da ACTA |
| Quem acessa | Lista nominal aprovada pela Cláudia. Perfil de leitura, sem edição |
| Licenciamento | Pro por usuário ou capacidade. Verificar com a TI do cliente antes de prometer o entregável |
| Atualização | Este painel é fotografia de um ciclo. Definir se haverá refresh e a partir de qual fonte. Se não houver, declarar como estático e datado |
| Exportação | Bloquear exportação de dado detalhado se a decisão de granularidade não permitir |
| Segurança em nível de linha | Avaliar RLS se diferentes usuários do cliente puderem ver diferentes unidades |
| Treinamento | Sessão de uma hora, gravada, com roteiro de cinco perguntas frequentes e material de uma página |

Entregar o arquivo `.pbix` junto com o painel publicado, e o dataset de origem em
versão congelada. Sem isso, o entregável deixa de existir quando o acesso expira.
