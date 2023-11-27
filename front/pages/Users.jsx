import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { Outlet } from 'react-router-dom';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import { useSelector } from 'react-redux';
import { SUCCEEDED } from '../datas/statusConstants';
import { Helmet } from 'react-helmet-async';

const Users = () => {
  const { me, user } = useSelector((state) => state.user);
  const userIsMe = me?.id === user?.id;

  return (
    <>
      <Helmet>
        <title>내일의집 - 유저 정보</title>
      </Helmet>
      <AppLayout>
        {userIsMe && (
          <>
            <UsersGnbBar />
            <UsersLnbBar />
          </>
        )}
        <Outlet />
      </AppLayout>
    </>
  );
};

export default Users;
