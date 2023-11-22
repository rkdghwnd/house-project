import React from 'react';
import AppLayout from '../components/common/AppLayout';
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
