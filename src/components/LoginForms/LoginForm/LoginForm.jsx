import React from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import css from './Login.module.css';

import Logo from '../../Logo/Logo';

import FormBtn from '../FromBtn/FormBtn';
import FormBtnLink from '../FromBtn/FormBtnLink';

import EmailInput from '../LoginInput/EmailInput/Input';
import PasswordInput from '../LoginInput/PasswordInput/PasswordInput.jsx';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import useForm from 'hooks/useForm';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
});

const LoginForm = ({ onSubmit }) => {
  const initialState = {
    email: '',
    password: '',
  };
  const { state, setState } = useForm({ initialState, onSubmit });

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,

    onSubmit: values => {
      setState(values);

      onSubmit(values);
    },
  });

  return (
    <div className={css.container}>
      <Logo />
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <EmailInput
          label="E-mail"
          mb={40}
          id="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helper={formik.errors.email}
        />
        <PasswordInput
          label={'Password'}
          mb={40}
          id={'password'}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          helper={formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <button
          className={css.login__button}
          title={'LOG IN'}
          variant="contained"
          type="submit"
          color="#24CCA7"
        >{`log in`}</button>
      </form>
      <FormBtnLink
        text={'Register'}
        path="/register"
        style={css.registerLink__button}
      />
    </div>
  );
};

export default LoginForm;
