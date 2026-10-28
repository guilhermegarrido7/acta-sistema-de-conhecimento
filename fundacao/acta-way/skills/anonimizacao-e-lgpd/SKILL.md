---
name: anonimizacao-e-lgpd
description: Remova identificação de cliente e de pessoa do material que circula na firma ou vai para o repositório, com a régua da LGPD para dado pessoal e a rota de incidente. Acionar ao transformar caso real em exemplo, ao receber base com CPF ou nome de funcionário, ao publicar skill, ao divulgar número agregado sobre pessoas, ou ao tratar incidente com dado pessoal.
---

# Anonimização e LGPD

## Papel desta skill

Duas obrigações distintas que se resolvem no mesmo ato e por isso vivem juntas aqui:

- **Sigilo de cliente.** O nome de quem nos contrata não circula fora do projeto. Nem em skill, nem
  em exemplo, nem em conversa com outro cliente, nem em nome de arquivo de método.
- **Dado pessoal sob a LGPD.** Projeto de consultoria recebe base com pessoa identificada quase
  sempre, e a firma responde pelo que faz com ela.

A regra que governa tudo abaixo é uma: **caso real vira exemplo anonimizado**. O aprendizado é o que
tem valor reutilizável. A identidade do cliente e das pessoas não tem, e carrega risco.

## 1. A regra do caso que vira exemplo

O que se aprende num projeto vale no próximo. O que identifica o projeto não vale em lugar nenhum
fora dele.

| Registro | Onde vive | Nome do cliente |
|---|---|---|
| Método, skill, template, fórmula, critério | Repositório do plugin | **Nunca** |
| O projeto como aconteceu | `casos/<caso>.md` | **Não**: setor e porte no lugar do nome |
| O que dali se generaliza | `benchmarks/<caso>.md` | **Não**: o conteúdo é generalizável |
| Estado e decisões do projeto corrente | `~~controle/` do projeto | Sim, é a pasta do cliente |

Ao promover uma lição de `APRENDIZADOS.md` para o repositório (ver `checkpoint`, seção 9), a
anonimização é parte da promoção, não um passo posterior. O que sobe é o mecanismo; o que fica é a
identidade.

**Como anonimizar um caso sem esvaziá-lo.** Substitua o nome pelo que importa analiticamente:

- Nome do cliente pelo **setor e porte**: "distribuidora regional de material de construção, cerca
  de 400 colaboradores".
- Nome de pessoa pelo **papel**: *o sócio responsável*, *o controller do cliente*, *o auditor
  responsável*, *o revisor*.
- Cifra identificadora pela **ordem de grandeza**, quando o valor exato identifica: "receita na casa
  da centena de milhões" em vez do faturamento redondo que localiza a empresa no ranking do setor.
- Local por **região**, quando a cidade mais o setor bastam para identificar.

**O que anonimização não autoriza.** Trocar o nome não libera divulgar o resultado. Conclusão de um
projeto continua sendo do cliente que a pagou, anonimizada ou não. A anonimização protege a
identidade; o sigilo do conteúdo é contratual e independente dela.

### Reidentificação por contexto

Nome retirado não é anonimização se o resto identifica. Um exemplo que diz o setor, a região, o porte
e o ano permite que qualquer pessoa do mercado nomeie a empresa em duas tentativas.

A checagem é uma pergunta, feita antes de publicar: **alguém que conhece o setor identificaria a
empresa a partir deste texto?** Se sim, retire o atributo mais específico e repita a pergunta.
Atributos que identificam sozinhos, mesmo sem nome: única empresa do país com determinada licença,
cliente âncora nomeado, métrica única no mercado local, evento noticiado com data, foto com placa.

## 2. O validador: como a regra pega

A regra de nome de cliente não é intenção, é verificação automática. O repositório tem
`scripts/validar-skills.py`, que **barra nome de cliente e de pessoa em todo arquivo `.md` do
repositório**, inclusive `references/`, e não só em `SKILL.md`, `projeto.md` e `fundamentos.md`. O
que o `.gitignore` exclui do versionamento fica de fora. A varredura é total porque uma lista de
caminhos permitidos envelhece, e conteúdo publicado sem checagem é justamente o buraco que o script
existe para fechar.

```bash
python scripts/validar-skills.py
```

Achou um nome, é **erro**, não aviso, e o retorno do script é diferente de zero.

### A lista de nomes fica fora do versionamento, de propósito

O script lê a relação de nomes proibidos de `clientes.local.txt`, na raiz, um nome por linha, **fora
do controle de versão**.

Isso não é descuido de configuração. Versionar essa lista seria publicar a carteira da firma, que é
exatamente o vazamento que o script existe para impedir. O arquivo que define o que não pode ser
publicado não pode ele mesmo ser publicado.

Consequências que se conhecem e se aceitam:

- **Cada máquina mantém a sua.** Ao entrar um cliente novo, quem soube acrescenta o nome na própria
  lista e avisa a equipe para fazer o mesmo.
- **Sem o arquivo, o script roda e avisa** que a checagem de nome não foi executada, em vez de passar
  em silêncio dando a impressão de que está tudo limpo. Ler esse aviso como aprovação é o modo de
  falha a evitar.
- **A verificação vale o que a lista tem.** O script é uma rede, não uma garantia. A revisão humana
  antes de publicar continua sendo obrigatória.

### O prefixo `=` e a colisão com palavra comum

Por padrão o casamento ignora maiúsculas, o que é o certo: o nome pode aparecer em caixa alta no
título e em minúscula na prosa.

Quando o nome de um cliente **colide com palavra comum do português**, ignorar maiúsculas
transformaria a lista num gerador de falso alarme, e uma verificação que sempre reclama é uma
verificação que todo mundo ignora. Daí o prefixo `=`, que força comparação sensível a maiúsculas.

Uma entrada prefixada com `=` pega a ocorrência capitalizada, que é como o nome próprio aparece, e
deixa passar a palavra comum em minúscula no meio da frase. O casamento é sempre por token inteiro,
com fronteira de palavra, então um nome curto não casa dentro de outra palavra.

**Use `=` só quando a colisão for real.** Prefixar por hábito reduz a proteção pela metade, porque o
nome escrito em caixa baixa no corpo do texto passa.

## 3. Dado pessoal num projeto de consultoria

Dado pessoal, sob a LGPD, é toda informação relacionada a **pessoa natural identificada ou
identificável**. O corte não é "tem nome", é "dá para chegar na pessoa".

O que aparece em projeto da ACTA, por tipo de trabalho:

| Trabalho | Dado pessoal que chega | Por que é sensível na prática |
|---|---|---|
| Pesquisa salarial | Remuneração individual, cargo, data de admissão, nome ou matrícula | Ver seção 4. É o caso mais delicado da casa |
| Auditoria de folha | Folha completa, CPF, dependente, desconto, afastamento | Afastamento e plano de saúde tocam dado de saúde |
| Auditoria e controles | Aprovador, executante, log de acesso, matrícula em trilha de aprovação | Identifica quem errou, não só onde o controle falhou |
| Cargos e carreira | Avaliação de desempenho, potencial, histórico de promoção | Juízo de valor sobre pessoa identificada |
| M&A e valuation | Contrato de trabalho de executivo, quadro societário, remuneração da diretoria | Chega no data room sem pedido |
| Compras e integridade | Sócio de fornecedor, parte relacionada, denúncia | Denúncia pode conter dado de terceiro não envolvido |

**Dado pessoal sensível** tem regime mais estrito: origem racial ou étnica, convicção religiosa,
opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou
político, dado referente à saúde ou à vida sexual, e dado genético ou biométrico, quando vinculado a
uma pessoa natural (LGPD, art. 5º, II). Em folha de pagamento isso chega sem aviso, por rubrica de
plano de saúde, desconto sindical, laudo de afastamento e cota legal, e em base de ponto ou de
controle de acesso pelo cadastro biométrico, quando ele vem junto. **Rubrica de folha que revela
condição de saúde ou filiação sindical não entra em papel de trabalho nominal.**

**A firma é operadora, não controladora, na maioria dos projetos.** O cliente decide a finalidade do
tratamento e nos contrata para executá-lo. Isso não dilui a responsabilidade: a operadora responde
solidariamente quando descumpre a instrução ou a lei.

**A exceção é a pesquisa salarial da própria casa.** A LGPD chama de controlador quem toma as
decisões referentes ao tratamento, e de operador quem trata em nome do controlador (art. 5º, VI e
VII). Quando a ACTA conduz pesquisa de remuneração com painel de participantes e decide ela mesma a
finalidade e os meios (o que o instrumento pede, como a base é tratada, o que se publica, por quanto
tempo se guarda), ela pode ser controladora dos dados do painel, e não só operadora. O enquadramento
de cada pesquisa se decide antes da coleta, com a assessoria jurídica, e se registra. Como
controladora, as obrigações de controlador passam a ser da casa, inclusive a comunicação de
incidente e o encarregado da seção 7.

Consequências operacionais, nos dois papéis:

- **Finalidade e minimização.** Peça o mínimo necessário para a análise. Base completa "para o caso
  de precisar" é exposição sem contrapartida, e dado que não existe na nossa pasta não vaza da nossa
  pasta.
- **Prazo.** Base de cliente não fica na pasta para sempre. No encerramento, a base bruta com dado
  pessoal é devolvida ou eliminada, e o que fica é o resultado agregado.
- **Local.** `~~arquivos recebidos` é somente leitura, e a cópia de trabalho não viaja para máquina
  pessoal, pen drive ou serviço de nuvem fora do ambiente da casa.
- **Compartilhamento.** Base com dado pessoal não circula por e-mail nem por aplicativo de mensagem.

## 4. Anonimizar não é agregar

Esta é a distinção que mais se perde, e ela tem consequência jurídica.

**Agregar** é apresentar o dado em conjunto: média, mediana, quartil, total. O dado individual
continua existindo na base de origem.

**Anonimizar** é tornar a pessoa **não identificável por meio razoável**, de forma irreversível. Dado
anonimizado sai do alcance da LGPD; dado agregado sobre base identificada não sai, porque a base
identificada continua lá.

E agregação pode reidentificar sozinha. Os dois modos de falha:

- **Grupo pequeno.** A média de um grupo de um é o salário daquela pessoa. De dois, quem está no
  grupo deduz o do colega a partir do próprio. Daí a regra de mínimo de participantes e de
  observações por corte antes de publicar qualquer estatística de remuneração.
- **Diferenciação entre cortes.** Dois recortes que se sobrepõem em uma pessoa revelam o valor dela
  pela diferença, mesmo que cada um deles isolado respeite o mínimo. Publicar "diretoria" e
  "diretoria sem o diretor comercial" entrega o salário do diretor comercial.

**Pseudonimização não é anonimização.** Trocar o nome por uma matrícula, ou por um código de
participante, mantém o dado pessoal: existe uma tabela que reverte, e por isso o dado continua sob a
LGPD. Pseudonimizar é uma boa medida de segurança e um passo obrigatório no tratamento, e não
dispensa nenhuma das obrigações.

**O relatório individual de participante de pesquisa salarial** é o ponto de maior atenção: ele
mostra a posição de um participante contra o mercado. Ele só vai para aquele participante, e o corte
mínimo de observações se aplica a cada célula que ele mostra, não só ao consolidado.

## 5. Quando o cliente manda base com CPF ou nome de funcionário

Acontece toda vez. O roteiro:

1. **Não devolva o arquivo nem peça reenvio antes de olhar.** Muitas vezes a base é necessária como
   está, e um segundo envio só multiplica cópias.
2. **Avalie se a identificação é necessária para a análise.** Reconciliação com a folha, teste de
   duplicidade de cadastro e trilha de aprovação precisam de identificador. Estatística de
   remuneração e diagnóstico de processo não precisam.
3. **Se não é necessária, corte na entrada.** Derrube as colunas de identificação na primeira leitura
   e trabalhe da base reduzida. Não é "depois eu removo": o arquivo com CPF já está na pasta e já é
   exposição.
4. **Se é necessária, pseudonimize e isole.** Uma tabela de correspondência separada, com acesso
   restrito a quem precisa, e a base de trabalho com o código. A tabela não entra no entregável, não
   entra no anexo e não entra no papel de trabalho que circula.
5. **Avise o cliente quando ele mandou mais do que foi pedido.** Não é reclamação, é parte do
   serviço: ele enviou dado sensível por canal que talvez não devesse, e quem percebe tem de dizer.
   Registre o aviso.
6. **Registre a decisão** na entrada de sessão (ver `checkpoint`): o que veio, o que foi cortado, o
   que foi pseudonimizado, onde ficou a correspondência.
7. **No encerramento, elimine ou devolva.** Ver seção 3.

**Nunca cole base com dado pessoal numa conversa com um assistente.** Trabalhe por caminho de
arquivo e por agregado. Se um trecho precisa ser mostrado, mostre o trecho já sem identificação.

## 6. Checklist antes de publicar ou enviar

1. Nenhum nome de cliente no texto. `python scripts/validar-skills.py` sem erro.
2. Nenhum nome de pessoa. Papel no lugar do nome, em todo lugar.
3. Passou na pergunta de reidentificação por contexto (seção 1).
4. Nenhum identificador direto em anexo, aba oculta, propriedade de arquivo ou nome de arquivo.
5. Todo corte estatístico respeita o mínimo de observações, e os cortes publicados não se diferenciam
   até a pessoa (seção 4).
6. A tabela de correspondência, se existe, ficou fora do que circula.
7. O aviso do validador sobre a lista ausente não foi lido como aprovação.

## 7. Incidente de segurança com dado pessoal

Incidente é qualquer evento adverso confirmado que viole a confidencialidade, a integridade, a
disponibilidade ou a autenticidade de dado pessoal (Resolução CD/ANPD nº 15/2024). Na casa, os
casos típicos são base enviada ao destinatário errado, pasta compartilhada aberta por engano,
equipamento com cópia de trabalho perdido e planilha com CPF anexada a mensagem externa. A rota,
pela mesma resolução:

1. **Contenha e registre na hora.** Data do conhecimento, circunstâncias, natureza e categoria do
   dado, número de titulares, avaliação de risco e medidas tomadas. O controlador guarda o registro
   por no mínimo cinco anos, inclusive do incidente não comunicado, com o motivo da não comunicação
   (art. 10).
2. **Avalie se há risco ou dano relevante.** A comunicação é obrigatória quando o incidente pode
   afetar significativamente interesses e direitos fundamentais dos titulares e envolve ao menos um
   destes critérios: dado sensível; dado de criança, adolescente ou idoso; dado financeiro; dado de
   autenticação em sistema; dado protegido por sigilo legal, judicial ou profissional; ou dado em
   larga escala (arts. 4º e 5º). Base de folha e de pesquisa salarial costuma reunir mais de um.
3. **Quando a casa é operadora**, quem comunica à ANPD e aos titulares é o cliente controlador. O
   dever da casa é avisá-lo de imediato, com o que já se sabe: o prazo dele corre de quando soube
   que o incidente afetou dado pessoal (art. 6º, §1º), e cada dia de demora da casa consome o prazo
   do cliente.
4. **Quando a casa é controladora** (seção 3), a comunicação é dela: à ANPD, pelo formulário
   eletrônico da autoridade e por meio do encarregado ou de representante constituído, em três dias
   úteis contados do conhecimento, com complemento possível em vinte dias úteis (art. 6º); e aos
   titulares, em linguagem simples e de forma direta e individual quando possível, também em três
   dias úteis (art. 9º). Agente de pequeno porte tem esses prazos em dobro (art. 6º, §8º, e art. 9º,
   §6º).
5. **A decisão não é de quem achou o incidente.** Avaliação de risco e decisão de comunicar ficam
   com o sócio responsável e a assessoria jurídica, registradas com data na entrada de sessão (ver
   `checkpoint`).

**O encarregado.** A Resolução CD/ANPD nº 18, de 16/07/2024, regula a indicação do encarregado, a
divulgação pública da identidade e do contato dele, os deveres dos agentes de tratamento para com
ele e as situações de conflito de interesse (ANPD). Para a casa, duas consequências. No projeto em
que é operadora, o interlocutor de incidente e de pedido de titular é o encarregado do cliente,
identificado na abertura do projeto. No tratamento em que é controladora, a casa precisa de
encarregado próprio indicado e com contato divulgado, salvo hipótese de dispensa por porte (a
confirmar o enquadramento da casa na Resolução CD/ANPD nº 2/2022).

## Próximo passo

`convencoes-de-entregavel` para nomear e arquivar o material já anonimizado. `checkpoint` para
registrar a decisão de tratamento, que é o registro que sustenta a resposta caso alguém pergunte
depois o que foi feito com a base.
