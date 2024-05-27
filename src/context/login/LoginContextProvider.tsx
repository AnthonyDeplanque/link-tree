import { ReactNode, useEffect, useState } from 'react';
import { LoginContext, LoginContextType } from './loginContext';

export const LOGIN_LOCALSTORAGE = 'login';

export const LoginContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const isLoggedIn = localStorage.getItem(LOGIN_LOCALSTORAGE);
    return isLoggedIn ? JSON.parse(isLoggedIn) : false;
  });

  useEffect(() => {
    localStorage.setItem(LOGIN_LOCALSTORAGE, JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const contextValue: LoginContextType = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>;
};
