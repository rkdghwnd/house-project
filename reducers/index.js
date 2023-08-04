import { combineReducers } from 'redux';
import userSlice from './userSlice';
import postSlice from './postSlice';
import modalSlice from './modalSlice';
import sideBarMenuSlice from './sideBarMenuSlice';
import scrollSlice from './scrollSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
  modal: modalSlice.reducer,
  sideBarMenu: sideBarMenuSlice.reducer,
  scroll: scrollSlice.reducer,
});

export default rootReducer;
