import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/user';

const MyMenu = () => {
  const dispatch = useDispatch();
  const myMenuRef = useRef();
  const { me } = useSelector((state) => state.user);

  const onClickLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  const closeMyMenuOnClickingOutside = useCallback(
    (e) => {
      if (!myMenuRef.current?.contains(e.target)) {
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
            <Link to={`/users/${me.id}`}>마이페이지</Link>
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
