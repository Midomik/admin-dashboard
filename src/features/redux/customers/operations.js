import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';

export const getCustomers = createAsyncThunk(
  'customers/getCustomers',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/customers`, { params: data });
      console.log(res.data);

      return { data: res.data, filter: data.name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
