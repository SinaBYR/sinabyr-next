import * as yup from 'yup';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const validationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required('Your full name is required.'),
  email: yup
    .string()
    .required('Your email address is required.')
    .test(
      'email',
      'Email address is not valid.',
      (value) => emailRegex.test(value)
    ),
  message: yup
    .string()
    .required('Message box cannot be empty.')
})