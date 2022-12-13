const getIsLoading = state => state.transactions.isLoading;
const getCategories = state => state.transactions.categories;
const getDetails = state => state.transactions.details.expenses;
const getError = state => state.transactions.error;
const getDetailsIncome = state => state.transactions.details.totalIncome;
const getDetailsExpense = state => state.transactions.details.totalExpense;
const getTransactions = state => state.transactions.data;
const getFilteredTransactions = state => {
  const regExNoDots = /[^\d]/g;

  const dataToSotr = [...state.transactions.data];

  return dataToSotr.sort(
    (firstEl, secondEl) =>
      Number(
        secondEl.date.replace(regExNoDots, '') +
          secondEl.createdAt.slice(11).substring(0, 8).replace(regExNoDots, '')
      ) -
      Number(
        firstEl.date.replace(regExNoDots, '') +
          firstEl.createdAt.slice(11).substring(0, 8).replace(regExNoDots, '')
      )
  );
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
};
export default TransSelectors;
