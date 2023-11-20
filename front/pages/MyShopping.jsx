import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import UsersGnbBar from '../components/users/UsersGnbBar';
import UsersLnbBar from '../components/users/UsersLnbBar';
import DeliveryStatus from '../components/my_shopping/DeliveryStatus';
import DeliveryList from '../components/my_shopping/DeliveryList';
import { useSelector } from 'react-redux';
import { SUCCEEDED } from '../datas/statusConstants';
import { Outlet, useNavigate } from 'react-router-dom';

const MyShopping = () => {
  const { getMyInfoStatus, me } = useSelector((state) => state.user);
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
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Outlet />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyShopping;
