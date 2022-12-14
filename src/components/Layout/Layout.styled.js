import styled from 'styled-components';
import bgImg from '../../assets/media/images/backgroundImg.jpg';

export const Container = styled.div`
  background-color: #f1f2f7;

  @media screen and (min-width: 768px) {
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
