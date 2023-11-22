import React from 'react';
import { useSelector } from 'react-redux';

const ProductInfo = () => {
  const { productions } = useSelector((state) => state.productions);
  const reviewStartCount = Math.round(productions.review_avg);
  const discountRate = parseInt(
    ((productions.original_price - productions.selling_price) /
      productions.original_price) *
      100
  );

  return (
    <section className="product-info">
      <header className="product-info-header">
        <a className="info-brand" href="/">
          {productions.brand_name}
        </a>
        <h1 className="info-title">{productions.product_name}</h1>

        <div className="info-review">
          <div className="star-rating">
            <i
              className={`ic-star ${reviewStartCount >= 1 && 'is-active'}`}
            ></i>
            <i
              className={`ic-star ${reviewStartCount >= 2 && 'is-active'}`}
            ></i>
            <i
              className={`ic-star ${reviewStartCount >= 3 && 'is-active'}`}
            ></i>
            <i
              className={`ic-star ${reviewStartCount >= 4 && 'is-active'}`}
            ></i>
            <i
              className={`ic-star ${reviewStartCount >= 5 && 'is-active'}`}
            ></i>
          </div>
          <p>
            <strong>{productions.review_count}</strong>
            <span className="sm-hidden"> 개 리뷰</span>
          </p>
        </div>
      </header>
      {/* <!-- NOTE: 모바일용 가격 --> */}
      <div className="product-info-price sm-only">
        <div className="info-original-price">
          <div className="discount-rate">
            <span className="rate">{discountRate}</span>
            <span className="percent">%</span>
          </div>

          <div className="price-off">
            <strong className="amount">{productions.original_price}</strong>
            <span className="currency sm-hidden">원</span>
          </div>
        </div>

        <div className="info-sale-price">
          <div className="price-20">
            <strong className="amount">{productions.selling_price}</strong>
            <span className="currency">원</span>
          </div>

          {productions.is_special_price && (
            <strong className="tag-red"> 특가 </strong>
          )}
        </div>

        <p className="info-point">
          <strong aria-label="987 포인트" style={{ marginRight: 5 }}>
            987P
          </strong>
          {'적립해드립니다. (VIP 3배 혜택 적용됨)'}
        </p>
      </div>

      {/* <!-- NOTE: 태블릿 이후 가격 --> */}
      <div className="product-info-price sm-hidden">
        <div className="info-price-wrapper">
          <div className="discount-rate">
            <span className="rate">{discountRate}</span>
            <span className="percent">%</span>
          </div>

          <div className="info-price">
            <div className="price-off">
              <strong className="amount">
                {productions.original_price?.toLocaleString()}
              </strong>
              <span className="currency">원</span>
            </div>

            <div className="info-sale-price">
              <div className="price-32">
                <strong className="amount">
                  {productions.selling_price?.toLocaleString()}
                </strong>
                <span className="currency">원</span>
              </div>

              {productions.is_special_price && (
                <strong className="tag-red"> 특가 </strong>
              )}
            </div>
          </div>
        </div>

        <p className="info-point">
          <strong aria-label="980 포인트">980P</strong>
          적립해드립니다. (VIP 3배 혜택 적용됨)
        </p>
      </div>

      <div className="product-info-delivery">
        <span>일반택배</span>
        {productions.free_delivery && (
          <strong className="tag-gray"> 무료배송 </strong>
        )}
      </div>
    </section>
  );
};

export default ProductInfo;
