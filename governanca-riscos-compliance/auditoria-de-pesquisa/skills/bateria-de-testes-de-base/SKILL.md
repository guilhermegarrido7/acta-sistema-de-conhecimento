---
name: bateria-de-testes-de-base
description: Rode a bateria de oito testes sobre a base entregue pelo operador, da existência do evento na fonte oficial à conferência da gravação contra o registro, e consolide o resultado por teste e por registro. Acionar ao receber a base de uma pesquisa para verificar, ao montar a planilha de testes, ou ao classificar registro reprovado.
---

# A bateria de testes de base

Carregue antes: `acta-way` e `acta-metodo-auditoria`. A doutrina do número exato e a regra de
evidência vivem lá.

## 1. O desenho da bateria

Oito testes, cada um numa coluna própria da planilha de teste, cada um com resultado binário por
registro. A planilha não tem coluna de parecer geral: **o parecer é derivado, nunca digitado**.

O desenho existe para uma finalidade: separar **erro de preenchimento** de **coleta que não existiu**.
São falhas de gravidade radicalmente diferente, e uma planilha de teste que devolve só "reprovado"
força o auditor a reabrir todo o trabalho para responder a primeira pergunta do cliente.

| Família | Testes | O que uma falha significa |
|---|---|---|
| Existência | 1, 2 | A coleta pode não ter ocorrido |
| Correspondência | 3, 4 | O registro não reflete o que foi coletado |
| Consistência interna | 5, 6, 7 | Erro de preenchimento ou de codificação |
| Consistência externa | 8 | O evento declarado não confere com a fonte oficial |

## 2. Os oito testes

**T1, existência da gravação.** Para cada registro, o arquivo nomeado no campo de gravação existe,
abre e tem duração compatível com o roteiro. Ausência de arquivo é a falha mais grave da bateria.

**T2, correspondência do nome do arquivo.** A convenção de nome carrega os dados de identificação do
registro, e todos precisam bater com os campos da base: local, tipo de coleta, identificador do
evento, data e hora. Arquivo cujo nome aponta para outro registro é indício de remanejamento de
gravação entre linhas, e isso é achado por si só.

**T3, conferência do conteúdo.** Ouvindo a gravação, as respostas registradas na base são as respostas
dadas. O papel de trabalho tem duas colunas lado a lado, **valor informado na planilha** e **valor
informado na gravação**, e a divergência fica visível sem interpretação.

**T4, conferência do roteiro aplicado.** Ainda na gravação: as perguntas foram feitas com o texto
obrigatório, na ordem, com a escala apresentada. Pergunta pulada com resposta preenchida é falha de
correspondência, não de roteiro, e sobe para T3.

**T5, condicionalidade.** Todo campo condicional respeita o gatilho. Quem declarou não usar um
serviço não pode ter nota naquele serviço, e quem declarou usar não pode ter ausência. É o teste mais
barato da bateria e o que mais pega preenchimento automático.

**T6, coerência entre contagens.** Campos numéricos que se relacionam obedecem à relação. Subtotal que
não pode exceder total, contagem de acompanhantes de uma etapa que não pode exceder a de outra,
soma de partes que fecha com o todo declarado.

**T7, janela temporal.** A hora da coleta cai dentro da janela plausível do evento observado, e a
data da coleta não é anterior ao evento. Coleta registrada fora da janela é erro de digitação na
maioria dos casos e é coleta inventada na minoria, e a bateria não decide qual: sinaliza.

**T8, existência do evento na fonte oficial.** O evento que o registro diz ter observado aparece na
base oficial de movimento, naquele dia, com aquele identificador. É o único teste que não depende de
nada que o operador tenha produzido, e por isso é o mais forte.

O detalhe de execução de cada teste, com a regra de aprovação e o tratamento das exceções
conhecidas, está em [references/catalogo-de-testes.md](references/catalogo-de-testes.md).

## 3. A planilha de teste

Uma linha por registro da amostra testada. Colunas, nesta ordem:

```
#  |  chave do registro  |  T1 ... T8  |  ocorrências  |  situação derivada
```

Três disciplinas que fazem a planilha sobreviver à revisão:

- **A chave do registro é o sequencial da amostra**, não o nome da pessoa. O vínculo com o dado
  pessoal vive num papel separado, com acesso restrito.
- **Célula de teste guarda o resultado, não a explicação.** A explicação vai para a coluna de
  ocorrências, codificada.
- **A situação derivada é fórmula.** Qualquer falha de existência reprova o registro; falhas de
  consistência isoladas geram ressalva. A regra fica escrita numa nota da planilha.

## 4. Amostra da bateria

A bateria é cara: T1 a T4 exigem ouvir a gravação inteira. Ela roda sobre uma **subamostra** da base,
e o dimensionamento dela segue `acta-controles-internos:teste-e-amostragem`.

Duas regras próprias deste trabalho:

- **A subamostra cobre todos os coletadores.** Qualidade de coleta varia mais entre pessoas do que
  entre dias, e um coletador com falha sistemática é o achado de maior valor do trabalho inteiro.
- **T5 a T8 rodam sobre a base completa**, porque são automatizáveis. Não há razão para amostrar teste
  que o computador faz em segundos, e a cobertura total muda a redação do achado de "na amostra
  testada" para "na população".

## 5. Consolidação

Duas leituras, e as duas entram no relatório.

**Por teste.** Taxa de aprovação de cada um dos oito, que aponta onde o processo do operador falha.
Um T5 com reprovação alta é defeito de sistema de coleta; um T3 com reprovação alta é defeito de
pessoas.

**Por registro.** Quantos registros aprovam integralmente, quantos com ressalva, quantos reprovam. É
esta leitura que alimenta a opinião sobre a base, e é ela que o contratante lê primeiro.

> **O achado nunca é a taxa.** É a causa. "12% dos registros reprovaram em T5" é medição. "O
> formulário não bloqueia nota em serviço declarado como não utilizado, e por isso 12% dos registros
> trazem avaliação de serviço que o respondente disse não ter usado" é achado.

## Fronteiras

| Se o assunto é | A skill é |
|---|---|
| Confirmar com o respondente que a coleta ocorreu | `recontato-do-respondente` |
| Dimensionar a subamostra | `acta-controles-internos:teste-e-amostragem` |
| Redigir o achado | `acta-metodo-auditoria:redacao-de-achados` |
