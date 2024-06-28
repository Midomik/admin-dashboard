import * as yup from 'yup';

export const addProductSchema = yup.object().shape({
  name: yup.string().required('Product Info is required'),
  category: yup.string(),
  stock: yup.string().required('Stock is required'),
  suppliers: yup.string().required('Suppliers is required'),
  price: yup
    .number()
    .typeError('Must be a number')
    .required('Price is required'),
});
