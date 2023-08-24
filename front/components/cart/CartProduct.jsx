import React, { useCallback } from 'react';
import CartItemOption from './CartItemOption';
import { useDispatch } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { Link } from 'react-router-dom';

const CartProduct = () => {
  const dispatch = useDispatch();
  const onClickOrder = useCallback(() => {
    dispatch(modalSlice.actions.openOrderFormModal());
  }, []);

  return (
    <article className="cart-product">
      <header className="cart-product-header">모나코 올리브 배송</header>
      <div className="cart-product-main">
        <div className="cart-product-item">
          <input type="checkbox" />
          <Link to="/productions/0">
            <div className="cart-product-item-content">
              <div className="item-image-container">
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1555988928248_JC.jpg?w=360&h=360&c=c&webp=1" />
              </div>

              <div className="item-desc">
                <p>
                  [모나코올리브] [선착순25%쿠폰]원터치 와이드 화이트 휴지통 10L
                </p>
                <span>무료배송&nbsp;|&nbsp;일반택배</span>
              </div>
            </div>
          </Link>

          <button className="btn-ghost">
            <i className="ic-close"></i>
          </button>
        </div>

        <CartItemOption />

        <div className="cart-product-total">
          <div className="cart-product-total-button">
            <button onClick={onClickOrder}>옵션변경</button>
            <span>&nbsp;|&nbsp;</span>
            <button>바로구매</button>
          </div>
          <h2>15,800원</h2>
        </div>
      </div>

      <footer className="cart-product-footer">
        <span>배송비 4000원</span>
      </footer>
    </article>
  );
};

export default CartProduct;
