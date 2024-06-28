export const selectProductData = (state) => state.products.data;
export const selectFilter = (state) => state.products.filter;
export const selectModalData = (state) => state.products.modalData;

export const selectIsOpenAddNewProductModal = (state) =>
  state.products.modalVariants.isOpeneAddNewProduct;
export const selectIsOpenEditProductModal = (state) =>
  state.products.modalVariants.isOpenEditProductModal;
