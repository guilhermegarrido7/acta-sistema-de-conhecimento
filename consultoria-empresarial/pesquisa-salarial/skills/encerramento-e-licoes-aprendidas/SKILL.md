---
name: encerramento-e-licoes-aprendidas
description: Encerre a pesquisa salarial e converta o engajamento em benchmark. Acionar ao entregar o pacote de encerramento, ao decidir o destino do dado de participante, ao escrever o caso, ou ao atualizar o estudo de benchmarking.
---

# Encerramento e lições aprendidas

Etapa 13. O projeto termina quando o cliente consegue usar o que recebeu sem a
firma, quando o dado de terceiro está guardado ou descartado conforme o que foi
prometido, e quando o método que o projeto produziu está disponível para o
próximo. Nenhuma das três acontece sozinha.

Carregue `metodo-pesquisa-salarial` antes desta skill, e `acta-way:checkpoint`, porque o encerramento é o último gatilho de gravação do
engajamento.

## 1. Pacote de encerramento

Entregue ao cliente, num único envio, com índice:

| Item | Por que entra |
| --- | --- |
| Deck final, em apresentação e em leitura | O entregável de decisão |
| Excel de consulta | O cliente vai recalcular ao longo do ano, e vai fazer isso com ou sem a firma |
| Arquivo do painel e o guia de navegação | Sem o arquivo, o painel deixa de existir quando o acesso expira |
| Gravação do treinamento e o material de uma página | A equipe do cliente muda |
| Nota metodológica e livro de cálculos do projeto | É o que permite reconstruir qualquer número anos depois |
| Release congelado, com hash e contagem de linhas | Rastreabilidade |
| Termo de encerramento | Fecha o escopo por escrito |

O termo de encerramento lista o que foi entregue, declara o que ficou fora de
escopo e registra as demandas adicionais surgidas no caminho. Essa última lista é
a base da próxima proposta, e ela se perde se não for escrita na semana do
encerramento.

## 2. Destino do dado de participante

O painel confiou dado sensível à firma sob promessa específica, escrita na
carta-convite e no termo de sigilo. Cumprir essa promessa é parte do
encerramento, não do arquivo morto.

Decidir e executar, com registro:

- **O que fica.** Bases codificadas (`EMP-##`), release congelado, livro de
  cálculos, log de auditoria. É o que sustenta auditoria posterior e não
  identifica ninguém.
- **O que sai do ambiente de trabalho.** A tabela que liga código a nome real, os
  arquivos brutos enviados pelos participantes e qualquer planilha que tenha
  chegado com nome, matrícula ou dado pessoal. Vão para o repositório restrito ou
  são eliminados, conforme o prazo prometido.
- **O que é eliminado.** Cópias de trabalho, anexos em caixa de e-mail, arquivos
  em pasta local de consultor. É a via de vazamento mais comum e a menos
  controlada.

Registrar em `B10_LOG_AUDITORIA` o que foi retido, o que foi eliminado, em que
data e por quem. Se a carta-convite prometeu prazo de retenção, ele manda.

## 3. Retrospectiva com o time

Uma hora, com quem executou, antes que a memória se dissolva. Cinco perguntas,
respondidas com fato e não com impressão:

1. Onde o esforço real divergiu do esforço estimado, e por quanto. O matching
   costuma ser o item de maior divergência, e é o que mais afeta o preço da
   próxima proposta.
2. Qual particularidade estrutural do cliente mudou uma decisão técnica, e em que
   etapa ela foi descoberta. Descoberta tarde é o achado mais valioso da
   retrospectiva.
3. Qual recorte ficou abaixo do mínimo amostral, e a regra de consolidação
   acordada na Etapa 1 funcionou.
4. Quantos participantes foram convidados, quantos responderam, e o que
   diferenciou quem respondeu. Calibra o dimensionamento do próximo painel.
5. O que quase deu errado e não deu. Quase-erro é mais informativo que erro,
   porque ainda não gerou defesa.

## 4. Escrever o caso e o benchmark

Dois arquivos, com funções diferentes, e a distinção entre eles é o que mantém o
plugin genérico.

**`casos/<cliente>.md`** é o ponteiro do engajamento como ele aconteceu: status,
onde o trabalho vivo está arquivado, o que caracterizou o projeto. Não replica
dado de cliente nem de participante. Existe para que alguém saiba onde procurar.

**`benchmarks/<cliente>.md`** é o que dali é reutilizável em outro cliente. Três
seções, nesta ordem: o que este caso ensinou ao método, o que não generaliza
porque é do cliente e não do método, e onde o material original está arquivado.
Valor de resultado (salário, gap, comparatio) nunca entra: dado de projeto
concluído não é referência de mercado para projeto novo.

A lição transversal, a que serviria a um projeto de outra prática, vai para
`APRENDIZADOS.md` do engajamento, conforme `acta-way`.

## 5. O que sobe para o método, e quando

Uma decisão nova só vira regra do plugin quando aparecer pela segunda vez, em um
projeto diferente, pelo mesmo raciocínio. Antes disso, ela vive no benchmark
daquele caso. Esse critério é o que impede o plugin de virar uma coleção de
exceções de um único cliente disfarçada de método geral.

Quando a decisão passa no critério, edite o lugar certo e apenas ele:

| Tipo de decisão | Onde ela mora |
| --- | --- |
| Fórmula ou regra de cálculo nova | `references/03-livro-de-calculos.md`, com ID próprio |
| Campo ou domínio novo na coleta | `references/02-dicionario-de-dados.md` |
| Padrão de problema de matching | Seção 3 de `matching-cargos` |
| Etapa do ciclo de vida que mudou de forma | A skill daquela etapa |
| Regra que vale para todo projeto | `metodo-pesquisa-salarial`, e em nenhum outro lugar |

Fórmula tem um lugar só. Duplicar em duas skills significa corrigir em dois, e
uma delas vai ficar para trás.

## 6. Artefato e onde ele é gravado

Quatro saídas:

- Pacote de encerramento enviado ao cliente, com índice e comprovante de envio,
  em `~~entregaveis`.
- Termo de encerramento assinado, em `~~controle`.
- `casos/<cliente>.md` e `benchmarks/<cliente>.md` no repositório de
  conhecimento, sem nome de participante e sem valor de resultado.
- Checkpoint final e `APRENDIZADOS.md` atualizados, em `~~controle`.

## 7. Gate de qualidade

A etapa está concluída quando todas estas afirmações forem verdadeiras:

- O cliente recebeu o pacote completo, incluindo o arquivo do painel e a gravação
  do treinamento, e consegue reconstruir qualquer número sem a firma.
- O termo de encerramento está assinado, com as demandas adicionais listadas.
- O destino de cada categoria de dado de participante foi decidido, executado e
  registrado no log, dentro do que a carta-convite prometeu.
- A retrospectiva aconteceu, com as cinco perguntas respondidas por fato.
- `casos/` e `benchmarks/` estão escritos, sem nome de participante, sem dado
  pessoal e sem valor de resultado.
- Toda decisão que passou no critério da segunda ocorrência foi levada ao arquivo
  correto do método, e nenhuma foi duplicada em dois lugares.
- O checkpoint final foi gravado e `APRENDIZADOS.md` atualizado.

## 8. Erros a evitar

- Encerrar sem o arquivo do painel nas mãos do cliente. O entregável interativo
  deixa de existir quando o acesso expira, e a firma é cobrada por isso um ano
  depois.
- Escrever o benchmark com dado de resultado. Isso transforma material de método
  em referência de mercado falsa, e alguém vai usá-la.
- Subir para o plugin uma decisão que apareceu uma vez só, porque ela pareceu
  elegante.
- Deixar a retrospectiva para quando houver tempo. Ela não acontece, e a próxima
  proposta é precificada com a mesma estimativa errada.
- Manter a tabela de código para nome no mesmo lugar das bases depois do
  encerramento.
- Fechar o projeto sem listar as demandas fora de escopo que surgiram. Elas são a
  conversa comercial seguinte e desaparecem em duas semanas.
