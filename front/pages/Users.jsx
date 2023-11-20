import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { Outlet } from 'react-router-dom';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import { useSelector } from 'react-redux';
import { SUCCEEDED } from '../hooks/statusConstants';

const Users = () => {
  const { me, user } = useSelector((state) => state.user);
  const userIsMe = me?.id === user?.id;

  return (
    <AppLayout>
      {userIsMe && (
        <>
          <UsersGnbBar />
          <UsersLnbBar />
        </>
      )}
      <Outlet />
    </AppLayout>
  );
};

export default Users;
