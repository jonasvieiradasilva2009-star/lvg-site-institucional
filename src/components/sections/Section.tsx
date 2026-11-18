import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'white' | 'surface' | 'dark'

const toneClasses: Record<Tone, string> = {
  white: 'bg-white',
  surface: 'bg-surface',
  dark: 'dark-surface bg-ink text-white',
}

interface SectionProps {
  id?: string
  tone?: Tone
  className?: string
  containerClassName?: string
  children: ReactNode
  'aria-labelledby'?: string
}

/** Bloco de página com espaçamento vertical padrão e variação de fundo. */
export function Section({ id, tone = 'white', className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-20 sm:py-24 lg:py-28', toneClasses[tone], className)} {...rest}>
      <div className={cn('container-page relative', containerClassName)}>{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={cn('eyebrow', dark ? 'text-teal-300' : 'text-teal-700')}>
          <span className={cn('h-px w-6', dark ? 'bg-teal-300/70' : 'bg-teal')} aria-hidden />
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={cn(
          'mt-4 text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-petrol',
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn('mt-5 text-base leading-relaxed sm:text-lg', dark ? 'text-white/70' : 'text-muted')}>
          {description}
        </p>
      )}
    </div>
  )
}
