import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router'

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Rota interna (ex.: "/contato") ou endereço externo (https://, mailto:). */
  to: string
  /** Abre endereços externos em nova aba. */
  newTab?: boolean
}

const isExternalUrl = (to: string) => /^(https?:|mailto:)/.test(to)

/** Link que usa o roteador para rotas internas e <a> comum para endereços externos. */
export function SmartLink({ to, newTab = false, children, ...props }: SmartLinkProps) {
  if (isExternalUrl(to)) {
    return (
      <a href={to} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
        {newTab && <span className="sr-only"> (abre em nova aba)</span>}
      </a>
    )
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}
