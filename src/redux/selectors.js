export const transactionsSelector = (state)  =>  state.finance.transactions;  
export const categoriesSelector = (state)  => state.categories.items;
export const getBalanceByTransactionsSelector = (state)  =>  state.finance.transactions[state.finance.transactions.length - 1]?.balanceAfter;