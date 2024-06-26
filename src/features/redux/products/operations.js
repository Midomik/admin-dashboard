import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/products`, { params: data });
      console.log(res.data);

      return { data: res.data, filter: data.name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (data, thunkAPI) => {
    try {
      console.log(data);

      const res = await instance.post(`/products`, data);
      console.log(res.data);

      return { data: res.data, filter: data.name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, thunkAPI) => {
    try {
      const res = await instance.delete(`/products/${id}`);
      console.log(res.data);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  'products/editProduct',
  async ({ id, data }, thunkAPI) => {
    try {
      console.log(data);

      const res = await instance.put(`/products/${id}`, data);
      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
