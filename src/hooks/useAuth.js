import { useSelector } from 'react-redux';
import AuthSelectors from '../redux/auth/authSelectors';

const useAuth = () => {
  const isAuth = useSelector(AuthSelectors.getIsLoggedIn);
  return isAuth;
};

export default useAuth;
