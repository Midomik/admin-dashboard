import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Please enter the valid email format'
    )
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});
