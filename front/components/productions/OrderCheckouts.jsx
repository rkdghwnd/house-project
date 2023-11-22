import React from 'react';
import CheckoutCard from './CheckoutCard';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const OrderCheckouts = () => {
  const { selectedOptions } = useSelector((state) => state.productions);
  const countedOptions = selectedOptions.filter(
    (option) => option.optionCount > 0
  );

  return (
    <div className="order-checkouts">
      <ul className="checkout-list">
        <li className="checkout-item">
          {countedOptions.map((option) => {
            return <CheckoutCard key={shortid.generate()} {...option} />;
          })}
        </li>
      </ul>
    </div>
  );
};

export default OrderCheckouts;
