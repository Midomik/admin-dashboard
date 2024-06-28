import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, refreshThunk, logOutThunk } from './operations.js';

const initialState = {
  userData: null,
  authenticated: false,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.authenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.token = payload.token;
        state.authenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.userData = null;
        state.token = null;
        state.authenticated = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOutThunk.rejected, (state) => {
        state.userData = null;
        state.token = null;
        state.authenticated = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.token = null;
        state.authenticated = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(logOutThunk.fulfilled, logOutThunk.rejected), () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(loginThunk.pending, refreshThunk.pending, logOutThunk.pending),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          refreshThunk.rejected,
          logOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
export const { setPage } = authSlice.actions;
