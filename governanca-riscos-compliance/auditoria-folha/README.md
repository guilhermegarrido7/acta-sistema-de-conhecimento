# Auditoria de Folha de Pagamento

Auditoria do ciclo de folha: universo e dicionário de rubricas, base de incidência de encargos,
benefícios e descontos, jornada e hora extra habitual, admissão e desligamento, e o trabalhador sem
vínculo direto (PJ, cooperado, estagiário e terceiro).

> **Pré-requisito, desde já: instale `acta-way`** (`claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`). É onde vive o mecanismo de checkpoint entre sessões e consultores. O manifesto de plugin não tem campo de dependência; sem ele instalado, nenhum outro plugin da ACTA consegue usar o checkpoint.
>
> **Segundo pré-requisito: `acta-metodo-auditoria`.** Este plugin é de **processo auditado**. As
> regras invioláveis, a doutrina do número exato, a regra R8, o papel de trabalho, o programa de
> testes, a redação de achados e o tratamento de bases vivem lá e **não são repetidos aqui**. Cada
> skill manda carregá-lo antes.
>
> **Terceiro, quando o mandato for de controles:** `acta-controles-internos` traz a matriz formal de
> riscos e controles, o walkthrough, a distinção entre desenho e efetividade e a classificação de
> severidade de deficiência. Também não se repetem aqui.
>
> **Quarto, e antes de abrir a base:** `acta-way:anonimizacao-e-lgpd`. Base de folha reúne
> identificador direto, remuneração individual e, em rubrica de benefício e de afastamento, dado
> pessoal sensível. O protocolo está em `universo-da-folha` §7.
>
> **Status: as 6 skills do ciclo estão escritas.** A publicação no `marketplace.json` é feita à
> parte. Ver [docs/ROADMAP.md](../../docs/ROADMAP.md).

## O que faz

Conduz a auditoria da folha pela regra que gerou os pagamentos, e não pelo contracheque que cada
pessoa recebeu: fecha o universo por competência e por período de cálculo, levanta o dicionário de
rubricas e testa a 100% as criadas ou alteradas no período, reconstrói a base de incidência de cada
encargo pela parametrização declarada e confronta com a base gravada, concilia folha com
contabilidade, com o arquivo bancário, com a guia recolhida e com o declarado ao fisco trabalhista,
cruza o ponto com a folha em toda a população, isola o padrão de hora extra habitual ao longo da
série e recalcula o reflexo não pago, concilia cada benefício a três pontas (fatura, elegível,
descontado), testa a tempestividade do registro e a completude do desligamento, e reúne os sinais de
pessoalidade, subordinação e habitualidade dos prestadores sem vínculo direto.

Traz o que é próprio do domínio e não existe no plugin de método: os sete blocos executáveis do ciclo
com o controle de melhor prática de cada, a distinção entre provento, desconto e base de incidência,
os quatro pares de bases que têm de fechar, o padrão Plano A/B/C de degradação declarada da
evidência, e os dezoito riscos codificados com a matriz risco por controle por teste.

## Skills

| Skill | Bloco | Descrição |
|---|---|---|
| `universo-da-folha` | Entrada (FOP.01 e FOP.05) | A pergunta-mestra do ciclo, os períodos de cálculo que somem da base, a série de headcount, o dicionário de rubricas com as três leituras críticas, a matriz de rubrica por competência, os quatro pares que têm de fechar, o protocolo de dado pessoal e as sete perguntas que dimensionam o mandato. |
| `matriz-de-riscos-da-folha` | Transversal | Os dezoito riscos codificados `FOP.R<NN>`, a matriz risco por controle por como se testa, e os cinco que decidem o trabalho (incidência parametrizada errada, hora extra habitual, benefício descontado a mais ou a menos, desligado que continua na folha, pejotização). |
| `encargos-e-beneficios` | FOP.04 | A reconstrução da base de cada encargo confrontada com a gravada em 100%, a leitura crítica da incidência declarada, o caminho da base até a guia, a alíquota de risco ambiental contra a atividade preponderante, a conciliação a três pontas de cada benefício e as provisões. |
| `horas-extras-e-jornada` | FOP.03 | O cruzamento ponto contra folha em toda a população com os cinco resíduos, os cortes de integridade do ponto e os ajustes manuais, os recálculos de sobrejornada, adicional noturno com jornada mista isolada, intervalo e sobreaviso, o banco de horas e a matriz de recorrência que revela a habitualidade. |
| `admissao-e-desligamento` | FOP.02 e FOP.06 | A linha do tempo de datas da admissão e as inversões que ela revela, o dossiê e o cadastro contra o contrato, afastamento e férias, o cruzamento de desligados com as competências posteriores e com benefício, banco e acesso, e o recálculo das verbas rescisórias e do aviso prévio. |
| `terceiros-e-pj` | FOP.07 | A população de prestadores consolidada de oito fontes, a matriz prestador por sinal de pessoalidade, subordinação, habitualidade e onerosidade, cooperativa de mão de obra, os sete testes de estágio com as cotas legais, e a fiscalização documentada do terceiro alocado. |

## Fluxo típico

`universo-da-folha` (fecha competências e períodos de cálculo, levanta o dicionário de rubricas e
declara o que está fora de escopo) → `matriz-de-riscos-da-folha` (registro de riscos e matriz) →
`programa-de-testes` do plugin de método (tipo de teste, frequência, amostragem) →
`encargos-e-beneficios` → `horas-extras-e-jornada` → `admissao-e-desligamento` → `terceiros-e-pj`,
com `bases-e-conciliacao` e `papel-de-trabalho` carregados a cada bloco executado, e
`redacao-de-achados` e `relatorio-de-auditoria` no fechamento.

A ordem não segue a vida do vínculo, e isso é deliberado. Começa pelo bloco de maior valor, que é o
de incidência, porque um erro de parametrização ali multiplica por toda a população e por todas as
competências. A média de horas extras apurada no bloco de jornada é insumo do recálculo das verbas
rescisórias, então jornada vem antes de desligamento. E os prestadores sem vínculo direto vêm por
último porque a população deles se fecha com o cruzamento de crachá e usuário contra a base de folha,
que só existe depois que o universo foi fechado.

Ao fechar, o que se aprendeu volta para a matriz (risco novo, controle novo, forma de testar) e o
estado do engajamento vai para o checkpoint de `acta-way`.

## Convenções

Este plugin segue as convenções do repositório, incluindo os placeholders de pasta
(`~~pasta de trabalho`, `~~arquivos recebidos`, ...). Ver [CONVENCOES.md](../../CONVENCOES.md).

Método transversal vive em `acta-way`; método da prática, em `acta-metodo-auditoria`. Não repita
aqui o que já está lá, em particular a doutrina do número, o tratamento de bases e o casamento com
consumo de pool, a estrutura do papel de trabalho e o vocabulário do campo Resultado, a taxonomia de
tipo de teste e a régua de amostragem, os conceitos e o código de risco, a redação de ponto e a
calibração de severidade, e o ritual de aprendizado.

Nome de cliente e nome de pessoa não entram em skill, e na folha essa regra vale com peso maior que
em qualquer outro plugin da casa: `acta-way:anonimizacao-e-lgpd` se aplica integralmente, o achado se
descreve pelo cargo, pela seção e pelo registro, e rubrica que revela saúde ou filiação sindical não
entra em papel de trabalho nominal. Percentual de adicional, piso, teto de desconto, prazo e
incidência de rubrica citados nas skills são **exemplo de parâmetro**, não padrão de mercado: variam
por convenção coletiva, por data-base e por parametrização, e o auditor lê o instrumento vigente do
mandato antes de testar aderência a ele. Nenhuma skill cita número de artigo de lei; a obrigação se
descreve pelo conteúdo, e a razão está em [fundamentos.md](fundamentos.md).
