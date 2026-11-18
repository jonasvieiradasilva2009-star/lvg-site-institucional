import type { ComponentType } from 'react'
import { DeliveryMockup } from '@/components/visuals/DeliveryMockup'
import { FleetMockup } from '@/components/visuals/FleetMockup'
import { GenericProductMockup } from '@/components/visuals/GenericProductMockup'
import type { Product } from '@/types/product'

/**
 * Demonstrações visuais por produto (chave = slug).
 * Produtos sem entrada aqui usam automaticamente o visual genérico.
 */
const visuals: Record<string, ComponentType<{ className?: string }>> = {
  frotas: FleetMockup,
  delivery: DeliveryMockup,
}

export function ProductVisual({ product, className }: { product: Product; className?: string }) {
  const Visual = visuals[product.slug]
  return Visual ? <Visual className={className} /> : <GenericProductMockup product={product} />
}
