---
titulo: Dados e Analytics
pratica: consultoria-empresarial
duracao_tipica: 4 a 8 semanas
plugin: acta-dados-e-analytics
---

## O que é, e quando a ACTA é contratada para isso

Um projeto de dados e analytics transforma o dado cru e disperso de uma empresa — ou de um grupo — na
resposta a uma pergunta de negócio e na recomendação do que fazer. O entregável não é um painel: é
uma decisão, sustentada por uma base que reconcilia com a contabilidade do cliente.

Na prática da casa, isto é **analytics financeiro de consolidação**, não um programa de governança de
dados. A firma costuma ser contratada em três situações:

- **O grupo não sabe o próprio resultado real.** Várias empresas, transações entre elas, e o
  consolidado nunca foi feito direito. A pergunta é qual empresa cria e qual destrói valor depois de
  eliminado o intercompany.
- **O gasto está fora de controle e ninguém enxerga.** Dado em extrato de cartão, planilha e PDF, sem
  classificação, impossível de ler por categoria. A pergunta é onde se gasta e quanto dá para cortar.
- **A diretoria decide no escuro.** Existe dado, mas não existe visão gerencial — só o contábil, que
  foi feito para o fisco. A pergunta é como ler o dado para decidir.

## As etapas do ciclo de vida

Sete skills, uma trava inviolável: nenhum número passa da validação sem reconciliar.

| # | Etapa | O que fecha a etapa |
|---|---|---|
| 1 | Diagnóstico e escopo de dados | Pergunta de negócio fechada, fontes inventariadas, viabilidade e escopo definidos |
| 2 | Ingestão e tratamento | Base crua normalizada e classificada, com a bruta preservada e o tratamento rastreável |
| 3 | Qualidade e validação | Base reconciliada contra a fonte autoritativa, ou declarada não validada |
| 4 | Reclassificação gerencial | Visão de gestão montada, com o total fechando contra o societário |
| 5 | Consolidação e intercompany | Grupo consolidado, intercompany eliminado, resultado real por empresa |
| 6 | Modelo analítico e visualização | Modelo por recorte, painel de decisão, e a decisão de automatizar o recorrente |
| 7 | Insight e recomendação | Recomendação acionável, com a causa e a limitação declaradas |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**Começa-se pelo dado, não pela pergunta.** O projeto vira exploração sem fim e entrega um painel que
ninguém usa. *Prevenção:* fechar a pergunta de negócio e a decisão que ela destrava antes de abrir
qualquer base.

**A granularidade não sustenta a pergunta.** Querer analisar gasto por categoria a partir de um total
mensal é adivinhação. *Prevenção:* checar no diagnóstico se o dado disponível responde a pergunta; se
não, o escopo real é obter o dado.

**O número não reconcilia e vai para o deck mesmo assim.** Estoura na primeira reunião em que o
cliente confere contra o sistema. *Prevenção:* nenhum número sai da validação sem reconciliar contra
a fonte autoritativa; o que não fecha se declara não validado.

**A consolidação soma o intercompany.** O grupo aparece maior do que é, e a empresa que vive de fee
da holding parece lucrativa. *Prevenção:* identificar pela contrapartida espelhada e eliminar pelas
duas pontas.

**Entrega-se o painel e para por aí.** O cliente contratou a decisão, não a ferramenta, e fica com o
trabalho mais difícil — interpretar. *Prevenção:* subir a escada até a recomendação acionável, com
dono humano.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Base tratada e validada | Planilha-mestre, com a bruta preservada e a reconciliação | Interno e auditável |
| Modelo analítico | Base de fato única + visões por recorte (dinâmica/SUMIFS) | Controladoria do cliente |
| Painel | Power BI ou planilha, no padrão visual da casa | Diretoria e gestores |
| Recomendação | Deck no padrão da casa, com título-asserção e a decisão | Diretoria |
| Pipeline (se recorrente) | Fluxo automatizado de ingestão a consolidação, com revisão humana | Controladoria |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador que define a pergunta de negócio e aprova a recomendação
(CFO, controller ou diretoria), e um ponto focal que dá acesso às fontes (ERP, extratos, planilhas) e
valida a classificação, porque quem conhece o gasto é quem o fez.

**Do nosso lado:** um consultor responsável pela condução e pela recomendação — que tem dono humano,
porque é o que o cliente paga e quem responde se estiver errada. O agente executa o trabalho
determinístico sob revisão.

## O que é preciso ter antes de começar

- **A pergunta de negócio**, fechada com o patrocinador — a decisão que o projeto destrava.
- **Acesso às fontes na granularidade certa**: lançamento a lançamento, não agregado, senão a análise
  não responde.
- **A fonte autoritativa para reconciliar**: contabilidade, razão ou extrato do período.
- **Em grupo:** a relação de empresas e a noção de quais transações ocorrem entre elas.
- **O contexto para classificar**: quem conhece o gasto, para validar o dicionário de classificação.
