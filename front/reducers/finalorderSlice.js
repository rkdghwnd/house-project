import { createSlice } from '@reduxjs/toolkit';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';
import { addFinalOrder, getFinalOrder } from '../actions/finalorder';

const initialState = {
  finalOrders: [],
  addFinalOrderStatus: 'idle',
  addFinalOrderError: null,
  getFinalOrderStatus: 'idle',
  getFinalOrderError: null,
};

const finalorderSlice = createSlice({
  name: 'finalorder',
  initialState,
  reducers: {
    updateCategoryTag(state, action) {},
  },
  extraReducers: (builder) =>
    builder
      .addCase(addFinalOrder.pending, (state, action) => {
        state.addFinalOrderStatus = LOADING;
      })
      .addCase(addFinalOrder.fulfilled, (state, action) => {
        state.addFinalOrderStatus = SUCCEEDED;
      })
      .addCase(addFinalOrder.rejected, (state, action) => {
        state.addFinalOrderStatus = REJECTED;
        state.addFinalOrderError = action.payload;
      })
      .addCase(getFinalOrder.pending, (state, action) => {
        state.getFinalOrderStatus = LOADING;
      })
      .addCase(getFinalOrder.fulfilled, (state, action) => {
        state.getFinalOrderStatus = SUCCEEDED;
        state.finalOrders = action.payload;
      })
      .addCase(getFinalOrder.rejected, (state, action) => {
        state.getFinalOrderStatus = REJECTED;
        state.getFinalOrderError = action.payload;
      }),
});

export default finalorderSlice;
