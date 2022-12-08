const getIsLoggedIn = state => state.global.isLoggedIn;
const getUserName = state => state.global.user.name;
const getToken = state => state.global.token;

const AuthSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
};
export default AuthSelectors;
