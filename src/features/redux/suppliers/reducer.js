import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getSuppliers, addSuppliers, editSuppliers } from './operations.js';

const initialState = {
  data: null,
  filter: null,
  modalData: null,
  modalVariants: {
    isOpeneAddNewSupplier: false,
    isOpenEditSupplierModal: false,
  },
  isLoading: false,
  error: null,
};

const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    setIsOpenAddNewSupplierModal: (state, { payload }) => {
      document.body.classList.add('add-overflov');
      state.modalVariants.isOpeneAddNewSupplier = true;
      state.modalData = payload;
    },
    setIsOpenEditSupplierModal: (state, { payload }) => {
      document.body.classList.add('add-overflov');
      state.modalData = payload;
      state.modalVariants.isOpenEditSupplierModal = true;
    },

    closeSupplierModals: (state) => {
      document.body.classList.remove('add-overflov');
      state.modalVariants.isOpeneAddNewSupplier = false;
      state.modalVariants.isOpenEditSupplierModal = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getSuppliers.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.filter = payload.filter;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addSuppliers.fulfilled, (state) => {
        state.modalVariants.isOpeneAddNewSupplier = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editSuppliers.fulfilled, (state, { payload }) => {
        const index = state.data.suppliers.findIndex(
          (supplier) => supplier._id === payload._id
        );

        if (index !== -1) {
          state.data.suppliers[index] = payload;
        }
        state.modalVariants.isOpenEditSupplierModal = false;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getSuppliers.pending,
          addSuppliers.pending,
          editSuppliers.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getSuppliers.rejected,
          addSuppliers.rejected,
          editSuppliers.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const supplierReducer = supplierSlice.reducer;
export const {
  setIsOpenAddNewSupplierModal,
  setIsOpenEditSupplierModal,
  closeSupplierModals,
} = supplierSlice.actions;
