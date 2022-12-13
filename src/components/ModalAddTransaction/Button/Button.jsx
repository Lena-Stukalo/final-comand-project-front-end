import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

function Button(props) {
  return <StyledBtn type="submit" {...props} />;
}

Button.propTypes = {
  props: PropTypes.node,
};

const StyledBtn = styled.button`
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '50px'};
  border-radius: 20px;
  padding: 13px 65px 13px 71px;
  font-family: 'Circe, Manrope, sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  ${props =>
    props.primary &&
    css`
      margin-bottom: ${props => props.marginBtm || '20px'};
      color: ${props => props.color || '#ffffff'};
      background: ${props => props.background || '#24CCA7'};
      border: none;
      &:hover,
      &:focus {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    `}
  ${props =>
    props.outlined &&
    css`
      color: ${props => props.color || '#4a56e2'};
      background: transparent;
      border: 1px solid ${props => props.color || '#4a56e2'};
      &:hover,
      &:focus {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    `}
`;

export default Button;
