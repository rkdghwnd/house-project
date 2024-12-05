import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../reducers/productSlice';
import { RootState } from '../../reducers';

const CartMainHeader = () => {
  const dispatch = useDispatch();
  const checkedBrowserCartIds = useSelector(
    (state: RootState) => state.product.checkedBrowserCartIds
  );
  const browserCart = useSelector(
    (state: RootState) => state.product.browserCart
  );

  const handleAllCheck = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      productSlice.actions.handleAllCheckBrowserCartItems({
        checked: e.currentTarget.checked,
      })
    );
  }, []);

  const deleteChdckedItems = useCallback(() => {
    dispatch(
      productSlice.actions.removeBrowserCartProduct({
        productIds: checkedBrowserCartIds,
      })
    );
  }, [checkedBrowserCartIds]);

  return (
    <div className="cart-main-header">
      <div className="select-all">
        <input
          type="checkbox"
          onChange={handleAllCheck}
          checked={checkedBrowserCartIds.length === browserCart.length}
        />
        <label>모두선택</label>
      </div>
      <button className="btn-32 btn-ghost" onClick={deleteChdckedItems}>
        <span>선택삭제</span>
      </button>
    </div>
  );
};

export default CartMainHeader;
