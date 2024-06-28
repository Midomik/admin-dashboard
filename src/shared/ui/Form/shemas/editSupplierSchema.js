import * as yup from 'yup';

export const editSupplierSchema = yup.object().shape({
  name: yup.string().required('Supplier Info is required'),
  address: yup.string().required('Address is required'),
  suppliers: yup.string().required('Suppliers is required'),
  date: yup.string(),
  amount: yup
    .number()
    .typeError('Must be a number')
    .required('Ammount is required'),
  status: yup.string(),
});
