# Publicar o portal

Passo a passo para colocar `site/` no ar no Cloudflare Pages, protegido por Cloudflare Access. Tudo
no plano gratuito.

A justificativa das escolhas está em [PLATAFORMA.md](PLATAFORMA.md) seção 4. Aqui é só execução.

**Em duas fases.** A fase 1 põe o portal no ar hoje, com login por código enviado por e-mail e sem
depender de ninguém do Microsoft 365. A fase 2 troca esse login pelo SSO corporativo quando fizer
sentido. A fase 1 não é rascunho — é configuração completa e segura, só com um método de
autenticação mais simples.

---

## Os dois logins, que são coisas diferentes

| | Quem usa | O que é |
|---|---|---|
| **Login no painel da Cloudflare** | você, administrando | a conta que configura Pages e Access |
| **Login no portal** | todo consultor que abrir o site | Cloudflare Access na frente do site |

Os dois são independentes. Você entra no painel pelo GitHub; o consultor entra no portal por outro
caminho, definido abaixo.

### Sobre entrar no painel pelo GitHub

Funciona e é legítimo. Uma consequência que vale saber: **a segurança da conta Cloudflare passa a
ser a segurança da sua conta GitHub.** Quem entrar no seu GitHub entra na Cloudflare.

Então, antes de seguir: confirme que o **2FA está ativo no GitHub**
(Settings → Password and authentication). É o que protege as duas coisas agora.

Não é preciso configurar SSO no painel da Cloudflare. Ele existe e é gratuito, mas força SSO para
todos os usuários do domínio de e-mail e tem risco real de trancar o administrador para fora — só
compensa quando várias pessoas administram. Ver a seção 6.

---

# Fase 1 — no ar hoje

## 1. Criar o projeto no Pages

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
5. Você recebe uma URL `https://<projeto>.pages.dev`.

> **Neste momento a URL é pública.** A proteção vem no passo 3. Não divulgue ainda.

## 2. Criar a organização Zero Trust e ligar o login por código

1. No painel, vá em **Zero Trust**. Na primeira vez ele pede para **escolher um nome de equipe**
   (o `team name`) e um plano — escolha o **Free**. Pode pedir cartão para verificação; o plano
   gratuito não cobra.
2. Vá em **Zero Trust → Integrations → Identity providers → Add new identity provider**.
3. Escolha **One-time PIN**.

   > Organizações Zero Trust novas **não** vêm mais com o One-time PIN ligado por padrão. Este passo
   > é necessário, não opcional.

Não há mais nada a configurar: o método envia um código de seis dígitos para o e-mail de quem tenta
entrar, e só envia para endereços que a política do passo 3 autorizar.

## 3. Proteger o portal

1. **Zero Trust → Access → Applications → Add an application → Self-hosted**.
2. Preencha:

   | Campo | Valor |
   |---|---|
   | Application name | `Portal de Conhecimento` |
   | Session duration | 24 horas (ajuste ao gosto) |
   | Domain | o domínio do portal — ver seção 4 |

3. Em **Identity providers**, deixe marcado o **One-time PIN**.
4. Crie a política:

   | Campo | Valor |
   |---|---|
   | Policy name | `Equipe ACTA` |
   | Action | Allow |
   | Include → Selector | **Emails ending in** |
   | Value | `@acta.com.br` |

   Assim, só quem tem e-mail do domínio recebe o código. Ninguém de fora consegue nem solicitar.

5. **Save.**

Teste numa janela anônima: abrir a URL deve pedir o e-mail, enviar um código, e só então mostrar o
site.

> **Só considere o portal protegido depois desse teste.** Enquanto a política não estiver aplicada
> ao domínio certo, o `.pages.dev` continua aberto.

### Se o código não chegar

O e-mail sai de `noreply@notify.cloudflare.com`. Se o gateway de e-mail da ACTA bloquear, filtrar ou
atrasar, **o login falha sem mensagem de erro** — a tela sempre diz que o código foi enviado, mesmo
quando não foi. Peça a quem administra o e-mail para liberar:

- domínio remetente `notify.cloudflare.com`
- endereço `noreply@notify.cloudflare.com`
- os IPs `104.30.16.2` a `104.30.16.7`

O código expira em **10 minutos**.

> A tela dizer "um código foi enviado" **não** significa que foi. Por desenho, usuário bloqueado vê
> exatamente a mesma mensagem de quem recebeu. Ao diagnosticar, não confie nela: confirme na
> política se o e-mail está autorizado.

## 4. Domínio

O Access precisa de um domínio para aplicar a política. Duas opções:

**A. Proteger o `.pages.dev` direto** — é o caminho da fase 1. Use o domínio que o Pages gerou como
o `Domain` da aplicação Access. Serve para validar tudo antes de mexer em DNS corporativo.

**B. Subdomínio de `acta.com.br`** — o certo a longo prazo, mas exige apontar o DNS de `acta.com.br`
para a Cloudflare, o que é decisão de infraestrutura da firma. Feito isso, crie
`conhecimento.acta.com.br` em **Workers & Pages → seu projeto → Custom domains** e troque o domínio
na aplicação do Access.

Comece pela A. Migre para a B quando o portal provar que serve.

---

# Fase 2 — trocar para o SSO corporativo

Faça quando quiser que o acesso seja governado pelo diretório da firma, e não por uma lista de
e-mails. O ganho concreto: **quem sai da ACTA perde o acesso ao sair do Entra ID**, sem ninguém
precisar lembrar de revogar nada aqui.

Requer permissão para registrar aplicação no Entra ID da ACTA. Se você não tem, quem administra o
Microsoft 365 faz a parte 2.1.

## 2.1 No portal do Entra (Microsoft)

1. Entre no [Microsoft Entra admin center](https://entra.microsoft.com).
2. **Applications → Enterprise applications → New application → Create your own application**.
3. Dê um nome (`Portal de Conhecimento ACTA`).
4. Escolha **"Register an application to integrate with Microsoft Entra ID"**. Não escolha
   aplicação de galeria.
5. Em **Redirect URI**, plataforma **Web**:

   ```
   https://<nome-da-equipe>.cloudflareaccess.com/cdn-cgi/access/callback
   ```

   O `<nome-da-equipe>` é o que você escolheu no passo 2 da fase 1.

6. **Register.**
7. Em **App registrations → All applications**, abra a aplicação e copie:
   - **Application (client) ID**
   - **Directory (tenant) ID**
8. Em **Client credentials → New client secret**: dê um nome, escolha a validade, e **copie o campo
   Value imediatamente** — ele só aparece uma vez.

   > **Anote a data de expiração.** Quando o segredo vence, todo mundo para de conseguir entrar e a
   > causa não é óbvia. Lembrete no calendário um mês antes.

## 2.2 Permissões de API

1. Na aplicação: **API permissions → Add a permission → Microsoft Graph → Delegated permissions**.
2. Habilite exatamente estas sete:

   ```
   email            offline_access   openid          profile
   User.Read        Directory.Read.All              GroupMember.Read.All
   ```

3. **Add permissions**, depois **Grant admin consent**. Sem o consentimento, o login falha.

## 2.3 Na Cloudflare

1. **Zero Trust → Integrations → Identity providers → Add new**.
2. Escolha **Azure AD** (nome antigo do Entra ID na interface).
3. Cole o **Application (client) ID**, o **Client secret** e o **Directory (tenant) ID**.
4. Marque **Support Groups** se quiser políticas por grupo do Entra depois.
5. **Save**, e então **Test**. Abre o login da Microsoft: voltando com sucesso, está certo.

## 2.4 Desligar o One-time PIN

Na aplicação do Access, em **Identity providers**: marque **Azure AD** e **desmarque o One-time PIN**.

**Este passo não é opcional, e é o único lugar deste guia onde a orientação se inverte entre as duas
fases.** Na fase 1 o PIN é o método de login. Na fase 2 ele vira uma **porta paralela**: se ficar
ligado junto com o Entra ID, qualquer pessoa com e-mail do domínio entra por código sem passar pelo
diretório — e alguém já desligado no Entra continuaria entrando enquanto tivesse acesso ao e-mail.
Isso anula o motivo de ter feito a fase 2.

A regra geral: **um método de autenticação ativo por vez.** O PIN sozinho é seguro; o PIN ao lado do
diretório é um desvio.

---

## 5. Depois de publicado

**Cada push na `master` gera um deploy novo automaticamente.** Não há passo manual.

| Sintoma | Causa provável | Solução |
|---|---|---|
| Plugin novo não aparece no portal | Não está no `marketplace.json` | O catálogo é derivado: publique o plugin e o site se atualiza no próximo build |
| Build falhou | Erro de dependência ou sintaxe | Ver o log em Workers & Pages → Deployments |
| Página em branco ou 404 geral | `Root directory` não está como `site` | Corrigir nas configurações de build e reprocessar |
| Ninguém recebe o código de login | Gateway de e-mail bloqueando | Liberar `notify.cloudflare.com` (ver fase 1, passo 3) |
| Todo mundo perdeu o acesso de uma vez (fase 2) | Client secret do Entra expirou | Gerar novo segredo no Entra e atualizar na Cloudflare |

## 6. SSO no painel da Cloudflare

Gratuito em todos os planos, com domínio de e-mail próprio. Três razões para não fazer agora:

1. **Força SSO para todos os usuários do domínio**, não só para você.
2. **Risco de trancar-se para fora.** A documentação manda criar antes um token de API com a função
   *SSO Connector Edit* e guardá-lo, justamente como plano de recuperação.
3. **Só compensa com várias pessoas administrando.** Com uma ou duas, conta comum com 2FA tem menos
   peça móvel para quebrar.

---

## O que é preciso ter em mãos

**Fase 1:** acesso de administrador ao repositório no GitHub, 2FA ativo no GitHub, e uns 15 minutos.

**Fase 2:** permissão para registrar aplicação no Entra ID da ACTA, ou quem administra o Microsoft
365 por perto.
