# Edição e validação do arquivo do modelo

Regras de processo para editar e validar um modelo que o usuário também edita. Complementam
`acta-way:ambiente-tecnico` (ferramentas, COM do Office, arquivo travado) e `acta-way:edicao-em-massa`.

## 1. Não regrave o modelo do usuário com biblioteca que reescreve o arquivo

`openpyxl` e similares reescrevem o pacote e perdem o que não entendem: formatação condicional,
tabelas de dados, nomes, estilos, gráficos. Para ler, tudo bem. Para alterar célula do modelo do
usuário, edite o XML da planilha dentro do .xlsx:

- remova a `calcChain` e ative `fullCalcOnLoad`, para o Excel recalcular na abertura;
- escape `&` e os demais caracteres especiais nas strings;
- preserve estilos e fórmulas compartilhadas;
- antes de gravar, confirme que o arquivo não mudou desde a leitura (data de modificação). O usuário
  edita entre as entregas: releia, reaplique a alteração sobre a versão dele e só então grave.

## 2. O valor em cache de tabela de dados engana

Tabela de dados (sensibilidades, seletor de cenário) não é recalculada pelo LibreOffice por padrão, e
o valor salvo no arquivo é o da última vez que o Excel calculou. Para estimar o efeito de uma mudança:

1. force o recálculo completo (modo de recálculo "sempre" na configuração do LibreOffice);
2. confira o EV em todos os cenários;
3. aceite que algumas células (cenário alternativo, funções que o LibreOffice calcula diferente)
   podem voltar erro. **A validação definitiva do EV é abrir o arquivo no Excel.**

Regra: estime com recálculo forçado e declare a incerteza. Não afirme "o EV não mudou" sem mostrar o
valor com as casas que sustentam a afirmação. No caso A, uma troca de percentual de tributo legado foi
descrita como neutra em duas casas decimais, e o EV tinha subido na terceira casa.

## 3. Todo parâmetro tem dependentes

No caso A, o percentual de tributo legado projetado até 2026 era o mesmo que compunha a base do
IBS/CBS por fora nos anos seguintes: mudá-lo moveu a receita líquida futura. Antes de afirmar o
efeito de uma mudança, rastreie os dependentes da célula e recalcule.

## 4. Nota e texto de premissa seguem a premissa

Se a premissa mudou (de 45 para 20 dias, por exemplo), revise na mesma edição toda nota, comentário
e texto de aba que a cita. Busque o valor antigo no arquivo inteiro e no deck. Nota interna com o
valor antigo é o erro que o revisor encontra primeiro.

## 5. O deck é feito de valores colados

Tabela e número do deck são valores, e não vínculos. Toda alteração no modelo gera a lista dos slides
afetados e a atualização depois que o Excel recalcular. Não cole no deck o valor de um recálculo que
ainda não teve a validação definitiva: marque o número como pendente.

## 6. Auditoria por subagente ou script

O relatório de uma auditoria automatizada (reconciliação de DRE, varredura de fórmulas) é hipótese a
confirmar: o analista confere uma amostra, inclusive dos números de EV. No caso A, a auditoria
corrigiu uma validação anterior de EV, e o contrário também pode acontecer.
