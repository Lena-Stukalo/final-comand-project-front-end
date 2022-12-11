import React from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';

import css from './Login.module.css';

import Logo from '../../Logo/Logo';
import { AiFillMail, AiFillLock } from 'react-icons/ai';

import FormBtn from '../FromBtn/FormBtn';

import EmailInput from '../LoginInput/EmailInput/Input';
import PasswordInput from '../LoginInput/PasswordInput/PasswordInput.jsx';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { initialState } from 'components/RegistrationForm/initialState';
import useForm from 'hooks/useForm';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/, 'Invalid email address')
    .required('Reqyired'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
});

const LoginForm = ({ onSubmit }) => {
  // const dispatch = useDispatch();
  const initialState = {
    email: '',
    password: '',
  };
  const { state, setState } = useForm({ initialState, onSubmit });

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,

    onSubmit: values => {
      console.log(values);
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
          icon={AiFillMail}
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
          icon={AiFillLock}
          mb={40}
          id={'password'}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          helper={formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
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
