import { Bot, Database, FileSpreadsheet, Mail, MessageSquareText, Plug, Workflow } from 'lucide-react'
import { cn } from '@/lib/utils'

const CX = 220
const CY = 196
const R = 145

const nodes = [
  { label: 'Sistema de gestão', icon: Database },
  { label: 'Planilhas', icon: FileSpreadsheet },
  { label: 'E-mail', icon: Mail },
  { label: 'Mensagens', icon: MessageSquareText },
  { label: 'APIs', icon: Plug },
  { label: 'Inteligência artificial', icon: Bot },
].map((node, i, all) => {
  const angle = (-90 + (360 / all.length) * i) * (Math.PI / 180)
  return { ...node, x: Math.round(CX + R * Math.cos(angle)), y: Math.round(CY + R * Math.sin(angle)) }
})

/** Ilustração de sistemas conectados por um núcleo de automação. */
export function SystemsHub({ className }: { className?: string }) {
  return (
    <figure className={cn('relative mx-auto w-full max-w-[460px] select-none', className)}>
      <svg viewBox="0 0 440 400" className="h-auto w-full" aria-hidden>
        <defs>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1E88E5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hub-fill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1E88E5" />
            <stop offset="100%" stopColor="#123C5A" />
          </linearGradient>
        </defs>

        <circle cx={CX} cy={CY} r={R} fill="none" stroke="white" strokeOpacity="0.07" />
        <circle cx={CX} cy={CY} r={R * 0.55} fill="none" stroke="white" strokeOpacity="0.05" />
        <circle cx={CX} cy={CY} r="110" fill="url(#hub-glow)" />

        {nodes.map((node) => (
          <g key={node.label}>
            <line x1={CX} y1={CY} x2={node.x} y2={node.y} stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
            <line
              x1={CX} y1={CY} x2={node.x} y2={node.y}
              stroke="#63D6C2" strokeOpacity="0.8" strokeWidth="1.5" strokeDasharray="4 8"
              className="animate-dash"
            />
          </g>
        ))}

        <circle cx={CX} cy={CY} r="44" fill="url(#hub-fill)" stroke="white" strokeOpacity="0.25" />
        <Workflow x={CX - 16} y={CY - 16} width={32} height={32} color="white" strokeWidth={1.75} />

        {nodes.map(({ label, icon: Icon, x, y }) => (
          <g key={label}>
            <rect x={x - 24} y={y - 24} width="48" height="48" rx="14" fill="#0B2539" stroke="white" strokeOpacity="0.14" />
            <Icon x={x - 11} y={y - 11} width={22} height={22} color="#63D6C2" strokeWidth={1.75} />
            <text
              x={x}
              y={y > CY + 10 ? y + 42 : y < CY - 100 ? y - 34 : y + 42}
              textAnchor="middle"
              fill="white"
              fillOpacity="0.7"
              fontSize="12"
              fontFamily="Inter Variable, sans-serif"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">
        Ilustração de diferentes sistemas — gestão, planilhas, e-mail, mensagens, APIs e inteligência artificial —
        conectados por um núcleo de automação.
      </figcaption>
    </figure>
  )
}
