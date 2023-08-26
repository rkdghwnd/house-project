import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { myShoppingLnbBar, userProfileLnbBar } from '../../hooks/lnb';

const UsersLnbBar = () => {
  const location = useLocation();

  const lnbBar = useMemo(() => {
    if (location.pathname.includes('/users')) {
      return userProfileLnbBar;
    } else if (location.pathname.includes('/my_shopping')) {
      return myShoppingLnbBar;
    }
  }, [location.pathname]);

  return (
    <nav className="users-lnb-bar">
      <div className="triangle"></div>
      <ul>
        {lnbBar.map(({ name, href }) => {
          return (
            <li
              key={shortid.generate()}
              className={`users-lnb-bar-link${
                location.pathname === href ? ' is-active' : ''
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

export default UsersLnbBar;
