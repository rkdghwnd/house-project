import React from 'react';
import StoreItem from '../components/store/StoreItem';
import AppLayout from '../components/Common/AppLayout';
import TodayDealsBanner from '../components/today_deals/TodayDealsBanner';
import TodayDealsMain from '../components/today_deals/TodayDealsMain';

const TodayDeals = () => {
  return (
    <AppLayout>
      <TodayDealsBanner />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <TodayDealsMain />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TodayDeals;
