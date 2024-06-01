import { ReactNode, useEffect, useState } from 'react'
import { ThemeContextType, ThemeContext } from './ThemeContext'

// Crée le composant Provider qui encapsule l'état et les fonctions pour le thème
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Récupère la valeur du localStorage ou utilise une valeur par défaut
    const savedTheme = localStorage.getItem('isDarkTheme')
    return savedTheme ? JSON.parse(savedTheme) : true
  })

  useEffect(() => {
    // Sauvegarde la valeur du thème dans le localStorage à chaque changement
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme))
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme: boolean) => !prevTheme)
  }

  // Passe l'état et la fonction à tous les composants descendants
  const contextValue: ThemeContextType = {
    isDarkTheme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export default ThemeContext
