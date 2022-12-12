const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getUserBalance = state => state.auth.user.balance;
const getIsRefreshing = state => state.auth.isRefreshing;

const AuthSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getUserBalance,
  getIsRefreshing,
};
export default AuthSelectors;
