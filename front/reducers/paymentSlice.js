import { createSlice } from '@reduxjs/toolkit';
import { getTOSSPayment } from '../actions/payment';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';

const initialState = {
  getTOSSPaymentStatus: 'idle',
  getTOSSPaymentError: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getTOSSPayment.pending, (state, action) => {
        state.getTOSSPaymentStatus = LOADING;
      })
      .addCase(getTOSSPayment.fulfilled, (state, action) => {
        const windowWidth = 800; // Set your desired width
        const windowHeight = 800; // Set your desired height

        state.getTOSSPaymentStatus = SUCCEEDED;
        const leftPosition = (window.screen.width - windowWidth) / 2;
        const topPosition = (window.screen.height - windowHeight) / 2;
        const windowFeatures = `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition},location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes`;
        const newWindow = window.open('', '_blank', windowFeatures);
        newWindow.document.write(action.payload);
      })
      .addCase(getTOSSPayment.rejected, (state, action) => {
        state.getTOSSPaymentStatus = REJECTED;
        state.getTOSSPaymentError = action.payload;
      }),
});

export default paymentSlice;
