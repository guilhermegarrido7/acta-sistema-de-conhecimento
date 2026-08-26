# Boas práticas MBB e uso de IA no projeto

## Parte A. Práticas de consultoria estratégica aplicadas a este projeto

Só entram aqui práticas com aplicação direta na pesquisa de remuneração. O que não
muda uma decisão do projeto ficou fora.

### A.1 Resposta primeiro, evidência depois

O relatório abre com a conclusão, não com a metodologia. A estrutura correta é:
o cliente está X% abaixo da mediana de mercado nos cargos críticos, o custo de
equalização é R$ Y, as três prioridades são estas. Metodologia, amostra e
tratamento estatístico vão para o anexo e para uma nota metodológica de duas
páginas. Cliente de RH lê a metodologia para confiar no número, não para descobrir
o número.

Aplicação prática: escreva as três frases de conclusão antes de montar um único
gráfico. Se as três frases não podem ser escritas, a análise ainda não está pronta,
independentemente de quantos dados já foram tabulados.

### A.2 Estrutura MECE em toda decomposição

Mutuamente exclusiva e coletivamente exaustiva. Aplicações concretas neste projeto:

- Cargos: cada um dos 265 pertence a exatamente uma família, um nível funcional e
  uma natureza. Cargo em duas famílias quebra toda a agregação.
- Recortes: Salvador, Nordeste, Brasil precisam de regra explícita para a Bahia
  interior. Hoje há ambiguidade (a ata diz que consolida com Salvador ou Nordeste,
  sem definir). Decidir e registrar.
- Diagnóstico de gap: a explicação de um gap é composição (base versus adicionais),
  posicionamento (política) ou escopo (matching imperfeito). Toda diferença
  encontrada deve ser atribuída a uma dessas três causas, e apenas uma.

### A.3 Hipótese antes do dado

Antes da coleta, escreva as hipóteses que a pesquisa vai testar. Formular por
projeto, a partir do contexto do cliente e dos motivadores declarados por ele.
Exemplos reais dos dois casos de origem, para inspiração do formato:

- Caso FJS, H1: o gap é maior nos cargos corporativos de gestão do que nos
  assistenciais, porque o comparável real do corporativo é grande grupo
  econômico, não hospital.
- Caso FJS, H2: nos cargos assistenciais regidos por convenção e piso, o
  cliente está alinhado ao mercado no salário base e defasado no pacote de
  benefícios.
- Caso FJS, H3: a perda de talentos declarada se concentra em cargos com
  comparatio abaixo de 0,90 e com alta prevalência de remuneração variável no
  mercado, onde o cliente não paga variável.
- Caso FJS, H4: unidades sob contrato de gestão apresentam gap estruturalmente
  maior e não endereçável por política interna, o que exige recomendação
  distinta.
- Caso PASB (ilustrativo, adaptável a outro setor): professores expatriados
  estão posicionados mais competitivamente do que professores nacionais,
  porque a competição por esse talento é internacional.

Valor prático: as hipóteses definem quais cortes precisam existir no formulário de
coleta. Hipótese formulada depois da coleta frequentemente não pode ser testada,
porque o dado necessário não foi pedido.

### A.4 Regra 80/20 aplicada aos 265 cargos

Não trate os 265 cargos com o mesmo esforço. Classifique em três níveis na Etapa 1,
junto com o cliente:

| Camada | Critério | Tratamento |
| --- | --- | --- |
| Críticos (tipicamente 10 a 15% do escopo) | Alto headcount, alta rotatividade, difícil reposição, cargos de gestão | Matching individual validado com gestor, análise completa, presença garantida no relatório |
| Relevantes (tipicamente 30 a 40% do escopo) | Headcount médio, boa comparabilidade de mercado | Matching padrão, análise estatística completa |
| Cauda longa (restante) | Baixo headcount, alta especificidade | Matching por proxy ou família, análise agregada por família quando o n individual for insuficiente |

No caso FJS (265 cargos), essas faixas corresponderam a aproximadamente 30 a
40 cargos críticos e 80 a 100 relevantes. Sem essa priorização, o esforço se
distribui uniformemente e a etapa de análise é consumida por cargos que não
movem decisão.

### A.5 Título de ação em toda página

Cada página do relatório tem um título que afirma a conclusão, não que nomeia o
conteúdo. "Enfermagem alinhada ao mercado no base, defasada em 18% no pacote total"
em vez de "Análise de enfermagem". O leitor precisa entender o relatório folheando
os títulos. Regra de teste: leia apenas os títulos em sequência; se não formarem um
argumento coerente, a estrutura está errada.

### A.6 Ghost deck antes da análise

Monte a estrutura completa do relatório com páginas vazias e títulos provisórios
antes de ter os dados. Isso revela quais análises são necessárias e, mais
importante, quais não são. Faça isso na Etapa 1 e valide com o Comitê Gestor. Ganho
direto: elimina retrabalho na Etapa 3, que é a etapa mais comprimida do cronograma.

### A.7 Sem surpresas para o cliente

Nenhum achado relevante aparece pela primeira vez na apresentação final. Achados
sensíveis (por exemplo, cargos muito acima do mercado, ou gap grande em cargo de
gestão) são antecipados ao Sponsor em reunião reservada. A apresentação final
confirma o que já foi discutido. Isso protege a relação e é particularmente
relevante aqui, porque o resultado pode ter implicação orçamentária e reputacional
interna para o cliente.

### A.8 Revisão por segunda pessoa

Nenhum número sai sem revisão de um segundo consultor que não fez o cálculo. Com
três consultores no projeto, o desenho natural é: quem calcula não revisa, quem
revisa assina o `B10_LOG_AUDITORIA`. O custo é de algumas horas, o benefício é
evitar o único erro que destrói credibilidade de forma irreversível em pesquisa de
remuneração, que é um número errado descoberto pelo cliente.

### A.9 Dry-run da apresentação final

Ensaio completo com o time ACTA, com antecipação das dez perguntas mais difíceis.
Para este projeto, as previsíveis são: como vocês garantem que o matching está
certo; por que essa empresa está no painel e aquela não; quantas empresas
responderam de fato; o mínimo foi atingido em todos os recortes; como vocês tratam
a diferença de jornada; a comparação de custo considera nossa isenção de INSS.
Respostas prontas, com o número e a fonte.

### A.10 Gestão de escopo com disciplina

O contrato tem preço fixo e vigência de quatro meses. Toda solicitação adicional
(tabela salarial, enquadramento, PCCR) é registrada como Change Request com
estimativa de esforço e submetida por escrito, conforme cláusula 13.2. Aceitar
informalmente é o caminho mais comum para transformar projeto de margem positiva em
prejuízo, e a proposta lista essas atividades como fora de escopo justamente porque
são naturalmente demandadas na sequência.

### A.11 O relatório individual do participante como ativo comercial

O relatório individual tem duas funções: cumprir a contrapartida e demonstrar
capacidade técnica a 12 ou mais instituições que são potenciais clientes. Desenho
recomendado, de 8 a 12 páginas:

1. Carta de agradecimento assinada pelo Sócio, nominal.
2. Posicionamento da empresa versus mediana do seu recorte, por nível funcional,
   sem identificar as demais participantes.
3. Três a cinco achados específicos daquela empresa, escritos individualmente.
4. Prevalência de benefícios no painel versus o pacote da empresa.
5. Uma página de "o que fazer com esta informação", com recomendação genérica útil.
6. Página institucional discreta da ACTA, sem tom de venda.

O que faz esse material funcionar comercialmente não é o design, é o achado
específico. Relatório genérico com o logo do participante na capa produz o efeito
contrário.

## Parte B. Uso de IA no projeto

### B.1 O que a IA faz bem aqui

| Tarefa | Ganho | Condição |
| --- | --- | --- |
| Pré-classificação dos 265 cargos em família, nível e natureza | Reduz dias de trabalho manual a horas | Validação humana de 100% dos cargos críticos e por amostragem no restante |
| Sugestão de matching cargo do cliente versus cargo do participante | Primeira passada rápida | Aprovação humana obrigatória. IA sugere, consultor decide e assina |
| Normalização de nomenclatura e detecção de duplicidade e inconsistência na base de cargos | Encontra o que o olho humano perde em lista de 265 | Revisão da lista de exceções |
| Redação de textos padrão (carta-convite, FAQ, e-mails de follow-up, nota metodológica) | Velocidade | Revisão de tom e de fato |
| Redação dos achados dos relatórios individuais a partir dos números já calculados | Escala para 12 ou mais relatórios | Números vêm da base, nunca da IA |
| Geração de código (Python, DAX, fórmulas) para os cálculos | Reduz erro de digitação de fórmula | Teste com caso conhecido |
| Revisão crítica de conclusão (advogado do diabo) | Encontra fragilidade antes do cliente | Usar antes de cada Comitê Gestor |
| Estruturação de storyline e ghost deck | Acelera a Etapa 3 | Curadoria humana |

### B.2 O que a IA não faz neste projeto

1. **Não calcula estatística sobre a base.** Todo cálculo roda em Excel ou em
   script Python versionado, com resultado reproduzível. Modelo de linguagem
   fazendo aritmética sobre dado tabular não é auditável e não é reproduzível, e
   auditabilidade é requisito do projeto.
2. **Não recebe dado identificado de participante.** Nenhum nome de empresa
   associado a valor entra em ferramenta de IA. Trabalhe com `EMP-##`. Isso
   decorre da cláusula oitava do contrato e da LGPD, e vale mesmo para ferramentas
   corporativas.
3. **Não decide matching sozinha.** Matching errado contamina toda a estatística a
   jusante e é praticamente indetectável depois de agregado, exceto pelo teste de
   coeficiente de variação (C-14).
4. **Não inventa referência de mercado.** Se o dado não veio de participante, não
   existe. Não há complemento com estimativa de conhecimento geral do modelo, em
   nenhuma circunstância.
5. **Não emite parecer jurídico, trabalhista ou tributário.** Está fora de escopo
   contratual.

### B.3 Protocolo operacional de IA

1. **Contexto por skill, não por conversa.** Toda sessão de trabalho começa
   carregando este pacote de skills. Isso é o que garante que três consultores em
   três sessões separadas apliquem a mesma metodologia.
2. **Um cálculo, uma fonte.** A IA consulta o `03-livro-de-calculos.md`, não a
   memória. Se pedir um cálculo que não está no livro, a resposta correta é
   escrever a ficha no livro primeiro.
3. **Registro de decisão assistida.** Toda decisão metodológica tomada com apoio de
   IA entra no `B10_LOG_AUDITORIA` com a marca de que foi assistida e quem validou.
4. **Prompt com entrada explícita.** Nunca "analise a base". Sempre: qual arquivo,
   qual versão, qual grão, qual cálculo do livro, qual formato de saída.
5. **Checkpoint ao final de cada sessão.** Sem exceção. Atualize o checkpoint do
   projeto conforme `CHECKPOINT_TEMPLATE.md`: em projetos com mais de um
   consultor, o checkpoint individual de quem trabalhou na sessão e o arquivo
   mestre do projeto. Ver protocolo completo no `SKILL.md`, seção 7.
6. **Verificação cruzada de output crítico.** Números que vão para o relatório final
   são conferidos por caminho independente: se o Excel produziu, confira uma amostra
   com Python ou manualmente, e vice-versa.
