import { site } from '@/config/site'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** Carregamento prioritário (use no cabeçalho). */
  priority?: boolean
}

/**
 * Logo oficial LVG Sistemas e Automações.
 * O arquivo é lido de `site.logo` (public/brand). Para trocar a logo,
 * substitua os arquivos mantendo os nomes ou ajuste os caminhos em src/config/site.ts.
 * A altura é controlada por `className` (ex.: "h-10"); a largura acompanha a proporção.
 */
export function Logo({ className, priority = false }: LogoProps) {
  const height = 230
  const width = Math.round(height * site.logo.fullAspectRatio)
  return (
    <picture className="contents">
      <source srcSet={site.logo.full} type="image/webp" />
      <img
        src={site.logo.fullFallback}
        alt={site.name}
        width={width}
        height={height}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn('block h-10 w-auto select-none', className)}
        draggable={false}
      />
    </picture>
  )
}
