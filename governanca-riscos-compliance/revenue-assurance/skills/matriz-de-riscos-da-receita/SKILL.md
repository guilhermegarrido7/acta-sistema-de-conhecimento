---
name: matriz-de-riscos-da-receita
description: Monte o registro de riscos e a matriz risco por controle e por teste do ciclo de receita, com os quatorze riscos codificados da casa. Acionar ao abrir o programa de testes de receita, ao verificar se a matriz do mandato cobre aderência fiscal, encargos de mora, cut-off e conciliação com o razão, ou ao promover risco novo para a matriz.
---

# Matriz de riscos e controles da receita

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de processo auditado; o método vive no plugin de método.

A taxonomia de tipo de teste, a régua de amostragem, os conceitos de risco (categoria, evento,
fator) e o formato do código `<CódProcesso>.R<NN>` estão em `programa-de-testes` — esta skill traz
apenas **o conteúdo de receita**: quais riscos existem no ciclo, que controle de melhor prática os
mitiga, e como cada um se testa.

## 1. Os quatorze riscos do ciclo de receita

Processo `REC`. O controle da terceira coluna é o de **melhor prática de mercado**, não o normativo
interno do cliente: quando a política interna do mandato tratar do tema, cite-a pelo assunto, sem
transcrever código de item. Severidade é sugestão de partida — calibre no caso, com
`redacao-de-achados`.

| Código | Elo | Risco | Controle (melhor prática) | Como se testa | WP | Sev. |
|---|---|---|---|---|---|---|
| `REC.R01` | Contrato | Prestação sem contrato vigente e assinado, iniciada antes da formalização, sem aprovação em alçada, ou com instrumento sem as cláusulas mandatórias e sem chancela jurídica | Minuta padrão revisada pelo jurídico, aprovação em alçada e assinatura bilateral **antes** do início | Data de início × data de assinatura; checklist de cláusulas × instrumento; evidência de alçada | REC.01 | Alta |
| `REC.R02` | Cadastro | Contrato não cadastrado, ou cadastrado com vínculo ou valor errado; o sistema permite alocar recurso e faturar sem contrato vigente | Cadastro vinculado ao cliente pelo valor contratual, com bloqueio automático na ausência de contrato vigente | Tela do cadastro × instrumento; demonstração em tela do bloqueio; aditivos refletidos | REC.02 | Alta |
| `REC.R03` | Preço | Preço unitário praticado diverge do contratual; reajuste aplicado fora do índice, fora da data-base ou sem formalização | Preço da proposta ou planilha vigente; reajuste pelo índice contratual, formalizado e aprovado | PU faturado × PU vigente em 100% dos itens; reperformance do reajuste | REC.03 | Alta |
| `REC.R04` | Medição | Serviço medido a maior ou a menor que o executado; medição sem lastro operacional; índice de desempenho que modula o valor apurado incorretamente | Boletim conferido contra evidência operacional independente; índice reperformado a partir dos indicadores-fonte | Medição × evidência de execução; recálculo do índice × valor aplicado | REC.04 | Alta |
| `REC.R05` | Medição física | Quantidade faturada apurada por instrumento sem aferição metrológica vigente; registro do instrumento não íntegro nem rastreável | Instrumento aferido por entidade credenciada, no prazo; registro íntegro, sequencial e com contraprova externa | Certificado de aferição × período; bateria de cortes sobre 100% dos registros; confronto com contraprova externa | REC.05 | Alta |
| `REC.R06` | Aceite | Nota emitida sem aceite formal do cliente, com aceite posterior à emissão, ou aceite assinado por quem não tem competência | Aceite formal, anterior à emissão, assinado por quem o contrato e a designação formal habilitam | Data do aceite × data da nota; validação dos assinantes contra a designação | REC.04 | Alta |
| `REC.R07` | Faturamento | Medição aceita não faturada ou faturada parcialmente; entrega ou expedição sem faturamento; subfaturamento | Faturamento integral do medido e aceito, líquido de glosa, com conferência pelos dois lados da população | Aceite × nota emitida e nota × aceite, casados com consumo de pool | REC.04 | Alta |
| `REC.R08` | Glosa | Glosa não capturada, duplicada ou aplicada sem base contratual; glosa devida e não aplicada; conversão de notificação em glosa não medida | Relação de glosas conciliada por número e data ao controle de notificações, no mesmo universo de competências | Conciliação glosa × notificação; taxa de conversão com recorte declarado | REC.04 | Média |
| `REC.R09` ★ | Fiscal | Nota emitida sem aderência à legislação tributária, gerando multa e sanção | Parametrização fiscal validada por espécie de documento e revisão periódica da emissão | Serviço: enquadramento, município, alíquota, retenções. Produto: código de operação, classificação fiscal, base, alíquotas, substituição, UF de destino | REC.07 | Alta |
| `REC.R10` | Cancelamento | Nota cancelada sem motivo registrado ou sem alçada; não reemitida na competência; cancelamento fora do prazo legal | Cancelamento com motivo, aprovação em alçada e reemissão tempestiva na competência correta | Relação de cancelamentos × motivo × alçada × reemissão × prazo legal aplicável à espécie | REC.07 | Média |
| `REC.R11` | Recebimento | Inadimplência não gerida, morosidade na cobrança, negociação desfavorável; **liquidação de título sem o efetivo recebimento dos recursos** | Aging monitorado com tratativas registradas; baixa lastreada em ingresso efetivo; alçada para negociação | Aging reconciliado ao razão; baixas × extrato bancário com consumo de pool; 100% das baixas manuais | REC.06 | Alta |
| `REC.R12` ★ | Encargos | Dispensa não autorizada de juros e multa sobre títulos pagos em atraso | Cobrança automática dos encargos contratuais; dispensa só por decisão formal em alçada | Reperformance dos encargos em 100% dos títulos liquidados após o vencimento | REC.06 | Média |
| `REC.R13` ★ | Competência | Receita reconhecida em competência distinta da do fato gerador (cut-off) | Corte de competência formalizado no fechamento, com receita a faturar reconhecida | Janela em torno de cada virada de mês, e a virada de exercício em dobro; efeito líquido **e** em módulo | REC.07 | Alta |
| `REC.R14` ★ | Contabilização | Divergência entre faturamento, módulos auxiliares e razão contábil; lançamento manual direto na conta de receita | Conciliação periódica faturamento × razão, por competência e por produto, com bloqueio de lançamento manual em conta de receita | Conciliação por competência **e por linha de receita**; identificação de 100% dos lançamentos manuais | REC.07 | Alta |

★ = risco que faltava nos programas de receita da casa até o confronto com um registro de riscos de
vendas e faturamento de referência. Ver §2.

## 2. Os quatro riscos que faltavam

Um registro de riscos de vendas e faturamento usado como referência trouxe quatro eventos que os
programas de receita da casa não cobriam. **Acrescente os quatro por padrão em todo mandato de
receita** — e, quando estiver revisando a matriz do próprio cliente, é por eles que se começa,
porque são exatamente os que costumam faltar também lá.

**1. Aderência fiscal na emissão (`REC.R09`).** Testava-se emissão e cancelamento de nota sem nunca
verificar a correção tributária da própria nota. Exposição substancialmente maior na nota de produto
que na de serviço — não transporte o teste de uma para a outra.

**2. Dispensa não autorizada de juros e multa (`REC.R12`).** Encargo de mora não cobrado é receita
renunciada sem decisão formal e **não aparece no aging**: o título pago em atraso sem encargo é
liquidado e some do relatório. Quem audita só o aging nunca o encontra. O teste é reperformance sobre
100% dos títulos liquidados após o vencimento.

**3. Cut-off da receita (`REC.R13`).** Os programas paravam no aging e não perguntavam se a receita
está na competência certa. O risco existe sempre que o fato gerador e a emissão não coincidem — e
neste domínio eles nunca coincidem: execução diária, medição mensal, aceite posterior à medição,
emissão posterior ao aceite, faturamento em data fixa.

**4. Conciliação faturamento × razão contábil (`REC.R14`).** Concluía-se sobre o faturamento sem
saber se ele chegou íntegro à contabilidade. Concilie **por competência e por produto**: diferença
positiva de um produto compensa a negativa de outro e o total fecha errado com aparência de certo. E
identifique o lançamento manual direto na conta de receita, que é a via clássica de ajuste sem
lastro.

**Duas notas de nomenclatura**, que vieram do mesmo confronto e valem a pena adotar porque nomeiam
melhor o que já se testava: *"expedição sem faturamento ou subfaturada"* (dentro de `REC.R07`) e
*"liquidação de títulos sem o efetivo recebimento dos recursos"* (dentro de `REC.R11`). A segunda é
exatamente o risco por trás da assertiva de que não há contas a receber em aberto.

**Uma nota de categoria.** No registro de referência, o risco de multa e sanção fiscal estava
classificado como falha de produto ou serviço, o que é erro de taxonomia: falha fiscal não é falha de
entrega. Se a taxonomia do mandato não tiver uma categoria fiscal e regulatória, crie-a antes de
classificar — categoria errada some do mapa de calor da área errada.

## 3. Como usar a matriz num mandato

1. **Parta dos quatorze.** Eles são o piso, não o teto.
2. **Marque a aplicabilidade elo a elo**, usando as seis perguntas de dimensionamento de
   `ciclo-da-receita` §6. Risco inaplicável **se declara com a razão** — `REC.R05` não se aplica a
   remuneração por carga ou por quantidade fixa; a interrupção por inadimplência dentro de `REC.R11`
   costuma não se aplicar a contrato com ente público.
3. **Acrescente o que o mandato trouxer.** Cada setor traz estrutura contratual própria — modulação
   por desempenho, take-or-pay, preço variável por atributo de qualidade, apuração por agente externo.
   O risco nasce da estrutura, não do setor.
4. **Associe controle e teste por código**, nunca repetindo o texto do risco na linha do controle
   (`programa-de-testes` §7).
5. **Promova o risco novo de volta para cá** ao fechar o trabalho, junto do controle de melhor
   prática e da forma de testar. Matriz que não recebe o aprendizado da execução envelhece em dois
   mandatos.

## 4. Quando o cliente já tem a própria matriz

Auditar sobre a matriz do cliente sem confrontá-la é herdar os pontos cegos dele. Três verificações,
nesta ordem:

- **Cobertura dos elos.** Os sete elos de `ciclo-da-receita` §2 aparecem? O elo 7 (contabilização) e o
  corte de competência são os que mais faltam.
- **Cobertura dos quatro da §2.** É o teste de maturidade mais rápido que existe para matriz de
  receita.
- **Controle sem risco e risco sem controle.** Controle que não ataca risco nenhum é atividade, não
  controle; risco sem controle associado é decisão de aceitação que precisa de dono.

A ausência de um risco na matriz do cliente é achado de desenho do processo de gestão de riscos, e
entra no relatório como tal — não se corrige em silêncio acrescentando o risco ao programa e seguindo
adiante.

## O que entregar

1. O registro de riscos do mandato, em aba própria, código `REC.R<NN>`, com categoria, evento e fator.
2. A matriz risco × controle × teste, associada por código.
3. A lista dos riscos declarados inaplicáveis, com a razão contratual ou operacional de cada um.
4. Os riscos novos que o mandato revelou, prontos para promoção a esta matriz.
5. Quando houver matriz do cliente: o confronto de cobertura e os riscos ausentes apontados.

## Próximo passo

`programa-de-testes`, para converter a matriz em programa com tipo de teste, frequência e régua de
amostragem; depois as skills de elo, na ordem do ciclo.
