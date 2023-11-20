import React, { useCallback, useEffect, useRef } from 'react';
import StoreItem from '../home/StoreItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts } from '../../actions/product';
import { useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { createInfiniteScrollObserver } from '../../hooks/createInfiniteScrollObserver';
import { LOADING } from '../../hooks/statusConstants';
import CategoryProductsListHeader from './CategoryProductsListHeader';
import Loading from '../common/Loading';

const CategoryProductsList = () => {
  const dispatch = useDispatch();
  const viewport = useRef(null);
  const scrollTarget = useRef(null);
  const {
    categoryProducts,
    hasMoreCategoryProducts,
    loadCategoryProductsStatus,
  } = useSelector((state) => state.product);
  const location = useLocation();

  useEffect(() => {
    const page = Math.floor(categoryProducts.length / 12) + 1;

    const query = `${location.search}&page=${page}`;

    const io = createInfiniteScrollObserver(
      viewport,
      hasMoreCategoryProducts,
      loadCategoryProductsStatus,
      scrollTarget,
      dispatch,
      getCategoryProducts,
      query
    );

    return () => io && io.disconnect(); // 모든 요소의 관찰을 중지
  }, [
    viewport,
    scrollTarget,
    hasMoreCategoryProducts,
    loadCategoryProductsStatus,
    categoryProducts,
    location.search,
  ]);

  return (
    <section className="category-products-list">
      <CategoryProductsListHeader />
      <div className="category-products-list-main">
        {categoryProducts.map((product) => {
          return <StoreItem key={shortid.generate()} {...product} />;
        })}
      </div>
      <Loading loadProductsStatus={loadCategoryProductsStatus} />
      <div
        ref={
          hasMoreCategoryProducts && !(loadCategoryProductsStatus === LOADING)
            ? scrollTarget
            : undefined
        }
      />
    </section>
  );
};

export default CategoryProductsList;
