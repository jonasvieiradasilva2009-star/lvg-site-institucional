import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold whitespace-nowrap',
  {
    variants: {
      tone: {
        neutral: 'border-line bg-surface text-muted',
        info: 'border-digital/20 bg-digital-50 text-digital-700',
        success: 'border-teal/25 bg-teal-50 text-teal-700',
        warning: 'border-amber-300/60 bg-amber-50 text-amber-800',
        dark: 'border-white/15 bg-white/[0.06] text-white/85',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />
}
