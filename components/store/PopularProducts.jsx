import React from 'react';
import { RiFilter2Fill } from 'react-icons/ri';
import StoreItem from './StoreItem';

const PopularProducts = () => {
  return (
    <section className="popular-products">
      <h3>인기 상품</h3>
      <div className="popular-products-header">
        <button className="btn-filter sm-only">
          <RiFilter2Fill className="ri-filter" />
        </button>
        <button className="btn-delivery btn-32 btn-secondary">
          배송<i className="ic-chevron"></i>
        </button>
        <button className="btn-arrange">
          인기순<i className="ic-caret"></i>
        </button>
      </div>
      <div className="popular-products-list">
        <div className="popular-products-list-row">
          <div className="popular-products-list-col">
            <StoreItem />
            <StoreItem />
          </div>
          <div className="popular-products-list-col">
            <StoreItem />
            <StoreItem />
          </div>
        </div>
        <div className="popular-products-list-row">
          <div className="popular-products-list-col">
            <StoreItem />
            <StoreItem />
          </div>
          <div className="popular-products-list-col">
            <StoreItem />
            <StoreItem />
          </div>
        </div>
        <div className="popular-products-list-row">
          <div className="popular-products-list-col">
            <StoreItem />
            <StoreItem />
          </div>
          <div className="popular-products-list-col">
            <StoreItem />
            <StoreItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
