import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
import { Notify } from 'notiflix';

export const getOrder = createAsyncThunk(
  'orders/getOrder',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/orders`, { params: data });

      return { data: res.data, filter: data.name };
    } catch (error) {
      Notify.failure(error.message, {
        timeout: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
