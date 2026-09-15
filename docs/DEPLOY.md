# Publicar o portal

Passo a passo para colocar `site/` no ar no Cloudflare Pages, protegido por Cloudflare Access com
login pelo Microsoft Entra ID da firma. Tudo no plano gratuito.

A justificativa dessas escolhas está em [PLATAFORMA.md](PLATAFORMA.md) seção 4. Aqui é só execução.

---

## Os dois logins, que são coisas diferentes

A confusão mais comum antes de começar:

| | Quem usa | O que é | SSO? |
|---|---|---|---|
| **Login no painel da Cloudflare** | você, e quem mais administrar | a conta que configura Pages e Access | Opcional. Ver seção 5 — **comece sem** |
| **Login no portal** | todo consultor que abrir o site | Cloudflare Access na frente do site | **Sim**, é o objetivo. Entra ID |

O SSO que importa é o segundo. O primeiro é a sua conta de administrador e, no começo, uma conta
comum com verificação em duas etapas é mais segura do que SSO mal configurado — porque SSO de painel
mal feito tranca você para fora da própria conta.

---

## 1. Criar a conta e o projeto no Pages

1. Crie uma conta em [dash.cloudflare.com](https://dash.cloudflare.com) com o seu e-mail
   `@acta.com.br`. **Ative a verificação em duas etapas** antes de qualquer outra coisa.
2. No painel, vá em **Workers & Pages → Create → Pages → Connect to Git**.
3. Autorize o GitHub e selecione o repositório `acta-sistema-de-conhecimento`.
   O repositório é privado — a autorização do app da Cloudflare no GitHub é o que dá acesso.
4. Na tela de configuração de build, preencha exatamente:

   | Campo | Valor |
   |---|---|
   | Production branch | `master` |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory (advanced) | `site` |

   O **Root directory** é o campo que quase sempre se esquece. Sem ele, o build roda na raiz do
   repositório, não acha o `package.json` e falha. Com ele, a saída `dist` é relativa a `site/`.

5. **Save and Deploy.** O primeiro build leva dois ou três minutos.
6. Ao terminar, você recebe uma URL `https://<projeto>.pages.dev`. **Ela é pública neste momento** —
   a proteção vem no passo 3. Não divulgue ainda.

---

## 2. Registrar o Entra ID como provedor de identidade

Esta parte é feita nos dois painéis, alternando. Faça na ordem.

### 2.1 No portal do Entra (Microsoft)

Você precisa de permissão para registrar aplicação no diretório da ACTA. Se não tiver, quem
administra o Microsoft 365 faz esta parte.

1. Entre no [Microsoft Entra admin center](https://entra.microsoft.com).
2. **Applications → Enterprise applications → New application → Create your own application**.
3. Dê um nome (por exemplo, `Portal de Conhecimento ACTA`).
4. Escolha **"Register an application to integrate with Microsoft Entra ID"**.
   Não escolha nenhuma aplicação de galeria.
5. Em **Redirect URI**, escolha a plataforma **Web** e informe:

   ```
   https://<nome-da-equipe>.cloudflareaccess.com/cdn-cgi/access/callback
   ```

   O `<nome-da-equipe>` está no painel da Cloudflare em **Zero Trust → Settings → Custom Pages**
   (ou em Team name and domain). Se você ainda não criou a organização Zero Trust, crie agora — é
   grátis e é só escolher o nome da equipe.

6. **Register**.
7. Vá em **Applications → App registrations → All applications** e abra a aplicação criada.
   Copie e guarde:
   - **Application (client) ID**
   - **Directory (tenant) ID**
8. Ainda nela, em **Client credentials → New client secret**: dê um nome, escolha a validade, e
   **copie o campo Value imediatamente** — ele só aparece uma vez.

   > **Anote a data de expiração do segredo.** Quando ele vence, todo mundo para de conseguir entrar
   > no portal, e a causa não é óbvia. Coloque um lembrete no calendário um mês antes.

### 2.2 Permissões de API, ainda no Entra

1. Na aplicação, vá em **API permissions → Add a permission → Microsoft Graph → Delegated
   permissions**.
2. Habilite exatamente estas sete:

   ```
   email            offline_access   openid          profile
   User.Read        Directory.Read.All              GroupMember.Read.All
   ```

3. **Add permissions**, e então **Grant admin consent**. Sem o consentimento, o login falha.

### 2.3 Na Cloudflare

1. No painel, **Zero Trust → Integrations → Identity providers → Add new**.
2. Escolha **Azure AD** (é o nome antigo do Entra ID na interface).
3. Cole o **Application (client) ID**, o **Client secret** e o **Directory (tenant) ID**.
4. Marque **Support Groups** se quiser poder escrever políticas por grupo do Entra depois.
5. **Save**, e então **Test**. O teste abre uma janela de login da Microsoft: se voltar com sucesso,
   está certo.

---

## 3. Proteger o portal com o Access

1. **Zero Trust → Access → Applications → Add an application → Self-hosted**.
2. Preencha:

   | Campo | Valor |
   |---|---|
   | Application name | `Portal de Conhecimento` |
   | Session duration | 24 horas (ajuste ao gosto) |
   | Domain | o domínio do portal (ver seção 4) |

3. Em **Identity providers**, deixe marcado apenas **Azure AD** e **desmarque o One-time PIN**.
   Se deixar o PIN por e-mail ligado, qualquer pessoa com um e-mail que você liberar entra sem passar
   pelo diretório — o que derrota o motivo de usar SSO.
4. Crie a política de acesso:

   | Campo | Valor |
   |---|---|
   | Policy name | `Equipe ACTA` |
   | Action | Allow |
   | Include → Selector | **Emails ending in** |
   | Value | `@acta.com.br` |

   Assim, quem entra é quem tem e-mail do domínio e consegue autenticar no Entra. Quem sai da firma
   perde o acesso ao sair do diretório, sem ninguém precisar lembrar de revogar nada aqui.

5. **Save**.

Teste numa janela anônima: abrir a URL do portal deve levar ao login da Microsoft, e só depois
mostrar o site.

> **Só considere o portal protegido depois desse teste.** Enquanto o Access não estiver aplicado ao
> domínio certo, o `.pages.dev` continua aberto.

---

## 4. Domínio

O Access precisa de um domínio que a Cloudflare controle. Duas opções:

**A. Subdomínio de `acta.com.br`** — o certo a longo prazo. Requer apontar o DNS de `acta.com.br`
para a Cloudflare, o que é decisão de infraestrutura da firma, não só deste projeto. Feito isso,
crie `conhecimento.acta.com.br` em **Workers & Pages → seu projeto → Custom domains**.

**B. Proteger o `.pages.dev` direto** — mais rápido para começar. Em **Zero Trust → Settings →
Authentication**, é possível aplicar política ao domínio `*.pages.dev` do projeto. Serve para
validar tudo antes de mexer no DNS corporativo.

Comece pela B, migre para a A quando o portal provar que serve.

---

## 5. SSO no painel da Cloudflare — depois, não agora

A Cloudflare oferece **Dashboard SSO gratuitamente em todos os planos**, com o seu próprio domínio
de e-mail. É tentador ligar de imediato, mas há três razões para esperar:

1. **Ele força SSO para todos os usuários do domínio de e-mail**, não só para você.
2. **Há risco real de trancar-se para fora.** A própria documentação manda criar antes um token de
   API com a função *SSO Connector Edit* e guardá-lo em lugar seguro, justamente como plano de
   recuperação.
3. **Só compensa quando várias pessoas administram a Cloudflare.** Com uma ou duas, conta comum com
   verificação em duas etapas resolve com menos peça móvel.

Quando fizer sentido, o caminho é: ter a organização Zero Trust criada (já terá), registrar o
domínio `acta.com.br` para SSO, provar a posse com um registro TXT no DNS, e então habilitar — sempre
com o token de recuperação guardado antes.

---

## 6. Depois de publicado

**Cada push na `master` gera um deploy novo automaticamente.** Não há passo manual.

Se o portal parecer desatualizado, a causa quase sempre é uma destas:

| Sintoma | Causa | Solução |
|---|---|---|
| Plugin novo não aparece | Ele não está no `marketplace.json` | O catálogo é derivado: publique o plugin e o site se atualiza |
| Build falhou | Dependência ou erro de sintaxe | Ver o log em Workers & Pages → Deployments |
| Página em branco | `Root directory` não está como `site` | Corrigir nas configurações de build e reprocessar |
| Todo mundo perdeu o acesso de uma vez | O **client secret do Entra expirou** | Gerar novo segredo no Entra e atualizar na Cloudflare |

A última é a que mais assusta e a mais fácil de resolver. Por isso o lembrete no calendário.

---

## Resumo do que é preciso ter em mãos

- Acesso de administrador ao GitHub do repositório, para autorizar a Cloudflare
- Permissão para registrar aplicação no Entra ID da ACTA (ou quem administra o M365 por perto)
- Uma conta Cloudflare com verificação em duas etapas ativa
- Vinte minutos, se as permissões estiverem resolvidas
