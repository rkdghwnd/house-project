import React from 'react';

const GnbNav = () => {
  return (
    <nav className="gnb-nav sm-hidden">
      <h2 className="visually-hidden">메뉴</h2>
      <ul className="gnb-nav-list">
        <li className="gnb-nav-item">
          <a href="/">커뮤니티</a>
        </li>
        <li className="gnb-nav-item is-active">
          <a href="/">스토어</a>
        </li>
        <li className="gnb-nav-item">
          <a href="/">인테리어시공</a>
        </li>
      </ul>
    </nav>
  );
};

export default GnbNav;
