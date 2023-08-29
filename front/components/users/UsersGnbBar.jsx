import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import shortid from 'shortid';

const UsersGnbBar = () => {
  const location = useLocation();
  const usersGnbBar = [
    {
      name: '프로필',
      href: '/users/1',
    },
    {
      name: '나의 쇼핑',
      href: '/my_shopping',
    },
    {
      name: '나의 리뷰',
      href: '/production_reviews/write',
    },
    {
      name: '설정',
      href: '/users/1/edit',
    },
  ];

  return (
    <nav className="users-gnb-bar">
      <ul>
        {usersGnbBar.map(({ name, href }) => {
          return (
            <li
              key={shortid.generate()}
              className={`users-navbar-link${
                href.includes(location.pathname) ? ' is-active' : ''
              }`}
            >
              <NavLink to={href}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default UsersGnbBar;
