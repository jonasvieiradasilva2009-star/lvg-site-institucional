import type { LucideIcon } from 'lucide-react'

/**
 * Estágio comercial de um produto. Altere em `src/data/products.ts`
 * e o selo, os textos de chamada e o catálogo se ajustam automaticamente.
 */
export type ProductStatus = 'disponivel' | 'beta' | 'em-desenvolvimento' | 'planejado'

export interface ProductFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProductStep {
  title: string
  description: string
}

export interface ProductFaq {
  question: string
  answer: string
}

/** Identidade visual secundária do produto (cores de destaque). */
export interface ProductAccent {
  /** Cor principal do produto (ícones, detalhes). */
  color: string
  /** Variação clara para fundos suaves. */
  soft: string
  /** Variação com contraste AA para textos sobre branco. */
  text: string
  /** Gradiente usado em ícones e destaques. */
  gradient: string
}

export interface Product {
  /** Usado na URL: /solucoes/{slug}. */
  slug: string
  name: string
  /** Categoria curta exibida acima do nome. */
  category: string
  icon: LucideIcon
  status: ProductStatus
  /**
   * Endereço do sistema em funcionamento (opcional).
   * Quando definido, o site exibe "Acessar o sistema" e "Tirar dúvidas no WhatsApp".
   */
  appUrl?: string
  accent: ProductAccent
  /** Frase de impacto (hero da página do produto). */
  tagline: string
  /** Descrição curta para cartões do catálogo. */
  summary: string
  /** Texto de apoio do hero da página do produto. */
  description: string
  audience: string[]
  benefits: string[]
  features: ProductFeature[]
  /** Bloco de destaque com a principal proposta de valor. */
  highlight: {
    eyebrow: string
    title: string
    description: string
    points: string[]
  }
  /** Contraste "sem o sistema" x "com o sistema". */
  problem: {
    title: string
    pains: string[]
    gains: string[]
  }
  steps: ProductStep[]
  faq: ProductFaq[]
  seo: {
    title: string
    description: string
  }
}
