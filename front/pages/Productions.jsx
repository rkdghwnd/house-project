import React from 'react';
import AppLayout from '../components/common/AppLayout';
import ProductShow from '../components/productions/ProductShow';
import OrderFormModal from '../components/productions/OrderFormModal';
import CartModal from '../components/productions/CartModal';

const Productions = () => {
  return (
    <AppLayout>
      <ProductShow />
      <OrderFormModal />
      {/* 상품을 장바구니에 추가했을때 나오는 모달   */}
      <CartModal />;
    </AppLayout>
  );
};

export default Productions;
