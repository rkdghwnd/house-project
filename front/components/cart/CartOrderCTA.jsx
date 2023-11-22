import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import modalSlice from '../../reducers/modalSlice';
import { addFinalOrder } from '../../actions/finalorder';

const CartOrderCTA = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  const { browserCart, checkedBrowserCartIds } = useSelector(
    (state) => state.product
  );

  const filteredBrowserCart = browserCart.filter((product) =>
    checkedBrowserCartIds.includes(product.id)
  );
  const totalBrowserCartCost = filteredBrowserCart.reduce((acc, cur) => {
    const optionCount = cur.Cart_product.reduce(
      (acc, cur) => acc + cur.product_count,
      0
    );
    return acc + optionCount * cur.selling_price;
  }, 0);

  const totalBrowserCartDeliveryFee = filteredBrowserCart.reduce((acc, cur) => {
    const fee = cur.free_delivery ? 0 : 3000;
    return acc + fee;
  }, 0);

  const buyNow = useCallback(
    (e) => {
      e.stopPropagation();
      // 선택한 상품만 모으기
      // 선택한 상품 db에 저장
      // 성공후 final_order로 이동
      if (me) {
        if (filteredBrowserCart.length === 0) {
          dispatch(
            modalSlice.actions.openMessageModal({
              message: '상품을 선택하세요',
            })
          );
        } else {
          dispatch(
            addFinalOrder({
              cart: filteredBrowserCart,
            })
          ).then((res) => {
            if (addFinalOrder.fulfilled.match(res)) {
              navigate('/final_order');
            }
          });
        }
      } else {
        dispatch(modalSlice.actions.openLogInModal());
      }
    },
    [me, filteredBrowserCart]
  );

  return (
    <div className="cart-order-cta sm-only">
      <div className="cart-order-cta-total">
        <span>{filteredBrowserCart.length}개</span>
        <span>
          {(
            totalBrowserCartCost + totalBrowserCartDeliveryFee
          ).toLocaleString()}
          원
        </span>
      </div>
      <button className="btn-primary btn-40" onClick={buyNow}>
        바로구매
      </button>
    </div>
  );
};

export default CartOrderCTA;
