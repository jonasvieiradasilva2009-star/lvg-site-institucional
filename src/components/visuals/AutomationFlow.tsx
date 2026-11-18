import { BellRing, Cable, Check, ShieldCheck, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  { icon: Zap, label: 'Gatilho', title: 'Nova solicitação recebida', tone: 'from-digital to-digital-600' },
  { icon: ShieldCheck, label: 'Regras', title: 'Dados validados automaticamente', tone: 'from-digital-600 to-petrol' },
  { icon: Cable, label: 'Integração', title: 'Sistema de gestão atualizado', tone: 'from-petrol to-teal-700' },
  { icon: BellRing, label: 'Notificação', title: 'Equipe avisada no momento certo', tone: 'from-teal-700 to-teal' },
]

/** Ilustração de um fluxo de automação (gatilho → regras → integração → notificação). */
export function AutomationFlow({ className }: { className?: string }) {
  return (
    <figure className={cn('relative mx-auto w-full max-w-md select-none', className)}>
      <div aria-hidden className="glass-card relative p-5 shadow-glow sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium tracking-wider text-white/65 uppercase">Fluxo automatizado</p>
            <p className="mt-0.5 font-display text-[15px] font-semibold text-white">Atendimento de solicitações</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-[11px] font-medium text-teal-300">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-teal" />
            Ativo
          </span>
        </div>

        <ol className="relative mt-6 space-y-3">
          {/* conector animado */}
          <svg className="absolute top-6 bottom-6 left-[34px] h-[calc(100%-3rem)] w-1" preserveAspectRatio="none" viewBox="0 0 2 100">
            <line x1="1" y1="0" x2="1" y2="100" stroke="white" strokeOpacity="0.12" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <line
              x1="1" y1="0" x2="1" y2="100"
              stroke="#63D6C2" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke"
              className="animate-dash"
            />
          </svg>
          {steps.map(({ icon: Icon, label, title, tone }) => (
            <li key={label} className="relative flex items-center gap-4 rounded-xl border border-white/8 bg-ink-2/80 p-3 pr-4">
              <span className={cn('flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white ml-2', tone)}>
                <Icon className="size-3.5" strokeWidth={2.25} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-semibold tracking-wider text-white/65 uppercase">{label}</span>
                <span className="block truncate text-[13px] font-medium text-white/90">{title}</span>
              </span>
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-300">
                <Check className="size-3" strokeWidth={3} />
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex items-center justify-between rounded-xl border border-dashed border-white/12 px-4 py-3 text-[12px] text-white/70">
          <span>Sem digitação manual</span>
          <span className="font-semibold text-teal-300">Concluído</span>
        </div>
      </div>
      <figcaption className="sr-only">
        Ilustração de um fluxo automatizado com etapas de gatilho, validação de regras, integração e notificação.
      </figcaption>
    </figure>
  )
}
