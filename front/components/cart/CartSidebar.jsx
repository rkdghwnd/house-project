import React from 'react';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  return (
    <section className="cart-sidebar">
      <div className="cart-sidebar-summary">
        <div className="total-price">
          <dt>총 상품금액</dt>
          <dd>141,800원</dd>
        </div>
        <div className="total-delivery-cost">
          <dt>총 배송비</dt>
          <dd>+ 4,000원</dd>
        </div>
        <div className="total-discount">
          <dt>총 할인금액</dt>
          <dd>- 66,100원</dd>
        </div>
        <div className="payment-cost">
          <dt>결제금액</dt>
          <dd>79,700원</dd>
        </div>
      </div>
      <Link to="/final_order">
        <button className="btn-48 btn-primary">2개 상품 구매하기</button>
      </Link>
    </section>
  );
};

export default CartSidebar;
