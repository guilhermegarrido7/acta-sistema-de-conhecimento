---
name: relatorios-individuais-participantes
description: Produza e distribua o relatório de contrapartida de cada empresa participante. Acionar ao estruturar o relatório individual, ao aplicar as regras de supressão específicas do artefato, ao rodar o piloto antes da distribuição, ou ao gerar o lote final.
---

# Relatórios individuais dos participantes

Etapa 12. Cada empresa que forneceu dados recebe um relatório com o próprio
posicionamento contra o agregado do painel. É a contrapartida prometida na
carta-convite e o único artefato do projeto que leva dado de painel para fora do
cliente contratante, o que faz dele o ponto de maior risco de confidencialidade do
projeto inteiro.

Carregue `metodo-pesquisa-salarial` antes desta skill. Os mínimos de agregação da
seção 4 do método valem aqui com um agravamento, descrito na seção 2: o
destinatário conhece o próprio dado, e isso muda a aritmética da anonimização.

## 1. O que o relatório é e o que ele não é

O participante recebe: a posição dele contra as estatísticas do painel, por cargo
e por nível funcional, e a leitura daquilo. Não recebe, em nenhuma hipótese, dado
de outra participante, nem lista nominal de quem respondeu associada a valores,
nem qualquer característica descritiva que permita ligar um pseudônimo a uma
empresa reconhecível do setor.

O artefato também cumpre função comercial, porque coloca a qualidade técnica da
firma na mesa de doze ou mais instituições que são potenciais clientes. O que faz
isso funcionar é o achado específico daquela empresa, escrito para ela. Relatório
genérico com o logotipo do destinatário na capa produz o efeito contrário.

## 2. A regra de supressão que é própria deste artefato

O destinatário sabe quanto ele mesmo paga. Ao ler uma estatística do painel, ele
pode retirar a própria contribuição e inferir o resto. Daí a regra:

> Os mínimos de agregação valem descontando o destinatário. Um dado só é
> publicado no relatório individual se atender o mínimo depois de excluir as
> observações da empresa que vai receber o arquivo.

Consequências práticas, que precisam estar na planilha de geração:

| Situação | O que o destinatário recebe |
| --- | --- |
| Cargo com o mínimo de empresas atendido sem contar o destinatário | Estatística completa conforme a regra geral |
| Cargo que só atinge o mínimo contando o destinatário | Marca de amostra insuficiente, sem valor |
| Cargo em que o destinatário concentra parcela relevante das observações | Supressão, ou agregação para o nível de família |
| Painel do recorte com pouquíssimas respondentes | Reportar apenas no nível de família ou do painel total |

Duas proibições adicionais deste artefato: nada de mínimo e máximo quando a
supressão depende deles para funcionar, porque extremos identificam; e nada de
pseudônimo com característica descrita ao lado (porte, região, natureza), porque a
combinação reidentifica mesmo sem nome.

A supressão é aplicada na geração do arquivo, não na camada de apresentação. O
dado suprimido não pode existir no código-fonte do HTML nem em aba oculta de
planilha. Filtro e visibilidade não protegem confidencialidade contra quem abre o
arquivo.

## 3. Estrutura do relatório

De 8 a 12 páginas, na ordem abaixo. A estrutura de referência está em
`references/04-mbb-e-ia.md`, A.11.

1. Carta de agradecimento assinada pelo sócio responsável, endereçada ao
   interlocutor da empresa.
2. Como ler este relatório: o que é o painel, o que são os quartis, o que
   significa amostra insuficiente e qual é a data-base.
3. Posicionamento da empresa contra a mediana do painel do recorte dela, por
   nível funcional.
4. Posicionamento por cargo, apenas nos cargos que passam a regra da seção 2.
5. De três a cinco achados específicos daquela empresa, escritos um a um.
6. Prevalência de benefícios no painel contra o pacote da empresa.
7. Uma página de o que fazer com esta informação, com recomendação útil e
   genérica, sem virar diagnóstico não contratado.
8. Página institucional discreta da firma, sem tom de venda.
9. Nota de método resumida, com composição do painel, regra de supressão e
   data-base.

Os achados da página 5 são o coração do artefato. Eles podem ser redigidos com
apoio de IA a partir dos números já calculados, com duas condições: os números
vêm da base congelada e nunca do modelo, e o texto passa por leitura de consultor
antes de sair. Nenhum dado identificado de participante entra em ferramenta de
IA; trabalhe sempre pelo código da empresa.

## 4. Formato

HTML autocontido por participante, arquivo único, dados embutidos, sem
dependência externa, acompanhado de um PDF para leitura e arquivo. O motivo é
estrutural: o arquivo de cada empresa contém apenas os dados daquela empresa, o
que torna impossível vazar dado de terceiro, e abre em qualquer navegador sem
licença nem acesso a plataforma. Painel compartilhado com segurança em nível de
linha resolveria o mesmo problema com custo e risco maiores.

## 5. Produção e distribuição

| # | Passo | Cuidado |
| --- | --- | --- |
| 1 | Congelar a lista de destinatários e o interlocutor de cada empresa | Um destinatário errado é incidente de confidencialidade, não erro de envio |
| 2 | Gerar o relatório-piloto de uma empresa | Antes de produzir o lote inteiro |
| 3 | Conferir o piloto contra o release e contra a regra da seção 2 | Revisão por consultor que não gerou o arquivo |
| 4 | Ajustar o gerador e só então rodar o lote | Correção depois do envio custa a confiança do painel |
| 5 | Conferência cruzada de amostra do lote | Abrir ao menos três arquivos e checar se cada um traz só o próprio dado |
| 6 | Enviar individualmente, com carta assinada | Nunca em cópia aberta entre participantes |
| 7 | Registrar data de envio e destinatário | Controle de contrapartida cumprida |

O passo 6 tem um detalhe que já causou problema em projeto de painel: envio com
destinatários em cópia revela quem participou da pesquisa, o que é informação
confidencial mesmo sem nenhum valor junto. Um envio por empresa, sempre.

## 6. Artefato e onde ele é gravado

Um HTML e um PDF por empresa participante, nomeados pelo código da empresa e
nunca pelo nome (`AAAAMMDD_RelIndividual_EMP-NN_Rn.n_vNN.html`), gravados em
`~~entregaveis`, em subpasta de acesso restrito. A tabela que liga código a nome
real continua em arquivo separado, fora dessa pasta.

Registrar em `B10_LOG_AUDITORIA`: release consumido, data do piloto e quem o
conferiu, data de geração do lote, destinatários e data de envio.

## 7. Gate de qualidade

A etapa está concluída quando todas estas afirmações forem verdadeiras:

- O piloto foi produzido, conferido por um segundo consultor e aprovado antes do
  lote.
- Em todo arquivo, a regra de mínimo descontando o destinatário foi aplicada, e o
  dado suprimido não existe no código-fonte.
- Nenhum arquivo contém dado, nome ou característica descritiva de outra
  participante.
- Os valores conferem com o release congelado numa amostra verificada por caminho
  independente.
- Cada relatório traz de três a cinco achados escritos para aquela empresa, e
  nenhum deles é texto genérico reaproveitado.
- Todo arquivo traz a marca do release, a data-base e a nota de método resumida.
- O envio foi individual, com carta assinada, e está registrado no log.

## 8. Erros a evitar

- Aplicar o mínimo de agregação sem descontar o destinatário. É o erro específico
  deste artefato e ele passa despercebido porque a estatística está correta para
  qualquer outro leitor.
- Usar pseudônimo com característica ao lado, do tipo empresa de determinado porte
  e região. A combinação identifica.
- Publicar mínimo e máximo por hábito. Extremo é o valor mais fácil de atribuir a
  uma empresa concreta.
- Gerar o lote antes do piloto. Corrigir doze arquivos já enviados custa mais que
  o dobro do tempo, e custa a confiança que sustenta o painel do ano seguinte.
- Enviar com participantes em cópia.
- Deixar a IA escrever número. Ela escreve o texto do achado a partir do número
  calculado, nunca o número.
- Tratar o relatório individual como sobra de projeto, produzido na semana do
  encerramento. Ele é a contrapartida que viabilizou a coleta e é o material que
  mais circula entre potenciais clientes.
