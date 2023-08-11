import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sideBarMenuSlice from '../../reducers/sideBarMenuSlice';

const StoreDrawerMenu = () => {
  const dispatch = useDispatch();
  const { storeDrawerMenuVisible } = useSelector((state) => state.sideBarMenu);

  const onClickStoreButton = useCallback(() => {
    dispatch(sideBarMenuSlice.actions.toggleStoreDrawerMenu());
  }, []);

  return (
    <div
      className={`drawer-menu is-store is-active ${
        storeDrawerMenuVisible ? 'is-open' : ''
      }`}
    >
      <button
        className="drawer-menu-button"
        type="button"
        onClick={onClickStoreButton}
      >
        <i className="ic-store" aria-hidden></i>
        스토어
        <i className="ic-chevron" aria-hidden></i>
      </button>

      <div className="drawer-menu-content">
        <ul className="drawer-menu-list">
          <li className="drawer-menu-item">
            <a href="/">스토어</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">카테고리</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">신혼가구</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">베스트</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">오늘의딜</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">연휴특가</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">월동준비</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">리퍼마켓</a>
          </li>
          <li className="drawer-menu-item is-active">
            <a href="/">
              기획전
              <i className="ic-new" lang="en" aria-label="New"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoreDrawerMenu;
