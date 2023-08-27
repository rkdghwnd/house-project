import React from 'react';
import AppLayout from '../components/common/AppLayout';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import DeliveryStatus from '../components/my_shopping/DeliveryStatus';
import DeliveryList from '../components/my_shopping/DeliveryList';

const MyShopping = () => {
  return (
    <AppLayout>
      <UsersGnbBar />
      <UsersLnbBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <DeliveryStatus />
            <DeliveryList />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyShopping;
