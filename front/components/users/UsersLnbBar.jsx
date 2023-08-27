import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import {
  myShoppingLnbBar,
  productionReviewsLnbBar,
  userProfileLnbBar,
  usersSettingsLnbBar,
} from '../../hooks/lnb';

const UsersLnbBar = () => {
  const location = useLocation();

  const lnbBar = useMemo(() => {
    const isIncludes = (href) => {
      return location.pathname.includes(href);
    };
    if (isIncludes('/users') && !isIncludes('/edit')) {
      return userProfileLnbBar;
    } else if (isIncludes('/my_shopping')) {
      return myShoppingLnbBar;
    } else if (isIncludes('/production_reviews')) {
      return productionReviewsLnbBar;
    } else {
      return usersSettingsLnbBar;
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
