import { site } from '@/config/site'

export interface PageMeta {
  /** Título específico da página (sem o sufixo da marca). */
  title: string
  description: string
  /** Caminho da rota, ex.: '/solucoes/frotas'. */
  path: string
  noindex?: boolean
  /** Caminho ou URL absoluta da imagem de compartilhamento. */
  image?: string
  imageAlt?: string
}

type TagSpec =
  | { tag: 'meta'; attr: 'name' | 'property'; key: string; content: string }
  | { tag: 'link'; rel: string; href: string }

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  return `${site.url}${normalized}`
}

export function formatTitle(title: string): string {
  return title.includes(site.shortName) ? title : `${title} | ${site.name}`
}

export function buildTagSpecs(meta: PageMeta): TagSpec[] {
  const title = formatTitle(meta.title)
  const url = absoluteUrl(meta.path)
  const image = absoluteUrl(meta.image ?? site.ogImage)
  const imageAlt = meta.imageAlt ?? `${site.name} — ${site.slogan}`

  return [
    { tag: 'meta', attr: 'name', key: 'description', content: meta.description },
    { tag: 'meta', attr: 'name', key: 'robots', content: meta.noindex ? 'noindex, follow' : 'index, follow' },
    { tag: 'link', rel: 'canonical', href: url },
    { tag: 'meta', attr: 'property', key: 'og:type', content: 'website' },
    { tag: 'meta', attr: 'property', key: 'og:site_name', content: site.name },
    { tag: 'meta', attr: 'property', key: 'og:locale', content: site.locale },
    { tag: 'meta', attr: 'property', key: 'og:title', content: title },
    { tag: 'meta', attr: 'property', key: 'og:description', content: meta.description },
    { tag: 'meta', attr: 'property', key: 'og:url', content: url },
    { tag: 'meta', attr: 'property', key: 'og:image', content: image },
    { tag: 'meta', attr: 'property', key: 'og:image:width', content: '1200' },
    { tag: 'meta', attr: 'property', key: 'og:image:height', content: '630' },
    { tag: 'meta', attr: 'property', key: 'og:image:alt', content: imageAlt },
    { tag: 'meta', attr: 'name', key: 'twitter:card', content: 'summary_large_image' },
    { tag: 'meta', attr: 'name', key: 'twitter:title', content: title },
    { tag: 'meta', attr: 'name', key: 'twitter:description', content: meta.description },
    { tag: 'meta', attr: 'name', key: 'twitter:image', content: image },
  ]
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Gera as tags de <head> em HTML (usado na pré-renderização). */
export function renderHeadTags(meta: PageMeta): string {
  const tags = buildTagSpecs(meta).map((spec) =>
    spec.tag === 'meta'
      ? `<meta ${spec.attr}="${spec.key}" content="${escapeHtml(spec.content)}" />`
      : `<link rel="${spec.rel}" href="${escapeHtml(spec.href)}" />`,
  )
  return [`<title>${escapeHtml(formatTitle(meta.title))}</title>`, ...tags].join('\n    ')
}

/** Atualiza o <head> durante a navegação no navegador. */
export function applyMetaToDocument(meta: PageMeta, doc: Document = document): void {
  doc.title = formatTitle(meta.title)
  for (const spec of buildTagSpecs(meta)) {
    if (spec.tag === 'meta') {
      let el = doc.head.querySelector<HTMLMetaElement>(`meta[${spec.attr}="${spec.key}"]`)
      if (!el) {
        el = doc.createElement('meta')
        el.setAttribute(spec.attr, spec.key)
        doc.head.appendChild(el)
      }
      el.setAttribute('content', spec.content)
    } else {
      let el = doc.head.querySelector<HTMLLinkElement>(`link[rel="${spec.rel}"]`)
      if (!el) {
        el = doc.createElement('link')
        el.setAttribute('rel', spec.rel)
        doc.head.appendChild(el)
      }
      el.setAttribute('href', spec.href)
    }
  }
}
