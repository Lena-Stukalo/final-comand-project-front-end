import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { openModalAddTransaction } from 'transactionsRedux/transactionsGlobalSlice';
import sprite from '../../../transactionsComponentIcons/sprite.svg';
import { toggleAddModal } from 'redux/transactions/transactionSlice';

export default function AddTransactionsButton() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(toggleAddModal())}>
      <svg width={20} height={20}>
        <use href={`${sprite}#icon-income`} />
      </svg>
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: none;
  background: #24cca7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 45px rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    bottom: 40px;
  }
`;
