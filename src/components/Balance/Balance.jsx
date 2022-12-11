import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthSelectors from 'redux/auth/authSelectors';
import { getBalanceByTransactionsSelector } from 'redux/selectors';
import { Box, Title, Amount } from './Balance.styled';

export const Balance = () => {
  const userBalance = useSelector(AuthSelectors.getUserBalance);
  // const afterTransactions = useSelector(getBalanceByTransactionsSelector);
  const [balance, setBalance] = useState(userBalance);
  // useEffect(() => {
  //   if (afterTransactions) {
  //     setBalance(afterTransactions);
  //   }
  // }, [afterTransactions]);

  return (
    <Box>
      <Title>Your balance</Title>
      <Amount>&#8372; {balance.toFixed(2)}</Amount>
    </Box>
  );
};
