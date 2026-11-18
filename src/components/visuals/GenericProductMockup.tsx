import { LayoutDashboard } from 'lucide-react'
import type { Product } from '@/types/product'
import { AppWindow } from './AppWindow'

/** Visual padrão para novos produtos sem demonstração dedicada. */
export function GenericProductMockup({ product }: { product: Product }) {
  const Icon = product.icon
  return (
    <figure className="relative mx-auto w-full max-w-[560px] select-none">
      <div aria-hidden className="relative">
        <div className="absolute inset-8 -z-10 rounded-[40px] blur-3xl" style={{ background: product.accent.color, opacity: 0.35 }} />
        <AppWindow title={`${product.name} · Painel`}>
          <div className="grid gap-3 p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl text-white" style={{ background: product.accent.gradient }}>
                <Icon className="size-5" />
              </span>
              <span className="h-2.5 w-40 rounded bg-mist" />
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-xl border border-line p-3">
                  <LayoutDashboard className="size-4" style={{ color: product.accent.text }} />
                  <span className="mt-3 block h-3 w-10 rounded bg-mist" />
                  <span className="mt-2 block h-2 w-16 rounded bg-mist/70" />
                </div>
              ))}
            </div>
            <div className="h-28 rounded-xl border border-line" style={{ background: `linear-gradient(180deg, ${product.accent.soft}, white)` }} />
          </div>
        </AppWindow>
      </div>
      <figcaption className="mt-4 text-center text-xs text-white/65">Representação ilustrativa.</figcaption>
    </figure>
  )
}
