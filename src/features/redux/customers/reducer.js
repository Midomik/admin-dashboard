import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCustomers } from './operations.js';

const initialState = {
  data: null,
  filter: null,

  isLoading: false,
  error: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCustomers.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.filter = payload.filter;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getCustomers.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getCustomers.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const customerReducer = customerSlice.reducer;
