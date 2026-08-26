---
name: matching-cargos
description: >
  Método de equivalência entre os cargos do cliente e os cargos das empresas
  participantes, generalizado a partir dos casos FJS e PASB. Acionar em
  classificação de cargos em família, nível funcional e critério de
  nivelamento, definição do grau de match, tratamento de padrões de problema
  já catalogados, e registro da base B4_MATCHING.
---

# Matching de cargos por conteúdo

Pesquisa de remuneração exige matching por conteúdo, não por nomenclatura. Este
é o ponto de maior risco técnico de qualquer projeto: erro de matching é
invisível depois da agregação e contamina toda a estatística a jusante.

## 1. Os quatro fatores de comparação

Avaliar cada par (cargo do cliente, cargo do participante) em quatro
dimensões. Nenhuma delas isoladamente decide.

| Fator | O que observar | Peso sugerido |
| --- | --- | --- |
| Conteúdo e responsabilidades | O que a pessoa efetivamente entrega, decide e responde | 40% |
| Complexidade e autonomia | Nível de decisão, ambiguidade tratada, supervisão recebida | 25% |
| Escala e escopo | Headcount sob gestão, orçamento, número de unidades atendidas, volume | 20% |
| Requisitos | Formação, registro profissional, experiência mínima, certificações | 15% |

Score de 0 a 100 pela soma ponderada da aderência em cada fator (0 a 100 por
fator).

## 2. Graus de match

| Grau | Score | Uso na estatística |
| --- | --- | --- |
| Match total | 85 a 100 | Entra normalmente |
| Match parcial | 65 a 84 | Entra, com marca. Verificar impacto na dispersão |
| Proxy | 45 a 64 | Entra apenas se necessário para atingir n, sempre declarado |
| Sem match | Abaixo de 45 | Não entra. Cargo pode ficar sem amostra |

Somente linhas com `flag_usar_na_estatistica = TRUE` alimentam a base tratada.
A distribuição dos graus de match é reportada na nota metodológica, porque é
o indicador de qualidade da pesquisa que um cliente sofisticado vai pedir.

## 3. Padrões de problema reconhecíveis (catálogo entre projetos)

Os dois casos que originaram este plugin (FJS, saúde e terceiro setor; PASB,
educação internacional) mostraram o mesmo fenômeno com sintomas diferentes: a
estrutura interna do cliente não tem correspondência direta no vocabulário do
mercado. Cada padrão abaixo é genérico, com o caso de origem citado como
ilustração. Ao iniciar um projeto novo, verificar se algum destes padrões se
repete antes de assumir que o cliente é um caso inteiramente novo.

### 3.1 Nomenclatura de topo sem equivalente direto

**Padrão:** o cliente usa um título para a posição máxima da estrutura que não
corresponde ao vocabulário usual do setor.

**Caso de origem:** FJS não usa Diretor, VP ou CEO. O cargo máximo é
Superintendente.

**Tratamento:** não comparar por título. Coletar do participante três
variáveis objetivas para cargos de nível Executivo e Gerência: headcount sob
gestão direta e indireta, orçamento sob responsabilidade, nível de
subordinação (reporta a quem). Essas três variáveis substituem a nomenclatura
como critério de equivalência.

### 3.2 Estrutura centralizada versus estrutura distribuída

**Padrão:** um cargo do cliente cobre toda a organização, enquanto o cargo
homônimo no mercado cobre apenas uma unidade, filial ou departamento.

**Caso de origem:** um Coordenador de RH da FJS cobre toda a Fundação; no
mercado, o cargo homônimo costuma cobrir uma unidade.

**Tratamento:** registrar `fator_escala` em B4 como a razão entre o escopo do
cliente e o escopo do mercado (headcount atendido, número de unidades). Quando
o fator de escala for superior a 3, considerar match com o nível
imediatamente superior no mercado e documentar. Esta é uma decisão sensível e
precisa de validação do Comitê Gestor do projeto, não pode ser tomada
unilateralmente pelo consultor.

### 3.3 Critério de nivelamento não numérico ou não documentado

**Padrão:** a diferenciação entre níveis do mesmo cargo não segue senioridade
convencional (Júnior, Pleno, Sênior, ou numeração romana), e sim outro
critério que precisa ser explicitado antes do matching.

**Caso de origem:** no PASB, os níveis de Professor eram definidos por
qualificação acadêmica (Bacharel, Pós-graduado, Mestrado, Doutorado) e por
tempo de contrato, não por série lecionada. A tradução adotada foi: Educação
Infantil equivalente a Professor Bacharel, Fundamental I a Pós-graduado,
Fundamental II a Mestrado, Ensino Médio a Doutorado.

**Tratamento:** antes do matching, perguntar explicitamente ao cliente o que
diferencia os níveis do cargo. Construir uma tabela de tradução para os
níveis padrão do plugin (ver `01-mapa-arquivos-e-bases.md`, campo
`criterio_nivelamento`) e validar essa tradução com o cliente antes de usá-la.
Sem esse passo, o matching de nível é arbitrário mesmo que pareça preciso.

### 3.4 Segmentação por sub-painel com lógica distinta

**Padrão:** o cliente tem mais de uma população interna cuja base de
remuneração segue lógicas diferentes, e misturá-las na mesma estatística
produz um número sem significado.

**Casos de origem:** FJS segmenta unidade própria (referência de mercado
privado) de unidade sob contrato de gestão (teto do funcionalismo, tabela
SUS). PASB segmenta escola regional de escola nacional, porque o padrão de
prática varia entre os dois grupos.

**Tratamento:** identificar toda população interna heterogênea na Etapa 1 e
registrar no cartão de identidade do `SKILL.md`. Nenhum resultado agregado
pode misturar essas populações sem segmentação explícita (regra R4).

### 3.5 Cargo com baixa prevalência de mercado esperada

**Padrão:** o cargo existe na estrutura do cliente mas tem baixa
probabilidade de aparecer com frequência suficiente no painel, por ser
nomenclatura interna, função regulada, ou função emergente sem verbete comum
de mercado.

**Casos de origem:** FJS tinha cargos como Assessor Administrativo da
Superintendência, Agilista Master e Business Partners, todos marcados como
alto risco de amostra insuficiente desde a Etapa 1. PASB tinha o cargo de
Professor Residente, sujeito a bolsa regulada e não a salário de mercado.

**Tratamento:** marcar esses cargos como alto risco já na Etapa 1 e decidir
antecipadamente a estratégia (agregação por família, uso de proxy declarado,
ou aceitação de amostra insuficiente). Decidir antes evita a pressão de
inventar dado na Etapa 3.

## 4. Processo operacional recomendado

1. **Classificação inicial** dos cargos do escopo em família, subfamília,
   nível funcional, natureza e critério de nivelamento. Pode ser
   pré-classificada com IA e validada por consultor. Os cargos críticos
   (regra 80/20, ver `04-mbb-e-ia.md`) são validados um por um com o cliente.
2. **Construção do catálogo de referência**: descrição sumária por cargo, com
   responsabilidades, complexidade, escala e requisitos. É o que vai no
   formulário para o participante comparar. Sem catálogo, o participante
   compara títulos, exatamente o que a metodologia proíbe.
3. **Pré-matching por participante**: enviar o formulário já com a sugestão
   de correspondência. O participante confirma, corrige ou marca "não
   temos".
4. **Validação de retorno**: revisar todo match que o participante marcou
   como parcial, e amostrar uma fração dos confirmados como total.
5. **Teste estatístico de matching**: depois da consolidação, todo cargo com
   coeficiente de variação acima de 0,35 (C-14) volta para revisão de
   matching. Este é o único mecanismo que detecta erro de matching a
   posteriori.
6. **Registro**: cada linha de B4 com justificativa textual, validador e
   data.

## 5. Erros a evitar

- Aceitar match porque o título coincide.
- Comparar cargo de gestão sem considerar escala (padrão 3.2).
- Misturar cargo de regime de escala ou horista com administrativo ou
  mensalista sem normalizar antes (ver C-08 e C-26).
- Deixar o matching para o final da coleta. O matching precede a coleta,
  porque define o que se pergunta.
- Fazer matching sem as descrições de cargo do insumo A.1 do mapa de
  arquivos. Se as descrições não chegarem, isso é um risco de projeto a ser
  escalado, não um problema a ser contornado com suposição.
- Assumir que o critério de nivelamento é senioridade convencional sem
  perguntar (padrão 3.3).
