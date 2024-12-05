import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sideBarMenuSlice from '../../reducers/sideBarMenuSlice';
import { storeLnb } from '../../datas/lnb';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';

const StoreDrawerMenu = () => {
  const dispatch = useDispatch();
  const storeDrawerMenuVisible = useSelector(
    (state: RootState) => state.sideBarMenu.storeDrawerMenuVisible
  );

  const onClickStoreButton = useCallback(() => {
    dispatch(sideBarMenuSlice.actions.toggleStoreDrawerMenu({}));
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
          {storeLnb.map(({ href, title, isNew }) => {
            return (
              <li key={shortid.generate()} className="drawer-menu-item">
                <Link to={href}>
                  {title}{' '}
                  {isNew && (
                    <i className="ic-new" lang="en" aria-label="New"></i>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StoreDrawerMenu;
