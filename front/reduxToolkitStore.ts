import { configureStore, Middleware } from '@reduxjs/toolkit';

import reducer from './src/reducers';
import { useDispatch } from 'react-redux';

const firstMiddleware: Middleware<{}, any> = () => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};
// applyMiddleware나 composeWithDevtools 같은건 사용하면 안된다.(이미 등록되있음)
const reduxToolkitStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firstMiddleware),
  // getDefaultMiddleware에 Thunk라던가 여러 미들웨어가 등록되 있음
  // devTools: true (기본값 true, 사용할지 말지 결정)
  // enhancers: (defaultEnhancers) => defaultEnhancers.prepend(offline)
});

export type AppDispatch = typeof reduxToolkitStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default reduxToolkitStore;
