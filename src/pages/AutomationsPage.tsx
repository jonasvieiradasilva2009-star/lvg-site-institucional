import { ArrowRight, Check, Info } from 'lucide-react'
import { Link } from 'react-router'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { IconBox } from '@/components/sections/IconBox'
import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/sections/Section'
import { Seo } from '@/components/seo/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AutomationFlow } from '@/components/visuals/AutomationFlow'
import { SystemsHub } from '@/components/visuals/SystemsHub'
import { automationServices } from '@/data/automations'
import { contactHref } from '@/lib/interest'

const signals = [
  'A equipe digita a mesma informação em mais de um sistema',
  'Relatórios são montados manualmente toda semana ou todo mês',
  'Avisos, cobranças e lembretes dependem da memória de alguém',
  'Planilhas diferentes guardam versões diferentes da mesma informação',
  'Processos param quando uma pessoa específica não está disponível',
  'Solicitações se perdem entre e-mails, mensagens e papéis',
]

const process = [
  { title: 'Diagnóstico', description: 'Entendemos a rotina atual, as ferramentas utilizadas e onde o tempo está sendo perdido.' },
  { title: 'Desenho da solução', description: 'Definimos o fluxo ideal, as regras de negócio, as integrações e o escopo do projeto.' },
  { title: 'Implementação', description: 'Construímos e testamos a automação com cuidado, validando cada etapa com a sua equipe.' },
  { title: 'Acompanhamento', description: 'Monitoramos o funcionamento e ajustamos o fluxo conforme a operação evolui.' },
]

export function AutomationsPage() {
  const ctaTo = contactHref('automacoes')

  return (
    <>
      <Seo
        title="Automações empresariais"
        description="Automação de tarefas repetitivas, integração entre sistemas, fluxos de trabalho e assistentes com inteligência artificial para empresas."
        path="/automacoes"
      />

      <PageHero
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Automações' }]}
        eyebrow={<Badge tone="dark">Automações empresariais</Badge>}
        title={
          <>
            Automações que devolvem <span className="text-gradient">tempo para a sua equipe.</span>
          </>
        }
        description="Processos manuais, informações duplicadas e sistemas que não conversam entre si custam horas todas as semanas. A LVG estrutura automações para que a tecnologia faça o trabalho repetitivo."
        actions={
          <>
            <Button asChild size="lg">
              <Link to={ctaTo}>
                Avaliar meu processo
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <a href="#possibilidades">Ver possibilidades</a>
            </Button>
          </>
        }
        aside={<SystemsHub />}
      />

      <Section id="possibilidades" aria-labelledby="possibilidades-titulo">
        <SectionHeading
          id="possibilidades-titulo"
          eyebrow="Possibilidades"
          title="Onde a automação pode atuar no seu negócio."
          description="Frentes de atuação que a LVG avalia junto com cada empresa, de acordo com a realidade da operação."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {automationServices.map(({ icon, title, description, examples }) => (
            <article
              key={title}
              className="group reveal flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <IconBox icon={icon} />
              <h3 className="mt-6 text-lg font-semibold text-petrol">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-graphite/85">
                {examples.map((example) => (
                  <li key={example} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-teal" aria-hidden />
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-digital/20 bg-digital-50 p-5 text-sm text-graphite/85">
          <Info className="mt-0.5 size-4 shrink-0 text-digital-700" aria-hidden />
          <p>
            As frentes acima representam possibilidades de atuação. Cada projeto de automação é avaliado individualmente
            quanto à viabilidade, ao escopo e ao prazo antes de qualquer proposta.
          </p>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="sinais-titulo">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              id="sinais-titulo"
              eyebrow="Diagnóstico rápido"
              title="Sinais de que sua empresa precisa de automação."
              description="Se você reconhece alguns destes cenários, há uma boa chance de ganhar tempo e reduzir erros com processos automatizados."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {signals.map((signal) => (
              <li key={signal} className="reveal flex gap-3 rounded-2xl border border-line bg-white p-5 text-graphite shadow-card">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="dark" aria-labelledby="processo-titulo" className="isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-radial absolute inset-0" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-digital/20 blur-[120px]" />
        </div>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              id="processo-titulo"
              dark
              eyebrow="Como estruturamos"
              title="Da análise do processo à automação em funcionamento."
            />
            <ol className="mt-10 space-y-4">
              {process.map((step, index) => (
                <li key={step.title} className="glass-card flex gap-5 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-digital to-teal font-display text-sm font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-white/65">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6">
            <AutomationFlow />
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Automações"
        title="Qual processo da sua empresa poderia funcionar sozinho?"
        description="Descreva a rotina que mais consome tempo da sua equipe. A LVG avalia o cenário e indica o caminho mais adequado."
        primary={{ label: 'Avaliar meu processo', to: ctaTo }}
        secondary={{ label: 'Ver soluções SaaS', to: '/solucoes' }}
      />
    </>
  )
}
