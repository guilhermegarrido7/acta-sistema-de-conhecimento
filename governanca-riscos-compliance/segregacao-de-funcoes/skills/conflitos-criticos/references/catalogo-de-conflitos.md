# Catálogo de conflitos de segregação de funções

Detalhe operacional da skill `conflitos-criticos`. Consulte ao montar a matriz do mandato, ao
escrever o dano de uma célula, ou ao decidir se um par se aplica.

Código estável no padrão `SOD.<NN>`. **Nunca renumere código já emitido**: ele já está em matriz,
papel de trabalho e slide. Ao acrescentar par novo, continue a numeração.

As severidades abaixo são **calibração de partida**, não veredito. A régua de `matriz-de-sod` §5
vale caso a caso, e alçada de valor baixa rebaixa a severidade de vários destes pares.

## 1. Desembolso

| Cód. | Função A | Função B | Dano concreto | Severidade | Como se testa |
|---|---|---|---|---|---|
| `SOD.01` | Cadastrar ou alterar fornecedor | Liberar pagamento | Cria o beneficiário e transfere para ele, sem nota e sem conluio | Crítico | Perfil de cadastro de parceiro × perfil de liberação bancária, por usuário e por empresa |
| `SOD.02` | Alterar dado bancário de fornecedor | Liberar pagamento | Desvia o pagamento de compra legítima sem criar nenhum cadastro novo. Não aparece em relatório de fornecedor novo | Crítico | Log de alteração de conta bancária do período × base de quem libera pagamento |
| `SOD.03` | Registrar título a pagar | Liberar pagamento | Gera a obrigação e a paga. Precisa de documento, mas não de terceiro | Crítico | Perfil de lançamento em contas a pagar × perfil de liberação, com alçada declarada |
| `SOD.04` | Liberar pagamento | Conciliar o extrato bancário | Paga e esconde: a conciliação existe para revelar a saída indevida | Crítico | Perfil de liberação × responsável pela conciliação, que às vezes não é perfil de sistema |
| `SOD.05` | Aprovar despesa de reembolso | Liberar o próprio reembolso | Autoconcessão. Comum em alçada de diretoria, onde não há nível acima no sistema | Alto | Base de reembolsos: solicitante × aprovador, a 100% |

## 2. Compras

| Cód. | Função A | Função B | Dano concreto | Severidade | Como se testa |
|---|---|---|---|---|---|
| `SOD.06` | Aprovar a requisição | Aprovar o pedido de compra | Duas alçadas no papel, uma decisão na prática. A segunda aprovação deixa de conferir a primeira | Alto | Base de requisições × pedidos, aprovador de cada etapa, a 100% |
| `SOD.07` | Selecionar o fornecedor | Emitir o pedido | Escolhe e formaliza sozinho. Base do direcionamento e do fracionamento | Alto | Usuário que registra a seleção × usuário que emite o pedido |
| `SOD.08` | Comprar | Atestar o recebimento | Atesta o que comprou, e a conferência física deixa de existir | Crítico | Comprador × recebedor por documento, a 100%. Cruza com `acta-auditoria-compras` |
| `SOD.09` | Homologar fornecedor | Selecionar fornecedor | Habilita quem quer contratar. A homologação vira formalidade | Médio | Base de homologação × base de seleção, por usuário |

## 3. Receita e recebimento

| Cód. | Função A | Função B | Dano concreto | Severidade | Como se testa |
|---|---|---|---|---|---|
| `SOD.10` | Emitir documento fiscal | Cancelar documento fiscal | Fatura e cancela. População pequena, risco alto, testa-se a 100% | Alto | Base de cancelamentos: emitente × solicitante do cancelamento |
| `SOD.11` | Conceder desconto ou prazo | Faturar | Define o preço e o formaliza, sem confronto com a política comercial | Alto | Perfil de alteração de condição comercial × perfil de faturamento |
| `SOD.12` | Receber valores | Baixar título a receber | Recebe e dá baixa: o desvio some do aging. Esquema clássico de apropriação | Crítico | Perfil de baixa × responsável por recebimento, inclusive caixa e cobrança |
| `SOD.13` | Baixar título a receber | Aprovar perda ou abatimento | Encobre a apropriação com uma baixa contábil autorizada por si mesmo | Crítico | Base de baixas por motivo, com aprovador, a 100% |

## 4. Pessoal

| Cód. | Função A | Função B | Dano concreto | Severidade | Como se testa |
|---|---|---|---|---|---|
| `SOD.14` | Admitir ou cadastrar empregado | Processar a folha | Cria empregado inexistente e o paga mensalmente por canal legítimo | Crítico | Perfil de cadastro de pessoal × perfil de processamento e fechamento da folha |
| `SOD.15` | Alterar dado bancário de empregado | Processar a folha | Desvia o líquido de empregado real, sem cadastro novo | Crítico | Log de alteração bancária na folha × base de quem fecha a folha |
| `SOD.16` | Apontar horas ou frequência | Aprovar a própria frequência | Autoaprovação de hora extra e de adicional | Alto | Base de apontamento: apontador × aprovador, a 100% |
| `SOD.17` | Processar a folha | Conciliar a folha com o razão | Roda e confere a si mesmo. Impede a descoberta de `SOD.14` e `SOD.15` | Alto | Responsável pelo fechamento × responsável pela conciliação contábil |

## 5. Estoque e ativo

| Cód. | Função A | Função B | Dano concreto | Severidade | Como se testa |
|---|---|---|---|---|---|
| `SOD.18` | Custodiar o estoque | Ajustar saldo de estoque | Retira o item e acerta o saldo. O inventário fecha | Crítico | Perfil de movimentação × perfil de ajuste, por depósito |
| `SOD.19` | Custodiar o estoque | Conduzir ou aprovar o inventário | Conta o que guarda. O inventário deixa de ser contagem independente | Alto | Equipe de contagem × responsáveis por depósito, por ciclo de inventário |
| `SOD.20` | Registrar baixa de ativo | Autorizar a baixa | Dá baixa em ativo que continua existindo, ou que saiu | Alto | Base de baixas de imobilizado: solicitante × autorizador |

## 6. Contabilidade e parametrização

| Cód. | Função A | Função B | Dano concreto | Severidade | Como se testa |
|---|---|---|---|---|---|
| `SOD.21` | Lançar no razão | Conciliar a conta | Audita a si mesmo. É o par que impede a descoberta de quase todos os outros | Crítico | Lançamentos manuais do período por usuário × responsável pela conciliação de cada conta |
| `SOD.22` | Lançar manualmente no razão | Aprovar o lançamento manual | Lança e aprova. Testa-se sobre o diário, não sobre a base de perfis | Alto | Diário de lançamentos manuais: autor × aprovador, a 100% |
| `SOD.23` | Parametrizar regra de negócio | Transacionar sob a regra | Altera o limite e opera dentro dele. Todo controle automatizado aprova | Crítico | Log de alteração de parâmetro do período × base de quem transaciona no módulo |
| `SOD.24` | Manter tabela de alçadas | Aprovar dentro da alçada | Ajusta o próprio poder de aprovação | Crítico | Histórico de versões da tabela de alçadas × base de aprovadores |
| `SOD.25` | Abrir e encerrar período contábil | Lançar no período | Reabre o mês fechado e lança. Destrói a garantia do fechamento | Alto | Log de abertura e fechamento de período × lançamentos posteriores ao fechamento original |

## 7. Tecnologia

| Cód. | Função A | Função B | Dano concreto | Severidade | Como se testa |
|---|---|---|---|---|---|
| `SOD.26` | Desenvolver a alteração | Promover a alteração a produção | Coloca em produção o que quiser, sem teste e sem aceite | Crítico | Tabela de quem move o quê entre ambientes, confirmada em tela por pessoa |
| `SOD.27` | Administrar o banco de dados | Transacionar no negócio | Altera saldo e apaga registro sem passar por tela e sem log de aplicação | Crítico | Relação nominal de contas com privilégio no banco × base de usuários de negócio |
| `SOD.28` | Administrar a base de usuários | Aprovar a concessão de acesso | Concede o próprio acesso e o revoga depois. Foto da base não detecta | Crítico | Log de concessões do período: solicitante × aprovador × executor |
| `SOD.29` | Executar a rotina de backup | Aprovar ou monitorar o restore | Ninguém confere se o que se guarda volta | Médio | Responsável pela rotina × responsável pelo teste de restauração |

## 8. Pares específicos de setor

Não existe lista pronta. Levante do fluxo do mandato e numere a partir de `SOD.30`. Exemplos que
recorrem:

- **Concessão de serviço público ou utilidade:** medir o consumo e faturar o consumo medido.
- **Operação com balança ou pesagem:** pesar a carga e apontar a produção ou a expedição.
- **Distribuição e varejo:** conceder desconto na venda e aprovar a devolução do mesmo cliente.
- **Obra e serviço por medição:** medir a entrega e aprovar a medição.
- **Saúde e educação:** cadastrar o beneficiário ou o aluno e conceder o benefício ou a bolsa.
- **Logística:** emitir o romaneio e atestar a entrega.

O critério de entrada é o do §1 da skill: a acumulação permite consumar o dano sem que nenhum
terceiro precise agir.
