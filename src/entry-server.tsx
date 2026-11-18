import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { App } from './App'
import { createSeoCollector, SeoContext } from './components/seo/seo-context'
import { site } from './config/site'
import { missingContactFields } from './lib/contact'
import { renderHeadTags } from './lib/seo'
import { getPrerenderRoutes } from './routes'

export interface RenderResult {
  html: string
  head: string
  status: number
}

/** Renderiza uma rota para HTML estático (usado por scripts/prerender.mjs). */
export function render(url: string): RenderResult {
  const collector = createSeoCollector()
  const html = renderToString(
    <StrictMode>
      <SeoContext.Provider value={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </StrictMode>,
  )
  if (!collector.meta) throw new Error(`A rota ${url} não declarou <Seo />.`)
  return { html, head: renderHeadTags(collector.meta), status: collector.status ?? 200 }
}

export { getPrerenderRoutes, missingContactFields, site }
