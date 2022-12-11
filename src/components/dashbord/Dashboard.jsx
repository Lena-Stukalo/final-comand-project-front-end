import { useLocation } from 'react-router-dom';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/currency/Currency';
// import HomeTab from 'components/HomeTab/HomeTab';
import { Container, Nav, NavItem } from './Dashboard.styled';
import { navIcons } from 'assets/media/icons';

export const Dashboard = () => {
  // const location = useLocation()

  const nav = [
    { path: '/home', icon: navIcons.NavHomeIcon },
    { path: '/diagram', icon: navIcons.NavStatisticsIcon },
    { path: '/currency', icon: navIcons.NavCurrencyIcon },
  ];

  return (
    <Container>
      <Nav>
        {nav.map(({ icon: Icon, ...props }) => (
          <NavItem key={props.path} end to={props.path}>
            {({ isActive }) => <Icon isActive={isActive} />}
          </NavItem>
        ))}
      </Nav>
      <Balance />
      {/* <Currency /> */}
      {/* <p>{'Dashboard'}</p> */}
      {/* <HomeTab data={data} /> */}
      {/* <Outlet /> */}
    </Container>
  );
};
