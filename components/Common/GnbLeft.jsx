import React, { useCallback, useRef } from 'react';
import GnbNav from './GnbNav';
import { useDispatch } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';

const GnbLeft = () => {
  const sidebarMenuButton = useRef();
  const dispatch = useDispatch();

  const onClickMenu = useCallback(() => {
    dispatch(modalSlice.actions.openSideBar());
  }, []);

  return (
    <div className="gnb-left">
      <h1 className="logo">
        <a href="javscript:void();">
          <img src="/assets/images/logo.svg" alt="내일의 집" />
        </a>
      </h1>
      <GnbNav />

      <button
        className="gnb-icon-button is-menu sm-only"
        type="button"
        aria-label="메뉴 열기 버튼"
        ref={sidebarMenuButton}
        onClick={onClickMenu}
      >
        <i className="ic-menu"></i>
      </button>
    </div>
  );
};

export default GnbLeft;
