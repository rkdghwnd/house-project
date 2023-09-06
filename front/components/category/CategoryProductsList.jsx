import React from 'react';
import StoreItem from '../home/StoreItem';

const CategoryProductsList = () => {
  return (
    <section className="category-products-list">
      <div className="category-products-list-header sm-hidden">
        <span>전체 361개</span>
      </div>
      <div className="category-products-list-main">
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </div>
    </section>
  );
};

export default CategoryProductsList;
