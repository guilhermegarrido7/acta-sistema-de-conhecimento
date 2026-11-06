---
name: proposta-ma-valuation
description: Estruture e revise propostas comerciais da ACTA para M&A sell-side e valuation. Acionar ao definir escopo, entregáveis, cronograma e honorários, converter conversa comercial em proposta, alterar condições ou fazer o gate pré-envio.
---

# Proposta de M&A e valuation

## Papel desta skill

Produzir ou revisar a proposta comercial pela qual a ACTA é contratada para um mandato de M&A
sell-side ou um projeto de valuation. Esta skill não trata a proposta de aquisição apresentada por um
comprador, coberta por `processo-competitivo-e-propostas`, nem redige contrato, NDA, LOI ou SPA.

Antes de produzir, carregue:

- `convencoes-de-projeto`, para nomenclatura, confidencialidade, codinome e versionamento;
- `checkpoint`, quando o trabalho estiver dentro de um engajamento;
- `fundamentos-koller`, quando o escopo envolver valuation;
- `acta-design-system`, ao editar ou gerar PPTX.

## Regra de abertura

Comece pela ficha de contratação em
[references/briefing-estrutura-e-qc.md](references/briefing-estrutura-e-qc.md). Não escreva a proposta
com lacuna material. Se o usuário ainda não definiu preço, prazo, forma de pagamento, base do success
fee ou finalidade do valuation, registre `A CONFIRMAR` no briefing e bloqueie a versão externa.

Selecione um único modo principal:

| Modo | Quando usar | Lógica comercial |
|---|---|---|
| M&A sell-side | A ACTA prepara e conduz a venda, total ou parcial, de empresa ou ativos | Retainer, success fee, exclusividade, investidores cobertos e tail |
| Valuation | A ACTA estima uma faixa ou valor para finalidade declarada, sem conduzir venda | Honorário fixo, data-base, prazo curto, rodadas e uso do entregável |

Valuation preparatório de um mandato de venda permanece no modo M&A. Não transforme a etapa de
valuation do sell-side em contratação separada sem decisão comercial expressa.

## Gate 1 — identidade e finalidade

Confirme antes de escrever:

- razão social, CNPJ, nome curto e representante do cliente;
- serviço, codinome e entidade ou perímetro avaliado;
- finalidade da contratação;
- destinatário e decisor econômico;
- data da proposta e prazo de validade;
- responsável comercial e equipe indicada;
- arquivo-base aprovado.

Razão social, nome curto, codinome e destinatário são campos únicos. Procure todas as ocorrências
antes do release. Nome herdado de benchmark bloqueia o envio.

## Gate 2 — escopo

### M&A sell-side

O escopo modular pode incluir:

1. alinhamento de objetivos, perímetro e estratégia da transação;
2. diagnóstico econômico-financeiro e preparação das informações;
3. valuation por DCF, múltiplos e transações precedentes, quando aplicáveis;
4. tese de investimento, teaser e information memorandum;
5. segmentação, priorização e abordagem autorizada de compradores;
6. NDA, data room, Q&A e coordenação da due diligence;
7. recebimento e comparação de NBOs e propostas vinculantes;
8. negociação econômica, apoio ao signing e acompanhamento do closing.

Diga o que a ACTA entregará em cada etapa. Não prometa fechamento, preço ou prazo de transação. A
obrigação é de meio. Minuta, parecer e aconselhamento jurídico, tributário, trabalhista, ambiental ou
contábil especializado ficam fora do escopo, salvo contratação expressa de profissional habilitado.

### Valuation

Defina:

1. finalidade e usuário previsto;
2. entidades, ativos, participações e data-base;
3. período histórico e horizonte projetado;
4. métodos previstos e critérios de aplicabilidade;
5. cenários e sensibilidades;
6. formato do entregável: modelo, sumário de valor, apresentação ou laudo;
7. quantidade de apresentações e rodadas de comentários;
8. uso permitido e eventual circulação a terceiros.

Não use “laudo” se a contratação entrega apenas apresentação ou sumário. Não prometa método cuja
base disponível não sustenta. A faixa de valor é conclusão analítica, não garantia de preço de venda.

## Gate 3 — cronograma e dependências

O cronograma começa após o recebimento integral dos insumos mínimos. Defina o evento de início, as
etapas, os responsáveis e o que suspende o prazo. Mudança de perímetro, atraso de informação e
revisão de premissas aprovadas podem exigir replanejamento e proposta complementar.

Não copie prazo histórico como padrão. O prazo depende de perímetro, qualidade da base, número de
entidades, disponibilidade da administração e formato do entregável.

## Gate 4 — condições comerciais

### Campos comuns

- moeda e valor;
- impostos: incluídos, acrescidos ou sujeitos a gross-up;
- faturamento, vencimento e marco de cobrança;
- reajuste, se aplicável;
- despesas reembolsáveis, aprovação prévia e comprovantes;
- validade da proposta;
- aceite e autoridade do signatário.

### Campos adicionais de M&A

Defina sem ambiguidade:

- retainer e se ele é dedutível do success fee;
- percentual fixo ou fórmula escalonada;
- base: enterprise value, equity value, caixa recebido ou outra;
- tratamento de dívida líquida e itens assemelhados;
- signing, closing e momento de faturamento;
- parcelamento do preço e proporcionalidade do fee;
- rollover, earn-out, escrow, holdback, ajuste de preço e contraprestação não monetária;
- reorganização interna e transações excluídas;
- exclusividade, universo coberto e tail period.

Se qualquer componente relevante ficar em aberto, apresente alternativas com efeito econômico e
peça decisão. Nunca complete por inferência.

## Estrutura do deck

A proposta deve seguir esta ordem, ajustada ao porte da oportunidade:

1. capa e identificação;
2. entendimento do contexto e objetivo;
3. abordagem e etapas;
4. escopo, atividades e entregáveis;
5. cronograma e dependências;
6. governança, equipe e responsabilidades;
7. credenciais selecionadas e anonimizadas quando necessário;
8. condições comerciais;
9. pressupostos e fora de escopo;
10. validade e termo de aceite.

Use títulos-asserção. Evite páginas institucionais sem função na decisão. Credenciais devem ser
comparáveis ao mandato e não podem revelar cliente sem autorização.

## Gate final

Antes de liberar, execute integralmente o checklist da referência. Bloqueie o release se houver:

- placeholder, comentário interno ou campo `A CONFIRMAR`;
- cliente, projeto, cidade ou contato herdado;
- divergência entre escopo, cronograma, entregáveis e preço;
- success fee sem base, gatilho ou momento de pagamento;
- valuation sem finalidade ou data-base;
- imposto ou despesa sem tratamento;
- proposta sem validade e aceite;
- promessa de resultado ou serviço regulado fora do escopo;
- arquivo sem fonte dos dados ou sem nota de validação para material antigo.

## Saída da skill

Entregue a proposta no arquivo-alvo indicado pelo usuário. Não crie cópia alternativa sem pedido.
No chat, reporte: arquivo alterado, modo escolhido, condições confirmadas, pendências, fontes por
slide e resultado do gate. A proposta aprovada alimenta `contrato-ma-valuation`; nenhuma condição
material pode mudar silenciosamente nessa passagem.
