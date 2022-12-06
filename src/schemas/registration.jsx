import * as Yup from 'yup';
 
 const RegistrationSchema = Yup.object().shape({
   email: Yup.string().required('Required'),
   password: Yup.string()
     .min(6, 'Too Short!')
     .max(12, 'Too Long!')
     .required('Required'),
    name: Yup.string().min(1).max(12)
 });

export default RegistrationSchema;