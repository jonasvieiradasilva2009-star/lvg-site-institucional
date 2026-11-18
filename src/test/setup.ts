import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

// jsdom não implementa rolagem; o ScrollManager chama window.scrollTo a cada navegação.
window.scrollTo = (() => {}) as typeof window.scrollTo
