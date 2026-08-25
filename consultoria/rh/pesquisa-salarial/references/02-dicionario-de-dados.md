# Dicionário de dados Total Rewards (template)

Documento de dupla função: especifica o formulário de coleta enviado aos
participantes e define o esquema da base bruta. Toda pergunta do formulário
existe porque alimenta um campo desta base e um cálculo do livro de cálculos.
Pergunta que não alimenta cálculo é atrito desnecessário na taxa de resposta e
deve sair.

Este template incorpora dois módulos que só apareceram em um dos dois casos de
origem (conversão cambial e mensalização de horista, ambos do caso PASB), mas
que qualquer projeto futuro pode precisar. Ativar ou não cada módulo é decisão
da Etapa 1, registrada no cartão de identidade do `SKILL.md`.

## 1. Princípios de desenho do formulário

1. **Menos de 20 minutos por bloco de cargo.** A principal causa de não
   resposta em pesquisa proprietária é a extensão do instrumento. Coleta em
   blocos, com possibilidade de salvar e retomar.
2. **Definição na tela, não no anexo.** Cada campo traz a definição em
   tooltip.
3. **Validação na entrada.** Regra de consistência aplicada no momento do
   preenchimento custa uma fração do esforço de corrigir depois por e-mail.
4. **Um cargo por linha, um componente por coluna.**
5. **Campos obrigatórios mínimos.** Valor de remuneração, jornada, número de
   incumbentes e data de referência. Sem esses quatro, a linha não entra na
   estatística.
6. **Pré-preenchimento do matching.** O participante recebe o formulário já
   com os cargos dele mapeados contra os cargos do cliente (saída do B4), e
   apenas confirma ou corrige.

## 2. Bloco A. Identificação e contexto do participante

| Campo | Tipo | Obrigatório | Notas |
| --- | --- | --- | --- |
| `cod_empresa` | Oculto, pré-preenchido | sim | Nunca pedir ao respondente |
| `nome_respondente`, `cargo_respondente`, `email`, `telefone` | Texto | sim | Dado pessoal, tratamento LGPD, base segregada |
| `natureza_juridica` | Lista, definida por projeto (privada, filantrópica, OSS, pública, fundação, grupo econômico) | sim | Determina o regime de remuneração comparável |
| `total_colaboradores` | Faixa | sim | Critério de comparabilidade de porte |
| `unidades_ou_leitos_ou_equivalente` | Inteiro | não | Proxy de porte específico do setor (leitos em saúde, unidades escolares em educação, filiais em varejo) |
| `nº_unidades` | Inteiro | sim | Proxy de complexidade da estrutura |
| `pais_moeda_operacional` | Texto e lista | sim | Ativa o módulo de conversão cambial (seção 6) quando diferente da moeda de referência do projeto |
| `municipios_ou_regioes_atuacao` | Multi-seleção | sim | Base do recorte de comparação |
| `sindicato_convencao` | Texto | sim | Explica diferenças de piso e de data-base |
| `data_base_reajuste` | Mês | sim | Insumo do cálculo de atualização à data-base |
| `ultimo_reajuste_pct` e `mes_ultimo_reajuste` | Número, mês | sim | Insumo do cálculo de atualização à data-base |
| `politica_posicionamento` | Lista: mediana, Q3, P90, sem política | não | Contexto qualitativo para o relatório |
| `certificacao_qualidade` | Multi | não | Certificações relevantes do setor |

## 3. Bloco B. Remuneração fixa (por cargo)

Grão: uma linha por cargo do participante mapeado a um cargo do cliente.

| Campo | Tipo | Obrigatório | Definição para o respondente |
| --- | --- | --- | --- |
| `cargo_mercado_titulo` | Texto, pré-preenchido | sim | Título como consta na sua folha |
| `cod_cargo_cliente` | Oculto, pré-preenchido | sim | Cargo de referência da pesquisa |
| `confirma_match` | Sim / Não / Parcial | sim | Se Parcial ou Não, abre campo de comentário |
| `n_incumbentes` | Inteiro | sim | Quantas pessoas ocupam este cargo hoje. Zero é resposta válida e leva à exclusão automática (ver seção 7) |
| `regime_jornada` | Lista: Mensalista, Horista, Escala | sim | Determina qual normalização se aplica |
| `jornada_semanal_h` | Número | sim, se mensalista ou escala | Horas contratuais semanais |
| `carga_horaria_referencia_h` | Número | sim, se horista | Carga usada para mensalizar (ver seção 5). No caso PASB, 176 horas-aula |
| `regime_escala` | Lista: Administrativo, 12x36, 12x60, Plantonista, Sobreaviso, Outro | sim, se aplicável ao setor | Determina a comparabilidade e o adicional |
| `moeda` | Lista | sim | Se diferente da moeda de referência do projeto, ativa a conversão cambial |
| `salario_base_minimo` | Moeda | sim | Menor valor base praticado no cargo, sem adicionais |
| `salario_base_medio` | Moeda | sim | Média dos valores base do cargo |
| `salario_base_mediana` | Moeda | não | Se o sistema do participante fornecer |
| `salario_base_maximo` | Moeda | sim | Maior valor base praticado |
| `data_referencia` | Data | sim | Mês de competência da folha informada |
| `adicionais_fixos` | Multi + valor | não | Insalubridade, periculosidade, noturno, sobreaviso, plantão, tempo de serviço. Coletar separado do base |
| `gratificacao_funcao` | Moeda | não | Comum em estruturas de gestão |
| `nº_salarios_ano` | Inteiro | sim | Normalmente 12 mais 13º, quando aplicável ao regime do país |

Regras de validação no formulário: `minimo <= medio <= maximo`; se informada,
`minimo <= mediana <= maximo`; `salario_base_minimo` maior ou igual ao piso
aplicável declarado; `n_incumbentes >= 0`; se `n_incumbentes = 0`, a linha
segue para exclusão automática com motivo "cargo sem ocupante", não para
tratamento estatístico; alerta se amplitude (`maximo / minimo`) for superior a
3, porque em geral indica cargos distintos agrupados sob o mesmo título.

## 4. Bloco C. Remuneração variável

| Campo | Tipo | Definição |
| --- | --- | --- |
| `possui_variavel` | Sim / Não | Filtro de todo o bloco |
| `tipo_variavel` | Multi: PLR, Bônus por desempenho, Comissão, Prêmio por produtividade, Gratificação por meta setorial, ILP | Um cargo pode ter mais de um |
| `elegibilidade_pct` | Percentual | Percentual dos incumbentes elegíveis |
| `target_salarios` | Número de salários | Meta em número de remunerações mensais |
| `target_pct_sobre_fixo` | Percentual | Alternativa ao campo anterior. Coletar uma das duas formas e converter |
| `pago_ultimo_ciclo_salarios` | Número | Efetivamente pago no último ciclo. É o dado que importa, target sem pagamento é ruído |
| `indicadores_base` | Multi: financeiro institucional, meta de contrato ou convênio, indicador operacional, individual, corporativo | Contexto qualitativo relevante especialmente em terceiro setor e educação |
| `periodicidade_pagamento` | Lista: Anual, Semestral, Trimestral, Mensal | |

## 5. Bloco D. Benefícios (por participante, com exceções por nível)

Coletar por participante e por nível funcional, não por cargo, para não
multiplicar o esforço do respondente pelo número de cargos do escopo. A lista
de benefícios abaixo combina o catálogo padrão do setor de saúde (case FJS) e
o catálogo do setor de educação internacional (case PASB); em cada projeto,
usar o subconjunto relevante e acrescentar o que for específico do setor do
cliente.

| Benefício | Campos | Origem |
| --- | --- | --- |
| Plano de saúde | Oferece, operadora (faixa de padrão), abrangência, coparticipação percentual, custo por vida, extensão a dependentes, elegibilidade por nível | Comum a todos os setores |
| Plano odontológico | Oferece, custo por vida, coparticipação | Comum |
| Vale ou auxílio alimentação | Oferece, valor mensal, desconto do colaborador percentual, modalidade | Comum |
| Vale refeição | Idem | Comum |
| Vale transporte ou fretado | Oferece, modalidade, desconto percentual | Comum |
| Previdência privada | Oferece, percentual de contribuição, regra de matching | Comum |
| Seguro de vida | Oferece, múltiplo salarial ou valor fixo de capital | Comum |
| Auxílio creche ou educação | Oferece, valor, elegibilidade | Comum |
| Auxílio farmácia ou desconto assistencial | Oferece, valor ou percentual | Setor saúde |
| Bolsa de estudo, graduação e pós, ou desenvolvimento profissional | Oferece, percentual custeado, valor fixo | Ambos os setores, formatos distintos |
| Day off, licenças estendidas, home office | Oferece, condição | Comum |
| Auxílio moradia ou relocation para expatriados | Oferece, valor, o que cobre (bagagem, moradia, ambos) | Setor educação internacional e organizações com expatriados |
| Outros | Texto | Específico do setor |

Para cada benefício, três informações produzem análise útil: **prevalência**
(percentual de participantes que oferecem), **valor mediano** e **custo
efetivo** (líquido de coparticipação). Relatório de benefícios sem prevalência
não permite decisão, porque não distingue prática de mercado de exceção.

## 6. Bloco E. Encargos e custo total

Ativar por completo apenas quando o custo total de folha estiver no escopo
contratado.

| Campo | Tipo | Notas |
| --- | --- | --- |
| `regime_tributario` | Lista, definida por país e por natureza jurídica | Determinante. Regimes com isenção ou desoneração mudam radicalmente o custo total e não podem ser comparados sem ajuste |
| `possui_regime_especial` | Sim / Não | Ex.: CEBAS no Brasil, ou equivalente em outra jurisdição |
| `encargos_pct_efetivo` | Percentual | Composição detalhada conforme a jurisdição do participante |
| `fator_encargos_total` | Percentual | Campo calculado, exibido ao respondente para conferência |

Alerta metodológico obrigatório no relatório sempre que houver regime especial
de tributação: comparar custo total de folha entre entidades com regimes
diferentes sem ajustar produz conclusão falsa. O comparável primário é sempre
a remuneração ao colaborador. O custo do empregador é análise complementar e
sempre segmentada por regime.

## 7. Bloco F. Conversão cambial (ativar quando houver mais de uma moeda)

Módulo generalizado a partir do caso PASB, que convivia com valores em real e
em dólar na mesma pesquisa (auxílios de expatriados).

| Campo | Tipo | Notas |
| --- | --- | --- |
| `moeda_origem` | Lista | Já coletada em cada bloco de valor |
| `moeda_referencia_projeto` | Texto, fixa no cartão de identidade | Definida uma única vez para todo o projeto |
| `taxa_conversao_aplicada` | Número | Ver cálculo de conversão cambial no livro de cálculos |
| `data_taxa` | Data | A taxa usada tem data de referência, igual à data-base do projeto sempre que possível |
| `fonte_taxa` | Texto | Ex.: Banco Central, cotação de fechamento de um provedor definido no início do projeto |

Regra fixa: a taxa de conversão é a mesma para todo o projeto e para todos os
participantes, aplicada na data-base. Nunca usar taxa do dia do preenchimento
de cada participante, porque isso introduz ruído cambial na comparação que não
tem relação com a prática de remuneração.

## 8. Bloco G. Dados do cliente (espelho interno)

O cliente preenche a mesma estrutura dos blocos B a F, com campos adicionais
para as populações internas heterogêneas identificadas no cartão de
identidade (ex.: `tipo_unidade`, `unidade`, `regional`). Sem isso a regra R4 de
segmentação não é executável.

## 9. Tabelas de domínio (listas fechadas)

Manter em aba própria da planilha e como tabelas de dimensão no Power BI.
Nunca digitar valor de domínio direto na base.

- `Dom_Recorte`: definido por projeto.
- `Dom_NivelFuncional`: definido por projeto, mas manter estável dentro dele.
- `Dom_Natureza`: definido por projeto.
- `Dom_GrauMatch`: Match total, Match parcial, Proxy, Sem match (fixo).
- `Dom_StatusConvite`: Não convidada, Convidada, Confirmada, Declinada, Sem
  resposta, Substituída (fixo).
- `Dom_ClassificacaoGap`: Muito abaixo, Abaixo, Alinhado, Acima, Muito acima
  (fixo).
- `Dom_RegimeJornada`: Mensalista, Horista, Escala (fixo).
- `Dom_RegimeEscala`: Administrativo, 12x36, 12x60, Plantonista, Sobreaviso,
  Outro (fixo, aplicável quando o setor tiver regime de escala).

## 10. Tecnologia de coleta: critério de escolha

Requisitos que a ferramenta precisa atender, em ordem de criticidade:

1. Formulário pré-preenchido por participante, com o matching já carregado.
2. Salvar e retomar.
3. Validação condicional e lógica de salto.
4. Upload de planilha como alternativa.
5. Exportação limpa em formato tabular.
6. Hospedagem e retenção compatíveis com LGPD e com a política de segurança
   da informação do cliente.

O caso PASB validou Microsoft Forms puro em campo, para um escopo menor de
cargos e sem exigência de pré-preenchimento individual por participante. Para
escopos grandes (dezenas ou centenas de cargos, como no caso FJS), o requisito
1 tende a eliminar as ferramentas mais simples e favorecer planilha
estruturada por participante, com Forms reservado ao bloco de benefícios.
Registrar a decisão do projeto atual no log de auditoria com a justificativa.
