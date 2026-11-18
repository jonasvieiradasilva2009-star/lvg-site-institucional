import { Outlet } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollManager } from './ScrollManager'

export function SiteLayout() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-lg bg-petrol px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <ScrollManager />
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
