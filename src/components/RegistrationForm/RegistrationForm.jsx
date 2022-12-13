import { useFormik } from 'formik';
// import { useEffect } from "react";
import RegistrationSchema from 'schemas/registration';
import { initialState } from './initialState';
import useForm from 'hooks/useForm';
import { NavLink } from 'react-router-dom';

import styles from './registration-form.module.css';
import { ReactComponent as WalletIcon } from '../../images/wallet-icon.svg';
import { ReactComponent as EmailIcon } from '../../images/envelop-icon.svg';
import { ReactComponent as LockIcon } from '../../images/lock-icon.svg';
import { ReactComponent as AccountIcon } from '../../images/account-icon.svg';
import { style } from '@mui/system';

const RegistrationForm = ({ onSubmit }) => {
  const { state, setState } = useForm({ initialState, onSubmit });

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: RegistrationSchema,

    onSubmit: values => {
      setState(values);

      onSubmit(values);
    },
  });
  const ProgressBarStyles = () => {
    if (formik.values.password.length >= 6) {
      return {
        width: `${(formik.values.password.length / 16) * 100}%`,
        backgroundColor: `#24CCA7`,
      };
    }
    return {
      width: `${(formik.values.password.length / 16) * 100}%`,
      backgroundColor: `#FF6596`,
    };
  };

  return (
    <div className={styles.form__container}>
      <div className={styles.title__box}>
        <WalletIcon width={30} height={30} />
        <h2 className={styles.title}>Wallet</h2>
      </div>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label className={styles.form__label}>
          <EmailIcon width={24} height={24} className={styles.icon} />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="E-mail"
            className={`${
              formik.errors.email && formik.touched.email
                ? styles.form__error
                : styles.form__input
            }`}
            id="email"
            name="email"
            type="email"
          />
        </label>
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}

        <label className={styles.form__label}>
          <LockIcon width={24} height={24} className={styles.icon} />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            className={`${
              formik.errors.password && formik.touched.password
                ? styles.form__error
                : styles.form__input
            }`}
          />
        </label>
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}

        <label className={styles.form__label}>
          <LockIcon width={24} height={24} className={styles.icon} />
          <input
            id="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirm password"
            name="confirmPassword"
            className={`${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? styles.form__error
                : styles.form__input
            }`}
          />
          <div className={styles.progresbarWraper}>
            <div
              className={styles.progresbar}
              style={ProgressBarStyles()}
            ></div>
          </div>
        </label>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className={styles.error}>{formik.errors.confirmPassword}</div>
        ) : null}

        <label className={styles.form__label}>
          <AccountIcon width={24} height={24} className={styles.icon} />
          <input
            id="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            placeholder="First name"
            name="firstName"
            className={`${
              formik.errors.firstName && formik.touched.firstName
                ? styles.form__error
                : styles.form__input
            }`}
          />
        </label>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className={styles.error}>{formik.errors.firstName}</div>
        ) : null}

        <div className={styles.buttons__container}>
          <button className={styles.register__button} type="submit">
            Register
          </button>
          <NavLink className={styles.login__button} type="button" to="/login">
            Log in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
