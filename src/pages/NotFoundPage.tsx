import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router'
import { HeroBackdrop } from '@/components/sections/PageHero'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/button'
import { mainNav } from '@/config/site'

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
        path="/404"
        noindex
        status={404}
      />
      <section className="dark-surface relative isolate overflow-hidden bg-ink text-white">
        <HeroBackdrop />
        <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/[0.06] text-teal-300 ring-1 ring-white/10">
            <Compass className="size-7" strokeWidth={1.75} aria-hidden />
          </span>
          <p className="mt-8 font-display text-7xl font-semibold text-gradient sm:text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Página não encontrada</h1>
          <p className="mt-4 max-w-md text-lg text-white/70">
            O endereço acessado não existe ou foi alterado. Use os links abaixo para continuar navegando.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/">
                <ArrowLeft aria-hidden />
                Voltar ao início
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/contato">Fale com a LVG</Link>
            </Button>
          </div>
          <nav aria-label="Páginas do site" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
