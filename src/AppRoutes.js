import React from 'react';
import { useSelector } from 'react-redux';
import createRoutes from './routes';


const AppRoutes = () => {
  const { signed } = useSelector(state => state.auth)
  const Routes = createRoutes(signed);
  return <Routes />;
}

export default AppRoutes;