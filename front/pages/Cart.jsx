import React, { useEffect, useMemo } from 'react';
import AppLayout from '../components/common/AppLayout';
import EmptyCart from '../components/cart/EmptyCart';
import CartSidebar from '../components/cart/CartSidebar';
import CartOrderCTA from '../components/cart/CartOrderCTA';
import { useDispatch, useSelector } from 'react-redux';
import CartMain from '../components/cart/CartMain';
import productSlice from '../reducers/productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { browserCartProductCount, browserCart } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(productSlice.actions.getBrowserCart());
  }, []);

  const cartList = useMemo(() => {
    if (browserCartProductCount === 0) {
      return (
        <div className="col-sm-4">
          <EmptyCart />
        </div>
      );
    } else {
      return (
        <>
          <div className="col-sm-4 col-md-8">
            <CartMain />
          </div>
          <div className="col-md-4 sm-hidden">
            <CartSidebar />
          </div>
        </>
      );
    }
  }, [browserCartProductCount]);

  return (
    <AppLayout>
      <div className="container">
        <div className="row">{cartList}</div>
      </div>
      {browserCart.length !== 0 && <CartOrderCTA />}
    </AppLayout>
  );
};

export default Cart;
