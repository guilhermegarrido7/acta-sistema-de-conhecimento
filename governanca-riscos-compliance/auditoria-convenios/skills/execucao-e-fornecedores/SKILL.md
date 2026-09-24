---
name: execucao-e-fornecedores
description: Teste o que o parceiro contratou com o recurso do convênio: estratificação da despesa, processo de contratação, due diligence de fornecedor no planilhão e evidência de execução do serviço. Acionar ao montar o planilhão de fornecedores, ao testar cotação e relacionamento entre concorrentes, ao verificar situação cadastral, ou ao criticar entregável.
---

# Execução do convênio e análise de fornecedores

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 valem aqui integralmente e não são repetidas.

Elo 5 do ciclo (`ciclo-do-convenio` §2). Blocos **CNV.06**, **CNV.07** e **CNV.08**.

**A fronteira com `acta-auditoria-compras`.** A mecânica de testar competição é a mesma dos dois
lados: sinais de direcionamento, independência dos concorrentes, cruzamento de quadro societário. O
que está em `acta-auditoria-compras:cotacao-e-selecao` §2 e §4 não se repete aqui, e se carrega junto
quando a contratação do parceiro for o foco do mandato. O que muda no convênio, e é o que esta skill
traz, são três coisas: **quem compra não é o cliente do trabalho**, e por isso não há sistema, tabela
de alçada nem trilha de aprovação para testar, só o que o parceiro anexou; **a regra de competição é
a da norma do concedente**, e não a política de compras de uma empresa; e **o desfecho do achado é
glosa**, valor a devolver, e não recomendação de melhoria de processo.

## 1. Estratifique antes de testar

Extraia a base detalhada de lançamentos do convênio no sistema de prestação de contas e estratifique
antes de escolher qualquer amostra. Quatro cortes, nesta ordem:

1. **Por natureza de despesa**: quantidade de lançamentos e valor, por rubrica (consultoria,
   instrutoria, evento, locação, viagem, material). Mostra onde o dinheiro está e qual rubrica pesa
   mais do que o plano de trabalho previa.
2. **Por fornecedor**: total por fornecedor, e principais fornecedores dentro de cada natureza. É
   onde a **concentração** aparece. Um fornecedor com participação desproporcional numa rubrica é o
   primeiro nome da lista de due diligence.
3. **Por status do lançamento no sistema**: aberto, concluído, validado, devolvido, rejeitado.
   Lançamento devolvido ou rejeitado e nunca retratado é despesa sem comprovação aceita, e o
   **aging** dessa fila mede a qualidade da análise do concedente.
4. **Por data contra a vigência**: lançamentos e pagamentos fora do período, dos dois lados, antes do
   início e depois do encerramento.

A estratificação é entregável em si, entra no relatório e dimensiona os testes seguintes.

## 2. CNV.06: o processo de contratação pelo parceiro

Para a amostra, dirigida aos maiores fornecedores e complementada por lançamentos selecionados dos
cortes acima, confira o que foi anexado ao sistema:

| Ponto | O que confirmar |
|---|---|
| Número de cotações | Atinge o mínimo que a norma exige. Três propostas provam três papéis, não três concorrentes |
| Vencedora de menor preço | Se não foi, existe documento formal justificando a escolha |
| Relacionamento entre concorrentes | Sócio, endereço, telefone ou domínio de e-mail comuns entre os que concorreram |
| Recorrência | Os mesmos concorrentes reaparecem em outros processos do mesmo convênio, sempre na mesma ordem de colocação |
| Contrato | Existe instrumento firmado, com objeto, prazo e preço, e não só a proposta aceita |
| Aderência da atividade | A atividade econômica do fornecedor comporta o serviço contratado |
| Qualificação | Currículo do prestador pessoa física, atestados de capacidade da pessoa jurídica, quantidade de empregados declarada |

**Teto de preço por hora.** Quando a norma do concedente fixa teto de remuneração para consultoria ou
instrutoria, esse é um teste de base e não de amostra: calcule o valor por hora de cada lançamento e
compare com o teto vigente na data. É barato, roda em 100% e costuma render glosa direta.

## 3. CNV.07: a due diligence de fornecedor, no planilhão

O **planilhão** é o papel de trabalho central deste bloco: uma linha por fornecedor do convênio, uma
coluna por verificação, todas as consultas registradas com data e fonte. Fornecedor que acende
qualquer sinal ganha papel de trabalho próprio, e o planilhão vira o índice deles.

As colunas, agrupadas pelo que cada grupo prova:

**Existência e regularidade.** Situação cadastral (ativa, inativa, baixada, suspensa), data de
abertura e data de baixa, atividade econômica principal e secundárias, capital social, certidões.
Os dois cortes que decidem: **empresa baixada antes ou durante a execução** continuando a emitir
documento, e **empresa aberta pouco antes da cotação** de que participou.

**Endereço.** Endereço do cartão de inscrição contra o do contrato e o do documento fiscal;
fornecedores distintos no mesmo endereço; endereço igual ao do parceiro; endereço inválido,
incompleto ou que a consulta a mapa mostra ser incompatível com a atividade.

**Quadro societário e relacionamento (`CNV.R14`).** Sócios e administradores, relacionamento entre os
sócios dos fornecedores e as pessoas do parceiro e do concedente que analisaram, contrataram ou
atestaram, e relacionamento entre os próprios fornecedores. Estenda o cruzamento a **fundações e
associações** pagas pelo convênio: o conflito ali costuma estar no quadro de associados, não no
societário, e é por isso que passa despercebido.

**Reputação.** Pesquisa de mídia, consulta a cadastros públicos de inidoneidade, processos
relevantes. Registre a fonte e a data de cada consulta; sem isso o achado não se sustenta.

> **Dado pessoal.** O cruzamento com base de pessoal e com quadro de associados é tratamento de dado
> pessoal. Vale integralmente `acta-way:anonimizacao-e-lgpd`: base mínima, finalidade declarada,
> descarte ao fim do trabalho, e descrição do achado **pelo papel e pelo vínculo**, nunca pelo nome
> da pessoa.

## 4. Documento fiscal: os cortes sobre a base

`CNV.R15` e o que a análise documental revela sozinha. Rode na base inteira, não em amostra:

1. **Notas do mesmo fornecedor na mesma competência**, várias, sem entrega que justifique múltiplos
   faturamentos no mês. Compare quantidade de notas, valor total faturado e valor total pago.
2. **Pagamento fixo mensal recorrente** ao mesmo prestador pessoa física por período longo, com
   valor constante. É o desenho de vínculo empregatício travestido de prestação de serviço, e o
   achado é trabalhista antes de ser de convênio.
3. **Notas emitidas fora da vigência**, antes da assinatura ou depois do encerramento da execução.
4. **Notas sequenciadas** emitidas para o convênio, indicando que o convênio é o único ou o principal
   cliente daquele fornecedor, o que caracteriza dependência financeira.
5. **Lançamento em duplicidade** no sistema, pela chave fornecedor mais número do documento mais
   valor, e pela variante com número digitado diferente, casando por valor e data próxima.
6. **Nota cancelada depois de lançada** no sistema e nunca estornada.

## 5. CNV.08: a evidência de execução do serviço

O teste que separa a auditoria de convênio da conferência de documento fiscal. A pergunta não é se a
nota existe, é **que produto o serviço gerou**, e a resposta tem de ser um objeto: medição com
quantitativo, relatório de consultoria, lista de presença assinada, registro do evento com data,
material didático, apontamento de horas conferido.

Três críticas sobre o entregável, e a terceira é a que costuma faltar no trabalho apressado:

- **Existe?** Está anexado ao sistema, junto ao lançamento, e não prometido em resposta a ofício.
- **Corresponde ao objeto?** Relatório genérico, lista de presença sem data, foto sem identificação
  do evento comprovam que algo aconteceu, não que aconteceu **aquilo** que foi pago.
- **Corresponde à qualificação de quem executou?** Prestador cuja formação e cuja atividade
  econômica são de outra área executando serviço que exige a do objeto indica capacidade técnica
  frágil ou inexistente. O sinal é grosseiro e aparece cruzando atividade econômica do fornecedor
  com natureza do serviço na estratificação.

**Quem atestou.** A medição foi aprovada por gestor do concedente ou do parceiro, e essa pessoa é
distinta de quem decidiu a contratação? Ateste pela mesma mão que contratou fecha o ciclo dentro do
parceiro e é achado de segregação, mesmo quando o serviço existiu.

## O que entregar

1. A estratificação da despesa por natureza, por fornecedor, por status e contra a vigência.
2. O planilhão de fornecedores, completo, com fonte e data de cada consulta.
3. O papel de trabalho individual dos fornecedores que acenderam sinal.
4. Os cortes sobre documento fiscal, com a população testada e os resíduos de cada corte.
5. A crítica de evidência de execução por lançamento testado, com a conclusão sobre cada um.
6. Os valores propostos para glosa, por lançamento, com o critério de análise que os sustenta.

## Próximo passo

`prestacao-de-contas`, para a reconciliação do extrato contra o sistema e o teste das parcelas.
