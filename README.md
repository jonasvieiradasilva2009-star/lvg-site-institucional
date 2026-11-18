# LVG Sistemas e Automações — Site institucional

Site institucional da **LVG Sistemas e Automações**: *Tecnologia inteligente para simplificar negócios.*

React + TypeScript + Vite + Tailwind CSS (componentes no padrão shadcn/ui), com **pré-renderização estática**:
cada página é gerada como HTML completo no build (conteúdo, título, descrição e Open Graph), o que garante
carregamento rápido e indexação correta pelo Google e pelas redes sociais. Depois de carregado, o site
navega como SPA.

## Sumário

- [Requisitos](#requisitos)
- [Instalar e rodar localmente](#instalar-e-rodar-localmente)
- [Build e verificação](#build-e-verificação)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como editar informações comerciais](#como-editar-informações-comerciais)
- [Como adicionar um novo SaaS](#como-adicionar-um-novo-saas)
- [Como substituir a logo](#como-substituir-a-logo)
- [Como configurar o domínio](#como-configurar-o-domínio)
- [Como publicar na Cloudflare](#como-publicar-na-cloudflare)
- [SEO, acessibilidade e segurança](#seo-acessibilidade-e-segurança)
- [Pendências antes da publicação](#pendências-antes-da-publicação)

## Requisitos

- Node.js **20.19+** (recomendado: 22 — ver `.node-version`)
- npm 10+

## Instalar e rodar localmente

```bash
npm install
npm run dev
```

Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Build e verificação

| Comando | O que faz |
| --- | --- |
| `npm run build` | Checagem de tipos + build de produção + pré-renderização em `dist/` |
| `npm run preview` | Serve o conteúdo de `dist/` localmente (`http://localhost:4173`) |
| `npm run lint` | Análise estática (oxlint) |
| `npm test` | Testes automatizados (Vitest + Testing Library) |
| `npm run check` | Lint + testes + build, em sequência |

O build gera em `dist/`:

- um HTML por rota (`index.html`, `solucoes.html`, `solucoes/frotas.html`, …);
- `404.html` para endereços inexistentes;
- `sitemap.xml` e `robots.txt`;
- `_headers` com cabeçalhos de segurança e cache.

Ao final do build, o terminal lista **pendências de configuração** (domínio e dados de contato ainda não preenchidos).

## Estrutura do projeto

```
src/
├── config/
│   ├── site.ts          # nome, slogan, domínio, navegação, caminho da logo
│   └── contact.ts       # WhatsApp, e-mail, Instagram, horário, área de atendimento
├── data/
│   ├── products.ts      # catálogo de soluções SaaS (gera páginas, cartões e sitemap)
│   └── automations.ts   # frentes de automação
├── components/
│   ├── brand/           # Logo e ícones de marca
│   ├── layout/          # Header, Footer, menu mobile, layout base
│   ├── sections/        # blocos reutilizáveis (Section, PageHero, CtaBanner, Faq…)
│   ├── products/        # cartão de produto, selo de estágio, visual por produto
│   ├── visuals/         # ilustrações de interface (dashboard, fluxos, mockups)
│   ├── seo/             # componente <Seo /> (metatags por página)
│   └── ui/              # componentes base no padrão shadcn/ui (Button, Badge, Sheet)
├── pages/               # uma página por rota
├── lib/                 # utilitários (SEO, contato, interesse)
├── styles/index.css     # tokens de design (cores, fontes, sombras) e estilos globais
├── App.tsx              # mapa de rotas
├── main.tsx             # entrada do navegador (hidratação)
└── entry-server.tsx     # entrada da pré-renderização
scripts/prerender.mjs    # gera HTML estático, 404, sitemap e robots
public/                  # arquivos servidos como estão (logo, ícones, imagem OG, _headers)
brand/                   # arquivos-fonte da marca (não publicados)
```

### Tokens de design

As cores oficiais e suas variações de contraste ficam em `src/styles/index.css` (bloco `@theme`) e viram classes
Tailwind automaticamente — por exemplo `bg-petrol`, `text-digital-700`, `bg-teal`, `text-graphite`, `bg-mist`.

| Token | Cor | Uso |
| --- | --- | --- |
| `petrol` | `#123C5A` | Azul petróleo — principal |
| `digital` | `#1E88E5` | Azul digital — destaque |
| `teal` | `#19B39B` | Verde-teal — secundária |
| `graphite` | `#2B2F33` | Texto principal |
| `mist` | `#E9EEF2` | Cinza claro |
| `ink` | `#071A2B` | Fundos azul-marinho profundos |

Variações como `digital-600`, `digital-700` e `teal-700` existem para garantir contraste AA em textos e botões.
Tipografia: **Sora** (títulos) e **Inter** (textos), servidas pelo próprio site (sem dependência do Google Fonts).

## Como editar informações comerciais

### Dados de contato

Edite **somente** `src/config/contact.ts`:

```ts
export const contact: ContactConfig = {
  whatsapp: {
    number: '5511999999999',          // somente dígitos, com DDI e DDD
    display: '(11) 99999-9999',       // como aparece no site
    defaultMessage: 'Olá! Gostaria de conhecer as soluções da LVG Sistemas e Automações.',
  },
  email: 'contato@seudominio.com.br',
  instagram: { handle: 'perfil' },    // sem @
  serviceArea: 'Atendimento remoto para todo o Brasil',
  businessHours: 'Segunda a sexta, das 8h às 18h',
  cnpj: null,                          // opcional
}
```

Enquanto um campo estiver `null`, o site mostra **"A definir"** e **não cria links** (nenhum botão aponta para
número ou e-mail inexistente). Ao preencher, os botões de WhatsApp, e-mail e Instagram passam a funcionar no
rodapé e na página de contato. A página de contato preenche a mensagem do WhatsApp e o assunto do e-mail de acordo
com o assunto escolhido (ex.: `/contato?interesse=frotas`).

> O site não possui formulário de contato, de propósito: não há mecanismo de envio nesta versão.

### Textos institucionais

- Nome, slogan e descrição padrão: `src/config/site.ts`
- Itens do menu: `mainNav` em `src/config/site.ts`
- Textos das páginas: arquivos em `src/pages/`
- Frentes de automação: `src/data/automations.ts`

### Estágio de um produto

Em `src/data/products.ts`, altere `status` para `'disponivel'`, `'beta'`, `'em-desenvolvimento'` ou `'planejado'`.
O selo, as chamadas para ação, o aviso da página e o texto dos botões se ajustam automaticamente
(textos definidos em `productStatusMeta`).

## Como adicionar um novo SaaS

1. Abra `src/data/products.ts` e adicione um objeto ao array `products` (use um produto existente como modelo).
   Campos principais:
   - `slug` — define a URL (`/solucoes/{slug}`); use letras minúsculas e hífens;
   - `name`, `category`, `icon` (qualquer ícone de [Lucide](https://lucide.dev/icons/));
   - `status` — estágio comercial;
   - `accent` — identidade visual secundária (cor, fundo suave, cor de texto com contraste e gradiente);
   - `tagline`, `summary`, `description`, `audience`, `benefits`, `features`, `highlight`, `problem`, `steps`, `faq`;
   - `seo.title` (até ~70 caracteres) e `seo.description` (70 a 170 caracteres).
2. Pronto. Automaticamente o produto ganha: página própria, cartão no catálogo e na página inicial, link no menu
   mobile e no rodapé, entrada no `sitemap.xml`, metatags e pré-renderização.
3. (Opcional) Para uma demonstração visual dedicada, crie um componente em `src/components/visuals/` e registre-o
   em `src/components/products/ProductVisual.tsx` usando o `slug` como chave. Sem isso, um visual genérico com as
   cores do produto é usado.
4. Rode `npm test` — os testes validam slugs, conteúdo mínimo e tamanho das metatags de cada produto.

## Como substituir a logo

A logo é exibida pelo componente `src/components/brand/Logo.tsx`, que lê os caminhos de `src/config/site.ts`.

1. Substitua os arquivos em `public/brand/` mantendo os nomes:
   - `lvg-logo.webp` (principal) e `lvg-logo.png` (alternativa), com fundo transparente;
   - recomenda-se ~720 px de largura para boa nitidez em telas de alta densidade.
2. Se a proporção (largura ÷ altura) mudar, atualize `site.logo.fullAspectRatio` em `src/config/site.ts`.
3. Se preferir SVG, aponte `site.logo.full` e `site.logo.fullFallback` para o arquivo `.svg`.
4. Atualize também, se desejar:
   - favicons: `public/favicon.ico`, `public/icons/*.png`;
   - imagem de compartilhamento (1200×630): `public/og/lvg-og.png`.

> A versão atual foi extraída do arquivo de logo enviado (apenas com as margens transparentes recortadas — sem
> redesenho). Os favicons usam um recorte das letras "LVG" desse mesmo arquivo. Substitua pelos arquivos oficiais
> em alta resolução quando estiverem disponíveis.

## Como configurar o domínio

1. O domínio oficial (`https://lvgsistemas.com.br`) já está definido em `DEFAULT_SITE_URL`, em
   `src/config/site.ts`. Para usar outro endereço, altere esse valor ou defina a variável de ambiente
   **`VITE_SITE_URL`** (sem barra final):
   - localmente: copie `.env.example` para `.env` e ajuste;
   - no Cloudflare Pages: *Settings → Variables and Secrets* (para Produção e Preview).
2. Gere um novo build. Canonical, Open Graph, `sitemap.xml` e `robots.txt` passam a usar o domínio informado,
   e os dados estruturados da organização (JSON-LD) são incluídos na página inicial — eles ficam desativados
   enquanto o domínio for provisório.
3. No Cloudflare Pages: *Custom domains → Set up a custom domain* e siga as instruções de DNS.
   (Alteração de DNS deve ser feita por quem administra o domínio.)
4. Após publicar, cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie
   `https://www.seudominio.com.br/sitemap.xml`.

## Como publicar na Cloudflare

O projeto funciona tanto como **Worker com arquivos estáticos** (configurado em `wrangler.jsonc`) quanto como
**Pages**. Use a opção correspondente ao tipo de projeto criado no painel.

### Worker com arquivos estáticos (Workers Builds)

Configuração em *Settings → Build* do Worker:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Variáveis de build:** `VITE_SITE_URL=https://www.seudominio.com.br` (e, se necessário, `NODE_VERSION=22`)

O `wrangler.jsonc` publica a pasta `dist`, serve `/sobre` a partir de `sobre.html`, redireciona `/sobre/` para
`/sobre` e responde `404.html` com status 404 para endereços inexistentes. Os arquivos `_headers` também são aplicados.

Para testar localmente exatamente como na Cloudflare:

```bash
npm run build
npx wrangler dev
```

### Pages

#### Opção A — integração com GitHub (recomendada)

1. Envie este projeto para um repositório no GitHub:
   ```bash
   git remote add origin git@github.com:SUA-CONTA/lvg-site.git
   git push -u origin main
   ```
2. No painel da Cloudflare: *Workers & Pages → Create → Pages → Connect to Git* e selecione o repositório.
3. Configuração de build:
   - **Framework preset:** None (ou Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Variáveis de ambiente:** `NODE_VERSION=22` e `VITE_SITE_URL=https://www.seudominio.com.br`
4. Salve e faça o deploy. Cada push na branch principal publica automaticamente; outras branches geram
   URLs de pré-visualização.

#### Opção B — upload direto pela linha de comando

```bash
npm run build
npx wrangler pages deploy dist --project-name lvg-site
```

### Comportamento esperado

- `/solucoes` é servido a partir de `solucoes.html` (URLs sem extensão e sem barra final).
- `/sobre/` redireciona para `/sobre`.
- Endereços inexistentes recebem `404.html` com status HTTP 404.
- `public/_headers` aplica cabeçalhos de segurança (CSP, HSTS, X-Frame-Options, etc.) e cache longo para `/assets/*`.
  Se for adicionar serviços externos (ex.: analytics, chat, mapas), inclua os domínios correspondentes na
  `Content-Security-Policy` desse arquivo.

## SEO, acessibilidade e segurança

- HTML pré-renderizado por rota com `<title>`, meta description, canonical, Open Graph e Twitter Card específicos.
- `sitemap.xml`, `robots.txt`, `404.html` com `noindex`.
- Estrutura semântica (um `h1` por página, landmarks, trilha de navegação), link "Pular para o conteúdo",
  foco visível, contraste AA, menu mobile acessível (Radix Dialog), respeito a "reduzir movimento".
- Animações de entrada via CSS (scroll-driven), sem JavaScript adicional e com fallback estático.
- Fontes servidas localmente, com pré-carregamento das variantes latinas.
- Sem formulários, cookies, rastreadores ou dependências de terceiros em tempo de execução.

## Pendências antes da publicação

- [x] WhatsApp, Instagram, área e horário de atendimento em `src/config/contact.ts`.
- [ ] E-mail comercial em `src/config/contact.ts` (campo `email`).
- [x] Domínio oficial (`https://lvgsistemas.com.br`) definido em `src/config/site.ts`.
- [x] Domínio `lvgsistemas.com.br` conectado ao Worker na Cloudflare (*Settings → Domains & Routes → Custom domain*).
- [ ] `www.lvgsistemas.com.br` redirecionando para `lvgsistemas.com.br`: registro DNS `AAAA www 100::` com proxy
      ativado e a regra de redirecionamento "Redirect from WWW to root" (*Rules → Redirect Rules*).
- [ ] Arquivos oficiais da logo e do favicon em alta resolução (opcional, mas recomendado).
- [ ] Revisão final dos textos comerciais e do estágio de cada produto.
