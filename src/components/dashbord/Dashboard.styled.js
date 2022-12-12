import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const DashboardContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;

    justify-content: space-between;

    width: 1280px;

    margin: 0 auto;
  }
`;

export const Container = styled.div`
  padding-top: 12px;
  padding-right: 20px;
  padding-left: 20px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;

    justify-content: space-between;
    align-items: flex-end;

    width: 768px;

    /* margin: 0; */
    padding-top: 32px;
    padding-right: 32px;
    padding-left: 32px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: block;

    width: 480px;

    margin-left: 0;
    margin-right: 0;

    padding-right: 0;
    padding-left: 16px;
    padding-bottom: 47px;

    border-right: 1px solid #e7e5f2;
    box-shadow-right: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const Nav = styled.nav`
  /* display: flex;
  justify-self: center; */
  width: 196px;

  margin: 0 auto;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;

    margin-left: 0;
  }
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
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

export const NavText = styled.p`
  margin-left: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => (p.isActive ? '700' : '400')};
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const NavBalContainer = styled.div``;
