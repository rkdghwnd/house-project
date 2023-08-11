import React from 'react';
import AppLayout from '../components/Common/AppLayout';
import StoreBanner from '../components/store/StoreBanner';
import StoreMenu from '../components/store/StoreMenu';
import TodayDealsSummary from '../components/store/TodayDealsSummary';
import PopularProducts from '../components/store/PopularProducts';

const Store = () => {
  return (
    <AppLayout>
      <StoreBanner />
      <main className="store">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <StoreMenu />
              <TodayDealsSummary />
              <PopularProducts />
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Store;
