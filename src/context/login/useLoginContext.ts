import { useContext } from 'react';
import { LoginContext, LoginContextType } from './loginContext';

export const useLoginContext = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within a Login Context provider');
  }
  return context;
};
