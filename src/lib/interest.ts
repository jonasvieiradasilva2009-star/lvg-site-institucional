import { getProduct } from '@/data/products'

export interface Interest {
  key: string
  /** Ex.: "LVG Frotas". */
  label: string
  /** Mensagem sugerida para WhatsApp. */
  message: string
  /** Assunto sugerido para e-mail. */
  subject: string
}

const extraInterests: Record<string, { label: string; phrase: string }> = {
  automacoes: { label: 'Automações empresariais', phrase: 'em automações empresariais' },
  'sob-medida': { label: 'Soluções sob medida', phrase: 'em uma solução digital sob medida' },
}

/** Resolve o parâmetro ?interesse= da página de contato. */
export function getInterest(key: string | null | undefined): Interest | null {
  if (!key) return null
  const product = getProduct(key)
  if (product) {
    return {
      key,
      label: product.name,
      message: `Olá! Tenho interesse no ${product.name} e gostaria de mais informações.`,
      subject: `Interesse no ${product.name}`,
    }
  }
  const extra = extraInterests[key]
  if (extra) {
    return {
      key,
      label: extra.label,
      message: `Olá! Tenho interesse ${extra.phrase} e gostaria de conversar com a LVG.`,
      subject: `Interesse: ${extra.label}`,
    }
  }
  return null
}

export function contactHref(interestKey?: string): string {
  return interestKey ? `/contato?interesse=${encodeURIComponent(interestKey)}` : '/contato'
}
