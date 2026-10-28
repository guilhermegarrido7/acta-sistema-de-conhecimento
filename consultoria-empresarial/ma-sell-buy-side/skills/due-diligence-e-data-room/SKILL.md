---
name: due-diligence-e-data-room
description: Estruturar o data room aberto aos compradores e conduzir a due diligence, do Q&A ao relatório de red flags. Acionar ao abrir o data room da transação, ao coordenar o Q&A, ao montar clean team, ou ao converter achado em preço ou proteção.
---

# Due diligence e data room: achar primeiro o que o comprador vai achar

## Papel desta skill

Direciona a estrutura do data room virtual da transação, a condução do Q&A e a leitura econômica dos
achados da diligência. No sell-side, organiza o que se abre, a quem e quando, e antecipa os red
flags. No buy-side, coordena as frentes do comprador e traduz cada achado em preço ou proteção.
**Não emite parecer jurídico, fiscal, trabalhista ou ambiental**: as frentes técnicas são de
especialistas, e a ACTA coordena, consolida e precifica. **Não redige cláusula**: define o valor, o
prazo e o mecanismo que a cláusula tem de carregar.

**Fronteira com `solicitacao-de-informacoes`.** Aquela skill é a coleta da assessoria junto ao alvo,
antes do mercado, para construir material e valuation; o resultado vive em
`~~pasta de trabalho/2- Data Room/`. Esta trata do data room aberto aos compradores na diligência. A
matéria-prima é a mesma; o que se abre ao comprador é selecionado, saneado e controlado.

## O data room da transação

### Índice

Espelha os eixos da carta de `solicitacao-de-informacoes` e acrescenta as pastas que a diligência
exige. O modelo com subpastas e nível de acesso por item está em
[references/indice-do-data-room.md](references/indice-do-data-room.md).

```
1. Financeiro e contábil       eixo 1 da carta
2. Operacional e capacidade    eixo 2
3. Comercial e contratos       eixo 3, com mudança de controle sinalizada
4. Ambiental e regulatório     eixo 4
5. Societário
6. Fiscal
7. Trabalhista e pessoas
8. Integridade e compliance
9. TI e proteção de dados
10. Imóveis e ativos
11. Q&A: respostas publicadas
```

Três regras:

- **Numeração estável.** O documento 1.3.2 é o mesmo do primeiro ao último dia; versão nova entra com
  data e versão no nome (ver `convencoes-de-projeto`), sem renumerar.
- **Só sobe o que foi conferido.** Documento que contradiz o IM ou o modelo não entra antes de a
  divergência ser resolvida ou explicada.
- **Plataforma com permissão por pasta, marca d'água e registro de acesso.** A exigência é funcional,
  não de produto.

### Níveis de acesso

| Nível | Quem | O que vê |
|---|---|---|
| 1ª fase | Proponentes com NDA, antes da NBO | IM e, se houver, um conjunto resumido de dados |
| Fase 2 | Shortlist e seus assessores | Data room completo, sem informação concorrencialmente sensível |
| Clean team | Equipe restrita, definida em protocolo | A informação sensível, agregada sempre que possível |
| Confirmatória | O proponente escolhido, perto do signing | O que restou: contratos nominados, dados individuais |

Mesmo documento, ao mesmo tempo, a todos do mesmo nível. Exceção só com motivo registrado.

Dado pessoal (folha individual, cliente pessoa física) entra minimizado ou anonimizado, pelo
tratamento de `acta-way:anonimizacao-e-lgpd`: a Lei 13.709/2018 (LGPD) vale dentro do data room.

### Q&A log

Canal único para pergunta de comprador, uma linha por pergunta:

| Nº | Entrada | Proponente | Frente | Pergunta | Documento | Responsável no alvo | Prazo | Status | Resposta | Publicada a todos? |
|---|---|---|---|---|---|---|---|---|---|---|

- **Toda pergunta tem responsável e prazo.** Pergunta sem dono vira atraso, e resposta lenta é lida
  pelo comprador como sinal sobre o ativo.
- **A assessoria revisa antes de publicar.** A resposta tem de bater com o IM e com o modelo. Se
  muda um número do IM, vira errata a todos os proponentes, não nota a um só.
- **Pergunta de interesse geral** é respondida a todos; pergunta que revela a tese de um proponente
  fica com ele.

### Registro de acesso

O log de quem acessou o quê, e quando, serve a duas coisas: ler o interesse de cada proponente
(quem abriu os contratos de clientes está precificando; quem não abriu nada está de passagem) e
provar o que foi disponibilizado. Se o conteúdo do data room conta como informação revelada contra
as declarações do vendedor é matéria do contrato e da assessoria jurídica. A ACTA garante que a
cópia íntegra do data room na data do signing exista e esteja arquivada.

## Vendor DD ou DD do comprador

| | Vendor DD | DD do comprador |
|---|---|---|
| Quem contrata | O vendedor | Cada comprador |
| Quando | Antes da ida a mercado ou antes da fase 2 | Fase 2 e confirmatória |
| Serve para | Achar o red flag primeiro e corrigi-lo ou precificá-lo nos termos do vendedor; padronizar o escopo; encurtar a diligência dos compradores | Validar tese, preço e riscos; fundamentar indenização e escrow |
| Limite | O comprador pode não se apoiar nela; a extensão desse apoio (reliance) é contratual | Custo e prazo, repetidos por proponente |

Recomende vendor DD quando o alvo tem sinal conhecido de risco: regime tributário alternado,
informalidade, terceirização intensa, licença perto do vencimento, contingência ambiental. O
comprador experiente desconta mais o que descobre sozinho do que o que lhe foi dito (ver `teaser`).

## As frentes

| Frente | O que se verifica | Saída econômica |
|---|---|---|
| Financeira e qualidade de resultados | EBITDA normalizado e add-backs, dívida líquida e itens assemelhados, capital de giro, CapEx | EBITDA de referência, ponte EV → equity, peg |
| Fiscal | Apurações, autos, parcelamentos, benefícios fiscais e condicionantes, efeito da reforma tributária | Contingência na dívida líquida, indenização específica ou escrow |
| Trabalhista e previdenciária | Vínculos, terceirização, jornada, acordos coletivos, ações | Provisão, indenização específica |
| Societária e contratual | Titularidade e ônus das quotas ou ações, acordos de sócios; contratos com mudança de controle, exclusividade ou não concorrência | Condição precedente (anuências), ajuste de perímetro |
| Regulatória e ambiental | Licenças, condicionantes, vencimentos, autos, passivo ambiental | Condição precedente, indenização específica, escrow, preço |
| Integridade e anticorrupção | Contratos com o poder público, intermediários, histórico de apurações, programa de integridade | Ver a seção seguinte |
| TI e LGPD | Sistemas, licenças de software, segurança, incidentes, bases de dados pessoais | Investimento pós-fechamento, indenização específica |

Handoffs, se o plugin de valuation estiver instalado:

- Frente financeira: `acta-modelagem-economico-financeira:qualidade-de-resultados`, que fixa o
  EBITDA de referência e os itens assemelhados a dívida.
- Frente fiscal: `acta-modelagem-economico-financeira:impostos-e-prejuizos-fiscais` e, para o efeito
  da transição do IBS e da CBS sobre preço, crédito e capital de giro, a referência
  `transicao-tributaria-2026-2033.md` daquela skill.

> Sem o plugin, **avise o usuário**:
> `claude plugin install acta-modelagem-economico-financeira@acta-sistema-de-conhecimento --scope user`

## Integridade: a frente que não é opcional

Duas normas explicam por que ela entra em toda diligência:

- **A responsabilidade acompanha a pessoa jurídica.** Pela Lei 12.846/2013, art. 4º, a
  responsabilidade da pessoa jurídica por ato lesivo à administração pública subsiste na alteração
  contratual, na transformação, na incorporação, na fusão e na cisão. Na fusão e na incorporação, a
  da sucessora fica restrita à multa e à reparação integral do dano, até o limite do patrimônio
  transferido, salvo simulação ou evidente intuito de fraude (§ 1º). Controladoras, controladas e
  coligadas respondem solidariamente pela multa e pela reparação (§ 2º). Na compra de quotas ou
  ações a pessoa jurídica é a mesma: a responsabilidade dela não muda, e o comprador a carrega no
  valor do que comprou.
- **A diligência é parâmetro do programa de integridade do próprio comprador.** O Decreto
  11.129/2022, art. 57, XIV, inclui entre os parâmetros de avaliação do programa a verificação,
  durante fusões, aquisições e reestruturações societárias, de irregularidades, ilícitos ou
  vulnerabilidades nas pessoas jurídicas envolvidas.

O alcance do § 2º sobre o novo controlador e a qualificação de cada achado são matéria de parecer
jurídico. A ACTA leva o achado para a tabela de tratamento abaixo. No sell-side, antecipe antes da
fase 2: programa de integridade documentado, relação de contratos com o poder público e de
intermediários, histórico de apurações e consulta aos cadastros públicos de sanções.

## Clean team e informação concorrencialmente sensível

Quando o comprador é concorrente, a troca de informação sensível (preço por cliente, custo, margem
por contrato, plano comercial, condição de fornecimento) é risco concorrencial desde a negociação. A
operação sujeita a notificação não pode ser consumada antes de apreciada pelo CADE, sob pena de
nulidade e de multa de R$ 60 mil a R$ 60 milhões, e as condições de concorrência entre as partes têm
de ser preservadas até a decisão final (Lei 12.529/2011, art. 88, §§ 3º e 4º). O CADE aponta a troca
de informações entre as partes como conduta que pode caracterizar consumação prévia (gun jumping), e
clean teams e salas de conversa (parlor rooms) como procedimentos de mitigação (CADE, *Guia para
Análise da Consumação Prévia de Atos de Concentração Econômica*, 2015).

O procedimento:

1. **Classifique os documentos** em sensível e não sensível antes de abrir a fase 2.
2. **Protocolo de clean team**, redigido pela assessoria concorrencial: membros (assessores externos
   ou pessoas sem função comercial no comprador), uso permitido, saída só em forma agregada, prazo,
   devolução ou destruição.
3. **Agregue o que puder**: cliente por faixa, contrato sem o nome da contraparte, preço como média.
4. **Deixe o mais sensível para a confirmatória**, ao proponente escolhido, pelo clean team.
5. **Entre signing e closing**, cláusula que dê ao comprador ingerência na gestão comercial do alvo
   antes da aprovação é desenho de risco (ver `spa-signing-e-closing`).

## Red flag: preço, estrutura ou proteção

Cada achado termina num destino. **Achado sem destino é passivo do vendedor**: reaparece na mesa
como desconto sem número.

| Natureza do achado | Tratamento preferível |
|---|---|
| Certo e quantificável (dívida não registrada, parcelamento, provisão devida) | **Preço**: entra na dívida líquida da ponte EV → equity |
| Provável e quantificável por faixa (autuação em discussão) | **Indenização específica**, fora do cap geral, com escrow ou holdback dimensionado |
| Possível e difuso (risco trabalhista sem ação) | **Declaração e garantia** com indenização geral, ou seguro W&I se a apólice cobrir |
| Estrutural (licença irregular, contrato com mudança de controle sem anuência) | **Condição precedente** ou mudança de perímetro |
| De integridade | Remediação antes do closing, indenização específica, estrutura ou saída, conforme o parecer |
| Que derruba a tese | **Reprecificar ou sair** (ver `negociacao-e-loi`) |

A escolha entre preço e indenização é conta, não preferência:

```
Custo para o vendedor de indenização específica com escrow
  = probabilidade × perda estimada
  + custo de carregamento do escrow (valor retido × custo de oportunidade × prazo)

Comparar com: a redução de preço que o comprador pede pelo mesmo achado
```

No sell-side, o achado que o vendedor revela primeiro é precificado nos termos dele. No buy-side, a
mesma tabela converte o relatório de red flags em pedido de preço e de proteção.

## Disclosure schedule: o achado que vira anexo

O disclosure schedule lista as exceções às declarações do vendedor, e o que está nele afeta o que a
indenização cobre; redação e efeito são do contrato e da assessoria jurídica. O papel da ACTA é
manter, desde o primeiro dia da fase 2, o **registro de achados**: descrição, frente, documento no
data room, quantificação e tratamento proposto. Esse registro alimenta o disclosure schedule e o term
sheet econômico de `spa-signing-e-closing`, e impede que achado conhecido vire disputa de
indenização depois do fechamento. Modelos do relatório de red flags e do registro em
[references/indice-do-data-room.md](references/indice-do-data-room.md).

## O que entregar

1. O índice do data room, com os níveis de acesso e o calendário de abertura.
2. O Q&A log em operação, com responsável e prazo por pergunta.
3. A classificação de documentos sensíveis e o conteúdo econômico do protocolo de clean team.
4. O relatório de red flags: achado, frente, quantificação, tratamento proposto e status.
5. O registro de achados que alimenta o disclosure schedule.
6. A ponte EV → equity atualizada com os achados.

## Próximo passo

`spa-signing-e-closing`, que leva o registro de achados para o contrato, e `negociacao-e-loi` quando
um achado pede reprecificação. Durante a fase 2, `processo-competitivo-e-propostas` segue conduzindo
a rodada vinculante.
