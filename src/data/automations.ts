import { Bot, Building2, Cable, Code2, Repeat2, Workflow, type LucideIcon } from 'lucide-react'

export interface AutomationService {
  icon: LucideIcon
  title: string
  description: string
  examples: string[]
}

/**
 * Frentes de automação apresentadas em /automacoes e na página inicial.
 * Os textos descrevem possibilidades — a disponibilidade é tratada caso a caso.
 */
export const automationServices: AutomationService[] = [
  {
    icon: Repeat2,
    title: 'Automação de tarefas repetitivas',
    description:
      'Rotinas manuais que consomem horas da equipe podem ser executadas automaticamente, com menos erros.',
    examples: ['Geração de relatórios periódicos', 'Envio de lembretes e avisos', 'Organização de arquivos e dados'],
  },
  {
    icon: Cable,
    title: 'Integração entre sistemas',
    description:
      'Conexão entre ferramentas que hoje não conversam entre si, evitando digitação duplicada de informações.',
    examples: ['Sincronização de cadastros', 'Troca de dados via API', 'Consolidação de informações'],
  },
  {
    icon: Workflow,
    title: 'Fluxos de trabalho inteligentes',
    description:
      'Processos desenhados com etapas, regras e responsáveis claros, para que nada fique esquecido no caminho.',
    examples: ['Aprovações e encaminhamentos', 'Regras de negócio automatizadas', 'Acompanhamento de etapas'],
  },
  {
    icon: Bot,
    title: 'Assistentes com inteligência artificial',
    description:
      'Uso de IA para apoiar atendimento, organização de informações e tarefas que exigem interpretação de textos.',
    examples: ['Triagem de solicitações', 'Respostas a perguntas frequentes', 'Resumo e classificação de documentos'],
  },
  {
    icon: Building2,
    title: 'Automatização de processos empresariais',
    description:
      'Análise da rotina administrativa e operacional para identificar onde a automação gera mais eficiência.',
    examples: ['Mapeamento de processos', 'Rotinas financeiras e administrativas', 'Indicadores automáticos'],
  },
  {
    icon: Code2,
    title: 'Soluções digitais personalizadas',
    description:
      'Quando o mercado não tem a ferramenta ideal, a LVG avalia o desenvolvimento de uma solução sob medida.',
    examples: ['Painéis e sistemas internos', 'Ferramentas específicas do negócio', 'Evolução de processos existentes'],
  },
]
