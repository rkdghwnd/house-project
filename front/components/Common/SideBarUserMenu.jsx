import React from 'react';
import { Link } from 'react-router-dom';

const SideBarUserMenu = () => {
  return (
    <div className="sidebar-user-menu">
      <ul className="user-menu-list">
        <li className="user-menu-item">
          <Link to="/users">마이페이지</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/">나의 쇼핑</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/users/1/bookmark">스크랩북</Link>
        </li>
        <li className="user-menu-item">
          <Link to="/notification">알림</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarUserMenu;
