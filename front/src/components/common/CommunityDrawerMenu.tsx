import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sideBarMenuSlice from '../../reducers/sideBarMenuSlice';
import { RootState } from '../../reducers';

const CommunityDrawerMenu = () => {
  const dispatch = useDispatch();
  const communityDrawerMenuVisible = useSelector(
    (state: RootState) => state.sideBarMenu.communityDrawerMenuVisible
  );
  const onClickCommunityButton = useCallback(() => {
    dispatch(sideBarMenuSlice.actions.toggleCommunityDrawerMenu({}));
  }, []);

  return (
    <div
      className={`drawer-menu is-community ${
        communityDrawerMenuVisible ? 'is-open' : ''
      }`}
    >
      <button
        className="drawer-menu-button"
        type="button"
        onClick={onClickCommunityButton}
      >
        <i className="ic-community" aria-hidden></i>
        커뮤니티
        <i className="ic-chevron" aria-hidden></i>
      </button>

      <div className="drawer-menu-content">
        <ul className="drawer-menu-list">
          <li className="drawer-menu-item">
            <a href="/">홈</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">사진</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">집들이</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">노하우</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">전문가집들이</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">셀프가이드</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">질문과답변</a>
          </li>
          <li className="drawer-menu-item">
            <a href="/">이벤트</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommunityDrawerMenu;
