import { ReactNode, useEffect, useState } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props: ThemeProviderProps): JSX.Element => {
  const { children } = props;
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Récupère la valeur du localStorage ou utilise une valeur par défaut
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    // Sauvegarde la valeur du thème dans le localStorage à chaque changement
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = (): void => {
    setIsDarkTheme((prevTheme: boolean) => !prevTheme);
  };

  // Passe l'état et la fonction à tous les composants descendants
  const contextValue: ThemeContextType = {
    isDarkTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
