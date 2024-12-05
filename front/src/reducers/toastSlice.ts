import { createSlice } from '@reduxjs/toolkit';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';
import { addFinalOrder, getFinalOrder } from '../actions/finalorder';

const initialState = {
  addBookmarkToastVisible: false,
  removeBookmarkToastVisible: false,
  likeToastVisible: false,
  cancelLikeToastVisible: false,
  addInquiryToastVisible: false,
  removeInquiryToastVisible: false,
  updateInquiryToastVisible: false,
  addReviewToastVisible: false,
  removeReviewToastVisible: false,
  updateReviewToastVisible: false,
  followToastVisible: false,
  unfollowToastVisible: false,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    bookmarkToastFromAdd(state, action) {
      state.addBookmarkToastVisible = true;
    },
    bookmarkToastFromRemove(state, action) {
      state.removeBookmarkToastVisible = true;
    },
    likeToastFromAdd(state, action) {
      state.likeToastVisible = true;
    },
    likeToastFromCancel(state, action) {
      state.cancelLikeToastVisible = true;
    },
    inquiryToastFromAdd(state, action) {
      state.addInquiryToastVisible = true;
    },
    inquiryToastFromRemove(state, action) {
      state.removeInquiryToastVisible = true;
    },
    inquiryToastFromUpdate(state, action) {
      state.updateInquiryToastVisible = true;
    },
    reviewToastFromAdd(state, action) {
      state.addReviewToastVisible = true;
    },
    reviewToastFromRemove(state, action) {
      state.removeReviewToastVisible = true;
    },
    reviewToastFromUpdate(state, action) {
      state.updateReviewToastVisible = true;
    },
    followToastFromAdd(state, action) {
      state.followToastVisible = false;
    },
    followToastFromRemove(state, action) {
      state.unfollowToastVisible = false;
    },
    closeToast(state, action) {
      state.addBookmarkToastVisible = false;
      state.removeBookmarkToastVisible = false;
      state.likeToastVisible = false;
      state.cancelLikeToastVisible = false;
      state.addInquiryToastVisible = false;
      state.removeInquiryToastVisible = false;
      state.updateInquiryToastVisible = false;
      state.addReviewToastVisible = false;
      state.removeReviewToastVisible = false;
      state.updateReviewToastVisible = false;
      state.followToastVisible = false;
      state.unfollowToastVisible = false;
    },
  },
  extraReducers: (builder) => builder,
});

export default toastSlice;
