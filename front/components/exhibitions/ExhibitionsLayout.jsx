import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';

const ExhibitionsLayout = ({ children }) => {
  return (
    <main className="exhibitions-layout">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-8">
            <div className="exhibitions-layout-editor">{children}</div>
          </div>
          <div className="col-md-4 sm-hidden">
            <div className="exhibitions-layout-floating">
              <p>전시, 반품, 스크래치 득템의 기회!</p>
              <h3>빠른 품절! 리퍼마켓 90%</h3>
              <div className="exhibitions-layout-floating-selection">
                <button className="btn-48 btn-outlined">
                  <i className="ic-bookmark" />
                  <span>127,339</span>
                </button>
                <button className="btn-48 btn-outlined">
                  <AiOutlineShareAlt className="ic-share" />
                  <span>공유하기</span>
                </button>
              </div>
              <button className="btn-48 btn-primary">판매상품 목록보기</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExhibitionsLayout;
