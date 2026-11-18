import { createContext } from 'react'
import type { PageMeta } from '@/lib/seo'

/** Coletor usado apenas na pré-renderização para capturar as metatags da página. */
export interface SeoCollector {
  meta?: PageMeta
  status?: number
  collect: (meta: PageMeta, status?: number) => void
}

export function createSeoCollector(): SeoCollector {
  const collector: SeoCollector = {
    collect(meta, status) {
      collector.meta = meta
      collector.status = status
    },
  }
  return collector
}

export const SeoContext = createContext<SeoCollector | null>(null)
