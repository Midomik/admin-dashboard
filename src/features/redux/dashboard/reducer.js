import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getStatistics } from './operations.js';

const initialState = {
  data: null,
  isOpenSideHeaderModal: false,
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setIsOpenSideHeaderModal: (state) => {

      document.body.classList.add('add-overflov');
      state.isOpenSideHeaderModal = true;
    },
    closeHeaderModal: (state) => {
      document.body.classList.remove('add-overflov');
      state.isOpenSideHeaderModal = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getStatistics.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getStatistics.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getStatistics.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const dashboardReducer = dashboardSlice.reducer;
export const { setIsOpenSideHeaderModal, closeHeaderModal } =
  dashboardSlice.actions;
