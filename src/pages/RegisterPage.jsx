import RegisterContainer from 'components/RegisterContainer/RegisterContainer';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/authOperation';
import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();

  const error = useSelector(state => state.auth.error || {});
  const { status, message = 'Error' } = error;

  const onRegister = data => {
    dispatch(operations.register(data));
  };

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <RegisterContainer onSubmit={onRegister} />
      {status && <Alert severity="error">{message}</Alert>}
    </>
  );
};

export default RegisterPage;
