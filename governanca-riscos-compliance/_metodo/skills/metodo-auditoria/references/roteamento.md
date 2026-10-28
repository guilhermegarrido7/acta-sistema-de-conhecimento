# Roteamento: a tabela completa e a divisão entre mecânica e domínio

Extraído de `metodo-auditoria`, seção 6, que mantém a tabela resumida. O conteúdo é o mesmo; só o
lugar mudou.

| O que você vai fazer | Carregue |
|---|---|
| Ler/tratar extrato bancário, fatura de cartão, planilhão de pagamentos, base de colaboradores, cadastro de fornecedores; conciliar duas bases; definir amostra | **`bases-e-conciliacao`** |
| Montar ou atualizar papel de trabalho: capa, abas de evidência, aba de critérios, resultado | **`papel-de-trabalho`** |
| Criar/revisar programa de testes, matriz de testes, registro de riscos R1..Rx, matriz controles × riscos, grau de implementação, régua de riscos | **`programa-de-testes`** |
| Escrever ponto de auditoria, achado, memorando de deficiências, texto de status report, recomendação, severidade | **`redacao-de-achados`** |
| Montar/alterar slide no deck de auditoria, tabela ou gráfico em PPTX, organograma, fluxo AS IS | **`relatorio-de-auditoria`** |
| Fechar um bloco de trabalho, registrar o que foi feito/refeito, promover lição a memória ou skill | **`aprendizado-e-historico`** |
| Auditar o ciclo de receita: contrato, medição/BM, aceite, faturamento/NF, tabela de preços, reajuste, glosa, notificação, inadimplência/aging, cancelamento/balança/MTR | **`acta-revenue-assurance`** (plugin próprio) |

**Memória NÃO é skill da ACTA.** Ler ou gravar memória de longo prazo, decidir se o fato é do
usuário ou do projeto, resolver divergência entre registros: isso é protocolo **pessoal do
usuário**, não metodologia da ACTA. Se o ambiente tiver uma skill de memória, carregue-a **antes
de produzir qualquer coisa**; no ambiente de alguns auditores ela se chama **`memoria`**. **Se não tiver, siga
sem:** nada nesta skill depende dela, e o mínimo é ler o `CLAUDE.md` global e o do engajamento
antes de produzir.

Mais de uma pode valer ao mesmo tempo, um ponto novo no relatório normalmente pede `bases-e-conciliacao`
(o número), `redacao-de-achados` (o texto) e `relatorio-de-auditoria` (o slide). Carregue as que o trabalho pedir.

As seis primeiras linhas são skills de **mecânica** (como fazer o entregável) e vivem neste
mesmo plugin. A última é uma skill de **domínio** (o que testar num processo) e vive em plugin
próprio: cada processo auditado (receita, folha, estoques, compras, marketing, produção) é um
plugin do repositório, que orquestra estas skills de mecânica e se retroalimenta a cada execução.
