import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from './TansactionSwitcher.module.css';

import sprite from '../../../transactionsComponentIcons/sprite.svg';
import { switchersOptions } from 'transactionsComponentConstants/constants';

function TransactionSwitcher({ check }) {
  const [checked, setChecked] = useState(false);

  const handleChange = ({ target: { checked } }) => {
    setChecked(checked);
    check(checked);
  };

  return (
    <Wrapper>
      <Span color={!checked ? '#E0E0E0' : '#24CCA7'}>
        {switchersOptions.income}
      </Span>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={css.visuallyHidden}
      />
      <Switch>
        <Svg checked={checked}>
          {checked && <use href={`${sprite}#icon-income`} />}
          {!checked && <use href={`${sprite}#icon-expense`} />}
        </Svg>
      </Switch>
      <Span color={checked ? '#E0E0E0' : '#ff6596'}>{'Expense'}</Span>
    </Wrapper>
  );
}

TransactionSwitcher.propTypes = {
  check: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 235px;
  margin-bottom: 42px;
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.color};
`;
const Switch = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  margin: 0px 20px 0px 24px;
  background: #ffffff;
  border-radius: 30px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;
const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: -4px;
  width: 22px;
  height: 22px;
  padding: 12px;
  border-radius: 44px;
  box-sizing: content-box;
  transition: 300ms transform;
  transform: ${p =>
    p.checked ? ' translate(0, -50%)' : 'translate(100%, -50%)'};
  background-color: ${p => (p.checked ? '#24cca7' : '#ff6596')};
  box-shadow: ${p =>
    p.checked
      ? '0px 6px 15px rgba(36, 204, 167, 0.5)'
      : '0px 6px 15px rgba(255, 101, 150, 0.5)'};
`;

export default TransactionSwitcher;
