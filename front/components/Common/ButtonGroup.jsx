import React, { useCallback, useEffect, useState } from 'react';
import MyMenu from './MyMenu';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getMyInfo } from '../../actions/user';
import MyButtons from './MyButtons';
import productSlice from '../../reducers/productSlice';

const ButtonGroup = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { browserCartProductCount } = useSelector((state) => state.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productSlice.actions.updateBroswerCartProductCount());
  }, []);

  const onClickSearchButton = useCallback(() => {
    dispatch(modalSlice.actions.openSearchModal());
  }, []);

  const openLogInModal = useCallback(() => {
    dispatch(modalSlice.actions.openLogInModal());
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
