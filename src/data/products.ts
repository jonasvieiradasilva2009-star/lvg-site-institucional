import {
  BadgeDollarSign,
  BarChart3,
  BellRing,
  ClipboardList,
  FileCheck2,
  Fuel,
  LayoutDashboard,
  MapPinned,
  Store,
  Truck,
  UserRound,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react'
import type { Product, ProductStatus } from '@/types/product'

/**
 * Catálogo de soluções LVG.
 *
 * Para adicionar um novo SaaS, inclua um objeto neste array.
 * A rota /solucoes/{slug}, o cartão do catálogo, o sitemap e as metatags
 * são gerados automaticamente a partir destes dados.
 */
export const products: Product[] = [
  {
    slug: 'frotas',
    name: 'LVG Frotas',
    category: 'Gestão de frotas',
    icon: Truck,
    status: 'em-desenvolvimento',
    accent: {
      color: '#1E88E5',
      soft: '#EAF3FD',
      text: '#1565C0',
      gradient: 'linear-gradient(135deg, #1E88E5 0%, #123C5A 100%)',
    },
    tagline: 'Toda a operação da sua frota sob controle, em um só lugar.',
    summary:
      'Sistema de gestão para frotas mistas: veículos, motoristas, abastecimentos, manutenções e vencimentos de documentos organizados em um painel único.',
    description:
      'O LVG Frotas centraliza as informações de veículos leves e pesados, motoristas, abastecimentos, manutenções e documentos. Menos planilhas espalhadas, mais visibilidade para decidir com segurança.',
    audience: [
      'Transportadoras e operações logísticas',
      'Empresas com frota própria de veículos leves e pesados',
      'Prestadores de serviço com equipes em campo',
      'Distribuidoras, construtoras e empresas do agronegócio',
    ],
    benefits: [
      'Histórico completo de cada veículo em poucos cliques',
      'Previsibilidade de manutenções e custos operacionais',
      'Menos multas e transtornos por documentos vencidos',
      'Informações confiáveis para decisões gerenciais',
      'Redução de controles manuais e retrabalho',
    ],
    features: [
      {
        icon: Truck,
        title: 'Gestão de veículos',
        description:
          'Cadastro completo da frota mista, com dados técnicos, situação, quilometragem e histórico de cada veículo.',
      },
      {
        icon: UserRound,
        title: 'Cadastro de motoristas',
        description:
          'Informações dos condutores, habilitação, categoria e vínculo com os veículos utilizados.',
      },
      {
        icon: Fuel,
        title: 'Controle de abastecimentos',
        description:
          'Registro de abastecimentos por veículo, com litros, valores e quilometragem para acompanhar o consumo.',
      },
      {
        icon: Wrench,
        title: 'Gestão de manutenções',
        description:
          'Manutenções preventivas e corretivas organizadas, com histórico de serviços, peças e custos.',
      },
      {
        icon: LayoutDashboard,
        title: 'Dashboard gerencial',
        description:
          'Visão consolidada da operação com indicadores de custos, consumo, manutenções e pendências.',
      },
      {
        icon: FileCheck2,
        title: 'Documentos e vencimentos',
        description:
          'Licenciamento, seguros, CNH e demais documentos com datas de vencimento centralizadas.',
      },
      {
        icon: BellRing,
        title: 'Alertas de vencimento',
        description:
          'Avisos automáticos a partir de sete dias antes da data final, para agir antes que o prazo expire.',
      },
    ],
    highlight: {
      eyebrow: 'Alertas inteligentes',
      title: 'Vencimentos sob controle, com sete dias de antecedência.',
      description:
        'O sistema acompanha as datas de documentos e obrigações e passa a alertar sua equipe a partir de sete dias antes do vencimento. Tempo suficiente para renovar, agendar e evitar imprevistos.',
      points: [
        'Alertas para documentos de veículos e motoristas',
        'Lista de pendências priorizada por proximidade do prazo',
        'Visão clara do que está em dia, a vencer e vencido',
      ],
    },
    problem: {
      title: 'Da planilha dispersa para a gestão organizada',
      pains: [
        'Controles em planilhas, cadernos e mensagens',
        'Documentos que vencem sem ninguém perceber',
        'Manutenções feitas só quando o problema aparece',
        'Dificuldade para saber quanto cada veículo custa',
      ],
      gains: [
        'Informações da frota centralizadas e atualizadas',
        'Alertas automáticos antes dos vencimentos',
        'Manutenções planejadas e com histórico',
        'Custos por veículo visíveis no painel gerencial',
      ],
    },
    steps: [
      {
        title: 'Cadastre a frota',
        description: 'Inclua veículos, motoristas e documentos em um ambiente simples e organizado.',
      },
      {
        title: 'Registre a rotina',
        description: 'Lance abastecimentos e manutenções conforme a operação acontece.',
      },
      {
        title: 'Acompanhe e decida',
        description: 'Use o painel e os alertas para agir com antecedência e controlar custos.',
      },
    ],
    faq: [
      {
        question: 'O LVG Frotas já está disponível?',
        answer:
          'O sistema está em desenvolvimento. Fale com a LVG para acompanhar o lançamento e conhecer o produto assim que estiver disponível.',
      },
      {
        question: 'O que é uma frota mista?',
        answer:
          'É uma frota composta por diferentes tipos de veículos, como carros, utilitários, caminhões e motos. O LVG Frotas foi planejado para lidar com essa diversidade em um único sistema.',
      },
      {
        question: 'Como funcionam os alertas de vencimento?',
        answer:
          'Cada documento possui uma data de vencimento. A partir de sete dias antes dessa data, o sistema passa a sinalizar a pendência para que a equipe tome as providências a tempo.',
      },
      {
        question: 'Preciso instalar algum programa?',
        answer:
          'Não. O LVG Frotas está sendo desenvolvido no modelo SaaS, acessado pelo navegador, sem necessidade de instalação ou servidores próprios.',
      },
    ],
    seo: {
      title: 'LVG Frotas — Sistema de gestão de frotas mistas',
      description:
        'Gestão de veículos, motoristas, abastecimentos, manutenções e vencimentos de documentos em um só sistema, com alertas a partir de sete dias antes do prazo.',
    },
  },
  {
    slug: 'delivery',
    name: 'LVG Delivery',
    category: 'Delivery regional e gestão de restaurantes',
    icon: UtensilsCrossed,
    status: 'em-desenvolvimento',
    accent: {
      color: '#19B39B',
      soft: '#E6F7F4',
      text: '#0B7A69',
      gradient: 'linear-gradient(135deg, #19B39B 0%, #123C5A 100%)',
    },
    tagline: 'Delivery regional com mensalidade fixa, sem comissão por pedido.',
    summary:
      'Marketplace de delivery para a sua região integrado a um sistema de gestão para restaurantes, com modelo de assinatura mensal em vez de percentual sobre vendas.',
    description:
      'O LVG Delivery conecta restaurantes e clientes da mesma cidade em uma plataforma regional, integrada a um sistema completo de gestão. O restaurante paga uma assinatura mensal previsível — sem percentual sobre cada venda.',
    audience: [
      'Restaurantes, lanchonetes e pizzarias',
      'Hamburguerias, docerias e cafeterias',
      'Estabelecimentos de cidades pequenas e médias',
      'Negócios que desejam vender on-line com custo previsível',
    ],
    benefits: [
      'Custo mensal fixo e previsível, sem comissão por pedido',
      'Presença digital em uma vitrine da sua própria região',
      'Pedidos organizados do recebimento à entrega',
      'Cardápio digital sempre atualizado',
      'Gestão do restaurante e vendas on-line no mesmo lugar',
    ],
    features: [
      {
        icon: MapPinned,
        title: 'Marketplace regional',
        description:
          'Uma vitrine on-line que reúne os estabelecimentos da cidade e aproxima o restaurante do público local.',
      },
      {
        icon: Store,
        title: 'Gestão de restaurantes',
        description:
          'Painel administrativo para acompanhar a operação, horários de funcionamento, produtos e configurações.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Cardápio digital',
        description:
          'Itens, categorias, adicionais e preços editáveis a qualquer momento, com visual moderno para o cliente.',
      },
      {
        icon: ClipboardList,
        title: 'Organização de pedidos',
        description:
          'Fluxo claro do pedido recebido até a entrega, reduzindo erros, atrasos e anotações em papel.',
      },
      {
        icon: BadgeDollarSign,
        title: 'Assinatura mensal',
        description:
          'Modelo de cobrança mensal fixa em vez de percentual por venda: o restaurante sabe exatamente quanto vai pagar.',
      },
      {
        icon: BarChart3,
        title: 'Relatórios de vendas',
        description:
          'Acompanhamento do volume de pedidos e dos produtos mais vendidos para apoiar decisões do dia a dia.',
      },
    ],
    highlight: {
      eyebrow: 'Modelo de assinatura',
      title: 'Mensalidade fixa. O resultado das vendas fica com o restaurante.',
      description:
        'Em vez de cobrar um percentual sobre cada pedido, o LVG Delivery funciona por assinatura mensal. O custo da tecnologia se torna previsível e não cresce a cada venda realizada.',
      points: [
        'Sem percentual sobre o valor dos pedidos',
        'Planejamento financeiro mais simples',
        'Plataforma pensada para a realidade de cidades pequenas e médias',
      ],
    },
    problem: {
      title: 'Do pedido anotado no papel para uma operação digital',
      pains: [
        'Pedidos recebidos por diversos canais, sem organização',
        'Comissões que reduzem a margem a cada venda',
        'Cardápio desatualizado ou difícil de compartilhar',
        'Pouca visibilidade sobre o desempenho das vendas',
      ],
      gains: [
        'Pedidos centralizados em um painel único',
        'Custo mensal fixo e previsível',
        'Cardápio digital editável a qualquer momento',
        'Relatórios para acompanhar a operação',
      ],
    },
    steps: [
      {
        title: 'Monte seu cardápio',
        description: 'Cadastre produtos, categorias, adicionais e horários de funcionamento.',
      },
      {
        title: 'Receba pedidos da região',
        description: 'Clientes da sua cidade encontram o restaurante e fazem pedidos pela plataforma.',
      },
      {
        title: 'Gerencie com clareza',
        description: 'Acompanhe cada pedido até a entrega e consulte os relatórios de vendas.',
      },
    ],
    faq: [
      {
        question: 'O LVG Delivery já está disponível?',
        answer:
          'A plataforma está em desenvolvimento. Fale com a LVG para registrar seu interesse e ser informado sobre a disponibilidade na sua região.',
      },
      {
        question: 'Como funciona a cobrança?',
        answer:
          'O modelo previsto é de assinatura mensal fixa para o restaurante, sem percentual sobre o valor de cada pedido. Os valores e planos serão divulgados no lançamento.',
      },
      {
        question: 'Para quais cidades a plataforma é pensada?',
        answer:
          'O LVG Delivery foi concebido com foco em cidades pequenas e médias, onde um marketplace regional aproxima os estabelecimentos do público local.',
      },
      {
        question: 'Posso usar somente a gestão do restaurante?',
        answer:
          'A proposta é integrar marketplace e gestão em uma única solução. Converse com a LVG para entender como a plataforma pode atender a sua operação.',
      },
    ],
    seo: {
      title: 'LVG Delivery — Delivery regional com mensalidade fixa',
      description:
        'Marketplace de delivery regional integrado à gestão de restaurantes: cardápio digital, organização de pedidos e assinatura mensal sem comissão por venda.',
    },
  },
]

export function getProduct(slug: string | undefined): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export const productStatusMeta: Record<
  ProductStatus,
  { label: string; tone: 'success' | 'info' | 'warning' | 'neutral'; cta: string; note: string }
> = {
  disponivel: {
    label: 'Disponível',
    tone: 'success',
    cta: 'Solicitar apresentação',
    note: 'Solução disponível para contratação.',
  },
  beta: {
    label: 'Em fase de testes',
    tone: 'info',
    cta: 'Quero participar dos testes',
    note: 'Solução em fase de testes com acesso controlado.',
  },
  'em-desenvolvimento': {
    label: 'Em desenvolvimento',
    tone: 'warning',
    cta: 'Quero acompanhar o lançamento',
    note: 'Solução em desenvolvimento. Recursos e prazos podem ser ajustados até o lançamento.',
  },
  planejado: {
    label: 'Em planejamento',
    tone: 'neutral',
    cta: 'Registrar interesse',
    note: 'Solução em fase de planejamento.',
  },
}
