import { useContext } from 'react'
import { ThemeContext, ThemeContextType } from './ThemeContext'

// Crée un hook pour utiliser le contexte
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
