import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from './operations.js';

const initialState = {
  data: null,
  filter: null,
  modalData: null,
  modalVariants: {
    isOpeneAddNewProduct: false,
    isOpenEditProductModal: false,
  },
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setIsOpenAddNewProductModal: (state, { payload }) => {
      document.body.classList.add('add-overflov');
      state.modalVariants.isOpeneAddNewProduct = true;
      state.modalData = payload;
    },
    setIsOpenEditProductModal: (state, { payload }) => {
      document.body.classList.add('add-overflov');
      state.modalVariants.isOpenEditProductModal = true;
      state.modalData = payload;
    },

    closeModals: (state) => {
      document.body.classList.remove('add-overflov');
      state.modalVariants.isOpeneAddNewProduct = false;
      state.modalVariants.isOpenEditProductModal = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.filter = payload.filter;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.modalVariants.isOpeneAddNewProduct = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.data.products = state.data.products.filter(
          (product) => product._id !== payload
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, { payload }) => {
        const index = state.data.products.findIndex(
          (product) => product._id === payload._id
        );

        if (index !== -1) {
          state.data.products[index] = payload;
        }
        state.modalVariants.isOpenEditProductModal = false;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getProducts.pending,
          addProduct.pending,
          deleteProduct.pending,
          editProduct.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getProducts.rejected,
          addProduct.rejected,
          deleteProduct.rejected,
          editProduct.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const productReducer = productSlice.reducer;
export const {
  setIsOpenAddNewProductModal,
  setIsOpenEditProductModal,
  closeModals,
} = productSlice.actions;
