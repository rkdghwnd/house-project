import React from 'react';
import AppLayout from '../components/Common/AppLayout';

const refur_market = () => {
  return (
    <AppLayout>
      <main className="refur-market">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-12 col-lg-8">
              <div className="refur-market-editor">
                <div className="refur-banner">
                  <img src="/assets/images/banner/refur_market_banner.gif" />
                </div>
                <div className="refur-banner">
                  <img src="/assets/images/banner/refur_market_banner.gif" />
                </div>
                <div className="refur-banner">
                  <img src="/assets/images/banner/refur_market_banner.gif" />
                </div>
                <div className="refur-banner">
                  <img src="/assets/images/banner/refur_market_banner.gif" />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4 lg-only">
              <div className="refur-market-floating">
                <p>전시, 반품, 스크래치 득템의 기회!</p>
                <h3>빠른 품절! 리퍼마켓 90%</h3>
                <div className="refur-market-floating-selection">
                  <button className="btn-48 btn-outlined">127,339</button>
                  <button className="btn-48 btn-outlined">공유하기</button>
                </div>
                <button className="btn-48 btn-primary">
                  판매상품 목록보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default refur_market;
