import React from 'react';
import AppLayout from '../components/common/AppLayout';
import ProductShow from '../components/productions/ProductShow';
import OrderFormModal from '../components/productions/OrderFormModal';
import CartModal from '../components/productions/CartModal';

const Productions = () => {
  return (
    <AppLayout>
      <ProductShow />
    </AppLayout>
  );
};

export default Productions;
