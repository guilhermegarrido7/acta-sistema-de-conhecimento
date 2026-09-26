# Os três erros clássicos e o peso do valor terminal

Extraído de `valor-terminal` para manter o corpo da skill dentro do teto de 300 linhas.
O conteúdo é o mesmo; só o lugar mudou.

---

## Os três erros clássicos, e todos subestimam o valor

Nota que importa a um mandato de venda: **os três erros clássicos de valor terminal empurram o valor
para baixo.** São exatamente os erros que um analista comete tentando ser prudente, e prudência mal
aplicada aqui custa dinheiro ao vendedor.

### Erro 1: extrapolação ingênua do ano-base

Fazer o ano-base do terminal crescendo **toda linha** do último ano explícito pela taxa `g`.

Por que está errado: se a receita passa a crescer 5% em vez de 10%, a **necessidade de capital de
giro cai**, porque o investimento em giro acompanha o *incremento* de receita, não o nível. Crescer
a linha de capital de giro por `g` faz o giro subir como percentual da receita ano após ano, o que
consome caixa que não deveria ser consumido.

O correto: o investimento em capital de giro é o necessário para **manter o giro como percentual
constante da receita**. O mesmo vale para CapEx.

Magnitude do dano: o FCF terminal pode sair cerca de 18% abaixo do que deveria, o que se propaga
inteiro para o valor.

**O remédio é estrutural: use a fórmula dos value drivers, não a perpetuidade de FCF.** A fórmula
calcula o reinvestimento implicitamente a partir de `g` e do ROIC, e o erro se torna impossível.

### Erro 2: conservadorismo ingênuo

Assumir `RONIC = WACC` por reflexo, porque assim o crescimento não importa e não é preciso defender
`g`.

É o padrão razoável para a maioria dos negócios, e **é conservador demais para negócio com marca
forte, barreira alta ou produto difícil de duplicar**. Nesses casos o retorno sobre capital novo não
cai ao custo de capital só porque a empresa cresce.

Contrapeso obrigatório: mesmo que o RONIC permaneça alto, **o crescimento cai quando o mercado
amadurece**. Qualquer premissa de `RONIC > WACC` tem de vir acoplada a um `g` economicamente modesto.
RONIC alto com `g` alto é a combinação que não se defende.

### Erro 3: conservadorismo proposital

Reduzir `g` ou o ROIC terminal "porque há muita incerteza e o terminal é grande".

O argumento formal contra: se a estimativa é não viesada, a incerteza corta para os dois lados; o
resultado é tão provável de ficar acima quanto abaixo. **Cortar só para baixo sobrecompensa a
incerteza** e embute um desconto que ninguém declarou e ninguém sabe dimensionar.

O remédio: **incerteza vai em cenários, não em haircut silencioso no terminal.** Ver
`projecao-e-cenarios` e `triangulacao-e-faixa`: é para isso que existe a faixa.

### O peso do valor terminal

```
Peso do VT = VP(valor terminal) / Enterprise value
```

Peso de 70% a 80% num horizonte de cinco anos é **normal**, não sintoma. E há um teorema que precisa
ser entendido antes de reagir a ele:

> **O comprimento do período explícito não muda o valor da empresa. Só muda a distribuição do valor
> entre o período explícito e o terminal.**

Estender de 5 para 8 anos derruba o peso do terminal de ~79% para ~67% e **chega no mesmo valor
total**, porque o terminal fica maior em valor de face mas ocorre três anos depois, e as duas coisas
se compensam exatamente. Alongar o horizonte para "reduzir a dependência do terminal" é cosmética.

**A armadilha que decorre disso, e que trabalha contra você sem avisar:** se o modelo usa
`RONIC = WACC` no terminal, estender o período explícito **aumenta indiretamente o valor**, porque
adiciona anos em que a empresa cria valor. O efeito é real e passa desapercebido. Se você alongar o
horizonte, saiba que está mudando a premissa econômica, não só a apresentação.

**O critério correto para o horizonte é o regime estacionário, e não o peso do terminal.** O período
explícito tem de ser longo o bastante para que margem, ROIC, `g`, CapEx e dias de capital de giro
estejam estáveis no último ano. Se a margem cai de 14% para 9% ao longo de sete anos, o período
explícito precisa ter sete anos, porque nenhuma fórmula de perpetuidade acomoda margem em declínio.
Além do ponto de estabilização, alongar não tem efeito. Ver `projecao-e-cenarios`.

### Quando o peso do terminal assusta o cliente

Acontece em toda apresentação: "então 80% do valor é um chute?". A resposta é
**decompor o valor de outra forma**, e não reduzir o peso. Três decomposições do mesmo número, e as duas últimas mudam
completamente a percepção de risco:

| Decomposição | O que mostra |
|---|---|
| **FCF descontado** | O terminal responde por ~80%. É a leitura que assusta. |
| **Por componente de negócio** | Separe o negócio maduro e estável das iniciativas de crescimento. Tipicamente o negócio maduro, que já gera caixa previsível hoje, responde pela maior parte do valor, e a parcela imprevisível é pequena. |
| **Por lucro econômico** | `Valor = capital investido + VP do lucro econômico`. Uma fatia do valor é simplesmente o capital já investido, e boa parte do lucro econômico é gerada no período explícito. A parcela atribuível ao terminal cai muito. |

A terceira é a mais forte, e é a formulação de Koller: *o valor de uma empresa é o capital investido
mais os lucros econômicos que ela gera sobre esse capital*. Se a criação de valor acontece no período
explícito, o terminal tem papel muito menor do que o DCF de fluxo de caixa sugere.

Apresente as três. É o slide que mais reduz atrito numa reunião de valuation.
