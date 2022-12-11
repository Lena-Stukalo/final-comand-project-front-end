import RegisterContainer from './RegisterContainer';
import Header from './Header';
import AddTransactionsButton from './ModalAddTransaction/AddTransactionsButton/AddTransactionsButton';
import ModalAddTransaction from './ModalAddTransaction';
import { selectIsModalAddTransactionOpen } from 'transactionsRedux/transactionsGlobalSelectors';

import { useSelector } from 'react-redux';

export const App = () => {
  const showTransactionModalOpen = useSelector(selectIsModalAddTransactionOpen);
  return (
    <>
      <RegisterContainer />
      <Header />
      <AddTransactionsButton />
      {showTransactionModalOpen && <ModalAddTransaction />}
    </>
  );
};
