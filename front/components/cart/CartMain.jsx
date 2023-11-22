import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import CartMainHeader from './CartMainHeader';
import CartMainResult from './CartMainResult';
import BrowserCartProduct from './browserCartProduct';

const CartMain = () => {
  const { browserCart } = useSelector((state) => state.product);

  return (
    <section className="cart-main">
      <CartMainHeader />
      {browserCart.map((product) => {
        return <BrowserCartProduct key={shortid.generate()} {...product} />;
      })}
      <CartMainResult />
    </section>
  );
};

export default CartMain;
