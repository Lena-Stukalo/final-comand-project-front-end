const getIsLoading = state => state.transactions.isLoading;
const getCategories = state => state.transactions.categories;
const getDetails = state => state.transactions.details.expenses;
const getError = state => state.transactions.error;
const getDetailsIncome = state => state.transactions.details.totalIncome;
const getDetailsExpense = state => state.transactions.details.totalExpense;
const getTransactions = state => state.transactions.data;
const TransSelectors = {
  getIsLoading,
  getCategories,
  getDetails,
  getError,
  getDetailsExpense,
  getDetailsIncome,
  getTransactions,
};
export default TransSelectors;
