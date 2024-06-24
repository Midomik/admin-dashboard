import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';

export const getOrder = createAsyncThunk(
  'orders/getOrder',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/orders`, { params: data });
      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
