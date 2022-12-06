import css from './LoginPageStyle.module.css';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
