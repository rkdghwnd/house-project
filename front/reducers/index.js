import { combineReducers } from 'redux';
import userSlice from './userSlice';
import postSlice from './postSlice';
import modalSlice from './modalSlice';
import sideBarMenuSlice from './sideBarMenuSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
  modal: modalSlice.reducer,
  sideBarMenu: sideBarMenuSlice.reducer,
});

export default rootReducer;
