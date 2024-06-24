import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getOrder } from './operations.js';

const initialState = {
  data: null,

  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getOrder.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getOrder.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const orderdReducer = orderSlice.reducer;
