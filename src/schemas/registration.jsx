import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  firstName: Yup.string().min(1).max(12).required('Required'),
});

export default RegistrationSchema;
