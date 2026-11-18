/**
 * Configuração institucional central do site.
 * Edite aqui nome, slogan, domínio e navegação — o restante do site lê estes valores.
 */

const PLACEHOLDER_SITE_URL = 'https://www.example.com'

/**
 * URL pública do site (sem barra final).
 * Defina VITE_SITE_URL no ambiente de build (ex.: Cloudflare Pages) quando o domínio for definido.
 * Ela é usada em links canônicos, Open Graph, sitemap.xml e robots.txt.
 */
const siteUrl = (import.meta.env.VITE_SITE_URL || PLACEHOLDER_SITE_URL).replace(/\/+$/, '')

export const site = {
  name: 'LVG Sistemas e Automações',
  shortName: 'LVG',
  legalName: 'LVG Sistemas e Automações',
  slogan: 'Tecnologia inteligente para simplificar negócios.',
  description:
    'A LVG Sistemas e Automações desenvolve sistemas de gestão SaaS e automações empresariais que tornam os processos mais simples, organizados e eficientes.',
  url: siteUrl,
  /** true enquanto o domínio definitivo não for configurado. */
  isPlaceholderUrl: siteUrl === PLACEHOLDER_SITE_URL,
  locale: 'pt_BR',
  language: 'pt-BR',
  themeColor: '#123C5A',
  ogImage: '/og/lvg-og.png',
  logo: {
    /** Logo completa (monograma + "Sistemas e Automações"). Substitua o arquivo mantendo o nome. */
    full: '/brand/lvg-logo.webp',
    fullFallback: '/brand/lvg-logo.png',
    /** Proporção largura/altura do arquivo da logo completa — atualize ao trocar o arquivo. */
    fullAspectRatio: 720 / 230,
  },
} as const

export interface NavItem {
  label: string
  to: string
}

export const mainNav: NavItem[] = [
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Automações', to: '/automacoes' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]
