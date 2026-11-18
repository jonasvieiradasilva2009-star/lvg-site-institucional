/**
 * Configuração institucional central do site.
 * Edite aqui nome, slogan, domínio e navegação — o restante do site lê estes valores.
 */

const PLACEHOLDER_SITE_URL = 'https://www.example.com'

/** Domínio oficial do site. */
const DEFAULT_SITE_URL = 'https://lvgsistemas.com.br'

/**
 * URL pública do site (sem barra final).
 * Usa o domínio oficial; pode ser sobrescrita pela variável VITE_SITE_URL no build.
 * Ela é usada em links canônicos, Open Graph, sitemap.xml e robots.txt.
 */
const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')

export const site = {
  name: 'LVG Sistemas e Automações',
  shortName: 'LVG',
  legalName: 'LVG Sistemas e Automações',
  slogan: 'Tecnologia inteligente para simplificar negócios.',
  description:
    'A LVG Sistemas e Automações desenvolve sistemas de gestão SaaS e automações empresariais que tornam os processos mais simples, organizados e eficientes.',
  url: siteUrl,
  /** true se o domínio provisório estiver em uso. */
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
