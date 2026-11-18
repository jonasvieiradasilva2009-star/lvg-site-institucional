import {
  ArrowRight,
  BarChart3,
  Blocks,
  Cable,
  Check,
  Clock3,
  Code2,
  FolderKanban,
  Gauge,
  Hand,
  LayoutGrid,
  Repeat2,
  Bot,
  Sparkles,
  Workflow,
  Building2,
} from 'lucide-react'
import { Link } from 'react-router'
import { ProductCard } from '@/components/products/ProductCard'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { IconBox } from '@/components/sections/IconBox'
import { HeroBackdrop } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/sections/Section'
import { Seo } from '@/components/seo/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AutomationFlow } from '@/components/visuals/AutomationFlow'
import { HeroDashboard } from '@/components/visuals/HeroDashboard'
import { site } from '@/config/site'
import { products } from '@/data/products'

const heroHighlights = ['Acesso pelo navegador', 'Modelo de assinatura', 'Feito para pequenas e médias empresas']

const pillars = [
  {
    icon: LayoutGrid,
    title: 'Sistemas de gestão SaaS',
    description:
      'Plataformas on-line, acessadas pelo navegador, que organizam a rotina de setores específicos — da frota de veículos ao restaurante.',
    link: { label: 'Ver soluções', to: '/solucoes' },
  },
  {
    icon: Workflow,
    title: 'Automações empresariais',
    description:
      'Tarefas repetitivas executadas automaticamente e sistemas integrados entre si para reduzir o trabalho manual.',
    link: { label: 'Ver automações', to: '/automacoes' },
  },
  {
    icon: Code2,
    title: 'Soluções digitais sob medida',
    description:
      'Ferramentas personalizadas para quando o negócio precisa de algo específico que o mercado ainda não oferece.',
    link: { label: 'Falar sobre um projeto', to: '/contato' },
  },
]

const benefits = [
  {
    icon: FolderKanban,
    title: 'Processos organizados',
    description: 'Informações centralizadas e rotinas padronizadas, sem depender de planilhas soltas e anotações.',
  },
  {
    icon: Hand,
    title: 'Menos trabalho manual',
    description: 'Tarefas repetitivas passam a ser feitas pelo sistema, liberando a equipe para o que exige atenção.',
  },
  {
    icon: Gauge,
    title: 'Mais controle operacional',
    description: 'Visão clara do que está acontecendo, do que está pendente e do que precisa de ação imediata.',
  },
  {
    icon: Clock3,
    title: 'Economia de tempo',
    description: 'Menos retrabalho, menos busca por informações e menos tempo perdido com controles paralelos.',
  },
  {
    icon: Building2,
    title: 'Eficiência administrativa',
    description: 'Rotinas administrativas mais ágeis, com menos erros de digitação e menos etapas desnecessárias.',
  },
  {
    icon: BarChart3,
    title: 'Gestão orientada por informações',
    description: 'Indicadores e relatórios que ajudam a tomar decisões com base em dados, e não em suposições.',
  },
]

const automationHighlights = [
  { icon: Repeat2, text: 'Automação de tarefas repetitivas' },
  { icon: Cable, text: 'Integração entre sistemas' },
  { icon: Workflow, text: 'Fluxos de trabalho inteligentes' },
  { icon: Bot, text: 'Assistentes com inteligência artificial' },
]

const differentials = [
  {
    title: 'Simplicidade em primeiro lugar',
    description: 'Interfaces claras e objetivas, para que a equipe adote o sistema sem complicação.',
  },
  {
    title: 'Tecnologia acessível',
    description: 'Modelo de assinatura que torna ferramentas profissionais viáveis para pequenas e médias empresas.',
  },
  {
    title: 'Foco em problemas reais',
    description: 'Funcionalidades pensadas a partir da rotina de quem gerencia o negócio, sem excesso de recursos.',
  },
  {
    title: 'Na nuvem, sem instalação',
    description: 'Acesso pelo navegador, de qualquer lugar, sem servidores ou infraestrutura própria.',
  },
  {
    title: 'Segurança e boas práticas',
    description: 'Desenvolvimento orientado por boas práticas de segurança e cuidado com as informações do negócio.',
  },
  {
    title: 'Evolução contínua',
    description: 'Soluções que evoluem de forma constante e acompanham o crescimento da sua empresa.',
  },
]

export function HomePage() {
  return (
    <>
      <Seo title={`${site.name} — ${site.slogan.replace(/\.$/, '')}`} description={site.description} path="/" />

      {/* 1. Hero */}
      <section className="dark-surface relative isolate overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
        <HeroBackdrop />
        <div className="container-page grid gap-16 pt-14 pb-24 sm:pt-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-6">
            <Badge tone="dark" className="py-1.5 pr-3.5 pl-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-teal/20 text-teal-300">
                <Sparkles className="size-3" aria-hidden />
              </span>
              Sistemas SaaS e automações empresariais
            </Badge>
            <h1
              id="hero-title"
              className="mt-7 text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-[4.1rem]"
            >
              Tecnologia inteligente para <span className="text-gradient">simplificar negócios.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/72 sm:text-xl">
              Desenvolvemos sistemas de gestão e soluções digitais que tornam os processos empresariais mais simples,
              organizados e eficientes.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/solucoes">
                  Conheça nossas soluções
                  <ArrowRight className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/contato">Fale com a LVG</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-teal-300" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* 2. O que a LVG faz */}
      <Section aria-labelledby="o-que-fazemos">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            id="o-que-fazemos"
            className="lg:col-span-5"
            eyebrow="O que a LVG faz"
            title="Tecnologia aplicada à rotina real das empresas."
            description="A LVG desenvolve e comercializa sistemas de gestão e automações que resolvem problemas concretos de operação. Menos ferramentas desconectadas, mais clareza para quem administra o negócio."
          />
          <div className="grid gap-4 lg:col-span-7">
            {pillars.map(({ icon, title, description, link }) => (
              <article
                key={title}
                className="group reveal relative flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-digital/30 hover:shadow-card-hover sm:flex-row sm:items-start sm:p-7"
              >
                <IconBox icon={icon} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-petrol">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{description}</p>
                  <Link
                    to={link.to}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-digital-700 after:absolute after:inset-0 after:content-['']"
                  >
                    {link.label}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Soluções SaaS */}
      <Section tone="surface" aria-labelledby="solucoes-titulo" className="overflow-hidden">
        <div aria-hidden className="bg-grid-light mask-radial pointer-events-none absolute inset-0 -top-20" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="solucoes-titulo"
            eyebrow="Soluções SaaS"
            title="Um portfólio de sistemas para diferentes segmentos."
            description="Cada solução LVG nasce de uma necessidade específica de gestão e é entregue como serviço on-line, por assinatura."
          />
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/solucoes">
              Ver todas as soluções
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="relative mt-14 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="relative mt-6 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-petrol/20 bg-white/60 p-6 sm:flex-row sm:items-center">
          <IconBox icon={Blocks} variant="soft" />
          <div className="flex-1">
            <p className="font-display font-semibold text-petrol">Novas soluções em estruturação</p>
            <p className="mt-1 text-sm text-muted">
              A LVG está construindo um portfólio crescente de sistemas. Tem uma necessidade de gestão que nenhum
              software resolve bem? Conte para a gente.
            </p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/contato">
              Sugerir uma solução
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </Section>

      {/* 4. Benefícios */}
      <Section aria-labelledby="beneficios-titulo">
        <SectionHeading
          id="beneficios-titulo"
          align="center"
          eyebrow="Benefícios"
          title="O que a tecnologia certa muda no dia a dia da empresa."
          description="Sistemas bem pensados não são apenas ferramentas: eles mudam a forma como a equipe trabalha e como a gestão decide."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon, title, description }) => (
            <div key={title} className="group reveal bg-white p-8 transition-colors duration-300 hover:bg-surface sm:p-9">
              <IconBox icon={icon} variant="soft" className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              <h3 className="mt-6 text-lg font-semibold text-petrol">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Automações */}
      <Section tone="dark" aria-labelledby="automacoes-titulo" className="isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-radial absolute inset-0" />
          <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-digital/20 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal/15 blur-[120px]" />
        </div>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              id="automacoes-titulo"
              dark
              eyebrow="Automações empresariais"
              title="Deixe as tarefas repetitivas com a tecnologia."
              description="Muitas horas da semana são gastas com cópia de dados, conferências e avisos manuais. A LVG analisa esses processos e estrutura automações que trabalham por você, com regras claras e sistemas conectados."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {automationHighlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-[15px] text-white/85">
                  <Icon className="size-5 shrink-0 text-teal-300" strokeWidth={1.75} aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/automacoes">
                  Explorar automações
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/contato">Avaliar meu processo</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <AutomationFlow />
          </div>
        </div>
      </Section>

      {/* 6. Diferenciais */}
      <Section tone="surface" aria-labelledby="diferenciais-titulo">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                id="diferenciais-titulo"
                eyebrow="Por que a LVG"
                title="Simples, acessível e eficiente."
                description="A LVG existe para aproximar empresas de todos os portes de uma gestão moderna, com tecnologia que funciona no dia a dia."
              />
              <Button asChild variant="dark" className="mt-8">
                <Link to="/sobre">
                  Conheça a LVG
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {differentials.map(({ title, description }, index) => (
              <li
                key={title}
                className="reveal rounded-2xl border border-line bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <span className="font-display text-sm font-semibold text-digital-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-petrol">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 7. Chamada final */}
      <CtaBanner />
    </>
  )
}
