import React from 'react';
import { useTheme } from '../context/theme/ThemeContextProvider';

import Header from './header/Header';

const MainComponent: React.FC = () => {
  const { isDarkTheme } = useTheme()

  return (
    <div className={`${isDarkTheme ? "light" : "dark"} main-container`} >
      <Header />

    </div >);


};

export default MainComponent;