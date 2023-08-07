import { NextSeo } from 'next-seo';
import React, { useCallback } from 'react';
import GlobalHeader from '../components/common/GlobalHeader';
import ProductShow from '../components/productions/ProductShow';
import GlobalFooter from '../components/Common/GlobalFooter';
import SearchModal from '../components/Common/SearchModal';
import Sidebar from '../components/Common/SideBar';
import OrderFormModal from '../components/productions/OrderFormModal';
import CartModal from '../components/productions/CartModal';
import BookmarkToast from '../components/Common/BookmarkToast';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../reducers/modalSlice';
import Overlay from '../components/Common/Overlay';

const index = () => {
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
      <GlobalHeader />
      <ProductShow />
      <GlobalFooter />
      <Sidebar />
      <SearchModal />
      <OrderFormModal />
      {/* 상품을 장바구니에 추가했을때 나오는 모달
      <CartModal />  */}
      <CartModal />
      <Overlay />
      {/* 북마크 추가/제거 했을때의 메시지
      <BookmarkToast /> */}
    </>
  );
};

export default index;
