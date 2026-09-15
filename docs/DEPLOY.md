# Publicar o portal

Passo a passo para colocar `site/` no ar no Cloudflare. Plano gratuito, sem cartão, sem
autenticação — o portal é uma vitrine pública do catálogo e da metodologia já anonimizada.

A justificativa das escolhas está em [PLATAFORMA.md](PLATAFORMA.md) seção 4. Aqui é só execução.

**Não há segunda fase de autenticação.** O repositório fonte continua privado no GitHub — só quem
tem acesso a ele consegue mudar o conteúdo. O que é publicado no site já passou pelo validador
(`scripts/validar-skills.py`), que barra nome de cliente e de pessoa. Não existe login de portal
porque não existe, no portal, nada que dependa de quem está lendo.

### Sobre entrar no painel da Cloudflare pelo GitHub

Funciona e é legítimo. Uma consequência que vale saber: **a segurança da conta Cloudflare passa a
ser a segurança da sua conta GitHub.** Quem entrar no seu GitHub entra na Cloudflare.

Então, antes de seguir: confirme que o **2FA está ativo no GitHub**
(Settings → Password and authentication). É o que protege as duas coisas.

---

## 1. Criar o projeto

1. Em [dash.cloudflare.com](https://dash.cloudflare.com), já logado pelo GitHub, vá em
   **Workers & Pages → Create → Pages → Connect to Git**.
2. Autorize o app da Cloudflare no GitHub e selecione `acta-sistema-de-conhecimento`.
   O repositório é privado — é essa autorização que dá acesso a ele.
3. Na tela de build, preencha exatamente:

   | Campo | Valor |
   |---|---|
   | Production branch | `master` |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | **Root directory (advanced)** | **`site`** |

   O **Root directory** é o campo que quase sempre se esquece, porque fica atrás de *advanced*. Sem
   ele, o build roda na raiz do repositório, não encontra o `package.json` e falha. Com ele, `dist`
   passa a ser relativo a `site/`.

   > **O fluxo "Workers & Pages" cria um Worker, não um projeto Pages.** É o padrão atual da
   > Cloudflare, e funciona igual para um site estático — mas o comando de deploy passa a ser
   > `npx wrangler versions upload`, que lê o `site/wrangler.toml`. Por isso esse arquivo declara
   > `[assets] directory = "./dist"`, e não a chave `pages_build_output_dir`, que só um projeto Pages
   > entenderia. Se o deploy falhar com *"Missing entry-point to Worker script or to assets
   > directory"*, é essa a causa.

   Como garantia adicional, a **raiz do repositório** tem um `package.json` que instala e builda o
   `site/` e copia a saída para `./dist`. Assim o build funciona mesmo se o Root directory ficar
   vazio.

4. **Save and Deploy.** O primeiro build leva dois ou três minutos.
5. Você recebe uma URL `https://<projeto>.workers.dev` (ou `.pages.dev`, dependendo do fluxo). É a
   URL final — não precisa de mais nenhuma etapa de proteção.

## 2. Domínio (opcional)

A URL gerada pela Cloudflare já serve para uso interno — basta compartilhar o link. Um domínio
próprio (ex.: `conhecimento.acta.com.br`) é só conveniência, não requisito:

1. Aponte o DNS de `acta.com.br` para a Cloudflare (decisão de infraestrutura da firma).
2. Crie `conhecimento.acta.com.br` em **Workers & Pages → seu projeto → Custom domains**.

Não faça isso antes de ter o domínio decidido — a URL padrão já funciona sem ele.

---

## 3. Depois de publicado

**Cada push na `master` gera um deploy novo automaticamente.** Não há passo manual.

| Sintoma | Causa provável | Solução |
|---|---|---|
| Plugin novo não aparece no portal | Não está no `marketplace.json` | O catálogo é derivado: publique o plugin e o site se atualiza no próximo build |
| Build falhou | Erro de dependência ou sintaxe | Ver o log em Workers & Pages → Deployments |
| Página em branco ou 404 geral | `Root directory` não está como `site` | Corrigir nas configurações de build e reprocessar |

---

## O que é preciso ter em mãos

Acesso de administrador ao repositório no GitHub, 2FA ativo no GitHub, e uns 10 minutos. Nenhum
cartão, nenhuma conta adicional.
