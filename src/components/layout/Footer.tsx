import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon as Instagram } from '@/components/brand/InstagramIcon'
import { Link } from 'react-router'
import { Logo } from '@/components/brand/Logo'
import { contact } from '@/config/contact'
import { site } from '@/config/site'
import { products } from '@/data/products'
import { buildEmailUrl, buildInstagramUrl, buildWhatsAppUrl, PLACEHOLDER_LABEL } from '@/lib/contact'

const CURRENT_YEAR = new Date().getFullYear()

const companyLinks = [
  { label: 'Sobre a LVG', to: '/sobre' },
  { label: 'Automações', to: '/automacoes' },
  { label: 'Contato', to: '/contato' },
]

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl()
  const emailUrl = buildEmailUrl()
  const instagramUrl = buildInstagramUrl()

  const channels = [
    { icon: MessageCircle, label: 'WhatsApp', value: contact.whatsapp.display, href: whatsappUrl, external: true },
    { icon: Mail, label: 'E-mail', value: contact.email, href: emailUrl, external: false },
    {
      icon: Instagram,
      label: 'Instagram',
      value: contact.instagram.handle ? `@${contact.instagram.handle}` : null,
      href: instagramUrl,
      external: true,
    },
  ]

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Link to="/" aria-label={`${site.name} — página inicial`} className="inline-block rounded-lg">
            <Logo className="h-14 sm:h-16" />
          </Link>
          <p className="mt-6 max-w-sm font-display text-lg leading-snug font-semibold text-petrol">{site.slogan}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Sistemas de gestão SaaS e automações empresariais para tornar processos mais simples, organizados e
            eficientes.
          </p>
        </div>

        <FooterColumn title="Soluções" className="lg:col-span-2 lg:col-start-6">
          <li>
            <FooterLink to="/solucoes">Todas as soluções</FooterLink>
          </li>
          {products.map((product) => (
            <li key={product.slug}>
              <FooterLink to={`/solucoes/${product.slug}`}>{product.name}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Empresa" className="lg:col-span-2">
          {companyLinks.map((link) => (
            <li key={link.to}>
              <FooterLink to={link.to}>{link.label}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contato" className="lg:col-span-3">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label} className="flex items-start gap-3 text-sm">
              <Icon className="mt-0.5 size-4 shrink-0 text-petrol" aria-hidden />
              <span>
                <span className="block text-xs font-medium tracking-wide text-muted uppercase">{label}</span>
                {href && value ? (
                  <a
                    href={href}
                    className="font-medium text-graphite transition-colors hover:text-digital-700"
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-muted italic">{PLACEHOLDER_LABEL}</span>
                )}
              </span>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span suppressHydrationWarning>{CURRENT_YEAR}</span> {site.legalName}. Todos os direitos
            reservados.
            {contact.cnpj && <span className="ml-1">CNPJ {contact.cnpj}</span>}
          </p>
          <p>{site.slogan}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="font-sans text-xs font-semibold tracking-[0.14em] text-petrol uppercase">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-graphite/80 transition-colors hover:text-digital-700">
      {children}
    </Link>
  )
}
