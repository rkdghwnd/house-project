import React from 'react';
import shortid from 'shortid';

type FinalOrderItemPropsType = {
  id: number;
  product_name: string;
  brand_name: string;
  image_url: string;
  free_delivery: boolean;
  selling_price: number;
  Final_cart_products: {
    product_option: string;
    product_count: number;
  }[];
};

const FinalOrderItem = ({
  id,
  product_name,
  brand_name,
  image_url,
  free_delivery,
  selling_price,
  Final_cart_products,
}: FinalOrderItemPropsType) => {
  const deliveryFee = free_delivery ? 0 : 3000;
  return (
    <li className="final-order-item">
      <div className="item-header">
        <span>{brand_name}</span>
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
              <span>{product_name}</span>
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
