import React from 'react';
import CheckoutCard from './CheckoutCard';

const OrderCheckouts = () => {
  return (
    <div className="order-checkouts">
      <ul className="checkout-list">
        <li className="checkout-item">
          <CheckoutCard />
        </li>
        <li className="checkout-item">
          <div className="checkout-card">
            <header className="checkout-header">
              <h4 className="checkout-title">
                추가상품 - 귤무덤 패키지 / 제주감귤 3kg / 온라인 감귤 판매 1위
              </h4>
              <button
                className="delete-button"
                type="button"
                aria-label="해당 상품을 삭제하기"
              >
                <i className="ic-close" aria-hidden></i>
              </button>
            </header>

            <footer className="checkout-footer">
              <div className="checkout-select">
                <select id="checkout-item-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <i className="ic-caret" aria-hidden></i>
              </div>

              <output className="checkout-output" htmlFor="checkout-item-2">
                <div className="price-16">
                  <strong className="amount">30,000</strong>
                  <span className="currency">원</span>
                </div>
              </output>
            </footer>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrderCheckouts;
