import CheckoutCard from './CheckoutCard';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { RootState } from '../../reducers';

const OrderCheckouts = () => {
  const selectedOptions = useSelector(
    (state: RootState) => state.productions.selectedOptions
  );
  const countedOptions = selectedOptions.filter(
    (option) => option.optionCount > 0
  );

  return (
    <div className="order-checkouts">
      <ul className="checkout-list">
        <li className="checkout-item">
          {countedOptions.map((option) => {
            return <CheckoutCard key={shortid.generate()} {...option} />;
          })}
        </li>
      </ul>
    </div>
  );
};

export default OrderCheckouts;
