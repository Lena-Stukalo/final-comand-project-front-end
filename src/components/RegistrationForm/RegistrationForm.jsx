import { useFormik } from "formik";

import RegistrationSchema from "schemas/registration";
import { initialState } from "./initialState";
import styles from './registration-form.module.css';
import { ReactComponent as WalletIcon } from '../../images/wallet-icon.svg';
import { ReactComponent as EmailIcon } from '../../images/envelop-icon.svg';
import { ReactComponent as LockIcon } from '../../images/lock-icon.svg';
import { ReactComponent as AccountIcon } from '../../images/account-icon.svg';

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: initialState,
        validationSchema: RegistrationSchema,

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={styles.form__container}>
            <div className={styles.title__box}>
                <WalletIcon width={30} height={30} />
                <h2 className={styles.title}>Wallet</h2>
            </div>
                   
            <form className={styles.form} onSubmit={formik.handleSubmit}>

                {formik.touched.email && formik.errors.email ? (
                    <>
                        <label className={styles.form__label}>
                            <EmailIcon width={24} height={24} className={styles.icon} />
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder='E-mail'
                                className={styles.form__error}
                                id="email"
                                name="email"
                                type="email"
                            />
                        </label>
                        <div className={styles.error}>
                            {formik.errors.email}
                        </div>
                    </>
                ) : <label className={styles.form__label}>
                    <EmailIcon width={24} height={24} className={styles.icon} />
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder='E-mail'
                        className={styles.form__input}
                        id="email"
                        name="email"
                        type="email"
                    />
                </label>}
            
                {formik.touched.password && formik.errors.password ? (
                    <>
                        <label className={styles.form__label}>
                            <LockIcon width={24} height={24} className={styles.icon} />
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder='Password'
                                name='password'
                                id='password'
                                type='password'
                                className={styles.form__error}
                            />
                        </label>
                        <div className={styles.error}>
                            {formik.errors.password}
                        </div>
                    </>
                ) : (<label className={styles.form__label}>
                    <LockIcon width={24} height={24} className={styles.icon} />
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder='Password'
                        name='password'
                        id='password'
                        type='password'
                        className={styles.form__input}
                    />
                </label>)}
                        
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <>            <label className={styles.form__label}>
                        <LockIcon width={24} height={24} className={styles.icon} />
                                
                        <input
                            id="confirmPassword"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            placeholder='Confirm password'
                            name='confirmPassword'
                            className={styles.form__error} />
                    </label>
                        <div className={styles.error}>
                            {formik.errors.confirmPassword}
                        </div>
                    </>
                ) : <label className={styles.form__label}>
                    <LockIcon width={24} height={24} className={styles.icon} />
                                
                    <input
                        id="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        placeholder='Confirm password'
                        name='confirmPassword'
                        className={styles.form__input} />
                </label>}
            
                {formik.touched.firstName && formik.errors.firstName ? (
                    <>                    <label className={styles.form__label}>
                        <AccountIcon width={24} height={24} className={styles.icon} />     
                        <input
                            id="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            placeholder='First name'
                            name='firstName'
                            className={styles.form__input} />
                    </label>
                   
                        <div className={styles.error}>{formik.errors.firstName}</div>
                    </>
                ) : <label className={styles.form__label}>
                    <AccountIcon width={24} height={24} className={styles.icon} />
                                
                    <input
                        id="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        placeholder='First name'
                        name='firstName'
                        className={styles.form__input} />
                </label>}

                <div className={styles.buttons__container}>
                    <button className={styles.register__button} type="submit">Register</button>
                    <button className={styles.login__button} type='button'>Log in</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;