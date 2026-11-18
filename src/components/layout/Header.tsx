import { ArrowRight, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { mainNav, site } from '@/config/site'
import { products, productStatusMeta } from '@/data/products'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

export function Header() {
  const scrolled = useScrolled()

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-white/85 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-white/75',
        scrolled ? 'border-line shadow-[0_8px_30px_-18px_rgb(7_26_43/0.25)]' : 'border-transparent',
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <Link to="/" aria-label={`${site.name} — página inicial`} className="-ml-1 rounded-lg p-1">
          <Logo priority className="h-10 sm:h-11 lg:h-12" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-lg px-4 py-2 text-[15px] font-medium transition-colors',
                      isActive ? 'text-petrol' : 'text-graphite/75 hover:text-petrol',
                      'after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-digital after:transition-transform after:duration-300',
                      isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="md" className="hidden sm:inline-flex">
            <Link to="/contato">
              Fale com a LVG
              <ArrowRight className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
          <Menu className="size-6!" aria-hidden />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby="mobile-nav-description">
        <div className="flex h-[72px] items-center border-b border-line px-5">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription id="mobile-nav-description" className="sr-only">
            Navegação do site {site.name}
          </SheetDescription>
          <Link to="/" aria-label={`${site.name} — página inicial`} onClick={() => setOpen(false)}>
            <Logo className="h-10" />
          </Link>
        </div>
        <nav
          aria-label="Navegação principal (mobile)"
          className="flex-1 overflow-y-auto px-3 py-6"
          // Fecha o menu ao tocar em qualquer link.
          onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) setOpen(false)
          }}
        >
          <ul className="space-y-1">
            <li>
              <MobileLink to="/" end>
                Início
              </MobileLink>
            </li>
            {mainNav.map((item) => (
              <li key={item.to}>
                <MobileLink to={item.to}>{item.label}</MobileLink>
                {item.to === '/solucoes' && (
                  <ul className="mt-1 mb-2 ml-4 space-y-1 border-l border-line pl-3">
                    {products.map((product) => (
                      <li key={product.slug}>
                        <NavLink
                            to={`/solucoes/${product.slug}`}
                            className={({ isActive }) =>
                              cn(
                                'flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-[15px] text-graphite/80 hover:bg-mist',
                                isActive && 'font-semibold text-petrol',
                              )
                            }
                          >
                            {product.name}
                            <span className="text-[11px] font-medium text-muted">
                              {productStatusMeta[product.status].label}
                            </span>
                          </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-line p-5">
          <Button asChild size="lg" className="w-full">
            <Link to="/contato" onClick={() => setOpen(false)}>
              Fale com a LVG
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <p className="mt-3 text-center text-xs text-muted">{site.slogan}</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function MobileLink({ to, end, children }: { to: string; end?: boolean; children: React.ReactNode }) {
  return (
    <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          cn(
            'flex items-center rounded-xl px-3 py-3 font-display text-lg font-semibold transition-colors',
            isActive ? 'bg-digital-50 text-petrol' : 'text-graphite hover:bg-mist',
          )
        }
      >
      {children}
    </NavLink>
  )
}
