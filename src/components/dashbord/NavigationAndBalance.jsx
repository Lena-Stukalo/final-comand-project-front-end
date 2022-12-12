import { Balance } from 'components/Balance/Balance';

import { Nav, NavItem, NavText, NavBalContainer } from './Dashboard.styled';

const NavigationAndBalance = ({ items }) => {
  return (
    <NavBalContainer>
      <Nav>
        {items.map(({ icon: Icon, value, ...props }) => (
          <NavItem key={props.path} end to={props.path}>
            {({ isActive }) => (
              <>
                <Icon isActive={isActive} />
                {value && <NavText isActive={isActive}>{value}</NavText>}
              </>
            )}
          </NavItem>
        ))}
      </Nav>
      <Balance />
    </NavBalContainer>
  );
};

export default NavigationAndBalance;
