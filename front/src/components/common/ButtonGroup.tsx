import { useCallback, useEffect } from 'react';
import MyMenu from './MyMenu.js';
import { useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { useNavigate } from 'react-router-dom';
import MyButtons from './MyButtons.js';
import productSlice from '../../reducers/productSlice';
import { RootState } from '../../reducers/index.js';
import { useAppDispatch } from '../../../reduxToolkitStore.js';

const ButtonGroup = () => {
  const dispatch = useAppDispatch();
  const me = useSelector((state: RootState) => state.user.me);
  const browserCartProductCount = useSelector(
    (state: RootState) => state.product.browserCartProductCount
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productSlice.actions.updateBroswerCartProductCount({}));
  }, []);

  const onClickSearchButton = useCallback(() => {
    dispatch(modalSlice.actions.openSearchModal({}));
  }, []);

  const openLogInModal = useCallback(() => {
    dispatch(modalSlice.actions.openLogInModal({}));
  }, []);

  const onClickCartButton = useCallback(() => {
    navigate('/cart');
  }, []);

  return (
    <div className="button-group">
      <button
        className="gnb-icon-button is-search lg-hidden"
        type="button"
        aria-label="검색창 열기 버튼"
        onClick={onClickSearchButton}
      >
        <i className="ic-search"></i>
      </button>
      {me && <MyButtons />}
      <button className="gnb-icon-button is-cart" onClick={onClickCartButton}>
        <i className="ic-cart" aria-label="장바구니 페이지로 이동"></i>

        {browserCartProductCount > 0 ? (
          <strong className="badge">{browserCartProductCount}</strong>
        ) : (
          ''
        )}
      </button>
      {me ? (
        <MyMenu />
      ) : (
        <div className="gnb-auth sm-hidden">
          <button onClick={openLogInModal}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
