import { createContext } from 'react';

export interface LoginContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userLoggedIn?: string;
}

export const LoginContext = createContext<LoginContextType | undefined>(undefined);
