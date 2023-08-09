import React from 'react';
import AppLayout from '../components/Common/AppLayout';
import Link from 'next/link';
import StoreItem from '../components/store/StoreItem';

const today_deals = () => {
  return (
    <AppLayout>
      <div className="today-deals-banner sm-only">
        <img
          src="/assets/images/banner/today_deal_banner.avif"
          loading="lazy"
        />
      </div>
      <main className="today-deals">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <section className="today-deals-main">
                <div className="today-deals-main-header sm-hidden">
                  <h3>오늘의 딜</h3>
                  <span>매일 자정,새로운 특가상품</span>
                </div>
                <div className="today-deals-main-items">
                  <div className="today-deals-main-items-col">
                    <StoreItem />
                    <StoreItem />
                    <StoreItem />
                    <StoreItem />
                  </div>
                  <div className="today-deals-main-items-col">
                    <StoreItem />
                    <StoreItem />
                    <StoreItem />
                    <StoreItem />
                  </div>
                  <div className="today-deals-main-items-col">
                    <StoreItem />
                    <StoreItem />
                    <StoreItem />
                    <StoreItem />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default today_deals;
