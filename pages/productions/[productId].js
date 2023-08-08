import { NextSeo } from 'next-seo';
import React from 'react';
import ProductShow from '../../components/productions/ProductShow';
import OrderFormModal from '../../components/productions/OrderFormModal';
import CartModal from '../../components/productions/CartModal';
import AppLayout from '../../components/Common/AppLayout';

const productId = () => {
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
        <ProductShow />
      </AppLayout>
      <OrderFormModal />
      {/* 상품을 장바구니에 추가했을때 나오는 모달
<CartModal />  */}
      <CartModal />;
    </>
  );
};

export default productId;
