import { products } from '@/data/products'

/** Rotas estáticas pré-renderizadas e incluídas no sitemap. */
export const staticRoutes = ['/', '/solucoes', '/automacoes', '/sobre', '/contato'] as const

export function getPrerenderRoutes(): string[] {
  return [...staticRoutes, ...products.map((product) => `/solucoes/${product.slug}`)]
}
