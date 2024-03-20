import React from 'react';
import Router from './router/Router';

const MainComponent: React.FC = (): JSX.Element => {
  return (
    <div className='main-container'>
      <Router />
    </div>
  );
};

export default MainComponent;
