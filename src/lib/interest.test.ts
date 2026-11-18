import { describe, expect, it } from 'vitest'
import { contactHref, getInterest } from './interest'

describe('interesse de contato', () => {
  it('resolve produtos do catálogo e frentes extras', () => {
    expect(getInterest('frotas')?.label).toBe('LVG Frotas')
    expect(getInterest('delivery')?.message).toContain('LVG Delivery')
    expect(getInterest('automacoes')?.label).toBe('Automações empresariais')
  })

  it('ignora valores desconhecidos ou vazios', () => {
    expect(getInterest('inexistente')).toBeNull()
    expect(getInterest(null)).toBeNull()
    expect(getInterest('')).toBeNull()
  })

  it('gera o link da página de contato', () => {
    expect(contactHref()).toBe('/contato')
    expect(contactHref('frotas')).toBe('/contato?interesse=frotas')
  })
})
