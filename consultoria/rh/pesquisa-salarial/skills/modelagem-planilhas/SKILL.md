---
name: modelagem-planilhas
description: >
  Modelagem das bases do projeto em Excel: arquitetura de abas, tabelas, chaves,
  fórmulas auditáveis, checks de consistência e construção da tabela comparativa
  entregável. Acionar em consolidação da coleta, tratamento da base, cálculo das
  estatísticas em planilha e montagem do Excel de consulta para o cliente.
---

# Modelagem de dados em planilhas

## 1. Arquitetura padrão da pasta de trabalho

Uma pasta por camada, nunca todas as camadas no mesmo arquivo. Separar limita o
dano de um erro e permite que consultores diferentes trabalhem em paralelo.

| Arquivo | Abas | Quem edita |
| --- | --- | --- |
| `Bn_DIMENSOES` | `Dim_Cargo`, `Dim_Empresa`, `Dim_Recorte`, `Dim_Unidade`, `Dom_*` | Gerente |
| `B5_COLETA_BRUTA` | `Coleta`, `Log_Recebimento` | Consultor Jr. |
| `B6_BASE_TRATADA` | `Base`, `Regras_Aplicadas`, `Exclusoes` | Consultor Pleno |
| `B7_B8_ANALISE` | `Estatisticas`, `Competitividade`, `Beneficios`, `Checks` | Consultor Pleno |
| `Entregavel_Tabela_Comparativa` | `Leia-me`, `Consulta`, `Por_Familia`, `Beneficios`, `Metodologia` | Gerente |

## 2. Regras de construção

1. **Tabelas nomeadas** (`Ctrl+T`) em toda base. Referência estruturada
   (`Base[salario]`) em vez de intervalo fixo. Elimina o erro de fórmula que não
   acompanha novas linhas.
2. **Uma coluna, um tipo, um significado.** Nada de coluna que às vezes é número e
   às vezes é texto ("n/a", "confidencial"). Use célula vazia mais coluna de status.
3. **Nunca digitar valor calculado.** Se é derivado, é fórmula. Valor colado sem
   fórmula é inauditável.
4. **Nunca mesclar células** em base de dados. Mesclagem quebra tabela dinâmica,
   filtro e importação para Power BI.
5. **Sem linha ou coluna em branco** no meio da base. Sem totais no meio dos dados.
6. **Parâmetros em aba própria** (`Parametros`): data-base, índice de atualização,
   limites de outlier, mínimos amostrais, faixas de classificação de gap. Nenhuma
   constante escrita dentro de fórmula. Mudar o parâmetro deve recalcular tudo.
7. **Fórmula legível ganha de fórmula curta.** Prefira colunas auxiliares nomeadas a
   fórmula aninhada de cinco níveis. Auditabilidade vale mais que elegância.
8. **Coluna de rastreio em toda linha:** `origem_arquivo`, `data_carga`,
   `versao`. É o que permite reconstruir de onde veio cada número.
9. **Cores com significado único e documentado:** entrada manual, fórmula, valor
   importado, célula bloqueada. Legenda na aba `Leia-me`.
10. **Proteção de aba** em tudo que não é entrada manual.

## 3. Fórmulas de trabalho (Excel pt-BR)

Estatísticas por cargo e recorte, com filtro por flag de exclusão. Padrão com
`SE` matricial ou, quando disponível, `FILTRO`:

```
n empresas:      =CONT.SES(Base[cod_cargo];$A2;Base[recorte];B$1;Base[excluido];"NAO")
mediana:         =MED(SE((Base[cod_cargo]=$A2)*(Base[recorte]=B$1)*(Base[excluido]="NAO");Base[salario_norm]))
                 (confirmar com Ctrl+Shift+Enter em versões sem matriz dinâmica)
Q1:              =QUARTIL.INC(SE((Base[cod_cargo]=$A2)*(Base[recorte]=B$1);Base[salario_norm]);1)
media ponderada: =SOMARPRODUTO((Base[cod_cargo]=$A2)*(Base[salario_norm])*(Base[n_incumbentes]))
                 /SOMARPRODUTO((Base[cod_cargo]=$A2)*(Base[n_incumbentes]))
comparatio:      =SEERRO(salario_fjs/mediana;"")
ajuste p/ med:   =SEERRO(mediana/salario_fjs-1;"")
classificacao:   =SES(comp<0,85;"Muito abaixo";comp<0,95;"Abaixo";comp<1,05;"Alinhado";
                       comp<1,15;"Acima";VERDADEIRO;"Muito acima")
suficiencia:     =SE(n_empresas>=Parametros!$B$5;"SIM";"NAO")
```

Se a base passar de poucos milhares de linhas ou se o recálculo ficar lento, migrar
o tratamento para Python (pandas) e manter o Excel apenas como camada de
apresentação. O critério é performance e reprodutibilidade, não preferência.

## 4. Os doze checks de consistência (aba `Checks`)

Um por linha, com resultado OK ou ERRO e contagem de ocorrências. A base não avança
para a análise com qualquer ERRO aberto. Correspondem às validações V1 a V12 do
livro de cálculos.

| # | Check | Fórmula de teste |
| --- | --- | --- |
| 1 | Ordenação estatística | `=CONT.SES(Est[q1];"<"&Est[minimo])` deve ser 0 (adaptar para cada par) |
| 2 | Chave órfã de empresa | `=SOMARPRODUTO(--(CONTAR.SE(Dim_Empresa[cod];Base[cod_empresa])=0))` = 0 |
| 3 | Chave órfã de cargo | idem contra `Dim_Cargo[cod]` |
| 4 | Duplicidade de grão | `=CONT.VALORES(chave)-SOMARPRODUTO(1/CONT.SE(chave;chave))` = 0 |
| 5 | Salário nulo ou zero | `=CONT.SES(Base[salario];"<=0")` = 0 |
| 6 | Jornada ausente | `=CONT.VAZIO(Base[jornada])` = 0 |
| 7 | Data de referência ausente | `=CONT.VAZIO(Base[data_ref])` = 0 |
| 8 | Abaixo do piso | contagem de linhas com salário abaixo do piso da convenção |
| 9 | Exclusão sem motivo | `=CONT.SES(Base[excluido];"SIM";Base[motivo];"")` = 0 |
| 10 | Concentração acima de 25% | maior participação de uma empresa por cargo |
| 11 | n abaixo do mínimo publicado | linhas com `suficiencia = NAO` marcadas como publicáveis |
| 12 | CV acima de 0,35 | lista de cargos para revisão de matching |

## 5. A tabela comparativa entregável

É produto para consulta pela equipe do cliente ao longo do ano, não relatório.
Estrutura mínima:

- Aba `Leia-me`: o que é, o que não é, data-base, como interpretar comparatio e
  gap, quem procurar em caso de dúvida, aviso de confidencialidade.
- Aba `Consulta`: uma linha por cargo, colunas por recorte, com n, Q1, mediana, Q3,
  salário do cliente, comparatio, gap, ajuste para mediana, classificação e flag de
  suficiência amostral. Filtros por família, nível, natureza e criticidade.
- Aba `Por_Familia`: agregação com índice ponderado por headcount (C-19).
- Aba `Beneficios`: prevalência e valor mediano por benefício e recorte.
- Aba `Metodologia`: a nota metodológica resumida, dentro do próprio arquivo.

Regras de entrega: valores como valores, sem fórmulas que apontem para arquivos
externos; nenhuma referência a nome de empresa participante; proteção de estrutura;
formatação condicional na coluna de classificação; congelamento de painéis.

## 6. Erros que já custaram credibilidade em projetos como este

- Recalcular a mediana no slide e obter número diferente do Excel. Regra: um cálculo,
  um lugar (SKILL.md, seção 6).
- Filtro aplicado deixado ativo no arquivo entregue, fazendo o cliente ver um
  subconjunto e concluir que faltam dados.
- Coluna oculta com dado de participante identificado no arquivo enviado. Antes de
  entregar, exibir tudo, revisar e remover.
- Arredondamento intermediário, gerando soma que não fecha.
- Copiar e colar entre versões sem atualizar o log de auditoria.
