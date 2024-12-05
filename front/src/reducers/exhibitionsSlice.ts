import { createSlice } from '@reduxjs/toolkit';
import { getCategoryExhibitions, getExhibitions } from '../actions/exhibitions';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';
import { ExhibitionsSliceType } from '../types/stateTypes';

const initialState: ExhibitionsSliceType = {
  exhibitions: {
    selfInterior: [],
    season: [],
    popular: {},
  },
  getExhibitionsStatus: 'idle',
  getExhibitionsError: null,
  categoryExhibitions: [],
  getCategoryExhibitionsStatus: 'idle',
  getCategoryExhibitionsError: null,
  currentCategoryTag: '전체',
};

const exhibitionsSlice = createSlice({
  name: 'exhibitions',
  initialState,

  reducers: {
    updateCategoryTag(state, action) {
      state.currentCategoryTag = action.payload.tag;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getExhibitions.pending, (state, action) => {
        state.getExhibitionsStatus = LOADING;
      })
      .addCase(getExhibitions.fulfilled, (state, action) => {
        state.getExhibitionsStatus = SUCCEEDED;
        state.exhibitions = action.payload;
      })
      .addCase(getExhibitions.rejected, (state, action) => {
        state.getExhibitionsStatus = REJECTED;
        state.getExhibitionsError = action.payload;
      })
      .addCase(getCategoryExhibitions.pending, (state, action) => {
        state.getCategoryExhibitionsStatus = LOADING;
      })
      .addCase(getCategoryExhibitions.fulfilled, (state, action) => {
        state.getCategoryExhibitionsStatus = SUCCEEDED;
        state.categoryExhibitions = action.payload;
      })
      .addCase(getCategoryExhibitions.rejected, (state, action) => {
        state.getCategoryExhibitionsStatus = REJECTED;
        state.getCategoryExhibitionsError = action.payload;
      }),
});

export default exhibitionsSlice;
