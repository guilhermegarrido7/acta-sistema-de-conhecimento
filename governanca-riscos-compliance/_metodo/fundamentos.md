---
titulo: Fundamentos
---

## A ideia que sustenta o método

Auditoria interna é uma profissão de asseguração, e asseguração vive de uma promessa incômoda: outra
pessoa, com a mesma documentação, chegaria à mesma conclusão. Duas linhas sustentam essa promessa. A
primeira trata o controle interno como sistema que se descreve, se desenha e se avalia, e é de onde
vêm a separação entre desenho e operação, a noção de controle-chave e o formato da matriz que cruza
risco, controle, teste e resultado. A segunda trata da evidência: o que conta como prova, quanto dela
basta, e o que se pode afirmar quando ela falta.

O método da ACTA herda as duas linhas e concentra o esforço no trecho em que elas costumam se romper
na prática, que é o caminho do número. Um teste vira papel de trabalho, o papel vira achado, o
achado vira slide, e em cada passagem o valor tem chance de mudar sem que ninguém perceba. A doutrina
do número exato nasceu de onze retratações com a mesma causa, agregar antes de validar o universo:
linha de total somada como transação, parcela contada como duplicidade, homônimo pagando duas vezes,
percentual arredondado que virou conclusão sobre uma regra que existia e fechava ao centavo. Daí a
ordem fixa de definir o universo, reconciliar contra um total que você não calculou, casar item a
item consumindo pool, e tentar refutar o próprio achado antes de escrevê-lo.

A razão de tanta disciplina está no destinatário. O relatório chega ao Conselho, e ali o crédito é
todo ou nada: um número retratado contamina os outros vinte e sete que estavam certos. Por isso a
casa prefere entregar "não foi possível concluir, falta X" a entregar um número plausível, e por isso
cada número do slide tem uma aba de papel de trabalho que o reconstrói.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| Normas Globais de Auditoria Interna do IIA, Norma 14.6 | Documentação do trabalho que permita a um auditor informado e prudente repetir o teste e chegar ao mesmo resultado, com registro de quem executou e quem supervisionou | `aprendizado-e-historico` §5 e a capa do WP: preparado por, data, revisado por, período de escopo |
| COSO Internal Control, Integrated Framework (2013) | Controle interno como sistema de componentes e princípios, com a distinção entre existir e funcionar | `programa-de-testes`: as colunas de tipo de controle, a marcação de key control e o `Status do Controle (desenho)` |
| PCAOB AS 2201 | Auditoria de controle interno que separa eficácia de desenho de eficácia operacional, e trata walkthrough como procedimento de entendimento | Regra R6 do `metodo-auditoria` e as duas colunas de conclusão do `programa-de-testes` |
| ISO 31000 | Vocabulário de gestão de riscos: fonte de risco, evento, consequência e risco residual | `programa-de-testes` §6: os cinco conceitos que não se misturam, e a cadeia fator, evento, impacto, vulnerabilidade |
| ISA 500, evidência de auditoria | Suficiência e adequação da evidência, e o catálogo de procedimentos (inspeção, observação, indagação, recálculo, reperformance) | Regra R2, a taxonomia fechada de tipos de teste e a aba `Critérios` do papel de trabalho |
| ISA 530, amostragem em auditoria | Amostragem estatística e não estatística, risco de amostragem e projeção do desvio ao universo | `bases-e-conciliacao` §6 e a régua de dimensionamento por frequência do controle versus risco |
| Government Auditing Standards, Yellow Book | Os elementos do achado: critério, condição, causa e efeito | `redacao-de-achados` §5: a estrutura Condição, Risco, Recomendação, com severidade em campo próprio |
| Matriz de riscos e controles (RACM) | Artefato de mercado que amarra risco, controle, teste e conclusão numa linha | A matriz de testes com 26 colunas, a aba de riscos por código `<CódProcesso>.R<NN>` e a matriz enxuta do deck |
| Event sourcing e Norma 14.6 aplicados ao registro de sessão | Log imutável mais estado consolidado, herdado de `acta-way` | `aprendizado-e-historico`: `Sessoes/` append-only, `CHECKPOINT.md` consolidado, `APRENDIZADOS.md` para o que vale em outro cliente |

## Onde a ACTA se afasta do manual

A divergência estruturante é a regra R7, política não limita controle. A auditoria de conformidade
testa aderência ao normativo do cliente, e uma política pobre produz, por construção, um resultado
confortável. Aqui o controle testado é sempre o completo, tirado da melhor prática de mercado, e a
matriz separa em duas colunas o que a política diz e o que se verifica de fato. O resultado provável
quando a política é fraca é que o controle não exista, e isso é achado de desenho, não ausência de
critério. A contrapartida é declarada: política emitida depois do período auditado gera deficiência
de desenho atual, sem cobrança retroativa de aderência.

A segunda divergência é sobre vocabulário. O catálogo clássico de procedimentos mistura o gesto de
obter evidência com o tipo do teste, e a casa fechou a lista em cinco valores decididos pelo ponto em
que a conclusão se apoia. Walkthrough, indagação, observação, reperformance e amostragem saíram da
lista, viraram técnica ou atributo, e entrou `Inspeção física`, que cobre o que só existe porque
alguém olhou, mediu ou contou. No mesmo espírito, controle que não pôde ser testado recebe `Ineficaz`
por padrão, com a razão classificada em três situações, porque "Não testado" deixa o Conselho sem
distinguir ausência de controle de ausência de evidência. E onde a norma de amostragem oferece
projeção estatística, o método manda contar o universo inteiro sempre que ele for contável, e proíbe
"cerca de" para aquilo que dá para fechar. Na redação do ponto, causa e efeito saem como campos
autônomos: a causa vira fator de risco no registro, o efeito vira o campo Risco escrito em termos de
negócio, e a gravidade fica na Severidade, nunca no adjetivo.
