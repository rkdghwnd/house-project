import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CartType } from '../types/stateTypes';
axios.defaults.withCredentials = true;

export const addFinalOrder = createAsyncThunk<string, { cart: CartType[] }>(
  'finalorder/addFinalOrder',
  async (data) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/finalorder`,
      data
    );

    return response.data;
  }
);

export const getFinalOrder = createAsyncThunk(
  'finalorder/getFinalOrder',
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/finalorder`
    );
    return response.data;
  }
);
