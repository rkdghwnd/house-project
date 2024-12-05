import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/user';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const SideBarUserMenu = () => {
  const dispatch = useAppDispatch();
  const me = useSelector((state: RootState) => state.user.me);

  const onClickLogOutButton = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <div className="sidebar-user-menu">
      <ul className="user-menu-list">
        <li className="user-menu-item">
          <Link to={`/users/${me?.id}`}>마이페이지</Link>
        </li>
        <li className="user-menu-item">
          <Link to={`/my_shopping`}>나의 쇼핑</Link>
        </li>
        <li className="user-menu-item">
          <Link to={`/users/${me?.id}/bookmark`}>스크랩북</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/notification">알림</Link>
        </li>
        <li className="user-menu-item">
          <Link to={`/users/${me?.id}/like`}>좋아요</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/users_reviews">내가 작성한 리뷰</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/users_reviews/write">리뷰 쓰기</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/users/edit">설정</Link>
        </li>
        <li className="user-menu-item">
          <button onClick={onClickLogOutButton}>로그아웃</button>
        </li>
      </ul>
    </div>
  );
};

export default SideBarUserMenu;
