import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { Helmet } from 'react-helmet-async';

const Notification = () => {
  return (
    <>
      <Helmet>
        <title>내일의집 - 알림</title>
      </Helmet>
      <AppLayout>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <main className="notification">
                <div className="notification-header">
                  <h2>내 소식</h2>
                </div>
                <div className="notification-content">
                  <p>최근 내 소식이 없습니다.</p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Notification;
