import { ArrowRight, Compass, Eye, Gem, Layers, Lightbulb, ShieldCheck, Sprout, Target, Users } from 'lucide-react'
import { Link } from 'react-router'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { IconBox } from '@/components/sections/IconBox'
import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/sections/Section'
import { Seo } from '@/components/seo/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { site } from '@/config/site'
import { products } from '@/data/products'

const foundations = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Desenvolver soluções digitais inteligentes, acessíveis e eficientes que simplifiquem processos e melhorem a gestão de negócios.',
  },
  {
    icon: Eye,
    title: 'Visão',
    text: 'Construir uma marca de tecnologia reconhecida por reunir um portfólio de sistemas e automações úteis, confiáveis e fáceis de usar.',
  },
  {
    icon: Gem,
    title: 'Valores',
    text: 'Simplicidade, transparência, eficiência, compromisso com o cliente e inovação com responsabilidade.',
  },
]

const commitments = [
  {
    icon: Lightbulb,
    title: 'Clareza na comunicação',
    text: 'Informamos com transparência o estágio de cada solução, sem prometer o que ainda não existe.',
  },
  {
    icon: ShieldCheck,
    title: 'Cuidado com os dados',
    text: 'Tratamos as informações dos clientes com responsabilidade e boas práticas de segurança.',
  },
  {
    icon: Users,
    title: 'Proximidade',
    text: 'Construímos soluções ouvindo quem vive a rotina do negócio todos os dias.',
  },
  {
    icon: Sprout,
    title: 'Melhoria contínua',
    text: 'Evoluímos os produtos de forma constante, a partir do uso real e das necessidades do mercado.',
  },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="Sobre a LVG"
        description="Conheça a LVG Sistemas e Automações: propósito, atuação e visão de uma empresa de tecnologia focada em simplificar a gestão de negócios."
        path="/sobre"
      />

      <PageHero
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Sobre' }]}
        eyebrow={<Badge tone="dark">Sobre a LVG</Badge>}
        title={
          <>
            Tecnologia com propósito: <span className="text-gradient">simplificar a gestão.</span>
          </>
        }
        description="A LVG Sistemas e Automações é uma empresa de tecnologia dedicada a desenvolver sistemas de gestão SaaS e automações que tornam a rotina das empresas mais simples, organizada e eficiente."
      />

      <Section aria-labelledby="proposito-titulo">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id="proposito-titulo" eyebrow="Propósito" title="Por que a LVG existe." />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-graphite/85 lg:col-span-7">
            <p>
              Muitas empresas ainda dependem de planilhas, anotações e controles paralelos para gerir a operação. As
              ferramentas disponíveis costumam ser caras, complexas ou distantes da realidade de pequenos e médios
              negócios.
            </p>
            <p>
              A LVG nasceu para mudar esse cenário: criar soluções digitais que resolvam problemas concretos de gestão,
              com tecnologia moderna, uso simples e custo acessível.
            </p>
            <blockquote className="reveal border-l-4 border-teal pl-6 font-display text-2xl leading-snug font-semibold text-petrol sm:text-3xl">
              “{site.slogan}”
            </blockquote>
          </div>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="fundamentos-titulo">
        <SectionHeading id="fundamentos-titulo" align="center" eyebrow="Fundamentos" title="O que orienta cada decisão." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {foundations.map(({ icon, title, text }) => (
            <article key={title} className="reveal rounded-3xl border border-line bg-white p-8 shadow-card">
              <IconBox icon={icon} />
              <h3 className="mt-6 text-xl font-semibold text-petrol">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="atuacao-titulo">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              id="atuacao-titulo"
              eyebrow="Atuação"
              title="Uma marca central, várias soluções."
              description="A LVG funciona como uma marca-mãe de tecnologia: cada sistema atende a um segmento específico, mas todos compartilham o mesmo compromisso com simplicidade, qualidade e eficiência."
            />
          </div>
          <div className="grid gap-4 lg:col-span-7">
            <div className="reveal rounded-3xl border border-line p-7">
              <div className="flex items-center gap-3">
                <IconBox icon={Layers} variant="soft" />
                <h3 className="text-lg font-semibold text-petrol">Sistemas de gestão SaaS</h3>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      to={`/solucoes/${product.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3.5 transition-colors hover:bg-mist"
                    >
                      <span>
                        <span className="block font-semibold text-petrol">{product.name}</span>
                        <span className="block text-xs text-muted">{product.category}</span>
                      </span>
                      <ArrowRight className="size-4 text-petrol transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                to="/automacoes"
                className="group reveal rounded-3xl border border-line p-7 transition-all hover:border-digital/30 hover:shadow-card-hover"
              >
                <IconBox icon={Compass} variant="soft" />
                <h3 className="mt-5 text-lg font-semibold text-petrol">Automações empresariais</h3>
                <p className="mt-2 text-muted">Processos automatizados e sistemas integrados.</p>
              </Link>
              <Link
                to="/contato?interesse=sob-medida"
                className="group reveal rounded-3xl border border-line p-7 transition-all hover:border-digital/30 hover:shadow-card-hover"
              >
                <IconBox icon={Lightbulb} variant="soft" />
                <h3 className="mt-5 text-lg font-semibold text-petrol">Soluções sob medida</h3>
                <p className="mt-2 text-muted">Ferramentas digitais para necessidades específicas.</p>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark" aria-labelledby="crescimento-titulo" className="isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-radial absolute inset-0" />
          <div className="absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-digital/20 blur-[120px]" />
        </div>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              id="crescimento-titulo"
              dark
              eyebrow="Visão de crescimento"
              title="Construída para crescer junto com os clientes."
              description="O plano da LVG é ampliar continuamente seu portfólio, com novos sistemas e automações desenvolvidos a partir das necessidades reais das empresas. Cada nova solução reforça a mesma base: tecnologia confiável, simples de usar e acessível."
            />
          </div>
          <ol className="space-y-3 lg:col-span-6">
            {[
              { label: 'Agora', text: 'Desenvolvimento das primeiras soluções SaaS: LVG Frotas e LVG Delivery.' },
              { label: 'Em seguida', text: 'Estruturação da frente de automações empresariais e integrações.' },
              { label: 'Futuro', text: 'Novos sistemas para outros segmentos, sob a mesma marca LVG.' },
            ].map((item) => (
              <li key={item.label} className="glass-card flex gap-5 p-5">
                <span className="w-24 shrink-0 font-display text-sm font-semibold text-teal-300">{item.label}</span>
                <span className="text-white/80">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section aria-labelledby="compromissos-titulo">
        <SectionHeading
          id="compromissos-titulo"
          align="center"
          eyebrow="Compromissos"
          title="Como a LVG se relaciona com quem confia nela."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(({ icon, title, text }) => (
            <article key={title} className="reveal rounded-2xl border border-line bg-white p-7 shadow-card">
              <IconBox icon={icon} variant="soft" />
              <h3 className="mt-5 text-lg font-semibold text-petrol">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="dark" size="lg">
            <Link to="/solucoes">
              Conheça nossas soluções
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
