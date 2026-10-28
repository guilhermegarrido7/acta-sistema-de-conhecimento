# Auditoria de Convênios

Auditoria do ciclo de convênios e parcerias: estruturação e habilitação do parceiro, pareceres e
alçada de assinatura, composição dos aportes, fornecedores contratados pelo parceiro, reconciliação
do extrato bancário contra o sistema de prestação de contas, desvio de finalidade, contrapartida
econômica, apuração de metas, glosa e termo de encerramento.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Segundo pré-requisito: `acta-metodo-auditoria`**, também declarado como dependência. Este plugin é de **processo auditado**. As
> regras invioláveis, a doutrina do número exato, a regra R8, o papel de trabalho, o programa de
> testes, a redação de achados e o tratamento de bases vivem lá e **não são repetidos aqui**. Cada
> skill manda carregá-lo antes.
>
> **Terceiro: `acta-gestao-de-riscos`.** O Dicionário de Riscos da casa vive lá. A matriz de riscos
> deste plugin **classifica no vocabulário de lá**, e não cria taxonomia própria.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.

## O que faz

Conduz a auditoria de um convênio ponta a ponta, do instrumento ao termo de encerramento, seguindo o
dinheiro por um caminho que a auditoria de compras não percorre: **quem gasta não é quem paga**. O
concedente repassa, o parceiro executa e contrata, e o concedente só vê o gasto depois, pelo que foi
anexado ao sistema de prestação de contas. Todo o método existe para cobrir essa distância.

Confronta a data de cada documento de habilitação com a da celebração, rastreia a ressalva de parecer
até a decisão que a tratou, confere assinante contra ato de designação de gestor, recompõe a
proporção de aporte entre concedente e parceiro parcela a parcela, estratifica a despesa do convênio
por natureza, por fornecedor e por status, monta o planilhão de due diligence dos fornecedores
contratados pelo parceiro, reconcilia o extrato bancário da conta específica contra o sistema de
prestação de contas em seis resíduos, reconstitui o saldo por fonte para sustentar o achado de desvio
de finalidade, critica a contrapartida econômica que nunca passou por caixa, recalcula as metas do
plano de trabalho e fecha no termo de encerramento e na pendência que deveria travar o repasse
seguinte ao mesmo parceiro.

Traz o que é próprio do domínio e não existe no plugin de método: o ciclo do convênio em sete elos, a
linha do tempo dos prazos normativos, os dez blocos executáveis, os dezoito riscos codificados, o
planilhão de fornecedores, a mecânica de reconciliação extrato contra sistema, e a matriz de achados
com a coluna de glosa.

## Skills

| Skill | Elo do ciclo | Descrição |
|---|---|---|
| `ciclo-do-convenio` | Entrada | O ciclo em sete elos com a pergunta-mestra de cada, os dez blocos executáveis, a linha do tempo dos prazos normativos, o padrão Plano A/B/C e as seis perguntas que dimensionam o mandato. |
| `matriz-de-riscos-do-convenio` | Transversal | Os dezoito riscos codificados `CNV.R<NN>`, a matriz risco por controle e por teste, os cinco que decidem o trabalho, e o confronto com a matriz de risco que o próprio concedente elaborou na celebração. |
| `estruturacao-e-formalizacao` | 1 a 4 | Plano de trabalho anterior à execução, habilitação do parceiro documento a documento, a armadilha das datas de certidão, pareceres e rastreio de ressalva, gestor não designado, excepcionalidades acatadas e a composição do aporte. |
| `execucao-e-fornecedores` | 5 | Estratificação da despesa, processo de contratação pelo parceiro, teto de preço por hora, o planilhão de due diligence, os seis cortes sobre documento fiscal e a crítica do entregável do serviço. |
| `prestacao-de-contas` | 4 e 6 | As duas bases e por que não fecham, os seis resíduos da reconciliação, a reconstituição do saldo por fonte no desvio de finalidade, a regra de execução mínima antes da parcela seguinte, o previsto contra realizado por rubrica e a receita de aplicação financeira. |
| `contrapartida-e-encerramento` | 7 e transversal | Elegibilidade e valoração da contrapartida econômica, contrapartida fictícia, meta inauditável, recálculo de indicador, concentração de aprovador, termo de encerramento e a pendência que trava o convênio seguinte. |

## Fluxo típico

`ciclo-do-convenio` (dimensiona o escopo, monta a linha do tempo de prazos e declara os elos
inaplicáveis) → `matriz-de-riscos-do-convenio` (registro de riscos e matriz, classificados no
Dicionário de Riscos) → `programa-de-testes` do plugin de método (tipo de teste, frequência,
amostragem) → `estruturacao-e-formalizacao` → `execucao-e-fornecedores` → `prestacao-de-contas` →
`contrapartida-e-encerramento`, com `bases-e-conciliacao` e `papel-de-trabalho` carregados a cada
bloco executado, e `redacao-de-achados` e `relatorio-de-auditoria` no fechamento.

A ordem segue o ciclo porque a estruturação fixa os critérios contra os quais tudo o mais é medido: a
vigência apurada no elo 3 é a referência do teste de despesa fora do prazo no elo 6, e a meta lida no
elo 1 é o que se recalcula no elo 7. Começar pela reconciliação bancária, que é a tentação natural
porque é o teste mais produtivo, gera uma lista de resíduos sem critério para classificá-los.

Um pedido tem de sair no primeiro dia, antes de qualquer teste: **o extrato completo da conta do
convênio, em arquivo, da abertura ao encerramento.** Ele vem do parceiro, chega tarde, e sem ele
metade do trabalho não existe.

Ao fechar, o que se aprendeu volta para a matriz e o estado do engajamento vai para o checkpoint de
`acta-way`.

## Fronteiras

**`acta-auditoria-compras`** é o vizinho mais próximo, e a fronteira tem de ficar declarada. A
mecânica de testar competição, os sinais de direcionamento e o cruzamento de quadro societário são os
mesmos, vivem lá, e se carregam junto quando a contratação feita pelo parceiro for o foco do mandato.
O que muda aqui: não há sistema, tabela de alçada nem trilha de aprovação do cliente para testar, só
o que o parceiro anexou; a regra de competição é a da norma do concedente, e não a política de uma
empresa; e o desfecho do achado é **glosa**, valor a devolver, e não recomendação de processo.

**`acta-programa-de-integridade`** recebe o que este plugin encontra de conflito de interesse e de
relacionamento societário quando o mandato pedir tratamento de integridade, e não de convênio.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-auditoria`; vocabulário de
risco, em `acta-gestao-de-riscos`. Não repita aqui o que já está lá.

**Nome de concedente, de parceiro, de fornecedor e de pessoa não entram em skill.** Escreva o
concedente, o parceiro, a entidade convenente, o fornecedor, o gestor do convênio. O cruzamento de
conflito de interesse usa dado pessoal: vale integralmente `acta-way:anonimizacao-e-lgpd`, e no papel
de trabalho e no relatório o vínculo se descreve pelo cargo e pelo papel, nunca pelo nome.

Percentuais de aporte, prazos normativos, número mínimo de cotações e teto de preço por hora citados
nas skills são **exemplo de parâmetro**, não padrão de mercado: são da instrução normativa daquele
concedente, mudam de versão para versão, e o auditor lê a norma vigente na data do ato antes de
testar aderência a ela.
