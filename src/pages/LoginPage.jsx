import LoginContainer from 'components/LoginContainer';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/authOperation';
import { Navigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import useAuth from 'hooks/useAuth';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const error = useSelector(state => state.auth.error || {});
  const { status, message = 'Error' } = error;

  const onLogin = data => {
    dispatch(operations.login(data));
  };

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <LoginContainer onSubmit={onLogin} />
      {status && <Alert severity="error">{message}</Alert>}
    </>
  );
};

export default LoginPage;
