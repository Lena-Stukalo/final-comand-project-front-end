import { useFormik } from "formik";
import styles from './registration-form.module.css';
import { ReactComponent as WalletIcon } from '../../images/wallet-icon.svg';
import { ReactComponent as EmailIcon } from '../../images/envelop-icon.svg';
import { ReactComponent as LockIcon } from '../../images/lock-icon.svg';
import { ReactComponent as AccountIcon } from '../../images/account-icon.svg';


const RegistrationForm = () => {
const formik = useFormik({
     initialValues: {
       email: '',
     },

    onSubmit: values => {
         console.log(values.email);
       alert(JSON.stringify(values, null, 2));
     },
   });

    return (
        <div className={styles.form__container}>
            <div className={styles.title__box}>
                <WalletIcon width={30} height={30} />
                <h2 className={styles.title}>Wallet</h2>
            </div>
            <form className={styles.form}>
                <label className={styles.form__label}>
                    <EmailIcon width={24} height={24} className={styles.icon} />
                    E-mail
                    <input 
                        className={styles.form__input} 
                        id="email"
                        name="email"
                        type="email"
                    />
                </label>
 

                <label className={styles.form__label}>
                    <LockIcon width={24} height={24} className={styles.icon} />
                    Password
                    <input className={styles.form__input} />
                </label>

                <label className={styles.form__label}>
                    <LockIcon width={24} height={24} className={styles.icon} />
                    Confirm password
                    <input className={styles.form__input}  />
                </label>

                <label className={styles.form__label}>
                    <AccountIcon width={24} height={24} className={styles.icon} />
                    First name
                    <input className={styles.form__input}  />
                </label>

                <div className={styles.buttons__container}>
                    <button className={styles.register__button} type="submit">Register</button>
                    <button className={styles.login__button}>Log in</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;