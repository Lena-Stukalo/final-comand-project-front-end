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
  //   setBalance(balance);
  // }, [setBalance]);

  return (
    <Box>
      <Title>Your balance</Title>
      <Amount>&#8372; {userBalance.toFixed(2)}</Amount>
    </Box>
  );
};
