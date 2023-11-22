import React from 'react';
import AppLayout from '../components/common/AppLayout';

import PremiumBanner from '../components/premium/PremiumBanner';
import PremiumPageButtons from '../components/premium/PremiumPageButtons';
import { Outlet } from 'react-router-dom';

const Premium = () => {
  return (
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
  );
};

export default Premium;
