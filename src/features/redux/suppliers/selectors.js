export const selectSupplierData = (state) => state.suppliers.data;
export const selectFilter = (state) => state.suppliers.filter;
export const selectModalDataSuppliers = (state) => state.suppliers.modalData;

export const selectIsOpenAddNewSupplierModal = (state) =>
  state.suppliers.modalVariants.isOpeneAddNewSupplier;
export const selectIsOpenEditSupplierModal = (state) =>
  state.suppliers.modalVariants.isOpenEditSupplierModal;
