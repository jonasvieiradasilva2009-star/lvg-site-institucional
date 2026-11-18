import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * false no HTML pré-renderizado e durante a hidratação; true depois.
 * Permite usar dados do navegador (ex.: query string) sem divergir do HTML estático.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
