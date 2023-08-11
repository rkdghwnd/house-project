import React from 'react';

const SideBarUserMenu = () => {
  return (
    <div className="sidebar-user-menu">
      <ul className="user-menu-list">
        <li className="user-menu-item">
          <a href="/">마이페이지</a>
        </li>
        <li className="user-menu-item">
          <a href="/">나의 쇼핑</a>
        </li>
        <li className="user-menu-item">
          <a href="/">스크랩북</a>
        </li>
        <li className="user-menu-item">
          <a href="/">알림</a>
        </li>
        <li className="user-menu-item">
          <a href="/">이벤트</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarUserMenu;
