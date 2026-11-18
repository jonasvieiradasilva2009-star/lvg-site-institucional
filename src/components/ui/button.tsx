import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/** Botão base no padrão shadcn/ui, com variantes da identidade LVG. */
export const buttonVariants = cva(
  'group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        /** Ação principal sobre fundos claros ou escuros. */
        primary:
          'bg-digital-600 text-white shadow-[0_8px_24px_-10px_rgb(30_136_229/0.7)] hover:bg-digital-700 hover:shadow-[0_12px_28px_-10px_rgb(30_136_229/0.8)]',
        /** Ação institucional sobre fundos claros. */
        dark: 'bg-petrol text-white hover:bg-petrol-800',
        /** Contorno sobre fundos claros. */
        outline: 'border border-line bg-white text-petrol hover:border-petrol/30 hover:bg-mist/60',
        /** Ação clara sobre fundos escuros. */
        light: 'bg-white text-petrol hover:bg-mist',
        /** Contorno sobre fundos escuros. */
        'outline-light': 'border border-white/20 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/10',
        ghost: 'text-petrol hover:bg-mist',
        link: 'h-auto px-0 text-digital-700 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-3.5 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-[15px] sm:h-[52px] sm:px-7',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renderiza o filho (ex.: <Link>) com o estilo do botão. */
  asChild?: boolean
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
