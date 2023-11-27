import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const getTOSSPayment = createAsyncThunk(
  'payment/getTOSSPayment',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/payment`
    );
    return response.data;
  }
);
