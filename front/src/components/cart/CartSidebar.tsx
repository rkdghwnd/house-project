import { MouseEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import modalSlice from '../../reducers/modalSlice';
import { addFinalOrder } from '../../actions/finalorder';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const CartSidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const me = useSelector((state: RootState) => state.user.me);
  const browserCart = useSelector(
    (state: RootState) => state.product.browserCart
  );
  const checkedBrowserCartIds = useSelector(
    (state: RootState) => state.product.checkedBrowserCartIds
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
    (e: MouseEvent<HTMLButtonElement>) => {
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
        dispatch(modalSlice.actions.openLogInModal({}));
      }
    },
    [me, filteredBrowserCart]
  );

  return (
    <section className="cart-sidebar">
      <div className="cart-sidebar-summary">
        <div className="total-price">
          <dt>총 상품금액</dt>
          <dd>{totalBrowserCartCost.toLocaleString()}원</dd>
        </div>
        <div className="total-delivery-cost">
          <dt>총 배송비</dt>
          <dd>
            +&nbsp;
            {totalBrowserCartDeliveryFee.toLocaleString()}원
          </dd>
        </div>
        <div className="total-discount">
          <dt>총 할인금액</dt>
          <dd>-&nbsp;0원</dd>
        </div>
        <div className="payment-cost">
          <dt>결제금액</dt>
          <dd>
            {(
              totalBrowserCartCost + totalBrowserCartDeliveryFee
            ).toLocaleString()}
            원
          </dd>
        </div>
      </div>

      <button className="btn-48 btn-primary" onClick={buyNow}>
        {filteredBrowserCart.length}개 상품 구매하기
      </button>
    </section>
  );
};

export default CartSidebar;
