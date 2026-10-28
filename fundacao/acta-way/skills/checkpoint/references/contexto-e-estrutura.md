# Contexto do protocolo, estrutura no engajamento e os dois modos

Extraído de `checkpoint`: o topo e as seções 1, 2 e 12, que mantêm a síntese. O conteúdo é o mesmo;
só o lugar mudou.

## Por que o protocolo existe

Sessão de Claude não atravessa pessoas. Sessões são armazenadas por diretório e por máquina, e
desktop, web e IDE mantêm históricos separados. Quando um consultor decide algo às 16h, o Claude do
colega às 9h do dia seguinte não sabe de nada.

O que atravessa é **o arquivo na pasta compartilhada do engajamento**. Esta skill é o protocolo de
escrever e ler esse arquivo.

> **A metade que todo mundo esquece.** Escrever o checkpoint não resolve nada sozinho. Se ninguém
> obriga o Claude do colega a **ler** no início da sessão, o arquivo existe e continua invisível.
> Por isso o protocolo tem momentos de leitura e momentos de escrita, e eles não são os mesmos.

**A responsabilidade de saber em que versão está é do consultor, não do Claude.** Esta skill não
fica anunciando "estamos na v14" a cada resposta, nem grava a cada etapa concluída ou decisão
tomada. Isso é ruído, e checkpoint que interrompe demais vira checkpoint ignorado. O Claude informa
a versão nos momentos definidos abaixo: ao abrir a sessão, na pergunta diária, e ao fechar. Fora
disso, se o consultor perder a conta, a saída é simples: perguntar "em que versão estamos", que
aciona a leitura do arquivo.

## 1. Estrutura no engajamento

```
~~pasta de trabalho/
├── CLAUDE.md                          carregado automaticamente pelo Claude Code
├── AGENTS.md                          mesmo conteúdo, para outras ferramentas
└── ~~controle/
    ├── CHECKPOINT.md                  estado consolidado. Quem chega lê ISTO.
    ├── Sessoes/
    │   ├── 20260826-1430 Guilherme.md imutável, nunca conflita
    │   └── 20260826-0915 Maria.md
    └── APRENDIZADOS.md                lição reutilizável em OUTRO cliente
```

Dois artefatos com papéis distintos, e a distinção é o que faz o mecanismo sobreviver ao OneDrive:

| | `Sessoes/*.md` | `CHECKPOINT.md` |
|---|---|---|
| Natureza | log de eventos, **append-only** | estado derivado, **consolidado** |
| Escrita | um arquivo novo por sessão | reescrito a cada consolidação |
| Conflito | impossível: nome único por construção | possível, mas **reconstruível a partir do log** |
| Quem edita | quem trabalhou | o Claude, ao fechar a sessão |

**Arquivo em `Sessoes/` nunca é editado depois de escrito.** Corrigiu algo? Nova entrada dizendo o
que corrige. É o que preserva o porquê da decisão original junto do seu contexto.

**Decisão metodológica não tem arquivo próprio.** Fica na entrada de sessão (imutável) e é indexada
na tabela de decisões do `CHECKPOINT.md`, que aponta de volta para a sessão onde foi tomada.

## 2. Os dois modos, detectados e não escolhidos

Não pergunte o modo, nem guarde na memória: memória de Claude é por pessoa e não chega no colega,
que é exatamente o problema que este mecanismo resolve. **Detecte tentando alcançar a pasta.**

| | Modo Claude Code | Modo Desktop / Web |
|---|---|---|
| Detecção | consegue ler `~~controle/` | não consegue |
| Leitura | lê `CHECKPOINT.md` e lista `Sessoes/` | pede o `CHECKPOINT.md` anexado |
| Escrita | grava direto; o OneDrive sincroniza | gera o bloco pronto, com nome de arquivo e caminho, e pede o upload |
| Defasagem | **detecta de fato** | **estima pela idade** |
| Cópia conflitante | **detecta** | invisível |

O que **precisa** ser perguntado uma vez por engajamento é o **caminho da pasta**. Nunca presuma
(regra da casa). Uma vez sabido, ele fica registrado na seção 0 do `CHECKPOINT.md`, onde todo
consultor lê do mesmo lugar.

## 12. Por que este desenho

Cada componente vem de um padrão estabelecido e citável: event sourcing, I-PASS, Y-statement, o
comportamento documentado do OneDrive em edição simultânea. **A combinação deles para handoff entre
sessões de agente é desenho da ACTA**: não existe padrão de mercado consolidado para essa camada.
O racional item a item está em [references/por-que-este-desenho.md](por-que-este-desenho.md).
