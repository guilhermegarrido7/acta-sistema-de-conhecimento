---
name: contrato-ma-valuation
description: Estruture e revise contratos da ACTA para M&A sell-side e valuation, convertendo condições aprovadas em minuta coerente. Acionar após o aceite da proposta, ao alterar fee, escopo, exclusividade ou tail, revisar redline ou liberar para assinatura.
---

# Contrato de M&A e valuation

## Papel desta skill

Transformar a proposta comercial aprovada em contrato de prestação de serviços da ACTA. Esta skill
não redige NDA, LOI, SPA ou documento da transação. Ela organiza o conteúdo comercial e operacional
da minuta e executa o controle de coerência. A redação final e a suficiência jurídica devem ser
revistas por advogado antes da assinatura.

Antes de produzir, carregue:

- `proposta-ma-valuation`, para recuperar as condições aprovadas;
- `convencoes-de-projeto`, para versão, arquivo-alvo e confidencialidade;
- `checkpoint`, quando houver engajamento aberto;
- `fundamentos-koller`, quando definições de valuation forem necessárias.

Use [references/modulos-contratuais.md](references/modulos-contratuais.md) para montar a minuta e
[references/matriz-proposta-contrato-e-qc.md](references/matriz-proposta-contrato-e-qc.md) para o gate.

## Princípio de precedência

A proposta aprovada é a fonte dos termos comerciais. O contrato pode detalhar mecanismo, obrigação
e proteção, mas não pode alterar silenciosamente escopo, preço, base do fee, pagamento, prazo,
exclusividade ou tail.

Quando houver divergência:

1. identifique os dois textos e o efeito econômico;
2. recomende a redação coerente com o acordo comercial;
3. peça decisão do responsável comercial;
4. registre a alteração e sua aprovação;
5. atualize proposta ou contrato quando necessário para preservar uma única versão da verdade.

## Gate 1 — ficha de variáveis

Nenhuma minuta começa sem:

- qualificação das partes e representantes;
- objeto, serviço, perímetro e finalidade;
- proposta de origem, versão e data de aceite;
- escopo, entregáveis e fora de escopo;
- prazo, vigência e forma de rescisão;
- honorários, impostos, despesas, faturamento e vencimento;
- variáveis específicas do modo M&A ou valuation;
- foro, canais de notificação e assinantes.

Use apenas `CONFIRMADO` ou `NÃO APLICÁVEL` para liberar a assinatura. Placeholder, colchete, comentário
ou revisão pendente bloqueiam o documento.

## Modo M&A sell-side

Além do bloco comum, o contrato deve fechar:

### Objeto e transação

Defina sociedade, ativos ou participações abrangidos, venda total ou parcial e transações excluídas.
Reorganização interna, aporte, venda de ativos, combinação, rollover ou operação com parte relacionada
não podem ficar sujeitos a interpretação acidental.

### Honorários

Defina retainer, dedução, fórmula e base do success fee. Se a base for enterprise value, diga como
entram dívida assumida, caixa, itens assemelhados, preço contingente e contraprestação não monetária.
Se a cobrança acompanhar o recebimento do vendedor, defina proporcionalidade e parcelas nunca
recebidas.

Separe:

- fato gerador do fee;
- emissão da nota;
- vencimento;
- sobrevivência após rescisão;
- tratamento de signing sem closing;
- tratamento de earn-out, escrow, holdback, rollover e ajuste de preço.

### Exclusividade e tail

Defina período, universo de compradores cobertos, inbound, comprador conhecido e partes relacionadas.
Na rescisão, gere lista nominativa dos contatos cobertos, prazo para contestação e marco inicial do
tail. Exclusividade e tail não podem depender apenas da memória da equipe.

### Obrigação de meio

Registre que a ACTA não garante venda, preço, proposta ou fechamento. O cliente decide sobre
compradores, divulgação, propostas e termos da transação. Assessores jurídicos redigem e aprovam os
documentos legais.

## Modo valuation

Além do bloco comum, o contrato deve fechar:

- finalidade e usuários previstos;
- entidades, participações, ativos e data-base;
- histórico, projeções e premissas fornecidas pela administração;
- métodos previstos, sujeitos à aplicabilidade e à qualidade da informação;
- entregável e número de apresentações e rodadas;
- uso, reprodução e circulação a terceiros;
- atualização posterior e eventos subsequentes;
- dependência de informações e suspensão do prazo;
- ausência de garantia de preço de transação.

O contrato deve distinguir modelo, sumário de valor, apresentação e laudo. Não permita que um
entregável interno seja apresentado como fairness opinion, auditoria, perícia ou parecer independente
sem contratação e habilitação específicas.

## Bloco comum obrigatório

A minuta deve tratar, de forma compatível com a revisão jurídica:

1. definições e interpretação;
2. objeto, escopo, entregáveis e fora de escopo;
3. honorários, impostos, despesas e mora;
4. vigência, rescisão e efeitos sobreviventes;
5. obrigações e aprovações do cliente;
6. dependência, completude e veracidade das informações;
7. confidencialidade e divulgação compulsória;
8. proteção de dados e incidente de segurança;
9. propriedade intelectual e licença de uso dos produtos;
10. uso de nome, marca, imagem e credenciais;
11. independência das partes e ausência de vínculo;
12. anticorrupção e integridade;
13. responsabilidade e procedimento de reclamação;
14. cessão, alteração, nulidade parcial e tolerância;
15. comunicações, foro e assinatura eletrônica.

Teto de responsabilidade, danos indiretos, não concorrência, não contratação, multa, prazo de sigilo
e tratamento de dados exigem decisão jurídica; não importe automaticamente de benchmark.

## Responsabilidades sobre informações

O cliente responde pela entrega tempestiva, completude e exatidão dos dados e por aprovar premissas
e decisões. A ACTA deve sinalizar inconsistências identificadas, mas não executa auditoria nem testes
substantivos salvo contratação expressa.

Defina:

- lista mínima de informações;
- responsáveis e canal de entrega;
- data de corte e versão da base;
- prazo de resposta a pendências;
- suspensão ou replanejamento;
- procedimento de mudança de escopo;
- aceite de premissas e do entregável.

## Controle econômico da minuta

Leia toda cláusula em efeito financeiro. Confirme especialmente:

- se enterprise value e equity value não foram confundidos;
- se dívida líquida e contraprestação contingente entram na base correta;
- se retainer é ou não dedutível;
- se imposto e gross-up incidem sobre os componentes certos;
- se o vencimento tem data ou evento determinável;
- se rescisão, exclusividade e tail convivem sem contradição;
- se o contrato cobre transação com comprador apresentado antes da rescisão;
- se escopo adicional tem mecanismo de aprovação e preço.

## Redline

Ao revisar uma minuta alterada:

1. preserve a versão recebida e identifique a contraparte do markup;
2. compare contra a última versão aprovada;
3. classifique cada mudança em comercial, operacional ou jurídica;
4. quantifique o efeito econômico quando possível;
5. indique aceitar, rejeitar ou devolver com redação alternativa;
6. encaminhe matéria jurídica ao advogado;
7. atualize a matriz proposta × contrato.

Não aceite alteração apenas porque “parece padrão”. Informe mecanismo, risco e efeito.

## Gate final

Bloqueie a assinatura se houver:

- campo aberto, nome herdado ou revisão pendente;
- parte, CNPJ, representante ou assinatura incoerente;
- divergência material com a proposta sem aprovação;
- fee sem definição, base, fato gerador ou vencimento;
- exclusividade ou tail sem período e universo coberto;
- valuation sem finalidade, data-base ou regra de uso;
- obrigação de resultado;
- ausência de tratamento de impostos, despesas ou rescisão;
- anexo citado e não incluído;
- falta de revisão jurídica indicada pelo responsável.

## Saída da skill

Edite o arquivo-alvo indicado. No chat, reporte: proposta de origem, cláusulas alteradas, divergências
resolvidas, decisões ainda pendentes, fontes por cláusula e resultado do gate. Não declare a minuta
“juridicamente aprovada”; registre quem revisará e qual versão seguirá para assinatura.
