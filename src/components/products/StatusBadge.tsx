import { Badge } from '@/components/ui/badge'
import { productStatusMeta } from '@/data/products'
import type { ProductStatus } from '@/types/product'
import { cn } from '@/lib/utils'

const dotColor = {
  success: 'bg-teal',
  info: 'bg-digital',
  warning: 'bg-amber-500',
  neutral: 'bg-muted',
} as const

export function StatusBadge({ status, dark, className }: { status: ProductStatus; dark?: boolean; className?: string }) {
  const meta = productStatusMeta[status]
  return (
    <Badge tone={dark ? 'dark' : meta.tone} className={className}>
      <span className={cn('size-1.5 animate-pulse-dot rounded-full', dotColor[meta.tone])} aria-hidden />
      {meta.label}
    </Badge>
  )
}
