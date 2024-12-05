import React, { useEffect, useRef } from 'react';
import StoreItem from '../home/StoreItem';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProducts } from '../../actions/product';
import { useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { LOADING } from '../../datas/statusConstants';
import { createInfiniteScrollObserver } from '../../hooks/createInfiniteScrollObserver';
import Loading from '../common/Loading';
import { RootState } from '../../reducers';

const SearchProductsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const viewport = useRef(null);
  const scrollTarget = useRef(null);

  const searchProducts = useSelector(
    (state: RootState) => state.product.searchProducts
  );
  const hasMoreSearchProducts = useSelector(
    (state: RootState) => state.product.hasMoreSearchProducts
  );
  const searchProductsFilter = useSelector(
    (state: RootState) => state.product.searchProductsFilter
  );
  const searchProductsSortFilter = useSelector(
    (state: RootState) => state.product.searchProductsSortFilter
  );
  const loadSearchProductsStatus = useSelector(
    (state: RootState) => state.product.loadSearchProductsStatus
  );

  useEffect(() => {
    const page = Math.floor(searchProducts.length / 16) + 1;

    const query = `${location.search}&page=${page}`;
    const io = createInfiniteScrollObserver(
      viewport,
      hasMoreSearchProducts,
      loadSearchProductsStatus,
      scrollTarget,
      dispatch,
      getSearchProducts,
      query
    );

    return () => io && io.disconnect(); // 모든 요소의 관찰을 중지
  }, [
    viewport,
    scrollTarget,
    hasMoreSearchProducts,
    loadSearchProductsStatus,
    searchProducts,
    searchProductsFilter,
    searchProductsSortFilter,
    location.search,
  ]);

  return (
    <section className="search-products-list">
      {searchProducts?.map((product) => {
        return <StoreItem key={shortid.generate()} {...product} />;
      })}
      <Loading loadProductsStatus={loadSearchProductsStatus} />
      <div
        ref={
          hasMoreSearchProducts && !(loadSearchProductsStatus === LOADING)
            ? scrollTarget
            : undefined
        }
      />
    </section>
  );
};

export default SearchProductsList;
