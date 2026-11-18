import { describe, expect, it } from 'vitest'
import { getProduct, products, productStatusMeta } from './products'

describe('catálogo de produtos', () => {
  it('possui slugs únicos e amigáveis para URL', () => {
    const slugs = products.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it.each(products)('$name tem conteúdo comercial completo', (product) => {
    expect(productStatusMeta[product.status]).toBeDefined()
    expect(product.features.length).toBeGreaterThanOrEqual(3)
    expect(product.benefits.length).toBeGreaterThanOrEqual(3)
    expect(product.audience.length).toBeGreaterThanOrEqual(2)
    expect(product.steps.length).toBeGreaterThan(0)
    expect(product.faq.length).toBeGreaterThan(0)
    expect(product.seo.title.length).toBeLessThanOrEqual(70)
    expect(product.seo.description.length).toBeGreaterThanOrEqual(70)
    expect(product.seo.description.length).toBeLessThanOrEqual(170)
  })

  it('encontra produtos pelo slug', () => {
    expect(getProduct('frotas')?.name).toBe('LVG Frotas')
    expect(getProduct('nao-existe')).toBeUndefined()
  })

  it('o LVG Frotas informa alertas a partir de sete dias', () => {
    const text = JSON.stringify(getProduct('frotas'))
    expect(text).toMatch(/sete dias antes/)
  })
})
