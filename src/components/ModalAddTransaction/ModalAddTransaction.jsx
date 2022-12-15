import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import 'react-datetime/css/react-datetime.css';

import { useAddTransactionsMutation } from 'transactionsRedux/transactionsOperations';
import {
  addTransactionSuccess,
  closeModalWindow,
} from 'transactionsRedux/transactionsGlobalSlice';
import NotifyContainer from './NotifyContainer/NotifyContainer';
import Button from './Button/Button';
import CategoriesDropbox from './CategoriesDropbox/CategoriesDropbox';
import TransactionSwitcher from './TransactionSwitcher/TransactionSwitcher';
import Modal from './Modal/Modal';
import { switchersOptions } from 'transactionsComponentConstants/constants';
import sprite from '../../transactionsComponentIcons/sprite.svg';
import operations from 'redux/transactions/transactionsOperations';
import { setBalance } from 'redux/auth/authSlice';
import { toggleAddModal } from 'redux/transactions/transactionSlice';
const { transactionsTypeIncome, transactionsTypeExpense, expense } =
  switchersOptions;

export default function ModalAddTransactions() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [sum, setSum] = useState();
  const [comment, setComment] = useState('');
  // const [addTransactions, { data }] = useAddTransactionsMutation();
  const [category, setCategory] = useState(expense);

  const toggleChange = e => {
    setChecked(e);
    e ? setCategory(transactionsTypeIncome) : setCategory(expense);
  };
  const onChangeDate = date => {
    const formatDate = date.toLocaleString().slice(0, 10);
    setDate(formatDate);
  };

  // useEffect(() => {
  //   if (data?.code === 201) {
  //     NotifyContainer(toast(data?.payload?.message || 'Done!'));
  //     dispatch(addTransactionSuccess());
  //     dispatch(closeModalWindow());
  //   }
  // }, [data, dispatch]);

  const handleSubmit = async e => {
    const transactionType = checked
      ? transactionsTypeIncome
      : transactionsTypeExpense;
    if (transactionType === 'income') {
      const income = 'Income';
      setCategory(income);
    }
    e.preventDefault();
    const res = await dispatch(
      operations.addTransactions({
        category,
        comment,
        sum,
        date,
        isIncome: transactionType === transactionsTypeIncome ? true : false,
      })
    );
    dispatch(setBalance(Number(res.payload.balance)));
  };
  const isValidData = data => {
    const currentDate = new Date();
    return currentDate > data._d;
  };

  return (
    <Modal>
      <div>
        <Title>Add transaction</Title>
        <Form onSubmit={handleSubmit}>
          <label border="true">
            <TransactionSwitcher check={toggleChange} />
          </label>
          {!checked && (
            <Label>
              <CategoriesDropbox select={setCategory} />
            </Label>
          )}
          <ContainerStyle>
            <Label fontWeight={700}>
              <input
                name="sum"
                defaultValue={sum}
                onChange={({ target }) => setSum(target.value)}
                placeholder="0.00"
                title="0.05, 0.50, 5.55, 50.50"
                step="0.01"
                min="0.01"
                required
              />
            </Label>
            <Label>
              <Datetime
                timeFormat={false}
                closeOnSelect={true}
                dateFormat={'DD.MM.YYYY'}
                value={date}
                onChange={date => {
                  onChangeDate(date?._d);
                }}
                isValidDate={isValidData}
              />
              <svg>
                <use href={`${sprite}#icon-calendar`} />
              </svg>
            </Label>
          </ContainerStyle>
          <Label>
            <Textarea
              spellcheck={true}
              value={comment}
              onChange={({ target: { value } }) => setComment(value)}
              name="comment"
              placeholder="Comment"
            />
          </Label>
          <Button primary type="submit">
            ADD
          </Button>
          <Button outlined onClick={() => dispatch(toggleAddModal())}>
            CANCEL
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

const Title = styled.h2`
  height: 31px;
  font-family: 'Poppins, sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 30px;
    line-height: 1.5;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: 'Circe, Manrope, sans-serif';
  font-style: normal;
  font-size: 18px;
`;
const Label = styled.label`
  position: relative;
  display: block;
  width: 280px;
  margin-bottom: 40px;
  font-weight: ${p => p.fontWeight || '400'};
  border-bottom: 1px solid #e0e0e0;

  line-height: 0;
  input,
  textarea {
    padding: 0 20px;
    font-weight: 400;
    line-height: 1.5;
    border: none;
    &:focus-visible {
      border-bottom: 1px solid #24cca7;
    }
    &:focus:invalid {
      border-bottom: 1px solid #ff6596;
    }
  }
  @media screen and (min-width: 768px) {
    width: 394px;
  }
`;
const ContainerStyle = styled.div`
  width: 280px;
  svg {
    position: absolute;
    top: 2px;
    right: 20px;
    width: 18px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 394px;
    display: flex;
    justify-content: space-between;
    label {
      width: 190px;
      &:first-child {
        input {
          text-align: center;
        }
      }
    }
    input {
      width: 100%;
      height: 32px;
    }
    svg {
      right: 20px;
    }
  }
`;
const Textarea = styled.textarea`
  height: 84px;
  width: 280px;
  max-height: 150px;
  font-family: 'Circe, Manrope, sans-serif';
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #bdbdbd;
  resize: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 394px;
    height: 32px;
    max-height: 280px;
    padding: 0 20px;
  }
`;
