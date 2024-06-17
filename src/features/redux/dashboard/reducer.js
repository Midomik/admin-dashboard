import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getStatistics } from './operations.js';

const initialState = {
  data: null,

  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
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
