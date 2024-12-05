import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import searchSlice from '../reducers/searchSlice';
import { QueryPayloadType } from '../types/actionsTypes';
axios.defaults.withCredentials = true;

export const getSearchReviewProducts = createAsyncThunk(
  'search/getSearchReviewProducts',
  async (data: QueryPayloadType, thunkAPI) => {
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
