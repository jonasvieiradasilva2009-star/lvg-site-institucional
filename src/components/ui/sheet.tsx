import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Painel lateral acessível (padrão shadcn/ui) usado no menu mobile. */
export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetClose = DialogPrimitive.Close
export const SheetTitle = DialogPrimitive.Title
export const SheetDescription = DialogPrimitive.Description

export function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm data-[state=closed]:animate-[fade-out_150ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]" />
      <DialogPrimitive.Content
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl outline-none data-[state=closed]:animate-[sheet-out_180ms_ease-in] data-[state=open]:animate-[sheet-in_260ms_cubic-bezier(0.22,1,0.36,1)]',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-lg text-petrol transition-colors hover:bg-mist"
          aria-label="Fechar menu"
        >
          <X className="size-5" aria-hidden />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
