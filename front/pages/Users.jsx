import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { Outlet } from 'react-router-dom';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import UserProfile from '../components/users/UserProfile';

const Users = () => {
  return (
    <AppLayout>
      <UsersGnbBar />
      <UsersLnbBar />
      <Outlet />
    </AppLayout>
  );
};

export default Users;
