import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
import { Notify } from 'notiflix';
const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const cleanAuthToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`/user/login`, data);

      return res.data;
    } catch (error) {
      console.log(error);

      error.response.status === 401
        ? Notify.failure(`${error.response.data.message}`, {
            timeout: 3000,
          })
        : null;

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/user/logout');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    } finally {
      cleanAuthToken();
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await instance.get('/user/current');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);
