import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import AuthSelectors from 'redux/auth/authSelectors';

export default function PrivatRoute() {
  const IsLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);

  if (!IsLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
