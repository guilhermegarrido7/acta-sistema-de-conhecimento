---
name: instrumento-de-coleta
description: Desenhe e homologue o formulário de coleta e o dicionário de dados do projeto. Acionar ao estruturar os blocos do instrumento, ao ativar módulo condicional de moeda, horista ou encargos, ao definir validação na entrada e tabelas de domínio, ao escolher a tecnologia de coleta, ou ao homologar com participante-piloto.
---

# Instrumento de coleta

Etapa 5. Entra depois que o painel está aprovado e os convites saíram, e antes de
qualquer dado entrar. Esta é a última etapa em que errar custa barato: campo que
falta no formulário só reaparece como cálculo impossível na Etapa 7, quando o
participante já respondeu e não vai responder de novo.

Carregue `metodo-pesquisa-salarial` antes desta skill. As regras de ouro, o cartão
de identidade e os mínimos de anonimização valem aqui e não são repetidos.
O esquema campo a campo vive em `references/02-dicionario-de-dados.md`; esta skill
é o processo de montar, parametrizar e homologar o instrumento a partir dele.

## 1. A regra que ordena tudo: do cálculo para a pergunta

Toda pergunta do formulário existe porque alimenta um campo de `B5_COLETA_BRUTA` e
um ID do `references/03-livro-de-calculos.md`. A montagem é feita de trás para
frente, nesta ordem:

1. Listar os cálculos que o escopo contratado exige (Grupo 2 sempre; Grupo 4
   sempre; Grupo 6 só se o cartão de identidade ativar).
2. Listar os campos de B5 que esses cálculos consomem.
3. Escrever a pergunta que produz cada campo.
4. Rodar o caminho inverso: para cada pergunta do rascunho, nomear o cálculo que
   ela alimenta. Pergunta sem cálculo sai do formulário.

O passo 4 não é conferência de formalidade. É o que segura a extensão do
instrumento, e extensão é a principal causa de não resposta em pesquisa
proprietária. Cada bloco precisa caber em menos de 20 minutos.

## 2. Os blocos e a decisão de ativar cada um

| Bloco | Grão | Quando ativar | Ativação |
| --- | --- | --- | --- |
| A. Identificação e contexto | Participante | Sempre | Fixo |
| B. Remuneração fixa | Cargo x participante | Sempre | Fixo |
| C. Remuneração variável | Cargo x participante | Se o escopo incluir variável | Escopo, Etapa 1 |
| D. Benefícios | Participante x nível funcional | Se o escopo incluir benefícios | Escopo, Etapa 1 |
| E. Encargos e custo total | Participante | Só se custo de folha estiver contratado | Escopo, Etapa 1 |
| F. Conversão cambial | Valor | Se houver mais de uma moeda no painel | Cartão de identidade, C-25 |
| G. Espelho interno do cliente | Cargo x população interna | Sempre | Fixo |

Duas escolhas de grão que economizam a taxa de resposta e costumam ser desfeitas
por quem não conhece a etapa: benefício se coleta por participante e nível
funcional, nunca por cargo, senão o esforço do respondente é multiplicado pelo
número de cargos do escopo; remuneração variável se coleta pelo valor pago no
último ciclo, não pelo target, porque target não pago é intenção e não entra em
estatística de mercado.

O bloco G é o que torna a regra R4 executável. Sem os campos de população interna
(unidade, regional, tipo de unidade, regime), nenhum resultado segmentado sai
depois. Confirme contra as particularidades estruturais registradas no cartão de
identidade antes de fechar o bloco.

## 3. Módulos condicionais: ativar cedo ou não ativar

Três módulos mudam o formulário inteiro e precisam estar decididos antes do piloto.
A decisão é da Etapa 1 e está no cartão de identidade; a Etapa 5 apenas executa e,
se encontrar o cartão em branco nesses pontos, volta e fecha antes de desenhar.

| Módulo | Campos que acrescenta | Consequência de ativar tarde |
| --- | --- | --- |
| Conversão cambial (C-25) | `moeda` em cada valor, `pais_moeda_operacional` | Base com moedas misturadas e sem marcação de origem, irrecuperável sem recontato |
| Mensalização de horista (C-26) | `regime_jornada`, `carga_horaria_referencia_h` | Valor por hora somado a valor mensal, erro que a estatística não denuncia |
| Encargos e custo total (C-13) | Bloco E inteiro | Análise de custo prometida e sem insumo |

Regra prática: módulo ativado sem necessidade é atrito de resposta; módulo
necessário e não ativado é retrabalho de campo. Na dúvida entre os dois, pergunte
ao ponto focal do cliente qual regime de jornada e qual moeda existem no painel
esperado, em vez de deduzir pelo setor.

## 4. Validação na entrada

Regra de consistência aplicada na tela custa uma fração do esforço de corrigir
depois por e-mail, e evita a rodada de saneamento que consome a Etapa 6. O
conjunto mínimo, que vale para qualquer projeto:

| Validação | Regra | Comportamento |
| --- | --- | --- |
| Ordenação da faixa | `minimo <= medio <= maximo`, e a mediana dentro da faixa se informada | Bloqueia o avanço |
| Piso | `salario_base_minimo` maior ou igual ao piso declarado | Bloqueia, com campo de justificativa |
| Incumbentes | `n_incumbentes >= 0` | Bloqueia negativo |
| Cargo sem ocupante | `n_incumbentes = 0` | Aceita e marca para exclusão automática por C-27, sem pedir salário |
| Amplitude suspeita | `maximo / minimo` acima de 3 | Alerta na tela, não bloqueia, pede confirmação. Em geral indica cargos distintos sob o mesmo título |
| Obrigatórios mínimos | Valor, jornada, incumbentes e data de referência | Sem os quatro, a linha não entra em estatística |
| Coerência de regime | Jornada semanal obrigatória se mensalista ou escala; carga de referência obrigatória se horista | Bloqueia |

Prefira alerta a bloqueio sempre que o valor puder ser legítimo. Bloqueio em cima
de dado verdadeiro faz o participante inventar um número que passe, e esse erro
entra na base sem deixar rastro.

## 5. Tabelas de domínio e pré-preenchimento

Toda lista fechada vive em tabela de domínio própria (`Dom_*`), nunca digitada
direto na base. As fixas entre projetos são `Dom_GrauMatch`, `Dom_StatusConvite`,
`Dom_ClassificacaoGap`, `Dom_RegimeJornada` e `Dom_RegimeEscala`. As definidas por
projeto são `Dom_Recorte`, `Dom_NivelFuncional` e `Dom_Natureza`, que ficam estáveis
depois de fechadas: mudar domínio com campo aberto invalida as respostas já
recebidas.

O formulário sai pré-preenchido com o pré-matching daquele participante (saída de
`B4_MATCHING`, ver `matching-cargos`). O participante confirma, corrige ou marca
"não temos". Enviar formulário em branco devolve o trabalho de equivalência para o
respondente, que vai compará-lo por título, exatamente o que a metodologia proíbe.
O `cod_empresa` vai oculto e pré-preenchido; nunca se pede ao respondente.

Dado pessoal do interlocutor (nome, cargo, e-mail, telefone) fica em base
segregada de acesso restrito, separada dos valores de remuneração, desde a
exportação.

## 6. Escolha da tecnologia

Requisitos em ordem de criticidade, conforme `references/02-dicionario-de-dados.md`,
seção 10: pré-preenchimento por participante; salvar e retomar; validação
condicional e lógica de salto; upload de planilha como alternativa; exportação
tabular limpa; hospedagem e retenção compatíveis com a LGPD e com a política de
segurança da informação do cliente.

O primeiro requisito é o que decide na prática. Escopo pequeno e sem exigência de
pré-preenchimento individual funciona em formulário web simples, já validado em
campo. Escopo de dezenas ou centenas de cargos elimina as ferramentas mais simples
e favorece planilha estruturada por participante, com o formulário web reservado ao
bloco de benefícios, que é por participante e não por cargo. Registre a decisão e a
justificativa em `B10_LOG_AUDITORIA`.

Qualquer que seja a ferramenta, o instrumento precisa produzir um arquivo tabular
que carregue em B5 sem edição manual. Coleta que exige alguém redigitando valores
introduz erro que nenhum check pega.

## 7. Homologação com participante-piloto

Validação interna não substitui piloto. O piloto é um participante real, do painel,
que preenche o instrumento inteiro com dados reais e é entrevistado depois. O que
se procura:

1. **Tempo real de preenchimento por bloco.** Se passar de 20 minutos, corte
   perguntas, começando pelas que não têm cálculo associado.
2. **Perguntas que ele não soube responder** por não ter o dado no sistema de
   folha. Campo que o mercado não tem sai ou vira opcional.
3. **Termos que ele interpretou diferente do pretendido.** A correção é na
   definição em tela, não em anexo que ninguém abre.
4. **Validações que dispararam em dado legítimo.** Cada falso bloqueio vira alerta.
5. **O caminho da exportação.** Exporte o retorno do piloto e carregue em B5 de
   ponta a ponta, antes de abrir o campo para os demais.

O dado do piloto entra na base normalmente se o instrumento não mudou depois dele.
Se mudou em campo obrigatório, o piloto responde de novo a parte alterada.

## 8. Artefato e onde grava

| Artefato | Onde | Nomenclatura |
| --- | --- | --- |
| Formulário de coleta homologado, um por participante quando houver pré-preenchimento | `~~pasta de trabalho`, pasta de coleta | `AAAAMMDD_FORMULARIO_<cod_empresa>_vNN` |
| Dicionário de dados do projeto, com módulos ativos marcados | `~~pasta de trabalho` | `AAAAMMDD_DICIONARIO_vNN.md` |
| Tabelas de domínio do projeto | Aba própria do arquivo de dimensões | `Bn_DIMENSOES`, abas `Dom_*` |
| Registro da decisão de tecnologia e do resultado do piloto | `B10_LOG_AUDITORIA` | Evento com autor e data |

## 9. Gate de qualidade da etapa

A etapa fecha quando tudo abaixo é verdadeiro. Item aberto trava a abertura do
campo, não a adia para depois do primeiro envio.

- [ ] Cada pergunta do formulário aponta para um campo de B5 e um ID do livro de
      cálculos. Nenhuma pergunta órfã.
- [ ] Cada campo de B5 que algum cálculo do escopo consome tem uma pergunta que o
      produz. Nenhum cálculo sem insumo.
- [ ] Os módulos condicionais foram decididos contra o cartão de identidade, com a
      decisão registrada, inclusive quando a decisão foi não ativar.
- [ ] Os quatro obrigatórios mínimos estão marcados como obrigatórios de fato na
      ferramenta, não apenas no texto.
- [ ] As validações de ordenação, piso, incumbentes e coerência de regime foram
      testadas com valor que deveria falhar e falharam.
- [ ] Toda lista fechada vem de `Dom_*`, sem digitação livre.
- [ ] O formulário sai pré-preenchido com o pré-matching de B4 por participante.
- [ ] O bloco G cobre todas as populações internas heterogêneas do cartão de
      identidade.
- [ ] Um participante real preencheu, foi entrevistado, e os achados do piloto
      foram tratados ou registrados como aceitos.
- [ ] O retorno do piloto foi exportado e carregado em B5 sem edição manual.
- [ ] Dados de contato do interlocutor exportam para base segregada.
- [ ] A decisão de tecnologia, com justificativa, está em B10.

## 10. Erros a evitar

- Desenhar o formulário a partir do que é fácil perguntar, e descobrir na Etapa 7
  que falta a jornada, a data de referência ou o número de incumbentes.
- Homologar só internamente. A equipe conhece as definições e por isso não tropeça
  nelas.
- Coletar benefício por cargo. Triplica o tempo do respondente e não melhora a
  análise, que é por nível funcional.
- Coletar salário base com adicionais embutidos. Insalubridade, periculosidade e
  noturno vão em campo próprio, senão C-11 fica sem camadas para explicar diferença
  de composição.
- Mudar tabela de domínio com o campo aberto.
- Deixar o participante escolher a taxa de câmbio ou a data da cotação. A taxa é
  única para o projeto e fixada na data-base (C-25).
- Abrir o campo antes de o pré-matching estar pronto. O matching precede a coleta
  porque define o que se pergunta.
