import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import modalSlice from '../reducers/modalSlice';
import toastSlice from '../reducers/toastSlice';
import { getMyInquirys, getMyReviews } from './user';
axios.defaults.withCredentials = true;

export const getProductions = createAsyncThunk(
  'productions/getProductions',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${data.productId}`
    );

    return response.data;
  }
);

export const getProductionReviews = createAsyncThunk(
  'productions/getProductionReviews',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/review${data.query}`
    );
    return response.data;
  }
);

export const uploadReviewImage = createAsyncThunk(
  'productions/uploadReviewImage',
  async (data, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/review_image`,
      data.data
    );
    return response.data[0];
  }
);

export const writeReview = createAsyncThunk(
  'productions/writeReview',
  async (data, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/review`,
      data.data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal());
    thunkAPI.dispatch(
      getReviewScoreStats({
        id: data.id,
      })
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.reviewToastFromAdd());
    return response.data;
  }
);

export const updateReview = createAsyncThunk(
  'productions/updateReview',
  async (data, thunkAPI) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/review`,
      data.data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal());
    thunkAPI.dispatch(
      getReviewScoreStats({
        id: data.id,
      })
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.reviewToastFromUpdate());
    return response.data;
  }
);

export const removeReview = createAsyncThunk(
  'productions/removeReview',
  async (data, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/review/${data.reviewId}`
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal());
    thunkAPI.dispatch(
      getReviewScoreStats({
        id: data.productId,
      })
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.reviewToastFromRemove());
    return response.data;
  }
);

export const getReviewScoreStats = createAsyncThunk(
  'productions/getReviewScoreStats',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.id
      }/review/stats`
    );
    return response.data;
  }
);

export const getProductionInquiry = createAsyncThunk(
  'productions/getProductionInquiry',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/inquiry${data.query}`
    );
    return response.data;
  }
);

export const updateInquiry = createAsyncThunk(
  'productions/updateInquiry',
  async (data, thunkAPI) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/inquiry/${data.inquiryId}`,
      data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal());
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.inquiryToastFromUpdate());
    return response.data;
  }
);

export const writeInquiry = createAsyncThunk(
  'productions/writeInquiry',
  async (data, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/inquiry`,
      data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal());
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.inquiryToastFromAdd());
    return response.data;
  }
);

export const removeInquiry = createAsyncThunk(
  'productions/removeInquiry',
  async (data, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/inquiry/${data.inquiryId}`
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal());
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.inquiryToastFromRemove());
    return response.data;
  }
);

export const getProductFormData = createAsyncThunk(
  'productions/getProductFormData',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/review/${
        data.reviewId
      }/form`
    );
    response.data.page = data.page;
    return response.data;
  }
);
