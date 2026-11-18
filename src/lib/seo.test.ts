import { describe, expect, it } from 'vitest'
import { site } from '@/config/site'
import { absoluteUrl, applyMetaToDocument, formatTitle, renderHeadTags } from './seo'

describe('SEO', () => {
  it('acrescenta o nome da marca apenas quando necessário', () => {
    expect(formatTitle('Contato')).toBe(`Contato | ${site.name}`)
    expect(formatTitle('LVG Frotas — Gestão')).toBe('LVG Frotas — Gestão')
  })

  it('gera URLs absolutas a partir do domínio configurado', () => {
    expect(absoluteUrl('/')).toBe(site.url)
    expect(absoluteUrl('/sobre')).toBe(`${site.url}/sobre`)
    expect(absoluteUrl('https://cdn.test/a.png')).toBe('https://cdn.test/a.png')
  })

  it('escapa conteúdo e inclui canonical, Open Graph e robots', () => {
    const head = renderHeadTags({ title: 'A & B', description: 'Texto "citado" <b>', path: '/x', noindex: true })
    expect(head).toContain('<title>A &amp; B | ')
    expect(head).toContain('content="Texto &quot;citado&quot; &lt;b&gt;"')
    expect(head).toContain(`<link rel="canonical" href="${site.url}/x" />`)
    expect(head).toContain('property="og:image"')
    expect(head).toContain('content="noindex, follow"')
  })

  it('atualiza o <head> sem duplicar tags', () => {
    applyMetaToDocument({ title: 'Primeira', description: 'Um', path: '/a' })
    applyMetaToDocument({ title: 'Segunda', description: 'Dois', path: '/b' })
    expect(document.title).toBe(`Segunda | ${site.name}`)
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1)
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${site.url}/b`)
  })
})
