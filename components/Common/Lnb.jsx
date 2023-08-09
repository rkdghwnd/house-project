import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import shortid from 'shortid';
import { storeLnb } from '../../hooks/lnb';
const Lnb = () => {
  const router = useRouter();

  const storeLinks = storeLnb.map((data) => (
    <li
      className={`lnb-item ${router.pathname === data.href ? 'is-active' : ''}`}
      key={shortid.generate()}
    >
      <Link href={data.href}>
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
