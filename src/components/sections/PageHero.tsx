import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'

export interface Crumb {
  label: string
  to?: string
}

interface PageHeroProps {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  breadcrumbs?: Crumb[]
  actions?: ReactNode
  /** Conteúdo exibido ao lado (desktop) ou abaixo (mobile) do texto. */
  aside?: ReactNode
  className?: string
}

/** Cabeçalho escuro padrão das páginas internas. */
export function PageHero({ eyebrow, title, description, breadcrumbs, actions, aside, className }: PageHeroProps) {
  return (
    <section className={cn('dark-surface relative isolate overflow-hidden bg-ink text-white', className)}>
      <HeroBackdrop />
      <div
        className={cn(
          'container-page relative grid gap-12 pt-14 pb-20 sm:pt-16 lg:pt-20 lg:pb-24',
          aside && 'lg:grid-cols-12 lg:items-center lg:gap-10',
        )}
      >
        <div className={cn(aside ? 'lg:col-span-6' : 'max-w-3xl')}>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {eyebrow && <div className="mt-6">{eyebrow}</div>}
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">{description}</p>}
          {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
        </div>
        {aside && <div className="lg:col-span-6">{aside}</div>}
      </div>
    </section>
  )
}

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid mask-fade-b absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-digital/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[380px] w-[520px] rounded-full bg-teal/15 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  )
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="size-3.5 text-white/35" aria-hidden />}
            {item.to ? (
              <Link to={item.to} className="rounded transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white/85">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
