import { Route, Routes } from 'react-router'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { AboutPage } from '@/pages/AboutPage'
import { AutomationsPage } from '@/pages/AutomationsPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProductRoute } from '@/pages/ProductPage'
import { SolutionsPage } from '@/pages/SolutionsPage'

/** Mapa de rotas do site. Rotas de produtos são resolvidas a partir de src/data/products.ts. */
export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="solucoes" element={<SolutionsPage />} />
        <Route path="solucoes/:slug" element={<ProductRoute />} />
        <Route path="automacoes" element={<AutomationsPage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
