import { ArrowRight, Check, Info, X } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { ProductVisual } from '@/components/products/ProductVisual'
import { StatusBadge } from '@/components/products/StatusBadge'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Faq } from '@/components/sections/Faq'
import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/sections/Section'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/button'
import { getProduct, productStatusMeta } from '@/data/products'
import { contactHref } from '@/lib/interest'
import { cn } from '@/lib/utils'
import type { Product } from '@/types/product'
import { NotFoundPage } from './NotFoundPage'

/** Rota dinâmica /solucoes/:slug — renderiza qualquer produto do catálogo. */
export function ProductRoute() {
  const { slug } = useParams()
  const product = getProduct(slug)
  return product ? <ProductPage product={product} /> : <NotFoundPage />
}

export function ProductPage({ product }: { product: Product }) {
  const status = productStatusMeta[product.status]
  const Icon = product.icon
  const ctaTo = contactHref(product.slug)
  const featureCount = product.features.length

  return (
    <>
      <Seo title={product.seo.title} description={product.seo.description} path={`/solucoes/${product.slug}`} />

      <PageHero
        breadcrumbs={[
          { label: 'Início', to: '/' },
          { label: 'Soluções', to: '/solucoes' },
          { label: product.name },
        ]}
        eyebrow={
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2.5 font-display text-lg font-semibold">
              <span
                className="inline-flex size-9 items-center justify-center rounded-xl text-white"
                style={{ background: product.accent.gradient }}
                aria-hidden
              >
                <Icon className="size-[18px]" strokeWidth={2} />
              </span>
              {product.name}
            </span>
            <StatusBadge status={product.status} dark />
          </div>
        }
        title={product.tagline}
        description={product.description}
        actions={
          <>
            <Button asChild size="lg">
              <Link to={ctaTo}>
                {status.cta}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <a href="#funcionalidades">Ver funcionalidades</a>
            </Button>
          </>
        }
        aside={<ProductVisual product={product} />}
      />

      {product.status !== 'disponivel' && (
        <div className="border-b border-line bg-surface">
          <div className="container-page flex items-start gap-3 py-4 text-sm text-graphite/85">
            <Info className="mt-0.5 size-4 shrink-0 text-digital-700" aria-hidden />
            <p>
              <strong className="font-semibold text-petrol">{status.label}:</strong> {status.note}
            </p>
          </div>
        </div>
      )}

      {/* Problema x solução */}
      <Section aria-labelledby="desafio-titulo">
        <SectionHeading
          id="desafio-titulo"
          align="center"
          eyebrow="O desafio"
          title={product.problem.title}
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="reveal rounded-3xl border border-line bg-surface p-8">
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">Sem um sistema dedicado</p>
            <ul className="mt-6 space-y-4">
              {product.problem.pains.map((pain) => (
                <li key={pain} className="flex gap-3 text-graphite/80">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <X className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  {pain}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="reveal relative overflow-hidden rounded-3xl border p-8 shadow-card"
            style={{ borderColor: `${product.accent.color}40`, background: product.accent.soft }}
          >
            <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: product.accent.text }}>
              Com o {product.name}
            </p>
            <ul className="mt-6 space-y-4">
              {product.problem.gains.map((gain) => (
                <li key={gain} className="flex gap-3 font-medium text-petrol">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: product.accent.text }}
                  >
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  {gain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Funcionalidades */}
      <Section id="funcionalidades" tone="surface" aria-labelledby="funcionalidades-titulo">
        <SectionHeading
          id="funcionalidades-titulo"
          eyebrow={product.status === 'disponivel' ? 'Funcionalidades' : 'Recursos planejados'}
          title={`Tudo o que a operação precisa, no ${product.name}.`}
          description="Recursos pensados para a rotina de quem gerencia, com informações acessíveis e organizadas."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map(({ icon: FeatureIcon, title, description }, index) => (
            <article
              key={title}
              className={cn(
                'group reveal rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover',
                // Evita cartões órfãos: o primeiro recurso ocupa duas colunas quando necessário.
                index === 0 && featureCount % 2 === 1 && 'sm:col-span-2 lg:col-span-1',
                index === 0 && featureCount % 3 === 1 && 'lg:col-span-2',
              )}
            >
              <span
                className="inline-flex size-12 items-center justify-center rounded-xl"
                style={{ background: product.accent.soft, color: product.accent.text }}
                aria-hidden
              >
                <FeatureIcon className="size-[22px]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-petrol">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Destaque */}
      <Section tone="dark" aria-labelledby="destaque-titulo" className="isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-radial absolute inset-0" />
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full blur-[120px]" style={{ background: product.accent.color, opacity: 0.25 }} />
        </div>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              id="destaque-titulo"
              dark
              eyebrow={product.highlight.eyebrow}
              title={product.highlight.title}
              description={product.highlight.description}
            />
          </div>
          <ul className="space-y-3 lg:col-span-5">
            {product.highlight.points.map((point) => (
              <li key={point} className="glass-card flex items-center gap-4 p-5 text-white/90">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal-300">
                  <Check className="size-4" strokeWidth={2.5} aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Público e benefícios */}
      <Section aria-labelledby="publico-titulo">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-line p-8 sm:p-10">
            <h2 id="publico-titulo" className="text-2xl font-semibold text-petrol sm:text-3xl">
              Para quem é
            </h2>
            <ul className="mt-8 grid gap-3">
              {product.audience.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3.5 text-graphite">
                  <span className="size-2 shrink-0 rounded-full" style={{ background: product.accent.color }} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-3xl border border-line p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-petrol sm:text-3xl">Principais benefícios</h2>
            <ul className="mt-8 grid gap-4">
              {product.benefits.map((item) => (
                <li key={item} className="flex gap-3 text-graphite">
                  <Check className="mt-0.5 size-5 shrink-0" style={{ color: product.accent.text }} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Como funciona */}
      <Section tone="surface" aria-labelledby="como-funciona-titulo">
        <SectionHeading id="como-funciona-titulo" align="center" eyebrow="Como funciona" title="Simples de começar, fácil de usar." />
        <ol className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {product.steps.map((step, index) => (
            <li key={step.title} className="reveal relative rounded-2xl border border-line bg-white p-7">
              <span
                className="flex size-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                style={{ background: product.accent.gradient }}
              >
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-petrol">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section aria-labelledby="faq-titulo">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-titulo" eyebrow="Dúvidas frequentes" title={`Perguntas sobre o ${product.name}`} />
          </div>
          <div className="lg:col-span-8">
            <Faq items={product.faq} />
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow={product.name}
        title={product.status === 'disponivel' ? `Leve o ${product.name} para a sua empresa.` : `Acompanhe o lançamento do ${product.name}.`}
        description="Fale com a LVG, conte como funciona a sua operação e receba informações sobre a solução."
        primary={{ label: status.cta, to: ctaTo }}
        secondary={{ label: 'Ver outras soluções', to: '/solucoes' }}
      />
    </>
  )
}
