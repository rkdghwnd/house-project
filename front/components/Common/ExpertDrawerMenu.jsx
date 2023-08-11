import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sideBarMenuSlice from '../../reducers/sideBarMenuSlice';

const ExpertDrawerMenu = () => {
  const dispatch = useDispatch();
  const { expertDrawerMenuVisible } = useSelector((state) => state.sideBarMenu);

  const onClickExpertButton = useCallback(() => {
    dispatch(sideBarMenuSlice.actions.toggleExpertDrawerMenu());
  }, []);

  return (
    <div
      className={`drawer-menu is-expert ${
        expertDrawerMenuVisible ? 'is-open' : ''
      }`}
    >
      <button
        className="drawer-menu-button"
        type="button"
        onClick={onClickExpertButton}
      >
        <i className="ic-expert" aria-hidden></i>
        인테리어시공
        <i className="ic-chevron" aria-hidden></i>
      </button>

      <div className="drawer-menu-content">
        <ul className="drawer-menu-list">
          <li className="drawer-menu-item">
            <a href="/">시공홈</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">시공스토어</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpertDrawerMenu;
