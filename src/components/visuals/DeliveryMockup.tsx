import { BadgeDollarSign, Bike, ChefHat, Clock3, Plus, ShoppingBag, Store } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AppWindow } from './AppWindow'

const menu = [
  { name: 'Prato executivo', desc: 'Arroz, feijão, salada e proteína', price: '29,90' },
  { name: 'Hambúrguer artesanal', desc: 'Pão brioche, blend 160g e queijo', price: '34,90' },
  { name: 'Pizza média', desc: 'Escolha até dois sabores', price: '49,90' },
]

const columns = [
  { title: 'Novos', icon: ShoppingBag, tone: 'text-digital-700 bg-digital-50', orders: ['#1042', '#1043'] },
  { title: 'Em preparo', icon: ChefHat, tone: 'text-amber-800 bg-amber-50', orders: ['#1040'] },
  { title: 'Em rota', icon: Bike, tone: 'text-teal-700 bg-teal-50', orders: ['#1038', '#1039'] },
]

/** Demonstração ilustrativa do LVG Delivery (dados fictícios). */
export function DeliveryMockup({ className }: { className?: string }) {
  return (
    <figure className={cn('relative mx-auto w-full max-w-[620px] select-none', className)}>
      <div aria-hidden className="relative grid items-end gap-4 sm:grid-cols-[220px_1fr]">
        <div className="absolute inset-8 -z-10 rounded-[40px] bg-teal/30 blur-3xl" />

        {/* cardápio digital — celular */}
        <div className="mx-auto w-[220px] rounded-[30px] border border-white/20 bg-ink-3 p-2 shadow-glow">
          <div className="overflow-hidden rounded-[24px] bg-white">
            <div className="bg-gradient-to-br from-teal to-petrol px-4 pt-5 pb-4 text-white">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-white/20">
                  <Store className="size-4" />
                </span>
                <span>
                  <span className="block text-[12px] font-semibold">Restaurante Exemplo</span>
                  <span className="flex items-center gap-1 text-[10px] text-white/80">
                    <Clock3 className="size-3" /> Aberto agora
                  </span>
                </span>
              </div>
            </div>
            <div className="flex gap-1.5 px-3 pt-3">
              {['Pratos', 'Lanches', 'Pizzas'].map((tab, i) => (
                <span
                  key={tab}
                  className={cn(
                    'rounded-full px-2.5 py-1 text-[10px] font-semibold',
                    i === 0 ? 'bg-petrol text-white' : 'bg-mist text-muted',
                  )}
                >
                  {tab}
                </span>
              ))}
            </div>
            <ul className="space-y-2 p-3">
              {menu.map((item) => (
                <li key={item.name} className="flex items-center gap-2 rounded-xl border border-line p-2">
                  <span className="size-10 shrink-0 rounded-lg bg-gradient-to-br from-teal-50 to-mist" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-semibold text-graphite">{item.name}</span>
                    <span className="block truncate text-[9px] text-muted">{item.desc}</span>
                    <span className="block text-[11px] font-bold text-teal-700">R$ {item.price}</span>
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-teal text-white">
                    <Plus className="size-3.5" strokeWidth={3} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="px-3 pb-4">
              <div className="rounded-xl bg-petrol py-2.5 text-center text-[11px] font-semibold text-white">
                Ver sacola · 2 itens
              </div>
            </div>
          </div>
        </div>

        {/* painel do restaurante */}
        <div className="space-y-3">
          <AppWindow title="Painel do restaurante · Pedidos">
            <div className="grid grid-cols-3 gap-2 p-3">
              {columns.map(({ title, icon: Icon, tone, orders }) => (
                <div key={title} className="rounded-xl bg-surface p-2">
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold text-petrol">
                    <span className={cn('flex size-5 items-center justify-center rounded-md', tone)}>
                      <Icon className="size-3" />
                    </span>
                    {title}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {orders.map((order) => (
                      <li key={order} className="rounded-lg border border-line bg-white px-2 py-1.5">
                        <span className="block text-[10px] font-bold text-graphite">{order}</span>
                        <span className="mt-1 block h-1 w-3/4 rounded bg-mist" />
                        <span className="mt-1 block h-1 w-1/2 rounded bg-mist" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AppWindow>
          <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-ink-2/85 p-3 pr-4 shadow-2xl backdrop-blur-xl">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal-300">
              <BadgeDollarSign className="size-[18px]" />
            </span>
            <span>
              <span className="block text-[13px] font-semibold text-white">Mensalidade fixa</span>
              <span className="block text-[11px] text-white/60">Sem percentual sobre cada pedido</span>
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-white/65">
        Demonstração ilustrativa com dados fictícios. A interface final pode variar.
      </figcaption>
    </figure>
  )
}
