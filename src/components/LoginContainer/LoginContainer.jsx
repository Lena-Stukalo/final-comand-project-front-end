import styles from './LoginContainerStyle.module.css';
import LoginForm from '../LoginForms/LoginForm/LoginForm';
import MainAppImage from '../../images/main-app-img-tablet.png';
import MainAppImageDesktop from '../../images/main-app-img-desk.png';

const LoginContainer = ({ onSubmit }) => {
  return (
    <section className={styles.container}>
      <div className={styles.title__box}>
        <img
          className={styles.main__image}
          src={MainAppImage}
          alt="Wallet app main logo"
        />
        <img
          className={styles.main__image_desktop}
          src={MainAppImageDesktop}
          alt="Wallet app main logo"
        />
        <h1 className={styles.app__title}>Finance App</h1>
      </div>
      <LoginForm onSubmit={onSubmit} />
    </section>
  );
};

export default LoginContainer;
