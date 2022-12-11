import Header from 'components/Header';
import { Dashboard } from 'components/dashbord/Dashboard';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { Container } from './Layout.styled';

const Layout = () => {
  const location = useLocation();
  console.log(location);

  if (location.pathname === '/') {
    return <Navigate to="/home" />;
  }

  return (
    <Container>
      <Header />
      <Dashboard />
      <Outlet />
    </Container>
  );
};

export default Layout;
