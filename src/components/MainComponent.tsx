import React from 'react';
import { useTheme } from '../context/theme/ThemeContextProvider';

const MainComponent: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Passer au thème clair' : 'Passer au thème foncé'}
      </button>
      <p>{isDarkTheme ? 'Thème foncé activé' : 'Thème clair activé'}</p>
    </div>
  );
};

export default MainComponent;