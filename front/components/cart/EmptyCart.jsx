import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section className="cart">
      <div className="empty-cart">
        <img src="/assets/images/cart/cart-animation.gif" alt="빈 카트" />
        <Link to="/">
          <button className="btn-48 btn-primary">상품 담으러 가기</button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
