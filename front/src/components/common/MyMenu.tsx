import { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/user';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const MyMenu = () => {
  const dispatch = useAppDispatch();
  const myMenuRef = useRef<HTMLDivElement>(null);
  const me = useSelector((state: RootState) => state.user.me);

  const onClickLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  const closeMyMenuOnClickingOutside = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!myMenuRef.current?.contains(e.target as Node)) {
        myMenuRef.current?.classList.remove('is-active');
        window.removeEventListener('click', closeMyMenuOnClickingOutside);
      }
    },
    [myMenuRef]
  );

  const toggleMyMenu = useCallback(() => {
    if (!myMenuRef.current?.classList.contains('is-active')) {
      window.addEventListener('click', closeMyMenuOnClickingOutside);
    }
    myMenuRef.current?.classList.toggle('is-active');
  }, [myMenuRef]);

  return (
    <div className="my-menu sm-hidden" ref={myMenuRef} onClick={toggleMyMenu}>
      <button
        className="my-menu-button"
        type="button"
        aria-label="마이메뉴 열기 버튼"
      >
        <img
          src={`${import.meta.env.VITE_BACK_END_DOMAIN}/${me?.profile_img}`}
          alt="profile-image"
        />
      </button>

      <div className="my-menu-content">
        <ul className="my-menu-list">
          <li className="my-menu-item">
            <Link to={`/users/${me?.id}`}>마이페이지</Link>
          </li>
          <li className="my-menu-item">
            <Link to="/my_shopping">나의 쇼핑</Link>
          </li>
          <li className="my-menu-item">
            <button type="button" onClick={onClickLogOut}>
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyMenu;
