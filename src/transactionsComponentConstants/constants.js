const switchersOptions = {
  income: 'Income',
  expense: 'Other expenses',
  transactionsTypeIncome: 'Income',
  transactionsTypeExpense: 'expense',
};

const statisticsColors = [
  { category: 'Main expenses', color: '#FED057' },
  { category: 'Products', color: '#FFD8D0' },
  { category: 'Car', color: '#FD9498' },
  { category: 'Self care', color: '#C5BAFF' },
  { category: 'Child care', color: '#6E78E8' },
  { category: 'Household products', color: '#6E78E8' },
  { category: 'Education', color: '#81E1FF' },
  { category: 'Leisure', color: '#24CCA7' },
  { category: 'Other expenses', color: '#FD9498' },
];

const ROUTES = {
  API: 'api',
  USERS: 'users',
  TRANSACTIONS: 'transactions',
};

const BASE_URL = {
  FRONT: 'http://localhost:3000',
  BACK: 'http://localhost:8000',
  SERVER: 'https://final-comand-project-back-end-production.up.railway.app/',
};

export { switchersOptions, statisticsColors, ROUTES, BASE_URL };
