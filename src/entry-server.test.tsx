import { describe, expect, it } from 'vitest'
import { render } from './entry-server'

describe('pré-renderização', () => {
  it('gera HTML e metatags da página inicial', () => {
    const result = render('/')
    expect(result.status).toBe(200)
    expect(result.html).toContain('Tecnologia inteligente para')
    expect(result.head).toContain('<title>LVG Sistemas e Automações — Tecnologia inteligente para simplificar negócios</title>')
    expect(result.head).toContain('og:title')
  })

  it('gera metatags específicas por produto', () => {
    const result = render('/solucoes/frotas')
    expect(result.head).toContain('LVG Frotas — Sistema de gestão de frotas mistas')
    expect(result.head).toContain('/solucoes/frotas" />')
  })

  it('marca rotas inexistentes como 404 e noindex', () => {
    const result = render('/nao-existe')
    expect(result.status).toBe(404)
    expect(result.head).toContain('noindex')
  })
})
