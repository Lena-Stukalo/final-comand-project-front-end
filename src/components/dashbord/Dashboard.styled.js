import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 12px;
  padding-right: 20px;
  padding-left: 20px;

  margin: 0 auto;
`;

export const Nav = styled.nav`
  /* display: flex;
  justify-self: center; */
  width: 196px;

  margin: 0 auto;
  margin-bottom: 12px;
`;

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;

  text-decoration: none;
  padding: 3px;

  :not(:last-child) {
    margin-right: 32px;
  }

  &.active {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;
