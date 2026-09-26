# Catálogo de testes da base

Detalhe de execução dos oito testes de `bateria-de-testes-de-base`. Cada entrada traz a regra de
aprovação, a fonte da evidência e as exceções conhecidas.

---

## T1. Existência da gravação

**Regra.** O arquivo nomeado no campo de gravação existe no acervo entregue, abre, e a duração é
compatível com o tempo mínimo de aplicação do roteiro.

**Fonte.** O acervo de gravações entregue pelo operador, conferido contra a base.

**Exceções.** Coleta que o instrumento prevê sem gravação, quando houver essa previsão escrita. A
previsão é conferida na norma, não na palavra do operador.

**Gravidade.** Máxima. Registro sem gravação não tem como ser confirmado por nenhum outro teste da
família de existência, e depende inteiramente do recontato.

---

## T2. Correspondência do nome do arquivo

**Regra.** Cada componente da convenção de nome bate com o campo correspondente da base: código do
local, tipo de coleta, identificador do evento, empresa ou entidade envolvida, data e hora.

**Fonte.** O próprio nome do arquivo, decomposto por regra fixa.

**Exceções.** Nenhuma. Divergência de componente é sempre registrada, ainda que a gravação esteja
correta, porque a convenção é o que torna o acervo navegável em auditoria futura.

**Sinal de alerta.** Dois registros diferentes apontando para o mesmo arquivo, ou arquivo cujo
identificador de evento pertence a outra linha da base. É indício de remanejamento.

---

## T3. Conferência do conteúdo

**Regra.** Ouvindo a gravação, cada resposta registrada na base é a resposta dada pelo respondente.

**Fonte.** A gravação. O papel de trabalho traz duas colunas lado a lado, valor informado na planilha
e valor informado na gravação, mais uma coluna de divergência.

**Exceções.** Trecho inaudível. Registre como inconclusivo, nunca como aprovado, e conte os
inconclusivos separadamente: excesso deles é achado sobre a qualidade do acervo.

**Leitura.** Divergência concentrada num item costuma ser erro de mapeamento de coluna. Divergência
espalhada num coletador é erro de pessoa.

---

## T4. Conferência do roteiro aplicado

**Regra.** As perguntas foram feitas com o texto obrigatório, na ordem prevista, com a escala
apresentada ao respondente.

**Fonte.** A gravação, contra a tabela de perguntas do dicionário.

**Exceções.** Adaptação de concordância e repetição da pergunta a pedido do respondente não são
desvio. Substituição do texto por paráfrase é.

**Sinal de alerta.** Pergunta não feita e campo preenchido. Isso sobe para T3, porque deixa de ser
desvio de roteiro e passa a ser registro sem origem.

---

## T5. Condicionalidade

**Regra.** Todo campo condicional respeita o gatilho declarado no dicionário. Gatilho negativo com
campo preenchido, e gatilho positivo com campo ausente, reprovam.

**Fonte.** A própria base. Automatizável, roda na população.

**Exceções.** Nenhuma. Quando o operador alega que o formulário permite, a alegação vira o achado.

---

## T6. Coerência entre contagens

**Regra.** As relações aritméticas entre campos numéricos se sustentam em todas as linhas: subtotal
que não excede total, contagem de etapa posterior que não excede a de etapa anterior, soma de partes
que fecha com o todo declarado.

**Fonte.** A própria base. Automatizável.

**Exceções.** Relação que a norma não impõe explicitamente. Nesse caso o teste vira analítico, e a
inconsistência entra como observação, não como reprovação.

---

## T7. Janela temporal

**Regra.** A data e hora da coleta caem dentro da janela plausível do evento observado, e nunca antes
dele.

**Fonte.** A base, contra o horário do evento na fonte oficial.

**Exceções.** Evento com horário alterado. Confira o horário realizado na fonte oficial, e não o
previsto, antes de reprovar.

**Leitura.** Reprovação isolada costuma ser digitação. Reprovação em bloco, num mesmo dia ou num
mesmo coletador, é indício de preenchimento posterior em lote.

---

## T8. Existência do evento na fonte oficial

**Regra.** O evento que o registro diz ter observado consta da base oficial de movimento, naquele
dia, com aquele identificador e aquela entidade operadora.

**Fonte.** A base oficial de movimento, obtida de origem independente do operador da pesquisa.

**Exceções.** Defasagem de publicação da fonte oficial. Se o período testado ainda não foi
consolidado, o teste é adiado e declarado como não executado, nunca dado por aprovado.

**Gravidade.** Alta, e é o teste mais forte da bateria, porque é o único que não depende de nenhum
insumo produzido pelo operador.

---

## Consolidação

| Situação derivada | Regra |
|---|---|
| Aprovado | Nenhuma reprovação |
| Aprovado com ressalva | Reprovação apenas em T5, T6 ou T7, sem concentração |
| Reprovado | Qualquer reprovação em T1, T2, T3 ou T8 |
| Inconclusivo | Gravação inaudível, ou T8 adiado por defasagem da fonte |

A regra fica escrita numa nota da planilha, e a coluna de situação é fórmula. Situação digitada à mão
não sobrevive à revisão.
