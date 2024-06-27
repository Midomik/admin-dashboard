import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';

export const getSuppliers = createAsyncThunk(
  'suppliers/getSuppliers',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/suppliers`, { params: data });
      console.log(res.data);

      return { data: res.data, filter: data.name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSuppliers = createAsyncThunk(
  'suppliers/addSupplier',
  async (data, thunkAPI) => {
    try {
      console.log(data);

      const res = await instance.post(`/suppliers`, data);
      console.log(res.data);

      return { data: res.data, filter: data.name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editSuppliers = createAsyncThunk(
  'suppliers/editSupplier',
  async ({ id, data }, thunkAPI) => {
    try {
      console.log(data);

      const res = await instance.put(`/suppliers/${id}`, data);
      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
