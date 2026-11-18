import { contact, type ContactConfig } from '@/config/contact'

/** Texto exibido no lugar de dados ainda não configurados. */
export const PLACEHOLDER_LABEL = 'A definir'

export function buildWhatsAppUrl(message?: string, config: ContactConfig = contact): string | null {
  const digits = config.whatsapp.number?.replace(/\D/g, '')
  if (!digits) return null
  const text = encodeURIComponent(message ?? config.whatsapp.defaultMessage)
  return `https://wa.me/${digits}?text=${text}`
}

export function buildEmailUrl(subject?: string, config: ContactConfig = contact): string | null {
  if (!config.email) return null
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${config.email}${query}`
}

export function buildInstagramUrl(config: ContactConfig = contact): string | null {
  const handle = config.instagram.handle?.replace(/^@/, '').trim()
  return handle ? `https://www.instagram.com/${handle}/` : null
}

/** Lista os campos de contato que ainda estão como placeholder. */
export function missingContactFields(config: ContactConfig = contact): string[] {
  const missing: string[] = []
  if (!config.whatsapp.number) missing.push('whatsapp.number')
  if (!config.whatsapp.display) missing.push('whatsapp.display')
  if (!config.email) missing.push('email')
  if (!config.instagram.handle) missing.push('instagram.handle')
  if (!config.serviceArea) missing.push('serviceArea')
  if (!config.businessHours) missing.push('businessHours')
  return missing
}
