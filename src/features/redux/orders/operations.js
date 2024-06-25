import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';

export const getOrder = createAsyncThunk(
  'orders/getOrder',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/orders`, { params: data });
      console.log(res.data);

      return { data: res.data, filter: data.name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
