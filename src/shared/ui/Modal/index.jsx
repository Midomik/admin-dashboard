import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModals } from '../../../features/redux/products/reducer';
import { CloseIcon } from '../../assets/icons/CloseIcon';

import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';

import { CustomSelect } from '../Select/Select';
import { addProductSchema } from '../Form/shemas/productSchema';
import {
  addProduct,
  editProduct,
} from '../../../features/redux/products/operations';
import { selectModalData } from '../../../features/redux/products/selectors';
import { DateInput } from '../Input/DateInput';
import productOptions from '../../../features/data/addProduct';
import addSupplier from '../../../features/data/addSupplier';
import { addSuppliersSchema } from '../Form/shemas/supplierSchema';
import {
  addSuppliers,
  editSuppliers,
} from '../../../features/redux/suppliers/operations';
import { closeSupplierModals } from '../../../features/redux/suppliers/reducer';
import { selectModalDataSuppliers } from '../../../features/redux/suppliers/selectors';
import { editSupplierSchema } from '../Form/shemas/editSupplierSchema';

export const Modal = ({ className, variant }) => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const modalDataSuppliers = useSelector(selectModalDataSuppliers);

  const addProductSubmit = (value) => {
    console.log(value);
    dispatch(addProduct(value));
  };

  const addSuppliersSubmit = (value) => {
    console.log(value);
    dispatch(addSuppliers(value));
  };

  const editProductSubmit = (value) => {
    dispatch(editProduct({ id: modalData._id, data: value }));
  };
  const editSupplierSubmit = (value) => {
    console.log(value);

    dispatch(editSuppliers({ id: modalDataSuppliers._id, data: value }));
  };

  const addProductVariant = (
    <>
      <Form
        className="gap-[8px]"
        variant="wrap"
        label="Add a new product"
        submit={addProductSubmit}
        validationSchema={addProductSchema}
        isReset={false}
      >
        <Input name="name" placeholder="Product Info" className="w-[224px]" />
        <CustomSelect
          name="category"
          placeholder="Category"
          options={productOptions}
        />
        <Input name="stock" placeholder="Stock" className="w-[224px]" />
        <Input name="suppliers" placeholder="Suppliers" className="w-[224px]" />
        <Input name="price" placeholder="Price" className="w-[224px]" />

        <div className="mt-[40px] flex w-full gap-[8px]">
          <Button type="submit" className="px-[52.5px]">
            Add
          </Button>
          <Button
            onClick={() => closeModal()}
            type="button"
            size="gray"
            className="px-[43px]"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );

  const editProductVariant = (
    <>
      <Form
        className="gap-[8px]"
        variant="wrap"
        label="Edit product"
        submit={editProductSubmit}
        validationSchema={addProductSchema}
        isReset={false}
      >
        <Input
          defaultValue={modalData?.name}
          name="name"
          placeholder="Product Info"
          className="w-[224px]"
        />
        <CustomSelect
          name="category"
          placeholder="Category"
          options={productOptions}
          defaultValue={{
            value: modalData?.category,
            label: modalData?.category,
          }}
        />
        <Input
          defaultValue={modalData?.stock}
          name="stock"
          placeholder="Stock"
          className="w-[224px]"
        />
        <Input
          defaultValue={modalData?.suppliers}
          name="suppliers"
          placeholder="Suppliers"
          className="w-[224px]"
        />
        <Input
          defaultValue={modalData?.price}
          name="price"
          placeholder="Price"
          className="w-[224px]"
        />

        <div className="mt-[40px] flex w-full gap-[8px]">
          <Button type="submit" className="px-[52.5px]">
            Save
          </Button>
          <Button
            onClick={() => closeModal()}
            type="button"
            size="gray"
            className="px-[43px]"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );

  const addSupplierVariant = (
    <>
      <Form
        className="gap-[8px]"
        variant="wrap"
        label="Add a new suppliers"
        submit={addSuppliersSubmit}
        validationSchema={addSuppliersSchema}
        isReset={false}
      >
        <Input
          name="name"
          placeholder="Suppliers info"
          ownWidth={true}
          className="w-[224px]"
        />
        <Input
          name="address"
          placeholder="Address"
          ownWidth={true}
          className="w-[224px]"
        />
        <Input
          name="suppliers"
          placeholder="Company"
          ownWidth={true}
          className="w-[224px]"
        />
        <DateInput name="date" placeholder="Delivery date" />
        <Input
          name="amount"
          placeholder="Amount"
          ownWidth={true}
          className="w-[224px]"
        />
        <CustomSelect
          name="status"
          placeholder="Status"
          options={addSupplier}
        />

        <div className="mt-[40px] flex w-full gap-[8px]">
          <Button type="submit" className="px-[52.5px]">
            Add
          </Button>
          <Button
            onClick={() => closeModal()}
            type="button"
            size="gray"
            className="px-[43px]"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );

  const editSupplierVariant = (
    <>
      <Form
        className="gap-[8px]"
        variant="wrap"
        label="Edit supplier"
        submit={editSupplierSubmit}
        validationSchema={editSupplierSchema}
        isReset={false}
      >
        <Input
          name="name"
          defaultValue={modalDataSuppliers?.name}
          placeholder="Suppliers info"
          ownWidth={true}
          className="w-[224px]"
        />
        <Input
          name="address"
          defaultValue={modalDataSuppliers?.address}
          placeholder="Address"
          ownWidth={true}
          className="w-[224px]"
        />
        <Input
          name="suppliers"
          defaultValue={modalDataSuppliers?.suppliers}
          placeholder="Company"
          ownWidth={true}
          className="w-[224px]"
        />
        <DateInput
          name="date"
          placeholder="Delivery date"
          defaultValue={modalDataSuppliers?.date}
        />
        <Input
          name="amount"
          defaultValue={modalDataSuppliers?.amount}
          placeholder="Amount"
          ownWidth={true}
          className="w-[224px]"
        />
        <CustomSelect
          name="status"
          defaultValue={{
            value: modalDataSuppliers?.status,
            label: modalDataSuppliers?.status,
          }}
          placeholder="Status"
          options={addSupplier}
        />

        <div className="mt-[40px] flex w-full gap-[8px]">
          <Button type="submit" className="px-[52.5px]">
            Save
          </Button>
          <Button
            onClick={() => closeModal()}
            type="button"
            size="gray"
            className="px-[43px]"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );

  const closeModal = () => {
    dispatch(closeModals());
    dispatch(closeSupplierModals());
    document.body.classList.remove('add-overflov');
  };

  const closeFromOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const closeModalFromEsc = (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);
    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
  }, []);

  return (
    <div
      onClick={closeFromOverlay}
      className="fixed left-0 top-0 z-[50] h-[100vh] w-[100vw] bg-[#14141499]"
    >
      <div
        className={`absolute left-[50%] top-[50%] box-border flex min-h-[400px]    w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col items-center overflow-y-auto rounded-[12px] bg-white p-[40px] mobile-sm:w-[335px] tablet:w-[540px] ${className}`}
      >
        <button
          onClick={closeModal}
          className="absolute right-[16px] top-[16px] border-none bg-transparent"
        >
          <CloseIcon />
        </button>

        {variant === 'addProduct' && addProductVariant}
        {variant === 'editProduct' && editProductVariant}
        {variant === 'addSupplier' && addSupplierVariant}
        {variant === 'editSupplier' && editSupplierVariant}
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};
