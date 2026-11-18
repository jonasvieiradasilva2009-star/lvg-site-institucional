import { AlertTriangle, BellRing, Car, Fuel, Truck, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AppWindow } from './AppWindow'
import { smoothPath, toPoints } from './chart-utils'

const vehicles = [
  { icon: Truck, plate: 'ABC-1D23', model: 'Caminhão toco', status: 'Ativo', tone: 'bg-teal-50 text-teal-700' },
  { icon: Car, plate: 'DEF-4G56', model: 'Utilitário', status: 'Manutenção', tone: 'bg-amber-50 text-amber-800' },
  { icon: Truck, plate: 'HIJ-7K89', model: 'Caminhão truck', status: 'Ativo', tone: 'bg-teal-50 text-teal-700' },
  { icon: Car, plate: 'LMN-0P12', model: 'Veículo leve', status: 'Ativo', tone: 'bg-teal-50 text-teal-700' },
]

const dueSoon = [
  { doc: 'Licenciamento', ref: 'ABC-1D23', days: 7 },
  { doc: 'CNH do motorista', ref: 'Motorista 04', days: 4 },
  { doc: 'Seguro', ref: 'HIJ-7K89', days: 2 },
]

const W = 300
const H = 70
const fuelPath = smoothPath(toPoints([48, 52, 45, 58, 50, 62, 55], W, H))

/** Demonstração ilustrativa do LVG Frotas (dados fictícios). */
export function FleetMockup({ className }: { className?: string }) {
  return (
    <figure className={cn('relative mx-auto w-full max-w-[620px] select-none', className)}>
      <div aria-hidden className="relative">
        <div className="absolute inset-8 -z-10 rounded-[40px] bg-digital/35 blur-3xl" />
        <AppWindow title="LVG Frotas · Painel gerencial">
          <div className="grid gap-3 p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: 'Veículos', value: '32', icon: Truck, color: 'text-digital-700 bg-digital-50' },
                { label: 'Em manutenção', value: '2', icon: Wrench, color: 'text-amber-700 bg-amber-50' },
                { label: 'Vencem em 7 dias', value: '3', icon: BellRing, color: 'text-teal-700 bg-teal-50' },
              ].map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="rounded-xl border border-line p-2.5 sm:p-3">
                  <span className={cn('flex size-7 items-center justify-center rounded-lg', color)}>
                    <Icon className="size-3.5" strokeWidth={2.25} />
                  </span>
                  <p className="mt-2 font-display text-lg leading-none font-semibold text-petrol">{value}</p>
                  <p className="mt-1 truncate text-[10px] text-muted sm:text-[11px]">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-5">
              <div className="rounded-xl border border-line sm:col-span-3">
                <p className="border-b border-line px-3 py-2 text-[11px] font-semibold text-petrol">Frota</p>
                <ul className="divide-y divide-line">
                  {vehicles.map(({ icon: Icon, plate, model, status, tone }) => (
                    <li key={plate} className="flex items-center gap-2.5 px-3 py-2">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-mist text-petrol">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold text-graphite">{plate}</span>
                        <span className="block truncate text-[10px] text-muted">{model}</span>
                      </span>
                      <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', tone)}>{status}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50/50 sm:col-span-2">
                <p className="flex items-center gap-1.5 border-b border-amber-200/80 px-3 py-2 text-[11px] font-semibold text-amber-900">
                  <AlertTriangle className="size-3.5" />
                  Próximos vencimentos
                </p>
                <ul className="space-y-2 p-3">
                  {dueSoon.map(({ doc, ref, days }) => (
                    <li key={doc} className="flex items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-2 shadow-sm">
                      <span className="min-w-0">
                        <span className="block truncate text-[11px] font-semibold text-graphite">{doc}</span>
                        <span className="block truncate text-[10px] text-muted">{ref}</span>
                      </span>
                      <span
                        className={cn(
                          'shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold',
                          days <= 3 ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800',
                        )}
                      >
                        {days}d
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-line p-3">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-petrol">
                  <Fuel className="size-3.5 text-digital-700" />
                  Consumo médio da frota
                </p>
                <span className="text-[10px] text-muted">Últimas semanas</span>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 h-14 w-full" preserveAspectRatio="none">
                <path d={`${fuelPath} L ${W} ${H} L 0 ${H} Z`} fill="#1E88E5" fillOpacity="0.08" />
                <path d={fuelPath} fill="none" stroke="#1E88E5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
        </AppWindow>
      </div>
      <figcaption className="mt-4 text-center text-xs text-white/65">
        Demonstração ilustrativa com dados fictícios. A interface final pode variar.
      </figcaption>
    </figure>
  )
}
