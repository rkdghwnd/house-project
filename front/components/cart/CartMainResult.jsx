import React from 'react';
import { useSelector } from 'react-redux';

const CartMainResult = () => {
  const { browserCart, checkedBrowserCartIds } = useSelector(
    (state) => state.product
  );

  const filteredBrowserCart = browserCart.filter((product) =>
    checkedBrowserCartIds.includes(product.id)
  );
  const totalBrowserCartCost = filteredBrowserCart.reduce((acc, cur) => {
    const optionCount = cur.Cart_product.reduce(
      (acc, cur) => acc + cur.product_count,
      0
    );
    return acc + optionCount * cur.selling_price;
  }, 0);

  const totalBrowserCartDeliveryFee = filteredBrowserCart.reduce((acc, cur) => {
    const fee = cur.free_delivery ? 0 : 3000;
    return acc + fee;
  }, 0);

  return (
    <ul className="cart-main-result">
      <li>
        <dd>총 상품금액</dd>
        <dt>{totalBrowserCartCost.toLocaleString()}원</dt>
      </li>
      <li>
        <dd>총 배송비</dd>
        <dt>
          +&nbsp;
          {totalBrowserCartDeliveryFee.toLocaleString()}원
        </dt>
      </li>
      <li>
        <dd>총 할인금액</dd>
        <dt>-&nbsp;0원</dt>
      </li>
      <li>
        <dd>결제금액</dd>
        <dt>
          {(
            totalBrowserCartCost + totalBrowserCartDeliveryFee
          ).toLocaleString()}
          원
        </dt>
      </li>
    </ul>
  );
};

export default CartMainResult;
