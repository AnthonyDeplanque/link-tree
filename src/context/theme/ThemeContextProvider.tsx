import { useContext, ReactNode, useState } from "react";
import { ThemeContextType, ThemeContext } from "./ThemeContext";

// Crée un hook pour utiliser le contexte
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Crée le composant Provider qui encapsule l'état et les fonctions pour le thème
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  // Passe l'état et la fonction à tous les composants descendants
  const contextValue: ThemeContextType = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue} >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
