const getIsLoading = state => state.transactions.isLoading;
const getCategories = state => state.transactions.categories;
const getDetails = state => state.transactions.details.expenses;
const getError = state => state.transactions.error;
const getDetailsIncome = state => state.transactions.details.totalIncome;
const getDetailsExpense = state => state.transactions.details.totalExpense;
const getTransactions = state => state.transactions.data;
const getIsAddTransactionModalOpen = state =>
  state.transactions.isAddTransactionModalOpen;
// const getFilteredTransactions = state => {
//   const regExNoDots = /[^\d]/g;

//   const dataToSotr = [...state.transactions.data];

//   return dataToSotr.sort(
//     (firstEl, secondEl) =>
//       Number(
//         secondEl.date.replace(regExNoDots, '') +
//           secondEl.createdAt.slice(11).substring(0, 8).replace(regExNoDots, '')
//       ) -
//       Number(
//         firstEl.date.replace(regExNoDots, '') +
//           firstEl.createdAt.slice(11).substring(0, 8).replace(regExNoDots, '')
//       )
//   );
// };
const getFilteredTransactions = state => {
  const regExNoDots = /[^\d]/g;
  const data = [...state.transactions.data];

  const result = data.sort((firstEl, secondEl) => {
    return (
      secondEl.createdAt.substring(0, 19).replace(regExNoDots, '') -
      firstEl.createdAt.substring(0, 19).replace(regExNoDots, '')
    );
  });

  return result;
};
const TransSelectors = {
  getIsLoading,
  getCategories,
  getDetails,
  getError,
  getDetailsExpense,
  getDetailsIncome,
  getTransactions,
  getFilteredTransactions,
  getIsAddTransactionModalOpen,
};
export default TransSelectors;
