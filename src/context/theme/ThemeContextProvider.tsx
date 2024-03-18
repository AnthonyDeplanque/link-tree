import { ReactNode, useState } from "react";
import { ThemeContextType, ThemeContext } from "./ThemeContext";



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
