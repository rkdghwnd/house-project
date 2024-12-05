import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import modalSlice from '../reducers/modalSlice';
import toastSlice from '../reducers/toastSlice';
import {
  FormDataPayloadType,
  IdPayloadType,
  InquiryIdPayloadType,
  PagePayloadType,
  ProductIdPayloadType,
  QueryPayloadType,
  ReviewIdPayloadType,
} from '../types/actionsTypes';
axios.defaults.withCredentials = true;

export const getProductions = createAsyncThunk(
  'productions/getProductions',
  async (data: ProductIdPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${data.productId}`
    );

    return response.data;
  }
);

export const getProductionReviews = createAsyncThunk(
  'productions/getProductionReviews',
  async (data: ProductIdPayloadType & QueryPayloadType) => {
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
  async (data: FormDataPayloadType) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/review_image`,
      data.data,
      {
        headers: { 'Content-Type': 'multipart/form-data', charset: 'utf-8' },
      }
    );
    return response.data[0];
  }
);

export const writeReview = createAsyncThunk(
  'productions/writeReview',
  async (data: FormDataPayloadType & IdPayloadType, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${data.id}/review`,
      data.data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal(data));
    thunkAPI.dispatch(
      getReviewScoreStats({
        id: data.id,
      })
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.reviewToastFromAdd(data));
    return response.data;
  }
);

export const updateReview = createAsyncThunk(
  'productions/updateReview',
  async (data: IdPayloadType & FormDataPayloadType, thunkAPI) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${data.id}/review`,
      data.data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal(data));
    thunkAPI.dispatch(
      getReviewScoreStats({
        id: data.id,
      })
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.reviewToastFromUpdate(data));
    return response.data;
  }
);

export const removeReview = createAsyncThunk(
  'productions/removeReview',
  async (data: ProductIdPayloadType & ReviewIdPayloadType, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/review/${data.reviewId}`
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal(data));
    thunkAPI.dispatch(
      getReviewScoreStats({
        id: data.productId,
      })
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.reviewToastFromRemove(data));
    return response.data;
  }
);

export const getReviewScoreStats = createAsyncThunk(
  'productions/getReviewScoreStats',
  async (data: IdPayloadType) => {
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
  async (data: ProductIdPayloadType & QueryPayloadType) => {
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
  async (
    data: {
      inquiryId: number;
      question_type: string;
      question: string;
      is_secret: boolean;
      productId: number;
    },
    thunkAPI
  ) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/inquiry/${data.inquiryId}`,
      data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal(data));
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.inquiryToastFromUpdate(data));
    return response.data;
  }
);

export const writeInquiry = createAsyncThunk(
  'productions/writeInquiry',
  async (
    data: {
      question_type: string;
      question: string;
      is_secret: boolean;
      question_nickname: string;
      is_buyer: boolean;
      productId: number;
    },
    thunkAPI
  ) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/inquiry`,
      data
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal(data));
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.inquiryToastFromAdd(data));
    return response.data;
  }
);

export const removeInquiry = createAsyncThunk<
  string,
  ProductIdPayloadType & InquiryIdPayloadType
>(
  'productions/removeInquiry',
  async (data: ProductIdPayloadType & InquiryIdPayloadType, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/${
        data.productId
      }/inquiry/${data.inquiryId}`
    );

    thunkAPI.dispatch(modalSlice.actions.closeModal(data));
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.inquiryToastFromRemove(data));
    return response.data;
  }
);

export const getProductFormData = createAsyncThunk(
  'productions/getProductFormData',
  async (data: ReviewIdPayloadType & PagePayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/productions/review/${
        data.reviewId
      }/form`
    );
    response.data.page = data.page || 1;
    return response.data;
  }
);
