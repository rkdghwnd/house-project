import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { storeLnb } from '../../hooks/lnb';

const GnbNav = () => {
  const router = useRouter();
  const storePaths = storeLnb.map((data) => data.href);

  return (
    <nav className="gnb-nav sm-hidden">
      <h2 className="visually-hidden">메뉴</h2>
      <ul className="gnb-nav-list">
        <li className="gnb-nav-item">
          <Link href="/">커뮤니티</Link>
        </li>
        <li
          className={`gnb-nav-item ${
            storePaths.includes(router.pathname) ? 'is-active' : ''
          }`}
        >
          <Link href="/store">스토어</Link>
        </li>
        <li className="gnb-nav-item">
          <a href="javascript:void(0);">인테리어시공</a>
        </li>
      </ul>
    </nav>
  );
};

export default GnbNav;
