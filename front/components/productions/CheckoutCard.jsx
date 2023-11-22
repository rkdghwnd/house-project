import React, { useCallback } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import productionsSlice from '../../reducers/productionsSlice';

const CheckoutCard = ({ optionName, optionIndex, optionCount, price }) => {
  const dispatch = useDispatch();

  const onPlusOptionCount = useCallback(() => {
    dispatch({
      type: 'productions/plusSelectedOptionCount',
      payload: {
        optionIndex,
      },
    });
  }, []);

  const onMinusOptionCount = useCallback(() => {
    dispatch({
      type: 'productions/minusSelectedOptionCount',
      payload: {
        optionIndex,
      },
    });
  }, []);

  const onClickRemoveOptionButton = useCallback(() => {
    dispatch(
      productionsSlice.actions.resetSelectedOptionCount({
        optionIndex,
      })
    );
  }, []);

  return (
    <div className="checkout-card">
      <header className="checkout-header">
        <h4 className="checkout-title">{optionName}</h4>
        <button
          className="delete-button"
          type="button"
          aria-label="해당 상품을 삭제하기"
          onClick={onClickRemoveOptionButton}
        >
          <i className="ic-close" aria-hidden></i>
        </button>
      </header>

      <footer className="checkout-footer">
        <div className="checkout-select">
          <button
            className="checkout-select-minus"
            onClick={onMinusOptionCount}
          >
            <AiOutlineMinus />
          </button>
          <div className="checkout-select-count">{optionCount}</div>
          <button className="checkout-select-plus" onClick={onPlusOptionCount}>
            <AiOutlinePlus />
          </button>
        </div>

        <output className="checkout-output" htmlFor="checkout-item-1">
          <div className="price-16">
            <strong className="amount">
              {(price * optionCount).toLocaleString()}
            </strong>
            <span className="currency">원</span>
          </div>
        </output>
      </footer>
    </div>
  );
};

export default CheckoutCard;
