import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { getPrerenderRoutes } from './routes'

function renderAt(url: string) {
  return render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )
}

describe('rotas', () => {
  it.each(getPrerenderRoutes())('%s renderiza com um único h1, cabeçalho e rodapé', (route) => {
    const { container } = renderAt(route)
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.queryByText('Página não encontrada')).not.toBeInTheDocument()
  })

  it('exibe a página 404 para rotas inexistentes', () => {
    renderAt('/pagina-que-nao-existe')
    expect(screen.getByRole('heading', { level: 1, name: 'Página não encontrada' })).toBeInTheDocument()
  })

  it('exibe 404 para produto inexistente', () => {
    renderAt('/solucoes/produto-inexistente')
    expect(screen.getByRole('heading', { level: 1, name: 'Página não encontrada' })).toBeInTheDocument()
  })

  it('a página inicial traz o slogan e as chamadas principais', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tecnologia inteligente para simplificar negócios.')
    expect(screen.getAllByRole('link', { name: /Conheça nossas soluções/ })[0]).toHaveAttribute('href', '/solucoes')
    expect(screen.getAllByRole('link', { name: /Fale com a LVG/ })[0]).toHaveAttribute('href', '/contato')
  })

  it('a página de contato usa os dados configurados e não cria links para dados pendentes', () => {
    const { container } = renderAt('/contato?interesse=frotas')
    const whatsapp = container.querySelector<HTMLAnchorElement>('main a[href^="https://wa.me/5569993539978"]')
    expect(whatsapp).not.toBeNull()
    expect(decodeURIComponent(whatsapp!.href)).toContain('LVG Frotas')
    expect(container.querySelector('main a[href="https://www.instagram.com/lvgsistemas/"]')).not.toBeNull()
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull()
    expect(container.querySelector('form')).toBeNull()
    expect(screen.getAllByText('Canal em configuração')).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'LVG Frotas' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('o LVG Frotas leva ao sistema e ao WhatsApp', () => {
    const { container } = renderAt('/solucoes/frotas')
    const access = screen.getAllByRole('link', { name: /Acessar o LVG Frotas/ })
    expect(access.length).toBeGreaterThan(0)
    for (const link of access) expect(link).toHaveAttribute('href', 'https://frotas.lvgsistemas.com.br')
    const whatsapp = container.querySelectorAll<HTMLAnchorElement>('main a[href^="https://wa.me/5569993539978"]')
    expect(whatsapp.length).toBeGreaterThan(0)
    expect(decodeURIComponent(whatsapp[0].href)).toContain('LVG Frotas')
    expect(whatsapp[0]).toHaveAttribute('target', '_blank')
    expect(screen.getAllByText('Disponível').length).toBeGreaterThan(0)
  })

  it('o catálogo exibe o acesso direto ao sistema', () => {
    renderAt('/solucoes')
    expect(screen.getByRole('link', { name: /Acessar o sistema LVG Frotas/ })).toHaveAttribute(
      'href',
      'https://frotas.lvgsistemas.com.br',
    )
  })

  it('produtos em desenvolvimento são identificados', () => {
    renderAt('/solucoes/delivery')
    expect(screen.getAllByText('Em desenvolvimento').length).toBeGreaterThan(0)
  })
})
