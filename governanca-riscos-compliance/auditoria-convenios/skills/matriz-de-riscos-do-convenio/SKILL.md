---
name: matriz-de-riscos-do-convenio
description: Monte o registro de riscos e a matriz risco por controle e por teste do ciclo de convênios, com os dezoito riscos codificados da casa. Acionar ao abrir o programa de testes de convênio, ao verificar se a matriz do mandato cobre desvio de finalidade, contrapartida fictícia, fornecedor sem lastro e meta inauditável, ou ao promover risco novo.
---

# Matriz de riscos e controles do convênio

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 valem aqui integralmente e não são repetidas. Este plugin é de processo auditado;
o método vive no plugin de método.

A taxonomia de tipo de teste, a régua de amostragem, os conceitos de risco e o formato do código
`<CódProcesso>.R<NN>` estão em `programa-de-testes`. A estrutura formal da matriz risco por controle,
o walkthrough e a distinção entre desenho e efetividade estão em `acta-controles-internos`.

**A classificação de categoria não se inventa aqui.** Todo risco desta matriz se classifica no
Dicionário de Riscos da casa, em `acta-gestao-de-riscos:taxonomia-de-riscos`, pela categoria
numerada. As categorias que o convênio mais usa são Compliance, Conduta Antiética e Fraude,
Parcerias e Alianças Estratégicas, Terceirizações e Parcerias, Obrigações Contratuais, Indicadores
de Gestão e Legal e Societário. Vocabulário novo de risco se propõe lá, não aqui.

## 1. Os dezoito riscos do ciclo do convênio

Processo `CNV`. Severidade é sugestão de partida; calibre no caso.

| Código | Elo | Risco | Controle (melhor prática) | Como se testa | WP | Sev. |
|---|---|---|---|---|---|---|
| `CNV.R01` | Projeto | Objeto sem aderência ao objetivo estratégico do concedente, ou projeto vinculado a ação sem relação com ele | Análise técnica de aderência antes da aprovação, com vinculação declarada a projeto e ação | Leitura do objeto contra o objetivo declarado e contra a ação a que foi vinculado | CNV.01 | Média |
| `CNV.R02` | Projeto | Plano de trabalho emitido depois do início da execução, ou sem rubrica e cronograma que permitam medir | Aprovação do plano antes da execução, com detalhamento de recurso, ação e cronograma físico e financeiro | Data de emissão e aprovação do plano contra a data do primeiro gasto | CNV.01 | Alta |
| `CNV.R03` | Habilitação | Parceiro sem capacidade técnica comprovada para o objeto, ou constituído pouco antes da celebração | Atestados de capacidade técnica de terceiros e exigência de tempo mínimo de constituição | Data de abertura do cadastro nacional contra a data do instrumento; atestados apresentados e sua origem | CNV.02 | Alta |
| `CNV.R04` | Habilitação | Parceiro com irregularidade fiscal, trabalhista ou registro em cadastro de inidôneos, aceito assim mesmo | Certidões com status regular na celebração e consulta aos cadastros públicos de inidoneidade | Certidões por data de emissão e validade; consulta aos cadastros na data da celebração | CNV.02 | Alta |
| `CNV.R05` ★ | Habilitação | Parceiro com pendência em convênio anterior recebendo novo repasse | Declaração da área contábil sobre prestação de contas de convênios anteriores, com débito vencido e vincendo | Consulta ao histórico do parceiro; existência e data da declaração; o que ela informou | CNV.02 | Alta |
| `CNV.R06` | Instrumento | Parecer obrigatório ausente, emitido depois da assinatura, ou com ressalva que ninguém tratou | Pareceres jurídico, orçamentário e estratégico anteriores à assinatura, com ressalva endereçada | Data de cada parecer contra a data do instrumento; rastreio da ressalva até a decisão | CNV.03 | Alta |
| `CNV.R07` | Instrumento | Documento do convênio assinado por gestor não designado ou fora da alçada | Designação formal do gestor do convênio e tabela de alçada de celebração | Assinante de cada documento contra o ato de designação e a alçada vigente na data | CNV.03 | Alta |
| `CNV.R08` | Instrumento | Excepcionalidade acatada na aprovação sem justificativa formal nem conhecimento da instância superior | Justificativa escrita e aprovação da exceção na instância competente | Relação das exceções acatadas; documento suporte de cada uma | CNV.03 | Média |
| `CNV.R09` | Governança | Matriz de risco do convênio não elaborada, fora do prazo, ou silenciando situação já conhecida | Matriz no prazo normativo, encaminhada à instância de governança | Data de elaboração e de encaminhamento; confronto do conteúdo com o que os pareceres apontaram | CNV.04 | Média |
| `CNV.R10` | Aporte | Aporte do concedente acima do teto normativo, contrapartida abaixo do piso, ou parcela econômica além do limite | Composição de aporte parametrizada e conferida a cada liberação | Recomposição do aporte por modalidade contra o teto e o piso da norma, em 100% das parcelas | CNV.05 | Alta |
| `CNV.R11` ★ | Aporte | Parcela liberada sem a execução mínima da anterior ou sem prestação de contas parcial analisada | Liberação condicionada à execução financeira mínima da parcela anterior e à análise da prestação parcial | Despesa incorrida até a data de cada liberação ÷ parcela anterior, apurada no sistema e no extrato | CNV.05 | Alta |
| `CNV.R12` | Contratação | Fornecedor contratado sem competição, com concorrentes relacionados entre si, ou com vencedora que não foi a de menor preço sem justificativa | Número mínimo de cotações de fornecedores independentes, critério declarado e justificativa formal para a exceção | Mapa de cotação por contratação; relacionamento societário e de endereço entre concorrentes; recorrência dos mesmos concorrentes | CNV.06 | Alta |
| `CNV.R13` ★ | Fornecedor | Fornecedor sem existência real ou sem qualificação para o serviço: inativo, baixado, endereço inválido, atividade econômica alheia ao objeto | Due diligence na contratação, com verificação cadastral, de endereço e de aderência da atividade | Planilhão de fornecedores: situação cadastral, data de abertura e de baixa, endereço, atividade econômica contra o serviço prestado | CNV.07 | Alta |
| `CNV.R14` ★ | Fornecedor | Conflito de interesse: sócio de fornecedor com vínculo com o parceiro ou com o concedente, inclusive por associação ou fundação de que faça parte | Declaração de conflito, consulta a quadro societário e segregação entre quem contrata e quem atesta | Cruzamento de quadro societário e endereço com a base de pessoal e com os associados das entidades pagas | CNV.07 | Alta |
| `CNV.R15` | Execução | Serviço pago sem evidência de entrega, ou com entregável que não corresponde ao objeto contratado | Produto do serviço arquivado junto ao lançamento e ateste por quem não contratou | Amostra dos maiores lançamentos: existe medição, relatório, lista de presença ou registro do evento, e ele corresponde ao objeto | CNV.08 | Alta |
| `CNV.R16` ★ | Prestação de contas | **Desvio de finalidade**: recurso transferido para outra conta do parceiro, usado fora do objeto, ou pago fora da vigência | Conta exclusiva do convênio, conciliação periódica e bloqueio de transferência para conta própria | Reconciliação extrato contra sistema em 100%: transferência entre contas do parceiro, movimentação fora da vigência, saldo negativo | CNV.09 | Alta |
| `CNV.R17` | Prestação de contas | Lançamento no sistema sem contrapartida no extrato, pagamento no extrato não registrado no sistema, ou receita de aplicação financeira apropriada pelo parceiro | Conciliação de saldo e de movimento entre extrato e sistema, com rendimento tratado como novo aporte | Casamento dos dois lados por valor e data, com consumo de pool; apuração do rendimento e do seu destino | CNV.09 | Alta |
| `CNV.R18` ★ | Resultado | **Meta inauditável**: meta subjetiva, sem critério de apuração, medida por evidência que não comprova, ou com erro de cálculo | Meta com indicador, fórmula e fonte de dado declarados no plano de trabalho, medida com evidência crítica | Leitura de cada meta contra o critério; recálculo do indicador; crítica da evidência apresentada | CNV.10 | Alta |

★ = os cinco riscos que decidem a auditoria de convênio. Ver §2.

## 2. Os cinco que decidem o trabalho

Programa de convênio que confere se a documentação exigida está anexada e se a prestação de contas
foi entregue no prazo passa a impressão de cobertura e não encosta em nenhum dos cinco abaixo.

**1. Pendência de convênio anterior (`CNV.R05`).** O único teste do ciclo que se faz **antes** de
olhar o convênio auditado, e o que mais rápido revela falha de processo do concedente. Parceiro com
débito ou prestação não aprovada que recebe repasse novo é achado sobre o controle de concessão, não
sobre a execução.

**2. Execução mínima antes da parcela seguinte (`CNV.R11`).** A regra existe para impedir que o
caixa do parceiro engorde com recurso parado. Apure a despesa incorrida até a data da liberação pelos
**dois lados**, sistema e extrato, porque o sistema aceita lançamento que o extrato não confirma, e é
exatamente esse par que decide o achado.

**3. Fornecedor sem lastro (`CNV.R13`).** O parceiro contrata, e o concedente só vê o documento
fiscal. Empresa baixada antes da execução, endereço que não existe, atividade econômica de um ramo
executando serviço de outro: tudo isso se apura fora da base do convênio, por consulta pública, e é
barato. A ausência desse teste é o que permite que o mesmo fornecedor atravesse vários convênios.

**4. Desvio de finalidade (`CNV.R16`).** A transferência do recurso da conta do convênio para outra
conta do parceiro é o achado mais grave do ciclo e o mais simples de demonstrar, desde que se tenha
o extrato completo. Duas perguntas encadeadas: houve uso de recurso do concedente na transferência, e
o valor voltou para a conta do convênio? A resposta à segunda decide se o achado é desvio consumado
ou uso temporário, e as duas geram glosa.

**5. Meta inauditável (`CNV.R18`).** É achado do elo 1 que só aparece no elo 7. Meta escrita como
"fortalecer a gestão das empresas atendidas", sem indicador nem fonte, não pode ser cumprida nem
descumprida, e o convênio inteiro fica sem critério de sucesso. Escreva o ponto contra o **desenho da
meta no plano de trabalho**, não contra o relatório do parceiro.

**Uma nota de categoria.** Desvio de finalidade e contrapartida fictícia costumam ser classificados
como falha de prestação de contas. São eventos de **conduta antiética e fraude** no Dicionário de
Riscos, com controle e severidade próprios, e classificá-los como falha administrativa os some do
mapa de calor onde o comitê precisa vê-los.

## 3. Como usar a matriz num mandato

1. **Parta dos dezoito.** São o piso, não o teto.
2. **Marque a aplicabilidade elo a elo**, usando as seis perguntas de `ciclo-do-convenio` §6. Convênio
   vigente não tem `CNV.R18` fechado, e isso se declara.
3. **Acrescente o que o mandato trouxer.** Convênio de obra traz medição e retenção; convênio de
   pesquisa traz bolsa e propriedade intelectual; convênio com repasse a rede de entidades traz o
   risco de subconvênio, que tem ciclo próprio e não está aqui.
4. **Associe controle e teste por código**, sem repetir o texto do risco na linha do controle.
5. **Classifique no Dicionário de Riscos da casa** e promova o risco novo de volta para cá ao fechar.

## 4. Quando o concedente já tem a própria matriz

O convênio tem uma particularidade: a matriz de risco **do convênio** costuma ser peça normativa
obrigatória, elaborada pelas áreas do concedente na celebração. Ela é ao mesmo tempo controle a
testar (`CNV.R09`) e insumo do seu trabalho. Não a herde sem confrontar:

- **O que ela não reportou.** Compare o conteúdo dela com as ressalvas dos pareceres e com o
  histórico do parceiro. Risco conhecido pela casa e ausente da matriz é achado de desenho.
- **Se saiu do papel.** Matriz elaborada, encaminhada e nunca revisitada durante a vigência é
  formalidade cumprida sem controle exercido, e se conclui assim.
- **Quem a elaborou.** Elaborada pela mesma área que propôs o convênio e aprovou a prestação de
  contas, sem revisão independente, é autoavaliação.

## O que entregar

1. O registro de riscos do mandato, código `CNV.R<NN>`, com a categoria do Dicionário de Riscos.
2. A matriz risco por controle e por teste, associada por código.
3. A lista dos riscos declarados inaplicáveis, com a razão de cada um.
4. O confronto com a matriz de risco do convênio elaborada pelo concedente, e os riscos ausentes.
5. Os riscos novos que o mandato revelou, prontos para promoção a esta matriz.

## Próximo passo

`programa-de-testes`, para converter a matriz em programa com tipo de teste, frequência e régua de
amostragem; depois as skills de elo, na ordem do ciclo.
