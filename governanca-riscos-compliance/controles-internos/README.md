# Controles Internos

Desenho e teste de controles internos: matriz de riscos e controles, walkthrough, teste de desenho e de efetividade, e plano de remediação.

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`) — é onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Carregue também `acta-metodo-auditoria`.** Toda skill deste plugin manda carregá-lo antes: as regras invioláveis, a doutrina do número exato e a regra R8 vivem lá, e as skills `programa-de-testes`, `papel-de-trabalho` e `redacao-de-achados` são referenciadas o tempo todo e não são repetidas aqui.

## O que faz

Conduz um trabalho de controles internos de ponta a ponta: inventaria o ambiente de controle da
Companhia numa matriz de riscos e controles ancorada no COSO 2013, confirma por walkthrough que o
controle escrito é o controle praticado, separa a avaliação de desenho da de efetividade
operacional, testa efetividade com amostra dimensionada, trata a dependência que os controles gerais
de TI criam sobre tudo o que se apoia em sistema, e classifica cada falha numa escala de severidade
que define a quem comunicar. Escrito para o mid-market brasileiro, onde raramente há SOX completo:
cada skill declara o que é exigência de companhia registrada na SEC e o que é boa prática aplicável a
empresa fechada.

## Skills

Uma skill por etapa do ciclo de vida do trabalho.

| Skill | Etapa | Descrição |
|---|---|---|
| `matriz-riscos-controles` | Inventário | RACM com 25 colunas, ancoragem em componentes e princípios do COSO 2013, código de controle, atributos testáveis, controle chave e as quatro leituras de cobertura. |
| `walkthrough-e-narrativa` | Entendimento | Percurso da transação do nascimento ao razão, as quatro perguntas de cada passo, a narrativa do processo como ele é e a matriz de pontos de controle. |
| `desenho-vs-efetividade` | Avaliação | As duas avaliações e por que não se misturam, a ordem que impede testar efetividade de controle mal desenhado, a crítica da coluna única e o controle não testado como ineficaz por default. |
| `teste-de-controle-e-amostragem` | Execução | Hierarquia de força probatória das quatro técnicas, roteiro de teste, dimensionamento de controle manual e automatizado, tratamento de exceção e evidência reproduzível. |
| `itgc` | Dependência de TI | Os quatro domínios de controles gerais de TI, o teste de relatório gerado por sistema (IPE), o padrão de codificação por domínio e o efeito de ITGC ineficaz sobre o que depende dele. |
| `deficiencias-e-severidade` | Classificação | Escala de deficiência simples, significativa e fraqueza material; agregação por asserção e por causa comum; deficiência versus erro; e o quadro de comunicação por nível. |

## Fluxo típico

1. **`matriz-riscos-controles`** — monta ou critica o RACM, amarra controle a risco e a asserção, e
   produz as leituras de cobertura. Quando o cliente não tem matriz, este é o entregável de maior
   valor percebido.
2. **`walkthrough-e-narrativa`** — percorre a transação e confirma se o controle descrito é o
   praticado. O que o percurso revela alimenta a avaliação de desenho e ajusta o RACM.
3. **`itgc`** — entra **antes** dos testes de controle de aplicação, porque é ele que autoriza (ou
   não) a amostra de 1 do controle automatizado e a confiança nos relatórios que vão virar população.
4. **`desenho-vs-efetividade`** — conclui sobre desenho, decide o que segue para teste e redireciona
   as horas dos controles que não existem.
5. **`teste-de-controle-e-amostragem`** — executa a efetividade dos controles que sobreviveram ao
   corte, com roteiro, amostra dimensionada e exceção investigada. O resultado volta para a coluna de
   efetividade do RACM.
6. **`deficiencias-e-severidade`** — converte falha em deficiência classificada, agrega o que se soma
   e define quem precisa saber de quê.
7. Daí em diante o trabalho segue no plugin de método: **`redacao-de-achados`** escreve o ponto,
   **`papel-de-trabalho`** guarda a evidência e **`relatorio-de-auditoria`** leva tudo ao deck.

A fronteira com `acta-metodo-auditoria` é explícita dentro de cada skill: a mecânica do entregável é
de lá, o método de controles internos é daqui, e nada é repetido nos dois lugares.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-consultoria`
ou `acta-metodo-auditoria`. Não repita aqui o que já está lá.
