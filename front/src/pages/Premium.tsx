import React from 'react';
import AppLayout from '../components/common/AppLayout';

import PremiumBanner from '../components/premium/PremiumBanner';
import PremiumPageButtons from '../components/premium/PremiumPageButtons';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Premium = () => {
  return (
    <>
      <Helmet>
        <title>내일의집 - 프리미엄</title>
      </Helmet>{' '}
      <AppLayout>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <PremiumBanner />
              <PremiumPageButtons />
              <Outlet />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Premium;
