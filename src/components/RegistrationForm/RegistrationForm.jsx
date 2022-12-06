import { Formik, Form, Field } from "formik";

import RegistrationSchema from "schemas/registration";
import styles from './registration-form.module.css';
import { ReactComponent as WalletIcon } from '../../images/wallet-icon.svg';
import { ReactComponent as EmailIcon } from '../../images/envelop-icon.svg';
import { ReactComponent as LockIcon } from '../../images/lock-icon.svg';
import { ReactComponent as AccountIcon } from '../../images/account-icon.svg';


const RegistrationForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    name: '',

                }}

                validationSchema={RegistrationSchema}
                onSubmit={values => {

                    // same shape as initial values

                    console.log(values);

                }}
                >
               
                    <div className={styles.form__container}>
                        <div className={styles.title__box}>
                            <WalletIcon width={30} height={30} />
                            <h2 className={styles.title}>Wallet</h2>
                        </div>
                   
                        <Form className={styles.form}>
                            <label className={styles.form__label}>
                                <EmailIcon width={24} height={24} className={styles.icon} />
                            
                            <Field
                                    placeholder='E-mail'
                                    className={styles.form__input}
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                            </label>
 

                            <label className={styles.form__label}>
                                <LockIcon width={24} height={24} className={styles.icon} />
                                
                                <Field placeholder='Password' name='password' className={styles.form__input} />
                            </label>

                            <label className={styles.form__label}>
                                <LockIcon width={24} height={24} className={styles.icon} />
                                
                                <Field placeholder='Confirm password'  name='confirm-password' className={styles.form__input} />
                            </label>

                            <label className={styles.form__label}>
                                <AccountIcon width={24} height={24} className={styles.icon} />
                                
                                <Field placeholder='First name'  name="name" className={styles.form__input} />
                            </label>

                            <div className={styles.buttons__container}>
                                <button className={styles.register__button} type="submit">Register</button>
                                <button className={styles.login__button}>Log in</button>
                            </div>
                        </Form>
                    </div>

                </Formik>
                
        </>
                
    );
}

export default RegistrationForm;