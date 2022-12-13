import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import TransSelectors from 'redux/transactions/transactionSelector';
import operations from 'redux/transactions/transactionsOperations';
import HomeTab from 'components/HomeTab/HomeTab';
import { useEffect } from 'react';

const HomePage = () => {
  const data = useSelector(TransSelectors.getFilteredTransactions);

  return (
    <Container>
      <HomeTab data={data} />
      {/* <button
        onClick={() => {
          dispatch(operations.fetchTransactions());
        }}
      >
        go
      </button> */}
    </Container>
  );
};

const Container = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  width: 320px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 46px;

    margin: 0;
  }
`;

export default HomePage;
