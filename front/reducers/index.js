import { combineReducers } from 'redux';
import userSlice from './userSlice';
import productSlice from './productSlice';
import modalSlice from './modalSlice';
import sideBarMenuSlice from './sideBarMenuSlice';
import productionsSlice from './productionsSlice';
import exhibitionsSlice from './exhibitionsSlice';
import searchSlice from './searchSlice';
import finalorderSlice from './finalorderSlice';
import toastSlice from './toastSlice';
import paymentSlice from './paymentSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  product: productSlice.reducer,
  modal: modalSlice.reducer,
  sideBarMenu: sideBarMenuSlice.reducer,
  productions: productionsSlice.reducer,
  exhibitions: exhibitionsSlice.reducer,
  search: searchSlice.reducer,
  finalorder: finalorderSlice.reducer,
  toast: toastSlice.reducer,
  payment: paymentSlice.reducer,
});

export default rootReducer;
