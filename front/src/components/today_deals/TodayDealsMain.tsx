import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodayDealsProducts } from '../../actions/product';
import HotdealStoreItem from '../common/HotdealStoreItem';
import shortid from 'shortid';
import { createInfiniteScrollObserver } from '../../hooks/createInfiniteScrollObserver';
import { LOADING } from '../../datas/statusConstants';
import Spinner from '../../loading/Spinner';
import Loading from '../common/Loading';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';
import { ProductType } from '../../types/stateTypes';

const TodayDealsMain = () => {
  const dispatch = useAppDispatch();
  const viewport = useRef(null);
  const scrollTarget = useRef(null);

  const getTodayDealsProductsStatus = useSelector(
    (state: RootState) => state.product.getTodayDealsProductsStatus
  );
  const todayDealsProducts = useSelector(
    (state: RootState) => state.product.todayDealsProducts
  );
  const hasMoreTodayDealsProducts = useSelector(
    (state: RootState) => state.product.hasMoreTodayDealsProducts
  );

  useEffect(() => {
    dispatch(
      getTodayDealsProducts({
        query: '?page=1',
      })
    );
  }, []);

  useEffect(() => {
    // 페이지 + 배송필터 + 정렬필더
    const page = Math.floor(todayDealsProducts.length / 12) + 1;

    const query = `?page=${page}`;

    const io = createInfiniteScrollObserver(
      viewport,
      hasMoreTodayDealsProducts,
      getTodayDealsProductsStatus,
      scrollTarget,
      dispatch,
      getTodayDealsProducts,
      query
    );

    return () => io && io.disconnect(); // 모든 요소의 관찰을 중지
  }, [
    todayDealsProducts,
    viewport,
    scrollTarget,
    getTodayDealsProductsStatus,
    hasMoreTodayDealsProducts,
  ]);

  return (
    <section className="today-deals-main">
      <div className="today-deals-main-header sm-hidden">
        <span className="today-deals-main-header-title">오늘의 딜</span>
        <span>매일 자정,새로운 특가상품</span>
      </div>
      <div className="today-deals-main-items">
        {todayDealsProducts.map((product) => {
          return <HotdealStoreItem key={shortid.generate()} {...product} />;
        })}
      </div>
      <Loading loadProductsStatus={getTodayDealsProductsStatus} />
      <div
        ref={
          hasMoreTodayDealsProducts &&
          !(getTodayDealsProductsStatus === LOADING)
            ? scrollTarget
            : undefined
        }
      />
    </section>
  );
};

export default TodayDealsMain;
