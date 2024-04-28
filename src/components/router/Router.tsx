import { Route, Routes } from 'react-router-dom';
import Legal from '../Legal';
import Login from '../authentication/Login';
import LinkList from '../links/LinkList';
import Randomizer from '../randomizer/Randomizer';

const Router = () => {
  return (
    <Routes>
      <Route path='/' Component={LinkList} />
      <Route path='/login' Component={Login} />
      <Route path='/legal' Component={Legal} />
      <Route path='/random' Component={Randomizer} />
      <Route path='*' Component={() => <p>404</p>} />
    </Routes>
  );
};

export default Router;
