import React from 'react';
import shortid from 'shortid';

const FinalOrderItem = ({
  id,
  product_name,
  brand_name,
  image_url,
  free_delivery,
  selling_price,
  Final_cart_products,
}) => {
  const deliveryFee = free_delivery ? 0 : 3000;
  return (
    <li className="final-order-item">
      <div className="item-header">
        <h4>{brand_name}</h4>
        <div className="item-header-right">
          <span>배송비</span>
          <span>{deliveryFee}원</span>
        </div>
      </div>
      {Final_cart_products?.map((option) => {
        return (
          <div className="item-content" key={shortid.generate()}>
            <img src={image_url} alt={product_name} />
            <div className="item-content-right">
              <h4>{product_name}</h4>
              <p>{option.product_option}</p>
              <div className="item-content-right-price">
                <span>{selling_price.toLocaleString()}원</span>
                <span>|</span>
                <span>{option.product_count}개</span>
              </div>
            </div>
          </div>
        );
      })}
    </li>
  );
};

export default FinalOrderItem;
