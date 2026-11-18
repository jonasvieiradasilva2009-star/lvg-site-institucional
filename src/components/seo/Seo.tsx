import { useContext, useEffect } from 'react'
import { applyMetaToDocument, type PageMeta } from '@/lib/seo'
import { SeoContext } from './seo-context'

interface SeoProps extends PageMeta {
  /** Código HTTP da página (ex.: 404). Usado pela pré-renderização. */
  status?: number
}

/**
 * Declara título, descrição e Open Graph da página.
 * - Na pré-renderização, registra os dados para gerar o HTML estático.
 * - No navegador, atualiza o <head> a cada navegação.
 */
export function Seo({ status, ...meta }: SeoProps) {
  const collector = useContext(SeoContext)
  collector?.collect(meta, status)

  const { title, description, path, noindex, image, imageAlt } = meta
  useEffect(() => {
    applyMetaToDocument({ title, description, path, noindex, image, imageAlt })
  }, [title, description, path, noindex, image, imageAlt])

  return null
}
