import Media from 'react-media';
import { Outlet } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/currency/Currency';
import AddTransactionsButton from 'components/ModalAddTransaction/AddTransactionsButton/AddTransactionsButton';
import ModalAddTransaction from 'components/ModalAddTransaction';
import operations from 'redux/transactions/transactionsOperations';

// import HomeTab from 'components/HomeTab/HomeTab';

import {
  Container,
  Nav,
  NavItem,
  DashboardContainer,
} from './Dashboard.styled';

import NavigationAndBalance from './NavigationAndBalance';
import { selectIsModalAddTransactionOpen } from 'transactionsRedux/transactionsGlobalSelectors';

import { navigation } from './navigationItems';

export const Dashboard = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(operations.fetchTransactions());
  }, [dispath]);

  const showTransactionModalOpen = useSelector(selectIsModalAddTransactionOpen);
  return (
    <DashboardContainer>
      <Container>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px)',
          }}
        >
          {matches => (
            <>
              {matches.medium ? (
                <>
                  <NavigationAndBalance items={navigation.elseNav} />
                  <Currency />
                </>
              ) : (
                <NavigationAndBalance items={navigation.phoneNav} />
              )}
            </>
          )}
        </Media>
      </Container>

      <Outlet />
      <AddTransactionsButton />
      {showTransactionModalOpen && <ModalAddTransaction />}
    </DashboardContainer>
  );
};
