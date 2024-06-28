import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
import { Notify } from 'notiflix';

export const getSuppliers = createAsyncThunk(
  'suppliers/getSuppliers',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/suppliers`, { params: data });
      return { data: res.data, filter: data.name };
    } catch (error) {
      Notify.failure(error.message, {
        timeout: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSuppliers = createAsyncThunk(
  'suppliers/addSupplier',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`/suppliers`, data);
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
      const res = await instance.put(`/suppliers/${id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
