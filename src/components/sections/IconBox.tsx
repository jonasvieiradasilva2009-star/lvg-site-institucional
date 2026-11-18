import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconBoxProps {
  icon: LucideIcon
  className?: string
  /** Gradiente/cor de fundo personalizada (ex.: cor do produto). */
  background?: string
  variant?: 'solid' | 'soft' | 'dark'
}

/** Ícone em caixa arredondada — padrão visual dos cartões LVG. */
export function IconBox({ icon: Icon, className, background, variant = 'solid' }: IconBoxProps) {
  return (
    <span
      className={cn(
        'inline-flex size-12 shrink-0 items-center justify-center rounded-xl',
        variant === 'solid' && 'bg-gradient-to-br from-digital to-petrol text-white shadow-[0_10px_24px_-12px_rgb(30_136_229/0.8)]',
        variant === 'soft' && 'bg-digital-50 text-digital-700 ring-1 ring-digital/15',
        variant === 'dark' && 'bg-white/[0.06] text-teal-300 ring-1 ring-white/10',
        className,
      )}
      style={background ? { background } : undefined}
      aria-hidden
    >
      <Icon className="size-[22px]" strokeWidth={1.75} />
    </span>
  )
}
