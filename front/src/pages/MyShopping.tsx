import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import { useSelector } from 'react-redux';
import { SUCCEEDED } from '../datas/statusConstants';
import { Outlet, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RootState } from '../reducers';

const MyShopping = () => {
  const getMyInfoStatus = useSelector(
    (state: RootState) => state.user.getMyInfoStatus
  );
  const me = useSelector((state: RootState) => state.user.me);
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
        <title>내일의집 - 쇼핑</title>
      </Helmet>{' '}
      <AppLayout>
        <UsersGnbBar />
        <UsersLnbBar />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Outlet />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default MyShopping;
