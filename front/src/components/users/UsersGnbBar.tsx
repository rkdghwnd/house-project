import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { RootState } from '../../reducers';

const UsersGnbBar = () => {
  const location = useLocation();
  const me = useSelector((state: RootState) => state.user.me);

  const usersGnbBar = [
    {
      name: '프로필',
      href: `/users/${me?.id}`,
    },
    {
      name: '나의 쇼핑',
      href: '/my_shopping',
    },
    {
      name: '나의 리뷰',
      href: '/users_reviews',
    },
    {
      name: '설정',
      href: '/users/edit',
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
                location.pathname.includes(href) ? ' is-active' : ''
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
