import React from 'react';
import AppLayout from '../components/common/AppLayout';
import StoreBanner from '../components/home/StoreBanner';
import StoreMenu from '../components/home/StoreMenu';
import TodayDealsSummary from '../components/home/TodayDealsSummary';
import PopularProducts from '../components/home/PopularProducts';
import StoreCategoryMenu from '../components/home/StoreCategoryMenu';
import { Helmet } from 'react-helmet-async';

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
              <StoreCategoryMenu />
              <PopularProducts />
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Store;
