---
titulo: Perfis de Acesso e Segregação de Funções
pratica: governanca-riscos-compliance
duracao_tipica: 4 a 8 semanas
plugin: acta-segregacao-de-funcoes
---

## O que é, e quando a ACTA é contratada para isso

Um trabalho de segregação de funções apura em que medida a Companhia consegue impedir que uma única
pessoa feche sozinha um ciclo de desembolso, de estoque ou de resultado. Monta a matriz na camada de
função, traduz para transação, perfil e usuário, roda cada célula como consulta a 100% sobre a base,
separa o conflito que existe no desenho do conflito que existe na base, e testa o ciclo de vida do
acesso ponta a ponta: concessão, modificação na transferência de área, revisão periódica e revogação
no desligamento medida em dias. Fecha com o controle compensatório desenhado para o conflito que não
se resolve por falta de gente, e com o registro da concentração que sobra como risco aceito.

A firma costuma ser contratada em três situações:

- **O auditor externo ou a matriz estrangeira passou a exigir a matriz de SoD.** A Companhia não tem
  matriz testável, só uma genérica que veio com o ERP e nunca foi cruzada com a base real de usuários.
- **Houve suspeita, desvio ou near-miss num ciclo de desembolso.** O cliente quer saber quantas pessoas
  conseguem, hoje, pagar, cadastrar fornecedor e conciliar sozinhas — a pergunta é sobre capacidade,
  não sobre quem fez.
- **A empresa vai ser auditada, vendida ou abrir capital.** Precisa demonstrar que o acesso é
  governado: concessão aprovada, revogação tempestiva no desligamento, acesso privilegiado ao banco
  controlado.

## As etapas do ciclo de vida

Uma skill por etapa. A ordem tem uma razão prática: o corte de acesso privilegiado ao banco e o
cruzamento de vínculo são a primeira coisa a rodar, porque uma única conta com privilégio no banco que
também transaciona invalida a conclusão sobre a base inteira, e usuário ativo sem vínculo contamina toda
contagem de conflito.

| # | Etapa | O que fecha a etapa |
|---|---|---|
| 1 | Perfis e acessos (corte inicial) | O acesso privilegiado ao banco levantado e revisado por log, e o cruzamento usuários ativos × vínculo vigente rodado a 100% — os dois cortes que mudam a conclusão de todo o resto |
| 2 | Matriz de SoD | A matriz triangular na camada de função, codificada `SOD.<NN>` com dano escrito e severidade por célula, o mapa função → transação, e a base consolidada usuário × perfil × transação |
| 3 | Conflitos críticos | O catálogo filtrado por aplicabilidade e escopo, os cinco pares que decidem a perda (com a variante de alteração de dado bancário), os três pares de TI e o par específico do setor |
| 4 | Perfis e acessos (ciclo completo) | Concessão com a árvore de chamados percorrida, revogação do perfil de origem na transferência, revisão periódica testada pela revogação decorrente, e a dupla medida de prazo na revogação |
| 5 | Mitigação e monitoramento | As quatro saídas mais baratas esgotadas, o compensatório desenhado em seis campos, a revisão independente de log e o registro da concentração como risco residual aceito |

## Onde este projeto dá errado

Cada item já aconteceu, e a prevenção está nas skills.

**Monta-se a matriz por cargo ou por pessoa, não por função.** Matriz por cargo envelhece a cada
reorganização e não se testa (cargo não existe dentro do sistema); matriz por pessoa é lista de exceções.
*Prevenção:* a unidade é a função — verbo sobre objeto — desenhada na camada de função e testada na de
usuário, com o mapa função → transação documentado para ser reproduzível.

**Testa-se só o cadastro novo de fornecedor e perde-se a alteração de dado bancário.** A alteração de
dado bancário de fornecedor legítimo não gera cadastro novo, não aparece em relatório de exceção, e é a
variante que o desvio real usa. *Prevenção:* testar explicitamente a alteração de dado bancário nos pares
que a têm (fornecedor e folha), não apenas a criação.

**Conclui-se "sem exceções" sobre a foto da base do dia da extração.** O conflito no papel sem conflito
efetivo hoje — a segregação por acidente — é sorte, não controle: basta uma concessão de rotina para
materializar. *Prevenção:* reportar conflito no papel e conflito efetivo separadamente, e testar a
concessão do próprio acesso pelo log do período, não pela foto da base.

**Mede-se a revogação no desligamento a partir da data do chamado.** O SLA de TI corre do chamado; o
risco corre do desligamento. Quando pessoal abre o chamado dias depois da rescisão, TI "cumpre o prazo"
e o acesso ficou ativo o dobro do tempo. *Prevenção:* medir as duas — prazo de TI e prazo de exposição —
a partir da base de desligados de pessoal, não da lista de TI, com o maior prazo do período declarado.

**Recomenda-se segregar onde não há gente para segregar.** Numa área financeira de três pessoas a
recomendação é arquivada com educação e ensina o cliente a ignorar o resto do relatório. *Prevenção:*
esgotar as quatro saídas mais baratas (redistribuir, subir alçada, limite de sistema, terceirizar) e,
quando o compensatório for a única saída, desenhá-lo nos seis campos em vez da frase "recomenda-se
segregar".

**Aceita-se "confiamos na pessoa" ou "o sistema registra em log" como controle compensatório.** Tempo de
casa não é controle, e log que ninguém lê não detecta nada. *Prevenção:* o teste do compensatório é
sempre o mesmo — operando como descrito, ele teria detectado o dano do par? — e a revisão independente de
log exige independência real, critério de exceção escrito antes e rastro do questionamento.

## O que se entrega

| Artefato | Formato | Para quem |
|---|---|---|
| Matriz de SoD | Planilha triangular codificada `SOD.<NN>`, com dano e severidade por célula | Auditoria interna / TI |
| Mapa função → transação e base consolidada | Planilha usuário × perfil × transação, por sistema e escopo, com critério de casamento | Interno e auditável |
| Relação de conflitos efetivos | Lista nominal por matrícula e cargo, separada em intra-perfil e inter-perfil | Donos de área e TI |
| Testes do ciclo de vida do acesso | Papéis de trabalho de concessão, modificação, revisão e revogação, com as duas medidas de prazo | Interno e auditável |
| Tabela de compensatórios e exceções | Seis campos por conflito coberto, com revisão de log desenhada | Donos de controle |
| Registro de riscos residuais aceitos | Concentração aceita, com quem aceita por cargo, prazo e gatilho de reavaliação | Governança / diretoria |
| Relatório de SoD | Deck no padrão da casa, achado sobre capacidade (nunca conduta) | Comitê de auditoria / diretoria |

## Quem participa, do lado do cliente e do nosso

**Do lado do cliente:** um patrocinador na auditoria interna, na controladoria ou na diretoria; a TI
(própria ou o provedor terceirizado) que entrega o catálogo de perfis, a base de usuários e os logs; o RH
para a base de desligados e transferidos; e os gestores de área, que respondem pela concessão e pela
aceitação formal da concentração residual.

**Do nosso lado:** um auditor responsável pela matriz, pela construção da base consolidada e pelos testes
a 100%, com o sócio responsável validando a severidade dos conflitos e a instância de aceitação do risco
residual — e cuidando para que o achado seja escrito sobre a capacidade que a configuração permite, nunca
sobre a conduta de alguém.

## O que é preciso ter antes de começar

- **O catálogo de perfis de cada sistema em escopo** (perfil, descrição e transações que concede): é o
  insumo que o cliente mais demora a entregar e sem o qual nenhuma consulta roda.
- **A base de usuários, perfis e transações por sistema e por escopo organizacional**, extraída de
  produção, com data e hora da extração.
- **A base de pessoal vigente, os desligados e os transferidos do período**, do sistema de RH e não da
  lista de TI, para o cruzamento de vínculo e as medidas de tempestividade.
- **A relação de contas com privilégio administrativo e os logs de acesso privilegiado**, por camada e
  ambiente — o corte que precede qualquer análise de perfil.
- **Os chamados de concessão e as evidências da revisão periódica**, para percorrer a árvore de chamados
  e testar a revogação decorrente.
