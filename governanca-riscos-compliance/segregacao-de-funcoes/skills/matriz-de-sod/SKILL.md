---
name: matriz-de-sod
description: Construa a matriz de segregação de funções função contra função e transforme cada célula em conflito num teste executável sobre a base de usuários e perfis. Acionar ao montar ou revisar matriz de SoD, ao distinguir conflito no papel de conflito efetivo no sistema, ao converter a matriz em consulta sobre a base, ou ao classificar a severidade de um par conflitante.
---

# A matriz de SoD: função contra função

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui e não são repetidas.

**Fronteira.** `acta-controles-internos:itgc` cobre os quatro domínios de ITGC com COBIT, e a tabela
de pontos de controle de acesso do §2 de lá continua valendo: este plugin aprofunda a camada de
acesso e segregação e não reescreve o ITGC.

## 1. A unidade da matriz é a função, não o cargo e não a pessoa

Matriz montada por cargo envelhece a cada reorganização e não se testa: cargo não existe dentro do
sistema. Matriz montada por pessoa é lista de exceções, não é matriz. A unidade é a **função**, um
verbo sobre um objeto: cadastrar fornecedor, aprovar requisição, emitir pedido, liberar pagamento,
lançar no razão, conciliar conta, parametrizar regra.

Entre a função e o usuário existem quatro camadas, e confundi-las é o erro que produz matriz
inauditável:

| Camada | O que é | Onde se lê |
|---|---|---|
| **Função** | o verbo sobre o objeto, independente de sistema | o fluxo do processo, a narrativa do walkthrough |
| **Transação** | o objeto do sistema que executa a função | o menu, a tela, o código de transação, o endpoint |
| **Perfil** | o agrupamento de transações que se atribui a alguém | o catálogo de perfis do ERP |
| **Usuário** | a conta que recebe um ou mais perfis | a base de usuários por sistema |

A matriz se **desenha** na camada de função e se **testa** na camada de usuário. A tradução entre
uma e outra passa obrigatoriamente por transação e perfil, e é ali que o trabalho realmente acontece.
Pular a tradução produz a matriz que todo cliente já tem na gaveta: bonita, genérica e nunca testada.

## 2. A forma: triangular, com célula preenchida só onde há conflito

Funções nas linhas e as mesmas funções nas colunas, na mesma ordem. A diagonal é vazia por
construção (uma função não conflita consigo mesma) e a matriz é simétrica, então **preencha só o
triângulo superior**: matriz completa duplica o trabalho de manutenção e produz divergência entre as
duas metades na primeira revisão.

Cada célula preenchida carrega quatro coisas, e nenhuma é dispensável:

1. **O código do conflito**, estável entre entidades e entre ciclos, no padrão `SOD.<NN>`.
2. **O dano concreto**, escrito como o que a pessoa consegue fazer sozinha, não como princípio
   violado. "Cadastra o fornecedor e libera o pagamento a ele" é dano. "Fere a segregação entre
   custódia e registro" é rótulo.
3. **A severidade**, em três níveis, e a régua está no §5.
4. **O escopo em que o conflito vale**, que é o que separa achado de falso positivo (§4).

Célula sem dano escrito é célula que ninguém vai defender na reunião de fechamento. Quando o gestor
perguntar por que aquilo é conflito, a resposta tem de caber em uma frase e descrever uma sequência
de atos.

## 3. Conflito no papel e conflito efetivo

Dois objetos distintos, com testes distintos e achados distintos. Tratá-los como um só é o erro mais
caro da disciplina.

**Conflito no papel** é a acumulação de funções incompatíveis na **descrição do cargo, no fluxo ou na
matriz RACI** da Companhia. Existe antes de qualquer sistema. Detecta-se lendo o desenho do processo
e a descrição de cargo, e o achado se escreve contra o desenho: a função foi atribuída a quem não
podia acumulá-la.

**Conflito efetivo** é a acumulação das transações correspondentes **no mesmo identificador de
usuário**, no mesmo sistema e no mesmo escopo. Existe dentro da base, é contável, e o achado se
escreve com o número exato de usuários e a relação nominal por matrícula e cargo.

As quatro combinações, e três delas são achado:

| | Sem conflito efetivo | Com conflito efetivo |
|---|---|---|
| **Sem conflito no papel** | situação normal | **acesso concedido além do cargo.** Achado de concessão, não de desenho. Vai para `perfis-e-acessos` |
| **Com conflito no papel** | **segregação por acidente.** O desenho permite, o sistema hoje impede, e nada garante que continue impedindo. Achado de desenho | **conflito confirmado.** Desenho e sistema concordam em permitir. É o achado de maior severidade |

A terceira linha é a que quase todo trabalho perde. Quando o desenho concentra as duas funções no
mesmo cargo mas o sistema, por qualquer razão circunstancial, ainda não deu os dois perfis à mesma
pessoa, **não há controle**: há sorte. Basta uma concessão de rotina, feita por quem segue a
descrição de cargo à risca, para o conflito materializar. Concluir "sem exceções" nesse caso é
concluir sobre o dia da extração.

## 4. Escopo: o que separa achado de falso positivo

Um mesmo par de funções pode ser conflito num caso e não ser em outro, e a diferença é sempre de
escopo. Antes de levar qualquer célula a achado, confirme as quatro dimensões:

- **Entidade e filial.** Emitir pedido na filial A e liberar pagamento na filial B, sem interseção
  de fornecedor ou de centro de custo, não fecha ciclo nenhum. Matriz que ignora a dimensão
  organizacional produz dezenas de exceções que morrem na primeira reunião e levam junto a
  credibilidade das exceções verdadeiras.
- **Alçada de valor.** Quem aprova até um teto baixo e quem paga sem teto conflitam de forma
  diferente de quem faz as duas coisas sem limite. Registre o teto, porque ele é a medida do dano e
  costuma ser o próprio controle compensatório (`mitigacao-e-monitoramento` §3).
- **Ambiente.** O mesmo perfil em qualidade e em produção não tem o mesmo significado. Conflito de
  SoD se apura em produção, e acesso a produção é o corte que vem primeiro.
- **Janela de tempo.** Acumulação simultânea é conflito. Acumulação em sequência, por transferência
  de área com revogação do perfil anterior, não é. Acumulação em sequência **sem** revogação do
  anterior é conflito e é também achado de modificação de acesso, e vale a dobradinha: quem muda de
  área e mantém o perfil antigo é a origem mais comum de conflito efetivo em base madura.

Declare as quatro dimensões nos critérios do papel de trabalho. Sem elas, a mesma consulta rodada
por outra pessoa dá outro número, e o número deixa de ser reproduzível.

## 5. Severidade: nem todo conflito é crítico

Três níveis, e a régua é o **dano consumado sem passar por mais ninguém**:

| Nível | Critério | Consequência |
|---|---|---|
| **Crítico** | fecha o ciclo sozinho: a pessoa cria o beneficiário, gera a obrigação e libera a saída, sem que nenhum terceiro precise agir | remediação com prazo, ou controle compensatório desenhado e operante |
| **Alto** | permite ocultar erro ou desvio próprio, mas ainda depende de um ato de terceiro para consumar a perda | remediação ou compensatório, com prazo mais longo |
| **Médio** | reduz a qualidade do controle sem permitir dano direto, tipicamente por concentrar registro e revisão | monitoramento, e reavaliação quando o quadro de pessoal crescer |

Matriz em que tudo é crítico não prioriza nada, e é o sintoma de matriz comprada pronta. Numa
operação de porte médio, um catálogo bem calibrado tem poucos críticos, e são justamente os pares
do `conflitos-criticos`. Se a sua tem trinta críticos, releia a régua.

## 6. Como a matriz vira teste

A matriz não é entregável final. É o gerador dos testes, e cada célula preenchida produz exatamente
um teste executável. O caminho, e ele é de 100%, nunca de amostra, porque a base é contável e
cruzável:

1. **Levante o catálogo de perfis** do sistema em escopo: perfil, descrição e as transações que cada
   um concede. É o insumo que o cliente mais demora a entregar e sem o qual nada roda.
2. **Mapeie cada função da matriz para o conjunto de transações** que a executa. Registre o mapa: é
   ele que um terceiro precisa para reproduzir o número, e é ele que se reaproveita no ciclo
   seguinte.
3. **Nomenclatura de perfil é hipótese, não evidência.** Onde o catálogo usa prefixo de verbo
   (`SOLICITANTE_<módulo>`, `APROVADOR_<módulo>`, `EMITENTE_<módulo>`,
   `ADMINISTRADOR_<sistema>`), o nome dá o ponto de partida do mapa e economiza semanas. Confirme
   cada um contra as transações que o perfil de fato concede, porque perfil renomeado, perfil que
   cresceu por demanda pontual e perfil herdado de implantação antiga mentem no nome. Onde o
   catálogo usa código opaco, o mapa se faz transação a transação e o esforço é outro: dimensione
   isso na proposta.
4. **Monte a base usuário × perfil × transação**, por sistema e por escopo organizacional.
5. **Rode cada célula como consulta**: usuários que detêm, ao mesmo tempo, transação do lado A e
   transação do lado B, dentro do mesmo escopo. O resultado é a relação nominal de conflitos
   efetivos daquele par.
6. **Classifique cada ocorrência em intra-perfil ou inter-perfil.** No conflito **intra-perfil**, um
   único perfil já contém os dois lados, e todo usuário que o receber herda o conflito: a remediação
   é redesenhar o perfil, e resolve muitos usuários de uma vez. No conflito **inter-perfil**, o
   usuário acumulou dois perfis individualmente limpos, e a remediação é revogar uma das
   atribuições. Misturar os dois na mesma recomendação produz plano de ação que não executa.
7. **Feche com o cruzamento de vínculo.** Usuário ativo sem vínculo vigente contamina toda contagem
   de conflito, e o corte é barato. Faça-o antes de publicar qualquer número.

**Conflito entre aplicações.** A consulta acima roda por sistema, e por isso perde o conflito mais
perigoso da operação brasileira de porte médio: cadastrar o fornecedor no ERP e transmitir o
pagamento no portal do banco. São duas bases, dois catálogos de perfil e frequentemente dois donos.
Construa a base consolidada por pessoa, não por login, casando as contas pelo identificador
funcional (matrícula, CPF ou e-mail corporativo), e declare nos critérios como o casamento foi feito
e quantas contas não casaram.

## 7. Quando a Companhia já tem uma matriz

Quase nunca tem, e quando tem costuma ter vindo junto com o ERP. Não a descarte e não a adote: use a
mesma disciplina de confronto de `matriz-riscos-controles`, em duas direções.

**Conflito na matriz do cliente que não se sustenta:** peça o dano escrito. Se ninguém souber dizer o
que a pessoa consegue fazer sozinha, o par entrou por herança de template de outro setor.

**Conflito real ausente da matriz:** compare contra o catálogo de `conflitos-criticos`. A ausência
mais frequente é a que envolve dois sistemas, pela razão do §6, e a segunda é a de parametrização,
porque quem escreveu a matriz pensou em transação de negócio e esqueceu que alterar a regra dispensa
burlar a regra.

## O que entregar

1. A relação de funções em escopo, com a fonte de cada uma (fluxo, descrição de cargo, walkthrough).
2. A matriz triangular codificada `SOD.<NN>`, com dano escrito e severidade por célula.
3. O mapa função para transação por sistema, que é o que torna o teste reproduzível.
4. A base consolidada usuário × perfil × transação, por escopo organizacional, com o critério de
   casamento entre sistemas declarado.
5. A relação de conflitos efetivos por par, nominal por matrícula e cargo, separada em intra-perfil e
   inter-perfil.
6. A relação de conflitos no papel **sem** conflito efetivo, que é a segregação por acidente do §3.
7. As quatro dimensões de escopo declaradas nos critérios, com a data e a hora da extração.

## Checklist antes de dar por concluído

- Matriz na camada de função, não de cargo e não de pessoa, com o mapa para transação documentado.
- Nenhuma célula sem dano escrito em uma frase e sem severidade atribuída.
- Conflito no papel e conflito efetivo reportados separadamente, com a segregação por acidente
  identificada.
- Escopo declarado nas quatro dimensões, com o tratamento de filial e de alçada explícito.
- Teste rodado a 100% da base, nunca por amostra, com usuário sem vínculo já excluído.
- Cada ocorrência classificada em intra-perfil ou inter-perfil, com remediação coerente com a classe.
- Pelo menos um par testado entre aplicações distintas, ou a declaração de que não há segunda
  aplicação em escopo.
- Nenhum nome de pessoa no relatório: matrícula e cargo.

## Próximo passo

`conflitos-criticos` para o catálogo dos pares que decidem o trabalho, `perfis-e-acessos` para o
ciclo de vida que explica como o conflito chegou à base, e `mitigacao-e-monitoramento` para o que
fazer com o conflito que não se resolve por falta de gente.
