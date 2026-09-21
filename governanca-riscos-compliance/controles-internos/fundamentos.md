---
titulo: Fundamentos
---

## A ideia que sustenta o método

Controle interno como disciplina formal nasce da resposta regulatória a fraudes contábeis. O COSO foi
criado nos Estados Unidos por entidades profissionais de contabilidade e auditoria para dar uma
definição comum ao que até então cada empresa chamava de controle do seu jeito, e a lei
Sarbanes-Oxley, editada depois dos colapsos corporativos do início dos anos 2000, transformou essa
definição em obrigação: a administração de companhia registrada na SEC passou a ter de avaliar e
declarar a efetividade dos controles sobre o reporte financeiro, com o auditor independente opinando
sobre a mesma coisa. Desse arranjo saiu quase tudo o que hoje se chama de trabalho de controles
internos, incluindo o vocabulário, a separação entre desenho e efetividade e a escala de severidade
das deficiências.

O problema que essa tradição resolve é de assimetria. Quem dirige a empresa sabe o que ela deveria
fazer; quem opera sabe o que ela de fato faz; e o Conselho, que responde pelo resultado, não tem
acesso direto a nenhum dos dois. O RACM, o walkthrough e o teste de efetividade existem para tornar
essa distância mensurável, item por item, com rastro que outra pessoa consegue reproduzir. É por isso
que o COSO insiste que um princípio precisa estar presente e funcionando, e não apenas presente: a
política escrita descreve a intenção, e a intenção não protege ninguém.

A ACTA opera esse ferramental fora do ambiente que o gerou. O trabalho típico da casa é em empresa
fechada do mid-market brasileiro, sem SOX, sem opinião de auditor sobre controles e frequentemente sem
matriz nenhuma. Isso muda o que o método entrega antes de mudar como ele é executado. Na ausência de
RACM, construí-lo é o entregável, e costuma ser a primeira vez que a Companhia vê o próprio ambiente
de controle em uma página. O walkthrough deixa de ser confirmação de uma narrativa herdada e vira o
coração do trabalho, porque a distância entre o normativo e a prática é maior onde ninguém nunca
mediu. Cada skill declara o que é exigência de companhia registrada na SEC e o que é boa prática
aplicável a empresa fechada, para que o cliente saiba quando está comprando conformidade e quando está
comprando gestão.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| COSO, Internal Control – Integrated Framework (revisão de 2013) | A definição de referência de controle interno: cinco componentes, dezessete princípios, pontos de foco, e o critério de que o sistema só é efetivo com os componentes presentes, funcionando e integrados | As três colunas de ancoragem do RACM (componente, princípio, ponto de foco) em `matriz-riscos-controles` §1; a leitura de princípio sem controle no §7; o par presente e funcionando que sustenta a separação de `desenho-vs-efetividade` |
| Sarbanes-Oxley, seção 404 | A obrigação de a administração de companhia registrada na SEC avaliar e declarar a efetividade do controle interno sobre o reporte financeiro | A fronteira declarada em cada skill entre exigência normativa e boa prática; a consequência automática da fraqueza material em `deficiencias-e-severidade` §6 |
| PCAOB AS 2201 | A norma de auditoria de controles internos integrada à auditoria das demonstrações: escopo top-down, walkthrough, definição de deficiência e a escala de três níveis | O corte de escopo de `matriz-riscos-controles` §2; a exigência de percurso em `walkthrough-e-narrativa`; a regra de que indagação isolada não conclui em `teste-de-controle-e-amostragem` §1; a escala inteira de `deficiencias-e-severidade` |
| NBC TA 315 / ISA 315 | O entendimento da entidade, do seu sistema de informação e do fluxo das transações relevantes como base para identificar onde o erro material pode nascer | A exigência de mapear o fluxo de informação, e não só a lista de controles, em `matriz-riscos-controles` §2 e `walkthrough-e-narrativa` §1 |
| Asserções sobre classes de transações e saldos | Existência e ocorrência, integridade, exatidão, corte de competência, classificação, avaliação, direitos e obrigações | A coluna 14 do RACM e a leitura de asserção descoberta; a agregação por asserção em `deficiencias-e-severidade` §3 |
| COBIT | O referencial que organiza os domínios e os objetivos de controle de tecnologia da informação | Os quatro domínios de `itgc` e o padrão de codificação por domínio do §5 |
| ISO/IEC 27001 | O referencial de sistema de gestão de segurança da informação | `itgc` §1, invocada apenas onde o trabalho toca segurança da informação como disciplina própria, e deliberadamente não invocada quando o objeto é confiabilidade do reporte financeiro |
| Normas do IIA | O corpo normativo da auditoria interna, inclusive a exigência de documentação que permita a um terceiro reproduzir o trabalho e refazer a conclusão | O papel de trabalho e a evidência reproduzível de `teste-de-controle-e-amostragem` §5, herdados de `acta-metodo-auditoria` |

## Onde a ACTA se afasta do manual

O manual admite que um controle fique sem conclusão. A casa não admite. Controle que não pôde ser
testado é `Ineficaz`, com a razão classificada em três situações que parecem iguais no resultado e
produzem recomendações completamente diferentes: o controle não existe, ele existe e a Companhia não
evidenciou, ou o acesso sistêmico não foi obtido. Branco, "N/T" e "não testado" estão proibidos,
porque o Conselho lê branco como esquecimento e porque cada uma das três razões gera um plano de ação
distinto. Pela mesma lógica, a matriz que chega do cliente com uma única coluna de status é desdobrada
em duas antes de qualquer outra coisa, linha a linha, e esse desdobramento é dimensionado na proposta
como trabalho, não tratado como ajuste de formatação.

A segunda divergência é de porte. O padrão foi escrito para empresa com área de TI estruturada,
recertificação periódica de acesso e gente suficiente para segregar função, e boa parte das
recomendações do manual não tem destinatário no mid-market. Recomendar segregação onde há duas pessoas
na retaguarda é escrever um ponto que nunca será remediado, e deficiência que volta três ciclos
seguidos acaba corroendo a credibilidade do relatório inteiro. A casa desenha o compensatório viável
para o porte, tipicamente monitoramento com revisão independente de log, e registra a concentração
como fator de risco declarado. Na mesma linha, quando o controle roda em Excel a planilha é tratada
como o sistema, com dono declarado e versionamento testado, em vez de ficar fora do escopo de TI por
não ser um ERP.
