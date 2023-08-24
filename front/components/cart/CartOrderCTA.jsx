import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CartOrderCTA = () => {
  const navigate = useNavigate();
  const goToOrderPage = useCallback(() => {
    navigate('/final_order');
  }, []);

  return (
    <div className="cart-order-cta sm-only">
      <div className="cart-order-cta-total">
        <span>2개</span>
        <span>81,900원</span>
      </div>
      <button className="btn-primary btn-40" onClick={goToOrderPage}>
        바로구매
      </button>
    </div>
  );
};

export default CartOrderCTA;
