import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import { missingContactFields } from './lib/contact'
import './styles/index.css'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Páginas pré-renderizadas são hidratadas; no modo de desenvolvimento a renderização é feita do zero.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}

if (import.meta.env.DEV) {
  const missing = missingContactFields()
  if (missing.length) {
    console.info(`[LVG] Dados de contato pendentes em src/config/contact.ts: ${missing.join(', ')}`)
  }
}
