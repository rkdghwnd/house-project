import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { SUCCEEDED } from '../hooks/statusConstants';
import { useSelector } from 'react-redux';

const UsersReviews = () => {
  const { me, getMyInfoStatus } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // 비로그인 상태인 경우
    if (getMyInfoStatus === SUCCEEDED && !me) {
      navigate('/');
    }
  }, [me, getMyInfoStatus]);

  return (
    <AppLayout>
      <UsersGnbBar />
      <UsersLnbBar />
      <Outlet />
    </AppLayout>
  );
};

export default UsersReviews;
