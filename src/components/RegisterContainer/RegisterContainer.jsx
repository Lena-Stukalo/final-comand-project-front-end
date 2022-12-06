import RegistrationForm from "../RegistrationForm";
import styles from './register-container.module.css';
import MainAppImage from '../../images/main-app-img.png';
import MainAppImageDesktop from '../../images/main-app-desktop.png';

const RegisterContainer = () => {
    return (
        <section className={styles.container}>            
            <div className={styles.title__box}>
                <img className={styles.main__image} src={MainAppImage} alt="Wallet app main logo" />
                <img className={styles.main__image_desktop} src={MainAppImageDesktop} alt="Wallet app main logo" />
                <h1 className={styles.app__title}>Finance App</h1>
            </div>
            <RegistrationForm />
        </section>
    );
}

export default RegisterContainer;