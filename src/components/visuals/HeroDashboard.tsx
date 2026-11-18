import {
  BellRing,
  CheckCircle2,
  LayoutDashboard,
  Settings2,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Workflow,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { smoothPath, toPoints } from './chart-utils'

const W = 420
const H = 132
const primary = toPoints([30, 42, 38, 55, 52, 68, 64, 80, 86], W, H)
const secondary = toPoints([22, 26, 34, 30, 41, 39, 50, 47, 58], W, H)
const primaryPath = smoothPath(primary)
const secondaryPath = smoothPath(secondary)
const areaPath = `${primaryPath} L ${W} ${H} L 0 ${H} Z`

const kpis = [
  { label: 'Processos ativos', value: '12', icon: Workflow, tone: 'text-teal-300' },
  { label: 'Tarefas automáticas', value: '148', icon: Zap, tone: 'text-digital-300' },
  { label: 'Alertas do dia', value: '3', icon: BellRing, tone: 'text-amber-300' },
]

const sideIcons = [LayoutDashboard, Truck, UtensilsCrossed, Workflow, Settings2]

/**
 * Composição ilustrativa da página inicial: painel de gestão com sistemas conectados.
 * Os valores exibidos são fictícios e servem apenas como representação visual.
 */
export function HeroDashboard({ className }: { className?: string }) {
  return (
    <figure className={cn('relative mx-auto w-full max-w-[640px] select-none', className)}>
      <div aria-hidden className="relative">
        {/* brilho de fundo */}
        <div className="absolute inset-6 -z-10 rounded-[40px] bg-gradient-to-tr from-digital/40 via-digital/10 to-teal/30 blur-3xl" />

        {/* janela principal */}
        <div className="overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-ink-3/90 to-ink-2/95 shadow-glow backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="ml-3 rounded-md bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/70">
              Painel de gestão
            </span>
          </div>

          <div className="flex">
            <div className="hidden flex-col items-center gap-2 border-r border-white/8 px-2.5 py-4 sm:flex">
              {sideIcons.map((Icon, i) => (
                <span
                  key={i}
                  className={cn(
                    'flex size-9 items-center justify-center rounded-lg',
                    i === 0 ? 'bg-digital/25 text-white' : 'text-white/40',
                  )}
                >
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                </span>
              ))}
            </div>

            <div className="min-w-0 flex-1 p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium tracking-wider text-white/65 uppercase">Visão geral</p>
                  <p className="mt-0.5 font-display text-[15px] font-semibold text-white">Operação conectada</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-[11px] font-medium text-teal-300">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-teal" />
                  Em tempo real
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {kpis.map(({ label, value, icon: Icon, tone }) => (
                  <div key={label} className="rounded-xl border border-white/8 bg-white/[0.04] p-2.5 sm:p-3">
                    <Icon className={cn('size-4', tone)} strokeWidth={2} />
                    <p className="mt-2 font-display text-lg leading-none font-semibold text-white sm:text-xl">{value}</p>
                    <p className="mt-1 truncate text-[10px] text-white/65 sm:text-[11px]">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-white/75">Eficiência operacional</p>
                  <div className="flex items-center gap-3 text-[10px] text-white/65">
                    <span className="flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-digital-300" /> Processos
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-teal-300" /> Automações
                    </span>
                  </div>
                </div>
                <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-24 w-full sm:h-28" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#1E88E5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0.25, 0.5, 0.75].map((f) => (
                    <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="white" strokeOpacity="0.06" />
                  ))}
                  <path d={areaPath} fill="url(#hero-area)" />
                  <path d={secondaryPath} fill="none" stroke="#63D6C2" strokeWidth="2" strokeDasharray="4 5" vectorEffect="non-scaling-stroke" />
                  <path d={primaryPath} fill="none" stroke="#6CB2F2" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {[
                  { label: 'Gestão de frotas', icon: Truck, progress: 'w-4/5' },
                  { label: 'Pedidos e delivery', icon: ShoppingBag, progress: 'w-3/5' },
                ].map(({ label, icon: Icon, progress }) => (
                  <div key={label} className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-2">
                      <Icon className="size-3.5 text-white/60" />
                      <p className="truncate text-[11px] font-medium text-white/70">{label}</p>
                    </div>
                    <div className="mt-2.5 h-1.5 rounded-full bg-white/10">
                      <div className={cn('h-full rounded-full bg-gradient-to-r from-digital to-teal', progress)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* cartões flutuantes */}
        <FloatingCard
          className="-top-5 -right-2 animate-float sm:-top-6 sm:-right-8"
          icon={BellRing}
          iconClass="bg-amber-400/15 text-amber-300"
          title="Documento vence em 7 dias"
          subtitle="Alerta automático de vencimento"
        />
        <FloatingCard
          className="-bottom-6 -left-2 animate-float-slow [animation-delay:-3s] sm:-left-10"
          icon={CheckCircle2}
          iconClass="bg-teal/15 text-teal-300"
          title="Fluxo concluído"
          subtitle="Relatório gerado e enviado"
        />
      </div>
      <figcaption className="sr-only">
        Ilustração de um painel de gestão com indicadores, gráfico de eficiência e alertas automáticos.
      </figcaption>
    </figure>
  )
}

function FloatingCard({
  className,
  icon: Icon,
  iconClass,
  title,
  subtitle,
}: {
  className?: string
  icon: typeof BellRing
  iconClass: string
  title: string
  subtitle: string
}) {
  return (
    <div
      className={cn(
        'absolute hidden items-center gap-3 rounded-2xl border border-white/12 bg-ink-2/85 py-3 pr-5 pl-3 shadow-2xl backdrop-blur-xl min-[420px]:flex',
        className,
      )}
    >
      <span className={cn('flex size-9 items-center justify-center rounded-xl', iconClass)}>
        <Icon className="size-[18px]" strokeWidth={2} />
      </span>
      <span>
        <span className="block text-[13px] font-semibold text-white">{title}</span>
        <span className="block text-[11px] text-white/70">{subtitle}</span>
      </span>
    </div>
  )
}
