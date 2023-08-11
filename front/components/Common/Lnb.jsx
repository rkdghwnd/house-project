import React from 'react';
import shortid from 'shortid';
import { storeLnb } from '../../hooks/lnb';
import { Link, useLocation } from 'react-router-dom';
const Lnb = () => {
  const location = useLocation();

  const storeLinks = storeLnb.map((data) => (
    <li
      className={`lnb-item ${
        location.pathname === data.href ? 'is-active' : ''
      }`}
      key={shortid.generate()}
    >
      <Link to={data.href}>
        {data.title}
        {data.isNew && <i className="ic-new" lang="en" aria-label="New"></i>}
      </Link>
    </li>
  ));

  return (
    <nav className="lnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h1 className="visually-hidden">스토어 메뉴</h1>
            <ul className="lnb-list">{storeLinks}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Lnb;
