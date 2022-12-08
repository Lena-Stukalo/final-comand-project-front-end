const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;

const AuthSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
};
export default AuthSelectors;
