import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const { selectedOptions } = useSelector((state) => state.productions);
  const totalCost = selectedOptions
    .map((el) => el.price * el.optionCount)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <dl className="order-summary">
      <dt>주문금액</dt>
      <dd>
        <output htmlFor="select-1 select-2">
          <div className="price-20">
            <strong className="amount">{totalCost.toLocaleString()}</strong>
            <span className="currency">원</span>
          </div>
        </output>
      </dd>
    </dl>
  );
};

export default OrderSummary;
