import React from 'react';
import AppLayout from '../components/common/AppLayout';
import SubCategoryMenu from '../components/category/SubCategoryMenu';
import CategoryList from '../components/category/CategoryList';
import CategoryProductsList from '../components/category/CategoryProductsList';
import ProductsFilter from '../components/common/ProductsFilter';

const Category = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="row">
          <div className="col-md-3 sm-hidden">
            <CategoryList />
          </div>
          <div className="col-sm-4 col-md-9">
            <SubCategoryMenu />
            <div className="product-section-divider sm-only" aria-hidden></div>
            <ProductsFilter />
            <CategoryProductsList />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Category;
