import React from 'react';
import AppLayout from '../components/Common/AppLayout';
import StoreItem from '../components/store/StoreItem';

const Ranks = () => {
  return (
    <AppLayout>
      <main className="ranks">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="ranks-menu">
                <button className="btn-48 btn-primary">실시간 베스트</button>
                <button className="btn-48 btn-outlined">역대 베스트</button>
              </div>
              <ul className="ranks-category">
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
              <div className="ranks-header">2023.08.08 13:07 기준</div>
              <section className="ranks-products">
                <div className="ranks-products-col">
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                </div>
                <div className="ranks-products-col">
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                </div>
                <div className="ranks-products-col">
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                  <StoreItem />
                </div>
                <div className="ranks-products-col">
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

export default Ranks;
