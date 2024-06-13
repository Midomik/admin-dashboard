import * as yup from 'yup';

export const createBookSchema = yup.object().shape({
  title: yup.string().required('Title field is required'),
  author: yup.string().required('Author field is required'),
  totalPages: yup
    .number()
    .required('Total pages field is required')
    .min(1, 'Total pages must be a positive number'),
});
