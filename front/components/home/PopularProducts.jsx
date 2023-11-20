import React, { useEffect, useRef } from 'react';
import StoreItem from './StoreItem';
import { useDispatch, useSelector } from 'react-redux';
import { createInfiniteScrollObserver } from '../../hooks/createInfiniteScrollObserver';
import shortid from 'shortid';
import { getStorePopularProducts } from '../../actions/product';
import { LOADING } from '../../datas/statusConstants';
import { makeQuery } from '../../hooks/query';
import PopularProductsHeader from './PopularProductsHeader';
import Loading from '../common/Loading';

const PopularProducts = () => {
  const dispatch = useDispatch();
  const viewport = useRef(null);
  const scrollTarget = useRef(null);

  const {
    hasMorePopularProducts,
    loadPopularProductsStatus,
    popularProducts,
    popularProductsFilter,
    popularProductsSortFilter,
  } = useSelector((state) => state.product);

  useEffect(() => {
    // 페이지 + 배송필터 + 정렬필더
    const page = Math.floor(popularProducts.length / 12) + 1;

    const query = makeQuery(
      page,
      popularProductsFilter,
      popularProductsSortFilter
    );

    const io = createInfiniteScrollObserver(
      viewport,
      hasMorePopularProducts,
      loadPopularProductsStatus,
      scrollTarget,
      dispatch,
      getStorePopularProducts,
      query
    );

    return () => io && io.disconnect(); // 모든 요소의 관찰을 중지
  }, [
    popularProducts,
    viewport,
    scrollTarget,
    loadPopularProductsStatus,
    hasMorePopularProducts,
    popularProductsFilter,
    popularProductsSortFilter,
  ]);

  return (
    <section className="popular-products">
      <h3>인기 상품</h3>
      <PopularProductsHeader />
      <div className="popular-products-list">
        {popularProducts.map((product) => {
          return <StoreItem key={shortid.generate()} {...product} />;
        })}
      </div>
      <Loading loadProductsStatus={loadPopularProductsStatus} />
      <div
        ref={
          hasMorePopularProducts && !(loadPopularProductsStatus === LOADING)
            ? scrollTarget
            : undefined
        }
      />
    </section>
  );
};

export default PopularProducts;
