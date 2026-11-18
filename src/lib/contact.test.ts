import { describe, expect, it } from 'vitest'
import type { ContactConfig } from '@/config/contact'
import { buildEmailUrl, buildInstagramUrl, buildWhatsAppUrl, missingContactFields } from './contact'

const empty: ContactConfig = {
  whatsapp: { number: null, display: null, defaultMessage: 'Olá!' },
  email: null,
  instagram: { handle: null },
  serviceArea: null,
  businessHours: null,
  cnpj: null,
}

const filled: ContactConfig = {
  ...empty,
  whatsapp: { number: '+55 (11) 90000-0000', display: '(11) 90000-0000', defaultMessage: 'Olá!' },
  email: 'contato@empresa.test',
  instagram: { handle: '@empresa' },
  serviceArea: 'Brasil',
  businessHours: 'Seg a sex',
}

describe('links de contato', () => {
  it('não gera links quando os dados não estão configurados', () => {
    expect(buildWhatsAppUrl(undefined, empty)).toBeNull()
    expect(buildEmailUrl('Assunto', empty)).toBeNull()
    expect(buildInstagramUrl(empty)).toBeNull()
  })

  it('monta o link do WhatsApp apenas com dígitos e mensagem codificada', () => {
    expect(buildWhatsAppUrl('Olá, LVG!', filled)).toBe('https://wa.me/5511900000000?text=Ol%C3%A1%2C%20LVG!')
    expect(buildWhatsAppUrl(undefined, filled)).toBe('https://wa.me/5511900000000?text=Ol%C3%A1!')
  })

  it('monta mailto com assunto e link do Instagram sem @', () => {
    expect(buildEmailUrl('Interesse no LVG Frotas', filled)).toBe(
      'mailto:contato@empresa.test?subject=Interesse%20no%20LVG%20Frotas',
    )
    expect(buildInstagramUrl(filled)).toBe('https://www.instagram.com/empresa/')
  })

  it('lista os campos pendentes', () => {
    expect(missingContactFields(empty)).toEqual([
      'whatsapp.number',
      'whatsapp.display',
      'email',
      'instagram.handle',
      'serviceArea',
      'businessHours',
    ])
    expect(missingContactFields(filled)).toEqual([])
  })
})
