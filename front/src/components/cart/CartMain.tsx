import { useSelector } from 'react-redux';
import shortid from 'shortid';
import CartMainHeader from './CartMainHeader';
import CartMainResult from './CartMainResult';
import { RootState } from '../../reducers';
import BrowserCartProduct from './BrowserCartProduct';

const CartMain = () => {
  const browserCart = useSelector(
    (state: RootState) => state.product.browserCart
  );

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
