import { ArrowUpRight, Building2, Clock3, Mail, MapPin, MessageCircle, type LucideIcon } from 'lucide-react'
import { InstagramIcon as Instagram } from '@/components/brand/InstagramIcon'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { useHydrated } from '@/hooks/useHydrated'
import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/sections/Section'
import { Seo } from '@/components/seo/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { contact } from '@/config/contact'
import { site } from '@/config/site'
import { products } from '@/data/products'
import { buildEmailUrl, buildInstagramUrl, buildWhatsAppUrl, PLACEHOLDER_LABEL } from '@/lib/contact'
import { getInterest } from '@/lib/interest'
import { cn } from '@/lib/utils'

const interestOptions = [
  ...products.map((product) => ({ key: product.slug, label: product.name })),
  { key: 'automacoes', label: 'Automações' },
  { key: 'sob-medida', label: 'Solução sob medida' },
]

const nextSteps = [
  { title: 'Conversa inicial', text: 'Entendemos sua operação, seus desafios e o que você espera da tecnologia.' },
  { title: 'Indicação da solução', text: 'Apresentamos a solução mais adequada ou avaliamos uma alternativa sob medida.' },
  { title: 'Próximos passos', text: 'Combinamos juntos o caminho: demonstração, proposta ou acompanhamento do lançamento.' },
]

export function ContactPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  // O parâmetro ?interesse= só é aplicado após a hidratação, mantendo o HTML pré-renderizado idêntico.
  const hydrated = useHydrated()
  const interestKey = hydrated ? searchParams.get('interesse') : null

  const interest = getInterest(interestKey)
  const whatsappUrl = buildWhatsAppUrl(interest?.message)
  const emailUrl = buildEmailUrl(interest?.subject ?? `Contato pelo site — ${site.name}`)
  const instagramUrl = buildInstagramUrl()

  const selectInterest = (key: string | null) => {
    const search = key && key !== interestKey ? `?interesse=${encodeURIComponent(key)}` : ''
    navigate({ pathname: '/contato', search }, { replace: true, preventScrollReset: true })
  }

  return (
    <>
      <Seo
        title="Contato"
        description="Fale com a LVG Sistemas e Automações. Atendimento comercial para conhecer as soluções SaaS e os serviços de automação empresarial."
        path="/contato"
      />

      <PageHero
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Contato' }]}
        eyebrow={<Badge tone="dark">Atendimento comercial</Badge>}
        title={
          <>
            Vamos conversar sobre o <span className="text-gradient">seu negócio.</span>
          </>
        }
        description="Tire dúvidas, conheça as soluções da LVG ou apresente um desafio da sua empresa. Escolha o canal de sua preferência."
      />

      <Section aria-labelledby="canais-titulo" className="pt-16 sm:pt-20 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
              <p id="assunto-label" className="text-sm font-semibold text-petrol">
                Sobre o que você quer conversar? <span className="font-normal text-muted">(opcional)</span>
              </p>
              <div role="group" aria-labelledby="assunto-label" className="mt-4 flex flex-wrap gap-2">
                {interestOptions.map((option) => {
                  const active = option.key === interestKey
                  return (
                    <button
                      key={option.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => selectInterest(option.key)}
                      className={cn(
                        'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                        active
                          ? 'border-petrol bg-petrol text-white'
                          : 'border-line bg-white text-graphite hover:border-petrol/30',
                      )}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
              <p className="mt-4 text-sm text-muted" aria-live="polite">
                {interest
                  ? `A mensagem e o assunto do e-mail já serão preenchidos com o seu interesse em ${interest.label}.`
                  : 'Selecione um assunto para que a sua mensagem já chegue identificada.'}
              </p>
            </div>

            <h2 id="canais-titulo" className="sr-only">
              Canais de atendimento
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <ChannelCard
                icon={MessageCircle}
                title="WhatsApp comercial"
                description="Atendimento direto para tirar dúvidas e conhecer as soluções."
                value={contact.whatsapp.display}
                href={whatsappUrl}
                action="Conversar no WhatsApp"
                highlight
                external
              />
              <ChannelCard
                icon={Mail}
                title="E-mail"
                description="Para propostas, parcerias e informações mais detalhadas."
                value={contact.email}
                href={emailUrl}
                action="Enviar e-mail"
              />
              <ChannelCard
                icon={Instagram}
                title="Instagram"
                description="Acompanhe novidades e lançamentos da LVG."
                value={contact.instagram.handle ? `@${contact.instagram.handle}` : null}
                href={instagramUrl}
                action="Ver perfil"
                external
              />
            </div>
          </div>

          <div className="space-y-5 lg:col-span-4">
            <div className="rounded-3xl border border-line p-7">
              <h2 className="text-lg font-semibold text-petrol">Informações institucionais</h2>
              <dl className="mt-6 space-y-5 text-sm">
                <InfoRow icon={Building2} label="Empresa" value={site.legalName} />
                <InfoRow icon={MapPin} label="Área de atendimento" value={contact.serviceArea} />
                <InfoRow icon={Clock3} label="Horário de atendimento" value={contact.businessHours} />
                {contact.cnpj && <InfoRow icon={Building2} label="CNPJ" value={contact.cnpj} />}
              </dl>
            </div>
            <div className="dark-surface rounded-3xl bg-ink p-7 text-white">
              <h2 className="text-lg font-semibold">O que acontece depois do contato</h2>
              <ol className="mt-6 space-y-5">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-sm font-semibold text-teal-300">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{step.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-white/65">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="duvida-titulo" className="py-16 sm:py-20 lg:py-20">
        <SectionHeading
          id="duvida-titulo"
          align="center"
          eyebrow="Ainda conhecendo a LVG?"
          title="Explore as soluções antes de conversar."
          description="Veja o catálogo de sistemas e as possibilidades de automação para chegar à conversa com mais clareza."
        />
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="dark" size="lg">
            <Link to="/solucoes">Ver soluções</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/automacoes">Ver automações</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}

function ChannelCard({
  icon: Icon,
  title,
  description,
  value,
  href,
  action,
  highlight = false,
  external = false,
}: {
  icon: LucideIcon
  title: string
  description: string
  value: string | null
  href: string | null
  action: string
  highlight?: boolean
  external?: boolean
}) {
  const configured = Boolean(value && href)
  return (
    <article
      className={cn(
        'flex flex-col rounded-3xl border p-7 shadow-card',
        highlight ? 'border-teal/30 bg-gradient-to-b from-teal-50 to-white' : 'border-line bg-white',
      )}
    >
      <span
        className={cn(
          'inline-flex size-12 items-center justify-center rounded-xl',
          highlight ? 'bg-teal text-white' : 'bg-digital-50 text-digital-700',
        )}
        aria-hidden
      >
        <Icon className="size-[22px]" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-petrol">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-5 flex-1">
        {configured ? (
          <p className="font-semibold break-all text-graphite">{value}</p>
        ) : (
          <PlaceholderValue />
        )}
      </div>
      <div className="mt-6">
        {configured && href ? (
          <Button asChild variant={highlight ? 'primary' : 'outline'} className="w-full">
            <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {action}
              <ArrowUpRight aria-hidden />
              {external && <span className="sr-only">(abre em nova aba)</span>}
            </a>
          </Button>
        ) : (
          <p className="rounded-xl border border-dashed border-line px-4 py-2.5 text-center text-sm text-muted">
            Canal em configuração
          </p>
        )}
      </div>
    </article>
  )
}

function PlaceholderValue() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-amber-400 bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800"
      title="Informação ainda não configurada em src/config/contact.ts"
    >
      {PLACEHOLDER_LABEL}
    </span>
  )
}

function InfoRow({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string | null }) {
  return (
    <div className="relative pl-7">
      <dt className="text-xs font-medium tracking-wide text-muted uppercase">
        <Icon className="absolute top-0 left-0 size-4 text-petrol" aria-hidden />
        {label}
      </dt>
      <dd className="mt-1 font-medium text-graphite">{value ?? <PlaceholderValue />}</dd>
    </div>
  )
}
