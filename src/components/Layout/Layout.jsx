import Header from 'components/Header';
import { Dashboard } from 'components/dashbord/Dashboard';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { Container } from './Layout.styled';

const Layout = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/home" />;
  }

  return (
    <Container>
      <Header />
      <Dashboard>
        <Outlet />
      </Dashboard>
    </Container>
  );
};

export default Layout;
