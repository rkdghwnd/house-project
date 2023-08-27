import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const MyMenu = () => {
  const myMenuRef = useRef();
  const myMenuButton = useRef();

  const closeMyMenuOnClickingOutside = useCallback(
    (e) => {
      if (!myMenuRef.current.contains(e.target)) {
        myMenuRef.current.classList.remove('is-active');
        window.removeEventListener('click', closeMyMenuOnClickingOutside);
      }
    },
    [myMenuRef]
  );

  const toggleMyMenu = useCallback(() => {
    if (!myMenuRef.current.classList.contains('is-active')) {
      window.addEventListener('click', closeMyMenuOnClickingOutside);
    }
    myMenuRef.current.classList.toggle('is-active');
  }, [myMenuRef]);

  return (
    <div className="my-menu sm-hidden" ref={myMenuRef} onClick={toggleMyMenu}>
      <button
        className="my-menu-button"
        type="button"
        aria-label="마이메뉴 열기 버튼"
        ref={myMenuButton}
      >
        <img src="/assets/images/img-user-01.jpg" alt="사달라 아저씨" />
      </button>

      <div className="my-menu-content">
        <ul className="my-menu-list">
          <li className="my-menu-item">
            <Link to="/users/1">마이페이지</Link>
          </li>
          <li className="my-menu-item">
            <Link to="/my_shopping">나의 쇼핑</Link>
          </li>
          <li className="my-menu-item">
            <button type="button">로그아웃</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyMenu;
