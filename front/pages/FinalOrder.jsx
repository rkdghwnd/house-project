import React, { useCallback, useRef, useState } from 'react';
import AppLayout from '../components/common/AppLayout';
import ShippingAddressForm from '../components/final_order/ShippingAddressForm';
import FinalOrdererForm from '../components/final_order/FinalOrdererForm';
import FinalOrderSideBar from '../components/final_order/FinalOrderSideBar';
import FinalOrderList from '../components/final_order/FinalOrderList';
import PaymentMethod from '../components/final_order/PaymentMethod';

const FinalOrder = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <div className="product-section-divider lg-hidden"></div>
            <FinalOrdererForm />
            <div className="product-section-divider lg-hidden"></div>
            <ShippingAddressForm />
            <div className="product-section-divider lg-hidden"></div>
            <FinalOrderList />
            <div className="product-section-divider lg-hidden"></div>
            <PaymentMethod />
          </div>
          <div className="col-lg-4">
            <FinalOrderSideBar />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FinalOrder;
