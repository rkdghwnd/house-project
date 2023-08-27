import React from 'react';
import AppLayout from '../components/common/AppLayout';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';

const ProductionReviews = () => {
  return (
    <AppLayout>
      <UsersGnbBar />
      <UsersLnbBar />
    </AppLayout>
  );
};

export default ProductionReviews;
