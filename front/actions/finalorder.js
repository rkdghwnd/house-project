import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const addFinalOrder = createAsyncThunk(
  'finalorder/addFinalOrder',
  async (data, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/finalorder`,
      data
    );

    return response.data;
  }
);

export const getFinalOrder = createAsyncThunk(
  'finalorder/getFinalOrder',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/finalorder`
    );
    return response.data;
  }
);
