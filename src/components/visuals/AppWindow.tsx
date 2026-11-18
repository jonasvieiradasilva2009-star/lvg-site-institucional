import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Moldura de aplicação usada nas demonstrações ilustrativas de produtos. */
export function AppWindow({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-white/15 bg-white shadow-glow', className)}>
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-2 truncate text-[11px] font-medium text-muted">{title}</span>
      </div>
      {children}
    </div>
  )
}
