import { createSlice } from '@reduxjs/toolkit';
import { getSearchReviewProducts } from '../actions/search';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';
import { SearchSliceType } from '../types/stateTypes';

const initialState: SearchSliceType = {
  searchReviewProducts: [],
  getSearchReviewProductsStatus: 'idle',
  getSearchReviewProductsError: null,
  searchReviewProductsVisible: false,
  gnbSearchHistoryList:
    JSON.parse(localStorage.getItem('history') || '[]') || [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchReviewProductsVisible(state, action) {
      state.searchReviewProductsVisible = action.payload.visible;
    },
    updateGnbSearchHistoryList(state, action) {
      state.gnbSearchHistoryList = action.payload.historyList;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getSearchReviewProducts.pending, (state, action) => {
        state.getSearchReviewProductsStatus = LOADING;
      })
      .addCase(getSearchReviewProducts.fulfilled, (state, action) => {
        state.getSearchReviewProductsStatus = SUCCEEDED;
        state.searchReviewProducts = action.payload;
      })
      .addCase(getSearchReviewProducts.rejected, (state, action) => {
        state.getSearchReviewProductsStatus = REJECTED;
        state.getSearchReviewProductsError = action.payload;
      }),
});

export default searchSlice;
