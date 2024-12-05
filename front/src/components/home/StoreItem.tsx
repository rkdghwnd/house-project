import React from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../../types/stateTypes';

const StoreItem = ({
  id,
  image_url,
  brand_name,
  product_name,
  review_avg,
  review_count,
  selling_price,
  original_price,
  free_delivery,
  is_special_price,
  is_departure_today,
}: ProductType) => {
  const productDiscount = Math.floor(
    ((original_price - selling_price) / original_price) * 100
  );

  return (
    <Link to={`/productions/${id}`}>
      <div className="store-item">
        <div className="store-item-image">
          <img src={image_url} loading="lazy" alt={product_name} />
        </div>
        <div className="store-item-info">
          <span>{brand_name}</span>
          <span className="store-item-info-title">{product_name}</span>
          <div className="store-item-info-review sm-only">
            <i className="ic-star is-active"></i>
            <span>{review_avg}</span>
            <span>리뷰 {review_count}</span>
          </div>
          <div className="store-item-info-discount">
            {productDiscount !== 0 && (
              <span className="rate">{productDiscount}%</span>
            )}
            <span className="percent">{selling_price?.toLocaleString()}</span>
          </div>
          <div className="store-item-info-review sm-hidden">
            <i className="ic-star is-active"></i>
            <span>{review_avg}</span>
            <span>리뷰</span>
            <span>{review_count}</span>
          </div>
          <div className="store-item-info-today-delivery">
            {is_departure_today && (
              <img
                src="/assets/images/fast-delivery-tag.png"
                alt="today_delivery"
              />
            )}
          </div>
          <div className="store-item-info-tag">
            {free_delivery && <button className="tag-gray">무료배송</button>}
            {is_special_price && <button className="tag-red">특가</button>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreItem;
