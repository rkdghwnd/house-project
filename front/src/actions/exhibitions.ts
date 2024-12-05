import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import modalSlice from '../reducers/modalSlice';
import toastSlice from '../reducers/toastSlice';
import {
  CategoryIdPayloadType,
  CheckedItemsPayloadType,
  ExhibitionsIdPayloadType,
  UserIdPayloadType,
} from '../types/actionsTypes';

axios.defaults.withCredentials = true;

export const getExhibitions = createAsyncThunk(
  'exhibitions/getExhibitionsProducts',
  async (data: ExhibitionsIdPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/exhibitions/${
        data.exhibitionsId
      }`
    );
    return response.data;
  }
);

export const getCategoryExhibitions = createAsyncThunk(
  'exhibitions/getExhibitionsCategoryProducts',
  async (data: ExhibitionsIdPayloadType & CategoryIdPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/exhibitions/category/${
        data.exhibitionsId
      }?category_id=${data.categoryId}`
    );
    return response.data;
  }
);

export const addExhibitionsBookmark = createAsyncThunk(
  'exhibitions/addExhibitionsBookmark',
  async (data: ExhibitionsIdPayloadType, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/exhibitions/bookmark/${
        data.exhibitionsId
      }`
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.bookmarkToastFromAdd(data));
    return response.data;
  }
);

export const removeExhibitionsBookmark = createAsyncThunk(
  'exhibitions/removeExhibitionsBookmark',
  async (data: ExhibitionsIdPayloadType, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/exhibitions/bookmark/${
        data.exhibitionsId
      }`
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast(data));
    thunkAPI.dispatch(toastSlice.actions.bookmarkToastFromRemove(data));
    return response.data;
  }
);

export const getExhibitionsScrapBook = createAsyncThunk(
  'exhibitions/getExhibitionsScrapBook',
  async (data: UserIdPayloadType) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/exhibitions/scrapbook?userId=${
        data.userId
      }`
    );
    return response.data;
  }
);

export const removeExhibitionsScrapBook = createAsyncThunk(
  'exhibtions/removeExhibitionsScrapBook',
  async (data: UserIdPayloadType & CheckedItemsPayloadType, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/exhibitions/scrapbook?userId=${
        data.userId
      }`,
      { checkedItems: data.checkedItems }
    );
    thunkAPI.dispatch(
      modalSlice.actions.openMessageModal({
        message: `선택한 컨텐츠가 스크랩북에서 삭제되었습니다.`,
      })
    );
    return response.data;
  }
);
