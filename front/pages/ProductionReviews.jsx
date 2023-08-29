import React from 'react';
import AppLayout from '../components/common/AppLayout';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import { Outlet } from 'react-router-dom';

const ProductionReviews = () => {
  return (
    <AppLayout>
      <UsersGnbBar />
      <UsersLnbBar />
      <Outlet />
    </AppLayout>
  );
};

export default ProductionReviews;
