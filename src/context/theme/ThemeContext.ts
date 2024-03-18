import { createContext } from 'react';

// Définition du type du contexte
export interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

// Crée un contexte avec une valeur par défaut de type ThemeContextType
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
