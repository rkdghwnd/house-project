import React from 'react';

const CartItemOption = () => {
  return (
    <div className="cart-item-option">
      <div className="cart-item-option-title">
        <h2>원터치 휴지통</h2>
        <button className="btn-ghost">
          <i className="ic-close"></i>
        </button>
      </div>
      <div className="cart-item-option-cost">
        <div className="item-quantity">
          <button>
            <span>ㅡ</span>
          </button>
          <button>
            <span>1</span>
          </button>
          <button>
            <span>+</span>
          </button>
        </div>
        <div className="item-price">
          <span>8,900원</span>
        </div>
      </div>
    </div>
  );
};

export default CartItemOption;
