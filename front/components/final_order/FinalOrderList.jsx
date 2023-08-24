import React, { useCallback, useState } from 'react';
import FinalOrderItem from './finalOrderItem';

const FinalOrderList = () => {
  const [short, setShort] = useState(false);
  const onShortForm = useCallback(() => {
    setShort((state) => !state);
  }, []);

  return (
    <section className={`final-order-list ${short ? 'short' : ''}`}>
      <div className={`final-order-list-header`} onClick={onShortForm}>
        <div className="list-left">
          <h2>주문상품</h2>
          <span>2건</span>
        </div>
        <i className={`ic-chevron ${short ? 'short' : ''}`}></i>
      </div>
      <ul>
        <FinalOrderItem />
        <FinalOrderItem />
      </ul>
    </section>
  );
};

export default FinalOrderList;
