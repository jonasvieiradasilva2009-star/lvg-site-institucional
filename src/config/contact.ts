/**
 * Dados de contato comercial — ÚNICO lugar para editar telefone, e-mail e redes.
 *
 * ⚠️ PLACEHOLDERS: enquanto um campo estiver `null`, o site exibe "A definir"
 * e não gera links falsos. Preencha com os dados reais antes de publicar.
 */

export interface ContactConfig {
  whatsapp: {
    /** Somente dígitos, com DDI e DDD. Ex.: '5511999999999'. */
    number: string | null
    /** Como o número aparece no site. Ex.: '(11) 99999-9999'. */
    display: string | null
    /** Mensagem inicial sugerida ao abrir a conversa. */
    defaultMessage: string
  }
  email: string | null
  instagram: {
    /** Sem @. Ex.: 'lvgsistemas'. */
    handle: string | null
  }
  /** Ex.: 'Atendimento remoto para todo o Brasil' ou 'Cidade – UF'. */
  serviceArea: string | null
  /** Ex.: 'Segunda a sexta, das 8h às 18h'. */
  businessHours: string | null
  /** CNPJ formatado, se desejar exibir no rodapé. */
  cnpj: string | null
}

export const contact: ContactConfig = {
  whatsapp: {
    number: '5569993539978',
    display: '(69) 99353-9978',
    defaultMessage: 'Olá! Gostaria de conhecer as soluções da LVG Sistemas e Automações.',
  },
  email: null, // PENDENTE — informar e-mail comercial quando estiver configurado
  instagram: {
    handle: 'lvgsistemas',
  },
  serviceArea: 'Atendimento remoto para todo o Brasil',
  businessHours: 'Segunda a sexta, das 8h às 18h',
  cnpj: null, // Opcional
}
