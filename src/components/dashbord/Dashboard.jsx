import Media from 'react-media';
import { Outlet } from 'react-router';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/currency/Currency';
// import HomeTab from 'components/HomeTab/HomeTab';
import {
  Container,
  Nav,
  NavItem,
  DashboardContainer,
} from './Dashboard.styled';

import NavigationAndBalance from './NavigationAndBalance';

import { navigation } from './navigationItems';

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Container>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px)',
          }}
        >
          {matches => (
            <>
              {matches.medium ? (
                <>
                  <NavigationAndBalance items={navigation.elseNav} />
                  <Currency />
                </>
              ) : (
                <NavigationAndBalance items={navigation.phoneNav} />
              )}
            </>
          )}
        </Media>
      </Container>
      {/* <p>{'Dashboard'}</p> */}
      {/* <HomeTab data={data} /> */}
      <Outlet />
    </DashboardContainer>
  );
};
