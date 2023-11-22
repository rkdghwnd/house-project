import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import searchSlice from '../reducers/searchSlice';
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  'Content-type': 'application/json',
  Accept: 'application/json',
};

export const getSearchReviewProducts = createAsyncThunk(
  'search/getSearchReviewProducts',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/search/review_product${
        data.query
      }`
    );
    thunkAPI.dispatch(
      searchSlice.actions.updateSearchReviewProductsVisible({
        visible: true,
      })
    );
    return response.data;
  }
);
