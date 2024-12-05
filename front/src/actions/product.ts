import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import productSlice from '../reducers/productSlice';
import { makeQuery } from '../hooks/query';
import { CategoryIdPayloadType, QueryPayloadType } from '../types/actionsTypes';
axios.defaults.withCredentials = true;

export const getStoreHotdeals = createAsyncThunk(
  'product/getStoreHotdeals',
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/product/store/hotdeal`
    );
    return response.data;
  }
);

export const getStorePopularProducts = createAsyncThunk(
  'product/getStorePopularProducts',
  async (data: QueryPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/product/store/popular${
        data.query
      }`
    );
    return response.data;
  }
);

export const getCategoryProducts = createAsyncThunk(
  'product/getCategoryProducts',
  async (data: QueryPayloadType, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/product/category${data.query}`
    );
    return response.data;
  }
);

export const getCategoryBrandList = createAsyncThunk(
  'product/getCategoryBrandList',
  async (data: CategoryIdPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/brand?category_id=${
        data.categoryId || 0
      }`
    );
    return response.data;
  }
);

export const getRanksProducts = createAsyncThunk(
  'product/getRanksProducts',
  async (data: QueryPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/product/ranks${data.query}`
    );
    return response.data;
  }
);

export const getTodayDealsProducts = createAsyncThunk(
  'product/getTodayDealsProducts',
  async (data: QueryPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/product/today_deals${data.query}`
    );
    return response.data;
  }
);

export const getSearchProducts = createAsyncThunk(
  'product/getSearchProducts',
  async (data: QueryPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/product/search_result${
        data.query
      }`
    );
    return response.data;
  }
);

export const getSearchBrandList = createAsyncThunk(
  'product/getSearchBrandList',
  async (data: QueryPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/brand/search${data.query}`
    );
    return response.data;
  }
);

export const getWeeklyPromotion = createAsyncThunk(
  'product/getWeeklyPromotion',
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/product/weekly`
    );
    return response.data;
  }
);
