---
name: fluxo-e-regras-de-negocio
description: Desenhe o fluxograma To-Be com raias, SLA inline e interfaces, e codifique as regras de negócio do subprocesso. Acionar ao montar o fluxo de um subprocesso antes do workshop, ao amarrar fluxo e oportunidades no mesmo slide, ao escrever ou codificar regra de negócio, ou ao registrar a regra aprovada.
---

# Fluxo e regras de negócio

Carregue `acta-way` antes desta skill: identidade visual, convenções de entregável e checkpoint valem
aqui e **não** são repetidos. O método de prática — desenho TO BE, priorização — virá de
`acta-metodo-consultoria`; enquanto esse plugin for esqueleto, o que esta skill assume dele está dito
aqui.

A notação, os cinco níveis e a codificação estão em `taxonomia-de-processos`. Esta skill é a
**produção** do artefato; aquela é a régua.

## Papel desta skill

Fluxo e regra são um par, não dois entregáveis. O fluxo diz **o que acontece e em que ordem**; a
regra diz **sob que condição**. Fluxo sem regra vira desenho bonito que não decide nada; regra sem
fluxo vira política que ninguém sabe onde aplicar.

Os dois nascem **antes** do workshop, a partir da coleta — é a inversão descrita em
`workshop-de-mapeamento` — e os dois se fecham **depois** dele, com a crítica incorporada.

## 1. O fluxograma To-Be

### Raias

**Raias horizontais por área ou ator**, de **três a quatro** por subprocesso, nome em **caixa alta**.

Por que o teto de quatro: acima disso o slide deixa de ser legível projetado, e — mais importante —
subprocesso que atravessa cinco áreas provavelmente é dois subprocessos. O número de raias é um teste
de fronteira, não uma restrição estética.

Se um ator aparece uma única vez no fluxo, avalie tratá-lo como anotação em vez de raia própria: raia
com uma caixa gasta um quinto do slide para dizer pouco.

### Marcadores e sistemas

- Marcador **`M`** em toda tarefa manual, sem exceção. É o mapa do que está fora de sistema e a base
  direta das oportunidades de automação.
- Logo do sistema dentro da caixa, quando a atividade acontece nele.
- Atividade automática marcada como tal — integração sem ação humana. Confunda-a com tarefa e o
  dimensionamento de esforço do processo sai errado.

### Caixas de SLA inline

O prazo entra **no fluxo**, junto da atividade a que se refere: *"SLA elaboração < 20 dias úteis"*.

Esta é a decisão de desenho que mais diferencia o artefato. SLA que vive só no slide de indicadores é
SLA que ninguém consulta ao executar; SLA impresso ao lado da caixa é compromisso que o executor vê
enquanto trabalha. A definição operacional completa do indicador continua em `sla-e-indicadores` — no
fluxo vai a versão curta.

### Conectores, anotações e interfaces

- **Conectores `A` / `B`** para continuar o fluxo em outra faixa ou em outra página. Fluxo espremido
  para caber num slide é fluxo ilegível.
- **Anotações em itálico** para exceção, dependência e alerta — tudo o que a notação simplificada
  deliberadamente não simboliza.
- **Caixas de subprocesso vizinho marcam as interfaces.** Todo subprocesso mostra de onde recebe e
  para onde entrega, nomeando o subprocesso do outro lado pelo mesmo nome da matriz. É o que impede
  o clássico do mapeamento por partes: dois subprocessos que, juntos, não fecham — um entrega o que o
  outro não recebe, e ninguém percebe até o manual ser montado.

### A barra lateral "OPORTUNIDADES JÁ MAPEADAS"

Faixa lateral no slide do fluxo, repetindo os **títulos** das oportunidades daquele subprocesso (ver
`oportunidades-e-quick-wins`).

O efeito é o que justifica o espaço: **amarra fluxo e gap no mesmo slide**. Quem olha o desenho vê,
sem trocar de página, onde o processo dói. No workshop, isso faz o grupo criticar o fluxo já sabendo
o que a consultoria considera problema — e a crítica passa a ser sobre o diagnóstico, não sobre o
desenho isolado.

### O encerramento padrão

Quase todo fluxo de atendimento termina com **"realiza avaliação de qualidade do atendimento (escala
1–5)"**. Não é enfeite: é o que fecha o ciclo Solicitação → Atendimento → **Encerramento** dos três
papéis de atendimento, e é o que gera o indicador de percepção do solicitante que aparece em
`sla-e-indicadores`. Processo que termina na entrega sem medir percepção só consegue ser avaliado
pelo prazo.

## 2. A tabela de regras de negócio

Colunas fixas, material pré-workshop:

`COD. | NOME DA REGRA | DESCRIÇÃO SUGERIDA | IMPACTO`

Paginada em cerca de **três regras por slide**. Mais que isso não se lê projetado, e regra que não se
lê não se critica.

**Evolução do template**, para registrar a homologação:

`COD. | NOME DA REGRA | DESCRIÇÃO SUGERIDA | NÍVEL DE IMPORTÂNCIA | DESCRIÇÃO APROVADA | IMPACTO`

A coluna `DESCRIÇÃO APROVADA` ao lado da sugerida — e não no lugar dela — é o que preserva o ciclo
**sugerida → aprovada**. Quando, meses depois, alguém questionar por que a regra ficou mais frouxa
que a proposta, as duas redações estão lado a lado, e a diferença é a decisão do cliente, com data.

### Codificação

`<PREFIXO>.<NN>` — prefixo mnemônico de 2 a 4 letras do subprocesso + sequencial de dois dígitos:
`POL.01`, `CAD.01`, `MED.01`, `REC.01`. As regras de higiene (prefixo único, código não
reaproveitado, código nasce no material pré-workshop) estão em `taxonomia-de-processos`.

### Como se escreve uma regra

**Nome**: substantivo, curto, específico. "Mínimo de cotações por faixa", não "Regra de compras".

**Descrição**: uma frase, **condicional e verificável**. A forma que funciona é
*"Quando &lt;condição&gt;, &lt;quem&gt; deve &lt;o quê&gt;."*

| Não é regra | É regra |
|---|---|
| "As compras devem ser feitas com economicidade." | "Quando o valor estimado superar a faixa 2, o comprador deve obter no mínimo três cotações válidas antes de emitir o pedido." |
| "O recebimento deve ser conferido." | "Quando houver divergência de quantidade superior a 2% entre pedido e nota, o almoxarife deve registrar a ocorrência e reter o pagamento até tratativa." |

Três testes antes de a regra entrar na tabela:

1. **Alguém consegue descumprir?** Se não, é descrição de fato, não regra.
2. **Dá para verificar se foi cumprida?** Se não, não é auditável, e não entra no manual como regra.
3. **Ela está no fluxo?** Toda regra aponta para pelo menos uma caixa ou decisão. Regra órfã é
   política, e política vive em outro documento.

**Impacto**: o que acontece se a regra não for seguida — em termos de risco, custo ou prazo. É esta
coluna que o grupo usa para calibrar `NÍVEL DE IMPORTÂNCIA` no workshop.

## 3. O par fluxo–regra: consistência obrigatória

Antes de imprimir o material, rode as quatro checagens:

1. **Toda decisão do fluxo tem regra correspondente.** Losango sem regra é decisão sem critério — o
   executor vai decidir por conta, e a variação é garantida.
2. **Toda regra aponta para uma caixa do fluxo.** Sem órfã.
3. **Todo SLA inline tem indicador em `sla-e-indicadores`.** Prazo desenhado que ninguém mede é
   promessa.
4. **Toda interface tem contraparte.** O subprocesso vizinho citado recebe, no desenho dele, o que
   este entrega — com o mesmo nome de entregável.

A quarta é a que mais falha, e falha em silêncio, porque cada subprocesso é revisado sozinho. Rode-a
com todos os fluxos lado a lado, uma vez por rodada, antes do workshop.

## 4. Incorporando a crítica do workshop

Da folha A3 para o desenho, zona a zona:

| Zona do A3 | Destino |
|---|---|
| ✚ PRECISAMOS INCLUIR | Caixa, decisão ou raia nova no fluxo; regra nova se houver condição. |
| ✕ PRECISAMOS RETIRAR | Remoção — e frequentemente **oportunidade de melhoria**, não só edição de desenho. |
| ESTÁ ERRADO | Correção do fluxo. Se for erro de premissa, volte à coleta daquele ponto. |
| ★ ATENÇÃO — IMPLEMENTAÇÃO | Fica no fluxo como desenhado, com **anotação de dependência**, e vai para o roadmap. Não vira exceção no desenho. |

Regra de versionamento: o fluxo reemitido é `vPósWS` e é o único que alimenta o manual. **Código de
regra não é renumerado** na reemissão — regra descartada deixa buraco na sequência, e o buraco é
informação.

## O que entregar

Por subprocesso:

1. O slide de fluxograma To-Be `vPósWS`: raias em caixa alta, marcadores `M`, SLA inline,
   conectores, anotações, interfaces com os vizinhos e a barra lateral de oportunidades.
2. A tabela de regras codificadas, paginada, com descrição sugerida **e** aprovada, nível de
   importância e impacto.
3. O registro das quatro checagens de consistência.

## Próximo passo

`sla-e-indicadores`, para fechar as metas do que o fluxo prometeu. Com fluxo, regras, SLA e
oportunidades homologados em todos os subprocessos, `manual-de-processos`.
