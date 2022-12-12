import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Box = styled.div`
  width: 280px;
  padding: 8px 32px;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  background-color: white;
  @media ${device.tablet} {
    width: 336px;
  }
  @media ${device.tabDesk} {
    padding-left: 40px;
    padding-right: 40px;
    margin: 0;
  }
  @media ${device.desktop} {
    width: 395px;

    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 11px;
  color: var(--gray-3);
`;

export const Amount = styled.p`
  font-family: 'Poppins-Regular';
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  align-items: center;
  color: var(--black);
  margin: 0;
`;
