---
name: canal-de-denuncias
description: Implante e teste o canal de denúncias: independência de quem recebe, anonimato contra confidencialidade, prazo de tratamento, não retaliação e o desvio obrigatório quando o denunciado é quem receberia a denúncia. Acionar ao desenhar ou contratar canal, ao escrever o fluxo de tratamento, ao testar a independência, ou ao apurar caso que envolve a própria instância.
---

# Canal de denúncias

Carregue `codigo-de-conduta` antes: sem regra de conduta escrita e vigente, o que chega ao canal não
tem critério de classificação e vira reclamação administrativa.

O canal é o pilar com a maior distância entre existir e funcionar. Empresa que contratou plataforma,
publicou o número e nunca recebeu nada costuma concluir que não tem problema. A conclusão correta é
que o canal não tem confiança, e canal sem confiança é pior do que canal nenhum, porque a empresa
acredita estar vigiada quando não está.

## 1. Independência: as três camadas

Independência não é uma propriedade só. São três, e elas falham separadamente.

**Camada 1, quem recebe.** O recebimento tem de estar fora da linha hierárquica que pode ser objeto
de denúncia. Operador terceirizado resolve isso melhor do que estrutura interna, e é a razão
principal para contratar plataforma. Canal operado pelo departamento de pessoal não recebe denúncia
sobre o departamento de pessoal, e não recebe denúncia sobre quem decide promoção.

**Camada 2, quem decide apurar.** Recebimento independente com triagem feita pelo gestor da área
denunciada anula a camada 1. A triagem pertence à instância de integridade.

**Camada 3, quem decide a consequência.** A decisão sobre medida disciplinar precisa de instância
colegiada, com composição definida em procedimento e não caso a caso. Decisão individual sobre par
ou sobre superior não se sustenta.

**O teste das três camadas.** Percorra um caso encerrado e responda, com nome de cargo e não de
pessoa: quem recebeu, quem decidiu apurar, quem apurou, quem decidiu a medida. Se o mesmo cargo
aparece em três das quatro posições, não há independência, e o número de denúncias recebidas explica
o resto.

## 2. Anonimato e confidencialidade não são a mesma coisa

A confusão entre os dois é a falha de desenho mais comum, e ela aparece no material de divulgação
antes de aparecer no fluxo.

| | Anonimato | Confidencialidade |
|---|---|---|
| O que significa | A empresa não sabe quem denunciou | A empresa sabe, e protege a identidade contra divulgação |
| Quem garante | O desenho do canal, que não coleta identificação | A política e o controle de acesso ao registro |
| Custo | Apuração mais difícil: não há como pedir complemento sem protocolo de retorno | Apuração mais eficaz, e depende de a proteção ser crível |
| Quando falha | Denúncia detalhada demais identifica o autor por dedução | Vazamento de identidade, que destrói o canal de uma vez |

**Ofereça os dois, e diga a diferença no material de divulgação.** O denunciante escolhe. O que não
se pode fazer é prometer anonimato e operar confidencialidade, que é o que acontece quando o
formulário tem campo de identificação obrigatório e a peça de comunicação diz "canal anônimo".

**O protocolo de retorno é obrigatório no anonimato.** Sem código que permita ao denunciante voltar
e complementar, a denúncia anônima morre na primeira lacuna, e a maioria delas tem lacuna. Com
protocolo, a apuração conversa com alguém que continua sem se identificar.

**Denúncia anônima se apura.** Recusar apuração por falta de identificação é o mecanismo mais
eficiente de matar o canal, e não se sustenta: o que se apura é o fato narrado, e ele ou tem
evidência verificável ou não tem, independentemente de quem contou.

## 3. Prazos, e o que cada um protege

Prazo sem registro de cumprimento é intenção. O fluxo precisa de quatro marcos datados:

| Marco | Referência usual | O que ele protege |
|---|---|---|
| Acusar recebimento | até 2 dias úteis | A percepção de que o canal está vivo |
| Concluir a triagem e classificar | até 10 dias úteis | Que o caso grave não fique na fila atrás do trivial |
| Concluir a apuração | até 60 dias, prorrogável uma vez com justificativa registrada | Que a investigação não prescreva por inércia |
| Comunicar o encerramento ao denunciante identificado ou ao protocolo | até 5 dias úteis do desfecho | A confiança, que é o insumo de toda denúncia futura |

Os números são **exemplo de parâmetro**, não padrão de mercado: variam por política, e o que se
testa é a aderência à política vigente do cliente na data do caso.

**A classificação na triagem** separa o que é integridade (fraude, corrupção, conflito de interesse,
registro falso) do que é relação de trabalho (assédio, discriminação) e do que é reclamação
operacional. Os três seguem caminhos diferentes, e misturá-los entope o canal com o terceiro grupo,
que é o mais volumoso.

## 4. O desvio quando o denunciado é quem receberia

O teste de conflito do canal, e a razão de ele existir por escrito e não por bom senso.

**A situação.** A denúncia aponta pessoa que ocupa posição no próprio fluxo: o responsável pela
integridade, um membro do comitê que decide a medida, o executivo a quem a instância reporta, o
sócio, ou pessoa ligada a qualquer um deles.

**A regra.** O procedimento precisa nomear, **antes do caso**, a rota alternativa. Três elementos:

1. **Gatilho automático de desvio.** A triagem confronta o nome apontado com a lista nominal de
   posições do fluxo. Casando, o caso não entra no fluxo ordinário, e quem casou não fica sabendo
   que o caso existe.
2. **Destinatário alternativo definido em procedimento.** Órgão colegiado de governança, comitê de
   auditoria, conselho, ou, quando a estrutura não existir, assessoria externa contratada para essa
   finalidade, com reporte direto ao colegiado. Definir o destinatário no momento do caso é definir
   o destinatário conveniente.
3. **Segregação de acesso no sistema.** Não basta o desvio de decisão. Quem foi apontado não pode
   ter acesso de leitura ao registro, ao anexo e ao histórico de acesso. Plataforma que dá perfil de
   administrador ao responsável pela integridade entrega a ele a denúncia contra ele.

**Como testar.** Duas verificações, as duas documentais:

- **Teste de desenho**: o procedimento nomeia a rota alternativa, o destinatário e o gatilho, e a
  lista nominal de posições do fluxo existe e está atualizada.
- **Teste de acesso**: peça a matriz de perfis da plataforma e a trilha de acesso aos casos do
  período. O que se procura é quem pode ler tudo. Se o responsável pela integridade puder ler todos
  os casos sem exceção, o desvio não existe na prática, mesmo escrito.

O mesmo raciocínio se aplica ao sócio de empresa de porte médio sem conselho instalado, que é o caso
mais frequente no mercado da casa. Sem terceiro independente, não há rota, e o programa precisa
dizer isso em vez de fingir que resolve.

## 5. Não retaliação

A política de não retaliação vale o que valer a evidência de que ela foi aplicada. O controle que
funciona é o **monitoramento ativo do denunciante identificado**, por período definido, conferindo:

- Desligamento, transferência ou mudança de subordinação após a denúncia.
- Queda de avaliação de desempenho em relação ao histórico.
- Perda de acesso, de alçada ou de escopo.

Qualquer um dos três dispara análise e não conclusão automática: pode haver razão legítima. O que
não pode é ninguém olhar. Esse monitoramento se registra, porque é o único documento capaz de
provar não retaliação depois.

## 6. Divulgação e uso

- O canal aparece onde a pessoa está: contracheque, crachá, portal, mural, contrato de fornecedor.
- **Está aberto a terceiro**: fornecedor, cliente e comunidade. Canal restrito a empregado perde a
  denúncia de quem foi convidado a pagar propina, que é o denunciante externo por excelência.
- Volume zero não é sucesso. Compare o volume com a base de pessoas e, mais útil, com o percentual
  de denúncias que resultaram em apuração procedente. Volume alto com procedência baixa costuma
  indicar canal usado como ouvidoria de clima; volume baixo com procedência alta indica canal
  conhecido por poucos.

## O que entregar

1. O fluxo com as três camadas de independência e os cargos de cada posição.
2. O material de divulgação com a distinção escrita entre anonimato e confidencialidade, e o
   protocolo de retorno em operação.
3. Os quatro marcos de prazo com a política do cliente, e a medição de aderência sobre os casos do
   período.
4. O procedimento de desvio com gatilho, destinatário alternativo e segregação de acesso, mais o
   resultado dos dois testes da §4.
5. O registro de monitoramento de não retaliação dos denunciantes identificados no período.
6. Os indicadores de uso: volume, classificação por tipo, tempo por marco e percentual de procedência.

## Próximo passo

`due-diligence-de-terceiros`, o pilar que consome mais evidência e produz mais achado, e cujo
resultado costuma chegar ao canal como denúncia antes de chegar como laudo.
