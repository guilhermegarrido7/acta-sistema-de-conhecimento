# Arquitetura de entregáveis e cadeia de dados

## 1. A decisão de stack, primeiro

**Excel + Power BI, como contratado. HTML autocontido entra em dois papéis específicos, não como terceiro caminho principal.**

A pergunta admite resposta curta porque parte dela já está decidida pelo contrato. A
proposta anexa lista três artefatos de dados: Relatório em PDF ou PPT, Tabela
comparativa em Excel e Painel de Resultados em Power BI. Power BI não é uma opção em
avaliação, é obrigação contratual. Trocá-lo por HTML exigiria termo aditivo e
redução de escopo negociada.

O que resta decidir é onde o HTML ajuda. Dois lugares, ambos com razão concreta:

**Papel 1, plano B do Power BI.** Existe risco recorrente de o cliente não ter licença
Power BI Pro para os usuários que precisam consumir o painel. Se isso se confirmar,
o entregável contratado existe e não é utilizável, o que é pior do que não existir.
Um HTML autocontido (arquivo único, dados embutidos, filtros em JavaScript, zero
servidor, zero licença, abre em qualquer navegador e funciona offline) é a
contingência que preserva a entrega. Verificar a licença na Etapa 1, não na 3.

**Papel 2, formato dos relatórios individuais dos participantes.** Aqui o HTML é
superior ao Power BI por motivos estruturais, não de preferência. São 12 ou mais
empresas externas, cada uma podendo ver apenas os próprios dados comparados ao
agregado. Fazer isso em Power BI exige licenciar externos, publicar em workspace
compartilhado e configurar segurança em nível de linha, o que é custo e risco de
sigilo para benefício nenhum. Um HTML por participante contém apenas os dados
daquele participante, vai anexado por e-mail, não depende de nada e é impossível
vazar dado de terceiro porque o dado de terceiro não está no arquivo.

### Matriz de decisão

| Artefato | Público | Uso dominante | Licença | Risco de sigilo | Esforço | Veredito |
| --- | --- | --- | --- | --- | --- | --- |
| PPT e PDF | Diretoria e Comitê Gestor | Narrativa, decisão, impressão | Nenhuma | Baixo, é curado | Alto | Obrigatório. É o entregável que decide |
| Excel de consulta | Equipe de RH do cliente | Consulta pontual ao longo do ano, cálculo próprio | Office, já existe | Médio, arquivo circula | Médio | Obrigatório. Insubstituível para quem precisa recalcular |
| Power BI | RH e gestores do cliente | Exploração interativa, corte por cargo e recorte | Pro ou capacidade, a verificar | Médio, mitigável na medida | Alto | Obrigatório se contratado. Verificar licença na Etapa 1 |
| HTML autocontido | Contingência ou participantes | Interatividade sem infraestrutura | Nenhuma | Baixo por construção | Médio | Sim, nos dois papéis descritos |
| PDF individual | Cada participante | Contrapartida, vitrine comercial | Nenhuma | Baixo | Médio | Sim. Pode acompanhar o HTML |

### Por que não fazer os três como caminho principal

Três interfaces sobre a mesma base multiplicam o ponto de falha mais caro do
projeto, que é divergência de número entre entregáveis. Cada camada adicional é uma
oportunidade de alguém recalcular localmente e produzir um valor diferente. A regra
de um cálculo, um lugar só se sustenta com poucas camadas de consumo lendo a mesma
fonte congelada.

Complexidade adicional também consome a Etapa 3, que é a mais comprimida do
cronograma. Em contrato de preço fixo, elegância técnica que não muda decisão do
cliente é margem queimada.

---

## 2. Cadeia de dados: da coleta ao slide

O princípio é uma fonte congelada única alimentando quatro saídas. Nenhuma saída
calcula, todas leem.

```
COLETA                TRATAMENTO              FONTE CONGELADA          CONSUMO
                                                                   ┌─> PPT / PDF (narrativa)
formulários  ──> B5_COLETA_BRUTA ──> B6_BASE_TRATADA ──> B7_ESTATISTICAS ├─> Excel de consulta
por empresa      (imutável)          (normalizada,       B8_COMPETITIVIDADE ├─> Power BI
                                      auditada)          B9_BENEFICIOS   └─> HTML individual
                                                        (versão congelada)     (por participante)
                                                              │
                                                        B10_LOG_AUDITORIA
```

### 2.1 O conceito de release congelado

Este é o mecanismo que garante rastreabilidade e resolve o problema de três
consultores produzindo entregáveis em paralelo.

Ao fim da Etapa 2, as bases B7, B8 e B9 recebem um número de release, por exemplo
`R1.0`, e são congeladas: exportadas para CSV ou Parquet, com data, hora, autor,
hash do arquivo e contagem de linhas registrados no log de auditoria. A partir daí:

- O PPT, o Excel, o Power BI e os HTML individuais consomem exclusivamente `R1.0`.
- Toda página de todo entregável carrega a marca do release em rodapé.
- Correção de dado não edita o release, gera `R1.1`, e todos os entregáveis são
  regerados a partir dele. Regerar quatro artefatos de uma fonte é trabalho de
  horas; caçar de onde veio um número divergente é trabalho de dias.
- Qualquer número em qualquer entregável é reconstruível informando: release, ID de
  cálculo do livro, cargo e recorte.

### 2.2 Regra de responsabilidade por camada

| Camada | Quem produz | Quem consome | Pode calcular? |
| --- | --- | --- | --- |
| B5 bruta | Consultor de operação | Ninguém direto | Não. É registro |
| B6 tratada | Consultor de análise | B7 a B9 | Sim. É a única camada onde se calcula |
| B7 a B9 release | Consultor de análise, revisado por segundo consultor | Todos os entregáveis | Não. Já está calculado |
| Entregáveis | Cada responsável de artefato | Cliente | Não. Apenas formatam e agregam |

Fórmula de estatística dentro de um slide, de uma aba de apresentação ou de uma
medida DAX que recalcule percentil a partir da base bruta viola a regra. A exceção
é o Power BI, que por requisito de interatividade recalcula percentis dinamicamente
a partir de B6. Por isso a validação final compara o Power BI contra o release em
uma amostra de vinte cargos, e o resultado dessa conferência vai para o log.

---

## 3. Esqueleto de produção: da Etapa 2 à apresentação final

Sequência com dependências reais. Cada linha só começa quando a anterior que ela
depende termina, o que é o que evita retrabalho na etapa mais curta do projeto.

### Fase A. Antes de existir dado (Etapa 1)

| # | Produto | Por que agora |
| --- | --- | --- |
| A1 | Ghost deck do relatório: estrutura completa com títulos provisórios e slides vazios | Define quais análises são necessárias e, principalmente, quais não são. Aprovado pelo Comitê Gestor, elimina retrabalho na Etapa 3 |
| A2 | Especificação de cada entregável: conteúdo, formato, extensão, público, granularidade | Sem isso, "relatório executivo" é expectativa não gerenciada |
| A3 | Wireframe do Power BI: cinco páginas, quais filtros, quais medidas | O modelo de dados nasce da pergunta, não o contrário |
| A4 | Estrutura da aba de consulta do Excel | Define quais colunas B7 e B8 precisam ter |
| A5 | Modelo do relatório individual do participante, com uma empresa fictícia | Permite decidir a granularidade com a Sponsor vendo o artefato, não descrevendo-o |
| A6 | Verificação de licença Power BI no cliente | Aciona ou descarta o plano B do HTML antes de custar tempo |

### Fase B. Com a base tratada (fim da Etapa 2)

| # | Produto | Dependência |
| --- | --- | --- |
| B1 | Release `R1.0` congelado de B7, B8 e B9, com hash e log | Base tratada aprovada nos 12 checks |
| B2 | Revisão independente por segundo consultor, sobre amostra de vinte cargos | B1 |
| B3 | Nota metodológica escrita, com os oito itens obrigatórios | B1 |
| B4 | Pré-leitura de achados sensíveis com a Sponsor, reservada | B1 e B2 |

O item B4 não é formalidade. Nenhum achado relevante deve aparecer pela primeira vez
na apresentação final, especialmente cargos muito acima do mercado e gaps grandes em
posições de gestão, que têm implicação orçamentária e política interna.

### Fase C. Produção paralela (Etapa 3)

Três frentes simultâneas, uma por consultor, todas lendo `R1.0`.

| Frente | Produtos | Sequência interna |
| --- | --- | --- |
| Narrativa | PPT, PDF, nota metodológica | Preencher o ghost deck com dados, escrever os títulos de ação definitivos, diagramar, revisar |
| Consulta | Excel de consulta | Montar abas, aplicar formatação condicional, travar estrutura, escrever a aba Leia-me |
| Exploração | Power BI, HTML de contingência se necessário | Modelar, escrever medidas, montar páginas, validar contra o release, publicar, treinar |

### Fase D. Convergência e entrega

| # | Produto | Nota |
| --- | --- | --- |
| D1 | Validação de coerência entre os três artefatos | Vinte cargos conferidos nas três interfaces. Divergência bloqueia entrega |
| D2 | Ensaio da apresentação, com as dez perguntas difíceis respondidas | Painel, matching, jornada, amostra, isenção de INSS, método de percentil |
| D3 | Apresentação final ao Comitê Gestor e à diretoria | O material já foi visto em partes. A apresentação confirma, não revela |
| D4 | Treinamento do painel, uma hora, gravado, com material de uma página | Entregável do contrato, não cortesia |
| D5 | Piloto do relatório individual com um participante | Antes de produzir os doze |
| D6 | Produção e distribuição dos relatórios individuais | Com carta assinada pelo Sócio |
| D7 | Pacote de encerramento: `.pbix`, release congelado, livro de cálculos, termo de encerramento | Sem isso o entregável deixa de existir quando o acesso expira |

---

## 4. Especificação resumida de cada artefato

### 4.1 PPT e PDF, o entregável de decisão

Cerca de 40 slides, sete blocos, com anexos separados do corpo. Detalhamento slide a
slide em `06-storyline-relatorio-ppt.md`. Duas versões geradas do mesmo arquivo: a de
apresentação, projetada, e a de leitura, impressa, que difere apenas por trazer as
notas de rodapé completas. Não fazer duas fontes distintas, apenas dois exports.

### 4.2 Excel de consulta

Cinco abas, especificadas em `skills/modelagem-planilhas.md`: Leia-me, Consulta,
Por_Familia, Beneficios, Metodologia. Valores como valores, sem vínculo externo, sem
referência a nome de participante, estrutura protegida, formatação condicional na
coluna de classificação e marca do release no rodapé de cada aba.

### 4.3 Power BI

Cinco páginas mais a página de metodologia, especificado em
`skills/dashboard-powerbi.md`. A regra central é que a supressão por mínimo amostral
vive na medida, não no visual, porque filtro de página não protege confidencialidade
contra usuário que altera o filtro.

### 4.4 HTML autocontido, quando acionado

Arquivo único, sem dependência externa. Dados embutidos como JSON no próprio
arquivo. Três controles: cargo, recorte e nível funcional. Um gráfico de faixa com a
posição do assinante, uma tabela e a nota de método. Supressão por n mínimo aplicada
na geração do arquivo, não no JavaScript, para que o dado suprimido não exista no
código-fonte. Cabe em um anexo de e-mail e abre com dois cliques, o que para
participante externo é a diferença entre consultar e não consultar.

### 4.5 Relatório individual do participante

De 8 a 12 páginas, estrutura em `references/04-mbb-e-ia.md`. O que faz esse material
funcionar comercialmente é o achado específico daquela empresa, não o design.
Relatório genérico com o logo do participante na capa produz o efeito oposto ao
pretendido.

---

## 5. Governança de versão dos entregáveis

| Regra | Detalhe |
| --- | --- |
| Nomenclatura | `AAAAMMDD_ARTEFATO_Rn.n_vNN.ext`, exemplo `20261020_RelatorioCliente_R1.0_v03.pptx` |
| Marca de release | Todo artefato exibe o release na capa e no rodapé |
| Congelamento | Após aprovação da Sponsor, o artefato vira `_FINAL` e não é mais editado. Correção gera novo release e novo ciclo |
| Rastreabilidade de slide | Cada slide de resultado carrega a fonte no formato `Base R1.0 | Cálculo C-16 | n = 14 empresas` |
| Log | Toda geração de artefato registrada em B10, com release consumido e revisor |

A marca de rastreabilidade no rodapé de cada slide é o detalhe que mais impressiona
cliente sofisticado e o que mais protege a ACTA em discussão sobre número. Custa uma
linha de 8 pontos.
