import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import { Link, useLocation } from 'react-router-dom';
import CartProduct from '../components/cart/CartProduct';
import EmptyCart from '../components/cart/EmptyCart';
import CartSidebar from '../components/cart/CartSidebar';
import CartOrderCTA from '../components/cart/CartOrderCTA';

const Cart = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-4">
            <EmptyCart />
          </div> */}
          <div className="col-sm-4 col-md-8">
            <section className="cart">
              <div className="cart-header">
                <div className="select-all">
                  <input type="checkbox" />
                  <label>모두선택</label>
                </div>
                <button className="btn-32 btn-ghost">
                  <span>선택삭제</span>
                </button>
              </div>
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <ul className="cart-result">
                <li>
                  <dd>총 상품금액</dd>
                  <dt>3,039,000원</dt>
                </li>
                <li>
                  <dd>총 배송비</dd>
                  <dt>+ 0원</dt>
                </li>
                <li>
                  <dd>총 할인금액</dd>
                  <dt>- 343,000원</dt>
                </li>
                <li>
                  <dd>결제금액</dd>
                  <dt>2,696,000원</dt>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-md-4 sm-hidden">
            <CartSidebar />
          </div>
        </div>
      </div>
      <CartOrderCTA />
    </AppLayout>
  );
};

export default Cart;
