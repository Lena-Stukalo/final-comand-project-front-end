import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const ExitModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

export const ExitModalContent = styled.div`
  position: relative;
  padding: 20px;
  width: 500px;
  height: 230px;
  border-radius: 10px;
  background-color: var(--white);
  @media ${device.mobile} {
    height: 300px;
  }
`;

export const ExitTitle = styled.h1`
  font-size: 26px;
  font-family: 'CirceBold', sans-serif;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 30px;
  color: var(--black);
  margin-top: 10px;
  @media ${device.mobile} {
    font-size: 22px;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const BtnYes = styled.button`
  font-family: 'CirceBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  background-color: var(--btn-bg-color);
  border: none;
  color: var(--white);
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 100px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--btn-bg-color);
  &:hover {
    background-color: var(--white);
    color: var(--btn-bg-color);
    transition: 500ms;
    border: 1px solid var(--btn-bg-color);
  }
  @media ${device.mobile} {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
  }
`;

export const BtnNo = styled.button`
  font-family: 'CirceBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  background-color: #f08080;
  border: none;
  color: var(--white);
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #f08080;
  &:hover {
    background-color: var(--white);
    color: #f08080;
    transition: 500ms;
    border: 1px solid #f08080;
  }
  @media ${device.mobile} {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
`;