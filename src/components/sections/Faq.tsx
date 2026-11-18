import { Plus } from 'lucide-react'
import type { ProductFaq } from '@/types/product'

/** Perguntas frequentes com <details> nativo (acessível e sem JavaScript). */
export function Faq({ items }: { items: ProductFaq[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-1 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 font-display text-base font-semibold text-petrol sm:text-lg">
            {item.question}
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-petrol transition-transform duration-300 group-open:rotate-45 group-open:border-digital/40 group-open:text-digital-700">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
