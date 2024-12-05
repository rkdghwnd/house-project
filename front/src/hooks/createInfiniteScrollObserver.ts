import { RefObject } from 'react';
import { LOADING } from '../datas/statusConstants';
import { AppDispatch } from '../../reduxToolkitStore';
import { AsyncThunk } from '@reduxjs/toolkit';

export function createInfiniteScrollObserver(
  viewport: RefObject<null>,
  hasMoreProducts: boolean,
  loadProductsStatus: string,
  scrollTarget: RefObject<null>,
  dispatch: AppDispatch,
  actionFunction: AsyncThunk<any, any, any>,
  query: string
) {
  const options = {
    root: viewport!.current,
    threshold: 0,
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        hasMoreProducts &&
        !(loadProductsStatus === LOADING)
      ) {
        dispatch(
          actionFunction({
            query,
          })
        );
      }
    });
  };

  const io = new IntersectionObserver(handleIntersection, options);

  if (scrollTarget.current) {
    io.observe(scrollTarget.current); // 관찰 지정
  }

  return io;
}
