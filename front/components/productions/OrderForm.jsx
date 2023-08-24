import React, { useCallback } from 'react';
import OrderInputs from './OrderInputs';
import OrderCheckouts from './OrderCheckouts';
import ProductBookmark from './ProductBookmark';
import { useDispatch } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';

const OrderForm = ({ float }) => {
  const dispatch = useDispatch();
  // cartmodal는 is-active로 모달 띄움

  const addInCart = useCallback(() => {
    dispatch(modalSlice.actions.openCartModal('hi'));
  }, []);

  return (
    <form
      className={`${float ? 'floating-order-form' : ''} order-form lg-only `}
      action="/"
      method="POST"
    >
      <OrderInputs />
      <OrderCheckouts />
      <dl className="order-summary">
        <dt>주문금액</dt>
        <dd>
          <output htmlFor="select-1 select-2">
            <div className="price-20">
              <strong className="amount">62,900</strong>
              <span className="currency">원</span>
            </div>
          </output>
        </dd>
      </dl>

      <div className="button-group">
        {float && <ProductBookmark isInForm={true} />}
        <button
          className="btn-outlined btn-55"
          type="button"
          onClick={addInCart}
        >
          장바구니
        </button>
        <button className="btn-primary btn-55" type="submit">
          바로구매
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
