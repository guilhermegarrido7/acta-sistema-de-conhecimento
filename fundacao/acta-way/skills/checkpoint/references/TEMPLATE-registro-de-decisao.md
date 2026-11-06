# Registro de decisão de matriz

> Use quando a decisão responde a um bloco de **matriz de decisões** de uma skill (ID como `CC-04`,
> `TF-01`, `PC-01`). A skill traz as alternativas e a recomendação padrão; este registro guarda o que
> **este engajamento** escolheu. Vai na seção 3 da entrada de sessão e é indexado na seção 5 do
> `CHECKPOINT.md`.
>
> Decisão que não tem bloco de matriz (particularidade do modelo de negócio, como o driver de receita
> ou o CapEx por unidade física) usa o mesmo formato, com `Matriz: —`.

```markdown
### DM-{{NN}} · {{pergunta em uma linha}}

| Campo | Conteúdo |
|---|---|
| Matriz | `{{skill}}` · `{{ID do bloco}}` (ou —) |
| Opções avaliadas | {{alternativa 1}}; {{alternativa 2}}; {{alternativa 3}} |
| Escolha | {{alternativa escolhida}} |
| Justificativa | {{por que esta, neste engajamento}} |
| Fonte | {{documento, página ou slide; autor e ano; célula do modelo}} |
| Descartada e por quê | {{alternativa}}: {{motivo}} |
| Impacto | {{efeito no valor ou na premissa, com número quando houver}} |
| Aprovado por | {{papel: sócio responsável, consultor}} em {{dd/mm/aaaa}} |
| Reabrir se | {{evento que invalida a escolha: nova oferta, novo balanço, mudança de comprador}} |
```

## Regras

1. **Uma decisão por bloco.** Duas perguntas no mesmo registro impedem reabrir uma sem reabrir a
   outra.
2. **Fonte é obrigatória.** Sem fonte rastreável, registre "sem fonte; validar com a Companhia" e
   abra uma pendência.
3. **Mudou de ideia? Novo registro**, com `Substitui: DM-{{NN}}`. O anterior fica como está.
4. **A escolha não volta para a skill.** Ela vira exemplo anonimizado na matriz só quando o sócio
   responsável valida que vale para outro cliente (ver `APRENDIZADOS.md` e seção 9 da skill).
