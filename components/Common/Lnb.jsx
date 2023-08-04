import React from 'react';

const Lnb = () => {
  return (
    <nav className="lnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h1 className="visually-hidden">스토어 메뉴</h1>

            <ul className="lnb-list">
              <li className="lnb-item is-active">
                <a href="/"> 스토어 </a>
              </li>
              <li className="lnb-item">
                <a href="/">카테고리</a>
              </li>
              <li className="lnb-item">
                <a href="/">신혼가구</a>
              </li>
              <li className="lnb-item">
                <a href="/">베스트</a>
              </li>
              <li className="lnb-item">
                <a href="/">오늘의딜</a>
              </li>
              <li className="lnb-item">
                <a href="/">연휴특가</a>
              </li>
              <li className="lnb-item">
                <a href="/">월동준비</a>
              </li>
              <li className="lnb-item">
                <a href="/">리퍼마켓</a>
              </li>
              <li className="lnb-item">
                <a href="/">
                  기획전
                  <i className="ic-new" lang="en" aria-label="New"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Lnb;
