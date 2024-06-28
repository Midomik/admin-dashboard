import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
import { Notify } from 'notiflix';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/products`, { params: data });

      return { data: res.data, filter: data.name };
    } catch (error) {
      Notify.failure(error.message, {
        timeout: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`/products`, data);
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
      await instance.delete(`/products/${id}`);
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
      const res = await instance.put(`/products/${id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
