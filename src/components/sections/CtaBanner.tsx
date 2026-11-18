import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

interface CtaBannerProps {
  eyebrow?: string
  title?: string
  description?: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
}

/** Chamada para ação de encerramento das páginas. */
export function CtaBanner({
  eyebrow = 'Vamos conversar',
  title = 'Pronto para simplificar a gestão do seu negócio?',
  description = 'Conte para a LVG como funciona a sua operação hoje. Vamos entender seus desafios e mostrar como a tecnologia pode ajudar.',
  primary = { label: 'Fale com a LVG', to: '/contato' },
  secondary = { label: 'Conheça nossas soluções', to: '/solucoes' },
}: CtaBannerProps) {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="cta-title">
      <div className="container-page">
        <div className="dark-surface reveal relative isolate overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-digital/30 blur-[100px]" />
            <div className="absolute -right-20 -bottom-28 h-80 w-80 rounded-full bg-teal/25 blur-[100px]" />
          </div>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow text-teal-300">
                <span className="h-px w-6 bg-teal-300/70" aria-hidden />
                {eyebrow}
              </p>
              <h2 id="cta-title" className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.6rem]">
                {title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
              <Button asChild size="lg">
                <Link to={primary.to}>
                  {primary.label}
                  <ArrowRight className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to={secondary.to}>{secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
