import styled from 'styled-components';

const NavHomeIcon = ({ isActive }) => {
  return (
    <Svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        isActive={isActive}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 0C2.68629 0 0 2.68629 0 6V32C0 35.3137 2.68629 38 6 38H32C35.3137 38 38 35.3137 38 32V6C38 2.68629 35.3137 0 32 0H6ZM15.9333 21.3594V29.5555H9.1V18.6274H5L18.6667 6.33325L32.3333 18.6274H28.2333V29.5555H21.4V21.3594H15.9333Z"
        fill="#6E78E8"
      />
    </Svg>
  );
};

export default NavHomeIcon;

export const Svg = styled.svg`
  background-color: white;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;

    border-radius: 4px;
  }
`;

export const Path = styled.path`
  fill: ${p => {
    return p.isActive ? '#4A56E2' : '#6E78E8';
  }};
`;
/* // #4A56E2 */
