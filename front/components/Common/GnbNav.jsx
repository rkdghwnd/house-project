import React from 'react';
import { storeLnb } from '../../hooks/lnb';
import { Link, useLocation } from 'react-router-dom';

const GnbNav = () => {
  const location = useLocation();
  const storePaths = storeLnb.map((data) => data.href);

  return (
    <nav className="gnb-nav sm-hidden">
      <h2 className="visually-hidden">메뉴</h2>
      <ul className="gnb-nav-list">
        <li
          className={`gnb-nav-item ${
            storePaths.includes(location.pathname) ? 'is-active' : ''
          }`}
        >
          <Link to="/">스토어</Link>
        </li>
        <li className="gnb-nav-item">
          <Link to="/expert">인테리어시공</Link>
        </li>
      </ul>
    </nav>
  );
};

export default GnbNav;
