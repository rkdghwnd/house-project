import React, { useCallback, useState } from 'react';
import FinalOrderItem from './finalOrderItem';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const FinalOrderList = () => {
  const { finalOrders } = useSelector((state) => state.finalorder);
  const [short, setShort] = useState(false);
  const onShortForm = useCallback(() => {
    setShort((state) => !state);
  }, []);

  return (
    <section className={`final-order-list ${short ? 'short' : ''}`}>
      <div className={`final-order-list-header`} onClick={onShortForm}>
        <div className="list-left">
          <h2>주문상품</h2>
          <span>{finalOrders.length}건</span>
        </div>
        <i className={`ic-chevron ${short ? 'short' : ''}`}></i>
      </div>
      <ul>
        {finalOrders.map((product) => {
          return <FinalOrderItem key={shortid.generate()} {...product} />;
        })}
      </ul>
    </section>
  );
};

export default FinalOrderList;
