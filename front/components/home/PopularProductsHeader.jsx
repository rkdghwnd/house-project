import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import productSlice from '../../reducers/productSlice';

const PopularProductsHeader = () => {
  const dispatch = useDispatch();
  const { popularProductsFilter, popularProductsSortFilter } = useSelector(
    (state) => state.product
  );
  const sortName = popularProductsSortFilter.find((el) => el.isOn)?.content;

  const onOpenSortFilter = useCallback(() => {
    dispatch(modalSlice.actions.openFilterModal());
    dispatch(
      productSlice.actions.updateModalFilter({
        thunkName: 'getStorePopularProducts',
        title: '정렬',
        filterList: popularProductsSortFilter,
        filterActionName: 'updatePopularProductsFilter',
        productsFilter: popularProductsFilter,
        productsSortFilter: popularProductsSortFilter,
      })
    );
  }, [
    productSlice,
    modalSlice,
    popularProductsFilter,
    popularProductsSortFilter,
  ]);

  const onOpenDeliveryFilter = useCallback(() => {
    dispatch(modalSlice.actions.openFilterModal());
    dispatch(
      productSlice.actions.updateModalFilter({
        thunkName: 'getStorePopularProducts',
        title: '배송',
        filterList: popularProductsFilter,
        filterActionName: 'updatePopularProductsFilter',
        productsFilter: popularProductsFilter,
        productsSortFilter: popularProductsSortFilter,
      })
    );
  }, [
    popularProductsFilter,
    popularProductsSortFilter,
    productSlice,
    modalSlice,
  ]);

  return (
    <div className="popular-products-header">
      <button
        className="btn-delivery btn-32 btn-secondary"
        onClick={onOpenDeliveryFilter}
      >
        배송<i className="ic-chevron"></i>
      </button>
      <button className="btn-arrange" onClick={onOpenSortFilter}>
        {sortName}
        <i className="ic-caret"></i>
      </button>
    </div>
  );
};

export default PopularProductsHeader;
