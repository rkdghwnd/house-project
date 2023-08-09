import React from 'react';
import AppLayout from '../components/Common/AppLayout';
import StoreItem from '../components/store/StoreItem';

const ranks = () => {
  return (
    <AppLayout>
      <main className="product-ranks">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="product-ranks-menu">
                <button className="btn-48 btn-primary">실시간 베스트</button>
                <button className="btn-48 btn-outlined">역대 베스트</button>
              </div>
              <ul className="product-ranks-category">
                <li>전체</li>
                <li>가구</li>
                <li>패브릭</li>
                <li>가전·디지털</li>
                <li>주방용품</li>
                <li>식품</li>
                <li>데코·식물</li>
                <li>조명</li>
                <li>수납·정리</li>
                <li>생활용품</li>
              </ul>
              <div className="product-ranks-header">2023.08.08 13:07 기준</div>
              <section className="product-ranks-products">
                <div className="product-ranks-products-col">
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                </div>
                <div className="product-ranks-products-col">
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                </div>
                <div className="product-ranks-products-col">
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                </div>
                <div className="product-ranks-products-col">
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default ranks;
