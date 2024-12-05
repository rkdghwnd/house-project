import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../reducers';

const CartModal = () => {
  const dispatch = useDispatch();
  const cartModalVisible = useSelector(
    (state: RootState) => state.modal.cartModalVisible
  );
  const navigate = useNavigate();
  const closeCartModal = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
  }, []);

  const redirectCartPage = useCallback(() => {
    dispatch(modalSlice.actions.closeModal({}));
    navigate('/cart');
  }, []);

  return (
    <aside className={`cart-modal ${cartModalVisible ? 'is-active' : ''}`}>
      <h1 className="cart-title">장바구니에 상품을 담았습니다</h1>

      <div className="button-group">
        <button className="btn-48 btn-primary" onClick={redirectCartPage}>
          장바구니 보러가기
        </button>
        <button
          className="btn-48 btn-secondary"
          type="button"
          onClick={closeCartModal}
        >
          확인
        </button>
      </div>
    </aside>
  );
};

export default CartModal;
