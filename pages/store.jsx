import { NextSeo } from 'next-seo';
import React from 'react';
import AppLayout from '../components/Common/AppLayout';
import StoreBanner from '../components/store/StoreBanner';
import StoreMenu from '../components/store/StoreMenu';
import PopularProducts from '../components/store/popularProducts';
import TodayDealsSummary from '../components/store/TodayDealsSummary';

const store = () => {
  return (
    <>
      <NextSeo
        title="라이프 스타일 슈퍼앱"
        description="인테리어 정보를 공유하고 쇼핑하는 서비스입니다."
        canonical={`${process.env.NEXT_PUBLIC_FRONT_URL}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_FRONT_URL}`,
        }}
      />
      <AppLayout>
        <StoreBanner />
        <main className="store">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <StoreMenu />
                <TodayDealsSummary />
                <PopularProducts />
              </div>
            </div>
          </div>
        </main>
      </AppLayout>
    </>
  );
};

export default store;
