import React from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';

import css from './Login.module.css';

import Logo from '../../Logo/Logo';
import { AiFillMail, AiFillLock } from 'react-icons/ai';

import FormBtn from '../FromBtn/FormBtn';

import EmailInput from '../LoginInput/EmailInput/Input';
import PasswordInput from '../LoginInput/PasswordInput/PasswordInput.jsx';

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/, 'Invalid email address')
    .required('validation.email'),
  password: Yup.string().required('validation.password'),
});

const LoginForm = () => {
  // const dispatch = useDispatch();

  const formik = Formik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className={css.container}>
      <Logo />
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <EmailInput
          label={'E-mail'}
          icon={AiFillMail}
          mb={40}
          id={'email'}
          // value={formik.email}
          onBlur={formik.handleBlur}
          onChangeText={formik.handleChange}
          // error={formik.touched.email && Boolean(formik.errors.email)}
          // helper={formik.errors.email}
        />
        <PasswordInput
          label={'Password'}
          icon={AiFillLock}
          mb={40}
          id={'password'}
          // value={formik.values.password}
          onBlur={formik.handleBlur}
          onChangeText={formik.handleChange}
          // helper={formik.errors.password}
          // error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <FormBtn
          title={'LOG IN'}
          variant="contained"
          type="submit"
          color="#24CCA7"
        />
      </form>
      <FormBtn title={'Register'} variant="outlined" mb="0px" href={'#'} />
    </div>
  );
};

export default LoginForm;
