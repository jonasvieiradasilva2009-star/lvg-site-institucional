import { ArrowRight, Cloud, CreditCard, LayoutGrid, RefreshCw } from 'lucide-react'
import { Link } from 'react-router'
import { ProductCard } from '@/components/products/ProductCard'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { IconBox } from '@/components/sections/IconBox'
import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/sections/Section'
import { Seo } from '@/components/seo/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { products, productStatusMeta } from '@/data/products'
import type { ProductStatus } from '@/types/product'

const saasModel = [
  {
    icon: Cloud,
    title: 'Acesso on-line',
    description: 'Sistemas acessados pelo navegador, sem instalação e sem necessidade de servidores próprios.',
  },
  {
    icon: CreditCard,
    title: 'Assinatura mensal',
    description: 'Custos previsíveis, sem grandes investimentos iniciais em licenças ou infraestrutura.',
  },
  {
    icon: RefreshCw,
    title: 'Evolução contínua',
    description: 'Melhorias e novos recursos incorporados ao longo do tempo, sem reinstalações.',
  },
  {
    icon: LayoutGrid,
    title: 'Foco por segmento',
    description: 'Cada sistema é desenhado para a rotina de um tipo de operação, com o essencial bem resolvido.',
  },
]

const statusOrder: ProductStatus[] = ['disponivel', 'beta', 'em-desenvolvimento', 'planejado']

export function SolutionsPage() {
  return (
    <>
      <Seo
        title="Soluções SaaS"
        description="Conheça o catálogo de soluções da LVG: sistemas de gestão on-line por assinatura, como o LVG Frotas e o LVG Delivery."
        path="/solucoes"
      />

      <PageHero
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Soluções' }]}
        eyebrow={<Badge tone="dark">Catálogo LVG</Badge>}
        title={
          <>
            Soluções SaaS para uma <span className="text-gradient">gestão mais simples.</span>
          </>
        }
        description="Sistemas on-line, por assinatura, criados para resolver desafios específicos de gestão. Conheça as soluções do portfólio LVG e o estágio atual de cada uma."
      />

      <Section aria-labelledby="catalogo-titulo">
        <div>
          <SectionHeading
            id="catalogo-titulo"
            eyebrow="Portfólio"
            title="Escolha a solução para a sua operação."
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} detailed />
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          Transparência em primeiro lugar: cada solução informa seu estágio atual —{' '}
          {statusOrder.map((status) => productStatusMeta[status].label.toLowerCase()).join(', ')}. Recursos de soluções em
          desenvolvimento podem ser ajustados até o lançamento.
        </p>
      </Section>

      <Section tone="surface" aria-labelledby="modelo-titulo">
        <SectionHeading
          id="modelo-titulo"
          align="center"
          eyebrow="Modelo SaaS"
          title="Software como serviço: tecnologia profissional sem complicação."
          description="Todas as soluções LVG seguem o mesmo princípio: entregar ferramentas completas de gestão de forma acessível e sempre atualizada."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {saasModel.map(({ icon, title, description }) => (
            <div key={title} className="reveal rounded-2xl border border-line bg-white p-7 shadow-card">
              <IconBox icon={icon} />
              <h3 className="mt-6 text-lg font-semibold text-petrol">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="h-auto min-h-11 py-3 whitespace-normal">
            <Link to="/automacoes">
              Precisa integrar sistemas? Veja as automações
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBanner
        eyebrow="Sua necessidade"
        title="Não encontrou a solução ideal para o seu negócio?"
        description="A LVG está ampliando seu portfólio. Conte qual desafio de gestão você enfrenta hoje — ele pode se tornar a próxima solução."
        primary={{ label: 'Fale com a LVG', to: '/contato' }}
        secondary={{ label: 'Conheça a LVG', to: '/sobre' }}
      />
    </>
  )
}
