import { buildWhatsAppUrl } from '@/lib/contact'
import { contactHref, getInterest } from '@/lib/interest'
import type { Product } from '@/types/product'

/** Link de dúvidas sobre um produto: WhatsApp quando configurado, senão a página de contato. */
export function productQuestionsLink(product: Product): { to: string; label: string; newTab: boolean } {
  const whatsapp = buildWhatsAppUrl(getInterest(product.slug)?.message)
  return whatsapp
    ? { to: whatsapp, label: 'Tirar dúvidas no WhatsApp', newTab: true }
    : { to: contactHref(product.slug), label: 'Tirar dúvidas com a LVG', newTab: false }
}
