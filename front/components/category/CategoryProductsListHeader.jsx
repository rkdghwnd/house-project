import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import productSlice from '../../reducers/productSlice';

const CategoryProductsListHeader = () => {
  const dispatch = useDispatch();
  const {
    categoryProductsFilter,
    categoryProductsSortFilter,
    productTotalCount,
  } = useSelector((state) => state.product);

  const onOpenSortFilter = useCallback(() => {
    dispatch(modalSlice.actions.openFilterModal());
    dispatch(
      productSlice.actions.updateModalFilter({
        title: '정렬',
        filterList: categoryProductsSortFilter,
        thunkName: 'getCategoryProducts',
        filterActionName: 'updateCategoryFilter',
        productsFilter: categoryProductsFilter,
        productsSortFilter: categoryProductsSortFilter,
      })
    );
  }, [
    productSlice,
    modalSlice,
    categoryProductsFilter,
    categoryProductsSortFilter,
  ]);

  const sortName = categoryProductsSortFilter?.find((el) => el.isOn)?.content;
  return (
    <div className="category-products-list-header">
      <span>전체 {productTotalCount}개</span>
      <button className="btn-arrange" onClick={onOpenSortFilter}>
        {sortName}
        <i className="ic-caret"></i>
      </button>
    </div>
  );
};

export default CategoryProductsListHeader;
