import { ArrowUpRight, Check, LogIn } from 'lucide-react'
import { Link } from 'react-router'
import type { Product } from '@/types/product'
import { cn } from '@/lib/utils'
import { StatusBadge } from './StatusBadge'

interface ProductCardProps {
  product: Product
  /** Exibe público-alvo e benefícios (catálogo completo). */
  detailed?: boolean
  className?: string
}

/** Cartão comercial de um produto do catálogo, guiado pelos dados. */
export function ProductCard({ product, detailed = false, className }: ProductCardProps) {
  const Icon = product.icon
  const href = `/solucoes/${product.slug}`

  return (
    <article
      className={cn(
        'group reveal relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover',
        className,
      )}
    >
      {/* Faixa com a identidade secundária do produto */}
      <div className="relative h-1.5" style={{ background: product.accent.gradient }} aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: product.accent.soft }}
      />

      <div className="relative flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-flex size-14 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ background: product.accent.gradient }}
            aria-hidden
          >
            <Icon className="size-6" strokeWidth={1.75} />
          </span>
          <StatusBadge status={product.status} />
        </div>

        <p className="mt-6 text-xs font-semibold tracking-[0.12em] uppercase" style={{ color: product.accent.text }}>
          {product.category}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-petrol">
          <Link to={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{product.summary}</p>

        {detailed && (
          <div className="mt-7 grid gap-6 border-t border-line pt-7 sm:grid-cols-2">
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.12em] text-petrol uppercase">Para quem</h4>
              <ul className="mt-3 space-y-2 text-sm text-graphite/85">
                {product.audience.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: product.accent.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.12em] text-petrol uppercase">Benefícios</h4>
              <ul className="mt-3 space-y-2 text-sm text-graphite/85">
                {product.benefits.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" style={{ color: product.accent.text }} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-8">
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-petrol transition-colors group-hover:text-digital-700"
            aria-hidden
          >
            Conhecer o {product.name}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          {product.appUrl && (
            // z-10 mantém este link clicável acima da área clicável do cartão.
            <a
              href={product.appUrl}
              aria-label={`Acessar o sistema ${product.name}`}
              className="relative z-10 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: product.accent.gradient }}
            >
              Acessar o sistema
              <LogIn className="size-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
