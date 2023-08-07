import React, { useCallback } from 'react';
import ProductBookmark from './ProductBookmark';
import { useDispatch } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';

const OrderCTA = () => {
  const dispatch = useDispatch();
  const onClickOrder = useCallback(() => {
    dispatch(modalSlice.actions.openOrderFormModal());
  }, []);

  return (
    <div className="order-cta lg-hidden">
      <ProductBookmark isInForm={false} />
      <button
        className="btn-primary btn-48"
        type="button"
        onClick={onClickOrder}
      >
        구매하기
      </button>
    </div>
  );
};

export default OrderCTA;
