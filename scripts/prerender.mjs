/**
 * Pré-renderização estática.
 * Gera um HTML completo (conteúdo + metatags) para cada rota, além de 404.html,
 * sitemap.xml e robots.txt. Executado automaticamente por `npm run build`.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')
const { render, getPrerenderRoutes, site, missingContactFields } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const HEAD_BLOCK = /<!--app-head-->[\s\S]*?<!--\/app-head-->/

// Pré-carrega as fontes latinas (Inter e Sora) usadas acima da dobra.
const assetFiles = await fs.readdir(path.join(distDir, 'assets'))
const fontPreloads = assetFiles
  .filter((file) => /^(inter|sora)-latin-wght-normal-.*\.woff2$/.test(file))
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

function organizationJsonLd() {
  // Dados estruturados apenas quando o domínio oficial estiver configurado.
  if (site.isPlaceholderUrl) return ''
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.logo.fullFallback}`,
    slogan: site.slogan,
  }
  return `\n    <script type="application/ld+json">${JSON.stringify(data)}</script>`
}

function buildPage(route) {
  const { html, head, status } = render(route)
  const extraHead = route === '/' ? organizationJsonLd() : ''
  const page = template.replace(HEAD_BLOCK, `${fontPreloads}\n    ${head}${extraHead}`).replace('<!--app-html-->', html)
  return { page, status }
}

function outputFile(route) {
  return route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`
}

const routes = getPrerenderRoutes()
for (const route of routes) {
  const { page, status } = buildPage(route)
  if (status !== 200) throw new Error(`Rota ${route} retornou status ${status} na pré-renderização.`)
  const file = path.join(distDir, outputFile(route))
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, page)
  console.log(`  ✓ ${route.padEnd(22)} → ${path.relative(root, file)}`)
}

// Página 404 (Cloudflare Pages a serve automaticamente para rotas inexistentes).
const notFound = buildPage('/__pagina-inexistente__')
if (notFound.status !== 404) throw new Error('A página 404 não foi renderizada corretamente.')
await fs.writeFile(path.join(distDir, '404.html'), notFound.page)
console.log(`  ✓ ${'(404)'.padEnd(22)} → dist/404.html`)

// sitemap.xml
const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${site.url}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route === '/' ? '1.0' : route.split('/').length > 2 ? '0.8' : '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap)

// robots.txt
await fs.writeFile(
  path.join(distDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
)
console.log('  ✓ sitemap.xml e robots.txt gerados')

await fs.rm(ssrDir, { recursive: true, force: true })

// Avisos de configuração pendente
const warnings = []
if (site.isPlaceholderUrl) {
  warnings.push('VITE_SITE_URL não definido: canonical, Open Graph e sitemap usam o domínio provisório https://www.example.com.')
}
const missing = missingContactFields()
if (missing.length) warnings.push(`Dados de contato pendentes em src/config/contact.ts: ${missing.join(', ')}.`)
if (warnings.length) {
  console.warn('\n⚠️  Pendências antes da publicação:')
  for (const warning of warnings) console.warn(`   - ${warning}`)
}
console.log(`\nPré-renderização concluída: ${routes.length} páginas + 404.`)
