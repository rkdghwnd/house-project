import React from 'react';
import AppLayout from '../components/common/AppLayout';
import TodayDealsBanner from '../components/today_deals/TodayDealsBanner';
import TodayDealsMain from '../components/today_deals/TodayDealsMain';
import { Helmet } from 'react-helmet-async';

const TodayDeals = () => {
  return (
    <>
      <Helmet>
        <title>내일의집 - 오늘의딜</title>
      </Helmet>
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
    </>
  );
};

export default TodayDeals;
