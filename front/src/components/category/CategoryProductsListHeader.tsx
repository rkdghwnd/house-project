import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import productSlice from '../../reducers/productSlice';
import { RootState } from '../../reducers';

const CategoryProductsListHeader = () => {
  const dispatch = useDispatch();

  const categoryProductsFilter = useSelector(
    (state: RootState) => state.product.categoryProductsFilter
  );
  const categoryProductsSortFilter = useSelector(
    (state: RootState) => state.product.categoryProductsSortFilter
  );
  const productTotalCount = useSelector(
    (state: RootState) => state.product.productTotalCount
  );

  const onOpenSortFilter = useCallback(() => {
    dispatch(modalSlice.actions.openFilterModal({}));
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
