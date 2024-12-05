import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { SUCCEEDED } from '../datas/statusConstants';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { RootState } from '../reducers';

const UsersReviews = () => {
  const me = useSelector((state: RootState) => state.user.me);
  const getMyInfoStatus = useSelector(
    (state: RootState) => state.user.getMyInfoStatus
  );
  const navigate = useNavigate();

  useEffect(() => {
    // 비로그인 상태인 경우
    if (getMyInfoStatus === SUCCEEDED && !me) {
      navigate('/');
    }
  }, [me, getMyInfoStatus]);

  return (
    <>
      <Helmet>
        <title>내일의집 - 유저리뷰</title>
      </Helmet>
      <AppLayout>
        <UsersGnbBar />
        <UsersLnbBar />
        <Outlet />
      </AppLayout>
    </>
  );
};

export default UsersReviews;
